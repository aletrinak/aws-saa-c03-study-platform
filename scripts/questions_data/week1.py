# Week 1: Seguridad, Identidad, Gobernanza y Redes Base
# Days: 1, 2, 3, 4, 5 (10 questions per day = 50 questions)

WEEK_1_QUESTIONS = {
    1: [
        {
            "id": "d1-q1",
            "scenarioTag": "Dominio 1: IAM & Menor Privilegio",
            "question": "Una aplicación distribuida se ejecuta en un grupo de instancias Amazon EC2 dentro de una VPC privada y requiere escribir periódicamente archivos de registro en un bucket de Amazon S3. De acuerdo con las políticas corporativas de seguridad, está estrictamente prohibido almacenar credenciales estáticas de larga duración en el código o en el sistema operativo de las instancias. Además, la solución debe implementarse con la MENOR sobrecarga operativa (LEAST operational overhead). ¿Qué arquitectura debe implementar el Solutions Architect?",
            "options": [
                "A) Configurar una función AWS Lambda que asuma un rol de administrador y sincronice los archivos entre el disco EBS de la instancia y Amazon S3 a través de SSH cada hora.",
                "B) Crear un usuario IAM con una política de escritura en S3, almacenar el Access Key y Secret Key cifrados en un archivo local de la instancia y rotarlos mensualmente mediante un script cron.",
                "C) Crear un IAM Role con permisos mínimos para escribir en S3, adjuntarlo a un Instance Profile y asociarlo a las instancias EC2 para que el AWS SDK obtenga credenciales temporales automáticamente mediante IMDSv2.",
                "D) Configurar una política de bucket (Bucket Policy) en S3 que permita el acceso anónimo de solo escritura proveniente del bloque CIDR de la VPC."
            ],
            "correctAnswer": 2,
            "explanation": "Asociar un IAM Role mediante un Instance Profile permite que las instancias EC2 y el AWS SDK obtengan credenciales temporales rotadas automáticamente a través del Instance Metadata Service (IMDSv2). Esto elimina por completo las credenciales estáticas y representa la menor sobrecarga operativa según el Well-Architected Framework."
        },
        {
            "id": "d1-q2",
            "scenarioTag": "Dominio 1: Cross-Account & Confused Deputy",
            "question": "Una empresa contrató a un proveedor SaaS externo (Cuenta AWS B) para auditar tablas DynamoDB en su cuenta corporativa (Cuenta AWS A). El proveedor utiliza una solución multi-inquilino (multi-tenant) compartida entre múltiples clientes. ¿Qué mecanismo debe configurar el Solutions Architect en el IAM Role de la Cuenta A para mitigar el riesgo de seguridad del 'Confused Deputy' (suplantador confuso)?",
            "options": [
                "A) Requerir un 'ExternalId' único y secreto acordado con el proveedor dentro de la condición 'sts:ExternalId' de la Trust Policy del rol.",
                "B) Crear un usuario IAM con credenciales estáticas en la Cuenta A y compartirlas únicamente con el director de seguridad del proveedor SaaS.",
                "C) Configurar una política de sesión (Session Policy) que restrinja el acceso a un rango de direcciones IP públicas específicas de la sede del proveedor.",
                "D) Habilitar autenticación multifactor (MFA) obligatoria en el rol y entregar un token virtual TOTP al proveedor externo."
            ],
            "correctAnswer": 0,
            "explanation": "El parámetro ExternalId en la Trust Policy (política de confianza) del rol previene el ataque de 'Confused Deputy' en arquitecturas multi-tenant, garantizando que el proveedor SaaS sólo asuma el rol cuando actúe específicamente en nombre del cliente correcto."
        },
        {
            "id": "d1-q3",
            "scenarioTag": "Dominio 1: Delegación y Permission Boundaries",
            "question": "Un Solutions Architect debe permitir que los líderes de equipo de desarrollo creen roles IAM para sus funciones AWS Lambda y tareas ECS. Sin embargo, el equipo central de seguridad exige garantizar que los desarrolladores nunca puedan otorgarse privilegios de Administrador ni escalar permisos más allá de los servicios expresamente autorizados por la empresa. ¿Qué mecanismo de IAM cumple con este requisito?",
            "options": [
                "A) Configurar una Service Control Policy (SCP) que bloquee la consola de IAM a los desarrolladores.",
                "B) Crear un script de AWS Config que detecte roles con permisos excesivos y los elimine automáticamente después de 15 minutos.",
                "C) Asignar a los desarrolladores una política de IAM que permita únicamente la acción iam:PassRole sobre roles creados previamente por el equipo central.",
                "D) Aplicar un Permissions Boundary (límite de permisos) a las políticas de IAM de los desarrolladores, obligándolos a adjuntar ese mismo límite a cada nuevo rol que creen."
            ],
            "correctAnswer": 3,
            "explanation": "Los Permissions Boundaries (límites de permisos) de IAM son barreras que restringen el permiso máximo que una política basada en identidad puede otorgar. Al requerir que los desarrolladores asocien el boundary a cualquier rol que creen, se impide la escalada de privilegios."
        },
        {
            "id": "d1-q4",
            "scenarioTag": "Dominio 1: Seguridad de Metadatos & IMDSv2",
            "question": "Un equipo de ciberseguridad identificó una vulnerabilidad de SSRF (Server-Side Request Forgery) en una aplicación web alojada en Amazon EC2. Para evitar que actores maliciosos puedan robar las credenciales temporales del IAM Role asignado a la instancia consultando http://169.254.169.254/, ¿qué medida técnica inmediata debe implementar el arquitecto?",
            "options": [
                "A) Modificar la tabla de enrutamiento de la subred para enviar el tráfico a 169.254.169.254 a un Blackhole.",
                "B) Exigir el uso exclusivo de IMDSv2 (HttpTokens=required) y configurar el límite de saltos (HttpPutResponseHopLimit) en 1 en las instancias EC2.",
                "C) Eliminar el Instance Profile de la instancia y transferir las credenciales a variables de entorno estáticas dentro del archivo .bashrc.",
                "D) Crear una regla de Network ACL que bloquee el puerto 80 hacia la dirección IP 169.254.169.254."
            ],
            "correctAnswer": 1,
            "explanation": "IMDSv2 mitiga vulnerabilidades SSRF al exigir una solicitud HTTP PUT orientada a sesión con encabezados especiales (X-aws-ec2-metadata-token) para obtener un token de sesión antes de solicitar credenciales. Configurar HttpPutResponseHopLimit=1 asegura que los tokens no viajen a través de proxies inversos o contenedores."
        },
        {
            "id": "d1-q5",
            "multi": True,
            "scenarioTag": "Dominio 1: STS & Control de Acceso Condicional",
            "question": "Un oficial de seguridad exige que los administradores de sistemas solo puedan invocar APIs administrativas y asumir roles sensibles si cumplen DOS condiciones obligatorias: haber iniciado sesión con autenticación multifactor (MFA) y realizar las peticiones desde la red corporativa de la empresa (bloque CIDR 198.51.100.0/24). ¿Qué claves de condición en la política de IAM deben utilizarse para hacer cumplir estas restricciones? (Selecciona DOS)",
            "options": [
                "A) aws:MultiFactorAuthPresent evaluada como true.",
                "B) aws:PrincipalArn coincidente con el nombre de usuario.",
                "C) aws:SourceIp con el operador NotIpAddress para denegar tráfico fuera del CIDR corporativo.",
                "D) aws:TokenExpirationTime evaluada en menos de 1 hora.",
                "E) aws:UserAgent coincidente con AWS CLI v2."
            ],
            "correctAnswers": [0, 2],
            "explanation": "La clave de condición aws:MultiFactorAuthPresent valida que la sesión fue autenticada mediante MFA. La clave aws:SourceIp combinada con NotIpAddress o IpAddress valida que las solicitudes provengan del bloque CIDR corporativo permitido."
        },
        {
            "id": "d1-q6",
            "scenarioTag": "Dominio 1: Control de Acceso Basado en Atributos (ABAC)",
            "question": "Una empresa en rápido crecimiento posee cientos de desarrolladores organizados en proyectos que cambian constantemente. El equipo de seguridad pasa horas creando y modificando políticas de IAM cada vez que un desarrollador cambia de proyecto o se crea un nuevo proyecto. ¿Qué estrategia arquitectónica permite escalar los permisos sin modificar las políticas de IAM de forma continua?",
            "options": [
                "A) Crear un usuario IAM individual para cada proyecto al que pertenezca el desarrollador.",
                "B) Asignar a todos los desarrolladores la política administrada AdministratorAccess y confiar en CloudTrail.",
                "C) Asignar grupos de IAM específicos para cada recurso individual dentro de la cuenta.",
                "D) Implementar Attribute-Based Access Control (ABAC) utilizando etiquetas (tags) en los usuarios de IAM y en los recursos de AWS, con condiciones como aws:PrincipalTag y aws:ResourceTag."
            ],
            "correctAnswer": 3,
            "explanation": "ABAC (Attribute-Based Access Control) utiliza etiquetas en las entidades principales y en los recursos para definir permisos mediante reglas como 'autorizar si aws:PrincipalTag/Project == aws:ResourceTag/Project'. Esto permite escalar dinámicamente sin tocar las políticas cuando se añaden nuevos proyectos o empleados."
        },
        {
            "id": "d1-q7",
            "scenarioTag": "Dominio 1: Federación de Identidades & IAM Identity Center",
            "question": "Una corporación posee 15.000 usuarios almacenados en Microsoft Entra ID (Azure AD). La empresa está migrando decenas de cuentas de AWS y requiere que los empleados inicien sesión en las consolas de AWS y herramientas de CLI usando sus credenciales corporativas existentes, con inicio de sesión único (SSO) y aprovisionamiento automático. ¿Qué solución oficial de AWS debe implementar el arquitecto?",
            "options": [
                "A) Crear scripts programados en Python que exporten usuarios de Entra ID y creen usuarios locales de IAM en cada cuenta mediante la API CreateUser.",
                "B) Implementar AWS IAM Identity Center (anteriormente AWS SSO) conectado a Entra ID mediante SAML 2.0 y protocolo SCIM para sincronización de identidades.",
                "C) Configurar un servidor OpenVPN en una instancia EC2 con autenticación LDAP y credenciales estáticas compartidas.",
                "D) Instalar Microsoft Active Directory Domain Services en Amazon EC2 y replicar manualmente los hashes NTLM."
            ],
            "correctAnswer": 1,
            "explanation": "AWS IAM Identity Center es el servicio nativo recomendado para SSO multi-cuenta y federación de identidades. Soporta SAML 2.0 para autenticación federada y SCIM (System for Cross-domain Identity Management) para aprovisionamiento y desaprovisionamiento automático de usuarios y grupos."
        },
        {
            "id": "d1-q8",
            "scenarioTag": "Dominio 1: Políticas Basadas en Recursos vs Identidad",
            "question": "Una aplicación que corre en la Cuenta AWS 111111111111 necesita leer objetos de un bucket S3 ubicado en la Cuenta AWS 222222222222. Para que el acceso sea exitoso en un escenario cross-account entre dos cuentas distintas, ¿qué permisos deben estar configurados obligatoriamente?",
            "options": [
                "A) Tanto la política de identidad del rol/usuario en la Cuenta 111111111111 como la Resource Policy (Bucket Policy) en la Cuenta 222222222222 deben permitir explícitamente la acción.",
                "B) Únicamente la Bucket Policy en la Cuenta 222222222222, ya que las Resource-based policies anulan y no requieren permisos de identidad.",
                "C) Únicamente el rol de IAM en la Cuenta 111111111111, ya que las políticas de identidad tienen precedencia global sobre los recursos de S3.",
                "D) Se debe desactivar el bloqueo de acceso público (S3 Block Public Access) en el bucket de la Cuenta 222222222222."
            ],
            "correctAnswer": 0,
            "explanation": "En el acceso entre diferentes cuentas de AWS (cross-account), se requiere una concesión explícita en AMBOS lados: la política basada en identidad (en la cuenta origen) debe permitir realizar la acción, y la política basada en recursos (en la cuenta destino) debe permitir que el principal de la cuenta origen acceda al recurso."
        },
        {
            "id": "d1-q9",
            "scenarioTag": "Dominio 1: Evaluación de Políticas IAM",
            "question": "Un usuario IAM tiene adjunta una política de identidad que permite la acción 's3:GetObject' sobre todos los recursos ('Effect': 'Allow'). Sin embargo, el bucket S3 al que intenta acceder posee una Bucket Policy con un bloque que dice: 'Effect': 'Deny', 'Action': 's3:*', 'Principal': '*'. ¿Cuál es el resultado de la solicitud del usuario al intentar descargar un archivo?",
            "options": [
                "A) Acceso permitido, porque las políticas de identidad basadas en usuarios tienen mayor prioridad que las Bucket Policies.",
                "B) Acceso permitido, porque 's3:GetObject' es una acción específica de lectura que tiene precedencia sobre 's3:*'.",
                "C) Acceso denegado, porque una denegación explícita (Explicit Deny) en cualquier política relevante anula cualquier permiso permitido.",
                "D) Acceso permitido únicamente si el usuario utiliza la AWS Management Console en lugar del AWS CLI."
            ],
            "correctAnswer": 2,
            "explanation": "En la lógica de evaluación de políticas de AWS: Denegación Explícita (Explicit Deny) > Permiso Explícito (Explicit Allow) > Denegación por Defecto (Default Deny). Si existe un Explicit Deny en cualquier política aplicable, la solicitud se deniega de forma irreversible."
        },
        {
            "id": "d1-q10",
            "multi": True,
            "scenarioTag": "Dominio 1: Credenciales de Seguridad & Buenas Prácticas",
            "question": "Un auditor de cumplimiento solicita implementar las mejores prácticas de seguridad recomendadas por AWS para la gestión de credenciales y acceso a cuentas. ¿Cuáles de las siguientes recomendaciones representan mejores prácticas oficiales? (Selecciona DOS)",
            "options": [
                "A) Utilizar la cuenta de usuario Root únicamente para tareas iniciales de configuración y bloquear las claves de acceso de Root con MFA.",
                "B) Compartir un par único de Access Keys entre todos los servidores de un mismo ambiente para simplificar la rotación de claves.",
                "C) Crear Access Keys de larga duración para aplicaciones que se ejecuten en Amazon EC2.",
                "D) Utilizar IAM Roles temporales en lugar de usuarios IAM estáticos para cargas de trabajo, servicios y aplicaciones.",
                "E) Desactivar CloudTrail en regiones no utilizadas para reducir el consumo de almacenamiento en S3."
            ],
            "correctAnswers": [0, 3],
            "explanation": "Las mejores prácticas oficiales de AWS exigen proteger la cuenta Root con MFA y no utilizarla para tareas diarias, y utilizar credenciales temporales mediante IAM Roles en lugar de claves de acceso estáticas de larga duración."
        }
    ],

    2: [
        {
            "id": "d2-q1",
            "scenarioTag": "Dominio 1: Gobernanza & SCPs",
            "question": "Una corporación utiliza AWS Organizations con múltiples Unidades Organizativas (OUs). Un administrador adjunta una Service Control Policy (SCP) a la OU de 'Producción' que deniega explícitamente la acción 's3:DeleteBucket'. El usuario Root de una de las cuentas miembro dentro de la OU 'Producción' intenta eliminar un bucket S3. ¿Cuál será el resultado de esta operación?",
            "options": [
                "A) La operación será bloqueada, ya que las SCPs establecen los límites máximos de permisos (guardrails) y aplican a todos los usuarios y roles de las cuentas miembro, incluyendo al usuario Root.",
                "B) La operación se ejecutará exitosamente porque el usuario Root de una cuenta tiene privilegios absolutos e ignora las SCPs.",
                "C) La operación fallará únicamente si el bucket tiene activado S3 Object Lock en modo estricto (Compliance).",
                "D) La operación solicitará confirmación por SMS al administrador de la cuenta pagadora principal (Management Account)."
            ],
            "correctAnswer": 0,
            "explanation": "Las SCPs (Service Control Policies) definen las barreras máximas de permisos (guardrails) para las cuentas miembro de una Organización. Aplican sobre TODOS los usuarios y roles de las cuentas miembro, incluyendo explícitamente al usuario Root de la cuenta miembro. La única cuenta exenta de las SCPs es la cuenta de gestión (Management Account)."
        },
        {
            "id": "d2-q2",
            "scenarioTag": "Dominio 1: Soberanía de Datos & Restricción Regional",
            "question": "Una entidad financiera debe cumplir con regulaciones que exigen que ninguna carga de trabajo ni dato corporativo resida fuera de la Unión Europea (regiones de Fráncfort e Irlanda). ¿Cuál es la forma MÁS eficiente y centralizada de garantizar que ninguna cuenta de la organización pueda aprovisionar infraestructura en regiones no autorizadas?",
            "options": [
                "A) Configurar alarmas de AWS CloudWatch en cada una de las 50 cuentas que alerten si se detecta una instancia fuera de Europa.",
                "B) Crear una función AWS Lambda en la cuenta pagadora que analice periódicamente los recursos y termine instancias no europeas.",
                "C) Modificar manualmente cada Security Group de cada VPC en todas las regiones para rechazar conexiones salientes.",
                "D) Aplicar una Service Control Policy (SCP) en la raíz de la Organización con un bloque 'Deny' que utilice la condición 'aws:RequestedRegion' para bloquear cualquier acción si la región no coincide con eu-central-1 o eu-west-1."
            ],
            "correctAnswer": 3,
            "explanation": "Una Service Control Policy (SCP) aplicada a nivel de raíz con la condición StringNotEquals sobre aws:RequestedRegion (excluyendo servicios globales como IAM, Route 53, CloudFront y Support) es la práctica recomendada de AWS para restringir de forma preventiva e infranqueable el uso de regiones no autorizadas en toda la organización."
        },
        {
            "id": "d2-q3",
            "scenarioTag": "Dominio 1: Jerarquía y Herencia de SCPs",
            "question": "En una estructura de AWS Organizations, la OU raíz tiene adjunta la política FullAWSAccess por defecto. Se crea una OU hija 'Workloads' donde se desvincula FullAWSAccess y se adjunta una SCP que permite únicamente acciones de 'ec2:*'. Dentro de 'Workloads' se coloca la cuenta 'App1', a la cual se le adjunta una SCP que permite 's3:*'. ¿A qué servicios tiene acceso efectivo la cuenta 'App1'?",
            "options": [
                "A) Tanto a 'ec2:*' como a 's3:*', porque las SCPs son acumulativas entre OUs padre e hijas.",
                "B) A ningún servicio (acceso denegado a todo), porque para que un servicio esté permitido debe haber una concesión explícita en cada nivel de la jerarquía desde la raíz hasta la cuenta.",
                "C) Exclusivamente a 's3:*', porque las políticas de nivel de cuenta tienen precedencia sobre las OUs.",
                "D) A todos los servicios de AWS gracias a los permisos locales de IAM en la cuenta."
            ],
            "correctAnswer": 1,
            "explanation": "Para que un permiso sea concedido a una cuenta en AWS Organizations, debe existir una cadena continua de 'Allow' en cada nivel jerárquico desde la raíz (Root) hasta la cuenta miembro. Dado que la OU 'Workloads' no permite 's3:*', 's3' queda bloqueado. Y dado que la cuenta 'App1' no permite 'ec2:*', 'ec2' también queda bloqueado. Por tanto, no tiene acceso a nada."
        },
        {
            "id": "d2-q4",
            "scenarioTag": "Dominio 1: Facturación Consolidada & Reserved Instances",
            "question": "Una corporación utiliza Facturación Consolidada (Consolidated Billing) en AWS Organizations con 20 cuentas miembro. La Cuenta A adquiere Reserved Instances (RIs) para instancias c5.xlarge en us-east-1a, pero durante un fin de semana sus instancias son apagadas. La Cuenta B tiene instancias c5.xlarge ejecutándose en us-east-1a en ese mismo horario. ¿Cómo se aplica el descuento de las RIs por defecto?",
            "options": [
                "A) El beneficio se pierde porque las RIs son estrictamente intransferibles entre cuentas de AWS.",
                "B) La cuenta pagadora aplica automáticamente el descuento de la RI no utilizada a las instancias elegibles de la Cuenta B dentro de la familia de facturación consolidada.",
                "C) Se requiere abrir un ticket de soporte con AWS Billing para transferir las horas consumidas.",
                "D) La Cuenta B debe asumir un rol de IAM en la Cuenta A para compartir el beneficio fiscal."
            ],
            "correctAnswer": 1,
            "explanation": "Por defecto, AWS Organizations comparte el beneficio de ahorro de Reserved Instances y Savings Plans entre todas las cuentas de la familia de facturación consolidada, siempre que las instancias coincidan con los atributos (tipo, familia, región/AZ) y el uso compartido de descuentos esté habilitado."
        },
        {
            "id": "d2-q5",
            "scenarioTag": "Dominio 1: Compartir Recursos con AWS RAM",
            "question": "Una empresa con múltiples cuentas en AWS Organizations desea que varias cuentas miembro puedan desplegar sus instancias EC2 y contenedores dentro de subredes privadas pertenecientes a una VPC compartida y administrada por el equipo de redes central, sin duplicar VPCs ni crear conexiones de peering complejas. ¿Qué servicio permite compartir estas subredes de forma segura?",
            "options": [
                "A) AWS Resource Access Manager (AWS RAM).",
                "B) AWS Secrets Manager con replicación multi-cuenta.",
                "C) AWS DataSync con conectores VPC.",
                "D) AWS Direct Connect Gateway."
            ],
            "correctAnswer": 0,
            "explanation": "AWS Resource Access Manager (RAM) permite compartir recursos como subredes de VPC, Transit Gateways, licencias de software y reglas de Route 53 Resolver entre cuentas de AWS dentro de una misma organización, permitiendo el modelo de VPC Compartida (Shared VPC)."
        },
        {
            "id": "d2-q6",
            "multi": True,
            "scenarioTag": "Dominio 1: AWS Control Tower & Landing Zones",
            "question": "Un Solutions Architect está diseñando una arquitectura empresarial multi-cuenta para una compañía que necesita automatizar el aprovisionamiento de cuentas con guardrails de seguridad obligatorios, auditoría centralizada y cumplimiento normativo. ¿Cuáles de las siguientes opciones describen capacidades proporcionadas nativamente por AWS Control Tower? (Selecciona DOS)",
            "options": [
                "A) Provisión automática de cuentas de usuario de Active Directory on-premises.",
                "B) Account Factory para desplegar nuevas cuentas estandarizadas mediante AWS Service Catalog.",
                "C) Guardrails preventivos implementados como SCPs y guardrails detectivos implementados como reglas de AWS Config.",
                "D) Reemplazo completo de Amazon CloudWatch por herramientas de terceros en el edge.",
                "E) Eliminación automática de todos los datos en reposo que superen 90 días."
            ],
            "correctAnswers": [1, 2],
            "explanation": "AWS Control Tower implementa una Landing Zone bien estructurada que incluye Account Factory (basado en AWS Service Catalog) para crear nuevas cuentas con configuraciones base, y Guardrails tanto preventivos (a través de SCPs) como detectivos (a través de AWS Config)."
        },
        {
            "id": "d2-q7",
            "scenarioTag": "Dominio 1: Auditoría Centralizada con CloudTrail",
            "question": "El oficial de seguridad exige que todos los eventos de gestión y de datos de todas las cuentas de la organización se recopilen en un único bucket S3 seguro ubicado en una cuenta dedicada de 'Log Archive'. Ningún administrador de las cuentas miembro debe tener la capacidad de desactivar el registro o eliminar logs. ¿Qué configuración debe aplicarse?",
            "options": [
                "A) Crear un CloudTrail local en cada cuenta y configurar scripts diarios en bash para transferir logs vía SFTP.",
                "B) Instalar CloudWatch Agent en cada instancia EC2 para reenviar llamadas de API a Kinesis.",
                "C) Crear un Organization Trail en la cuenta de gestión (Management Account) de AWS Organizations con almacenamiento en el bucket S3 centralizado de la cuenta de auditoría.",
                "D) Habilitar S3 Object Lock en la cuenta de cada usuario sin utilizar AWS Organizations."
            ],
            "correctAnswer": 2,
            "explanation": "Un Organization Trail creado desde la cuenta de gestión registra de forma automática y obligatoria la actividad de todas las cuentas miembro existentes y futuras en la organización. Los administradores de las cuentas miembro no pueden modificar ni eliminar este rastro."
        },
        {
            "id": "d2-q8",
            "scenarioTag": "Dominio 1: Tag Policies en AWS Organizations",
            "question": "El departamento de finanzas de una empresa requiere que cada recurso aprovisionado en cualquier cuenta miembro posea obligatoriamente la etiqueta 'CostCenter' con un formato y capitalización estricto (ej. 'CostCenter=FIN-100'). ¿Qué funcionalidad de AWS Organizations permite auditar y forzar el cumplimiento del esquema de etiquetas?",
            "options": [
                "A) AWS Billing Conductor.",
                "B) AWS Budgets Reports.",
                "C) Tag Policies (Políticas de Etiquetas) en AWS Organizations combinadas con reglas de AWS Config.",
                "D) Amazon Inspector con plantillas personalizadas de metadatos."
            ],
            "correctAnswer": 2,
            "explanation": "Las Tag Policies en AWS Organizations permiten definir reglas sobre las claves y valores permitidos para las etiquetas de los recursos en todas las cuentas miembro, ayudando a estandarizar y auditar la asignación de costos y la gobernanza."
        },
        {
            "id": "d2-q9",
            "scenarioTag": "Dominio 1: Cuentas de Auditoría & Acceso a SCPs",
            "question": "Un administrador de seguridad en una cuenta miembro de AWS Organizations intenta modificar una Service Control Policy (SCP) para permitir temporalmente el servicio Amazon SageMaker que estaba bloqueado. La consola de AWS muestra un mensaje de acceso denegado. ¿Por qué ocurre esto?",
            "options": [
                "A) Porque las SCPs sólo pueden modificarse durante ventanas de mantenimiento programadas.",
                "B) Porque las SCPs se administran y aplican únicamente desde la cuenta de gestión (Management Account) o una cuenta administradora delegada.",
                "C) Porque SageMaker no es compatible con el uso de Service Control Policies.",
                "D) Porque el usuario IAM de la cuenta miembro no pertenece al grupo Administrators de Windows."
            ],
            "correctAnswer": 1,
            "explanation": "Las Service Control Policies forman parte de la gobernanza global de AWS Organizations y solo pueden crearse, modificarse o adjuntarse desde la cuenta de gestión (Management Account) de la organización o desde una cuenta con administración delegada para Organizations."
        },
        {
            "id": "d2-q10",
            "multi": True,
            "scenarioTag": "Dominio 1: Principios Multi-Cuenta",
            "question": "Al diseñar una estructura multi-cuenta siguiendo las mejores prácticas del AWS Well-Architected Framework, ¿cuáles de las siguientes cuentas especializadas se recomienda separar de las cuentas de cargas de trabajo de producción? (Selecciona DOS)",
            "options": [
                "A) Una cuenta de archivo de registros (Log Archive Account) dedicada a consolidar logs inmutables.",
                "B) Una cuenta compartida pública donde todos los desarrolladores tengan privilegios de root para pruebas.",
                "C) Una cuenta de herramientas de seguridad (Security Tooling Account) para servicios como GuardDuty y Security Hub administradores.",
                "D) Una cuenta dedicada para alojar únicamente un servidor DHCP corporativo para toda la nube.",
                "E) Una cuenta separada para cada microservicio por cada segundo de ejecución."
            ],
            "correctAnswers": [0, 2],
            "explanation": "El modelo de Landing Zone de AWS recomienda crear cuentas de servicios centrales (Core Accounts), incluyendo una Log Archive Account (para almacenamiento central e inmutable de logs) y una Security Tooling Account (para administración delegada de GuardDuty, Inspector, Security Hub)."
        }
    ],

    3: [
        {
            "id": "d3-q1",
            "scenarioTag": "Dominio 1: Cifrado & AWS KMS",
            "question": "Una aplicación de procesamiento de pagos debe almacenar datos sensibles en Amazon S3. Por normativas bancarias, las claves de cifrado deben rotarse anualmente de forma automática, el cliente debe ser capaz de revocar el acceso a la clave de inmediato si se detecta un incidente de seguridad, y cada evento de cifrado/descifrado debe quedar registrado en AWS CloudTrail con el contexto criptográfico (Encryption Context). ¿Qué estrategia de cifrado satisface estos requisitos?",
            "options": [
                "A) Cifrado del lado del cliente utilizando una clave secreta simétrica codificada en base64 guardada en un repositorio Git privado.",
                "B) Server-Side Encryption con Amazon S3-Managed Keys (SSE-S3).",
                "C) Server-Side Encryption con Claves Proporcionadas por el Cliente (SSE-C).",
                "D) Server-Side Encryption con AWS KMS Customer Managed Keys (SSE-KMS con CMK)."
            ],
            "correctAnswer": 3,
            "explanation": "SSE-KMS utilizando Customer Managed Keys (CMKs) permite rotación automática anual, control granular de políticas de claves (pudiendo deshabilitar la clave inmediatamente ante incidentes), auditoría exhaustiva en AWS CloudTrail y el uso de Encryption Context para integridad criptográfica."
        },
        {
            "id": "d3-q2",
            "scenarioTag": "Dominio 1: Rotación Automática de Secretos",
            "question": "Una aplicación alojada en Amazon ECS interactúa con una base de datos Amazon RDS PostgreSQL. La política de seguridad corporativa exige que la contraseña de la base de datos se rote automáticamente cada 30 días sin intervención humana y sin generar tiempo de inactividad para los contenedores en ejecución. ¿Cuál es la solución que requiere la MENOR sobrecarga operativa?",
            "options": [
                "A) Almacenar las credenciales en AWS Systems Manager Parameter Store como tipo StringList y rotarlas mediante un script bash ejecutado en cron.",
                "B) Guardar las credenciales en AWS Secrets Manager, habilitar la rotación automática con la función Lambda predefinida para RDS PostgreSQL, y hacer que la aplicación consuma el secreto mediante el SDK de AWS.",
                "C) Guardar las credenciales en un archivo cifrado con KMS dentro de un volumen EBS compartido y montar el volumen en los contenedores.",
                "D) Modificar manualmente la contraseña en la consola de RDS cada 30 días y reiniciar todas las tareas ECS."
            ],
            "correctAnswer": 1,
            "explanation": "AWS Secrets Manager ofrece integración nativa con Amazon RDS para la rotación automática de credenciales a través de plantillas de AWS Lambda preconfiguradas. Secrets Manager actualiza las credenciales tanto en RDS como en el almacén de secretos sin interrumpir la aplicación."
        },
        {
            "id": "d3-q3",
            "scenarioTag": "Dominio 1: Cifrado de Sobres (Envelope Encryption)",
            "question": "En el contexto de AWS Key Management Service (AWS KMS), ¿cuál es el propósito fundamental del cifrado de sobres (Envelope Encryption)?",
            "options": [
                "A) Proteger los datos enviando el archivo completo a través de la API de KMS para que KMS lo cifre directamente en sus servidores HSM.",
                "B) Combinar algoritmos de compresión ZIP con algoritmos de hashing MD5 para reducir el tamaño del payload cifrado.",
                "C) Proteger los datos cifrándolos localmente con una Data Key (clave de datos), y a su vez cifrar la Data Key utilizando una KMS Key (clave raíz de KMS).",
                "D) Generar certificados SSL/TLS públicos validados por correo electrónico para balanceadores de carga."
            ],
            "correctAnswer": 2,
            "explanation": "Envelope Encryption cifra los datos con una Data Key (clave de datos en texto plano generada por KMS) y luego cifra la Data Key con una KMS Key (clave maestra). Esto permite cifrar grandes volúmenes de datos localmente a alta velocidad sin tener que enviar datos pesados a través de la red hacia KMS (cuya API tiene un límite de 4 KB por operación de cifrado directo)."
        },
        {
            "id": "d3-q4",
            "scenarioTag": "Dominio 1: Secrets Manager vs SSM Parameter Store",
            "question": "Un equipo de desarrollo necesita almacenar variables de configuración no sensibles y cadenas de conexión de desarrollo. El equipo desea mantener los costos al mínimo absoluto y no requiere rotación automática para estos parámetros de texto. ¿Qué servicio de AWS es la opción MÁS costo-efectiva para este caso de uso?",
            "options": [
                "A) AWS Secrets Manager con rotación deshabilitada.",
                "B) AWS KMS con claves asimétricas dedicadas por variable.",
                "C) AWS Systems Manager Parameter Store (Standard Parameters).",
                "D) Amazon DynamoDB con tablas On-Demand cifradas con claves personalizadas."
            ],
            "correctAnswer": 2,
            "explanation": "AWS Systems Manager Parameter Store en su nivel Estándar (Standard Parameters) no tiene costo adicional por almacenamiento de parámetros ni por llamadas a la API (hasta ciertos límites), a diferencia de AWS Secrets Manager que cobra una tarifa mensual por secreto más llamadas a la API."
        },
        {
            "id": "d3-q5",
            "multi": True,
            "scenarioTag": "Dominio 1: Permisos Cross-Account en AWS KMS",
            "question": "Un Solutions Architect debe conceder acceso a un rol IAM de otra cuenta de AWS (Cuenta B) para que pueda descifrar un bucket S3 cifrado con KMS en la Cuenta A. ¿Qué DOS configuraciones son estrictamente necesarias para permitir el descifrado cross-account con KMS? (Selecciona DOS)",
            "options": [
                "A) La política de clave (Key Policy) en la Cuenta A debe permitir la acción kms:Decrypt a la Cuenta B.",
                "B) La política de identidad del rol IAM en la Cuenta B debe otorgar el permiso kms:Decrypt sobre el ARN de la clave en la Cuenta A.",
                "C) La clave KMS debe configurarse como pública en la consola de IAM.",
                "D) Se debe deshabilitar el cifrado del bucket S3 en la Cuenta A.",
                "E) La Cuenta B debe pagar la factura de la cuenta A mediante Consolidated Billing."
            ],
            "correctAnswers": [0, 1],
            "explanation": "En operaciones cross-account con KMS, la Key Policy en la cuenta de la clave debe delegar explícitamente el uso a la cuenta externa (o al rol externo), y la política de identidad del rol IAM en la cuenta externa debe otorgar permisos para usar dicha clave."
        },
        {
            "id": "d3-q6",
            "scenarioTag": "Dominio 1: Multi-Region Keys en KMS",
            "question": "Una aplicación financiera multi-región activa-activa opera simultáneamente en us-east-1 y eu-west-1. Los registros de transacciones se cifran en una región y deben poder descifrarse en la otra región con latencia ultrabaja sin realizar llamadas de red interregionales hacia KMS. ¿Qué característica de AWS KMS debe utilizar el arquitecto?",
            "options": [
                "A) Claves gestionadas por AWS (AWS Managed Keys).",
                "B) Multi-Region Keys (Claves Multi-Región de AWS KMS) con réplicas primarias y secundarias.",
                "C) Almacenes de claves externos basados en CloudHSM físico en cada oficina corporativa.",
                "D) Certificados SSL mutuos importados en AWS Certificate Manager."
            ],
            "correctAnswer": 1,
            "explanation": "Las Multi-Region Keys de AWS KMS son un conjunto de claves primarias y réplicas en diferentes regiones que comparten el mismo material de clave (Key ID e identificador criptográfico idéntico). Permiten cifrar datos en una región y descifrarlos localmente en otra sin latencia interregional."
        },
        {
            "id": "d3-q7",
            "scenarioTag": "Dominio 1: Key Policies vs Grants",
            "question": "Una instancia EC2 temporal dentro de un flujo de trabajo de procesamiento de datos por lotes requiere acceso temporal para descifrar un volumen de datos con KMS. El equipo de seguridad prefiere otorgar permisos programáticos y de corta duración que puedan revocarse automáticamente sin alterar la Key Policy principal. ¿Qué mecanismo de KMS es el adecuado?",
            "options": [
                "A) IAM Managed Policies asignadas a la cuenta root.",
                "B) Modificar la política de bucket de S3 agregando el ARN de la instancia.",
                "C) Crear una Concesión de KMS (KMS Grant) vinculada a la clave para el principal requerido.",
                "D) Desactivar la clave KMS durante la noche."
            ],
            "correctAnswer": 2,
            "explanation": "Las KMS Grants (concesiones) son mecanismos flexibles y programáticos que permiten delegar permisos de uso de una clave KMS a un principal de manera temporal y granular, ideales para servicios de AWS o procesos transitorios sin necesidad de editar permanentemente la Key Policy."
        },
        {
            "id": "d3-q8",
            "scenarioTag": "Dominio 1: Rotación de Claves Administradas vs Personalizadas",
            "question": "Una empresa utiliza claves KMS administradas por AWS (AWS Managed Keys con el alias aws/s3). El oficial de seguridad solicita cambiar el período de rotación automática de estas claves de 1 año a 90 días. ¿Cómo debe proceder el arquitecto?",
            "options": [
                "A) Modificar el parámetro KeyRotationPeriodInDays a 90 usando el AWS CLI.",
                "B) No es posible modificar la rotación de AWS Managed Keys; para tener control sobre la rotación o usar claves con periodicidad personalizada, se debe crear una Customer Managed Key (CMK).",
                "C) Crear una regla de EventBridge que llame a kms:RotateKey cada 90 días.",
                "D) Abrir un caso con AWS Support para solicitar la reconfiguración física de los HSMs compartidos."
            ],
            "correctAnswer": 1,
            "explanation": "Las AWS Managed Keys rotan automáticamente cada año (o según lo determine AWS) y los clientes no pueden modificar su configuración ni sus políticas. Para controlar el ciclo de vida, rotación personalizada o políticas de clave, se deben utilizar Customer Managed Keys (CMK)."
        },
        {
            "id": "d3-q9",
            "scenarioTag": "Dominio 1: Encryption Context en KMS",
            "question": "¿Cuál es la función del Contexto de Cifrado (Encryption Context) en las operaciones de AWS KMS con claves simétricas?",
            "options": [
                "A) Un par clave-valor de datos autenticados adicionales (AAD) que no se cifra, pero que debe coincidir exactamente al momento de descifrar para evitar manipulaciones.",
                "B) Un archivo de configuración que especifica la dirección IP de origen permitida para la conexión.",
                "C) Una contraseña de administrador requerida para activar la clave de KMS antes de su uso.",
                "D) Un método para cifrar datos que excedan el límite de 4 GB por archivo en S3."
            ],
            "correctAnswer": 0,
            "explanation": "El Encryption Context actúa como Additional Authenticated Data (AAD). Se asocia criptográficamente al texto cifrado, lo que significa que el descifrado fallará si el contexto provisto no coincide idénticamente con el usado al cifrar, además de quedar registrado en texto claro en AWS CloudTrail para fines de auditoría."
        },
        {
            "id": "d3-q10",
            "multi": True,
            "scenarioTag": "Dominio 1: Cifrado en Reposo en EBS y RDS",
            "question": "Un Solutions Architect debe garantizar que todos los volúmenes Amazon EBS y todas las instancias Amazon RDS estén cifrados en reposo en una región de AWS de acuerdo con la política de seguridad corporativa. ¿Cuáles de las siguientes acciones permiten lograr este objetivo? (Selecciona DOS)",
            "options": [
                "A) Habilitar la opción 'Always encrypt new EBS volumes' (cifrado por defecto de EBS) a nivel de la región en la cuenta.",
                "B) Habilitar el cifrado en una instancia de RDS existente directamente modificando sus propiedades sin tiempo de inactividad.",
                "C) Para instancias RDS no cifradas existentes, crear una instantánea (snapshot), copiar la instantánea habilitando el cifrado con una clave KMS y restaurar una nueva instancia a partir de la copia cifrada.",
                "D) Desactivar el uso de SSL en las conexiones cliente a la base de datos.",
                "E) Convertir los volúmenes EBS en instancias EC2 Spot."
            ],
            "correctAnswers": [0, 2],
            "explanation": "El cifrado por defecto de EBS asegura que todo volumen nuevo creado o restaurado en la región se cifre automáticamente. En RDS, una base de datos no cifrada no puede cifrarse in-place; el procedimiento estándar es tomar un snapshot, copiar el snapshot cifrándolo con KMS y restaurar la nueva BD a partir del snapshot cifrado."
        }
    ],

    4: [
        {
            "id": "d4-q1",
            "scenarioTag": "Dominio 1: Seguridad de Red & NACLs vs SGs",
            "question": "Un administrador de seguridad observa un ataque de denegación de servicio distribuido (DDoS) proveniente de un conjunto específico de 15 direcciones IP públicas que intentan inundar una aplicación web alojada en instancias EC2. El equipo necesita bloquear de inmediato el tráfico proveniente de esas IPs antes de que alcance las instancias. ¿Qué control de red permite implementar esta restricción?",
            "options": [
                "A) Un Security Group con reglas de salida modificadas.",
                "B) Una Network Access Control List (Network ACL) asociada a la subred, añadiendo reglas de tipo 'Deny' con números de regla inferiores a las reglas de permitir.",
                "C) Un Security Group en las instancias EC2 agregando reglas de tipo 'Deny' para esas IPs.",
                "D) Una tabla de rutas de la VPC apuntando las 15 IPs a una interfaz virtual secundaria."
            ],
            "correctAnswer": 1,
            "explanation": "Las Network ACLs (NACLs) operan a nivel de subred, son stateless y soportan tanto reglas de ALLOW como de DENY explícitas procesadas en orden numérico ascendente. Los Security Groups son stateful y NO soportan reglas de Deny (todo lo no explícitamente permitido se deniega implícitamente)."
        },
        {
            "id": "d4-q2",
            "scenarioTag": "Dominio 1: Conectividad Saliente Segura (NAT Gateway)",
            "question": "Un grupo de instancias EC2 situadas en subnets privadas debe descargar parches de seguridad y paquetes de software desde repositorios en Internet público. La arquitectura prohíbe terminantemente que estas instancias reciban conexiones entrantes iniciadas desde Internet. Además, la solución debe ser altamente disponible, autogestionada y escalar automáticamente sin mantenimiento manual. ¿Qué componente debe implementarse?",
            "options": [
                "A) Un Internet Gateway adjunto directamente a la tabla de rutas de las subnets privadas.",
                "B) Un NAT Instance desplegado en una sola subred privada con scripts de monitoreo keepalived.",
                "C) Un AWS NAT Gateway desplegado en una subred pública con una Elastic IP, y una ruta '0.0.0.0/0' en la tabla de rutas de la subred privada apuntando a dicho NAT Gateway.",
                "D) Un Application Load Balancer interno configurado con balanceo inverso."
            ],
            "correctAnswer": 2,
            "explanation": "AWS NAT Gateway es un servicio gestionado de alta disponibilidad que se ubica en una subred pública (con Elastic IP) y permite que las instancias en subredes privadas inicien conexiones salientes hacia Internet (IPv4) mientras bloquea cualquier tráfico entrante iniciado desde Internet."
        },
        {
            "id": "d4-q3",
            "scenarioTag": "Dominio 2: Alta Disponibilidad en VPC",
            "question": "Una empresa diseña una arquitectura altamente disponible en una región con 3 Availability Zones (AZ-a, AZ-b y AZ-c). Las instancias residen en subnets privadas en las tres zonas y consumen APIs externas continuamente. Para tolerar la falla total de una Availability Zone sin perder conectividad a Internet en las otras dos, ¿cómo debe desplegarse el servicio NAT?",
            "options": [
                "A) Desplegar un único NAT Gateway en AZ-a y enrutar las subnets privadas de las tres AZs hacia él.",
                "B) Desplegar un NAT Gateway en una subred pública en cada una de las 3 Availability Zones (AZ-a, AZ-b y AZ-c), y configurar la tabla de rutas de cada subred privada para apuntar al NAT Gateway de su respectiva AZ.",
                "C) Configurar un Classic Load Balancer con instancias NAT en modo balanceo entre zonas.",
                "D) Desplegar un Internet Gateway independiente por cada zona de disponibilidad."
            ],
            "correctAnswer": 1,
            "explanation": "Los NAT Gateways son redundantes dentro de una misma Availability Zone, pero no entre zonas de disponibilidad. Para lograr resiliencia multi-AZ frente a caídas completas de un centro de datos, se debe desplegar un NAT Gateway en cada AZ y hacer que las subredes privadas enruten a su NAT Gateway local."
        },
        {
            "id": "d4-q4",
            "scenarioTag": "Dominio 1: Naturaleza Stateful vs Stateless",
            "question": "Un administrador web configura un Security Group para permitir tráfico entrante HTTP (puerto 80) desde '0.0.0.0/0'. Sin embargo, en la lista de reglas salientes (outbound rules) del Security Group elimina todas las reglas existentes (sin reglas salientes). Cuando un cliente envía una petición HTTP al servidor web, ¿qué ocurre con la respuesta?",
            "options": [
                "A) El cliente no recibe respuesta porque no hay reglas salientes que permitan el puerto 80.",
                "B) La respuesta es bloqueada por la tabla de rutas de la VPC.",
                "C) El cliente no recibe respuesta porque los puertos efímeros salientes (1024-65535) están bloqueados.",
                "D) El cliente recibe la respuesta normalmente, porque los Security Groups son 'stateful' y el tráfico de respuesta permitido entrante se autoriza automáticamente en la salida."
            ],
            "correctAnswer": 3,
            "explanation": "Los Security Groups son stateful: si una solicitud entrante es aprobada por una regla de entrada (inbound rule), el tráfico de retorno correspondiente se permite automáticamente hacia afuera, independientemente de las reglas salientes (outbound rules)."
        },
        {
            "id": "d4-q5",
            "scenarioTag": "Dominio 1: Puertos Efímeros en Network ACLs",
            "question": "Se coloca una Network ACL personalizada en una subred que aloja servidores web. La regla de entrada 100 permite el puerto 80 TCP desde 0.0.0.0/0. Sin embargo, los clientes reportan tiempos de espera agotados (time-out) y no pueden cargar la página. ¿Qué regla saliente (outbound) falta agregar en la Network ACL?",
            "options": [
                "A) Permitir tráfico saliente al puerto 80 TCP hacia 0.0.0.0/0.",
                "B) Permitir tráfico saliente hacia los puertos efímeros (TCP 1024-65535) hacia 0.0.0.0/0 para el retorno de la conexión de los clientes.",
                "C) Permitir tráfico entrante en el puerto 443 HTTPS.",
                "D) Añadir una regla que permita tráfico ICMP saliente para responder a pings."
            ],
            "correctAnswer": 1,
            "explanation": "Las Network ACLs son stateless (sin estado): el tráfico de retorno no se rastrea automáticamente. Cuando un cliente se conecta al puerto 80, utiliza un puerto efímero asignado por su sistema operativo (puertos TCP 1024 a 65535). Por ello, la regla de salida de la NACL debe permitir explícitamente estos puertos efímeros."
        },
        {
            "id": "d4-q6",
            "scenarioTag": "Dominio 1: VPC Peering & No Transitividad",
            "question": "Una compañía cuenta con tres VPCs: VPC A, VPC B y VPC C. Existe una conexión de VPC Peering activa entre VPC A y VPC B, y otra conexión entre VPC B y VPC C. Un servidor en VPC A intenta comunicarse con una base de datos en VPC C enviando paquetes a través de VPC B. ¿Cuál será el resultado?",
            "options": [
                "A) El tráfico fallará porque las conexiones de VPC Peering NO soportan enrutamiento transitivo (no son transitivas).",
                "B) El tráfico funcionará exitosamente siempre que VPC B tenga un NAT Gateway habilitado.",
                "C) El tráfico funcionará si se habilita la opción 'Allow DNS resolution' en ambas conexiones de peering.",
                "D) El tráfico se enrutará automáticamente a través de la cuenta de AWS Organizations."
            ],
            "correctAnswer": 0,
            "explanation": "VPC Peering no soporta enrutamiento transitivo. El tráfico no puede pasar a través de una VPC intermedia para llegar a otra (VPC A -> VPC B -> VPC C). Para conectar múltiples VPCs de forma transitiva o en estrella, se debe usar AWS Transit Gateway o crear un VPC Peering directo entre VPC A y VPC C."
        },
        {
            "id": "d4-q7",
            "multi": True,
            "scenarioTag": "Dominio 1: VPC Endpoints (Gateway vs Interface)",
            "question": "Un Solutions Architect debe permitir que instancias EC2 situadas en subredes completamente privadas accedan a Amazon S3 y a Amazon DynamoDB sin enviar tráfico a través de Internet ni pagar cargos adicionales por procesamiento de datos por gigabyte. ¿Cuáles de las siguientes opciones describen la solución óptima? (Selecciona DOS)",
            "options": [
                "A) Crear un VPC Gateway Endpoint para Amazon S3 y asociarlo a las tablas de rutas de las subredes privadas.",
                "B) Desplegar un NAT Gateway dedicado para S3 y DynamoDB.",
                "C) Crear un VPC Gateway Endpoint para Amazon DynamoDB y asociarlo a las tablas de rutas privadas.",
                "D) Crear un VPC Interface Endpoint (PrivateLink) pagando la tarifa por hora y por GB.",
                "E) Asignar direcciones IPv4 públicas a las instancias privadas mediante Elastic IPs."
            ],
            "correctAnswers": [0, 2],
            "explanation": "Los Gateway Endpoints están disponibles exclusivamente para Amazon S3 y Amazon DynamoDB. Se configuran como entradas en las tablas de rutas de la VPC y son completamente gratuitos (no tienen costo por hora ni por transferencia de datos procesada)."
        },
        {
            "id": "d4-q8",
            "scenarioTag": "Dominio 1: Egress-Only Internet Gateway",
            "question": "Una corporación migra sus cargas de trabajo a IPv6 en una VPC de AWS. Las instancias EC2 poseen direcciones IPv6 públicas globales asignadas y necesitan comunicarse con servidores en Internet para actualizaciones. Sin embargo, las políticas corporativas prohíben que clientes de Internet inicien conexiones directas hacia estas instancias. ¿Qué componente de VPC debe utilizarse?",
            "options": [
                "A) NAT Gateway en modo dual-stack.",
                "B) Egress-Only Internet Gateway (EIGW).",
                "C) Virtual Private Gateway (VGW) con túnel BGP.",
                "D) Customer Gateway con túnel GRE."
            ],
            "correctAnswer": 1,
            "explanation": "Un Egress-Only Internet Gateway es un componente con estado para IPv6 que permite el tráfico saliente desde las instancias de la VPC hacia Internet, al tiempo que bloquea cualquier tráfico entrante iniciado desde el exterior hacia esas instancias."
        },
        {
            "id": "d4-q9",
            "scenarioTag": "Dominio 1: Referencias Cruzadas en Security Groups",
            "question": "En una arquitectura de tres capas (Web, Aplicación, Base de Datos), ¿cuál es la mejor práctica de seguridad recomendada para configurar el Security Group de la capa de Base de Datos para que sólo acepte conexiones MySQL (puerto 3306) provenientes de la capa de Aplicación?",
            "options": [
                "A) Permitir el puerto 3306 entrante desde 0.0.0.0/0 con autenticación por contraseña.",
                "B) Permitir el puerto 3306 entrante especificando las direcciones IP privadas individuales de cada instancia de la capa de aplicación.",
                "C) Permitir el puerto 3306 entrante especificando el ID del Security Group de la capa de Aplicación (sg-app) como origen en la regla.",
                "D) Asignar una Network ACL que bloquee el puerto 22 a la subred de base de datos."
            ],
            "correctAnswer": 2,
            "explanation": "Hacer referencia al ID del Security Group de origen (Security Group Referencing / Chaining) es la mejor práctica fundamental en AWS. Permite que las instancias de la capa de aplicación se agreguen, eliminen o escalen automáticamente en Auto Scaling Groups sin tener que actualizar reglas de direcciones IP estáticas."
        },
        {
            "id": "d4-q10",
            "multi": True,
            "scenarioTag": "Dominio 1: VPC Flow Logs & Análisis de Red",
            "question": "Un equipo de operaciones necesita investigar intentos de intrusión y conexiones rechazadas en las interfaces de red elásticas (ENIs) de una VPC crítica. ¿Qué configuraciones de VPC Flow Logs son necesarias para registrar y analizar este tráfico? (Selecciona DOS)",
            "options": [
                "A) Publicar los VPC Flow Logs directamente en un grupo de registros de Amazon CloudWatch Logs o en un bucket de Amazon S3.",
                "B) Configurar los Flow Logs para capturar únicamente el contenido y payload de los paquetes HTTP.",
                "C) Configurar el filtro de tráfico para capturar eventos de tipo 'REJECT' o 'ALL'.",
                "D) Desactivar la tabla de rutas de la VPC para capturar los paquetes descartados.",
                "E) Reemplazar el Internet Gateway con un cable físico Direct Connect."
            ],
            "correctAnswers": [0, 2],
            "explanation": "VPC Flow Logs puede capturar información sobre el tráfico IP que entra y sale de las interfaces de red de la VPC (con filtros ALL, ACCEPT o REJECT) y enviarlo a Amazon CloudWatch Logs o Amazon S3 para análisis con CloudWatch Insights o Amazon Athena."
        }
    ],

    5: [
        {
            "id": "d5-q1",
            "scenarioTag": "Dominio 1: Seguridad Perimetral & AWS WAF",
            "question": "Una tienda de retail online sufre ataques periódicos de inyección SQL (SQL Injection) y Cross-Site Scripting (XSS) dirigidos a su API pública alojada detrás de un Application Load Balancer (ALB). Además, atacantes automatizados envían más de 5.000 peticiones por minuto desde direcciones IP aisladas para saturar el servicio de login. ¿Qué solución mitiga estas amenazas con la MENOR sobrecarga de administración?",
            "options": [
                "A) Instalar scripts personalizados de iptables y fail2ban en cada instancia EC2 detrás del balanceador.",
                "B) Configurar reglas de Network ACL a nivel de subred para bloquear los puertos TCP 80 y 443.",
                "C) Desplegar AWS WAF asociado al ALB, habilitando las reglas administradas de AWS (AWS Managed Rules for SQLi y Common Rule Set) junto con una regla basada en tasa (Rate-based Rule).",
                "D) Cambiar el Application Load Balancer por un Network Load Balancer con dirección IP estática."
            ],
            "correctAnswer": 2,
            "explanation": "AWS WAF opera en la Capa 7 (HTTP/HTTPS) y se integra nativamente con ALBs, Amazon CloudFront y API Gateway. Las reglas administradas de AWS protegen contra amenazas del OWASP Top 10 (SQLi, XSS), y las rate-based rules bloquean temporalmente IPs que excedan umbrales de solicitudes configurados."
        },
        {
            "id": "d5-q2",
            "scenarioTag": "Dominio 1: Detección Inteligente de Amenazas (GuardDuty)",
            "question": "El CISO de una institución bancaria exige un sistema de detección de anomalías y actividad no autorizada que identifique credenciales de AWS comprometidas, minería de criptomonedas no autorizada en instancias EC2 y llamadas inusuales a APIs, sin necesidad de instalar agentes de software en las instancias ni afectar el rendimiento de las aplicaciones. ¿Qué servicio cumple este requisito?",
            "options": [
                "A) AWS Shield Standard.",
                "B) Amazon Inspector.",
                "C) AWS WAF con reglas avanzadas.",
                "D) Amazon GuardDuty."
            ],
            "correctAnswer": 3,
            "explanation": "Amazon GuardDuty es un servicio de detección de amenazas inteligente que utiliza aprendizaje automático (ML) para analizar fuentes de datos fundamentales (AWS CloudTrail management/data events, VPC Flow Logs, DNS Query Logs, EKS audit logs) sin requerir agentes y sin impacto en el rendimiento de las instancias."
        },
        {
            "id": "d5-q3",
            "scenarioTag": "Dominio 1: Protección de Datos Sensibles (Amazon Macie)",
            "question": "Una empresa maneja grandes volúmenes de documentos escaneados almacenados en cientos de buckets S3. Por regulaciones de privacidad (GDPR e HIPAA), deben identificar de forma continua y automatizada qué buckets contienen información de identificación personal (PII) o datos de tarjetas de crédito sin cifrar. ¿Qué servicio está diseñado específicamente para esta tarea?",
            "options": [
                "A) AWS Artifact.",
                "B) Amazon Macie.",
                "C) AWS Secrets Manager.",
                "D) Amazon GuardDuty."
            ],
            "correctAnswer": 1,
            "explanation": "Amazon Macie es un servicio de seguridad y privacidad de datos que utiliza machine learning y coincidencia de patrones para descubrir, clasificar y proteger datos confidenciales (como PII, números de seguridad social, tarjetas de crédito) almacenados en Amazon S3."
        },
        {
            "id": "d5-q4",
            "scenarioTag": "Dominio 1: Mitigación Anti-DDoS (Shield Standard vs Advanced)",
            "question": "Una empresa aloja una aplicación de misión crítica en AWS con distribución en CloudFront, Route 53 y balanceadores ALB. La junta directiva exige protección especializada contra ataques volumétricos DDoS de capa 3, 4 y 7, acceso directo 24/7 al equipo de respuesta ante incidentes (SRT) de AWS y protección financiera contra picos imprevistos en la factura causados por ataques DDoS. ¿Qué servicio debe contratar?",
            "options": [
                "A) AWS Shield Advanced.",
                "B) AWS Shield Standard (incluido por defecto sin costo).",
                "C) Amazon CloudWatch DDoS Alarms.",
                "D) AWS Systems Manager Incident Manager."
            ],
            "correctAnswer": 0,
            "explanation": "AWS Shield Standard viene incluido de forma gratuita y protege contra ataques de red y transporte comunes (Capa 3 y 4). AWS Shield Advanced ofrece protección contra ataques DDoS avanzados de Capa 7, visibilidad detallada, soporte 24/7 del AWS Shield Response Team (SRT) y protección contra picos de costos por escalado inducido por DDoS."
        },
        {
            "id": "d5-q5",
            "scenarioTag": "Dominio 1: Inspección de Vulnerabilidades (Amazon Inspector)",
            "question": "Un equipo de DevOps requiere escanear automáticamente las imágenes de contenedor alojadas en Amazon Elastic Container Registry (ECR) y los paquetes de software instalados en instancias EC2 para detectar vulnerabilidades comunes y exposiciones (CVE). ¿Qué servicio proporciona este escaneo automatizado continuo?",
            "options": [
                "A) AWS Security Hub.",
                "B) Amazon Inspector.",
                "C) AWS Trusted Advisor.",
                "D) AWS CloudTrail Insights."
            ],
            "correctAnswer": 1,
            "explanation": "Amazon Inspector es un servicio automatizado de gestión de vulnerabilidades que escanea continuamente cargas de trabajo (instancias EC2, imágenes de contenedor en ECR y funciones AWS Lambda) en busca de vulnerabilidades de software (CVE) y exposición de red no deseada."
        },
        {
            "id": "d5-q6",
            "multi": True,
            "scenarioTag": "Dominio 1: AWS Network Firewall & Inspección Central",
            "question": "Una empresa debe cumplir con una directriz que exige inspeccionar todo el tráfico de salida (egress) hacia Internet desde 10 VPCs para realizar filtrado de dominios basado en nombres DNS calificados (FQDN) e inspección profunda de paquetes (Stateful Inspection con firmas Snort/Suricata). ¿Cuáles de las siguientes opciones describen la solución recomendada? (Selecciona DOS)",
            "options": [
                "A) Desplegar AWS Network Firewall en una VPC de inspección centralizada conectada mediante AWS Transit Gateway.",
                "B) Configurar reglas de Security Groups bloqueando nombres de dominio como '*.dominio.com'.",
                "C) Utilizar grupos de reglas de AWS Network Firewall con capacidades de filtrado de dominios y compatibilidad con reglas Snort.",
                "D) Instalar un NAT Instance con un archivo /etc/hosts estático en cada subred.",
                "E) Desactivar el Internet Gateway en todas las cuentas y prohibir el tráfico saliente."
            ],
            "correctAnswers": [0, 2],
            "explanation": "AWS Network Firewall es un servicio gestionado de firewall de red stateful que soporta filtrado de dominios (URLs y FQDNs) e inspección profunda de paquetes mediante firmas Snort/Suricata. Se despliega comúnmente en una VPC de inspección central conectada vía Transit Gateway."
        },
        {
            "id": "d5-q7",
            "scenarioTag": "Dominio 1: AWS Security Hub & Postura de Seguridad",
            "question": "¿Cuál es la función principal de AWS Security Hub en una arquitectura empresarial multi-cuenta?",
            "options": [
                "A) Actuar como un panel centralizado de gestión de postura de seguridad (CSPM) que agrega, organiza y prioriza alertas de GuardDuty, Inspector, Macie, Firewall Manager y ejecuta comprobaciones contra estándares como CIS AWS Foundations Benchmark.",
                "B) Generar certificados SSL/TLS públicos para distribuir en CloudFront.",
                "C) Almacenar contraseñas maestras de bases de datos relacionales.",
                "D) Bloquear ataques DDoS volumétricos en el edge mediante Anycast DNS."
            ],
            "correctAnswer": 0,
            "explanation": "AWS Security Hub es el servicio central de gestión de postura de seguridad y cumplimiento. Agrega hallazgos de múltiples servicios de AWS (GuardDuty, Inspector, Macie, IAM Access Analyzer) y productos de terceros en un formato estandarizado (ASFF) y verifica el cumplimiento contra marcos normativos (CIS, PCI-DSS)."
        },
        {
            "id": "d5-q8",
            "scenarioTag": "Dominio 1: Gestión Centralizada de Firewalls (Firewall Manager)",
            "question": "Una corporación posee más de 100 cuentas en AWS Organizations. El equipo de seguridad necesita desplegar y actualizar automáticamente un conjunto estándar de reglas de AWS WAF en todos los Application Load Balancers existentes y en cualquier balanceador nuevo que se cree en el futuro en cualquier cuenta. ¿Qué servicio permite automatizar esta política transversal?",
            "options": [
                "A) AWS Control Tower con plantillas CloudFormation manuales.",
                "B) AWS Firewall Manager.",
                "C) Amazon Route 53 Resolver DNS Firewall.",
                "D) AWS Systems Manager State Manager."
            ],
            "correctAnswer": 1,
            "explanation": "AWS Firewall Manager es un servicio de administración de seguridad que permite configurar y aplicar de forma centralizada reglas de AWS WAF, AWS Shield Advanced, grupos de seguridad de VPC y reglas de AWS Network Firewall en todas las cuentas y recursos de AWS Organizations."
        },
        {
            "id": "d5-q9",
            "scenarioTag": "Dominio 1: Filtrado de Salida con Route 53 Resolver DNS Firewall",
            "question": "Un actor malicioso logra instalar malware en una instancia EC2 privada. El malware intenta realizar exfiltración de datos mediante técnicas de tunelización DNS hacia dominios sospechosos externos. ¿Qué servicio permite inspeccionar y bloquear consultas DNS recursivas a nivel de VPC?",
            "options": [
                "A) AWS WAF asociado al Internet Gateway.",
                "B) Amazon Route 53 Resolver DNS Firewall.",
                "C) Security Groups con reglas salientes para el puerto 53 UDP.",
                "D) Amazon CloudFront con Origin Shield."
            ],
            "correctAnswer": 1,
            "explanation": "Route 53 Resolver DNS Firewall permite crear listas de denegación (domain blocklists) para inspeccionar y bloquear consultas DNS salientes realizadas desde las VPCs a través del resolver de Route 53 (.2 / AmazonProvidedDNS), mitigando exfiltración de datos y comunicación con servidores de comando y control (C&C)."
        },
        {
            "id": "d5-q10",
            "multi": True,
            "scenarioTag": "Dominio 1: Detección y Remediación Automática",
            "question": "Un Solutions Architect desea automatizar la remediación inmediata cuando Amazon GuardDuty genera un hallazgo de que una instancia EC2 está comunicándose con una red de comando y control (C&C). ¿Qué arquitectura sin servidor permite aislar la instancia automáticamente? (Selecciona DOS)",
            "options": [
                "A) Configurar Amazon EventBridge para capturar eventos de hallazgos de Amazon GuardDuty (GuardDuty Finding).",
                "B) Configurar una regla de EventBridge con un destino hacia una función AWS Lambda que modifique el Security Group de la instancia para aislarla en cuarentena.",
                "C) Programar un cron en la instancia EC2 para consultar la API de GuardDuty cada 24 horas.",
                "D) Enviar los logs de GuardDuty a un bucket S3 y esperar la revisión mensual de los ingenieros.",
                "E) Apagar el servidor físico del centro de datos on-premises."
            ],
            "correctAnswers": [0, 1],
            "explanation": "GuardDuty publica eventos de hallazgos directamente en Amazon EventBridge en tiempo real. Se puede crear una regla de EventBridge que invoque una función AWS Lambda para ejecutar acciones de remediación automática, como adjuntar un Security Group de cuarentena restrictivo o tomar una instantánea forense del volumen EBS."
        }
    ]
}
