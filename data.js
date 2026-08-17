const QMS_DATA = {
  "areas": {
    "ADM": {
      "name": "Administración y Finanzas",
      "icon": "briefcase"
    },
    "COM": {
      "name": "Comercialización",
      "icon": "shopping-cart"
    },
    "LOG": {
      "name": "Logística y Compras",
      "icon": "truck"
    }
  },
  "macroprocesses": [
    {
      "code": "MACRO-ADM-01",
      "name": "Administración General y Servicios Administrativos",
      "area": "ADM",
      "type": "Soporte / Operativo",
      "policy": "\"Garantizar la disponibilidad oportuna de infraestructura, seguridad contractual, vigencia de permisos legales y preservación de la memoria documental de la empresa con cero contingencias regulatorias\".",
      "isoFocus": "Gestión de registros físicos y digitales, control de vigencia contractual, mantenimiento locativo, gestión de pólizas y trámites legales."
    },
    {
      "code": "MACRO-ADM-02",
      "name": "Tesorería",
      "area": "ADM",
      "type": "Estratégico / Operativo",
      "policy": "\"Asegurar la liquidez inmediata y proyectada de la organización mediante la administración rigurosa del flujo de caja diario, semanal, mensual y anual sin sobresaltos operativos\".",
      "isoFocus": "Control, proyección y conciliación del flujo de efectivo (Cash Flow) en tiempo real."
    },
    {
      "code": "MACRO-ADM-03",
      "name": "Administración de Créditos y Cobros",
      "area": "ADM",
      "type": "Operativo / Financiero",
      "policy": "\"Maximizar la recuperación oportuna de la cartera de clientes, reduciendo el riesgo de morosidad mediante evaluaciones de crédito rigurosas y comités de seguimiento\".",
      "isoFocus": "Evaluación de riesgo crediticio, gestión de cobranza y reuniones del Comité de Crédito."
    },
    {
      "code": "MACRO-ADM-04",
      "name": "Proceso Contable y Estados Financieros",
      "area": "ADM",
      "type": "Estratégico / Soporte",
      "policy": "\"Emitir información financiera confiable, auditable y oportuna, garantizando la estricta adherencia a las leyes fiscales y normativas contables vigentes\".",
      "isoFocus": "Imputación contable, conciliaciones, cierres periódicos, elaboración de EEFF, análisis de ratios e impuestos."
    },
    {
      "code": "MACRO-ADM-05",
      "name": "Gobierno Operativo y Rendición de Cuentas",
      "area": "ADM",
      "type": "Estratégico",
      "policy": "\"Fomentar la transparencia, la rendición de cuentas gerencial y la mejora continua a través de la revisión sistémica de indicadores y cumplimiento de acuerdos\".",
      "isoFocus": "Sesiones de rendición de cuentas, control presupuestario y seguimiento a compromisos gerenciales."
    },
    {
      "code": "MACRO-ADM-GP-04",
      "name": "ADMINISTRACIÓN DEL PROCESO CONTABLE Y ESTADOS FINANCIEROS",
      "area": "ADM",
      "type": "Operativo",
      "policy": "Garantizar el orden legal, contable y financiero de la organizaciÃ³n.",
      "isoFocus": "Registrar, controlar, analizar y reportar las operaciones financieras de la empresa\n\nObjetivo                                                               Garantizar la confiabilidad de la información contable para la toma de decisiones, el cumplimiento legal y fiscal, y la elaboración de los estados financieros."
    },
    {
      "code": "MACRO-ADM-GP-05",
      "name": "REUNIONES CON JEFATURA DE RENDIMIENTO DE CUENTAS",
      "area": "ADM",
      "type": "Operativo",
      "policy": "Garantizar el orden legal, contable y financiero de la organizaciÃ³n.",
      "isoFocus": "Macroproceso del Ã¡rea de AdministraciÃ³n y Finanzas."
    },
    {
      "code": "MACRO-ADM-GP-06",
      "name": "POLITICAS DE INVERSION",
      "area": "ADM",
      "type": "Operativo",
      "policy": "Garantizar el orden legal, contable y financiero de la organizaciÃ³n.",
      "isoFocus": "Son las normas y lineamientos que establecen cómo la empresa asignará sus recursos financieros en proyectos, activos, tecnología, expansión, adquisiciones o instrumentos financieros, buscando maximizar la rentabilidad y minimizar riesgos.\n\nObjetivos\nMaximizar el retorno sobre la inversión.\nGestionar riesgos financieros.\nGarantizar la sostenibilidad del negocio."
    },
    {
      "code": "MACRO-ADM-GP-07",
      "name": "AUDITORIA INTERNAS",
      "area": "ADM",
      "type": "Operativo",
      "policy": "Garantizar el orden legal, contable y financiero de la organizaciÃ³n.",
      "isoFocus": "La auditoría es un proceso sistemático, independiente y documentado mediante el cual se examinan y evalúan las actividades, registros, controles, procesos y estados financieros de una empresa para verificar que sean correctos, confiables, eficientes y cumplan con las normas, políticas y regulaciones aplicables.\n\nObjetivos de la Auditoría\nVerificar la exactitud y confiabilidad de la información financiera.\nEvaluar la efectividad de los controles internos.\nIdentificar riesgos, errores, fraudes o desviaciones.\nComprobar el cumplimiento de leyes, regulaciones y políticas internas.\nProponer oportunidades de mejora en los procesos y la gestión empresarial.\nProteger los activos de la empresa."
    },
    {
      "code": "MACRO-LOG-01",
      "name": "IngenierÃ­a y PlanificaciÃ³n de Producto",
      "area": "LOG",
      "type": "EstratÃ©gico / Soporte",
      "policy": "Administrar el portafolio comercial asegurando rentabilidad y disponibilidad del catÃ¡logo.",
      "isoFocus": "8.1, 8.2.2 y 8.6"
    },
    {
      "code": "MACRO-LOG-02",
      "name": "AdministraciÃ³n de Proveedores de Producto",
      "area": "LOG",
      "type": "EstratÃ©gico / Soporte",
      "policy": "Homologar, evaluar y auditar la calidad de servicio de los proveedores.",
      "isoFocus": "8.4 (Control de Proveedores)"
    },
    {
      "code": "MACRO-LOG-03",
      "name": "Comite de la Demanda",
      "area": "LOG",
      "type": "Estrategico",
      "policy": "Asegurar el balance de inventario frente a proyecciones de venta.",
      "isoFocus": "8.1, 8.2 y 8.5.1"
    },
    {
      "code": "MACRO-LOG-04",
      "name": "Analisis de Inventarios del Pronostico de Demanda",
      "area": "LOG",
      "type": "Operativo / Estrategico",
      "policy": "Mantener exactitud de registro de inventario (ERI) y minimizar venta perdida.",
      "isoFocus": "8.5 (Control y Trazabilidad)"
    },
    {
      "code": "MACRO-LOG-05",
      "name": "Trafico de Pedidos: Admon. Ordenes de Compra",
      "area": "LOG",
      "type": "Operativo",
      "policy": "Garantizar la compra optima y seguimiento estricto de leadtimes.",
      "isoFocus": "8.4.2 y 8.4.3"
    },
    {
      "code": "MACRO-LOG-06",
      "name": "AdministraciÃ³n del Centro de DistribuciÃ³n (CD)",
      "area": "LOG",
      "type": "Operativo",
      "policy": "Garantizar despacho rÃ¡pido, control en rampa y picking eficiente.",
      "isoFocus": "8.5.1, 8.5.4 y 8.6"
    },
    {
      "code": "MACRO-LOG-07",
      "name": "Retorno s/ Activos Circulantes y Capital de Trabajo",
      "area": "LOG",
      "type": "EstratÃ©gico",
      "policy": "Garantizar la rotaciÃ³n del capital de trabajo y negociaciÃ³n de plazos.",
      "isoFocus": "8.4 y 8.5"
    },
    {
      "code": "MACRO-LOG-08",
      "name": "Procesos Gerenciales",
      "area": "LOG",
      "type": "EstratÃ©gico",
      "policy": "Garantizar auditorÃ­as de control, matriz de riesgos y planes correctivos.",
      "isoFocus": "9.2 y 10.2 (AuditorÃ­as y CAPA)"
    },
    {
      "code": "MACRO-COM-01",
      "name": "ENCONTRAR EL VALOR",
      "area": "COM",
      "type": "Operativo",
      "policy": "Es la fase inicial y de exploración. Consiste en recopilar, analizar e interpretar datos sobre el entorno comercial, los competidores y los consumidores.\n\nObjetivo: Identificar nuevas oportunidades de negocio, entender las necesidades insatisfechas del cliente, evaluar tendencias tecnológicas o demográficas y mitigar riesgos antes de lanzar un producto o entrar a un nuevo segmento.",
      "isoFocus": "Numerales 8.2, 8.5.1 y 9.1.2"
    },
    {
      "code": "MACRO-COM-02",
      "name": "CREACION DE VALOR",
      "area": "COM",
      "type": "Operativo",
      "policy": "Una vez identificada la oportunidad en el mercado, el negocio diseña la solución. Crear valor significa transformar recursos, conocimientos y tecnología en un producto, servicio o experiencia que resuelva de manera efectiva un problema del cliente.\n\nObjetivo: Desarrollar una propuesta de valor única que supere las alternativas de la competencia y que el cliente perciba como útil, deseable y necesaria.",
      "isoFocus": "Numerales 8.2, 8.5.1 y 9.1.2"
    },
    {
      "code": "MACRO-COM-03",
      "name": "CAPTURAR VALOR",
      "area": "COM",
      "type": "Operativo",
      "policy": "No basta con generar algo valioso; la empresa debe ser capaz de monetizarlo y rentabilizarlo. Significa transformar la excelente experiencia del cliente en ingresos tangibles, rentabilidad y fidelidad para el negocio\nEste proceso se traduce en las estrategias de fijación de precios (pricing), comercialización, ventas y modelos de negocio.\n\nObjetivo: Convertir el valor entregado al cliente en ingresos tangibles, flujo de caja y margen de ganancia para la compañía.",
      "isoFocus": "Numerales 8.2, 8.5.1 y 9.1.2"
    },
    {
      "code": "MACRO-COM-04",
      "name": "SOSTENER VALOR",
      "area": "COM",
      "type": "Operativo",
      "policy": "El objetivo de esta fase es garantizar que la ventaja competitiva, los ingresos o las eficiencias conseguidas en las fases anteriores se mantengan estables y protegidas frente a la obsolescencia, la competencia y el desgaste\n\nObjetivo: Evitar que el producto o servicio se vuelva obsoleto o sufra de \"comoditización\" (guerra de precios bajos), manteniendo la rentabilidad a largo plazo.",
      "isoFocus": "Numerales 8.2, 8.5.1 y 9.1.2"
    },
    {
      "code": "MACRO-COM-05",
      "name": "PRESUPUESTOS",
      "area": "COM",
      "type": "Operativo",
      "policy": "Es el proceso de planificación financiera donde se cuantifican los recursos económicos necesarios para ejecutar las estrategias anteriores (I+D, operaciones, marketing, etc.).\n\nObjetivo: Asignar capital de manera eficiente, establecer metas financieras, proyectar gastos e ingresos, y asegurar que la empresa cuente con la liquidez necesaria para operar sin contratiempos.",
      "isoFocus": "Numerales 8.2, 8.5.1 y 9.1.2"
    },
    {
      "code": "MACRO-COM-06",
      "name": "REUNIONES DE RENDIMIENTO DE CUENTAS",
      "area": "COM",
      "type": "Operativo",
      "policy": "Es el eslabón de control y gobernanza. Son sesiones estructuradas donde los líderes y equipos revisan si se han cumplido los objetivos trazados frente a los presupuestos y planes de valor acordados.\n\nObjetivo: Evaluar desviaciones (por qué no se vendió lo esperado o por qué se gastó de más), asignar responsabilidades de forma transparente y tomar acciones correctivas rápidas para enderezar el rumbo del negocio.",
      "isoFocus": "Numerales 8.2, 8.5.1 y 9.1.2"
    }
  ],
  "poes": [
    {
      "nextAudit": "2026-08-15",
      "version": "1.2",
      "scope": "Aplica a todos los cajeros, tesorería central y personal auditor de la empresa.",
      "macroCode": "MACRO-ADM-01",
      "isoRelated": "ISO 9001:2015 8.1 (Control Operativo)",
      "description": "Regula el recuento, conciliación y entrega de valores a la Empresa Transportadora de Valores (ETV).",
      "area": "ADM",
      "outputs": "Remesas de valores, depósito bancario, bitácora de arqueos",
      "objective": "Garantizar el cuadre total del efectivo y la custodia segura de los fondos recaudados en los puntos de venta.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Jefe de Tesorería",
      "kpis": [
        {
          "name": "Variación de Caja",
          "target": "< 0.05%",
          "value": "0.02%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Faltante o sobrante de efectivo",
          "probability": 2,
          "impact": 4,
          "level": "Medio",
          "control": "Doble conteo ciego",
          "owner": "Jefe de Tesorería",
          "mitigation": "Ajuste de caja e investigación de cajero",
          "status": "Activo",
          "reviewDate": "2026-07-01"
        }
      ],
      "code": "POE-ADM-01",
      "realTime": "28 min",
      "name": "Procedimiento de Apertura, Fondos, Arqueos y ETV",
      "inputs": "Comprobantes POS, billetes/monedas físicas, órdenes de retiro ETV",
      "status": "Publicado",
      "lastAudit": "2026-06-15"
    },
    {
      "nextAudit": "2026-11-10",
      "version": "2.0",
      "scope": "Cierre diario de facturación, contabilidad general y TI.",
      "macroCode": "MACRO-ADM-01",
      "isoRelated": "ISO 9001:2015 7.1.1 (Infraestructura de Datos)",
      "description": "Administración del control de asistencia, cierre de módulos operativos y consolidación contable en el ERP.",
      "area": "ADM",
      "outputs": "Balance diario, logs de cierre de base de datos",
      "objective": "Garantizar la inmutabilidad y precisión de los estados contables diarios consolidando el ERP a tiempo.",
      "expectedTime": "120 min",
      "complianceRate": 88,
      "owner": "Contador General",
      "kpis": [
        {
          "name": "Cierres sin Errores",
          "target": "> 99%",
          "value": "98.5%",
          "trend": "stable",
          "status": "warning"
        }
      ],
      "risks": [
        {
          "risk": "Retraso en corrida de procesos nocturnos ERP",
          "probability": 3,
          "impact": 3,
          "level": "Medio",
          "control": "Monitoreo remoto automático",
          "owner": "Administrador TI",
          "mitigation": "Corrida manual al iniciar el día",
          "status": "Mitigado",
          "reviewDate": "2026-07-15"
        }
      ],
      "code": "POE-ADM-02",
      "realTime": "135 min",
      "name": "Procedimiento de Control de Tiempos, Cierre ERP y Gerencia",
      "inputs": "Marcas biométricas, reportes POS diarios, facturas de compras",
      "status": "Publicado",
      "lastAudit": "2026-05-10"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Toda vacante y nueva contratación en la empresa.",
      "macroCode": "MACRO-ADM-02",
      "isoRelated": "ISO 9001:2015 7.2 (Competencia)",
      "description": "Búsqueda, selección, validación e integración del talento humano a sus puestos organizacionales.",
      "area": "ADM",
      "outputs": "Expediente del empleado auditado, plan de inducción firmado",
      "objective": "Asegurar que el personal contratado posea las competencias necesarias para operar conforme al SGC.",
      "expectedTime": "15 días",
      "complianceRate": 100,
      "owner": "Jefe de Recursos Humanos",
      "kpis": [
        {
          "name": "Rotación en Periodo de Prueba",
          "target": "< 5%",
          "value": "3.2%",
          "trend": "upward",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Contratación de perfiles no aptos",
          "probability": 1,
          "impact": 5,
          "level": "Medio",
          "control": "Filtros técnicos y psicométricos",
          "owner": "Jefe RRHH",
          "mitigation": "Evaluación de periodo de prueba",
          "status": "Activo",
          "reviewDate": "2026-07-20"
        }
      ],
      "code": "POE-ADM-03",
      "realTime": "14 días",
      "name": "Procedimiento de Reclutamiento, Selección e Inducción",
      "inputs": "Requerimiento de personal aprobado, currículum vitae",
      "status": "Publicado",
      "lastAudit": "2026-04-20"
    },
    {
      "nextAudit": "2026-09-12",
      "version": "1.1",
      "scope": "Equipos de TI, mobiliario, inmuebles, vehículos y maquinaria.",
      "macroCode": "MACRO-ADM-02",
      "isoRelated": "ISO 9001:2015 7.1.3 (Infraestructura)",
      "description": "Control físico, contable e informático de la adquisición, plaqueo y mantenimiento de activos de la empresa.",
      "area": "ADM",
      "outputs": "Inventario de activos fijos actualizado, plan de mantenimiento ejecutado",
      "objective": "Mantener los activos de infraestructura en condiciones óptimas para garantizar la continuidad del negocio.",
      "expectedTime": "48 horas",
      "complianceRate": 100,
      "owner": "Jefe de Infraestructura",
      "kpis": [
        {
          "name": "Exactitud de Inventario Fijo",
          "target": "> 98%",
          "value": "99.1%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Pérdida o daño no reportado de activos fijos",
          "probability": 2,
          "impact": 3,
          "level": "Medio",
          "control": "Auditoría de activos periódica",
          "owner": "Auditor Interno",
          "mitigation": "Cobro a responsable según política",
          "status": "Mitigado",
          "reviewDate": "2026-07-10"
        }
      ],
      "code": "POE-ADM-04",
      "realTime": "36 horas",
      "name": "Procedimiento de Administración de Activos y Mantenimiento General",
      "inputs": "Facturas de compra, solicitudes de reparación preventiva/correctiva",
      "status": "Publicado",
      "lastAudit": "2026-03-12"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-01",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Gestionar la obtención, renovación y control de licencias operativas, sanitarias y matrículas regulatorias.",
      "area": "ADM",
      "outputs": "Licencias Operativas Vigentes y Registro de Permisos.",
      "objective": "Gestionar la obtención, renovación y control de licencias operativas, sanitarias y matrículas regulatorias.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "GABY",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-05",
      "realTime": "28 min",
      "name": "Administración de Licencias y Permisos",
      "inputs": "Requisitos legales, matriz de cumplimiento normativo.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-01",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Controlar la recepción, distribución interna, seguimiento y envío de correspondencia física y electrónica.",
      "area": "ADM",
      "outputs": "Registro de Correspondencia y Bitácora de Distribución.",
      "objective": "Controlar la recepción, distribución interna, seguimiento y envío de correspondencia física y electrónica.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "GABY",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-06",
      "realTime": "28 min",
      "name": "Gestión de Correspondencia",
      "inputs": "Cartas, paquetería, notificaciones oficiales, facturas.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-01",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Administrar la creación, recepción, clasificación, almacenamiento, conservación y disposición final de la documentación física y digital de la empresa.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Administrar la creación, recepción, clasificación, almacenamiento, conservación y disposición final de la documentación física y digital de la empresa.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-01",
      "realTime": "40 min",
      "name": "GESTIÓN DOCUMENTAL",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-01",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Gestionar la elaboración, custodia, renovación, actualización y control de vencimientos de contratos con proveedores, arrendadores, clientes y prestadores de servicios, contratos con empleados",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Gestionar la elaboración, custodia, renovación, actualización y control de vencimientos de contratos con proveedores, arrendadores, clientes y prestadores de servicios, contratos con empleados",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY\nContratos de servicios a RRHH",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY\nContratos de servicios a RRHH",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-02",
      "realTime": "40 min",
      "name": "ADMINISTRACIÓN DE CONTRATOS",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-01",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Administrar los servicios de apoyo necesarios para la operación de la empresa, tales como telefonía, internet, energía eléctrica, agua, mensajería, mantenimiento e infraestructura.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Administrar los servicios de apoyo necesarios para la operación de la empresa, tales como telefonía, internet, energía eléctrica, agua, mensajería, mantenimiento e infraestructura.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-03",
      "realTime": "40 min",
      "name": "GESTIÓN DE SERVICIOS GENERALES",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-01",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Administrar las pólizas de seguros de activos, vehículos, equipos, instalaciones y demás riesgos empresariales, asegurando su vigencia y cobertura adecuada.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Administrar las pólizas de seguros de activos, vehículos, equipos, instalaciones y demás riesgos empresariales, asegurando su vigencia y cobertura adecuada.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-04",
      "realTime": "40 min",
      "name": "GESTIÓN DE SEGUROS",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Garantizar el registro oportuno, íntegro, exacto y verificable de todas las transacciones económicas de la empresa, de acuerdo con las políticas internas, las normas contables aplicables y los requisitos legales, proporcionando información financiera confiable para la toma de decisiones y la elaboración de los estados financieros.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Garantizar el registro oportuno, íntegro, exacto y verificable de todas las transacciones económicas de la empresa, de acuerdo con las políticas internas, las normas contables aplicables y los requisitos legales, proporcionando información financiera confiable para la toma de decisiones y la elaboración de los estados financieros.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-09",
      "realTime": "40 min",
      "name": "1. REGISTROS CONTABLE",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se identifican, verifican, documentan y contabilizan todas las operaciones que generan ingresos para la empresa, asegurando su registro oportuno, exacto y conforme a las normas contables vigentes. Incluye ventas de bienes, prestación de servicios, ingresos financieros y otros ingresos operativos o extraordinarios.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se identifican, verifican, documentan y contabilizan todas las operaciones que generan ingresos para la empresa, asegurando su registro oportuno, exacto y conforme a las normas contables vigentes. Incluye ventas de bienes, prestación de servicios, ingresos financieros y otros ingresos operativos o extraordinarios.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-10",
      "realTime": "40 min",
      "name": "1.1 REGISTRO DE INGRESOS.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento destinado a registrar y controlar todas las salidas de recursos económicos de la empresa derivadas de gastos operativos, administrativos, financieros, inversiones y otros desembolsos. Garantiza que cada egreso cuente con el respaldo documental correspondiente y sea contabilizado en el período que corresponda.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento destinado a registrar y controlar todas las salidas de recursos económicos de la empresa derivadas de gastos operativos, administrativos, financieros, inversiones y otros desembolsos. Garantiza que cada egreso cuente con el respaldo documental correspondiente y sea contabilizado en el período que corresponda.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-11",
      "realTime": "40 min",
      "name": "1.2 REGISTRO DE EGRESOS.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se registran, validan y contabilizan las transacciones de compra de bienes y servicios, así como las ventas realizadas por la empresa. Su propósito es mantener información financiera confiable, controlar las obligaciones con proveedores, los derechos de cobro a clientes y cumplir con los requisitos fiscales y contables aplicables.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se registran, validan y contabilizan las transacciones de compra de bienes y servicios, así como las ventas realizadas por la empresa. Su propósito es mantener información financiera confiable, controlar las obligaciones con proveedores, los derechos de cobro a clientes y cumplir con los requisitos fiscales y contables aplicables.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-12",
      "realTime": "40 min",
      "name": "1.3 REGISTRO DE COMPRAS Y VENTAS.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento orientado al cálculo, registro y control periódico de la pérdida de valor de los activos fijos tangibles (depreciación) y de los activos intangibles (amortización), de acuerdo con las políticas contables y la vida útil establecida por la empresa. Su objetivo es reflejar razonablemente el consumo o desgaste de los activos en los estados financieros.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento orientado al cálculo, registro y control periódico de la pérdida de valor de los activos fijos tangibles (depreciación) y de los activos intangibles (amortización), de acuerdo con las políticas contables y la vida útil establecida por la empresa. Su objetivo es reflejar razonablemente el consumo o desgaste de los activos en los estados financieros.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-13",
      "realTime": "40 min",
      "name": "1.4 REGISTRO DE DEPRECIACIONES Y AMORTIZACIONES.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se reconocen y registran obligaciones, riesgos, gastos o pérdidas probables que, aunque no se hayan materializado completamente, pueden afectar la situación financiera de la empresa. Incluye provisiones para cuentas incobrables, prestaciones laborales, impuestos, litigios, garantías y otras contingencias identificadas conforme a las normas contables vigentes.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se reconocen y registran obligaciones, riesgos, gastos o pérdidas probables que, aunque no se hayan materializado completamente, pueden afectar la situación financiera de la empresa. Incluye provisiones para cuentas incobrables, prestaciones laborales, impuestos, litigios, garantías y otras contingencias identificadas conforme a las normas contables vigentes.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-14",
      "realTime": "40 min",
      "name": "1.5 CONTABILIZACIÓN DE PROVISIONES.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Garantizar la integridad, exactitud y confiabilidad de la información financiera mediante la verificación, comparación y ajuste de los registros contables con sus documentos de respaldo, asegurando que los saldos reflejados en los estados financieros sean correctos y oportunos",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Garantizar la integridad, exactitud y confiabilidad de la información financiera mediante la verificación, comparación y ajuste de los registros contables con sus documentos de respaldo, asegurando que los saldos reflejados en los estados financieros sean correctos y oportunos",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-15",
      "realTime": "40 min",
      "name": "2. CONTROL Y CONCILIACIONES",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se comparan los movimientos y saldos registrados en los libros contables de la empresa con los estados de cuenta emitidos por las instituciones bancarias. Su finalidad es identificar y corregir diferencias derivadas de depósitos en tránsito, cheques pendientes de cobro, cargos bancarios, errores de registro u otras partidas conciliatorias.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se comparan los movimientos y saldos registrados en los libros contables de la empresa con los estados de cuenta emitidos por las instituciones bancarias. Su finalidad es identificar y corregir diferencias derivadas de depósitos en tránsito, cheques pendientes de cobro, cargos bancarios, errores de registro u otras partidas conciliatorias.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-16",
      "realTime": "40 min",
      "name": "2.1 CONCILIACIONES BANCARIAS.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento orientado a verificar la concordancia entre los saldos registrados en contabilidad y los saldos mantenidos en los auxiliares de clientes. Incluye la revisión de facturas, notas de crédito, pagos recibidos, anticipos y saldos pendientes, con el fin de asegurar la exactitud de las cuentas por cobrar y facilitar la gestión de recuperación de cartera.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento orientado a verificar la concordancia entre los saldos registrados en contabilidad y los saldos mantenidos en los auxiliares de clientes. Incluye la revisión de facturas, notas de crédito, pagos recibidos, anticipos y saldos pendientes, con el fin de asegurar la exactitud de las cuentas por cobrar y facilitar la gestión de recuperación de cartera.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "KARLA / CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "KARLA / CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-17",
      "realTime": "40 min",
      "name": "2.2 CONCILIACIÓN DE CUENTAS POR COBRAR.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se verifican y comparan los saldos registrados en contabilidad con los estados de cuenta, facturas y registros de los proveedores. Su objetivo es asegurar que las obligaciones financieras estén correctamente registradas, evitar pagos duplicados o incorrectos y mantener información actualizada sobre las deudas pendientes.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se verifican y comparan los saldos registrados en contabilidad con los estados de cuenta, facturas y registros de los proveedores. Su objetivo es asegurar que las obligaciones financieras estén correctamente registradas, evitar pagos duplicados o incorrectos y mantener información actualizada sobre las deudas pendientes.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-18",
      "realTime": "40 min",
      "name": "2.3 CONCILIACIÓN DE CUENTAS POR PAGAR.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento destinado a validar la consistencia entre los registros auxiliares y las cuentas de mayor del sistema contable. Comprende la revisión de auxiliares de clientes, proveedores, bancos, inventarios, activos fijos y otras cuentas relevantes, identificando diferencias o inconsistencias que puedan afectar la calidad de la información financiera.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento destinado a validar la consistencia entre los registros auxiliares y las cuentas de mayor del sistema contable. Comprende la revisión de auxiliares de clientes, proveedores, bancos, inventarios, activos fijos y otras cuentas relevantes, identificando diferencias o inconsistencias que puedan afectar la calidad de la información financiera.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-19",
      "realTime": "40 min",
      "name": "2.4 REVISIÓN DE AUXILIARES CONTABLES.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se realizan correcciones, reclasificaciones o registros complementarios necesarios para reflejar adecuadamente la situación financiera de la empresa. Incluye ajustes por errores detectados, provisiones, depreciaciones, amortizaciones, diferencias cambiarias, acumulaciones y cualquier otra partida requerida para cumplir con las normas contables y políticas internas",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se realizan correcciones, reclasificaciones o registros complementarios necesarios para reflejar adecuadamente la situación financiera de la empresa. Incluye ajustes por errores detectados, provisiones, depreciaciones, amortizaciones, diferencias cambiarias, acumulaciones y cualquier otra partida requerida para cumplir con las normas contables y políticas internas",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-20",
      "realTime": "40 min",
      "name": "2.5 AJUSTES CONTABLES.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Garantizar que todas las operaciones económicas y financieras de la empresa sean registradas, revisadas, conciliadas y consolidadas de manera oportuna y confiable al final de cada período contable, asegurando la integridad de la información para la elaboración de los estados financieros y la toma de decisiones.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Garantizar que todas las operaciones económicas y financieras de la empresa sean registradas, revisadas, conciliadas y consolidadas de manera oportuna y confiable al final de cada período contable, asegurando la integridad de la información para la elaboración de los estados financieros y la toma de decisiones.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-21",
      "realTime": "40 min",
      "name": "3. CIERRE CONTABLE",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se verifican, registran, ajustan y consolidan todas las transacciones financieras correspondientes a un mes determinado. Incluye la revisión de registros contables, conciliaciones bancarias, provisiones, depreciaciones, amortizaciones y demás ajustes necesarios para garantizar que la información financiera refleje razonablemente la situación económica de la empresa al cierre del período.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se verifican, registran, ajustan y consolidan todas las transacciones financieras correspondientes a un mes determinado. Incluye la revisión de registros contables, conciliaciones bancarias, provisiones, depreciaciones, amortizaciones y demás ajustes necesarios para garantizar que la información financiera refleje razonablemente la situación económica de la empresa al cierre del período.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-22",
      "realTime": "40 min",
      "name": "3.1 CIERRE MENSUAL.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento destinado a verificar la razonabilidad, exactitud e integridad de los saldos contables antes de la emisión de los estados financieros. Incluye la revisión de cuentas de activos, pasivos, patrimonio, ingresos y gastos, la confirmación de soportes documentales y la identificación y corrección de inconsistencias o diferencias detectadas durante el proceso de cierre.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento destinado a verificar la razonabilidad, exactitud e integridad de los saldos contables antes de la emisión de los estados financieros. Incluye la revisión de cuentas de activos, pasivos, patrimonio, ingresos y gastos, la confirmación de soportes documentales y la identificación y corrección de inconsistencias o diferencias detectadas durante el proceso de cierre.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-23",
      "realTime": "40 min",
      "name": "3.2 VALIDACIÓN DE SALDOS.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Preparar, analizar y presentar los estados financieros de la empresa de manera oportuna, confiable y conforme a las normas contables aplicables, proporcionando información útil para la toma de decisiones, el cumplimiento legal y la rendición de cuentas ante las partes interesadas.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Preparar, analizar y presentar los estados financieros de la empresa de manera oportuna, confiable y conforme a las normas contables aplicables, proporcionando información útil para la toma de decisiones, el cumplimiento legal y la rendición de cuentas ante las partes interesadas.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-24",
      "realTime": "40 min",
      "name": "4. ELABORACIÓN DE ESTADOS FINANCIEROS",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se prepara y presenta la situación financiera de la empresa a una fecha determinada, mostrando la composición y el valor de los activos, pasivos y patrimonio. Su objetivo es reflejar la capacidad financiera de la organización y proporcionar información sobre los recursos disponibles y las obligaciones existentes.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se prepara y presenta la situación financiera de la empresa a una fecha determinada, mostrando la composición y el valor de los activos, pasivos y patrimonio. Su objetivo es reflejar la capacidad financiera de la organización y proporcionar información sobre los recursos disponibles y las obligaciones existentes.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-25",
      "realTime": "40 min",
      "name": "4.1 ESTADO DE SITUACIÓN FINANCIERA (BALANCE GENERAL).",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento destinado a determinar y presentar el resultado económico obtenido por la empresa durante un período específico. Incluye el registro y análisis de ingresos, costos, gastos operativos, gastos financieros e impuestos, permitiendo identificar la utilidad o pérdida generada por las operaciones del negocio.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento destinado a determinar y presentar el resultado económico obtenido por la empresa durante un período específico. Incluye el registro y análisis de ingresos, costos, gastos operativos, gastos financieros e impuestos, permitiendo identificar la utilidad o pérdida generada por las operaciones del negocio.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-26",
      "realTime": "40 min",
      "name": "4.2 ESTADO DE RESULTADOS DE PERDIDAS Y GANACIAS",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se identifican, clasifican y presentan los movimientos de efectivo y equivalentes de efectivo ocurridos durante un período determinado. Incluye actividades de operación, inversión y financiamiento, proporcionando información sobre la capacidad de la empresa para generar liquidez y cumplir con sus compromisos financieros.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se identifican, clasifican y presentan los movimientos de efectivo y equivalentes de efectivo ocurridos durante un período determinado. Incluye actividades de operación, inversión y financiamiento, proporcionando información sobre la capacidad de la empresa para generar liquidez y cumplir con sus compromisos financieros.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-27",
      "realTime": "40 min",
      "name": "4.3 ESTADO DE FLUJO DE EFECTIVO.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento orientado a presentar las variaciones ocurridas en las cuentas patrimoniales durante un período determinado. Incluye movimientos relacionados con aportaciones de socios o accionistas, distribución de utilidades, reservas, resultados acumulados y otros cambios que afecten el patrimonio de la empresa.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento orientado a presentar las variaciones ocurridas en las cuentas patrimoniales durante un período determinado. Incluye movimientos relacionados con aportaciones de socios o accionistas, distribución de utilidades, reservas, resultados acumulados y otros cambios que afecten el patrimonio de la empresa.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-28",
      "realTime": "40 min",
      "name": "4.4 ESTADO DE CAMBIOS EN EL PATRIMONIO.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se elaboran las revelaciones complementarias que explican, detallan y sustentan la información contenida en los estados financieros. Incluye políticas contables, criterios de valuación, contingencias, compromisos, riesgos y cualquier información relevante que facilite la adecuada interpretación de la situación financiera y los resultados de la empresa.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se elaboran las revelaciones complementarias que explican, detallan y sustentan la información contenida en los estados financieros. Incluye políticas contables, criterios de valuación, contingencias, compromisos, riesgos y cualquier información relevante que facilite la adecuada interpretación de la situación financiera y los resultados de la empresa.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-29",
      "realTime": "40 min",
      "name": "4.5 NOTAS A LOS ESTADOS FINANCIEROS.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Garantizar el cumplimiento oportuno y correcto de las obligaciones tributarias, fiscales y regulatorias de la empresa, mediante la determinación, declaración, pago y documentación de los impuestos aplicables, minimizando riesgos legales, financieros y reputacionales.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Garantizar el cumplimiento oportuno y correcto de las obligaciones tributarias, fiscales y regulatorias de la empresa, mediante la determinación, declaración, pago y documentación de los impuestos aplicables, minimizando riesgos legales, financieros y reputacionales.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-30",
      "realTime": "40 min",
      "name": "5. CUMPLIMIENTO FISCAL",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se recopila, valida y presenta ante las autoridades fiscales la información requerida para el cumplimiento de las obligaciones tributarias de la empresa. Incluye la preparación, revisión y presentación de declaraciones periódicas y anuales, asegurando que la información declarada sea exacta, completa y presentada dentro de los plazos establecidos por la legislación vigente.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se recopila, valida y presenta ante las autoridades fiscales la información requerida para el cumplimiento de las obligaciones tributarias de la empresa. Incluye la preparación, revisión y presentación de declaraciones periódicas y anuales, asegurando que la información declarada sea exacta, completa y presentada dentro de los plazos establecidos por la legislación vigente.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-31",
      "realTime": "40 min",
      "name": "5.1 DECLARACIONES TRIBUTARIAS.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento orientado a determinar correctamente los impuestos, tasas, contribuciones y retenciones aplicables a las operaciones de la empresa. Incluye la recopilación de información financiera y contable, la aplicación de la normativa tributaria vigente y la generación de los cálculos necesarios para la liquidación y pago oportuno de las obligaciones fiscales.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento orientado a determinar correctamente los impuestos, tasas, contribuciones y retenciones aplicables a las operaciones de la empresa. Incluye la recopilación de información financiera y contable, la aplicación de la normativa tributaria vigente y la generación de los cálculos necesarios para la liquidación y pago oportuno de las obligaciones fiscales.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "GABY/CONTADOR",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "GABY/CONTADOR",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-32",
      "realTime": "40 min",
      "name": "5.2 CÁLCULO DE IMPUESTOS.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Coordinar y proporcionar la información requerida por auditores internos, externos y entidades fiscales reguladoras, dando seguimiento a observaciones, hallazgos y planes de acción derivados de las auditorías.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Coordinar y proporcionar la información requerida por auditores internos, externos y entidades fiscales reguladoras, dando seguimiento a observaciones, hallazgos y planes de acción derivados de las auditorías.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-33",
      "realTime": "40 min",
      "name": "5.3 ATENCIÓN A AUDITORÍAS INTERNAS Y EXTERNAS",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Asegurar que los registros contables, estados financieros y obligaciones fiscales se elaboren y presenten de conformidad con las normas contables aplicables, la legislación tributaria vigente y los requerimientos regulatorios correspondientes.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Asegurar que los registros contables, estados financieros y obligaciones fiscales se elaboren y presenten de conformidad con las normas contables aplicables, la legislación tributaria vigente y los requerimientos regulatorios correspondientes.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-34",
      "realTime": "40 min",
      "name": "5.4 CUMPLIMIENTO DE NORMAS CONTABLES Y TRIBUTARIAS",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Organizar, clasificar, resguardar y controlar la documentación contable y financiera física y digital, garantizando su integridad, disponibilidad, confidencialidad y cumplimiento de los plazos legales de conservación.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Organizar, clasificar, resguardar y controlar la documentación contable y financiera física y digital, garantizando su integridad, disponibilidad, confidencialidad y cumplimiento de los plazos legales de conservación.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-35",
      "realTime": "40 min",
      "name": "5.5 ARCHIVO Y CUSTODIA DE DOCUMENTACIÓN CONTABLE",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Evaluar la situación económica y financiera de la empresa mediante el análisis de sus estados financieros, indicadores clave y tendencias, con el fin de apoyar la toma de decisiones estratégicas, tácticas y operativas de la alta dirección.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Evaluar la situación económica y financiera de la empresa mediante el análisis de sus estados financieros, indicadores clave y tendencias, con el fin de apoyar la toma de decisiones estratégicas, tácticas y operativas de la alta dirección.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "CONSULTORES",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "CONSULTORES",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-36",
      "realTime": "40 min",
      "name": "6. ANÁLISIS FINANCIERO",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se evalúa la capacidad de la empresa para generar utilidades en relación con sus ventas, activos y patrimonio. Incluye el análisis de márgenes de utilidad (bruta, operativa y neta), retorno sobre activos (ROA) y retorno sobre el patrimonio (ROE), con el fin de medir la eficiencia en el uso de los recursos.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se evalúa la capacidad de la empresa para generar utilidades en relación con sus ventas, activos y patrimonio. Incluye el análisis de márgenes de utilidad (bruta, operativa y neta), retorno sobre activos (ROA) y retorno sobre el patrimonio (ROE), con el fin de medir la eficiencia en el uso de los recursos.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "CONSULTORES",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "CONSULTORES",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-37",
      "realTime": "40 min",
      "name": "6.1 ANÁLISIS DE RENTABILIDAD.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento orientado a medir la capacidad de la empresa para cumplir con sus obligaciones de corto plazo utilizando sus activos líquidos. Incluye el cálculo y evaluación de indicadores como razón corriente, prueba ácida y capital de trabajo, permitiendo identificar posibles riesgos de insolvencia a corto plazo.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento orientado a medir la capacidad de la empresa para cumplir con sus obligaciones de corto plazo utilizando sus activos líquidos. Incluye el cálculo y evaluación de indicadores como razón corriente, prueba ácida y capital de trabajo, permitiendo identificar posibles riesgos de insolvencia a corto plazo.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "CONSULTORES",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "CONSULTORES",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-38",
      "realTime": "40 min",
      "name": "6.2 ANÁLISIS DE LIQUIDEZ.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se analiza la estructura de financiamiento de la empresa, evaluando el nivel de deuda en relación con el patrimonio y los activos. Incluye indicadores como nivel de endeudamiento, apalancamiento financiero y cobertura de intereses, con el objetivo de determinar el grado de riesgo financiero.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se analiza la estructura de financiamiento de la empresa, evaluando el nivel de deuda en relación con el patrimonio y los activos. Incluye indicadores como nivel de endeudamiento, apalancamiento financiero y cobertura de intereses, con el objetivo de determinar el grado de riesgo financiero.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "CONSULTORES",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "CONSULTORES",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-39",
      "realTime": "40 min",
      "name": "6.3 ANÁLISIS DE ENDEUDAMIENTO.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento destinado a calcular, monitorear y analizar un conjunto de indicadores clave de desempeño financiero (KPIs) que permiten evaluar la salud financiera de la empresa. Incluye indicadores de eficiencia, rentabilidad, liquidez, actividad y solvencia, facilitando el seguimiento del desempeño empresarial en el tiempo.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento destinado a calcular, monitorear y analizar un conjunto de indicadores clave de desempeño financiero (KPIs) que permiten evaluar la salud financiera de la empresa. Incluye indicadores de eficiencia, rentabilidad, liquidez, actividad y solvencia, facilitando el seguimiento del desempeño empresarial en el tiempo.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "CONSULTORES",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "CONSULTORES",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-40",
      "realTime": "40 min",
      "name": "6.4 INDICADORES FINANCIEROS.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Procedimiento mediante el cual se consolidan, interpretan y comunican los resultados del análisis financiero a la alta dirección. Incluye la preparación de reportes ejecutivos, dashboards, gráficos y conclusiones estratégicas que apoyan la toma de decisiones y la planificación empresarial.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Procedimiento mediante el cual se consolidan, interpretan y comunican los resultados del análisis financiero a la alta dirección. Incluye la preparación de reportes ejecutivos, dashboards, gráficos y conclusiones estratégicas que apoyan la toma de decisiones y la planificación empresarial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "CONSULTORES",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "CONSULTORES",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-41",
      "realTime": "40 min",
      "name": "6.5 PRESENTACIÓN DE RESULTADOS A LA DIRECCIÓN.",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en establecer, revisar y actualizar los lineamientos, criterios financieros, niveles de aprobación, límites de riesgo y normas que regulan las inversiones de la empresa, asegurando su alineación con la estrategia corporativa y las mejores prácticas de gobierno corporativo.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en establecer, revisar y actualizar los lineamientos, criterios financieros, niveles de aprobación, límites de riesgo y normas que regulan las inversiones de la empresa, asegurando su alineación con la estrategia corporativa y las mejores prácticas de gobierno corporativo.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-42",
      "realTime": "40 min",
      "name": "1. DEFINICIÓN Y ACTUALIZACIÓN DE LA POLÍTICA DE INVERSIÓN",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en detectar y documentar las necesidades de inversión derivadas del crecimiento del negocio, renovación de activos, expansión, innovación, reducción de costos o cumplimiento de objetivos estratégicos, justificando cada requerimiento.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en detectar y documentar las necesidades de inversión derivadas del crecimiento del negocio, renovación de activos, expansión, innovación, reducción de costos o cumplimiento de objetivos estratégicos, justificando cada requerimiento.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-43",
      "realTime": "40 min",
      "name": "2. IDENTIFICACIÓN DE NECESIDADES DE INVERSIÓN",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Comprende la elaboración formal de cada proyecto de inversión, definiendo su alcance, objetivos, recursos requeridos, cronograma, presupuesto y beneficios esperados para facilitar su evaluación.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Comprende la elaboración formal de cada proyecto de inversión, definiendo su alcance, objetivos, recursos requeridos, cronograma, presupuesto y beneficios esperados para facilitar su evaluación.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-44",
      "realTime": "40 min",
      "name": "3. FORMULACIÓN DE PROYECTOS DE INVERSIÓN",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en analizar la viabilidad técnica y operativa del proyecto, verificando que existan las condiciones, infraestructura, tecnología, recursos humanos y capacidad necesaria para ejecutar exitosamente la inversión.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en analizar la viabilidad técnica y operativa del proyecto, verificando que existan las condiciones, infraestructura, tecnología, recursos humanos y capacidad necesaria para ejecutar exitosamente la inversión.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-45",
      "realTime": "40 min",
      "name": "4. EVALUACIÓN TÉCNICA DE LA INVERSIÓN",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en analizar la rentabilidad y conveniencia financiera del proyecto mediante herramientas como flujo de caja proyectado, Valor Presente Neto (VPN), Tasa Interna de Retorno (TIR), Retorno sobre la Inversión (ROI), período de recuperación (Payback) y análisis de sensibilidad.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en analizar la rentabilidad y conveniencia financiera del proyecto mediante herramientas como flujo de caja proyectado, Valor Presente Neto (VPN), Tasa Interna de Retorno (TIR), Retorno sobre la Inversión (ROI), período de recuperación (Payback) y análisis de sensibilidad.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-46",
      "realTime": "40 min",
      "name": "5. EVALUACIÓN FINANCIERA Y ECONÓMICA",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en identificar, analizar, evaluar y establecer controles para los riesgos financieros, operativos, legales, tecnológicos y de mercado que puedan afectar el éxito de la inversión.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en identificar, analizar, evaluar y establecer controles para los riesgos financieros, operativos, legales, tecnológicos y de mercado que puedan afectar el éxito de la inversión.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-47",
      "realTime": "40 min",
      "name": "6. EVALUACIÓN Y GESTIÓN DE RIESGOS DE INVERSIÓN",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en clasificar y ordenar los proyectos de inversión utilizando criterios estratégicos, financieros, operativos y de rentabilidad, con el fin de asignar los recursos disponibles a las iniciativas con mayor impacto para la organización.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en clasificar y ordenar los proyectos de inversión utilizando criterios estratégicos, financieros, operativos y de rentabilidad, con el fin de asignar los recursos disponibles a las iniciativas con mayor impacto para la organización.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-48",
      "realTime": "40 min",
      "name": "7. PRIORIZACIÓN DE INVERSIONES",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en presentar los proyectos de inversión a los niveles de autoridad correspondientes para su análisis, validación y autorización formal, conforme a las políticas financieras y de gobierno corporativo.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en presentar los proyectos de inversión a los niveles de autoridad correspondientes para su análisis, validación y autorización formal, conforme a las políticas financieras y de gobierno corporativo.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-49",
      "realTime": "40 min",
      "name": "8. APROBACIÓN DE INVERSIONES",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en elaborar el plan detallado para ejecutar la inversión, definiendo actividades, responsables, cronogramas, presupuesto definitivo, adquisiciones y mecanismos de control del proyecto.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en elaborar el plan detallado para ejecutar la inversión, definiendo actividades, responsables, cronogramas, presupuesto definitivo, adquisiciones y mecanismos de control del proyecto.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-50",
      "realTime": "40 min",
      "name": "9. PLANIFICACIÓN DE LA EJECUCIÓN DE LA INVERSIÓN",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en obtener y administrar los recursos financieros necesarios para ejecutar las inversiones, ya sea mediante fondos propios, financiamiento bancario, inversionistas u otras fuentes autorizadas.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en obtener y administrar los recursos financieros necesarios para ejecutar las inversiones, ya sea mediante fondos propios, financiamiento bancario, inversionistas u otras fuentes autorizadas.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-51",
      "realTime": "40 min",
      "name": "10. GESTIÓN DEL FINANCIAMIENTO",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Comprende la implementación del proyecto aprobado mediante la adquisición de bienes y servicios, contratación de proveedores, ejecución de obras o puesta en marcha de activos, asegurando el cumplimiento del presupuesto, cronograma y especificaciones técnicas.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Comprende la implementación del proyecto aprobado mediante la adquisición de bienes y servicios, contratación de proveedores, ejecución de obras o puesta en marcha de activos, asegurando el cumplimiento del presupuesto, cronograma y especificaciones técnicas.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-52",
      "realTime": "40 min",
      "name": "11. EJECUCIÓN DE LA INVERSIÓN",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en monitorear permanentemente el avance físico, financiero y operativo de cada proyecto de inversión, identificando desviaciones y aplicando acciones correctivas para asegurar el cumplimiento de los objetivos establecidos.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en monitorear permanentemente el avance físico, financiero y operativo de cada proyecto de inversión, identificando desviaciones y aplicando acciones correctivas para asegurar el cumplimiento de los objetivos establecidos.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-53",
      "realTime": "40 min",
      "name": "12. SEGUIMIENTO Y CONTROL DE INVERSIONES",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en administrar las modificaciones solicitadas durante la ejecución del proyecto, evaluando su impacto en costos, tiempo, alcance y riesgos antes de su aprobación e implementación.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en administrar las modificaciones solicitadas durante la ejecución del proyecto, evaluando su impacto en costos, tiempo, alcance y riesgos antes de su aprobación e implementación.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-54",
      "realTime": "40 min",
      "name": "13. CONTROL DE CAMBIOS DEL PROYECTO DE INVERSIÓN",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en comparar los resultados obtenidos con los objetivos y proyecciones originalmente planteados, evaluando el desempeño financiero, operativo y estratégico de la inversión realizada.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en comparar los resultados obtenidos con los objetivos y proyecciones originalmente planteados, evaluando el desempeño financiero, operativo y estratégico de la inversión realizada.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-55",
      "realTime": "40 min",
      "name": "14. EVALUACIÓN DE RESULTADOS DE LA INVERSIÓN",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en verificar que todas las inversiones hayan sido ejecutadas conforme a las políticas internas, presupuestos aprobados, normativa legal y controles establecidos por la organización.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en verificar que todas las inversiones hayan sido ejecutadas conforme a las políticas internas, presupuestos aprobados, normativa legal y controles establecidos por la organización.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-56",
      "realTime": "40 min",
      "name": "15. AUDITORÍA Y CUMPLIMIENTO DE INVERSIONES",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en mantener actualizado el registro consolidado de todas las inversiones de la empresa, reflejando el estado, avance, rentabilidad y situación financiera de cada proyecto para facilitar la toma de decisiones.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en mantener actualizado el registro consolidado de todas las inversiones de la empresa, reflejando el estado, avance, rentabilidad y situación financiera de cada proyecto para facilitar la toma de decisiones.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-57",
      "realTime": "40 min",
      "name": "16. ACTUALIZACIÓN DEL PORTAFOLIO DE INVERSIONES",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-06",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consiste en revisar periódicamente la efectividad de la política y de los procedimientos de inversión, incorporando lecciones aprendidas, resultados obtenidos, cambios normativos y mejores prácticas para fortalecer el proceso de toma de decisiones.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "Consiste en revisar periódicamente la efectividad de la política y de los procedimientos de inversión, incorporando lecciones aprendidas, resultados obtenidos, cambios normativos y mejores prácticas para fortalecer el proceso de toma de decisiones.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-58",
      "realTime": "40 min",
      "name": "17. MEJORA CONTINUA DE LA POLÍTICA DE INVERSIÓN",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-20",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-GP-07",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "La Auditoria de Activos consiste en demostrar que los activos listados en el Balance General son realmente existentes, que la empresa es propietaria de dichos activos, y que la valuación asignada a los mismos ha sido establecida de conformidad con los Principios de Contabilidad Generalmente Aceptada.",
      "area": "ADM",
      "outputs": "Entregables del proceso firmados.",
      "objective": "La Auditoria de Activos consiste en demostrar que los activos listados en el Balance General son realmente existentes, que la empresa es propietaria de dichos activos, y que la valuación asignada a los mismos ha sido establecida de conformidad con los Principios de Contabilidad Generalmente Aceptada.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "owner": "Encargado de Ã¡rea",
      "kpis": [
        {
          "status": "success",
          "name": "Efectividad del Proceso",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control normativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ã¡rea",
          "control": "Doble firma y conciliaciÃ³n",
          "mitigation": "RevisiÃ³n sistemÃ¡tica",
          "status": "Activo"
        }
      ],
      "code": "POE-ADM-GP-59",
      "realTime": "40 min",
      "name": "CONTROL DE ACTIVOS",
      "inputs": "Requerimientos operativos y datos de gestiÃ³n.",
      "status": "Publicado",
      "lastAudit": "2026-07-20"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Garantizar el registro oportuno, íntegro y verificable de todas las transacciones en el ERP contable.",
      "area": "ADM",
      "outputs": "Libro Diario Actualizado y Registros Contables.",
      "objective": "Garantizar el registro oportuno, íntegro y verificable de todas las transacciones en el ERP contable.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-01",
      "realTime": "28 min",
      "name": "Registros Contables General",
      "inputs": "Soportes físicos/digitales de transacciones económicas.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Identificar, verificar y contabilizar las operaciones generadoras de ingresos operativos y no operativos.",
      "area": "ADM",
      "outputs": "Comprobantes de Ingresos y Reporte de Ventas Registradas.",
      "objective": "Identificar, verificar y contabilizar las operaciones generadoras de ingresos operativos y no operativos.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-02",
      "realTime": "28 min",
      "name": "Registro de Ingresos",
      "inputs": "Reportes Z de venta POS, tiques, facturas emitidas.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Registrar y controlar las salidas de recursos por gastos operativos, administrativos e inversiones.",
      "area": "ADM",
      "outputs": "Comprobantes de Egresos y Pólizas de Pago.",
      "objective": "Registrar y controlar las salidas de recursos por gastos operativos, administrativos e inversiones.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-03",
      "realTime": "28 min",
      "name": "Registro de Egresos",
      "inputs": "Facturas de proveedores, órdenes de pago autorizadas.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Validar y contabilizar la comercialización de bienes y servicios para efectos fiscales y de inventario.",
      "area": "ADM",
      "outputs": "Libro de Compras y Ventas Actualizado.",
      "objective": "Validar y contabilizar la comercialización de bienes y servicios para efectos fiscales y de inventario.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-04",
      "realTime": "28 min",
      "name": "Registro de Compras y Ventas",
      "inputs": "Libros auxiliares de compras/ventas, comprobantes fiscales.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Cálculo y registro periódico del desgaste de activos fijos e intangibles de la empresa.",
      "area": "ADM",
      "outputs": "Auxiliares de Activos y Asientos de Depreciación.",
      "objective": "Cálculo y registro periódico del desgaste de activos fijos e intangibles de la empresa.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-05",
      "realTime": "28 min",
      "name": "Registro de Depreciaciones y Amortizaciones",
      "inputs": "Módulo de activos fijos, tasas de depreciación de ley/NIIF.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Reconocer y registrar obligaciones, contingencias y riesgos probables de la empresa.",
      "area": "ADM",
      "outputs": "Asientos de Provisiones Registradas.",
      "objective": "Reconocer y registrar obligaciones, contingencias y riesgos probables de la empresa.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-06",
      "realTime": "28 min",
      "name": "Contabilización de Provisiones",
      "inputs": "Estimaciones de pasivos, cálculos de indemnización/garantías.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Comparar registros contables con documentos de soporte internos y externos para depuración de saldos.",
      "area": "ADM",
      "outputs": "Conciliaciones Realizadas y Saldos Depurados.",
      "objective": "Comparar registros contables con documentos de soporte internos y externos para depuración de saldos.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-07",
      "realTime": "28 min",
      "name": "Control y Conciliaciones General",
      "inputs": "Mayor general, auxiliares, estados de cuenta externos.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Comparar los saldos contables de bancos contra los estados de cuenta de las instituciones financieras.",
      "area": "ADM",
      "outputs": "Conciliaciones Bancarias Aprobadas.",
      "objective": "Comparar los saldos contables de bancos contra los estados de cuenta de las instituciones financieras.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-08",
      "realTime": "28 min",
      "name": "Conciliaciones Bancarias",
      "inputs": "Libro auxiliar de bancos, estados de cuenta bancarios.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Verificar la concordancia entre la contabilidad general y el módulo auxiliar de clientes.",
      "area": "ADM",
      "outputs": "Reporte Conciliado de Cartera de Clientes.",
      "objective": "Verificar la concordancia entre la contabilidad general y el módulo auxiliar de clientes.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-09",
      "realTime": "28 min",
      "name": "Conciliación de Cuentas por Cobrar",
      "inputs": "Mayor de CxC, auxiliar de cartera por cliente.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Validar saldos contables de deudas contra estados de cuenta de proveedores.",
      "area": "ADM",
      "outputs": "Reporte Conciliado de Proveedores.",
      "objective": "Validar saldos contables de deudas contra estados de cuenta de proveedores.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-10",
      "realTime": "28 min",
      "name": "Conciliación de Cuentas por Pagar",
      "inputs": "Mayor de CxP, estados de cuenta de proveedores.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Validar la consistencia entre los auxiliares detallados y las cuentas de mayor del ERP.",
      "area": "ADM",
      "outputs": "Auxiliares Contables Validados.",
      "objective": "Validar la consistencia entre los auxiliares detallados y las cuentas de mayor del ERP.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-11",
      "realTime": "28 min",
      "name": "Revisión de Auxiliares Contables",
      "inputs": "Balanza de comprobación, sub-auxiliares.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Ejecutar correcciones, reclasificaciones y asientos complementarios autorizados.",
      "area": "ADM",
      "outputs": "Pólizas de Ajuste Autorizadas.",
      "objective": "Ejecutar correcciones, reclasificaciones y asientos complementarios autorizados.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-12",
      "realTime": "28 min",
      "name": "Ajustes Contables",
      "inputs": "Hojas de trabajo de errores/diferencias detectadas.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Consolidar y revisar la totalidad de operaciones al cierre de cada período contable.",
      "area": "ADM",
      "outputs": "Cierre Contable Ejecutado y Validado.",
      "objective": "Consolidar y revisar la totalidad de operaciones al cierre de cada período contable.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-13",
      "realTime": "28 min",
      "name": "Cierre Contable General",
      "inputs": "Balanza previa, asientos de ajuste y cierre.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Verificar, ajustar y consolidar las transacciones financieras del mes correspondiente.",
      "area": "ADM",
      "outputs": "Estados Financieros Mensuales Preliminares.",
      "objective": "Verificar, ajustar y consolidar las transacciones financieras del mes correspondiente.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-14",
      "realTime": "28 min",
      "name": "Cierre Mensual",
      "inputs": "Balanza mensual, provisiones, depreciaciones.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Certificar la exactitud e integridad de las cuentas de activo, pasivo y patrimonio.",
      "area": "ADM",
      "outputs": "Certificación de Saldos Contables.",
      "objective": "Certificar la exactitud e integridad de las cuentas de activo, pasivo y patrimonio.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-15",
      "realTime": "28 min",
      "name": "Validación de Saldos",
      "inputs": "Papeles de trabajo de soporte de saldos finales.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Preparar e integrar los informes financieros de la empresa bajo NIIF para PYMES.",
      "area": "ADM",
      "outputs": "Juego de Estados Financieros Emitidos.",
      "objective": "Preparar e integrar los informes financieros de la empresa bajo NIIF para PYMES.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-16",
      "realTime": "28 min",
      "name": "Elaboración de Estados Financieros",
      "inputs": "Balanza de comprobación ajustada y validada.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Presentar la estructura y composición de activos, pasivos y patrimonio a una fecha determinada.",
      "area": "ADM",
      "outputs": "Balance General Emitido y Aprobado.",
      "objective": "Presentar la estructura y composición de activos, pasivos y patrimonio a una fecha determinada.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-17",
      "realTime": "28 min",
      "name": "Estado de Situación Financiera (Balance General)",
      "inputs": "Cuentas de activo, pasivo y capital contable.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Determinar el resultado económico (utilidad o pérdida) generado en el período.",
      "area": "ADM",
      "outputs": "Estado de Resultados Emitido y Validado.",
      "objective": "Determinar el resultado económico (utilidad o pérdida) generado en el período.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-18",
      "realTime": "28 min",
      "name": "Estado de Resultados (Pérdidas y Ganancias)",
      "inputs": "Cuentas de ingresos, costos y gastos.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Clasificar los movimientos de efectivo por actividades de operación, inversión y financiamiento.",
      "area": "ADM",
      "outputs": "Estado de Flujo de Efectivo Elaborado.",
      "objective": "Clasificar los movimientos de efectivo por actividades de operación, inversión y financiamiento.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-19",
      "realTime": "28 min",
      "name": "Estado de Flujo de Efectivo",
      "inputs": "Balance comparativo, estado de resultados.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Presentar las variaciones y movimientos en las cuentas patrimoniales de los socios.",
      "area": "ADM",
      "outputs": "Estado de Cambios en el Patrimonio.",
      "objective": "Presentar las variaciones y movimientos en las cuentas patrimoniales de los socios.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-20",
      "realTime": "28 min",
      "name": "Estado de Cambios en el Patrimonio",
      "inputs": "Saldos iniciales de capital, utilidad del ejercicio, reservas.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Elaborar las revelaciones explicativas y políticas contables complementarias a los EEFF.",
      "area": "ADM",
      "outputs": "Notas a los Estados Financieros Completas.",
      "objective": "Elaborar las revelaciones explicativas y políticas contables complementarias a los EEFF.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-21",
      "realTime": "28 min",
      "name": "Notas a los Estados Financieros",
      "inputs": "Políticas contables, detalle de cuentas críticas.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Asegurar el cumplimiento oportuno de las obligaciones tributarias sustantivas y formales.",
      "area": "ADM",
      "outputs": "Obligaciones Fiscales Cumplidas en Tiempo.",
      "objective": "Asegurar el cumplimiento oportuno de las obligaciones tributarias sustantivas y formales.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-22",
      "realTime": "28 min",
      "name": "Cumplimiento Fiscal General",
      "inputs": "Calendario fiscal oficial, leyes tributarias.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Preparación, validación y presentación de declaraciones ante la administración tributaria.",
      "area": "ADM",
      "outputs": "Declaraciones Fiscales y Acuses de Recibo.",
      "objective": "Preparación, validación y presentación de declaraciones ante la administración tributaria.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-23",
      "realTime": "28 min",
      "name": "Declaraciones Tributarias",
      "inputs": "Libros de compras/ventas, salarios, retenciones.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Liquidación precisa de tributos, tasas municipales, retenciones e impuestos directos/indirectos.",
      "area": "ADM",
      "outputs": "Papeles de Trabajo de Determinación Tributaria.",
      "objective": "Liquidación precisa de tributos, tasas municipales, retenciones e impuestos directos/indirectos.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-24",
      "realTime": "28 min",
      "name": "Cálculo de Impuestos",
      "inputs": "Base imponible, tarifas vigentes de ley.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Coordinar, atender y suministrar la documentación de soporte requerida por auditores.",
      "area": "ADM",
      "outputs": "Suministro de Información y Plan de Acción.",
      "objective": "Coordinar, atender y suministrar la documentación de soporte requerida por auditores.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-25",
      "realTime": "28 min",
      "name": "Atención a Auditorías Internas y Externas",
      "inputs": "Requerimientos de información de auditores.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Verificar la adherencia continua de las operaciones a las NIIF para PYMES y código tributario.",
      "area": "ADM",
      "outputs": "Certificado de Verificación Normativa.",
      "objective": "Verificar la adherencia continua de las operaciones a las NIIF para PYMES y código tributario.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-26",
      "realTime": "28 min",
      "name": "Cumplimiento de Normas Contables y Tributarias",
      "inputs": "Leyes fiscales actualizadas, pronunciamientos NIIF.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Resguardo físico y digital de los libros, comprobantes y declaraciones por el plazo legal.",
      "area": "ADM",
      "outputs": "Expedientes Contables en Resguardo Legal.",
      "objective": "Resguardo físico y digital de los libros, comprobantes y declaraciones por el plazo legal.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-27",
      "realTime": "28 min",
      "name": "Archivo y Custodia de Documentación Contable",
      "inputs": "Pólizas contables físicas, archivos XML/PDF.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Evaluar los indicadores y ratios de salud económica para soporte de la alta dirección.",
      "area": "ADM",
      "outputs": "Reporte de Análisis Financiero Consolidado.",
      "objective": "Evaluar los indicadores y ratios de salud económica para soporte de la alta dirección.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-28",
      "realTime": "28 min",
      "name": "Análisis Financiero General",
      "inputs": "Estados financieros comparativos de períodos.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Evaluar los márgenes de utilidad (bruto, operativo, neto), ROA y ROE por unidad de negocio.",
      "area": "ADM",
      "outputs": "Informe de Rentabilidad por Sucursal/Línea.",
      "objective": "Evaluar los márgenes de utilidad (bruto, operativo, neto), ROA y ROE por unidad de negocio.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-29",
      "realTime": "28 min",
      "name": "Análisis de Rentabilidad",
      "inputs": "Estado de resultados detallado por centro de costos.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Medir la capacidad de pago a corto plazo mediante prueba ácida, razón corriente y capital de trabajo.",
      "area": "ADM",
      "outputs": "Informe de Liquidez y Capacidad de Pago.",
      "objective": "Medir la capacidad de pago a corto plazo mediante prueba ácida, razón corriente y capital de trabajo.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-30",
      "realTime": "28 min",
      "name": "Análisis de Liquidez",
      "inputs": "Activo y pasivo circulante del balance.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Evaluar el nivel de apalancamiento financiero, cobertura de intereses y estructura de capital.",
      "area": "ADM",
      "outputs": "Informe de Estructura Financiera y Deuda.",
      "objective": "Evaluar el nivel de apalancamiento financiero, cobertura de intereses y estructura de capital.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-31",
      "realTime": "28 min",
      "name": "Análisis de Endeudamiento",
      "inputs": "Pasivos totales, patrimonio, gastos financieros.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Monitoreo del cuadro de mando integral con métricas financieras e históricas.",
      "area": "ADM",
      "outputs": "Dashboard de KPIs Financieros.",
      "objective": "Monitoreo del cuadro de mando integral con métricas financieras e históricas.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-32",
      "realTime": "28 min",
      "name": "Indicadores Financieros (KPIs)",
      "inputs": "Datos consolidados de ERP contable.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-04",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Comunicar las conclusiones de la gestión económico-financiera a la Gerencia General.",
      "area": "ADM",
      "outputs": "Presentación Gerencial de Resultados.",
      "objective": "Comunicar las conclusiones de la gestión económico-financiera a la Gerencia General.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CNT-33",
      "realTime": "28 min",
      "name": "Presentación de Resultados a la Dirección",
      "inputs": "EEFF definitivos, informes de análisis.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-03",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Concesión de crédito a clientes, gestión de cobro, recaudación y control de la cartera de clientes.",
      "area": "ADM",
      "outputs": "Reporte de Gestión de CxC y Acta de Comité de Crédito.",
      "objective": "Concesión de crédito a clientes, gestión de cobro, recaudación y control de la cartera de clientes.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "KARLA",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-CXC-01",
      "realTime": "28 min",
      "name": "Administración de Créditos y Cobros",
      "inputs": "Solicitudes de crédito, facturas por cobrar, antigüedad de saldos.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-05",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Sesiones periódicas institucionales para evaluar cumplimiento de KPIs y auditar compromisos.",
      "area": "ADM",
      "outputs": "Acta de Rendición de Cuentas y Acuerdos.",
      "objective": "Sesiones periódicas institucionales para evaluar cumplimiento de KPIs y auditar compromisos.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "Gerente de AdministraciÃ³n",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-GOB-01",
      "realTime": "28 min",
      "name": "Reuniones de Rendición de Cuentas Gerencial",
      "inputs": "Reportes de KPIs de cada departamento, bitácora previa.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "nextAudit": "2026-07-15",
      "version": "2.0",
      "scope": "Gerencia de Compras, Compradores Senior y Finanzas.",
      "macroCode": "MACRO-LOG-01",
      "isoRelated": "ISO 9001:2015 8.1 (Planificación)",
      "description": "Establecimiento de reglas de selección, marcas permitidas y techos de inversión por línea.",
      "area": "LOG",
      "outputs": "Matriz de Políticas de Compra autorizada",
      "objective": "Definir las directrices que limitan el gasto y controlan la calidad de las compras comerciales.",
      "expectedTime": "30 días (anual)",
      "complianceRate": 100,
      "owner": "Jefe de Compras",
      "kpis": [
        {
          "name": "Desviación de Presupuesto",
          "target": "< 3%",
          "value": "1.8%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Desalineación del presupuesto de compras",
          "probability": 2,
          "impact": 4,
          "level": "Medio",
          "control": "Revisión trimestral con Finanzas",
          "owner": "Jefe Compras",
          "mitigation": "Ajuste de techos presupuestarios",
          "status": "Activo",
          "reviewDate": "2026-07-02"
        }
      ],
      "code": "POE-LOG-01",
      "realTime": "35 días",
      "name": "Administración de Políticas de Compra",
      "inputs": "Estudios de mercado, presupuestos anuales de compras",
      "status": "Publicado",
      "lastAudit": "2026-01-15"
    },
    {
      "nextAudit": "2026-08-18",
      "version": "1.0",
      "scope": "Compradores y administradores de catálogo de TI.",
      "macroCode": "MACRO-LOG-01",
      "isoRelated": "ISO 9001:2015 8.2.2 (Requisitos del producto)",
      "description": "Parametrización en el ERP del catálogo de productos activos y su nivel de surtido por tienda.",
      "area": "LOG",
      "outputs": "Matriz de disponibilidad parametrizada en ERP",
      "objective": "Asegurar que cada sucursal reciba únicamente la mezcla de productos autorizada para su clúster.",
      "expectedTime": "5 días",
      "complianceRate": 100,
      "owner": "Analista de Inventarios",
      "kpis": [
        {
          "name": "Precisión de la Matriz",
          "target": "> 98%",
          "value": "99.2%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Falta de actualización de estatus de SKUs",
          "probability": 3,
          "impact": 3,
          "level": "Medio",
          "control": "Reporte de inactividad de catálogo",
          "owner": "Admin ERP",
          "mitigation": "Actualización en lote mensual",
          "status": "Mitigado",
          "reviewDate": "2026-07-19"
        }
      ],
      "code": "POE-LOG-02",
      "realTime": "5 días",
      "name": "Administrar el Proceso de Matriz de Disponibilidad",
      "inputs": "Políticas de compra aprobadas, catálogo maestro de productos",
      "status": "Publicado",
      "lastAudit": "2026-02-18"
    },
    {
      "nextAudit": "2026-09-01",
      "version": "1.2",
      "scope": "Área de catalogación, TI y proveedores.",
      "macroCode": "MACRO-LOG-01",
      "isoRelated": "ISO 9001:2015 8.5.2 (Identificación y trazabilidad)",
      "description": "Alta, modificación y mantención de fichas técnicas de productos y códigos EAN en el ERP.",
      "area": "LOG",
      "outputs": "SKU activo en maestro de productos ERP",
      "objective": "Registrar de forma centralizada la información técnica de los SKUs previniendo duplicidades de códigos.",
      "expectedTime": "24 horas",
      "complianceRate": 100,
      "owner": "Digitador de Catálogo ERP",
      "kpis": [
        {
          "name": "Tiempo de Alta SKU",
          "target": "< 24h",
          "value": "20.5h",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Duplicación de códigos de barra (EAN)",
          "probability": 1,
          "impact": 4,
          "level": "Medio",
          "control": "Validación de unicidad en base de datos",
          "owner": "Admin ERP",
          "mitigation": "Baja del SKU duplicado y re-catalogación",
          "status": "Mitigado",
          "reviewDate": "2026-07-21"
        }
      ],
      "code": "POE-LOG-03",
      "realTime": "20 horas",
      "name": "Administrar el Catálogo Propio de Códigos (Productos)",
      "inputs": "Fichas técnicas del proveedor, código EAN verificado",
      "status": "Publicado",
      "lastAudit": "2026-03-01"
    },
    {
      "nextAudit": "2026-10-10",
      "version": "1.1",
      "scope": "Gerencia de Compras, Recepción CD y Calidad.",
      "macroCode": "MACRO-LOG-02",
      "isoRelated": "ISO 9001:2015 8.4 (Evaluación de proveedores externos)",
      "description": "Homologación, evaluación del nivel de servicio (Vendor Rating) y auditoría técnica de proveedores.",
      "area": "LOG",
      "outputs": "Reporte trimestral de Vendor Rating, planes de mejora",
      "objective": "Calificar objetivamente el desempeño logístico y comercial de los proveedores registrados en la empresa.",
      "expectedTime": "15 días (trimestral)",
      "complianceRate": 93,
      "owner": "Jefe de Compras",
      "kpis": [
        {
          "name": "Proveedores Evaluados",
          "target": "100%",
          "value": "97.5%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Proveedores clave con baja calificación sin plan CAPA",
          "probability": 2,
          "impact": 4,
          "level": "Medio",
          "control": "Bloqueo de OCs automático si VR < 70%",
          "owner": "Jefe Compras",
          "mitigation": "Reunión de compromiso y plan de acción",
          "status": "Activo",
          "reviewDate": "2026-07-15"
        }
      ],
      "code": "POE-LOG-04",
      "realTime": "18 días",
      "name": "Conocer la Calidad de Servicios de Proveedores",
      "inputs": "Registros de recepción física, incidencias de entrega, rechazos",
      "status": "Publicado",
      "lastAudit": "2026-04-10"
    },
    {
      "nextAudit": "2026-11-12",
      "version": "1.3",
      "scope": "Gerente Comercial, Gerente Logística, Compras y Finanzas.",
      "macroCode": "MACRO-LOG-03",
      "isoRelated": "ISO 9001:2015 5.1.2 (Enfoque al cliente)",
      "description": "Planificación de reuniones mensuales del Comité de Demanda para revisar y ajustar las compras contra ventas.",
      "area": "LOG",
      "outputs": "Minuta de Comité de Demanda firmada con ajustes aprobados",
      "objective": "Coordinar los pronósticos comerciales con el flujo de almacenamiento CD para evitar sobrestock o desabasto.",
      "expectedTime": "4 horas/reunión",
      "complianceRate": 100,
      "owner": "Gerente de Logística",
      "kpis": [
        {
          "name": "Precisión de Pronóstico (MAPE)",
          "target": "< 15%",
          "value": "18.2%",
          "trend": "upward",
          "status": "warning"
        }
      ],
      "risks": [
        {
          "risk": "Previsión comercial sobrevalorada genera sobrestock",
          "probability": 3,
          "impact": 4,
          "level": "Alto",
          "control": "Cálculo de sesgo e indicador MAPE",
          "owner": "Analista Demanda",
          "mitigation": "Congelación temporal de compras sugeridas",
          "status": "Activo",
          "reviewDate": "2026-07-20"
        }
      ],
      "code": "POE-LOG-05",
      "realTime": "4 horas",
      "name": "Líder del Comité de la Demanda",
      "inputs": "Ventas históricas, pronósticos comerciales, espacio de bodega CD",
      "status": "Publicado",
      "lastAudit": "2026-05-12"
    },
    {
      "nextAudit": "2026-12-02",
      "version": "2.1",
      "scope": "Analistas de Inventarios y Compras.",
      "macroCode": "MACRO-LOG-04",
      "isoRelated": "ISO 9001:2015 8.5.1 (Control de producción y servicio)",
      "description": "Cálculo automatizado del punto de reorden (ROP) y generación de sugeridos de compra periódicos.",
      "area": "LOG",
      "outputs": "Borrador de sugerido de compras en ERP",
      "objective": "Mantener niveles óptimos de stock de seguridad minimizando el capital inmovilizado y la venta perdida.",
      "expectedTime": "24 horas/ciclo",
      "complianceRate": 100,
      "owner": "Analista de Inventarios",
      "kpis": [
        {
          "name": "Nivel de Stockout",
          "target": "< 3%",
          "value": "4.1%",
          "trend": "stable",
          "status": "warning"
        }
      ],
      "risks": [
        {
          "risk": "Error en fórmula ROP del ERP",
          "probability": 1,
          "impact": 5,
          "level": "Medio",
          "control": "Auditoría mensual de parámetros",
          "owner": "Jefe Compras",
          "mitigation": "Corrección de la tabla de variables del ERP",
          "status": "Mitigado",
          "reviewDate": "2026-07-08"
        }
      ],
      "code": "POE-LOG-06",
      "realTime": "22 horas",
      "name": "Administrar Nivel de Inventario: Sugeridos",
      "inputs": "Venta promedio diaria (VPD), Lead Time del proveedor, stock actual",
      "status": "Publicado",
      "lastAudit": "2026-06-02"
    },
    {
      "nextAudit": "2026-10-18",
      "version": "1.0",
      "scope": "Director Logística, Jefe de CD y Contralor Finanzas.",
      "macroCode": "MACRO-LOG-05",
      "isoRelated": "ISO 9001:2015 8.4.2 (Tipo y alcance de control)",
      "description": "Evaluación de capacidad de recepción en CD y capacidad financiera antes de emitir órdenes de volumen.",
      "area": "LOG",
      "outputs": "Autorización de compra por volumen y plan de ingreso escalonado",
      "objective": "Asegurar que las compras contratadas cuenten con espacio de muelle y flujo de caja para su liquidación.",
      "expectedTime": "48 horas",
      "complianceRate": 100,
      "owner": "Comprador",
      "kpis": [
        {
          "name": "Order Fill Rate",
          "target": "> 95%",
          "value": "96.2%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Colapso del CD por compras no coordinadas",
          "probability": 2,
          "impact": 4,
          "level": "Medio",
          "control": "Calendario de citas obligatorio en WMS",
          "owner": "Jefe CD",
          "mitigation": "Reprogramación de entregas en patio",
          "status": "Mitigado",
          "reviewDate": "2026-07-15"
        }
      ],
      "code": "POE-LOG-07",
      "realTime": "36 horas",
      "name": "Capacidad de Compra",
      "inputs": "Opciones de volumen de proveedores, ocupación CD, flujo de caja",
      "status": "Publicado",
      "lastAudit": "2026-04-18"
    },
    {
      "nextAudit": "2026-11-20",
      "version": "1.2",
      "scope": "Área de Tráfico de Compras e Inventarios.",
      "macroCode": "MACRO-LOG-05",
      "isoRelated": "ISO 9001:2015 8.4.2 (Control de compras)",
      "description": "Medición y control del tiempo transcurrido desde la emisión de la OC hasta el ingreso físico en el CD.",
      "area": "LOG",
      "outputs": "Reporte de varianza de Lead Time, alertas de backorder",
      "objective": "Identificar desviaciones de entrega y ajustar el ROP dinámico según la variabilidad del proveedor.",
      "expectedTime": "Mensual",
      "complianceRate": 100,
      "owner": "Analista de Tráfico",
      "kpis": [
        {
          "name": "Desviación de Leadtime",
          "target": "< 2 días",
          "value": "2.4 días",
          "trend": "upward",
          "status": "warning"
        }
      ],
      "risks": [
        {
          "risk": "Atrasos recurrentes en aduanas para importados",
          "probability": 3,
          "impact": 4,
          "level": "Alto",
          "control": "Uso de agente aduanal homologado",
          "owner": "Jefe Importaciones",
          "mitigation": "Aumento de stock de seguridad temporal",
          "status": "Activo",
          "reviewDate": "2026-07-29"
        }
      ],
      "code": "POE-LOG-08",
      "realTime": "Mensual",
      "name": "Leadtimes",
      "inputs": "Fecha de emisión de OC, fecha de cita programada, fecha de ingreso real",
      "status": "Publicado",
      "lastAudit": "2026-05-20"
    },
    {
      "nextAudit": "2026-09-25",
      "version": "2.0",
      "scope": "Contabilidad de Costos y Compras.",
      "macroCode": "MACRO-LOG-05",
      "isoRelated": "ISO 9001:2015 8.5.1 (Control de la producción)",
      "description": "Cálculo y auditoría del costo landed de los productos (precio compra + fletes + aranceles + consolidación).",
      "area": "LOG",
      "outputs": "Hoja de retaceo autorizada y actualización de costos en ERP",
      "objective": "Garantizar que el costo final unitario del producto en el ERP refleje con precisión todos los gastos logísticos.",
      "expectedTime": "72 horas post-recepción",
      "complianceRate": 90,
      "owner": "Contador de Costos",
      "kpis": [
        {
          "name": "Retaceos a Tiempo",
          "target": "> 95%",
          "value": "93.4%",
          "trend": "stable",
          "status": "warning"
        }
      ],
      "risks": [
        {
          "risk": "Omisión de facturas de fletes en costo landed",
          "probability": 2,
          "impact": 3,
          "level": "Medio",
          "control": "Cruce automático de órdenes de flete",
          "owner": "Contador Costos",
          "mitigation": "Ajuste de margen y costo en lote",
          "status": "Mitigado",
          "reviewDate": "2026-07-12"
        }
      ],
      "code": "POE-LOG-09",
      "realTime": "80 horas",
      "name": "Costos de Pedidos",
      "inputs": "Factura de proveedor, facturas de fletes, gastos aduanales, DUA",
      "status": "Publicado",
      "lastAudit": "2026-03-25"
    },
    {
      "nextAudit": "2026-11-02",
      "version": "1.1",
      "scope": "Compradores y Cuentas por Pagar.",
      "macroCode": "MACRO-LOG-05",
      "isoRelated": "ISO 9001:2015 8.4.2 (Trazabilidad documental)",
      "description": "Monitoreo del estatus y saldo pendiente de las órdenes de compra (OC) vigentes y montos comprometidos.",
      "area": "LOG",
      "outputs": "Reporte de OCs abiertas con fecha de entrega estimada",
      "objective": "Mantener visibilidad en tiempo real de las compras en tránsito y los compromisos financieros.",
      "expectedTime": "Semanal",
      "complianceRate": 100,
      "owner": "Comprador",
      "kpis": [
        {
          "name": "Depuración de OCs",
          "target": "100%",
          "value": "98.5%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "OCs antiguas no canceladas distorsionan el stock disponible",
          "probability": 3,
          "impact": 2,
          "level": "Bajo",
          "control": "Purga automática de OCs vencidas a 30 días",
          "owner": "Admin ERP",
          "mitigation": "Cancelación manual por comprador",
          "status": "Mitigado",
          "reviewDate": "2026-07-06"
        }
      ],
      "code": "POE-LOG-10",
      "realTime": "Semanal",
      "name": "Pedidos Hechos",
      "inputs": "Órdenes de compra emitidas en ERP, confirmación del proveedor",
      "status": "Publicado",
      "lastAudit": "2026-05-02"
    },
    {
      "nextAudit": "2026-12-12",
      "version": "1.5",
      "scope": "Jefe de Recepción CD y Analista de Calidad.",
      "macroCode": "MACRO-LOG-05",
      "isoRelated": "ISO 9001:2015 8.4.2 (Nivel de servicio de proveedores)",
      "description": "Medición mensual de entregas a tiempo, en cantidad y con calidad técnica (indicador OTIF).",
      "area": "LOG",
      "outputs": "Métricas del indicador Pedido Perfecto (OTIF) por proveedor",
      "objective": "Evaluar objetivamente la confiabilidad del servicio de entrega de los proveedores del CD.",
      "expectedTime": "Mensual",
      "complianceRate": 100,
      "owner": "Jefe de Recepción CD",
      "kpis": [
        {
          "name": "OTIF General de Entregas",
          "target": "> 92%",
          "value": "89.5%",
          "trend": "downward",
          "status": "danger"
        }
      ],
      "risks": [
        {
          "risk": "Varianza no reportada en cantidad de bultos",
          "probability": 2,
          "impact": 3,
          "level": "Medio",
          "control": "Conteo ciego de bultos obligatorios",
          "owner": "Auxiliar Muelle",
          "mitigation": "Generación de nota de rechazo en rampa",
          "status": "Mitigado",
          "reviewDate": "2026-07-14"
        }
      ],
      "code": "POE-LOG-11",
      "realTime": "Mensual",
      "name": "Pedidos Perfectos por los Proveedores",
      "inputs": "Actas de recepción en rampa, facturas originales contra OC",
      "status": "Publicado",
      "lastAudit": "2026-06-12"
    },
    {
      "nextAudit": "2026-09-30",
      "version": "1.1",
      "scope": "Área de Reclamos, Devoluciones y Finanzas.",
      "macroCode": "MACRO-LOG-05",
      "isoRelated": "ISO 9001:2015 8.7 (Salidas no conformes)",
      "description": "Registro, seguimiento de devoluciones por avería y gestión de notas de crédito comerciales.",
      "area": "LOG",
      "outputs": "Nota de devolución física firmada por el transportista, nota de crédito",
      "objective": "Garantizar la devolución oportuna de mercancía no conforme y el cobro de reembolsos por averías.",
      "expectedTime": "15 días para resolución",
      "complianceRate": 85,
      "owner": "Encargado de Reclamos",
      "kpis": [
        {
          "name": "Eficacia de Recuperación",
          "target": "> 98%",
          "value": "96.4%",
          "trend": "stable",
          "status": "warning"
        }
      ],
      "risks": [
        {
          "risk": "Extravío de mercancía no conforme en zona de rechazo",
          "probability": 2,
          "impact": 3,
          "level": "Medio",
          "control": "Jaula de averías cerrada bajo llave",
          "owner": "Jefe CD",
          "mitigation": "Investigación y ajuste de inventario",
          "status": "Mitigado",
          "reviewDate": "2026-07-22"
        }
      ],
      "code": "POE-LOG-12",
      "realTime": "18 días",
      "name": "Reclamos a Proveedores",
      "inputs": "Acta de rampa indicando avería, evidencias fotográficas",
      "status": "Publicado",
      "lastAudit": "2026-03-30"
    },
    {
      "nextAudit": "2026-09-02",
      "version": "2.4",
      "scope": "Personal auxiliar de muelle del CD.",
      "macroCode": "MACRO-LOG-06",
      "isoRelated": "ISO 9001:2015 8.5.4 (Control de recepción)",
      "description": "Calzar furgones en muelle, control sanitario de transporte, conteo de bultos y validación de temperatura.",
      "area": "LOG",
      "outputs": "Acta de Recepción e Inspección en Rampa firmada, LPN impresos",
      "objective": "Asegurar que toda mercancía ingresada al CD cumpla con los estándares de inocuidad y cantidades facturadas.",
      "expectedTime": "45 min/camión",
      "complianceRate": 100,
      "owner": "Jefe de Recepción CD",
      "kpis": [
        {
          "name": "Citas a Tiempo en Rampa",
          "target": "> 95%",
          "value": "93.8%",
          "trend": "stable",
          "status": "warning"
        }
      ],
      "risks": [
        {
          "risk": "Rotura de cadena de frío en tránsito",
          "probability": 2,
          "impact": 5,
          "level": "Alto",
          "control": "Termógrafo de furgón obligatorio",
          "owner": "Auxiliar",
          "mitigation": "Rechazo total del furgón de alimentos",
          "status": "Activo",
          "reviewDate": "2026-07-28"
        }
      ],
      "code": "POE-LOG-13",
      "realTime": "50 min/camión",
      "name": "CD - Recepción y Control en Rampa",
      "inputs": "Furgón cargado, marchamo físico, factura de compra y OC",
      "status": "Publicado",
      "lastAudit": "2026-07-02"
    },
    {
      "nextAudit": "2026-12-18",
      "version": "1.3",
      "scope": "Montacarguistas del CD.",
      "macroCode": "MACRO-LOG-06",
      "isoRelated": "ISO 9001:2015 8.5.3 (Control de stock en almacén)",
      "description": "Direccionamiento y depósito físico de palets etiquetados con LPN a posiciones de racks sugeridas por WMS.",
      "area": "LOG",
      "outputs": "Confirmación de almacenamiento en sistema WMS",
      "objective": "Maximizar el espacio físico del CD y registrar la trazabilidad exacta de la ubicación de cada tarima.",
      "expectedTime": "5 min/palet",
      "complianceRate": 100,
      "owner": "Jefe de Almacenamiento CD",
      "kpis": [
        {
          "name": "Precisión de Ubicaciones WMS",
          "target": "100%",
          "value": "99.92%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Ubicación errónea (palet fantasma en WMS)",
          "probability": 2,
          "impact": 3,
          "level": "Medio",
          "control": "Confirmación obligatoria con escáner",
          "owner": "Montacarguista",
          "mitigation": "Barrido físico de ubicaciones y corrección",
          "status": "Mitigado",
          "reviewDate": "2026-07-16"
        }
      ],
      "code": "POE-LOG-14",
      "realTime": "4.8 min/palet",
      "name": "CD - Ubicación y Almacenamiento WMS",
      "inputs": "Tarima con LPN, sugerencia de posición del software WMS",
      "status": "Publicado",
      "lastAudit": "2026-06-18"
    },
    {
      "nextAudit": "2026-11-25",
      "version": "2.1",
      "scope": "Operadores de picking del CD.",
      "macroCode": "MACRO-LOG-06",
      "isoRelated": "ISO 9001:2015 8.5.1 (Control de operaciones)",
      "description": "Extracción y consolidación de mercancías para surtido de tiendas según olas de picking asignadas por WMS.",
      "area": "LOG",
      "outputs": "Palet consolidado para tienda con orden de picking completa",
      "objective": "Preparar pedidos consolidados con precisión en códigos y cantidades minimizando errores de despacho.",
      "expectedTime": "30 min/ola",
      "complianceRate": 90,
      "owner": "Jefe de Despacho CD",
      "kpis": [
        {
          "name": "Exactitud de Picking",
          "target": "> 99.5%",
          "value": "99.2%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Error en conteo o producto sustituido no autorizado",
          "probability": 3,
          "impact": 3,
          "level": "Medio",
          "control": "Auditoría en rampa de salida al 10%",
          "owner": "Auditor CD",
          "mitigation": "Corrección de palet en zona de consolidación",
          "status": "Activo",
          "reviewDate": "2026-07-20"
        }
      ],
      "code": "POE-LOG-15",
      "realTime": "33 min/ola",
      "name": "CD - Preparación de Pedidos y Picking",
      "inputs": "Ola de picking en WMS, cajas de empaque, handhelds",
      "status": "Publicado",
      "lastAudit": "2026-05-25"
    },
    {
      "nextAudit": "2026-10-12",
      "version": "1.1",
      "scope": "Personal de despacho del CD y choferes de flota.",
      "macroCode": "MACRO-LOG-06",
      "isoRelated": "ISO 9001:2015 8.5.4 (Preservación)",
      "description": "Carga de mercancías consolidadas en unidades de transporte, colocación de marchamos y firmas de manifiesto.",
      "area": "LOG",
      "outputs": "Manifiesto de Carga y Despacho firmado por chofer y muelle",
      "objective": "Asegurar que los camiones de distribución salgan sellados y documentados en el horario planificado.",
      "expectedTime": "20 min/unidad",
      "complianceRate": 100,
      "owner": "Jefe de Despacho CD",
      "kpis": [
        {
          "name": "Despachos en Tiempo",
          "target": "> 95%",
          "value": "94.6%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Violación de marchamo de seguridad en tránsito",
          "probability": 1,
          "impact": 5,
          "level": "Medio",
          "control": "Fotografía y registro de marchamo en rampa",
          "owner": "Chofer",
          "mitigation": "Inspección exhaustiva en tienda al recibir",
          "status": "Activo",
          "reviewDate": "2026-07-15"
        }
      ],
      "code": "POE-LOG-16",
      "realTime": "22 min/unidad",
      "name": "CD - Despacho y Distribución",
      "inputs": "Palets consolidados, plan de ruta, marchamos numerados",
      "status": "Publicado",
      "lastAudit": "2026-04-12"
    },
    {
      "nextAudit": "2026-09-10",
      "version": "1.0",
      "scope": "Monitores de transporte y coordinadores logísticos.",
      "macroCode": "MACRO-LOG-06",
      "isoRelated": "ISO 9001:2015 8.5.2 (Trazabilidad logística)",
      "description": "Monitoreo GPS en tiempo real de unidades de transporte y control de tiempos en ruta de CD a tiendas.",
      "area": "LOG",
      "outputs": "Bitácora de tiempos de tránsito y recepción física en tienda",
      "objective": "Optimizar el tiempo de entrega y garantizar la seguridad de la carga en tránsito mediante GPS.",
      "expectedTime": "Continuo",
      "complianceRate": 100,
      "owner": "Coordinador de Distribución",
      "kpis": [
        {
          "name": "Puntualidad en Sucursal",
          "target": "> 90%",
          "value": "88.2%",
          "trend": "downward",
          "status": "warning"
        }
      ],
      "risks": [
        {
          "risk": "Desvío de ruta no autorizado o detención prolongada",
          "probability": 2,
          "impact": 4,
          "level": "Medio",
          "control": "Alerta de geocerca en WMS/GPS",
          "owner": "Monitor GPS",
          "mitigation": "Llamada protocolaria a chofer o aviso policial",
          "status": "Activo",
          "reviewDate": "2026-07-24"
        }
      ],
      "code": "POE-LOG-17",
      "realTime": "Continuo",
      "name": "CD - Control de Distribución a Sucursales",
      "inputs": "Hoja de ruta digitalizada, coordenadas GPS de camión",
      "status": "Publicado",
      "lastAudit": "2026-03-10"
    },
    {
      "nextAudit": "2026-08-15",
      "version": "2.5",
      "scope": "Auditor de Inventarios y Auxiliares CD.",
      "macroCode": "MACRO-LOG-06",
      "isoRelated": "ISO 9001:2015 9.1.3 (Medición y análisis)",
      "description": "Auditoría de inventario rotativo de ubicaciones del CD basado en clasificación ABC de mercancías.",
      "area": "LOG",
      "outputs": "Reporte de Exactitud de Inventario (ERI), ajustes contables",
      "objective": "Mantener la exactitud del inventario registrado en el ERP/WMS comparándolo contra la existencia física.",
      "expectedTime": "Diario",
      "complianceRate": 100,
      "owner": "Auditor de Inventarios",
      "kpis": [
        {
          "name": "Exactitud de Inventario ERI",
          "target": "> 99%",
          "value": "98.7%",
          "trend": "stable",
          "status": "warning"
        }
      ],
      "risks": [
        {
          "risk": "Errores de conteo por duplicidad de personal",
          "probability": 2,
          "impact": 3,
          "level": "Medio",
          "control": "Doble conteo cruzado obligatorio",
          "owner": "Auditor",
          "mitigation": "Tercer conteo de validación por jefe",
          "status": "Mitigado",
          "reviewDate": "2026-07-28"
        }
      ],
      "code": "POE-LOG-18",
      "realTime": "Diario",
      "name": "Conteo Cíclico de Existencias",
      "inputs": "Calendario de conteos cíclicos ABC, hoja de conteo ciego",
      "status": "Publicado",
      "lastAudit": "2026-07-15"
    },
    {
      "nextAudit": "2026-12-05",
      "version": "1.1",
      "scope": "Gerencia Logística, Dirección General y Tesorería.",
      "macroCode": "MACRO-LOG-07",
      "isoRelated": "ISO 9001:2015 9.1.3 (Evaluación financiera de la calidad)",
      "description": "Monitoreo del ciclo de caja (Cash Conversion Cycle) e indicador de días de stock (DOH) para optimización financiera.",
      "area": "LOG",
      "outputs": "Matriz mensual de indicadores CCC y DOH",
      "objective": "Minimizar los días de efectivo inmovilizado acelerando la rotación de inventarios comerciales.",
      "expectedTime": "Mensual",
      "complianceRate": 100,
      "owner": "Gerente de Logística",
      "kpis": [
        {
          "name": "Días de Stock DOH",
          "target": "< 45 días",
          "value": "48 días",
          "trend": "stable",
          "status": "warning"
        }
      ],
      "risks": [
        {
          "risk": "Exceso de días de stock (DOH) satura el capital de trabajo",
          "probability": 3,
          "impact": 4,
          "level": "Alto",
          "control": "Políticas de descuento por lento movimiento",
          "owner": "Jefe Compras",
          "mitigation": "Devolución o liquidación a precio de costo",
          "status": "Activo",
          "reviewDate": "2026-07-22"
        }
      ],
      "code": "POE-LOG-19",
      "realTime": "Mensual",
      "name": "Administración de Capital de Trabajo",
      "inputs": "Balances de cuentas por pagar, reportes de inventario contable",
      "status": "Publicado",
      "lastAudit": "2026-06-05"
    },
    {
      "nextAudit": "2026-11-15",
      "version": "1.0",
      "scope": "Compradores y Cuentas por Pagar.",
      "macroCode": "MACRO-LOG-07",
      "isoRelated": "ISO 9001:2015 9.1.3 (Evaluación del desempeño)",
      "description": "Aplicación, validación y control en la liquidación de las 21 modalidades de descuentos comerciales acordados.",
      "area": "LOG",
      "outputs": "Registro de descuentos comerciales aplicados e impacto financiero",
      "objective": "Recuperar todos los descuentos financieros negociados con proveedores en las liquidaciones de facturas.",
      "expectedTime": "Mensual",
      "complianceRate": 100,
      "owner": "Jefe de Compras",
      "kpis": [
        {
          "name": "Descuentos Aplicados",
          "target": "100%",
          "value": "98.4%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "No aplicación de descuentos por pronto pago",
          "probability": 2,
          "impact": 4,
          "level": "Medio",
          "control": "Alerta del ERP para fechas límite de pago",
          "owner": "Jefe Cuentas por Pagar",
          "mitigation": "Aplicación retroactiva o nota de crédito",
          "status": "Mitigado",
          "reviewDate": "2026-07-14"
        }
      ],
      "code": "POE-LOG-20",
      "realTime": "Mensual",
      "name": "Negociación y Gestión de Descuentos",
      "inputs": "Convenios comerciales vigentes, facturas de compra ERP",
      "status": "Publicado",
      "lastAudit": "2026-05-15"
    },
    {
      "nextAudit": "2026-10-22",
      "version": "1.1",
      "scope": "Trade Marketing, Compras y Cuentas por Cobrar.",
      "macroCode": "MACRO-LOG-07",
      "isoRelated": "ISO 9001:2015 10.2 (Mejora y optimización de recursos)",
      "description": "Control de cobro y recuperación de fondos por bonos co-op, productos gratis e incentivos de exhibición.",
      "area": "LOG",
      "outputs": "Factura comercial emitida al proveedor, control de bonos recibidos",
      "objective": "Facturar oportunamente al proveedor por los conceptos de apoyo publicitario y bonos acordados.",
      "expectedTime": "Mensual",
      "complianceRate": 100,
      "owner": "Trade Marketing",
      "kpis": [
        {
          "name": "Recuperación Bonos",
          "target": "> 95%",
          "value": "97.1%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Falta de cobro de apoyos co-op por omisión de reporte",
          "probability": 2,
          "impact": 3,
          "level": "Medio",
          "control": "Cruce mensual de pautas con facturación",
          "owner": "Trade Marketing",
          "mitigation": "Emisión manual diferida",
          "status": "Mitigado",
          "reviewDate": "2026-07-28"
        }
      ],
      "code": "POE-LOG-21",
      "realTime": "Mensual",
      "name": "Gestión de Bonificaciones Comerciales",
      "inputs": "Contratos de apoyo promocional, reportes de venta de productos bonificados",
      "status": "Publicado",
      "lastAudit": "2026-04-22"
    },
    {
      "nextAudit": "2026-08-10",
      "version": "1.0",
      "scope": "Director de Compras, Dirección General y Asesoría Legal.",
      "macroCode": "MACRO-LOG-07",
      "isoRelated": "ISO 9001:2015 8.4.2 (Gestión de alianzas externas)",
      "description": "Establecimiento y control de plazos de pago y esquemas de Vendor Managed Inventory (VMI) con socios clave.",
      "area": "LOG",
      "outputs": "Convenio de plazos firmado, catálogo VMI parametrizado",
      "objective": "Extender el plazo promedio de pago (DPO) e implementar esquemas VMI para optimizar capital de trabajo.",
      "expectedTime": "Anual",
      "complianceRate": 100,
      "owner": "Director de Compras",
      "kpis": [
        {
          "name": "SKUs bajo VMI",
          "target": "> 10%",
          "value": "8.5%",
          "trend": "stable",
          "status": "warning"
        }
      ],
      "risks": [
        {
          "risk": "Falta de control del stock VMI por fallas de integración TI",
          "probability": 3,
          "impact": 3,
          "level": "Medio",
          "control": "Pruebas de conectividad API semanales",
          "owner": "Líder TI",
          "mitigation": "Actualización de stock vía archivo plano diario",
          "status": "Activo",
          "reviewDate": "2026-07-10"
        }
      ],
      "code": "POE-LOG-22",
      "realTime": "Anual",
      "name": "Negociación de Beneficios Financieros",
      "inputs": "Convenios financieros propuestos, análisis financiero del proveedor",
      "status": "Publicado",
      "lastAudit": "2026-02-10"
    },
    {
      "code": "POE-LOG-23",
      "macroCode": "MACRO-LOG-08",
      "name": "Planificación Estratégica y Presupuestos",
      "area": "LOG",
      "description": "Formulación del presupuesto operativo anual de la cadena de suministro y control mensual con Balanced Scorecard (BSC).",
      "objective": "Garantizar la alineación financiera de las operaciones logísticas con las metas estratégicas de la empresa.",
      "scope": "Gerente Logística, Jefes de CD y Control de Gestión.",
      "owner": "Gerente de Logística",
      "inputs": "Objetivos estratégicos anuales, histórico de gastos operativos logísticos",
      "outputs": "Cuadro de Mando Integral Logístico (BSC) y reportes de varianza mensual",
      "isoRelated": "ISO 9001:2015 9.3 (Revisión por la dirección)",
      "expectedTime": "1 mes (anual)",
      "realTime": "1.2 meses",
      "complianceRate": 100,
      "lastAudit": "2026-07-20",
      "nextAudit": "2026-08-20",
      "status": "Publicado",
      "version": "2.1",
      "risks": [
        {
          "risk": "Desviación del gasto logístico por aumento en combustible",
          "probability": 3,
          "impact": 4,
          "level": "Alto",
          "control": "Ajuste de rutas dinámico por software",
          "owner": "Jefe Despacho",
          "mitigation": "Modificación presupuestaria o renegociación de fletes",
          "status": "Activo",
          "reviewDate": "2026-07-30"
        }
      ],
      "kpis": [
        {
          "name": "Ejecución Presupuestal",
          "target": "100% ± 2%",
          "value": "101.4%",
          "trend": "stable",
          "status": "success"
        }
      ]
    },
    {
      "nextAudit": "2026-10-01",
      "version": "1.0",
      "scope": "Aplica al Ã¡rea de AdministraciÃ³n y Finanzas.",
      "macroCode": "MACRO-ADM-02",
      "isoRelated": "ISO 9001:2015 8.1",
      "description": "Administrar y controlar las entradas y salidas de dinero líquido para garantizar la liquidez operativa.",
      "area": "ADM",
      "outputs": "Flujo de Efectivo Proyectado vs. Real (Diario/Mensual).",
      "objective": "Administrar y controlar las entradas y salidas de dinero líquido para garantizar la liquidez operativa.",
      "expectedTime": "30 min",
      "complianceRate": 100,
      "owner": "DOÑA MILAGRO / CONTABILIDAD",
      "kpis": [
        {
          "status": "success",
          "name": "Exactitud de Datos",
          "target": "100%",
          "value": "100%",
          "trend": "stable"
        }
      ],
      "risks": [
        {
          "risk": "Discrepancias en el control administrativo",
          "reviewDate": "2026-08-01",
          "impact": 3,
          "probability": 2,
          "level": "Medio",
          "owner": "Encargado de Ãrea",
          "control": "Doble revisiÃ³n periÃ³dica",
          "mitigation": "Ajuste de procesos",
          "status": "Activo"
        }
      ],
      "code": "POE-TES-01",
      "realTime": "28 min",
      "name": "Administración de Flujo de Efectivo",
      "inputs": "Saldos bancarios, cobros previstos, compromisos de pago.",
      "status": "Publicado",
      "lastAudit": "2026-07-01"
    },
    {
      "code": "POE-COM-01",
      "name": "MONITOREO Y ANÁLISIS DE TENDENCIAS DE CONSUMO",
      "macroCode": "MACRO-COM-01",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "A diferencia del análisis del \"consumidor\" (quien finalmente usa o consume el producto), este informe se enfoca en el \"shopper\" (quien realiza la acción de compra en la tienda o canal digital). Permite entender no solo qué compran los clientes, sino cómo, cuándo, por qué, con qué frecuencia y bajo qué estímulos eligen determinados productos o formatos.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "MONITOREO Y ANÁLISIS DE TENDENCIAS DE CONSUMO",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en monitoreo y análisis de tendencias de consumo",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-02",
      "name": "INTELIGENCIA COMPETITIVA (BENCHMARKING)",
      "macroCode": "MACRO-COM-01",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Es el rastreo y análisis sistemático de los competidores directos (otros supermercados, tiendas de descuento o hard discount, y plataformas de e-grocery). Evalúa sus estrategias de precios, promociones, surtido de productos, diseño de tiendas y servicios de valor agregado.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "INTELIGENCIA COMPETITIVA (BENCHMARKING)",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en inteligencia competitiva (benchmarking)",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-03",
      "name": "EVALUACIÓN Y OPTIMIZACIÓN DEL ÁRBOL DE DECISIÓN DE COMPRA (SURTIDO)",
      "macroCode": "MACRO-COM-01",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Consiste en investigar cómo el cliente elige un producto frente a la góndola/estante (si elige primero por marca, por precio, por tamaño o por beneficio para la salud). Ayuda a determinar qué marcas o productos faltan en el surtido actual y cuáles deberían eliminarse (racionalización de SKU).",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "EVALUACIÓN Y OPTIMIZACIÓN DEL ÁRBOL DE DECISIÓN DE COMPRA (SURTIDO)",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en evaluación y optimización del árbol de decisión de compra (surtido)",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-04",
      "name": "TESTEO DE NUEVOS PRODUCTOS Y CONCEPTOS (VALIDACIÓN COMERCIAL)",
      "macroCode": "MACRO-COM-01",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Antes de realizar una compra masiva a proveedores o lanzar un producto de marca propia, se realizan pruebas controladas (paneles de consumidores, encuestas o pilotos en tiendas seleccionadas) para medir la aceptación del empaque, sabor, precio percibido y concepto del producto.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "TESTEO DE NUEVOS PRODUCTOS Y CONCEPTOS (VALIDACIÓN COMERCIAL)",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en testeo de nuevos productos y conceptos (validación comercial)",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-05",
      "name": "INVESTIGACIÓN DE LA EXPERIENCIA EN TIENDA (LAYOUT Y SERVICIO)",
      "macroCode": "MACRO-COM-01",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Estudio enfocado en el recorrido físico y digital del cliente. Utiliza herramientas como misiones de compra (clientes incógnitos o mystery shoppers), encuestas de satisfacción de salida (NPS) o mapas de calor para entender qué zonas de la tienda son atractivas y cuáles generan fricción.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "INVESTIGACIÓN DE LA EXPERIENCIA EN TIENDA (LAYOUT Y SERVICIO)",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en investigación de la experiencia en tienda (layout y servicio)",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-06",
      "name": "DEFINICION DE MODELO DE NEGOCIO: SEGMENTACION Y SELECCION DEL MERCADO OBJETIVO",
      "macroCode": "MACRO-COM-02",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Segmentacion y seleccion es la estrategia de marketing donde se selecciona el segmento del mercado a trabajar. De aquí surge la expansión en el desarrollo de productos cada vez más específicos y especializados, el añadir servicio y personalización a los productos, es decir convertir productos en productos-servicios, y la expansión del marketing directo",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "DEFINICION DE MODELO DE NEGOCIO: SEGMENTACION Y SELECCION DEL MERCADO OBJETIVO",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en definicion de modelo de negocio: segmentacion y seleccion del mercado objetivo",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-07",
      "name": "PROPUESTAS DE VALOR REQUERIDAS EN EL MERCADO",
      "macroCode": "MACRO-COM-02",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Una propuesta de valor es una promesa de valor para ser entregado. Es la razón principal por una perspectiva debe comprar a usted.En pocas palabras, la propuesta de valor es una declaración clara de que ofrece beneficios específicos (valor cuantificado),ofrece beneficios específicos (valor cuantificado),le dice al cliente ideal por qué deben comprar a usted y no de la competencia (diferenciación única).",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "PROPUESTAS DE VALOR REQUERIDAS EN EL MERCADO",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en propuestas de valor requeridas en el mercado",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-08",
      "name": "PRICING: ESTRATEGIA DE PRECIOS PSICOLÓGICOS Y DINÁMICOS",
      "macroCode": "MACRO-COM-03",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Controlar y estandarizar el proceso de pricing: estrategia de precios psicológicos y dinámicos para garantizar la calidad del SGC.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "PRICING: ESTRATEGIA DE PRECIOS PSICOLÓGICOS Y DINÁMICOS",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en pricing: estrategia de precios psicológicos y dinámicos",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-09",
      "name": "ZONAS DE ALTA CAPTURA (ZONAS CALIENTES Y CHECKOUT)",
      "macroCode": "MACRO-COM-03",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "3.2.1 OPTIMIZACIÓN DE ABASTECIMIENTO DE LA LÍNEA DE CAJAS (FRONT END). EL FRONT END SE ESTRUCTURA EN DISTINTAS SUBZONAS PARA GARANTIZAR UN FLUJO RÁPIDO DE PERSONAS Y MAXIMIZAR LA RENTABILIDAD POR METRO CUADRADO:\nPLANOGRAMA DE CHECKOUT (IMPULSO)",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "ZONAS DE ALTA CAPTURA (ZONAS CALIENTES Y CHECKOUT)",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en zonas de alta captura (zonas calientes y checkout)",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-10",
      "name": "ADMINISTRACIION Y LA GESTIÓN DE SALA DE VENTAS Y LA EXPERIENCIA DEL CLIENTE",
      "macroCode": "MACRO-COM-03",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Controlar y estandarizar el proceso de administraciion y la gestión de sala de ventas y la experiencia del cliente para garantizar la calidad del SGC.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "ADMINISTRACIION Y LA GESTIÓN DE SALA DE VENTAS Y LA EXPERIENCIA DEL CLIENTE",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en administraciion y la gestión de sala de ventas y la experiencia del cliente",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-11",
      "name": "IMAGEN INSTITUCIONAL",
      "macroCode": "MACRO-COM-03",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Controlar y estandarizar el proceso de imagen institucional para garantizar la calidad del SGC.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "IMAGEN INSTITUCIONAL",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en imagen institucional",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-12",
      "name": "RECLAMOS",
      "macroCode": "MACRO-COM-04",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Controlar y estandarizar el proceso de reclamos para garantizar la calidad del SGC.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "RECLAMOS",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en reclamos",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-13",
      "name": "INSTITUCIONALIZACIÓN Y ESTANDARIZACIÓN OPERATIVA",
      "macroCode": "MACRO-COM-04",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Para que el valor no dependa de personas clave, este procedimiento se encarga de arraigar las nuevas capacidades en el \"ADN\" y los procesos formales de la organización.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "INSTITUCIONALIZACIÓN Y ESTANDARIZACIÓN OPERATIVA",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en institucionalización y estandarización operativa",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-14",
      "name": "PROGRAMA DE FIDELIZACIÓN (LOYALTY)",
      "macroCode": "MACRO-COM-04",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Controlar y estandarizar el proceso de programa de fidelización (loyalty) para garantizar la calidad del SGC.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "PROGRAMA DE FIDELIZACIÓN (LOYALTY)",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en programa de fidelización (loyalty)",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-15",
      "name": "EXPERIENCIA DEL CLIENTE EN SALA DE VENTAS (MANUAL DE LOS PUNTOS CRITICOS A GESTIONAR DELANTE DE LOS CLIENTES)",
      "macroCode": "MACRO-COM-04",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Es Fijar las reglas de saludo, abordaje y despedida.y Capacitación: Hacer talleres de habilidades blandas y manejo de objeciones.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "EXPERIENCIA DEL CLIENTE EN SALA DE VENTAS (MANUAL DE LOS PUNTOS CRITICOS A GESTIONAR DELANTE DE LOS CLIENTES)",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en experiencia del cliente en sala de ventas (manual de los puntos criticos a gestionar delante de los clientes)",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-16",
      "name": "MONITOREO CONTINUO DEL RENDIMIENTO (CONTROL DE EROSIÓN)",
      "macroCode": "MACRO-COM-04",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Este procedimiento actúa como un sistema de alerta temprana. Mide constantemente si el valor sigue vigente o si está empezando a decaer debido a cambios en el mercado, tecnología o comportamiento del cliente.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "MONITOREO CONTINUO DEL RENDIMIENTO (CONTROL DE EROSIÓN)",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en monitoreo continuo del rendimiento (control de erosión)",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-17",
      "name": "GESTIÓN DEL CICLO DE VIDA Y MEJORA CONTINUA (KAIZEN)",
      "macroCode": "MACRO-COM-04",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "4.7.1 OPTIMIZAR CADA ETAPA POR LA QUE PASA UN PRODUCTO",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "GESTIÓN DEL CICLO DE VIDA Y MEJORA CONTINUA (KAIZEN)",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en gestión del ciclo de vida y mejora continua (kaizen)",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-18",
      "name": "GESTIÓN DEL CAMBIO CULTURAL Y TRANSFERENCIA DE CAPACIDADES",
      "macroCode": "MACRO-COM-04",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Asegura que el personal actual y los nuevos ingresos adopten la mentalidad necesaria para defender el valor creado, evitando que la organización vuelva a los \"viejos hábitos\".",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "GESTIÓN DEL CAMBIO CULTURAL Y TRANSFERENCIA DE CAPACIDADES",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en gestión del cambio cultural y transferencia de capacidades",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-19",
      "name": "PROYECCIÓN DE INGRESOS POR CATEGORÍA (TOP-LINE)",
      "macroCode": "MACRO-COM-05",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Consiste en estimar los ingresos brutos que el supermercado planea percibir en el próximo ciclo (mensual o anual). El equipo de Finanzas en conjunto con los Category Managers (Comercial) analizan los datos históricos de venta de cada pasillo, evalúan la inflación estimada en los productos de consumo masivo, consideran la estacionalidad (Navidad, Semana Santa, regreso a clases) y los objetivos de crecimiento de la cadena.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "PROYECCIÓN DE INGRESOS POR CATEGORÍA (TOP-LINE)",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en proyección de ingresos por categoría (top-line)",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-20",
      "name": "EVALUACIÓN Y ASIGNACIÓN DE INVERSIONES DE CAPITAL (CAPEX)",
      "macroCode": "MACRO-COM-05",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Es la planificación financiera destinada a proyectos de mediano y largo plazo que buscan expandir o modernizar el supermercado. La dirección evalúa las solicitudes de inversión presentadas por distintas áreas (como abrir una nueva tienda, remodelar un pasillo obsoleto, adquirir camiones refrigerados o implementar tecnología como cajas de auto-cobro) y prioriza aquellas con mayor retorno de inversión (ROI).",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "EVALUACIÓN Y ASIGNACIÓN DE INVERSIONES DE CAPITAL (CAPEX)",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en evaluación y asignación de inversiones de capital (capex)",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-21",
      "name": "PREPARACIÓN Y CONSOLIDACIÓN DE TABLEROS DE CONTROL (KPIS)",
      "macroCode": "MACRO-COM-06",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Consiste en la recopilación, limpieza y procesamiento automatizado de los datos reales de operación generados por el supermercado durante el periodo (semana o mes). Los analistas financieros y de BI extraen la información de los sistemas POS (puntos de venta), WMS (inventarios) y ERP para calcular los indicadores críticos de éxito.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "PREPARACIÓN Y CONSOLIDACIÓN DE TABLEROS DE CONTROL (KPIS)",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en preparación y consolidación de tableros de control (kpis)",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-22",
      "name": "ANÁLISIS DE DESVIACIONES Y VARIACIONES PRESUPUESTARIAS",
      "macroCode": "MACRO-COM-06",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Es la etapa de diagnóstico donde se contrastan los resultados reales del supermercado contra el presupuesto que había sido aprobado. El equipo financiero y los gerentes de área analizan las diferencias significativas para entender las causas de raíz, evitando quedarse solo en el \"número frío\".",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "ANÁLISIS DE DESVIACIONES Y VARIACIONES PRESUPUESTARIAS",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en análisis de desviaciones y variaciones presupuestarias",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-23",
      "name": "CONDUCCIÓN DE LA SESIÓN DE RENDICIÓN DE CUENTAS (ACCOUNTABILITY)",
      "macroCode": "MACRO-COM-06",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Ejecución de la reunión presencial o virtual altamente estructurada y dirigida por la alta dirección. En ella, cada líder de departamento (Gerente de Tienda, Director de Compras, Gerente de Operaciones) expone formalmente sus resultados, justifica las desviaciones de su área y propone soluciones ante el comité directivo.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "CONDUCCIÓN DE LA SESIÓN DE RENDICIÓN DE CUENTAS (ACCOUNTABILITY)",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en conducción de la sesión de rendición de cuentas (accountability)",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    },
    {
      "code": "POE-COM-24",
      "name": "SEGUIMIENTO Y CIERRE DE COMPROMISOS",
      "macroCode": "MACRO-COM-06",
      "area": "COM",
      "status": "Publicado",
      "version": "1.0",
      "owner": "Gerente de Ventas y Mercadeo",
      "objective": "Es el proceso de auditoría continua posterior a la reunión. El área de control de gestión revisa de manera periódica que los líderes estén ejecutando los planes de acción acordados en la matriz de compromisos antes de que llegue la siguiente sesión mensual, asegurando que la reunión de trabajo realmente genere cambios operativos.",
      "scope": "Aplica a todo el personal de Ventas, Mercadeo, Cajas y Dirección Comercial.",
      "expectedTime": "45 min",
      "complianceRate": 100,
      "realTime": "40 min",
      "inputs": "Datos de ventas, reportes del shopper, plan de desarrollo.",
      "outputs": "SEGUIMIENTO Y CIERRE DE COMPROMISOS",
      "lastAudit": "2026-08-01",
      "nextAudit": "2026-11-01",
      "kpis": [
        {
          "name": "Nivel de Cumplimiento del Estándar",
          "target": "100%",
          "value": "100%",
          "trend": "stable",
          "status": "success"
        }
      ],
      "risks": [
        {
          "risk": "Incumplimiento de pautas en seguimiento y cierre de compromisos",
          "probability": 1,
          "impact": 3,
          "level": "Bajo",
          "owner": "Gerente de Ventas",
          "control": "Auditorías periódicas",
          "mitigation": "Ajuste inmediato de flujo",
          "status": "Mitigado",
          "reviewDate": "2026-08-01"
        }
      ]
    }
  ],
  "its": [
    {
      "status": "Activo",
      "frequency": "Diario",
      "owner": "Tesorero",
      "poeCode": "POE-ADM-01",
      "pdfUrl": "#",
      "code": "IT-ADM-001",
      "name": "Conteo y Cuadre de Bóveda Central",
      "checklist": [
        "Apertura de bóveda con doble clave conjunta de seguridad.",
        "Clasificar y contar físicamente el efectivo por denominación.",
        "Cotejar el monto contado físicamente contra el reporte del sistema ERP.",
        "Registrar y firmar en la Bitácora física de Bóveda Central."
      ],
      "videoUrl": "#",
      "images": [],
      "role": "Tesorero / Auditor Interno",
      "evidence": "Bitácora de Arqueo",
      "standardTime": "20 min",
      "indicators": "Exactitud en caja"
    },
    {
      "status": "Activo",
      "frequency": "Diario",
      "owner": "Tesorero",
      "poeCode": "POE-ADM-01",
      "pdfUrl": "#",
      "code": "IT-ADM-002",
      "name": "Preparación y Transferencia a ETV",
      "checklist": [
        "Introducir el efectivo arqueado en las bolsas de seguridad numeradas.",
        "Llenar por completo y firmar la boleta de remesa de valores ETV.",
        "Verificar credenciales e identidad biométrica del custodio de ETV.",
        "Entregar bolsas de seguridad al custodio y recolectar firma de recepción en bitácora."
      ],
      "videoUrl": "#",
      "images": [],
      "role": "Encargado de Tesorería",
      "evidence": "Remesa ETV firmada",
      "standardTime": "15 min",
      "indicators": "Cero discrepancia en remesa"
    },
    {
      "status": "Activo",
      "frequency": "Quincenal",
      "owner": "Recursos Humanos",
      "poeCode": "POE-ADM-02",
      "pdfUrl": "#",
      "code": "IT-ADM-003",
      "name": "Registro y Cálculo de Asistencia Biométrica",
      "checklist": [
        "Extraer el log de marcaciones del software de control biológico.",
        "Filtrar y normalizar incidencias (permisos, vacaciones, justificaciones).",
        "Validar horas extras y turnos dobles con las jefaturas respectivas.",
        "Confirmar reporte final y enviarlo para cálculo de nómina."
      ],
      "videoUrl": "#",
      "images": [],
      "role": "Jefe de Recursos Humanos",
      "evidence": "Reporte de Asistencia validado",
      "standardTime": "60 min",
      "indicators": "Exactitud de horas pagadas"
    },
    {
      "status": "Activo",
      "frequency": "Diario",
      "owner": "Contabilidad",
      "poeCode": "POE-ADM-02",
      "pdfUrl": "#",
      "code": "IT-ADM-004",
      "name": "Cierre Diario Módulo Ventas ERP",
      "checklist": [
        "Verificar la recepción y cierre del 100% de los lotes de cajas POS.",
        "Correr la transacción de cierre del módulo de ventas en el ERP.",
        "Revisar el log de discrepancias y cruzar contra depósitos bancarios.",
        "Emitir balance oficial de ventas y bloquear edición del día cerrado."
      ],
      "videoUrl": "#",
      "images": [],
      "role": "Contador General",
      "evidence": "Acta de Cierre ERP",
      "standardTime": "40 min",
      "indicators": "Cierres conciliados"
    },
    {
      "status": "Activo",
      "frequency": "Mensual",
      "owner": "Auditoría",
      "poeCode": "POE-ADM-04",
      "pdfUrl": "#",
      "code": "IT-ADM-005",
      "name": "Plaqueo e Inventarios Cíclicos de Activos",
      "checklist": [
        "Generar código QR único para el activo fijo adquirido recientemente.",
        "Adherir la placa QR de seguridad en ubicación visible del activo.",
        "Escanear código QR con handheld y registrar datos técnicos, ubicación y responsable.",
        "Conciliar contra el catálogo general de activos de la empresa."
      ],
      "videoUrl": "#",
      "images": [],
      "role": "Auditor Financiero",
      "evidence": "Registro de Activo Fijo",
      "standardTime": "120 min",
      "indicators": "Porcentaje de activos plaqueados"
    },
    {
      "status": "Activo",
      "frequency": "Diario",
      "owner": "Auxiliar Administrativo",
      "poeCode": "POE-ADM-01",
      "pdfUrl": "#",
      "code": "IT-ADM-01",
      "name": "Clasificación, Digitalización y Archivo Documental",
      "checklist": [
        "1. Recepción: Recibir el documento físico, colocar sello de recibido con fecha/hora y verificar firmas oficiales."
      ],
      "videoUrl": "#",
      "images": [],
      "role": "Auxiliar Administrativo",
      "evidence": "BitÃ¡cora firmada",
      "standardTime": "15 min",
      "indicators": "Conformidad tÃ©cnica"
    },
    {
      "status": "Activo",
      "frequency": "Diario",
      "owner": "Encargado Servicios Generales",
      "poeCode": "POE-ADM-02",
      "pdfUrl": "#",
      "code": "IT-ADM-02",
      "name": "Mantenimiento e Inspección de Góndolas e Instalaciones",
      "checklist": [
        "1. Inspección Diaria: Recorrer las instalaciones a las 07:30 AM evaluando iluminación, climatización y estructura de góndolas."
      ],
      "videoUrl": "#",
      "images": [],
      "role": "Encargado Servicios Generales",
      "evidence": "BitÃ¡cora firmada",
      "standardTime": "15 min",
      "indicators": "Conformidad tÃ©cnica"
    },
    {
      "code": "IT-ADM-GP-01",
      "poeCode": "POE-ADM-GP-01",
      "name": "Paso a paso de GESTIÓN DOCUMENTAL",
      "owner": "GABY",
      "role": "GABY",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de GESTIÓN DOCUMENTAL.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-02",
      "poeCode": "POE-ADM-GP-02",
      "name": "Paso a paso de ADMINISTRACIÓN DE CONTRATOS",
      "owner": "GABY\nContratos de servicios a RRHH",
      "role": "GABY\nContratos de servicios a RRHH",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de ADMINISTRACIÓN DE CONTRATOS.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-03",
      "poeCode": "POE-ADM-GP-03",
      "name": "Paso a paso de GESTIÓN DE SERVICIOS GENERALES",
      "owner": "GABY",
      "role": "GABY",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de GESTIÓN DE SERVICIOS GENERALES.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-04",
      "poeCode": "POE-ADM-GP-04",
      "name": "Paso a paso de GESTIÓN DE SEGUROS",
      "owner": "GABY",
      "role": "GABY",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de GESTIÓN DE SEGUROS.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-09",
      "poeCode": "POE-ADM-GP-09",
      "name": "Paso a paso de 1. REGISTROS CONTABLE",
      "owner": "GABY",
      "role": "GABY",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 1. REGISTROS CONTABLE.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-10",
      "poeCode": "POE-ADM-GP-10",
      "name": "Paso a paso de 1.1 REGISTRO DE INGRESOS.",
      "owner": "GABY",
      "role": "GABY",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 1.1 REGISTRO DE INGRESOS..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-11",
      "poeCode": "POE-ADM-GP-11",
      "name": "Paso a paso de 1.2 REGISTRO DE EGRESOS.",
      "owner": "GABY",
      "role": "GABY",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 1.2 REGISTRO DE EGRESOS..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-12",
      "poeCode": "POE-ADM-GP-12",
      "name": "Paso a paso de 1.3 REGISTRO DE COMPRAS Y VENTAS.",
      "owner": "GABY",
      "role": "GABY",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 1.3 REGISTRO DE COMPRAS Y VENTAS..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-13",
      "poeCode": "POE-ADM-GP-13",
      "name": "Paso a paso de 1.4 REGISTRO DE DEPRECIACIONES Y AMORTIZACIONES.",
      "owner": "GABY",
      "role": "GABY",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 1.4 REGISTRO DE DEPRECIACIONES Y AMORTIZACIONES..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-14",
      "poeCode": "POE-ADM-GP-14",
      "name": "Paso a paso de 1.5 CONTABILIZACIÓN DE PROVISIONES.",
      "owner": "GABY",
      "role": "GABY",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 1.5 CONTABILIZACIÓN DE PROVISIONES..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-15",
      "poeCode": "POE-ADM-GP-15",
      "name": "Paso a paso de 2. CONTROL Y CONCILIACIONES",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 2. CONTROL Y CONCILIACIONES.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-16",
      "poeCode": "POE-ADM-GP-16",
      "name": "Paso a paso de 2.1 CONCILIACIONES BANCARIAS.",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 2.1 CONCILIACIONES BANCARIAS..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-17",
      "poeCode": "POE-ADM-GP-17",
      "name": "Paso a paso de 2.2 CONCILIACIÓN DE CUENTAS POR COBRAR.",
      "owner": "KARLA / CONTADOR",
      "role": "KARLA / CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 2.2 CONCILIACIÓN DE CUENTAS POR COBRAR..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-18",
      "poeCode": "POE-ADM-GP-18",
      "name": "Paso a paso de 2.3 CONCILIACIÓN DE CUENTAS POR PAGAR.",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 2.3 CONCILIACIÓN DE CUENTAS POR PAGAR..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-19",
      "poeCode": "POE-ADM-GP-19",
      "name": "Paso a paso de 2.4 REVISIÓN DE AUXILIARES CONTABLES.",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 2.4 REVISIÓN DE AUXILIARES CONTABLES..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-20",
      "poeCode": "POE-ADM-GP-20",
      "name": "Paso a paso de 2.5 AJUSTES CONTABLES.",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 2.5 AJUSTES CONTABLES..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-21",
      "poeCode": "POE-ADM-GP-21",
      "name": "Paso a paso de 3. CIERRE CONTABLE",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 3. CIERRE CONTABLE.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-22",
      "poeCode": "POE-ADM-GP-22",
      "name": "Paso a paso de 3.1 CIERRE MENSUAL.",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 3.1 CIERRE MENSUAL..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-23",
      "poeCode": "POE-ADM-GP-23",
      "name": "Paso a paso de 3.2 VALIDACIÓN DE SALDOS.",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 3.2 VALIDACIÓN DE SALDOS..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-24",
      "poeCode": "POE-ADM-GP-24",
      "name": "Paso a paso de 4. ELABORACIÓN DE ESTADOS FINANCIEROS",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 4. ELABORACIÓN DE ESTADOS FINANCIEROS.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-25",
      "poeCode": "POE-ADM-GP-25",
      "name": "Paso a paso de 4.1 ESTADO DE SITUACIÓN FINANCIERA (BALANCE GENERAL).",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 4.1 ESTADO DE SITUACIÓN FINANCIERA (BALANCE GENERAL)..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-26",
      "poeCode": "POE-ADM-GP-26",
      "name": "Paso a paso de 4.2 ESTADO DE RESULTADOS DE PERDIDAS Y GANACIAS",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 4.2 ESTADO DE RESULTADOS DE PERDIDAS Y GANACIAS.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-27",
      "poeCode": "POE-ADM-GP-27",
      "name": "Paso a paso de 4.3 ESTADO DE FLUJO DE EFECTIVO.",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 4.3 ESTADO DE FLUJO DE EFECTIVO..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-28",
      "poeCode": "POE-ADM-GP-28",
      "name": "Paso a paso de 4.4 ESTADO DE CAMBIOS EN EL PATRIMONIO.",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 4.4 ESTADO DE CAMBIOS EN EL PATRIMONIO..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-29",
      "poeCode": "POE-ADM-GP-29",
      "name": "Paso a paso de 4.5 NOTAS A LOS ESTADOS FINANCIEROS.",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 4.5 NOTAS A LOS ESTADOS FINANCIEROS..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-30",
      "poeCode": "POE-ADM-GP-30",
      "name": "Paso a paso de 5. CUMPLIMIENTO FISCAL",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 5. CUMPLIMIENTO FISCAL.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-31",
      "poeCode": "POE-ADM-GP-31",
      "name": "Paso a paso de 5.1 DECLARACIONES TRIBUTARIAS.",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 5.1 DECLARACIONES TRIBUTARIAS..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-32",
      "poeCode": "POE-ADM-GP-32",
      "name": "Paso a paso de 5.2 CÁLCULO DE IMPUESTOS.",
      "owner": "GABY/CONTADOR",
      "role": "GABY/CONTADOR",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 5.2 CÁLCULO DE IMPUESTOS..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-33",
      "poeCode": "POE-ADM-GP-33",
      "name": "Paso a paso de 5.3 ATENCIÓN A AUDITORÍAS INTERNAS Y EXTERNAS",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 5.3 ATENCIÓN A AUDITORÍAS INTERNAS Y EXTERNAS.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-34",
      "poeCode": "POE-ADM-GP-34",
      "name": "Paso a paso de 5.4 CUMPLIMIENTO DE NORMAS CONTABLES Y TRIBUTARIAS",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 5.4 CUMPLIMIENTO DE NORMAS CONTABLES Y TRIBUTARIAS.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-35",
      "poeCode": "POE-ADM-GP-35",
      "name": "Paso a paso de 5.5 ARCHIVO Y CUSTODIA DE DOCUMENTACIÓN CONTABLE",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 5.5 ARCHIVO Y CUSTODIA DE DOCUMENTACIÓN CONTABLE.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-36",
      "poeCode": "POE-ADM-GP-36",
      "name": "Paso a paso de 6. ANÁLISIS FINANCIERO",
      "owner": "CONSULTORES",
      "role": "CONSULTORES",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 6. ANÁLISIS FINANCIERO.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-37",
      "poeCode": "POE-ADM-GP-37",
      "name": "Paso a paso de 6.1 ANÁLISIS DE RENTABILIDAD.",
      "owner": "CONSULTORES",
      "role": "CONSULTORES",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 6.1 ANÁLISIS DE RENTABILIDAD..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-38",
      "poeCode": "POE-ADM-GP-38",
      "name": "Paso a paso de 6.2 ANÁLISIS DE LIQUIDEZ.",
      "owner": "CONSULTORES",
      "role": "CONSULTORES",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 6.2 ANÁLISIS DE LIQUIDEZ..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-39",
      "poeCode": "POE-ADM-GP-39",
      "name": "Paso a paso de 6.3 ANÁLISIS DE ENDEUDAMIENTO.",
      "owner": "CONSULTORES",
      "role": "CONSULTORES",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 6.3 ANÁLISIS DE ENDEUDAMIENTO..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-40",
      "poeCode": "POE-ADM-GP-40",
      "name": "Paso a paso de 6.4 INDICADORES FINANCIEROS.",
      "owner": "CONSULTORES",
      "role": "CONSULTORES",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 6.4 INDICADORES FINANCIEROS..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-41",
      "poeCode": "POE-ADM-GP-41",
      "name": "Paso a paso de 6.5 PRESENTACIÓN DE RESULTADOS A LA DIRECCIÓN.",
      "owner": "CONSULTORES",
      "role": "CONSULTORES",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 6.5 PRESENTACIÓN DE RESULTADOS A LA DIRECCIÓN..",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-42",
      "poeCode": "POE-ADM-GP-42",
      "name": "Paso a paso de 1. DEFINICIÓN Y ACTUALIZACIÓN DE LA POLÍTICA DE INVERSIÓN",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 1. DEFINICIÓN Y ACTUALIZACIÓN DE LA POLÍTICA DE INVERSIÓN.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-43",
      "poeCode": "POE-ADM-GP-43",
      "name": "Paso a paso de 2. IDENTIFICACIÓN DE NECESIDADES DE INVERSIÓN",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 2. IDENTIFICACIÓN DE NECESIDADES DE INVERSIÓN.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-44",
      "poeCode": "POE-ADM-GP-44",
      "name": "Paso a paso de 3. FORMULACIÓN DE PROYECTOS DE INVERSIÓN",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 3. FORMULACIÓN DE PROYECTOS DE INVERSIÓN.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-45",
      "poeCode": "POE-ADM-GP-45",
      "name": "Paso a paso de 4. EVALUACIÓN TÉCNICA DE LA INVERSIÓN",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 4. EVALUACIÓN TÉCNICA DE LA INVERSIÓN.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-46",
      "poeCode": "POE-ADM-GP-46",
      "name": "Paso a paso de 5. EVALUACIÓN FINANCIERA Y ECONÓMICA",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 5. EVALUACIÓN FINANCIERA Y ECONÓMICA.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-47",
      "poeCode": "POE-ADM-GP-47",
      "name": "Paso a paso de 6. EVALUACIÓN Y GESTIÓN DE RIESGOS DE INVERSIÓN",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 6. EVALUACIÓN Y GESTIÓN DE RIESGOS DE INVERSIÓN.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-48",
      "poeCode": "POE-ADM-GP-48",
      "name": "Paso a paso de 7. PRIORIZACIÓN DE INVERSIONES",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 7. PRIORIZACIÓN DE INVERSIONES.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-49",
      "poeCode": "POE-ADM-GP-49",
      "name": "Paso a paso de 8. APROBACIÓN DE INVERSIONES",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 8. APROBACIÓN DE INVERSIONES.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-50",
      "poeCode": "POE-ADM-GP-50",
      "name": "Paso a paso de 9. PLANIFICACIÓN DE LA EJECUCIÓN DE LA INVERSIÓN",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 9. PLANIFICACIÓN DE LA EJECUCIÓN DE LA INVERSIÓN.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-51",
      "poeCode": "POE-ADM-GP-51",
      "name": "Paso a paso de 10. GESTIÓN DEL FINANCIAMIENTO",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 10. GESTIÓN DEL FINANCIAMIENTO.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-52",
      "poeCode": "POE-ADM-GP-52",
      "name": "Paso a paso de 11. EJECUCIÓN DE LA INVERSIÓN",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 11. EJECUCIÓN DE LA INVERSIÓN.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-53",
      "poeCode": "POE-ADM-GP-53",
      "name": "Paso a paso de 12. SEGUIMIENTO Y CONTROL DE INVERSIONES",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 12. SEGUIMIENTO Y CONTROL DE INVERSIONES.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-54",
      "poeCode": "POE-ADM-GP-54",
      "name": "Paso a paso de 13. CONTROL DE CAMBIOS DEL PROYECTO DE INVERSIÓN",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 13. CONTROL DE CAMBIOS DEL PROYECTO DE INVERSIÓN.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-55",
      "poeCode": "POE-ADM-GP-55",
      "name": "Paso a paso de 14. EVALUACIÓN DE RESULTADOS DE LA INVERSIÓN",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 14. EVALUACIÓN DE RESULTADOS DE LA INVERSIÓN.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-56",
      "poeCode": "POE-ADM-GP-56",
      "name": "Paso a paso de 15. AUDITORÍA Y CUMPLIMIENTO DE INVERSIONES",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 15. AUDITORÍA Y CUMPLIMIENTO DE INVERSIONES.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-57",
      "poeCode": "POE-ADM-GP-57",
      "name": "Paso a paso de 16. ACTUALIZACIÓN DEL PORTAFOLIO DE INVERSIONES",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 16. ACTUALIZACIÓN DEL PORTAFOLIO DE INVERSIONES.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-58",
      "poeCode": "POE-ADM-GP-58",
      "name": "Paso a paso de 17. MEJORA CONTINUA DE LA POLÍTICA DE INVERSIÓN",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de 17. MEJORA CONTINUA DE LA POLÍTICA DE INVERSIÓN.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-GP-59",
      "poeCode": "POE-ADM-GP-59",
      "name": "Paso a paso de CONTROL DE ACTIVOS",
      "owner": "Encargado de Ã¡rea",
      "role": "Encargado de Ã¡rea",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Verificar los requisitos para iniciar la tarea de CONTROL DE ACTIVOS.",
        "Ejecutar las actividades principales descritas en el manual de procedimientos GAF.",
        "Validar los entregables y archivar la evidencia en el repositorio correspondiente."
      ],
      "frequency": "Continuo",
      "indicators": "Cumplimiento del procedimiento GAF",
      "evidence": "Registro / Documento Firmado",
      "status": "Activo"
    },
    {
      "code": "IT-LOG-01",
      "poeCode": "POE-LOG-13",
      "name": "Recepción y Verificación de Mercancía en Rampa",
      "owner": "Recepción CD",
      "role": "Auxiliar de Recepción CD",
      "standardTime": "40 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Guiar al furgón al muelle asignado, apagar motor y colocar cuñas de seguridad en llantas.",
        "Romper y verificar que el número de marchamo del furgón coincida con la documentación.",
        "Medir e ingresar la temperatura interna del furgón si transporta perecederos (ideal: 1°C a 4°C).",
        "Realizar conteo físico de cajas y palets validando contra la orden de compra y factura original."
      ],
      "frequency": "Por Furgón",
      "indicators": "Exactitud de recepción",
      "evidence": "Acta de Recepción en Rampa",
      "status": "Activo"
    },
    {
      "code": "IT-LOG-02",
      "poeCode": "POE-LOG-14",
      "name": "Etiquetado LPN e Ingreso WMS",
      "owner": "Muelle CD",
      "role": "Digitador de Muelle",
      "standardTime": "5 min/palet",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Imprimir etiqueta de código LPN (License Plate Number) desde la estación de muelle.",
        "Adherir la etiqueta LPN en la esquina superior derecha del palet consolidado.",
        "Escanear el código LPN ingresando el código de artículo, lote de fábrica y fecha de caducidad.",
        "Registrar el ingreso en el WMS para habilitar la orden de almacenamiento."
      ],
      "frequency": "Por Palet",
      "indicators": "Palets identificados",
      "evidence": "LPN ingresado en WMS",
      "status": "Activo"
    },
    {
      "code": "IT-LOG-03",
      "poeCode": "POE-LOG-14",
      "name": "Almacenamiento en Racks de Altura",
      "owner": "Almacén CD",
      "role": "Montacarguista",
      "standardTime": "6 min/palet",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Escanear con la handheld la etiqueta LPN de la tarima a trasladar.",
        "Identificar en la pantalla del montacargas la posición sugerida de rack por el WMS.",
        "Elevar la tarima con seguridad y depositarla centrada en la posición del rack.",
        "Escanear la etiqueta de ubicación del rack para confirmar que el palet está almacenado."
      ],
      "frequency": "Por Tarima",
      "indicators": "Tiempo de almacenamiento",
      "evidence": "Confirmación de ubicación WMS",
      "status": "Activo"
    },
    {
      "code": "IT-LOG-04",
      "poeCode": "POE-LOG-15",
      "name": "Preparación de Olas de Picking",
      "owner": "Despacho CD",
      "role": "Operador de Picking",
      "standardTime": "30 min/ola",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Recibir la terminal portátil Handheld con la ola de picking asignada por el sistema.",
        "Dirigirse a la primera posición de picking indicada por el recorrido optimizado de la pantalla.",
        "Escanear la posición de origen del producto y el código de barras para confirmar.",
        "Tirar el número de cajas solicitadas y depositarlas en el palet de consolidación de tienda."
      ],
      "frequency": "Por Ola de Picking",
      "indicators": "Cajas por hora picking",
      "evidence": "Orden de picking en WMS",
      "status": "Activo"
    },
    {
      "code": "IT-LOG-05",
      "poeCode": "POE-LOG-16",
      "name": "Embalaje y Colocación de Marchamos en Despacho",
      "owner": "Despacho CD",
      "role": "Despachador de CD",
      "standardTime": "15 min/palet",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Consolidar y cuadrar la tarima de picking destinada a la sucursal.",
        "Envolver la tarima por completo con película plástica estirable (Play-pack) asegurando la carga.",
        "Subir la tarima consolidada al camión de distribución utilizando patín eléctrico.",
        "Cerrar la cortina del furgón del camión y colocar el marchamo metálico de seguridad numerado."
      ],
      "frequency": "Por Despacho",
      "indicators": "Cero merma flete",
      "evidence": "Manifiesto con número de marchamo",
      "status": "Activo"
    },
    {
      "code": "IT-LOG-06",
      "poeCode": "POE-LOG-18",
      "name": "Ejecución de Conteos Cíclicos de Inventario",
      "owner": "Inventarios CD",
      "role": "Auditor de Inventarios",
      "standardTime": "60 min/sección",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Imprimir la hoja de conteo ciego desde la aplicación de inventario del WMS.",
        "Identificar físicamente la posición de rack e iniciar conteo de cajas unidad por unidad.",
        "Registrar el conteo físico en la hoja sin consultar saldos del sistema ERP.",
        "Digitar el conteo en la terminal y reportar discrepancias de inmediato a la jefatura."
      ],
      "frequency": "Diario",
      "indicators": "Desviación inventario",
      "evidence": "Reporte de Exactitud (ERI)",
      "status": "Activo"
    },
    {
      "code": "IT-LOG-07",
      "poeCode": "POE-LOG-12",
      "name": "Tramitación de Notas de Devolución a Proveedor",
      "owner": "Reclamos CD",
      "role": "Encargado de Reclamos",
      "standardTime": "20 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Identificar y segregar físicamente en la zona de rechazo el producto averiado.",
        "Elaborar la boleta de devolución e imprimir el reporte técnico con fotografías.",
        "Solicitar la firma física de recepción al chofer del camión del proveedor que retira el rechazo.",
        "Cargar el documento firmado en el módulo ERP para generar la nota de crédito."
      ],
      "frequency": "Por Evento",
      "indicators": "Tiempo de retorno cobro",
      "evidence": "Nota de devolución firmada",
      "status": "Activo"
    },
    {
      "code": "IT-LOG-08",
      "poeCode": "POE-LOG-03",
      "name": "Parametrización de Atributos de SKU en Catálogo ERP",
      "owner": "Catalogación",
      "role": "Analista de Inventarios",
      "standardTime": "15 min",
      "videoUrl": "#",
      "pdfUrl": "#",
      "images": [],
      "checklist": [
        "Ingresar al módulo maestro de códigos en el ERP central corporativo.",
        "Digitar el código EAN principal, código corto asignado e impuestos aplicables del artículo.",
        "Ingresar la descripción técnica, unidad de empaque y volumen del palet.",
        "Asignar la clasificación ABC de inventario estimada y guardar la ficha activa."
      ],
      "frequency": "Por Código Nuevo",
      "indicators": "Cero error en catálogo",
      "evidence": "SKU registrado en ERP",
      "status": "Activo"
    },
    {
      "code": "IT-ADM-03-01",
      "name": "Instrucción para la Reclutamiento, Selección e Inducción",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para procedimiento de reclutamiento, selección e inducción.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-ADM-03",
      "pdfUrl": "#"
    },
    {
      "code": "IT-ADM-05-01",
      "name": "Instrucción para la Licencias y Permisos",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para administración de licencias y permisos.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-ADM-05",
      "pdfUrl": "#"
    },
    {
      "code": "IT-ADM-06-01",
      "name": "Instrucción para la Gestión de Correspondencia",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para gestión de correspondencia.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-ADM-06",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-01-01",
      "name": "Instrucción para la Registros Contables General",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para registros contables general.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-01",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-02-01",
      "name": "Instrucción para la Registro de Ingresos",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para registro de ingresos.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-02",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-03-01",
      "name": "Instrucción para la Registro de Egresos",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para registro de egresos.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-03",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-04-01",
      "name": "Instrucción para la Registro de Compras y Ventas",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para registro de compras y ventas.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-04",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-05-01",
      "name": "Instrucción para la Registro de Depreciaciones y Amortizaciones",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para registro de depreciaciones y amortizaciones.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-05",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-06-01",
      "name": "Instrucción para la Contabilización de Provisiones",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para contabilización de provisiones.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-06",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-07-01",
      "name": "Instrucción para la y Conciliaciones General",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para control y conciliaciones general.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-07",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-08-01",
      "name": "Instrucción para la Conciliaciones Bancarias",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para conciliaciones bancarias.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-08",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-09-01",
      "name": "Instrucción para la Conciliación de Cuentas por Cobrar",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para conciliación de cuentas por cobrar.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-09",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-10-01",
      "name": "Instrucción para la Conciliación de Cuentas por Pagar",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para conciliación de cuentas por pagar.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-10",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-11-01",
      "name": "Instrucción para la Revisión de Auxiliares Contables",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para revisión de auxiliares contables.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-11",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-12-01",
      "name": "Instrucción para la Ajustes Contables",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para ajustes contables.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-12",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-13-01",
      "name": "Instrucción para la Cierre Contable General",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para cierre contable general.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-13",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-14-01",
      "name": "Instrucción para la Cierre Mensual",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para cierre mensual.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-14",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-15-01",
      "name": "Instrucción para la Validación de Saldos",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para validación de saldos.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-15",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-16-01",
      "name": "Instrucción para la Elaboración de Estados Financieros",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para elaboración de estados financieros.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-16",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-17-01",
      "name": "Instrucción para la Estado de Situación Financiera (Balance General)",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para estado de situación financiera (balance general).",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-17",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-18-01",
      "name": "Instrucción para la Estado de Resultados (Pérdidas y Ganancias)",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para estado de resultados (pérdidas y ganancias).",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-18",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-19-01",
      "name": "Instrucción para la Estado de Flujo de Efectivo",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para estado de flujo de efectivo.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-19",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-20-01",
      "name": "Instrucción para la Estado de Cambios en el Patrimonio",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para estado de cambios en el patrimonio.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-20",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-21-01",
      "name": "Instrucción para la Notas a los Estados Financieros",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para notas a los estados financieros.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-21",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-22-01",
      "name": "Instrucción para la Cumplimiento Fiscal General",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para cumplimiento fiscal general.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-22",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-23-01",
      "name": "Instrucción para la Declaraciones Tributarias",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para declaraciones tributarias.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-23",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-24-01",
      "name": "Instrucción para la Cálculo de Impuestos",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para cálculo de impuestos.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-24",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-25-01",
      "name": "Instrucción para la Atención a Auditorías Internas y Externas",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para atención a auditorías internas y externas.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-25",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-26-01",
      "name": "Instrucción para la Cumplimiento de Normas Contables y Tributarias",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para cumplimiento de normas contables y tributarias.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-26",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-27-01",
      "name": "Instrucción para la Archivo y Custodia de Documentación Contable",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para archivo y custodia de documentación contable.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-27",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-28-01",
      "name": "Instrucción para la Análisis Financiero General",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para análisis financiero general.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-28",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-29-01",
      "name": "Instrucción para la Análisis de Rentabilidad",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para análisis de rentabilidad.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-29",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-30-01",
      "name": "Instrucción para la Análisis de Liquidez",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para análisis de liquidez.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-30",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-31-01",
      "name": "Instrucción para la Análisis de Endeudamiento",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para análisis de endeudamiento.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-31",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-32-01",
      "name": "Instrucción para la Indicadores Financieros (KPIs)",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para indicadores financieros (kpis).",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-32",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CNT-33-01",
      "name": "Instrucción para la Presentación de Resultados a la Dirección",
      "checklist": [
        "Verificar soportes, comprobantes y autorizaciones previas para presentación de resultados a la dirección.",
        "Digitar e ingresar los movimientos y registros correspondientes en el ERP / Módulo Contable.",
        "Ejecutar la doble conciliación y cuadre de saldos al cierre de la jornada.",
        "Resguardar las firmas de conformidad y archivar el registro en formato digital auditable."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CNT-33",
      "pdfUrl": "#"
    },
    {
      "code": "IT-CXC-01-01",
      "name": "Instrucción para la Créditos y Cobros",
      "checklist": [
        "Verificar los requisitos operativos de control para administración de créditos y cobros.",
        "Ejecutar las actividades del estándar operativo de acuerdo al manual de calidad del área.",
        "Registrar las desviaciones o incidencias en la bitácora de control diario.",
        "Validar y archivar las firmas digitales correspondientes en el repositorio oficial."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-CXC-01",
      "pdfUrl": "#"
    },
    {
      "code": "IT-GOB-01-01",
      "name": "Instrucción para la Reuniones de Rendición de Cuentas Gerencial",
      "checklist": [
        "Verificar los requisitos operativos de control para reuniones de rendición de cuentas gerencial.",
        "Ejecutar las actividades del estándar operativo de acuerdo al manual de calidad del área.",
        "Registrar las desviaciones o incidencias en la bitácora de control diario.",
        "Validar y archivar las firmas digitales correspondientes en el repositorio oficial."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-GOB-01",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-01-01",
      "name": "Instrucción para la Políticas de Compra",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-01",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-02-01",
      "name": "Instrucción para la Matriz de Disponibilidad",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-02",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-04-01",
      "name": "Instrucción para la Conocer la Calidad de Servicios de Proveedores",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-04",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-05-01",
      "name": "Instrucción para la Líder del Comité de la Demanda",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-05",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-06-01",
      "name": "Instrucción para la Administrar Nivel de Inventario: Sugeridos",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-06",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-07-01",
      "name": "Instrucción para la Capacidad de Compra",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-07",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-08-01",
      "name": "Instrucción para la Leadtimes",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-08",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-09-01",
      "name": "Instrucción para la Costos de Pedidos",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-09",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-10-01",
      "name": "Instrucción para la Pedidos Hechos",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-10",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-11-01",
      "name": "Instrucción para la Pedidos Perfectos por los Proveedores",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-11",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-17-01",
      "name": "Instrucción para la CD - Control de Distribución a Sucursales",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-17",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-19-01",
      "name": "Instrucción para la Capital de Trabajo",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-19",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-20-01",
      "name": "Instrucción para la Negociación y Gestión de Descuentos",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-20",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-21-01",
      "name": "Instrucción para la Gestión de Bonificaciones Comerciales",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-21",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-22-01",
      "name": "Instrucción para la Negociación de Beneficios Financieros",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-22",
      "pdfUrl": "#"
    },
    {
      "code": "IT-LOG-23-01",
      "name": "Instrucción para la Planificación Estratégica y Presupuestos",
      "checklist": [
        "Consultar la matriz de prioridades y verificar la disponibilidad física en el sistema de almacenes.",
        "Registrar la solicitud de abastecimiento o compra en el ERP SIDE.",
        "Confirmar el leadtime y acordar la entrega con el proveedor o sucursal correspondiente.",
        "Validar la recepción física del pedido contra factura y registrar la entrada en inventario."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-LOG-23",
      "pdfUrl": "#"
    },
    {
      "code": "IT-TES-01-01",
      "name": "Instrucción para la Flujo de Efectivo",
      "checklist": [
        "Verificar los requisitos operativos de control para administración de flujo de efectivo.",
        "Ejecutar las actividades del estándar operativo de acuerdo al manual de calidad del área.",
        "Registrar las desviaciones o incidencias en la bitácora de control diario.",
        "Validar y archivar las firmas digitales correspondientes en el repositorio oficial."
      ],
      "videoUrl": "#",
      "images": [],
      "poeCode": "POE-TES-01",
      "pdfUrl": "#"
    },
    {
      "code": "IT-COM-01-01",
      "name": "INFORME DE TENDENCIAS Y COMPORTAMIENTO DEL SHOPPER.",
      "poeCode": "POE-COM-01",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Ejemplo de Decisión Operativa derivada de la Matriz:",
        "Si la matriz revela que un competidor directo en la misma zona geográfica redujo los precios de la canasta básica un 5% (moviéndose hacia la izquierda en la matriz), el equipo de Pricing del supermercado puede reaccionar bajando los precios de sus productos \"gancho\" (leche, huevo, pan) para evitar que el cliente perciba a la tienda como una opción costosa.",
        "Estudio de Tendencias Extrapoladas: Revisión de reportes globales de consumo (ej. Nielsen, Kantar) adaptados al contexto local.",
        "Análisis de impacto comercial: Evaluar cómo estas tendencias afectan a categorías clave, al ticket promedio y al volumen de tráfico en las sucursales.",
        "Identificación de patrones y tendencias: Categorizar los hallazgos en cambios de conducta (ej. migración a marcas privadas, búsqueda de conveniencia, preferencia por empaques sostenibles o hábitos omnicanal)."
      ],
      "examples": [
        "Tendencia Detectada en el Informe: Aumento en la compra de Conveniencia y Ready-to-Eat\nAnálisis del Comportamiento del Shopper: El shopper dispone de menos tiempo para cocinar entre semana y busca soluciones de comida lista para consumir.\nAcción Operativa / Estratégica Implementada: Crear la sección \"Comidas Rápidas\" cerca de la entrada de la tienda con productos empaquetados para microondas y cubiertos desechables.:",
        "Tendencia Detectada en el Informe: Sensibilidad al precio e incremento de Marca Propia\nAnálisis del Comportamiento del Shopper: Crecimiento del 25% en la elección de marcas de la tienda en productos básicos para optimizar el presupuesto familiar.\nAcción Operativa / Estratégica Implementada: Ampliar el surtido de la marca propia en abarrotes y colocar señalética de \"Ahorro Comparativo\" en el anaquel frente a marcas de fabricante.:",
        "Tendencia Detectada en el Informe: Preferencia por Cobro Autoservicio (Self-Checkout)\nAnálisis del Comportamiento del Shopper: Shoppers con canastas pequeñas (menos de 5 artículos) evitan filas largas en cajas tradicionales.\nAcción Operativa / Estratégica Implementada: Rediseñar la zona de cierre de venta asignando un módulo de 4 cajas de autoservicio para compras rápidas.:",
        "Tendencia Detectada en el Informe: Adopción de Omnicanalidad (Click & Collect)\nAnálisis del Comportamiento del Shopper: Compradores que arman su lista en la app móvil y pasan a retirar el pedido en el estacionamiento del supermercado.\nAcción Operativa / Estratégica Implementada: Habilitar cajones de parqueo exclusivos para \"Retiro en Tienda\" con un tiempo máximo de entrega de 5 minutos desde la llegada del vehículo.:",
        "--"
      ]
    },
    {
      "code": "IT-COM-02-01",
      "name": "MATRIZ DE POSICIONAMIENTO COMPETITIVO Y PRECIOS.",
      "poeCode": "POE-COM-02",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Selección de Competidores: Identificar competidores directos (ej. Hard Discount vs. Soft Discount).",
        "Muestreo de Productos (KVI - Key Value Items): Seleccionar los 50 o 100 productos que el consumidor usa de referencia para decidir si un supermercado es \"caro\" o \"barato\" (ej. leche, huevo, arroz, aceite).",
        "Store Audits (Auditoría de Tienda): Equipos visitan la competencia o revisan sus plataformas digitales para registrar precios, promociones y nivel de stock.",
        "Cálculo de Índices: Establecer un índice base (100). Si tu índice es 102, eres un 2% más caro que el competidor de referencia.",
        "--"
      ],
      "examples": [
        "Cuadrante 1 de la Matriz: Alto Valor / Bajo Precio (Líder en Valor)\nEstrategia de Precio / Valor: Propuesta de valor muy alta manteniendo precios altamente competitivos.\nEjemplo de Aplicación / Posicionamiento: Un supermercado formato EDLP / Discount que ofrece productos frescos de excelente calidad a precios constantemente bajos.:",
        "Cuadrante 2 de la Matriz: Alto Valor / Alto Precio (Premium / Gourmet)\nEstrategia de Precio / Valor: Énfasis en la experiencia de compra, marcas exclusivas, servicio en mostrador y ambiente cuidado.\nEjemplo de Aplicación / Posicionamiento: Un Supermercado Gourmet con cava de vinos importados y atención personalizada donde el cliente está dispuesto a pagar un margen superior.:",
        "Cuadrante 3 de la Matriz: Bajo Valor / Bajo Precio (Descuento Duro)\nEstrategia de Precio / Valor: Enfoque extremo en eficiencia de costos, ambientación austera y surtido acotado sin servicios adicionales.\nEjemplo de Aplicación / Posicionamiento: Formatos Hard Discount que venden productos exhibidos directamente sobre tarimas o cajas originales para mantener el precio más bajo posible",
        "Cuadrante 4 de la Matriz: Bajo Valor / Alto Precio (Zona de Riesgo)\nEstrategia de Precio / Valor: Precios elevados que no se justifican con la calidad, variedad o servicio ofrecido en la sala.\nEjemplo de Aplicación / Posicionamiento: Una tienda que cobra precios de supermercado premium pero mantiene pasillos desordenados, pocas cajas abiertas y faltantes de stock.:",
        "Ejemplo de Decisión Operativa derivada de la Matriz: \nSi la matriz revela que un competidor directo en la misma zona geográfica redujo los precios de la canasta básica un 5% (moviéndose hacia la izquierda en la matriz), el equipo de Pricing del supermercado puede reaccionar bajando los precios de sus productos \"gancho\" (leche, huevo, pan) para evitar que el cliente perciba a la tienda como una opción costosa."
      ]
    },
    {
      "code": "IT-COM-03-01",
      "name": "PROPUESTA DE ESTRUCTURA DE ÁRBOL DE DECISIÓN DE CATEGORÍA.",
      "poeCode": "POE-COM-03",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Análisis del comportamiento: Se estudia si el cliente busca primero por Marca, por Formato/Tamaño, por Sabor/Variedad o por Necesidad de Salud.",
        "Estructuración de como definir el analisis:",
        "Nivel 1: Cual es la Necesidad Real del cliente:",
        "Nivel 2 Cual es el Segmento de la Necesidad Real",
        "Nivel 3 Que Marca venderemos",
        "Nivel 4 Que tipo de Formato venderemos"
      ],
      "examples": [
        "Estructuración: Crear diagramas de flujo jerárquicos.                                                                                                          Ejemplo de Analisis de Café:",
        "Nivel 1 (Necesidad): ¿Soluble (Instantáneo) o Molido/Grano?",
        "Nivel 2 (Segmento): ¿Regular o Descafeinado?",
        "Nivel 3 (Marca): ¿Marca Líder (Nescafé) o Marca Propia?",
        "Nivel 4 (Formato): ¿Frasco de Vidrio (Rendimiento) o Doypack (Económico)?",
        "Este árbol dictará cómo se acomodará físicamente el café en el estante (primero los solubles agrupados, luego divididos por marcas)."
      ]
    },
    {
      "code": "IT-COM-04-01",
      "name": "DICTAMEN TÉCNICO DE VIABILIDAD DE PRODUCTO (LANZAMIENTO).",
      "poeCode": "POE-COM-04",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Paso 1: Recepción de la Ficha Técnica del Proveedor\nEl proveedor entrega muestras físicas y una ficha técnica detallada (dimensiones del producto, unidades por caja, peso, código EAN, precio de lista de costo, vida de anaquel y propuesta de precio sugerido al público).",
        "Paso 2: Evaluación en Mesa de Control Operativa y Logística\nPrueba del estante: Se mide físicamente el producto y se contrasta con el software de planogramas. ¿Cuántos frentes (facings) ocupará? ¿Es necesario modificar la altura de los entrepaños?\nLogística: Se valida si el empaque secundario (la caja de cartón) es apta para tarimas estándar. Si es un producto refrigerado, se verifica si el proveedor garantiza la temperatura controlada hasta el recibo de la tienda.",
        "Paso 3: Análisis Financiero y de Sensibilidad\nSe calcula el Margen Bruto ($Precio\\ de\\ Venta - Costo$) y el Margen Neto sumando rebates, descuentos por volumen y aportaciones de marketing del proveedor.\nSe analiza el impacto en la categoría: ¿Este producto va a generar ventas nuevas (crecimiento) o solo va a canibalizar la venta de un producto que ya tengo?",
        "Emisión del Fallo: El comité comercial emite la resolución formal: Aprobado, Rechazado o Condicionado (sujeto a correcciones por parte del proveedor)."
      ],
      "examples": [
        "Evaluación / Área: Dictamen Aprobado\nCriterio Analizado:  Bebida vegetal de almendras (Nueva marca)\nResolución: APROBADO. Cumple con margen del 32%, registro sanitario al día, empaque adecuado para góndola y alta demanda estimada en la categoría Healthy. Se autoriza codificación en 15 sucursales.",
        "Evaluación / Área: Dictamen Condicionado \nCriterio Analizado: Sopa instantánea importada\nResolución: CONDICIONADO. El producto tiene buen potencial de venta y margen, pero la etiqueta original no incluye la traducción de ingredientes ni alérgenos en español requerida por ley. Se solicita reetiquetado previo a recepción en CEDI.",
        "Evaluación / Área: Dictamen Rechazado (Calidad / Logística)\nCriterio Analizado: Postre lácteo refrigerado\nResolución: RECHAZADO. La vida útil declarada (10 días) es demasiado corta para la red logística de la cadena y el empaque se deforma fácilmente al apilar más de tres cajas, generando alto riesgo de merma.",
        "Evaluación / Área: Dictamen Rechazado (Comercial)\nCriterio Analizado: Detergente en polvo genérico\nResolución: RECHAZADO. El margen propuesto es bajo (12%), el proveedor no ofrece apoyo publicitario ni descuento por volumen, y la categoría de detergentes ya cuenta con 18 marcas similares con baja rotación."
      ]
    },
    {
      "code": "IT-COM-05-01",
      "name": "INVESTIGACIÓN DE LA EXPERIENCIA EN TIENDA (LAYOUT Y SERVICIO)",
      "poeCode": "POE-COM-05",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Definir el Formato de Tienda y Metraje Cuadrado: \nEl espacio físico disponible (los metros cuadrados de la sala de ventas) limita directamente la cantidad de pasillos. Un hipermercado de 5,000 mts2 puede tener una amplitud enorme (incluyendo electrodomésticos y ropa), mientras que un supermercado express de barrio de 200 mts2 tendrá una amplitud muy reducida, enfocada solo en lo básico.",
        "Identificar los \"Módulos\" o Pasillos Clave: Se determinan las grandes macro-categorías obligatorias para el consumidor (Abarrotes, Limpieza, Perecederos).",
        "Evaluar el Margen vs. Rotación por Categoría: Algunas categorías de alta amplitud se introducen no por su alta venta, sino porque atraen al cliente o dejan mucho margen de ganancia (ej. la categoría de Mascotas o Cuidado del Bebé).",
        "Diseñar el Layout General (Distribución del Espacio): Se asigna cuántos pasillos o góndolas completas se le darán a cada categoría dentro de la sala de ventas."
      ],
      "examples": [
        "Dimensión Evaluada: Diseño de Layout (Zonas Frías)\nHallazgo en la Investigación: La investigación con mapas de calor detectó que el pasillo de higiene personal tenía un 40% menos de tráfico porque estaba bloqueado visualmente por un exhibidor masivo en la entrada.\nAcción Correctora / Implementación: Se reubicó el exhibidor a una cabecera lateral y se instaló señalética aérea iluminada, logrando incrementar el flujo hacia el pasillo en un 25%.",
        "Dimensión Evaluada: Servicio en Cajas (Tiempos de Espera)\nHallazgo en la Investigación: La encuesta de salida reveló que la causa principal de insatisfacción del cliente no era el precio, sino los tiempos de espera superiores a 7 minutos en la fila de cajas durante horas pico.\nAcción Correctora / Implementación: Se rediseñó el flujo de la zona de cobro agregando la figura del \"Anfitrión de Filas\" para derivar clientes a cajas desocupadas e implementar módulos de Self-Checkout.",
        "Dimensión Evaluada: Atención en Mostrador (Mystery Shopper)\nHallazgo en la Investigación: Auditorías de cliente incógnito revelaron que en el mostrador de carnicería los tiempos de atención eran lentos por falta de visibilidad de precios y cortes preempaquetados.\nAcción Correctora / Implementación: Se habilitó una vitrina de autoservicio para cortes de alta rotación al lado del mostrador, liberando la fila del personal para pedidos personalizados.",
        "Dimensión Evaluada: Ergonomía y Accesibilidad\nHallazgo en la Investigación: La observación directa mostró que los clientes adultos mayores tenían dificultad para alcanzar los productos ubicados en el último tramo superior de las góndolas de abarrotes.\nAcción Correctora / Implementación: Se reorganizó el planograma ubicando las marcas de mayor rotación a la altura de los ojos y de las manos (entre 0.80m y 1.50m de altura)."
      ]
    },
    {
      "code": "IT-COM-06-01",
      "name": "DEFINE EL MODELO O FORMATO DE NEGOCIO BAJO EL CUAL SE VA A COMPETIR Y EL PERFIL DEL CLEINTE AL QUE SE DIRIGE: \nHard Discount (Descuento Duro)\nSoft Discount (Descuento Suave)\nSupermercado Tradicional (High-Low / Hi-Lo)\nDLP / EDLP (Precios Bajos Todos los Días)",
      "poeCode": "POE-COM-06",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Hard Discount (Descuento Duro): Se desarrolla reduciendo al máximo los costos operativos. Ofrece locales pequeños/medianos, decoración espartana (exhibición sobre tarimas/cajas originales), un surtido muy acotado (pocas referencias) enfocado prioritariamente en marcas propias (marcas privadas) y muy bajo personal en sala.",
        "Soft Discount (Descuento Suave): Es un punto medio más flexible. Combina el control de costos con un ambiente de tienda más pulido. Mantiene una alta presencia de marcas propias pero agrega un porcentaje relevante de marcas comerciales líderes y secciones de productos frescos mejor estructuradas.",
        "Supermercado Tradicional (High-Low / Hi-Lo): Se basa en la estrategia de \"precios altos y bajos\". Mantiene precios de lista normales o ligeramente elevados (High) durante la mayor parte del tiempo, pero aplica descuentos profundos, folletos semanales y promociones agresivas (Low) como el 2x1, segundo al 50% o \"días de plaza\" para atraer flujo masivo de clientes.",
        "DLP / EDLP (Everyday Low Price / Precios Bajos Todos los Días): Consiste en ofrecer un precio constantemente bajo y estable en todo el catálogo durante todo el año, eliminando casi por completo las promociones temporales, ofertas relámpago o folletos de descuento. Requiere una negociación a gran escala con proveedores y una logística altamente eficiente."
      ],
      "examples": [
        "Modelo de Negocio: 2.1.1.1. Hard DiscountCaracterísticas Clave: Surtido limitado (~1,000 SKUs), +80% marca propia, exhibición en cajas, personal multifuncional.Estrategia de Precios: Precios ultra bajos fijos, sin inversión en publicidad ni folletos.",
        "Modelo de Negocio: 2.1.1.2. Soft DiscountCaracterísticas Clave: Tiendas más amplias, mezcla de marca propia (50-60%) con marcas de fabricante reconocidas.Estrategia de Precios: Precios muy competitivos con algunas promociones puntuales.",
        "Modelo de Negocio: 2.1.1.3. Tradicional (High-Low)Características Clave: Gran surtido (+10,000 SKUs), marcas líderes, excelente ambientación, servicio en barra (carnicería/panadería).Estrategia de Precios: Fluctución constante: ofertas agresivas de fin de semana para generar tráfico y margen en productos sin oferta.",
        "Modelo de Negocio: 2.1.1.4. DLP / EDLPCaracterísticas Clave: Grandes volúmenes de venta, alta rotación, negociación de costos bajos con fabricantes por estabilidad.Estrategia de Precios: Precio bajo permanente sin sobresaltos. El cliente confía en que no necesita esperar una oferta para comprar."
      ]
    },
    {
      "code": "IT-COM-07-01",
      "name": "DEFINE LAS DISTINTAS CATEGORIAS DE PRODUCTOS SEGÚN EL ROL ESTRATEGICO DENTRO DEL MODELO DE NEGOCIO DEFINIDO:",
      "poeCode": "POE-COM-07",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Alineación de categorias de producto con el modelo de negocio y la Estrategia de exhibición y pricing: Ajustar la profundidad del surtido y los precios según el formato (por ejemplo, en un Hard Discount la categoría destino será más acotada y centrada en marca propia que en un Supermercado Tradicional).",
        "1 Categorías Producto: Atraccion o Destino (Destination)",
        "2 Categorías de Producto: de Rutina o habituales (Routine)",
        "3 Categorías de Producto: Impulso / Estacionales"
      ],
      "examples": [
        "Categoría por Rol: Categoría Destino (Destination)\n¿Qué es y cuál es su objetivo?: Define la identidad del supermercado. Es la razón principal por la que el cliente elige esa tienda y no a la competencia.\nEstrategia de Precio / Margen: Precio muy competitivo / Margen bajo a medio.\nEjemplo Práctico: La sección de Panadería Artesanal o la carne fresca en un supermercado tradicional; o la Fruta y Verdura de oferta en un Soft Discount.Ejemplo Práctico en Supermercado",
        "Categoría por Rol: Categoría Habitual / Rutina (Routine)\n¿Qué es y cuál es su objetivo?: Cubre las necesidades diarias de compra del hogar. Representa el mayor volumen de ventas de la tienda.\nEstrategia de Precio / Margen: Precio alineado con el mercado / Margen medio.\nEjemplo Práctico: Abarrotes básicos como arroz, frijoles, aceite, leche, detergentes y papel higiénico.Ejemplo Práctico en Supermercado",
        "Categoría por Rol: Categoría Ocasional / Estacional (Seasonal)\n¿Qué es y cuál es su objetivo?: Aprovecha momentos específicos del año o festividades para generar picos de facturación y dinamismo.\nEstrategia de Precio / Margen: Precio flexible / Margen medio a alto según la oportunidad.\nEjemplo Práctico: Útiles escolares en Temporada Escolar, chocolates y flores en San Valentín, o pavo y adornEjemplo Prácticoos en Navidad.Ejemplo Práctico en Supermercado",
        "Categoría por Rol: Categoría de Conveniencia (Convenience)\n¿Qué es y cuál es su objetivo?: Satisface necesidades no planificadas o de último minuto. Aporta comodidad al cliente en un solo lugar.\nEstrategia de Precio / Margen:\nSensibilidad al precio baja / Margen alto.\nEjemplo Práctico: Pilas, revistas, artículos de papelería rápida, adaptadores \neléctricos o comida lita para llevar (Ready-to-eat)"
      ]
    },
    {
      "code": "IT-COM-07-02",
      "name": "DEFINE LA EXPERIENCIA DEL CLIENTE EN SALA DE VENTAS ATRAVES DEL DISEÑO Y AUDITORIA DE LAS SENSACIONES, PERCEPCIONES Y FACILIDADES QUE VIVE EL CONSUMIDOR MIENTRAS RECORRE LA SUCURSAL",
      "poeCode": "POE-COM-07",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Diseño de Sensaciones (Marketing Sensorial):",
        "Vista: Iluminación enfocada (cálida en panadería/carnes, blanca limpia en abarrotes) y paleta de colores estratégica.",
        "Oído: Música ambiental con ritmo adecuado al flujo de la hora (ritmo lento en horas valle para prolongar la estancia, ritmo más ágil en horas pico).",
        "Olfato: Aromas estratégicos (mkt olfativo) como pan recién horneado cerca de la entrada para despertar el apetito y generar sensación de frescura.",
        "Diseño de Percepciones (Valor y Transparencia):",
        "Señalética de precios clara y visible para evitar sorpresas desagradables al pagar.",
        "Percepción de orden, limpieza, frescura y abastecimiento lleno (efecto de abundancia en góndolas).",
        "Pasillos anchos, sin obstáculos (cajas, tarimas) y con un flujo lógico de categorías.",
        "Diseño de Facilidades y Flujo (Layout y Ergononomía):",
        "Disponibilidad de carritos y cestas limpias en excelente estado funcional.",
        "Módulos de autoconsulta de precios e indicadores claros de secciones.",
        "Auditoría Continuada (Evaluación y Control):",
        "Evaluaciones mediante Clientela Incógnita (Mystery Shopper) y listas de chequeo operativas por turno para auditar olores, iluminación, ruido, temperatura y limpieza."
      ],
      "examples": [
        "Elemento Gestionado: Aroma y Apetito\nDimensión Evaluada: Sensación (Olfato)\nEjemplo de Aplicación Operativa: Ubicar la sección de panadería con hornos a la vista cerca de los accesos principales para que el olor a pan caliente condicione positivamente el estado de ánimo y active la compra.:",
        "Elemento Gestionado: Iluminación de Producto\nDimensión Evaluada: Sensación (Vista)\nEjemplo de Aplicación Operativa: Usar focos con espectro de luz roja suave sobre los mostradores de carne para resaltar su frescura natural, o luz blanca brillante en el área de cosméticos e higiene.:",
        "Elemento Gestionado: Navegabilidad y Confort\nDimensión Evaluada: Facilidades (Layout)\nEjemplo de Aplicación Operativa: Colocar pasillos principales de al menos 2.5 metros de ancho para evitar colisiones entre carritos durante horas pico y mantener señalización aérea visible desde cualquier ángulo.:",
        "Elemento Gestionado: Auditoría de Experiencia\nDimensión Evaluada: Auditoría y Control\nEjemplo de Aplicación Operativa: Aplicar una lista de verificación horaria donde el jefe de tienda revisa la temperatura del aire acondicionado, el volumen de la música ambiental y la ausencia de cajas vacías en el pasillo central.:",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--"
      ]
    },
    {
      "code": "IT-COM-07-03",
      "name": "DEFINE EL PORTAFOLIO Y TIPO DE MARCAS QUE SE VAN A EXHIBIR AL PUBLICO PARA EQUILIBRAR LA RENTABILIDAD Y LA VARIEDAD",
      "poeCode": "POE-COM-07",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "2.2.3.1.1 Marcas Líderes (o de Fabricante) \nEjem. En la categoría de refrescos de cola: Coca-Cola. En la categoría de pañales: Pampers.",
        "2.2.3.1.2 Marcas Blancas (o Propias del Super)\nEjem. La marca Great Value (de Walmart), Hacendado (de Mercadona) o Kirkland Signature (de Costco).",
        "2.2.3.1.3 Marcas Secundarias o Regionales\nEjem. La marca Great Value (de Walmart), Hacendado (de Mercadona) o Kirkland Signature (de Costco).",
        "--"
      ],
      "examples": [
        "Tipo de Marca: Marcas Líderes (Comerciales / Premium)\nDescripción en Góndola: Reconocimiento masivo, alta demanda, gran inversión publicitaria.\nFunción Estratégica: Generan tráfico de clientes al supermercado (volumen). Margen unitario más bajo.\nEjemplo: Coca-Cola, Colgate, Nestlé, Pampers.",
        "Tipo de Marca: Marcas Propias (White Label / Private Label)\nDescripción en Góndola: Marcas pertenecientes a la misma cadena de supermercado.\nFunción Estratégica: Aportan el mayor margen de rentabilidad y fidelizan al cliente.\nEjemplo: Great Value (Walmart), Member's Selection (PriceSmart), Carrefour Discount.",
        "Tipo de Marca: Marcas Secundarias (B-Brands / Valor)\nDescripción en Góndola: Alternativas de menor precio respecto a la marca líder.\nFunción Estratégica: Capturan al consumidor sensible al precio sin sacrificar calidad básica.\nEjemplo: marcas regionales o locales de pastas, detergentes o refrescos.",
        "Tipo de Marca: Marcas De Nicho / Especializadas\nDescripción en Góndola: Productos orgánicos, veganos, importados o artesanales.\nFunción Estratégica: Aumentan la variedad percibida, atraen segmentos de alto poder adquisitivo y ofrecen márgenes elevados.\nEjemplo: Leches de almendra especializadas, chocolates finos importados, productos sin gluten."
      ]
    },
    {
      "code": "IT-COM-07-04",
      "name": "DEFINE QUE SURTIDO DE MARCAS (ANCHO, LARGO, Y PROFUNDIDAD DE PRODUCTOS ) SE COLOCARAN EN LOS ANAQUELES EN SALA DE VENTAS",
      "poeCode": "POE-COM-07",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "1. Analizar el espacio disponible (Lineal): Determinar cuántos metros de estantería se le asignarán a cada categoría de producto.",
        "2. Amplitud (Cuántas categorías de productos)",
        "3. Establecer el árbol de decisión del cliente: Entender cómo compra el consumidor (¿Busca primero la marca, el precio o el sabor/tamaño?).",
        "4.  Alineación con el Posicionamiento y Formato de Tienda",
        "5. Análisis de Elasticidad del Espacio y Transferibilidad de la Compra. Asignar porcentajes de presencia (Share of Shelf): Decidir qué porcentaje del estante ocupará la marca líder, la marca propia y las secundarias.",
        "6. Segmentación del Perfil Demográfico de la Tienda (Clusterización)",
        "7. Evaluación de la Complejidad Operativa",
        "8. Regla de oro del Merchandising: Las marcas líderes se colocan a la altura de los ojos y de las manos para generar ventas rápidas, las marcas blancas a los lados o abajo para competir por precio, y las secundarias en las zonas restantes.",
        "Paso 1: Selección del Surtido de Marcas",
        "Para no saturar la góndola de marcas desconocidas que no se venden, defines un surtido eficiente con tres niveles:",
        "Marca Líder (Premium / Tráfico): Nescafé / Juan Valdez -> El cliente entra al pasillo buscándolas. Garantizan que el cliente confíe en el supermercado.",
        "Marca Secundaria (Competencia): Nescafé Gold / Café local reconocido (ej. Café Continental) -> Para el cliente que busca una alternativa tradicional o un gusto intermedio.",
        "Marca Propia (Rentabilidad / Precio): Marca del Supermercado (ej. Great Value, Selección, etc.) -> Enfocada en el consumidor que busca ahorrar, dándole una opción económica pero de buena calidad.",
        "Paso 2: Distribución en la Góndola de la Sala de Ventas",
        "El surtido definido se acomoda vertical y horizontalmente siguiendo las reglas de Merchandising del supermercado:",
        "Nivel de los Ojos (Zona Caliente - 1.20m a 1.60m de altura): Aquí colocas las variedades más rentables de la Marca Líder (frascos medianos y grandes) y las innovaciones. Es lo primero que el cliente ve y agarra por impulso.",
        "Nivel de las Manos (Zona de Comparación - 0.80m a 1.20m de altura): Colocas la Marca Propia del supermercado justo al lado de las marcas líderes. Al estar a la altura de las manos y mostrar un precio notablemente más bajo, el cliente compara inmediatamente y se tienta a probar la marca de la casa.",
        "Nivel de los Pies / Suelo (Zona Fría): Colocas las presentaciones industriales, los empaques económicos gigantes (repuestos económicos en bolsa) o los cafés de \"primer precio\" (los más baratos). El cliente que busca precio no le importa agacharse para buscar el ahorro.",
        "Nivel del Techo / Superior: Cajas cerradas de stock o productos de bajísima rotación.",
        "Paso 3: Control del Surtido",
        "Si notas que una cuarta marca que tenías en exhibición no se vende (baja rotación) y solo está acumulando polvo, la eliminas del surtido (racionalización del surtido) y le otorgas esos centímetros de estante a la Marca Propia o a la Marca Líder para evitar quiebres de stock (góndolas vacías).",
        "Resultado en la Sala de Ventas: La góndola luce ordenada, el cliente encuentra rápidamente lo que busca según su bolsillo, y el supermercado asegura la venta masiva de la marca líder junto a la alta rentabilidad de su propia marca."
      ],
      "examples": [
        "Imagina que estás dimensionando el surtido para el Pasillo de Cuidado Personal en un supermercado de formato mediano-grande.",
        "1. Aplicando la \"Anchura\" (¿Cuántas subcategorías abrimos?)",
        "Decides que para cubrir la necesidad de \"Cuidado del Cabello\", la góndola debe tener una anchura de 4 subcategorías distintas:\nShampoos.\nAcondicionadores.\nCremas para peinar.",
        "2. Aplicando la \"Profundidad\" (¿Qué tanta variedad metemos en Shampoos?)",
        "Ahora te enfocas solo en la subcategoría de Shampoos y defines su profundidad analizando las necesidades del cliente (tipo de cabello) y los niveles de precio:",
        "Por tipo de necesidad (Segmentos):\nCabello Seco / Dañado (3 marcas líderes).\nAnticaspa (2 marcas especializadas).\nControl Caída (2 marcas).\nCuidado del Color / Tinturados (1 marca).",
        "Por formato/tamaño (Presentaciones):\nFormato Familiar (Envase de 1 Litro para ahorro).\nFormatos Regular (Envase de 400ml para consumo diario).\nFormato Viaje o Sachets (Para compras de bajo desembolso).",
        "El resultado de la Profundidad: Dentro de la subcategoría \"Shampoos\", terminas teniendo 45 SKUs (referencias individuales) diferentes entre marcas líderes, secundarias y marca propia, distribuidos en los diferentes tipos de cabello y tamaños.",
        "3. Evaluando la \"Longitud\" y el Impacto en Góndola",
        "Al final, si sumas los 45 SKUs de Shampoo, los 25 de Acondicionadores, los 15 de Tratamientos y los 15 de Cremas para peinar, la Longitud total de tu módulo de Cuidado del Cabello es de 100 productos diferentes.",
        "Decisión en la Sala de Ventas: Si notas que el espacio físico en los estantes está muy apretado y los empleados tardan mucho en reponer la góndola, aplicas una reducción de profundidad. Eliminas los tamaños de 1 Litro de las marcas secundarias que menos se venden.",
        "Con esto, reduces la profundidad de Shampoos de 45 a 40 SKUs. La góndola respira, visualmente es más limpia para el cliente y el supermercado optimiza su inventario.",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--"
      ]
    },
    {
      "code": "IT-COM-07-05",
      "name": "LOS NIVELES DEL SURTIDO",
      "poeCode": "POE-COM-07",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Marcas Líderes (o de Fabricante): Atrae tráfico y da prestigio.\nEjem. En la categoría de refrescos de cola: Coca-Cola. En la categoría de pañales: Pampers.",
        "Marcas Blancas (o Propias del Super): Genera margen de ganancia y fidelidad\nEjem. La marca Great Value (de Walmart)",
        "Marcas Secundarias o Regionales: Genera margen de ganancia y fidelidad\nEjem. Una marca de café artesanal cultivado en la provincia/estado cercana, o una marca como Salva Cola (marca secundaria en refrescos).",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--"
      ],
      "examples": [
        "Ejemplo Práctico Integrado: Categoría \"Café Molido\" en la Sala de Ventas",
        "Para la categoría de Café Molido (con un espacio asignado de 4 metros lineales de góndola), el surtido se estructurará bajo una estrategia de tres niveles para atender tanto al consumidor premium como al cazador de ofertas.",
        "Nivel del Estante                           //           Tipo de Marca                                                  //              Propósito Comercial",
        "Superior (Ojos/Manos)              //           Marcas Líderes (Nescafé / Juan Valdez)       //          Atraer al cliente y asegurar volumen de venta.",
        "Medio (Contiguo a Líder)          //              Marca Blanca (EcoSabor)                                //       Ofrecer ahorro al cliente y ganar más rentabilidad.",
        "Inferior (Suelo)                             //          Marcas Secundarias / Combate (Café Económico)   //   Atender al cliente enfocado estrictamente en precio bajo.",
        "Paso 1: Selección del Surtido de Marcas",
        "Para no saturar la góndola de marcas desconocidas que no se venden, defines un surtido eficiente con tres niveles:",
        "Marca Líder (Premium / Tráfico): Nescafé / Juan Valdez -> El cliente entra al pasillo buscándolas. Garantizan que el cliente confíe en el supermercado.",
        "Marca Secundaria (Competencia): Nescafé Gold / Café local reconocido (ej. Café Continental) -> Para el cliente que busca una alternativa tradicional o un gusto intermedio.",
        "Marca Propia (Rentabilidad / Precio): Marca del Supermercado (ej. Great Value, Selección, etc.) -> Enfocada en el consumidor que busca ahorrar, dándole una opción económica pero de buena calidad.",
        "Paso 2: Distribución en la Góndola de la Sala de Ventas",
        "El surtido definido se acomoda vertical y horizontalmente siguiendo las reglas de Merchandising del supermercado:",
        "Nivel de los Ojos (Zona Caliente - 1.20m a 1.60m de altura): Aquí colocas las variedades más rentables de la Marca Líder (frascos medianos y grandes) y las innovaciones. Es lo primero que el cliente ve y agarra por impulso.",
        "Nivel de las Manos (Zona de Comparación - 0.80m a 1.20m de altura): Colocas la Marca Propia del supermercado justo al lado de las marcas líderes. Al estar a la altura de las manos y mostrar un precio notablemente más bajo, el cliente compara inmediatamente y se tienta a probar la marca de la casa.",
        "Nivel de los Pies / Suelo (Zona Fría): Colocas las presentaciones industriales, los empaques económicos gigantes (repuestos económicos en bolsa) o los cafés de \"primer precio\" (los más baratos). El cliente que busca precio no le importa agacharse para buscar el ahorro.",
        "Nivel del Techo / Superior: Cajas cerradas de stock o productos de bajísima rotación.",
        "Paso 3: Control del Surtido",
        "Si notas que una cuarta marca que tenías en exhibición no se vende (baja rotación) y solo está acumulando polvo, la eliminas del surtido (racionalización del surtido) y le otorgas esos centímetros de estante a la Marca Propia o a la Marca Líder para evitar quiebres de stock (góndolas vacías).",
        "Resultado en la Sala de Ventas: La góndola luce ordenada, el cliente encuentra rápidamente lo que busca según su bolsillo, y el supermercado asegura la venta masiva de la marca líder junto a la alta rentabilidad de su propia marca."
      ]
    },
    {
      "code": "IT-COM-07-06",
      "name": "PROFUNDIDAD (CUÁNTAS MARCAS, VARIANTES, TAMAÑOS O SABORES DIFERENTES HAY DENTRO DE UNA MISMA CATEGORÍA)",
      "poeCode": "POE-COM-07",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "2.2.5.1.1 Variedad de Marcas",
        "2.2.5.1.2  Variedad de Formatos y Tamaños",
        "2.2.5.1.3 Variedad de Sabores, Tipos o Fórmulas"
      ],
      "examples": [
        "Nivel de Profundidad: Categoría con Alta Profundidad\nCaracterísticas: Gran variedad de marcas, sabores, tamaños y formatos funcionales.\nFunción en el Supermercado: Captura a todos los tipos de consumidor y maximiza la satisfacción en categorías clave o de alta competencia.\nEjemplo-Lácteos y Leches: Entera, descremada, deslactosada, de almendra, soya, avena, en presentación de 1L, 2L, galón, en polvo y sabores (fresa, chocolate).",
        "Nivel de Profundidad: Categoría con Profundidad Media\nCaracterísticas: Variedad suficiente para cubrir la demanda general sin saturar el espacio.\nFunción en el Supermercado: Optimiza el espacio de góndola manteniendo un equilibrio rentable entre volumen y costos de inventario.\nEjemplo-Pastas Secas: Espagueti, penne, tornillo; en empaques de 200g, 400g y 1kg; de 2 o 3 marcas principales.",
        "Nivel de Profundidad: Categoría con Baja Profundidad\nCaracterísticas: Pocas marcas o tamaños básicos (1 o 2 opciones por variante).\nFunción en el Supermercado: Satisface una necesidad puntual sin destinar demasiado capital de trabajo o espacio a productos de baja demanda.\nEjemplo-Sal de Mesa: Sal fina (1 kg), sal marina fina (500g) y sal parrillera (1 kg) de una sola marca líder."
      ]
    },
    {
      "code": "IT-COM-07-07",
      "name": "ALINEACIÓN CON EL POSICIONAMIENTO Y FORMATO (MODELO) DE TIENDA",
      "poeCode": "POE-COM-07",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Para lograr esta alineación en la sala de ventas, la gerencia de operaciones y los administradores de categoría ejecutan los siguientes pasos:",
        "1. Identificar las Reglas del Formato: Determinar el metraje cuadrado de la sala de ventas, el tiempo promedio de permanencia del cliente y la capacidad de almacenamiento de la sucursal.",
        "2. Definir los Pilares del Posicionamiento: Clarificar cuál es la ventaja competitiva que se quiere proyectar en esa tienda: ¿Ahorro extremo, frescura premium, conveniencia/rapidez, o exclusividad de productos importados?",
        "3. Cruzar Formato y Posicionamiento para Filtrar el Surtido: Filtrar el catálogo maestro de productos. Se seleccionan las marcas y presentaciones que encajen estrictamente en la matriz. Las que rompan la coherencia (por ejemplo, productos extremadamente caros en un formato de descuento masivo) quedan fuera.",
        "4. Asignar el Espacio Comercial y el Laydown: Adaptar el mobiliario. Si el posicionamiento es de \"productos frescos y saludables\", las islas de frutas, verduras y orgánicos deben ocupar la entrada y el centro de la sala de ventas, reduciendo el espacio de los productos industriales."
      ],
      "examples": [
        "Hard Discount (Descuento Duro): Se desarrolla reduciendo al máximo los costos operativos. Ofrece locales pequeños/medianos, decoración espartana (exhibición sobre tarimas/cajas originales), un surtido muy acotado (pocas referencias) enfocado prioritariamente en marcas propias (marcas privadas) y muy bajo personal en sala.",
        "Soft Discount (Descuento Suave): Es un punto medio más flexible. Combina el control de costos con un ambiente de tienda más pulido. Mantiene una alta presencia de marcas propias pero agrega un porcentaje relevante de marcas comerciales líderes y secciones de productos frescos mejor estructuradas.",
        "Supermercado Tradicional (High-Low / Hi-Lo): Se basa en la estrategia de \"precios altos y bajos\". Mantiene precios de lista normales o ligeramente elevados (High) durante la mayor parte del tiempo, pero aplica descuentos profundos, folletos semanales y promociones agresivas (Low) como el 2x1, segundo al 50% o \"días de plaza\" para atraer flujo masivo de clientes.",
        "DLP / EDLP (Everyday Low Price / Precios Bajos Todos los Días): Consiste en ofrecer un precio constantemente bajo y estable en todo el catálogo durante todo el año, eliminando casi por completo las promociones temporales, ofertas relámpago o folletos de descuento. Requiere una negociación a gran escala con proveedores y una logística altamente eficiente.",
        "--"
      ]
    },
    {
      "code": "IT-COM-07-08",
      "name": "DEFINICIÓN Y DELIMITACIÓN DE LA CATEGORÍA",
      "poeCode": "POE-COM-07",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Paso 1: Definición de la Necesidad Central.",
        "Necesidad que cubre: Consumo indulgente inmediato, antojo de sabor salado/crujiente, acompañamiento para reuniones sociales o ver televisión.",
        "Paso 2: Delimitación Estricta (Inclusiones vs. Exclusiones)",
        "Para que el sistema de inventario y la exhibición física sean perfectos, pones las reglas sobre la mesa:",
        "DENTRO de la Categoría (Inclusiones)",
        "Paso 3: Aplicación en la Sala de Ventas",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--"
      ],
      "examples": [
        "Imagina que estás ordenando la sala de ventas de un supermercado y te asignan el pasillo de Snacks Salados. Si no pones límites claros, los reposidores de góndola terminarán mezclando papas fritas con chocolates o frutos secos para cocina",
        "Para evitar el caos, aplicas la delimitación técnica de la categoría:",
        "Paso 1: Definición de la Necesidad Central.",
        "Necesidad que cubre: Consumo indulgente inmediato, antojo de sabor salado/crujiente, acompañamiento para reuniones sociales o ver televisión.No",
        "Nombre de la categoría: Snacks Salados.",
        "Paso 2: Delimitación Estricta (Inclusiones vs. Exclusiones)",
        "Para que el sistema de inventario y la exhibición física sean perfectos, pones las reglas sobre la mesa:",
        "DENTRO de la Categoría (Inclusiones)",
        "Papas fritas en bolsa (tradicionales, con sabores, en tubo). -",
        "Tortillas de maíz y nachos (Doritos, totopos). -",
        "Extruidos y frituras (Chicharrones empacados, palitos de queso). -",
        "Manías/Cacahuates y frutos secos salados/con chile (en empaques individuales o medianos listos para comer). -",
        "Popcorn / Palomitas de maíz listas para comer (en bolsa).",
        "Paso 3: Aplicación en la Sala de Ventas",
        "Con esta delimitación clara:",
        "El sistema informático sabe exactamente que cuando se vende una bolsa de maní salado de 50g, el margen va para la categoría de Snacks, pero si se vende una bolsa de 1kg de almendras sin sal, la ganancia va a Abarrotes. -",
        "El personal de tienda sabe que en esa góndola específica no se pueden colocar las palomitas de microondas, obligando a mantener la limpieza visual del pasillo. -",
        "Resultado Práctico: El cliente que entra al supermercado buscando algo para picar mientras ve un partido encuentra un pasillo 100% enfocado en su antojo actual. No pierde tiempo viendo productos para cocinar, lo que agiliza su decisión y fomenta la compra por impulso."
      ]
    },
    {
      "code": "IT-COM-07-09",
      "name": "ANÁLISIS DE ELASTICIDAD DEL ESPACIO Y TRANSFERIBILIDAD DE LA COMPRA",
      "poeCode": "POE-COM-07",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "1 Elasticidad del Espacio: Mide cómo reacciona la venta de un producto cuando se le modifica el espacio físico en la góndola. - \nProducto Elástico: Si le das más frentes, vende mucho más (ej. productos de compra por impulso). - \nProducto Inelástico: Aunque le dupliques el espacio, va a vender exactamente lo mismo (ej. la sal o el azúcar). - \n2. Transferibilidad de la Compra: Mide la lealtad del cliente hacia una marca específica dentro  el supermercado. Si el producto que el cliente busca está agotado (quiebre de stock): -    \nAlta Transferibilidad: Al cliente no le importa el cambio; \"transfiere\" su compra y se lleva otra marca similar. -         \nBaja Transferibilidad: El cliente es sumamente leal. Si no encuentra su marca, prefiere no comprar nada e irse a otro supermercado a buscarla.",
        "--"
      ],
      "examples": [
        "Caso 1: Papel Higiénico (Baja Elasticidad + Alta Transferibilidad)\nElasticidad: Es un producto inelástico. Si un cliente va por un paquete de papel higiénico, comprará uno. Aunque el supermercado le asigne un pasillo entero y ponga 20 frentes de la misma marca, el cliente no va a comprar 4 paquetes por impulso.\nTransferibilidad: Es altamente transferible. Si el cliente busca su marca habitual de hojas dobles y no la encuentra, no se va a ir a otro supermercado solo por eso; simplemente estira la mano y se lleva la marca de la competencia que tenga características y precio similares.\nDecisión en la Sala de Ventas: Al ser inelástico y transferible, se reduce el espacio asignado por marca al mínimo necesario para que quepa el stock del día. No se desperdician metros lineales duplicando frentes de la misma referencia; ese espacio se libera para categorías más rentables.",
        "Caso 2: Chocolates y Chocolatinas en Barra (Alta Elasticidad + Baja Transferibilidad)\nElasticidad: Es altamente elástico. El chocolate es una compra emocional e impulsiva. Si se colocan solo 2 chocolates escondidos en el estante, casi no se venden. Pero si abres la exhibición a 6 frentes amplios a la altura de los ojos, la venta se dispara inmediatamente porque el cliente \"lo ve y lo antoja\".\nTransferibilidad: Tiene baja transferibilidad. El consumidor de chocolate suele buscar una experiencia de sabor muy específica (ej. un porcentaje de cacao exacto o una marca premium favorita). Si va buscando su marca predilecta y no está, la probabilidad de que decline la compra y decida mejor no llevar ningún dulce es muy alta.\nDecisión en la Sala de Ventas: A esta categoría se le otorgan múltiples frentes de exhibición y una ubicación privilegiada (cerca de las cajas de cobro o en zonas calientes). Al darle más espacio físico, aprovechas su alta elasticidad para inflar el ticket de compra, y al asegurar que las marcas clave estén siempre visibles, evitas perder la venta debido a su baja transferibilidad.\nResultado Práctico: Cruzando estas dos métricas, el supermercado no gasta espacio valioso exhibiendo torres gigantes de productos inelásticos (como el arroz o el papel) y enfoca sus metros lineales de góndola en saturar la vista del cliente con productos elásticos, maximizando la rentabilidad de la sala de ventas."
      ]
    },
    {
      "code": "IT-COM-07-10",
      "name": "EVALUACIÓN DE LA COMPLEJIDAD OPERATIVA",
      "poeCode": "POE-COM-07",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Para evaluar la complejidad operativa de un surtido, los gerentes de operaciones y administradores de categoría analizan cuatro factores clave en la sala de ventas: \n1. Tiempo y Frecuencia de Reposición: ¿Cuántas veces al día debe el personal acomodar este producto en la góndola? Los productos pequeños o de empaques individuales exigen más mano de obra que los que vienen en cajas listas para exhibir (Shelf-Ready Packaging).\n2. Requerimientos de Conservación y Cadena de Frío: Monitorear si el producto exige controles estrictos de temperatura (refrigerados o congelados) o si tiene una fecha de vencimiento muy corta (cero tolerancia a errores en la rotación FIFO / PEPS).\n3. Vulnerabilidad a la Merma y Robo: Evaluar si el artículo es altamente propenso a romperse (envases de vidrio) o si es un \"producto caliente\" para el hurto (cuchillas de afeitar, licores caros), lo que obliga a colocarle alarmas o vitrinas con llave.\n4. Matriz Margen vs. Operación: Cruzar la rentabilidad del producto con su nivel de dificultad operativa para decidir si se mantiene en el surtido, se le cambia la presentación o se reduce su espacio en la sala de ventas.",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--"
      ],
      "examples": [
        "Ejemplo:",
        "La Categoría de \"Yogures y Postres Lácteos\"Imagina que eres el Gerente de Operaciones de una sucursal de supermercado y estás revisando la categoría de Yogures en el pasillo de refrigerados, la cual está generando quejas por parte del personal de tienda debido al tiempo que absorbe.",
        "Aplicas la evaluación de complejidad operativa analizando dos tipos de productos dentro del mismo mueble frío:",
        "Caso A: Yogures Individuales en Vaso de Plástico (Alta Complejidad Operativa)",
        "El Problema: Esta subcategoría incluye vasos de 150 gramos de 6 marcas distintas, con variantes con fruta, sin azúcar, light y de múltiples sabores (fresa, durazno, mora, coco).",
        "Evaluación Operativa:",
        "Mano de obra: Al venir sueltos en cajas de cartón corrugado genéricas, el reposidor debe tomar los vasos uno a uno para alinearlos en la góndola fría.Rotación: Como vencen en menos de 21 días, el empleado debe sacar todos los yogures viejos hacia adelante y meter los nuevos al fondo (sistema FIFO) para evitar que caduquen en el estante.",
        "Resultado: El pasillo consume 2 horas diarias de trabajo de un empleado solo para mantener ordenados los mini-vasos.",
        "Acción Correctiva: El supermercado exige a los proveedores principales cambiar a empaques Shelf-Ready (bandejas plásticas donde vienen 12 yogures listos; solo se retira la tapa y se mete la bandeja completa a la góndola). Además, se racionaliza la profundidad, eliminando los sabores exóticos de baja rotación (ej. yogur sabor guanábana) para reducir el tiempo de acomodo.",
        "Caso B: Yogures en Botella Familiar de 1 Litro (Baja Complejidad Operativa)",
        "La Realidad: Botellas de plástico grandes de los 3 sabores más vendidos (fresa, durazno, natural).",
        "La Realidad: Botellas de plástico grandes de los 3 sabores más vendidos (fresa, durazno, natural).",
        "La Realidad: Botellas de plástico grandes de los 3 sabores más vendidos (fresa, durazno, natural).",
        "Evaluación Operativa:",
        "Mano de obra: Al ser envases grandes y estables, el reposidor los acomoda en segundos. Cuatro botellas llenan un fondo de góndola rápidamente.",
        "Rotación: Tienen mayor estabilidad en el estante y el cliente las identifica al instante, lo que acelera su salida antes de la fecha de vencimiento.",
        "Riesgo: Plástico resistente, por lo que la merma por caídas o roturas accidentales en la sala de ventas es casi cero.",
        "Acción en la Sala de Ventas: Al tener una baja complejidad operativa y alta velocidad de venta, se decide otorgarles más metros lineales en la parte inferior y media del mueble refrigerado, ya que llenarlas toma poco tiempo y garantizan volumen de venta limpio sin estresar la operación de la tienda.",
        "Resultado Práctico: Al evaluar y controlar la complejidad operativa, el supermercado logra que el personal pase menos tiempo ordenando vasos individuales de baja venta y tenga más horas disponibles para atender las cajas de cobro o mantener la limpieza general de la sala de ventas, mejorando la rentabilidad real del negocio."
      ]
    },
    {
      "code": "IT-COM-07-11",
      "name": "DEFINE LOS SERVICIOS ADICIONALES QUE SE TENDRAN: Comodidades y Logística para el Cliente",
      "poeCode": "POE-COM-07",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "2.2.6.1.1 Estacionamiento gratuito o techado: Esencial para compras de gran volumen.",
        "2.2.6.1.2 Entrega a domicilio (Delivery): Ya sea comprando en la tienda física y pidiendo el envío, o mediante reparto de compras online.",
        "2.2.6.1.3 Click & Collect (Recogida en tienda): Comprar por la app o web y solo pasar a retirar el pedido ya listo al supermercado, a veces sin bajarse del auto."
      ],
      "examples": [
        "--",
        "--",
        "--"
      ]
    },
    {
      "code": "IT-COM-07-12",
      "name": "DEFINE LOS SERVICIOS ADICIONALES QUE SE TENDRAN: SERVICIOS FINANCIEROS Y DE PAGO",
      "poeCode": "POE-COM-07",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "2.2.6.2.1 Pago de servicios públicos: Poder pagar la luz, el agua, el internet o los impuestos en las cajas del súper.",
        "2.2.6.2.2 Retiro de efectivo (Cashback): Permitir al cliente retirar dinero en efectivo directamente en la caja al pagar con tarjeta de débito, funcionando como un cajero automático.",
        "2.2.6.2.3 Tarjetas de crédito de la tienda / Financiamiento: Ofrecer opciones de pago a plazos o tarjetas propias con beneficios exclusivos."
      ],
      "examples": [
        "--",
        "--",
        "--"
      ]
    },
    {
      "code": "IT-COM-07-13",
      "name": "DEFINE LOS SERVICIOS ADICIONALES QUE SE TENDRAN: SERVICIOS DENTRO DE LA TIENDA (IN-STORE)",
      "poeCode": "POE-COM-07",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "2.2.6.3.1 Área de comidas preparadas / Cafetería: Espacios para consumir alimentos listos dentro del súper o comprarlos para llevar.",
        "2.2.6.3.2 Secciones especializadas con atención al cliente: Como una carnicería con cortes personalizados, una sección de panadería con horno propio, o un sommelier en la zona de vinos.",
        "2.2.6.3.3 Farmacia o servicios de salud: Presencia de consultorios rápidos o venta de medicamentos dentro de las instalaciones."
      ],
      "examples": [
        "--",
        "--",
        "--"
      ]
    },
    {
      "code": "IT-COM-08-01",
      "name": "MONITOREO DE COMPETENCIA DE PRODUCTOS CLAVE DE VALOR Y PROMOCIONES.",
      "poeCode": "POE-COM-08",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Identificación de la canasta KVP: Se define la lista reducida de productos de altísima frecuencia de compra y sensibilidad al precio (ej. leche, huevos, aceite, arroz, detergente líder). El cliente memoriza exactamente cuánto cuestan estos productos.",
        "Se recopilan precios mediante:",
        "Scraping digital (extraer datos y código HTML de sitios web de manera masiva) o Visitas físicas encubiertas a la competencia.",
        "Se calcula un índice de precios donde 100 es la competencia. Si estás en 103, estás un 3% más caro.",
        "--"
      ],
      "examples": [
        "Ejemplo práctico de reacción ante el monitoreo (Categoría: Aceite Vegetal 800ml)",
        "Hallazgo del monitoreo: El store checker reporta que el Supermercado B redujo el precio del aceite vegetal líder de $2.50 a $2.10 en una promoción de \"Fin de Semana de Ahorro\".",
        "Diagnóstico: El aceite vegetal es un KVP crítico. Mantenerlo a $2.50 durante el fin de semana hará que los clientes perciban a la tienda como costosa en toda la canasta.",
        "Acción de respuesta: \nSe ajusta el precio en sistema a $2.09 para los dos días de la promoción (igualando o superando al rival).\nSe cambia la señalética en góndola destacando la etiqueta de \"Precio Bajo Garantizado\".",
        "Compensación de margen: Se mantiene el margen regular en categorías de menor sensibilidad que acompañan la compra, como especias, sazonadores o sartenes."
      ]
    },
    {
      "code": "IT-COM-08-02",
      "name": "Arquitectura de Precios por Categoría",
      "poeCode": "POE-COM-08",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Para construir la arquitectura de precios en un pasillo, el Jefe de Categorias y el equipo de Pricing ejecutan los siguientes pasos:\n1. Establecer el \"Precio Suelo\" (Primer Precio / Entrada): Se identifica o asigna el precio más bajo de la categoría. Este precio sirve de anzuelo para retener al cliente que solo busca ahorro y para competir contra los Hard Discounts. Suele asignarse a la marca propia más básica.",
        "2. Establecer el \"Precio Techo\" (Premium / Límite Superior): Se define el precio máximo de la categoría para los productos de especialidad o marcas exclusivas. Captura el valor de los clientes dispuestos a pagar más por estatus, origen o beneficios superiores.",
        "3. Calcular las Brechas de Precio (Price Gaps): Este es el paso más crítico. Se determina la distancia en dinero o porcentaje entre los diferentes escalones (Económico $\\rightarrow$ Estándar $\\rightarrow$ Premium). Si la brecha es muy pequeña, el cliente se confunde; si es muy grande, el salto es inalcanzable y la escalera se rompe.",
        "4. Asignar Roles a los Precios (Captura de Valor): Los productos de alta rotación (KVI - Key Value Items) actúan como \"defensores de la percepción de precio barato\" (márgenes bajos).\nLos tamaños más grandes o productos complementarios actúan como \"capturadores de margen\" (márgenes altos).",
        "--",
        "--"
      ],
      "examples": [
        "Categoría \"Aceites de Cocina\" (Pasillo de Abarrotes)\nImagina que eres el Director de Compras y Pricing de la cadena de supermercados y vas a reestructurar la Arquitectura de Precios en el pasillo de aceites para capturar el máximo valor posible del flujo de clientes.\n\nDecides diseñar una escalera de precios perfectamente delimitada para botellas en formato estándar de 1 Litro (o 900ml):",
        "Escalón 1: El Precio Suelo (Segmento Económico / Combate)\n   Producto: Aceite de Palma o Soya - Marca Propia del Supermercado.\n   Precio en Góndola: $1.99\n   Estrategia de Captura de Valor: Margen mínimo (2-5%). Su función no es ganar dinero, sino gritarle al cliente: \"Aquí cuidamos tu bolsillo\". Evita que el cliente se vaya a la competencia por precio.",
        "Escalón 2: El Segmento Medio (Marcas Líderes / Volumen)\n   Producto: Aceite de Girasol o Canola - Marca Líder Nacional (ej. Clover / Wesson / Capullo).\n   Precio en Góndola: $3.29 (Brecha del +65% respecto al suelo).\n   Estrategia de Captura de Valor: Margen moderado (12-15%). Es el precio de referencia que el cliente tiene en la cabeza. Genera el flujo de caja masivo del pasillo. El cliente paga la diferencia de precio por la confianza en la marca y la publicidad.",
        "Escalón 3: El Segmento Premium (Salud / Especialidad) \n   Producto: Aceite de Oliva Extra Virgen - Marca Importada Reconocida.\n   Precio en Góndola: $6.49 (Brecha del +97% respecto al segmento medio).\n   Estrategia de Captura de Valor: Margen alto (30-35%). Captura el valor del cliente que prioriza la salud, el sabor gourmet o el estatus y que tiene nula sensibilidad al precio.",
        "Aplicación y Control en la Sala de Ventas \nUna vez fijada la arquitectura, monitoreas el comportamiento en los puntos de venta (POS) y ajustas la exhibición física: \n   Upselling Visual: En la góndola colocas el aceite de la Marca Propia ($1.99) justo al lado de la Marca Líder ($3.29). La brecha visual hace que la Marca Líder parezca un \"gasto razonable\" por calidad y que la Marca Propia parezca una \"ganga irresistible\". El cliente se auto-segmenta sin esfuerzo.\n   Corrección por Distorsión: Si una marca secundaria entra al mercado queriendo cobrar $3.15, rompe tu arquitectura porque está demasiado cerca del líder ($3.29). El cliente preferirá pagar los $0.14 de diferencia por llevarse el líder real. Para capturar valor, obligas al proveedor a bajar a $2.79 (creando un escalón intermedio real) o rechazas el producto para no saturar la góndola.",
        "Resultado Práctico: Con esta arquitectura de precios, el supermercado segmenta el bolsillo de cada cliente que entra al pasillo. Satisface al cazador de ofertas, genera volumen con el cliente tradicional y exprime el máximo margen posible del cliente premium, logrando capturar el valor total disponible en el mercado."
      ]
    },
    {
      "code": "IT-COM-09-01",
      "name": "OPTIMIZACIÓN DE ABASTECIMIENTO DE LA LÍNEA DE CAJAS (FRONT END). EL FRONT END SE ESTRUCTURA EN DISTINTAS SUBZONAS PARA GARANTIZAR UN FLUJO RÁPIDO DE PERSONAS Y MAXIMIZAR LA RENTABILIDAD POR METRO CUADRADO:\nPLANOGRAMA DE CHECKOUT (IMPULSO)",
      "poeCode": "POE-COM-09",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "1. Muebles de Caja (Checkouts / Lanes):",
        "Cajas Tradicionales: Atendidas por un cajero, equipadas con cinta transportadora, escáner de código de barras, balanza, terminal POS y embolsado.",
        "Cajas Rápidas: Destinadas a clientes con un límite reducido de artículos (ej. máximo 10 productos).",
        "Autocaja / Self-Checkout (SCO): Módulos donde el propio cliente escanea y paga sus productos, supervisados por un solo colaborador.",
        "2. Muebles de Impulso (Racks / Display de Cajas):",
        "Expositores laterales o frontalmente integrados a la cinta de pago que exhiben productos de bajo costo, tamaño reducido y alta rotación.",
        "3. Área de Servicio al Cliente y Cajas Especiales:",
        "Mostrador para devoluciones, reclamos, facturación, venta de servicios (recargas, lotería, gift cards) o atención prioritaria (embarazadas, adultos mayores).",
        "4. Zona de Salida y Empaque:",
        "Espacio adyacente para el embolsado, carritos de compras vacíos, contenedores de reciclaje y área de control de seguridad."
      ],
      "examples": [
        "En los exhibidores del Front End se colocan estratégicamente artículos de decisión rápida y alta ganancia marginal:",
        "Categoría de Producto: Golosinas y Snacks\nEjemplos Típicos: Chicles, chocolates, mentas, caramelos, galletas individuales.\nPropósito Comercial: Compra por antojo inmediato o recompensa.",
        "Categoría de Producto: Bebidas Frías     \nEjemplos Típicos: Refrigeradores pequeños con agua, sodas o bebidas energizantes\nPropósito Comercial: Captura la sed del momento antes de salir.",
        "Categoría de Producto: Cuidado Personal , Conveniencia\nEjemplos Típicos: Pañuelos desechables, gel antibacterial, bálsamo labial, maquinillas de afeitar. \nPropósito Comercial: Olvidos frecuentes de lista de compras",
        "Categoría de Producto:  Revistas y Publicaciones\nEjemplos Típicos: Revistas de entretenimiento, pasatiempos o periódicos.\nPropósito Comercial: Distracción durante la fila de espera.",
        "Categoría de Producto: Baterías y Accesorios Pequeños\nEjemplos Típicos: Pilas (AA/AAA), encendedores, cables de carga rápida. \nPropósito Comercial: Compras de alta necesidad y baja frecuencia.",
        "--",
        "--",
        "--",
        "--"
      ]
    },
    {
      "code": "IT-COM-09-02",
      "name": "RUTAS DE TRÁFICO FORZADO Y CABECERAS. PARA IMPLEMENTAR RUTAS DE TRÁFICO FORZADO Y EXPLOTAR LAS CABECERAS DE GÓNDOLA, LOS EQUIPOS DE OPERACIONES Y LAYOUT REALIZAN LO SIGUIENTE:",
      "poeCode": "POE-COM-09",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "1. Ubicación Estratégica de los Productos Imán (Destino): Se colocan los productos de compra obligatoria y diaria (leche, carnes, pan fresco, huevos) al fondo de la tienda o en los extremos opuestos a la entrada. Para llegar a ellos, el cliente sí o sí debe cruzar la tienda.\n2. Diseño de Pasillos en \"Espiral\" o \"Bucle\": Se distribuye el mobiliario de manera que los pasillos principales conecten de forma fluida pero obliguen a serpentear o dar giros específicos, evitando \"atajos\" que permitan al cliente salir rápido sin ver el resto de las categorías.\n3. Planificación Comercial de las Cabeceras: Las cabeceras de góndola no son bodegas de almacenamiento. Se asignan bajo tres reglas estrictas:\n   Monotemáticas: Deben exhibir un solo tipo de producto o una solución unificada (ej. Todo para el asado del domingo).\n   Alta Rotación / Impacto Visual: Deben tener precios muy visibles (cartelería grande) y una estructura atractiva.\n   Rotación Temporal: El producto de una cabecera debe cambiarse cada 7 o 14 días para no cansar visualmente al cliente frecuente.",
        "--",
        "--"
      ],
      "examples": [
        "1. Aplicando la Ruta de Tráfico Forzado\n  La Entrada: El cliente ingresa a la sala de ventas. Frente a él se encuentra la sección de Frutas y Verduras (colores vivos y aromas que estimulan el hambre). No hay acceso directo al pasillo de lácteos desde la entrada.\n  El Recorrido Obligado: Para llegar a la zona de refrigerados (al fondo a la izquierda) y a la panadería (al fondo a la derecha), el cliente debe caminar por el pasillo perimetral derecho.\n  El Bloqueo Visual: A la mitad de su camino hacia la leche, colocas la isla de Licores y Botanas y el pasillo de Cuidado Personal, obligándolo a rodearlos. Para cuando llega a las neveras de lácteos por su cartón de leche, ya ha recorrido el 60% de la sala de ventas.",
        "2. Capturando la Venta con Cabeceras de Góndola\nEn ese recorrido forzado que hace el cliente hacia la leche, colocas estratégicamente las siguientes cabeceras de góndola a lo largo del pasillo principal:\n\nCabecera 1 (En el pasillo de abarrotes, camino a los lácteos):\n  Exhibición: Una montaña de cajas de Cereales infantiles con un cartel gigante que dice: \"2x1 esta semana\".\n  Efecto: El cliente, que solo iba por leche, piensa: \"Ya que voy a llevar leche, aprovecho y compro el cereal para los niños\".\n\nCabecera 2 (En el extremo del pasillo de panadería):\n  Exhibición: Frascos de Crema de avellanas (Nutella) y mermeladas de fresa colocados justo al lado de los panes de molde.\n   Efecto: Se genera una venta cruzada perfecta por impulso. El cliente asocia directamente el pan que va a sacar de la panadería con el untable de la cabecera.",
        "3. La Salida Forzada\nUna vez que el cliente tiene su pan y su leche en el carrito, se dirige a pagar. El pasillo de retorno hacia la línea de cajas lo obliga a pasar por delante de la categoría de Limpieza del Hogar y, finalmente, por la línea de cajas (Front End), donde se expone a la última compra por impulso (chicles, chocolates o bebidas frías).\nResultado Práctico: El cliente que originalmente entró por $2.00 de pan y leche termina pagando un ticket de $12.50 porque la ruta de tráfico forzado lo expuso a las ofertas de las cabeceras de góndola. Satisfecho porque \"aprovechó las ofertas\", el cliente sale de la tienda y el supermercado maximizó la rentabilidad de esa visita."
      ]
    },
    {
      "code": "IT-COM-10-01",
      "name": "ADMINISTRAR LA PROSPECTACION: ATRACCIÓN Y TRÁFICO",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Ejecución de campañas publicitarias.",
        "Promociones de agenda (días tematicos: de mercado/carne)",
        "Diseño de vitrinas/entradas para atraer clientes a la tienda. \nObjetivo 1 Captar la atención desde el exterior. \nObjetivo 2 Comunicar promociones de forma clara. \nObjetivo 3 Transmitir una imagen de orden, limpieza y frescura. \nObjetivo 4 Invitar al cliente a entrar y recorrer la tienda"
      ],
      "examples": [
        "Ejemplo 1: Campaña \"Fin de Semana de Ahorro\"\nEjemplo 2: Campaña Digital Geolocalizada\nEjemplo 3: Campaña Estacional (\"Regreso a Clases\")",
        "Ejemplo 1: Lunes de Frutas y Verduras\nEjemplo 2 :Martes de Carnes\nEjemplo 3: Miércoles del Adulto Mayor\nEjemplo 4: Jueves de Panadería\nEjemplo 5: Viernes Parrillero\nEjemplo 6: Ahorro Familiar\nEjemplo 7: Combos Familiares",
        "Ejemplo 1: Entrada con frutas frescas - \"La frescura comienza aquí.\"\nEjemplo 2: Isla de promociones en la entrada - \"Las mejores ofertas de la semana.\"\nEjemplo 3: Entrada temática: Temporada navideña - Crear una experiencia emocional que incentive compras adicionales.\nEjemplo 4: Entrada para regreso a clasesLa comunicación destaca la conveniencia de encontrar todo en un solo lugar."
      ]
    },
    {
      "code": "IT-COM-10-02",
      "name": "DISEÑO DEL RECORRIDO Y LAYOUT (DISTRIBUCIÓN DEL ESPACIO):",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Puntos Fríos y Calientes",
        "Ancho de Pasillos"
      ],
      "examples": [
        "Ubicación de productos de primera necesidad (panadería, carnes, lácteos) al fondo de la tienda para forzar la circulación completa. \nLos productos de compra impulsiva o alto margen se ubican en las zonas de mayor tráfico (entradas, pasillos centrales y cabeceras).",
        "Dimensionamiento que permite la libre circulación de carritos en ambos sentidos sin provocar embotellamientos ni sensación de hacinamiento."
      ]
    },
    {
      "code": "IT-COM-10-03",
      "name": "VISUAL MERCHANDISING Y ARQUITECTURA SENSORIAL",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Iluminación Focalizada",
        "Marketing Sensorial:"
      ],
      "examples": [
        "Uso de luz cálida en carnicería y panadería para resaltar la frescura, y luz blanca brillante en pasillos generales para comunicar limpieza.",
        "Difusión de aromas (por ejemplo, horneado de pan a horas pico) para despertar el apetito, y música ambiental ajustada al ritmo de la tienda (música pausada en horas de poco tráfico para extender la estancia; música ágil en horas pico para dinamizar el flujo)."
      ]
    },
    {
      "code": "IT-COM-10-04",
      "name": "GESTIÓN ACTIVA DEL PISO DE VENTA (PASO A PASO OPERATIVO)",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Supervisión en Tiempo Real (Floor Manager)",
        "Control de Quiebres y Reposición Contaminante"
      ],
      "examples": [
        "Monitoreo constante del estado de los pasillos para coordinar la limpieza inmediata, verificar la ausencia de cajas vacías u obstáculos y reordenar la cara frontal de los productos (facing).",
        "Programación del reabastecimiento en horarios de bajo flujo o mediante métodos silenciosos y ordenados para no interferir con el paso de los clientes."
      ]
    },
    {
      "code": "IT-COM-10-05",
      "name": "GESTIÓN DE FILAS Y PUNTOS DE SALIDA (CHECKOUT)",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Apertura Dinámica de Cajas",
        "Zonas de Impulso Final"
      ],
      "examples": [
        "Habilitación o cierre de cajas registradoras según la fluctuación en tiempo real del tráfico en la zona de cajas",
        "Diseño de pasillos de salida estructurados (queuing systems) equipados con productos de consumo rápido (snack, dulces, bebidas frías, baterías)."
      ]
    },
    {
      "code": "IT-COM-10-06",
      "name": "ADMINISTRAR EL PROCESO DE COTIZACIÓN",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "1. Implementar el Formato de Etiqueta Estándar (Precios por Unidad de Medida - PUM): La etiqueta de precios de la góndola no solo debe mostrar el precio final en grande. Obligatoriamente debe incluir en una esquina superior o inferior el precio desglosado por unidad de medida básica (ej. \"Precio por 100g = $0.45\"). Esto permite una cotización justa y real entre empaques de distintos tamaños.",
        "2. Garantizar la Coherencia de la Arquitectura de Precios: Los precios de las etiquetas deben estar actualizados al 100% en el sistema central y coincidir exactamente con el escáner del punto de venta (POS) para evitar fricciones o reclamos legales por publicidad engañosa.",
        "3. Diseñar Señalética de Alerta de Ahorro / Comparación: Utilizar códigos de color en los portaprecios o habladores para destacar cuándo un producto ofrece un beneficio económico evidente (ej. etiquetas amarillas para ofertas temporales, etiquetas verdes para la Marca Propia que denota el ahorro máximo).",
        "4. Auditoría e Inspección de Góndola (Cero Huecos Informativos): El personal de la sala de ventas debe revisar diariamente que ningún producto carezca de su etiqueta de precio. Un producto sin precio bloquea el proceso de cotización del cliente, provocando que este abandone el",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--"
      ],
      "examples": [
        "La Cotización de \"Atún en Enlatado\" (Pasillo de Abarrotes)\nImagina que eres el Supervisor de la Sala de Ventas y estás auditando el módulo de Atunes y Conservas de Pescado. Sabes que este es uno de los pasillos donde los clientes pasan más tiempo \"cotizando\" y comparando precios antes de meter el producto al carrito.\n\nPara administrar correctamente este proceso, estructurás las etiquetas del estante central (foco visual) de la siguiente manera:",
        "1. El Escenario de Comparación (Las Opciones en Estante)\nTienes tres opciones de lomo de atún en agua alineadas horizontalmente a la altura de los ojos:",
        "Opción A (Marca Líder Nacional): Lata de 140 gramos. Precio final visible: $1.95",
        "Opción B (Marca Secundaria / Importada): Lata de 160 gramos (un empaque un poco más grande). Precio final visible: $2.10",
        "Opción C (Marca Propia del Supermercado): Lata de 140 gramos. Precio final visible: $1.40",
        "2. La Intervención Operativa: El Desglose del PUM  (Precios por Unidad de Medida)",
        "Si el cliente solo viera el precio final, la comparación entre la Opción A y la Opción B sería confusa porque los gramajes son distintos. Para facilitar la \"cotización en el acto\", administras el diseño de las etiquetas impresas en el estante de la siguiente forma:",
        "Etiqueta de la Marca Líder: Muestra $1.95 en texto grande. En la esquina inferior, el sistema calcula e imprime: Precio por cada 100g = $1.39.",
        "Etiqueta de la Marca Secundaria: Muestra $2.10 en texto grande. En la esquina inferior se lee: Precio por cada 100g = $1.31.",
        "Etiqueta de la Marca Propia: Muestra $1.40 en texto grande con fondo de color verde (indicador de ahorro de la casa). En la esquina inferior se lee: Precio por cada 100g = $1.00.",
        "3. El Proceso de Venta y Toma de Decisión del Cliente",
        "El comprador llega al pasillo con la intención de cuidar su presupuesto mensual:",
        "1. Revisión de Opciones: El cliente observa las tres latas. Al activar su proceso de \"cotización visual\", nota gracias al PUM (Precio por Unidad de Medida) que la marca secundaria ($1.31 por cada 100g), a pesar de costar $0.15 más en el total que la líder, es técnicamente más económica por cantidad de producto real.",
        "2. El Impacto de la Alternativa Económica (Doble Pódium): Sus ojos se desplazan inmediatamente a la derecha hacia la Marca Propia. Al ver la etiqueta verde de $1.40 y notar que el costo por cada 100 gramos es de apenas $1.00 (un ahorro de casi el 30% frente al líder), la cotización mental se cierra a favor del supermercado.",
        "3. El Cierre de la Venta: El cliente elige llevarse tres latas de la marca propia del supermercado. Siente total satisfacción porque las herramientas de la góndola le permitieron hacer una cotización transparente y comprobar que obtuvo el máximo rendimiento por su dinero.",
        "Resultado Práctico: Al administrar correctamente el proceso de cotización y comparación de precios en el estante, la sala de ventas reduce la frustración del comprador, agiliza el flujo en el pasillo y canaliza la decisión de compra hacia las marcas propias de alto margen, blindando el negocio contra la competencia externa."
      ]
    },
    {
      "code": "IT-COM-10-07",
      "name": "AUDITORÍA DIARIA DE FLEJES (ES LA TIRA O REGLETA DE PLÁSTICO QUE SE COLOCA EN EL BORDE FRONTAL DE LOS ESTANTES, EXHIBIDORES Y MUEBLES DE CHECKOUT (FRONT END).) DE AL 100% CON EL SISTEMA DE CAJAS",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Planificación y Mapeo:\nSe divide la sala de ventas o sala de exhibición por zonas (pasillos, góndolas, cabeceras y cajas/checkout).Se asigna un responsable por sector antes de la apertura o en horas de menor tráfico.",
        "Inspección Física vs. Digital:\nUso de PDA/Colector de datos: El auditor escanea el código del fleje/etiqueta en el estante con una terminal portátil (PDA) enlazada al POS. El sistema valida al instante si el precio visual equivale al del sistema de cajas.\nVerificación de 4 puntos clave: Precio visible, descripción/código del producto, unidad de medida (precio por peso/unidad) y estado físico del fleje.",
        "Reporte y Corrección Inmediata:\nPrecio erróneo: Si el precio del fleje difiere del sistema de cajas, se imprime inmediatamente la etiqueta actualizada y se reemplaza en el acto.\nFleje faltante/dañado: Se reemplaza el portafleje o la etiqueta dañada.",
        "Registro de Métricas:\nSe calcula el índice de efectividad: \n$(Flejes correctos} / Flejes auditados) X times 100. \nLa meta operativa es siempre alcanzar o mantener el 100%."
      ],
      "examples": [
        "Fleje de Checkout (Front End) Faltante o Incongruente",
        "Escenario: En la góndola de pago (checkout), hay exhibidos accesorios rápidos o consumibles (aceppes, ambientadores, snacks).",
        "Auditoría: El auditor revisa la regleta plástica del mueble de caja y nota que un producto no tiene fleje visual.",
        "Acción: Se escanea el código de barras del producto con la PDA, se manda a imprimir el fleje correspondiente y se coloca en la ranura de plástico del mueble de checkout para mantener la cobertura al 100%."
      ]
    },
    {
      "code": "IT-COM-10-08",
      "name": "VERIFICADORES OPERATIVOS: ASEGURAR EL CORRECTO FUNCIONAMIENTO DE LAS PANTALLAS DE CONSULTA EN PASILLOS.",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "3.5.1.2. Mapa de Consultores Digitales (o Mapa de Puntos de Asistencia Digital / Quioscos Consultores)"
      ],
      "examples": [
        "Ejemplo 1: Consultor Digital de Entrada (Directorio y Mapa Interactivo)\nUbicación: En el acceso principal de la tienda\nFunción: Pantalla táctil de 32\" que permite al cliente escribir \"leche sin lactosa\" o \"carbón\". La pantalla despliega un mapa interactivo de la tienda, indicando el número exacto de pasillo y estante.\nImpacto: Reduce el tiempo de búsqueda y libera al personal de caja o entrada de responder preguntas básicas de orientación."
      ]
    },
    {
      "code": "IT-COM-10-09",
      "name": "ADMINISTRAR ELIMINACIÓN DE OBJECIONES - VENCER EL \"ESTÁ CARO\" O LA DUDA DE CALIDAD",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Arquitectura de Precios Visual (Reencuadre de Valor):Costo por unidad de medida:\n Mostrar de forma destacada el costo por gramo, litro o porción en el fleje (ej. \"$0.05 por lavada\" en lugar de \"$12.00 la botella\").Anclaje de precios (Price Anchoring): Colocar el producto de marca premium justo al lado del producto de precio medio para que este último se perciba accesible sin parecer \"barato o malo\".",
        "Garantías Visibles e Indiscutibles (Cero Riesgo):Colocar sellos o afiches sobre la góndola con políticas claras: \n\"Si no te gusta el sabor/calidad de nuestra marca, te devolvemos el 100% de tu dinero sin preguntas\". Esto destruye la objeción de calidad al instante.",
        "Prueba Social y Credibilidad (Social Proof):Señalética de validación: \nUsar Rompetráficos o Stoppers en el estante con mensajes como: \"El más vendido de la categoría\", \"Producto elaborado localmente\" o \"Evaluado con 5 estrellas por nuestros clientes\".Empaques transparentes o exhibición abierta: Para carnes, frutas o panadería, permitir que el cliente vea directamente la frescura elimina el temor a la mala calidad sin hablar una sola palabra.",
        "Digitalización y Autogestión:\nUso de Códigos QR o Quioscos: Permitir que el cliente escanee un código para ver la procedencia (ej. \"Pollo 100% fresco de granja local\") o comparar especificaciones."
      ],
      "examples": [
        "Ejemplo 1: Vencer la objeción de calidad en Marca Propia (Pan o Lácteos)\nHerramienta: Stopper / Rompetráfico en la repisa + Cartel de Garantía.\nAcción: En el estante de la leche marca propia, se coloca una regleta plástica que dice:\"Misma calidad y origen que las marcas líderes, 20% menos en precio. Garantía de Satisfacción Total: Si no te gusta, te lo cambiamos.\"\nEfecto: El cliente entiende la razón del precio bajo (eficiencia, no mala calidad) y pierde el miedo a probar porque el riesgo es cero.",
        "Ejemplo 2: Vencer la objeción \"está caro\" en Carnes o Productos de Cuidado Personal\nHerramienta: Fleje de precio extendido y diseño de etiqueta.\nAcción: En una bandeja de carne premium de $12.00, se agrega un sticker en el empaque que dice:\"Rinde para 4 porciones ($3.00 por persona) – 100% magro sin merma.\"\nEfecto: El cerebro del cliente deja de procesar \"está caro ($12)\" y empieza a procesar \"es una comida completa por $3.00\".",
        "Ejemplo 3: Vencer la objeción de calidad en Frutas y Verduras\nHerramienta: Cartelería de Origen y Selección.\nAcción: Encima de la mesa de aguacates o manzanas, se coloca un letrero grande:\"Seleccionados a mano cada mañana por nuestros agricultores. Si encuentras uno en mal estado, avísanos en caja y te regalamos la unidad.\"\nEfecto: Transmite control de calidad riguroso y genera confianza absoluta antes de que el cliente dude de la frescura.",
        "--"
      ]
    },
    {
      "code": "IT-COM-10-10",
      "name": "ADMINISTRAR EL CIERRE DE LA VENTA",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Gestión de colas y filas (Queue Management): Monitorear el flujo de clientes para habilitar o cerrar cajas registradoras rápidamente según la afluencia.",
        "Escaneo y registro de productos: Pasar adecuadamente los artículos por el lector de código de barras, asegurando la aplicación de promociones, descuentos o validación de productos pesables (frutas, verduras).",
        "Ofrecimiento de ventas de último impulso: Oportunidad final para aumentar el ticket promedio mediante productos de exhibición en caja o membresías/programas de lealtad.",
        "Procesamiento del pago: Recibir efectivo, tarjetas de crédito/débito, cupones o pagos digitales, garantizando el cobro exacto y la entrega del comprobante de compra.",
        "Empaque y despedida cordial: Colocar la mercadería en bolsas según su categoría (separar químicos de alimentos, fríos de secos) y despedir al cliente amablemente para cerrar la experiencia positivamente."
      ],
      "examples": [
        "Área / Situación: Venta Cruzada en Caja\nEjemplo de Aplicación Operativa: El cajero nota que el cliente lleva café en grano y le pregunta si desea aprovechar la oferta del día en galletas importadas ubicadas en el exhibidor de la caja.",
        "Área / Situación: Fidelización y Captura de Datos\nEjemplo de Aplicación Operativa: Al momento de iniciar el cobro, el cajero solicita el número de documento o escanea la app de lealtad para acumular puntos e informar al cliente si tiene cupones disponibles.",
        "Área / Situación: Gestión de Contingencias y Colas\nEjemplo de Aplicación Operativa: Al formarse una fila de más de 3 personas en una caja, el supervisor habilita inmediatamente una caja de respaldo (\"Caja Express\" o \"Caja Flujo Fast\") a través del sistema de perifoneo interno.",
        "Área / Situación: Empaque Eficiente y Normativo\nEjemplo de Aplicación Operativa: El empacador organiza la compra agrupando productos refrigerados juntos y empacando elementos frágiles (como huevos o pan) en la parte superior para evitar daños.",
        "--"
      ]
    },
    {
      "code": "IT-COM-10-11",
      "name": "SEGUIMIENTO DEL CIERRE DE VENTA - LÍNEA DE CAJAS Y PREVENCIÓN DE ABANDONO",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "3.5.5.1. Indicador de Tasa de Abandono",
        "3.5.5.2. Planograma de Zona de Checkout"
      ],
      "examples": [
        "--",
        "--"
      ]
    },
    {
      "code": "IT-COM-10-12",
      "name": "GUÍA DE MATERIAL POP (ROMPETRÁFICOS)",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Especificaciones Técnicas y Dimensiones Normadas:\nProyección saliente: Máximo 15 a 20 cm hacia el pasillo (para evitar tropezones o golpes con carritos).\nAltura de colocación: Entre 1.40 m y 1.65 m desde el suelo (a la altura de los ojos).\nMateriales permitidos: Trovicel, Polipropileno (PP) o Cartón plastificado (resistente a humedad en zonas frías).",
        "Reglas de Ocupación por Góndola (Saturación Visual):Límite de densidad: Máximo 1 a 2 rompetráficos por tramo de góndola (2 a 3 metros) para evitar la fatiga visual del cliente.Distancia mínima: Al menos 1.5 metros de separación entre dos rompetráficos continuos.",
        "Mapeo de Jerarquía según el Objetivo:Informativo / Funcional: Señalar características (\"Sin Azúcar\", \"Sin Gluten\").Promocional: Anunciar ofertas (\"Lleva 2x1\", \"20% de Descuento\").Lanzamiento / Marca: Introducir un producto nuevo o validar la calidad (\"Producto Premium\", \"Sabor del Año\")."
      ],
      "examples": [
        "Ejemplo 1: Rompetráfico de \"Navegación / Dieta Especial\" (Enfoque Funcional)\nUbicación: Pasillo de galletas y cereales.\nDiseño: Un stopper de color verde en forma de hoja que sobresale 15 cm.\nMensaje: \"Opciones 100% Orgánicas y Sin Gluten\".\nFunción en Autoservicio: Actúa como un faro para el cliente que busca una dieta específica, guiándolo directamente al módulo sin que tenga que leer etiqueta por etiqueta.",
        "Ejemplo 2: Rompetráfico con \"Llamado a la Acción / Promoción\" (Enfoque en Precio/Oferta)\nUbicación: Pasillo de cuidado personal (Champús y Jabones).\nDiseño: Formato circular en color rojo brillante/amarillo a 1.50 m de altura.\nMensaje: \"¡Nuevo Tamaño Familiar! 30% Más Producto al Mismo Precio\".\nFunción en Autoservicio: Interrumpe el paso del cliente que busca su marca habitual, mostrándole un beneficio económico directo que elimina la duda sobre el valor del producto.",
        "Ejemplo 3: Rompetráfico de \"Validación y Calidad\" (Enfoque en Marca Propia)\nUbicación: Pasillo de enlatados o aceites comestibles.\nDiseño: Stopper con la imagen de un sello de calidad o estrella.\nMensaje: \"Calidad Garantizada o te Devolvemos tu Dinero\".\nFunción en Autoservicio: Otorga respaldo institucional al producto justo en el punto donde el cliente decide entre comprar la marca comercial o probar la marca propia del supermercado."
      ]
    },
    {
      "code": "IT-COM-10-13",
      "name": "Plan de Cabeceras Temáticas",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Calendario Comercial y Estacional:Se definen las fechas clave del año (ej. Regreso a Clases, Verano/Playa, Fin de Semana de Asados, Navidad) o temáticas funcionales (ej. Vida Saludable, Noche de Tacos, Limpieza Profunda).",
        "Definición de la Ocasión de Consumo (Cross-Merchandising):Se selecciona un \"producto héroe\" (el principal impulsor) y productos complementarios de distintas categorías para resolver una necesidad completa en un solo lugar.",
        "Diseño del Planograma y Pautas de Exhibición:Estructura visual: Definir qué va en el nivel superior (cartelería/POP), nivel medio (producto estrella a la altura de los ojos) y nivel inferior (productos de mayor volumen o peso).Regla 80/20: Garantizar inventario suficiente en trastienda para evitar cabeceras desabastecidas (una cabecera vacía destruye el impacto visual).",
        "Guía de Ejecución y Rotación:Se establece la duración de la temática (generalmente de 2 a 4 semanas).Se definen los criterios para el personal de reposición: orden, limpieza, iluminación y presencia del fleje de precio/promoción."
      ],
      "examples": [
        "Ejemplo 1: Temática \"Fin de Semana de Asado / Parrillada\" (Solución Integral)\nUbicación: Cabecera principal del pasillo de bebidas o carnes.\nComposición de Productos: \n   Producto Héroe: Carbón y kits de herramientas para parrillada.\n   Complementos: Salsas barbacoa, aderezos, botanas/chips, picaditas y cervezas o refrescos.\nEfecto en Autoservicio: El cliente que solo iba a buscar carbón termina comprando las salsas, la bebida y la botana porque el agrupamiento temático le ahorró tiempo y le recordó lo que necesitaba.",
        "Ejemplo 2: Temática \"Especial de Desayuno Nutritivo\" (Enfoque Saludable)\nUbicación: Cabecera al inicio del pasillo de cereales o lácteos.\nComposición de Productos:\n   Producto Héroe: Granola/Avena integral.\n   Complementos: Leches vegetales (almendra/soya), miel de abeja, frutos secos y chía.\nEfecto en Autoservicio: Atrae al consumidor enfocado en bienestar mediante un mensaje claro (\"Empieza tu mañana con energía\") y reúne categorías que normalmente están dispersas en tres pasillos distintos.",
        "Ejemplo 3: Temática Estacional \"Regreso a Clases\" (Ocasión de Temporada)\nUbicación: Cabeceras alineadas al pasillo central durante inicio de clases\nComposición de Productos:\n   Producto Héroe: Contenedores/Loncheras y termos para agua.Complementos: Jugos individuales, galletas en empaque individual, servilletas y barras de cereal.Efecto en Autoservicio: Resuelve la armadura de la lonchera escolar en una sola parada de compra rápida.",
        "--"
      ]
    },
    {
      "code": "IT-COM-10-14",
      "name": "ANÁLISIS DE LA FACTURACIÓN - EVALUACIÓN DE LO QUE EL CLIENTE METE AL CARRITO",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "3.5.4.1. Reporte de Venta por Metro Lineal",
        "3.5.4.2. Registro de Mermas y Vencimientos"
      ],
      "examples": [
        "--",
        "--"
      ]
    },
    {
      "code": "IT-COM-10-15",
      "name": "PLAN DE CABECERAS TEMÁTICAS",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Definición de objetivos y selección de SKUs: Se eligen productos de alta rotación (para arrastrar ventas de otros artículos) o lanzamientos que requieren ganar posicionamiento rápido.",
        "Negociación Proveedor-Cadena (Trade Marketing): Se negocian volúmenes, apoyos de margen, cobro de cabeceras o punteras de góndola y material POP (Point of Purchase).",
        "Ubicación Estratégica en Tienda: Se priorizan zonas de alto tráfico (punteras de góndola, islas centrales, zonas de checkout/cajas).",
        "Comunicación Visual: Se implementan cenefas, rompetraficos, carteles de gran formato con precios promocionales destacados y perifoneo interno",
        "Monitoreo y Control de Stock: Se asegura el reabastecimiento continuo para evitar quiebres de stock durante el pico promocional."
      ],
      "examples": [
        "Tipo de Promoción   //  Objetivo Técnico    //     Ejemplo Práctico en Supermercado",
        "Venta Cruzada / Bundling        //     Incrementar ticket promedio y posicionar categoría complementaria.    //      Packs de pasta de dientes con enjuague bucal de regalo, o compra de detergente que incluye suavizante a mitad de precio.",
        "Precios Gancho / Loss Leader    //    Atraer tráfico masivo a la tienda y posicionar el supermercado como económico.   //    Descuentos agresivos del $30\\%$ al $40\\%$ en pollo fresco o leche entera durante días específicos de la semana (\"Martes de Frescura\").",
        "Lanzamientos con Muestreo (Sampling)    //     Reducir la barrera de prueba y posicionar una variante nueva.   //     Módulos de degustación en pasillos con impulsadoras para un nuevo café o salsa, acompañados de un cupón de descuento inmediato.",
        "Puntos Adicionales / Lealtad   //    Acelerar la recompra mediante el programa de fidelización.   //    Asignación de \"Doble o Triple Puntaje\" al comprar marcas seleccionadas de cuidado personal durante un fin de semana."
      ]
    },
    {
      "code": "IT-COM-10-16",
      "name": "DESARROLLO DE PROGRAMA DE COMUNICACION",
      "poeCode": "POE-COM-10",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Definición de objetivos: \nEstablecer metas claras (aumentar tráfico en tienda, comunicar ofertas de temporada, mejorar el clima laboral, reforzar la marca).",
        "Segmentación de audiencias: \nIdentificar los destinatarios específicos (clientes habituales, compradores por impulso, personal de piso de venta, cajeros).",
        "Selección de canales y medios: \n   Canales externos/en tienda: Perifoneo interno, cenefas, material POP, pantallas digitales, app móvil, folletos impresos o redes sociales.\n   Canales internos: Tableros de avisos, reuniones de inicio de turno (briefings), correo institucional y canales digitales de mensajería laboral.",
        "Calendario de ejecución y medición: \nProgramar las campañas por días/semanas (ej. \"Martes de Frescura\") y evaluar métricas como el ticket promedio, rotación de inventario promocionado o efectividad de la comunicación interna."
      ],
      "examples": [
        "Dimensión: Comunicación en Punto de Venta (POP)\nCanal / Herramienta: Cenefas (franja, cinta o banda continua), rompetráficos y pantallas\nEjemplo de Aplicación: Señalizar ofertas de 2x1 en el pasillo de abarrotes o anuncios digitales con descuento en carnes frías.",
        "Dimensión: Audio y Perifoneo Interno\nCanal / Herramienta: Megaafonía de tienda\nEjemplo de Aplicación: Anunciar ofertas relámpago cada hora para incentivar la compra por impulso mientras los clientes recorren los pasillos.",
        "Dimensión: Comunicación Promocional Externa\nCanal / Herramienta: Folleto digital / App de lealtad\nEjemplo de Aplicación: Enviar un catálogo semanal con descuentos exclusivos en frutas y verduras a la base de clientes registrados.",
        "Dimensión: Comunicación Interna Operativa\nCanal / Herramienta: Briefing diario de inicio de turno\nEjemplo de Aplicación: Reunión de 5 minutos entre el jefe de piso y los cajeros para comunicar las ofertas activas del día y metas de venta."
      ]
    },
    {
      "code": "IT-COM-11-01",
      "name": "DESARROLLO DE IMAGEN INSTITUCIONAL",
      "poeCode": "POE-COM-11",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Identidad Visual y Senyalética: Diseño coherente del logotipo, uniformes, fachadas, carritos de compra, iluminación, decoración temática por departamentos (carnicería, panadería) y señalización interna clara.",
        "Cultura de Servicio y Protocolos: Capacitación constante del personal para asegurar un trato amable, resolución rápida de reclamos y una presentación personal impecable en todo momento.",
        "Estándares Operativos y de Tienda: Mantenimiento riguroso del orden, la limpieza de los pasillos, la frescura de los alimentos perecederos y la disponibilidad constante de stock en anaqueles.",
        "Responsabilidad Social y Comunicación: Proyección de valores hacia la comunidad a través de prácticas sostenibles (uso de bolsas reutilizables, reciclaje, apoyo a productores locales) y campañas publicitarias coherentes con la realidad de la tienda."
      ],
      "examples": [
        "Dimensión: Identidad Visual y Ambiente\nEjemplo de Aplicación: Mantener colores corporativos unificados en la fachada, uniformes limpios con identificador visible para todos los colaboradores y señalización clara por secciones.\nImpacto en la Imagen: Proyecta profesionalismo, orden y facilita la orientación del comprador.",
        "Dimensión: Calidad y Frescura Visible\nEjemplo de Aplicación: Mostrar anaqueles impecables en la sección de frutas y verduras, bien iluminados y con productos frescos sin merma visible.\nImpacto en la Imagen: Transmite higiene, cuidado al consumidor y garantía de calidad alimentaria.",
        "Dimensión: Responsabilidad Social (RSE)\nEjemplo de Aplicación: Implementar estaciones de reciclaje en el parqueo, reducir plásticos de un solo uso e incentivar el uso de bolsas reutilizables.\nImpacto en la Imagen: Conecta con valores éticos modernos y mejora la reputación comunitaria.",
        "Dimensión: Gestión de Reclamos\nEjemplo de Aplicación: Un módulo de Atención al Cliente que resuelve devoluciones de producto de forma rápida, ágil y sin complicaciones para el usuario.\nImpacto en la Imagen: Construye confianza y demuestra compromiso real con la satisfacción."
      ]
    },
    {
      "code": "IT-COM-11-02",
      "name": "ANALISIS DE LA FACTURACION",
      "poeCode": "POE-COM-11",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Diagnosticar el rendimiento: Identificar si la sucursal está alcanzando sus metas financieras de venta.",
        "Detectar patrones y tendencias: Descubrir picos y caídas de venta por hora, día, semana o temporada.",
        "Identificar productos estrella y de lento movimiento: Evaluar qué categorías aportan más al margen o al volumen de caja.",
        "Monitorear la rotación de perecederos y abarrotes: Identificar qué productos de alta rotación se venden rápido para evitar mermas o quiebres de stock.",
        "Optimizar inventarios y compras: Ajustar el stock en función de la demanda real facturada para evitar desabastos o sobreinventarios.",
        "Detectar fugas de dinero o anomalías: Identificar anulaciones atípicas, devoluciones excesivas o descuentos no autorizados.",
        "Evaluar el rendimiento por secciones/departamentos: Medir el aporte de ingresos de departamentos clave (Carnes, Frutas y Verduras, Lácteos, Limpieza, Cuidado Personal).",
        "Optimizar la gestión de cajas y filas: Analizar los picos de facturación por hora y día para coordinar la apertura de cajas y turnos de cajeros.",
        "Medir el impacto de ofertas y promociones: Verificar si las dinámicas comerciales (ej. \"2x1\", ofertas de fin de semana o días de descuento) generan un incremento real en la facturación y el margen.",
        "Controlar mermas, anulaciones y devoluciones: Monitorear discrepancias o anulaciones en cajas para prevenir fraudes o fallas operativas en el escaneo."
      ],
      "examples": [
        "Ejemplo 1: Análisis por Franja Horaria (Gestión de Cajas)",
        "Escenario: El supermercado analiza la facturación de un día sábado dividido en tres bloques de tiempo",
        "Franja Horaria: 08:00 - 12:00\nFacturación Total: $12,000\nN° de Tickets: 400\nTicket Promedio: $30",
        "Franja Horaria: 12:00 - 17:00\nFacturación Total: $18,000\nN° de Tickets: 360\nTicket Promedio: $50",
        "Franja Horaria: 17:00 - 21:00\nFacturación Total: $20,000\nN° de Tickets: 800\nTicket Promedio: $25",
        "Hallazgo: Por la tarde/noche (17:00 - 21:00) hay el doble de clientes (800 tickets), pero con compras rápidas y de menor valor ($25.00 promedio, generalmente reposición diaria). Por la tarde intermedia (12:00 - 17:00) el flujo es menor, pero las compras son de mercado semanal/quincenal ($50.00 promedio).",
        "Acción: Abrir el 100% de las cajas express y estándar en la franja de 17:00 a 21:00 para reducir filas y evitar pérdida de ventas por abandono.",
        "--",
        "--",
        "--"
      ]
    },
    {
      "code": "IT-COM-12-01",
      "name": "GESTION DE RECLAMOS",
      "poeCode": "POE-COM-12",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Protocolo de 5 pasos:",
        "Escucha activa y empatía: Recibir al cliente sin interrumpir, validando su molestia con un tono profesional y servicial (evitar posturas defensivas).",
        "Registro de la incidencia: Tomar los datos del cliente, el comprobante de compra (ticket) y el producto afectado en el sistema o libro de reclamaciones.",
        "Investigación y verificación: Comprobar la falla (ej. verificar la fecha de vencimiento en el empaque o revisar el precio registrado en el sistema contra la etiqueta del anaquel).",
        "Propuesta de solución inmediata: Aplicar las políticas de devolución, cambio directo o reembolso de dinero de manera rápida y sin burocracia innecesaria.",
        "Análisis de causa raíz e informe: Registrar la falla en la base de datos interna para corregir el proceso con el proveedor, la bodega o el personal involucrado."
      ],
      "examples": [
        "Tipo de Reclamo: Producto en Mal Estado\nCausa: El cliente compró un lácteo o embutido que al abrirlo en casa estaba dañado a pesar de estar dentro de la fecha de caducidad.\nDesarrollo de la Solución: Atención al cliente disculpa el inconveniente, efectúa el cambio inmediato por uno fresco (o aplica la garantía de devolución doble) y notifica al jefe de perecederos para revisar la cadena de frío.",
        "Tipo de Reclamo: Diferencia de Precio\nCausa: Un artículo marcaba un precio promocional en el anaquel, pero en la caja registradora se cobró a precio regular.\nDesarrollo de la Solución: El cajero o supervisor verifica la etiqueta en el pasillo, respeta de inmediato el precio más bajo exhibido al cliente y solicita la corrección del código en el sistema.",
        "Tipo de Reclamo: Mala Atención de Personal\nCausa: Queja sobre un colaborador que respondió de manera grosera o desatenta en el área de carnicería/fiambrería.\nDesarrollo de la Solución: El encargado de tienda escucha al cliente, le ofrece una disculpa institucional en nombre del supermercado y remite el caso a Recursos Humanos para retroalimentar al empleado.",
        "Tipo de Reclamo: Falta de Stock de Oferta\nCausa: Reclamo porque una oferta anunciada en el folleto semanal no se encuentra disponible en las góndolas.\nDesarrollo de la Solución: Se le explica la situación al cliente y se le entrega un \"vale de reserva de oferta\" para que pueda adquirir el producto al precio promocional cuando ingrese el reabastecimiento.",
        "--",
        "--"
      ]
    },
    {
      "code": "IT-COM-13-01",
      "name": "MANUAL DE GOBERNANZA Y ESTRUCTURA DE PROCESOS (SOPS)",
      "poeCode": "POE-COM-13",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Definir la Estructura de Gobernanza: Estructura Organizacional: Organigrama de la empresa y de la sucursales",
        "Matriz de Autoridad y Decisiones (Matriz RACI): Quién es Responsable, Aprobador, Consultado e Informado en decisiones clave (ej. descuentos, bajas por rotura, promociones).",
        "Redactar los SOPs (Procedimientos Operativos Estándar): Cada procedimiento debe llevar una estructura unificada",
        "Garantizar la estandarización operativa: Lograr que la atención al cliente, la manipulación de alimentos se ejecuten con la misma calidad en todas las cajas o sucursales.",
        "Establecer la gobernanza y niveles de autoridad: Definir con claridad quién aprueba compras, quién autoriza devoluciones, quién valida bajas por merma y quién audita los procesos.",
        "Reducir mermas y pérdidas operativas: Controlar la rotación de inventarios (FIFO/PEPS), la cadena de frío y el manejo de efectivo para evitar robos o caducidades.",
        "Facilitar la inducción y capacitación: Reducir el tiempo de aprendizaje para nuevos cajeros, reponedores (pasilleros) y supervisores.",
        "Asegurar el cumplimiento normativo: Garantizar normativas de inocuidad alimentaria (HACCP/BPM), salud ocupacional y exigencias fiscales/contables.",
        "Validación, Difusión y Auditoría: Probar el SOP en piso de venta con los empleados reales, capacitar al personal e integrar el manual a la intranet o carpetas de consulta rápida, Auditoría periódica para verificar el cumplimiento efectivo"
      ],
      "examples": [
        "Rango del Valor de la Merma: $20.01 – $200.00 (Vencimiento de lote, falla de empaque)\nNivel de Autorización Requerido: Jefe de Departamento (Carnes/Abarrotes)\nDocumento / Registro: Formato de baja firmado + foto",
        "--",
        "Rango del Valor de la Merma: >$200.00 (Falla en cuarto frío, daño masivo)\nNivel de Autorización Requerido: Gerente de Tienda + Auditoría\nDocumento / Registro: Acta de merma extraordinaria",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--"
      ]
    },
    {
      "code": "IT-COM-14-01",
      "name": "CAPTURA DE DATOS EN PUNTO DE VENTA",
      "poeCode": "POE-COM-14",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Identificación del comprador anónimo: Permite vincular un ticket de compra sin nombre (efectivo, tarjeta) a una persona específica dentro de la base de datos.",
        "Comprensión de patrones de consumo: Revela la frecuencia de visita, los días de compra habituales, el ticket promedio y la canasta recurrente de cada hogar.",
        "Segmentación de clientes por valor (RFM): Permite clasificar a los clientes según su Recencia (cuándo compró por última vez), Frecuencia (qué tan seguido viene) y Monto (cuánto gasta), identificando al top 20% que genera la mayor ganancia.",
        "Personalización masiva: Sustituye el descuento general para todo el público por incentivos específicos que responden a los gustos reales de cada persona.",
        "Medición de la efectividad de campañas: Permite saber con precisión matemática si un descuento enviado por App o SMS se tradujo en una compra real en caja."
      ],
      "examples": [
        "Ejemplo 1: Activación de Clientes en Riesgo de Churn (Abandono): Captura en POS: El sistema detecta que un cliente clasificado como \"VIP\" (compra semanal de $120.00 promedio) lleva 3 semanas consecutivas sin registrar compras en caja.\nAcción de Fidelización: El programa envía automáticamente un cupón personalizado a su celular: \"Te extrañamos: $10.00 de regalo en tu próxima compra superior a $50.00 esta semana\".\nResultado: Se reactiva al cliente antes de que mude sus compras por completo a la competencia.",
        "Ejemplo 2: Emisión de Cupones Dinámicos al Pie del Ticket (Coupon at Checkout)\nCaptura en POS: Durante el escaneo, el sistema registra la compra de café en grano, pero identifica que el cliente nunca ha comprado repostería o leche vegetal.\nAcción de Fidelización: La impresora del POS emite un cupón al pie del ticket impreso: \"15% de descuento en tu leche de almendras preferida en tu próxima visita\".\nResultado: Se impulsa la Venta Cruzada (Cross-selling) adaptada a los hábitos detectados.",
        "Ejemplo 3: Redención Inteligente de Puntos y Gamificación\nCaptura en POS: El cliente pasa su tarjeta de fidelidad para pagar un mercado de $80.00.\nAcción de Fidelización: La pantalla de la caja le muestra al cajero y al cliente: \"¡Estás a $20.00 de completar tu meta del mes y ganar 500 puntos dobles!\".\nResultado: Estimula al cliente a agregar un par de artículos de último momento antes de cerrar la cuenta para alcanzar la recompensa.",
        "--",
        "--"
      ]
    },
    {
      "code": "IT-COM-15-01",
      "name": "MANUAL DE PROTOCOLO DE SERVICIO",
      "poeCode": "POE-COM-15",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "1. Mapear el Viaje del Cliente (Customer Journey Map) - Identificar los puntos clave de interacción en la tienda:\nEntrada: Primer contacto visual, disponibilidad de carritos/canastas.\nPiso de Venta: Búsqueda de productos, interacción con pasilleros o personal de departamentos frescos (carnicería, panadería).\nZona de Cajas: Proceso de cobro, empaque, resolución de discrepancias de precio.\nSalida y Posventa: Despedida, atención a reclamos, devoluciones o soporte en estacionamiento.",
        "2. Definir los Estándares de Conducta (La Regla del Servicio) - Establecer comportamientos obligatorios basados en pilares clave:\nContacto visual y saludo: La regla de los 2 metros (saludar a cualquier cliente que esté a menos de 2 metros de distancia).\nLinguaje verbal y no verbal: Uso de tono amable, postura erguida, evitar el uso de teléfonos personales en piso.\nConocimiento de tienda: Saber la ubicación exacta de los productos o usar la terminal móvil (handheld) para verificar existencias.",
        "3. Redactar los Guiñones y Algoritmos de Decisión (Scripts y Árboles): \nDesarrollar el paso a paso estructurado para situaciones normales y de conflicto (quejas, precios incorrectos, filas largas).",
        "4. Capacitar, Evaluar y Auditar: \nImplementar simulaciones (role-playing) en la inducción y medir el cumplimiento mediante la figura del Cliente Incógnito (Mystery Shopper).",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--"
      ],
      "examples": [
        "Ejemplo 1: Protocolo de Orientación en Piso de Venta (Pasilleros / Reponedores)\n Situación: El cliente busca un producto que no encuentra en el anaquel.\n Conducta NO permitida: Indicar con el dedo a lo lejos diciéndole \"Está en el pasillo 5\".\nProtocolo Estandarizado (Método \"Acompañar y Confirmar\"):\n[Cliente pregunta por un artículo]\n1. Saludo y Contacto Visual ──> \"Con gusto le muestro dónde está.\"\n2. Acompañamiento Activo   ──> Camina al lado del cliente (no adelante) hasta el anaquel.\n3. Verificación de Stock   ──> Señala el producto. Si está agotado, consulta la handheld/bodega.\n4. Cierre de Interacción   ──> \"¿Necesita ayuda con algo más para su compra?\"",
        "Ejemplo 2: Protocolo de Cobro en Caja (Cajeros)\nObjetivo: Agilizar el cobro manteniendo la calidez y capturando datos para la fidelización.\n\nPaso 1: Bienvenida  \nAcción del Cajero: Contacto visual, sonrisa y escaneo inmediato.\nGuión / Frase Estandarizada: \"¡Buenos días/tardes! ¿Encontró todo lo que buscaba?\"",
        "Paso 2: Identificación\nAcción del Cajero: Solicitar el método de fidelidad antes de finalizar el escaneo.\nGuión / Frase Estandarizada: \"¿Nos dicta su número de DUI o escanea su App para acumular sus puntos de hoy?\"",
        "Paso 3: Cobro y Manejo\nAcción del Cajero: Anunciar el total y recibir el pago con cuidado.\nGuión / Frase Estandarizada: \"Su total es $45.50. Recibo $50.00, su cambio es $4.50.\"",
        "Paso 4: Despedida\nAcción del Cajero: Entregar el ticket en la mano y agradecer.\nGuión / Frase Estandarizada: \"Muchas gracias por su compra en [Nombre Tienda], ¡que tenga un excelente día!\"",
        "Ejemplo 3: Protocolo para Manejo de Objeciones o Discrepancia de Precio en Caja",
        "Situación: El cliente afirma que un producto tenía un rótulo de oferta de $2.00 en el estante, pero la caja marca $2.50.",
        "Protocolo de Resolución (Regla del \"Empatizar - Verificar - Resolver\"):",
        "1. Empatizar y calmar: Decir \"Entiendo la molestia, con gusto lo verificamos de inmediato para aplicarle el precio correcto\".",
        "2. Activación de verificación sin frenar la fila: El cajero no abandona la caja; presiona la luz de llamado o radiomarca al verificador de precios/supervisor de piso diciendo: \"Revisión de precio en pasillo 3 para Cereal X\".",
        "3. Resolución en favor del cliente (si aplica criterio de tienda): Si la verificación tarda más de 60 segundos, el supervisor aplica la política de Garantía de Precio en Anaquel autorizando el precio menor en el sistema para no demorar la atención."
      ]
    },
    {
      "code": "IT-COM-15-02",
      "name": "PLANOGRAMAS DE EXHIBICIÓN",
      "poeCode": "POE-COM-15",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Niveles de Altura (Zonas de Visibilidad):\n       Ojos (1.50m - 1.70m): Zona de mayor venta e impulso (productos con mayor margen o marcas premium).\n       Manos (1.00m - 1.40m): Zona de alta accesibilidad para el cliente (productos de alta rotación).\n        Suelo / Base (< 0.80m): Productos pesados, voluminosos o de compra planificada (harinas, arroz, aceites grandes).\n        Techo / Superior (> 1.70m): Marcas de nicho, empaques livianos o señalización de categoría.",
        "Número de Caras (Facings): Cantidad de unidades de un mismo producto alineadas en el frente de la repisa. A mayor rotación o acuerdo comercial con el proveedor, mayor número de caras.",
        "Agrupación y Flujo: Ordena los artículos de izquierda a derecha (siguiendo el sentido de lectura) por subcategorías, precios o marcas.",
        "--"
      ],
      "examples": [
        "Ejemplo 1: Planograma de la Categoría de Café (Góndola de 4 Niveles)\n\nNivel de la Góndola # 4: (Ojos - Superior)\nPosición / Tipo de Producto: Café Gourmet, Orgánico y Café en Grano Especial (Margen alto)\nObjetivo Estratégico: Captar compras de impulso y clientes que buscan mayor calidad con alto margen de ganancia.",
        "Nivel de la Góndola # 3: (Manos - Medio Alto)\nPosición / Tipo de Producto: Café Molido Tradicional (Líderes de marca) y Cápsulas\nObjetivo Estratégico: Máxima visibilidad para las marcas de mayor demanda y frecuencia de compra.",
        "Nivel de la Góndola # 2: (Medio - Bajo)\nPosición / Tipo de Producto: Café Instantáneo y Mezclas 3 en 1 (café soluble listo para tomar\nObjetivo Estratégico: Facilidad de alcance para productos de rotación rápida y consumo diario.",
        "Nivel de la Góndola # 1: (Base - Inferior)\nPosición / Tipo de Producto: Sustitutos de Café, Presentaciones Institucionales o Económicas\nObjetivo Estratégico: Acomodar empaques voluminosos o de precio accesible que el cliente busca de forma planificada."
      ]
    },
    {
      "code": "IT-COM-15-03",
      "name": "PORTAFOLIO (DOSSIER) DE LOS PLANOS, FICHAS TÉCNICAS, MATERIALES, MEDIDAS Y CÓDIGOS DE COLOR DE TODA LA COMUNICACIÓN VISUAL DE UNA SUCURSAL DE SEÑALÉTICA",
      "poeCode": "POE-COM-15",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Cómo funciona un Dossier de Señalética\nEl dossier clasifica los elementos en niveles de jerarquía visual para no saturar el piso de venta y guiar la vista del cliente desde que entra hasta que sale:\n[Nivel 1: Dirección general] ──> Directorios de pasillo y letreros aéreos de departamento\n[Nivel 2: Ubicación de categoría] ──> Carteles colgantes sobre la góndola (ej. Lácteos, Arroz)\n[Nivel 3: Información de precio] ──> Flejeras, cenefas, rompetráficos y señalización de oferta\n[Nivel 4: Seguridad y Normativa] ──> Salidas de emergencia, extintores, zonas de evacuación",
        "1. Guía de Identidad Gráfica:\nTipografía: Tipografías de alta legibilidad a distancia (ej. Helvetica Bold, Arial Black, Montserrat).\nPaleta de Colores (Código Cromático): Rojo para ofertas/precios, Azul o Verde para orgánicos/frescos, Amarillo/Verde para seguridad.\nIconografía: Pictogramas estandarizados para baño, carnicería, panadería, cajas express, etc.",
        "2. Fichas Técnicas por Tipo de Señal:\nMedidas exactas y proporción.\nMateriales de fabricación: Acrílico, PVC espumado (Sintra), vinil autoadhesivo, cartulina sulfatada o estructura metálica.\nMétodo de fijación: Colgado de losa (tensores de acero), adherido a góndola, encajado en flejera de PVC.",
        "3. Plano de Ubicación y Alturas de Instalación:\nMapa de colocación: Plano del supermercado con coordenadas de montaje.\nAlturas estándar: Letreros aéreos principales a 3.00 - 3.50 metros; señalización de pasillo a 2.20 metros para librar el paso peatonal."
      ],
      "examples": [
        "Ejemplo 1: Señalética Aérea de Departamento (Nivel 1)\nPropósito: Indicar la ubicación de las grandes áreas desde cualquier punto de la tienda.\nPropósito: Indicar la ubicación de las grandes áreas desde cualquier punto de la tienda.\nFicha Técnica del Dossier:\n   Nombre: Cartel Aéreo de Cabecera - Sección Carnes.\n   Dimensiones: 180 cm X 60 cm\n   Material: PVC espumado de 5mm grabado con vinil reflectante.\n   Ubicación: Suspendido del techo a 3.20 m del suelo, directamente sobre el mostrador de servicio.\n   Color y Texto: Fondo azul oscuro con texto blanco e icono vectorial de silueta bovina.",
        "Ejemplo 2: Rompetráfico o Stopper de Góndola (Nivel 3 - Promocional)\nPropósito: Sobresalir del plano del estante para captar la atención de quien camina por el pasillo.\nFicha Técnica del Dossier:\n   Nombre: Stopper de Oferta Flash.\n   Dimensiones: 15cm X  25cm\n   Material: Polipropileno flexible impreso por ambas caras.\n   Soporte: Pista magnética o sujetador plástico que entra en el riel de la estantería.\n   Regla de uso: Solo puede colocarse en productos con más del $15\\%$ de descuento. Retirar al finalizar la vigencia de la campaña.",
        "Ejemplo 3: Flejera y Señalización de Precio en Anaquel (Nivel 3)\nPropósito: Mostrar la descripción del SKU, precio unitario, código de barras y precio por unidad de medida (ej. precio por kilo o litro).\nFicha Técnica del Dossier:\n   Nombre: Flejera de Estante Estándar.\n   Dimensiones: $100cm  X   3.8cm (largo de la repisa).\n   Material: Perfil extruido de PVC transparente con encaje de seguridad sobre el metal de la góndola.\n   Formato de Etiqueta: Papel térmico impreso con tipografía en negrita para el precio principal 24pt (letra/número de aproximadamente 8.46mm de altura) y precio por medida en tamaño menor 10pt (aproximadamente 3.52mm} de altura).\n\nDOH-DOH HARINA DE TRIGO 1KG    │ <-- Texto descripción (~9-10pt)\n    SKU: 780123456789   \n     $1.25            $1.25 x KG   \n    (24pt)                 (10pt) \n    [Grande /          [Pequeño /   \n    Precio Final]      Precio por Medida]",
        "--"
      ]
    },
    {
      "code": "IT-COM-15-04",
      "name": "MANUAL DE IDENTIDAD ATMOSFÉRICA",
      "poeCode": "POE-COM-15",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Definición de estándares: Se parametrizan magnitudes medibles (luxes, grados Kelvin, decibeles, grados Celsius) por cada área del supermercado.",
        "Implementación arquitectónica: Se integra en los planos constructivos y especificaciones de equipamiento (sistemas HVAC, luminarias LED focales, altavoces zonificados).",
        "Auditoría y Mantenimiento: Se utilizan listas de cotejo (checklists) diarias o semanales medidas con instrumentos (luxómetros, sonómetros) para verificar el cumplimiento.",
        "Capacitación al personal de tienda: Se entrena al equipo operativo en la activación de protocolos según la hora del día o la afluencia de clientes."
      ],
      "examples": [
        "Dimensiones Sensoriales:\n  1. Iluminación Focal:\n     Parámetros Técnicos: Frutas/Verduras: 3,000K (luz cálida, alto CRI).\n                                        Carnes/Pescados: Luz con acento rosado o neutro brillante.\n     Aplicación Estratégica en Supermercado: Resalta el frescor natural de los alimentos y activa la compra de impulso.\n2. Audio y Acústica:\n Parámetros Técnicos: Hora pico: Ritmo moderado (90–100 BPM).).\n                                        Hora baja: Ritmo lento (60–70 BPM), volumen < 60 dB\n     Aplicación Estratégica en Supermercado: Regula la velocidad del tráfico de clientes en los pasillos según el flujo en cajas.\n3. Aromatización (Marketing Olfativo):\n   Parámetros Técnicos: Zona de panadería: Difusión de esencia de pan recién horneado a las 7:00 AM y 5:00 PM.\n     Aplicación Estratégica en Supermercado: Estimula el apetito y dirige el flujo de clientes hacia áreas de alto margen.\n4. Climatización:\n   Parámetros Técnicos: Área general: 21°C–23°C.\n                                       Cerca de congeladores: Compensación térmica compensada (+1°C/2°C relativo).\n\nAplicación Estratégica en Supermercado: Evita que el cliente acelere su paso o abandone la zona de congelados por frío extremo.",
        "--",
        "--",
        "--"
      ]
    },
    {
      "code": "IT-COM-15-05",
      "name": "PLANO DE ÁREAS DE ESPERA",
      "poeCode": "POE-COM-15",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Cálculo de Densidad y Capacidad: Se calcula la superficie necesaria basada en el flujo promedio y pico de clientes por hora, aplicando estándares de espacio personal (aprox. $0.5m^2 a 0.8m}^2 por persona con carrito).",
        "Definición del Flujo y Mueblería (Tensobandas): Se establece si la fila de espera será de serpiente única (single-line queue) o múltiples filas paralelas, utilizando señalización de piso y barreras físicas para guiar el recorrido.",
        "Integración con Merchandising de Impulso: Se aprovechan los muros o divisores de la zona de espera para colocar exhibidores de compra de último minuto (dulces, bebidas frías, baterías).",
        "Monitoreo y Control Dinámico: A través de cámaras con visión artificial o sensores de conteo, se mide el tiempo de espera promedio (Tw) e intensidad de cola; si excede el umbral tolerado (ej. más de 3-4 personas en fila), se activan protocolos operacionales (apertura de cajas de apoyo o cajas rápidas)."
      ],
      "examples": [
        "Área del Supermercado: Línea de Cajas Principal\nTipo de Espera: Espera activa en fila\nElementos del Plano: Pasillos guías (tensobandas), líneas de demarcación en piso, zona de descongestión tras el pago.\nObjetivo de Gestión: Organizar el tráfico, proteger la circulación transversal y maximizar la venta cruzada de impulso.",
        "Área del Supermercado: Mostradores de Atención (Embutidos/Carnicería)\nTipo de Espera: Espera pasiva o turnos\nElementos del Plano: Sistema de tickets digital/pantallas de turno, espacio despejado frente al mueble de exhibición.\nObjetivo de Gestión: Evitar la aglomeración pegada al mostrador, permitiendo a otros clientes seguir transitando y viendo el producto.",
        "Área del Supermercado: Punto de Recogida (Click & Collect)\nTipo de Espera: Espera mixta (en vehículo o a pie)\nElementos del Plano: Cajones de estacionamiento delimitados, mostradores de entrega rápida, bancas o módulos de check-in.\nObjetivo de Gestión: Reducir el tiempo total de ciclo (lead time) de entrega a menos de 5 minutos desde la llegada.",
        "--"
      ]
    },
    {
      "code": "IT-COM-16-01",
      "name": "TABLERO DE CONTROL DE SUSTENTABILIDAD (VALUE DASHBOARD)",
      "poeCode": "POE-COM-16",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Ejecutar según el protocolo operativo del área."
      ],
      "examples": [
        "--"
      ]
    },
    {
      "code": "IT-COM-16-02",
      "name": "INFORMES DE AUDITORÍA DE VALOR PERIÓDICA",
      "poeCode": "POE-COM-16",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Ejecutar según el protocolo operativo del área."
      ],
      "examples": [
        "--"
      ]
    },
    {
      "code": "IT-COM-17-01",
      "name": "OPTIMIZAR CADA ETAPA POR LA QUE PASA UN PRODUCTO",
      "poeCode": "POE-COM-17",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "A. Gestión del Ciclo de Vida del Producto (PLM) \nControla la trazabilidad del inventario y las fases comerciales de la mercancía.\n1. Ingreso y Recepción: Registro con código de barras/RFID, auditoría de cadena de frío y validación de fecha de vencimiento.\n2. Exhibición y Rotación: Aplicación estricta de la regla PEPS / FEFO (First Expired, First Out).\n3. Monitoreo de Madurez Comercial: Seguimiento de rotación por categoría (Fast/Slow Movers).\n4. Fase Final / Salida: Liquidación programada, donación o merma/reciclaje.",
        "B. Mejora Continua (Kaizen)\nFilosofía operativa orientada a identificar e eliminar Muda (desperdicio) mediante la participación activa de todo el personal de tienda.\n1. Observar (Gemba Walk): Los supervisores caminan el piso de venta y bodega para identificar cuellos de botella reales.\n2. Estandarizar (5S): Organización, limpieza y clasificación en áreas de inventario y cajas.\n3. Medir y Mapear (VSM): Registrar tiempos en reabastecimiento, cobro en caja o descarga de camiones.\n4. Ajuste Pequeño e Inmediato: Implementar cambios visuales o procedimentales sencillos sin grandes inversiones"
      ],
      "examples": [
        "Fase de Recepción: El queso fresco ingresa con 30 días de vida útil.\nFase de Exhibición: Se acomoda detrás del lote anterior (FEFO) a una temperatura constante de 4 °C.\nFase de Cierre (Día 25): Si la rotación cae, el sistema activa un descuento automático del 30% en etiqueta amarilla (\"Consumo Próximo\").",
        "Etapa: Recepción\n  Gestión del Ciclo de Vida: Registro de lotes y fechas de caducidad al bajar del camión.\n  Aplicación Kaizen (Mejora Continua): Implementación de listas de chequeo visuales (Checklists) para reducir el tiempo de descarga en un 20%\nEtapa: Almacenamiento: \n  Gestión del Ciclo de Vida: Control de stock en bodega según categorías.\n  Aplicación Kaizen (Mejora Continua): Organización de pasillos con código de colores según alta o baja rotación (Metodología 5S).\nEtapa: Piso de Venta\n  Gestión del Ciclo de Vida: Ejecución de planogramas y rotación FEFO en góndola\n  Aplicación Kaizen (Mejora Continua): Uso de carritos de reposición pre-ordenados por pasillo para evitar viajes innecesarios a bodega.\nEtapa: Punto de Venta\n  Gestión del Ciclo de Vida: Registro final de salida de producto en cajas\n  Aplicación Kaizen (Mejora Continua): Rediseño del layout de la barra de empaque en caja para acelerar el escaneo por artículo."
      ]
    },
    {
      "code": "IT-COM-18-01",
      "name": "PROGRAMA DE ONBOARDING Y CAPACITACIÓN CONTINUA",
      "poeCode": "POE-COM-18",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "A. Onboarding (Inducción e Integración):\n1. Bienvenida General (Día 1): Presentación de la empresa, reglamento interno, normas de seguridad y recorrido por las instalaciones (Gemba Walk).\n2. Entrenamiento en Puesto (Días 2 al 7): Asignación de un \"Sombra\" o Buddy (un compañero experimentado) en el área asignada (Cajas, Perecederos, Bodega).\n3. Certificación Inicial (Día 15 a 30): Evaluación práctica del rol y retroalimentación individual.",
        "B. Capacitación Continua:\n1. Detección de Necesidades: Análisis de indicadores operativos (ej. mermas por mala manipulación, lentitud en cajas, quejas de clientes).\n2. Microlearning y Formación Práctica: Módulos breves (5 a 15 minutos) antes o después de la jornada, o talleres prácticos en piso de venta.\n3. Evaluación y Refuerzo: Monitoreo periódico de desempeño en el puesto de trabajo."
      ],
      "examples": [
        "Puesto: Cajero / Cajera.\nSemana 1: 4 horas de teoría sobre el sistema POS y servicio al cliente, seguidas de 12 horas operando la caja acompañados por un cajero senior que supervisa el cobro, el manejo del efectivo y el escaneo de productos.\nEntrega de Kit: Checklist visual impreso con los códigos de frutas y verduras sin código de barras (PLUs más comunes) para memorización rápida.",
        "Puesto: Personal del área de Carnicería.\nCapacitación: Taller mensual de 20 minutos sobre \"Prevención de Contaminación Cruzada y Cadena de Frío\".\nEjecución: Demostración técnica sobre desinfección adecuada de rebanadoras, uso de guantes de malla de acero para prevención de cortes y registro adecuado de temperaturas en vitrinas."
      ]
    },
    {
      "code": "IT-COM-19-01",
      "name": "PLAN DE VENTAS Y MARGEN COMERCIAL PROYECTADO DE INGRESOS POR CATEGORÍA (TOP-LINE)",
      "poeCode": "POE-COM-19",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "1. Definir la estructura de categorías: Agrupa la tienda en familias lógicas (ej. Abarrotes, Frescos, Cuidado Personal, Limpieza del Hogar, Bebidas no Alcohólicas, Panadería/Delicatessen).\n2. Analizar la historia y tendencias del mercado: Revisa ventas pasadas, estacionalidad (ej. Navidad, regreso a clases), inflación esperada en alimentos y crecimiento en tráfico de clientes.\n3. Establecer metas por categoría: \nAsigna roles estratégicos a cada categoría: \n  Categorías Destino / Tráfico: Alto volumen, precio competitivo, margen comercial más bajo (ej. Abarrotes básicos).\n  Categorías Margen / Especialidad: Menor volumen relativo, pero mayor margen comercial (ej. Cuidado personal premium, Delicatessen, Frescos).\n4. Calcular ventas y costo estimado por categoría: Determina la venta esperada y la contribución de margen de acuerdo con los acuerdos de precios con proveedores.\n5. Consolidar el Top-Line general: Suma las proyecciones individuales para obtener la cifra total del supermercado."
      ],
      "examples": [
        "Categoría: Abarrotes y Granos\nVenta Proyectada ($): $120,000\nParticipación en Venta (%): 30.00%\nMargen Comercial (%): 18.00%\nMargen Comercial Proyectado ($): $21,600\n\nCategoría: Frescos (Carnes, Frutas y Verduras) \nVenta Proyectada ($): $80,000\nParticipación en Venta (%): 20.00%\nMargen Comercial (%): 22.00%\nMargen Comercial Proyectado ($): $22,400"
      ]
    },
    {
      "code": "IT-COM-20-01",
      "name": "PORTAFOLIO DE PROYECTOS DE INVERSIÓN AUTORIZADOS (CAPEX LEDGER).",
      "poeCode": "POE-COM-20",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Ejecutar según el protocolo operativo del área."
      ],
      "examples": [
        "--"
      ]
    },
    {
      "code": "IT-COM-21-01",
      "name": "TABLERO DE CONTROL DE DESEMPEÑO (SCORECARD / DASHBOARD DE KPIS).",
      "poeCode": "POE-COM-21",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Ejecutar según el protocolo operativo del área."
      ],
      "examples": [
        "--"
      ]
    },
    {
      "code": "IT-COM-22-01",
      "name": "REPORTE DE VARIACIONES PRESUPUESTARIAS Y CAUSAS RAÍZ.",
      "poeCode": "POE-COM-22",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Ejecutar según el protocolo operativo del área."
      ],
      "examples": [
        "--"
      ]
    },
    {
      "code": "IT-COM-23-01",
      "name": "MINUTA DE ACUERDOS Y MATRIZ DE COMPROMISOS (ACCOUNTABILITY MATRIX).",
      "poeCode": "POE-COM-23",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Ejecutar según el protocolo operativo del área."
      ],
      "examples": [
        "--"
      ]
    },
    {
      "code": "IT-COM-24-01",
      "name": "REPORTE DE AVANCE DE ACCIONES CORRECTIVAS.",
      "poeCode": "POE-COM-24",
      "role": "Encargado de Calidad y Ventas",
      "checklist": [
        "Ejecutar según el protocolo operativo del área."
      ],
      "examples": [
        "--"
      ]
    }
  ],
  "registrosTemplates": [
    {
      "code": "REG-ADM-001",
      "name": "Bitácora de Arqueos y Envío de Valores ETV",
      "process": "POE-ADM-01",
      "purpose": "Constancia formal del conteo de valores entregados al transporte blindado.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-002",
      "name": "Acta de Cierre Diario de Operaciones ERP",
      "process": "POE-ADM-02",
      "purpose": "Evidencia de integración e inmutabilidad de cifras contables diarias.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-003",
      "name": "Expediente Auditado de Contratación",
      "process": "POE-ADM-03",
      "purpose": "Respaldo legal y de perfil de competencias exigido por ISO 9001.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-004",
      "name": "Registro Maestro de Activos Fijos",
      "process": "POE-ADM-04",
      "purpose": "Verificación física de la existencia y conservación del patrimonio de la empresa.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-012",
      "name": "Expedientes Contractuales Completo",
      "process": "POE-ADM-01",
      "purpose": "Carpeta física/digital con ofertas, contrato firmados, pólizas y garantías.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-013",
      "name": "Reporte de Contratos Próximos a Vencer",
      "process": "POE-ADM-GP-02",
      "purpose": "Informe gerencial con estatus de renovaciones y negociaciones en curso.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-014",
      "name": "Control de Cumplimiento de Cláusulas",
      "process": "POE-ADM-01",
      "purpose": "Evaluaciones de cumplimiento de obligaciones pactadas en contratos.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-015",
      "name": "Plan de Mantenimiento de Instalaciones",
      "process": "POE-ADM-GP-03",
      "purpose": "Cronograma preventivo para edificio, aire acondicionado, góndolas y red eléctrica.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-016",
      "name": "Órdenes de Trabajo Ejecutadas",
      "process": "POE-ADM-GP-03",
      "purpose": "Ticket físico/digital con detalle de reparación realizada y visto bueno.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-017",
      "name": "Registro de Mantenimiento Preventivo y Correctivo",
      "process": "POE-ADM-GP-03",
      "purpose": "Bitácora de intervenciones a infraestructura y mobiliario de tienda.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-018",
      "name": "Solicitudes de Servicios Atendidas",
      "process": "POE-ADM-GP-03",
      "purpose": "Registro de tiques cerrados por reparaciones o suministros solicitados.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-019",
      "name": "Control de Activos Menores y Mobiliario",
      "process": "POE-ADM-GP-03",
      "purpose": "Plaqueo e inventario físico de escritorios, góndolas, sillas y equipos menores.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-020",
      "name": "Reporte de Incidencias de Infraestructura",
      "process": "POE-ADM-GP-03",
      "purpose": "Estadísticas de fallas mecánicas, eléctricas o estructurales en la tienda.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-021",
      "name": "Evaluación de Proveedores de Servicios",
      "process": "POE-ADM-GP-03",
      "purpose": "Calificación de calidad, tiempo y costo de contratistas de mantenimiento.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-022",
      "name": "Pólizas de Seguros Vigentes",
      "process": "POE-ADM-GP-04",
      "purpose": "Documentos oficiales de pólizas de incendio, robo, responsabilidad civil y autos.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-023",
      "name": "Expedientes de Pólizas y Coberturas",
      "process": "POE-ADM-GP-04",
      "purpose": "Detalle de condiciones particulares, endosos y sumas aseguradas por activo.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-024",
      "name": "Calendario de Renovaciones de Seguros",
      "process": "POE-ADM-01",
      "purpose": "Control de fechas de vencimiento de primas y cuotas de seguros.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-025",
      "name": "Reporte de Siniestros Gestionados",
      "process": "POE-ADM-GP-04",
      "purpose": "Formato de reclamo a aseguradoras con detalle de indemnizaciones cobradas.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-026",
      "name": "Registro de Activos Asegurados",
      "process": "POE-ADM-GP-04",
      "purpose": "Listado de inmuebles, vehículos y mercancías amparadas bajo póliza.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-027",
      "name": "Análisis de Cobertura y Riesgos",
      "process": "POE-ADM-GP-04",
      "purpose": "Dictamen técnico sobre adecuación de sumas aseguradas vs. valor de mercado.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-028",
      "name": "Comprobantes de Pago de Primas",
      "process": "POE-ADM-GP-04",
      "purpose": "Facturas y recibos de pago al día de pólizas aseguradoras.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-029",
      "name": "Licencias Operativas Vigentes",
      "process": "POE-ADM-05",
      "purpose": "Certificados de permiso de funcionamiento, salud y medio ambiente.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-030",
      "name": "Permisos Regulatorios Actualizados",
      "process": "POE-ADM-05",
      "purpose": "Permisos municipales, registro de comercio y licencias de perifoneo/marcas.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-031",
      "name": "Registro Maestro de Licencias y Permisos",
      "process": "POE-ADM-05",
      "purpose": "Matriz de control de instituciones, número de resolución y vigencias.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-032",
      "name": "Calendario de Vencimientos y Renovaciones",
      "process": "POE-ADM-05",
      "purpose": "Alerta temprana para pago de impuestos de alcaldía y matrículas anuales.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-033",
      "name": "Expedientes de Trámites Regulatorios",
      "process": "POE-ADM-05",
      "purpose": "Carpeta de solicitudes en trámite ante ministerios y alcaldías.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-034",
      "name": "Comprobantes de Pago de Tasas",
      "process": "POE-ADM-01",
      "purpose": "Tiques y recibos de pagos gubernamentales y municipales.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-035",
      "name": "Reporte de Cumplimiento Legal y Regulatorio",
      "process": "POE-ADM-05",
      "purpose": "Diagnóstico de 100% de apego a la legislación comercial e higiénica.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-036",
      "name": "Registro de Correspondencia Enviada",
      "process": "POE-ADM-06",
      "purpose": "Bitácora con número de guía, destinatario y fecha de despacho.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-037",
      "name": "Acuses de Recibo Firmados",
      "process": "POE-ADM-06",
      "purpose": "Copia de notificaciones con firma, sello y fecha de recepción de contraparte.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-038",
      "name": "Control de Mensajería y Paquetería",
      "process": "POE-ADM-06",
      "purpose": "Registro de tiques de empresas de mensajería rápida externas.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-039",
      "name": "Bitácora de Distribución Interna",
      "process": "POE-ADM-06",
      "purpose": "Control de entrega de correspondencia a las jefaturas de la tienda.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-040",
      "name": "Archivo de Comunicaciones Oficiales",
      "process": "POE-ADM-06",
      "purpose": "Expediente con cartas recibidas de ministerios, alcaldías y proveedores.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-041",
      "name": "Reporte de Tiempos de Entrega y Recepción",
      "process": "POE-ADM-06",
      "purpose": "Indicador de eficiencia en la entrega de documentos críticos.",
      "area": "ADM"
    },
    {
      "code": "REG-ADM-GP-001",
      "name": "Expedientes físicos y digitales organizados.",
      "area": "ADM",
      "process": "POE-ADM-GP-01",
      "purpose": "Evidencia auditable del cumplimiento de GESTIÓN DOCUMENTAL."
    },
    {
      "code": "REG-ADM-GP-002",
      "name": "Matriz de control documental actualizada.",
      "area": "ADM",
      "process": "POE-ADM-GP-01",
      "purpose": "Evidencia auditable del cumplimiento de GESTIÓN DOCUMENTAL."
    },
    {
      "code": "REG-ADM-GP-003",
      "name": "Documentos clasificados y archivados.",
      "area": "ADM",
      "process": "POE-ADM-GP-01",
      "purpose": "Evidencia auditable del cumplimiento de GESTIÓN DOCUMENTAL."
    },
    {
      "code": "REG-ADM-GP-004",
      "name": "Registro de préstamos y consultas de documentos.",
      "area": "ADM",
      "process": "POE-ADM-GP-01",
      "purpose": "Evidencia auditable del cumplimiento de GESTIÓN DOCUMENTAL."
    },
    {
      "code": "REG-ADM-GP-005",
      "name": "Inventario documental.",
      "area": "ADM",
      "process": "POE-ADM-GP-01",
      "purpose": "Evidencia auditable del cumplimiento de GESTIÓN DOCUMENTAL."
    },
    {
      "code": "REG-ADM-GP-006",
      "name": "Respaldo digital de documentos críticos.",
      "area": "ADM",
      "process": "POE-ADM-GP-01",
      "purpose": "Evidencia auditable del cumplimiento de GESTIÓN DOCUMENTAL."
    },
    {
      "code": "REG-ADM-GP-007",
      "name": "Reporte de documentos vencidos o pendientes de actualización.",
      "area": "ADM",
      "process": "POE-ADM-GP-01",
      "purpose": "Evidencia auditable del cumplimiento de GESTIÓN DOCUMENTAL."
    },
    {
      "code": "REG-ADM-GP-008",
      "name": "Contratos elaborados y formalizados.",
      "area": "ADM",
      "process": "POE-ADM-GP-02",
      "purpose": "Evidencia auditable del cumplimiento de ADMINISTRACIÓN DE CONTRATOS."
    },
    {
      "code": "REG-ADM-GP-009",
      "name": "Base de datos o registro maestro de contratos.",
      "area": "ADM",
      "process": "POE-ADM-GP-02",
      "purpose": "Evidencia auditable del cumplimiento de ADMINISTRACIÓN DE CONTRATOS."
    },
    {
      "code": "REG-ADM-GP-010",
      "name": "Calendario de vencimientos contractuales.",
      "area": "ADM",
      "process": "POE-ADM-GP-02",
      "purpose": "Evidencia auditable del cumplimiento de ADMINISTRACIÓN DE CONTRATOS."
    },
    {
      "code": "REG-ADM-GP-011",
      "name": "Adendas y modificaciones contractuales.",
      "area": "ADM",
      "process": "POE-ADM-GP-02",
      "purpose": "Evidencia auditable del cumplimiento de ADMINISTRACIÓN DE CONTRATOS."
    },
    {
      "code": "REG-ADM-GP-012",
      "name": "Expedientes contractuales completos.",
      "area": "ADM",
      "process": "POE-ADM-GP-02",
      "purpose": "Evidencia auditable del cumplimiento de ADMINISTRACIÓN DE CONTRATOS."
    },
    {
      "code": "REG-ADM-GP-014",
      "name": "Control de cumplimiento de cláusulas contractuales.",
      "area": "ADM",
      "process": "POE-ADM-GP-02",
      "purpose": "Evidencia auditable del cumplimiento de ADMINISTRACIÓN DE CONTRATOS."
    },
    {
      "code": "REG-ADM-GP-024",
      "name": "Calendario de renovaciones.",
      "area": "ADM",
      "process": "POE-ADM-GP-04",
      "purpose": "Evidencia auditable del cumplimiento de GESTIÓN DE SEGUROS."
    },
    {
      "code": "REG-ADM-GP-034",
      "name": "Comprobantes de pago de tasas gubernamentales.",
      "area": "ADM",
      "process": "POE-ADM-05",
      "purpose": "Evidencia auditable del cumplimiento de ADMINISTRACIÓN DE LICENCIAS Y PERMISOS."
    },
    {
      "code": "REG-ADM-GP-036",
      "name": "ñ",
      "area": "ADM",
      "process": "POE-ADM-06",
      "purpose": "Evidencia auditable del cumplimiento de GESTIÓN DE CORRESPONDENCIA."
    },
    {
      "code": "REG-ADM-GP-043",
      "name": "Flujo De Efectivo Proyectado vs Real Anual, Mensual, Semanal Y Diario",
      "area": "ADM",
      "process": "POE-TES-01",
      "purpose": "Evidencia auditable del cumplimiento de ADMINISTRACION DE FLUJO DE EFECTIVO."
    },
    {
      "code": "REG-ADM-GP-046",
      "name": "Libro Diario actualizado y registros contables completos y oportunos",
      "area": "ADM",
      "process": "POE-ADM-GP-09",
      "purpose": "Evidencia auditable del cumplimiento de 1. REGISTROS CONTABLE."
    },
    {
      "code": "REG-ADM-GP-047",
      "name": "Comprobantes de ingresos contabilizados, pólizas contables y reporte de ingresos registrados.",
      "area": "ADM",
      "process": "POE-ADM-GP-10",
      "purpose": "Evidencia auditable del cumplimiento de 1.1 REGISTRO DE INGRESOS.."
    },
    {
      "code": "REG-ADM-GP-048",
      "name": "Comprobantes de egresos contabilizados, pólizas de pago y reporte de gastos registrados.",
      "area": "ADM",
      "process": "POE-ADM-GP-11",
      "purpose": "Evidencia auditable del cumplimiento de 1.2 REGISTRO DE EGRESOS.."
    },
    {
      "code": "REG-ADM-GP-049",
      "name": "Libro de compras y ventas actualizado, facturas registradas y reporte de transacciones comerciales.",
      "area": "ADM",
      "process": "POE-ADM-GP-12",
      "purpose": "Evidencia auditable del cumplimiento de 1.3 REGISTRO DE COMPRAS Y VENTAS.."
    },
    {
      "code": "REG-ADM-GP-050",
      "name": "Cálculo mensual de depreciaciones y amortizaciones, asientos contables y auxiliares de activos.",
      "area": "ADM",
      "process": "POE-ADM-GP-13",
      "purpose": "Evidencia auditable del cumplimiento de 1.4 REGISTRO DE DEPRECIACIONES Y AMORTIZACIONES.."
    },
    {
      "code": "REG-ADM-GP-051",
      "name": "Asientos de provisiones registradas, detalle de provisiones y soporte de cálculo.",
      "area": "ADM",
      "process": "POE-ADM-GP-14",
      "purpose": "Evidencia auditable del cumplimiento de 1.5 CONTABILIZACIÓN DE PROVISIONES.."
    },
    {
      "code": "REG-ADM-GP-052",
      "name": "Conciliaciones realizadas y saldos contables depurados y confiables",
      "area": "ADM",
      "process": "POE-ADM-GP-15",
      "purpose": "Evidencia auditable del cumplimiento de 2. CONTROL Y CONCILIACIONES."
    },
    {
      "code": "REG-ADM-GP-053",
      "name": "Conciliaciones bancarias aprobadas y diferencias identificadas y resueltas.",
      "area": "ADM",
      "process": "POE-ADM-GP-16",
      "purpose": "Evidencia auditable del cumplimiento de 2.1 CONCILIACIONES BANCARIAS.."
    },
    {
      "code": "REG-ADM-GP-054",
      "name": "Reporte conciliado de cartera de clientes y diferencias corregidas.",
      "area": "ADM",
      "process": "POE-ADM-GP-17",
      "purpose": "Evidencia auditable del cumplimiento de 2.2 CONCILIACIÓN DE CUENTAS POR COBRAR.."
    },
    {
      "code": "REG-ADM-GP-055",
      "name": "Reporte conciliado de proveedores y partidas pendientes regularizadas.",
      "area": "ADM",
      "process": "POE-ADM-GP-18",
      "purpose": "Evidencia auditable del cumplimiento de 2.3 CONCILIACIÓN DE CUENTAS POR PAGAR.."
    },
    {
      "code": "REG-ADM-GP-056",
      "name": "Auxiliares contables validados y reporte de inconsistencias detectadas.",
      "area": "ADM",
      "process": "POE-ADM-GP-19",
      "purpose": "Evidencia auditable del cumplimiento de 2.4 REVISIÓN DE AUXILIARES CONTABLES.."
    },
    {
      "code": "REG-ADM-GP-057",
      "name": "Pólizas de ajuste autorizadas y registros corregidos.",
      "area": "ADM",
      "process": "POE-ADM-GP-20",
      "purpose": "Evidencia auditable del cumplimiento de 2.5 AJUSTES CONTABLES.."
    },
    {
      "code": "REG-ADM-GP-058",
      "name": "Cierre contable ejecutado y validado dentro de los plazos establecidos",
      "area": "ADM",
      "process": "POE-ADM-GP-21",
      "purpose": "Evidencia auditable del cumplimiento de 3. CIERRE CONTABLE."
    },
    {
      "code": "REG-ADM-GP-059",
      "name": "Estados financieros mensuales preliminares y cierre mensual aprobado.",
      "area": "ADM",
      "process": "POE-ADM-GP-22",
      "purpose": "Evidencia auditable del cumplimiento de 3.1 CIERRE MENSUAL.."
    },
    {
      "code": "REG-ADM-GP-060",
      "name": "Certificación de saldos contables y conciliación final de cuentas.",
      "area": "ADM",
      "process": "POE-ADM-GP-23",
      "purpose": "Evidencia auditable del cumplimiento de 3.2 VALIDACIÓN DE SALDOS.."
    },
    {
      "code": "REG-ADM-GP-061",
      "name": "Estados financieros emitidos de acuerdo con normas contables aplicables",
      "area": "ADM",
      "process": "POE-ADM-GP-24",
      "purpose": "Evidencia auditable del cumplimiento de 4. ELABORACIÓN DE ESTADOS FINANCIEROS."
    },
    {
      "code": "REG-ADM-GP-064",
      "name": "Flujo de Efectivo elaborado y presentado.",
      "area": "ADM",
      "process": "POE-ADM-GP-27",
      "purpose": "Evidencia auditable del cumplimiento de 4.3 ESTADO DE FLUJO DE EFECTIVO.."
    },
    {
      "code": "REG-ADM-GP-065",
      "name": "Estado de Cambios en el Patrimonio actualizado.",
      "area": "ADM",
      "process": "POE-ADM-GP-28",
      "purpose": "Evidencia auditable del cumplimiento de 4.4 ESTADO DE CAMBIOS EN EL PATRIMONIO.."
    },
    {
      "code": "REG-ADM-GP-066",
      "name": "Notas explicativas completas y documentadas.",
      "area": "ADM",
      "process": "POE-ADM-GP-29",
      "purpose": "Evidencia auditable del cumplimiento de 4.5 NOTAS A LOS ESTADOS FINANCIEROS.."
    },
    {
      "code": "REG-ADM-GP-067",
      "name": "Obligaciones fiscales y regulatorias cumplidas en tiempo y forma",
      "area": "ADM",
      "process": "POE-ADM-GP-30",
      "purpose": "Evidencia auditable del cumplimiento de 5. CUMPLIMIENTO FISCAL."
    },
    {
      "code": "REG-ADM-GP-068",
      "name": "Declaraciones fiscales presentadas y acuses de recepción.",
      "area": "ADM",
      "process": "POE-ADM-GP-31",
      "purpose": "Evidencia auditable del cumplimiento de 5.1 DECLARACIONES TRIBUTARIAS.."
    },
    {
      "code": "REG-ADM-GP-069",
      "name": "Papeles de trabajo de impuestos y determinación tributaria.",
      "area": "ADM",
      "process": "POE-ADM-GP-32",
      "purpose": "Evidencia auditable del cumplimiento de 5.2 CÁLCULO DE IMPUESTOS.."
    },
    {
      "code": "REG-ADM-GP-070",
      "name": "Suministro de información y seguimiento a observaciones.",
      "area": "ADM",
      "process": "POE-ADM-GP-33",
      "purpose": "Evidencia auditable del cumplimiento de 5.3 ATENCIÓN A AUDITORÍAS INTERNAS Y EXTERNAS."
    },
    {
      "code": "REG-ADM-GP-071",
      "name": "Verificación del cumplimiento de NIIF, leyes fiscales y regulaciones.",
      "area": "ADM",
      "process": "POE-ADM-GP-34",
      "purpose": "Evidencia auditable del cumplimiento de 5.4 CUMPLIMIENTO DE NORMAS CONTABLES Y TRIBUTARIAS."
    },
    {
      "code": "REG-ADM-GP-072",
      "name": "Resguardo físico y digital de soportes contables.",
      "area": "ADM",
      "process": "POE-ADM-GP-35",
      "purpose": "Evidencia auditable del cumplimiento de 5.5 ARCHIVO Y CUSTODIA DE DOCUMENTACIÓN CONTABLE."
    },
    {
      "code": "REG-ADM-GP-073",
      "name": "Información financiera analizada para apoyar la toma de decisiones",
      "area": "ADM",
      "process": "POE-ADM-GP-36",
      "purpose": "Evidencia auditable del cumplimiento de 6. ANÁLISIS FINANCIERO."
    },
    {
      "code": "REG-ADM-GP-074",
      "name": "Informe de rentabilidad por empresa, sucursal, línea de negocio o producto.",
      "area": "ADM",
      "process": "POE-ADM-GP-37",
      "purpose": "Evidencia auditable del cumplimiento de 6.1 ANÁLISIS DE RENTABILIDAD.."
    },
    {
      "code": "REG-ADM-GP-076",
      "name": "Informe de estructura financiera y nivel de endeudamiento.",
      "area": "ADM",
      "process": "POE-ADM-GP-39",
      "purpose": "Evidencia auditable del cumplimiento de 6.3 ANÁLISIS DE ENDEUDAMIENTO.."
    },
    {
      "code": "REG-ADM-GP-077",
      "name": "Dashboard de KPIs financieros y tendencias históricas.",
      "area": "ADM",
      "process": "POE-ADM-GP-40",
      "purpose": "Evidencia auditable del cumplimiento de 6.4 INDICADORES FINANCIEROS.."
    },
    {
      "code": "REG-ADM-GP-078",
      "name": "Informe ejecutivo financiero y presentación gerencial para toma de decisiones.",
      "area": "ADM",
      "process": "POE-ADM-GP-41",
      "purpose": "Evidencia auditable del cumplimiento de 6.5 PRESENTACIÓN DE RESULTADOS A LA DIRECCIÓN.."
    },
    {
      "code": "REG-ADM-GP-079",
      "name": "Política de inversión aprobada, manual de lineamientos, matriz de niveles de aprobación, registro de versiones, acta de aprobación de la política.",
      "area": "ADM",
      "process": "POE-ADM-GP-42",
      "purpose": "Evidencia auditable del cumplimiento de 1. DEFINICIÓN Y ACTUALIZACIÓN DE LA POLÍTICA DE INVERSIÓN."
    },
    {
      "code": "REG-ADM-GP-080",
      "name": "Solicitudes de inversión, cartera preliminar de proyectos, registro de necesidades de inversión, justificaciones técnicas y estratégicas.",
      "area": "ADM",
      "process": "POE-ADM-GP-43",
      "purpose": "Evidencia auditable del cumplimiento de 2. IDENTIFICACIÓN DE NECESIDADES DE INVERSIÓN."
    },
    {
      "code": "REG-ADM-GP-081",
      "name": "Perfil del proyecto, ficha técnica, expediente del proyecto, presupuesto preliminar, cronograma inicial.",
      "area": "ADM",
      "process": "POE-ADM-GP-44",
      "purpose": "Evidencia auditable del cumplimiento de 3. FORMULACIÓN DE PROYECTOS DE INVERSIÓN."
    },
    {
      "code": "REG-ADM-GP-082",
      "name": "Informe de factibilidad técnica, especificaciones técnicas, análisis de alternativas, informe de viabilidad operativa.",
      "area": "ADM",
      "process": "POE-ADM-GP-45",
      "purpose": "Evidencia auditable del cumplimiento de 4. EVALUACIÓN TÉCNICA DE LA INVERSIÓN."
    },
    {
      "code": "REG-ADM-GP-083",
      "name": "Flujo de caja proyectado, análisis costo-beneficio, VPN, TIR, ROI, Payback, análisis financiero, evaluación económica.",
      "area": "ADM",
      "process": "POE-ADM-GP-46",
      "purpose": "Evidencia auditable del cumplimiento de 5. EVALUACIÓN FINANCIERA Y ECONÓMICA."
    },
    {
      "code": "REG-ADM-GP-084",
      "name": "Matriz de riesgos, mapa de riesgos, plan de mitigación, evaluación de impacto y probabilidad, informe de riesgos.",
      "area": "ADM",
      "process": "POE-ADM-GP-47",
      "purpose": "Evidencia auditable del cumplimiento de 6. EVALUACIÓN Y GESTIÓN DE RIESGOS DE INVERSIÓN."
    },
    {
      "code": "REG-ADM-GP-085",
      "name": "Matriz de priorización, ranking de proyectos, criterios de selección, portafolio priorizado de inversiones.",
      "area": "ADM",
      "process": "POE-ADM-GP-48",
      "purpose": "Evidencia auditable del cumplimiento de 7. PRIORIZACIÓN DE INVERSIONES."
    },
    {
      "code": "REG-ADM-GP-086",
      "name": "Acta del Comité de Inversiones, resolución de aprobación, autorización presupuestaria, expediente aprobado.",
      "area": "ADM",
      "process": "POE-ADM-GP-49",
      "purpose": "Evidencia auditable del cumplimiento de 8. APROBACIÓN DE INVERSIONES."
    },
    {
      "code": "REG-ADM-GP-087",
      "name": "Plan de ejecución, cronograma definitivo, presupuesto autorizado, plan de adquisiciones, plan de financiamiento.",
      "area": "ADM",
      "process": "POE-ADM-GP-50",
      "purpose": "Evidencia auditable del cumplimiento de 9. PLANIFICACIÓN DE LA EJECUCIÓN DE LA INVERSIÓN."
    },
    {
      "code": "REG-ADM-GP-088",
      "name": "Plan financiero, contratos de crédito, calendario de desembolsos, autorización de financiamiento, flujo de fondos.",
      "area": "ADM",
      "process": "POE-ADM-GP-51",
      "purpose": "Evidencia auditable del cumplimiento de 10. GESTIÓN DEL FINANCIAMIENTO."
    },
    {
      "code": "REG-ADM-GP-089",
      "name": "Órdenes de compra, contratos, avances físicos, avances financieros, registros de ejecución, expediente de inversión.",
      "area": "ADM",
      "process": "POE-ADM-GP-52",
      "purpose": "Evidencia auditable del cumplimiento de 11. EJECUCIÓN DE LA INVERSIÓN."
    },
    {
      "code": "REG-ADM-GP-090",
      "name": "Reportes de avance, indicadores de ejecución, informes de desviaciones, control presupuestario, reportes de cumplimiento.",
      "area": "ADM",
      "process": "POE-ADM-GP-53",
      "purpose": "Evidencia auditable del cumplimiento de 12. SEGUIMIENTO Y CONTROL DE INVERSIONES."
    },
    {
      "code": "REG-ADM-GP-091",
      "name": "Solicitudes de cambio, evaluación de impacto, autorizaciones de cambio, historial de modificaciones, presupuesto actualizado.",
      "area": "ADM",
      "process": "POE-ADM-GP-54",
      "purpose": "Evidencia auditable del cumplimiento de 13. CONTROL DE CAMBIOS DEL PROYECTO DE INVERSIÓN."
    },
    {
      "code": "REG-ADM-GP-092",
      "name": "Informe de cierre, análisis comparativo entre resultados reales y proyectados, evaluación de beneficios, análisis de rentabilidad.",
      "area": "ADM",
      "process": "POE-ADM-GP-55",
      "purpose": "Evidencia auditable del cumplimiento de 14. EVALUACIÓN DE RESULTADOS DE LA INVERSIÓN."
    },
    {
      "code": "REG-ADM-GP-093",
      "name": "Informe de auditoría, evidencia de cumplimiento, hallazgos, acciones correctivas, seguimiento de observaciones.",
      "area": "ADM",
      "process": "POE-ADM-GP-56",
      "purpose": "Evidencia auditable del cumplimiento de 15. AUDITORÍA Y CUMPLIMIENTO DE INVERSIONES."
    },
    {
      "code": "REG-ADM-GP-094",
      "name": "Portafolio actualizado, reporte ejecutivo de inversiones, estado de proyectos, indicadores consolidados del portafolio.",
      "area": "ADM",
      "process": "POE-ADM-GP-57",
      "purpose": "Evidencia auditable del cumplimiento de 16. ACTUALIZACIÓN DEL PORTAFOLIO DE INVERSIONES."
    },
    {
      "code": "REG-ADM-GP-095",
      "name": "Informe de lecciones aprendidas, propuestas de mejora, actualización de políticas, plan de mejora continua, nueva versión del procedimiento.",
      "area": "ADM",
      "process": "POE-ADM-GP-58",
      "purpose": "Evidencia auditable del cumplimiento de 17. MEJORA CONTINUA DE LA POLÍTICA DE INVERSIÓN."
    },
    {
      "code": "REG-ADM-GP-096",
      "name": "Planificacion y ejecucion de la auditoria de documentos legales: Facturas, CCF, Nota de Credito, Notas de Remisión, Chequeras",
      "area": "ADM",
      "process": "POE-ADM-GP-59",
      "purpose": "Evidencia auditable del cumplimiento de CONTROL DE ACTIVOS."
    },
    {
      "code": "REG-ADM-GP-097",
      "name": "Planificacion y ejecucion de la Auditoria de inventarios",
      "area": "ADM",
      "process": "POE-ADM-GP-59",
      "purpose": "Evidencia auditable del cumplimiento de CONTROL DE ACTIVOS."
    },
    {
      "code": "REG-ADM-GP-098",
      "name": "Planificacion y ejecucion de la Auditoria de cartera de créditos",
      "area": "ADM",
      "process": "POE-ADM-GP-59",
      "purpose": "Evidencia auditable del cumplimiento de CONTROL DE ACTIVOS."
    },
    {
      "code": "REG-ADM-GP-099",
      "name": "Planificacion y ejecucion de los Arqueos de caja general",
      "area": "ADM",
      "process": "POE-ADM-GP-59",
      "purpose": "Evidencia auditable del cumplimiento de CONTROL DE ACTIVOS."
    },
    {
      "code": "REG-ADM-GP-100",
      "name": "Planificaciony ejecucion de los Arqueos de caja chica",
      "area": "ADM",
      "process": "POE-ADM-GP-59",
      "purpose": "Evidencia auditable del cumplimiento de CONTROL DE ACTIVOS."
    },
    {
      "code": "REG-ADM-GP-101",
      "name": "Auditoria y ejecucion de cartera de créditos",
      "area": "ADM",
      "process": "POE-ADM-GP-59",
      "purpose": "Evidencia auditable del cumplimiento de CONTROL DE ACTIVOS."
    },
    {
      "code": "REG-ADM-GP-102",
      "name": "Reunion semanal con Gerente General para seguimiento de actividades",
      "area": "ADM",
      "process": "POE-ADM-GP-59",
      "purpose": "Evidencia auditable del cumplimiento de CONTROL DE ACTIVOS."
    },
    {
      "code": "REG-ADM-GP-103",
      "name": "Reunion mensual con Comite Ejecutivo para rendimiento de cuentas",
      "area": "ADM",
      "process": "POE-ADM-GP-59",
      "purpose": "Evidencia auditable del cumplimiento de CONTROL DE ACTIVOS."
    },
    {
      "code": "REG-CNT-001",
      "name": "Libro Diario Actualizado y Registros",
      "process": "POE-CNT-001",
      "purpose": "Impresión/archivo digital del registro cronológico de pólizas contables.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-002",
      "name": "Comprobantes de Ingresos Contabilizados",
      "process": "POE-CNT-002",
      "purpose": "Pólizas de ingresos con tiques Z, facturas y fichas de depósito.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-003",
      "name": "Comprobantes de Egresos Contabilizados",
      "process": "POE-CNT-003",
      "purpose": "Pólizas de egreso con facturas, órdenes de pago y transferencias.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-004",
      "name": "Libro de Compras y Ventas Actualizado",
      "process": "POE-CNT-004",
      "purpose": "Libros fiscales en formato legal exigido por la autoridad tributaria.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-005",
      "name": "Cálculo Mensual de Depreciaciones",
      "process": "POE-CNT-005",
      "purpose": "Cuadro resumen de desgaste de activos fijos con asiento cargado.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-006",
      "name": "Asientos de Provisiones Registradas",
      "process": "POE-CNT-006",
      "purpose": "Papel de trabajo que justifica provisiones de aguinaldo, indemnización y gastos.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-007",
      "name": "Conciliaciones Realizadas y Saldos Depurados",
      "process": "POE-CNT-007",
      "purpose": "Informes de cruce de cuentas con notas de soporte.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-008",
      "name": "Conciliaciones Bancarias Aprobadas",
      "process": "POE-CNT-008",
      "purpose": "Documento de conciliación firmado adjuntando estado de cuenta bancario.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-009",
      "name": "Reporte Conciliado de Cartera de Clientes",
      "process": "POE-CNT-009",
      "purpose": "Cruce del mayor contable vs. módulo auxiliar de cuentas por cobrar.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-010",
      "name": "Reporte Conciliado de Proveedores",
      "process": "POE-CNT-010",
      "purpose": "Cruce del mayor contable vs. estado de cuenta exigido a proveedores.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-011",
      "name": "Auxiliares Contables Validados",
      "process": "POE-CNT-011",
      "purpose": "Balanza de comprobación a nivel de subcuentas sin saldos contrarios.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-012",
      "name": "Pólizas de Ajuste Autorizadas",
      "process": "POE-CNT-012",
      "purpose": "Registro de corrección de errores con firma de autorización gerencial.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-013",
      "name": "Cierre Contable Ejecutado y Validado",
      "process": "POE-CNT-013",
      "purpose": "Certificado de inhabilitación de módulo mensual e inicio de nuevo periodo.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-014",
      "name": "Estados Financieros Mensuales Preliminares",
      "process": "POE-CNT-014",
      "purpose": "Borrador de EEFF presentado para revisión del cierre.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-015",
      "name": "Certificación de Saldos Contables",
      "process": "POE-CNT-015",
      "purpose": "Acta de validación final de cuentas de balance para cierre de ejercicio.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-016",
      "name": "Juego de Estados Financieros Emitidos",
      "process": "POE-CNT-016",
      "purpose": "Conjunto completo de informes financieros auditables bajo NIIF.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-017",
      "name": "Balance General Emitido y Aprobado",
      "process": "POE-ADM-GP-25",
      "purpose": "Estado de Situación Financiera firmado por Contador y Gerente.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-018",
      "name": "Estado de Resultados Emitido y Validado",
      "process": "POE-ADM-GP-26",
      "purpose": "Estado de Pérdidas y Ganancias con desglose de utilidad.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-019",
      "name": "Estado de Flujo de Efectivo Elaborado",
      "process": "POE-CNT-019",
      "purpose": "Clasificación de flujo de efectivo por operación, inversión y financiamiento.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-020",
      "name": "Estado de Cambios en el Patrimonio",
      "process": "POE-CNT-020",
      "purpose": "Informe de variaciones de capital, reservas y utilidades acumuladas.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-021",
      "name": "Notas a los Estados Financieros",
      "process": "POE-CNT-021",
      "purpose": "Documento explicativo de políticas contables y contingencias NIIF.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-022",
      "name": "Obligaciones Fiscales Cumplidas",
      "process": "POE-CNT-022",
      "purpose": "Calendario tributario con sello de presentación en tiempo de ley.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-023",
      "name": "Declaraciones Fiscales y Acuses de Recibo",
      "process": "POE-CNT-023",
      "purpose": "Copia de declaraciones de IVA, Pago a Cuenta, Retenciones e ISR con comprobante de pago.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-024",
      "name": "Papeles de Trabajo de Determinación Tributaria",
      "process": "POE-CNT-024",
      "purpose": "Hojas de cálculo detalladas que justifican los montos de impuestos.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-025",
      "name": "Suministro de Información a Auditores",
      "process": "POE-CNT-025",
      "purpose": "Expediente de entregas de requerimientos a auditoría externa e interna.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-026",
      "name": "Certificado de Verificación Normativa",
      "process": "POE-CNT-026",
      "purpose": "Dictamen de apego a la legislación tributaria y NIIF para PYMES.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-027",
      "name": "Expedientes Contables en Resguardo Legal",
      "process": "POE-CNT-027",
      "purpose": "Cajas de archivo rotuladas con soportes contables guardadas por 10 años.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-028",
      "name": "Reporte de Análisis Financiero Consolidado",
      "process": "POE-CNT-028",
      "purpose": "Informe ejecutivo con gráficos de tendencias y análisis vertical/horizontal.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-029",
      "name": "Informe de Rentabilidad por Sucursal/Línea",
      "process": "POE-CNT-029",
      "purpose": "Estudio de margen de utilidad por centro de costos y categoría.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-030",
      "name": "Informe de Liquidez y Capacidad de Pago",
      "process": "POE-ADM-GP-38",
      "purpose": "Evaluación de razón corriente, prueba ácida y capital de trabajo.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-031",
      "name": "Informe de Estructura Financiera y Deuda",
      "process": "POE-CNT-031",
      "purpose": "Análisis del nivel de endeudamiento y costo de apalancamiento.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-032",
      "name": "Dashboard de KPIs Financieros",
      "process": "POE-CNT-032",
      "purpose": "Tablero visual de control gerencial con indicadores clave de desempeño.",
      "area": "ADM"
    },
    {
      "code": "REG-CNT-033",
      "name": "Presentación Gerencial de Resultados",
      "process": "POE-CNT-033",
      "purpose": "Juego de diapositivas presentado en junta directiva para la toma de decisiones.",
      "area": "ADM"
    },
    {
      "code": "REG-CXC-001",
      "name": "Resultados de la Gestión de CxC y Cobro",
      "process": "POE-CXC-01",
      "purpose": "Informe de recuperación de cartera, saldos por tramo y rotación.",
      "area": "ADM"
    },
    {
      "code": "REG-CXC-002",
      "name": "Reuniones con Comité de Crédito",
      "process": "POE-CXC-01",
      "purpose": "Acta oficial con aprobaciones de cupo, bloqueos e castigos de cartera.",
      "area": "ADM"
    },
    {
      "code": "REG-GOB-001",
      "name": "Acta de Rendición de Cuentas y Acuerdos",
      "process": "POE-GOB-01",
      "purpose": "Minuta firmada en reunión gerencial con compromisos y fechas límite.",
      "area": "ADM"
    },
    {
      "code": "REG-LOG-001",
      "name": "Matriz de Políticas de Compra",
      "process": "POE-LOG-01",
      "purpose": "Documento normativo con reglas de selección de marcas y líneas de compra.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-002",
      "name": "Matriz de Disponibilidad Según Políticas",
      "process": "POE-LOG-02",
      "purpose": "Listado parametrizado en ERP con productos autorizados por sucursal.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-003",
      "name": "Menú Definitivo con Matriz de Disponibilidad",
      "process": "POE-LOG-02",
      "purpose": "Estructura aprobada de surtido de mercancías en las salas de venta.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-004",
      "name": "Integración del Menú al Sistema ERP",
      "process": "POE-LOG-02",
      "purpose": "Confirmación técnica de visibilidad del catálogo en terminales POS.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-005",
      "name": "Códigos Digitados en Catálogo de Productos",
      "process": "POE-LOG-03",
      "purpose": "Base de datos de SKUs creados con atributos técnicos e impuestos completos.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-006",
      "name": "Definición de Políticas de Proveedores",
      "process": "POE-LOG-04",
      "purpose": "Establecimiento de criterios corporativos para selección y auditoría.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-007",
      "name": "Calidad de Productos de Proveedores",
      "process": "POE-LOG-04",
      "purpose": "Reporte de Vendor Rating con calificación y nivel de servicio.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-008",
      "name": "Registro de Proveedores de Fuente Única",
      "process": "POE-LOG-04",
      "purpose": "Matriz de evaluación de riesgos de desabasto para productos críticos.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-009",
      "name": "Bitácora de Contratos Cancelados",
      "process": "POE-LOG-04",
      "purpose": "Histórico de contratos rescindidos por incumplimiento de calidades.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-010",
      "name": "Expediente Maestro de Proveedores Homologados",
      "process": "POE-LOG-04",
      "purpose": "Padrón oficial de proveedores habilitados para emitir órdenes de compra.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-011",
      "name": "Acta Oficial del Comité de la Demanda",
      "process": "POE-LOG-05",
      "purpose": "Minuta de acuerdos mensuales sobre proyecciones comerciales y CD.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-012",
      "name": "Sugerido de Compras Según Punto de Reorden",
      "process": "POE-LOG-06",
      "purpose": "Generación automática en ERP de sugeridos para reposición de stock.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-013",
      "name": "Venta Perdida Proyectada por Falta de Stock",
      "process": "POE-LOG-06",
      "purpose": "Indicador financiero del impacto de quiebres de inventario en anaquel.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-014",
      "name": "Monto de Inventario con Obsolescencia",
      "process": "POE-LOG-06",
      "purpose": "Auditoría mensual de mercancía inmovilizada sin rotación.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-015",
      "name": "Inventario Fuera de la Meta de Rotación",
      "process": "POE-LOG-06",
      "purpose": "Listado de SKUs que superan la meta de días de stock (DOH).",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-016",
      "name": "Control de Inventario de Nuevo Ingreso",
      "process": "POE-LOG-06",
      "purpose": "Seguimiento de rotación y comportamiento inicial de nuevos lanzamientos.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-017",
      "name": "Alerta Temprana de Productos Nuevos Sin Venta",
      "process": "POE-LOG-06",
      "purpose": "Identificación quincenal de novedades de catálogo sin demanda real.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-018",
      "name": "Monto de Inventario a Depurar o Sustituir",
      "process": "POE-LOG-06",
      "purpose": "Aprobación oficial del Comité para discontinuar y depurar SKUs.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-019",
      "name": "Porcentaje de Order Fill Rate",
      "process": "POE-LOG-07",
      "purpose": "Medición de entregas completas de los proveedores logísticos.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-020",
      "name": "Porcentaje de Pedidos Atrasados (Back Order)",
      "process": "POE-LOG-08",
      "purpose": "Indicador del desfase de días en la entrega de proveedores.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-021",
      "name": "Porcentaje de Venta Perdida por Marca",
      "process": "POE-LOG-08",
      "purpose": "Análisis mensual de pérdidas comerciales atribuidas a marcas proveedoras.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-022",
      "name": "Reporte de Rotación de Inventarios (ITO)",
      "process": "POE-LOG-08",
      "purpose": "Vueltas anualizadas del capital invertido en inventario (Meta: ≥ 28).",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-023",
      "name": "Registro de Órdenes de Compra Vigentes",
      "process": "POE-LOG-10",
      "purpose": "Control del estatus de órdenes abiertas comprometidas en tránsito.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-024",
      "name": "Reporte de Pedidos Perfectos (OTIF)",
      "process": "POE-LOG-11",
      "purpose": "Porcentaje mensual de entregas a tiempo, completas y correctas.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-025",
      "name": "Bitácora de Reclamos y Devoluciones",
      "process": "POE-LOG-12",
      "purpose": "Historial de notas de crédito y devoluciones pendientes por cobrar.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-026",
      "name": "Acta de Recepción e Inspección en Rampa",
      "process": "POE-LOG-13",
      "purpose": "Evidencia física y control sanitario al descargar mercancías en muelle.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-027",
      "name": "Mapa de Ubicaciones WMS",
      "process": "POE-LOG-14",
      "purpose": "Registro de ubicación exacta y etiquetado LPN en estantería del CD.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-028",
      "name": "Orden de Picking Completa",
      "process": "POE-LOG-15",
      "purpose": "Hoja de ruta y confirmación de bultos preparados para sucursales.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-029",
      "name": "Manifiesto de Carga y Despacho",
      "process": "POE-LOG-16",
      "purpose": "Manifiesto oficial de carga sellado con marchamos numerados.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-030",
      "name": "Control de Tiempos de Transporte",
      "process": "POE-LOG-17",
      "purpose": "Trazabilidad de la flota, horas de tránsito y llegada a tiendas.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-031",
      "name": "Reporte de Exactitud de Inventario (ERI)",
      "process": "POE-LOG-18",
      "purpose": "Porcentaje de coincidencia entre stock físico y registro WMS (Meta: ≥ 99%).",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-032",
      "name": "Matriz de Indicadores CCC y DOH",
      "process": "POE-LOG-19",
      "purpose": "Evaluación del ciclo de conversión del efectivo y días de inventario.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-033",
      "name": "Registro de Descuentos Comerciales",
      "process": "POE-LOG-20",
      "purpose": "Respaldo y cálculo de las 21 modalidades de descuentos aplicados.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-034",
      "name": "Control de Bonificaciones Recibidas",
      "process": "POE-LOG-21",
      "purpose": "Control de fondos recaudados por bonos de marcas y mercadeo.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-035",
      "name": "Convenios Financieros y Logísticos VMI",
      "process": "POE-LOG-22",
      "purpose": "Expediente de inventario administrado por proveedor y plazos extendidos.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-036",
      "name": "Balance Cuadro de Mando Logístico",
      "process": "POE-LOG-23",
      "purpose": "Resumen gerencial de desempeño logístico estratégico mensual.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-037",
      "name": "Lista de Verificación de Mercadería Lista para Estantes",
      "process": "POE-LOG-06",
      "purpose": "Confirmación de palets preparados y etiquetados para ubicación.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-038",
      "name": "Reporte de Despacho e Insumos en Área de Tránsito CD",
      "process": "POE-LOG-06",
      "purpose": "Control de staging area y preparación de cargas.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-039",
      "name": "Manifiesto de Distribución y Guías a Sucursales",
      "process": "POE-LOG-06",
      "purpose": "Documento de control de transporte y salida a tiendas.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-040",
      "name": "Control de Mercadería Distribuida a Sucursales",
      "process": "POE-LOG-06",
      "purpose": "Confirmación de recepción conforme en puntos de destino.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-041",
      "name": "Registro de Conteos Cíclicos y Conciliación ERP",
      "process": "POE-LOG-06",
      "purpose": "Auditoría de inventario físico vs sistema (Exactitud ERI ≥ 98%).",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-042",
      "name": "Matriz de Días de Apalancamiento a Proveedores (DPO)",
      "process": "POE-LOG-06",
      "purpose": "Mide los días promedio de pago acordados con acreedores.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-043",
      "name": "Costo Financiero de Días Apalancamiento",
      "process": "POE-LOG-06",
      "purpose": "Valor financiero directo del crédito recibido sin intereses.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-044",
      "name": "Indicador de Días Cuentas por Cobrar (DSO)",
      "process": "POE-LOG-06",
      "purpose": "Mide el tiempo de cobro a clientes e instituciones.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-045",
      "name": "Indicador de Días de Inventario (DOH)",
      "process": "POE-LOG-06",
      "purpose": "Mide los días de permanencia del stock antes de su venta.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-046",
      "name": "Costo Financiero de Días de Inventario",
      "process": "POE-LOG-06",
      "purpose": "Capital de trabajo inmovilizado en bodegas.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-047",
      "name": "Monto de Inventario Defectuoso",
      "process": "POE-LOG-06",
      "purpose": "Stock con valor comercial inferior al costo contable.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-048",
      "name": "Monto de Inventario en Exceso",
      "process": "POE-LOG-06",
      "purpose": "Capital capturado que supera la demanda esperada.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-049",
      "name": "Valor Monetario Total de Inventarios ($)",
      "process": "POE-LOG-06",
      "purpose": "Evaluación financiera consolidada de existencias disponibles.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-050",
      "name": "Formato de Cálculo del Ciclo de Conversión de Efectivo",
      "process": "POE-LOG-06",
      "purpose": "Integración de DOH + DSO - DPO (Meta CCC ≤ 15 Días).",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-051",
      "name": "Porcentaje de Capacidad de Bodegas Usada",
      "process": "POE-LOG-06",
      "purpose": "Ocupación física de posiciones en racks y piso.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-052",
      "name": "Costo Logístico Promedio por Pedido Procesado",
      "process": "POE-LOG-06",
      "purpose": "Eficiencia transaccional del costo de servir.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-053",
      "name": "Monto Total de Descuentos Negociados",
      "process": "POE-LOG-06",
      "purpose": "Evaluación del impacto financiero de descuentos.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-054 a REG-LOG-074",
      "name": "Registros de las 21 Modalidades de Descuentos Comerciales",
      "process": "POE-LOG-06",
      "purpose": "Evidencias auditables de descuentos por pronto pago, volumen, contado, estacional, etc.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-075 a REG-LOG-089",
      "name": "Evidencias de 15 Bonificaciones Comerciales",
      "process": "POE-LOG-06",
      "purpose": "Soportes de bonificación en producto, Co-Op, promotoras, comodatos, etc.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-090 a REG-LOG-097",
      "name": "Acuerdos de Beneficios Financieros Negociables",
      "process": "POE-LOG-06",
      "purpose": "Soportes de crédito sin intereses, consignación y VMI.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-098 a REG-LOG-106",
      "name": "Acuerdos de Beneficios Logísticos Negociados",
      "process": "POE-LOG-06",
      "purpose": "Evidencias de flete gratis, entregas directas JIT y empaque especial.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-107 a REG-LOG-114",
      "name": "Acuerdos de Beneficios Estratégicos",
      "process": "POE-LOG-06",
      "purpose": "Convenios de exclusividad, lanzamientos y desarrollo de marcas propias.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-115 a REG-LOG-124",
      "name": "Matriz de Oportunidades de Negociación Estructural",
      "process": "POE-LOG-06",
      "purpose": "Evaluación de momentos óptimos para renegociación de contratos.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-125",
      "name": "Registro de Control de Surtido y Frenteo PEPS",
      "process": "POE-LOG-06",
      "purpose": "Confirmación de rotación adecuada y reposición en góndolas.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-126",
      "name": "Control de Devoluciones y Mermas en Cuarentena",
      "process": "POE-LOG-06",
      "purpose": "Bitácora de mercancía aislada no conforme.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-127",
      "name": "Planes de Trabajo Anuales Autorizados",
      "process": "POE-LOG-06",
      "purpose": "Planificación operativa con firmas de aprobación directiva.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-128",
      "name": "Presupuesto de Flujo de Caja Aprobado",
      "process": "POE-LOG-06",
      "purpose": "Techos de gasto y flujo de efectivo autorizado para la operación.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-129",
      "name": "Reporte de Rendición de Cuentas y % Desviación",
      "process": "POE-LOG-06",
      "purpose": "Informe consolidado de desviaciones presupuestarias presentado en junta.",
      "area": "LOG"
    },
    {
      "code": "REG-LOG-134",
      "name": "Bitácora de Registro en Sistema Gerencial",
      "process": "POE-LOG-06",
      "purpose": "Trazabilidad digital de aprobaciones y firmas ejecutivas en ERP.",
      "area": "LOG"
    },
    {
      "code": "REG-TES-001",
      "name": "Flujo de Efectivo Proyectado vs. Real",
      "process": "POE-TES-01",
      "purpose": "Matriz de caja diaria/mensual con variaciones de ingresos y egresos.",
      "area": "ADM"
    },
    {
      "code": "REG-COM-01-01-01",
      "name": "REGISTRO DE INFORME DE TENDENCIAS Y COMPORTAMIENTO DEL SHOPPER.",
      "process": "POE-COM-01",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-02-01-01",
      "name": "REGISTRO DE MATRIZ DE POSICIONAMIENTO COMPETITIVO Y PRECIOS.",
      "process": "POE-COM-02",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-03-01-01",
      "name": "REGISTRO DE PROPUESTA DE ESTRUCTURA DE ÁRBOL DE DECISIÓN DE CATEGORÍA.",
      "process": "POE-COM-03",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-04-01-01",
      "name": "REGISTRO DE DICTAMEN TÉCNICO DE VIABILIDAD DE PRODUCTO (LANZAMIENTO).",
      "process": "POE-COM-04",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-05-01-01",
      "name": "REGISTRO DE INVESTIGACIÓN DE LA EXPERIENCIA EN TIENDA (LAYOUT Y SERVICIO)",
      "process": "POE-COM-05",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-06-01-01",
      "name": "REGISTRO DE DEFINE EL MODELO O FORMATO DE NEGOCIO BAJO EL CUAL SE VA A COMPETIR Y EL PERFIL DEL CLEINTE AL QUE SE DIRIGE: \nHARD DISCOUNT (DESCUENTO DURO)\nSOFT DISCOUNT (DESCUENTO SUAVE)\nSUPERMERCADO TRADICIONAL (HIGH-LOW / HI-LO)\nDLP / EDLP (PRECIOS BAJOS TODOS LOS DÍAS)",
      "process": "POE-COM-06",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-07-01-01",
      "name": "REGISTRO DE DEFINE LAS DISTINTAS CATEGORIAS DE PRODUCTOS SEGÚN EL ROL ESTRATEGICO DENTRO DEL MODELO DE NEGOCIO DEFINIDO:",
      "process": "POE-COM-07",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-07-02-01",
      "name": "REGISTRO DE DEFINE LA EXPERIENCIA DEL CLIENTE EN SALA DE VENTAS ATRAVES DEL DISEÑO Y AUDITORIA DE LAS SENSACIONES, PERCEPCIONES Y FACILIDADES QUE VIVE EL CONSUMIDOR MIENTRAS RECORRE LA SUCURSAL",
      "process": "POE-COM-07",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-07-03-01",
      "name": "REGISTRO DE DEFINE EL PORTAFOLIO Y TIPO DE MARCAS QUE SE VAN A EXHIBIR AL PUBLICO PARA EQUILIBRAR LA RENTABILIDAD Y LA VARIEDAD",
      "process": "POE-COM-07",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-07-04-01",
      "name": "REGISTRO DE DEFINE QUE SURTIDO DE MARCAS (ANCHO, LARGO, Y PROFUNDIDAD DE PRODUCTOS ) SE COLOCARAN EN LOS ANAQUELES EN SALA DE VENTAS",
      "process": "POE-COM-07",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-07-05-01",
      "name": "REGISTRO DE LOS NIVELES DEL SURTIDO",
      "process": "POE-COM-07",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-07-06-01",
      "name": "REGISTRO DE PROFUNDIDAD (CUÁNTAS MARCAS, VARIANTES, TAMAÑOS O SABORES DIFERENTES HAY DENTRO DE UNA MISMA CATEGORÍA)",
      "process": "POE-COM-07",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-07-07-01",
      "name": "REGISTRO DE ALINEACIÓN CON EL POSICIONAMIENTO Y FORMATO (MODELO) DE TIENDA",
      "process": "POE-COM-07",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-07-08-01",
      "name": "REGISTRO DE DEFINICIÓN Y DELIMITACIÓN DE LA CATEGORÍA",
      "process": "POE-COM-07",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-07-09-01",
      "name": "REGISTRO DE ANÁLISIS DE ELASTICIDAD DEL ESPACIO Y TRANSFERIBILIDAD DE LA COMPRA",
      "process": "POE-COM-07",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-07-10-01",
      "name": "REGISTRO DE EVALUACIÓN DE LA COMPLEJIDAD OPERATIVA",
      "process": "POE-COM-07",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-07-11-01",
      "name": "REGISTRO DE DEFINE LOS SERVICIOS ADICIONALES QUE SE TENDRAN: COMODIDADES Y LOGÍSTICA PARA EL CLIENTE",
      "process": "POE-COM-07",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-07-12-01",
      "name": "REGISTRO DE DEFINE LOS SERVICIOS ADICIONALES QUE SE TENDRAN: SERVICIOS FINANCIEROS Y DE PAGO",
      "process": "POE-COM-07",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-07-13-01",
      "name": "REGISTRO DE DEFINE LOS SERVICIOS ADICIONALES QUE SE TENDRAN: SERVICIOS DENTRO DE LA TIENDA (IN-STORE)",
      "process": "POE-COM-07",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-08-01-01",
      "name": "3.1.1.1 Matriz de Competitividad de Precios. Se calcula un índice de precios donde 100 es la competencia. Si estás en 103, estás un 3% más caro.",
      "process": "POE-COM-08",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-08-02-01",
      "name": "3.1.2.1 Calendario y Guía de Elasticidad Promocional",
      "process": "POE-COM-08",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-09-01-01",
      "name": "3.1.3.1 Planograma de Checkout (Impulso)",
      "process": "POE-COM-09",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-09-02-01",
      "name": "3.2.2.1 Manual de Exhibición en Zonas Calientes:",
      "process": "POE-COM-09",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-01-01",
      "name": "REGISTRO DE ADMINISTRAR LA PROSPECTACION: ATRACCIÓN Y TRÁFICO",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-02-01",
      "name": "Layout estratégico de tienda, señalética clara, temperatura ambiente, música y flujo guiado de clientes (del fondo a las cajas).",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-03-01",
      "name": "REGISTRO DE VISUAL MERCHANDISING Y ARQUITECTURA SENSORIAL",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-04-01",
      "name": "REGISTRO DE GESTIÓN ACTIVA DEL PISO DE VENTA (PASO A PASO OPERATIVO)",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-05-01",
      "name": "REGISTRO DE GESTIÓN DE FILAS Y PUNTOS DE SALIDA (CHECKOUT)",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-06-01",
      "name": "REGISTRO DE ADMINISTRAR EL PROCESO DE COTIZACIÓN",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-07-01",
      "name": "REGISTRO DE AUDITORÍA DIARIA DE FLEJES (ES LA TIRA O REGLETA DE PLÁSTICO QUE SE COLOCA EN EL BORDE FRONTAL DE LOS ESTANTES, EXHIBIDORES Y MUEBLES DE CHECKOUT (FRONT END).) DE AL 100% CON EL SISTEMA DE CAJAS",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-08-01",
      "name": "3.5.1.2. Mapa de Consultores Digitales",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-09-01",
      "name": "REGISTRO DE ADMINISTRAR ELIMINACIÓN DE OBJECIONES - VENCER EL \"ESTÁ CARO\" O LA DUDA DE CALIDAD",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-10-01",
      "name": "REGISTRO DE ADMINISTRAR EL CIERRE DE LA VENTA",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-11-01",
      "name": "3.5.5.1. Indicador de Tasa de Abandono",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-12-01",
      "name": "3.5.2.1. Guía de Material POP (Rompetráficos)",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-13-01",
      "name": "3.5.2.2. Plan de Cabeceras Temáticas",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-14-01",
      "name": "3.5.4.1. Reporte de Venta por Metro Lineal",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-15-01",
      "name": "3.6.1 PROMOCIONES PARA ACELERAR VENTA-POSICIONAMIENTO",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-10-16-01",
      "name": "IMPLEMENTACION PLAN DE COMUNICACION",
      "process": "POE-COM-10",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-11-01-01",
      "name": "IMPLEMENTACION PLAN DE IMAGEN INSTITUCIONAL",
      "process": "POE-COM-11",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-11-02-01",
      "name": "REGISTRO DE ANALISIS DE LA FACTURACION",
      "process": "POE-COM-11",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-12-01-01",
      "name": "RECLAMOS RESUELTOS",
      "process": "POE-COM-12",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-13-01-01",
      "name": "REGISTRO DE MANUAL DE GOBERNANZA Y ESTRUCTURA DE PROCESOS (SOPS)",
      "process": "POE-COM-13",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-14-01-01",
      "name": "REGISTRO DE CAPTURA DE DATOS EN PUNTO DE VENTA",
      "process": "POE-COM-14",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-15-01-01",
      "name": "REGISTRO DE MANUAL DE PROTOCOLO DE SERVICIO",
      "process": "POE-COM-15",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-15-02-01",
      "name": "REGISTRO DE PLANOGRAMAS DE EXHIBICIÓN",
      "process": "POE-COM-15",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-15-03-01",
      "name": "REGISTRO DE PORTAFOLIO (DOSSIER) DE LOS PLANOS, FICHAS TÉCNICAS, MATERIALES, MEDIDAS Y CÓDIGOS DE COLOR DE TODA LA COMUNICACIÓN VISUAL DE UNA SUCURSAL DE SEÑALÉTICA",
      "process": "POE-COM-15",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-15-04-01",
      "name": "REGISTRO DE MANUAL DE IDENTIDAD ATMOSFÉRICA",
      "process": "POE-COM-15",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-15-05-01",
      "name": "REGISTRO DE PLANO DE ÁREAS DE ESPERA",
      "process": "POE-COM-15",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-16-01-01",
      "name": "REGISTRO DE TABLERO DE CONTROL DE SUSTENTABILIDAD (VALUE DASHBOARD)",
      "process": "POE-COM-16",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-16-02-01",
      "name": "REGISTRO DE INFORMES DE AUDITORÍA DE VALOR PERIÓDICA",
      "process": "POE-COM-16",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-17-01-01",
      "name": "REGISTRO DE OPTIMIZAR CADA ETAPA POR LA QUE PASA UN PRODUCTO",
      "process": "POE-COM-17",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-18-01-01",
      "name": "REGISTRO DE PROGRAMA DE ONBOARDING Y CAPACITACIÓN CONTINUA",
      "process": "POE-COM-18",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-19-01-01",
      "name": "REGISTRO DE PLAN DE VENTAS Y MARGEN COMERCIAL PROYECTADO DE INGRESOS POR CATEGORÍA (TOP-LINE)",
      "process": "POE-COM-19",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-20-01-01",
      "name": "REGISTRO DE PORTAFOLIO DE PROYECTOS DE INVERSIÓN AUTORIZADOS (CAPEX LEDGER).",
      "process": "POE-COM-20",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-21-01-01",
      "name": "REGISTRO DE TABLERO DE CONTROL DE DESEMPEÑO (SCORECARD / DASHBOARD DE KPIS).",
      "process": "POE-COM-21",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-22-01-01",
      "name": "REGISTRO DE REPORTE DE VARIACIONES PRESUPUESTARIAS Y CAUSAS RAÍZ.",
      "process": "POE-COM-22",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-23-01-01",
      "name": "REGISTRO DE MINUTA DE ACUERDOS Y MATRIZ DE COMPROMISOS (ACCOUNTABILITY MATRIX).",
      "process": "POE-COM-23",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    },
    {
      "code": "REG-COM-24-01-01",
      "name": "REGISTRO DE REPORTE DE AVANCE DE ACCIONES CORRECTIVAS.",
      "process": "POE-COM-24",
      "area": "COM",
      "fields": [
        {
          "name": "Fecha y Hora de Medición",
          "type": "datetime",
          "required": true
        },
        {
          "name": "Nombre del Operador",
          "type": "text",
          "required": true
        },
        {
          "name": "Estado del Entregable",
          "type": "select",
          "options": [
            "Conforme",
            "No Conforme"
          ],
          "required": true
        }
      ]
    }
  ],
  "audits": [
    {
      "id": "AUD-2026-001",
      "poeCode": "POE-ADM-01",
      "date": "2026-06-15",
      "auditor": "Carlos Ramírez",
      "score": 95,
      "findings": "Excelente cumplimiento en el recuento y remesas. Las boletas están firmadas.",
      "nonConformities": false,
      "status": "Cerrada"
    },
    {
      "id": "AUD-2026-002",
      "poeCode": "POE-PER-01",
      "date": "2026-06-25",
      "auditor": "Ana Morales",
      "score": 88,
      "findings": "Cámaras operando en rango térmico. Bitácora de temperatura con un retraso en registro nocturno.",
      "nonConformities": false,
      "status": "Cerrada"
    },
    {
      "id": "AUD-2026-003",
      "poeCode": "POE-LOG-11",
      "date": "2026-07-28",
      "auditor": "Luis Herrera",
      "score": 65,
      "findings": "Indicador OTIF mensual se situó en 89.5% (meta 92%). Se evidencian recurrentes demoras de entrega del proveedor DistriCorp.",
      "nonConformities": true,
      "status": "En Seguimiento",
      "ncDetails": {
        "description": "El nivel de Pedidos Perfectos (OTIF) está por debajo de la meta de calidad establecida del 92%.",
        "correctiveAction": "Revisar acuerdos logísticos con DistriCorp, citar a reunión técnica y aplicar sanciones si aplica.",
        "preventiveAction": "Buscar alternativas de transporte o proveedores de respaldo.",
        "owner": "Jefe de Compras",
        "deadline": "2026-08-15",
        "priority": "Alta",
        "cost": 1500,
        "impact": "Desabasto parcial de categoría frescos en salas de venta",
        "risk": "Alto",
        "history": [
          {
            "date": "2026-07-28",
            "user": "Luis Herrera",
            "comment": "No conformidad detectada tras auditoría mensual."
          }
        ]
      }
    }
  ]
};
