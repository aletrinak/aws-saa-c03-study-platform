# Week 3: Almacenamiento, Bases de Datos y Rendimiento
# Days: 15, 16, 17, 18, 19 (10 questions per day = 50 questions)

WEEK_3_QUESTIONS = {
    15: [
        {
            "id": "d15-q1",
            "scenarioTag": "Dominio 3: Clases de Almacenamiento en S3 & Ciclo de Vida",
            "question": "Una entidad de salud debe archivar historias clínicas digitales durante un período obligatorio de 10 años por cumplimiento normativo. Los documentos se consultan con frecuencia durante los primeros 30 días posteriores al alta médica. Entre el día 31 y el día 90 se consultan en raras ocasiones (menos de una vez al mes). A partir del día 91, los archivos casi nunca se consultan, pero si un juez o auditor requiere un expediente, la clínica puede tolerar un tiempo de recuperación de entre 3 y 5 horas. ¿Qué política de ciclo de vida de Amazon S3 optimiza los costos al máximo?",
            "options": [
                "A) Mantener los datos en S3 Standard durante los 10 años.",
                "B) Mover a S3 Standard-IA a los 30 días y eliminar permanentemente los archivos a los 90 días.",
                "C) Mover a S3 One Zone-IA a los 30 días y a S3 Glacier Flexible Archive a los 90 días.",
                "D) Transición a S3 Standard-IA a los 30 días, transición a S3 Glacier Flexible Archive a los 90 días, y retención durante 10 años."
            ],
            "correctAnswer": 3,
            "explanation": "S3 Standard-IA es ideal para datos a los que se accede con poca frecuencia pero que requieren acceso inmediato en milisegundos (días 30 a 90). A partir de los 90 días, S3 Glacier Flexible Archive ofrece el costo de almacenamiento más bajo con tiempos de recuperación estándar de 3 a 5 horas, satisfaciendo la tolerancia de los auditores y maximizando el ahorro."
        },
        {
            "id": "d15-q2",
            "scenarioTag": "Dominio 3: Optimización con S3 Intelligent-Tiering",
            "question": "Un portal de medios digitales almacena millones de fotografías cargadas por usuarios. Los patrones de acceso a las fotos son altamente impredecibles: algunas fotos antiguas se vuelven virales repentinamente sin previo aviso mientras que otras fotos nuevas nunca reciben visitas. El equipo de TI no dispone de tiempo para analizar patrones de acceso ni desea pagar tarifas de recuperación por datos consultados. ¿Qué clase de almacenamiento de S3 debe implementarse?",
            "options": [
                "A) S3 Glacier Instant Retrieval.",
                "B) S3 Intelligent-Tiering.",
                "C) S3 One Zone-IA con S3 Select.",
                "D) S3 Outposts con réplica local."
            ],
            "correctAnswer": 1,
            "explanation": "S3 Intelligent-Tiering es la única clase de almacenamiento en la nube que ofrece ahorros de costos automáticos al mover objetos entre niveles de acceso frecuente, poco frecuente y de archivo cuando los patrones de acceso cambian, SIN tarifas de recuperación por gigabyte consultado y sin sobrecarga operativa."
        },
        {
            "id": "d15-q3",
            "scenarioTag": "Dominio 3: Rendimiento en Cargas Masivas de S3",
            "question": "Una aplicación analítica que procesa telemetría de sensores IoT experimenta errores HTTP 503 Slow Down al intentar escribir más de 10.000 archivos por segundo en un único prefijo de Amazon S3. ¿Qué recomendaciones técnicas permiten superar este cuello de botella y maximizar el rendimiento de escritura y lectura en S3?",
            "options": [
                "A) Distribuir los objetos a través de múltiples prefijos paralelos (particionamiento por prefijo), ya que S3 escala a 3.500 solicitudes PUT y 5.500 solicitudes GET por segundo por prefijo individual.",
                "B) Comprimir todos los archivos en un único archivo ZIP de 5 TB antes de subirlos.",
                "C) Habilitar S3 Transfer Acceleration y usar una sola clave de partición.",
                "D) Solicitar a AWS Support una cuota fija de disco duro para el bucket."
            ],
            "correctAnswer": 0,
            "explanation": "Amazon S3 ofrece automáticamente hasta 3.500 solicitudes PUT/COPY/POST/DELETE y 5.500 solicitudes GET/HEAD por segundo por cada prefijo individual en un bucket. Al distribuir las cargas masivas a lo largo de múltiples prefijos paralelos, el rendimiento escala horizontalmente de forma prácticamente ilimitada."
        },
        {
            "id": "d15-q4",
            "scenarioTag": "Dominio 3: S3 Multipart Upload & Byte-Range Fetches",
            "question": "Un equipo de producción multimedia sube archivos de video en formato RAW de 50 GB a Amazon S3 a través de una conexión de red inestable. Ocasionalmente, una caída transitoria de red a los 45 GB cancela toda la subida y obliga a reiniciar la transferencia desde cero. ¿Qué característica de S3 resuelve este problema y qué práctica optimiza la descarga posterior de fragmentos?",
            "options": [
                "A) S3 Object Lock y S3 Glacier Select.",
                "B) S3 Multipart Upload (obligatorio para objetos > 5 GB y recomendado para > 100 MB) para subir partes en paralelo con tolerancia a reintentos, y S3 Byte-Range Fetches para descargar rangos de bytes específicos.",
                "C) Reducir la resolución de los videos para que quepan en un payload de SQS.",
                "D) Habilitar S3 Versioning sin compresión."
            ],
            "correctAnswer": 1,
            "explanation": "S3 Multipart Upload divide archivos grandes en fragmentos individuales que se transfieren en paralelo; si falla una parte, solo se reintenta esa parte sin reiniciar todo el archivo. Para descargas, Byte-Range Fetches permite consultar rangos específicos en paralelo, acelerando el procesamiento."
        },
        {
            "id": "d15-q5",
            "multi": True,
            "scenarioTag": "Dominio 1: Seguridad & S3 Object Lock (Governance vs Compliance)",
            "question": "Al configurar S3 Object Lock para garantizar inmutabilidad (WORM) de archivos, ¿cuáles de las siguientes diferencias entre los modos Gobernanza (Governance) y Cumplimiento (Compliance) son verdaderas? (Selecciona DOS)",
            "options": [
                "A) En el modo Compliance, NINGÚN usuario, ni siquiera la cuenta Root de AWS, puede eliminar los objetos ni acortar el período de retención durante su vigencia.",
                "B) En el modo Governance, los usuarios con permisos específicos de IAM (como s3:BypassGovernanceRetention) pueden sobrescribir, eliminar o modificar los períodos de retención de los objetos protegidos.",
                "C) El modo Compliance se puede desactivar en cualquier momento haciendo clic en la consola de IAM.",
                "D) El modo Governance solo permite archivos de menos de 1 KB.",
                "E) S3 Object Lock solo está disponible en buckets sin control de versiones."
            ],
            "correctAnswers": [0, 1],
            "explanation": "En S3 Object Lock: el modo Compliance es el más estricto y no puede ser omitido ni por Root; el modo Governance protege contra eliminaciones accidentales de usuarios comunes, pero permite que usuarios con permisos especiales (BypassGovernanceRetention) modifiquen o borren el archivo."
        },
        {
            "id": "d15-q6",
            "scenarioTag": "Dominio 3: S3 Transfer Acceleration",
            "question": "Usuarios distribuidos en 40 países de todo el mundo cargan imágenes y videos de alta resolución en un bucket S3 ubicado en la región us-east-1. Los usuarios remotos en Australia y Japón experimentan tiempos de subida muy lentos debido a la alta latencia de Internet transcontinental. ¿Qué función de S3 permite acelerar las subidas utilizando la red global de borde de AWS?",
            "options": [
                "A) S3 Intelligent-Tiering.",
                "B) S3 Transfer Acceleration.",
                "C) S3 Cross-Origin Resource Sharing (CORS).",
                "D) AWS Direct Connect en cada hogar."
            ],
            "correctAnswer": 1,
            "explanation": "S3 Transfer Acceleration utiliza las ubicaciones perimetrales distribuidas mundialmente de Amazon CloudFront. El tráfico del usuario ingresa a la red troncal optimizada y privada de AWS a través del Edge Location más cercano y viaja a alta velocidad hacia el bucket S3 en us-east-1."
        },
        {
            "id": "d15-q7",
            "scenarioTag": "Dominio 1: S3 Access Points & Control de Acceso Granular",
            "question": "Un Data Lake en Amazon S3 almacena petabytes de datos compartidos por 50 equipos de análisis diferentes con requerimientos de seguridad dispares (ventas, finanzas, investigación). Administrar una única Bucket Policy gigantesca se ha vuelto inmanejable y excede el límite de tamaño de política de S3. ¿Qué característica permite descentralizar y simplificar la gestión del acceso?",
            "options": [
                "A) Dividir los datos en 50 cuentas de AWS y pagar Direct Connect para cada una.",
                "B) Amazon S3 Access Points, creando puntos de acceso dedicados con políticas de acceso independientes por equipo o aplicación.",
                "C) Reemplazar S3 por un clúster de Amazon Redshift con 100 nodos.",
                "D) Desactivar las políticas de IAM y usar autenticación básica HTTP."
            ],
            "correctAnswer": 1,
            "explanation": "Amazon S3 Access Points simplifica la administración del acceso a datos a escala para conjuntos de datos compartidos. Cada punto de acceso tiene su propio nombre DNS y su propia política de acceso personalizada, permitiendo delegar el control de acceso a equipos específicos sin sobrecargar la política del bucket."
        },
        {
            "id": "d15-q8",
            "scenarioTag": "Dominio 2: S3 Replication Time Control (S3 RTC)",
            "question": "Una institución financiera sujeta a regulaciones estrictas utiliza S3 Cross-Region Replication (CRR). El regulador exige una garantía contractual respaldada por Service Level Agreement (SLA) de que el 99,99% de los nuevos objetos se replicarán en la región secundaria dentro de los primeros 15 minutos de su carga. ¿Qué funcionalidad de S3 debe activarse?",
            "options": [
                "A) S3 Replication Time Control (S3 RTC).",
                "B) S3 Batch Operations.",
                "C) S3 Multi-Region Access Points sin réplica.",
                "D) S3 Glacier Flexible Archive con aceleración expedited."
            ],
            "correctAnswer": 0,
            "explanation": "S3 Replication Time Control (S3 RTC) está diseñado para cumplir con requisitos de cumplimiento de DR, proporcionando un SLA de replicación que garantiza la replicación del 99,99% de los objetos en 15 minutos o menos, junto con métricas de monitoreo de replicación en Amazon CloudWatch."
        },
        {
            "id": "d15-q9",
            "scenarioTag": "Dominio 1: Cifrado por Defecto en Amazon S3",
            "question": "Un auditor de seguridad revisa un bucket S3 recién creado donde no se especificó ningún encabezado de cifrado durante las subidas de archivos (x-amz-server-side-encryption). ¿Cuál es el estado de cifrado de los nuevos objetos en Amazon S3 de forma nativa?",
            "options": [
                "A) Los objetos se almacenan en texto plano sin cifrar a menos que se configure una Bucket Policy.",
                "B) Amazon S3 cifra automáticamente todos los nuevos objetos en reposo mediante Server-Side Encryption con S3-Managed Keys (SSE-S3) de forma predeterminada sin costo adicional.",
                "C) S3 bloquea la subida arrojando un error de AccessDenied.",
                "D) Los objetos se cifran obligatoriamente con claves del cliente almacenadas en GitHub."
            ],
            "correctAnswer": 1,
            "explanation": "Desde enero de 2023, Amazon S3 aplica cifrado del lado del servidor de forma predeterminada (SSE-S3) en todos los nuevos objetos subidos a cualquier bucket de S3 sin costo adicional, sin requerir configuración manual previa ni alterar el comportamiento de las aplicaciones."
        },
        {
            "id": "d15-q10",
            "multi": True,
            "scenarioTag": "Dominio 1: Prevención de Acceso Público en S3",
            "question": "Para prevenir fugas de información accidental en Amazon S3 en toda la organización, ¿cuáles de las siguientes configuraciones de S3 Block Public Access están disponibles y recomendadas? (Selecciona DOS)",
            "options": [
                "A) BlockPublicAcls e IgnorePublicAcls, para bloquear e ignorar permisos públicos otorgados a través de ACLs de objetos o buckets.",
                "B) BlockPublicPolicy y RestrictPublicBuckets, para rechazar Bucket Policies públicas y restringir el acceso a solo usuarios autenticados autorizados.",
                "C) Deshabilitar DNS en la región de AWS.",
                "D) Eliminar todos los usuarios de IAM y usar el usuario root exclusivamente.",
                "E) Desconectar la VPC de Internet permanentemente."
            ],
            "correctAnswers": [0, 1],
            "explanation": "S3 Block Public Access proporciona 4 configuraciones clave que pueden activarse a nivel de bucket o de cuenta completa: BlockPublicAcls, IgnorePublicAcls, BlockPublicPolicy y RestrictPublicBuckets, proporcionando un blindaje centralizado contra exposiciones involuntarias a Internet."
        }
    ],

    16: [
        {
            "id": "d16-q1",
            "scenarioTag": "Dominio 3: Amazon FSx for Windows File Server",
            "question": "Una compañía migra a AWS una suite de aplicaciones contables basadas en Microsoft Windows Server que dependen estrictamente del protocolo de red SMB (Server Message Block) y requieren integración nativa con Microsoft Active Directory empresarial para control de permisos de usuario ACL basados en Windows. ¿Qué servicio de almacenamiento administrado cumple nativamente estos requisitos?",
            "options": [
                "A) Amazon Elastic Block Store (EBS) con formato NTFS.",
                "B) Amazon Elastic File System (EFS).",
                "C) Amazon FSx for Windows File Server.",
                "D) Amazon S3 con montaje mediante S3 File Gateway."
            ],
            "correctAnswer": 2,
            "explanation": "Amazon FSx for Windows File Server proporciona almacenamiento de archivos totalmente administrado basado en Windows Server nativo, con soporte completo para el protocolo SMB v2/v3, integración con Microsoft Active Directory corporativo, cuotas de disco y listas de control de acceso (ACL) de Windows."
        },
        {
            "id": "d16-q2",
            "scenarioTag": "Dominio 3: Amazon FSx for Lustre & Cargas de Alto Rendimiento (HPC)",
            "question": "Un centro de investigación genómica procesa simulaciones de secuenciación de ADN que requieren un sistema de archivos de alto rendimiento (HPC) capaz de entregar millones de IOPS con latencias de sub-milisegundos y cientos de gigabytes por segundo de rendimiento (throughput). Los datos originales residen en un bucket de Amazon S3. ¿Qué sistema de almacenamiento debe utilizarse?",
            "options": [
                "A) Amazon FSx for Lustre vinculado directamente al bucket de Amazon S3.",
                "B) Volúmenes Amazon EBS de tipo sc1 en RAID 0.",
                "C) Amazon EFS en modo General Purpose.",
                "D) Amazon S3 Standard con clientes FTP."
            ],
            "correctAnswer": 0,
            "explanation": "Amazon FSx for Lustre está optimizado específicamente para cómputo de alto rendimiento (HPC), machine learning y analítica financiera. Procesa sistemas de archivos POSIX masivamente paralelos y se integra de forma transparente y bidireccional con buckets de Amazon S3."
        },
        {
            "id": "d16-q3",
            "scenarioTag": "Dominio 3: Amazon EFS & Sistemas de Archivos Compartidos Linux",
            "question": "Una flota de servidores web Linux en un Auto Scaling Group a lo largo de 3 Availability Zones necesita acceder concurrentemente a un sistema de archivos de lectura y escritura compartido que cumpla con el estándar POSIX y escale automáticamente a petabytes a medida que se agregan archivos. ¿Qué servicio de almacenamiento proporciona esta funcionalidad?",
            "options": [
                "A) Volúmenes EBS gp3 adjuntos simultáneamente a todas las instancias.",
                "B) Amazon Elastic File System (EFS) con puntos de montaje (Mount Targets) desplegados en las 3 Availability Zones.",
                "C) Instancias EC2 configuradas como servidores NFS manuales en una sola AZ.",
                "D) Amazon FSx for OpenZFS con replicación sincrónica manual."
            ],
            "correctAnswer": 1,
            "explanation": "Amazon EFS es un sistema de archivos elástico y completamente administrado para cargas de trabajo Linux (protocolo NFS v4) que soporta acceso concurrente desde cientos o miles de instancias en múltiples Availability Zones de forma nativa y compatible con POSIX."
        },
        {
            "id": "d16-q4",
            "scenarioTag": "Dominio 3: Tipos de Volúmenes EBS (gp3 vs io2 vs st1 vs sc1)",
            "question": "Una base de datos de procesamiento de transacciones en línea (OLTP) de misión crítica requiere 64.000 IOPS continuos y un SLA de durabilidad del 99,999% en su almacenamiento en bloque con protección contra bloqueos de disco (Multi-Attach). ¿Qué tipo de volumen Amazon EBS debe elegirse?",
            "options": [
                "A) EBS Throughput Optimized HDD (st1).",
                "B) EBS General Purpose SSD (gp3).",
                "C) EBS Cold HDD (sc1).",
                "D) EBS Provisioned IOPS SSD (io2 o io2 Block Express)."
            ],
            "correctAnswer": 3,
            "explanation": "EBS io2 e io2 Block Express son volúmenes diseñados para bases de datos de misión crítica de alto rendimiento (hasta 256.000 IOPS y durabilidad del 99,999%), y son compatibles con EBS Multi-Attach (adjuntar un volumen a múltiples instancias simultáneamente en la misma AZ)."
        },
        {
            "id": "d16-q5",
            "multi": True,
            "scenarioTag": "Dominio 3: EBS Snapshots & Ciclo de Vida",
            "question": "¿Cuáles de las siguientes características sobre las instantáneas de Amazon EBS (EBS Snapshots) son verdaderas? (Selecciona DOS)",
            "options": [
                "A) Las instantáneas de EBS son incrementales, lo que significa que solo se guardan los bloques modificados desde la última instantánea, reduciendo los costos de almacenamiento.",
                "B) Las instantáneas de EBS se almacenan internamente de forma duradera en Amazon S3, aunque no son visibles en la lista de buckets de S3 del usuario.",
                "C) Cada instantánea duplica el 100% de los datos del disco independientemente de los cambios.",
                "D) No es posible crear una imagen de máquina de Amazon (AMI) a partir de una instantánea de EBS.",
                "E) Las instantáneas de EBS solo se pueden restaurar en la misma instancia de la que fueron tomadas."
            ],
            "correctAnswers": [0, 1],
            "explanation": "Las instantáneas de EBS son respaldos a nivel de bloque incrementales y se almacenan internamente en la infraestructura redundante de Amazon S3 con 11 nueves de durabilidad, permitiendo crear nuevos volúmenes, AMIs o copiar instantáneas entre regiones."
        },
        {
            "id": "d16-q6",
            "scenarioTag": "Dominio 3: Modificación Dinámica de Volúmenes (Elastic Volumes)",
            "question": "Un administrador de sistemas detecta que un volumen EBS de tipo gp3 en una instancia productiva en funcionamiento tiene solo el 2% de espacio libre en disco restante y necesita aumentarlo de 100 GB a 500 GB de inmediato. ¿Cómo debe proceder con el menor impacto en la operación?",
            "options": [
                "A) Apagar la instancia, desconectar el volumen, crear un nuevo volumen y transferir datos con rsync.",
                "B) Utilizar la función Elastic Volumes de EBS para modificar el tamaño del volumen a 500 GB en vivo sin detener la instancia ni desconectar el volumen, y luego extender el sistema de archivos a nivel de SO.",
                "C) Tomar una instantánea, borrar el volumen original y restaurarlo con un nombre nuevo.",
                "D) Clonar la instancia en otra cuenta de AWS."
            ],
            "correctAnswer": 1,
            "explanation": "La funcionalidad EBS Elastic Volumes permite cambiar el tamaño, el tipo de volumen y el rendimiento provisionado (IOPS y Throughput) en vivo sin tiempo de inactividad y sin desasociar el volumen ni detener la instancia. Luego solo se debe extender la partición y el filesystem en el SO."
        },
        {
            "id": "d16-q7",
            "scenarioTag": "Dominio 3: Amazon FSx for NetApp ONTAP & Almacenamiento Multi-Protocolo",
            "question": "Una empresa posee aplicaciones legadas en su centro de datos que acceden a volúmenes compartidos a través de protocolos tanto NFS como SMB concurrentemente, con capacidades de deduplicación, compresión y snapshots instantáneos de NetApp. La empresa desea migrar a AWS sin modificar los flujos ni el código. ¿Qué servicio administrado es la opción directa?",
            "options": [
                "A) Amazon S3 Glacier Flexible Archive.",
                "B) Amazon FSx for NetApp ONTAP.",
                "C) Amazon EFS con pasarela de traducción SMB.",
                "D) Amazon Elastic Block Store con software de terceros."
            ],
            "correctAnswer": 1,
            "explanation": "Amazon FSx for NetApp ONTAP proporciona almacenamiento de archivos totalmente gestionado en AWS construido sobre el popular sistema de almacenamiento ONTAP de NetApp, soportando acceso multi-protocolo concurrente (NFS, SMB e iSCSI), deduplicación y compresión de datos."
        },
        {
            "id": "d16-q8",
            "scenarioTag": "Dominio 3: EBS Instance Store (Almacenamiento Efímero)",
            "question": "Una aplicación de procesamiento distribuido de video requiere un disco de alta velocidad para almacenar archivos temporales de memoria intermedia (scratch space) y memoria caché. La empresa no requiere persistencia de estos datos temporales si la instancia se detiene o se reemplaza. ¿Qué almacenamiento ofrece el mayor rendimiento de I/O al menor costo?",
            "options": [
                "A) Amazon EBS gp3 de 1 TB.",
                "B) Amazon S3 Standard montado con s3fs.",
                "C) Amazon EC2 Instance Store (almacenamiento de almacenamiento en bloque físicamente conectado a la máquina host).",
                "D) Amazon EFS en modo Provisioned Throughput."
            ],
            "correctAnswer": 2,
            "explanation": "EC2 Instance Store proporciona almacenamiento de bloques en discos SSD/NVMe físicamente conectados al servidor físico anfitrión. Ofrece latencias ultra bajas y altísimo I/O sin costo adicional de almacenamiento, pero es efímero (los datos se pierden si la instancia se detiene, se termina o falla el hardware)."
        },
        {
            "id": "d16-q9",
            "scenarioTag": "Dominio 3: EBS Fast Snapshot Restore (FSR)",
            "question": "Un equipo de recuperación ante incidentes necesita restaurar nuevos volúmenes EBS a partir de instantáneas para levantar una flota de 50 servidores durante una prueba de DR. Normalmente, los primeros accesos a bloques restaurados sufren latencia (fenómeno de inicialización de bloques/hidratación diferida de S3). ¿Qué función de EBS elimina esta penalización inicial de rendimiento?",
            "options": [
                "A) EBS Fast Snapshot Restore (FSR).",
                "B) S3 Transfer Acceleration.",
                "C) EBS Encryption on the fly.",
                "D) AWS DataSync Continuous."
            ],
            "correctAnswer": 0,
            "explanation": "EBS Fast Snapshot Restore (FSR) permite restaurar volúmenes a partir de una instantánea que están instantáneamente pre-inicializados con su máximo rendimiento de diseño, eliminando la penalización de latencia del primer acceso (hidratación diferida) a bloques almacenados en S3."
        },
        {
            "id": "d16-q10",
            "multi": True,
            "scenarioTag": "Dominio 3: Comparación de Modos de Rendimiento en Amazon EFS",
            "question": "¿Cuáles de las siguientes opciones describen correctamente los modos de rendimiento y rendimiento de procesamiento en Amazon Elastic File System (Amazon EFS)? (Selecciona DOS)",
            "options": [
                "A) Elastic Throughput ajusta automáticamente el rendimiento en función de las demandas de la carga de trabajo, facturando solo por los datos leídos o escritos.",
                "B) General Purpose Performance Mode es el modo predeterminado, ideal para servidores web, CMS y entornos de desarrollo con latencias por operación más bajas.",
                "C) Max I/O Performance Mode tiene una latencia por operación menor que General Purpose en todas las operaciones.",
                "D) Amazon EFS solo puede almacenar un máximo de 16 GB por sistema de archivos.",
                "E) Amazon EFS no admite montaje en instancias EC2 que corran Amazon Linux."
            ],
            "correctAnswers": [0, 1],
            "explanation": "Amazon EFS ofrece Elastic Throughput (escala de rendimiento automática bajo demanda según la actividad) y modo de rendimiento General Purpose (latencias más bajas por operación, recomendado para la mayoría de cargas). Max I/O ofrece mayor escalabilidad para miles de clientes concurrentes a costa de una latencia por operación ligeramente mayor."
        }
    ],

    17: [
        {
            "id": "d17-q1",
            "scenarioTag": "Dominio 2: Amazon RDS Multi-AZ vs Read Replicas",
            "question": "Una tienda de comercio electrónico utiliza una base de datos Amazon RDS para PostgreSQL. El equipo de desarrollo reporta dos necesidades distintas:\n1. Mejorar el rendimiento de las consultas lentas de generación de reportes de ventas que saturan la base de datos principal.\n2. Garantizar que si el centro de datos principal falla, la base de datos se conmute automáticamente sin pérdida de datos.\n¿Qué arquitectura satisface ambos requerimientos de forma adecuada?",
            "options": [
                "A) Configurar Multi-AZ únicamente y dirigir las consultas de reportes a la instancia en espera (standby).",
                "B) Configurar RDS Multi-AZ Deployment (para alta disponibilidad sincrónica y conmutación automática por error) y desplegar una o más Read Replicas asincrónicas para dirigir las consultas de lectura pesadas de reportería.",
                "C) Desplegar una segunda base de datos en una cuenta distinta y copiar datos con scripts diarios.",
                "D) Desactivar los backups automáticos para liberar recursos de CPU."
            ],
            "correctAnswer": 1,
            "explanation": "En RDS tradicional Multi-AZ, la instancia standby es pasiva y NO puede recibir tráfico de lectura (sólo está para conmutación por error sincrónica). Para absorber tráfico de lectura y reportes pesados, se deben desplegar Read Replicas (asincrónicas), satisfaciendo ambos requerimientos."
        },
        {
            "id": "d17-q2",
            "scenarioTag": "Dominio 2: Escalabilidad y Almacenamiento de Amazon Aurora",
            "question": "Un departamento interno utiliza una aplicación de reportería financiera que se ejecuta únicamente los primeros tres días hábiles de cada mes. Durante esos días se realizan cálculos complejos de bases de datos relacionales, pero el resto del mes la base de datos permanece totalmente inactiva. El equipo necesita una solución compatible con MySQL/PostgreSQL que escale automáticamente la capacidad de cómputo y reduzca los costos a cero o al mínimo cuando no se use. ¿Qué base de datos de AWS se debe seleccionar?",
            "options": [
                "A) Amazon RDS para MySQL en instancia db.m5.24xlarge fija.",
                "B) Amazon Redshift en clúster denso con escalado manual.",
                "C) Amazon Aurora Serverless v2.",
                "D) Amazon DocumentDB con réplicas fijas."
            ],
            "correctAnswer": 2,
            "explanation": "Amazon Aurora Serverless v2 escala automáticamente la capacidad de cómputo (Aurora Capacity Units, ACUs) hacia arriba o hacia abajo en fracciones de segundo en respuesta a la demanda de la aplicación, optimizando costos para aplicaciones con patrones de tráfico intermitentes o impredecibles."
        },
        {
            "id": "d17-q3",
            "scenarioTag": "Dominio 2: Arquitectura de Almacenamiento Distribuido de Aurora",
            "question": "Un Solutions Architect debe garantizar alta disponibilidad y resiliencia ante desastres para una aplicación crítica basada en Amazon Aurora. ¿Cómo protege Amazon Aurora los datos de la base de datos a nivel de almacenamiento físico de forma nativa?",
            "options": [
                "A) Guarda dos copias de los datos en dos discos duros físicos dentro de una única Availability Zone.",
                "B) Utiliza copias de seguridad nocturnas en cinta enviadas a AWS Glacier.",
                "C) Sincroniza datos utilizando el protocolo BitTorrent entre instancias EC2.",
                "D) Almacena automáticamente 6 copias de los datos replicadas a lo largo de 3 Availability Zones (2 copias por cada AZ), tolerando la pérdida de hasta 2 copias sin perder capacidad de escritura y hasta 3 copias sin perder capacidad de lectura."
            ],
            "correctAnswer": 3,
            "explanation": "El motor de almacenamiento distribuido de Aurora mantiene 6 copias de cada bloque de datos distribuidas en 3 Availability Zones (2 por AZ). Esto permite que Aurora tolere la caída completa de una Availability Zone más una falla de disco adicional sin perder disponibilidad de escritura."
        },
        {
            "id": "d17-q4",
            "scenarioTag": "Dominio 2: Endpoints de Conexión en Amazon Aurora",
            "question": "Una aplicación web interactúa con un clúster de Amazon Aurora MySQL compuesto por una instancia de escritura (Writer) y cinco réplicas de lectura (Readers). ¿Cómo debe configurar la aplicación sus cadenas de conexión para dirigir de manera transparente las escrituras a la instancia primaria y balancear las lecturas entre las cinco réplicas?",
            "options": [
                "A) Usar el Cluster Endpoint para las operaciones de escritura/actualización, y usar el Reader Endpoint para balancear la carga de consultas SELECT entre las réplicas.",
                "B) Usar la dirección IP privada de cada instancia individual en el código de la aplicación.",
                "C) Crear un Network Load Balancer público frente al clúster de Aurora.",
                "D) Usar Route 53 Geolocation Routing hacia cada puerto MySQL."
            ],
            "correctAnswer": 0,
            "explanation": "Amazon Aurora proporciona endpoints gestionados dedicados: el Cluster Endpoint apunta siempre a la instancia escritora actual (Writer); el Reader Endpoint balancea automáticamente las consultas de lectura entre todas las Aurora Replicas disponibles en el clúster."
        },
        {
            "id": "d17-q5",
            "multi": True,
            "scenarioTag": "Dominio 2: Amazon RDS Proxy & Agrupamiento de Conexiones",
            "question": "Una aplicación basada en arquitectura sin servidor con cientos de funciones AWS Lambda ejecutándose concurrentemente satura las conexiones de una base de datos relacional Amazon RDS MySQL, provocando errores de 'Too many connections'. ¿Cuáles de las siguientes opciones describen las ventajas de implementar Amazon RDS Proxy? (Selecciona DOS)",
            "options": [
                "A) Agrupa y comparte conexiones a la base de datos (Connection Pooling), reduciendo la sobrecarga de CPU y memoria en el motor de base de datos.",
                "B) Reduce el tiempo de conmutación por error (failover) de RDS Multi-AZ hasta en un 66% preservando las conexiones de la aplicación.",
                "C) Convierte automáticamente consultas SQL relacionales a tablas NoSQL de DynamoDB.",
                "D) Permite omitir la autenticación y las contraseñas en la base de datos.",
                "E) Desactiva los respaldos automáticos de RDS para acelerar las transacciones."
            ],
            "correctAnswers": [0, 1],
            "explanation": "Amazon RDS Proxy es un proxy de base de datos totalmente administrado y de alta disponibilidad que gestiona pools de conexiones para aplicaciones serverless altamente concurrentes, protege la base de datos contra el agotamiento de conexiones y reduce el tiempo de recuperación ante fallos Multi-AZ manteniendo las conexiones abiertas."
        },
        {
            "id": "d17-q6",
            "scenarioTag": "Dominio 2: Backtrack en Amazon Aurora MySQL",
            "question": "Un desarrollador ejecuta accidentalmente un comando SQL 'DELETE FROM clientes;' sin cláusula WHERE en una base de datos Amazon Aurora MySQL de producción. La empresa necesita revertir la base de datos al estado exacto previo a la ejecución del comando (hace 8 minutos) en el menor tiempo posible y sin crear una nueva instancia ni restaurar un snapshot desde cero. ¿Qué característica de Aurora permite lograr esto?",
            "options": [
                "A) Aurora Global Database.",
                "B) RDS Read Replica Promotion.",
                "C) Aurora Backtrack.",
                "D) S3 Object Versioning."
            ],
            "correctAnswer": 2,
            "explanation": "Aurora Backtrack permite rebobinar un clúster de bases de datos Aurora MySQL a un punto específico en el tiempo en cuestión de segundos o minutos, sin necesidad de restaurar una instantánea ni generar un clúster completamente nuevo."
        },
        {
            "id": "d17-q7",
            "scenarioTag": "Dominio 4: Optimización de Costos en Respaldos de RDS",
            "question": "Una empresa utiliza Amazon RDS con respaldos automatizados habilitados. El período de retención de respaldos automatizados está fijado en 7 días. El equipo de desarrollo toma snapshots manuales diariamente y nunca los elimina. En la última factura, los costos de almacenamiento de snapshots aumentaron considerablemente. ¿Por qué ocurre esto y cómo se optimiza?",
            "options": [
                "A) Los respaldos automatizados se eliminan cuando se termina la instancia, pero los snapshots manuales se conservan indefinidamente hasta que el usuario los elimina explícitamente; se deben implementar políticas de ciclo de vida con AWS Backup para depurar snapshots manuales antiguos.",
                "B) Los snapshots de RDS siempre se cobran al doble de tarifa que los volúmenes EBS activos.",
                "C) Se debe apagar la base de datos RDS durante los fines de semana para evitar que tome snapshots.",
                "D) Se debe migrar a Amazon S3 One Zone-IA inmediatamente."
            ],
            "correctAnswer": 0,
            "explanation": "A diferencia de los backups automatizados que se purgan de acuerdo a la ventana de retención (y cuyo almacenamiento hasta el 100% del tamaño de la BD es gratuito), las instantáneas manuales se almacenan indefinidamente y generan cargos por almacenamiento continuo hasta ser eliminadas manualmente o mediante AWS Backup."
        },
        {
            "id": "d17-q8",
            "scenarioTag": "Dominio 2: Amazon RDS Multi-AZ DB Cluster (Readable Standbys)",
            "question": "¿Cuál es la principal ventaja de un RDS Multi-AZ DB Cluster (despliegue de clúster con 1 primaria y 2 instancias en espera legibles) frente a un despliegue tradicional de RDS Multi-AZ con una sola instancia en espera?",
            "options": [
                "A) Es compatible con bases de datos Microsoft SQL Server Express.",
                "B) No requiere subredes privadas en la VPC.",
                "C) Permite eliminar el motor de replicación de red.",
                "D) Las dos instancias standby son legibles y pueden recibir tráfico de lectura, además de ofrecer conmutaciones por error habitualmente inferiores a 35 segundos mediante almacenamiento transaccional local NVMe."
            ],
            "correctAnswer": 3,
            "explanation": "Un RDS Multi-AZ DB Cluster despliega una instancia primaria y dos réplicas en espera en tres AZs distintas. A diferencia del Multi-AZ clásico donde la réplica es pasiva, en este modelo ambas instancias secundarias atienden tráfico de lectura y el failover toma típicamente menos de 35 segundos."
        },
        {
            "id": "d17-q9",
            "scenarioTag": "Dominio 1: Autenticación IAM en RDS",
            "question": "Un oficial de seguridad solicita eliminar las contraseñas de base de datos embebidas en los archivos de configuración de una aplicación que corre en EC2 para conectarse a una base de datos Amazon RDS MySQL. ¿Qué mecanismo nativo de AWS permite a la instancia autenticarse en MySQL utilizando credenciales temporales generadas por STS?",
            "options": [
                "A) Autenticación de base de datos mediante IAM (IAM Database Authentication).",
                "B) Autenticación Kerberos con Windows Active Directory exclusivamente.",
                "C) Cifrado SSE-S3 en el archivo my.cnf.",
                "D) Asignar una Elastic IP pública a la base de datos."
            ],
            "correctAnswer": 0,
            "explanation": "IAM Database Authentication permite a usuarios y aplicaciones autenticarse en motores Amazon RDS (MySQL y PostgreSQL) utilizando tokens de autenticación generados por AWS STS y sus credenciales de IAM, eliminando la necesidad de contraseñas locales y rotando tokens con validez de 15 minutos."
        },
        {
            "id": "d17-q10",
            "multi": True,
            "scenarioTag": "Dominio 2: Mantenimiento y Actualizaciones en RDS",
            "question": "Al aplicar una actualización de versión menor de motor (minor engine upgrade) o una modificación de hardware en una base de datos Amazon RDS configurada como Multi-AZ, ¿cuáles de las siguientes afirmaciones describen el proceso de AWS? (Selecciona DOS)",
            "options": [
                "A) Las actualizaciones se aplican primero en la instancia standby secundaria; luego ocurre una conmutación por error (failover) rápida, y finalmente se actualiza la instancia original, minimizando la ventana de inactividad.",
                "B) Si se selecciona la opción 'Apply Immediately', la modificación se ejecuta de inmediato pudiendo generar una breve interrupción, en lugar de esperar a la ventana de mantenimiento programada.",
                "C) Se eliminan todos los datos de las tablas y se requiere restaurar desde un backup externo.",
                "D) La dirección DNS del Endpoint de la base de datos cambia permanentemente a un nuevo dominio.",
                "E) Las actualizaciones de RDS solo se pueden realizar mediante la consola de Azure."
            ],
            "correctAnswers": [0, 1],
            "explanation": "En configuraciones Multi-AZ, AWS minimiza la indisponibilidad actualizando primero la réplica standby, conmutando el tráfico mediante failover y actualizando luego la primaria. La casilla 'Apply Immediately' fuerza la aplicación inmediata en lugar de esperar la ventana de mantenimiento semanal."
        }
    ],

    18: [
        {
            "id": "d18-q1",
            "scenarioTag": "Dominio 3: Amazon DynamoDB Accelerator (DAX)",
            "question": "Un videojuego móvil multijugador utiliza Amazon DynamoDB para consultar perfiles de jugadores y clasificaciones. Con millones de usuarios concurrentes, el juego experimenta picos masivos de lectura en elementos clave que generan latencias de entre 5 y 10 milisegundos. El equipo exige reducir los tiempos de respuesta de lectura a microsegundos (latencia sub-milisegundo) sin necesidad de reescribir la lógica de consultas de la aplicación. ¿Qué solución debe implementarse?",
            "options": [
                "A) Implementar Amazon DynamoDB Accelerator (DAX).",
                "B) Migrar la tabla a Amazon RDS PostgreSQL con instancias en clúster.",
                "C) Aumentar manualmente las unidades de capacidad de lectura (RCU) a 100.000.",
                "D) Colocar un Application Load Balancer frente a la tabla DynamoDB."
            ],
            "correctAnswer": 0,
            "explanation": "Amazon DynamoDB Accelerator (DAX) es una memoria caché en memoria totalmente administrada para DynamoDB que reduce los tiempos de respuesta de lectura de milisegundos a microsegundos, y es compatible a nivel de API con DynamoDB, por lo que no requiere reescribir la lógica de la aplicación."
        },
        {
            "id": "d18-q2",
            "scenarioTag": "Dominio 3: Índices Secundarios (GSI vs LSI)",
            "question": "Una tabla de DynamoDB almacena transacciones de usuarios con la clave de partición 'UserID' y la clave de ordenación 'TransactionDate'. La empresa requiere consultar transacciones frecuentemente buscando por el atributo 'MerchantID' y ordenando por 'Amount'. La tabla ya contiene millones de registros en producción. ¿Qué índice secundario debe crearse?",
            "options": [
                "A) Un Local Secondary Index (LSI) con Partition Key 'UserID' y Sort Key 'MerchantID'.",
                "B) Un Global Secondary Index (GSI) con Partition Key 'MerchantID' y Sort Key 'Amount'.",
                "C) Modificar la clave primaria de la tabla existente directamente en la consola.",
                "D) Realizar un Scan completo de la tabla mediante una función Lambda periódica."
            ],
            "correctAnswer": 1,
            "explanation": "Un Global Secondary Index (GSI) puede tener una clave de partición y de ordenación completamente diferentes a las de la tabla principal y puede crearse o eliminarse en cualquier momento sobre una tabla existente. Un Local Secondary Index (LSI) comparte obligatoriamente la misma Partition Key que la tabla y sólo puede definirse al momento de crear la tabla."
        },
        {
            "id": "d18-q3",
            "scenarioTag": "Dominio 3: Soluciones de Caché (Redis vs Memcached)",
            "question": "Una plataforma web con backend relacional sufre alta latencia por consultas complejas y necesita una capa de caché en memoria distribuida. Los requisitos técnicos exigen soporte para estructuras de datos complejas (listas, conjuntos ordenados y hashes), persistencia de datos en disco y alta disponibilidad con conmutación automática por error mediante Multi-AZ y réplicas de lectura. ¿Qué motor de Amazon ElastiCache satisface estos requerimientos?",
            "options": [
                "A) Amazon ElastiCache for Memcached.",
                "B) Amazon ElastiCache for Redis.",
                "C) Amazon CloudFront Origin Shield.",
                "D) Amazon DynamoDB Streams."
            ],
            "correctAnswer": 1,
            "explanation": "Amazon ElastiCache for Redis soporta estructuras de datos avanzadas (hashes, listas, sets, sorted sets), persistencia en disco, replicación multi-AZ con conmutación por error automática y clústeres particionados. Memcached es un motor de clave-valor simple, puramente en memoria, multihilo y sin soporte de persistencia ni réplicas multi-AZ."
        },
        {
            "id": "d18-q4",
            "scenarioTag": "Dominio 3: Modos de Capacidad en DynamoDB (On-Demand vs Provisioned)",
            "question": "Una aplicación web de subastas en línea tiene un tráfico totalmente impredecible con picos repentinos que aumentan de 100 lecturas/escrituras a 50.000 operaciones por segundo en segundos y luego caen a cero. El equipo de operaciones no desea planificar capacidad ni lidiar con excepciones de aprovisionamiento (ProvisionedThroughputExceededException). ¿Qué modo de capacidad de DynamoDB debe seleccionarse?",
            "options": [
                "A) Provisioned Capacity Mode con Auto Scaling habilitado.",
                "B) On-Demand Capacity Mode.",
                "C) Provisioned Capacity con Reserved Capacity a 3 años.",
                "D) Desactivar las escrituras durante las horas pico."
            ],
            "correctAnswer": 1,
            "explanation": "DynamoDB On-Demand Capacity Mode gestiona automáticamente la capacidad para adaptarse al volumen de solicitudes en milisegundos sin necesidad de planificar capacidad ni configurar reglas de escalado, cobrando únicamente por las solicitudes de lectura y escritura realizadas."
        },
        {
            "id": "d18-q5",
            "multi": True,
            "scenarioTag": "Dominio 2: DynamoDB Global Tables & Replicación Multi-Región",
            "question": "¿Cuáles de las siguientes afirmaciones sobre Amazon DynamoDB Global Tables son correctas? (Selecciona DOS)",
            "options": [
                "A) Proporciona replicación activa-activa totalmente administrada y multi-región entre tablas en diferentes regiones de AWS.",
                "B) Utiliza un mecanismo de resolución de conflictos basado en 'el último que escribe gana' (Last-Writer-Wins) utilizando marcas de tiempo de las actualizaciones.",
                "C) Requiere que las tablas se configuren obligatoriamente en modo Provisioned sin Auto Scaling.",
                "D) DynamoDB Streams debe estar desactivado en todas las tablas participantes.",
                "E) Solo admite una única tabla de lectura en la región de Virginia del Norte."
            ],
            "correctAnswers": [0, 1],
            "explanation": "DynamoDB Global Tables ofrece replicación multi-región activa-activa basada en DynamoDB Streams. Permite a las aplicaciones leer y escribir localmente en cualquier región participante con latencia de milisegundos de un solo dígito y resuelve colisiones mediante 'Last-Writer-Wins'."
        },
        {
            "id": "d18-q6",
            "scenarioTag": "Dominio 3: DynamoDB Streams & Arquitecturas Orientadas a Eventos",
            "question": "Cada vez que se inserta o modifica un registro en una tabla de usuarios de DynamoDB, la aplicación debe enviar un correo de bienvenida y registrar la auditoría en un bucket S3. ¿Qué arquitectura orientada a eventos permite capturar este flujo de cambios con el menor acoplamiento?",
            "options": [
                "A) Configurar un cron job en EC2 que ejecute un Scan completo de la tabla cada minuto.",
                "B) Habilitar DynamoDB Streams en la tabla y configurar una función AWS Lambda asociada al stream como disparador (Event Source Mapping).",
                "C) Modificar el código de la aplicación cliente para enviar dos peticiones síncronas HTTP por cada escritura.",
                "D) Exportar la tabla completa a Amazon Redshift cada 5 minutos."
            ],
            "correctAnswer": 1,
            "explanation": "DynamoDB Streams captura un registro cronológico ordenado y garantizado de modificaciones a nivel de elemento en una tabla DynamoDB durante 24 horas. Se integra nativamente con AWS Lambda para ejecutar lógica en respuesta a inserciones, actualizaciones o eliminaciones de datos."
        },
        {
            "id": "d18-q7",
            "scenarioTag": "Dominio 4: Expiración Automática de Datos (DynamoDB TTL)",
            "question": "Una aplicación web almacena tokens de sesión de usuarios que caducan exactamente a las 2 horas de su creación. El equipo desea que los elementos expirados se eliminen automáticamente de la tabla DynamoDB sin consumir unidades de capacidad de escritura (WCU) ni ejecutar scripts de borrado. ¿Qué característica de DynamoDB cumple este requerimiento?",
            "options": [
                "A) DynamoDB Point-in-Time Recovery (PITR).",
                "B) Time to Live (TTL) de DynamoDB, especificando un atributo con la marca de tiempo de expiración en formato época Unix (Epoch timestamp).",
                "C) Amazon CloudWatch Alarms con acción de borrado.",
                "D) S3 Lifecycle Rules aplicadas a la tabla."
            ],
            "correctAnswer": 1,
            "explanation": "Time to Live (TTL) de DynamoDB permite definir un atributo con una marca de tiempo en segundos en formato Epoch Unix. Cuando la hora actual supera la marca de tiempo, DynamoDB elimina el elemento automáticamente en segundo plano sin consumir unidades de capacidad de escritura (WCU)."
        },
        {
            "id": "d18-q8",
            "scenarioTag": "Dominio 3: Lecturas Consistentes en DynamoDB (Strong vs Eventual)",
            "question": "Por defecto, cuando una aplicación ejecuta una operación GetItem o Query en Amazon DynamoDB, ¿cuál es el modelo de consistencia de lectura que se aplica y qué opción permite forzar consistencia inmediata?",
            "options": [
                "A) Consistencia Fuerte (Strongly Consistent Read) por defecto; se puede cambiar a ACID con un parámetro.",
                "B) Consistencia Eventual (Eventually Consistent Read) por defecto (que consume la mitad de RCUs); para obtener los datos más recientes reflejando todas las escrituras exitosas previas, se debe activar el parámetro ConsistentRead=true.",
                "C) Consistencia Serializada en todas las operaciones.",
                "D) Las lecturas en DynamoDB no admiten consistencia eventual."
            ],
            "correctAnswer": 1,
            "explanation": "Por defecto, DynamoDB utiliza lecturas eventualmente consistentes (Eventually Consistent), las cuales consumen 0,5 RCU por cada elemento de hasta 4 KB. Si se requiere garantizar la lectura inmediata de la última escritura confirmada, se debe especificar ConsistentRead=true (que consume 1 RCU por cada 4 KB)."
        },
        {
            "id": "d18-q9",
            "scenarioTag": "Dominio 3: Amazon MemoryDB for Redis",
            "question": "Una institución financiera necesita el rendimiento ultrarrápido de microsegundos de lectura y escritura de Redis, pero exige una durabilidad absoluta de base de datos primaria con un registro transaccional Multi-AZ inmutable que garantice cero pérdida de datos ante caídas. ¿Qué servicio de AWS combina ambas características?",
            "options": [
                "A) Amazon MemoryDB for Redis.",
                "B) Amazon ElastiCache for Memcached.",
                "C) Amazon RDS SQL Server con In-Memory OLTP.",
                "D) Amazon S3 Intelligent-Tiering."
            ],
            "correctAnswer": 0,
            "explanation": "Amazon MemoryDB for Redis es una base de datos en memoria duradera y compatible con Redis que utiliza un registro transaccional distribuido Multi-AZ, proporcionando lecturas en microsegundos, escrituras en milisegundos de un solo dígito y durabilidad total como base de datos primaria."
        },
        {
            "id": "d18-q10",
            "multi": True,
            "scenarioTag": "Dominio 3: Estrategias de Caching (Lazy Loading vs Write-Through)",
            "question": "Al diseñar una estrategia de almacenamiento en caché para una base de datos relacional con Amazon ElastiCache, ¿cuáles de las siguientes afirmaciones sobre los patrones de caché son verdaderas? (Selecciona DOS)",
            "options": [
                "A) Lazy Loading (Cache-Aside) solo carga datos en la caché cuando ocurre un fallo de caché (cache miss), evitando llenar la memoria con datos que nunca se solicitan.",
                "B) Write-Through escribe datos en la caché cada vez que se escribe en la base de datos, garantizando que los datos en la caché estén siempre actualizados, pero aumentando la latencia de escritura inicial.",
                "C) Lazy Loading garantiza que los datos en la caché nunca se vuelvan obsoletos (stale data) sin necesidad de TTL.",
                "D) Write-Through elimina automáticamente la base de datos si la memoria RAM se agota.",
                "E) Ni Lazy Loading ni Write-Through son compatibles con bases de datos relacionales."
            ],
            "correctAnswers": [0, 1],
            "explanation": "Lazy Loading solo recupera y almacena datos en caché cuando la aplicación no los encuentra en la caché (cache miss), ahorrando memoria pero pudiendo servir datos obsoletos si no se combina con TTL. Write-Through actualiza la caché simultáneamente con cada escritura en la base de datos, asegurando datos frescos."
        }
    ],

    19: [
        {
            "id": "d19-q1",
            "scenarioTag": "Dominio 2: CloudFront vs AWS Global Accelerator",
            "question": "Una empresa multinacional de videojuegos y apuestas en vivo tiene servidores de juego desplegados en instancias EC2 que se comunican mediante los protocolos UDP y TCP en puertos no estándar. Los clientes de todo el mundo experimentan retrasos y fluctuaciones de jitter a través de la Internet pública. El contenido no puede ser almacenado en caché. ¿Qué servicio de aceleración global de AWS debe seleccionarse?",
            "options": [
                "A) Amazon CloudFront con compresión gzip.",
                "B) Amazon S3 Transfer Acceleration.",
                "C) AWS Storage Gateway en modo volumen en caché.",
                "D) AWS Global Accelerator utilizando direcciones IP Anycast estáticas y la red troncal privada de AWS."
            ],
            "correctAnswer": 3,
            "explanation": "AWS Global Accelerator opera en la capa de red/transporte (TCP/UDP), proporciona 2 direcciones IP Anycast estáticas mundiales y enruta el tráfico hacia los endpoints de AWS a través de la red global de fibra de AWS, acelerando el tráfico no almacenable en caché (como juegos en vivo UDP/TCP). CloudFront está optimizado para tráfico HTTP/HTTPS almacenable en caché."
        },
        {
            "id": "d19-q2",
            "scenarioTag": "Dominio 1: Protección de Origen en S3 con Origin Access Control (OAC)",
            "question": "Un portal de noticias global aloja su sitio web estático en un bucket privado de Amazon S3 y lo distribuye mundialmente con Amazon CloudFront. El oficial de seguridad exige que los usuarios NUNCA puedan eludir CloudFront accediendo directamente a la URL del bucket S3. Además, el bucket debe estar cifrado con AWS KMS con rotación de claves. ¿Qué mecanismo oficial de seguridad de AWS debe configurarse?",
            "options": [
                "A) Desplegar un NAT Gateway frente al bucket S3.",
                "B) Origin Access Control (OAC) en la distribución de CloudFront y una Bucket Policy en S3 que permita acceso únicamente a la entidad de servicio de CloudFront con la condición de distribución ARN.",
                "C) Origin Access Identity (OAI) legado con permisos de administrador en IAM.",
                "D) Asignar una Elastic IP al bucket de S3."
            ],
            "correctAnswer": 1,
            "explanation": "Origin Access Control (OAC) es el estándar actual y recomendado de AWS para proteger orígenes de S3 detrás de CloudFront. Soporta todas las regiones de AWS, métodos HTTP dinámicos (PUT/DELETE) y cifrado del lado del servidor con AWS KMS (SSE-KMS), superando las limitaciones del antiguo OAI."
        },
        {
            "id": "d19-q3",
            "scenarioTag": "Dominio 3: Computación en el Borde (CloudFront Functions vs Lambda@Edge)",
            "question": "Una compañía de streaming distribuye videos educativos alojados en un bucket privado de S3 a través de CloudFront. La empresa necesita restringir el acceso para que solo los suscriptores activos que hayan iniciado sesión puedan reproducir los videos. La solución debe permitir compartir múltiples archivos multimedia dentro de una misma ruta protegida (ej: /videos/curso1/*) con una sola validación. ¿Qué mecanismo proporciona este control?",
            "options": [
                "A) CloudFront Signed URLs individuales para cada video.",
                "B) CloudFront Signed Cookies asociadas a la ruta de contenido.",
                "C) Claves estáticas de AWS API Gateway incrustadas en el reproductor.",
                "D) Reglas de Network ACL en las ubicaciones perimetrales."
            ],
            "correctAnswer": 1,
            "explanation": "Las Signed Cookies de Amazon CloudFront permiten otorgar acceso a múltiples archivos restringidos (como todo un directorio o curso de videos) a través de una sola cookie de autenticación sin tener que modificar las URLs de cada archivo, a diferencia de las Signed URLs que se utilizan habitualmente para un archivo individual."
        },
        {
            "id": "d19-q4",
            "scenarioTag": "Dominio 3: Lógica Ligera en el Borde (CloudFront Functions)",
            "question": "Una empresa necesita inspeccionar solicitudes HTTP entrantes en CloudFront para realizar redireccionamientos de URLs basados en encabezados de idioma, reescritura de rutas y manipulación de cabeceras de respuesta HTTP de seguridad. La lógica es simple (menos de 1 ms de tiempo de ejecución), no requiere acceso al cuerpo (body) de la solicitud ni a Internet, pero debe ejecutarse a una escala masiva de millones de solicitudes por segundo con el costo más bajo posible. ¿Qué solución de cómputo en el borde es la indicada?",
            "options": [
                "A) Contenedores Amazon ECS desplegados en cada país.",
                "B) CloudFront Functions.",
                "C) Lambda@Edge con entorno de ejecución Node.js y acceso a VPC.",
                "D) Instancias EC2 t4g.nano detrás de un Application Load Balancer."
            ],
            "correctAnswer": 1,
            "explanation": "CloudFront Functions está diseñado para manipulaciones ligeras de solicitudes y respuestas HTTP en JavaScript en las ubicaciones de borde (viewer-request y viewer-response), ejecutándose a escala masiva en submilisegundos y a 1/6 del costo de Lambda@Edge. Lambda@Edge se reserva para funciones complejas que requieran acceso a red, bibliotecas pesadas o inspección del body."
        },
        {
            "id": "d19-q5",
            "multi": True,
            "scenarioTag": "Dominio 3: CloudFront Caching & Headers",
            "question": "¿Cuáles de las siguientes afirmaciones sobre la optimización de almacenamiento en caché en Amazon CloudFront son verdaderas? (Selecciona DOS)",
            "options": [
                "A) El uso de políticas de clave de caché (Cache Key Policies) optimizadas que restrinjan qué encabezados, cookies y parámetros de consulta se incluyen en la clave de caché mejora sustancialmente la tasa de aciertos de caché (Cache Hit Ratio).",
                "B) Reenviar todos los encabezados HTTP (Forward all headers) a un origen en CloudFront hace que CloudFront eluda la caché y pase cada solicitud directamente al origen.",
                "C) El TTL máximo permitido en CloudFront es de 5 segundos.",
                "D) CloudFront no puede almacenar en caché contenido dinámico generado por APIs.",
                "E) CloudFront elimina los archivos de la caché cada 60 minutos obligatoriamente."
            ],
            "correctAnswers": [0, 1],
            "explanation": "Optimizar la Cache Key incluyendo solo parámetros estrictamente necesarios maximiza los cache hits. Por el contrario, reenviar todos los encabezados HTTP (como User-Agent o Authorization) hace que casi cada petición sea única, provocando que CloudFront no almacene en caché las respuestas y las envíe al origen."
        },
        {
            "id": "d19-q6",
            "scenarioTag": "Dominio 3: CloudFront Origin Shield",
            "question": "Un sitio de comercio electrónico con presencia global experimenta una alta carga en su servidor de origen durante eventos promocionales, ya que las decenas de ubicaciones perimetrales de CloudFront en todo el mundo consultan simultáneamente al origen para obtener objetos expirados. ¿Qué característica de CloudFront centraliza las consultas al origen y reduce la carga en los servidores backend?",
            "options": [
                "A) CloudFront Origin Groups con Failover.",
                "B) CloudFront Origin Shield.",
                "C) AWS WAF Rate-Based Rules.",
                "D) Amazon Route 53 Multivalue Answer."
            ],
            "correctAnswer": 1,
            "explanation": "CloudFront Origin Shield es una capa de caché centralizada adicional ubicada entre las cachés perimetrales regionales de CloudFront y el servidor de origen. Agrega y consolida solicitudes para maximizar el cache hit ratio y minimizar dramáticamente la carga de peticiones sobre el origen."
        },
        {
            "id": "d19-q7",
            "scenarioTag": "Dominio 1: Cifrado a Nivel de Campo (Field-Level Encryption)",
            "question": "Una aplicación web de comercio electrónico procesa números de tarjetas de crédito y números de Seguro Social de usuarios a través de CloudFront. Por normativas de seguridad, estos campos sensibles deben cifrarse en el borde de CloudFront utilizando una clave pública antes de que el mensaje llegue al balanceador o al servidor web, garantizando que solo un servicio de backend seguro con la clave privada correspondiente pueda descifrar los datos. ¿Qué función de CloudFront proporciona esta capacidad?",
            "options": [
                "A) CloudFront SSL Termination.",
                "B) CloudFront Field-Level Encryption.",
                "C) AWS Secrets Manager con rotación automática.",
                "D) AWS Shield Advanced."
            ],
            "correctAnswer": 1,
            "explanation": "Field-Level Encryption en CloudFront permite cifrar campos específicos de datos confidenciales (como números de tarjetas o datos personales) en las solicitudes POST utilizando cifrado asimétrico en el borde antes de reenviar la solicitud al origen, asegurando que solo aplicaciones autorizadas puedan descifrarlos."
        },
        {
            "id": "d19-q8",
            "scenarioTag": "Dominio 2: CloudFront Origin Failover (Origin Groups)",
            "question": "Una empresa desea proporcionar alta disponibilidad para las descargas de sus instaladores de software. El origen primario es un bucket S3 en us-east-1 y el origen secundario de respaldo es un bucket S3 en eu-west-1. Si el primario devuelve códigos de estado HTTP 500, 502, 503 o 504, CloudFront debe conmutar automáticamente al secundario. ¿Qué configuración implementa esto?",
            "options": [
                "A) Configurar un Route 53 Weighted Record apuntando a dos distribuciones.",
                "B) Crear un Origin Group (Grupo de Orígenes) en CloudFront con dos orígenes y configurar criterios de conmutación por error (Failover Criteria) basados en códigos de error HTTP.",
                "C) Configurar un balanceador Classic Load Balancer con instancias EC2 intermedias.",
                "D) Crear una alarma de CloudWatch que ejecute un script de modificación de distribución."
            ],
            "correctAnswer": 1,
            "explanation": "Los Origin Groups en Amazon CloudFront permiten configurar conmutación automática por error entre dos orígenes (primario y secundario). Si el origen primario falla o devuelve errores HTTP específicos (como 500, 502, 503, 504 o 404), CloudFront reenvía la solicitud de forma transparente al origen secundario."
        },
        {
            "id": "d19-q9",
            "scenarioTag": "Dominio 3: Invalidación de Caché en CloudFront",
            "question": "Un desarrollador web actualiza urgentemente el archivo 'estilos.css' y el logotipo en el origen de S3 debido a un cambio de marca corporativa, pero los usuarios continúan viendo los archivos antiguos debido a un TTL configurado de 24 horas en CloudFront. ¿Cuál es el método oficial para forzar la actualización inmediata de esos archivos en todas las ubicaciones perimetrales?",
            "options": [
                "A) Crear una Invalidación de Caché (Cache Invalidation) en CloudFront especificando las rutas de los archivos afectados (ej: /estilos.css y /logo.png).",
                "B) Eliminar la distribución de CloudFront y volver a crearla.",
                "C) Reiniciar el bucket S3 desde la consola de AWS.",
                "D) Apagar las conexiones de Internet en los servidores DNS."
            ],
            "correctAnswer": 0,
            "explanation": "Una invalidación de caché (Cache Invalidation) elimina archivos de las cachés de todas las ubicaciones perimetrales de CloudFront antes de que expire su TTL, haciendo que la siguiente solicitud consulte directamente al origen para obtener la versión más reciente."
        },
        {
            "id": "d19-q10",
            "multi": True,
            "scenarioTag": "Dominio 2: Características de AWS Global Accelerator",
            "question": "¿Cuáles de las siguientes características distinguen a AWS Global Accelerator como solución de red global? (Selecciona DOS)",
            "options": [
                "A) Proporciona 2 direcciones IP Anycast estáticas globales que no cambian, simplificando la configuración de firewalls de clientes corporativos.",
                "B) Realiza comprobaciones de salud (Health Checks) continuas y conmuta el tráfico a endpoints saludables en otra región en menos de 30 segundos sin depender del TTL de DNS.",
                "C) Almacena en caché imágenes y videos en discos SSD locales de las ubicaciones perimetrales.",
                "D) Modifica el código HTML de las páginas web para eliminar scripts pesados.",
                "E) Solo funciona con bases de datos relacionales locales."
            ],
            "correctAnswers": [0, 1],
            "explanation": "AWS Global Accelerator proporciona 2 direcciones IP Anycast estáticas mundiales que sirven como punto de entrada fijo a la red troncal de AWS. Monitorea continuamente la salud de los endpoints (ALBs, NLBs, EC2) y redirige instantáneamente el tráfico ante fallos sin esperar a la propagación del TTL de DNS."
        }
    ]
}
