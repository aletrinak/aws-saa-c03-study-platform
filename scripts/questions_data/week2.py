# Week 2: Cómputo, Resiliencia y Desacoplamiento
# Days: 8, 9, 10, 11, 12 (10 questions per day = 50 questions)

WEEK_2_QUESTIONS = {
    8: [
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
            "multi": True,
            "scenarioTag": "Dominio 4: Tipos de Compra y Opciones de Lanzamiento en ASG",
            "question": "Una startup tecnológica busca procesar trabajos de procesamiento por lotes tolerantes a fallas con el menor costo posible, pero requiere garantizar que al menos el 20% de la capacidad de cómputo siempre esté respaldada por instancias estables para atender peticiones críticas del sistema. ¿Cuáles de las siguientes configuraciones de Auto Scaling Group permiten lograr esto? (Selecciona DOS)",
            "options": [
                "A) Configurar un Auto Scaling Group con una política de instancias mixtas (Mixed Instances Policy).",
                "B) Definir una capacidad base bajo demanda (On-Demand Base Capacity) del 20% y asignar el 80% restante a Spot Instances.",
                "C) Asignar el 100% del grupo a Dedicated Hosts con contratos a 3 años.",
                "D) Habilitar la opción de asignación por capacidad optimizada (capacity-optimized) para las instancias Spot para minimizar interrupciones.",
                "E) Convertir todas las instancias a tipo t4g.nano sin almacenamiento EBS."
            ],
            "correctAnswers": [0, 1],
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
            "multi": True,
            "scenarioTag": "Dominio 2: Resiliencia Multi-AZ con Auto Scaling",
            "question": "Un Solutions Architect diseña una arquitectura que debe mantener una disponibilidad del 100% de su capacidad requerida (mínimo 6 instancias operativas en todo momento) incluso si una Availability Zone completa falla en una región con 3 AZs. ¿Cuáles de las siguientes opciones representan una arquitectura resiliente y costo-eficiente? (Selecciona DOS)",
            "options": [
                "A) Configurar el Auto Scaling Group distribuido a lo largo de las 3 Availability Zones.",
                "B) Configurar la capacidad deseada en 9 instancias (3 instancias por AZ), garantizando que si una AZ cae, las 6 instancias restantes mantengan el 100% de la capacidad de servicio.",
                "C) Colocar las 6 instancias en una sola subred pública para evitar costos de tráfico interzonal.",
                "D) Desactivar los health checks en las instancias para evitar que se reinicien durante incidentes.",
                "E) Desplegar las instancias en centros de datos locales on-premises sin conexión a AWS."
            ],
            "correctAnswers": [0, 1],
            "explanation": "Distribuir el ASG en 3 AZs permite alta disponibilidad. Para garantizar que siempre haya al menos 6 instancias en servicio si una AZ completa falla (falla de 1/3 de la capacidad), se deben dimensionar 3 instancias por AZ (9 en total), asegurando que las 2 AZs restantes provean exactamente 6 instancias."
        }
    ],

    9: [
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
            "multi": True,
            "scenarioTag": "Dominio 2: Balanceo Entre Zonas (Cross-Zone Load Balancing)",
            "question": "En una arquitectura con balanceadores de carga desplegados en dos Availability Zones (AZ-a y AZ-b), AZ-a tiene 2 instancias EC2 de destino y AZ-b tiene 8 instancias. ¿Cuáles de las siguientes afirmaciones respecto a Cross-Zone Load Balancing son verdaderas? (Selecciona DOS)",
            "options": [
                "A) En un Application Load Balancer (ALB), Cross-Zone Load Balancing está siempre activado por defecto a nivel de balanceador.",
                "B) En un Network Load Balancer (NLB), Cross-Zone Load Balancing está desactivado por defecto.",
                "C) Cuando Cross-Zone Load Balancing está habilitado, cada nodo del balanceador distribuye el tráfico equitativamente entre todas las instancias registradas en todas las AZs (cada instancia recibe el 10% del total).",
                "D) Cross-Zone Load Balancing está prohibido si se utilizan instancias de tipo ARM Graviton.",
                "E) El tráfico entre zonas siempre tiene un recargo del 500% en AWS Organizations."
            ],
            "correctAnswers": [0, 2],
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
            "multi": True,
            "scenarioTag": "Dominio 2: Códigos de Error de Balanceadores de Carga",
            "question": "Al solucionar problemas en una aplicación web detrás de un Application Load Balancer, ¿cuáles de los siguientes códigos HTTP indican problemas directamente imputables al balanceador de carga o a la comunicación con sus destinos? (Selecciona DOS)",
            "options": [
                "A) HTTP 502 (Bad Gateway), indicando que el ALB recibió una respuesta no válida o la conexión fue rechazada por la instancia de destino.",
                "B) HTTP 504 (Gateway Timeout), indicando que la instancia de destino tardó más tiempo en responder que el valor configurado en el Idle Timeout del balanceador.",
                "C) HTTP 404 (Not Found), indicando que el balanceador ha sido destruido por AWS.",
                "D) HTTP 200 (OK), indicando que el certificado SSL ha caducado.",
                "E) HTTP 301 (Moved Permanently), indicando que la instancia EC2 se quedó sin espacio en disco."
            ],
            "correctAnswers": [0, 1],
            "explanation": "El código HTTP 502 (Bad Gateway) ocurre cuando el balanceador no puede conectarse al destino o recibe una respuesta HTTP malformada. El HTTP 504 (Gateway Timeout) ocurre cuando el destino no responde dentro del tiempo límite de inactividad (Idle Timeout)."
        }
    ],

    10: [
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
            "multi": True,
            "scenarioTag": "Dominio 2: Health Checks en Route 53 & Endpoints Privados",
            "question": "Una empresa desea monitorear la salud de instancias web privadas ubicadas dentro de una VPC para utilizarlas en comprobaciones de salud de Route 53. Las instancias no tienen direcciones IP públicas. ¿Cuáles de las siguientes opciones describen cómo Route 53 puede monitorear recursos o manejar fallos? (Selecciona DOS)",
            "options": [
                "A) Los comprobadores de salud estándar de Route 53 operan desde Internet público y no pueden acceder directamente a IPs privadas dentro de una VPC.",
                "B) Se puede crear un Route 53 Health Check basado en una métrica de Amazon CloudWatch (Health Check based on CloudWatch Alarms) para supervisar recursos privados.",
                "C) Se debe desactivar el firewall de Windows en todas las máquinas.",
                "D) Route 53 puede entrar a cualquier VPC privada sin credenciales usando SSH.",
                "E) Convertir la VPC en un bucket S3 multi-región."
            ],
            "correctAnswers": [0, 1],
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
            "multi": True,
            "scenarioTag": "Dominio 2: Geoproximity Routing & Route 53 Traffic Flow",
            "question": "En Route 53, ¿cuáles de las siguientes afirmaciones respecto al enrutamiento por geoproximidad (Geoproximity Routing) son verdaderas? (Selecciona DOS)",
            "options": [
                "A) Permite enrutar tráfico a los recursos en función de la ubicación geográfica del usuario y de los recursos de AWS.",
                "B) Requiere obligatoriamente el uso de Route 53 Traffic Flow para su configuración.",
                "C) Utiliza un parámetro denominado 'Bias' (sesgo) para expandir o contraer la región geográfica de cobertura de un recurso determinado.",
                "D) Solo es compatible con bases de datos MySQL en instancias EC2 locales.",
                "E) No requiere ningún nombre de dominio registrado."
            ],
            "correctAnswers": [1, 2],
            "explanation": "Geoproximity Routing permite enrutar tráfico basándose en la distancia geográfica entre los usuarios y los recursos, requiriendo el uso de Route 53 Traffic Flow. Se utiliza el parámetro 'Bias' (de -99 a +99) para expandir o encoger dinámicamente el área geográfica que atiende un determinado recurso."
        }
    ],

    11: [
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
            "multi": True,
            "scenarioTag": "Dominio 2: Comparación de Estrategias de DR",
            "question": "Al clasificar las 4 estrategias tradicionales de Disaster Recovery en AWS por costo y tiempo de recuperación (RTO/RPO), ¿cuáles de las siguientes afirmaciones son correctas? (Selecciona DOS)",
            "options": [
                "A) Backup and Restore es la opción con el menor costo de infraestructura, pero con el mayor RTO y RPO.",
                "B) Pilot Light tiene un RTO menor que Warm Standby porque no requiere mantener bases de datos.",
                "C) Multi-Site Active-Active es la estrategia más costosa y compleja, pero ofrece el menor RTO y RPO.",
                "D) Warm Standby nunca tiene bases de datos encendidas en la región de contingencia.",
                "E) Backup and Restore garantiza un RPO de cero segundos."
            ],
            "correctAnswers": [0, 2],
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
            "multi": True,
            "scenarioTag": "Dominio 2: S3 Cross-Region Replication (CRR)",
            "question": "Un Solutions Architect configura S3 Cross-Region Replication (CRR) entre un bucket origen en us-east-1 y un bucket destino en eu-west-1. ¿Cuáles de los siguientes requisitos son obligatorios para que la replicación funcione? (Selecciona DOS)",
            "options": [
                "A) El control de versiones (Versioning) debe estar habilitado tanto en el bucket de origen como en el bucket de destino.",
                "B) El bucket de origen debe tener un IAM Role con permisos de lectura en el origen y escritura/replicación en el destino.",
                "C) Ambos buckets deben pertenecer al mismo bloque CIDR de red.",
                "D) Los nombres de ambos buckets deben ser exactamente idénticos.",
                "E) Se debe eliminar el cifrado KMS en todos los objetos."
            ],
            "correctAnswers": [0, 1],
            "explanation": "Para que S3 Cross-Region Replication (CRR) funcione, Versioning debe estar obligatoriamente habilitado en ambos buckets, y se debe proporcionar un IAM Role que otorgue permisos a S3 para leer objetos del bucket origen y replicarlos en el bucket destino."
        }
    ],

    12: [
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
            "multi": True,
            "scenarioTag": "Dominio 2: Amazon EventBridge & Buses de Eventos",
            "question": "Una empresa desea construir una arquitectura orientada a eventos para procesar cambios de estado en recursos de AWS y eventos provenientes de aplicaciones SaaS de terceros (como Zendesk o Datadog). ¿Cuáles de las siguientes características de Amazon EventBridge hacen que sea la solución más adecuada frente a Amazon SNS? (Selecciona DOS)",
            "options": [
                "A) EventBridge soporta buses de eventos personalizados y buses de eventos de aplicaciones SaaS asociadas nativamente.",
                "B) EventBridge soporta filtrado basado en el contenido del cuerpo JSON del evento (content-based filtering) y transformación de eventos antes de entregarlos al destino.",
                "C) EventBridge no permite conectarse con funciones AWS Lambda.",
                "D) EventBridge requiere desplegar clusters de EC2 dedicados para gestionar los tópicos.",
                "E) EventBridge solo funciona dentro de una sola Availability Zone."
            ],
            "correctAnswers": [0, 1],
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
            "multi": True,
            "scenarioTag": "Dominio 2: SQS Delay Queues vs Message Timers",
            "question": "¿Cuáles de las siguientes afirmaciones sobre el retraso en la entrega de mensajes en Amazon SQS son correctas? (Selecciona DOS)",
            "options": [
                "A) Una Delay Queue pospone la entrega de TODOS los mensajes agregados a la cola durante el número de segundos especificado (DelaySeconds).",
                "B) Los Message Timers permiten especificar un retraso inicial para un mensaje INDIVIDUAL específico al enviarlo a una cola estándar.",
                "C) El retraso máximo que se puede configurar en una Delay Queue o Message Timer es de 15 minutos (900 segundos).",
                "D) El retraso de mensajes solo se puede habilitar si la cola está vacía durante 24 horas.",
                "E) Una cola con retraso borra los mensajes después de 5 minutos."
            ],
            "correctAnswers": [0, 2],
            "explanation": "En SQS, DelaySeconds pospone la visibilidad de los mensajes recién llegados (hasta un máximo de 15 minutos / 900 segundos). Las Delay Queues aplican este retraso a todos los mensajes de la cola, mientras que los Message Timers permiten aplicarlo a mensajes individuales."
        }
    ]
}
