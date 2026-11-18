// Flashcards oficiales de AWS Skill Builder para SAA-C03
window.OFFICIAL_FLASHCARDS = {
  "es": [
    {
      "id": "fc-d1-01",
      "domain": "Dominio 1: Diseño de Arquitecturas Seguras",
      "topic": "Amazon S3 Security",
      "front": "¿Cómo protegés los objetos de tus buckets de Amazon S3 contra borrado o sobreescritura accidental o maliciosa?",
      "back": "Activando Versioning (control de versiones) y MFA Delete (requiere token de autenticación multifactor física para eliminar versiones definitivas)."
    },
    {
      "id": "fc-d1-02",
      "domain": "Dominio 1: Diseño de Arquitecturas Seguras",
      "topic": "Amazon EBS Encryption",
      "front": "¿Cómo asegurás los datos sensibles almacenados en volúmenes de Amazon EBS?",
      "back": "Asegurándote de habilitar el cifrado de EBS (EBS Encryption) al crear el volumen. También podés habilitar el cifrado por defecto a nivel de Región en tu cuenta de AWS."
    },
    {
      "id": "fc-d1-03",
      "domain": "Dominio 1: Diseño de Arquitecturas Seguras",
      "topic": "IAM & Temporal Credentials",
      "front": "¿Qué servicio de AWS se utiliza para proporcionar acceso a corto plazo que actúa como credenciales de seguridad temporales para acceder a recursos de AWS?",
      "back": "AWS Security Token Service (AWS STS), mediante APIs como AssumeRole, AssumeRoleWithWebIdentity o GetSessionToken."
    },
    {
      "id": "fc-d1-04",
      "domain": "Dominio 1: Diseño de Arquitecturas Seguras",
      "topic": "IAM Default Permissions",
      "front": "¿Con qué permisos inician las identidades de IAM cuando creás un nuevo usuario, grupo o rol?",
      "back": "Sin ningún permiso (Deny implícito por defecto). Todos los permisos deben ser explícitamente concedidos mediante políticas de permisos."
    },
    {
      "id": "fc-d1-05",
      "domain": "Dominio 1: Diseño de Arquitecturas Seguras",
      "topic": "IAM Roles Policies",
      "front": "¿Cuáles son los dos tipos de políticas que se pueden adjuntar a un IAM Role?",
      "back": "1. Trust Policy (política de confianza): define quién o qué servicio puede asumir el rol (el Principal).\n2. Permissions Policy (política de permisos): define qué acciones y sobre qué recursos puede operar la identidad una vez que asumió el rol."
    },
    {
      "id": "fc-d1-06",
      "domain": "Dominio 1: Diseño de Arquitecturas Seguras",
      "topic": "AWS Organizations & SCPs",
      "front": "¿Cuáles son las dos formas principales en las que se utilizan las Service Control Policies (SCPs)?",
      "back": "1. Lista blanca (Allow List): denegar todos los servicios por defecto y permitir únicamente los servicios aprobados.\n2. Lista negra (Deny List): permitir todo por defecto y bloquear el acceso a servicios o acciones no deseadas (ej. impedir desactivar CloudTrail o salir de ciertas Regiones)."
    },
    {
      "id": "fc-d1-07",
      "domain": "Dominio 1: Diseño de Arquitecturas Seguras",
      "topic": "Network ACLs vs Security Groups",
      "front": "¿Cuáles son las diferencias críticas entre Network ACLs (NACLs) y Security Groups (SGs)?",
      "back": "• Nivel: NACL opera a nivel de subred; SG opera a nivel de interfaz de red elástica (ENI) de la instancia.\n• Estado: Security Groups son Stateful (si entra la petición, la respuesta sale automáticamente). NACLs son Stateless (requieren reglas de entrada y salida explícitas).\n• Reglas: SGs solo admiten reglas Allow (Deny implícito). NACLs admiten reglas Allow y Deny explícitas evaluadas en orden numérico ascendente."
    },
    {
      "id": "fc-d1-08",
      "domain": "Dominio 1: Diseño de Arquitecturas Seguras",
      "topic": "VPC Endpoints",
      "front": "¿Cuáles son los dos tipos de Endpoints que podés crear dentro de tu Amazon VPC?",
      "back": "1. Gateway Endpoints: exclusivos para Amazon S3 y DynamoDB. No tienen costo adicional y funcionan agregando una ruta en la Route Table de la VPC.\n2. Interface Endpoints (AWS PrivateLink): para casi todos los demás servicios de AWS y servicios externos. Crean una interfaz ENI con IP privada en tu subred y se protegen mediante Security Groups."
    },
    {
      "id": "fc-d1-09",
      "domain": "Dominio 1: Diseño de Arquitecturas Seguras",
      "topic": "Secrets Management",
      "front": "¿Qué servicio de AWS integrás para cifrar, almacenar y rotar automáticamente credenciales de bases de datos, claves de API y secretos?",
      "back": "AWS Secrets Manager (incluye rotación automática nativa mediante funciones AWS Lambda para RDS, DocumentDB y Redshift)."
    },
    {
      "id": "fc-d1-10",
      "domain": "Dominio 1: Diseño de Arquitecturas Seguras",
      "topic": "SSL/TLS Certificates",
      "front": "¿Qué servicio de AWS utilizás para asegurar tu aplicación web y permitir que múltiples dominios sirvan tráfico SSL/TLS sobre la misma dirección IP?",
      "back": "AWS Certificate Manager (ACM), integrándolo con un Application Load Balancer (ALB) o CloudFront mediante Server Name Indication (SNI)."
    },
    {
      "id": "fc-d1-11",
      "domain": "Dominio 1: Diseño de Arquitecturas Seguras",
      "topic": "Hybrid Identity & Active Directory",
      "front": "¿Qué servicio de AWS Directory Service implementás para acceder a recursos tanto on-premises como en AWS usando credenciales del Active Directory corporativo?",
      "back": "AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD), creando una relación de confianza de bosque (Forest Trust) bidireccional o unidireccional con tu AD on-premises."
    },
    {
      "id": "fc-d1-12",
      "domain": "Dominio 1: Diseño de Arquitecturas Seguras",
      "topic": "AWS WAF Rate Limiting",
      "front": "¿Necesitás limitar el número máximo de peticiones HTTP/S desde una única dirección IP en una regla de AWS WAF para prevenir ataques de fuerza bruta o DDoS. ¿Qué creás?",
      "back": "Una regla basada en tasa (Rate-based rule), configurando el límite de peticiones (por ejemplo, máx. 500 peticiones en una ventana de evaluación de 5 minutos)."
    },
    {
      "id": "fc-d1-13",
      "domain": "Dominio 1: Diseño de Arquitecturas Seguras",
      "topic": "WAF & Modelo OSI",
      "front": "¿Por qué es fundamental el conocimiento del modelo OSI para diseñar reglas con AWS WAF y firewalls en AWS?",
      "back": "Porque las capacidades de inspección dependen de la capa OSI: AWS WAF y los ALBs inspeccionan Capa 7 (HTTP/HTTPS, headers, cookies, payloads). Security Groups y Network Firewalls inspeccionan Capas 3 y 4 (IP, TCP/UDP, puertos). A mayor capa, mayor capacidad de inspección pero mayor consumo de cómputo y costo."
    },
    {
      "id": "fc-d2-01",
      "domain": "Dominio 2: Diseño de Arquitecturas Resilientes",
      "topic": "Amazon RDS High Availability",
      "front": "Si necesitás diseñar e implementar replicación sincrónica de datos entre Zonas de Disponibilidad (AZ) para tus instancias de Amazon RDS, ¿cuál es la mejor solución?",
      "back": "Despliegue Multi-AZ (Multi-AZ deployment). Utiliza replicación física sincrónica a nivel de almacenamiento con conmutación por error (failover) automática y sin cambio de endpoint DNS."
    },
    {
      "id": "fc-d2-02",
      "domain": "Dominio 2: Diseño de Arquitecturas Resilientes",
      "topic": "Amazon RDS Cross-Region Replication",
      "front": "Si necesitás diseñar e implementar replicación asincrónica de datos hacia otra instancia de Amazon RDS en otra Región de AWS, ¿cuál es la mejor solución?",
      "back": "Agregar una Réplica de Lectura (Read Replica) en la región secundaria. Permite descargar tráfico de lectura y ser promovida a base de datos independiente para Disaster Recovery."
    },
    {
      "id": "fc-d2-03",
      "domain": "Dominio 2: Diseño de Arquitecturas Resilientes",
      "topic": "Relational Database Disaster Recovery",
      "front": "Necesitás crear un plan de recuperación ante desastres (Disaster Recovery) para tu base de datos relacional con un RTO < 60 segundos y un RPO < 1 segundo. ¿Qué base de datos de Amazon RDS sería la mejor elección?",
      "back": "Amazon Aurora Global Database. Distribuye una única base de datos Aurora a lo largo de múltiples regiones de AWS mediante replicación basada en almacenamiento con latencia típica inferior a 1 segundo. En caso de corte o degradación regional, una región secundaria puede promoverse a capacidades de lectura y escritura completas en menos de 1 minuto (RTO < 60s, RPO < 1s)."
    },
    {
      "id": "fc-d2-04",
      "domain": "Dominio 2: Diseño de Arquitecturas Resilientes",
      "topic": "Core Architecture Concepts",
      "front": "¿Qué es Alta Disponibilidad (High Availability)?",
      "back": "La alta disponibilidad es una filosofía de diseño orientada a mantener los sistemas en funcionamiento y prestando servicio la mayor parte del tiempo posible. Si un componente falla, se reemplaza o recupera de forma tan rápida y automatizada que el impacto operativo es prácticamente imperceptible."
    },
    {
      "id": "fc-d2-05",
      "domain": "Dominio 2: Diseño de Arquitecturas Resilientes",
      "topic": "Core Architecture Concepts",
      "front": "¿Qué es Tolerancia a Fallas (Fault Tolerance)?",
      "back": "Aunque similar a la alta disponibilidad, la tolerancia a fallas es la capacidad real y activa de un sistema para seguir operando sin degradación alguna ante la falla de uno o más de sus componentes. El sistema continúa funcionando de manera ininterrumpida a pesar de que el fallo esté presente."
    },
    {
      "id": "fc-d2-06",
      "domain": "Dominio 2: Diseño de Arquitecturas Resilientes",
      "topic": "Core Architecture Concepts",
      "front": "¿Qué es Recuperación ante Desastres (Disaster Recovery)?",
      "back": "Disaster Recovery difiere de HA y Tolerancia a Fallas en que estas últimas buscan operar a través del fallo en tiempo real. DR se enfoca en la estrategia, planificación de contingencia y procesos de restauración ante catástrofes mayores (terremotos, caídas de regiones enteras, borrado masivo), medido bajo dos métricas clave: RTO (Recovery Time Objective) y RPO (Recovery Point Objective)."
    },
    {
      "id": "fc-d2-07",
      "domain": "Dominio 2: Diseño de Arquitecturas Resilientes",
      "topic": "DNS & Traffic Management",
      "front": "¿Qué servicio de AWS podés implementar para crear una conmutación por error DNS (DNS Failover) hacia un sitio web estático alojado en Amazon S3?",
      "back": "Amazon Route 53 configurado con una política de enrutamiento por conmutación por error (Failover Routing Policy) y Route 53 Health Checks asociados."
    },
    {
      "id": "fc-d2-08",
      "domain": "Dominio 2: Diseño de Arquitecturas Resilientes",
      "topic": "Amazon S3 Storage Classes",
      "front": "¿Qué clase de almacenamiento de Amazon S3 elegirías para almacenar datos fríos (cold data) que rara vez se consultan pero deben preservarse de forma segura y duradera al menor costo?",
      "back": "Amazon S3 Glacier Flexible Retrieval (o S3 Glacier Deep Archive para retención a muy largo plazo)."
    },
    {
      "id": "fc-d2-09",
      "domain": "Dominio 2: Diseño de Arquitecturas Resilientes",
      "topic": "High Performance File Storage",
      "front": "¿Qué solución de almacenamiento elegirías si necesitaras un sistema de archivos paralelo (parallel file system) optimizado para procesar datos de acceso frecuente con alto rendimiento (HPC / Machine Learning)?",
      "back": "Amazon FSx for Lustre. Diseñado para cómputo de alto rendimiento (HPC), entrenamiento de ML y procesamiento paralelo masivo con latencias de submilisegundos y cientos de GB/s de throughput."
    },
    {
      "id": "fc-d3-01",
      "domain": "Dominio 3: Diseño de Arquitecturas de Alto Rendimiento",
      "topic": "Application Load Balancer (Layer 7)",
      "front": "¿Qué balanceador de carga de AWS opera en la Capa 7 (Layer 7 - Aplicación) del modelo OSI?",
      "back": "Application Load Balancer (ALB). Especializado en tráfico HTTP/HTTPS, gRPC y WebSockets, con capacidades avanzadas de enrutamiento basado en rutas de URL, host headers, query strings y métodos HTTP."
    },
    {
      "id": "fc-d3-02",
      "domain": "Dominio 3: Diseño de Arquitecturas de Alto Rendimiento",
      "topic": "Network Load Balancer (Ultra-High Scale)",
      "front": "¿Qué balanceador de carga integrás para escalar y gestionar millones de peticiones por segundo con latencias ultra bajas de submilisegundos?",
      "back": "Network Load Balancer (NLB). Opera en la Capa 4 (TCP, UDP, TLS), ideal para cargas de trabajo con picos masivos y repentinos de tráfico, con soporte de IP estática o Elastic IP dedicada por AZ."
    },
    {
      "id": "fc-d3-03",
      "domain": "Dominio 3: Diseño de Arquitecturas de Alto Rendimiento",
      "topic": "CloudFront vs Global Accelerator",
      "front": "¿Cuál es la diferencia técnica fundamental entre Amazon CloudFront y AWS Global Accelerator?",
      "back": "• CloudFront: Optimiza la entrega almacenando contenido en caché (estático y dinámico) en Edge Locations.\n• Global Accelerator: No almacena en caché. Enruta paquetes TCP/UDP a través de la red troncal global de AWS hacia aplicaciones en múltiples Regiones, proporcionando dos IPs Anycast estáticas y failover regional ultra rápido."
    },
    {
      "id": "fc-d3-04",
      "domain": "Dominio 3: Diseño de Arquitecturas de Alto Rendimiento",
      "topic": "Amazon S3 Replication",
      "front": "¿Cuáles son los dos tipos de replicación nativa disponibles para buckets de Amazon S3?",
      "back": "1. Cross-Region Replication (CRR): replica objetos asíncronamente entre buckets en distintas Regiones de AWS.\n2. Same-Region Replication (SRR): replica objetos entre distintos buckets dentro de la misma Región de AWS.\n(Ambos métodos exigen tener activado el control de versiones - Versioning)."
    },
    {
      "id": "fc-d3-05",
      "domain": "Dominio 3: Diseño de Arquitecturas de Alto Rendimiento",
      "topic": "AWS Storage Gateway",
      "front": "¿Cuáles son las tres opciones principales de almacenamiento que ofrece AWS Storage Gateway para entornos híbridos?",
      "back": "1. File Gateway (S3 File Gateway y FSx File Gateway para compartir archivos vía NFS/SMB respaldados en S3/FSx).\n2. Volume Gateway (Cached Volumes para datos frecuentes locales o Stored Volumes para almacenamiento local primario respaldado en EBS snapshots).\n3. Tape Gateway (VTL virtual para reemplazar cintas físicas con S3 Glacier y Deep Archive)."
    },
    {
      "id": "fc-d3-06",
      "domain": "Dominio 3: Diseño de Arquitecturas de Alto Rendimiento",
      "topic": "EC2 Storage: Instance Store vs EBS",
      "front": "¿Cuáles son las dos opciones de almacenamiento a nivel de bloque para instancias Amazon EC2 y cómo difieren en persistencia?",
      "back": "• EC2 Instance Store: Almacenamiento efímero conectado físicamente al hardware del host. Entrega el mayor IOPS y menor latencia posible, pero los datos se pierden al detener o terminar la instancia.\n• Amazon EBS: Volúmenes de almacenamiento en bloque persistentes y conectados por red, independientes del ciclo de vida de la instancia."
    },
    {
      "id": "fc-d3-07",
      "domain": "Dominio 3: Diseño de Arquitecturas de Alto Rendimiento",
      "topic": "Amazon EBS Resiliency",
      "front": "¿Cuál es la resiliencia y alcance de alta disponibilidad de un volumen Amazon EBS?",
      "back": "Un volumen EBS está vinculado a una única Availability Zone (AZ) y se replica automáticamente dentro de esa misma AZ para evitar pérdidas por falla de hardware. Para lograr resiliencia entre diferentes AZs o Regiones, se deben tomar EBS Snapshots (almacenados de forma duradera en S3)."
    },
    {
      "id": "fc-d3-08",
      "domain": "Dominio 3: Diseño de Arquitecturas de Alto Rendimiento",
      "topic": "Amazon Elastic File System (EFS)",
      "front": "¿Qué tipo de instancias y sistemas operativos son compatibles nativamente con Amazon EFS?",
      "back": "Instancias basadas en Linux mediante el protocolo POSIX NFS (NFSv4.0 y NFSv4.1). Para cargas de trabajo nativas de Windows Server se debe utilizar Amazon FSx for Windows File Server (protocolo SMB)."
    },
    {
      "id": "fc-d3-09",
      "domain": "Dominio 3: Diseño de Arquitecturas de Alto Rendimiento",
      "topic": "DynamoDB: Query vs Scan",
      "front": "¿Cuál es la diferencia crítica de rendimiento y consumo de recursos entre Query y Scan en Amazon DynamoDB?",
      "back": "• Query: Busca ítems utilizando obligatoriamente la clave de partición (Partition Key) y opcionalmente la clave de ordenación (Sort Key). Es altamente eficiente y solo consume capacidad (RCUs) por los ítems leídos.\n• Scan: Recorre y examina elemento por elemento toda la tabla completa antes de aplicar filtros, consumiendo la capacidad de lectura de toda la tabla, lo cual resulta lento, ineficiente y costoso en tablas grandes."
    },
    {
      "id": "fc-d3-10",
      "domain": "Dominio 3: Diseño de Arquitecturas de Alto Rendimiento",
      "topic": "DynamoDB Streams & Lambda",
      "front": "¿Qué mecanismo se integra con una tabla de Amazon DynamoDB para reaccionar ante cambios en los ítems y disparar acciones?",
      "back": "DynamoDB Streams combinado con AWS Lambda. Los streams capturan un registro cronológico de modificaciones a nivel de ítem (inserción, actualización, borrado) y disparan funciones Lambda automáticamente para procesar o replicar eventos en tiempo real."
    },
    {
      "id": "fc-d3-11",
      "domain": "Dominio 3: Diseño de Arquitecturas de Alto Rendimiento",
      "topic": "Amazon Redshift Data Warehouse",
      "front": "¿Qué servicio de base de datos de AWS se utiliza como Data Warehouse para cargas analíticas y agregaciones masivas (OLAP)?",
      "back": "Amazon Redshift. Es un data warehouse relacional administrado, basado en almacenamiento por columnas (columnar storage) y arquitectura MPP (Massively Parallel Processing), optimizado para consultas complejas de Business Intelligence sobre petabytes de datos."
    },
    {
      "id": "fc-d3-12",
      "domain": "Dominio 3: Diseño de Arquitecturas de Alto Rendimiento",
      "topic": "NAT Gateway Subnet Placement",
      "front": "¿Dónde debe desplegarse un NAT Gateway dentro de una Amazon VPC: en una subred pública o privada?",
      "back": "En una subred pública. Debe contar con una Elastic IP pública asignada y una tabla de ruteo apuntando al Internet Gateway (IGW) para poder enrutar tráfico saliente de instancias ubicadas en subredes privadas hacia internet."
    },
    {
      "id": "fc-d3-13",
      "domain": "Dominio 3: Diseño de Arquitecturas de Alto Rendimiento",
      "topic": "VPC Peering Security Controls",
      "front": "Si utilizás VPC Peering para interconectar dos Amazon VPCs, ¿qué componentes utilizás para controlar y filtrar el tráfico entre ellas?",
      "back": "Network ACLs (a nivel de subred, filtrado stateless con reglas Allow/Deny explícitas) y Security Groups (a nivel de interfaz elástica/instancia, filtrado stateful con reglas Allow y capacidad de referenciar Security Groups de la VPC par)."
    },
    {
      "id": "fc-d4-01",
      "domain": "Dominio 4: Diseño de Arquitecturas Optimizadas en Costos",
      "topic": "EC2 Data Transfer Costs",
      "front": "¿Qué opción permite minimizar los costos de transferencia de datos entre dos instancias Amazon EC2?",
      "back": "Desplegar ambas instancias dentro de la misma Región de AWS (y dentro de la misma Availability Zone para eliminar completamente los cargos de transferencia de datos inter-AZ)."
    },
    {
      "id": "fc-d4-02",
      "domain": "Dominio 4: Diseño de Arquitecturas Optimizadas en Costos",
      "topic": "S3 Lifecycle for Infrequent Access",
      "front": "¿Qué podés implementar como solución rentable para almacenar objetos de Amazon S3 que no se acceden con frecuencia?",
      "back": "Crear una política de ciclo de vida (S3 Lifecycle policy) para mover los objetos poco consultados a una clase de almacenamiento más económica (como S3 Standard-IA, Glacier Flexible Retrieval o Glacier Deep Archive)."
    },
    {
      "id": "fc-d4-03",
      "domain": "Dominio 4: Diseño de Arquitecturas Optimizadas en Costos",
      "topic": "AWS Cost Explorer",
      "front": "¿Qué servicio debés activar para utilizar el panel de la consola de AWS Billing and Cost Management y realizar un seguimiento de tus gastos y uso?",
      "back": "AWS Cost Explorer. Te permite visualizar, comprender y administrar tus costos y uso histórico a lo largo del tiempo, crear filtros detallados y proyectar gastos futuros estimados."
    },
    {
      "id": "fc-d4-04",
      "domain": "Dominio 4: Diseño de Arquitecturas Optimizadas en Costos",
      "topic": "Unused EC2 Instances Cost Optimization",
      "front": "¿Cómo podés reducir el gasto de mantener instancias Amazon EC2 que ya no se están utilizando?",
      "back": "Crear un snapshot del volumen EBS (para preservar el estado y datos del disco) y eliminar/terminar las instancias EC2 inactivas, evitando cargos continuos de cómputo por hora ociosa."
    },
    {
      "id": "fc-d4-05",
      "domain": "Dominio 4: Diseño de Arquitecturas Optimizadas en Costos",
      "topic": "EC2 Auto Scaling: Target Tracking Policy",
      "front": "Necesitás una solución costo-eficiente para una aplicación web en un Auto Scaling group de EC2 para evitar sobreaprovisionamiento sin degradar el rendimiento. ¿Qué política de escalado dinámico cumple esto?",
      "back": "Una política de escalado con seguimiento de destino (Target tracking scaling policy). Aumenta o disminuye la capacidad de instancias según un valor objetivo fijado para una métrica específica (por ej. mantener CPU promedio al 60%), sumando o liberando recursos dinámicamente."
    },
    {
      "id": "fc-d4-06",
      "domain": "Dominio 4: Diseño de Arquitecturas Optimizadas en Costos",
      "topic": "Direct Connect + Transit Gateway",
      "front": "Tenés un enlace dedicado AWS Direct Connect on-premises y necesitás brindar acceso consistente y dedicado a nuevas cuentas de AWS con la menor sobrecarga operativa y costo. ¿Qué debés implementar?",
      "back": "Crear un Direct Connect gateway vinculado a la conexión de Direct Connect existente, desplegar un AWS Transit Gateway que interconecte las nuevas cuentas/VPCs, y asociar el Transit Gateway al Direct Connect gateway mediante una interfaz virtual de tránsito (transit VIF)."
    },
    {
      "id": "fc-d4-07",
      "domain": "Dominio 4: Diseño de Arquitecturas Optimizadas en Costos",
      "topic": "EC2 Spot Instances",
      "front": "¿Qué modelo de precios debés elegir para instancias Amazon EC2 que procesan cargas de trabajo por lotes (batch) en ambientes de no-producción tolerantes a interrupciones?",
      "back": "Spot Instances. Ofrecen hasta un 90% de descuento respecto a los precios On-Demand, siendo ideales para cargas de trabajo flexibles, sin estado (stateless) o tolerantes a interrupciones."
    },
    {
      "id": "fc-d4-08",
      "domain": "Dominio 4: Diseño de Arquitecturas Optimizadas en Costos",
      "topic": "On-Demand Capacity Reservations",
      "front": "¿Qué son las On-Demand Capacity Reservations?",
      "back": "Reservan capacidad de cómputo para instancias Amazon EC2 en una Availability Zone específica por cualquier duración sin exigir compromisos contractuales de 1 o 3 años, asegurando disponibilidad física inmediata cuando se requiera."
    },
    {
      "id": "fc-d4-09",
      "domain": "Dominio 4: Diseño de Arquitecturas Optimizadas en Costos",
      "topic": "Reserved Instances (RI)",
      "front": "¿Qué son las Reserved Instances (RI)?",
      "back": "Ofrecen un descuento significativo (hasta el 72-75%) en comparación con las instancias On-Demand a cambio de un compromiso de 1 o 3 años. Cuando se asignan a una Availability Zone específica (Zonal RI), también proporcionan una reserva garantizada de capacidad."
    }
  ],
  "en": [
    {
      "id": "fc-d1-01",
      "domain": "Domain 1: Design Secure Architectures",
      "topic": "Amazon S3 Security",
      "front": "How do you protect objects in your Amazon S3 buckets from accidental or malicious deletion or overwrite?",
      "back": "Turn on Versioning and MFA Delete (requires a physical multi-factor token to permanently delete object versions)."
    },
    {
      "id": "fc-d1-02",
      "domain": "Domain 1: Design Secure Architectures",
      "topic": "Amazon EBS Encryption",
      "front": "How do you secure sensitive data stored in Amazon EBS volumes?",
      "back": "Ensure you turn on EBS encryption when creating the volume. You can also enable default EBS encryption at the Region level."
    },
    {
      "id": "fc-d1-03",
      "domain": "Domain 1: Design Secure Architectures",
      "topic": "IAM & Temporal Credentials",
      "front": "What AWS service can you use to provide short-term access that acts as temporary security credentials for access to your AWS resources?",
      "back": "AWS Security Token Service (AWS STS), using APIs such as AssumeRole, AssumeRoleWithWebIdentity, or GetSessionToken."
    },
    {
      "id": "fc-d1-04",
      "domain": "Domain 1: Design Secure Architectures",
      "topic": "IAM Default Permissions",
      "front": "What permissions do IAM identities start with when you create a new user, group, or role?",
      "back": "No permissions (implicit deny by default). All permissions must be explicitly granted via permission policies."
    },
    {
      "id": "fc-d1-05",
      "domain": "Domain 1: Design Secure Architectures",
      "topic": "IAM Roles Policies",
      "front": "What two types of policies can be attached to an IAM role?",
      "back": "1. Trust policy: defines who or what service can assume the role (the Principal).\n2. Permission policy: defines what actions and resources the assumed identity can access."
    },
    {
      "id": "fc-d1-06",
      "domain": "Domain 1: Design Secure Architectures",
      "topic": "AWS Organizations & SCPs",
      "front": "What are the two main ways Service Control Policies (SCPs) are used?",
      "back": "1. Allow List: block all services by default and allow only approved services.\n2. Deny List: allow all services by default and explicitly block specific restricted actions or regions."
    },
    {
      "id": "fc-d1-07",
      "domain": "Domain 1: Design Secure Architectures",
      "topic": "Network ACLs vs Security Groups",
      "front": "What are the key differences between Network ACLs and Security Groups?",
      "back": "• Boundary: NACLs operate at the subnet boundary; Security Groups operate at the instance/ENI boundary.\n• Statefulness: Security Groups are stateful (inbound allowed replies outbound automatically). NACLs are stateless.\n• Rules: Security Groups only support Allow rules (implicit deny). NACLs support both Allow and Deny rules processed in ascending numerical order."
    },
    {
      "id": "fc-d1-08",
      "domain": "Domain 1: Design Secure Architectures",
      "topic": "VPC Endpoints",
      "front": "What are the two types of endpoints that you can create inside your Amazon VPC?",
      "back": "1. Gateway Endpoints: exclusively for Amazon S3 and DynamoDB at no extra charge, configured via VPC Route Tables.\n2. Interface Endpoints (AWS PrivateLink): for most other AWS services, creating private ENIs secured with Security Groups."
    },
    {
      "id": "fc-d1-09",
      "domain": "Domain 1: Design Secure Architectures",
      "topic": "Secrets Management",
      "front": "Which AWS service do you integrate to encrypt, store, and automatically rotate database credentials, API keys, and secrets?",
      "back": "AWS Secrets Manager (features native automatic rotation with AWS Lambda for RDS, DocumentDB, and Redshift)."
    },
    {
      "id": "fc-d1-10",
      "domain": "Domain 1: Design Secure Architectures",
      "topic": "SSL/TLS Certificates",
      "front": "Which AWS service do you integrate to secure your web application and allow multiple domains to serve SSL traffic over the same IP address?",
      "back": "AWS Certificate Manager (ACM), combined with Application Load Balancer or CloudFront using Server Name Indication (SNI)."
    },
    {
      "id": "fc-d1-11",
      "domain": "Domain 1: Design Secure Architectures",
      "topic": "Hybrid Identity & Active Directory",
      "front": "Which AWS Directory Service do you implement to access resources both on-premises and in AWS using on-premises credentials?",
      "back": "AWS Directory Service for Microsoft Active Directory (AWS Managed Microsoft AD), creating a Forest Trust with your on-premises AD."
    },
    {
      "id": "fc-d1-12",
      "domain": "Domain 1: Design Secure Architectures",
      "topic": "AWS WAF Rate Limiting",
      "front": "You need to limit the maximum number of requests from a single IP address for your AWS WAF rule to prevent brute force or DDoS. What do you create?",
      "back": "A rate-based rule and set the evaluation rate limit (e.g. max requests per 5-minute evaluation window)."
    },
    {
      "id": "fc-d1-13",
      "domain": "Domain 1: Design Secure Architectures",
      "topic": "WAF & OSI Model",
      "front": "For your AWS WAFs and firewalls, why is knowledge of the OSI model important?",
      "back": "Because firewall capabilities depend on the OSI layer it inspects. AWS WAF inspects Layer 7 (HTTP/HTTPS, headers, bodies). Security Groups operate at Layers 3 & 4. Higher OSI layers require more compute power and cost, but provide deeper payload inspection."
    },
    {
      "id": "fc-d2-01",
      "domain": "Domain 2: Design Resilient Architectures",
      "topic": "Amazon RDS High Availability",
      "front": "If you need to design and implement synchronous data replication across Availability Zones for your Amazon RDS instances, what is the best solution?",
      "back": "Multi-AZ deployment. Uses synchronous physical storage-level replication with automated failover and zero endpoint DNS changes."
    },
    {
      "id": "fc-d2-02",
      "domain": "Domain 2: Design Resilient Architectures",
      "topic": "Amazon RDS Cross-Region Replication",
      "front": "If you need to design and implement asynchronous data replication to another Amazon RDS instance in another AWS Region, what is the best solution?",
      "back": "Add a Read Replica in the secondary Region. Offloads read traffic and can be promoted to a standalone database for disaster recovery."
    },
    {
      "id": "fc-d2-03",
      "domain": "Domain 2: Design Resilient Architectures",
      "topic": "Relational Database Disaster Recovery",
      "front": "You need to create a disaster recovery plan for your relational database with an RTO of 60 seconds and an RPO of 1 second. What Amazon RDS database would be the best choice?",
      "back": "Amazon Aurora Global Database. It spans a single Amazon Aurora database across multiple AWS Regions using storage-based replication with typical latency of less than 1 second. In the event of a Regional outage, a secondary Region can be promoted to full read/write capabilities in less than 1 minute (RTO < 60s, RPO < 1s)."
    },
    {
      "id": "fc-d2-04",
      "domain": "Domain 2: Design Resilient Architectures",
      "topic": "Core Architecture Concepts",
      "front": "What is high availability?",
      "back": "High availability is a design philosophy focused on keeping systems operational and serving requests as often as possible. When a component fails, it is automatically replaced or repaired so quickly that users experience minimal or no disruption."
    },
    {
      "id": "fc-d2-05",
      "domain": "Domain 2: Design Resilient Architectures",
      "topic": "Core Architecture Concepts",
      "front": "What is fault tolerance?",
      "back": "Although similar to high availability, fault tolerance is the actual ability of a system to continue uninterrupted operation in the event of component failure. One or more components fail, but the overall system continues operating with zero downtime."
    },
    {
      "id": "fc-d2-06",
      "domain": "Domain 2: Design Resilient Architectures",
      "topic": "Core Architecture Concepts",
      "front": "What is disaster recovery?",
      "back": "Disaster recovery differs from HA and fault tolerance because the latter focus on operating through a failure in real time. DR is all about contingency planning, backup strategies, and recovery procedures after a catastrophic event, measured by RTO (Recovery Time Objective) and RPO (Recovery Point Objective)."
    },
    {
      "id": "fc-d2-07",
      "domain": "Domain 2: Design Resilient Architectures",
      "topic": "DNS & Traffic Management",
      "front": "Which AWS service can you implement to create a DNS failover to a static website hosted on Amazon S3?",
      "back": "Amazon Route 53 with Failover Routing Policy and associated Route 53 health checks."
    },
    {
      "id": "fc-d2-08",
      "domain": "Domain 2: Design Resilient Architectures",
      "topic": "Amazon S3 Storage Classes",
      "front": "What Amazon S3 storage class would you choose to store cold data?",
      "back": "Amazon S3 Glacier Flexible Retrieval (or S3 Glacier Deep Archive for lowest cost long-term cold storage)."
    },
    {
      "id": "fc-d2-09",
      "domain": "Domain 2: Design Resilient Architectures",
      "topic": "High Performance File Storage",
      "front": "What storage solution would you choose if you needed a parallel file system to store frequently accessed data?",
      "back": "Amazon FSx for Lustre. Purpose-built for high-performance computing (HPC), machine learning training, and massive parallel throughput with sub-millisecond latencies."
    },
    {
      "id": "fc-d3-01",
      "domain": "Domain 3: Design High-Performing Architectures",
      "topic": "Application Load Balancer (Layer 7)",
      "front": "Which load balancer is at Layer 7 of the OSI model?",
      "back": "The Application Load Balancer (ALB). It operates at the application layer (HTTP/HTTPS, gRPC, WebSockets) and supports path-based, host-based, query parameter, and HTTP header routing."
    },
    {
      "id": "fc-d3-02",
      "domain": "Domain 3: Design High-Performing Architectures",
      "topic": "Network Load Balancer (Ultra-High Scale)",
      "front": "Which load balancer do you integrate to scale and handle millions of requests per second?",
      "back": "The Network Load Balancer (NLB). It operates at Layer 4 (TCP, UDP, TLS), offers ultra-low latency (sub-millisecond), handles sudden and volatile traffic spikes, and provides a static/Elastic IP per Availability Zone."
    },
    {
      "id": "fc-d3-03",
      "domain": "Domain 3: Design High-Performing Architectures",
      "topic": "CloudFront vs Global Accelerator",
      "front": "What is the difference between Amazon CloudFront and AWS Global Accelerator?",
      "back": "• Amazon CloudFront improves performance by caching content (both static and dynamic) at edge locations.\n• AWS Global Accelerator improves performance for TCP and UDP applications by proxying packets from edge locations over the AWS global network to applications in one or more Regions without caching. It provides two static Anycast IPs and instant regional failover."
    },
    {
      "id": "fc-d3-04",
      "domain": "Domain 3: Design High-Performing Architectures",
      "topic": "Amazon S3 Replication",
      "front": "What are the two types of replication for Amazon S3?",
      "back": "Cross-Region Replication (CRR) and Same-Region Replication (SRR). Both replicate objects asynchronously between buckets and require versioning to be enabled on both source and destination buckets."
    },
    {
      "id": "fc-d3-05",
      "domain": "Domain 3: Design High-Performing Architectures",
      "topic": "AWS Storage Gateway",
      "front": "What are the three storage options for AWS Storage Gateway?",
      "back": "1. File Gateway (S3 File Gateway & FSx File Gateway for NFS/SMB access backed by S3 or FSx).\n2. Volume Gateway (Cached volumes for local cache or Stored volumes for primary local storage with EBS snapshot backups).\n3. Tape Gateway (Virtual Tape Library - VTL to replace physical tape backup infrastructure with S3 Glacier and Deep Archive)."
    },
    {
      "id": "fc-d3-06",
      "domain": "Domain 3: Design High-Performing Architectures",
      "topic": "EC2 Storage: Instance Store vs EBS",
      "front": "What are the storage options for Amazon EC2 instances?",
      "back": "• Instance Store: Ephemeral, temporary storage physically attached to the host computer delivering highest IOPS, but data is lost when the instance is stopped or terminated.\n• EBS Volumes: Persistent, network-attached block storage that persists independently from the instance life cycle."
    },
    {
      "id": "fc-d3-07",
      "domain": "Domain 3: Design High-Performing Architectures",
      "topic": "Amazon EBS Resiliency",
      "front": "What is the resiliency of Amazon EBS?",
      "back": "EBS volumes are created in a specific Availability Zone and are highly resilient because data is automatically replicated across multiple physical servers within that same AZ. To achieve cross-AZ or cross-Region durability, you take EBS Snapshots stored in Amazon S3."
    },
    {
      "id": "fc-d3-08",
      "domain": "Domain 3: Design High-Performing Architectures",
      "topic": "Amazon Elastic File System (EFS)",
      "front": "What type of instances can you use with Amazon Elastic File System (Amazon EFS)?",
      "back": "Linux instances (via standard POSIX NFSv4 protocol). For native Windows workloads requiring SMB file shares, use Amazon FSx for Windows File Server."
    },
    {
      "id": "fc-d3-09",
      "domain": "Domain 3: Design High-Performing Architectures",
      "topic": "DynamoDB: Query vs Scan",
      "front": "What is the difference between a query and a scan for your Amazon DynamoDB table?",
      "back": "• Query: Retrieves items using a specific Partition Key value (and optional Sort Key/range). It is highly efficient and only consumes Read Capacity Units (RCUs) for matching items.\n• Scan: Reads every single item in the entire table before applying any filters, consuming read capacity for the entire table. It is slow, expensive, and inefficient for large tables."
    },
    {
      "id": "fc-d3-10",
      "domain": "Domain 3: Design High-Performing Architectures",
      "topic": "DynamoDB Streams & Lambda",
      "front": "What can you integrate into your Amazon DynamoDB table to take action?",
      "back": "DynamoDB Streams integrated with AWS Lambda to create event-driven triggers. This allows automated execution of code in response to item-level changes (insert, update, delete) in real time."
    },
    {
      "id": "fc-d3-11",
      "domain": "Domain 3: Design High-Performing Architectures",
      "topic": "Amazon Redshift Data Warehouse",
      "front": "Which AWS database service can be used as a data warehouse for analytical and summarization transactions?",
      "back": "Amazon Redshift. A fully managed, petabyte-scale columnar data warehouse with Massively Parallel Processing (MPP) designed for high-performance complex SQL analytical and BI queries (OLAP)."
    },
    {
      "id": "fc-d3-12",
      "domain": "Domain 3: Design High-Performing Architectures",
      "topic": "NAT Gateway Subnet Placement",
      "front": "Where does a NAT gateway sit? In a public or private subnet?",
      "back": "In a public subnet. It requires an allocated Elastic IP address and a route table pointed to an Internet Gateway (IGW) to allow instances in private subnets to initiate outbound internet traffic."
    },
    {
      "id": "fc-d3-13",
      "domain": "Domain 3: Design High-Performing Architectures",
      "topic": "VPC Peering Security Controls",
      "front": "If you use VPC peering to add access between two of your Amazon VPCs, what can you use to control the access between the Amazon VPCs?",
      "back": "Network ACLs (subnet-level stateless packet filtering with explicit Allow/Deny rules) and Security Groups (instance-level stateful firewall with Allow rules, with support for referencing peer VPC security groups)."
    },
    {
      "id": "fc-d4-01",
      "domain": "Domain 4: Design Cost-Optimized Architectures",
      "topic": "EC2 Data Transfer Costs",
      "front": "What is an option to minimize data transfer costs between two Amazon EC2 instances?",
      "back": "Deploy both instances in the same AWS Region (and within the same Availability Zone to eliminate inter-AZ data transfer charges)."
    },
    {
      "id": "fc-d4-02",
      "domain": "Domain 4: Design Cost-Optimized Architectures",
      "topic": "S3 Lifecycle for Infrequent Access",
      "front": "What can you implement as a cost-effective solution to store your Amazon S3 objects that are not accessed frequently?",
      "back": "Create an Amazon S3 lifecycle policy to transition the infrequently accessed objects to a less expensive storage class (such as S3 Standard-IA, S3 Glacier Flexible Retrieval, or S3 Glacier Deep Archive)."
    },
    {
      "id": "fc-d4-03",
      "domain": "Domain 4: Design Cost-Optimized Architectures",
      "topic": "AWS Cost Explorer",
      "front": "What should you turn on to use the AWS Billing and Cost Management console dashboard to track your expenses and usage?",
      "back": "AWS Cost Explorer. It enables you to visualize, understand, and manage your AWS costs and usage over time, and forecast future spend."
    },
    {
      "id": "fc-d4-04",
      "domain": "Domain 4: Design Cost-Optimized Architectures",
      "topic": "Unused EC2 Instances Cost Optimization",
      "front": "How can you reduce your expense of running unused Amazon EC2 instances?",
      "back": "Take a snapshot of the root/data EBS volume and delete/terminate the unused Amazon EC2 instances, eliminating idle compute hourly costs."
    },
    {
      "id": "fc-d4-05",
      "domain": "Domain 4: Design Cost-Optimized Architectures",
      "topic": "EC2 Auto Scaling: Target Tracking Policy",
      "front": "You need a cost-effective solution for a web application in an Auto Scaling group of Amazon EC2 instances to ensure there is no over-provisioning or high operating costs without degrading performance. Which dynamic scaling policy meets this?",
      "back": "A target tracking scaling policy. It increases or decreases current capacity based on a target value for a specific metric (e.g., maintaining average CPU at 60%), automatically adding or removing capacity to avoid over-provisioning."
    },
    {
      "id": "fc-d4-06",
      "domain": "Domain 4: Design Cost-Optimized Architectures",
      "topic": "Direct Connect + Transit Gateway",
      "front": "You recently set up a dedicated AWS Direct Connect link and need to ensure new AWS accounts also have consistent and dedicated access with the least overhead and cost. What should you implement?",
      "back": "Create a new Direct Connect gateway integrated with the Direct Connect connection, deploy an AWS Transit Gateway between the new AWS accounts/VPCs, and associate the Transit Gateway with the Direct Connect gateway via a transit virtual interface (transit VIF)."
    },
    {
      "id": "fc-d4-07",
      "domain": "Domain 4: Design Cost-Optimized Architectures",
      "topic": "EC2 Spot Instances",
      "front": "You need to choose a pricing model for Amazon EC2 instances that process batch loads in your non-production environment that can withstand interruptions. Which one do you choose?",
      "back": "Spot Instances. They offer steep discounts (up to 90% off On-Demand) for fault-tolerant and interruption-tolerant workloads."
    },
    {
      "id": "fc-d4-08",
      "domain": "Domain 4: Design Cost-Optimized Architectures",
      "topic": "On-Demand Capacity Reservations",
      "front": "What are On-Demand Capacity Reservations?",
      "back": "On-Demand Capacity Reservations reserve compute capacity for your Amazon EC2 instances in a specific Availability Zone for any duration without requiring 1- or 3-year commitments."
    },
    {
      "id": "fc-d4-09",
      "domain": "Domain 4: Design Cost-Optimized Architectures",
      "topic": "Reserved Instances (RI)",
      "front": "What are Reserved Instances?",
      "back": "Reserved Instances offer a significant discount (up to 72-75%) compared to On-Demand instance pricing with a 1- or 3-year commitment. When assigned to a specific Availability Zone (Zonal RI), they also provide capacity reservation."
    }
  ]
};
