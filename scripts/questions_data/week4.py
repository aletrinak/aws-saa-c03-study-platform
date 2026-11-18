# Week 4: Optimización de Costos, Conectividad Híbrida y Simulador Final
# Days: 22, 23, 24, 26 (10 questions per day = 40 questions)

WEEK_4_QUESTIONS = {
    22: [
        {
            "id": "d22-q1",
            "scenarioTag": "Dominio 4: Spot Instances vs Spot Fleets",
            "question": "Una empresa de analítica de video ejecuta procesos por lotes (batch processing) masivos sin estado que tardan entre 10 y 30 minutos por trabajo. Si una instancia se interrumpe, el trabajo simplemente se reintenta en otra máquina sin pérdida de datos. La empresa desea reducir sus costos de cómputo en Amazon EC2 en hasta un 80% o 90% en comparación con los precios bajo demanda. ¿Qué modelo de compra de EC2 debe implementarse?",
            "options": [
                "A) Instancias Reservadas Estándar a 3 años.",
                "B) Savings Plans de Cómputo.",
                "C) EC2 Spot Instances (Instancias Spot) gestionadas mediante un Spot Fleet con múltiples tipos de instancias y zonas de disponibilidad.",
                "D) Dedicated Hosts bajo demanda."
            ],
            "correctAnswer": 2,
            "explanation": "Las Spot Instances permiten aprovechar la capacidad ociosa de cómputo de AWS con descuentos de hasta un 90% en comparación con On-Demand. Son ideales para cargas de trabajo tolerantes a fallas, flexibles y sin estado, como el procesamiento de video por lotes."
        },
        {
            "id": "d22-q2",
            "scenarioTag": "Dominio 4: Savings Plans vs Reserved Instances",
            "question": "Una corporación posee una carga de trabajo productiva estable que opera 24/7 durante todo el año. La empresa planea migrar gradualmente diversas aplicaciones desde instancias EC2 tradicionales basadas en x86 hacia arquitecturas sin servidor con AWS Fargate y funciones AWS Lambda con procesadores Graviton. ¿Qué opción de compromiso de compra ofrece el mayor descuento manteniendo flexibilidad entre EC2, Fargate y Lambda?",
            "options": [
                "A) Standard Reserved Instances fijadas a la familia c5.",
                "B) EC2 Instance Savings Plans.",
                "C) Compute Savings Plans con compromiso de 1 o 3 años (medido en $/hora).",
                "D) Convertible Reserved Instances específicas de región."
            ],
            "correctAnswer": 2,
            "explanation": "Compute Savings Plans ofrece hasta un 66% de descuento con máxima flexibilidad, ya que aplica automáticamente al uso de cómputo independientemente de la familia de instancias, tamaño, sistema operativo, región o si se migra entre Amazon EC2, AWS Fargate y AWS Lambda."
        },
        {
            "id": "d22-q3",
            "scenarioTag": "Dominio 4: Gestión y Control de Presupuestos (AWS Budgets)",
            "question": "El departamento financiero exige dos capacidades de control de costos:\n1. Recibir alertas inmediatas cuando el costo proyectado o real mensual de una cuenta supere los $10.000 USD.\n2. Ejecutar automáticamente una acción que aplique una Service Control Policy restrictiva o apague instancias de prueba si el presupuesto real se excede.\n¿Qué servicio nativo de gobernanza financiera de AWS cumple ambos requisitos?",
            "options": [
                "A) AWS Budgets configurando presupuestos de costo con alertas vía Amazon SNS y AWS Budgets Actions.",
                "B) AWS Cost Anomaly Detection con notificaciones por SMS exclusivamente.",
                "C) AWS Pricing Calculator.",
                "D) AWS Billing Conductor."
            ],
            "correctAnswer": 0,
            "explanation": "AWS Budgets permite configurar presupuestos personalizados basados en costos o uso reales y pronosticados. Además, soporta AWS Budgets Actions para ejecutar respuestas programáticas automáticas (como aplicar una SCP, detener instancias EC2 o enviar notificaciones SNS) cuando se sobrepasa un umbral."
        },
        {
            "id": "d22-q4",
            "scenarioTag": "Dominio 4: Reducción de Costos de Transferencia de Datos en VPC",
            "question": "Una flota de 100 instancias EC2 privadas descarga diariamente petabytes de archivos desde un bucket de Amazon S3 dentro de la misma región. La empresa observa en su factura de AWS miles de dólares en cargos por procesamiento de datos a través de los NAT Gateways de la VPC. ¿Cómo se eliminan estos costos por completo?",
            "options": [
                "A) Instalar un NAT Instance con un tamaño de instancia más pequeño.",
                "B) Crear un VPC Gateway Endpoint para Amazon S3 y asociarlo a las tablas de rutas de las subredes privadas.",
                "C) Mover el bucket de Amazon S3 a una cuenta de AWS distinta.",
                "D) Habilitar S3 Transfer Acceleration en las instancias privadas."
            ],
            "correctAnswer": 1,
            "explanation": "El tráfico hacia Amazon S3 a través de un NAT Gateway incurre en costos por hora de NAT Gateway más tarifas por cada gigabyte de datos procesado. Al crear un VPC Gateway Endpoint (que es completamente gratuito), el tráfico viaja de forma directa y privada por la red de AWS hacia S3 sin pasar por el NAT Gateway, eliminando el 100% de los cargos de procesamiento de NAT."
        },
        {
            "id": "d22-q5",
            "multi": True,
            "scenarioTag": "Dominio 4: Dimensionamiento Correcto (AWS Compute Optimizer)",
            "question": "¿Cuáles de las siguientes capacidades son provistas por AWS Compute Optimizer para reducir el desperdicio de recursos en la nube? (Selecciona DOS)",
            "options": [
                "A) Analiza métricas históricas de utilización de recursos (CPU, memoria, almacenamiento EBS, red) mediante machine learning.",
                "B) Genera recomendaciones accionables de dimensionamiento adecuado (rightsizing) para instancias EC2, volúmenes EBS, funciones Lambda y servicios ECS.",
                "C) Borra automáticamente servidores de base de datos que no tengan usuarios conectados.",
                "D) Prohíbe a los desarrolladores utilizar la consola de administración de AWS.",
                "E) Convierte automáticamente aplicaciones PHP en contenedores Docker."
            ],
            "correctAnswers": [0, 1],
            "explanation": "AWS Compute Optimizer utiliza machine learning para analizar métricas de CloudWatch y patrones de uso pasados, ofreciendo recomendaciones de optimización de tamaño y tipo para instancias EC2, volúmenes EBS, tareas de ECS en Fargate y funciones Lambda para reducir costos o eliminar cuellos de botella."
        },
        {
            "id": "d22-q6",
            "scenarioTag": "Dominio 4: Etiquetas de Asignación de Costos (Cost Allocation Tags)",
            "question": "Una empresa con múltiples departamentos (Marketing, Finanzas, I+D) comparte una misma cuenta de AWS y necesita desglosar exactamente cuánto dinero gasta cada departamento mensualmente en AWS Cost Explorer. ¿Qué paso previo es obligatorio para habilitar este reporte por departamento?",
            "options": [
                "A) Crear una tarjeta de crédito separada para cada departamento.",
                "B) Etiquetar los recursos con una clave como 'Departamento' y activar esa etiqueta como 'Cost Allocation Tag' en la consola de Facturación (AWS Billing).",
                "C) Ejecutar un script de CloudFormation para duplicar todas las VPCs.",
                "D) Desactivar AWS CloudTrail para evitar cargos adicionales de registro."
            ],
            "correctAnswer": 1,
            "explanation": "Para que las etiquetas asignadas a los recursos aparezcan y puedan filtrarse en AWS Cost Explorer y en el reporte detallado de costos (AWS Cost and Usage Report), las etiquetas deben ser activadas explícitamente como 'Cost Allocation Tags' (etiquetas de asignación de costos generadas por el usuario) en la consola de Billing."
        },
        {
            "id": "d22-q7",
            "scenarioTag": "Dominio 4: Optimización de Almacenamiento con S3 Storage Lens",
            "question": "¿Qué herramienta de Amazon S3 proporciona visibilidad global de las métricas de almacenamiento, patrones de actividad, recomendaciones de optimización de costos y detección de buckets sin políticas de ciclo de vida en toda una organización de AWS Organizations?",
            "options": [
                "A) AWS Cost Anomaly Detection.",
                "B) S3 Batch Operations.",
                "C) Amazon S3 Storage Lens.",
                "D) AWS Trusted Advisor en el plan gratuito."
            ],
            "correctAnswer": 2,
            "explanation": "Amazon S3 Storage Lens es la herramienta de analítica de almacenamiento de S3 que ofrece visibilidad integral de todo el almacenamiento a nivel de organización o cuenta, con métricas de costo, optimización (ej: objetos incompletos de multipart upload, buckets sin lifecycle) y protección de datos."
        },
        {
            "id": "d22-q8",
            "scenarioTag": "Dominio 4: Comparación de Costos de Transferencia entre Zonas y Regiones",
            "question": "Al diseñar una arquitectura distribuida, ¿cuál de los siguientes flujos de red es el MENOS costoso (gratuito) en términos de transferencia de datos de AWS?",
            "options": [
                "A) Transferencia de datos entrante (Inbound Data Transfer) desde Internet hacia cualquier recurso en AWS.",
                "B) Transferencia de datos entre dos Availability Zones diferentes dentro de la misma región.",
                "C) Transferencia de datos entre dos regiones de AWS diferentes mediante VPC Peering interregional.",
                "D) Transferencia de datos saliente (Outbound Data Transfer) hacia Internet público."
            ],
            "correctAnswer": 0,
            "explanation": "En el modelo de precios de AWS, toda la transferencia de datos ENTRANTE (Inbound data transfer) proveniente de Internet hacia cualquier servicio de AWS es completamente gratuita ($0.00 por GB). En cambio, la transferencia saliente hacia Internet y la transferencia entre AZs o regiones generan costos por GB transferido."
        },
        {
            "id": "d22-q9",
            "scenarioTag": "Dominio 4: Optimización con Instancias Graviton",
            "question": "Un Solutions Architect busca optimizar la relación precio/rendimiento de una flota de servidores de aplicaciones escritos en Python y Node.js que actualmente corren en instancias c5.2xlarge (procesadores Intel x86). ¿Qué cambio de infraestructura proporciona hasta un 40% de mejora en la relación precio/rendimiento con cambios mínimos de código?",
            "options": [
                "A) Migrar a instancias de la familia c7g o c6g basadas en procesadores AWS Graviton (arquitectura ARM64).",
                "B) Cambiar el sistema operativo de Linux a Windows Server Core.",
                "C) Migrar a instancias Mac de Amazon EC2.",
                "D) Aumentar el tamaño de los volúmenes EBS a 10 TB."
            ],
            "correctAnswer": 0,
            "explanation": "Los procesadores AWS Graviton (arquitectura ARM de 64 bits diseñada a medida por AWS) proporcionan hasta un 40% de mejora en la relación precio/rendimiento en comparación con las instancias comparables basadas en procesadores x86 para cargas de trabajo como servidores web, microservicios, bases de datos y lenguajes interpretados como Python y Node.js."
        },
        {
            "id": "d22-q10",
            "multi": True,
            "scenarioTag": "Dominio 4: Limpieza de Recursos Huérfanos",
            "question": "¿Cuáles de las siguientes prácticas ayudan a eliminar costos innecesarios producidos por recursos huérfanos o desatendidos en cuentas de AWS? (Selecciona DOS)",
            "options": [
                "A) Identificar y eliminar volúmenes Amazon EBS no adjuntos (estado 'available') y Elastic IP addresses asignadas que no estén asociadas a ninguna instancia activa.",
                "B) Configurar una regla de ciclo de vida en Amazon S3 para abortar cargas multiparte incompletas (Abort incomplete multipart uploads) después de un número determinado de días.",
                "C) Desconectar el Internet Gateway de las subredes públicas para evitar que el tráfico fluya.",
                "D) Desactivar las comprobaciones de estado de los balanceadores de carga.",
                "E) Convertir los registros DNS de Route 53 en subdominios de tercer nivel."
            ],
            "correctAnswers": [0, 1],
            "explanation": "Los volúmenes EBS no adjuntos continúan cobrando almacenamiento en GB-mes, y las Elastic IPs no asociadas generan cargos por hora para incentivar la liberación de direcciones IPv4 escasas. Asimismo, las partes no finalizadas de cargas multiparte en S3 acumulan costos de almacenamiento en el bucket hasta que se abortan o eliminan."
        }
    ],

    23: [
        {
            "id": "d23-q1",
            "scenarioTag": "Dominio 1 & 2: AWS Transit Gateway & Conectividad Multi-VPC",
            "question": "Una gran corporación gestiona más de 60 VPCs en una misma región de AWS, divididas entre ambientes de producción, desarrollo y servicios compartidos. El equipo de redes requiere interconectar todas las VPCs entre sí y con el centro de datos on-premises, pero gestionar una malla completa de conexiones VPC Peering punto a punto se ha vuelto inmanejable por el crecimiento exponencial de rutas (N*(N-1)/2). ¿Qué servicio centraliza esta topología en estrella (hub-and-spoke) con enrutamiento transitivo?",
            "options": [
                "A) AWS Direct Connect Gateway.",
                "B) AWS Transit Gateway.",
                "C) Una VPC de tránsito con 60 interfaces de red secundarias (ENIs).",
                "D) AWS Site-to-Site VPN con enrutamiento estático."
            ],
            "correctAnswer": 1,
            "explanation": "AWS Transit Gateway actúa como un enrutador virtual centralizado (hub-and-spoke) en la nube, simplificando la topología de red al conectar cientos o miles de VPCs y redes on-premises a través de un único punto central con soporte completo para enrutamiento transitivo y tablas de rutas independientes."
        },
        {
            "id": "d23-q2",
            "scenarioTag": "Dominio 1: AWS Direct Connect & Resiliencia con VPN de Respaldo",
            "question": "Una institución bancaria requiere transferir terabytes diarios de datos transaccionales entre su centro de datos local y su VPC en AWS. Los requisitos obligatorios son:\n1. Conexión de red privada dedicada de alta velocidad (10 Gbps) y baja latencia que no transite por la Internet pública.\n2. Si la conexión dedicada principal sufre un corte físico, el tráfico debe conmutar automáticamente a un enlace de respaldo cifrado a través de Internet.\n¿Qué arquitectura híbrida implementa esta solución?",
            "options": [
                "A) AWS Direct Connect (DX) como conexión primaria dedicada de alto rendimiento, complementada con una conexión AWS Site-to-Site VPN de respaldo sobre Internet configurada con enrutamiento dinámico BGP para conmutación por error automática.",
                "B) Dos conexiones VPN por software en instancias EC2 públicas con scripts de ping.",
                "C) Un enlace por satélite conectado a un AWS Snowball.",
                "D) AWS Transit Gateway sin conexión a Direct Connect."
            ],
            "correctAnswer": 0,
            "explanation": "AWS Direct Connect ofrece una conexión privada de alta velocidad y latencia constante hacia AWS evitando la Internet pública. La mejor práctica de contingencia costo-efectiva es configurar una conexión AWS Site-to-Site VPN cifrada por IPsec como enlace de respaldo automático utilizando BGP con métricas de preferencia de ruta (AS Path prepending)."
        },
        {
            "id": "d23-q3",
            "scenarioTag": "Dominio 1: Tipos de Interfaces Virtuales en Direct Connect (VIFs)",
            "question": "Un arquitecto de soluciones diseña una conexión híbrida con AWS Direct Connect para una empresa. El cliente necesita acceder simultáneamente a dos tipos de destinos:\n1. Instancias EC2 en subredes privadas dentro de múltiples VPCs.\n2. Servicios públicos de AWS en la misma región (como Amazon S3 y Amazon DynamoDB) utilizando sus direcciones IP públicas de AWS a través del enlace privado sin salir a Internet público.\n¿Qué tipos de Interfaces Virtuales (VIF) deben crearse en Direct Connect?",
            "options": [
                "A) Dos Private VIFs.",
                "B) Una Private VIF (o Transit VIF) para acceder a las VPCs privadas, y una Public VIF para acceder a los endpoints públicos de servicios como S3 y DynamoDB.",
                "C) Una sola Hosted VIF con túnel GRE.",
                "D) Un Gateway Endpoint con IP fija."
            ],
            "correctAnswer": 1,
            "explanation": "En AWS Direct Connect, una Private VIF (o Transit VIF vía TGW) se utiliza para conectarse a recursos privados dentro de VPCs (direcciones IP privadas). Una Public VIF permite a los clientes on-premises acceder a servicios públicos de AWS (como buckets S3, DynamoDB o CloudWatch) a través de la conexión Direct Connect utilizando IPs públicas de AWS."
        },
        {
            "id": "d23-q4",
            "scenarioTag": "Dominio 1: VPC Endpoints (Gateway vs Interface Endpoints)",
            "question": "Un oficial de seguridad de redes exige que las instancias EC2 privadas que consumen la API de Amazon SNS, AWS Systems Manager y Amazon S3 lo hagan a través de interfaces de red locales con direcciones IP privadas dentro de su propia subred, garantizando que el tráfico nunca salga de la red de AWS. ¿Qué tecnologías de VPC Endpoints satisfacen estos requerimientos?",
            "options": [
                "A) Interface Endpoints (con tecnología AWS PrivateLink) para SNS y Systems Manager, y Gateway Endpoint (o Interface Endpoint) para Amazon S3.",
                "B) Gateway Endpoints para todos los servicios de AWS sin excepción.",
                "C) Configurar un túnel SSH reverso en cada instancia.",
                "D) Publicar los endpoints en Route 53 público con direcciones Elastic IP."
            ],
            "correctAnswer": 0,
            "explanation": "Los Interface Endpoints (alimentados por AWS PrivateLink) aprovisionan una Elastic Network Interface (ENI) con una dirección IP privada dentro de la subred para la mayoría de los servicios de AWS (incluidos SNS, SSM, CloudWatch, KMS). Para Amazon S3 y DynamoDB, existen Gateway Endpoints (rutas en tabla) e Interface Endpoints."
        },
        {
            "id": "d23-q5",
            "multi": True,
            "scenarioTag": "Dominio 1: Cifrado en Direct Connect (MACsec vs VPN over DX)",
            "question": "Por defecto, el tráfico que viaja a través de un enlace físico dedicado de AWS Direct Connect es privado pero no está cifrado en la capa física/enlace. Si una entidad bancaria exige que TODO el tráfico en tránsito por Direct Connect esté cifrado criptográficamente, ¿cuáles de las siguientes soluciones son técnicamente válidas? (Selecciona DOS)",
            "options": [
                "A) Utilizar MACsec (IEEE 802.1AE) para cifrado a nivel de Capa 2 en conexiones dedicadas elegibles de 10 Gbps o 100 Gbps de Direct Connect.",
                "B) Desplegar un túnel AWS Site-to-Site VPN IPsec sobre la conexión de Direct Connect (VPN over Direct Connect) para cifrar el tráfico a nivel de Capa 3.",
                "C) Desactivar el protocolo BGP y utilizar enrutamiento RIPv2.",
                "D) Reemplazar los cables de fibra óptica por cables coaxiales.",
                "E) Prohibir el uso de TLS en todas las aplicaciones."
            ],
            "correctAnswers": [0, 1],
            "explanation": "Para cifrar el tráfico a través de AWS Direct Connect: 1) Se puede utilizar cifrado MACsec a nivel de Capa 2 (en puertos dedicados compatibles de 10 Gbps o 100 Gbps) para velocidad de línea completa sin sobrecarga. 2) Se puede configurar un túnel IPsec Site-to-Site VPN sobre una Transit o Public VIF de Direct Connect (Capa 3)."
        },
        {
            "id": "d23-q6",
            "scenarioTag": "Dominio 1: Transit Gateway Appliance Mode",
            "question": "En una arquitectura de inspección de seguridad con AWS Transit Gateway, una flota de firewalls virtuales stateful inspecciona el tráfico entre VPCs. En ocasiones, los paquetes de ida de una conexión TCP pasan por un firewall en AZ-a, pero los paquetes de retorno pasan por otro firewall en AZ-b, provocando que el firewall descarte la conexión al no encontrar el estado TCP previo (enrutamiento asimétrico). ¿Qué característica de Transit Gateway resuelve este problema?",
            "options": [
                "A) Transit Gateway Appliance Mode.",
                "B) Transit Gateway Multicast.",
                "C) Cross-Region Peering con MTU 1500.",
                "D) BGP Dynamic Multipath."
            ],
            "correctAnswer": 0,
            "explanation": "El Appliance Mode de AWS Transit Gateway garantiza que el tráfico bidireccional de una misma sesión de red fluya simétricamente a través de la misma interfaz de red elástica (ENI) en la misma Availability Zone, evitando que los firewalls stateful descarten paquetes por enrutamiento asimétrico."
        },
        {
            "id": "d23-q7",
            "scenarioTag": "Dominio 1: AWS PrivateLink para Compartir Servicios entre Clientes",
            "question": "Una empresa proveedora de software SaaS desea ofrecer su aplicación alojada en AWS a múltiples clientes corporativos que también utilizan AWS. Los clientes exigen acceder a la aplicación SaaS de forma completamente privada sin exponer IPs a Internet, pero prohíben categóricamente abrir conexiones de VPC Peering debido a que los bloques CIDR de las VPCs de los clientes coinciden (solapamiento de IPs / overlapping CIDR). ¿Qué servicio resuelve este reto?",
            "options": [
                "A) AWS Transit Gateway con doble NAT.",
                "B) AWS PrivateLink (creando un VPC Endpoint Service detrás de un Network Load Balancer).",
                "C) Mover todos los clientes a una sola cuenta compartida.",
                "D) Utilizar Amazon Route 53 con registros Geolocation."
            ],
            "correctAnswer": 1,
            "explanation": "AWS PrivateLink permite exponer un servicio (respaldado por un Network Load Balancer) a otras cuentas y VPCs de forma unidireccional y privada mediante Interface Endpoints. Funciona a la perfección incluso cuando los rangos de direcciones IP (bloques CIDR) de ambas VPCs se solapan o son idénticos."
        },
        {
            "id": "d23-q8",
            "scenarioTag": "Dominio 2: AWS Site-to-Site VPN & Enrutamiento Dinámico con BGP",
            "question": "Al configurar un túnel AWS Site-to-Site VPN entre una VPC y un enrutador on-premises (Customer Gateway), ¿cuál es la ventaja fundamental de utilizar enrutamiento dinámico basado en Border Gateway Protocol (BGP) frente a enrutamiento estático?",
            "options": [
                "A) BGP permite duplicar la velocidad de transferencia a 100 Gbps por túnel.",
                "B) BGP propaga rutas automáticamente y conmuta el tráfico de forma transparente entre los dos túneles redundantes que componen la conexión VPN si uno de ellos experimenta una falla.",
                "C) BGP elimina el requerimiento de tener direcciones IP en los enrutadores.",
                "D) BGP hace que la conexión VPN sea gratuita."
            ],
            "correctAnswer": 1,
            "explanation": "Cada conexión AWS Site-to-Site VPN consta de dos túneles redundantes para alta disponibilidad. Utilizar BGP (enrutamiento dinámico) permite anunciar rutas dinámicamente y conmutar el tráfico automáticamente entre ambos túneles si uno falla, sin intervención manual en tablas de rutas."
        },
        {
            "id": "d23-q9",
            "scenarioTag": "Dominio 1: Direct Connect Gateway & Conectividad Multi-Región",
            "question": "¿Para qué se utiliza un AWS Direct Connect Gateway en una arquitectura global?",
            "options": [
                "A) Para conectar una sola conexión física de Direct Connect a múltiples VPCs ubicadas en diferentes regiones de AWS en todo el mundo (excepto China).",
                "B) Para convertir paquetes de voz sobre IP en tramas Ethernet.",
                "C) Para acelerar descargas de buckets S3 mediante Anycast.",
                "D) Para sustituir los servidores DNS autoritativos de la empresa."
            ],
            "correctAnswer": 0,
            "explanation": "Un Direct Connect Gateway es un recurso global que permite a una o más conexiones de Direct Connect vincularse con Virtual Private Gateways (VGWs) o Transit Gateways asociados a VPCs en prácticamente cualquier región de AWS del mundo a través de la red global de AWS."
        },
        {
            "id": "d23-q10",
            "multi": True,
            "scenarioTag": "Dominio 1: Tablas de Rutas en Transit Gateway (Segmentación de Red)",
            "question": "En un entorno corporativo con AWS Transit Gateway, el equipo de ciberseguridad requiere aislar el entorno de Desarrollo del entorno de Producción para que NUNCA puedan comunicarse entre sí, pero permitiendo que ambos entornos accedan a una VPC de Servicios Compartidos. ¿Cómo se implementa esta segmentación? (Selecciona DOS)",
            "options": [
                "A) Crear múltiples tablas de rutas en Transit Gateway (por ejemplo, Route Table Dev y Route Table Prod).",
                "B) Asociar las VPCs de Desarrollo a la Route Table Dev y propagar únicamente la VPC de Servicios Compartidos; y asociar las VPCs de Producción a la Route Table Prod propagando únicamente Servicios Compartidos.",
                "C) Eliminar el Transit Gateway y colocar cables de red manuales.",
                "D) Apagar las instancias de Desarrollo cada vez que Producción esté activa.",
                "E) Prohibir el uso de direcciones IPv4 privadas."
            ],
            "correctAnswers": [0, 1],
            "explanation": "AWS Transit Gateway soporta múltiples tablas de rutas (Route Domain Segmentation). Al crear tablas de rutas separadas para Desarrollo y Producción y asociar cada VPC a su tabla respectiva, se controla qué VPCs pueden comunicarse entre sí, permitiendo acceso a servicios compartidos y garantizando aislamiento estricto."
        }
    ],

    24: [
        {
            "id": "d24-q1",
            "scenarioTag": "Dominio 3: Migración Heterogénea de Bases de Datos",
            "question": "Una compañía planea migrar una base de datos relacional crítica en producción desde un motor comercial propietario Oracle alojado on-premises hacia un motor de código abierto Amazon Aurora PostgreSQL en AWS. El negocio exige que la ventana de corte (cutover window) e indisponibilidad del servicio durante la migración final sea inferior a 15 minutos. ¿Qué combinación de herramientas oficiales de AWS garantiza una migración exitosa con el menor tiempo de inactividad?",
            "options": [
                "A) Realizar un backup manual con Oracle Data Pump y cargarlo en S3 para restaurarlo con pg_restore.",
                "B) Usar AWS Schema Conversion Tool (SCT) para convertir esquemas, vistas y procedimientos almacenados de Oracle a PostgreSQL, y utilizar AWS Database Migration Service (AWS DMS) con replicación continua de datos modificados (CDC) para sincronizar en tiempo real hasta el momento del corte.",
                "C) Instalar el agente de AWS DataSync en el servidor de base de datos Oracle para copiar los archivos .dbf directamente al almacenamiento de Aurora.",
                "D) Utilizar AWS Application Migration Service (MGN) para convertir las tablas en tiempo real."
            ],
            "correctAnswer": 1,
            "explanation": "En migraciones heterogéneas de bases de datos (motores distintos, ej: Oracle a PostgreSQL), AWS Schema Conversion Tool (SCT) convierte automáticamente el esquema, tablas y lógica procedural. Luego, AWS Database Migration Service (DMS) realiza la carga inicial completa y mantiene la sincronización continua mediante Change Data Capture (CDC), permitiendo cambiar el tráfico al nuevo motor con solo unos minutos de inactividad."
        },
        {
            "id": "d24-q2",
            "scenarioTag": "Dominio 3: Consultas Analíticas Serverless (Amazon Athena)",
            "question": "Un equipo de ciberseguridad acumula decenas de terabytes de registros de acceso web en un bucket de Amazon S3 en formato texto plano (archivos .log CSV sin comprimir). Los analistas ejecutan consultas ad-hoc periódicas en SQL utilizando Amazon Athena, pero las consultas tardan varios minutos en completarse y el costo por consulta aumenta considerablemente ($5 por cada TB escaneado). ¿Qué dos transformaciones en el formato y almacenamiento de los datos en S3 optimizarán la velocidad y reducirán el costo de consulta de Athena en hasta un 90%?",
            "options": [
                "A) Mover los archivos a un disco EBS de tipo io2 y ejecutar scripts en bash con grep.",
                "B) Convertir los datos a un formato columnar optimizado como Apache Parquet o Apache ORC y particionar los datos en S3 (por ejemplo, por año/mes/día).",
                "C) Desplegar un clúster de Amazon EMR con 50 nodos permanentes para leer los archivos CSV.",
                "D) Cambiar la clase de almacenamiento a S3 Glacier Flexible Archive."
            ],
            "correctAnswer": 1,
            "explanation": "Amazon Athena factura en base a la cantidad de datos escaneados durante cada consulta. Convertir los datos a formato columnar comprimido (Parquet u ORC) permite a Athena leer solo las columnas necesarias, y particionar los datos en S3 (por fecha) evita escanear particiones no consultadas, reduciendo el volumen escaneado y el costo hasta en un 90%."
        },
        {
            "id": "d24-q3",
            "scenarioTag": "Dominio 3: Data Lake & Catálogo Centralizado (AWS Glue)",
            "question": "Una corporación está construyendo un Data Lake empresarial sobre Amazon S3. Requieren descubrir esquemas automáticamente a partir de miles de archivos semiestructurados (JSON, CSV, Parquet) que ingresan diariamente, inferir tipos de datos y poblar un catálogo de metadatos unificado para que herramientas analíticas como Amazon Athena y Amazon Redshift Spectrum puedan consultar los datos mediante SQL. ¿Qué servicio de AWS proporciona esta capacidad?",
            "options": [
                "A) AWS DataSync con sincronización continua.",
                "B) AWS Glue Data Catalog alimentado por AWS Glue Crawlers.",
                "C) Amazon Kinesis Data Streams con particiones dinámicas.",
                "D) AWS Schema Conversion Tool para bases de datos relacionales."
            ],
            "correctAnswer": 1,
            "explanation": "AWS Glue Crawlers se conectan a los repositorios de datos en S3, infieren automáticamente esquemas y formatos a partir de los archivos almacenados y registran las definiciones de tablas y particiones en el AWS Glue Data Catalog, sirviendo como catálogo de metadatos centralizado compatible con Athena, EMR y Redshift."
        },
        {
            "id": "d24-q4",
            "scenarioTag": "Dominio 3: Migración Física Masiva de Datos (AWS Snowball Edge)",
            "question": "Una empresa necesita migrar 150 TB de datos de video archivados on-premises hacia Amazon S3. La empresa posee una conexión a Internet dedicada de solo 20 Mbps que está saturada con tráfico operativo del negocio. ¿Cuál es el método más rápido, seguro y costo-efectivo para transferir estos 150 TB de datos a AWS?",
            "options": [
                "A) Solicitar dos dispositivos físicos AWS Snowball Edge Storage Optimized, copiar los datos localmente a velocidad de red LAN y enviar los dispositivos de vuelta a AWS para su carga en S3.",
                "B) Dejar la transferencia corriendo a través de Internet durante 2 años.",
                "C) Instalar el agente de AWS DataSync en 10 servidores virtuales simultáneamente.",
                "D) Enviar discos duros externos USB convencionales por correo comercial."
            ],
            "correctAnswer": 0,
            "explanation": "Transferir 150 TB de datos a través de una conexión de 20 Mbps tomaría más de 20 meses continuos. Los dispositivos físicos AWS Snowball Edge Storage Optimized (con hasta 80 TB utilizables por dispositivo) permiten cargar datos localmente a alta velocidad y enviarlos de forma segura y encriptada por correo postal a los centros de datos de AWS en pocos días."
        },
        {
            "id": "d24-q5",
            "multi": True,
            "scenarioTag": "Dominio 3: Transferencia Rápida de Archivos con AWS DataSync",
            "question": "¿Cuáles de las siguientes afirmaciones sobre AWS DataSync son correctas para la transferencia de datos entre on-premises y AWS? (Selecciona DOS)",
            "options": [
                "A) DataSync acelera y automatiza la copia de datos a través de la red hacia servicios como Amazon S3, Amazon EFS y Amazon FSx utilizando un protocolo propietario optimizado de transferencia.",
                "B) Incluye verificación automática de integridad de datos en tránsito y en reposo.",
                "C) DataSync solo funciona a través de cables Direct Connect dedicados y no puede operar a través de Internet ni VPN.",
                "D) DataSync requiere que las bases de datos origen sean migradas a DynamoDB.",
                "E) DataSync elimina todos los archivos de origen sin confirmación."
            ],
            "correctAnswers": [0, 1],
            "explanation": "AWS DataSync simplifica y acelera la transferencia de datos mediante un protocolo acelerado de red, integrándose con sistemas de archivos NFS/SMB y almacenamiento de objetos, e incluye validación de integridad criptográfica punto a punto durante la transferencia y en reposo."
        },
        {
            "id": "d24-q6",
            "scenarioTag": "Dominio 3: Data Warehouse Empresarial (Amazon Redshift)",
            "question": "Una cadena comercial necesita consolidar datos de ventas de 1.000 tiendas para realizar consultas analíticas complejas (OLAP), agregaciones masivas y generación de dashboards de Business Intelligence (BI) sobre terabytes de datos históricos con latencias de consulta de segundos. ¿Qué base de datos de AWS está diseñada para almacenamiento y análisis columnar a gran escala?",
            "options": [
                "A) Amazon RDS para PostgreSQL en modo Multi-AZ.",
                "B) Amazon DynamoDB con índices globales.",
                "C) Amazon Redshift.",
                "D) Amazon OpenSearch Service."
            ],
            "correctAnswer": 2,
            "explanation": "Amazon Redshift es el servicio de almacenamiento de datos en la nube (Data Warehouse) a escala de petabytes totalmente administrado de AWS. Su arquitectura columnar orientada a OLAP (con procesamiento masivamente paralelo - MPP) permite analizar terabytes y petabytes de datos complejos a gran velocidad."
        },
        {
            "id": "d24-q7",
            "scenarioTag": "Dominio 3: Consultas de Datos en S3 sin Cargar (Redshift Spectrum)",
            "question": "Un equipo de analítica utiliza Amazon Redshift. Tienen 5 TB de datos de transacciones frecuentes en el almacenamiento local del clúster de Redshift, pero desean ejecutar consultas SQL que unan (JOIN) esos datos con más de 200 TB de datos históricos fríos almacenados en archivos Parquet en Amazon S3, sin tener que cargar los 200 TB en el almacenamiento costoso del clúster de Redshift. ¿Qué característica permite esto?",
            "options": [
                "A) Redshift Concurrency Scaling.",
                "B) Redshift Spectrum.",
                "C) AWS Database Migration Service.",
                "D) Amazon QuickSight SPICE."
            ],
            "correctAnswer": 1,
            "explanation": "Amazon Redshift Spectrum permite ejecutar consultas SQL directamente sobre exabytes de datos estructurados y semiestructurados almacenados en Amazon S3, utilizando las definiciones de tablas de AWS Glue Data Catalog, y combinándolos con las tablas internas del clúster de Redshift sin necesidad de cargar ni transformar datos previamente."
        },
        {
            "id": "d24-q8",
            "scenarioTag": "Dominio 3: Procesamiento de Big Data (Amazon EMR)",
            "question": "Una empresa de telecomunicaciones requiere procesar diariamente terabytes de datos de llamadas telefónicas utilizando marcos de procesamiento de código abierto de big data como Apache Spark, Apache Hadoop y Presto. El equipo busca aprovisionar clústeres elásticos que puedan redimensionarse dinámicamente y aprovechar instancias Spot para reducir costos. ¿Qué servicio administrado de AWS es el adecuado?",
            "options": [
                "A) Amazon Elastic MapReduce (Amazon EMR).",
                "B) AWS Batch con contenedores Fargate.",
                "C) Amazon Athena con consultas federadas.",
                "D) AWS Systems Manager Run Command."
            ],
            "correctAnswer": 0,
            "explanation": "Amazon EMR es la plataforma de clústeres de big data líder en la nube para ejecutar frameworks de análisis y procesamiento distribuido de código abierto como Apache Spark, Hadoop, Hive, HBase y Presto a gran escala con integración completa de instancias Spot y Amazon S3."
        },
        {
            "id": "d24-q9",
            "scenarioTag": "Dominio 3: Migración de Servidores con AWS Application Migration Service (MGN)",
            "question": "Un equipo de infraestructura necesita migrar 80 servidores virtuales que ejecutan aplicaciones monolíticas heredadas en Linux y Windows desde un centro de datos VMware local hacia Amazon EC2 con la mínima modificación posible (estrategia Rehost / Lift-and-Shift) y tiempo de corte casi nulo. ¿Qué servicio oficial de AWS automatiza esta migración a nivel de bloque?",
            "options": [
                "A) AWS Application Discovery Service.",
                "B) AWS Application Migration Service (AWS MGN).",
                "C) AWS Schema Conversion Tool.",
                "D) VM Import/Export manual."
            ],
            "correctAnswer": 1,
            "explanation": "AWS Application Migration Service (AWS MGN) es el servicio de migración primaria recomendado para migraciones tipo Rehost (Lift-and-Shift). Replica continuamente discos a nivel de bloque desde servidores físicos, virtuales o basados en la nube hacia una zona de ensayo ligera en AWS, permitiendo cortes en minutos sin interrupciones."
        },
        {
            "id": "d24-q10",
            "multi": True,
            "scenarioTag": "Dominio 3: Ingesta y Streaming en Tiempo Real (Kinesis vs MSK)",
            "question": "¿Cuáles de las siguientes opciones describen correctamente capacidades de ingesta y transmisión de datos en tiempo real en AWS? (Selecciona DOS)",
            "options": [
                "A) Amazon Kinesis Data Firehose entrega transmisiones de datos en tiempo real de forma serverless hacia destinos como Amazon S3, Amazon Redshift y OpenSearch, soportando transformación de datos con Lambda y conversión de formato a Parquet.",
                "B) Amazon Managed Streaming for Apache Kafka (Amazon MSK) proporciona clústeres de Apache Kafka totalmente administrados y compatibles con versiones anteriores.",
                "C) Amazon SQS es un motor de streaming que procesa miles de millones de eventos en tiempo real con particionamiento de fragmentos (shards).",
                "D) Amazon Kinesis solo puede almacenar datos durante un máximo de 60 segundos.",
                "E) Ni Kinesis ni MSK admiten cifrado con AWS KMS."
            ],
            "correctAnswers": [0, 1],
            "explanation": "Amazon Kinesis Data Firehose es una solución serverless para cargar flujos de streaming en data lakes y almacenes de datos, con soporte para transformaciones y conversión columnar. Amazon MSK gestiona clústeres de Apache Kafka nativos para aplicaciones que ya utilizan el ecosistema Kafka."
        }
    ],

    26: [
        {
            "id": "d26-q1",
            "scenarioTag": "Dominio 1 & 2: Arquitectura Empresarial de 3 Capas",
            "question": "Un banco digital diseña su plataforma bancaria core en AWS siguiendo las mejores prácticas del Well-Architected Framework. La arquitectura consta de una capa web, una capa de aplicación de microservicios y una base de datos relacional de transacciones monetarias. Los requisitos obligatorios son:\n1. La capa web debe recibir tráfico HTTPS público y distribuir la carga entre servidores web en múltiples AZs, mitigando ataques DDoS en el borde.\n2. Las instancias de microservicios y la base de datos deben residir en subnets privadas sin acceso directo a internet.\n3. Los operadores de sistemas deben administrar las instancias EC2 privadas sin exponer llaves SSH ni habilitar puertos 22 en grupos de seguridad.\n4. La base de datos debe tolerar fallas de hardware en su zona de disponibilidad con conmutación automática en menos de un minuto.\n¿Qué arquitectura integral cumple con todos estos requisitos?",
            "options": [
                "A) Desplegar un NLB público; instancias con direcciones IP públicas asignadas en subnets públicas; un Bastion Host con puerto 22 abierto para SSH; y Amazon RDS en una única Availability Zone con backups manuales.",
                "B) Colocar todas las instancias detrás de un Classic Load Balancer en una sola subnet privada con NAT Gateway y RDS MySQL monozona.",
                "C) Utilizar Amazon Route 53 apuntando directamente a las IPs elásticas de las instancias de backend, usando contraseñas de root guardadas en GitHub.",
                "D) Desplegar un ALB público con AWS WAF y CloudFront en el borde; instancias web y de backend en subnets privadas; AWS Systems Manager Session Manager para acceso seguro a terminales sin SSH; y una base de datos Amazon Aurora Multi-AZ con réplicas automáticas."
            ],
            "correctAnswer": 3,
            "explanation": "Esta es la arquitectura de referencia de AWS: CloudFront + WAF + ALB para protección perimetral e inspección Layer 7; cómputo privado en múltiples AZs para alta disponibilidad; AWS Systems Manager Session Manager para acceso seguro sin exponer puertos de administración SSH/RDP ni mantener Bastion Hosts; y Amazon Aurora Multi-AZ para conmutación por error en milisegundos ante fallas de infraestructura."
        },
        {
            "id": "d26-q2",
            "scenarioTag": "Dominio 2: Desacoplamiento Serverless a Gran Escala",
            "question": "Una aplicación de compras minoristas anticipa picos masivos de millones de órdenes por hora durante eventos de Black Friday. La arquitectura debe aceptar transacciones inmediatamente sin rechazar compras por saturación de base de datos, procesar pagos de forma asíncrona y escalar a decenas de miles de ejecuciones concurrentes sin gestionar servidores ni provisionar capacidad fija. ¿Qué diseño serverless desacoplado es el más resiliente?",
            "options": [
                "A) Amazon API Gateway como punto de entrada HTTP público que escribe directamente los pedidos en una cola Amazon SQS, disparando funciones AWS Lambda para procesamiento asíncrono que persisten las transacciones en Amazon DynamoDB en modo On-Demand.",
                "B) Un balanceador de carga de red (NLB) enviando tráfico a una única instancia EC2 t3.nano ejecutando MySQL.",
                "C) Un clúster de Amazon EMR permanente que consulta APIs bancarias sincrónicamente.",
                "D) Instancias EC2 con Auto Scaling basado en memoria RAM conectadas a un clúster RDS monozona."
            ],
            "correctAnswer": 0,
            "explanation": "La combinación de Amazon API Gateway (con integración de proxy hacia SQS) actúa como un búfer elástico e indestructible ante picos masivos de tráfico. SQS desacopla la recepción del procesamiento, y AWS Lambda escala automáticamente para consumir mensajes y escribir en Amazon DynamoDB On-Demand sin saturar recursos."
        },
        {
            "id": "d26-q3",
            "scenarioTag": "Dominio 2: Disaster Recovery Multi-Región con RPO y RTO < 1 Minuto",
            "question": "Una compañía de seguros médicos necesita una solución de Disaster Recovery multi-región para su base de datos transaccional que garantice un RTO menor a 1 minuto y un RPO menor a 1 segundo ante la caída de su región primaria de AWS. ¿Qué servicio y configuración de base de datos ofrece estas métricas de recuperación con el menor esfuerzo de administración?",
            "options": [
                "A) Amazon RDS MySQL monozona con scripts diarios de exportación hacia S3 Glacier.",
                "B) Amazon Aurora Global Database configurada con una región primaria y una o más regiones secundarias con almacenamiento replicado continuamente en menos de un segundo.",
                "C) AWS Database Migration Service (DMS) con copia batch semanal sobre VPN.",
                "D) Amazon RDS con Read Replicas interregionales en las que el failover manual toma 3 horas."
            ],
            "correctAnswer": 1,
            "explanation": "Amazon Aurora Global Database está diseñada específicamente para cumplir con los objetivos más rigurosos de continuidad de negocio: la replicación física de almacenamiento a nivel de infraestructura troncal toma típicamente menos de 1 segundo (RPO < 1s) y una región secundaria puede ser promovida a primaria para admitir lecturas y escrituras en menos de 1 minuto (RTO < 1 min)."
        },
        {
            "id": "d26-q4",
            "scenarioTag": "Dominio 1: Gobernanza y Seguridad Multi-Cuenta Corporativa",
            "question": "Un Solutions Architect lidera el diseño de gobernanza para una corporación que gestiona 80 cuentas de AWS. Los requisitos del CISO son:\n1. Ninguna cuenta debe poder desactivar los logs de auditoría ni borrar buckets de seguridad.\n2. Todo el tráfico de las cuentas debe inspeccionarse mediante un conjunto centralizado de firewalls virtuales.\n3. Los accesos de desarrolladores deben realizarse mediante Single Sign-On sincronizado con el Identity Provider corporativo.\n¿Qué conjunto integral de servicios de gobernanza de AWS debe implementarse?",
            "options": [
                "A) Cuentas de AWS independientes con credenciales Root compartidas por correo electrónico, bastiones SSH públicos y VPC Peering directo.",
                "B) AWS Organizations con Service Control Policies (SCPs) restrictivas; AWS Transit Gateway conectado a una VPC de inspección de seguridad centralizada con AWS Network Firewall; e IAM Identity Center conectado con SAML 2.0.",
                "C) Amazon Route 53 privado y CloudWatch Agent con credenciales estáticas de IAM.",
                "D) AWS Secrets Manager en cada cuenta con claves compartidas."
            ],
            "correctAnswer": 1,
            "explanation": "Esta es la arquitectura de gobernanza de referencia de nivel empresarial de AWS: AWS Organizations con SCPs para establecer barreras de seguridad infranqueables; AWS Transit Gateway junto con AWS Network Firewall para centralizar e inspeccionar el tráfico de todas las VPCs; e IAM Identity Center para la autenticación centralizada mediante SSO y federación corporativa."
        },
        {
            "id": "d26-q5",
            "multi": True,
            "scenarioTag": "Dominio 3: Ingesta y Procesamiento de Telemetría Masiva IoT",
            "question": "Una empresa de vehículos conectados recopila continuamente telemetría GPS y datos de diagnóstico de 500.000 automóviles (100.000 registros por segundo). Los datos deben persistirse de forma duradera en formato Parquet en un Data Lake de S3 para análisis en Athena, y al mismo tiempo detectar en tiempo real si algún motor supera una temperatura crítica para alertar al conductor en menos de 3 segundos. ¿Cuáles de los siguientes servicios integran esta solución? (Selecciona DOS)",
            "options": [
                "A) Amazon Kinesis Data Streams para ingerir el flujo masivo de eventos en tiempo real con fragmentos (shards) particionados.",
                "B) Amazon Kinesis Data Firehose consumiendo del stream para transformar y convertir datos a formato Parquet antes de entregarlos en lotes a Amazon S3.",
                "C) Amazon RDS PostgreSQL monozona con índices B-tree para recibir las 100.000 inserciones por segundo directamente.",
                "D) Amazon S3 Glacier Flexible Archive como destino de ingesta directo con conexiones FTP.",
                "E) AWS Snowball Edge montado en el maletero de cada automóvil."
            ],
            "correctAnswers": [0, 1],
            "explanation": "Amazon Kinesis Data Streams maneja la ingesta continua de millones de eventos en tiempo real a alta velocidad para procesamiento analítico inmediato (con AWS Lambda o Kinesis Data Analytics para alertas en segundos). Kinesis Data Firehose entrega datos de forma persistente y duradera en S3, soportando conversión nativa a formato Parquet."
        },
        {
            "id": "d26-q6",
            "scenarioTag": "Dominio 4: Optimización Extrema de Costos de Cómputo y Red",
            "question": "Una startup analiza su factura mensual de AWS y detecta dos grandes generadores de gasto:\n1. Flotas de instancias EC2 que procesan tareas por lotes interrumpibles que corren de forma continua a precio bajo demanda.\n2. Cientos de terabytes transferidos desde instancias privadas hacia Amazon S3 pasando por NAT Gateways.\n¿Qué dos cambios arquitectónicos reducen el costo de estos dos conceptos al mínimo absoluto?",
            "options": [
                "A) Cambiar a instancias EC2 On-Demand más grandes y usar Internet Gateway público en subredes privadas.",
                "B) Migrar los trabajos por lotes a EC2 Spot Instances (aprovechando descuentos de hasta el 90%) e implementar un VPC Gateway Endpoint para Amazon S3 (gratuito) para evitar los cargos de procesamiento del NAT Gateway.",
                "C) Reemplazar S3 por discos EBS sc1 adjuntos a todas las máquinas.",
                "D) Contratar un enlace de AWS Direct Connect dedicado de 100 Gbps."
            ],
            "correctAnswer": 1,
            "explanation": "Las instancias Spot ofrecen hasta un 90% de descuento para cargas por lotes tolerantes a fallos. Los Gateway Endpoints de VPC para Amazon S3 son completamente gratuitos y evitan que el tráfico interregional o hacia S3 pase por el NAT Gateway (que cobra $0.045 por hora + $0.045 por GB procesado), eliminando ese costo por completo."
        },
        {
            "id": "d26-q7",
            "scenarioTag": "Dominio 1: Acceso Seguro de Administración sin Claves SSH ni Bastions",
            "question": "Un equipo de administradores necesita ejecutar comandos de mantenimiento y acceder a terminales de shell interactivas en 200 instancias EC2 Linux ubicadas en subredes privadas sin direcciones IP públicas. La política de seguridad prohíbe terminantemente abrir el puerto 22 entrante en Security Groups, desplegar Bastion Hosts o gestionar pares de claves SSH (.pem). ¿Qué servicio y configuración de AWS debe utilizarse?",
            "options": [
                "A) AWS Systems Manager Session Manager, instalando el SSM Agent en las instancias, asignándoles un IAM Role con la política AmazonSSMManagedInstanceCore y configurando VPC Interface Endpoints para Systems Manager (si no hay salida a Internet).",
                "B) Habilitar Telnet en el puerto 23 con contraseñas seguras.",
                "C) Asignar Elastic IPs públicas temporales a cada instancia privada durante las tareas de mantenimiento.",
                "D) Crear una conexión VPN por software en cada máquina conectada a un túnel GRE."
            ],
            "correctAnswer": 0,
            "explanation": "AWS Systems Manager Session Manager proporciona gestión de instancias basada en navegador y CLI totalmente segura y auditable a través de IAM y CloudTrail/S3, sin necesidad de abrir puertos de entrada (puerto 22), sin mantener claves SSH y sin requerir direcciones IP públicas o Bastion Hosts."
        },
        {
            "id": "d26-q8",
            "scenarioTag": "Dominio 3: Almacenamiento Compartido Multi-Plataforma para Aplicaciones Legadas",
            "question": "Una empresa migra una plataforma empresarial heterogénea donde servidores de cómputo en Linux acceden a datos mediante NFS y servidores de procesamiento en Windows Server acceden a los mismos datos mediante SMB simultáneamente. La solución exige soporte nativo de Active Directory, snapshots instantáneos y deduplicación para ahorrar espacio. ¿Qué servicio de almacenamiento de archivos de AWS cumple todos estos requisitos?",
            "options": [
                "A) Amazon Elastic File System (EFS).",
                "B) Amazon FSx for NetApp ONTAP.",
                "C) Amazon FSx for Windows File Server.",
                "D) Amazon S3 montado con fuse-s3fs."
            ],
            "correctAnswer": 1,
            "explanation": "Amazon FSx for NetApp ONTAP es la única solución gestionada de AWS que soporta acceso multi-protocolo concurrente (NFS para Linux y SMB para Windows) sobre el mismo sistema de archivos, con integración con Active Directory empresarial, deduplicación, compresión y snapshots de alta velocidad."
        },
        {
            "id": "d26-q9",
            "scenarioTag": "Dominio 2: Enrutamiento DNS Híbrido Corporativo",
            "question": "Una corporación conecta su centro de datos local a su VPC de AWS mediante AWS Direct Connect. Los servidores locales on-premises necesitan resolver nombres DNS de zonas privadas de Route 53 (ej: app.corp.internal), mientras que las instancias EC2 en AWS necesitan resolver nombres de dominio locales alojados en los servidores DNS de Microsoft Active Directory on-premises (ej: files.corp.local). ¿Qué arquitectura soluciona esta resolución bidireccional?",
            "options": [
                "A) Configurar Route 53 Resolver Inbound Endpoints (para permitir consultas entrantes desde on-premises a Route 53) y Outbound Endpoints con reglas de reenvío (Forwarding Rules) que apunten las consultas de corp.local hacia las IPs de los DNS locales.",
                "B) Publicar las zonas privadas de Route 53 en Internet público con registros TXT.",
                "C) Instalar servidores de correo Postfix en instancias EC2 públicas.",
                "D) Configurar una conexión de VPC Peering con el centro de datos local."
            ],
            "correctAnswer": 0,
            "explanation": "Route 53 Resolver Endpoints habilitan la resolución híbrida bidireccional de DNS: los Inbound Endpoints reciben consultas DNS desde la red on-premises para resolver Private Hosted Zones de Route 53, y los Outbound Endpoints reenvían consultas desde las VPCs de AWS hacia los servidores DNS locales según reglas de reenvío configuradas."
        },
        {
            "id": "d26-q10",
            "multi": True,
            "scenarioTag": "Dominio 1: Cifrado y Cumplimiento Normativo de Extremo a Extremo",
            "question": "Para cumplir con la normativa bancaria PCI-DSS en una arquitectura que procesa pagos en AWS, ¿cuáles de las siguientes medidas de seguridad arquitectónicas son obligatorias? (Selecciona DOS)",
            "options": [
                "A) Cifrado de datos en reposo en todos los componentes de almacenamiento (EBS, RDS, S3) utilizando claves maestras de KMS con rotación automática de claves.",
                "B) Cifrado de datos en tránsito utilizando TLS 1.2 o superior en todas las capas de red entre clientes, balanceadores y servidores de aplicación.",
                "C) Desactivar AWS CloudTrail para evitar que se registren los números de tarjetas de crédito en las llamadas a la API.",
                "D) Asignar permisos de administrador (AdministratorAccess) a todas las funciones Lambda para prevenir errores de permisos durante las transacciones.",
                "E) Almacenar los CVVs de las tarjetas en archivos de texto sin cifrar en un volumen EBS compartido."
            ],
            "correctAnswers": [0, 1],
            "explanation": "El cumplimiento de PCI-DSS exige protección rigurosa tanto para datos en reposo (cifrado obligatorio en S3, RDS, EBS con KMS) como para datos en tránsito (cifrado estricto con protocolos TLS 1.2+ en todas las comunicaciones internas y externas)."
        }
    ]
}
