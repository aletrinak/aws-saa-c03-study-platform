// AWS SAA-C03 Learning Portal Content Database
window.PORTAL_DATA = {
  "courseTitle": "AWS Certified Solutions Architect – Associate (SAA-C03)",
  "passingScorePercent": 72,
  "weeks": [
    {
      "id": "week-1",
      "title": "Semana 1: Seguridad, Identidad, Gobernanza y Redes Base",
      "domain": "Dominio 1: Design Secure Architectures (30%)",
      "days": [
        {
          "id": 1,
          "title": "Día 1: IAM, Roles y Control de Acceso Granular",
          "summary": "Aprende los fundamentos de identidades, evaluación de políticas JSON, roles temporales y principio de menor privilegio.",
          "readTime": "25 min lectura",
          "contentHtml": "\n            <h2>1. Fundamentos de IAM (Identity and Access Management)</h2>\n            <p>IAM es un servicio <strong>global</strong> que gestiona la autenticación y autorización en AWS sin costo adicional. Todo parte del <strong>principio de menor privilegio</strong>: otorgar únicamente los permisos necesarios para realizar la tarea requerida.</p>\n\n            <div class=\"alert-box tip\">\n              <strong>💡 Regla de Oro del Examen:</strong> El usuario <em>Root</em> tiene control irrestricto sobre la cuenta y nunca puede ser bloqueado por políticas IAM normales. Debe protegerse con <strong>MFA obligatorio</strong> y NUNCA debe usarse para operaciones cotidianas ni poseer Access Keys.\n            </div>\n\n            <h3>Componentes Centrales de IAM:</h3>\n            <ul>\n              <li><strong>Usuarios (IAM Users):</strong> Representan personas o aplicaciones específicas con credenciales permanentes (consola o Access Key ID / Secret Access Key).</li>\n              <li><strong>Grupos (User Groups):</strong> Colección de usuarios para asignación colectiva de políticas. <em>Importante: Un grupo no puede contener otros grupos ni ser referenciado como Principal.</em></li>\n              <li><strong>Roles (IAM Roles):</strong> Identidades temporales asumibles sin credenciales fijas. Usados por servicios (ej. EC2, Lambda), federación externa (SAML 2.0 / OIDC) y acceso entre cuentas (Cross-Account).</li>\n              <li><strong>Instance Profile:</strong> Contenedor que permite asociar un IAM Role a una instancia EC2 para que el SDK/CLI obtenga credenciales temporales rotativas vía el servicio de metadata (IMDSv2).</li>\n            </ul>\n\n            <h3>Estructura y Evaluación de Políticas JSON</h3>\n            <p>Una política IAM define <code>Effect</code> (Allow / Deny), <code>Action</code> (APIs de AWS), <code>Resource</code> (ARNs de recursos) y opcionalmente <code>Condition</code> (restricciones de IP, MFA, tags, etc.).</p>\n\n            <div class=\"code-card\">\n              <pre><code>{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\"s3:GetObject\", \"s3:ListBucket\"],\n      \"Resource\": [\n        \"arn:aws:s3:::empresa-reportes\",\n        \"arn:aws:s3:::empresa-reportes/*\"\n      ],\n      \"Condition\": {\n        \"Bool\": { \"aws:MultiFactorAuthPresent\": \"true\" }\n      }\n    }\n  ]\n}</code></pre>\n            </div>\n\n            <div class=\"alert-box warning\">\n              <strong>⚠️ Lógica de Evaluación de Permisos:</strong>\n              <ol>\n                <li>Deny Implícito por defecto (si nadie lo permite, está denegado).</li>\n                <li>Un Allow explícito concede el acceso.</li>\n                <li><strong>Un Deny explícito SIEMPRE gana</strong> y anula cualquier Allow, sin importar dónde esté definido.</li>\n              </ol>\n            </div>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 1: STS & Control de Acceso Condicional",
              "question": "Un oficial de seguridad exige que los administradores de sistemas solo puedan invocar APIs administrativas y asumir roles sensibles si cumplen DOS condiciones obligatorias: haber iniciado sesión con autenticación multifactor (MFA) y realizar las peticiones desde la red corporativa de la empresa (bloque CIDR 198.51.100.0/24). ¿Qué claves de condición en la política de IAM deben utilizarse para hacer cumplir estas restricciones? (Selecciona DOS)",
              "options": [
                "A) aws:MultiFactorAuthPresent evaluada como true.",
                "B) aws:PrincipalArn coincidente con el nombre de usuario.",
                "C) aws:SourceIp con el operador NotIpAddress para denegar tráfico fuera del CIDR corporativo.",
                "D) aws:TokenExpirationTime evaluada en menos de 1 hora.",
                "E) aws:UserAgent coincidente con AWS CLI v2."
              ],
              "correctAnswers": [
                0,
                2
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 1: Credenciales de Seguridad & Buenas Prácticas",
              "question": "Un auditor de cumplimiento solicita implementar las mejores prácticas de seguridad recomendadas por AWS para la gestión de credenciales y acceso a cuentas. ¿Cuáles de las siguientes recomendaciones representan mejores prácticas oficiales? (Selecciona DOS)",
              "options": [
                "A) Utilizar la cuenta de usuario Root únicamente para tareas iniciales de configuración y bloquear las claves de acceso de Root con MFA.",
                "B) Compartir un par único de Access Keys entre todos los servidores de un mismo ambiente para simplificar la rotación de claves.",
                "C) Crear Access Keys de larga duración para aplicaciones que se ejecuten en Amazon EC2.",
                "D) Utilizar IAM Roles temporales en lugar de usuarios IAM estáticos para cargas de trabajo, servicios y aplicaciones.",
                "E) Desactivar CloudTrail en regiones no utilizadas para reducir el consumo de almacenamiento en S3."
              ],
              "correctAnswers": [
                0,
                3
              ],
              "explanation": "Las mejores prácticas oficiales de AWS exigen proteger la cuenta Root con MFA y no utilizarla para tareas diarias, y utilizar credenciales temporales mediante IAM Roles en lugar de claves de acceso estáticas de larga duración."
            }
          ]
        },
        {
          "id": 2,
          "title": "Día 2: AWS Organizations y Service Control Policies (SCPs)",
          "summary": "Gestión multi-cuenta, límites de gobernanza con SCPs y aislamiento corporativo.",
          "readTime": "20 min lectura",
          "contentHtml": "\n            <h2>2. Gobernanza Multi-Cuenta con AWS Organizations</h2>\n            <p>AWS Organizations permite gobernar múltiples cuentas de AWS desde una única cuenta de administración (Management Account), habilitando facturación consolidada y control centralizado.</p>\n\n            <h3>Estructura Organizacional:</h3>\n            <ul>\n              <li><strong>Management Account:</strong> Cuenta raíz que crea y administra la organización. Paga la factura consolidada de todas las cuentas miembro.</li>\n              <li><strong>Member Accounts:</strong> Cuentas que forman parte de la organización.</li>\n              <li><strong>Organizational Units (OUs):</strong> Contenedores lógicos de cuentas (ej. OU Finanzas, OU Producción, OU Sandbox) para aplicar políticas en bloque.</li>\n            </ul>\n\n            <h3>Service Control Policies (SCPs)</h3>\n            <p>Las SCPs son <strong>barreras de contención (guardrails)</strong> que especifican los servicios y acciones máximas permitidas en las cuentas u OUs seleccionadas.</p>\n\n            <div class=\"alert-box tip\">\n              <strong>💡 Regla de Examen Vital:</strong> Las SCPs <strong>NUNCA conceden permisos</strong>; solo restringen. Aunque un usuario o rol en una cuenta miembro tenga <code>AdministratorAccess</code>, si la SCP bloquea un servicio (ej. <code>dynamodb:*</code>), nadie en esa cuenta podrá usar DynamoDB, <strong>¡ni siquiera el usuario Root de la cuenta miembro!</strong>\n            </div>\n\n            <div class=\"alert-box warning\">\n              <strong>⚠️ Excepción Crítica:</strong> Las SCPs <strong>NO afectan a la Management Account</strong>. Solo aplican a las cuentas miembro y OUs.\n            </div>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 1: AWS Control Tower & Landing Zones",
              "question": "Un Solutions Architect está diseñando una arquitectura empresarial multi-cuenta para una compañía que necesita automatizar el aprovisionamiento de cuentas con guardrails de seguridad obligatorios, auditoría centralizada y cumplimiento normativo. ¿Cuáles de las siguientes opciones describen capacidades proporcionadas nativamente por AWS Control Tower? (Selecciona DOS)",
              "options": [
                "A) Provisión automática de cuentas de usuario de Active Directory on-premises.",
                "B) Account Factory para desplegar nuevas cuentas estandarizadas mediante AWS Service Catalog.",
                "C) Guardrails preventivos implementados como SCPs y guardrails detectivos implementados como reglas de AWS Config.",
                "D) Reemplazo completo de Amazon CloudWatch por herramientas de terceros en el edge.",
                "E) Eliminación automática de todos los datos en reposo que superen 90 días."
              ],
              "correctAnswers": [
                1,
                2
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 1: Principios Multi-Cuenta",
              "question": "Al diseñar una estructura multi-cuenta siguiendo las mejores prácticas del AWS Well-Architected Framework, ¿cuáles de las siguientes cuentas especializadas se recomienda separar de las cuentas de cargas de trabajo de producción? (Selecciona DOS)",
              "options": [
                "A) Una cuenta de archivo de registros (Log Archive Account) dedicada a consolidar logs inmutables.",
                "B) Una cuenta compartida pública donde todos los desarrolladores tengan privilegios de root para pruebas.",
                "C) Una cuenta de herramientas de seguridad (Security Tooling Account) para servicios como GuardDuty y Security Hub administradores.",
                "D) Una cuenta dedicada para alojar únicamente un servidor DHCP corporativo para toda la nube.",
                "E) Una cuenta separada para cada microservicio por cada segundo de ejecución."
              ],
              "correctAnswers": [
                0,
                2
              ],
              "explanation": "El modelo de Landing Zone de AWS recomienda crear cuentas de servicios centrales (Core Accounts), incluyendo una Log Archive Account (para almacenamiento central e inmutable de logs) y una Security Tooling Account (para administración delegada de GuardDuty, Inspector, Security Hub)."
            }
          ]
        },
        {
          "id": 3,
          "title": "Día 3: Cifrado con AWS KMS y Gestión de Secretos",
          "summary": "Cifrado en reposo y tránsito, claves simétricas vs asimétricas, AWS Secrets Manager vs SSM Parameter Store.",
          "readTime": "25 min lectura",
          "contentHtml": "\n            <h2>3. AWS Key Management Service (KMS) & Secretos</h2>\n            <p>AWS KMS es el servicio administrado para crear, controlar y rotar claves criptográficas. Utiliza módulos de seguridad de hardware (HSM) validados bajo FIPS 140-2.</p>\n\n            <h3>Tipos de Claves KMS (KMS Keys):</h3>\n            <ul>\n              <li><strong>AWS Owned Keys:</strong> Gestionadas internamente por AWS. Gratuitas, no visibles en la consola de KMS.</li>\n              <li><strong>AWS Managed Keys:</strong> Creadas automáticamente por servicios AWS en tu cuenta (ej. <code>aws/s3</code>). Rotación automática cada año.</li>\n              <li><strong>Customer Managed Keys (CMKs):</strong> Creadas y controladas por ti. Permiten control granular de políticas de clave, habilitación de rotación automática y auditoría detallada en CloudTrail.</li>\n            </ul>\n\n            <h3>Técnica del Cifrado de Sobre (Envelope Encryption):</h3>\n            <p>KMS no cifra directamente archivos de gigabytes; en su lugar, genera una <strong>Data Key (DEK)</strong> en texto plano y una versión cifrada. El cliente cifra los datos localmente con la DEK en texto plano y luego la elimina de memoria, conservando únicamente la DEK cifrada junto al dato.</p>\n\n            <h3>Secrets Manager vs Systems Manager Parameter Store</h3>\n            <table class=\"table-compare\">\n              <thead>\n                <tr>\n                  <th>Característica</th>\n                  <th>AWS Secrets Manager</th>\n                  <th>SSM Parameter Store</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><strong>Rotación Automática</strong></td>\n                  <td><strong>Nativa</strong> (integrada con RDS, Redshift, DocumentDB vía Lambda)</td>\n                  <td>Manual o configurando eventos personalizados</td>\n                </tr>\n                <tr>\n                  <td><strong>Costo</strong></td>\n                  <td>$0.40/secreto/mes + $0.05 por cada 10,000 llamadas API</td>\n                  <td>Nivel estándar gratuito</td>\n                </tr>\n                <tr>\n                  <td><strong>Caso Típico de Examen</strong></td>\n                  <td>Contraseñas de bases de datos que requieren rotación periódica estricta sin downtime.</td>\n                  <td>Variables de entorno generales, strings de configuración, licencias.</td>\n                </tr>\n              </tbody>\n            </table>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 1: Permisos Cross-Account en AWS KMS",
              "question": "Un Solutions Architect debe conceder acceso a un rol IAM de otra cuenta de AWS (Cuenta B) para que pueda descifrar un bucket S3 cifrado con KMS en la Cuenta A. ¿Qué DOS configuraciones son estrictamente necesarias para permitir el descifrado cross-account con KMS? (Selecciona DOS)",
              "options": [
                "A) La política de clave (Key Policy) en la Cuenta A debe permitir la acción kms:Decrypt a la Cuenta B.",
                "B) La política de identidad del rol IAM en la Cuenta B debe otorgar el permiso kms:Decrypt sobre el ARN de la clave en la Cuenta A.",
                "C) La clave KMS debe configurarse como pública en la consola de IAM.",
                "D) Se debe deshabilitar el cifrado del bucket S3 en la Cuenta A.",
                "E) La Cuenta B debe pagar la factura de la cuenta A mediante Consolidated Billing."
              ],
              "correctAnswers": [
                0,
                1
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 1: Cifrado en Reposo en EBS y RDS",
              "question": "Un Solutions Architect debe garantizar que todos los volúmenes Amazon EBS y todas las instancias Amazon RDS estén cifrados en reposo en una región de AWS de acuerdo con la política de seguridad corporativa. ¿Cuáles de las siguientes acciones permiten lograr este objetivo? (Selecciona DOS)",
              "options": [
                "A) Habilitar la opción 'Always encrypt new EBS volumes' (cifrado por defecto de EBS) a nivel de la región en la cuenta.",
                "B) Habilitar el cifrado en una instancia de RDS existente directamente modificando sus propiedades sin tiempo de inactividad.",
                "C) Para instancias RDS no cifradas existentes, crear una instantánea (snapshot), copiar la instantánea habilitando el cifrado con una clave KMS y restaurar una nueva instancia a partir de la copia cifrada.",
                "D) Desactivar el uso de SSL en las conexiones cliente a la base de datos.",
                "E) Convertir los volúmenes EBS en instancias EC2 Spot."
              ],
              "correctAnswers": [
                0,
                2
              ],
              "explanation": "El cifrado por defecto de EBS asegura que todo volumen nuevo creado o restaurado en la región se cifre automáticamente. En RDS, una base de datos no cifrada no puede cifrarse in-place; el procedimiento estándar es tomar un snapshot, copiar el snapshot cifrándolo con KMS y restaurar la nueva BD a partir del snapshot cifrado."
            }
          ]
        },
        {
          "id": 4,
          "title": "Día 4: VPC Core, Subnets y Seguridad de Red (SGs vs NACLs)",
          "summary": "Diseño de subnets públicas/privadas, tablas de enrutamiento, NAT Gateways y capas de filtrado de tráfico.",
          "readTime": "30 min lectura",
          "contentHtml": "\n            <h2>4. Redes en Amazon VPC (Virtual Private Cloud)</h2>\n            <p>La VPC es tu red virtual privada aislada en la nube de AWS. Se define mediante un bloque CIDR (ej. <code>10.0.0.0/16</code>).</p>\n\n            <h3>Componentes Esenciales:</h3>\n            <ul>\n              <li><strong>Subnets Públicas:</strong> Poseen una ruta en su Route Table hacia un <strong>Internet Gateway (IGW)</strong> (<code>0.0.0.0/0 -> igw-xxxx</code>). Las instancias reciben IPs públicas automáticas.</li>\n              <li><strong>Subnets Privadas:</strong> No tienen ruta directa al IGW. Para acceder a internet (ej. descargar actualizaciones de software) enrutan el tráfico <code>0.0.0.0/0</code> hacia un <strong>NAT Gateway</strong> ubicado en una subnet pública.</li>\n              <li><strong>NAT Gateway:</strong> Servicio administrado, altamente disponible y elástico dentro de una AZ específica. Escala hasta 100 Gbps. Solo permite tráfico saliente (IPv4); bloquea conexiones entrantes iniciadas desde internet.</li>\n            </ul>\n\n            <h3>Security Groups vs Network ACLs (NACLs)</h3>\n            <table class=\"table-compare\">\n              <thead>\n                <tr>\n                  <th>Criterio</th>\n                  <th>Security Group (SG)</th>\n                  <th>Network ACL (NACL)</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td><strong>Nivel de acción</strong></td>\n                  <td><strong>Instancia / Interfaz de Red (ENI)</strong></td>\n                  <td><strong>Subnet</strong> completa</td>\n                </tr>\n                <tr>\n                  <td><strong>Estado (Stateful vs Stateless)</strong></td>\n                  <td><strong>Stateful:</strong> Si se permite la entrada, el tráfico de retorno saliente se permite automáticamente.</td>\n                  <td><strong>Stateless:</strong> Debe permitirse explícitamente tanto el tráfico entrante como el saliente (incluyendo puertos efímeros 1024-65535).</td>\n                </tr>\n                <tr>\n                  <td><strong>Tipos de Reglas</strong></td>\n                  <td>Solo reglas de <strong>Allow</strong> (Permitir).</td>\n                  <td>Reglas de <strong>Allow y Deny</strong> (evaluadas en orden numérico ascendente).</td>\n                </tr>\n                <tr>\n                  <td><strong>Bloqueo de una IP específica</strong></td>\n                  <td>No puede bloquear una IP individual (solo permite lo que definas).</td>\n                  <td><strong>SÍ</strong> (Creando una regla Deny con número menor a las reglas Allow).</td>\n                </tr>\n              </tbody>\n            </table>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 1: VPC Endpoints (Gateway vs Interface)",
              "question": "Un Solutions Architect debe permitir que instancias EC2 situadas en subredes completamente privadas accedan a Amazon S3 y a Amazon DynamoDB sin enviar tráfico a través de Internet ni pagar cargos adicionales por procesamiento de datos por gigabyte. ¿Cuáles de las siguientes opciones describen la solución óptima? (Selecciona DOS)",
              "options": [
                "A) Crear un VPC Gateway Endpoint para Amazon S3 y asociarlo a las tablas de rutas de las subredes privadas.",
                "B) Desplegar un NAT Gateway dedicado para S3 y DynamoDB.",
                "C) Crear un VPC Gateway Endpoint para Amazon DynamoDB y asociarlo a las tablas de rutas privadas.",
                "D) Crear un VPC Interface Endpoint (PrivateLink) pagando la tarifa por hora y por GB.",
                "E) Asignar direcciones IPv4 públicas a las instancias privadas mediante Elastic IPs."
              ],
              "correctAnswers": [
                0,
                2
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 1: VPC Flow Logs & Análisis de Red",
              "question": "Un equipo de operaciones necesita investigar intentos de intrusión y conexiones rechazadas en las interfaces de red elásticas (ENIs) de una VPC crítica. ¿Qué configuraciones de VPC Flow Logs son necesarias para registrar y analizar este tráfico? (Selecciona DOS)",
              "options": [
                "A) Publicar los VPC Flow Logs directamente en un grupo de registros de Amazon CloudWatch Logs o en un bucket de Amazon S3.",
                "B) Configurar los Flow Logs para capturar únicamente el contenido y payload de los paquetes HTTP.",
                "C) Configurar el filtro de tráfico para capturar eventos de tipo 'REJECT' o 'ALL'.",
                "D) Desactivar la tabla de rutas de la VPC para capturar los paquetes descartados.",
                "E) Reemplazar el Internet Gateway con un cable físico Direct Connect."
              ],
              "correctAnswers": [
                0,
                2
              ],
              "explanation": "VPC Flow Logs puede capturar información sobre el tráfico IP que entra y sale de las interfaces de red de la VPC (con filtros ALL, ACCEPT o REJECT) y enviarlo a Amazon CloudWatch Logs o Amazon S3 para análisis con CloudWatch Insights o Amazon Athena."
            }
          ]
        },
        {
          "id": 5,
          "title": "Día 5: Seguridad Perimetral y Detección (WAF, Shield, GuardDuty, Macie)",
          "summary": "Protección L7 contra vulnerabilidades web, mitigación anti-DDoS y detección inteligente de amenazas.",
          "readTime": "25 min lectura",
          "contentHtml": "\n            <h2>5. Detección Inteligente y Protección de Borde</h2>\n\n            <h3>AWS WAF (Web Application Firewall)</h3>\n            <p>Inspecciona tráfico HTTP/HTTPS en la <strong>Capa 7</strong>. Se integra con Application Load Balancers (ALB), Amazon CloudFront, Amazon API Gateway y AWS AppSync. Protege contra:</p>\n            <ul>\n              <li>Inyecciones SQL (SQLi) y Cross-Site Scripting (XSS).</li>\n              <li>Reglas de limitación de tasa (Rate-based rules para frenar ataques de fuerza bruta).</li>\n              <li>Bloqueo geográfico por país de origen.</li>\n            </ul>\n\n            <h3>AWS Shield: Standard vs Advanced</h3>\n            <ul>\n              <li><strong>Shield Standard:</strong> Activo por defecto y gratuito para todos los clientes de AWS. Protege contra ataques comunes en capas 3 y 4 (SYN floods, UDP reflection).</li>\n              <li><strong>Shield Advanced:</strong> Servicio de pago ($3,000/mes) que ofrece protección 24/7 con el equipo SRT (Shield Response Team), mitigación avanzada en capa 7 y protección económica contra picos de costos derivados de ataques DDoS.</li>\n            </ul>\n\n            <h3>Servicios de Detección con Machine Learning:</h3>\n            <ul>\n              <li><strong>Amazon GuardDuty:</strong> Monitoreo continuo e inteligente de amenazas sin desplegar agentes de software. Analiza CloudTrail Management & Event Logs, VPC Flow Logs y DNS Query Logs para detectar minería de cripto, accesos anómalos o credenciales comprometidas.</li>\n              <li><strong>Amazon Macie:</strong> Utiliza ML y coincidencia de patrones para descubrir, clasificar y proteger <strong>datos sensibles (PII)</strong> como tarjetas de crédito, pasaportes y DNIs almacenados en buckets de Amazon S3.</li>\n              <li><strong>Amazon Inspector:</strong> Escáner automatizado de vulnerabilidades de seguridad y exposición de red en instancias EC2, imágenes en Amazon ECR y funciones Lambda.</li>\n            </ul>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 1: AWS Network Firewall & Inspección Central",
              "question": "Una empresa debe cumplir con una directriz que exige inspeccionar todo el tráfico de salida (egress) hacia Internet desde 10 VPCs para realizar filtrado de dominios basado en nombres DNS calificados (FQDN) e inspección profunda de paquetes (Stateful Inspection con firmas Snort/Suricata). ¿Cuáles de las siguientes opciones describen la solución recomendada? (Selecciona DOS)",
              "options": [
                "A) Desplegar AWS Network Firewall en una VPC de inspección centralizada conectada mediante AWS Transit Gateway.",
                "B) Configurar reglas de Security Groups bloqueando nombres de dominio como '*.dominio.com'.",
                "C) Utilizar grupos de reglas de AWS Network Firewall con capacidades de filtrado de dominios y compatibilidad con reglas Snort.",
                "D) Instalar un NAT Instance con un archivo /etc/hosts estático en cada subred.",
                "E) Desactivar el Internet Gateway en todas las cuentas y prohibir el tráfico saliente."
              ],
              "correctAnswers": [
                0,
                2
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 1: Detección y Remediación Automática",
              "question": "Un Solutions Architect desea automatizar la remediación inmediata cuando Amazon GuardDuty genera un hallazgo de que una instancia EC2 está comunicándose con una red de comando y control (C&C). ¿Qué arquitectura sin servidor permite aislar la instancia automáticamente? (Selecciona DOS)",
              "options": [
                "A) Configurar Amazon EventBridge para capturar eventos de hallazgos de Amazon GuardDuty (GuardDuty Finding).",
                "B) Configurar una regla de EventBridge con un destino hacia una función AWS Lambda que modifique el Security Group de la instancia para aislarla en cuarentena.",
                "C) Programar un cron en la instancia EC2 para consultar la API de GuardDuty cada 24 horas.",
                "D) Enviar los logs de GuardDuty a un bucket S3 y esperar la revisión mensual de los ingenieros.",
                "E) Apagar el servidor físico del centro de datos on-premises."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "GuardDuty publica eventos de hallazgos directamente en Amazon EventBridge en tiempo real. Se puede crear una regla de EventBridge que invoque una función AWS Lambda para ejecutar acciones de remediación automática, como adjuntar un Security Group de cuarentena restrictivo o tomar una instantánea forense del volumen EBS."
            }
          ]
        }
      ]
    },
    {
      "id": "week-2",
      "title": "Semana 2: Cómputo, Resiliencia y Desacoplamiento",
      "domain": "Dominio 2: Design Resilient Architectures (26%)",
      "days": [
        {
          "id": 8,
          "title": "Día 8: EC2, Auto Scaling Groups y Políticas de Escalado",
          "summary": "Launch Templates, métricas de escalado, cooldowns y lifecycle hooks para alta disponibilidad.",
          "readTime": "25 min lectura",
          "contentHtml": "\n            <h2>1. Auto Scaling Groups (ASG) y Elastic Compute Cloud</h2>\n            <p>Un Auto Scaling Group garantiza que la cantidad exacta de instancias EC2 esté disponible para soportar la carga de la aplicación, distribuyéndolas en múltiples Zonas de Disponibilidad.</p>\n\n            <h3>Conceptos Fundamentales:</h3>\n            <ul>\n              <li><strong>Launch Template:</strong> Especificación declarativa versionada que define cómo se arrancan las instancias (AMI, instance type, security groups, IAM role, EBS, User Data).</li>\n              <li><strong>Capacidades:</strong> Minimum, Desired y Maximum capacity.</li>\n              <li><strong>Target Tracking Scaling:</strong> Ajusta la capacidad automáticamente para mantener una métrica deseada (ej. utilización media de CPU al 50% o recuento de solicitudes ALB por target).</li>\n              <li><strong>Step Scaling:</strong> Escala por tramos definidos ante alarmas de CloudWatch.</li>\n              <li><strong>Lifecycle Hooks:</strong> Pausa las instancias al crearse (Pending:Wait) o destruirse (Terminating:Wait) para ejecutar tareas críticas de inicialización o extracción de logs.</li>\n            </ul>\n          ",
          "quiz": [
            {
              "id": "d8-q1",
              "scenarioTag": "Dominio 2: Escalado Predictivo vs Programado",
              "question": "Una plataforma de comercio electrónico experimenta una venta relámpago programada todos los viernes a las 18:00 horas. El tráfico de usuarios se multiplica por 20 en menos de 90 segundos. Las políticas de escalado dinámico basadas en CPU tardan entre 4 y 6 minutos en inicializar nuevas instancias, lo que provoca caídas de servicio durante los primeros minutos de la venta. ¿Qué estrategia de Auto Scaling resuelve este problema?",
              "options": [
                "A) Configurar una política de escalado programado (Scheduled Scaling) para incrementar la capacidad deseada y mínima 30 minutos antes de las 18:00 horas cada viernes.",
                "B) Cambiar a instancias EC2 más pequeñas (scale-out horizontal) para que arranquen en microsegundos.",
                "C) Reducir el tiempo de cooldown del Auto Scaling Group a cero segundos.",
                "D) Sustituir el Auto Scaling Group por instancias reservadas fijas en una única Availability Zone."
              ],
              "correctAnswer": 0,
              "explanation": "El escalado programado (Scheduled Scaling) permite anticipar patrones de demanda predecibles y conocidos con antelación, aprovisionando la capacidad necesaria antes de que ocurra el pico de tráfico para evitar degradaciones durante el tiempo de inicialización de las instancias."
            },
            {
              "id": "d8-q2",
              "scenarioTag": "Dominio 2: Políticas de Escalado Basadas en Colas (Backlog por Instancia)",
              "question": "Una flota de instancias EC2 dentro de un Auto Scaling Group consume mensajes de una cola de Amazon SQS. La tasa de procesamiento varía drásticamente. El equipo configuró una política de Target Tracking basada en el uso promedio de CPU, pero las instancias no escalan a tiempo y los mensajes se acumulan durante horas en la cola. ¿Cuál es la métrica recomendada por AWS para escalar el grupo de forma efectiva?",
              "options": [
                "A) La cantidad de conexiones de red activas en el Network Interface de la instancia.",
                "B) El porcentaje de memoria RAM utilizada mediante el CloudWatch Agent.",
                "C) Crear una métrica personalizada en CloudWatch que divida ApproximateNumberOfMessagesVisible entre el número de instancias activas del grupo (Backlog por Instancia), y aplicar Target Tracking sobre esa métrica.",
                "D) Usar la métrica estándar ApproximateNumberOfMessagesDelayed con escalado por pasos."
              ],
              "correctAnswer": 2,
              "explanation": "Para aplicaciones que consumen colas SQS, la mejor práctica oficial de AWS es calcular el 'Backlog por Instancia' (ApproximateNumberOfMessagesVisible dividido por el número de instancias en servicio). El uso de CPU no refleja la longitud de la cola, provocando subescalado o sobreescalado innecesario."
            },
            {
              "id": "d8-q3",
              "scenarioTag": "Dominio 2: Lifecycle Hooks en Auto Scaling",
              "question": "Una aplicación con estado que corre en instancias EC2 dentro de un Auto Scaling Group requiere extraer logs de auditoría locales, cerrar sesiones de base de datos activas y volcar su estado a un bucket S3 antes de que una instancia sea terminada por un evento de escala hacia abajo (scale-in). Si la instancia se apaga abruptamente, se pierden datos críticos. ¿Qué mecanismo permite pausar la terminación de la instancia para ejecutar estas tareas?",
              "options": [
                "A) Reducir el período de gracia de Health Check a 0 segundos.",
                "B) Modificar la política de terminación del ASG a OldestInstance.",
                "C) Configurar un Auto Scaling Lifecycle Hook para el estado de terminación (autoscaling:EC2_INSTANCE_TERMINATING) que pause la instancia en estado Terminating:Wait.",
                "D) Desactivar la protección contra escala hacia abajo en todas las instancias."
              ],
              "correctAnswer": 2,
              "explanation": "Los Lifecycle Hooks de Auto Scaling permiten interceptar el ciclo de vida de una instancia (tanto al arrancar como al terminar). Al configurar un hook para EC2_INSTANCE_TERMINATING, la instancia pasa a 'Terminating:Wait', permitiendo ejecutar scripts de limpieza y notificar a Auto Scaling cuando haya concluido mediante CompleteLifecycleAction."
            },
            {
              "id": "d8-q4",
              "scenarioTag": "Dominio 2: Políticas de Terminación en Auto Scaling",
              "question": "Un Auto Scaling Group se extiende a través de 3 Availability Zones (AZ-a, AZ-b y AZ-c). Debido a una reducción en el tráfico web, el grupo debe reducir dos instancias. ¿Cuál es la lógica predeterminada (Default Termination Policy) que sigue Amazon EC2 Auto Scaling para seleccionar las instancias a eliminar?",
              "options": [
                "A) Eliminar primero las instancias que tengan mayor uso de CPU y memoria.",
                "B) Identificar la AZ con el mayor número de instancias; si hay paridad, seleccionar la instancia creada con la Launch Template o Launch Configuration más antigua y más cercana a la siguiente hora de facturación.",
                "C) Terminar las instancias aleatoriamente sin importar la zona de disponibilidad para balancear el costo.",
                "D) Terminar primero las instancias que tengan direcciones IP elásticas asignadas."
              ],
              "correctAnswer": 1,
              "explanation": "La política de terminación por defecto de Auto Scaling busca mantener el balance de zonas de disponibilidad: 1) Determina qué AZ tiene más instancias. 2) Si hay varias instancias en esa AZ, busca las que usen la plantilla/configuración de lanzamiento más antigua. 3) Si persiste el empate, selecciona la instancia más cercana a completar una hora de facturación."
            },
            {
              "id": "d8-q5",
              "multi": true,
              "scenarioTag": "Dominio 4: Tipos de Compra y Opciones de Lanzamiento en ASG",
              "question": "Una startup tecnológica busca procesar trabajos de procesamiento por lotes tolerantes a fallas con el menor costo posible, pero requiere garantizar que al menos el 20% de la capacidad de cómputo siempre esté respaldada por instancias estables para atender peticiones críticas del sistema. ¿Cuáles de las siguientes configuraciones de Auto Scaling Group permiten lograr esto? (Selecciona DOS)",
              "options": [
                "A) Configurar un Auto Scaling Group con una política de instancias mixtas (Mixed Instances Policy).",
                "B) Definir una capacidad base bajo demanda (On-Demand Base Capacity) del 20% y asignar el 80% restante a Spot Instances.",
                "C) Asignar el 100% del grupo a Dedicated Hosts con contratos a 3 años.",
                "D) Habilitar la opción de asignación por capacidad optimizada (capacity-optimized) para las instancias Spot para minimizar interrupciones.",
                "E) Convertir todas las instancias a tipo t4g.nano sin almacenamiento EBS."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "Una Mixed Instances Policy en un Auto Scaling Group permite combinar instancias On-Demand y Spot, definiendo un On-Demand Base Capacity porcentual o absoluto para garantizar estabilidad mientras se aprovechan los descuentos de hasta 90% de las instancias Spot."
            },
            {
              "id": "d8-q6",
              "scenarioTag": "Dominio 2: Health Checks de ASG integrados con ELB",
              "question": "Un Auto Scaling Group tiene configurado por defecto el tipo de Health Check en 'EC2'. Las instancias atienden tráfico detrás de un Application Load Balancer. Debido a una falla en el servidor web Apache, la aplicación devuelve errores HTTP 500, pero el hipervisor y el sistema operativo de la instancia EC2 siguen respondiendo a pings de red. ¿Qué ocurre con la instancia y cómo debe corregirse?",
              "options": [
                "A) El ASG reemplaza la instancia automáticamente porque el ALB envía alertas directas a IAM.",
                "B) El ASG considera la instancia saludable y NO la reemplaza; para corregirlo, se debe cambiar el tipo de comprobación de salud del ASG a 'ELB'.",
                "C) El ALB apaga automáticamente el Security Group de la instancia.",
                "D) La instancia se migra automáticamente a otra región de AWS."
              ],
              "correctAnswer": 1,
              "explanation": "El health check de tipo EC2 sólo comprueba el estado del hardware y del hipervisor/red de la instancia. Si el proceso de la aplicación falla, la instancia sigue 'running'. Al activar los health checks de tipo 'ELB', el ASG reemplazará automáticamente cualquier instancia declarada como 'Unhealthy' por el balanceador de carga."
            },
            {
              "id": "d8-q7",
              "scenarioTag": "Dominio 2: Launch Templates vs Launch Configurations",
              "question": "¿Por qué AWS recomienda utilizar Launch Templates en lugar de las obsoletas Launch Configurations para desplegar grupos de Auto Scaling?",
              "options": [
                "A) Las Launch Templates son gratuitas mientras que las Launch Configurations tienen costo por minuto.",
                "B) Las Launch Templates soportan versionado de plantillas, parámetros de T2/T3 Unlimited, combinación de instancias On-Demand y Spot en un solo ASG, y compatibilidad con las características más recientes de EC2.",
                "C) Las Launch Configurations no permiten ejecutar sistemas operativos Linux.",
                "D) Las Launch Templates eliminan la necesidad de tener Security Groups o VPCs."
              ],
              "correctAnswer": 1,
              "explanation": "Launch Templates reemplazan a Launch Configurations ofreciendo versionado, herencia de plantillas, aprovisionamiento mixto de tipos de instancias y opciones de compra (Spot/On-Demand), además de acceso inmediato a nuevas funciones de EC2 como IMDSv2 y Elastic Fabric Adapter."
            },
            {
              "id": "d8-q8",
              "scenarioTag": "Dominio 2: Enfriamiento (Cooldown) y Step Scaling",
              "question": "Un equipo observa que su Auto Scaling Group con políticas de Simple Scaling sufre oscilaciones continuas (flapping), agregando y removiendo instancias de forma descontrolada ante fluctuaciones temporales de carga. ¿Qué parámetro debe ajustarse para permitir que las nuevas instancias se estabilicen antes de evaluar nuevas métricas de escalado?",
              "options": [
                "A) El Default Cooldown Period (período de enfriamiento predeterminado).",
                "B) La métrica de terminación forzada del hypervisor.",
                "C) La cantidad de ENIs secundarias adjuntas a la subred.",
                "D) El TTL de las zonas DNS públicas en Route 53."
              ],
              "correctAnswer": 0,
              "explanation": "El período de Cooldown (enfriamiento) es un lapso configurable durante el cual el Auto Scaling Group no lanza ni termina instancias adicionales mediante políticas de escalado simple, permitiendo que las métricas de uso se estabilicen tras el aprovisionamiento de una nueva instancia."
            },
            {
              "id": "d8-q9",
              "scenarioTag": "Dominio 4: Modelos de Instancias EC2 Optimizadas",
              "question": "Una aplicación científica realiza simulaciones bioinformáticas que requieren una velocidad masiva de cálculo matemático intensivo en punto flotante y paralelización en CPUs con frecuencias de reloj elevadas, con requisitos moderados de memoria RAM. ¿Qué familia de instancias EC2 está diseñada para esta carga de trabajo?",
              "options": [
                "A) R6g (Memory Optimized).",
                "B) I3en (Storage Optimized para alta densidad NVMe).",
                "C) C7g o C6i (Compute Optimized).",
                "D) T4g (Burstable General Purpose)."
              ],
              "correctAnswer": 2,
              "explanation": "Las familias 'C' (C6i, C7g, C6a) son instancias optimizadas para computación (Compute Optimized), ideales para cargas de trabajo vinculadas a uso intensivo de CPU, como servidores web de alto rendimiento, procesamiento por lotes, modelado científico e inferencia distribuida."
            },
            {
              "id": "d8-q10",
              "multi": true,
              "scenarioTag": "Dominio 2: Resiliencia Multi-AZ con Auto Scaling",
              "question": "Un Solutions Architect diseña una arquitectura que debe mantener una disponibilidad del 100% de su capacidad requerida (mínimo 6 instancias operativas en todo momento) incluso si una Availability Zone completa falla en una región con 3 AZs. ¿Cuáles de las siguientes opciones representan una arquitectura resiliente y costo-eficiente? (Selecciona DOS)",
              "options": [
                "A) Configurar el Auto Scaling Group distribuido a lo largo de las 3 Availability Zones.",
                "B) Configurar la capacidad deseada en 9 instancias (3 instancias por AZ), garantizando que si una AZ cae, las 6 instancias restantes mantengan el 100% de la capacidad de servicio.",
                "C) Colocar las 6 instancias en una sola subred pública para evitar costos de tráfico interzonal.",
                "D) Desactivar los health checks en las instancias para evitar que se reinicien durante incidentes.",
                "E) Desplegar las instancias en centros de datos locales on-premises sin conexión a AWS."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "Distribuir el ASG en 3 AZs permite alta disponibilidad. Para garantizar que siempre haya al menos 6 instancias en servicio si una AZ completa falla (falla de 1/3 de la capacidad), se deben dimensionar 3 instancias por AZ (9 en total), asegurando que las 2 AZs restantes provean exactamente 6 instancias."
            }
          ]
        },
        {
          "id": 9,
          "title": "Día 9: Elastic Load Balancers (ALB vs NLB vs GWLB)",
          "summary": "Balanceo en Capa 7 vs Capa 4, terminación SSL, sesiones persistentes (Sticky Sessions).",
          "readTime": "25 min lectura",
          "contentHtml": "\n            <h2>2. Comparativa de Elastic Load Balancing (ELB)</h2>\n            <p>AWS ofrece balanceadores de carga altamente disponibles y redundantes:</p>\n            <ul>\n              <li><strong>Application Load Balancer (ALB):</strong> Capa 7 (HTTP, HTTPS, gRPC). Enrutamiento inteligente por ruta de URL (/api, /imagenes), host headers, o parámetros query. Soporta <strong>Sticky Sessions</strong> (afinidad a través de cookies).</li>\n              <li><strong>Network Load Balancer (NLB):</strong> Capa 4 (TCP, UDP, TLS). Diseñado para millones de peticiones por segundo con latencia de sub-milisegundo. <strong>Provee una IP estática fija (o Elastic IP) por AZ</strong>.</li>\n              <li><strong>Gateway Load Balancer (GWLB):</strong> Capa 3/4 para inspeccionar tráfico de red canalizándolo a través de flotas de appliances virtuales de seguridad y firewalls mediante protocolo GENEVE (puerto 6081).</li>\n            </ul>\n          ",
          "quiz": [
            {
              "id": "d9-q1",
              "scenarioTag": "Dominio 2: Network Load Balancer (NLB) & Rendimiento",
              "question": "Una empresa de servicios financieros está construyendo una plataforma de negociación bursátil en tiempo real. La solución exige procesar millones de conexiones TCP concurrentes por segundo con latencias inferiores a un milisegundo (ultra-low latency), soporte para direcciones IP estáticas por Availability Zone para permitir listas blancas (allowlist) de clientes corporativos, y terminación de sesiones TLS a nivel de transporte. ¿Qué tipo de balanceador de carga de AWS se debe seleccionar?",
              "options": [
                "A) Application Load Balancer (ALB).",
                "B) Classic Load Balancer (CLB).",
                "C) Gateway Load Balancer (GWLB).",
                "D) Network Load Balancer (NLB)."
              ],
              "correctAnswer": 3,
              "explanation": "El Network Load Balancer (NLB) opera en la Capa 4 (TCP, UDP, TLS), maneja millones de solicitudes por segundo con latencia de sub-milisegundos, ofrece una dirección IP estática / Elastic IP fija por Availability Zone y es el único balanceador de AWS con estas características extremas de rendimiento de red."
            },
            {
              "id": "d9-q2",
              "scenarioTag": "Dominio 2: Application Load Balancer (ALB) & Enrutamiento L7",
              "question": "Una arquitectura de microservicios contenerizados en Amazon ECS aloja tres servicios: el servicio de autenticación (/login), el servicio de catálogo (/products) y el servicio de pagos (/checkout). La empresa desea consolidar el balanceo de carga para que todas las peticiones utilicen un único dominio HTTPS (api.ejemplo.com) y se distribuyan a los contenedores según la ruta URL solicitada. ¿Qué balanceador permite esto con el MENOR costo operativo?",
              "options": [
                "A) Application Load Balancer (ALB) utilizando reglas de enrutamiento basadas en rutas (Path-based Routing) que apunten a diferentes Target Groups.",
                "B) Network Load Balancer (NLB) con balanceo dinámico de puertos TCP.",
                "C) Tres balanceadores Classic Load Balancer independientes con enrutamiento manual.",
                "D) Un Gateway Load Balancer configurado con túneles GENEVE hacia cada contenedor."
              ],
              "correctAnswer": 0,
              "explanation": "El Application Load Balancer opera en la Capa 7 (HTTP/HTTPS) y soporta reglas avanzadas de enrutamiento basadas en contenido, tales como host-based routing y path-based routing (/login, /products), permitiendo dirigir el tráfico a distintos Target Groups con un único balanceador."
            },
            {
              "id": "d9-q3",
              "scenarioTag": "Dominio 1: Gateway Load Balancer (GWLB) & Appliances Virtuales",
              "question": "Una empresa requiere inspeccionar de manera transparente todo el tráfico de red entrante y saliente hacia sus VPCs utilizando una flota de appliances virtuales de seguridad de terceros (firewalls de siguiente generación, IDS/IPS). La solución debe escalar horizontalmente los appliances según la carga de tráfico y no debe requerir NAT intermedio ni modificar la cabecera IP original del paquete. ¿Qué balanceador de AWS está diseñado específicamente para este escenario?",
              "options": [
                "A) Application Load Balancer con módulo de inspección profunda.",
                "B) Network Load Balancer con PrivateLink dedicado.",
                "C) Gateway Load Balancer (GWLB) utilizando el protocolo de encapsulación GENEVE en el puerto 6081.",
                "D) Classic Load Balancer en modo promiscuo."
              ],
              "correctAnswer": 2,
              "explanation": "Gateway Load Balancer (GWLB) combina balanceo de carga de capa 3 con enrutamiento de red transparente. Encapsula los paquetes IP originales utilizando el protocolo GENEVE (puerto 6081) y los entrega a una flota escalable de appliances virtuales de seguridad sin alterar las direcciones IP de origen y destino."
            },
            {
              "id": "d9-q4",
              "scenarioTag": "Dominio 2: Sesiones Persistentes (Sticky Sessions / Session Affinity)",
              "question": "Una aplicación web monolítica heredada almacena el estado de sesión del usuario en la memoria local de la instancia EC2 individual. Cuando un usuario realiza compras sucesivas, si su petición se envía a una instancia diferente, su carrito de compras aparece vacío. Mientras se rediseña la aplicación para desacoplar el estado a Redis, ¿qué configuración temporal en el ALB resuelve este problema?",
              "options": [
                "A) Habilitar Cross-Zone Load Balancing en el balanceador.",
                "B) Habilitar Sticky Sessions (Sesiones persistentes basadas en cookies) en el Target Group del Application Load Balancer.",
                "C) Reducir el valor de Deregistration Delay a cero segundos.",
                "D) Configurar el Connection Draining en el Auto Scaling Group."
              ],
              "correctAnswer": 1,
              "explanation": "Sticky Sessions (afinidad de sesión) en el Target Group del ALB permite asociar la sesión de un cliente a una instancia de destino específica mediante una cookie generada por el balanceador o por la aplicación, garantizando que solicitudes subsiguientes vayan al mismo servidor."
            },
            {
              "id": "d9-q5",
              "scenarioTag": "Dominio 2: Autenticación de Usuarios en el ALB",
              "question": "Un equipo de desarrollo necesita proteger el acceso a una aplicación web interna alojada en instancias EC2. En lugar de codificar la lógica de autenticación en cada microservicio, desean que el propio balanceador de carga autentique a los usuarios contra su proveedor de identidades corporativo compatible con OpenID Connect (OIDC) antes de reenviar el tráfico a las instancias. ¿Qué balanceador de carga admite esta función nativa?",
              "options": [
                "A) Application Load Balancer (ALB) mediante la acción 'Authenticate OIDC' o integración con Amazon Cognito.",
                "B) Network Load Balancer con terminación de sesión TLS y certificados ACM.",
                "C) Classic Load Balancer con políticas de cifrado personalizadas.",
                "D) Gateway Load Balancer con autenticación RADIUS."
              ],
              "correctAnswer": 0,
              "explanation": "El Application Load Balancer (ALB) ofrece soporte nativo para descargar la autenticación de usuarios mediante OpenID Connect (OIDC) o Amazon Cognito User Pools, validando tokens de identidad en el propio balanceador antes de pasar solicitudes autenticadas a los destinos."
            },
            {
              "id": "d9-q6",
              "scenarioTag": "Dominio 2: Deregistration Delay (Connection Draining)",
              "question": "Durante un evento de despliegue continuo, un Auto Scaling Group retira instancias antiguas de un Target Group del ALB. Los usuarios reportan que sus descargas de archivos de 20 MB se interrumpen abruptamente con errores de conexión restablecida. ¿Qué configuración debe ajustarse para permitir que las conexiones existentes finalicen normalmente antes de retirar la instancia?",
              "options": [
                "A) Slow Start Duration.",
                "B) Deregistration Delay (tiempo de espera de desregistro) en el Target Group.",
                "C) Idle Timeout en el Security Group.",
                "D) Keepalive Timeout en el servidor Apache."
              ],
              "correctAnswer": 1,
              "explanation": "El Deregistration Delay (antiguamente Connection Draining) especifica el tiempo que el balanceador de carga espera para permitir que las solicitudes en vuelo terminen antes de marcar el destino como completamente desregistrado y cerrar las conexiones."
            },
            {
              "id": "d9-q7",
              "multi": true,
              "scenarioTag": "Dominio 2: Balanceo Entre Zonas (Cross-Zone Load Balancing)",
              "question": "En una arquitectura con balanceadores de carga desplegados en dos Availability Zones (AZ-a y AZ-b), AZ-a tiene 2 instancias EC2 de destino y AZ-b tiene 8 instancias. ¿Cuáles de las siguientes afirmaciones respecto a Cross-Zone Load Balancing son verdaderas? (Selecciona DOS)",
              "options": [
                "A) En un Application Load Balancer (ALB), Cross-Zone Load Balancing está siempre activado por defecto a nivel de balanceador.",
                "B) En un Network Load Balancer (NLB), Cross-Zone Load Balancing está desactivado por defecto.",
                "C) Cuando Cross-Zone Load Balancing está habilitado, cada nodo del balanceador distribuye el tráfico equitativamente entre todas las instancias registradas en todas las AZs (cada instancia recibe el 10% del total).",
                "D) Cross-Zone Load Balancing está prohibido si se utilizan instancias de tipo ARM Graviton.",
                "E) El tráfico entre zonas siempre tiene un recargo del 500% en AWS Organizations."
              ],
              "correctAnswers": [
                0,
                2
              ],
              "explanation": "En el ALB, Cross-Zone Load Balancing está siempre habilitado por defecto, permitiendo distribuir el tráfico de forma pareja entre todas las instancias de todas las AZs (10% a cada una de las 10 instancias). En NLB está deshabilitado por defecto."
            },
            {
              "id": "d9-q8",
              "scenarioTag": "Dominio 2: SNI (Server Name Indication) en ALB",
              "question": "Una compañía aloja 10 sitios web con nombres de dominio completamente distintos (ej: www.sitio1.com, www.sitio2.com) en un mismo clúster de servidores detrás de un único balanceador de carga. Cada sitio web cuenta con su propio certificado SSL/TLS emitido por AWS Certificate Manager (ACM). ¿Qué protocolo permite que el cliente presente el certificado SSL correcto correspondiente al nombre de dominio solicitado?",
              "options": [
                "A) TLS Session Resumption.",
                "B) Server Name Indication (SNI).",
                "C) OCSP Stapling.",
                "D) HTTP Strict Transport Security (HSTS)."
              ],
              "correctAnswer": 1,
              "explanation": "Server Name Indication (SNI) es una extensión de TLS que permite al cliente indicar el hostname al que intenta conectarse durante el handshake TLS inicial, lo que permite al ALB asociar múltiples certificados y presentar el certificado correcto para cada dominio."
            },
            {
              "id": "d9-q9",
              "scenarioTag": "Dominio 2: Preservación de IP de Cliente con NLB",
              "question": "Una aplicación de auditoría legal requiere registrar obligatoriamente la dirección IP pública real del cliente en los registros de acceso de las instancias EC2. La aplicación recibe conexiones TCP a través de un balanceador. ¿Cuál es el comportamiento nativo del Network Load Balancer con destinos registrados por tipo de instancia?",
              "options": [
                "A) El NLB oculta siempre la IP del cliente y la reemplaza por su propia IP privada.",
                "B) El NLB preserva automáticamente la dirección IP de origen del cliente a nivel de paquete IP cuando los destinos se registran por ID de instancia.",
                "C) El cliente debe incluir un encabezado X-Forwarded-For mediante un túnel SSH.",
                "D) Se requiere obligatoriamente instalar el agente de CloudWatch Logs."
              ],
              "correctAnswer": 1,
              "explanation": "A diferencia del ALB (que actúa como proxy inverso L7 y coloca la IP original en la cabecera X-Forwarded-For), un Network Load Balancer con destinos registrados por 'Instance ID' preserva la dirección IP de origen del cliente de forma nativa a nivel del paquete de red TCP/IP."
            },
            {
              "id": "d9-q10",
              "multi": true,
              "scenarioTag": "Dominio 2: Códigos de Error de Balanceadores de Carga",
              "question": "Al solucionar problemas en una aplicación web detrás de un Application Load Balancer, ¿cuáles de los siguientes códigos HTTP indican problemas directamente imputables al balanceador de carga o a la comunicación con sus destinos? (Selecciona DOS)",
              "options": [
                "A) HTTP 502 (Bad Gateway), indicando que el ALB recibió una respuesta no válida o la conexión fue rechazada por la instancia de destino.",
                "B) HTTP 504 (Gateway Timeout), indicando que la instancia de destino tardó más tiempo en responder que el valor configurado en el Idle Timeout del balanceador.",
                "C) HTTP 404 (Not Found), indicando que el balanceador ha sido destruido por AWS.",
                "D) HTTP 200 (OK), indicando que el certificado SSL ha caducado.",
                "E) HTTP 301 (Moved Permanently), indicando que la instancia EC2 se quedó sin espacio en disco."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "El código HTTP 502 (Bad Gateway) ocurre cuando el balanceador no puede conectarse al destino o recibe una respuesta HTTP malformada. El HTTP 504 (Gateway Timeout) ocurre cuando el destino no responde dentro del tiempo límite de inactividad (Idle Timeout)."
            }
          ]
        },
        {
          "id": 10,
          "title": "Día 10: Amazon Route 53 y Políticas de Enrutamiento",
          "summary": "DNS de alta resiliencia, comprobaciones de salud (Health Checks) y conmutación por error (Failover).",
          "readTime": "20 min lectura",
          "contentHtml": "\n            <h2>3. Amazon Route 53</h2>\n            <p>Route 53 es el servicio de DNS autoritativo con SLA del 100%. Soporta registros Alias que apuntan de forma transparente y sin costo a recursos de AWS (como balanceadores ELB, distribuciones CloudFront o buckets S3).</p>\n            <h3>Políticas de Enrutamiento Clave:</h3>\n            <ul>\n              <li><strong>Simple:</strong> Enrutamiento estándar a un recurso único.</li>\n              <li><strong>Weighted:</strong> Distribución porcentual (ej. 90% producción, 10% canary test).</li>\n              <li><strong>Latency-based:</strong> Dirige al usuario a la región de AWS con menor latencia de red.</li>\n              <li><strong>Failover:</strong> Conmutación automática activo/pasivo mediante Health Checks.</li>\n              <li><strong>Geolocation:</strong> Enrutamiento basado en el país o continente del cliente.</li>\n              <li><strong>Geoproximity:</strong> Enrutamiento basado en la ubicación geográfica de los recursos con ajuste de sesgo (bias).</li>\n            </ul>\n          ",
          "quiz": [
            {
              "id": "d10-q1",
              "scenarioTag": "Dominio 2: Latency-Based Routing en Route 53",
              "question": "Una aplicación web global con presencia activa en las regiones de Virginia (us-east-1) y Fráncfort (eu-central-1) desea optimizar la experiencia de navegación de sus usuarios en todo el mundo. El objetivo principal es dirigir a cada usuario a la región de AWS que le ofrezca el menor tiempo de respuesta de red (menor latencia). ¿Qué política de enrutamiento de Amazon Route 53 debe configurarse?",
              "options": [
                "A) Geolocation Routing.",
                "B) Latency-Based Routing (Enrutamiento por Latencia).",
                "C) Weighted Routing.",
                "D) Failover Routing."
              ],
              "correctAnswer": 1,
              "explanation": "Latency-Based Routing en Route 53 utiliza mediciones de latencia de red recopiladas continuamente por AWS desde distintas partes del mundo para dirigir las solicitudes de cada usuario al data center de AWS que le garantice la latencia más baja posible."
            },
            {
              "id": "d10-q2",
              "scenarioTag": "Dominio 2: Geolocation Routing vs Geoproximity Routing",
              "question": "Una entidad sujeta a la normativa europea de protección de datos (GDPR) exige que todos los usuarios que accedan desde el continente europeo sean dirigidos estrictamente a servidores alojados dentro de la Unión Europea, mientras que los usuarios del resto del mundo deben ser atendidos por servidores en Estados Unidos. ¿Qué política de enrutamiento de Route 53 garantiza este estricto cumplimiento geográfico?",
              "options": [
                "A) Multivalue Answer Routing.",
                "B) Latency-based Routing.",
                "C) Weighted Routing con pesos 50/50.",
                "D) Geolocation Routing (Enrutamiento por Geolocalización basado en continente o país)."
              ],
              "correctAnswer": 3,
              "explanation": "Geolocation Routing mapea la dirección IP del resolver DNS del cliente a un continente, país o estado específico, permitiendo garantizar que los usuarios europeos sean dirigidos exclusivamente a infraestructura europea por motivos de cumplimiento y soberanía de datos."
            },
            {
              "id": "d10-q3",
              "scenarioTag": "Dominio 2: Registros Alias vs CNAME",
              "question": "Un arquitecto necesita configurar el dominio raíz corporativo (zone apex, por ejemplo 'ejemplo.com' sin el prefijo 'www') para que apunte directamente a un Application Load Balancer (ALB). De acuerdo con las especificaciones del protocolo DNS estándar (RFC 1034), el registro de zona apex no puede ser un CNAME. ¿Cómo resuelve esto Amazon Route 53?",
              "options": [
                "A) Creando un registro de tipo Alias (Alias Record de tipo A) que apunte al nombre DNS del Application Load Balancer.",
                "B) Obteniendo la dirección IP pública actual del balanceador y creando un registro estático de tipo A.",
                "C) Redirigiendo el tráfico mediante un túnel VPN IPSec hacia el balanceador.",
                "D) Reemplazando el Application Load Balancer con una Elastic IP fija asignada a una sola instancia."
              ],
              "correctAnswer": 0,
              "explanation": "Los registros Alias de Route 53 son una extensión propietaria de AWS que permite apuntar un nombre de dominio apex (ejemplo.com) a recursos de AWS como ALBs, CloudFront distributions o buckets S3. Route 53 resuelve el registro dinámicamente como un registro A, cumpliendo los estándares DNS sin costo por consultas de alias a recursos de AWS."
            },
            {
              "id": "d10-q4",
              "scenarioTag": "Dominio 2: Enrutamiento Conmutación por Error (Failover Routing)",
              "question": "Una compañía cuenta con un sitio web activo en us-east-1 (primario) y un sitio web estático de contingencia en un bucket de Amazon S3 en eu-west-1 (secundario). El arquitecto desea que el 100% del tráfico se envíe al primario, pero si las instancias del primario dejan de responder, Route 53 debe conmutar automáticamente al sitio secundario de contingencia. ¿Qué política de enrutamiento y componente deben utilizarse?",
              "options": [
                "A) Weighted Routing con pesos 100 y 0.",
                "B) Failover Routing (Enrutamiento por Conmutación por Error) combinado con un Route 53 Health Check en el registro primario.",
                "C) Simple Routing con dos registros A repetidos.",
                "D) Geolocation Routing con zona horaria UTC."
              ],
              "correctAnswer": 1,
              "explanation": "Failover Routing está diseñado para escenarios activo-pasivo. Se asocia un Route 53 Health Check al registro primario; si el health check detecta que el endpoint primario no está saludable, Route 53 devuelve automáticamente la dirección del endpoint secundario."
            },
            {
              "id": "d10-q5",
              "multi": true,
              "scenarioTag": "Dominio 2: Health Checks en Route 53 & Endpoints Privados",
              "question": "Una empresa desea monitorear la salud de instancias web privadas ubicadas dentro de una VPC para utilizarlas en comprobaciones de salud de Route 53. Las instancias no tienen direcciones IP públicas. ¿Cuáles de las siguientes opciones describen cómo Route 53 puede monitorear recursos o manejar fallos? (Selecciona DOS)",
              "options": [
                "A) Los comprobadores de salud estándar de Route 53 operan desde Internet público y no pueden acceder directamente a IPs privadas dentro de una VPC.",
                "B) Se puede crear un Route 53 Health Check basado en una métrica de Amazon CloudWatch (Health Check based on CloudWatch Alarms) para supervisar recursos privados.",
                "C) Se debe desactivar el firewall de Windows en todas las máquinas.",
                "D) Route 53 puede entrar a cualquier VPC privada sin credenciales usando SSH.",
                "E) Convertir la VPC en un bucket S3 multi-región."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "Los verificadores de salud de Route 53 residen fuera de la VPC en Internet público y solo pueden comprobar endpoints accesibles públicamente. Para recursos privados en una VPC, la práctica recomendada es crear una alarma de Amazon CloudWatch y configurar un Route 53 Health Check que monitoree dicha alarma."
            },
            {
              "id": "d10-q6",
              "scenarioTag": "Dominio 2: Enrutamiento Multivalor (Multivalue Answer Routing)",
              "question": "¿En qué se diferencia la política Multivalue Answer de la política Simple Routing cuando se configuran múltiples direcciones IP para un mismo nombre de dominio?",
              "options": [
                "A) Simple Routing soporta hasta 1.000 IPs mientras que Multivalue solo soporta 1.",
                "B) Multivalue Answer permite asociar comprobaciones de salud (Health Checks) a cada registro, devolviendo únicamente direcciones IP de recursos saludables (hasta 8 elegidas al azar).",
                "C) Multivalue Answer redirige a los usuarios según su país de origen.",
                "D) Simple Routing garantiza una latencia menor a 1 ms en todas las consultas."
              ],
              "correctAnswer": 1,
              "explanation": "Simple Routing devuelve todas las IPs configuradas en un orden aleatorio sin verificar si están vivas o muertas. Multivalue Answer Routing permite asociar Route 53 Health Checks a cada IP, asegurando que solo se devuelvan IPs de servidores saludables (hasta un máximo de 8 respuestas)."
            },
            {
              "id": "d10-q7",
              "scenarioTag": "Dominio 2: Enrutamiento Ponderado (Weighted Routing)",
              "question": "Un equipo de ingeniería de software desea realizar una prueba de despliegue azul/verde (Blue/Green Deployment) enviando el 10% del tráfico real de usuarios a una nueva versión de la aplicación y el 90% a la versión estable actual. ¿Qué política de Route 53 implementa esta distribución porcentual?",
              "options": [
                "A) Latency Routing.",
                "B) Weighted Routing (Enrutamiento Ponderado) configurando un peso de 10 para la nueva versión y 90 para la versión estable.",
                "C) Failover Routing con umbral del 10%.",
                "D) Geoproximity Routing con bias de 90."
              ],
              "correctAnswer": 1,
              "explanation": "Weighted Routing permite asignar pesos numéricos relativos a múltiples registros de recursos para el mismo dominio (por ejemplo, pesos 10 y 90 sobre un total de 100), distribuyendo el volumen de solicitudes proporcionalmente para pruebas A/B o despliegues canary."
            },
            {
              "id": "d10-q8",
              "scenarioTag": "Dominio 2: Hybrid DNS con Route 53 Resolver Endpoints",
              "question": "Una corporación cuenta con un centro de datos on-premises conectado mediante AWS Direct Connect a una VPC. Los servidores on-premises necesitan resolver nombres DNS de zonas privadas alojadas en Route 53 (corp.internal), y a su vez las instancias EC2 en la VPC necesitan resolver nombres de dominio internos del Active Directory on-premises (corp.local). ¿Qué arquitectura soluciona este requerimiento?",
              "options": [
                "A) Abrir los puertos 53 en Internet público para ambos lados.",
                "B) Configurar Route 53 Resolver Inbound Endpoints (para permitir que los servidores on-premises consulten a Route 53) y Outbound Endpoints con reglas de reenvío (para reenviar consultas de la VPC a los servidores DNS on-premises).",
                "C) Instalar servidores BIND en cada instancia EC2 pública con replicación de archivos de zona.",
                "D) Exportar semanalmente la zona DNS en formato CSV y enviarla por correo electrónico."
              ],
              "correctAnswer": 1,
              "explanation": "Route 53 Resolver Endpoints habilitan la resolución híbrida de DNS: Inbound Endpoints permiten que los resolvers DNS on-premises envíen consultas a la VPC para resolver Private Hosted Zones, y Outbound Endpoints (con resolver rules) reenvían consultas desde la VPC hacia los servidores DNS on-premises."
            },
            {
              "id": "d10-q9",
              "scenarioTag": "Dominio 2: TTL (Time to Live) en Registros DNS",
              "question": "Un administrador web planea migrar la dirección IP de su servidor de base de datos dentro de 48 horas. Para minimizar el tiempo en que los clientes y servidores DNS intermedios mantengan en caché la dirección IP antigua tras el cambio, ¿qué acción previa debe realizar en Route 53?",
              "options": [
                "A) Reducir el TTL (Time To Live) del registro DNS a un valor bajo (por ejemplo, 60 segundos) con antelación a la migración.",
                "B) Incrementar el TTL del registro DNS a 86.400 segundos.",
                "C) Eliminar la Hosted Zone y recrearla inmediatamente.",
                "D) Desactivar el protocolo DNSSEC en el registrador de dominios."
              ],
              "correctAnswer": 0,
              "explanation": "El TTL (Time To Live) determina cuántos segundos los clientes y servidores DNS en caché almacenan la respuesta antes de consultar nuevamente a los servidores autoritativos. Reducir el TTL con suficiente antelación asegura que cuando se modifique la IP, los clientes obtengan la nueva dirección rápidamente."
            },
            {
              "id": "d10-q10",
              "multi": true,
              "scenarioTag": "Dominio 2: Geoproximity Routing & Route 53 Traffic Flow",
              "question": "En Route 53, ¿cuáles de las siguientes afirmaciones respecto al enrutamiento por geoproximidad (Geoproximity Routing) son verdaderas? (Selecciona DOS)",
              "options": [
                "A) Permite enrutar tráfico a los recursos en función de la ubicación geográfica del usuario y de los recursos de AWS.",
                "B) Requiere obligatoriamente el uso de Route 53 Traffic Flow para su configuración.",
                "C) Utiliza un parámetro denominado 'Bias' (sesgo) para expandir o contraer la región geográfica de cobertura de un recurso determinado.",
                "D) Solo es compatible con bases de datos MySQL en instancias EC2 locales.",
                "E) No requiere ningún nombre de dominio registrado."
              ],
              "correctAnswers": [
                1,
                2
              ],
              "explanation": "Geoproximity Routing permite enrutar tráfico basándose en la distancia geográfica entre los usuarios y los recursos, requiriendo el uso de Route 53 Traffic Flow. Se utiliza el parámetro 'Bias' (de -99 a +99) para expandir o encoger dinámicamente el área geográfica que atiende un determinado recurso."
            }
          ]
        },
        {
          "id": 11,
          "title": "Día 11: Estrategias de Disaster Recovery (DR)",
          "summary": "RTO vs RPO, Backup & Restore, Pilot Light, Warm Standby y Multi-Site Active-Active.",
          "readTime": "20 min lectura",
          "contentHtml": "\n            <h2>4. Disaster Recovery en AWS</h2>\n            <p>Toda estrategia de recuperación ante desastres gira en torno a dos métricas del negocio:</p>\n            <ul>\n              <li><strong>RTO (Recovery Time Objective):</strong> Tiempo máximo tolerable de inactividad de la aplicación.</li>\n              <li><strong>RPO (Recovery Point Objective):</strong> Cantidad máxima de datos perdidos tolerable en el tiempo.</li>\n            </ul>\n            <h3>Las 4 Estrategias de DR (de menor costo a menor tiempo):</h3>\n            <ol>\n              <li><strong>Backup & Restore:</strong> Datos respaldados en S3/Glacier; la infraestructura se reconstruye desde cero al fallar (RTO/RPO de horas o días).</li>\n              <li><strong>Pilot Light:</strong> Los datos se replican continuamente a una base de datos secundaria activa, pero las instancias de cómputo están apagadas o configuradas como plantillas (RTO en decenas de minutos).</li>\n              <li><strong>Warm Standby:</strong> Una réplica reducida y funcional de todo el sistema corre 24/7 en la segunda región; ante desastre, el ASG escala la capacidad al 100% (RTO en minutos).</li>\n              <li><strong>Multi-Site Active/Active:</strong> Cargas de trabajo corriendo a capacidad total en múltiples regiones concurrentemente (RTO y RPO prácticamente cero; mayor costo).</li>\n            </ol>\n          ",
          "quiz": [
            {
              "id": "d11-q1",
              "scenarioTag": "Dominio 2: Estrategias de DR & RTO / RPO",
              "question": "Una institución financiera posee una aplicación crítica de pagos y requiere diseñar una estrategia de Disaster Recovery (DR) ante fallas en su región principal. Los requisitos del negocio son: RPO de menos de 10 minutos y RTO de menos de 15 minutos, manteniendo los costos en la región de contingencia sensiblemente inferiores a un despliegue activo-activo completo. ¿Qué estrategia de DR equilibra mejor estos requisitos?",
              "options": [
                "A) Backup and Restore.",
                "B) Multi-Region Active-Active.",
                "C) Warm Standby (con una versión a escala reducida de la infraestructura ejecutándose continuamente en la región secundaria).",
                "D) Pilot Light (con solo los datos sincronizados y servidores apagados)."
              ],
              "correctAnswer": 2,
              "explanation": "Warm Standby mantiene una copia funcional del sistema a escala reducida (con instancias mínimas encendidas y BD sincronizada) lista en la región de recuperación. Permite cumplir un RTO de minutos (solo requiere escalar las instancias) y un RPO bajo, a una fracción del costo de un entorno activo-activo completo."
            },
            {
              "id": "d11-q2",
              "scenarioTag": "Dominio 2: Estrategia Multi-Region Active-Active",
              "question": "Una plataforma de trading de criptomonedas no tolera ninguna pérdida de transacciones (RPO = 0) y exige que el servicio continúe operando de inmediato sin intervención humana si una región completa de AWS sufre un corte de servicio masivo (RTO cercano a cero). ¿Qué arquitectura de recuperación ante desastres cumple con esta exigencia?",
              "options": [
                "A) Pilot Light con CloudFormation desplegado por script de emergencia.",
                "B) Multi-Site Active-Active desplegado en múltiples regiones, con Amazon Aurora Global Database y Amazon DynamoDB Global Tables con replicación bidireccional continua.",
                "C) Backup and Restore diario hacia un bucket S3 estándar.",
                "D) Warm Standby con conmutación manual de registros CNAME en Route 53."
              ],
              "correctAnswer": 1,
              "explanation": "La estrategia Multi-Site Active-Active atiende tráfico simultáneamente desde múltiples regiones de AWS. Si una región colapsa, el tráfico de los usuarios simplemente se redirige a la otra región sin tiempo de inactividad perceptible, logrando RTO ≈ 0 y RPO ≈ 0 (o subsegundo)."
            },
            {
              "id": "d11-q3",
              "scenarioTag": "Dominio 2: Protección contra Ransomware & S3 Object Lock",
              "question": "Un banco exige implementar una política de respaldo inmutable contra ataques de ransomware y posibles administradores malintencionados. Los archivos de backup almacenados en Amazon S3 deben conservarse durante 7 años y NINGÚN usuario de IAM ni el usuario Root de la cuenta deben tener la capacidad de eliminarlos o modificarlos durante ese período. ¿Qué solución garantiza esta inmutabilidad?",
              "options": [
                "A) Configurar Multi-Factor Authentication (MFA) Delete en el bucket de S3.",
                "B) Habilitar S3 Object Lock en modo Cumplimiento (Compliance Mode) con un período de retención de 7 años.",
                "C) Almacenar los archivos en volúmenes EBS con instantáneas diarias.",
                "D) Configurar una política de ciclo de vida para enviar los objetos a S3 Glacier Deep Archive tras 30 días."
              ],
              "correctAnswer": 1,
              "explanation": "S3 Object Lock en modo Cumplimiento (Compliance Mode) impide que un objeto sea eliminado o modificado por cualquier usuario, incluyendo la cuenta Root de AWS, durante el período de retención fijado. Ofrece almacenamiento inmutable WORM (Write Once, Read Many) requerido por normativas financieras estrictas (SEC Rule 17a-4)."
            },
            {
              "id": "d11-q4",
              "scenarioTag": "Dominio 2: AWS Elastic Disaster Recovery (AWS DRS)",
              "question": "Una corporación aloja 200 servidores físicos y virtuales en un centro de datos on-premises y necesita una solución de Disaster Recovery hacia AWS que mantenga una réplica continua a nivel de bloque de los discos en la nube con un RPO de segundos y costos mínimos de infraestructura en espera. ¿Qué servicio de AWS está diseñado para esto?",
              "options": [
                "A) AWS Elastic Disaster Recovery (AWS DRS).",
                "B) AWS Database Migration Service (AWS DMS).",
                "C) AWS DataSync con sincronización horaria.",
                "D) AWS Snowball Edge Storage Optimized."
              ],
              "correctAnswer": 0,
              "explanation": "AWS Elastic Disaster Recovery (AWS DRS) minimiza el tiempo de inactividad y la pérdida de datos mediante la replicación continua a nivel de bloque de servidores físicos y virtuales desde on-premises (u otra nube/región) a un área de ensayo ligera y de bajo costo en AWS."
            },
            {
              "id": "d11-q5",
              "multi": true,
              "scenarioTag": "Dominio 2: Comparación de Estrategias de DR",
              "question": "Al clasificar las 4 estrategias tradicionales de Disaster Recovery en AWS por costo y tiempo de recuperación (RTO/RPO), ¿cuáles de las siguientes afirmaciones son correctas? (Selecciona DOS)",
              "options": [
                "A) Backup and Restore es la opción con el menor costo de infraestructura, pero con el mayor RTO y RPO.",
                "B) Pilot Light tiene un RTO menor que Warm Standby porque no requiere mantener bases de datos.",
                "C) Multi-Site Active-Active es la estrategia más costosa y compleja, pero ofrece el menor RTO y RPO.",
                "D) Warm Standby nunca tiene bases de datos encendidas en la región de contingencia.",
                "E) Backup and Restore garantiza un RPO de cero segundos."
              ],
              "correctAnswers": [
                0,
                2
              ],
              "explanation": "En el espectro de DR de AWS: Backup & Restore es la más económica con RTO/RPO de horas/días; Pilot Light mantiene los datos sincronizados y servidores apagados; Warm Standby tiene infraestructura encendida a escala reducida; y Multi-Site Active-Active es la más costosa con RTO/RPO en tiempo real."
            },
            {
              "id": "d11-q6",
              "scenarioTag": "Dominio 2: RPO vs RTO (Definiciones)",
              "question": "Durante una auditoría de continuidad de negocio, se define que el Recovery Point Objective (RPO) es de 1 hora y el Recovery Time Objective (RTO) es de 4 horas. ¿Qué significan estas métricas?",
              "options": [
                "A) El sistema puede perder hasta 4 horas de datos y debe tardar un máximo de 1 hora en volver a operar.",
                "B) El sistema puede tolerar una pérdida máxima de datos equivalente a 1 hora de transacciones (RPO), y el tiempo máximo admisible para restaurar el servicio es de 4 horas (RTO).",
                "C) Los backups se deben realizar cada 4 horas y restaurarse en 1 minuto.",
                "D) El tiempo total del contrato de soporte es de 4 horas."
              ],
              "correctAnswer": 1,
              "explanation": "El RPO (Recovery Point Objective) es la cantidad máxima aceptable de tiempo de datos perdidos medida desde el momento de la falla hacia atrás en el tiempo. El RTO (Recovery Time Objective) es la duración máxima aceptable de tiempo transcurrido desde la falla hasta que el sistema vuelve a estar operativo."
            },
            {
              "id": "d11-q7",
              "scenarioTag": "Dominio 2: AWS Backup Centralizado Multi-Región",
              "question": "Una corporación utiliza múltiples servicios de AWS (Amazon RDS, Amazon DynamoDB, Amazon EBS y Amazon EFS) a lo largo de varias cuentas. El oficial de cumplimiento exige centralizar la gestión de políticas de respaldo, garantizar la copia cruzada de backups hacia una región secundaria de AWS y bloquear la eliminación prematura de los respaldos mediante AWS Backup Vault Lock. ¿Qué servicio proporciona esta gestión unificada?",
              "options": [
                "A) Amazon CloudWatch Synthetics.",
                "B) Scripts personalizados de cron en instancias EC2 con AWS CLI.",
                "C) AWS Backup.",
                "D) AWS Data Pipeline."
              ],
              "correctAnswer": 2,
              "explanation": "AWS Backup es un servicio de respaldo centralizado y completamente gestionado que automatiza la protección de datos en múltiples servicios de AWS (EBS, RDS, DynamoDB, EFS, S3, etc.), admitiendo copias entre cuentas y regiones, planes de retención y Vault Lock para inmutabilidad."
            },
            {
              "id": "d11-q8",
              "scenarioTag": "Dominio 2: Estrategia Pilot Light",
              "question": "¿Cuál es la característica principal de la estrategia de recuperación ante desastres conocida como Pilot Light?",
              "options": [
                "A) Los datos críticos se replican continuamente en la región de recuperación, pero los servidores de cómputo y la infraestructura de aplicación se mantienen apagados o no aprovisionados hasta que ocurre un desastre.",
                "B) Todas las instancias de cómputo operan al 100% de capacidad en ambas regiones simultáneamente.",
                "C) Los datos se guardan en cintas magnéticas físicas y se envían por correo postal.",
                "D) Se utiliza un grupo electrógeno diésel conectado a la VPC."
              ],
              "correctAnswer": 0,
              "explanation": "En Pilot Light, el núcleo de los datos se mantiene vivo y replicado continuamente (como la llama piloto de un calentador de gas), pero la infraestructura de procesamiento (servidores web y de aplicación) se aprovisiona rápidamente a partir de plantillas (AMI, CloudFormation) únicamente en caso de desastre."
            },
            {
              "id": "d11-q9",
              "scenarioTag": "Dominio 2: Replicación de Datos en Aurora Global Database",
              "question": "Una empresa global requiere una base de datos relacional MySQL con réplicas de lectura en tres continentes y capacidad de conmutación por error en menos de un minuto ante una interrupción regional completa. ¿Cuál es el retraso de replicación típico de Amazon Aurora Global Database?",
              "options": [
                "A) Más de 30 minutos debido a la distancia de la fibra submarina.",
                "B) Menos de 1 segundo utilizando replicación dedicada a nivel de la capa de almacenamiento de almacenamiento distribuido de Aurora.",
                "C) Exactamente 1 hora programada en ventanas de mantenimiento nocturno.",
                "D) Depende del ancho de banda del Internet Gateway local."
              ],
              "correctAnswer": 1,
              "explanation": "Amazon Aurora Global Database utiliza infraestructura de almacenamiento dedicada en la red troncal de AWS para replicar datos entre regiones típicamente en menos de 1 segundo, permitiendo lecturas locales rápidas y Disaster Recovery interregional con RPO < 1s y RTO < 1 minuto."
            },
            {
              "id": "d11-q10",
              "multi": true,
              "scenarioTag": "Dominio 2: S3 Cross-Region Replication (CRR)",
              "question": "Un Solutions Architect configura S3 Cross-Region Replication (CRR) entre un bucket origen en us-east-1 y un bucket destino en eu-west-1. ¿Cuáles de los siguientes requisitos son obligatorios para que la replicación funcione? (Selecciona DOS)",
              "options": [
                "A) El control de versiones (Versioning) debe estar habilitado tanto en el bucket de origen como en el bucket de destino.",
                "B) El bucket de origen debe tener un IAM Role con permisos de lectura en el origen y escritura/replicación en el destino.",
                "C) Ambos buckets deben pertenecer al mismo bloque CIDR de red.",
                "D) Los nombres de ambos buckets deben ser exactamente idénticos.",
                "E) Se debe eliminar el cifrado KMS en todos los objetos."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "Para que S3 Cross-Region Replication (CRR) funcione, Versioning debe estar obligatoriamente habilitado en ambos buckets, y se debe proporcionar un IAM Role que otorgue permisos a S3 para leer objetos del bucket origen y replicarlos en el bucket destino."
            }
          ]
        },
        {
          "id": 12,
          "title": "Día 12: Desacoplamiento con SQS, SNS y EventBridge",
          "summary": "Colas de mensajes, patrón Fan-Out, visibilidad en SQS y buses de eventos serverless.",
          "readTime": "30 min lectura",
          "contentHtml": "\n            <h2>5. Arquitecturas Asincrónicas y Desacopladas</h2>\n\n            <h3>Amazon SQS (Simple Queue Service)</h3>\n            <ul>\n              <li><strong>Modelo Pull:</strong> Los consumidores consultan la cola para recibir mensajes.</li>\n              <li><strong>Visibility Timeout:</strong> Periodo durante el cual el mensaje queda oculto para otros workers mientras se procesa (por defecto 30 segundos, máx 12 horas).</li>\n              <li><strong>Long Polling (WaitTimeSeconds hasta 20s):</strong> Reduce llamadas vacías y disminuye costos significativamente.</li>\n              <li><strong>SQS Standard vs FIFO:</strong> FIFO garantiza orden estricto y entrega exactamente una vez (nombre terminado en <code>.fifo</code>).</li>\n            </ul>\n\n            <h3>Amazon SNS (Simple Notification Service) & Patrón Fan-Out</h3>\n            <p>Modelo <strong>Push (Pub/Sub)</strong>. Un publicador envía un mensaje a un tema (Topic), y SNS lo replica simultáneamente a múltiples suscriptores (colas SQS, Lambdas, endpoints HTTP). Permite <strong>Message Filtering</strong> para que cada cola reciba solo los mensajes relevantes según sus atributos.</p>\n          ",
          "quiz": [
            {
              "id": "d12-q1",
              "scenarioTag": "Dominio 2: Patrón Fan-Out (SNS + SQS)",
              "question": "Un portal de e-commerce procesa compras a través de una API. Cuando se confirma una orden, el evento debe disparar simultáneamente tres acciones independientes: procesar el cobro bancario, actualizar el inventario y enviar un email al cliente. Cada uno de estos tres subsistemas tiene velocidades de procesamiento distintas y no deben bloquearse entre sí. ¿Qué patrón arquitectónico desacopla estos servicios de forma óptima?",
              "options": [
                "A) Implementar el patrón Fan-Out: publicar el evento de compra en un tema de Amazon SNS, y suscribir tres colas de Amazon SQS independientes (una para pagos, una para inventario y una para notificaciones) al tema de SNS.",
                "B) Publicar el evento en una única cola de Amazon SQS y hacer que los tres procesos compitan por leer el mismo mensaje.",
                "C) Configurar una base de datos relacional central con un campo booleano 'procesado' que los tres servicios consulten cada 100 ms.",
                "D) Invocar secuencialmente tres endpoints HTTP sincrónicos desde el frontend."
              ],
              "correctAnswer": 0,
              "explanation": "El patrón Fan-Out utiliza un tema de Amazon SNS al que se suscriben múltiples colas de Amazon SQS. Cuando se publica un mensaje en SNS, se distribuye en paralelo a todas las colas suscritas, permitiendo que cada consumidor procese a su propio ritmo sin acoplamiento."
            },
            {
              "id": "d12-q2",
              "scenarioTag": "Dominio 2: Procesamiento Estrictamente Secuencial (SQS FIFO)",
              "question": "Una entidad bursátil requiere procesar órdenes de compra y venta de acciones donde el orden cronológico exacto de ejecución es obligatorio y ningún mensaje debe procesarse más de una vez (garantía de procesamiento exactly-once). ¿Qué componente de mensajería debe utilizarse?",
              "options": [
                "A) Amazon SQS Standard Queue con un Visibility Timeout de 10 minutos.",
                "B) Amazon Kinesis Data Streams con 100 fragmentos aleatorios.",
                "C) Amazon SQS FIFO Queue con deduplicación de mensajes y Message Group ID para mantener el orden estricto de las transacciones.",
                "D) Amazon SNS Standard Topic con reintentos lineales."
              ],
              "correctAnswer": 2,
              "explanation": "Amazon SQS FIFO (First-In-First-Out) garantiza el orden estricto de los mensajes dentro de un Message Group ID y entrega exactamente una vez (exactly-once processing) gracias a la deduplicación de mensajes, ideal para operaciones bancarias y bursátiles."
            },
            {
              "id": "d12-q3",
              "scenarioTag": "Dominio 2: Visibilidad en SQS (Visibility Timeout)",
              "question": "Un consumidor de Amazon SQS lee un mensaje de la cola. El procesamiento del trabajo suele tardar 45 segundos, pero el Visibility Timeout predeterminado de la cola está fijado en 30 segundos. ¿Qué problema ocurrirá en la arquitectura si no se modifica esta configuración?",
              "options": [
                "A) El mensaje se eliminará automáticamente de la cola a los 30 segundos.",
                "B) Al cumplirse los 30 segundos, el mensaje vuelve a ser visible en la cola y otro consumidor lo tomará, provocando procesamiento duplicado del mensaje.",
                "C) La cola SQS arrojará una excepción de ThrottleException y se detendrá.",
                "D) La instancia EC2 consumidora será reiniciada por el hipervisor."
              ],
              "correctAnswer": 1,
              "explanation": "El Visibility Timeout es el período durante el cual SQS oculta un mensaje a otros consumidores mientras está siendo procesado. Si el tiempo de procesamiento excede el Visibility Timeout, el mensaje vuelve a estar visible en la cola y otro consumidor lo leerá, provocando procesamiento duplicado."
            },
            {
              "id": "d12-q4",
              "scenarioTag": "Dominio 2: Dead-Letter Queues (DLQ) en SQS",
              "question": "Una aplicación procesa imágenes a través de una cola SQS. Algunos archivos corruptos generan errores fatales en los consumidores, provocando que el mensaje regrese a la cola repetidamente y bloquee a los consumidores en bucles infinitos. ¿Qué mecanismo permite aislar estos mensajes problemáticos para su posterior análisis?",
              "options": [
                "A) Reducir la retención de mensajes en la cola a 60 segundos.",
                "B) Aumentar el tamaño máximo de mensaje a 2 GB.",
                "C) Configurar una Dead-Letter Queue (DLQ) asociada a la cola principal con una política de reintentos (maxReceiveCount).",
                "D) Desactivar las políticas de escalado del Auto Scaling Group."
              ],
              "correctAnswer": 2,
              "explanation": "Una Dead-Letter Queue (DLQ) en Amazon SQS permite capturar y aislar mensajes que no pudieron procesarse exitosamente tras un número configurado de intentos fallidos (maxReceiveCount), evitando que bloqueen la cola principal y permitiendo a los desarrolladores analizar la causa del fallo."
            },
            {
              "id": "d12-q5",
              "multi": true,
              "scenarioTag": "Dominio 2: Amazon EventBridge & Buses de Eventos",
              "question": "Una empresa desea construir una arquitectura orientada a eventos para procesar cambios de estado en recursos de AWS y eventos provenientes de aplicaciones SaaS de terceros (como Zendesk o Datadog). ¿Cuáles de las siguientes características de Amazon EventBridge hacen que sea la solución más adecuada frente a Amazon SNS? (Selecciona DOS)",
              "options": [
                "A) EventBridge soporta buses de eventos personalizados y buses de eventos de aplicaciones SaaS asociadas nativamente.",
                "B) EventBridge soporta filtrado basado en el contenido del cuerpo JSON del evento (content-based filtering) y transformación de eventos antes de entregarlos al destino.",
                "C) EventBridge no permite conectarse con funciones AWS Lambda.",
                "D) EventBridge requiere desplegar clusters de EC2 dedicados para gestionar los tópicos.",
                "E) EventBridge solo funciona dentro de una sola Availability Zone."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "Amazon EventBridge es un bus de eventos serverless que destaca por su integración nativa con servicios de AWS y partners SaaS de terceros, filtrado avanzado basado en patrones y contenido en el payload JSON del evento, y capacidades de transformación y retransmisión de eventos."
            },
            {
              "id": "d12-q6",
              "scenarioTag": "Dominio 2: Long Polling vs Short Polling en SQS",
              "question": "Un Solutions Architect observa altos costos en su factura de AWS asociados a millones de solicitudes API 'ReceiveMessage' vacías en colas de Amazon SQS con poco tráfico continuo. ¿Qué configuración debe aplicarse en la cola para reducir drásticamente el número de llamadas a la API y el costo asociado?",
              "options": [
                "A) Cambiar el ReceiveMessageWaitTimeSeconds a un valor mayor a 0 (hasta 20 segundos) para habilitar Long Polling.",
                "B) Eliminar la cola y reemplazarla por Amazon Simple Email Service (SES).",
                "C) Habilitar Short Polling configurando el tiempo de espera en 0 segundos.",
                "D) Duplicar la cantidad de instancias EC2 que leen la cola."
              ],
              "correctAnswer": 0,
              "explanation": "Long Polling (configurar ReceiveMessageWaitTimeSeconds entre 1 y 20 segundos) reduce costos y llamadas vacías a la API haciendo que SQS espere hasta que haya mensajes disponibles antes de responder a la petición ReceiveMessage, a diferencia de Short Polling que responde inmediatamente aunque la cola esté vacía."
            },
            {
              "id": "d12-q7",
              "scenarioTag": "Dominio 2: Filtrado de Mensajes en Amazon SNS",
              "question": "Un tema de Amazon SNS recibe notificaciones de transacciones de comercio electrónico para todos los países del mundo. Un microservicio local en Brasil sólo necesita procesar eventos donde el atributo 'country' sea 'BR'. ¿Cuál es la forma más eficiente de entregar únicamente estos mensajes a la cola SQS de Brasil sin desperdiciar recursos de cómputo en filtrar?",
              "options": [
                "A) Hacer que el microservicio de Brasil consuma todos los mensajes del mundo y descarte los que no sean de BR mediante código en la aplicación.",
                "B) Configurar una Subscription Filter Policy (Política de Filtrado de Suscripción) en la suscripción de SNS de la cola brasileña para que SNS entregue únicamente mensajes donde 'country' sea igual a 'BR'.",
                "C) Crear una cola separada por cada ciudad de Brasil.",
                "D) Reemplazar SNS por un clúster de Amazon OpenSearch."
              ],
              "correctAnswer": 1,
              "explanation": "Las Subscription Filter Policies de Amazon SNS permiten filtrar mensajes basándose en atributos o payload a nivel del propio servicio de mensajería, asegurando que la cola suscriptora reciba única y exclusivamente los mensajes relevantes, reduciendo el tráfico y la sobrecarga computacional del consumidor."
            },
            {
              "id": "d12-q8",
              "scenarioTag": "Dominio 2: Manejo de Cargas Pesadas en SQS (Extended Client)",
              "question": "Una aplicación médica requiere enviar resultados de resonancias magnéticas que pesan en promedio 15 MB a través de una cola de mensajería para su procesamiento asíncrono. SQS tiene un límite máximo de tamaño de mensaje de 256 KB. ¿Cuál es la solución recomendada por AWS?",
              "options": [
                "A) Comprimir el archivo con GZIP hasta que quepa en 256 KB.",
                "B) Dividir el archivo binario en 60 mensajes de SQS y ensamblarlos manualmente.",
                "C) Almacenar el archivo médico en un bucket de Amazon S3 y enviar el puntero o clave de referencia del objeto en el mensaje de SQS utilizando la biblioteca Amazon SQS Extended Client Library for Java/Python.",
                "D) Solicitar a AWS Support un incremento de límite de payload de SQS a 50 MB."
              ],
              "correctAnswer": 2,
              "explanation": "La biblioteca Amazon SQS Extended Client permite manejar mensajes que exceden el límite de 256 KB almacenando automáticamente el payload pesado en un bucket de Amazon S3 y enviando un puntero en el mensaje de SQS. Al leer el mensaje, la biblioteca descarga el contenido de S3 de forma transparente."
            },
            {
              "id": "d12-q9",
              "scenarioTag": "Dominio 2: Archivo y Repetición de Eventos en EventBridge",
              "question": "Un equipo de desarrollo lanza un nuevo microservicio con un defecto de software que provocó el descarte accidental de miles de eventos de negocio durante 6 horas. Afortunadamente, los eventos pasaban por Amazon EventBridge. ¿Qué funcionalidad de EventBridge permite recuperar y volver a procesar esos eventos históricos?",
              "options": [
                "A) EventBridge Schema Discovery.",
                "B) EventBridge Archive and Replay (Archivo y Reproducción de Eventos).",
                "C) Amazon CloudWatch Logs Insights.",
                "D) AWS X-Ray Trace Analytics."
              ],
              "correctAnswer": 1,
              "explanation": "EventBridge Archive and Replay permite almacenar de forma duradera todos los eventos que pasan por un bus de eventos en un archivo con un período de retención específico, y luego reproducir (replay) los eventos pasados desde una fecha y hora determinada hacia destinos para recuperar datos tras fallos."
            },
            {
              "id": "d12-q10",
              "multi": true,
              "scenarioTag": "Dominio 2: SQS Delay Queues vs Message Timers",
              "question": "¿Cuáles de las siguientes afirmaciones sobre el retraso en la entrega de mensajes en Amazon SQS son correctas? (Selecciona DOS)",
              "options": [
                "A) Una Delay Queue pospone la entrega de TODOS los mensajes agregados a la cola durante el número de segundos especificado (DelaySeconds).",
                "B) Los Message Timers permiten especificar un retraso inicial para un mensaje INDIVIDUAL específico al enviarlo a una cola estándar.",
                "C) El retraso máximo que se puede configurar en una Delay Queue o Message Timer es de 15 minutos (900 segundos).",
                "D) El retraso de mensajes solo se puede habilitar si la cola está vacía durante 24 horas.",
                "E) Una cola con retraso borra los mensajes después de 5 minutos."
              ],
              "correctAnswers": [
                0,
                2
              ],
              "explanation": "En SQS, DelaySeconds pospone la visibilidad de los mensajes recién llegados (hasta un máximo de 15 minutos / 900 segundos). Las Delay Queues aplican este retraso a todos los mensajes de la cola, mientras que los Message Timers permiten aplicarlo a mensajes individuales."
            }
          ]
        }
      ]
    },
    {
      "id": "week-3",
      "title": "Semana 3: Almacenamiento, Bases de Datos y Rendimiento",
      "domain": "Dominio 3: Design High-Performing Architectures (24%)",
      "days": [
        {
          "id": 15,
          "title": "Día 15: Amazon S3 en Profundidad",
          "summary": "Clases de almacenamiento, ciclos de vida, replicación (CRR/SRR) y S3 Object Lock.",
          "readTime": "25 min lectura",
          "contentHtml": "\n            <h2>1. Amazon S3 (Simple Storage Service)</h2>\n            <p>Almacenamiento de objetos ilimitado con durabilidad de <strong>99.999999999% (11 nueves)</strong>.</p>\n            <h3>Clases de Almacenamiento:</h3>\n            <ul>\n              <li><strong>S3 Standard:</strong> Acceso frecuente, baja latencia en milisegundos.</li>\n              <li><strong>S3 Intelligent-Tiering:</strong> Clasificación automática sin penalizaciones de recuperación para datos con patrones desconocidos o cambiantes.</li>\n              <li><strong>S3 Standard-IA:</strong> Acceso poco frecuente pero inmediato (tarifa por recuperación).</li>\n              <li><strong>S3 One Zone-IA:</strong> Ahorro del 20%, pero reside en una sola AZ (se pierden datos si la AZ se destruye).</li>\n              <li><strong>S3 Glacier Deep Archive:</strong> Almacenamiento más económico de AWS para retención regulatoria de 7 a 10 años (recuperación en 12 a 48 horas).</li>\n            </ul>\n            <h3>S3 Object Lock (WORM):</h3>\n            <p>Write Once, Read Many. Impide el borrado o sobreescritura de objetos durante un periodo de retención legal (Compliance Mode no puede anularse ni por el usuario Root).</p>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 1: Seguridad & S3 Object Lock (Governance vs Compliance)",
              "question": "Al configurar S3 Object Lock para garantizar inmutabilidad (WORM) de archivos, ¿cuáles de las siguientes diferencias entre los modos Gobernanza (Governance) y Cumplimiento (Compliance) son verdaderas? (Selecciona DOS)",
              "options": [
                "A) En el modo Compliance, NINGÚN usuario, ni siquiera la cuenta Root de AWS, puede eliminar los objetos ni acortar el período de retención durante su vigencia.",
                "B) En el modo Governance, los usuarios con permisos específicos de IAM (como s3:BypassGovernanceRetention) pueden sobrescribir, eliminar o modificar los períodos de retención de los objetos protegidos.",
                "C) El modo Compliance se puede desactivar en cualquier momento haciendo clic en la consola de IAM.",
                "D) El modo Governance solo permite archivos de menos de 1 KB.",
                "E) S3 Object Lock solo está disponible en buckets sin control de versiones."
              ],
              "correctAnswers": [
                0,
                1
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 1: Prevención de Acceso Público en S3",
              "question": "Para prevenir fugas de información accidental en Amazon S3 en toda la organización, ¿cuáles de las siguientes configuraciones de S3 Block Public Access están disponibles y recomendadas? (Selecciona DOS)",
              "options": [
                "A) BlockPublicAcls e IgnorePublicAcls, para bloquear e ignorar permisos públicos otorgados a través de ACLs de objetos o buckets.",
                "B) BlockPublicPolicy y RestrictPublicBuckets, para rechazar Bucket Policies públicas y restringir el acceso a solo usuarios autenticados autorizados.",
                "C) Deshabilitar DNS en la región de AWS.",
                "D) Eliminar todos los usuarios de IAM y usar el usuario root exclusivamente.",
                "E) Desconectar la VPC de Internet permanentemente."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "S3 Block Public Access proporciona 4 configuraciones clave que pueden activarse a nivel de bucket o de cuenta completa: BlockPublicAcls, IgnorePublicAcls, BlockPublicPolicy y RestrictPublicBuckets, proporcionando un blindaje centralizado contra exposiciones involuntarias a Internet."
            }
          ]
        },
        {
          "id": 16,
          "title": "Día 16: EBS, EFS y la Familia Amazon FSx",
          "summary": "Almacenamiento en bloque vs archivos compartidos: EFS para Linux, FSx for Windows, FSx for Lustre.",
          "readTime": "25 min lectura",
          "contentHtml": "\n            <h2>2. Comparativa de Sistemas de Archivos y Bloque</h2>\n            <ul>\n              <li><strong>Amazon EBS:</strong> Almacenamiento en bloque atado a una única AZ. Volúmenes <code>gp3</code> para propósito general y <code>io2 Block Express</code> para bases de datos críticas con Multi-Attach.</li>\n              <li><strong>Amazon EFS:</strong> Sistema de archivos elástico, multi-AZ, basado en NFSv4 para instancias <strong>Linux</strong>. Permite montaje simultáneo en cientos de servidores.</li>\n              <li><strong>Amazon FSx for Windows File Server:</strong> Soporte nativo para protocolo SMB, NTFS e integración directa con Microsoft Active Directory.</li>\n              <li><strong>Amazon FSx for Lustre:</strong> Sistema de archivos de cómputo paralelo masivo y alto rendimiento (HPC, Machine Learning) integrado directamente con S3.</li>\n            </ul>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 3: EBS Snapshots & Ciclo de Vida",
              "question": "¿Cuáles de las siguientes características sobre las instantáneas de Amazon EBS (EBS Snapshots) son verdaderas? (Selecciona DOS)",
              "options": [
                "A) Las instantáneas de EBS son incrementales, lo que significa que solo se guardan los bloques modificados desde la última instantánea, reduciendo los costos de almacenamiento.",
                "B) Las instantáneas de EBS se almacenan internamente de forma duradera en Amazon S3, aunque no son visibles en la lista de buckets de S3 del usuario.",
                "C) Cada instantánea duplica el 100% de los datos del disco independientemente de los cambios.",
                "D) No es posible crear una imagen de máquina de Amazon (AMI) a partir de una instantánea de EBS.",
                "E) Las instantáneas de EBS solo se pueden restaurar en la misma instancia de la que fueron tomadas."
              ],
              "correctAnswers": [
                0,
                1
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 3: Comparación de Modos de Rendimiento en Amazon EFS",
              "question": "¿Cuáles de las siguientes opciones describen correctamente los modos de rendimiento y rendimiento de procesamiento en Amazon Elastic File System (Amazon EFS)? (Selecciona DOS)",
              "options": [
                "A) Elastic Throughput ajusta automáticamente el rendimiento en función de las demandas de la carga de trabajo, facturando solo por los datos leídos o escritos.",
                "B) General Purpose Performance Mode es el modo predeterminado, ideal para servidores web, CMS y entornos de desarrollo con latencias por operación más bajas.",
                "C) Max I/O Performance Mode tiene una latencia por operación menor que General Purpose en todas las operaciones.",
                "D) Amazon EFS solo puede almacenar un máximo de 16 GB por sistema de archivos.",
                "E) Amazon EFS no admite montaje en instancias EC2 que corran Amazon Linux."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "Amazon EFS ofrece Elastic Throughput (escala de rendimiento automática bajo demanda según la actividad) y modo de rendimiento General Purpose (latencias más bajas por operación, recomendado para la mayoría de cargas). Max I/O ofrece mayor escalabilidad para miles de clientes concurrentes a costa de una latencia por operación ligeramente mayor."
            }
          ]
        },
        {
          "id": 17,
          "title": "Día 17: Bases de Datos Relacionales (RDS vs Aurora)",
          "summary": "RDS Multi-AZ vs Read Replicas, arquitectura distribuida de Aurora, Aurora Serverless y Global Database.",
          "readTime": "25 min lectura",
          "contentHtml": "\n            <h2>3. Amazon RDS y Amazon Aurora</h2>\n\n            <h3>Diferencia Vital de Examen: Multi-AZ vs Read Replicas</h3>\n            <ul>\n              <li><strong>Multi-AZ en RDS:</strong> Réplica <strong>sincrónica</strong> pasiva en una segunda AZ. Su único propósito es la <strong>Alta Disponibilidad y Failover automático</strong> (no escala lecturas).</li>\n              <li><strong>Read Replicas en RDS:</strong> Hasta 15 réplicas <strong>asincrónicas</strong>. Su propósito es <strong>escalar el rendimiento de lectura</strong>. Pueden promoverse a bases de datos independientes.</li>\n            </ul>\n\n            <h3>Amazon Aurora</h3>\n            <p>Diseñada para la nube con compatibilidad MySQL y PostgreSQL. Almacena <strong>6 copias de los datos distribuidas en 3 AZs</strong>. Las réplicas comparten el mismo almacenamiento (replicación &lt;10 ms). <strong>Aurora Global Database</strong> permite replicación cross-region en menos de 1 segundo con RTO &lt; 1 minuto.</p>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 2: Amazon RDS Proxy & Agrupamiento de Conexiones",
              "question": "Una aplicación basada en arquitectura sin servidor con cientos de funciones AWS Lambda ejecutándose concurrentemente satura las conexiones de una base de datos relacional Amazon RDS MySQL, provocando errores de 'Too many connections'. ¿Cuáles de las siguientes opciones describen las ventajas de implementar Amazon RDS Proxy? (Selecciona DOS)",
              "options": [
                "A) Agrupa y comparte conexiones a la base de datos (Connection Pooling), reduciendo la sobrecarga de CPU y memoria en el motor de base de datos.",
                "B) Reduce el tiempo de conmutación por error (failover) de RDS Multi-AZ hasta en un 66% preservando las conexiones de la aplicación.",
                "C) Convierte automáticamente consultas SQL relacionales a tablas NoSQL de DynamoDB.",
                "D) Permite omitir la autenticación y las contraseñas en la base de datos.",
                "E) Desactiva los respaldos automáticos de RDS para acelerar las transacciones."
              ],
              "correctAnswers": [
                0,
                1
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 2: Mantenimiento y Actualizaciones en RDS",
              "question": "Al aplicar una actualización de versión menor de motor (minor engine upgrade) o una modificación de hardware en una base de datos Amazon RDS configurada como Multi-AZ, ¿cuáles de las siguientes afirmaciones describen el proceso de AWS? (Selecciona DOS)",
              "options": [
                "A) Las actualizaciones se aplican primero en la instancia standby secundaria; luego ocurre una conmutación por error (failover) rápida, y finalmente se actualiza la instancia original, minimizando la ventana de inactividad.",
                "B) Si se selecciona la opción 'Apply Immediately', la modificación se ejecuta de inmediato pudiendo generar una breve interrupción, en lugar de esperar a la ventana de mantenimiento programada.",
                "C) Se eliminan todos los datos de las tablas y se requiere restaurar desde un backup externo.",
                "D) La dirección DNS del Endpoint de la base de datos cambia permanentemente a un nuevo dominio.",
                "E) Las actualizaciones de RDS solo se pueden realizar mediante la consola de Azure."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "En configuraciones Multi-AZ, AWS minimiza la indisponibilidad actualizando primero la réplica standby, conmutando el tráfico mediante failover y actualizando luego la primaria. La casilla 'Apply Immediately' fuerza la aplicación inmediata en lugar de esperar la ventana de mantenimiento semanal."
            }
          ]
        },
        {
          "id": 18,
          "title": "Día 18: Amazon DynamoDB y Soluciones de Caching",
          "summary": "NoSQL ultra-escalable, DynamoDB Accelerator (DAX), Global Tables y ElastiCache (Redis vs Memcached).",
          "readTime": "25 min lectura",
          "contentHtml": "\n            <h2>4. Bases de Datos NoSQL y Caché en Memoria</h2>\n\n            <h3>Amazon DynamoDB</h3>\n            <ul>\n              <li>Base de datos clave-valor y documentos JSON totalmente administrada y sin servidores.</li>\n              <li>Latencia de lectura y escritura de un solo dígito de milisegundo.</li>\n              <li><strong>DAX (DynamoDB Accelerator):</strong> Caché en memoria dedicada que reduce la latencia de lectura de milisegundos a <strong>microsegundos</strong> sin cambiar el código de la aplicación.</li>\n              <li><strong>Global Tables:</strong> Replicación multi-región activa-activa totalmente administrada (requiere DynamoDB Streams).</li>\n            </ul>\n\n            <h3>Amazon ElastiCache: Redis vs Memcached</h3>\n            <ul>\n              <li><strong>Redis:</strong> Estructuras de datos complejas (sets, hashes, sorted sets), persistencia, réplicas, conmutación por error Multi-AZ y compatibilidad con Pub/Sub.</li>\n              <li><strong>Memcached:</strong> Caché simple de clave-valor pura, multi-hilo, sin persistencia ni failover.</li>\n            </ul>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 2: DynamoDB Global Tables & Replicación Multi-Región",
              "question": "¿Cuáles de las siguientes afirmaciones sobre Amazon DynamoDB Global Tables son correctas? (Selecciona DOS)",
              "options": [
                "A) Proporciona replicación activa-activa totalmente administrada y multi-región entre tablas en diferentes regiones de AWS.",
                "B) Utiliza un mecanismo de resolución de conflictos basado en 'el último que escribe gana' (Last-Writer-Wins) utilizando marcas de tiempo de las actualizaciones.",
                "C) Requiere que las tablas se configuren obligatoriamente en modo Provisioned sin Auto Scaling.",
                "D) DynamoDB Streams debe estar desactivado en todas las tablas participantes.",
                "E) Solo admite una única tabla de lectura en la región de Virginia del Norte."
              ],
              "correctAnswers": [
                0,
                1
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 3: Estrategias de Caching (Lazy Loading vs Write-Through)",
              "question": "Al diseñar una estrategia de almacenamiento en caché para una base de datos relacional con Amazon ElastiCache, ¿cuáles de las siguientes afirmaciones sobre los patrones de caché son verdaderas? (Selecciona DOS)",
              "options": [
                "A) Lazy Loading (Cache-Aside) solo carga datos en la caché cuando ocurre un fallo de caché (cache miss), evitando llenar la memoria con datos que nunca se solicitan.",
                "B) Write-Through escribe datos en la caché cada vez que se escribe en la base de datos, garantizando que los datos en la caché estén siempre actualizados, pero aumentando la latencia de escritura inicial.",
                "C) Lazy Loading garantiza que los datos en la caché nunca se vuelvan obsoletos (stale data) sin necesidad de TTL.",
                "D) Write-Through elimina automáticamente la base de datos si la memoria RAM se agota.",
                "E) Ni Lazy Loading ni Write-Through son compatibles con bases de datos relacionales."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "Lazy Loading solo recupera y almacena datos en caché cuando la aplicación no los encuentra en la caché (cache miss), ahorrando memoria pero pudiendo servir datos obsoletos si no se combina con TTL. Write-Through actualiza la caché simultáneamente con cada escritura en la base de datos, asegurando datos frescos."
            }
          ]
        },
        {
          "id": 19,
          "title": "Día 19: Entrega Global (CloudFront vs Global Accelerator)",
          "summary": "CDN global, Origin Access Control (OAC), CloudFront Functions vs Lambda@Edge, Anycast IP routing.",
          "readTime": "25 min lectura",
          "contentHtml": "\n            <h2>5. Aceleración de Red y Contenido Global</h2>\n\n            <h3>Amazon CloudFront</h3>\n            <ul>\n              <li>Red de distribución de contenido (CDN) con caché en más de 450 Edge Locations.</li>\n              <li>Acelera contenido estático y dinámico HTTP/HTTPS.</li>\n              <li><strong>Origin Access Control (OAC):</strong> Mecanismo moderno para asegurar que un bucket S3 solo pueda ser leído a través de CloudFront y nunca directamente.</li>\n              <li><strong>CloudFront Functions:</strong> JavaScript ligero, ejecución sub-milisegundo para headers y redirecciones.</li>\n              <li><strong>Lambda@Edge:</strong> Node/Python para transformaciones pesadas, acceso a red y procesamiento de body.</li>\n            </ul>\n\n            <h3>AWS Global Accelerator</h3>\n            <ul>\n              <li>Enruta tráfico a través de la red troncal privada de AWS usando <strong>2 direcciones IP Anycast estáticas</strong>.</li>\n              <li>Soporta protocolos <strong>TCP y UDP</strong> (ideal para juegos, VoIP, IoT).</li>\n              <li>No almacena contenido en caché; solo acelera el transporte de red y ejecuta failover rápido entre regiones.</li>\n            </ul>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 3: CloudFront Caching & Headers",
              "question": "¿Cuáles de las siguientes afirmaciones sobre la optimización de almacenamiento en caché en Amazon CloudFront son verdaderas? (Selecciona DOS)",
              "options": [
                "A) El uso de políticas de clave de caché (Cache Key Policies) optimizadas que restrinjan qué encabezados, cookies y parámetros de consulta se incluyen en la clave de caché mejora sustancialmente la tasa de aciertos de caché (Cache Hit Ratio).",
                "B) Reenviar todos los encabezados HTTP (Forward all headers) a un origen en CloudFront hace que CloudFront eluda la caché y pase cada solicitud directamente al origen.",
                "C) El TTL máximo permitido en CloudFront es de 5 segundos.",
                "D) CloudFront no puede almacenar en caché contenido dinámico generado por APIs.",
                "E) CloudFront elimina los archivos de la caché cada 60 minutos obligatoriamente."
              ],
              "correctAnswers": [
                0,
                1
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 2: Características de AWS Global Accelerator",
              "question": "¿Cuáles de las siguientes características distinguen a AWS Global Accelerator como solución de red global? (Selecciona DOS)",
              "options": [
                "A) Proporciona 2 direcciones IP Anycast estáticas globales que no cambian, simplificando la configuración de firewalls de clientes corporativos.",
                "B) Realiza comprobaciones de salud (Health Checks) continuas y conmuta el tráfico a endpoints saludables en otra región en menos de 30 segundos sin depender del TTL de DNS.",
                "C) Almacena en caché imágenes y videos en discos SSD locales de las ubicaciones perimetrales.",
                "D) Modifica el código HTML de las páginas web para eliminar scripts pesados.",
                "E) Solo funciona con bases de datos relacionales locales."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "AWS Global Accelerator proporciona 2 direcciones IP Anycast estáticas mundiales que sirven como punto de entrada fijo a la red troncal de AWS. Monitorea continuamente la salud de los endpoints (ALBs, NLBs, EC2) y redirige instantáneamente el tráfico ante fallos sin esperar a la propagación del TTL de DNS."
            }
          ]
        }
      ]
    },
    {
      "id": "week-4",
      "title": "Semana 4: Optimización de Costos, Conectividad Híbrida y Simulador Final",
      "domain": "Dominio 4: Design Cost-Optimized Architectures (20%)",
      "days": [
        {
          "id": 22,
          "title": "Día 22: Optimización de Costos y Métodos de Compra",
          "summary": "Savings Plans vs Spot Instances, VPC Gateway Endpoints vs NAT Gateway, Compute Optimizer.",
          "readTime": "25 min lectura",
          "contentHtml": "\n            <h2>1. Optimización de Costos en AWS (Dominio 4)</h2>\n            <p>Diseñar soluciones rentables requiere comprender el modelo de costos de cómputo, almacenamiento y redes.</p>\n\n            <h3>Estrategias Clave de Ahorro:</h3>\n            <ul>\n              <li><strong>EC2 Spot Instances:</strong> Ahorro de hasta el 90% para cargas tolerantes a fallos (procesamiento batch, render, big data). NUNCA para bases de datos críticas.</li>\n              <li><strong>Compute Savings Plans:</strong> Compromiso de gasto ($/h) por 1 o 3 años con hasta 66% de descuento aplicable automáticamente a EC2, Fargate y Lambda.</li>\n              <li><strong>VPC Gateway Endpoints para S3 y DynamoDB:</strong> Totalmente gratuitos. Evitan que las instancias en subnets privadas paguen tarifas de NAT Gateway ($0.045/GB) al comunicarse con S3 o DynamoDB.</li>\n              <li><strong>AWS Compute Optimizer:</strong> Utiliza ML para detectar instancias sobre-dimensionadas y sugerir el tipo de máquina óptimo.</li>\n            </ul>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 4: Dimensionamiento Correcto (AWS Compute Optimizer)",
              "question": "¿Cuáles de las siguientes capacidades son provistas por AWS Compute Optimizer para reducir el desperdicio de recursos en la nube? (Selecciona DOS)",
              "options": [
                "A) Analiza métricas históricas de utilización de recursos (CPU, memoria, almacenamiento EBS, red) mediante machine learning.",
                "B) Genera recomendaciones accionables de dimensionamiento adecuado (rightsizing) para instancias EC2, volúmenes EBS, funciones Lambda y servicios ECS.",
                "C) Borra automáticamente servidores de base de datos que no tengan usuarios conectados.",
                "D) Prohíbe a los desarrolladores utilizar la consola de administración de AWS.",
                "E) Convierte automáticamente aplicaciones PHP en contenedores Docker."
              ],
              "correctAnswers": [
                0,
                1
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 4: Limpieza de Recursos Huérfanos",
              "question": "¿Cuáles de las siguientes prácticas ayudan a eliminar costos innecesarios producidos por recursos huérfanos o desatendidos en cuentas de AWS? (Selecciona DOS)",
              "options": [
                "A) Identificar y eliminar volúmenes Amazon EBS no adjuntos (estado 'available') y Elastic IP addresses asignadas que no estén asociadas a ninguna instancia activa.",
                "B) Configurar una regla de ciclo de vida en Amazon S3 para abortar cargas multiparte incompletas (Abort incomplete multipart uploads) después de un número determinado de días.",
                "C) Desconectar el Internet Gateway de las subredes públicas para evitar que el tráfico fluya.",
                "D) Desactivar las comprobaciones de estado de los balanceadores de carga.",
                "E) Convertir los registros DNS de Route 53 en subdominios de tercer nivel."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "Los volúmenes EBS no adjuntos continúan cobrando almacenamiento en GB-mes, y las Elastic IPs no asociadas generan cargos por hora para incentivar la liberación de direcciones IPv4 escasas. Asimismo, las partes no finalizadas de cargas multiparte en S3 acumulan costos de almacenamiento en el bucket hasta que se abortan o eliminan."
            }
          ]
        },
        {
          "id": 23,
          "title": "Día 23: Redes Avanzadas e Híbridas (Transit Gateway vs Direct Connect)",
          "summary": "Interconexión multi-VPC, enrutamiento transitivo, Direct Connect vs Site-to-Site VPN y PrivateLink.",
          "readTime": "25 min lectura",
          "contentHtml": "\n            <h2>2. Redes Avanzadas y Conectividad Híbrida</h2>\n\n            <h3>Transit Gateway vs VPC Peering</h3>\n            <ul>\n              <li><strong>VPC Peering:</strong> Punto a punto 1 a 1. <strong>No permite enrutamiento transitivo</strong>. Económico para conectar 2 o 3 VPCs.</li>\n              <li><strong>AWS Transit Gateway (TGW):</strong> Hub centralizado tipo estrella (Hub-and-Spoke). Conecta miles de VPCs, VPNs y Direct Connect. <strong>Soporta enrutamiento transitivo</strong> y multicast.</li>\n            </ul>\n\n            <h3>Direct Connect (DX) vs Site-to-Site VPN</h3>\n            <ul>\n              <li><strong>AWS Direct Connect:</strong> Línea física dedicada y privada (1, 10, 100 Gbps). Ultra-baja latencia y ancho de banda constante. <strong>No viene cifrado por defecto</strong> (debe montarse una VPN IPsec encima si se exige cifrado en tránsito).</li>\n              <li><strong>Site-to-Site VPN:</strong> Túnel cifrado IPsec a través de internet pública. Rápido de configurar en minutos; límite de 1.25 Gbps por túnel. Excelente respaldo (backup) para Direct Connect.</li>\n            </ul>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 1: Cifrado en Direct Connect (MACsec vs VPN over DX)",
              "question": "Por defecto, el tráfico que viaja a través de un enlace físico dedicado de AWS Direct Connect es privado pero no está cifrado en la capa física/enlace. Si una entidad bancaria exige que TODO el tráfico en tránsito por Direct Connect esté cifrado criptográficamente, ¿cuáles de las siguientes soluciones son técnicamente válidas? (Selecciona DOS)",
              "options": [
                "A) Utilizar MACsec (IEEE 802.1AE) para cifrado a nivel de Capa 2 en conexiones dedicadas elegibles de 10 Gbps o 100 Gbps de Direct Connect.",
                "B) Desplegar un túnel AWS Site-to-Site VPN IPsec sobre la conexión de Direct Connect (VPN over Direct Connect) para cifrar el tráfico a nivel de Capa 3.",
                "C) Desactivar el protocolo BGP y utilizar enrutamiento RIPv2.",
                "D) Reemplazar los cables de fibra óptica por cables coaxiales.",
                "E) Prohibir el uso de TLS en todas las aplicaciones."
              ],
              "correctAnswers": [
                0,
                1
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 1: Tablas de Rutas en Transit Gateway (Segmentación de Red)",
              "question": "En un entorno corporativo con AWS Transit Gateway, el equipo de ciberseguridad requiere aislar el entorno de Desarrollo del entorno de Producción para que NUNCA puedan comunicarse entre sí, pero permitiendo que ambos entornos accedan a una VPC de Servicios Compartidos. ¿Cómo se implementa esta segmentación? (Selecciona DOS)",
              "options": [
                "A) Crear múltiples tablas de rutas en Transit Gateway (por ejemplo, Route Table Dev y Route Table Prod).",
                "B) Asociar las VPCs de Desarrollo a la Route Table Dev y propagar únicamente la VPC de Servicios Compartidos; y asociar las VPCs de Producción a la Route Table Prod propagando únicamente Servicios Compartidos.",
                "C) Eliminar el Transit Gateway y colocar cables de red manuales.",
                "D) Apagar las instancias de Desarrollo cada vez que Producción esté activa.",
                "E) Prohibir el uso de direcciones IPv4 privadas."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "AWS Transit Gateway soporta múltiples tablas de rutas (Route Domain Segmentation). Al crear tablas de rutas separadas para Desarrollo y Producción y asociar cada VPC a su tabla respectiva, se controla qué VPCs pueden comunicarse entre sí, permitiendo acceso a servicios compartidos y garantizando aislamiento estricto."
            }
          ]
        },
        {
          "id": 24,
          "title": "Día 24: Migración, Analítica y Servicios de Datos (DMS, SCT, Athena)",
          "summary": "Migración de bases de datos heterogéneas con DMS y SCT, DataSync, Snowball y consultas ad-hoc con Athena.",
          "readTime": "20 min lectura",
          "contentHtml": "\n            <h2>3. Migración y Analítica</h2>\n            <ul>\n              <li><strong>AWS DMS (Database Migration Service):</strong> Migra bases de datos con tiempo de inactividad casi nulo (CDC continuo). Puede migrar bases homogéneas (Oracle a Oracle) o heterogéneas.</li>\n              <li><strong>AWS Schema Conversion Tool (SCT):</strong> Convierte esquemas de base de datos cuando los motores son distintos (ej. de Oracle o Microsoft SQL Server a Aurora PostgreSQL).</li>\n              <li><strong>AWS DataSync:</strong> Transferencia acelerada de archivos entre on-premises (NFS, SMB) y AWS (S3, EFS, FSx) hasta 10 veces más rápida que herramientas open source.</li>\n              <li><strong>Familia AWS Snow:</strong> Snowcone (8 TB), Snowball Edge (80 TB), Snowmobile (100 PB) para transferir físicamente petabytes de datos cuando la conexión de red es lenta o inviable.</li>\n            </ul>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 3: Transferencia Rápida de Archivos con AWS DataSync",
              "question": "¿Cuáles de las siguientes afirmaciones sobre AWS DataSync son correctas para la transferencia de datos entre on-premises y AWS? (Selecciona DOS)",
              "options": [
                "A) DataSync acelera y automatiza la copia de datos a través de la red hacia servicios como Amazon S3, Amazon EFS y Amazon FSx utilizando un protocolo propietario optimizado de transferencia.",
                "B) Incluye verificación automática de integridad de datos en tránsito y en reposo.",
                "C) DataSync solo funciona a través de cables Direct Connect dedicados y no puede operar a través de Internet ni VPN.",
                "D) DataSync requiere que las bases de datos origen sean migradas a DynamoDB.",
                "E) DataSync elimina todos los archivos de origen sin confirmación."
              ],
              "correctAnswers": [
                0,
                1
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 3: Ingesta y Streaming en Tiempo Real (Kinesis vs MSK)",
              "question": "¿Cuáles de las siguientes opciones describen correctamente capacidades de ingesta y transmisión de datos en tiempo real en AWS? (Selecciona DOS)",
              "options": [
                "A) Amazon Kinesis Data Firehose entrega transmisiones de datos en tiempo real de forma serverless hacia destinos como Amazon S3, Amazon Redshift y OpenSearch, soportando transformación de datos con Lambda y conversión de formato a Parquet.",
                "B) Amazon Managed Streaming for Apache Kafka (Amazon MSK) proporciona clústeres de Apache Kafka totalmente administrados y compatibles con versiones anteriores.",
                "C) Amazon SQS es un motor de streaming que procesa miles de millones de eventos en tiempo real con particionamiento de fragmentos (shards).",
                "D) Amazon Kinesis solo puede almacenar datos durante un máximo de 60 segundos.",
                "E) Ni Kinesis ni MSK admiten cifrado con AWS KMS."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "Amazon Kinesis Data Firehose es una solución serverless para cargar flujos de streaming en data lakes y almacenes de datos, con soporte para transformaciones y conversión columnar. Amazon MSK gestiona clústeres de Apache Kafka nativos para aplicaciones que ya utilizan el ecosistema Kafka."
            }
          ]
        },
        {
          "id": 26,
          "title": "Día 26-28: Simulacro Final Completo de Certificación",
          "summary": "Evaluación integradora de los 4 dominios con preguntas tipo examen cronometradas.",
          "readTime": "15 min lectura",
          "contentHtml": "\n            <h2>4. Simulacro Final y Estrategia de Examen</h2>\n            <p>Has completado el contenido teórico de los 4 dominios oficiales del examen SAA-C03:</p>\n            <ol>\n              <li><strong>Dominio 1 (30%):</strong> Arquitecturas Seguras.</li>\n              <li><strong>Dominio 2 (26%):</strong> Arquitecturas Resilientes.</li>\n              <li><strong>Dominio 3 (24%):</strong> Alto Rendimiento.</li>\n              <li><strong>Dominio 4 (20%):</strong> Optimización de Costos.</li>\n            </ol>\n            <p>Aprueba este examen integrador para validar que tienes los conocimientos listos para rendir el examen oficial de certificación.</p>\n          ",
          "quiz": [
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
              "multi": true,
              "scenarioTag": "Dominio 3: Ingesta y Procesamiento de Telemetría Masiva IoT",
              "question": "Una empresa de vehículos conectados recopila continuamente telemetría GPS y datos de diagnóstico de 500.000 automóviles (100.000 registros por segundo). Los datos deben persistirse de forma duradera en formato Parquet en un Data Lake de S3 para análisis en Athena, y al mismo tiempo detectar en tiempo real si algún motor supera una temperatura crítica para alertar al conductor en menos de 3 segundos. ¿Cuáles de los siguientes servicios integran esta solución? (Selecciona DOS)",
              "options": [
                "A) Amazon Kinesis Data Streams para ingerir el flujo masivo de eventos en tiempo real con fragmentos (shards) particionados.",
                "B) Amazon Kinesis Data Firehose consumiendo del stream para transformar y convertir datos a formato Parquet antes de entregarlos en lotes a Amazon S3.",
                "C) Amazon RDS PostgreSQL monozona con índices B-tree para recibir las 100.000 inserciones por segundo directamente.",
                "D) Amazon S3 Glacier Flexible Archive como destino de ingesta directo con conexiones FTP.",
                "E) AWS Snowball Edge montado en el maletero de cada automóvil."
              ],
              "correctAnswers": [
                0,
                1
              ],
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
              "multi": true,
              "scenarioTag": "Dominio 1: Cifrado y Cumplimiento Normativo de Extremo a Extremo",
              "question": "Para cumplir con la normativa bancaria PCI-DSS en una arquitectura que procesa pagos en AWS, ¿cuáles de las siguientes medidas de seguridad arquitectónicas son obligatorias? (Selecciona DOS)",
              "options": [
                "A) Cifrado de datos en reposo en todos los componentes de almacenamiento (EBS, RDS, S3) utilizando claves maestras de KMS con rotación automática de claves.",
                "B) Cifrado de datos en tránsito utilizando TLS 1.2 o superior en todas las capas de red entre clientes, balanceadores y servidores de aplicación.",
                "C) Desactivar AWS CloudTrail para evitar que se registren los números de tarjetas de crédito en las llamadas a la API.",
                "D) Asignar permisos de administrador (AdministratorAccess) a todas las funciones Lambda para prevenir errores de permisos durante las transacciones.",
                "E) Almacenar los CVVs de las tarjetas en archivos de texto sin cifrar en un volumen EBS compartido."
              ],
              "correctAnswers": [
                0,
                1
              ],
              "explanation": "El cumplimiento de PCI-DSS exige protección rigurosa tanto para datos en reposo (cifrado obligatorio en S3, RDS, EBS con KMS) como para datos en tránsito (cifrado estricto con protocolos TLS 1.2+ en todas las comunicaciones internas y externas)."
            }
          ]
        }
      ]
    }
  ]
};
