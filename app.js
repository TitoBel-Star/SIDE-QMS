// CONTROLADOR PRINCIPAL SIDE-QMS

document.addEventListener('DOMContentLoaded', () => {
  // 1. GESTIÓN DE ESTADO Y BASE DE DATOS LOCAL
  let qmsDb = JSON.parse(localStorage.getItem('SIDE_QMS_DATABASE_V5')) || QMS_DATA;
  if (qmsDb.poes.length < QMS_DATA.poes.length || qmsDb.its.length < QMS_DATA.its.length || qmsDb.registrosTemplates.length < QMS_DATA.registrosTemplates.length) {
    qmsDb = QMS_DATA;
    localStorage.setItem('SIDE_QMS_DATABASE_V5', JSON.stringify(qmsDb));
  }
  
  // Inicializar logs SIPOC simulados si la base de datos de logs está vacía
  if (!qmsDb.sipocLogs || qmsDb.sipocLogs.length === 0) {
    qmsDb.sipocLogs = [
      { id: Date.now() - 86400000 * 6, poeCode: "POE-ADM-01", timeS: 5, timeP: 20, timeO: 3, totalTime: 28, quality: 100, obs: "Conforme. Entrega a ETV a tiempo.", date: "27/7/2026 09:30" },
      { id: Date.now() - 86400000 * 5, poeCode: "POE-ADM-02", timeS: 10, timeP: 45, timeO: 5, totalTime: 60, quality: 90, obs: "Cierre mensual conciliado con desv. menor.", date: "28/7/2026 18:15" },
      { id: Date.now() - 86400000 * 4, poeCode: "POE-ADM-03", timeS: 4, timeP: 18, timeO: 2, totalTime: 24, quality: 100, obs: "Expediente digitalizado completo.", date: "29/7/2026 14:05" },
      { id: Date.now() - 86400000 * 3, poeCode: "POE-ADM-04", timeS: 5, timeP: 25, timeO: 5, totalTime: 35, quality: 100, obs: "Facturación masiva procesada sin rechazo XML.", date: "30/7/2026 10:00" },
      { id: Date.now() - 86400000 * 2.5, poeCode: "POE-COM-01", timeS: 2, timeP: 15, timeO: 1, totalTime: 18, quality: 100, obs: "Servicio rápido en POS. Todo conforme.", date: "30/7/2026 12:10" },
      { id: Date.now() - 86400000 * 2, poeCode: "POE-COM-02", timeS: 3, timeP: 12, timeO: 2, totalTime: 17, quality: 75, obs: "Faltante menor en arqueo. Caja arqueada.", date: "31/7/2026 15:40" },
      { id: Date.now() - 86400000 * 1.5, poeCode: "POE-COM-03", timeS: 5, timeP: 20, timeO: 5, totalTime: 30, quality: 100, obs: "Auditoría de precios conforme en góndolas.", date: "31/7/2026 19:20" },
      { id: Date.now() - 86400000 * 1, poeCode: "POE-COM-04", timeS: 10, timeP: 35, timeO: 5, totalTime: 50, quality: 90, obs: "Reclamo de cliente resuelto con devolución.", date: "01/8/2026 11:30" },
      { id: Date.now() - 43200000 * 1.5, poeCode: "POE-LOG-01", timeS: 15, timeP: 30, timeO: 10, totalTime: 55, quality: 100, obs: "Recepción de proveedor conforme con FEFO.", date: "01/8/2026 08:20" },
      { id: Date.now() - 43200000, poeCode: "POE-LOG-02", timeS: 8, timeP: 22, timeO: 4, totalTime: 34, quality: 90, obs: "Despacho a sucursal con desfase de 5 min.", date: "02/8/2026 10:15" },
      { id: Date.now() - 20000000, poeCode: "POE-LOG-03", timeS: 5, timeP: 15, timeO: 5, totalTime: 25, quality: 100, obs: "Inventario cíclico conforme sin diferencias.", date: "02/8/2026 12:45" },
      { id: Date.now() - 5000000, poeCode: "POE-LOG-04", timeS: 12, timeP: 40, timeO: 8, totalTime: 60, quality: 75, obs: "Devolución a proveedor por merma de frío.", date: "02/8/2026 14:50" }
    ];
    localStorage.setItem('SIDE_QMS_DATABASE_V5', JSON.stringify(qmsDb));
  }
  
  let filledRegistros = JSON.parse(localStorage.getItem('SIDE_QMS_FILLED_REGISTROS')) || [];
  let notifications = JSON.parse(localStorage.getItem('SIDE_QMS_NOTIFICATIONS')) || [
    { id: 1, title: "Alerta de Vencimiento", body: "El procedimiento POE-LOG-11 está próximo a vencer en 7 días.", time: "Hace 10 min", area: "LOG" },
    { id: 2, title: "No Conformidad Detectada", body: "Auditoría en POE-LOG-11 obtuvo 65%. Acción CAPA requerida.", time: "Hace 1 hora", area: "LOG" },
    { id: 3, title: "Actualización de Versión", body: "El procedimiento POE-ADM-01 ha sido actualizado a la Versión 1.2.", time: "Hace 1 día", area: "ADM" }
  ];
  let activeTab = 'director-dashboard';
  let activeArea = 'ADM'; // Para el dashboard del gerente

  // 1b. BASE DE DATOS DE USUARIOS Y ROLES POR GERENCIA
  const USERS_DB = {
    "admin": { name: "Administrador SGC", role: "Director de Calidad", avatar: "AD", allowedArea: "ALL", password: "admin123" },
    "gaf": { name: "Responsable GAF (Adm.)", role: "Gobernanza y Finanzas", avatar: "GF", allowedArea: "ADM", password: "gaf123" },
    "com": { name: "Responsable COM (Com.)", role: "Ventas y Mercadeo", avatar: "VM", allowedArea: "COM", password: "com123" },
    "log": { name: "Responsable LOG (Log.)", role: "Operaciones y Logística", avatar: "OL", allowedArea: "LOG", password: "log123" }
  };

  // 1c. MÉTRICAS DE USO E INTERACCIONES POR POE
  let poeUsage = JSON.parse(localStorage.getItem('SIDE_QMS_POE_USAGE')) || {};
  
  function initPoeUsage() {
    let updated = false;
    qmsDb.poes.forEach(p => {
      if (poeUsage[p.code] === undefined) {
        poeUsage[p.code] = 0;
        updated = true;
      }
    });
    if (updated) {
      localStorage.setItem('SIDE_QMS_POE_USAGE', JSON.stringify(poeUsage));
    }
  }
  
  function logPoeInteraction(poeCode) {
    if (!poeCode) return;
    initPoeUsage();
    if (poeUsage[poeCode] !== undefined) {
      poeUsage[poeCode]++;
    } else {
      poeUsage[poeCode] = 1;
    }
    localStorage.setItem('SIDE_QMS_POE_USAGE', JSON.stringify(poeUsage));
    renderPoeUsageTable();
  }
  
  function renderPoeUsageTable() {
    const tbody = document.getElementById('poe-usage-table-body');
    const totalBadge = document.getElementById('poe-usage-total-badge');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    initPoeUsage();
    
    const areaFilter = document.getElementById('poe-usage-area-filter')?.value || 'ALL';
    const filteredPoesList = qmsDb.poes.filter(p => {
      if (areaFilter !== 'ALL' && p.area !== areaFilter) return false;
      return true;
    });
    
    const sortedPoes = [...filteredPoesList].sort((a, b) => {
      const usageA = poeUsage[a.code] || 0;
      const usageB = poeUsage[b.code] || 0;
      return usageB - usageA;
    });
    
    let totalInteractions = 0;
    sortedPoes.forEach(p => {
      const count = poeUsage[p.code] || 0;
      totalInteractions += count;
      
      let statusBadgeClass = 'bg-secondary';
      let statusLabel = 'No Utilizado';
      
      if (count > 3) {
        statusBadgeClass = 'bg-success';
        statusLabel = 'Activo / Frecuente';
      } else if (count > 0) {
        statusBadgeClass = 'bg-warning text-dark';
        statusLabel = 'Baja Actividad';
      }
      
      const tr = document.createElement('tr');
      tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
      tr.innerHTML = `
        <td style="padding: 8px 10px; font-weight:600; color: #60a5fa;">[${p.area}]</td>
        <td style="padding: 8px 10px; font-family: monospace; font-weight:700;">${p.code}</td>
        <td style="padding: 8px 10px;">${p.name}</td>
        <td style="padding: 8px 10px; text-align: right; font-weight:700; color:#3b82f6;">${count}</td>
        <td style="padding: 8px 10px; text-align: right;">
          <span class="badge ${statusBadgeClass}" style="font-size:0.65rem; padding: 2px 6px;">${statusLabel}</span>
        </td>
      `;
      tbody.appendChild(tr);
    });
    
    if (totalBadge) {
      totalBadge.textContent = `Interacciones Totales: ${totalInteractions}`;
    }
  }

  function applyUserRestrictions() {
    const userSession = JSON.parse(localStorage.getItem('SIDE_QMS_USER'));
    if (!userSession) {
      document.getElementById('login-overlay').style.display = 'flex';
      return;
    }
    
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('user-profile-name').textContent = userSession.name;
    document.getElementById('user-profile-role').textContent = userSession.role;
    document.getElementById('user-avatar-text').textContent = userSession.avatar;
    
    const matrixFilter = document.getElementById('matrix-area-filter');
    const traceFilter = document.getElementById('trace-area-filter');
    
    if (userSession.allowedArea !== 'ALL') {
      if (matrixFilter) {
        matrixFilter.value = userSession.allowedArea;
        matrixFilter.disabled = true;
      }
      if (traceFilter) {
        traceFilter.value = userSession.allowedArea;
        traceFilter.disabled = true;
      }
      
      activeArea = userSession.allowedArea;
      
      const areaTabs = document.querySelectorAll('.area-tab-btn');
      areaTabs.forEach(btn => {
        const tabArea = btn.getAttribute('data-area');
        if (tabArea === userSession.allowedArea) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    } else {
      if (matrixFilter) {
        matrixFilter.disabled = false;
      }
      if (traceFilter) {
        traceFilter.disabled = false;
      }
    }
  }
  
  // Guardar en localStorage
  function saveState() {
    localStorage.setItem('SIDE_QMS_DATABASE_V5', JSON.stringify(qmsDb));
    localStorage.setItem('SIDE_QMS_FILLED_REGISTROS', JSON.stringify(filledRegistros));
    localStorage.setItem('SIDE_QMS_NOTIFICATIONS', JSON.stringify(notifications));
    updateBadges();
  }

  // Actualizar contadores globales en la interfaz
  function updateBadges() {
    const openCAPA = qmsDb.audits.filter(a => a.nonConformities && a.status !== 'Cerrada').length;
    document.querySelectorAll('.id-nc-count').forEach(el => el.textContent = openCAPA);
    document.getElementById('notif-badge').textContent = notifications.length;
  }

  // 2. NAVEGACIÓN Y TABS
  const menuButtons = document.querySelectorAll('.sidebar-menu .menu-item');
  const tabSections = document.querySelectorAll('.content-body .tab-content');
  const pageTitle = document.getElementById('page-title');
  const pageSubtitle = document.getElementById('page-subtitle');

  menuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      menuButtons.forEach(b => b.classList.remove('active'));
      tabSections.forEach(s => s.classList.remove('active'));
      
      btn.classList.add('active');
      activeTab = btn.getAttribute('data-tab');
      
      const section = document.getElementById(activeTab);
      if (section) section.classList.add('active');
      
      // Actualizar Encabezado
      const labels = {
        'director-dashboard': { title: 'Dirección General', subtitle: 'Análisis en tiempo real de la Arquitectura Documental y el SGC' },
        'manager-dashboard': { title: 'Gestión por Área', subtitle: 'Monitoreo de procedimientos, instructivos y registros asignados' },
        'doc-explorer': { title: 'Explorador Documental', subtitle: 'Arquitectura documental ISO 9001:2015 en cinco niveles' },
        'trace-matrix': { title: 'Trazabilidad Total', subtitle: 'Mapeo de conexiones desde macroprocesos hasta acciones correctivas' },
        'audits-panel': { title: 'Auditorías de Calidad', subtitle: 'Registro e inicio de auditorías internas del SGC' },
        'capa-panel': { title: 'Acciones CAPA', subtitle: 'Planificación de acciones correctivas y preventivas del sistema' },
        'risks-kpis': { title: 'Riesgos e Indicadores', subtitle: 'Mapa térmico de riesgos y cumplimiento de KPIs' },
        'ai-hub': { title: 'Centro de Inteligencia Artificial', subtitle: 'Diagnósticos automatizados y resúmenes ejecutivos diarios' },
        'expiry-config': { title: 'Alertas y Vencimientos', subtitle: 'Simulador de vencimiento documental y notificaciones multicanal' },
        'sgc-matrix': { title: 'Matriz SGC 360°', subtitle: 'Matriz de control de macroprocesos, procedimientos, instructivos y registros' },
        'help-center': { title: 'Manual y Guías de Simulación', subtitle: 'Documentación oficial y simulador interactivo del SGC' }
      };
      
      pageTitle.textContent = labels[activeTab].title;
      pageSubtitle.textContent = labels[activeTab].subtitle;
      
      // Renderizar vista correspondiente
      renderCurrentTab();
    });
  });

  function renderCurrentTab() {
    if (activeTab === 'director-dashboard') renderDirectorDashboard();
    else if (activeTab === 'manager-dashboard') renderManagerDashboard();
    else if (activeTab === 'doc-explorer') renderExplorer();
    else if (activeTab === 'trace-matrix') renderTraceabilitySelector();
    else if (activeTab === 'audits-panel') renderAudits();
    else if (activeTab === 'capa-panel') renderCAPA();
    else if (activeTab === 'risks-kpis') renderRisksKPIs();
    else if (activeTab === 'ai-hub') generateAIReportWidget();
    else if (activeTab === 'expiry-config') renderExpiryTable();
    else if (activeTab === 'process-mining') {
      const select = document.getElementById('mining-poe-select');
      if (select) renderProcessMining(select.value);
    }
    else if (activeTab === 'sgc-matrix') {
      renderSgcMatrix();
    }
  }

  // ROLES DE SEGURIDAD SIMULADOS
  const roleSelect = document.getElementById('role-select');
  roleSelect.addEventListener('change', () => {
    const role = roleSelect.value;
    const nameEl = document.getElementById('user-profile-name');
    const roleEl = document.getElementById('user-profile-role');
    const avatarEl = document.getElementById('user-avatar-text');
    
    const profiles = {
      Director: { name: "Ing. Emilio R.", role: "Director General", av: "DG" },
      Gerente: { name: "Lic. Laura G.", role: "Gerente Comercial", av: "GC" },
      Supervisor: { name: "Tgo. Alberto M.", role: "Supervisor SGC", av: "SV" },
      Auditor: { name: "Ing. Carlos R.", role: "Auditor de Calidad", av: "AC" },
      Empleado: { name: "Juan Pérez", role: "Operador de CD", av: "OP" },
      Admin: { name: "Admin SIDE", role: "Administrador", av: "AD" }
    };
    
    nameEl.textContent = profiles[role].name;
    roleEl.textContent = profiles[role].role;
    avatarEl.textContent = profiles[role].av;
    
    // Aplicar filtros visuales de seguridad según rol
    applyRoleSecurity(role);
    renderCurrentTab();
  });

  function applyRoleSecurity(role) {
    // Si es Empleado, ocultar auditoría, capa, riesgos
    const restrictedTabs = {
      Empleado: ['director-dashboard', 'capa-panel', 'audits-panel', 'ai-hub', 'expiry-config'],
      Supervisor: ['director-dashboard', 'ai-hub'],
      Auditor: ['expiry-config']
    };
    
    const restrictions = restrictedTabs[role] || [];
    menuButtons.forEach(btn => {
      const tab = btn.getAttribute('data-tab');
      if (restrictions.includes(tab)) {
        btn.style.display = 'none';
      } else {
        btn.style.display = 'flex';
      }
    });
    
    // Si el tab activo está restringido, mover a uno permitido
    if (restrictions.includes(activeTab)) {
      const firstAllowed = Array.from(menuButtons).find(btn => btn.style.style !== 'none' && btn.style.display !== 'none');
      if (firstAllowed) firstAllowed.click();
    }
  }

  // 3. VISTA: DIRECCIÓN GENERAL
  function renderDirectorDashboard() {
    // Totales
    const totalMacro = qmsDb.macroprocesses.length;
    const totalPoe = qmsDb.poes.length;
    const totalIt = qmsDb.its.length;
    const totalReg = qmsDb.registrosTemplates.length;
    
    document.getElementById('dir-doc-count').textContent = `${totalMacro} MP / ${totalPoe} POE / ${totalIt} IT`;
    
    // Cumplimiento general promedio
    const totalCompliance = qmsDb.poes.reduce((sum, poe) => sum + poe.complianceRate, 0);
    const avgCompliance = (totalCompliance / totalPoe).toFixed(1);
    
    document.getElementById('dir-compliance-rate').textContent = `${avgCompliance}%`;
    document.getElementById('dir-compliance-bar').style.width = `${avgCompliance}%`;
    
    // Auditorías cerradas e incidencias
    const totalAudits = qmsDb.audits.length;
    const activeNC = qmsDb.audits.filter(a => a.nonConformities && a.status !== 'Cerrada').length;
    
    document.getElementById('dir-active-audits').textContent = totalAudits;
    document.getElementById('dir-nc-count').textContent = `${activeNC} NC Activa(s)`;
    
    const warningCAPA = document.getElementById('dir-capa-warning');
    if (activeNC > 0) {
      warningCAPA.innerHTML = `⚠️ ${activeNC} Acciones CAPA en Seguimiento`;
      warningCAPA.className = 'stat-footer text-danger';
    } else {
      warningCAPA.innerHTML = `🟢 Todo en orden en CAPA`;
      warningCAPA.className = 'stat-footer text-success';
    }
    
    // Riesgos altos sin mitigar
    const highRisks = qmsDb.poes.reduce((sum, poe) => {
      const activeHigh = poe.risks.filter(r => r.level === 'Alto' && r.status !== 'Mitigado').length;
      return sum + activeHigh;
    }, 0);
    document.getElementById('dir-high-risks').textContent = highRisks;
    
    // Generar semáforos
    const lightContainer = document.getElementById('traffic-light-container');
    lightContainer.innerHTML = '';
    
    qmsDb.poes.slice(0, 8).forEach(poe => {
      let lightClass = 'green';
      let lightLabel = '🟢';
      
      const hasNC = qmsDb.audits.some(a => a.poeCode === poe.code && a.nonConformities && a.status !== 'Cerrada');
      
      if (poe.status === 'Obsoleto') {
        lightClass = 'black';
        lightLabel = '⚫';
      } else if (poe.complianceRate < 85 || hasNC) {
        lightClass = 'red';
        lightLabel = '🔴';
      } else if (poe.complianceRate < 95) {
        lightClass = 'yellow';
        lightLabel = '🟡';
      }
      
      const row = document.createElement('div');
      row.className = 'semaphore-item';
      row.innerHTML = `
        <div class="semaphore-info">
          <span class="semaphore-code">${poe.code} | Ver ${poe.version}</span>
          <span class="semaphore-name">${poe.name}</span>
        </div>
        <div class="semaphore-light ${lightClass}" title="Rendimiento: ${poe.complianceRate}%">${lightLabel}</div>
      `;
      lightContainer.appendChild(row);
    });

    // Renderizar Últimas Acciones CAPA Abreviadas
    const recentCapaTbody = document.getElementById('dir-recent-capa-tbody');
    if (recentCapaTbody) {
      recentCapaTbody.innerHTML = '';
      const activeCAPAs = qmsDb.audits.filter(a => a.nonConformities);
      
      if (activeCAPAs.length === 0) {
        recentCapaTbody.innerHTML = `<tr><td colspan="3" class="text-center text-muted p-3">No hay planes CAPA activos o pendientes.</td></tr>`;
      } else {
        // Ordenar por fecha descendente y tomar las últimas 4
        activeCAPAs.slice().sort((a,b) => new Date(b.date) - new Date(a.date)).slice(0, 4).forEach(c => {
          const tr = document.createElement('tr');
          const statusClass = c.status === 'Cerrada' ? 'bg-success' : 'bg-warning';
          tr.innerHTML = `
            <td class="font-mono"><strong>${c.poeCode}</strong></td>
            <td>${c.ncDetails ? c.ncDetails.owner : 'N/A'}</td>
            <td><span class="badge ${statusClass}">${c.status}</span></td>
          `;
          recentCapaTbody.appendChild(tr);
        });
      }
    }

    // Renderizar Récord de Operación Abreviado (top 5 POEs con más interacciones)
    const miniUsageTbody = document.getElementById('dir-mini-usage-tbody');
    if (miniUsageTbody) {
      miniUsageTbody.innerHTML = '';
      
      // Ordenar todos los POEs de qmsDb por su uso en poeUsage
      const sortedPoes = qmsDb.poes.slice().sort((a, b) => {
        const usageA = poeUsage[a.code] || 0;
        const usageB = poeUsage[b.code] || 0;
        return usageB - usageA;
      }).slice(0, 5);
      
      sortedPoes.forEach(p => {
        const count = poeUsage[p.code] || 0;
        const tr = document.createElement('tr');
        const statusLabel = count > 15 ? 'Activo 🟢' : count > 0 ? 'Frecuente 🟡' : 'No Utilizado ⚪';
        tr.innerHTML = `
          <td><span class="badge bg-secondary">${p.area}</span></td>
          <td class="font-mono" title="${p.name}"><strong>${p.code}</strong> - ${p.name.substring(0, 25)}...</td>
          <td style="text-align: right; font-weight: 600;">${count}</td>
          <td style="text-align: right; white-space: nowrap;">${statusLabel}</td>
        `;
        miniUsageTbody.appendChild(tr);
      });
    }
  }

  // 4. VISTA: GESTIÓN POR ÁREA (GERENTE)
  const areaTabs = document.querySelectorAll('.area-tab-btn');
  areaTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetArea = btn.getAttribute('data-area');
      const currentUser = JSON.parse(localStorage.getItem('SIDE_QMS_USER'));
      if (currentUser && currentUser.allowedArea !== 'ALL' && currentUser.allowedArea !== targetArea) {
        alert(`Acceso Denegado: Su usuario no tiene permisos para el área de ${targetArea === 'ADM' ? 'Administración y Finanzas' : targetArea === 'COM' ? 'Comercialización' : 'Logística y Compras'}.`);
        return;
      }
      areaTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeArea = targetArea;
      
      const searchBox = document.getElementById('mgr-poe-search');
      if (searchBox) searchBox.value = '';
      
      renderManagerDashboard();
    });
  });

  const mgrSearchInput = document.getElementById('mgr-poe-search');
  if (mgrSearchInput) {
    mgrSearchInput.addEventListener('input', () => {
      renderManagerDashboard();
    });
  }

  const btnResetDb = document.getElementById('btn-reset-qms-db');
  if (btnResetDb) {
    btnResetDb.addEventListener('click', () => {
      const confirmReset = confirm("¿Está seguro de que desea restablecer el SGC?\n\nEsto eliminará de forma permanente todos los registros operativos, auditorías nuevas, planes CAPA, historial de minería de procesos y contadores de uso. Se restablecerá el sistema a un estado limpio sin alertas.");
      if (confirmReset) {
        // En lugar de eliminar la clave y dejar que cargue QMS_DATA con auditorías e incidentes predefinidos de fábrica,
        // creamos una versión limpia clonando QMS_DATA pero vaciando la lista de auditorías.
        const cleanDb = JSON.parse(JSON.stringify(QMS_DATA));
        cleanDb.audits = [];
        localStorage.setItem('SIDE_QMS_DATABASE_V5', JSON.stringify(cleanDb));
        
        localStorage.removeItem('SIDE_QMS_FILLED_REGISTROS');
        localStorage.removeItem('SIDE_QMS_MINING_LOGS');
        localStorage.removeItem('SIDE_QMS_POE_USAGE');
        
        // Inicializar notificaciones como un array vacío para evitar que cargue las 3 notificaciones por defecto
        localStorage.setItem('SIDE_QMS_NOTIFICATIONS', JSON.stringify([]));
        
        alert("Sistema restablecido con éxito. La página se recargará.");
        window.location.reload();
      }
    });
  }

  function renderManagerDashboard() {
    const areaNameMap = { ADM: "Administración y Finanzas", COM: "Comercialización", LOG: "Logística y Compras" };
    const areaIconMap = {
      ADM: `<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
      COM: `<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
      LOG: `<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`
    };
    
    document.getElementById('mgr-area-name').textContent = areaNameMap[activeArea];
    document.getElementById('mgr-area-icon').innerHTML = areaIconMap[activeArea];
    
    // Filtrar POEs del área
    const areaPoes = qmsDb.poes.filter(poe => poe.area === activeArea);
    const areaPoeCodes = areaPoes.map(p => p.code);
    
    // Cuentas de área
    const totalPoe = areaPoes.length;
    const totalIt = qmsDb.its.filter(it => areaPoeCodes.includes(it.poeCode)).length;
    const totalReg = qmsDb.registrosTemplates.filter(reg => reg.area === activeArea).length;
    const filledRegCount = filledRegistros.filter(reg => reg.area === activeArea).length;
    
    document.getElementById('mgr-poe-count').textContent = totalPoe;
    document.getElementById('mgr-it-count').textContent = `${totalIt} Instructivos (IT) vinculados`;
    document.getElementById('mgr-reg-count').textContent = totalReg;
    document.getElementById('mgr-filled-reg-count').textContent = `${filledRegCount} evidencias guardadas`;
    
    // Cumplimiento del área
    const areaCompliance = areaPoes.reduce((sum, poe) => sum + poe.complianceRate, 0);
    const avgAreaCompliance = totalPoe > 0 ? (areaCompliance / totalPoe).toFixed(1) : 0;
    
    document.getElementById('mgr-compliance').textContent = `${avgAreaCompliance}%`;
    document.getElementById('mgr-compliance-bar').style.width = `${avgAreaCompliance}%`;
    
    // NC y auditorías programadas del área
    const areaAudits = qmsDb.audits.filter(aud => areaPoeCodes.includes(aud.poeCode));
    const areaNC = areaAudits.filter(a => a.nonConformities && a.status !== 'Cerrada').length;
    
    document.getElementById('mgr-nc-count').textContent = `${areaNC} CAPA`;
    
    // Población de tabla de procedimientos
    const tableBody = document.getElementById('mgr-poe-table-body');
    tableBody.innerHTML = '';
    
    const searchVal = document.getElementById('mgr-poe-search').value.toLowerCase();
    
    areaPoes.forEach(poe => {
      if (searchVal && !poe.name.toLowerCase().includes(searchVal) && !poe.code.toLowerCase().includes(searchVal)) {
        return;
      }
      
      const tr = document.createElement('tr');
      
      // Selector de estado
      let selectHtml = `
        <select class="input-select status-select-mini" data-code="${poe.code}">
          <option value="Borrador" ${poe.status === 'Borrador' ? 'selected' : ''}>Borrador</option>
          <option value="Revisión" ${poe.status === 'Revisión' ? 'selected' : ''}>Revisión</option>
          <option value="Aprobación" ${poe.status === 'Aprobación' ? 'selected' : ''}>Aprobación</option>
          <option value="Publicado" ${poe.status === 'Publicado' ? 'selected' : ''}>Publicado</option>
          <option value="Obsoleto" ${poe.status === 'Obsoleto' ? 'selected' : ''}>Obsoleto</option>
        </select>
      `;
      
      tr.innerHTML = `
        <td class="font-mono text-sm">${poe.code}</td>
        <td><strong>${poe.name}</strong></td>
        <td>${selectHtml}</td>
        <td>v${poe.version}</td>
        <td>${poe.owner}</td>
        <td>
          <div class="stat-progress" style="width: 80px">
            <span class="text-xs font-bold">${poe.complianceRate}%</span>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill ${poe.complianceRate >= 95 ? 'bg-success' : poe.complianceRate >= 80 ? 'bg-warning' : 'bg-danger'}" style="width: ${poe.complianceRate}%"></div>
            </div>
          </div>
        </td>
        <td>
          <div class="input-addon-group">
            <button class="btn btn-secondary btn-xs btn-view-doc" data-code="${poe.code}">Ficha</button>
            <button class="btn btn-primary btn-xs btn-audit-doc" data-code="${poe.code}">Auditar</button>
          </div>
        </td>
      `;
      tableBody.appendChild(tr);
    });
    
    // Cambios de estado inmutables (Versionamiento)
    document.querySelectorAll('.status-select-mini').forEach(select => {
      select.addEventListener('change', (e) => {
        const poeCode = e.target.getAttribute('data-code');
        const newStatus = e.target.value;
        changeDocStatus(poeCode, newStatus);
      });
    });

    // Eventos de botones
    document.querySelectorAll('.btn-view-doc').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const code = e.target.getAttribute('data-code');
        openDocDetailsModal(code, 'POE');
      });
    });
    document.querySelectorAll('.btn-audit-doc').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const code = e.target.getAttribute('data-code');
        openAuditForm(code);
      });
    });

    // Renderizar métricas SIPOC del área
    const processSelect = document.getElementById('sipoc-process-select');
    if (processSelect) {
      processSelect.innerHTML = areaPoes.map(poe => `<option value="${poe.code}">${poe.code}</option>`).join('');
    }
    
    // Forzar reset de alcance si cambia de gerencia para evitar estados inconsistentes
    const scopeFilter = document.getElementById('sipoc-scope-filter');
    if (scopeFilter && scopeFilter.value === 'process') {
      // mantener
    } else if (scopeFilter) {
      scopeFilter.value = 'area';
    }
    
    updateSipocDashboardStats();

    // Alertas por área
    renderAreaAlerts();
  }

  function renderAreaAlerts() {
    const alertsContainer = document.getElementById('mgr-alerts-list');
    alertsContainer.innerHTML = '';
    
    const areaAlerts = notifications.filter(n => n.area === activeArea);
    
    if (areaAlerts.length === 0) {
      alertsContainer.innerHTML = '<div class="text-muted text-sm text-center">No hay alertas críticas en esta gerencia.</div>';
      return;
    }
    
    areaAlerts.forEach(al => {
      const card = document.createElement('div');
      card.className = 'semaphore-item';
      card.style.borderLeft = `4px solid ${al.title.includes('Vencimiento') ? 'var(--color-warning)' : 'var(--color-danger)'}`;
      card.innerHTML = `
        <div class="semaphore-info">
          <span class="semaphore-name" style="font-size:0.85rem">${al.title}</span>
          <span class="text-xs text-muted">${al.body}</span>
        </div>
        <span class="text-xs text-muted">${al.time}</span>
      `;
      alertsContainer.appendChild(card);
    });
  }

  function changeDocStatus(poeCode, newStatus) {
    const poe = qmsDb.poes.find(p => p.code === poeCode);
    if (!poe) return;
    
    const oldStatus = poe.status;
    poe.status = newStatus;
    
    // Generar nueva versión si pasa a publicado
    if (newStatus === 'Publicado') {
      const parts = poe.version.split('.');
      let major = parseInt(parts[0]);
      let minor = parseInt(parts[1]);
      
      if (oldStatus === 'Revisión' || oldStatus === 'Aprobación') {
        minor += 1;
      } else {
        major += 1;
        minor = 0;
      }
      poe.version = `${major}.${minor}`;
      
      // Registrar notificación
      notifications.unshift({
        id: Date.now(),
        title: "Actualización de Versión",
        body: `El procedimiento ${poe.code} ha sido publicado en la Versión ${poe.version}.`,
        time: "Hace 1 seg",
        area: poe.area
      });
    }
    
    saveState();
    renderManagerDashboard();
    addNotificationItem({
      title: "Estado Modificado",
      body: `El documento ${poe.code} cambió de ${oldStatus} a ${newStatus}.`
    });
  }

  // 5. EXPLORADOR DOCUMENTAL
  function renderExplorer() {
    const treeContainer = document.getElementById('explorer-document-tree');
    treeContainer.innerHTML = '';
    
    const searchInput = document.getElementById('explorer-global-search');
    const searchVal = searchInput ? searchInput.value.toLowerCase() : '';
    
    // Agrupar por áreas
    Object.keys(qmsDb.areas).forEach(areaKey => {
      // Filtrar macroprocesos de esta área
      const areaMacros = qmsDb.macroprocesses.filter(mp => mp.area === areaKey);
      
      let areaHasMatch = false;
      const mpNodesToRender = [];
      
      areaMacros.forEach(mp => {
        const mpPoes = qmsDb.poes.filter(poe => poe.macroCode === mp.code);
        let mpHasMatch = false;
        const poeNodesToRender = [];
        
        mpPoes.forEach(poe => {
          const poeIts = qmsDb.its.filter(it => it.poeCode === poe.code);
          const poeRegs = qmsDb.registrosTemplates.filter(reg => reg.process === poe.code);
          
          let poeHasMatch = false;
          const itNodesToRender = [];
          const regNodesToRender = [];
          
          const matchPoe = poe.code.toLowerCase().includes(searchVal) || poe.name.toLowerCase().includes(searchVal);
          
          // Filtrar registros
          poeRegs.forEach(reg => {
            const match = reg.code.toLowerCase().includes(searchVal) || reg.name.toLowerCase().includes(searchVal);
            if (!searchVal || match || matchPoe) {
              poeHasMatch = true;
              regNodesToRender.push(reg);
            }
          });
          
          // Filtrar ITs
          poeIts.forEach(it => {
            const matchIt = it.code.toLowerCase().includes(searchVal) || it.name.toLowerCase().includes(searchVal);
            const matchAnyReg = regNodesToRender.length > 0;
            
            if (!searchVal || matchIt || matchPoe || matchAnyReg) {
              poeHasMatch = true;
              itNodesToRender.push(it);
            }
          });
          
          const poeMatchSelf = matchPoe;
          if (!searchVal || poeMatchSelf || poeHasMatch) {
            mpHasMatch = true;
            poeNodesToRender.push({ poe, its: itNodesToRender, regs: regNodesToRender });
          }
        });
        
        const mpMatchSelf = mp.name.toLowerCase().includes(searchVal);
        if (!searchVal || mpMatchSelf || mpHasMatch) {
          areaHasMatch = true;
          mpNodesToRender.push({ mp, poes: poeNodesToRender });
        }
      });
      
      if (searchVal && !areaHasMatch && !qmsDb.areas[areaKey].name.toLowerCase().includes(searchVal)) {
        return;
      }
      
      // Renderizar el área
      const areaNode = document.createElement('div');
      areaNode.className = 'tree-node';
      
      const areaHeader = document.createElement('div');
      areaHeader.className = 'tree-item font-bold';
      areaHeader.innerHTML = `
        <span class="tree-toggle-icon ${searchVal ? 'expanded' : ''}">${searchVal ? '▾' : '▸'}</span>
        <span>${qmsDb.areas[areaKey].name}</span>
      `;
      areaNode.appendChild(areaHeader);
      
      const areaContent = document.createElement('div');
      areaContent.className = 'tree-children';
      areaContent.style.display = searchVal ? 'block' : 'none';
      
      mpNodesToRender.forEach(({ mp, poes }) => {
        const mpNode = document.createElement('div');
        mpNode.className = 'tree-node';
        
        const mpHeader = document.createElement('div');
        mpHeader.className = 'tree-item text-secondary';
        mpHeader.innerHTML = `
          <span class="tree-toggle-icon">${searchVal ? '▾' : '▸'}</span>
          <span class="font-mono text-xs">[MP]</span>
          <span>${mp.name}</span>
        `;
        mpHeader.addEventListener('click', (e) => {
          e.stopPropagation();
          selectTreeNode(mpHeader, () => renderMpDetail(mp));
          toggleNode(mpHeader, mpContent);
        });
        mpNode.appendChild(mpHeader);
        
        const mpContent = document.createElement('div');
        mpContent.className = 'tree-children';
        mpContent.style.display = searchVal ? 'block' : 'none';
        
        poes.forEach(({ poe, its, regs }) => {
          const poeNode = document.createElement('div');
          poeNode.className = 'tree-node';
          
          const poeHeader = document.createElement('div');
          poeHeader.className = 'tree-item';
          poeHeader.innerHTML = `
            <span class="tree-toggle-icon">${searchVal ? '▾' : '▸'}</span>
            <span class="font-mono text-xs">[POE]</span>
            <span>${poe.code}</span>
          `;
          poeHeader.addEventListener('click', (e) => {
            e.stopPropagation();
            selectTreeNode(poeHeader, () => renderPoeDetail(poe));
            toggleNode(poeHeader, poeContent);
          });
          poeNode.appendChild(poeHeader);
          
          const poeContent = document.createElement('div');
          poeContent.className = 'tree-children';
          poeContent.style.display = searchVal ? 'block' : 'none';
          
          // Renderizar ITs
          its.forEach(it => {
            const itNode = document.createElement('div');
            itNode.className = 'tree-node';
            
            const itHeader = document.createElement('div');
            itHeader.className = 'tree-item';
            itHeader.innerHTML = `
              <span class="tree-toggle-icon">${searchVal ? '▾' : '▸'}</span>
              <span class="font-mono text-xs">[IT]</span>
              <span>${it.code}</span>
            `;
            itHeader.addEventListener('click', (e) => {
              e.stopPropagation();
              selectTreeNode(itHeader, () => renderItDetail(it));
              toggleNode(itHeader, itContent);
            });
            itNode.appendChild(itHeader);
            
            const itContent = document.createElement('div');
            itContent.className = 'tree-children';
            itContent.style.display = searchVal ? 'block' : 'none';
            
            // Renderizar Registros asociados
            const itRegs = regs.filter(reg => reg.process === poe.code);
            itRegs.forEach(reg => {
              const regItem = document.createElement('div');
              regItem.className = 'tree-item';
              regItem.innerHTML = `
                <span style="width:14px"></span>
                <span class="font-mono text-xs">[REG]</span>
                <span>${reg.code} - ${reg.name}</span>
              `;
              regItem.addEventListener('click', (e) => {
                e.stopPropagation();
                selectTreeNode(regItem, () => renderRegDetail(reg));
              });
              itContent.appendChild(regItem);
            });
            
            itNode.appendChild(itContent);
            poeContent.appendChild(itNode);
          });
          
          poeNode.appendChild(poeContent);
          mpContent.appendChild(poeNode);
        });
        
        mpNode.appendChild(mpContent);
        areaContent.appendChild(mpNode);
      });
      
      areaHeader.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleNode(areaHeader, areaContent);
      });
      
      areaNode.appendChild(areaHeader);
      areaNode.appendChild(areaContent);
      treeContainer.appendChild(areaNode);
    });
  }

  function selectTreeNode(element, callback) {
    document.querySelectorAll('.tree-item').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    callback();
  }

  function toggleNode(header, content) {
    const arrow = header.querySelector('.tree-toggle-icon');
    if (content.style.display === 'none') {
      content.style.display = 'block';
      if (arrow) arrow.classList.add('expanded');
    } else {
      content.style.display = 'none';
      if (arrow) arrow.classList.remove('expanded');
    }
  }

  // DETALLE MACROPROCESO
  function renderMpDetail(mp) {
    const detailPane = document.getElementById('explorer-detail-pane');
    detailPane.innerHTML = `
      <div class="doc-detail-header">
        <span class="text-xs font-mono text-muted">Nivel 1 Documental: Macroproceso</span>
        <h2>${mp.name}</h2>
        <div class="doc-tag-row">
          <span class="doc-tag">Cód: ${mp.code}</span>
          <span class="doc-tag">Tipo: ${mp.type}</span>
          <span class="doc-tag">Área: ${mp.area}</span>
        </div>
      </div>
      <div class="doc-detail-sections">
        <div class="doc-section">
          <h4>Política de Calidad Estratégica</h4>
          <p>${mp.policy}</p>
        </div>
        <div class="doc-section">
          <h4>Enfoque de Control ISO 9001:2015</h4>
          <p>${mp.isoFocus}</p>
        </div>
      </div>
    `;
  }

  // DETALLE POE (PROCEDIMIENTO)
  function renderPoeDetail(poe) {
    logPoeInteraction(poe.code);
    const detailPane = document.getElementById('explorer-detail-pane');
    
    // Obtener riesgos
    let riskRows = poe.risks.map(r => `
      <tr>
        <td><strong>${r.risk}</strong></td>
        <td>${r.probability}</td>
        <td>${r.impact}</td>
        <td><span class="badge ${r.level === 'Alto' ? 'badge-danger' : 'badge-outline'}">${r.level}</span></td>
        <td>${r.control}</td>
        <td>${r.mitigation}</td>
        <td><span class="text-xs">${r.status}</span></td>
      </tr>
    `).join('');
    
    // Obtener KPIs
    let kpiRows = poe.kpis.map(k => `
      <div class="kpi-row-item">
        <div class="kpi-row-header">
          <span class="kpi-row-title">${k.name}</span>
          <span class="kpi-trend text-xs">Meta: ${k.target}</span>
        </div>
        <div class="stat-progress">
          <div class="progress-bar-bg">
            <div class="progress-bar-fill ${k.status === 'success' ? 'bg-success' : 'bg-warning'}" style="width: 80%"></div>
          </div>
        </div>
        <div class="kpi-row-body">
          <span>Actual: <strong>${k.value}</strong></span>
          <span class="text-success">Tendencia: ${k.trend === 'stable' ? 'Stable ➡️' : 'Upward 📈'}</span>
        </div>
      </div>
    `).join('');

    detailPane.innerHTML = `
      <div class="doc-detail-header">
        <div style="display:flex; justify-content:space-between">
          <div>
            <span class="text-xs font-mono text-muted">Nivel 2 Documental: Procedimiento</span>
            <h2>${poe.name}</h2>
          </div>
          <div style="text-align:right">
            <span class="badge badge-outline">v${poe.version}</span>
            <span class="badge badge-outline" style="margin-left:4px">${poe.status}</span>
          </div>
        </div>
        <div class="doc-tag-row">
          <span class="doc-tag">Cód: ${poe.code}</span>
          <span class="doc-tag">Propietario: ${poe.owner}</span>
          <span class="doc-tag">ISO: ${poe.isoRelated}</span>
        </div>
      </div>
      
      <div class="doc-detail-sections">
        <div class="form-grid">
          <div class="doc-section">
            <h4>Objetivo</h4>
            <p>${poe.objective}</p>
          </div>
          <div class="doc-section">
            <h4>Alcance</h4>
            <p>${poe.scope}</p>
          </div>
          <div class="doc-section">
            <h4>Entradas Clave</h4>
            <p>${poe.inputs}</p>
          </div>
          <div class="doc-section">
            <h4>Salidas Clave</h4>
            <p>${poe.outputs}</p>
          </div>
        </div>
        
        <div class="doc-section">
          <h4>Matriz de Riesgos (Numeral 6.1)</h4>
          <div class="table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Riesgo</th>
                  <th>P.</th>
                  <th>I.</th>
                  <th>Nivel</th>
                  <th>Control</th>
                  <th>Mitigación</th>
                  <th>Estatus</th>
                </tr>
              </thead>
              <tbody>
                ${riskRows}
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="doc-section">
          <h4>Indicadores KPI</h4>
          <div class="kpi-matrix-list" style="display:grid; grid-template-columns:1fr 1fr; gap:12px">
            ${kpiRows}
          </div>
        </div>
        
        <div class="doc-section">
          <h4>Auditorías y Tiempos de Calidad</h4>
          <div class="form-grid text-sm" style="background-color:rgba(255,255,255,0.01); padding:16px; border-radius:8px">
            <div>Tiempo Esperado: <strong>${poe.expectedTime}</strong></div>
            <div>Tiempo Real Promedio: <strong>${poe.realTime}</strong></div>
            <div>Última Auditoría: <strong>${poe.lastAudit}</strong></div>
            <div>Próxima Auditoría: <strong>${poe.nextAudit}</strong></div>
          </div>
        </div>
      </div>
    `;
  }

  // DETALLE IT (INSTRUCTIVO DE TRABAJO)
  function renderItDetail(it) {
    logPoeInteraction(it.poeCode);
    const detailPane = document.getElementById('explorer-detail-pane');
    
    let checklistHtml = it.checklist.map(item => `
      <div class="checklist-item-row" style="cursor: pointer; display: flex; align-items: flex-start; gap: 8px; padding: 4px; border-radius: 4px; transition: background-color 0.2s; user-select: none;">
        <div class="checklist-checkbox-mock"></div>
        <span>${item}</span>
      </div>
    `).join('');

    detailPane.innerHTML = `
      <div class="doc-detail-header">
        <span class="text-xs font-mono text-muted">Nivel 3 Documental: Instructivo Técnico (IT)</span>
        <h2>${it.name}</h2>
        <div class="doc-tag-row">
          <span class="doc-tag">Cód: ${it.code}</span>
          <span class="doc-tag">Puesto: ${it.role}</span>
          <span class="doc-tag">Tiempo Estándar: ${it.standardTime}</span>
        </div>
      </div>
      
      <div class="ai-hub-container" style="grid-template-columns: 1fr 200px; height:auto; gap:24px">
        <div class="doc-detail-sections" style="gap:20px">
          <div class="doc-section">
            <h4>Paso a Paso Estandarizado de Ejecución (Checklist)</h4>
            <div class="checklist-view" style="background-color:rgba(255,255,255,0.01); padding:16px; border-radius:8px">
              ${checklistHtml}
            </div>
          </div>
          <div class="form-grid text-xs">
            <div>Frecuencia: <strong>${it.frequency}</strong></div>
            <div>Indicador: <strong>${it.indicators}</strong></div>
            <div>Evidencia Requerida: <strong>${it.evidence}</strong></div>
          </div>
        </div>
        
        <div style="display:flex; flex-direction:column; gap:16px; align-items:center">
          <div style="background-color:#fff; padding:8px; border-radius:8px; width:120px; height:120px; display:flex; align-items:center; justify-content:center">
            <!-- Mock QR -->
            <div style="text-align:center; color:#000">
              <svg viewBox="0 0 24 24" width="90" height="90" fill="currentColor"><path d="M3 3h8v8H3zm2 2v4h4V5zm8-2h8v8h-8zm2 2v4h4V5zM3 13h8v8H3zm2 2v4h4v-4zm13.5 1.5v1.5H21v-3h-3v1.5zm1.5-1.5h1v-1h-1zm-4-1h2v-1h-2zm3-2h2v-1h-2zm-3 8h2v-2h-2zm4 0h1v-2h-1zm-1-3.5h1v-1h-1zm-1 0.5h1v-1h-1zm-1 0.5h1v-1h-1z"/></svg>
              <div style="font-size:0.5rem; font-weight:700">IT QR CODE</div>
            </div>
          </div>
          <button class="btn btn-secondary btn-xs" style="width:100%" onclick="alert('Reproduciendo video instructivo de control...')">🎥 Video Guía</button>
          <button class="btn btn-secondary btn-xs" style="width:100%" onclick="alert('Abriendo PDF oficial enlazado...')">📄 Ficha PDF</button>
        </div>
      </div>
    `;

    // Vincular evento de clic para marcar los pasos completados del checklist interactivo
    detailPane.querySelectorAll('.checklist-item-row').forEach(row => {
      row.addEventListener('click', () => {
        row.classList.toggle('checked');
      });
      // Añadir efecto visual al pasar el cursor
      row.addEventListener('mouseenter', () => {
        row.style.backgroundColor = 'rgba(255,255,255,0.03)';
      });
      row.addEventListener('mouseleave', () => {
        row.style.backgroundColor = 'transparent';
      });
    });
  }

  // DETALLE REGISTRO (FORMULARIO)
  function renderRegDetail(reg) {
    logPoeInteraction(reg.process);
    const detailPane = document.getElementById('explorer-detail-pane');
    
    // Buscar si ya tiene evidencias registradas
    const evs = filledRegistros.filter(f => f.code === reg.code);
    let evsHtml = evs.map(ev => `
      <div class="semaphore-item" style="margin-top:8px">
        <div class="semaphore-info">
          <span class="semaphore-name">Sucursal: ${ev.branch} | Firma: ${ev.owner}</span>
          <span class="text-xs text-muted">Fecha: ${ev.date} ${ev.time} | GPS: ${ev.gps}</span>
          <span class="text-xs text-muted">Comentarios: "${ev.comments || 'Sin comentarios'}"</span>
        </div>
        <span class="badge badge-outline">Evidencia Nivel 5: Cargada</span>
      </div>
    `).join('');
    
    if (evs.length === 0) {
      evsHtml = '<div class="text-muted text-sm m-t-2">No hay evidencias físicas/digitales registradas hoy.</div>';
    }

    detailPane.innerHTML = `
      <div class="doc-detail-header">
        <span class="text-xs font-mono text-muted">Nivel 4 Documental: Registro Auditables</span>
        <h2>${reg.name}</h2>
        <div class="doc-tag-row">
          <span class="doc-tag">Cód: ${reg.code}</span>
          <span class="doc-tag">Frecuencia: Operativa</span>
          <span class="doc-tag">Procedimiento Asociado: ${reg.process}</span>
        </div>
      </div>
      
      <div class="doc-detail-sections">
        <div class="doc-section">
          <h4>Propósito del Entregable</h4>
          <p>${reg.purpose}</p>
        </div>
        
        <div class="doc-section">
          <div style="display:flex; justify-content:space-between; align-items:center">
            <h4>Evidencias Digitales Guardadas (Nivel 5)</h4>
            <button class="btn btn-primary btn-xs" id="btn-fill-record-modal" data-code="${reg.code}">Llenar Registro</button>
          </div>
          <div class="evs-list-container">
            ${evsHtml}
          </div>
        </div>
      </div>
    `;
    
    document.getElementById('btn-fill-record-modal').addEventListener('click', (e) => {
      const code = e.target.getAttribute('data-code');
      openFillRecordModal(code);
    });
  }

  // 6. MATRIZ DE TRAZABILIDAD
  function renderTraceabilitySelector() {
    function populate() {
      const liveSelect = document.getElementById('trace-poe-select');
      const liveSearch = document.getElementById('trace-search-input');
      const liveArea = document.getElementById('trace-area-filter');
      if (!liveSelect) return;
      
      const currentVal = liveSelect.value;
      liveSelect.innerHTML = '';
      
      const filterText = liveSearch ? liveSearch.value.toLowerCase() : '';
      const selectedArea = liveArea ? liveArea.value : 'all';
      
      const filtered = qmsDb.poes.filter(poe => {
        const matchArea = selectedArea === 'all' || poe.area === selectedArea;
        const matchText = !filterText || 
                          poe.code.toLowerCase().includes(filterText) || 
                          poe.name.toLowerCase().includes(filterText);
        return matchArea && matchText;
      });
      
      filtered.forEach(poe => {
        const opt = document.createElement('option');
        opt.value = poe.code;
        opt.textContent = `${poe.code} - ${poe.name}`;
        liveSelect.appendChild(opt);
      });
      
      if (filtered.some(p => p.code === currentVal)) {
        liveSelect.value = currentVal;
      } else if (filtered.length > 0) {
        liveSelect.value = filtered[0].code;
        drawTraceabilityFlow(filtered[0].code);
      } else {
        const container = document.getElementById('trace-flow-container');
        if (container) {
          container.innerHTML = '<div class="text-center text-muted p-5">No se encontraron procedimientos que coincidan con los filtros seleccionados.</div>';
        }
      }
    }
    
    // Evitar duplicados de listeners reconstruyendo los elementos
    const select = document.getElementById('trace-poe-select');
    if (select) {
      select.replaceWith(select.cloneNode(true));
      const newSelect = document.getElementById('trace-poe-select');
      newSelect.addEventListener('change', () => {
        drawTraceabilityFlow(newSelect.value);
      });
    }
    
    const searchInput = document.getElementById('trace-search-input');
    if (searchInput) {
      searchInput.replaceWith(searchInput.cloneNode(true));
      const newSearchInput = document.getElementById('trace-search-input');
      newSearchInput.addEventListener('input', () => {
        populate();
      });
    }
    
    const areaFilter = document.getElementById('trace-area-filter');
    if (areaFilter) {
      areaFilter.replaceWith(areaFilter.cloneNode(true));
      const newAreaFilter = document.getElementById('trace-area-filter');
      newAreaFilter.addEventListener('change', () => {
        populate();
      });
    }
    
    // Cargar inicial de opciones
    populate();
    
    // Cargar inicial de flujo
    const liveSelect = document.getElementById('trace-poe-select');
    if (liveSelect && liveSelect.value) {
      drawTraceabilityFlow(liveSelect.value);
    }
  }

  function openAuditDetails(id) {
    const aud = qmsDb.audits.find(a => String(a.id) === String(id));
    if (!aud) return;
    
    const modalDocDetails = document.getElementById('modal-doc-details');
    const content = document.getElementById('doc-details-content');
    if (!modalDocDetails || !content) return;
    
    const poe = qmsDb.poes.find(p => p.code === aud.poeCode);
    const poeName = poe ? poe.name : 'Procedimiento General';
    
    let capadetails = '';
    if (aud.nonConformities) {
      capadetails = `
        <div class="doc-section" style="margin-top: 12px; border-top: 1px dashed rgba(239, 68, 68, 0.2); padding-top: 12px;">
          <h4 style="color: #ef4444;">🔴 Plan CAPA Correctiva</h4>
          <p style="font-size: 0.75rem; line-height: 1.4; color: #ef4444; background: rgba(239, 68, 68, 0.05); padding: 8px; border-radius: 6px; border: 1px solid rgba(239, 68, 68, 0.1); margin-top:6px;">
            <strong>Responsable CAPA:</strong> ${aud.ncDetails.owner}<br>
            <strong>Estatus:</strong> Activo / En Implementación<br>
            <strong>Fecha Límite:</strong> ${aud.ncDetails.deadline}<br>
            <strong>Acciones Planificadas:</strong> Corrección de brechas en flujo y re-capacitación del personal operativo.
          </p>
        </div>
      `;
    }
    
    content.innerHTML = `
      <div class="doc-detail-sections">
        <div class="doc-section">
          <h4>Reporte de Auditoría de Calidad</h4>
          <p><strong>Auditoría ID:</strong> ${aud.id}</p>
        </div>
        <div class="doc-section">
          <h4>Procedimiento Auditado</h4>
          <p><strong>${aud.poeCode}</strong> - ${poeName}</p>
        </div>
        <div class="doc-section">
          <h4>Fecha de Ejecución</h4>
          <p>${aud.date}</p>
        </div>
        <div class="doc-section">
          <h4>Auditor Evaluador</h4>
          <p>${aud.auditor}</p>
        </div>
        <div class="doc-section">
          <h4>Puntuación Final</h4>
          <p style="font-size: 1.1rem; font-weight: 700; color: ${aud.score >= 80 ? '#34d399' : '#ef4444'}">${aud.score}% (${aud.score >= 80 ? 'Conforme' : 'No Conforme'})</p>
        </div>
        <div class="doc-section">
          <h4>Hallazgos del Auditor</h4>
          <p style="font-style: italic; color: #d1d5db; line-height: 1.4;">"${aud.findings || 'Sin observaciones críticas.'}"</p>
        </div>
        ${capadetails}
      </div>
    `;
    
    modalDocDetails.classList.add('active');
  }

  function drawTraceabilityFlow(poeCode) {
    const poe = qmsDb.poes.find(p => p.code === poeCode);
    if (!poe) return;
    
    const macro = qmsDb.macroprocesses.find(m => m.code === poe.macroCode);
    const itsList = qmsDb.its.filter(it => it.poeCode === poe.code);
    const regsList = qmsDb.registrosTemplates.filter(r => r.process === poe.code);
    const auditsList = qmsDb.audits.filter(a => a.poeCode === poe.code);
    
    const container = document.getElementById('trace-flow-container');
    container.innerHTML = '';
    
    function addFlowNode(level, title, name, details = '', callback = null) {
      const node = document.createElement('div');
      node.className = 'trace-node-row';
      
      const isInteractive = callback ? 'interactive' : '';
      const badgeText = callback ? 'Abrir Ficha ↗' : 'Conectado';
      const badgeClass = callback ? 'badge bg-primary' : 'badge badge-outline';
      
      node.innerHTML = `
        <div class="trace-node-indicator"></div>
        <div class="trace-node-card ${isInteractive}">
          <div class="trace-node-info">
            <h4>NIVEL ${level}: ${title}</h4>
            <p>${name}</p>
            ${details ? `<span class="text-xs text-muted" style="line-height:1.4; display:block; margin-top:4px;">${details}</span>` : ''}
          </div>
          <span class="${badgeClass}" style="font-size:0.65rem;">${badgeText}</span>
        </div>
      `;
      
      if (callback) {
        const card = node.querySelector('.trace-node-card');
        card.addEventListener('click', () => {
          callback();
        });
      }
      
      container.appendChild(node);
    }
    
    // Nivel 1: Macroproceso
    if (macro) {
      addFlowNode(1, "Macroproceso", macro.name, `Código: ${macro.code} | Enfoque: ${macro.isoFocus}`, () => {
        const modalDocDetails = document.getElementById('modal-doc-details');
        const content = document.getElementById('doc-details-content');
        content.innerHTML = `
          <div class="doc-detail-sections">
            <div class="doc-section">
              <h4>Nivel 1: Macroproceso</h4>
              <p><strong>${macro.code}</strong> - ${macro.name}</p>
            </div>
            <div class="doc-section">
              <h4>Enfoque Estratégico ISO 9001</h4>
              <p>${macro.isoFocus}</p>
            </div>
            <div class="doc-section">
              <h4>Clasificación SGC</h4>
              <p>${macro.area === 'ADM' ? 'Procesos de Soporte / Administración' : macro.area === 'COM' ? 'Procesos Clave / Comercial' : 'Procesos de Realización / Logística'}</p>
            </div>
          </div>
        `;
        modalDocDetails.classList.add('active');
      });
    }
    
    // Nivel 2: Procedimiento (POE)
    addFlowNode(2, "Procedimiento", poe.name, `Código: ${poe.code} | Versión: ${poe.version} | Responsable: ${poe.owner} | Estatus: ${poe.status}`, () => {
      openDocDetailsModal(poe.code, 'POE');
    });
    
    // Nivel 3: ITs
    itsList.forEach(it => {
      addFlowNode(3, "Instructivo de Trabajo", it.name, `Código: ${it.code} | Rol: ${it.role} | Tiempo estándar: ${it.standardTime}`, () => {
        openDocDetailsModal(it.code, 'IT');
      });
    });
    
    // Nivel 4 y 5: Registros y Evidencias
    regsList.forEach(reg => {
      const filled = filledRegistros.filter(f => f.code === reg.code);
      const evDetails = filled.map(f => `[Evidencia: ${f.owner} en ${f.branch} (${f.date})]`).join(', ') || 'Sin evidencia cargada hoy';
      addFlowNode(4, "Registro y Evidencia Digital", reg.name, `Código: ${reg.code} | Propósito: ${reg.purpose} <br><strong style="color: #60a5fa;">${evDetails}</strong>`, () => {
        openDocDetailsModal(reg.code, 'REG');
      });
    });
    
    // Auditorías e Incidencias
    auditsList.forEach(aud => {
      let capadetails = '';
      if (aud.nonConformities) {
        capadetails = `<br><span class="text-danger" style="font-weight:600;">⚠️ No Conformidad detectada. CAPA asignada a ${aud.ncDetails.owner} (Límite: ${aud.ncDetails.deadline})</span>`;
      }
      addFlowNode("Control", "Auditoría Interna", `Auditoría ID: ${aud.id} | Score: ${aud.score}% | Estatus: ${aud.status}`, `Auditor: ${aud.auditor} | Hallazgos: "${aud.findings}" ${capadetails}`, () => {
        openAuditDetails(aud.id);
      });
    });
  }

  // 7. MOTOR DE AUDITORÍA
  function renderAudits() {
    const tbody = document.getElementById('audits-table-body');
    tbody.innerHTML = '';
    
    qmsDb.audits.forEach(aud => {
      const poe = qmsDb.poes.find(p => p.code === aud.poeCode);
      const poeName = poe ? poe.name : 'Procedimiento Desconocido';
      
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="font-mono">${aud.id}</td>
        <td><strong>${aud.poeCode}</strong> - ${poeName}</td>
        <td>${aud.date}</td>
        <td>${aud.auditor}</td>
        <td>
          <span class="badge ${aud.score >= 80 ? 'bg-success' : 'bg-danger'}">${aud.score}%</span>
        </td>
        <td><span class="badge badge-outline">${aud.status}</span></td>
        <td>${aud.nonConformities ? '🔴 No Conformidad' : '🟢 Conforme'}</td>
        <td>
          <button class="btn btn-secondary btn-xs btn-view-audit" data-id="${aud.id}">Detalles</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
    
    document.querySelectorAll('.btn-view-audit').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        openAuditDetails(id);
      });
    });
    
    // Calcular puntaje promedio
    const totalAudits = qmsDb.audits.length;
    const totalScores = qmsDb.audits.reduce((sum, a) => sum + a.score, 0);
    const avgScore = totalAudits > 0 ? Math.round(totalScores / totalAudits) : 0;
    
    document.getElementById('audit-average-score').textContent = `${avgScore}%`;
    const scoreCircle = document.getElementById('audit-score-circle');
    scoreCircle.style.borderColor = avgScore >= 80 ? 'var(--color-success)' : 'var(--color-danger)';
    
    // Estatus de contadores
    document.getElementById('audit-closed-count').textContent = qmsDb.audits.filter(a => a.status === 'Cerrada').length;
    document.getElementById('audit-followup-count').textContent = qmsDb.audits.filter(a => a.status === 'En Seguimiento').length;
    document.getElementById('audit-nc-detected-count').textContent = qmsDb.audits.filter(a => a.nonConformities).length;
  }

  // 8. ACCIONES CAPA
  function renderCAPA() {
    const tbody = document.getElementById('capa-table-body');
    tbody.innerHTML = '';
    
    const list = qmsDb.audits.filter(a => a.nonConformities);
    
    list.forEach(aud => {
      const nc = aud.ncDetails;
      const tr = document.createElement('tr');
      
      tr.innerHTML = `
        <td class="font-mono"><strong>${aud.poeCode}</strong></td>
        <td>${nc.description}</td>
        <td>${nc.correctiveAction}</td>
        <td>${nc.owner}</td>
        <td>${nc.deadline}</td>
        <td><span class="badge ${nc.priority === 'Alta' ? 'badge-danger' : 'badge-outline'}">${nc.priority}</span></td>
        <td>$${nc.cost}</td>
        <td>
          <span class="badge ${aud.status === 'Cerrada' ? 'bg-success' : 'bg-warning'}">${aud.status}</span>
        </td>
        <td>
          ${aud.status !== 'Cerrada' ? `<button class="btn btn-primary btn-xs btn-close-capa" data-id="${aud.id}">Cerrar</button>` : `<span class="text-success text-xs">Cerrada ✔</span>`}
        </td>
      `;
      tbody.appendChild(tr);
    });
    
    document.querySelectorAll('.btn-close-capa').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        closeCAPAPlan(id);
      });
    });
  }

  function closeCAPAPlan(auditId) {
    const aud = qmsDb.audits.find(a => a.id === auditId);
    if (!aud) return;
    
    aud.status = 'Cerrada';
    
    // Mejorar el compliance del POE asociado tras cerrar la NC
    const poe = qmsDb.poes.find(p => p.code === aud.poeCode);
    if (poe) {
      poe.complianceRate = Math.min(100, poe.complianceRate + 15);
    }
    
    saveState();
    renderCAPA();
    addNotificationItem({
      title: "Plan CAPA Cerrado",
      body: `La acción correctiva para ${aud.poeCode} ha sido cerrada de conformidad.`
    });
  }

  // 9. RIESGOS E INDICADORES (MATRIZ DE RIESGO 5x5)
  let activeHeatmapFilter = null;
  let riskSortColumn = null;
  let riskSortAscending = true;
  
  function renderRisksKPIs() {
    const areaFilter = document.getElementById('risk-area-filter')?.value || 'ALL';

    // KPI matrix
    const kpiContainer = document.getElementById('kpi-matrix-container');
    kpiContainer.innerHTML = '';
    
    qmsDb.poes.forEach(poe => {
      if (areaFilter !== 'ALL' && poe.area !== areaFilter) return;
      poe.kpis.forEach(k => {
        const item = document.createElement('div');
        item.className = 'kpi-row-item';
        item.innerHTML = `
          <div class="kpi-row-header">
            <span class="kpi-row-title"><strong>${poe.code}</strong>: ${k.name}</span>
            <span class="kpi-trend text-xs">Meta: ${k.target}</span>
          </div>
          <div class="stat-progress">
            <div class="progress-bar-bg">
              <div class="progress-bar-fill ${k.status === 'success' ? 'bg-success' : k.status === 'warning' ? 'bg-warning' : 'bg-danger'}" style="width: 80%"></div>
            </div>
          </div>
          <div class="kpi-row-body">
            <span>Resultado: <strong>${k.value}</strong></span>
            <span class="text-sm">Área: ${poe.area}</span>
          </div>
        `;
        kpiContainer.appendChild(item);
      });
    });
    
    // Matriz de calor de riesgos
    const cells = document.querySelectorAll('.heatmap-cell');
    cells.forEach(cell => {
      const prob = parseInt(cell.getAttribute('data-prob'));
      const imp = parseInt(cell.getAttribute('data-imp'));
      
      // Contar riesgos en esta posición
      let count = 0;
      qmsDb.poes.forEach(poe => {
        if (areaFilter !== 'ALL' && poe.area !== areaFilter) return;
        poe.risks.forEach(r => {
          if (r.probability === prob && r.impact === imp) {
            count++;
          }
        });
      });
      
      if (count > 0) {
        cell.innerHTML = `${prob}x${imp} <span class="badge badge-outline" style="background:#000; padding:1px 4px">${count}</span>`;
      } else {
        cell.innerHTML = `${prob}x${imp}`;
      }
      
      if (activeHeatmapFilter && activeHeatmapFilter.prob === prob && activeHeatmapFilter.imp === imp) {
        cell.style.outline = '2px solid #fff';
      } else {
        cell.style.outline = 'none';
      }
      
      if (!cell.dataset.listenerBound) {
        cell.addEventListener('click', () => {
          const isAlreadyActive = activeHeatmapFilter && activeHeatmapFilter.prob === prob && activeHeatmapFilter.imp === imp;
          cells.forEach(c => c.style.outline = 'none');
          
          if (isAlreadyActive) {
            activeHeatmapFilter = null;
            renderRiskTableFiltered(null, null);
          } else {
            cell.style.outline = '2px solid #fff';
            activeHeatmapFilter = { prob, imp };
            renderRiskTableFiltered(prob, imp);
          }
        });
        cell.dataset.listenerBound = 'true';
      }
    });
    
    renderRiskTableFiltered(activeHeatmapFilter ? activeHeatmapFilter.prob : null, activeHeatmapFilter ? activeHeatmapFilter.imp : null);
    renderPoeUsageTable();
  }

  function renderRiskTableFiltered(prob, imp) {
    const tableContainer = document.getElementById('risk-list-table-container');
    if (!tableContainer) return;
    
    const areaFilter = document.getElementById('risk-area-filter')?.value || 'ALL';
    
    // Recuperar el valor actual del buscador si existe en el DOM
    const currentSearchText = document.getElementById('risk-table-search')?.value.toLowerCase().trim() || '';
    
    let risks = [];
    qmsDb.poes.forEach(poe => {
      if (areaFilter !== 'ALL' && poe.area !== areaFilter) return;
      poe.risks.forEach(r => {
        if (prob === null || (r.probability === prob && r.impact === imp)) {
          risks.push({ ...r, poeCode: poe.code });
        }
      });
    });
    
    // Filtrar por el buscador si tiene texto
    if (currentSearchText) {
      risks = risks.filter(r => {
        const score = r.probability * r.impact;
        let computedLevel = 'Bajo';
        if (score >= 10) computedLevel = 'Alto';
        else if (score >= 5) computedLevel = 'Medio';
        else if (score === 4) computedLevel = 'Tolerable';
        
        return r.poeCode.toLowerCase().includes(currentSearchText) ||
               r.risk.toLowerCase().includes(currentSearchText) ||
               `${r.probability}x${r.impact}`.includes(currentSearchText) ||
               computedLevel.toLowerCase().includes(currentSearchText) ||
               r.control.toLowerCase().includes(currentSearchText) ||
               r.mitigation.toLowerCase().includes(currentSearchText) ||
               r.status.toLowerCase().includes(currentSearchText);
      });
    }
    
    // Ordenar si hay columna seleccionada
    if (riskSortColumn) {
      risks.sort((a, b) => {
        let valA, valB;
        if (riskSortColumn === 'poe') {
          valA = a.poeCode;
          valB = b.poeCode;
        } else if (riskSortColumn === 'risk') {
          valA = a.risk;
          valB = b.risk;
        } else if (riskSortColumn === 'pxi') {
          valA = a.probability * a.impact;
          valB = b.probability * b.impact;
        } else if (riskSortColumn === 'level') {
          const scoreA = a.probability * a.impact;
          const scoreB = b.probability * b.impact;
          const levelPriority = { 'Alto': 4, 'Medio': 3, 'Tolerable': 2, 'Bajo': 1 };
          const levA = scoreA >= 10 ? 'Alto' : scoreA >= 5 ? 'Medio' : scoreA === 4 ? 'Tolerable' : 'Bajo';
          const levB = scoreB >= 10 ? 'Alto' : scoreB >= 5 ? 'Medio' : scoreB === 4 ? 'Tolerable' : 'Bajo';
          valA = levelPriority[levA] || 0;
          valB = levelPriority[levB] || 0;
        } else if (riskSortColumn === 'control') {
          valA = a.control;
          valB = b.control;
        } else if (riskSortColumn === 'mitigation') {
          valA = a.mitigation;
          valB = b.mitigation;
        } else if (riskSortColumn === 'status') {
          valA = a.status;
          valB = b.status;
        }
        
        if (valA < valB) return riskSortAscending ? -1 : 1;
        if (valA > valB) return riskSortAscending ? 1 : -1;
        return 0;
      });
    }
    
    let rows = risks.map(r => {
      const score = r.probability * r.impact;
      let computedLevel = 'Bajo';
      let badgeClass = 'bg-green';
      
      if (score >= 10) {
        computedLevel = 'Alto';
        badgeClass = 'bg-red';
      } else if (score >= 5) {
        computedLevel = 'Medio';
        badgeClass = 'bg-orange';
      } else if (score === 4) {
        computedLevel = 'Tolerable';
        badgeClass = 'bg-yellow';
      } else {
        computedLevel = 'Bajo';
        badgeClass = 'bg-green';
      }
      
      return `
        <tr>
          <td class="font-mono text-xs">${r.poeCode}</td>
          <td><strong>${r.risk}</strong></td>
          <td>${r.probability} x ${r.impact}</td>
          <td><span class="badge ${badgeClass}" style="font-size:0.75rem; padding: 4px 8px; font-weight:700; border-radius:12px; display:inline-block; text-align:center; min-width:80px;">${computedLevel}</span></td>
          <td>${r.control}</td>
          <td>${r.mitigation}</td>
          <td>${r.status}</td>
          <td>
            <button class="btn btn-sm btn-primary btn-edit-risk" data-poe="${r.poeCode}" data-risk="${r.risk}" style="padding: 4px 8px; font-size:0.7rem; border-radius:4px; display: flex; align-items: center; justify-content: center; gap: 4px; border:none; cursor:pointer;">
              ✏️ Editar
            </button>
          </td>
        </tr>
      `;
    }).join('');
    
    function getSortIndicator(col) {
      if (riskSortColumn !== col) return '↕';
      return riskSortAscending ? '▲' : '▼';
    }
    
    tableContainer.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; gap: 12px; flex-wrap: wrap;">
        <div style="color: var(--text-secondary); font-size:0.75rem; user-select:none;">
          Filtrado Matriz: <strong style="color: var(--color-primary);">${prob ? `${prob}x${imp}` : 'Todos'}</strong> 
          ${prob ? '<span id="btn-clear-heatmap-filter" style="margin-left:8px; color:var(--color-danger); cursor:pointer; font-weight:700; text-decoration:underline;">[Ver todos]</span>' : ''}
        </div>
        <input type="text" id="risk-table-search" placeholder="Buscar en tabla (ej: caja, ROP, GAF)..." value="${currentSearchText}" style="background-color: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-color); color: var(--text-primary); padding: 5px 10px; border-radius: 6px; font-size: 0.75rem; width: 250px; outline: none;">
      </div>
      
      ${risks.length === 0 ? `
        <div class="text-muted text-sm text-center" style="padding:20px 0;">Ningún riesgo coincide con los filtros aplicados.</div>
      ` : `
        <table class="data-table">
          <thead>
            <tr>
              <th class="sortable-risk-header" data-col="poe" style="cursor:pointer; user-select:none;">POE ${getSortIndicator('poe')}</th>
              <th class="sortable-risk-header" data-col="risk" style="cursor:pointer; user-select:none;">Riesgo ${getSortIndicator('risk')}</th>
              <th class="sortable-risk-header" data-col="pxi" style="cursor:pointer; user-select:none;">P x I ${getSortIndicator('pxi')}</th>
              <th class="sortable-risk-header" data-col="level" style="cursor:pointer; user-select:none;">Nivel ${getSortIndicator('level')}</th>
              <th class="sortable-risk-header" data-col="control" style="cursor:pointer; user-select:none;">Control ${getSortIndicator('control')}</th>
              <th class="sortable-risk-header" data-col="mitigation" style="cursor:pointer; user-select:none;">Mitigación ${getSortIndicator('mitigation')}</th>
              <th class="sortable-risk-header" data-col="status" style="cursor:pointer; user-select:none;">Estatus ${getSortIndicator('status')}</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      `}
    `;
    
    // Registrar el listener del buscador
    const searchInput = document.getElementById('risk-table-search');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        renderRiskTableFiltered(prob, imp);
      });
      // Restaurar foco al final del texto
      searchInput.focus();
      const valLength = searchInput.value.length;
      searchInput.setSelectionRange(valLength, valLength);
    }
    
    // Registrar el listener de limpiar filtro de calor
    const clearBtn = document.getElementById('btn-clear-heatmap-filter');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        activeHeatmapFilter = null;
        const cells = document.querySelectorAll('.heatmap-cell');
        cells.forEach(c => c.style.outline = 'none');
        renderRiskTableFiltered(null, null);
      });
    }
    
    // Registrar listeners de cabeceras de ordenamiento
    tableContainer.querySelectorAll('.sortable-risk-header').forEach(th => {
      th.addEventListener('click', () => {
        const col = th.getAttribute('data-col');
        if (riskSortColumn === col) {
          riskSortAscending = !riskSortAscending;
        } else {
          riskSortColumn = col;
          riskSortAscending = true;
        }
        renderRiskTableFiltered(prob, imp);
      });
    });

    // Registrar listeners para los botones de edición
    tableContainer.querySelectorAll('.btn-edit-risk').forEach(btn => {
      btn.addEventListener('click', () => {
        const poeCode = btn.getAttribute('data-poe');
        const riskName = btn.getAttribute('data-risk');
        openEditRiskModal(poeCode, riskName);
      });
    });
  }

  function openEditRiskModal(poeCode, riskName) {
    const poe = qmsDb.poes.find(p => p.code === poeCode);
    if (!poe) return;
    const r = poe.risks.find(risk => risk.risk === riskName);
    if (!r) return;
    
    const probSelect = document.getElementById('edit-risk-prob');
    const statusSelect = document.getElementById('edit-risk-status');
    
    document.getElementById('edit-risk-poe').value = poeCode;
    document.getElementById('edit-risk-name').value = riskName;
    probSelect.value = r.probability;
    document.getElementById('edit-risk-imp').value = r.impact;
    document.getElementById('edit-risk-control').value = r.control || '';
    document.getElementById('edit-risk-mitigation').value = r.mitigation || '';
    statusSelect.value = r.status || 'Activo';
    
    // Guardar el valor original de probabilidad
    const originalProb = r.probability;
    
    // Cambiar la probabilidad automáticamente al cambiar el estatus en el modal
    statusSelect.onchange = () => {
      if (statusSelect.value === 'Mitigado') {
        probSelect.value = "1";
      } else {
        probSelect.value = originalProb.toString();
      }
    };
    
    // Almacenar referencias temporales para guardar
    document.getElementById('btn-save-risk-changes').onclick = () => {
      saveRiskChanges(poeCode, riskName);
    };
    
    document.getElementById('modal-edit-risk').classList.add('active');
  }

  function saveRiskChanges(poeCode, riskName) {
    const poe = qmsDb.poes.find(p => p.code === poeCode);
    if (!poe) return;
    const r = poe.risks.find(risk => risk.risk === riskName);
    if (!r) return;
    
    let newProb = parseInt(document.getElementById('edit-risk-prob').value);
    const newImp = parseInt(document.getElementById('edit-risk-imp').value);
    const newControl = document.getElementById('edit-risk-control').value.trim();
    const newMitigation = document.getElementById('edit-risk-mitigation').value.trim();
    const newStatus = document.getElementById('edit-risk-status').value;
    
    // Si el estatus es Mitigado y la probabilidad sigue siendo alta, la reducimos automáticamente a 1 (riesgo residual)
    if (newStatus === 'Mitigado' && newProb > 1) {
      newProb = 1;
    } else if (newStatus === 'Activo' && newProb === 1) {
      // Si se vuelve a activar y estaba en 1, lo restauramos a 3 para simular la probabilidad activa
      newProb = 3;
    }
    
    r.probability = newProb;
    r.impact = newImp;
    r.control = newControl;
    r.mitigation = newMitigation;
    r.status = newStatus;
    
    // Recalcular nivel de riesgo
    const score = newProb * newImp;
    if (score >= 10) r.level = 'Alto';
    else if (score >= 5) r.level = 'Medio';
    else if (score === 4) r.level = 'Tolerable';
    else r.level = 'Bajo';
    
    // Guardar en localStorage
    localStorage.setItem('SIDE_QMS_DATABASE_V5', JSON.stringify(qmsDb));
    
    // Cerrar modal y refrescar la vista
    document.getElementById('modal-edit-risk').classList.remove('active');
    renderRisksKPIs();
    
    // Mostrar notificación
    addNotification('Sistema', `El riesgo del ${poeCode} ha sido actualizado (Estatus: ${newStatus}).`, 'success');
  }

  // 10. SIMULADOR DE ALERTAS Y VENCIMIENTOS
  function renderExpiryTable() {
    const tbody = document.getElementById('expiry-table-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    // Recuperar el valor actual del buscador
    const currentSearchText = document.getElementById('expiry-table-search')?.value.toLowerCase().trim() || '';
    
    qmsDb.poes.forEach(poe => {
      // Simular cálculo de días restantes basándonos en fecha fija (2026-08-01)
      const now = new Date("2026-08-01");
      const next = new Date(poe.nextAudit);
      const diffTime = next - now;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      let badgeClass = 'bg-success';
      let badgeText = 'Correcto';
      
      if (diffDays <= 0) {
        badgeClass = 'bg-danger';
        badgeText = 'Vencido';
      } else if (diffDays <= 3) {
        badgeClass = 'bg-danger';
        badgeText = 'Escalamiento';
      } else if (diffDays <= 7) {
        badgeClass = 'bg-danger';
        badgeText = 'Crítico';
      } else if (diffDays <= 15) {
        badgeClass = 'bg-warning';
        badgeText = 'Próximo';
      }
      
      // Filtrar por el buscador
      if (currentSearchText) {
        const matches = poe.code.toLowerCase().includes(currentSearchText) ||
                        poe.name.toLowerCase().includes(currentSearchText) ||
                        poe.area.toLowerCase().includes(currentSearchText) ||
                        badgeText.toLowerCase().includes(currentSearchText);
        if (!matches) return;
      }
      
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="font-mono">${poe.code}</td>
        <td><strong>${poe.name}</strong></td>
        <td>${poe.area}</td>
        <td>${poe.lastAudit}</td>
        <td>${poe.nextAudit}</td>
        <td class="font-mono font-bold">${diffDays} días</td>
        <td><span class="badge ${badgeClass}">${badgeText}</span></td>
        <td>
          <button class="btn btn-secondary btn-xs btn-trigger-notif" data-code="${poe.code}" data-days="${diffDays}">Forzar Alerta</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
    
    document.querySelectorAll('.btn-trigger-notif').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const code = e.target.getAttribute('data-code');
        const days = parseInt(e.target.getAttribute('data-days'));
        triggerSimulatedAlert(code, days);
      });
    });
  }

  function triggerSimulatedAlert(poeCode, days) {
    const poe = qmsDb.poes.find(p => p.code === poeCode);
    if (!poe) return;
    
    let title = '';
    let body = '';
    let channel = 'push';
    let urgency = 'normal';
    
    if (days <= 0) {
      title = "Escalamiento Director (3d vencido)";
      body = `CRÍTICO: El procedimiento ${poe.code} lleva más de 3 días vencido sin ejecución de auditoría obligatoria. Escalar al Director General.`;
      channel = 'Director';
      urgency = 'critical';
    } else if (days <= 3) {
      title = "Escalamiento Gerente (Vence hoy)";
      body = `ATENCIÓN: El procedimiento ${poe.code} vence hoy. Notificación directa al Gerente de Área.`;
      channel = 'Gerente';
      urgency = 'high';
    } else if (days <= 7) {
      title = "Notificación Push (7 días)";
      body = `ADVERTENCIA: Faltan 7 días para el vencimiento de la auditoría de ${poe.code}. Realizar preparativos.`;
      channel = 'Push';
      urgency = 'medium';
    } else if (days <= 15) {
      title = "Mensaje de WhatsApp & Correo (15 días)";
      body = `Recordatorio: El procedimiento ${poe.code} vence en 15 días. Programar auditoría con el auditor.`;
      channel = 'WhatsApp';
      urgency = 'medium';
    } else {
      title = "Correo Electrónico Temprano (30 días)";
      body = `Aviso: El procedimiento ${poe.code} tiene programada su auditoría en 30 días.`;
      channel = 'Email';
      urgency = 'normal';
    }
    
    // Agregar a notificaciones del sistema
    notifications.unshift({
      id: Date.now(),
      title: title,
      body: body,
      time: "Hace un momento",
      area: poe.area
    });
    
    saveState();
    renderExpiryTable();
    updateBadges();
    
    // Renderizar en teléfono simulado
    const phoneAlerts = document.getElementById('mock-phone-alerts');
    phoneAlerts.innerHTML = `
      <div class="phone-alert-card" style="border-left: 3px solid ${urgency === 'critical' ? 'var(--color-danger)' : urgency === 'high' ? 'var(--color-warning)' : 'var(--color-primary)'}">
        <div class="phone-alert-header">
          <span>📱 ${channel} Alert</span>
          <span>Ahora</span>
        </div>
        <div class="phone-alert-body">
          <strong>${title}</strong><br>
          ${body}
        </div>
      </div>
    `;
    
    // Notificación flotante desktop
    addNotificationItem({ title, body });
  }

  // BOTÓN EJECUTAR SIMULACIÓN DIARIA
  const btnDailyCheck = document.getElementById('btn-trigger-daily-check');
  if (btnDailyCheck) {
    btnDailyCheck.addEventListener('click', () => {
      // Simular alerta para los POEs con menor tiempo
      qmsDb.poes.forEach(poe => {
        const now = new Date("2026-08-01");
        const next = new Date(poe.nextAudit);
        const diffTime = next - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays <= 15) {
          triggerSimulatedAlert(poe.code, diffDays);
        }
      });
      alert('Simulación diaria ejecutada. Revisa la consola de alertas y teléfono móvil.');
    });
  }

  // 11. CENTRO DE INTELIGENCIA ARTIFICIAL (IA HUB)
  const btnGenerateAi = document.getElementById('btn-generate-ai-report');
  if (btnGenerateAi) {
    btnGenerateAi.addEventListener('click', () => {
      const type = document.getElementById('ai-report-type').value;
      generateAIReport(type);
    });
  }

  function generateAIReport(type) {
    const output = document.getElementById('ai-report-output-content');
    output.innerHTML = 'Generando diagnóstico avanzado del SGC...';
    
    setTimeout(() => {
      let markdown = '';
      
      const totalPoe = qmsDb.poes.length;
      const totalNC = qmsDb.audits.filter(a => a.nonConformities && a.status !== 'Cerrada').length;
      const totalCompliance = qmsDb.poes.reduce((sum, poe) => sum + poe.complianceRate, 0);
      const avgCompliance = (totalCompliance / totalPoe).toFixed(1);
      
      if (type === 'daily') {
        markdown = `
          <h2>Resumen Ejecutivo Diario - SGC</h2>
          <p><strong>Fecha de Emisión:</strong> 1 de Agosto de 2026 | <strong>Modelo:</strong> AGY-3.5-Medium-ISO</p>
          <hr>
          <h3>1. Estado General de Cumplimiento</h3>
          <ul>
            <li><strong>Porcentaje General del SGC:</strong> ${avgCompliance}% (Meta: ≥95.0%).</li>
            <li><strong>Incidencias Críticas (No Conformidades):</strong> ${totalNC} abierta(s) en seguimiento.</li>
          </ul>
          
          <h3>2. Desviaciones Detectadas</h3>
          <ul>
            <li>⚠️ <strong>Alerta Temprana en POE-LOG-11:</strong> Estatus OTIF (89.5%) por debajo del límite mínimo.</li>
            <li>⚠️ <strong>Vencimiento Próximo:</strong> El procedimiento POE-ADM-01 requiere auditoría en 14 días.</li>
            <li>📋 <strong>Registros Incompletos:</strong> REG-LOG-013 (Venta Perdida) tiene 0 registros de entrada en la última semana.</li>
          </ul>
          
          <h3>3. Recomendación de Control de la IA</h3>
          <p>Se recomienda al <em>Gerente de Logística y Compras</em> convocar una mesa de trabajo con el proveedor DistriCorp para resolver el cuello de botella en rampa que origina las desviaciones de leadtime y OTIF.</p>
        `;
      } else if (type === 'weekly') {
        markdown = `
          <h2>Reporte Ejecutivo Semanal de Operaciones</h2>
          <p><strong>Semana:</strong> W31-2026 | <strong>ISO 9001:2015</strong></p>
          <hr>
          <h3>1. Consolidado de Desempeño</h3>
          <p>El SGC mantiene una estabilidad del ${avgCompliance}% de conformidad documental. No se registraron nuevos quiebres de almacenamiento en CD esta semana.</p>
          
          <h3>2. Puntos Críticos de Atención</h3>
          <ul>
            <li><strong>Administración:</strong> Conteo de bóvedas central operó al 100% de exactitud contable.</li>
            <li><strong>Comercialización:</strong> La paridad de precios flejes-cajas se situó en 99.8%. Excelente.</li>
            <li><strong>Logística:</strong> Backorder acumulado subió un 2.1% en compras internacionales.</li>
          </ul>
          
          <h3>3. Plan Preventivo</h3>
          <p>Parametrizar el ROP dinámico en el ERP para SKUs importados aumentando stock de seguridad de 10 a 15 días.</p>
        `;
      } else {
        markdown = `
          <h2>Auditoría Ejecutiva del Sistema SGC</h2>
          <p><strong>Periodo Evaluado:</strong> Mensual / Julio 2026</p>
          <hr>
          <h3>1. Conclusiones del Auditor Inteligente</h3>
          <p>Se evidencia un apego del 94.5% en la ejecución de los Instructivos de Trabajo (IT) del piso de venta. El área administrativa muestra robustez en la integración de expedientes de contratación.</p>
          <h3>2. Acciones Correctivas Requeridas</h3>
          <p>El plan CAPA actual cuenta con ${totalNC} acciones activas. Es mandatorio el cierre de la no conformidad de OTIF para evitar desviaciones en la auditoría de recertificación externa.</p>
        `;
      }
      
      output.innerHTML = markdown;
    }, 800);
  }

  function generateAIReportWidget() {
    const textEl = document.getElementById('ai-quick-summary-text');
    if (!textEl) return;
    
    const activeNC = qmsDb.audits.filter(a => a.nonConformities && a.status !== 'Cerrada').length;
    
    textEl.innerHTML = `
      <h4>Diagnóstico del Día</h4>
      <ul>
        <li>Cumplimiento general: <strong>${(qmsDb.poes.reduce((s, p) => s + p.complianceRate, 0) / qmsDb.poes.length).toFixed(1)}%</strong>.</li>
        <li>No conformidades activas: <strong class="text-danger">${activeNC}</strong>.</li>
        <li>Sugerencia: Programar mesa de trabajo para resolver NC de <strong>POE-LOG-11</strong> antes del 15 de Agosto.</li>
      </ul>
    `;
  }

  // Re-analizar en widget
  const btnQuickSummary = document.getElementById('quick-generate-summary');
  if (btnQuickSummary) {
    btnQuickSummary.addEventListener('click', () => {
      const textEl = document.getElementById('ai-quick-summary-text');
      textEl.innerHTML = 'Analizando base de datos local y tendencias...';
      setTimeout(() => {
        generateAIReportWidget();
      }, 500);
    });
  }

  // 12. EXPORTACIÓN DE REPORTES (Excel / CSV Mock)
  const btnExcel = document.getElementById('btn-excel-report');
  if (btnExcel) {
    btnExcel.addEventListener('click', () => {
      exportToCSV();
    });
  }
  const btnPrint = document.getElementById('btn-print-report');
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      const reportContent = document.getElementById('ai-report-output-content').innerHTML;
      
      // Abrir una ventana nueva limpia e independiente
      const printWindow = window.open('', '_blank', 'width=900,height=800');
      if (!printWindow) {
        alert("El bloqueador de ventanas emergentes impidió abrir el reporte. Por favor, permita las ventanas emergentes en su navegador.");
        return;
      }
      
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Reporte Inteligente SGC - SIDE-QMS</title>
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
          <style>
            body {
              font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              color: #1f2937;
              background-color: #ffffff;
              padding: 40px;
              margin: 0;
              line-height: 1.6;
            }
            .font-mono {
              font-family: 'JetBrains Mono', monospace;
            }
            h1, h2, h3, h4, h5, h6 {
              color: #111827;
              margin-top: 24px;
              margin-bottom: 12px;
              font-weight: 700;
              page-break-after: avoid;
            }
            h1 {
              font-size: 1.8rem;
              border-bottom: 2px solid #e5e7eb;
              padding-bottom: 8px;
            }
            h2 {
              font-size: 1.4rem;
              border-bottom: 1px solid #e5e7eb;
              padding-bottom: 6px;
            }
            h3 {
              font-size: 1.15rem;
            }
            p {
              margin-top: 0;
              margin-bottom: 16px;
            }
            ul, ol {
              margin-top: 0;
              margin-bottom: 16px;
              padding-left: 24px;
            }
            li {
              margin-bottom: 6px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 16px;
              margin-bottom: 24px;
            }
            th, td {
              border: 1px solid #e5e7eb;
              padding: 10px 12px;
              text-align: left;
              font-size: 0.85rem;
            }
            th {
              background-color: #f9fafb;
              color: #374151;
              font-weight: 600;
            }
            .badge {
              display: inline-block;
              padding: 2px 8px;
              border-radius: 4px;
              font-size: 0.75rem;
              font-weight: 600;
            }
            .bg-success { background-color: #def7ec; color: #03543f; }
            .bg-warning { background-color: #fde8e8; color: #9b1c1c; }
            .bg-danger { background-color: #fde8e8; color: #9b1c1c; }
            
            @media print {
              body {
                padding: 20px;
              }
              button {
                display: none !important;
              }
            }
          </style>
        </head>
        <body>
          <!-- Cabecera del Documento de Reporte -->
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #111827; padding-bottom: 16px; margin-bottom: 30px;">
            <div>
              <div style="font-size: 1.6rem; font-weight: 800; letter-spacing: 0.5px; color: #111827;">SIDE-QMS</div>
              <div style="font-size: 0.8rem; color: #4b5563; font-weight: 500;">Sistema Inteligente de Gestión de Calidad (ISO 9001:2015)</div>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 0.85rem; font-weight: 600; color: #111827;">REPORTE OFICIAL SGC</div>
              <div style="font-size: 0.75rem; color: #6b7280;">Emitido: ${new Date().toLocaleDateString()}</div>
            </div>
          </div>
          
          <div>
            ${reportContent}
          </div>
          
          <script>
            window.onload = function() {
              window.print();
              // Cerrar la ventana auxiliar una vez finalizada la impresión o cancelación
              window.onafterprint = function() {
                window.close();
              };
            };
          </script>
        </body>
        </html>
      `);
      printWindow.document.close();
    });
  }

  function exportToCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Codigo,Procedimiento,Area,Compliance,Status,Version\n";
    
    qmsDb.poes.forEach(p => {
      csvContent += `${p.code},"${p.name}",${p.area},${p.complianceRate}%,${p.status},${p.version}\n`;
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Reporte_SGC_SIDE_QMS.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // 13. MODALES DE FORMULARIOS INTERACTIVOS
  
  // MODAL LLENADO DE REGISTRO
  const modalFillRecord = document.getElementById('modal-fill-record');
  let signaturePad = null;
  
  function openFillRecordModal(code) {
    const reg = qmsDb.registrosTemplates.find(r => r.code === code);
    if (!reg) return;
    
    document.getElementById('form-record-code').value = reg.code;
    document.getElementById('form-record-poe').value = reg.process;
    document.getElementById('form-record-code-display').value = reg.code;
    document.getElementById('form-record-name').value = reg.name;
    document.getElementById('form-record-owner').value = document.getElementById('user-profile-name').textContent;
    document.getElementById('form-record-gps').value = '';
    document.getElementById('form-record-comments').value = '';
    
    // Limpiar canvas
    clearCanvas();
    
    modalFillRecord.classList.add('active');
  }

  // Cerrar modales
  document.querySelectorAll('.close-btn, .close-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
    });
  });

  // Canvas firma digital
  const canvas = document.getElementById('signature-canvas');
  const ctx = canvas.getContext('2d');
  let drawing = false;
  
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);
  
  // Soporte touch
  canvas.addEventListener('touchstart', (e) => {
    drawing = true;
    const touch = e.touches[0];
    ctx.beginPath();
    ctx.moveTo(touch.clientX - canvas.getBoundingClientRect().left, touch.clientY - canvas.getBoundingClientRect().top);
    e.preventDefault();
  });
  canvas.addEventListener('touchmove', (e) => {
    if (!drawing) return;
    const touch = e.touches[0];
    ctx.lineTo(touch.clientX - canvas.getBoundingClientRect().left, touch.clientY - canvas.getBoundingClientRect().top);
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.stroke();
    e.preventDefault();
  });
  
  function startDrawing(e) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  }
  
  function draw(e) {
    if (!drawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.stroke();
  }
  
  function stopDrawing() {
    drawing = false;
  }
  
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  
  document.getElementById('btn-clear-signature').addEventListener('click', clearCanvas);

  // Botón Autocompletar GPS
  document.getElementById('btn-get-gps').addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          document.getElementById('form-record-gps').value = `${pos.coords.latitude.toFixed(6)}, ${pos.coords.longitude.toFixed(6)}`;
        },
        () => {
          // Fallback a coordenadas ficticias realistas
          document.getElementById('form-record-gps').value = "13.692940, -89.218191";
        }
      );
    } else {
      document.getElementById('form-record-gps').value = "13.692940, -89.218191";
    }
  });

  // Guardar Registro (Form Submit)
  document.getElementById('record-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const code = document.getElementById('form-record-code').value;
    const poe = document.getElementById('form-record-poe').value;
    const owner = document.getElementById('form-record-owner').value;
    const branch = document.getElementById('form-record-branch').value;
    const gps = document.getElementById('form-record-gps').value;
    const comments = document.getElementById('form-record-comments').value;
    
    // Obtener imagen del Canvas
    const signatureImg = canvas.toDataURL();
    
    const template = qmsDb.registrosTemplates.find(r => r.code === code);
    
    const newRecord = {
      code,
      name: template ? template.name : 'Registro',
      poe,
      owner,
      branch,
      gps,
      comments,
      signature: signatureImg,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toLocaleTimeString(),
      area: template ? template.area : 'ADM'
    };
    
    filledRegistros.push(newRecord);
    localStorage.setItem('SIDE_QMS_FILLED_REGISTROS', JSON.stringify(filledRegistros));
    logPoeInteraction(poe);
    
    // Mejorar levemente el compliance rate del POE por cumplimiento de registro
    const poeObj = qmsDb.poes.find(p => p.code === poe);
    if (poeObj) {
      poeObj.complianceRate = Math.min(100, poeObj.complianceRate + 2);
      saveState();
    }
    
    modalFillRecord.classList.remove('active');
    alert('Evidencia del Registro guardada exitosamente y vinculada al SGC.');
    
    // Agregar notificación de éxito
    notifications.unshift({
      id: Date.now(),
      title: "Evidencia Guardada (Nivel 5)",
      body: `Registro ${code} completado por ${owner} en ${branch}. Coordenadas GPS guardadas.`,
      time: "Hace 1 seg",
      area: template ? template.area : 'ADM'
    });
    saveState();
    
    renderCurrentTab();
    if (template) {
      renderRegDetail(template);
    }
  });

  // MODAL DETALLES DOCUMENTO
  const modalDocDetails = document.getElementById('modal-doc-details');
  function openDocDetailsModal(code, type) {
    const content = document.getElementById('doc-details-content');
    content.innerHTML = '';
    
    if (type === 'POE') {
      logPoeInteraction(code);
      const poe = qmsDb.poes.find(p => p.code === code);
      if (!poe) return;
      
      content.innerHTML = `
        <div class="doc-detail-sections">
          <div class="doc-section">
            <h4>Nombre y Código</h4>
            <p><strong>${poe.code}</strong> - ${poe.name}</p>
          </div>
          <div class="doc-section">
            <h4>Objetivo</h4>
            <p>${poe.objective}</p>
          </div>
          <div class="doc-section">
            <h4>Alcance</h4>
            <p>${poe.scope}</p>
          </div>
          <div class="doc-section">
            <h4>Propietario / Responsable</h4>
            <p>${poe.owner}</p>
          </div>
          <div class="doc-section">
            <h4>Norma ISO Enlazada</h4>
            <p>${poe.isoRelated}</p>
          </div>
        </div>
        
        <!-- MATRIZ SIPOC DEL PROCESO -->
        <div class="doc-section" style="margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 16px;">
          <h4 style="color: #60a5fa; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #60a5fa;"><circle cx="12" cy="12" r="4"/><line x1="3" y1="12" x2="8" y2="12"/><line x1="16" y1="12" x2="21" y2="12"/></svg>
            Diagrama y Matriz SIPOC del Proceso (ISO 9001:2015 Numeral 4.4)
          </h4>
          <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 14px;">
            <!-- S -->
            <div style="border-right: 1px solid rgba(255,255,255,0.05); padding-right: 10px;">
              <strong style="color: #60a5fa; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.03em;">S (Supplier)</strong>
              <div style="color: var(--text-muted); font-size: 0.6rem; margin-top:2px;">Proveedores</div>
              <p style="font-size: 0.75rem; margin-top: 8px; line-height: 1.4; color: #f3f4f6;">
                ${poe.area === 'ADM' ? 'Administración / Auditoría Interna / Entidades Bancarias / Legal' : poe.area === 'COM' ? 'Clientes / Caja / Operaciones Comerciales / Marketing' : 'Proveedores Externos / Aduana / Operadores Logísticos / Compras'}
              </p>
            </div>
            <!-- I -->
            <div style="border-right: 1px solid rgba(255,255,255,0.05); padding: 0 10px;">
              <strong style="color: #34d399; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.03em;">I (Input)</strong>
              <div style="color: var(--text-muted); font-size: 0.6rem; margin-top:2px;">Entradas Clave</div>
              <p style="font-size: 0.75rem; margin-top: 8px; line-height: 1.4; color: #f3f4f6;">${poe.inputs || 'Requerimiento oficial o insumos del área.'}</p>
            </div>
            <!-- P -->
            <div style="border-right: 1px solid rgba(255,255,255,0.05); padding: 0 10px;">
              <strong style="color: #f59e0b; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.03em;">P (Process)</strong>
              <div style="color: var(--text-muted); font-size: 0.6rem; margin-top:2px;">Procedimiento</div>
              <p style="font-size: 0.75rem; margin-top: 8px; line-height: 1.4; color: #f3f4f6;">
                <strong>${poe.code}</strong>: ${poe.description || 'Actividades de control operativo.'}
              </p>
            </div>
            <!-- O -->
            <div style="border-right: 1px solid rgba(255,255,255,0.05); padding: 0 10px;">
              <strong style="color: #ec4899; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.03em;">O (Output)</strong>
              <div style="color: var(--text-muted); font-size: 0.6rem; margin-top:2px;">Salidas Clave</div>
              <p style="font-size: 0.75rem; margin-top: 8px; line-height: 1.4; color: #f3f4f6;">${poe.outputs || 'Registros archivados o entregables autorizados.'}</p>
            </div>
            <!-- C -->
            <div style="padding-left: 10px;">
              <strong style="color: #8b5cf6; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.03em;">C (Customer)</strong>
              <div style="color: var(--text-muted); font-size: 0.6rem; margin-top:2px;">Clientes</div>
              <p style="font-size: 0.75rem; margin-top: 8px; line-height: 1.4; color: #f3f4f6;">
                ${poe.area === 'ADM' ? 'Contabilidad / Gerencia General / Entidades de Control / Bancos' : poe.area === 'COM' ? 'Clientes Finales / Administración / Finanzas / Despachos' : 'Sucursales / Dirección de Logística / Auditoría de Inventarios'}
              </p>
            </div>
          </div>
        <!-- REGISTRO DE DESEMPEÑO SIPOC -->
        <div class="doc-section" style="margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 16px;">
          <h4 style="color: #f59e0b; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: #f59e0b;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Bitácora de Desempeño y Calidad SIPOC (Numerales 4.4.1.c y 9.1.1)
          </h4>
          <p class="text-xs text-muted" style="margin-bottom: 12px;">Registre los tiempos de ejecución de cada etapa y evalúe la calidad del entregable final para alimentar los KPIs de cumplimiento.</p>
          
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 16px; margin-bottom: 16px;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 12px;">
              <div>
                <label style="font-size: 0.65rem; color: var(--text-muted); font-weight:600; text-transform:uppercase;">
                  Tiempo Recibo: S -> I
                  <span style="color: #34d399; font-weight: 700; margin-left: 2px;">(Meta: ${Math.round((parseFloat(poe.expectedTime) || 30) * 0.15) || 5}m)</span>
                </label>
                <input type="number" id="sipoc-time-input" value="${Math.round((parseFloat(poe.expectedTime) || 30) * 0.15) || 5}" class="input-text text-xs" style="padding: 6px 10px; margin-top:4px; width: 100%;" placeholder="Minutos">
              </div>
              <div>
                <label style="font-size: 0.65rem; color: var(--text-muted); font-weight:600; text-transform:uppercase;">
                  Tiempo Proceso: P
                  <span style="color: #34d399; font-weight: 700; margin-left: 2px;">(Meta: ${Math.round((parseFloat(poe.expectedTime) || 30) * 0.70) || 20}m)</span>
                </label>
                <input type="number" id="sipoc-time-proc" value="${Math.round((parseFloat(poe.expectedTime) || 30) * 0.70) || 20}" class="input-text text-xs" style="padding: 6px 10px; margin-top:4px; width: 100%;" placeholder="Minutos">
              </div>
              <div>
                <label style="font-size: 0.65rem; color: var(--text-muted); font-weight:600; text-transform:uppercase;">
                  Tiempo Entrega: O -> C
                  <span style="color: #34d399; font-weight: 700; margin-left: 2px;">(Meta: ${Math.max(1, (parseFloat(poe.expectedTime) || 30) - Math.round((parseFloat(poe.expectedTime) || 30) * 0.15) - Math.round((parseFloat(poe.expectedTime) || 30) * 0.70)) || 5}m)</span>
                </label>
                <input type="number" id="sipoc-time-output" value="${Math.max(1, (parseFloat(poe.expectedTime) || 30) - Math.round((parseFloat(poe.expectedTime) || 30) * 0.15) - Math.round((parseFloat(poe.expectedTime) || 30) * 0.70)) || 5}" class="input-text text-xs" style="padding: 6px 10px; margin-top:4px; width: 100%;" placeholder="Minutos">
              </div>
            </div>
            
            <div id="sipoc-efficiency-indicator" style="margin-top: 4px; margin-bottom: 12px; padding: 10px; border-radius: 6px; background: rgba(52, 211, 153, 0.05); border: 1px dashed rgba(52, 211, 153, 0.2); font-size: 0.7rem; color: #34d399; display: flex; align-items: center; justify-content: space-between; transition: all 0.2s;">
              <span>Meta SLA Total: <strong style="font-size: 0.75rem;">${parseFloat(poe.expectedTime) || 30} min</strong></span>
              <span id="sipoc-current-total-span">Total Registrado: <strong>${parseFloat(poe.expectedTime) || 30} min</strong></span>
              <span id="sipoc-efficiency-badge" class="badge bg-success" style="font-size:0.6rem; padding: 2px 6px; border: 1px solid rgba(255,255,255,0.05);">Eficiente</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 12px; margin-bottom: 12px;">
              <div>
                <label style="font-size: 0.65rem; color: var(--text-muted); font-weight:600; text-transform:uppercase;">Calidad del Output</label>
                <select id="sipoc-quality-output" class="input-select text-xs" style="padding: 6px 10px; margin-top:4px; width: 100%;">
                  <option value="100">100% Conforme (Sin errores)</option>
                  <option value="90">90% Conforme (Corrección menor)</option>
                  <option value="75">75% Conforme (Desviación parcial)</option>
                  <option value="50">50% No Conforme (CAPA requerida)</option>
                </select>
              </div>
              <div>
                <label style="font-size: 0.65rem; color: var(--text-muted); font-weight:600; text-transform:uppercase;">Observación / Desviación</label>
                <input type="text" id="sipoc-obs" class="input-text text-xs" style="padding: 6px 10px; margin-top:4px; width: 100%;" placeholder="Ninguna / Conforme">
              </div>
            </div>
            
            <button class="btn btn-primary btn-xs" id="btn-save-sipoc-log" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 8px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
              Registrar Calidad y Tiempos del SIPOC
            </button>
          </div>
          
          <!-- HISTORIAL DE MEDICIONES SIPOC -->
          <div style="margin-top: 14px;">
            <h5 style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px; font-weight: 600;">Historial de Evaluaciones de este Proceso</h5>
            <div id="sipoc-logs-container" style="max-height: 150px; overflow-y: auto; border: 1px solid rgba(255,255,255,0.05); border-radius: 6px; background: rgba(0,0,0,0.15);">
              <!-- Filas de logs -->
            </div>
          </div>
        </div>
      `;
      
      // Enlazar eventos de guardado y dibujo del historial
      setTimeout(() => {
        renderSipocLogsList(poe.code);
        
        // Recalcular eficiencia en vivo
        const timeInputS = document.getElementById('sipoc-time-input');
        const timeInputP = document.getElementById('sipoc-time-proc');
        const timeInputO = document.getElementById('sipoc-time-output');
        const efficiencyInd = document.getElementById('sipoc-efficiency-indicator');
        const currentTotalSpan = document.getElementById('sipoc-current-total-span');
        const efficiencyBadge = document.getElementById('sipoc-efficiency-badge');
        const targetTotal = parseFloat(poe.expectedTime) || 30;
        
        function updateLiveEfficiency() {
          const valS = parseFloat(timeInputS.value) || 0;
          const valP = parseFloat(timeInputP.value) || 0;
          const valO = parseFloat(timeInputO.value) || 0;
          const currentTotal = valS + valP + valO;
          
          currentTotalSpan.innerHTML = `Total Registrado: <strong>${currentTotal} min</strong>`;
          
          if (currentTotal <= targetTotal) {
            efficiencyInd.style.background = 'rgba(52, 211, 153, 0.05)';
            efficiencyInd.style.borderColor = 'rgba(52, 211, 153, 0.2)';
            efficiencyInd.style.color = '#34d399';
            efficiencyBadge.textContent = 'Eficiente';
            efficiencyBadge.className = 'badge bg-success';
          } else {
            const diff = currentTotal - targetTotal;
            efficiencyInd.style.background = 'rgba(239, 68, 68, 0.05)';
            efficiencyInd.style.borderColor = 'rgba(239, 68, 68, 0.2)';
            efficiencyInd.style.color = '#f87171';
            efficiencyBadge.textContent = `Retraso +${diff} min`;
            efficiencyBadge.className = 'badge bg-danger';
          }
        }
        
        if (timeInputS && timeInputP && timeInputO) {
          timeInputS.addEventListener('input', updateLiveEfficiency);
          timeInputP.addEventListener('input', updateLiveEfficiency);
          timeInputO.addEventListener('input', updateLiveEfficiency);
          updateLiveEfficiency();
        }
        
        const btnSave = document.getElementById('btn-save-sipoc-log');
        if (btnSave) {
          btnSave.addEventListener('click', () => {
            const timeS = parseFloat(timeInputS.value) || 0;
            const timeP = parseFloat(timeInputP.value) || 0;
            const timeO = parseFloat(timeInputO.value) || 0;
            const quality = parseFloat(document.getElementById('sipoc-quality-output').value) || 0;
            const obs = document.getElementById('sipoc-obs').value || 'Conforme';
            
            const totalTime = timeS + timeP + timeO;
            
            if (!qmsDb.sipocLogs) qmsDb.sipocLogs = [];
            
            qmsDb.sipocLogs.push({
              id: Date.now(),
              poeCode: poe.code,
              timeS,
              timeP,
              timeO,
              totalTime,
              quality,
              obs,
              date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
            });
            
            // Simular afectación a KPIs del POE
            const expected = parseFloat(poe.expectedTime) || 30;
            let qualityPenalty = 0;
            if (quality < 100) qualityPenalty += (100 - quality) * 0.2;
            if (totalTime > expected) qualityPenalty += (totalTime - expected) * 0.5;
            poe.complianceRate = Math.max(50, Math.min(100, Math.round(poe.complianceRate - qualityPenalty + 2)));
            saveState();
            logPoeInteraction(poe.code);
            renderSipocLogsList(poe.code);
            renderCurrentTab(); // Para actualizar la matriz detrás
            
            // Limpiar inputs y actualizar visualización
            document.getElementById('sipoc-obs').value = '';
            updateLiveEfficiency();
            alert('¡Registro de desempeño SIPOC guardado con éxito! Se han recalculado los KPIs de este proceso.');
          });
        }
      }, 50);
    } else if (type === 'IT') {
      const it = qmsDb.its.find(i => i.code === code);
      if (!it) return;
      logPoeInteraction(it.poeCode);
      
      content.innerHTML = `
        <div class="doc-detail-sections">
          <div class="doc-section">
            <h4>Instructivo de Trabajo (Nivel 3)</h4>
            <p><strong>${it.code}</strong> - ${it.name}</p>
          </div>
          <div class="doc-section">
            <h4>Rol Operativo Responsable</h4>
            <p>${it.role || 'Operador de Área'}</p>
          </div>
          <div class="doc-section">
            <h4>Tiempo Estándar de Ejecución</h4>
            <p>${it.standardTime || 'N/A'}</p>
          </div>
          <div class="doc-section">
            <h4>Checklist de Actividades (Nivel 4)</h4>
            <ul style="padding-left: 20px; list-style-type: decimal; line-height: 1.6; font-size: 0.75rem; color: #f3f4f6; margin-top: 8px;">
              ${(it.checklist || []).map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    } else if (type === 'REG') {
      const reg = qmsDb.registrosTemplates.find(r => r.code === code);
      if (!reg) return;
      logPoeInteraction(reg.process);
      
      const filled = filledRegistros.filter(f => f.code === reg.code);
      let evsHtml = '';
      if (filled.length === 0) {
        evsHtml = '<div class="text-muted text-xs p-3">No hay evidencias físicas o digitales registradas hoy en este formato.</div>';
      } else {
        evsHtml = filled.map(f => `
          <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 10px; border-radius: 6px; margin-bottom: 8px; display:flex; justify-content:space-between; align-items:center;">
            <div>
              <div style="font-weight:600; font-size: 0.75rem; color: #60a5fa;">Cargado por: ${f.owner}</div>
              <div style="font-size:0.65rem; color: var(--text-muted); margin-top:2px;">Sucursal: ${f.branch} | GPS: ${f.gps} | Obs: "${f.comments || 'Ninguna'}"</div>
            </div>
            <div style="text-align:right;">
              <span class="badge badge-outline" style="font-size:0.55rem; padding: 2px 4px;">${f.date}</span>
            </div>
          </div>
        `).join('');
      }
      
      content.innerHTML = `
        <div class="doc-detail-sections">
          <div class="doc-section">
            <h4>Formato de Registro Oficial (Nivel 5)</h4>
            <p><strong>${reg.code}</strong> - ${reg.name}</p>
          </div>
          <div class="doc-section">
            <h4>Propósito / Objetivo</h4>
            <p>${reg.purpose || 'Evidencia de cumplimiento del proceso.'}</p>
          </div>
          <div class="doc-section">
            <h4>Área / Gerencia Propietaria</h4>
            <p>${reg.area === 'ADM' ? 'Administración y Finanzas' : reg.area === 'COM' ? 'Comercialización' : 'Logística y Compras'}</p>
          </div>
          <div class="doc-section" style="margin-top: 16px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 10px;">
              <h4 style="margin: 0;">Evidencias Registradas Hoy (Nivel 5)</h4>
              <button class="btn btn-primary btn-xs" id="btn-fill-record-modal-trace" data-code="${reg.code}">Llenar Nuevo Registro</button>
            </div>
            <div class="evs-list-container" style="max-height: 200px; overflow-y:auto;">
              ${evsHtml}
            </div>
          </div>
        </div>
      `;
      
      setTimeout(() => {
        const btnFillTrace = document.getElementById('btn-fill-record-modal-trace');
        if (btnFillTrace) {
          btnFillTrace.addEventListener('click', () => {
            modalDocDetails.classList.remove('active');
            openFillRecordModal(reg.code);
          });
        }
      }, 50);
    }
    
    modalDocDetails.classList.add('active');
  }

  // RENDERIZAR LISTADO DE LOGS SIPOC
  function renderSipocLogsList(poeCode) {
    const container = document.getElementById('sipoc-logs-container');
    if (!container) return;
    container.innerHTML = '';
    
    if (!qmsDb.sipocLogs) qmsDb.sipocLogs = [];
    
    const logs = qmsDb.sipocLogs.filter(l => l.poeCode === poeCode);
    
    if (logs.length === 0) {
      container.innerHTML = `<div class="text-center text-muted p-4 text-xs">No hay mediciones registradas para este proceso. Ingrese una arriba para iniciar.</div>`;
      return;
    }
    
    const tableHtml = `
      <table style="width: 100%; border-collapse: collapse; font-size: 0.65rem;" class="text-xs">
        <thead>
          <tr style="border-bottom: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); text-align: left;">
            <th style="padding: 6px 10px;">Fecha</th>
            <th style="padding: 6px 10px;">T. Recibo</th>
            <th style="padding: 6px 10px;">T. Proceso</th>
            <th style="padding: 6px 10px;">T. Entrega</th>
            <th style="padding: 6px 10px;">T. Ciclo</th>
            <th style="padding: 6px 10px;">Calidad</th>
            <th style="padding: 6px 10px;">Observación</th>
          </tr>
        </thead>
        <tbody>
          ${logs.map(l => `
            <tr style="border-bottom: 1px solid rgba(255,255,255,0.03);">
              <td style="padding: 6px 10px; color: var(--text-muted);">${l.date}</td>
              <td style="padding: 6px 10px;">${l.timeS} min</td>
              <td style="padding: 6px 10px;">${l.timeP} min</td>
              <td style="padding: 6px 10px;">${l.timeO} min</td>
              <td style="padding: 6px 10px; font-weight:600;">${l.totalTime} min</td>
              <td style="padding: 6px 10px;">
                <span class="badge ${l.quality >= 90 ? 'bg-success' : l.quality >= 75 ? 'bg-warning' : 'bg-danger'}" style="font-size:0.6rem; padding: 1px 4px;">
                  ${l.quality}%
                </span>
              </td>
              <td style="padding: 6px 10px; color: var(--text-muted); text-overflow: ellipsis; white-space: nowrap; overflow: hidden; max-width: 120px;" title="${l.obs}">${l.obs}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    container.innerHTML = tableHtml;
  }

  // MODAL EJECUTAR AUDITORÍA
  const modalAuditForm = document.getElementById('modal-audit-form');
  function openAuditForm(poeCode) {
    const poe = qmsDb.poes.find(p => p.code === poeCode);
    if (!poe) return;
    
    document.getElementById('audit-poe-code').value = poeCode;
    document.getElementById('audit-poe-name').value = `${poe.code} - ${poe.name}`;
    document.getElementById('audit-auditor-name').value = document.getElementById('user-profile-name').textContent;
    document.getElementById('audit-observations').value = '';
    
    // Obtener preguntas de checklist del IT asociado
    const associatedIt = qmsDb.its.find(it => it.poeCode === poeCode);
    const questionsContainer = document.getElementById('audit-questions-list');
    questionsContainer.innerHTML = '';
    
    const checklistItems = associatedIt ? associatedIt.checklist : [
      "¿El personal involucrado conoce el objetivo y alcance del procedimiento?",
      "¿Se archivan adecuadamente las evidencias documentales requeridas?",
      "¿Los tiempos estándar de ejecución se encuentran dentro de las metas?"
    ];
    
    checklistItems.forEach((q, idx) => {
      const group = document.createElement('div');
      group.className = 'form-group m-t-2';
      group.innerHTML = `
        <label style="font-weight:normal">${idx + 1}. ${q}</label>
        <div class="input-addon-group m-t-1">
          <label><input type="radio" name="q-${idx}" value="1" checked> Conforme (Sí)</label>
          <label style="margin-left:16px"><input type="radio" name="q-${idx}" value="0"> No Conforme (No)</label>
        </div>
      `;
      questionsContainer.appendChild(group);
    });
    
    modalAuditForm.classList.add('active');
  }

  // Enviar Auditoría
  document.getElementById('audit-execution-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const poeCode = document.getElementById('audit-poe-code').value;
    const auditor = document.getElementById('audit-auditor-name').value;
    const observations = document.getElementById('audit-observations').value;
    
    // Calcular score
    const questions = document.getElementById('audit-questions-list').children;
    let scoreSum = 0;
    let totalQuestions = questions.length;
    let hasNC = false;
    
    for (let i = 0; i < totalQuestions; i++) {
      const val = parseInt(document.querySelector(`input[name="q-${i}"]:checked`).value);
      scoreSum += val;
      if (val === 0) hasNC = true;
    }
    
    const score = Math.round((scoreSum / totalQuestions) * 100);
    
    const auditId = `AUD-${new Date().getFullYear()}-${String(qmsDb.audits.length + 1).padStart(3, '0')}`;
    
    const newAudit = {
      id: auditId,
      poeCode,
      date: new Date().toISOString().split('T')[0],
      auditor,
      score,
      findings: observations,
      nonConformities: hasNC,
      status: hasNC ? "En Seguimiento" : "Cerrada"
    };
    
    // Si tiene No Conformidad, instanciar Acción CAPA asociada
    if (hasNC) {
      newAudit.ncDetails = {
        description: `Se detectaron fallas de conformidad física en auditoría ${auditId} sobre ${poeCode}. observaciones: "${observations}"`,
        correctiveAction: "Re-entrenamiento de personal, auditoría de registros y seguimiento de firmas digitales.",
        preventiveAction: "Charlas quincenales de inducción a la calidad ISO 9001.",
        owner: auditor,
        deadline: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 15 días límite
        priority: "Alta",
        cost: 500,
        impact: "Desviación documental menor",
        risk: "Medio",
        history: [{ date: new Date().toISOString().split('T')[0], user: auditor, comment: "Acción correctiva automatizada por auditoría fallida." }]
      };
      
      // Bajar compliance del POE
      const poe = qmsDb.poes.find(p => p.code === poeCode);
      if (poe) {
        poe.complianceRate = Math.max(50, poe.complianceRate - 20);
      }
    } else {
      // Subir compliance del POE
      const poe = qmsDb.poes.find(p => p.code === poeCode);
      if (poe) {
        poe.complianceRate = Math.min(100, poe.complianceRate + 5);
      }
    }
    
    qmsDb.audits.push(newAudit);
    saveState();
    logPoeInteraction(poeCode);
    
    modalAuditForm.classList.remove('active');
    
    if (hasNC) {
      alert(`Auditoría finalizada con ${score}%. SE HA GENERADO UNA NO CONFORMIDAD (CAPA) AUTOMÁTICA.`);
      notifications.unshift({
        id: Date.now(),
        title: "No Conformidad Detectada",
        body: `La auditoría ${auditId} sobre ${poeCode} falló con ${score}%. Plan CAPA creado.`,
        time: "Hace 1 seg",
        area: qmsDb.poes.find(p => p.code === poeCode).area
      });
      saveState();
      
      // Mover a pestaña CAPA
      document.querySelector('[data-tab="capa-panel"]').click();
    } else {
      alert(`Auditoría finalizada exitosamente con ${score}%. Conformidad total.`);
      renderCurrentTab();
    }
  });

  // MODAL ACCION CAPA MANUAL
  const btnNewCapa = document.getElementById('btn-new-capa');
  if (btnNewCapa) {
    btnNewCapa.addEventListener('click', () => {
      // Cargar lista de POEs en el selector
      const select = document.getElementById('capa-form-poe');
      select.innerHTML = '';
      
      qmsDb.poes.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p.code;
        opt.textContent = `${p.code} - ${p.name}`;
        select.appendChild(opt);
      });
      
      document.getElementById('capa-form-desc').value = '';
      document.getElementById('capa-form-corrective').value = '';
      document.getElementById('capa-form-owner').value = document.getElementById('user-profile-name').textContent;
      document.getElementById('capa-form-deadline').value = '';
      document.getElementById('capa-form-cost').value = '';
      
      document.getElementById('modal-capa-form').classList.add('active');
    });
  }

  document.getElementById('capa-execution-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const poeCode = document.getElementById('capa-form-poe').value;
    const desc = document.getElementById('capa-form-desc').value;
    const corrective = document.getElementById('capa-form-corrective').value;
    const owner = document.getElementById('capa-form-owner').value;
    const deadline = document.getElementById('capa-form-deadline').value;
    const priority = document.getElementById('capa-form-priority').value;
    const cost = parseInt(document.getElementById('capa-form-cost').value) || 0;
    
    const auditId = `CAPA-MAN-${Date.now().toString().slice(-4)}`;
    
    const newCapa = {
      id: auditId,
      poeCode,
      date: new Date().toISOString().split('T')[0],
      auditor: owner,
      score: 50,
      findings: desc,
      nonConformities: true,
      status: "En Seguimiento",
      ncDetails: {
        description: desc,
        correctiveAction: corrective,
        preventiveAction: "Acción preventiva manual de gerencia.",
        owner,
        deadline,
        priority,
        cost,
        impact: "Desviación operativa registrada",
        risk: priority === 'Alta' ? 'Alto' : 'Medio',
        history: [{ date: new Date().toISOString().split('T')[0], user: owner, comment: "Creada manualmente." }]
      }
    };
    
    qmsDb.audits.push(newCapa);
    logPoeInteraction(poeCode);
    
    // Afectar compliance del POE
    const poe = qmsDb.poes.find(p => p.code === poeCode);
    if (poe) {
      poe.complianceRate = Math.max(50, poe.complianceRate - 15);
    }
    
    saveState();
    
    document.getElementById('modal-capa-form').classList.remove('active');
    alert('Plan CAPA Registrado exitosamente en el sistema.');
    
    notifications.unshift({
      id: Date.now(),
      title: "Nueva CAPA Registrada",
      body: `Desviación reportada en ${poeCode} por ${owner}. Límite: ${deadline}.`,
      time: "Hace 1 seg",
      area: poe ? poe.area : 'ADM'
    });
    saveState();
    
    renderCAPA();
  });

  // 14. SISTEMA DE NOTIFICACIONES DESKTOP
  const notifToggle = document.getElementById('notifications-toggle');
  const notifPanel = document.getElementById('notifications-panel');
  
  if (notifToggle) {
    notifToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      notifPanel.classList.toggle('active');
    });
  }
  
  document.addEventListener('click', () => {
    if (notifPanel) notifPanel.classList.remove('active');
  });

  function renderNotificationsDropdown() {
    const list = document.getElementById('notifications-list');
    list.innerHTML = '';
    
    if (notifications.length === 0) {
      list.innerHTML = '<div class="text-muted text-sm text-center p-3">No hay notificaciones pendientes.</div>';
      return;
    }
    
    notifications.forEach(n => {
      const item = document.createElement('div');
      item.className = 'notif-item';
      item.innerHTML = `
        <span class="notif-title">${n.title}</span>
        <span class="notif-body">${n.body}</span>
        <span class="notif-time">${n.time}</span>
      `;
      list.appendChild(item);
    });
  }

  document.getElementById('clear-notifications').addEventListener('click', (e) => {
    e.stopPropagation();
    notifications = [];
    saveState();
    renderNotificationsDropdown();
    updateBadges();
  });

  function addNotificationItem(notif) {
    // Generar flotante toast
    const toast = document.createElement('div');
    toast.className = 'semaphore-item';
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.zIndex = '999';
    toast.style.backgroundColor = '#131924';
    toast.style.border = '1px solid #3b82f6';
    toast.style.borderRadius = '8px';
    toast.style.padding = '16px';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
    toast.style.maxWidth = '300px';
    toast.style.display = 'flex';
    toast.style.flexDirection = 'column';
    toast.style.gap = '4px';
    
    toast.innerHTML = `
      <strong style="color:#3b82f6">${notif.title}</strong>
      <span style="font-size:0.8rem">${notif.body}</span>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 500);
    }, 4000);
    
    renderNotificationsDropdown();
  }

  // CLOCK EN TIEMPO REAL
  function startClock() {
    const clock = document.getElementById('clock');
    setInterval(() => {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString();
    }, 1000);
  }

  // 14. LOGICA DE MANUAL Y GUÍAS DE SIMULACIÓN (HELP CENTER)
  // Sub-tabs de ayuda
  const helpTabButtons = document.querySelectorAll('[data-help-tab]');
  const helpTabContents = document.querySelectorAll('.help-tab-content');

  helpTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      helpTabButtons.forEach(b => b.classList.remove('active'));
      helpTabContents.forEach(c => c.style.display = 'none');

      btn.classList.add('active');
      const targetHelpTab = btn.getAttribute('data-help-tab');
      document.getElementById(`help-${targetHelpTab}-content`).style.display = 'block';
    });
  });

  // Sub-tabs de ayuda por área (Manuales detallados)
  const subHelpTabButtons = document.querySelectorAll('[data-sub-help-tab]');
  const subHelpTabContents = document.querySelectorAll('.sub-help-tab-content');

  subHelpTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      subHelpTabButtons.forEach(b => b.classList.remove('active'));
      subHelpTabContents.forEach(c => c.style.display = 'none');

      btn.classList.add('active');
      const targetSubHelpTab = btn.getAttribute('data-sub-help-tab');
      const targetEl = document.getElementById(`sub-help-${targetSubHelpTab}-content`);
      if (targetEl) targetEl.style.display = 'block';
    });
  });

  // Función auxiliar para cambiar de tab programáticamente
  function switchTab(tabId) {
    const btn = document.querySelector(`.sidebar-menu .menu-item[data-tab="${tabId}"]`);
    if (btn) {
      btn.click();
    }
  }
  window.switchTab = switchTab;

  // Escenario 1: Firma Digital y GPS (Nivel 5)
  const btnSim1 = document.getElementById('btn-sim-scenario-1');
  if (btnSim1) {
    btnSim1.addEventListener('click', () => {
      switchTab('doc-explorer');
      setTimeout(() => {
        openFillRecordModal('REG-ADM-001');
      }, 300);
    });
  }

  // Escenario 2: Auditoría Fallida e Incidente CAPA
  const btnSim2 = document.getElementById('btn-sim-scenario-2');
  if (btnSim2) {
    btnSim2.addEventListener('click', () => {
      const currentRole = roleSelect.value;
      if (currentRole === 'Empleado') {
        roleSelect.value = 'Admin';
        roleSelect.dispatchEvent(new Event('change'));
      }
      
      switchTab('audits-panel');
      setTimeout(() => {
        openAuditForm('POE-LOG-11');
        document.getElementById('audit-observations').value = 'El indicador OTIF de Logística y Compras cayó al 89.5%, incumpliendo la meta de calidad del 92% debido a entregas tardías.';
        setTimeout(() => {
          const radioNo = document.querySelector('input[name="q-1"][value="0"]');
          if (radioNo) radioNo.checked = true;
        }, 100);
      }, 300);
    });
  }

  // Escenario 3: Alertas de Vencimiento Documental
  const btnSim3 = document.getElementById('btn-sim-scenario-3');
  if (btnSim3) {
    btnSim3.addEventListener('click', () => {
      switchTab('expiry-config');
      setTimeout(() => {
        const btnCheck = document.getElementById('btn-trigger-daily-check');
        if (btnCheck) btnCheck.click();
      }, 300);
    });
  }

  // Escenario 4: Auditoría de IA y Reportes Excel
  const btnSim4 = document.getElementById('btn-sim-scenario-4');
  if (btnSim4) {
    btnSim4.addEventListener('click', () => {
      switchTab('ai-hub');
      setTimeout(() => {
        document.getElementById('ai-report-type').value = 'weekly';
        const btnGen = document.getElementById('btn-generate-ai-report');
        if (btnGen) btnGen.click();
      }, 300);
    });
  }

  // 14.5 LOGICA DE MINERÍA DE PROCESOS (PROCESS MINING)
  
  // Base de datos de logs de eventos en memoria y localStorage
  const defaultMiningLogs = [
    // Caso 1: POE-ADM-01 (Conforme)
    { id: 1, caseId: "CASE-101", timestamp: "2026-07-20T08:00:00Z", activity: "Registro Creado", operator: "Ing. Emilio R.", poeCode: "POE-ADM-01", duration: 0, conforming: true },
    { id: 2, caseId: "CASE-101", timestamp: "2026-07-20T08:30:00Z", activity: "Firma Registrada", operator: "Ing. Emilio R.", poeCode: "POE-ADM-01", duration: 0.5, conforming: true },
    { id: 3, caseId: "CASE-101", timestamp: "2026-07-20T09:00:00Z", activity: "GPS Capturado", operator: "Ing. Emilio R.", poeCode: "POE-ADM-01", duration: 0.5, conforming: true },
    { id: 4, caseId: "CASE-101", timestamp: "2026-07-20T11:00:00Z", activity: "Auditoría Evaluada", operator: "Ing. Carlos R.", poeCode: "POE-ADM-01", duration: 2.0, conforming: true },
    { id: 5, caseId: "CASE-101", timestamp: "2026-07-20T11:15:00Z", activity: "Caso Concluido", operator: "Ing. Carlos R.", poeCode: "POE-ADM-01", duration: 0.25, conforming: true },

    // Caso 2: POE-ADM-01 (Desviación: Firma tardía)
    { id: 6, caseId: "CASE-102", timestamp: "2026-07-21T09:00:00Z", activity: "Registro Creado", operator: "Ing. Emilio R.", poeCode: "POE-ADM-01", duration: 0, conforming: true },
    { id: 7, caseId: "CASE-102", timestamp: "2026-07-22T10:00:00Z", activity: "Firma Registrada", operator: "Ing. Emilio R.", poeCode: "POE-ADM-01", duration: 25.0, conforming: false },
    { id: 8, caseId: "CASE-102", timestamp: "2026-07-22T10:15:00Z", activity: "GPS Capturado", operator: "Ing. Emilio R.", poeCode: "POE-ADM-01", duration: 0.25, conforming: true },
    { id: 9, caseId: "CASE-102", timestamp: "2026-07-22T14:00:00Z", activity: "Auditoría Evaluada", operator: "Ing. Carlos R.", poeCode: "POE-ADM-01", duration: 3.75, conforming: true },
    { id: 10, caseId: "CASE-102", timestamp: "2026-07-22T14:10:00Z", activity: "Caso Concluido", operator: "Ing. Carlos R.", poeCode: "POE-ADM-01", duration: 0.16, conforming: true },

    // Caso 3: POE-LOG-11 (Conforme con CAPA)
    { id: 11, caseId: "CASE-103", timestamp: "2026-07-22T08:00:00Z", activity: "Registro Creado", operator: "Lic. Laura G.", poeCode: "POE-LOG-11", duration: 0, conforming: true },
    { id: 12, caseId: "CASE-103", timestamp: "2026-07-22T08:15:00Z", activity: "Firma Registrada", operator: "Lic. Laura G.", poeCode: "POE-LOG-11", duration: 0.25, conforming: true },
    { id: 13, caseId: "CASE-103", timestamp: "2026-07-22T08:20:00Z", activity: "GPS Capturado", operator: "Lic. Laura G.", poeCode: "POE-LOG-11", duration: 0.08, conforming: true },
    { id: 14, caseId: "CASE-103", timestamp: "2026-07-22T12:00:00Z", activity: "Auditoría Evaluada", operator: "Ing. Carlos R.", poeCode: "POE-LOG-11", duration: 3.67, conforming: true },
    { id: 15, caseId: "CASE-103", timestamp: "2026-07-22T12:30:00Z", activity: "CAPA Abierta", operator: "Ing. Carlos R.", poeCode: "POE-LOG-11", duration: 0.5, conforming: true },
    { id: 16, caseId: "CASE-103", timestamp: "2026-07-24T15:00:00Z", activity: "CAPA Cerrada", operator: "Lic. Laura G.", poeCode: "POE-LOG-11", duration: 50.5, conforming: true },
    { id: 17, caseId: "CASE-103", timestamp: "2026-07-24T15:30:00Z", activity: "Caso Concluido", operator: "Ing. Carlos R.", poeCode: "POE-LOG-11", duration: 0.5, conforming: true }
  ];

  let miningLogs = JSON.parse(localStorage.getItem('SIDE_QMS_MINING_LOGS')) || defaultMiningLogs;

  function populateMiningPoeSelect() {
    const select = document.getElementById('mining-poe-select');
    if (!select) return;
    select.innerHTML = '';
    
    // Contenedores del custom dropdown
    const customGLOBAL = document.getElementById('items-mining-GLOBAL');
    const customADM = document.getElementById('items-mining-ADM');
    const customCOM = document.getElementById('items-mining-COM');
    const customLOG = document.getElementById('items-mining-LOG');
    
    if (customGLOBAL) customGLOBAL.innerHTML = '';
    if (customADM) customADM.innerHTML = '';
    if (customCOM) customCOM.innerHTML = '';
    if (customLOG) customLOG.innerHTML = '';
    
    // Consolidados y Globales
    const globalOptions = [
      { code: 'TOTAL-SGC', name: 'Total SGC (Todos los Procesos)', color: '#10b981' },
      { code: 'AREA-ADM', name: 'Consolidado: Administración y Finanzas', color: '#10b981' },
      { code: 'AREA-COM', name: 'Consolidado: Comercialización', color: '#10b981' },
      { code: 'AREA-LOG', name: 'Consolidado: Logística y Compras', color: '#10b981' }
    ];
    
    globalOptions.forEach(opt => {
      // 1. Select oculto
      const option = document.createElement('option');
      option.value = opt.code;
      option.textContent = opt.name;
      select.appendChild(option);
      
      // 2. Custom dropdown
      if (customGLOBAL) {
        const itemEl = document.createElement('div');
        itemEl.className = 'dropdown-item-poe';
        itemEl.setAttribute('data-value', opt.code);
        itemEl.style.padding = '8px 24px';
        itemEl.style.cursor = 'pointer';
        itemEl.style.color = opt.color;
        itemEl.style.fontSize = '0.8rem';
        itemEl.style.fontWeight = '600';
        itemEl.style.transition = 'all 0.2s';
        itemEl.textContent = opt.name;
        
        itemEl.addEventListener('click', (e) => {
          e.stopPropagation();
          document.querySelectorAll('.dropdown-item-poe').forEach(el => el.classList.remove('selected'));
          itemEl.classList.add('selected');
          
          document.getElementById('mining-poe-dropdown-label').textContent = opt.name;
          select.value = opt.code;
          select.dispatchEvent(new Event('change'));
          
          document.getElementById('mining-poe-dropdown-menu').style.display = 'none';
          document.getElementById('mining-poe-dropdown-arrow').style.transform = 'rotate(0deg)';
        });
        customGLOBAL.appendChild(itemEl);
      }
    });
    
    qmsDb.poes.forEach(poe => {
      // 1. Población del select oculto (compatibilidad)
      const option = document.createElement('option');
      option.value = poe.code;
      option.textContent = `${poe.code} - ${poe.name}`;
      select.appendChild(option);
      
      // 2. Población del dropdown personalizado
      const itemEl = document.createElement('div');
      itemEl.className = 'dropdown-item-poe';
      itemEl.setAttribute('data-value', poe.code);
      itemEl.style.padding = '8px 24px';
      itemEl.style.cursor = 'pointer';
      itemEl.style.color = '#f3f4f6';
      itemEl.style.fontSize = '0.8rem';
      itemEl.style.transition = 'all 0.2s';
      itemEl.textContent = `${poe.code} - ${poe.name}`;
      
      itemEl.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Marcar seleccionado visualmente
        document.querySelectorAll('.dropdown-item-poe').forEach(el => el.classList.remove('selected'));
        itemEl.classList.add('selected');
        
        // Actualizar etiqueta del botón
        document.getElementById('mining-poe-dropdown-label').textContent = `${poe.code} - ${poe.name}`;
        
        // Cambiar valor del select oculto y disparar evento change
        select.value = poe.code;
        select.dispatchEvent(new Event('change'));
        
        // Cerrar menú
        document.getElementById('mining-poe-dropdown-menu').style.display = 'none';
        document.getElementById('mining-poe-dropdown-arrow').style.transform = 'rotate(0deg)';
      });
      
      if (poe.area === 'ADM' && customADM) {
        customADM.appendChild(itemEl);
      } else if (poe.area === 'COM' && customCOM) {
        customCOM.appendChild(itemEl);
      } else if (poe.area === 'LOG' && customLOG) {
        customLOG.appendChild(itemEl);
      }
    });
    
    // Seleccionar por defecto TOTAL-SGC si existe
    select.value = 'TOTAL-SGC';
    document.getElementById('mining-poe-dropdown-label').textContent = 'Total SGC (Todos los Procesos)';
    const defaultItem = document.querySelector(`.dropdown-item-poe[data-value="TOTAL-SGC"]`);
    if (defaultItem) defaultItem.classList.add('selected');
  }

  function renderProcessMining(poeCode) {
    const tbody = document.getElementById('mining-logs-table-body');
    const container = document.getElementById('mining-flow-graph');
    if (!tbody || !container) return;
    
    // Filtrar por POE o por Área o por Total
    let logs = [];
    if (poeCode === 'TOTAL-SGC') {
      logs = miningLogs;
    } else if (poeCode.startsWith('AREA-')) {
      const area = poeCode.replace('AREA-', '');
      const areaPoes = qmsDb.poes.filter(p => p.area === area).map(p => p.code);
      logs = miningLogs.filter(l => areaPoes.includes(l.poeCode));
    } else {
      logs = miningLogs.filter(l => l.poeCode === poeCode);
    }
    
    if (logs.length === 0) {
      container.innerHTML = `<div class="text-center text-muted p-8 w-full">No hay eventos cargados para este proceso. Presiona "Simular Inyección de 100 Casos" para generar y minar el historial de logs de calidad.</div>`;
      tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted p-4">No hay datos en el log de eventos de minería.</td></tr>`;
      document.getElementById('mining-kpi-cycle-time').textContent = '--';
      document.getElementById('mining-kpi-conformance').textContent = '--';
      document.getElementById('mining-kpi-cases').textContent = '0';
      document.getElementById('mining-kpi-bottleneck').textContent = 'Ninguno';
      return;
    }

    // Calcular Casos y KPIs
    const casesMap = {};
    logs.forEach(l => {
      if (!casesMap[l.caseId]) {
        casesMap[l.caseId] = [];
      }
      casesMap[l.caseId].push(l);
    });

    const caseIds = Object.keys(casesMap);
    let totalCycleTime = 0;
    let conformingCases = 0;

    caseIds.forEach(cid => {
      const cLogs = casesMap[cid].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      const first = new Date(cLogs[0].timestamp);
      const last = new Date(cLogs[cLogs.length - 1].timestamp);
      const cycleHrs = (last - first) / (1000 * 60 * 60);
      totalCycleTime += cycleHrs;

      const hasCapaOpen = cLogs.some(l => l.activity === 'CAPA Abierta');
      const hasCapaClose = cLogs.some(l => l.activity === 'CAPA Cerrada');
      const isConforming = cLogs.every(l => l.conforming) && (!hasCapaOpen || hasCapaClose);
      if (isConforming) conformingCases++;
    });

    const avgCycleTime = (totalCycleTime / caseIds.length).toFixed(1);
    const conformanceRate = ((conformingCases / caseIds.length) * 100).toFixed(0);

    document.getElementById('mining-kpi-cases').textContent = caseIds.length;
    document.getElementById('mining-kpi-cycle-time').textContent = `${avgCycleTime}h`;
    document.getElementById('mining-kpi-conformance').textContent = `${conformanceRate}%`;

    // Filtrar la lista de logs para la tabla de eventos según el selector de visualización
    const logFilter = document.getElementById('mining-log-filter')?.value || 'all';
    let logsToShow = logs;
    
    if (logFilter === 'deviated') {
      const deviatedCaseIds = new Set(
        logs.filter(l => l.activity === 'CAPA Abierta').map(l => l.caseId)
      );
      logsToShow = logs.filter(l => deviatedCaseIds.has(l.caseId));
    }

    // Renderizar Logs en la Tabla
    tbody.innerHTML = '';
    
    if (logsToShow.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted p-4">No se encontraron eventos con los filtros actuales.</td></tr>`;
    } else {
      logsToShow.slice().sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp)).forEach(l => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="font-mono">${l.caseId}</td>
          <td>${new Date(l.timestamp).toLocaleString()}</td>
          <td><strong>${l.activity}</strong></td>
          <td>${l.operator}</td>
          <td class="font-mono">${l.duration > 0 ? `${l.duration.toFixed(1)}h` : '--'}</td>
          <td><span class="badge ${l.conforming ? 'bg-success' : 'bg-danger'}">${l.conforming ? 'Conforme' : 'Desviado'}</span></td>
        `;
        tbody.appendChild(tr);
      });
    }

    // Calcular Tiempos de Transición (Mapear Transiciones entre Actividades)
    const transitions = {
      'Registro Creado -> Firma Registrada': { sum: 0, count: 0 },
      'Firma Registrada -> GPS Capturado': { sum: 0, count: 0 },
      'GPS Capturado -> Auditoría Evaluada': { sum: 0, count: 0 },
      'Auditoría Evaluada -> Caso Concluido': { sum: 0, count: 0 },
      'Auditoría Evaluada -> CAPA Abierta': { sum: 0, count: 0 },
      'CAPA Abierta -> CAPA Cerrada': { sum: 0, count: 0 },
      'CAPA Cerrada -> Caso Concluido': { sum: 0, count: 0 }
    };

    caseIds.forEach(cid => {
      const cLogs = casesMap[cid].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      for (let i = 0; i < cLogs.length - 1; i++) {
        const from = cLogs[i].activity;
        const to = cLogs[i+1].activity;
        const key = `${from} -> ${to}`;
        if (transitions[key]) {
          const fromTime = new Date(cLogs[i].timestamp);
          const toTime = new Date(cLogs[i+1].timestamp);
          const diffHrs = (toTime - fromTime) / (1000 * 60 * 60);
          transitions[key].sum += diffHrs;
          transitions[key].count++;
        }
      }
    });

    // Encontrar Cuello de Botella
    let maxAvgTime = 0;
    let bottleneckTransition = 'Ninguno';
    Object.keys(transitions).forEach(key => {
      const t = transitions[key];
      if (t.count > 0) {
        const avg = t.sum / t.count;
        t.avg = avg;
        if (avg > maxAvgTime) {
          maxAvgTime = avg;
          bottleneckTransition = key;
        }
      } else {
        transitions[key].avg = 0;
      }
    });

    document.getElementById('mining-kpi-bottleneck').textContent = maxAvgTime > 0 ? `${bottleneckTransition.split(' -> ')[0]} (${maxAvgTime.toFixed(1)}h)` : 'Ninguno';

    // RENDERIZAR EL GRAFO DE PROCESO
    container.innerHTML = '';
    
    const nodes = [
      { id: 'start', label: 'Inicio', type: 'node-start', x: 5, y: 35 },
      { id: 'register', label: 'Registro Creado', type: 'node-activity', x: 20, y: 35 },
      { id: 'signature', label: 'Firma Registrada', type: 'node-activity', x: 36, y: 35 },
      { id: 'gps', label: 'GPS Capturado', type: 'node-activity', x: 52, y: 35 },
      { id: 'audit', label: 'Auditoría', type: 'node-activity', x: 68, y: 35 },
      { id: 'capa', label: 'Plan CAPA', type: 'node-capa', x: 68, y: 75 },
      { id: 'end', label: 'Caso Cerrado', type: 'node-end', x: 86, y: 35 }
    ];

    nodes.forEach(n => {
      const nodeEl = document.createElement('div');
      nodeEl.className = `mining-node ${n.type}`;
      nodeEl.id = `node-mining-${n.id}`;
      nodeEl.style.position = 'absolute';
      nodeEl.style.left = `${n.x}%`;
      nodeEl.style.top = `${n.y}%`;
      
      if (maxAvgTime > 12) {
        const targetNodeId = bottleneckTransition.split(' -> ')[1];
        const matchId = targetNodeId === 'Firma Registrada' ? 'signature' :
                        targetNodeId === 'GPS Capturado' ? 'gps' :
                        targetNodeId === 'Auditoría Evaluada' ? 'audit' :
                        targetNodeId === 'CAPA Abierta' ? 'capa' :
                        targetNodeId === 'CAPA Cerrada' ? 'capa' :
                        targetNodeId === 'Caso Concluido' ? 'end' : '';
        if (n.id === matchId) {
          nodeEl.classList.add('bottleneck-pulse');
        }
      }

      nodeEl.innerHTML = `
        <span>${n.label}</span>
        <span class="mining-node-value">N=${caseIds.filter(cid => casesMap[cid].some(l => l.activity === (n.label === 'Inicio' ? 'Registro Creado' : n.label === 'Auditoría' ? 'Auditoría Evaluada' : n.label === 'Caso Cerrado' ? 'Caso Concluido' : n.label === 'Plan CAPA' ? 'CAPA Abierta' : n.label))).length}</span>
      `;
      container.appendChild(nodeEl);
    });

    setTimeout(() => {
      const edges = [
        { from: 'start', to: 'register', labelKey: 'Registro Creado -> Firma Registrada', val: transitions['Registro Creado -> Firma Registrada'].avg },
        { from: 'register', to: 'signature', labelKey: 'Registro Creado -> Firma Registrada', val: transitions['Registro Creado -> Firma Registrada'].avg },
        { from: 'signature', to: 'gps', labelKey: 'Firma Registrada -> GPS Capturado', val: transitions['Firma Registrada -> GPS Capturado'].avg },
        { from: 'gps', to: 'audit', labelKey: 'GPS Capturado -> Auditoría Evaluada', val: transitions['GPS Capturado -> Auditoría Evaluada'].avg },
        { from: 'audit', to: 'end', labelKey: 'Auditoría Evaluada -> Caso Concluido', val: transitions['Auditoría Evaluada -> Caso Concluido'].avg },
        { from: 'audit', to: 'capa', labelKey: 'Auditoría Evaluada -> CAPA Abierta', val: transitions['Auditoría Evaluada -> CAPA Abierta'].avg },
        { from: 'capa', to: 'end', labelKey: 'CAPA Cerrada -> Caso Concluido', val: transitions['CAPA Cerrada -> Caso Concluido'].avg }
      ];

      edges.forEach(ed => {
        const fromNode = document.getElementById(`node-mining-${ed.from}`);
        const toNode = document.getElementById(`node-mining-${ed.to}`);
        if (!fromNode || !toNode) return;

        const transObj = transitions[ed.labelKey] || { count: 0 };
        let labelText = '';
        let count = 0;
        let isSlow = false;
        
        if (ed.from === 'audit' && ed.to === 'end') {
          const direct = transitions['Auditoría Evaluada -> Caso Concluido'];
          labelText = direct.count > 0 ? `${direct.avg.toFixed(1)}h` : '';
          count = direct.count;
          isSlow = direct.avg > 12;
        } else if (ed.from === 'audit' && ed.to === 'capa') {
          const toCapa = transitions['Auditoría Evaluada -> CAPA Abierta'];
          labelText = toCapa.count > 0 ? `${toCapa.avg.toFixed(1)}h` : '';
          count = toCapa.count;
          isSlow = toCapa.avg > 12;
        } else if (ed.from === 'capa' && ed.to === 'end') {
          const toEnd = transitions['CAPA Cerrada -> Caso Concluido'];
          const capaDuration = transitions['CAPA Abierta -> CAPA Cerrada'];
          const totalCapaTime = (toEnd.avg || 0) + (capaDuration.avg || 0);
          labelText = toEnd.count > 0 ? `${totalCapaTime.toFixed(1)}h (Remediado)` : '';
          count = toEnd.count;
          isSlow = totalCapaTime > 24;
        } else {
          labelText = transObj.count > 0 ? `${transObj.avg.toFixed(1)}h` : '0h';
          count = transObj.count;
          isSlow = transObj.avg > 12;
        }

        if (count === 0 && ed.from === 'audit' && ed.to === 'capa') return;
        if (count === 0 && ed.from === 'capa' && ed.to === 'end') return;

        const x1 = fromNode.offsetLeft + fromNode.offsetWidth / 2;
        const y1 = fromNode.offsetTop + fromNode.offsetHeight / 2;
        const x2 = toNode.offsetLeft + toNode.offsetWidth / 2;
        const y2 = toNode.offsetTop + toNode.offsetHeight / 2;

        const dx = x2 - x1;
        const dy = y2 - y1;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;

        const edgeEl = document.createElement('div');
        edgeEl.className = `mining-edge ${isSlow ? 'slow' : 'normal'}`;
        edgeEl.style.width = `${distance}px`;
        edgeEl.style.left = `${x1}px`;
        edgeEl.style.top = `${y1}px`;
        edgeEl.style.transform = `rotate(${angle}deg)`;

        edgeEl.innerHTML = `
          <div class="mining-edge-arrow"></div>
          ${labelText ? `<div class="mining-edge-label" style="transform: translateX(-50%) rotate(${-angle}deg)">${labelText}</div>` : ''}
        `;
        container.appendChild(edgeEl);
      });
    }, 150);
  }

  function inject100MiningEvents() {
    const selectedPoeCode = document.getElementById('mining-poe-select').value;
    
    // Obtener subconjunto de POEs para distribuir los casos
    let targetPoes = [];
    if (selectedPoeCode === 'TOTAL-SGC') {
      targetPoes = qmsDb.poes.map(p => p.code);
    } else if (selectedPoeCode.startsWith('AREA-')) {
      const area = selectedPoeCode.replace('AREA-', '');
      targetPoes = qmsDb.poes.filter(p => p.area === area).map(p => p.code);
    } else {
      targetPoes = [selectedPoeCode];
    }
    
    if (targetPoes.length === 0) return;
    
    // Obtener número de caso base a partir de los ya existentes
    const caseNums = miningLogs.map(l => {
      const match = l.caseId.match(/CASE-(\d+)/);
      return match ? parseInt(match[1]) : 100;
    });
    let baseCaseNum = Math.max(...caseNums, 103) + 1;
    
    const operators = ["Juan Pérez", "Ing. Emilio R.", "Lic. Laura G.", "Tgo. Alberto M.", "Ing. Carlos R."];
    
    for (let i = 0; i < 20; i++) {
      const caseId = `CASE-${baseCaseNum + i}`;
      const operator = operators[Math.floor(Math.random() * operators.length)];
      const poeCode = targetPoes[Math.floor(Math.random() * targetPoes.length)];
      
      const dateBase = new Date();
      dateBase.setDate(dateBase.getDate() - Math.floor(Math.random() * 20));
      dateBase.setHours(8, 0, 0, 0);

      const rand = Math.random();
      const isDelayed = rand < 0.40; // 40% de cuello de botella para hacer la simulación interesante
      const hasCAPA = rand > 0.65; // 35% de no conformidad

      let timestamp = new Date(dateBase);
      miningLogs.push({
        id: miningLogs.length + 1,
        caseId: caseId,
        timestamp: timestamp.toISOString(),
        activity: "Registro Creado",
        operator: operator,
        poeCode: poeCode,
        duration: 0,
        conforming: true
      });

      const delayHrs = isDelayed ? (12 + Math.random() * 28) : (0.1 + Math.random() * 1.5);
      timestamp.setMinutes(timestamp.getMinutes() + Math.round(delayHrs * 60));
      miningLogs.push({
        id: miningLogs.length + 1,
        caseId: caseId,
        timestamp: timestamp.toISOString(),
        activity: "Firma Registrada",
        operator: operator,
        poeCode: poeCode,
        duration: delayHrs,
        conforming: !isDelayed
      });

      const gpsHrs = 0.05 + Math.random() * 0.2;
      timestamp.setMinutes(timestamp.getMinutes() + Math.round(gpsHrs * 60));
      miningLogs.push({
        id: miningLogs.length + 1,
        caseId: caseId,
        timestamp: timestamp.toISOString(),
        activity: "GPS Capturado",
        operator: operator,
        poeCode: poeCode,
        duration: gpsHrs,
        conforming: true
      });

      const auditHrs = 1 + Math.random() * 4;
      timestamp.setMinutes(timestamp.getMinutes() + Math.round(auditHrs * 60));
      miningLogs.push({
        id: miningLogs.length + 1,
        caseId: caseId,
        timestamp: timestamp.toISOString(),
        activity: "Auditoría Evaluada",
        operator: "Ing. Carlos R.",
        poeCode: poeCode,
        duration: auditHrs,
        conforming: true
      });

      if (hasCAPA) {
        const capaOpenHrs = 0.1 + Math.random() * 0.3;
        timestamp.setMinutes(timestamp.getMinutes() + Math.round(capaOpenHrs * 60));
        miningLogs.push({
          id: miningLogs.length + 1,
          caseId: caseId,
          timestamp: timestamp.toISOString(),
          activity: "CAPA Abierta",
          operator: "Ing. Carlos R.",
          poeCode: poeCode,
          duration: capaOpenHrs,
          conforming: true
        });

        const capaCloseHrs = 20 + Math.random() * 60;
        timestamp.setMinutes(timestamp.getMinutes() + Math.round(capaCloseHrs * 60));
        miningLogs.push({
          id: miningLogs.length + 1,
          caseId: caseId,
          timestamp: timestamp.toISOString(),
          activity: "CAPA Cerrada",
          operator: operator,
          poeCode: poeCode,
          duration: capaCloseHrs,
          conforming: true
        });
      }

      const endHrs = 0.1 + Math.random() * 0.4;
      timestamp.setMinutes(timestamp.getMinutes() + Math.round(endHrs * 60));
      miningLogs.push({
        id: miningLogs.length + 1,
        caseId: caseId,
        timestamp: timestamp.toISOString(),
        activity: "Caso Concluido",
        operator: "Ing. Carlos R.",
        poeCode: poeCode,
        duration: endHrs,
        conforming: true
      });
    }

    localStorage.setItem('SIDE_QMS_MINING_LOGS', JSON.stringify(miningLogs));
    renderProcessMining(selectedPoeCode);
    alert('Minería de Procesos: Se inyectaron 20 nuevos casos de proceso (~100 eventos) con variaciones realistas.');
  }

  // Enlazar eventos del selector de POEs de Minería y el inyector
  const selectMining = document.getElementById('mining-poe-select');
  if (selectMining) {
    selectMining.addEventListener('change', (e) => {
      renderProcessMining(e.target.value);
    });
  }

  const miningLogFilter = document.getElementById('mining-log-filter');
  if (miningLogFilter) {
    miningLogFilter.addEventListener('change', () => {
      if (selectMining) {
        renderProcessMining(selectMining.value);
      }
    });
  }

  // Lógica del dropdown interactivo personalizado (acordeón colapsable por áreas)
  const dropdownBtn = document.getElementById('mining-poe-dropdown-btn');
  const dropdownMenu = document.getElementById('mining-poe-dropdown-menu');
  const dropdownArrow = document.getElementById('mining-poe-dropdown-arrow');
  
  const miningDropdownSearch = document.getElementById('mining-dropdown-search');
  if (miningDropdownSearch) {
    // Evitar que se cierre el menú al hacer clic en el campo de texto
    miningDropdownSearch.addEventListener('click', (e) => {
      e.stopPropagation();
    });
    
    // Filtrar los elementos y abrir/cerrar grupos dinámicamente según la búsqueda
    miningDropdownSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const groups = document.querySelectorAll('#mining-poe-dropdown-menu .dropdown-group');
      
      groups.forEach(group => {
        const itemsContainer = group.querySelector('.dropdown-group-items');
        const items = itemsContainer.querySelectorAll('.dropdown-item-poe');
        const arrow = group.querySelector('.group-arrow');
        
        let hasMatch = false;
        items.forEach(item => {
          const text = item.textContent.toLowerCase();
          if (text.includes(query)) {
            item.style.display = 'block';
            hasMatch = true;
          } else {
            item.style.display = 'none';
          }
        });
        
        if (query === '') {
          // Si no hay búsqueda, colapsar todos los grupos por defecto
          itemsContainer.style.display = 'none';
          if (arrow) arrow.style.transform = 'rotate(0deg)';
          group.style.display = 'block';
        } else {
          // Si hay búsqueda, mostrar y expandir grupos con coincidencia, ocultar los demás
          if (hasMatch) {
            itemsContainer.style.display = 'flex';
            if (arrow) arrow.style.transform = 'rotate(180deg)';
            group.style.display = 'block';
          } else {
            itemsContainer.style.display = 'none';
            if (arrow) arrow.style.transform = 'rotate(0deg)';
            group.style.display = 'none';
          }
        }
      });
    });
  }

  if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownMenu.style.display === 'block';
      dropdownMenu.style.display = isOpen ? 'none' : 'block';
      dropdownArrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
      
      if (!isOpen) {
        // Limpiar el buscador
        if (miningDropdownSearch) {
          miningDropdownSearch.value = '';
          miningDropdownSearch.dispatchEvent(new Event('input'));
        }
        
        // Colapsar todos los grupos
        document.querySelectorAll('.dropdown-group-items').forEach(el => {
          el.style.display = 'none';
        });
        document.querySelectorAll('.group-arrow').forEach(el => {
          el.style.transform = 'rotate(0deg)';
        });
        
        // Expandir solo el grupo del elemento seleccionado actualmente
        const selectedItem = document.querySelector('.dropdown-item-poe.selected');
        if (selectedItem) {
          const parentGroup = selectedItem.closest('.dropdown-group');
          if (parentGroup) {
            const itemsContainer = parentGroup.querySelector('.dropdown-group-items');
            const arrow = parentGroup.querySelector('.group-arrow');
            if (itemsContainer) itemsContainer.style.display = 'flex';
            if (arrow) arrow.style.transform = 'rotate(180deg)';
          }
        }
        
        // Foco automático en el buscador
        if (miningDropdownSearch) {
          setTimeout(() => miningDropdownSearch.focus(), 50);
        }
      }
    });
    
    // Cerrar al hacer clic fuera del dropdown
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#mining-poe-dropdown-container')) {
        dropdownMenu.style.display = 'none';
        dropdownArrow.style.transform = 'rotate(0deg)';
      }
    });
    
    // Lógica de acordeón para las cabeceras de grupos de áreas
    const headers = document.querySelectorAll('.dropdown-group-header');
    headers.forEach(header => {
      header.addEventListener('click', (e) => {
        e.stopPropagation();
        const group = header.parentElement;
        const items = group.querySelector('.dropdown-group-items');
        const arrow = header.querySelector('.group-arrow');
        const isExpanded = items.style.display === 'flex';
        
        // Colapsar todos los otros grupos para comportamiento de acordeón limpio
        document.querySelectorAll('.dropdown-group-items').forEach(el => {
          el.style.display = 'none';
        });
        document.querySelectorAll('.group-arrow').forEach(el => {
          el.style.transform = 'rotate(0deg)';
        });
        
        // Alternar el grupo actual
        if (!isExpanded) {
          items.style.display = 'flex';
          arrow.style.transform = 'rotate(180deg)';
        }
      });
    });
  }

  const btnInjectMining = document.getElementById('btn-inject-mining-events');
  if (btnInjectMining) {
    btnInjectMining.addEventListener('click', () => {
      inject100MiningEvents();
    });
  }

  // Escenario 5: Minería de Procesos Interactiva
  const btnSim5 = document.getElementById('btn-sim-scenario-5');
  if (btnSim5) {
    btnSim5.addEventListener('click', () => {
      switchTab('process-mining');
      setTimeout(() => {
        inject100MiningEvents();
      }, 300);
    });
  }

  // ==========================================
  // METODOS Y LOGICA DE LA MATRIZ SGC 360°
  // ==========================================
  
  function getOutputQuality(poe) {
    if (poe.outputQuality) return poe.outputQuality;
    
    const specificMap = {
      'POE-ADM-01': 'Diferencia de caja = $0.00, depósito bancario completado antes de las 18:00 hrs, firmas completas sin tachaduras.',
      'POE-ADM-02': 'Cierre contable sin descuadres en ERP, 100% de asistencia de personal procesada en tiempo sin discrepancias.',
      'POE-ADM-03': 'Expedientes con 100% de documentos obligatorios de ley, inducción completada en los primeros 3 días de ingreso.',
      'POE-ADM-04': 'Inventario de activos fijos conciliado con contabilidad al 100%, plan de mantenimiento preventivo ejecutado sin retrasos.',
      'POE-ADM-05': '100% de licencias vigentes y renovadas al menos 30 días antes del vencimiento, sin multas regulatorias.',
      'POE-COM-01': 'Nivel de satisfacción del cliente > 95%, resolución de quejas en primer contacto en un plazo < 24 horas.',
      'POE-COM-02': 'Arqueo de caja diaria cuadriculado a $0.00, reporte de ventas enviado a Tesorería antes del fin de turno.',
      'POE-LOG-11': 'Nivel de Pedidos Perfectos (OTIF) >= 92%, índice de error en entregas a sucursales = 0.00%.',
    };
    
    if (specificMap[poe.code]) {
      return specificMap[poe.code];
    }
    
    if (poe.outputs) {
      const outputs = poe.outputs.split(', ');
      const specs = outputs.map((out, idx) => {
        if (idx === 0) return `Precisión del 100% en ${out.toLowerCase()}`;
        if (idx === 1) return `entrega a tiempo de ${out.toLowerCase()}`;
        return `aprobación y firma de ${out.toLowerCase()}`;
      });
      return specs.join(', ') + '.';
    }
    
    return '100% libre de errores operacionales y conforme a las normas ISO 9001.';
  }

  function getColumnAreaBreakdown(list, extractor) {
    const totalSet = new Set();
    const admSet = new Set();
    const comSet = new Set();
    const logSet = new Set();
    
    list.forEach(poe => {
      const val = extractor(poe);
      if (val && val !== '--' && val !== 'Ninguno') {
        const parts = val.split(/[,\/]/);
        parts.forEach(p => {
          const clean = p.trim().toLowerCase();
          if (clean) {
            totalSet.add(clean);
            if (poe.area === 'ADM') admSet.add(clean);
            if (poe.area === 'COM') comSet.add(clean);
            if (poe.area === 'LOG') logSet.add(clean);
          }
        });
      }
    });
    
    return {
      total: totalSet.size,
      ADM: admSet.size,
      COM: comSet.size,
      LOG: logSet.size
    };
  }

  function renderSgcMatrix() {
    const table = document.getElementById('sgc-matrix-table');
    if (!table) return;
    
    const thead = table.querySelector('thead');
    const tbody = document.getElementById('sgc-matrix-table-body');
    if (!thead || !tbody) return;
    
    try {
      const viewMode = document.getElementById('matrix-view-toggle').value;
      const searchText = document.getElementById('matrix-search-input').value.toLowerCase().trim();
      const areaFilter = document.getElementById('matrix-area-filter').value;
      const levelFilter = 'all';
      
      // Mapear macroprocesos por código
      const macroMap = {};
      qmsDb.macroprocesses.forEach(m => {
        macroMap[m.code] = m;
      });
      
      // Mapear registros por poeCode (que en el JSON se llama "process")
      const regMap = {};
      qmsDb.registrosTemplates.forEach(r => {
        if (!regMap[r.process]) {
          regMap[r.process] = [];
        }
        regMap[r.process].push(r);
      });

      // 1. Filtrar los POEs primero para poder calcular los conteos exactos
      const filteredPoes = qmsDb.poes.filter(poe => {
        // Filtro de área
        if (areaFilter !== 'ALL' && poe.area !== areaFilter) return false;
        
        const macro = macroMap[poe.macroCode] || { name: "Proceso General", code: "GEN" };
        const associatedIts = qmsDb.its.filter(it => it.poeCode === poe.code);
        
        if (viewMode === 'sipoc') {
          const matchSearch = poe.code.toLowerCase().includes(searchText) || 
                              poe.name.toLowerCase().includes(searchText) || 
                              macro.name.toLowerCase().includes(searchText) || 
                              (poe.inputs && poe.inputs.toLowerCase().includes(searchText)) ||
                              (poe.outputs && poe.outputs.toLowerCase().includes(searchText)) ||
                              (poe.description && poe.description.toLowerCase().includes(searchText));
          return !searchText || matchSearch;
        } else {
          // Búsqueda difusa para modo control
          const matchSearch = poe.code.toLowerCase().includes(searchText) || 
                              poe.name.toLowerCase().includes(searchText) || 
                              macro.name.toLowerCase().includes(searchText) || 
                              (poe.description && poe.description.toLowerCase().includes(searchText)) ||
                              associatedIts.some(it => 
                                it.code.toLowerCase().includes(searchText) || 
                                it.name.toLowerCase().includes(searchText) || 
                                (it.checklist && it.checklist.some(item => item.toLowerCase().includes(searchText)))
                              );
          return !searchText || matchSearch;
        }
      });

      // Filtrar ITs por texto de búsqueda en cada POE para consistencia y alcance global
      const displayedItsMap = {};
      filteredPoes.forEach(p => {
        const macro = macroMap[p.macroCode] || { name: "Proceso General", code: "GEN" };
        const associatedIts = qmsDb.its.filter(it => it.poeCode === p.code);
        let matchingIts = associatedIts;
        if (searchText) {
          const poeMatches = p.code.toLowerCase().includes(searchText) || 
                             p.name.toLowerCase().includes(searchText) || 
                             macro.name.toLowerCase().includes(searchText) || 
                             (p.description && p.description.toLowerCase().includes(searchText));
          if (!poeMatches) {
            matchingIts = associatedIts.filter(it => 
              it.code.toLowerCase().includes(searchText) || 
              it.name.toLowerCase().includes(searchText) || 
              (it.checklist && it.checklist.some(item => item.toLowerCase().includes(searchText)))
            );
          }
        }
        displayedItsMap[p.code] = matchingIts;
      });

      const displayedIts = filteredPoes.flatMap(p => displayedItsMap[p.code]);

      // 2. Cambiar las cabeceras e inyectar la fila de conteos dinámicos
      if (viewMode === 'sipoc') {
        thead.innerHTML = `
          <tr style="border-bottom: 2px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.02);">
            <th style="padding: 10px 14px; text-align: left; width: 6%;">Área</th>
            <th style="padding: 10px 14px; text-align: left; width: 9%;">Cód. POE</th>
            <th style="padding: 10px 14px; text-align: left; width: 13%;">Procedimiento</th>
            <th style="padding: 10px 14px; text-align: left; width: 13%;">Proveedores (S)</th>
            <th style="padding: 10px 14px; text-align: left; width: 13%;">Entradas Clave (I)</th>
            <th style="padding: 10px 14px; text-align: left; width: 13%;">Proceso / Actividad (P)</th>
            <th style="padding: 10px 14px; text-align: left; width: 13%;">Salidas Clave (O)</th>
            <th style="padding: 10px 14px; text-align: left; width: 12%;">Características de Calidad</th>
            <th style="padding: 10px 14px; text-align: left; width: 13%;">Clientes (C)</th>
          </tr>
        `;
        
        // Calcular métricas dinámicas para modo SIPOC
        const totalCount = filteredPoes.length;
        const admCount = filteredPoes.filter(p => p.area === 'ADM').length;
        const comCount = filteredPoes.filter(p => p.area === 'COM').length;
        const logCount = filteredPoes.filter(p => p.area === 'LOG').length;
        
        const uniqueAreas = new Set(filteredPoes.map(p => p.area)).size;
        const admAreas = filteredPoes.some(p => p.area === 'ADM') ? 1 : 0;
        const comAreas = filteredPoes.some(p => p.area === 'COM') ? 1 : 0;
        const logAreas = filteredPoes.some(p => p.area === 'LOG') ? 1 : 0;
        
        const s = getColumnAreaBreakdown(filteredPoes, p => p.area === 'ADM' ? 'Administración / Auditoría Interna / Entidades Bancarias / Legal' : p.area === 'COM' ? 'Clientes / Caja / Operaciones Comerciales / Marketing' : 'Proveedores Externos / Aduana / Operadores Logísticos / Compras');
        const i = getColumnAreaBreakdown(filteredPoes, p => p.inputs);
        const pr = getColumnAreaBreakdown(filteredPoes, p => p.description);
        const o = getColumnAreaBreakdown(filteredPoes, p => p.outputs);
        const q = getColumnAreaBreakdown(filteredPoes, p => getOutputQuality(p));
        const c = getColumnAreaBreakdown(filteredPoes, p => p.area === 'ADM' ? 'Contabilidad / Gerencia General / Entidades de Control / Bancos' : p.area === 'COM' ? 'Clientes Finales / Administración / Finanzas / Despachos' : 'Sucursales / Dirección de Logística / Auditoría de Inventarios');
        
        thead.innerHTML += `
          <tr style="border-bottom: 2px solid rgba(255,255,255,0.15); background: rgba(0,0,0,0.3); font-size: 0.7rem; color: #a1a1aa; line-height: 1.3;">
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #60a5fa; font-size: 0.75rem;">${uniqueAreas} Áreas</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${admAreas} · COM:${comAreas} · LOG:${logAreas}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #3b82f6; font-size: 0.75rem;">${totalCount} POEs</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${admCount} · COM:${comCount} · LOG:${logCount}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #3b82f6; font-size: 0.75rem;">${totalCount} Proc.</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${admCount} · COM:${comCount} · LOG:${logCount}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #34d399; font-size: 0.75rem;">${s.total} Provs.</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${s.ADM} · COM:${s.COM} · LOG:${s.LOG}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #38bdf8; font-size: 0.75rem;">${i.total} Entradas</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${i.ADM} · COM:${i.COM} · LOG:${i.LOG}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #a855f7; font-size: 0.75rem;">${pr.total} Activs.</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${pr.ADM} · COM:${pr.COM} · LOG:${pr.LOG}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #a7f3d0; font-size: 0.75rem;">${o.total} Salidas</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${o.ADM} · COM:${o.COM} · LOG:${o.LOG}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #f59e0b; font-size: 0.75rem;">${q.total} Specs.</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${q.ADM} · COM:${q.COM} · LOG:${q.LOG}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #ec4899; font-size: 0.75rem;">${c.total} Clientes</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${c.ADM} · COM:${c.COM} · LOG:${c.LOG}</div>
            </th>
          </tr>
        `;
      } else {
        thead.innerHTML = `
          <tr style="border-bottom: 2px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.02);">
            <th style="padding: 10px 14px; text-align: left; width: 5%;">Área</th>
            <th style="padding: 10px 14px; text-align: left; width: 10%;">Macroproceso</th>
            <th style="padding: 10px 14px; text-align: left; width: 6%;">Cód. POE</th>
            <th style="padding: 10px 14px; text-align: left; width: 14%;">Procedimiento (POE)</th>
            <th style="padding: 10px 14px; text-align: left; width: 6%;">Cód. IT</th>
            <th style="padding: 10px 14px; text-align: left; width: 14%;">Instructivo (IT)</th>
            <th style="padding: 10px 14px; text-align: left; width: 15%;">Actividades / Checklist (Nivel 4)</th>
            <th style="padding: 10px 14px; text-align: left; width: 18%;">Ejemplos de Aplicación (IT)</th>
            <th style="padding: 10px 14px; text-align: left; width: 12%;">Registro Evidencia (Nivel 5)</th>
          </tr>
        `;
        
        // Conteo para modo control
        const totalCount = filteredPoes.length;
        const admCount = filteredPoes.filter(p => p.area === 'ADM').length;
        const comCount = filteredPoes.filter(p => p.area === 'COM').length;
        const logCount = filteredPoes.filter(p => p.area === 'LOG').length;
        
        const uniqueAreas = new Set(filteredPoes.map(p => p.area)).size;
        const admAreas = filteredPoes.some(p => p.area === 'ADM') ? 1 : 0;
        const comAreas = filteredPoes.some(p => p.area === 'COM') ? 1 : 0;
        const logAreas = filteredPoes.some(p => p.area === 'LOG') ? 1 : 0;

        const uniqueMacros = new Set(filteredPoes.map(p => p.macroCode)).size;
        const admMacros = new Set(filteredPoes.filter(p => p.area === 'ADM').map(p => p.macroCode)).size;
        const comMacros = new Set(filteredPoes.filter(p => p.area === 'COM').map(p => p.macroCode)).size;
        const logMacros = new Set(filteredPoes.filter(p => p.area === 'LOG').map(p => p.macroCode)).size;

        const admIts = displayedIts.filter(it => filteredPoes.find(p => p.code === it.poeCode && p.area === 'ADM')).length;
        const comIts = displayedIts.filter(it => filteredPoes.find(p => p.code === it.poeCode && p.area === 'COM')).length;
        const logIts = displayedIts.filter(it => filteredPoes.find(p => p.code === it.poeCode && p.area === 'LOG')).length;
        
        const totalChecklist = displayedIts.reduce((sum, it) => sum + (it.checklist ? it.checklist.length : 0), 0);
        const admCheck = displayedIts.filter(it => filteredPoes.find(p => p.code === it.poeCode && p.area === 'ADM')).reduce((sum, it) => sum + (it.checklist ? it.checklist.length : 0), 0);
        const comCheck = displayedIts.filter(it => filteredPoes.find(p => p.code === it.poeCode && p.area === 'COM')).reduce((sum, it) => sum + (it.checklist ? it.checklist.length : 0), 0);
        const logCheck = displayedIts.filter(it => filteredPoes.find(p => p.code === it.poeCode && p.area === 'LOG')).reduce((sum, it) => sum + (it.checklist ? it.checklist.length : 0), 0);
        
        const regs = new Set(filteredPoes.flatMap(p => (regMap[p.code] || []).map(r => r.code)));
        const admRegs = new Set(filteredPoes.filter(p => p.area === 'ADM').flatMap(p => (regMap[p.code] || []).map(r => r.code))).size;
        const comRegs = new Set(filteredPoes.filter(p => p.area === 'COM').flatMap(p => (regMap[p.code] || []).map(r => r.code))).size;
        const logRegs = new Set(filteredPoes.filter(p => p.area === 'LOG').flatMap(p => (regMap[p.code] || []).map(r => r.code))).size;
        
        thead.innerHTML += `
          <tr style="border-bottom: 2px solid rgba(255,255,255,0.15); background: rgba(0,0,0,0.3); font-size: 0.7rem; color: #a1a1aa; line-height: 1.3;">
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #60a5fa; font-size: 0.75rem;">${uniqueAreas} Áreas</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${admAreas} · COM:${comAreas} · LOG:${logAreas}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #38bdf8; font-size: 0.75rem;">${uniqueMacros} Macros</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${admMacros} · COM:${comMacros} · LOG:${logMacros}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #3b82f6; font-size: 0.75rem;">${totalCount} POEs</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${admCount} · COM:${comCount} · LOG:${logCount}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #3b82f6; font-size: 0.75rem;">${totalCount} Proc.</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${admCount} · COM:${comCount} · LOG:${logCount}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #34d399; font-size: 0.75rem;">${displayedIts.length} ITs</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${admIts} · COM:${comIts} · LOG:${logIts}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #34d399; font-size: 0.75rem;">${displayedIts.length} Instr.</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${admIts} · COM:${comIts} · LOG:${logIts}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #a855f7; font-size: 0.75rem;">${totalChecklist} Actvs.</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${admCheck} · COM:${comCheck} · LOG:${logCheck}</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #f59e0b; font-size: 0.75rem;">Ejemplos SGC</div>
              <div style="font-size: 0.62rem; margin-top:2px;">Casos Prácticos de Control</div>
            </th>
            <th style="padding: 6px 14px; text-align: left; font-weight: normal; font-size: 0.7rem;">
              <div style="font-weight: 700; color: #ec4899; font-size: 0.75rem;">${regs.size} Regs.</div>
              <div style="font-size: 0.62rem; margin-top:2px;">ADM:${admRegs} · COM:${comRegs} · LOG:${logRegs}</div>
            </th>
          </tr>
        `;
      }
      
      tbody.innerHTML = '';
      let filteredCount = 0;
      
      filteredPoes.forEach(poe => {
        const macro = macroMap[poe.macroCode] || { name: "Proceso General", code: "GEN" };
        const associatedIts = displayedItsMap[poe.code] || [];
        const associatedRegs = regMap[poe.code] || [];
        
        // Modo SIPOC
        if (viewMode === 'sipoc') {
          const suppliers = poe.area === 'ADM' ? 'Administración / Auditoría Interna / Entidades Bancarias / Legal' : poe.area === 'COM' ? 'Clientes / Caja / Operaciones Comerciales / Marketing' : 'Proveedores Externos / Aduana / Operadores Logísticos / Compras';
          const customers = poe.area === 'ADM' ? 'Contabilidad / Gerencia General / Entidades de Control / Bancos' : poe.area === 'COM' ? 'Clientes Finales / Administración / Finanzas / Despachos' : 'Sucursales / Dirección de Logística / Auditoría de Inventarios';
          
          const tr = document.createElement('tr');
          tr.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
          tr.innerHTML = `
            <td style="padding: 10px 14px; vertical-align: top; font-weight: 600; color: #60a5fa;">
              [${poe.area}]
            </td>
            <td style="padding: 10px 14px; vertical-align: top;">
              <strong class="text-primary">${poe.code}</strong>
            </td>
            <td style="padding: 10px 14px; vertical-align: top;">
              <div>${poe.name}</div>
            </td>
            <td style="padding: 10px 14px; vertical-align: top; font-size: 0.7rem; line-height: 1.4; color: #34d399;">
              ${suppliers}
            </td>
            <td style="padding: 10px 14px; vertical-align: top; font-size: 0.7rem; line-height: 1.4;">
              ${poe.inputs || '--'}
            </td>
            <td style="padding: 10px 14px; vertical-align: top; font-size: 0.7rem; line-height: 1.4;">
              <div>${poe.description || '--'}</div>
              <div style="margin-top: 5px;"><span class="badge bg-success" style="font-size: 0.62rem; padding: 2px 6px; border: 1px solid rgba(255,255,255,0.05); color: #34d399; background: rgba(52, 211, 153, 0.1);">Meta: ${poe.expectedTime || 30} min</span></div>
            </td>
            <td style="padding: 10px 14px; vertical-align: top; font-size: 0.7rem; line-height: 1.4;">
              ${poe.outputs || '--'}
            </td>
            <td style="padding: 10px 14px; vertical-align: top; font-size: 0.7rem; line-height: 1.4; color: #f59e0b; font-style: italic;">
              ${getOutputQuality(poe)}
            </td>
            <td style="padding: 10px 14px; vertical-align: top; font-size: 0.7rem; line-height: 1.4; color: #8b5cf6;">
              ${customers}
            </td>
          `;
          tbody.appendChild(tr);
          filteredCount++;
          return;
        }
        
        // Si no hay ITs asociadas y no estamos filtrando solo poes, omitir el POE
        if (associatedIts.length === 0) return;
        
        // Modo de control: dibujar la jerarquía completa
        const regsHtml = associatedRegs.map(r => `<span class="badge bg-primary m-1" style="font-size:0.65rem; border: 1px solid rgba(255,255,255,0.05); padding: 2px 6px; display: inline-block;">${r.code} - ${r.name}</span>`).join(' ');
        const rowSpanVal = associatedIts.length;
        
        const tr1 = document.createElement('tr');
        tr1.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        
        const commonCols = `
          <td rowspan="${rowSpanVal}" style="padding: 10px 14px; vertical-align: top; font-weight: 600; color: #60a5fa;">
            [${poe.area}]
          </td>
          <td rowspan="${rowSpanVal}" style="padding: 10px 14px; vertical-align: top;">
            <div class="text-muted" style="font-size:0.7rem;">${macro.code} - ${macro.name}</div>
          </td>
          <td rowspan="${rowSpanVal}" style="padding: 10px 14px; vertical-align: top;">
            <strong class="text-primary">${poe.code}</strong>
          </td>
          <td rowspan="${rowSpanVal}" style="padding: 10px 14px; vertical-align: top;">
            <div>${poe.name}</div>
          </td>
        `;
        
        const endCol = `
          <td rowspan="${rowSpanVal}" style="padding: 10px 14px; vertical-align: top;">
            ${regsHtml || '<span class="text-muted">--</span>'}
          </td>
        `;
        
        const it1 = associatedIts[0];
        const checklistItems1 = it1.checklist || [];
        const itemsList1 = checklistItems1.map(item => `<li>• ${item}</li>`).join('');
        const activitiesHtml1 = `<ul style="padding-left:0; margin:0; list-style:none;">${itemsList1 || '<li>• Operación del estándar</li>'}</ul>`;
        
        const examples1 = it1.examples || [];
        const examplesList1 = examples1.map(ex => `<li>• ${ex}</li>`).join('');
        const examplesHtml1 = `<ul style="padding-left:0; margin:0; list-style:none; color: #f59e0b; font-style: italic;">${examplesList1 || '<li>--</li>'}</ul>`;
        
        tr1.innerHTML = `
          ${commonCols}
          <td style="padding: 10px 14px; vertical-align: top;">
            <strong class="text-success">${it1.code}</strong>
          </td>
          <td style="padding: 10px 14px; vertical-align: top;">
            <div>${it1.name}</div>
          </td>
          <td style="padding: 10px 14px; vertical-align: top; font-size: 0.7rem; line-height:1.4;">
            ${activitiesHtml1}
          </td>
          <td style="padding: 10px 14px; vertical-align: top; font-size: 0.7rem; line-height:1.4;">
            ${examplesHtml1}
          </td>
          ${endCol}
        `;
        tbody.appendChild(tr1);
        filteredCount++;
        
        for (let j = 1; j < associatedIts.length; j++) {
          const it = associatedIts[j];
          const checklistItems = it.checklist || [];
          const itemsList = checklistItems.map(item => `<li>• ${item}</li>`).join('');
          const activitiesHtml = `<ul style="padding-left:0; margin:0; list-style:none;">${itemsList || '<li>• Operación del estándar</li>'}</ul>`;
          
          const examples = it.examples || [];
          const examplesList = examples.map(ex => `<li>• ${ex}</li>`).join('');
          const examplesHtml = `<ul style="padding-left:0; margin:0; list-style:none; color: #f59e0b; font-style: italic;">${examplesList || '<li>--</li>'}</ul>`;
          
          const trN = document.createElement('tr');
          trN.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
          trN.innerHTML = `
            <td style="padding: 10px 14px; vertical-align: top; border-left: 1px solid rgba(255,255,255,0.02);">
              <strong class="text-success">${it.code}</strong>
            </td>
            <td style="padding: 10px 14px; vertical-align: top;">
              <div>${it.name}</div>
            </td>
            <td style="padding: 10px 14px; vertical-align: top; font-size: 0.7rem; line-height:1.4;">
              ${activitiesHtml}
            </td>
            <td style="padding: 10px 14px; vertical-align: top; font-size: 0.7rem; line-height:1.4;">
              ${examplesHtml}
            </td>
          `;
          tbody.appendChild(trN);
        }
      });
      
      if (filteredCount === 0) {
        tbody.innerHTML = `<tr><td colspan="9" class="text-center text-muted p-8">No se encontraron procesos que coincidan con los filtros aplicados.</td></tr>`;
      }
    } catch (err) {
      console.error(err);
      tbody.innerHTML = `<tr><td colspan="9" style="color: #ef4444; padding: 20px; font-weight: bold; text-align: center; background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.15); border-radius: 8px;">Error al renderizar matriz: ${err.message}<br><pre style="font-size: 0.75rem; text-align: left; margin-top: 10px; white-space: pre-wrap; color: #f87171; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 4px; font-family: monospace;">${err.stack}</pre></td></tr>`;
    }
  }

  function exportSgcMatrixToCsv() {
    const viewMode = document.getElementById('matrix-view-toggle').value;
    
    if (viewMode === 'sipoc') {
      const headers = ["Area", "Codigo POE", "Procedimiento (POE)", "Proveedores (S)", "Entradas Clave (I)", "Proceso / Actividad (P)", "Salidas Clave (O)", "Caracteristicas de Calidad de Salidas Clave", "Clientes (C)"];
      const rows = [headers];
      
      qmsDb.poes.forEach(poe => {
        const suppliers = poe.area === 'ADM' ? 'Administración / Auditoría Interna / Entidades Bancarias / Legal' : poe.area === 'COM' ? 'Clientes / Caja / Operaciones Comerciales / Marketing' : 'Proveedores Externos / Aduana / Operadores Logísticos / Compras';
        const customers = poe.area === 'ADM' ? 'Contabilidad / Gerencia General / Entidades de Control / Bancos' : poe.area === 'COM' ? 'Clientes Finales / Administración / Finanzas / Despachos' : 'Sucursales / Dirección de Logística / Auditoría de Inventarios';
        
        rows.push([
          poe.area,
          poe.code,
          poe.name,
          suppliers,
          poe.inputs || "Ninguno",
          `${poe.description || "Ninguno"} (Meta: ${poe.expectedTime || 30} min)`,
          poe.outputs || "Ninguno",
          getOutputQuality(poe),
          customers
        ]);
      });
      
      let csvContent = "\uFEFF";
      rows.forEach(r => {
        const rowStr = r.map(val => {
          let cleanVal = String(val).replace(/"/g, '""').replace(/\r?\n/g, ' ');
          return `"${cleanVal}"`;
        }).join(',');
        csvContent += rowStr + "\r\n";
      });
      
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `Matriz_SIPOC_Maestra_SIDE_QMS.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    
    const macroMap = {};
    qmsDb.macroprocesses.forEach(m => {
      macroMap[m.code] = m;
    });
    
    const regMap = {};
    qmsDb.registrosTemplates.forEach(r => {
      if (!regMap[r.process]) {
        regMap[r.process] = [];
      }
      regMap[r.process].push(r);
    });
    
    const headers = ["Area", "Codigo Macroproceso", "Macroproceso", "Codigo POE (Nivel 2)", "Procedimiento (POE)", "Codigo IT (Nivel 3)", "Instructivo (IT)", "Actividades / Checklist (Nivel 4)", "Ejemplos de Aplicacion (IT)", "Registros Asociados (Nivel 5)"];
    
    const rows = [headers];
    
    qmsDb.poes.forEach(poe => {
      const macro = macroMap[poe.macroCode] || { name: "Proceso General", code: "GEN" };
      const associatedIts = qmsDb.its.filter(it => it.poeCode === poe.code);
      const associatedRegs = regMap[poe.code] || [];
      
      const regsStr = associatedRegs.map(r => `${r.code} (${r.name})`).join(' | ');
      
      if (associatedIts.length === 0) {
        const activitiesText = poe.description || "Pasos operativos de control.";
        rows.push([
          poe.area,
          macro.code,
          macro.name,
          poe.code,
          poe.name,
          "N/A",
          "Sin instructivo",
          activitiesText,
          "N/A",
          regsStr || "Ninguno"
        ]);
      } else {
        associatedIts.forEach(it => {
          const checklistItems = it.checklist || [];
          const activitiesText = checklistItems.join(' | ');
          const examplesList = it.examples || [];
          const examplesText = examplesList.join(' | ');
          rows.push([
            poe.area,
            macro.code,
            macro.name,
            poe.code,
            poe.name,
            it.code,
            it.name,
            activitiesText || "Operacion del estandar",
            examplesText || "Ninguno",
            regsStr || "Ninguno"
          ]);
        });
      }
    });
    
    let csvContent = "\uFEFF";
    rows.forEach(r => {
      const rowStr = r.map(val => {
        let cleanVal = String(val).replace(/"/g, '""').replace(/\r?\n/g, ' ');
        return `"${cleanVal}"`;
      }).join(',');
      csvContent += rowStr + "\r\n";
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Matriz_SGC_360_SIDE_QMS.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Enlazar eventos de búsqueda y filtros para la Matriz SGC 360°
  const matrixSearch = document.getElementById('matrix-search-input');
  if (matrixSearch) {
    matrixSearch.addEventListener('input', () => {
      renderSgcMatrix();
    });
  }

  const matrixAreaFilter = document.getElementById('matrix-area-filter');
  if (matrixAreaFilter) {
    matrixAreaFilter.addEventListener('change', () => {
      renderSgcMatrix();
    });
  }
  const matrixViewToggle = document.getElementById('matrix-view-toggle');
  if (matrixViewToggle) {
    matrixViewToggle.addEventListener('change', () => {
      renderSgcMatrix();
    });
  }

  const btnExportMatrix = document.getElementById('btn-export-matrix-csv');
  if (btnExportMatrix) {
    btnExportMatrix.addEventListener('click', () => {
      exportSgcMatrixToCsv();
    });
  }

  // METRICAS SIPOC CON FILTROS DINAMICOS (ÁREA, CONSOLIDADO O PROCESO)
  function updateSipocDashboardStats() {
    const scopeFilter = document.getElementById('sipoc-scope-filter');
    const processSelect = document.getElementById('sipoc-process-select');
    if (!scopeFilter || !processSelect) return;
    
    const scope = scopeFilter.value;
    const selectedPoeCode = processSelect.value;
    
    const sipocLogs = qmsDb.sipocLogs || [];
    let filteredLogs = [];
    
    if (scope === 'all') {
      filteredLogs = sipocLogs;
      processSelect.style.display = 'none';
    } else if (scope === 'area') {
      filteredLogs = sipocLogs.filter(log => {
        const poe = qmsDb.poes.find(p => p.code === log.poeCode);
        return poe && poe.area === activeArea;
      });
      processSelect.style.display = 'none';
    } else if (scope === 'process') {
      processSelect.style.display = 'block';
      filteredLogs = sipocLogs.filter(log => log.poeCode === selectedPoeCode);
    }
    
    const avgTimeEl = document.getElementById('sipoc-area-avg-time');
    const avgQualityEl = document.getElementById('sipoc-area-avg-quality');
    const efficiencyBadge = document.getElementById('sipoc-area-efficiency');
    const miniLogsContainer = document.getElementById('sipoc-area-logs-mini');
    
    if (filteredLogs.length === 0) {
      if (avgTimeEl) avgTimeEl.textContent = '-- min';
      if (avgQualityEl) avgQualityEl.textContent = '-- %';
      if (efficiencyBadge) {
        efficiencyBadge.textContent = 'Sin Datos';
        efficiencyBadge.className = 'badge bg-secondary';
      }
      if (miniLogsContainer) {
        miniLogsContainer.innerHTML = '<div class="text-center text-muted p-4 text-xs">Sin registros de ejecución SIPOC en este alcance.</div>';
      }
    } else {
      const totalTimeSum = filteredLogs.reduce((sum, l) => sum + l.totalTime, 0);
      const avgTime = (totalTimeSum / filteredLogs.length).toFixed(1);
      
      const totalQualitySum = filteredLogs.reduce((sum, l) => sum + l.quality, 0);
      const avgQuality = (totalQualitySum / filteredLogs.length).toFixed(1);
      
      if (avgTimeEl) avgTimeEl.textContent = `${avgTime} min`;
      if (avgQualityEl) avgQualityEl.textContent = `${avgQuality}%`;
      
      if (efficiencyBadge) {
        if (avgQuality >= 95) {
          efficiencyBadge.textContent = 'Excelente';
          efficiencyBadge.className = 'badge bg-success';
        } else if (avgQuality >= 80) {
          efficiencyBadge.textContent = 'Conforme';
          efficiencyBadge.className = 'badge bg-warning';
        } else {
          efficiencyBadge.textContent = 'Crítico';
          efficiencyBadge.className = 'badge bg-danger';
        }
      }
      
      if (miniLogsContainer) {
        const sortedLogs = [...filteredLogs].sort((a, b) => b.id - a.id).slice(0, 5);
        miniLogsContainer.innerHTML = sortedLogs.map(l => {
          const poe = qmsDb.poes.find(p => p.code === l.poeCode) || { name: l.poeCode };
          return `
            <div style="padding: 8px 10px; border-bottom: 1px solid rgba(255,255,255,0.03); display: flex; justify-content: space-between; align-items: center; font-size: 0.65rem;">
              <div style="flex: 1; padding-right: 8px;">
                <div style="font-weight: 600; color: #f3f4f6;">${l.poeCode}</div>
                <div style="color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 130px; text-align: left;" title="${poe.name}">${poe.name}</div>
              </div>
              <div style="text-align: right;">
                <div style="font-weight: 600; color: #60a5fa;">${l.totalTime} min</div>
                <span class="badge ${l.quality >= 90 ? 'bg-success' : l.quality >= 75 ? 'bg-warning' : 'bg-danger'}" style="font-size:0.55rem; padding: 1px 3px;">
                  ${l.quality}%
                </span>
              </div>
            </div>
          `;
        }).join('');
      }
    }
  }

  // Enlazar eventos de filtros SIPOC
  const sipocScopeFilter = document.getElementById('sipoc-scope-filter');
  const sipocProcessSelect = document.getElementById('sipoc-process-select');
  if (sipocScopeFilter) {
    sipocScopeFilter.addEventListener('change', () => {
      updateSipocDashboardStats();
    });
  }
  if (sipocProcessSelect) {
    sipocProcessSelect.addEventListener('change', () => {
      updateSipocDashboardStats();
    });
  }

  // Nueva Auditoría Interna - Selector de POE
  const btnStartAudit = document.getElementById('btn-start-audit');
  const modalSelectPoeAudit = document.getElementById('modal-select-poe-audit');
  const selectAuditPoeCode = document.getElementById('select-audit-poe-code');
  const btnConfirmStartAudit = document.getElementById('btn-confirm-start-audit');
  
  function populateAuditPoeSelect(filterText = '') {
    if (!selectAuditPoeCode) return;
    const query = filterText.toLowerCase().trim();
    const filtered = qmsDb.poes.filter(poe => {
      return poe.code.toLowerCase().includes(query) || 
             poe.name.toLowerCase().includes(query) || 
             poe.area.toLowerCase().includes(query);
    });
    
    if (filtered.length === 0) {
      selectAuditPoeCode.innerHTML = '<option value="" disabled>No se encontraron resultados...</option>';
    } else {
      selectAuditPoeCode.innerHTML = filtered.map(poe => `
        <option value="${poe.code}">${poe.code} - ${poe.name} (${poe.area})</option>
      `).join('');
    }
  }

  if (btnStartAudit) {
    btnStartAudit.addEventListener('click', () => {
      const searchAuditPoe = document.getElementById('search-audit-poe');
      if (searchAuditPoe) {
        searchAuditPoe.value = '';
      }
      populateAuditPoeSelect();
      if (modalSelectPoeAudit) {
        modalSelectPoeAudit.classList.add('active');
      }
    });
  }

  const searchAuditPoe = document.getElementById('search-audit-poe');
  if (searchAuditPoe) {
    searchAuditPoe.addEventListener('input', (e) => {
      populateAuditPoeSelect(e.target.value);
    });
  }
  
  if (btnConfirmStartAudit) {
    btnConfirmStartAudit.addEventListener('click', () => {
      const selectedCode = selectAuditPoeCode.value;
      if (!selectedCode) return;
      if (modalSelectPoeAudit) {
        modalSelectPoeAudit.classList.remove('active');
      }
      openAuditForm(selectedCode);
    });
  }

  // Buscador global del Explorador Documental
  const explorerSearch = document.getElementById('explorer-global-search');
  if (explorerSearch) {
    explorerSearch.addEventListener('input', () => {
      renderExplorer();
    });
  }

  // Filtro por área en el Récord de Operación
  const poeUsageAreaFilter = document.getElementById('poe-usage-area-filter');
  if (poeUsageAreaFilter) {
    poeUsageAreaFilter.addEventListener('change', () => {
      renderPoeUsageTable();
    });
  }

  // Buscador en la tabla de Alertas y Vencimientos
  const expirySearch = document.getElementById('expiry-table-search');
  if (expirySearch) {
    expirySearch.addEventListener('input', () => {
      renderExpiryTable();
    });
  }

  // Filtro por área en la Matriz de Riesgos y KPIs
  const riskAreaFilter = document.getElementById('risk-area-filter');
  if (riskAreaFilter) {
    riskAreaFilter.addEventListener('change', () => {
      // Al cambiar el área, limpiamos la celda de calor seleccionada actualmente
      activeHeatmapFilter = null;
      const cells = document.querySelectorAll('.heatmap-cell');
      cells.forEach(c => c.style.outline = 'none');
      renderRisksKPIs();
    });
  }

  // Manejo de Inicio y Cierre de Sesión (Seguridad por Área)
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const usernameInput = document.getElementById('login-username').value.trim().toLowerCase();
      const passwordInput = document.getElementById('login-password').value;
      const errorMsg = document.getElementById('login-error-msg');
      
      const user = USERS_DB[usernameInput];
      if (user && user.password === passwordInput) {
        localStorage.setItem('SIDE_QMS_USER', JSON.stringify({
          username: usernameInput,
          name: user.name,
          role: user.role,
          avatar: user.avatar,
          allowedArea: user.allowedArea
        }));
        errorMsg.style.display = 'none';
        document.getElementById('login-overlay').style.display = 'none';
        
        if (user.allowedArea !== 'ALL') {
          activeArea = user.allowedArea;
        }
        
        applyUserRestrictions();
        renderManagerDashboard();
        renderSgcMatrix();
        renderTrazabilidad();
        
        if (typeof feather !== 'undefined') feather.replace();
      } else {
        errorMsg.style.display = 'block';
      }
    });
  }

  const btnTogglePassword = document.getElementById('btn-toggle-password');
  if (btnTogglePassword) {
    btnTogglePassword.addEventListener('click', () => {
      const passwordField = document.getElementById('login-password');
      const eyeOpen = document.getElementById('eye-icon-open');
      const eyeClosed = document.getElementById('eye-icon-closed');
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
      } else {
        passwordField.type = 'password';
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
      }
    });
  }

  const btnLogout = document.getElementById('btn-logout');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      localStorage.removeItem('SIDE_QMS_USER');
      document.getElementById('login-overlay').style.display = 'flex';
      document.getElementById('login-username').value = '';
      document.getElementById('login-password').value = '';
      document.getElementById('login-error-msg').style.display = 'none';
      activeArea = 'ADM';
    });
  }

  // 15. CARGA INICIAL
  initPoeUsage();
  applyUserRestrictions();
  populateMiningPoeSelect();
  startClock();
  applyRoleSecurity(roleSelect.value);
  renderCurrentTab();
  renderNotificationsDropdown();
  updateBadges();
});
