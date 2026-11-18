// AWS Solutions Architect Associate (SAA-C03) - Banco de Preguntas en Español (Optimizado y Auditado)
window.QUESTIONS_ES = [
  {
    "id": "01-1",
    "module": "AWS Fundamentals",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa está implementando una nueva aplicación en AWS y necesita garantizar el más alto nivel de disponibilidad y tolerancia a fallas. La aplicación debe seguir funcionando incluso si falla todo un centro de datos. ¿Qué componente de infraestructura de AWS debería utilizarse?",
    "options": {
      "A": "Implementar en múltiples ubicaciones perimetrales",
      "B": "Implemente en múltiples zonas de disponibilidad dentro de una sola región",
      "C": "Implementar en múltiples regiones",
      "D": "Implementación mediante zonas locales de AWS"
    },
    "explanation": "• Las zonas de disponibilidad (AZ) son centros de datos separados dentro de una región\n• La implementación en varias zonas de disponibilidad protege contra fallas del centro de datos\n• Este es el enfoque estándar para alta disponibilidad dentro de una región.\n• La opción C (múltiples regiones) es para la recuperación ante desastres, no solo para fallas del centro de datos.\n• Las ubicaciones perimetrales son para la entrega de contenido, no para el alojamiento de aplicaciones.\n• Las zonas locales tienen una latencia ultrabaja pero no ofrecen la misma tolerancia a fallos",
    "why": [
      "Las zonas de disponibilidad (AZ) son centros de datos separados dentro de una región.",
      "La implementación en varias zonas de disponibilidad protege contra fallas del centro de datos.",
      "Este es el enfoque estándar para alta disponibilidad dentro de una región.",
      "La opción C (múltiples regiones) es para la recuperación ante desastres, no solo para fallas del centro de datos.",
      "Las ubicaciones perimetrales son para la entrega de contenido, no para el alojamiento de aplicaciones.",
      "Las zonas locales son para una latencia ultrabaja pero no brindan la misma tolerancia a fallas."
    ],
    "others": []
  },
  {
    "id": "01-2",
    "module": "AWS Fundamentals",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un arquitecto de soluciones necesita diseñar una solución que minimice la latencia para los usuarios que acceden a contenido estático a nivel global. ¿Qué combinación de servicios de AWS se debe utilizar?",
    "options": {
      "A": "Amazon S3 con replicación entre regiones",
      "B": "Amazon CloudFront con S3 como origen",
      "C": "Amazon S3 con aceleración de transferencia",
      "D": "Múltiples instancias EC2 en diferentes regiones"
    },
    "explanation": "• CloudFront es la red de entrega de contenido (CDN) de AWS con más de 400 ubicaciones de borde en todo el mundo.\n• Almacena en caché el contenido cerca de los usuarios, minimizando la latencia\n• S3 sirve como origen del contenido estático\n• La opción A proporciona redundancia pero no optimiza la latencia\n• La opción C acelera las cargas, no las descargas\n• La opción D es ineficaz en términos de costos y compleja de gestionar.",
    "why": [
      "CloudFront es la red de entrega de contenido (CDN) de AWS con más de 400 ubicaciones de borde en todo el mundo.",
      "Almacena en caché el contenido cerca de los usuarios, minimizando la latencia.",
      "S3 sirve como origen del contenido estático."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Proporciona redundancia pero no optimiza la latencia."
      },
      {
        "l": [
          "C"
        ],
        "t": "Acelera las cargas, no las descargas."
      },
      {
        "l": [
          "D"
        ],
        "t": "Es costo-efectivo y complejo de gestionar."
      }
    ]
  },
  {
    "id": "01-3",
    "module": "AWS Fundamentals",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Según el modelo de responsabilidad compartida de AWS, ¿cuál de las siguientes es responsabilidad de AWS?",
    "options": {
      "A": "Cifrado de datos en reposo en S3",
      "B": "Gestión de parches de sistemas operativos invitados en EC2",
      "C": "Seguridad física de los centros de datos.",
      "D": "Configuración de grupos de seguridad."
    },
    "explanation": "• AWS es responsable de la \"Seguridad de la Nube\": infraestructura física\n• Esto incluye centros de datos, hardware e instalaciones.\n• Los clientes son responsables de la \"Seguridad EN la Nube\"\n• Las opciones A, B y D son responsabilidad del cliente.\n• Los clientes eligen si desean cifrar, parchear el sistema operativo y configurar la seguridad.",
    "why": [
      "AWS es responsable de la \"Seguridad de la nube\": infraestructura física.",
      "Esto incluye centros de datos, hardware e instalaciones.",
      "Los clientes son responsables de la \"Seguridad EN la Nube\"",
      "Los clientes eligen si desean cifrar, parchear el sistema operativo y configurar la seguridad."
    ],
    "others": [
      {
        "l": [
          "A",
          "B",
          "D"
        ],
        "t": "Son todas responsabilidades del cliente."
      }
    ]
  },
  {
    "id": "01-4",
    "module": "AWS Fundamentals",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa nueva quiere implementar una aplicación sin administrar servidores, sistemas operativos o entornos de ejecución. ¿Qué categoría de servicio de AWS se adapta mejor a este requisito?",
    "options": {
      "A": "Infraestructura como servicio (IaaS)",
      "B": "Plataforma como servicio (PaaS)",
      "C": "Software como servicio (SaaS)",
      "D": "Función como servicio (FaaS)"
    },
    "explanation": "• Gestión de infraestructura abstracta de servicios PaaS (como Elastic Beanstalk)\n• Los usuarios implementan código sin administrar servidores ni sistemas operativos.\n• IaaS (como EC2) requiere administrar máquinas virtuales\n• SaaS son aplicaciones totalmente administradas (como Amazon Chime)\n• FaaS (como Lambda) se basa en eventos, normalmente no para aplicaciones completas\n• PaaS es la mejor opción para implementar aplicaciones sin administración de infraestructura",
    "why": [
      "Servicios PaaS (como Elastic Beanstalk) gestión de infraestructura abstracta.",
      "Los usuarios implementan código sin administrar servidores ni sistemas operativos.",
      "IaaS (como EC2) requiere administrar máquinas virtuales.",
      "SaaS son aplicaciones totalmente administradas (como Amazon Chime)",
      "FaaS (como Lambda) se basa en eventos, normalmente no para aplicaciones completas.",
      "PaaS es la mejor opción para implementar aplicaciones sin administración de infraestructura."
    ],
    "others": []
  },
  {
    "id": "01-5",
    "module": "AWS Fundamentals",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene requisitos reglamentarios para garantizar que los datos almacenados en AWS no abandonen una ubicación geográfica específica. ¿Cómo se puede lograr esto?",
    "options": {
      "A": "Habilite AWS GuardDuty",
      "B": "Elegí la región de AWS adecuada y no habilite funciones entre regiones",
      "C": "Utilice AWS Organizations con políticas de control de servicios",
      "D": "Habilite AWS CloudTrail"
    },
    "explanation": "• Los datos de una región de AWS permanecen en esa región a menos que configure explícitamente lo contrario.\n• La ausencia de replicación, copias de seguridad o transferencia de datos entre regiones garantiza la residencia de los datos.\n• GuardDuty es para la detección de amenazas, no para la residencia de datos\n• Los SCP pueden hacer cumplir políticas, pero la clave es elegir la región correcta\n• CloudTrail sirve para el registro, no para la residencia de datos.\n• Control principal: Seleccioná Región y no configure servicios entre regiones",
    "why": [
      "Los datos de una región de AWS permanecen en esa región a menos que configure explícitamente lo contrario.",
      "Ninguna replicación, respaldo o transferencia de datos entre regiones garantiza la residencia de los datos.",
      "GuardDuty sirve para la detección de amenazas, no para la residencia de datos.",
      "Los SCP pueden hacer cumplir políticas, pero la clave es elegir la región correcta.",
      "CloudTrail sirve para el registro, no para la residencia de datos.",
      "Control principal: Seleccioná Región y no configure servicios entre regiones."
    ],
    "others": []
  },
  {
    "id": "01-6",
    "module": "AWS Fundamentals",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "¿Qué pilar del marco de buena arquitectura de AWS se centra en la capacidad de recuperarse de fallas y adquirir dinámicamente recursos informáticos para satisfacer la demanda?",
    "options": {
      "A": "Excelencia operativa",
      "B": "Seguridad",
      "C": "Fiabilidad",
      "D": "Eficiencia de rendimiento"
    },
    "explanation": "• El pilar de confiabilidad se centra en la recuperación de fallas y el mantenimiento de la funcionalidad de la carga de trabajo.\n• Aspectos clave: tolerancia a fallos, recuperación ante desastres, autorreparación\n• La excelencia operativa se centra en las operaciones y el seguimiento.\n• La seguridad se centra en proteger la información y los sistemas.\n• La eficiencia del desempeño se centra en el uso eficiente de los recursos.",
    "why": [
      "Aspectos clave: tolerancia a fallos, recuperación ante desastres, autorreparación.",
      "La excelencia operativa se centra en las operaciones y el seguimiento.",
      "La seguridad se centra en proteger la información y los sistemas.",
      "La eficiencia del desempeño se centra en el uso eficiente de los recursos."
    ],
    "others": []
  },
  {
    "id": "01-7",
    "module": "AWS Fundamentals",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere estimar el costo de ejecutar su infraestructura de AWS planificada antes de la implementación. ¿Qué herramienta de AWS deberían utilizar?",
    "options": {
      "A": "AWS Cost Explorer",
      "B": "AWS Budgets",
      "C": "Calculadora de precios de AWS",
      "D": "Informe de uso y costo de AWS"
    },
    "explanation": "• La Calculadora de precios de AWS estima los costos de las arquitecturas planificadas\n• Cost Explorer analiza los costos existentes/históricos\n• AWS Budgets establece alertas de presupuesto\n• El informe de costo y uso proporciona datos de facturación detallados\n• Para la estimación ANTES de la implementación, la Calculadora de precios es correcta",
    "why": [
      "Cost Explorer analiza los costos existentes/históricos.",
      "AWS Budgets establece alertas de presupuesto.",
      "El Informe de costo y uso proporciona datos de facturación detallados.",
      "Para realizar una estimación ANTES de la implementación, la Calculadora de precios es correcta."
    ],
    "others": []
  },
  {
    "id": "01-8",
    "module": "AWS Fundamentals",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación requiere 15 milisegundos o menos de latencia para los usuarios de un área metropolitana específica. ¿Qué componente de infraestructura de AWS debería utilizarse?",
    "options": {
      "A": "Región de AWS",
      "B": "Zona de disponibilidad",
      "C": "Zona local de AWS",
      "D": "AWS Wavelength Zone"
    },
    "explanation": "• Las zonas locales de AWS acercan la informática, el almacenamiento y las bases de datos a los usuarios finales\n• Diseñado para requisitos de latencia de milisegundos de un solo dígito\n• Ubicado en áreas metropolitanas para aplicaciones de latencia ultrabaja\n• Las Wavelength Zones son para informática de punta 5G\n• Es posible que las regiones/AZ regulares no cumplan con los requisitos de latencia ultrabaja",
    "why": [
      "Diseñado para requisitos de latencia de milisegundos de un solo dígito.",
      "Colocado en áreas metropolitanas para aplicaciones de latencia ultrabaja.",
      "Las Wavelength Zones son para informática de punta 5G.",
      "Es posible que las regiones/AZ habituales no cumplan con los requisitos de latencia ultrabaja."
    ],
    "others": []
  },
  {
    "id": "01-9",
    "module": "AWS Fundamentals",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "¿Qué servicio de AWS proporciona una interfaz unificada para administrar varias cuentas de AWS dentro de una organización?",
    "options": {
      "A": "AWSIAM",
      "B": "AWS Organizations",
      "C": "AWS Control Tower",
      "D": "AWS Systems Manager"
    },
    "explanation": "• AWS Organizations administra de forma centralizada varias cuentas de AWS\n• Proporciona facturación consolidada, creación de cuentas y gestión de políticas.\n• IAM gestiona los permisos dentro de una cuenta.\n• Control Tower configura entornos de múltiples cuentas (utiliza Organizaciones debajo)\n• Systems Manager administra los recursos de AWS, no las cuentas\n• Respuesta directa para gestión multicuenta: Organizaciones",
    "why": [
      "Proporciona facturación consolidada, creación de cuentas y gestión de políticas.",
      "IAM gestiona los permisos dentro de una cuenta.",
      "Control Tower configura entornos de múltiples cuentas (utiliza Organizaciones debajo)",
      "Systems Manager administra los recursos de AWS, no las cuentas.",
      "Respuesta directa para gestión multicuenta: Organizaciones."
    ],
    "others": []
  },
  {
    "id": "01-10",
    "module": "AWS Fundamentals",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Según el marco de buena arquitectura de AWS, ¿qué principio de diseño se recomienda para el pilar de seguridad?",
    "options": {
      "A": "Implementar una base de identidad sólida",
      "B": "Globalícese en minutos",
      "C": "Deje de gastar dinero en operaciones de centros de datos",
      "D": "Implementar bucles de retroalimentación"
    },
    "explanation": "• \"Implementar una base de identidad sólida\" es un principio pilar de seguridad\n• Incluye: privilegio mínimo, separación de funciones, gestión de identidad centralizada\n• La opción B se relaciona con la implementación global (beneficio general de AWS)\n• La opción C es una ventaja de la nube, no un principio de seguridad\n• La opción D se relaciona con el pilar de excelencia operativa.",
    "why": [
      "Incluye: privilegio mínimo, separación de funciones, gestión de identidad centralizada."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Se relaciona con la implementación global (beneficio general de AWS)"
      },
      {
        "l": [
          "C"
        ],
        "t": "Es una ventaja de la nube, no un principio de seguridad."
      },
      {
        "l": [
          "D"
        ],
        "t": "Corresponde al pilar de Excelencia Operacional."
      }
    ]
  },
  {
    "id": "01-11",
    "module": "AWS Fundamentals",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere utilizar AWS CLI para administrar recursos, pero quiere evitar incorporar credenciales a largo plazo en sus scripts. ¿Cuál es la MEJOR práctica?",
    "options": {
      "A": "Utilice las credenciales de la cuenta raíz",
      "B": "Cree un usuario de IAM y almacene las credenciales en el script",
      "C": "Utilice roles de IAM con credenciales de seguridad temporales",
      "D": "Utilice claves de acceso sin claves secretas"
    },
    "explanation": "• Los roles de IAM proporcionan credenciales de seguridad temporales a través de AWS STS\n• Las credenciales rotan automáticamente, lo que mejora la seguridad\n• Nunca utilice las credenciales de la cuenta raíz para las tareas diarias\n• Nunca codifique credenciales en scripts\n• Las claves de acceso siempre requieren claves secretas\n• Mejores prácticas: roles de IAM con credenciales temporales",
    "why": [
      "Los roles de IAM proporcionan credenciales de seguridad temporales a través de AWS STS.",
      "Las credenciales rotan automáticamente, lo que mejora la seguridad.",
      "Nunca utilice las credenciales de la cuenta raíz para las tareas diarias.",
      "Nunca codifique credenciales en scripts.",
      "Las claves de acceso siempre requieren claves secretas.",
      "Mejores prácticas: roles de IAM con credenciales temporales."
    ],
    "others": []
  },
  {
    "id": "01-12",
    "module": "AWS Fundamentals",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": true,
    "answer": [
      "A",
      "C"
    ],
    "q": "¿Cuál de las siguientes es una ventaja de utilizar las regiones de AWS? (Elegí DOS)",
    "options": {
      "A": "Latencia reducida para usuarios en áreas geográficas específicas",
      "B": "Replicación automática de datos en todas las regiones",
      "C": "Cumplimiento de los requisitos de soberanía de datos",
      "D": "Costos más bajos en comparación con el uso de una sola región",
      "E": "Conmutación por error automática entre regiones"
    },
    "explanation": "• A es correcta: la implementación en regiones más cercanas a los usuarios reduce la latencia\n• C es correcta: las regiones permiten cumplir con los requisitos de residencia/soberanía de datos.\n• B es incorrecto: la replicación NO es automática, debe configurarse\n• D es incorrecto: varias regiones normalmente aumentan los costos\n• E es incorrecta: la conmutación por error NO es automática, requiere diseño de arquitectura",
    "why": [
      "A es correcta: la implementación en regiones más cercanas a los usuarios reduce la latencia.",
      "C es correcta: las regiones permiten cumplir con los requisitos de residencia/soberanía de los datos."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Es incorrecto: la replicación NO es automática, debe configurarse."
      },
      {
        "l": [
          "D"
        ],
        "t": "Es incorrecto: varias regiones normalmente aumentan los costos."
      },
      {
        "l": [
          "E"
        ],
        "t": "Es incorrecto: la conmutación por error NO es automática, requiere diseño de arquitectura."
      }
    ]
  },
  {
    "id": "01-13",
    "module": "AWS Fundamentals",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un arquitecto de soluciones necesita diseñar un sistema que siga el principio de \"Diseño para el fracaso\" del marco de buena arquitectura. ¿Qué enfoque se debe adoptar?",
    "options": {
      "A": "Utilice solo los tipos de instancias EC2 más grandes para evitar fallas",
      "B": "Diseñe la aplicación para manejar las fallas de los componentes con elegancia.",
      "C": "Implemente todos los recursos en una única zona de disponibilidad para simplificar",
      "D": "Confíe en AWS Support para gestionar todos los fallos"
    },
    "explanation": "• \"Diseño para fallas\" significa asumir que los componentes fallarán y planificar en consecuencia\n• Las aplicaciones deben manejar los fallos correctamente con lógica de reintento, comprobaciones de estado, etc.\n• Las instancias más grandes no previenen las fallas\n• La implementación de una única AZ aumenta el riesgo de fallas\n• Debe diseñar para el fracaso, no depender únicamente del apoyo\n• Enfoque adecuado: degradación elegante, recuperación automática",
    "why": [
      "\"Diseñar para fallar\" significa asumir que los componentes fallarán y planificar en consecuencia.",
      "Las aplicaciones deben manejar los fallos correctamente con lógica de reintento, comprobaciones de estado, etc.",
      "Las instancias más grandes no previenen los errores.",
      "La implementación de una única AZ aumenta el riesgo de fallas.",
      "Debe diseñar para el fracaso, no depender únicamente del apoyo.",
      "Enfoque adecuado: degradación elegante, recuperación automática."
    ],
    "others": []
  },
  {
    "id": "01-14",
    "module": "AWS Fundamentals",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "¿Qué afirmación sobre las ubicaciones de AWS Edge es correcta?",
    "options": {
      "A": "Las ubicaciones de borde solo se utilizan para la entrega de contenido de CloudFront",
      "B": "Hay menos ubicaciones de borde que regiones",
      "C": "Las ubicaciones perimetrales se pueden utilizar tanto para la entrega de contenido como para la informática perimetral.",
      "D": "Las ubicaciones de borde son las mismas que las zonas de disponibilidad"
    },
    "explanation": "• Las ubicaciones de borde admiten CloudFront (CDN), Lambda@Edge y otros servicios de borde\n• Hay más de 400 ubicaciones periféricas frente a más de 30 regiones\n• Ubicaciones de borde ≠ Zonas de disponibilidad (diferentes propósitos)\n• Se utiliza para entrega de contenido Y computación perimetral (Lambda@Edge, CloudFront Functions)",
    "why": [
      "Las ubicaciones de borde admiten CloudFront (CDN), Lambda@Edge y otros servicios de borde.",
      "Hay más de 400 ubicaciones periféricas frente a más de 30 regiones.",
      "Ubicaciones de borde ≠ Zonas de disponibilidad (diferentes propósitos)",
      "Se utiliza para la entrega de contenidos Y la informática de punta (Lambda@Edge, CloudFront Functions)"
    ],
    "others": []
  },
  {
    "id": "01-15",
    "module": "AWS Fundamentals",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere recibir alertas cuando sus costos mensuales de AWS superen un umbral. ¿Qué servicio deberían utilizar?",
    "options": {
      "A": "AWS Cost Explorer",
      "B": "AWS Budgets",
      "C": "Calculadora de precios de AWS",
      "D": "AWS Trusted Advisor"
    },
    "explanation": "• AWS Budgets permite configurar presupuestos de costo/uso personalizados con alertas\n• Puede enviar notificaciones a través de SNS cuando se superen los umbrales\n• Cost Explorer visualiza los costos históricos pero no envía alertas\n• La calculadora de precios estima los costos futuros\n• Trusted Advisor proporciona recomendaciones de mejores prácticas\n• Para alertas de umbral: AWS Budgets",
    "why": [
      "Puede enviar notificaciones a través de SNS cuando se superan los umbrales.",
      "Cost Explorer visualiza los costos históricos pero no envía alertas.",
      "La calculadora de precios estima los costos futuros.",
      "Trusted Advisor ofrece recomendaciones de mejores prácticas.",
      "Para alertas de umbral: AWS Budgets."
    ],
    "others": []
  },
  {
    "id": "01-16",
    "module": "AWS Fundamentals",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Según el modelo de responsabilidad compartida de AWS, ¿quién es responsable de aplicar parches al hipervisor subyacente para las instancias EC2?",
    "options": {
      "A": "Cliente",
      "B": "AWS",
      "C": "Tanto AWS como el cliente",
      "D": "Proveedores externos"
    },
    "explanation": "• AWS gestiona la capa de hipervisor (seguridad de la nube)\n• Los clientes administran parches del sistema operativo invitado (seguridad EN la nube)\n• Hipervisor es infraestructura, responsabilidad de AWS\n• El cliente parchea el sistema operativo, las aplicaciones y el cifrado de datos.",
    "why": [
      "Los clientes administran parches del sistema operativo invitado (seguridad EN la nube)",
      "El hipervisor es infraestructura, responsabilidad de AWS.",
      "El cliente parchea el sistema operativo, las aplicaciones y el cifrado de datos."
    ],
    "others": []
  },
  {
    "id": "01-17",
    "module": "AWS Fundamentals",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere implementar aplicaciones más cerca de los usuarios de dispositivos móviles 5G para lograr una latencia ultrabaja. ¿Qué servicio de AWS debería utilizarse?",
    "options": {
      "A": "Zonas locales de AWS",
      "B": "AWS Wavelength",
      "C": "AWS Outposts",
      "D": "AWS Direct Connect"
    },
    "explanation": "• AWS Wavelength integra computación en el borde de la red 5G\n• Proporciona latencia de milisegundos de un solo dígito a dispositivos móviles\n• Las zonas locales son para áreas metropolitanas pero no específicas para 5G.\n• Outposts es para infraestructura de AWS local\n• Direct Connect es para conexión de red dedicada\n• Para móviles 5G: AWS Wavelength",
    "why": [
      "Proporciona latencia de milisegundos de un solo dígito a dispositivos móviles.",
      "Las zonas locales son para áreas metropolitanas pero no específicas para 5G.",
      "Outposts es para la infraestructura de AWS local.",
      "Direct Connect es para una conexión de red dedicada.",
      "Para móviles 5G: AWS Wavelength."
    ],
    "others": []
  },
  {
    "id": "01-18",
    "module": "AWS Fundamentals",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "¿Qué pilar del marco de buena arquitectura de AWS incluye el principio \"Deje de adivinar sus necesidades de capacidad\"?",
    "options": {
      "A": "Optimización de costos",
      "B": "Eficiencia de rendimiento",
      "C": "Fiabilidad",
      "D": "Excelencia operativa"
    },
    "explanation": "• El pilar de eficiencia del desempeño incluye principios de planificación de capacidad.\n• \"Deje de adivinar la capacidad\": utilice Auto Scaling y servicios elásticos\n• Permite un ajuste de capacidad dinámico y de tamaño adecuado\n• La optimización de costos se centra en eliminar el desperdicio.\n• La confiabilidad se centra en la recuperación y las pruebas.\n• La excelencia operativa se centra en la ejecución/monitoreo",
    "why": [
      "\"Deje de adivinar la capacidad\": utilice Auto Scaling y servicios elásticos.",
      "Permite ajustar el tamaño correcto y la capacidad dinámica.",
      "La optimización de costos se centra en eliminar el desperdicio.",
      "La confiabilidad se centra en la recuperación y las pruebas.",
      "La excelencia operativa se centra en la ejecución/monitoreo."
    ],
    "others": []
  },
  {
    "id": "01-19",
    "module": "AWS Fundamentals",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene varios equipos de desarrollo que necesitan cuentas de AWS independientes para su aislamiento. Quieren facturación consolidada. ¿Qué deberían implementar?",
    "options": {
      "A": "AWS Control Tower",
      "B": "AWS Organizations con facturación consolidada",
      "C": "Varios usuarios de IAM en una cuenta",
      "D": "Grupos de recursos de AWS"
    },
    "explanation": "• AWS Organizations proporciona facturación consolidada en varias cuentas\n• Cada equipo obtiene una cuenta aislada con recursos separados\n• Factura única para toda la organización\n• Control Tower ayuda a configurar Organizaciones, pero Organizaciones es la respuesta directa\n• Los usuarios de IAM no proporcionan aislamiento a nivel de cuenta\n• Los grupos de recursos organizan los recursos, no la facturación.",
    "why": [
      "AWS Organizations proporciona facturación consolidada en varias cuentas.",
      "Cada equipo obtiene una cuenta aislada con recursos separados.",
      "Factura única para toda la organización.",
      "Control Tower ayuda a configurar Organizaciones, pero Organizaciones es la respuesta directa.",
      "Los usuarios de IAM no proporcionan aislamiento a nivel de cuenta.",
      "Los grupos de recursos organizan los recursos, no la facturación."
    ],
    "others": []
  },
  {
    "id": "01-20",
    "module": "AWS Fundamentals",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "¿Cuál es el objetivo principal de las zonas de disponibilidad dentro de una región de AWS?",
    "options": {
      "A": "Para proporcionar diferentes niveles de precios",
      "B": "Para habilitar la tolerancia a fallos y la alta disponibilidad",
      "C": "Para admitir diferentes servicios de AWS",
      "D": "Para reducir los costos de transferencia de datos"
    },
    "explanation": "• Las zonas de disponibilidad son ubicaciones aisladas dentro de una región.\n• Propósito principal: tolerancia a fallas y alta disponibilidad\n• Cada AZ tiene alimentación, refrigeración y redes independientes.\n• La implementación en zonas de disponibilidad protege contra puntos únicos de falla\n• No para precios, disponibilidad de servicios o reducción de costos.\n• Propósito central: resiliencia y disponibilidad",
    "why": [
      "Las zonas de disponibilidad son ubicaciones aisladas dentro de una región.",
      "Propósito principal: tolerancia a fallas y alta disponibilidad.",
      "Cada AZ tiene energía, refrigeración y redes independientes.",
      "La implementación en zonas de disponibilidad protege contra puntos únicos de falla.",
      "No por precios, disponibilidad de servicios o reducción de costos.",
      "Propósito central: resiliencia y disponibilidad."
    ],
    "others": []
  },
  {
    "id": "01-21",
    "module": "AWS Fundamentals",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene 50 cuentas de AWS y desea administrar de forma centralizada la facturación y aplicar políticas de seguridad para toda la organización. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "AWSIAM",
      "B": "AWS Organizations",
      "C": "AWS Control Tower",
      "D": "AWS Systems Manager"
    },
    "explanation": "• AWS Organizations es el servicio para administrar múltiples cuentas de AWS\n• Proporciona facturación consolidada en todas las cuentas.\n• Habilita políticas de control de servicios (SCP) para políticas de toda la organización\n• Puede crear unidades organizativas (OU) para agrupaciones lógicas\n• La torre de control (C) se basa en organizaciones, pero se puede configurar de forma automatizada.\n• IAM (A) es para la gestión de usuarios/rol dentro de una sola cuenta\n• Administrador de sistemas (D) es para operaciones, no para administración de cuentas múltiples",
    "why": [
      "Proporciona facturación consolidada en todas las cuentas.",
      "Habilita políticas de control de servicios (SCP) para políticas de toda la organización.",
      "Puede crear unidades organizativas (OU) para agrupaciones lógicas."
    ],
    "others": [
      {
        "l": [
          "C"
        ],
        "t": "Control Tower (C) se basa en organizaciones, pero se puede configurar de forma automatizada."
      },
      {
        "l": [
          "A"
        ],
        "t": "IAM (A) sirve para la gestión de usuarios/roles dentro de una sola cuenta."
      },
      {
        "l": [
          "D"
        ],
        "t": "Administrador de sistemas (D) es para operaciones, no para administración de múltiples cuentas."
      }
    ]
  },
  {
    "id": "01-22",
    "module": "AWS Fundamentals",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un equipo de seguridad quiere evitar que todas las cuentas de miembros de su organización AWS creen recursos en cualquier región excepto us-east-1 y eu-west-1. ¿Cómo debería implementarse esto?",
    "options": {
      "A": "Cree políticas de IAM en cada cuenta restringiendo regiones",
      "B": "Utilice reglas de AWS Config para detectar recursos no conformes",
      "C": "Crear una Política de control de servicios (SCP) que niegue acciones en otras regiones",
      "D": "Utilice AWS Firewall Manager para bloquear el acceso a la región"
    },
    "explanation": "• Las políticas de control de servicios (SCP) proporcionan controles preventivos centralizados\n• Los SCP pueden restringir qué regiones de AWS se pueden utilizar\n• Se aplica a nivel de organización, unidad organizativa o cuenta.\n• Los usuarios de cuentas de miembros no pueden anularlo.\n• Los administradores de cuentas pueden cambiar las políticas de IAM (A)\n• Las reglas de configuración (B) son de detección, no preventivas.\n• Firewall Manager (D) es para reglas de grupo de seguridad/WAF, no para restricciones regionales\nEjemplo de SCP:",
    "why": [
      "Las políticas de control de servicios (SCP) proporcionan controles preventivos centralizados.",
      "Los SCP pueden restringir qué regiones de AWS se pueden utilizar.",
      "Se aplica a nivel de organización, unidad organizativa o cuenta.",
      "Los usuarios de cuentas de miembros no pueden anularlo.",
      "Ejemplo de SCP:."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Los administradores de cuentas pueden cambiar las políticas de IAM (A)."
      },
      {
        "l": [
          "B"
        ],
        "t": "Las reglas de configuración (B) son de detección, no preventivas."
      },
      {
        "l": [
          "D"
        ],
        "t": "Firewall Manager (D) es para reglas de grupo de seguridad/WAF, no para restricciones de región."
      }
    ]
  },
  {
    "id": "01-23",
    "module": "AWS Fundamentals",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "¿Cuál de las siguientes afirmaciones sobre las Políticas de control de servicios (SCP) es VERDADERA?",
    "options": {
      "A": "Los SCP otorgan permisos a usuarios y roles",
      "B": "Las SCP afectan la cuenta de administración en una organización de AWS",
      "C": "Los SCP definen permisos máximos para las cuentas de los miembros",
      "D": "Los SCP solo se pueden aplicar a cuentas individuales, no a unidades organizativas"
    },
    "explanation": "• Los SCP definen permisos máximos: actúan como barreras de seguridad\n• Los SCP NO otorgan permisos (A está mal)\n• Sólo restringen lo que es posible\n• Los SCP NO afectan la cuenta de administración (B es incorrecto)\n• Las SCP se pueden aplicar a la raíz de la organización, a las unidades organizativas o a las cuentas (D es incorrecta)\n• Permisos efectivos = política de IAM Y SCP\nReglas clave de SCP:\n• ❌ No conceder permisos\n• ❌ No afecta la cuenta de administración\n• ✅ Establecer límites máximos de permisos\n• ✅ Se puede aplicar a unidades organizativas\n• ✅ Heredado hacia abajo en la jerarquía",
    "why": [
      "Los SCP NO otorgan permisos (A está mal)",
      "Sólo restringen lo que es posible.",
      "Los SCP NO afectan la cuenta de administración (B es incorrecto)",
      "Los SCP se pueden aplicar a la raíz de la organización, a las unidades organizativas o a las cuentas (D es incorrecta)",
      "Permisos efectivos = política de IAM Y SCP.",
      "Reglas clave de SCP:.",
      "❌ No otorgar permisos.",
      "❌ No afecta la cuenta de administración.",
      "✅ Establecer límites máximos de permisos.",
      "✅ Se puede aplicar a unidades organizativas.",
      "✅ Heredado hacia abajo en la jerarquía."
    ],
    "others": []
  },
  {
    "id": "01-24",
    "module": "AWS Fundamentals",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa desea configurar rápidamente un entorno AWS seguro y de múltiples cuentas siguiendo las mejores prácticas con aprovisionamiento automatizado de cuentas y barreras de seguridad de gobernanza preconfiguradas. ¿Qué servicio deberían utilizar?",
    "options": {
      "A": "AWS Organizations",
      "B": "AWS Control Tower",
      "C": "Conjuntos de pilas de AWS CloudFormation",
      "D": "Catálogo de servicios de AWS"
    },
    "explanation": "• AWS Control Tower proporciona configuración automatizada de múltiples cuentas\n• Incluye zona de aterrizaje (línea base bien diseñada)\n• Barandillas preconfiguradas (preventivas y detectivas)\n• Account Factory para aprovisionamiento automatizado\n• Construido sobre la base de AWS Organizations\n• AWS Organizations (A) requiere configuración manual\n• CloudFormation StackSets (C) implementa plantillas, no gobernanza\n• El catálogo de servicios (D) es para recursos de TI de autoservicio\nCaracterísticas de la torre de control:\n• ✅ Configuración automatizada (minutos vs días)\n• ✅ Barandillas prefabricadas\n• ✅ Fábrica de cuentas\n• ✅ Panel de cumplimiento\n• ✅ Integrado con Organizaciones, IAM Identity Center, CloudTrail\nCuándo utilizar:\n• Configuración rápida con las mejores prácticas\n• Se requiere menos experiencia en AWS\n• Quiere una gobernanza prediseñada\nCuándo utilizar organizaciones directamente:\n• Necesita la máxima flexibilidad\n• Tener requisitos personalizados\n• Equipo experimentado de AWS",
    "why": [
      "Incluye zona de aterrizaje (línea de base bien diseñada)",
      "Barandillas preconfiguradas (preventivas y detectivas)",
      "Account Factory para aprovisionamiento automatizado.",
      "Construido sobre AWS Organizations.",
      "Características de la torre de control:.",
      "✅ Configuración automatizada (minutos versus días)",
      "✅ Barandillas prefabricadas.",
      "✅Fábrica de cuentas.",
      "✅ Panel de cumplimiento.",
      "✅ Integrado con Organizaciones, IAM Identity Center, CloudTrail.",
      "Cuándo utilizar:.",
      "Configuración rápida con las mejores prácticas.",
      "Se requiere menos experiencia en AWS.",
      "Quiere una gobernanza prediseñada.",
      "Cuándo utilizar organizaciones directamente:",
      "Necesita la máxima flexibilidad.",
      "Tener requisitos personalizados.",
      "Equipo experimentado de AWS."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "AWS Organizations (A) requiere configuración manual."
      },
      {
        "l": [
          "C"
        ],
        "t": "CloudFormation StackSets (C) implementa plantillas, no gobernanza."
      },
      {
        "l": [
          "D"
        ],
        "t": "El Catálogo de servicios (D) es para recursos de TI de autoservicio."
      }
    ]
  },
  {
    "id": "01-25",
    "module": "AWS Fundamentals",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa tiene una cuenta de red centralizada y desea compartir subredes de VPC con varias cuentas de aplicaciones sin duplicar la infraestructura de VPC. ¿Qué servicio de AWS permite esto?",
    "options": {
      "A": "Interconexión de VPC",
      "B": "AWS Transit Gateway",
      "C": "AWS Resource Access Manager (RAM)",
      "D": "AWS PrivateLink"
    },
    "explanation": "• AWS Resource Access Manager (RAM) permite compartir recursos entre cuentas\n• Puede compartir subredes de VPC entre cuentas\n• Los recursos permanecen en la cuenta del propietario, pero son accesibles para cuentas compartidas.\n• No es necesario duplicar las VPC\n• VPC Peering (A) conecta VPC pero no comparte subredes\n• Transit Gateway (B) conecta redes pero no comparte subredes\n• PrivateLink (D) es para conectividad de servicio a VPC\nBeneficios de compartir subred con RAM:\n• ✅ Gestión de red centralizada\n• ✅ Reducción de la expansión de VPC\n• ✅ Uso eficiente de la dirección IP\n• ✅ Arquitectura de red simplificada\n• ✅ Menores sobrecarga operativa\nOtros recursos compartibles a través de RAM:\n• Subredes VPC (las más comunes)\n• Archivos adjuntos de Transit Gateway\n• Reglas de resolución de Ruta 53\n• Configuraciones del Administrador de licencias\n• Clústeres de bases de datos Aurora\n• Listas de prefijos",
    "why": [
      "Puede compartir subredes de VPC entre cuentas.",
      "Los recursos permanecen en la cuenta del propietario, pero son accesibles para las cuentas compartidas.",
      "No es necesario duplicar las VPC.",
      "Beneficios de compartir subred con RAM:.",
      "✅ Gestión de red centralizada.",
      "✅ Reducción de la expansión de VPC.",
      "✅ Uso eficiente de la dirección IP.",
      "✅ Arquitectura de red simplificada.",
      "✅ Menores sobrecarga operativa.",
      "Otros recursos compartibles a través de RAM:.",
      "Subredes VPC (más comunes)",
      "Adjuntos de Transit Gateway.",
      "Ruta 53 reglas de resolución.",
      "Configuraciones del Administrador de licencias.",
      "Clústeres de base de datos Aurora.",
      "Listas de prefijos."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "VPC Peering (A) conecta VPC pero no comparte subredes."
      },
      {
        "l": [
          "B"
        ],
        "t": "Transit Gateway (B) conecta redes pero no comparte subredes."
      },
      {
        "l": [
          "D"
        ],
        "t": "PrivateLink (D) es para conectividad de servicio a VPC."
      }
    ]
  },
  {
    "id": "01-26",
    "module": "AWS Fundamentals",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa utiliza AWS Organizations con facturación consolidada. Se dan cuenta de que están recibiendo descuentos por volumen en el almacenamiento S3 a pesar de que ninguna cuenta utiliza suficiente almacenamiento para calificar. ¿Por qué?",
    "options": {
      "A": "AWS ofrece descuentos automáticos para organizaciones",
      "B": "La facturación consolidada combina el uso en todas las cuentas para precios por volumen",
      "C": "La cuenta de gestión obtiene todos los descuentos.",
      "D": "Los SCP permiten ahorrar costos automáticamente"
    },
    "explanation": "• La facturación consolidada combina el uso en todas las cuentas.\n• AWS trata a toda la organización como una única entidad de facturación.\n• Se aplican descuentos por volumen al uso combinado\n• Ejemplo: 3 cuentas con 500 GB cada una = 1500 GB en total → precio de nivel más alto\n• No descuentos automáticos (A), solo agregación de uso\n• Todas las cuentas se benefician, no solo la cuenta de administración (C)\n• Los SCP son para permisos, no para costos (D)\nBeneficios de facturación consolidada:\n• ✅ Descuentos por volumen en todas las cuentas\n• ✅ Método de pago único\n• ✅ Seguimiento de costos más sencillo\n• ✅ Etiquetas de asignación de costos en toda la organización\n• ✅ Compartir instancia reservada",
    "why": [
      "AWS trata a toda la organización como una única entidad de facturación.",
      "Se aplican descuentos por volumen al uso combinado.",
      "Ejemplo: 3 cuentas con 500 GB cada una = 1500 GB en total → precio de nivel más alto.",
      "Beneficios de facturación consolidada:.",
      "✅ Descuentos por volumen en todas las cuentas.",
      "✅Método de pago único.",
      "✅ Seguimiento de costos más sencillo.",
      "✅ Etiquetas de asignación de costos en toda la organización.",
      "✅ Compartir instancia reservada."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "No descuentos automáticos (A), solo agregación de uso."
      },
      {
        "l": [
          "C"
        ],
        "t": "Todas las cuentas se benefician, no solo la cuenta de administración (C)"
      },
      {
        "l": [
          "D"
        ],
        "t": "Los SCP son para permisos, no para costos (D)"
      }
    ]
  },
  {
    "id": "01-27",
    "module": "AWS Fundamentals",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "¿Qué característica de AWS Organizations le permite crear políticas que impidan que las cuentas abandonen la organización?",
    "options": {
      "A": "Política de IAM",
      "B": "Política de control de servicios (SCP)",
      "C": "Política de control de recursos",
      "D": "Bloqueo organizacional"
    },
    "explanation": "• Las políticas de control de servicios (SCP) pueden evitar que las cuentas abandonen\n• SCP puede negar la acción `organizaciones:DejarOrganización`\n• Aplicado a nivel de organización u OU\n• No puede ser anulado por cuentas de miembros",
    "why": [
      "SCP puede negar la acción `organizaciones:DejarOrganización`.",
      "Aplicado a nivel de Organización u OU.",
      "No puede ser anulado por cuentas de miembros."
    ],
    "others": []
  },
  {
    "id": "02-1",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación que se ejecuta en instancias Amazon EC2 necesita acceder a objetos en un depósito de Amazon S3. ¿Cuál es la forma MÁS segura de otorgar este acceso?",
    "options": {
      "A": "Cree un usuario de IAM con acceso programático y almacene las claves de acceso en la instancia EC2",
      "B": "Cree un rol de IAM con permisos de S3 y asócielo a la instancia EC2",
      "C": "Haga público el depósito de S3 y permita el acceso anónimo",
      "D": "Utilice las credenciales de la cuenta raíz en la instancia EC2"
    },
    "explanation": "• Las funciones de IAM proporcionan credenciales de seguridad temporales que rotan automáticamente\n• No es necesario administrar ni incorporar credenciales a largo plazo\n• El enfoque más seguro y recomendado por AWS\n• Opción A: Las claves de acceso son credenciales a largo plazo, riesgo de seguridad si se exponen\n• Opción C: viola las mejores prácticas de seguridad\n• Opción D: nunca usar credenciales raíz para aplicaciones\n• Mejores prácticas: utilice siempre funciones de IAM para instancias EC2",
    "why": [
      "Los roles de IAM proporcionan credenciales de seguridad temporales que rotan automáticamente.",
      "No es necesario administrar ni incorporar credenciales a largo plazo.",
      "Enfoque más seguro y recomendado por AWS.",
      "Mejores prácticas: utilice siempre roles de IAM para instancias EC2."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Las claves de acceso son credenciales a largo plazo y suponen un riesgo para la seguridad si se exponen."
      },
      {
        "l": [
          "C"
        ],
        "t": "Viola las mejores prácticas de seguridad."
      },
      {
        "l": [
          "D"
        ],
        "t": "Nunca utilice credenciales de root para aplicaciones."
      }
    ]
  },
  {
    "id": "02-2",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita otorgar acceso temporal a auditores externos para revisar los registros de CloudTrail en S3. El acceso debería caducar después de 7 días. ¿Cuál es la MEJOR solución?",
    "options": {
      "A": "Cree usuarios de IAM para auditores y elimínelos después de 7 días",
      "B": "Cree roles de IAM y proporcione a los auditores credenciales de seguridad temporales mediante AWS STS",
      "C": "Comparta las credenciales de la cuenta raíz durante 7 días",
      "D": "Cree una URL prefirmada de S3 válida por 7 días"
    },
    "explanation": "• AWS STS (Servicio de token de seguridad) genera credenciales temporales\n• Los usuarios externos pueden asumir las funciones de IAM a través de la federación.\n• Las credenciales caducan automáticamente según la duración de la sesión.\n• Opción A: Requiere eliminación manual, gastos generales operativos\n• Opción C: nunca compartir credenciales raíz\n• Opción D: Las URL prefirmadas funcionan pero las funciones de IAM son más completas\n• Lo mejor para acceso temporal: STS con roles de IAM",
    "why": [
      "AWS STS (Security Token Service) genera credenciales temporales.",
      "Los usuarios externos pueden asumir las funciones de IAM a través de la federación.",
      "Las credenciales caducan automáticamente según la duración de la sesión.",
      "Lo mejor para acceso temporal: STS con roles de IAM."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Requiere eliminación manual, gastos generales operativos."
      },
      {
        "l": [
          "C"
        ],
        "t": "Nunca comparta credenciales de root."
      },
      {
        "l": [
          "D"
        ],
        "t": "Las URL prefirmadas funcionan, pero las funciones de IAM son más completas."
      }
    ]
  },
  {
    "id": "02-3",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un arquitecto de soluciones está escribiendo una política de IAM para denegar el acceso a todos los depósitos de S3 excepto a un depósito específico denominado \"datos de producción\". ¿Qué elemento de política debería utilizarse?\n\n```json\n{\n  \"Versión\": \"2012-10-17\",\n  \"Declaración\": [\n    {\n      \"Efecto\": \"Permitir\",\n      \"Acción\": \"s3:*\",\n      \"Recurso\": [\n        \"arn:aws:s3:::datos-de-producción\",\n        \"arn:aws:s3:::datos-de-producción/*\"\n      ]\n    },\n    {\n      \"Efecto\": \"Denegar\",\n      \"Acción\": \"s3:*\",\n      \"Recurso\": \"*\",\n      \"Condición\": {\n        \"StringNotEquals\": {\n          \"s3:ResourceAccount\": \"${aws:PrincipalAccount}\"\n        }\n      }\n    }\n  ]\n}\n```\n\n¿Cuál es el enfoque correcto?",
    "options": {
      "A": "Utilice el efecto Permitir solo para el depósito específico",
      "B": "Utilice el efecto Denegar para todos los depósitos excepto uno",
      "C": "Utilice tanto Permitir para un depósito específico como Denegar implícitamente para otros",
      "D": "Utilice una política basada en recursos en el depósito S3"
    },
    "explanation": "• IAM utiliza la denegación predeterminada para todas las acciones no permitidas explícitamente.\n• Permitir el acceso al depósito de \"datos de producción\" explícitamente\n• Todos los demás depósitos se deniegan implícitamente.\n• No es necesaria una declaración Deny explícita para otros depósitos\n• Lógica de evaluación de IAM: Denegación explícita > Permitir > Denegación implícita\n• Política más simple: solo permita el segmento específico\nPolítica correcta:",
    "why": [
      "IAM utiliza la denegación predeterminada para todas las acciones no permitidas explícitamente.",
      "Permitir el acceso al depósito de \"datos de producción\" explícitamente.",
      "Todos los demás depósitos se deniegan implícitamente.",
      "No es necesaria una declaración Deny explícita para otros depósitos.",
      "Lógica de evaluación de IAM: Denegación explícita > Permitir > Denegación implícita.",
      "Política más simple: solo permita el depósito específico.",
      "Política correcta:."
    ],
    "others": []
  },
  {
    "id": "02-4",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa exige que todos los usuarios de IAM utilicen la autenticación multifactor (MFA) antes de poder eliminar cualquier objeto de S3. ¿Cómo se puede hacer cumplir esto?",
    "options": {
      "A": "Habilite la eliminación de MFA en el depósito S3",
      "B": "Crear una política de IAM con una condición que requiera MFA",
      "C": "Utilice las políticas de control de servicios de AWS Organizations",
      "D": "Configure la política del depósito S3 para requerir MFA"
    },
    "explanation": "• La condición de política de IAM `aws:MultiFactorAuthPresent` aplica MFA\n• Se puede aplicar a acciones específicas como `s3:DeleteObject`",
    "why": [
      "La condición de política de IAM `aws:MultiFactorAuthPresent` aplica MFA.",
      "Se puede aplicar a acciones específicas como `s3:DeleteObject`."
    ],
    "others": []
  },
  {
    "id": "02-5",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un equipo de desarrollo necesita acceso de solo lectura a todas las instancias EC2, pero el acceso de escritura solo debe otorgarse durante el horario comercial (de 9 a. m. a 5 p. m.). ¿Cómo se puede implementar esto?",
    "options": {
      "A": "Utilice condiciones de política de IAM basadas en el tiempo",
      "B": "Adjuntar/desconectar políticas manualmente durante el horario comercial",
      "C": "Utilice AWS Lambda para modificar las políticas de IAM según el tiempo",
      "D": "Cree dos grupos de IAM separados y mueva usuarios entre ellos"
    },
    "explanation": "• IAM admite condiciones basadas en tiempo mediante `aws:CurrentTime`\n• Puede especificar rangos de fecha y hora para la evaluación de políticas",
    "why": [
      "IAM admite condiciones basadas en tiempo mediante `aws:CurrentTime`.",
      "Puede especificar rangos de fecha/hora para la evaluación de políticas."
    ],
    "others": []
  },
  {
    "id": "02-6",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere permitir a los usuarios cambiar sus propias contraseñas pero nada más. ¿Qué política administrada de AWS se debe adjuntar?",
    "options": {
      "A": "IAMAcceso completo",
      "B": "IAMUserCambiarContraseña",
      "C": "Acceso de solo lectura IAM",
      "D": "Acceso de usuario avanzado"
    },
    "explanation": "• `IAMUserChangePassword` es una política administrada por AWS para cambios de contraseña de autoservicio\n• Sigue el principio de privilegio mínimo\n• Permite a los usuarios administrar sólo sus propias contraseñas\n• Opción A: Demasiado permisivo, acceso completo a IAM\n• Opción C: Sólo lectura, no se pueden cambiar las contraseñas\n• Opción D: acceso casi completo excepto IAM\nAlternativa: crear una política personalizada:",
    "why": [
      "Sigue el principio de privilegio mínimo.",
      "Permite a los usuarios administrar solo sus propias contraseñas.",
      "Alternativa: Crear política personalizada:."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Demasiado permisivo, acceso completo a IAM."
      },
      {
        "l": [
          "C"
        ],
        "t": "Solo lectura, no se pueden cambiar contraseñas."
      },
      {
        "l": [
          "D"
        ],
        "t": "Acceso casi completo excepto IAM."
      }
    ]
  },
  {
    "id": "02-7",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una organización tiene varias cuentas de AWS. Quieren gestionar de forma centralizada los permisos de todas las cuentas. ¿Cuál es la MEJOR solución?",
    "options": {
      "A": "Cree políticas de IAM idénticas en cada cuenta",
      "B": "Utilice AWS Organizations con políticas de control de servicios (SCP)",
      "C": "Utilice roles de IAM en cada cuenta",
      "D": "Compartir usuarios de IAM entre cuentas"
    },
    "explanation": "• Las políticas de control de servicios (SCP) establecen límites de permisos para cuentas completas de AWS\n• Se aplica a nivel de organización, unidad organizativa o cuenta.\n• Administrado centralmente desde la cuenta maestra/de administración\n• Permisos máximos disponibles, aún se necesitan políticas de IAM individuales\n• Opción A: No centralizado, difícil de mantener\n• Opción C: los roles ayudan con el acceso entre cuentas pero no administran los permisos de forma centralizada\n• Opción D: los usuarios de IAM no se pueden compartir entre cuentas\nEjemplo de SCP (Denegar todas las regiones excepto us-east-1):",
    "why": [
      "Las políticas de control de servicios (SCP) establecen límites de permisos para cuentas completas de AWS.",
      "Se aplica a nivel de organización, unidad organizativa o cuenta.",
      "Administrado centralmente desde la cuenta maestra/de administración.",
      "Permisos máximos disponibles, aún se necesitan políticas de IAM individuales.",
      "Ejemplo de SCP (Denegar todas las regiones excepto us-east-1):."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "No centralizado, difícil de mantener."
      },
      {
        "l": [
          "C"
        ],
        "t": "Los roles ayudan con el acceso entre cuentas, pero no administran los permisos de forma centralizada."
      },
      {
        "l": [
          "D"
        ],
        "t": "Los usuarios de IAM no se pueden compartir entre cuentas."
      }
    ]
  },
  {
    "id": "02-8",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa utiliza SAML 2.0 para permitir que los empleados accedan a AWS utilizando sus credenciales corporativas de Active Directory. ¿Qué tipo de acceso es este?",
    "options": {
      "A": "Acceso de usuario de IAM",
      "B": "Acceso a la cuenta raíz",
      "C": "Acceso federado",
      "D": "Acceso programático"
    },
    "explanation": "• La federación permite a los usuarios acceder a AWS utilizando credenciales corporativas existentes.\n• SAML 2.0 es un estándar para la federación de identidades\n• Los usuarios se autentican con el IdP corporativo (como Active Directory)\n• El IdP proporciona credenciales temporales de AWS mediante la asunción de roles de IAM\n• No es necesario crear usuarios de IAM para cada empleado\n• Tipos de federación: SAML 2.0, OpenID Connect, Custom Identity Broker\nFlujo de federación:\n1. El usuario se autentica con el IdP corporativo.\n2. El IdP genera una aserción SAML\n3. El usuario presenta una afirmación a AWS STS\n4. STS devuelve credenciales temporales\n5. El usuario accede a AWS con credenciales temporales",
    "why": [
      "La federación permite a los usuarios acceder a AWS utilizando credenciales corporativas existentes.",
      "SAML 2.0 es un estándar para la federación de identidades.",
      "Los usuarios se autentican con el IdP corporativo (como Active Directory)",
      "El IdP proporciona credenciales temporales de AWS mediante la asunción de roles de IAM.",
      "No es necesario crear usuarios de IAM para cada empleado.",
      "Tipos de Federación: SAML 2.0, OpenID Connect, Custom Identity Broker.",
      "Flujo de federación:.",
      "1.",
      "El usuario se autentica con el IdP corporativo.",
      "2.",
      "El IdP genera una aserción SAML.",
      "3.",
      "El usuario presenta una afirmación a AWS STS.",
      "4.",
      "STS devuelve credenciales temporales.",
      "5.",
      "El usuario accede a AWS con credenciales temporales."
    ],
    "others": []
  },
  {
    "id": "02-9",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "¿Qué afirmación sobre las políticas de IAM es correcta?",
    "options": {
      "A": "Las políticas basadas en identidad están adjuntas a los recursos.",
      "B": "Las políticas basadas en recursos están adjuntas a las identidades de IAM",
      "C": "Las políticas basadas en identidad definen permisos para usuarios, grupos y roles.",
      "D": "Las políticas basadas en recursos no pueden especificar directores de otras cuentas"
    },
    "explanation": "• Políticas basadas en identidad: adjuntas a usuarios, grupos, roles (quién puede hacer qué)\n• Políticas basadas en recursos: adjuntas a recursos como S3, SQS (quién puede acceder a este recurso)\n• Opción A: Se adjuntan políticas incorrectas basadas en identidades a las identidades\n• Opción B: Políticas incorrectas basadas en recursos adjuntas a los recursos\n• Opción D: Las políticas incorrectas basadas en recursos PUEDEN especificar principios entre cuentas",
    "why": [
      "Políticas basadas en recursos: adjuntas a recursos como S3, SQS (quién puede acceder a este recurso)"
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Las políticas incorrectas basadas en la identidad se adjuntan a las identidades."
      },
      {
        "l": [
          "B"
        ],
        "t": "Se adjuntan políticas incorrectas basadas en recursos a los recursos."
      },
      {
        "l": [
          "D"
        ],
        "t": "Las políticas incorrectas basadas en recursos PUEDEN especificar principios entre cuentas."
      }
    ]
  },
  {
    "id": "02-10",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una función Lambda necesita acceder a las tablas de DynamoDB. ¿Cuál es la forma correcta de otorgar permisos?",
    "options": {
      "A": "Cree un usuario de IAM para la función Lambda",
      "B": "Cree un rol de ejecución de IAM para la función Lambda",
      "C": "Agregue permisos directamente a la función Lambda",
      "D": "Utilice una política basada en recursos en DynamoDB"
    },
    "explanation": "• El rol de ejecución de Lambda define a qué puede acceder la función\n• El servicio Lambda asume el rol cuando se ejecuta la función\n• Adjuntar políticas al rol (por ejemplo, AmazonDynamoDBFullAccess o política personalizada)\n• Opción A: las funciones Lambda no pueden utilizar usuarios de IAM\n• Opción C: no existe tal mecanismo, se deben usar roles de IAM\n• Opción D: DynamoDB no tiene políticas basadas en recursos como S3\nEjemplo de política de rol de ejecución de Lambda:",
    "why": [
      "El rol de ejecución de Lambda define a qué puede acceder la función.",
      "El servicio Lambda asume el rol cuando se ejecuta la función.",
      "Adjunte políticas al rol (por ejemplo, AmazonDynamoDBFullAccess o política personalizada)",
      "Ejemplo de política de rol de ejecución de Lambda:."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Las funciones Lambda no pueden utilizar usuarios de IAM."
      },
      {
        "l": [
          "C"
        ],
        "t": "No existe tal mecanismo, debe utilizar roles de IAM."
      },
      {
        "l": [
          "D"
        ],
        "t": "DynamoDB no tiene políticas basadas en recursos como S3."
      }
    ]
  },
  {
    "id": "02-11",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "¿Qué hace la siguiente condición de política de IAM?\n\n```json\n\"Condición\": {\n  \"Dirección IP\": {\n    \"aws:SourceIp\": \"203.0.113.0/24\"\n  }\n}\n```",
    "options": {
      "A": "Permite el acceso sólo desde el rango de IP especificado",
      "B": "Deniega el acceso desde el rango de IP especificado",
      "C": "Registra el acceso desde el rango de IP especificado",
      "D": "Enruta el tráfico a través del rango de IP especificado"
    },
    "explanation": "• La condición restringe la efectividad de la política a solicitudes de un rango de IP específico\n• Cuando se usa con \"Efecto\": \"Permitir\", otorga acceso solo desde esas IP\n• Cuando se usa con \"Efecto\": \"Denegar\", niega el acceso desde esas IP\n• No registra ni dirige el tráfico\n• Caso de uso: restringir el acceso a las IP de la red corporativa\nEjemplo de política completo:",
    "why": [
      "La condición restringe la efectividad de la política a solicitudes de un rango de IP específico.",
      "Cuando se usa con \"Efecto\": \"Permitir\", otorga acceso solo desde esas IP.",
      "Cuando se usa con \"Efecto\": \"Denegar\", niega el acceso desde esas IP.",
      "No registra ni enruta el tráfico.",
      "Caso de uso: restringir el acceso a las IP de la red corporativa.",
      "Ejemplo de política completo:."
    ],
    "others": []
  },
  {
    "id": "02-12",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa quiere asegurarse de que los usuarios de IAM no puedan crear instancias EC2 mayores que t3.medium. ¿Cómo se puede hacer cumplir esto?",
    "options": {
      "A": "Utilice la política de IAM con el tipo de instancia de verificación de condiciones",
      "B": "Utilice reglas de AWS Config",
      "C": "Utilice AWS Budgets",
      "D": "Usar límites de instancia EC2"
    },
    "explanation": "• Las condiciones de la política de IAM pueden restringir los tipos de instancias EC2\n• Clave de condición: `ec2:InstanceType`\nEjemplo de política:\n• Opción B: Las reglas de configuración detectan el cumplimiento, no impiden acciones\n• Opción C: Los presupuestos monitorean los costos, no restringen las acciones\n• Opción D: Los límites de servicio son para cuotas para toda la cuenta, no para restricciones basadas en políticas.",
    "why": [
      "Las condiciones de la política de IAM pueden restringir los tipos de instancias EC2.",
      "Clave de condición: `ec2:InstanceType`.",
      "Ejemplo de política:."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Las reglas de configuración detectan el cumplimiento, no impiden acciones."
      },
      {
        "l": [
          "C"
        ],
        "t": "Los presupuestos monitorean los costos, no restringen las acciones."
      },
      {
        "l": [
          "D"
        ],
        "t": "Los límites de servicio son para cuotas para toda la cuenta, no para restricciones basadas en políticas."
      }
    ]
  },
  {
    "id": "02-13",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "¿Cuál es la cantidad máxima de grupos de IAM a los que puede pertenecer un usuario?",
    "options": {
      "A": "5",
      "B": "10",
      "C": "20",
      "D": "Ilimitado"
    },
    "explanation": "• Un usuario de IAM puede ser miembro de hasta 10 grupos\n• Este es un límite/cuota de servicio de AWS\n• Los grupos simplifican la gestión de permisos\n• Si se necesitan permisos más complejos, utilice múltiples políticas o roles\nLímites de IAM (claves para el examen):\n• Usuarios por cuenta: 5000 (predeterminado)\n• Grupos por cuenta: 300\n• Grupos por usuario: 10\n• Políticas administradas por usuario/grupo/rol: 10\n• Tamaño de la política en línea: 2048 caracteres para usuarios, 10240 para roles",
    "why": [
      "Este es un límite/cuota de servicio de AWS.",
      "Los grupos simplifican la gestión de permisos.",
      "Si se necesitan permisos más complejos, utilice varias políticas o roles.",
      "Límites de IAM (claves para el examen):.",
      "Usuarios por cuenta: 5000 (predeterminado)",
      "Grupos por cuenta: 300.",
      "Grupos por usuario: 10.",
      "Políticas administradas por usuario/grupo/rol: 10.",
      "Tamaño de la política en línea: 2048 caracteres para usuarios, 10240 para roles."
    ],
    "others": []
  },
  {
    "id": "02-14",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un desarrollador accidentalmente envió claves de acceso de AWS a un repositorio público de GitHub. ¿Qué se debe hacer INMEDIATAMENTE?",
    "options": {
      "A": "Cambiar la contraseña del usuario de IAM",
      "B": "Eliminar el repositorio de GitHub",
      "C": "Desactivar y eliminar las claves de acceso expuestas",
      "D": "Habilite MFA en la cuenta"
    },
    "explanation": "• Las credenciales expuestas deben desactivarse/eliminarse inmediatamente\n• Evita el acceso no autorizado utilizando claves comprometidas\n• Pasos: Desactivar claves → Crear nuevas claves → Eliminar claves antiguas → Revisar CloudTrail\n• Opción A: Las contraseñas están separadas de las claves de acceso.\n• Opción B: Eliminar el repositorio no ayuda si ya está clonado/indexado\n• Opción D: MFA no protege las claves ya expuestas\nPasos de respuesta a incidentes:\n1. Desactive las claves comprometidas inmediatamente\n2. Revise CloudTrail en busca de actividad no autorizada\n3. Crea nuevas claves de acceso\n4. Eliminar las claves comprometidas\n5. Escanear repositorios de códigos\n6. Implementar la gestión de secretos (AWS Secrets Manager, Parameter Store)",
    "why": [
      "Las credenciales expuestas deben desactivarse/eliminarse inmediatamente.",
      "Evita el acceso no autorizado utilizando claves comprometidas.",
      "Pasos: Desactivar claves → Crear nuevas claves → Eliminar claves antiguas → Revisar CloudTrail.",
      "Pasos de respuesta a incidentes:.",
      "1.",
      "Desactive las claves comprometidas inmediatamente.",
      "2.",
      "Revise CloudTrail para detectar actividades no autorizadas.",
      "3.",
      "Crea nuevas claves de acceso.",
      "4.",
      "Eliminar claves comprometidas.",
      "5.",
      "Escanear repositorios de códigos.",
      "6.",
      "Implementar la gestión de secretos (AWS Secrets Manager, Parameter Store)"
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Las contraseñas están separadas de las claves de acceso."
      },
      {
        "l": [
          "B"
        ],
        "t": "Eliminar el repositorio no ayuda si ya está clonado/indexado."
      },
      {
        "l": [
          "D"
        ],
        "t": "MFA no protege las claves ya expuestas."
      }
    ]
  },
  {
    "id": "02-15",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "¿Qué entidad de IAM puede tener tanto una política de confianza como una política de permisos?",
    "options": {
      "A": "Usuario de IAM",
      "B": "Grupo IAM",
      "C": "Rol de IAM",
      "D": "Política de IAM"
    },
    "explanation": "• Los roles de IAM tienen dos tipos de políticas:\n• Política de Confianza: Define quién puede asumir el rol (principal)\n• Política de permisos: Define lo que el rol puede hacer (acciones)\n• Los usuarios y grupos no tienen políticas de confianza.\n• Las políticas son documentos, no entidades con otras políticas.\nEjemplo de política de confianza:\nEjemplo de política de permisos:",
    "why": [
      "Política de Confianza: Define quién puede asumir el rol (principal)",
      "Política de permisos: Define lo que el rol puede hacer (acciones)",
      "Los usuarios y grupos no tienen políticas de confianza.",
      "Las políticas son documentos, no entidades con otras políticas.",
      "Ejemplo de política de confianza:.",
      "Ejemplo de política de permisos:."
    ],
    "others": []
  },
  {
    "id": "02-16",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita proporcionar acceso a proveedores externos a depósitos S3 específicos sin crear usuarios de IAM. ¿Cuál es el MEJOR enfoque?",
    "options": {
      "A": "Compartir las credenciales de la cuenta raíz",
      "B": "Cree roles de IAM entre cuentas con ID externo",
      "C": "Hacer públicos los depósitos de S3",
      "D": "Utilice URL prefirmadas de S3"
    },
    "explanation": "• Los roles entre cuentas permiten que cuentas externas accedan a recursos\n• La identificación externa agrega una capa de seguridad que evita problemas de confusión entre los asistentes\n• El proveedor asume el rol desde su cuenta de AWS\n• No es necesario administrar usuarios de IAM\nConfiguración:\n1. Cree el rol de IAM en su cuenta\n2. La política de confianza permite la cuenta de AWS del proveedor\n3. Incluya una identificación externa por seguridad\n4. El proveedor asume el rol mediante STS AssumeRole\nPolítica de confianza con ID externo:",
    "why": [
      "Los roles entre cuentas permiten que cuentas externas accedan a los recursos.",
      "La identificación externa agrega una capa de seguridad que evita problemas de confusión entre los diputados.",
      "El proveedor asume el rol desde su cuenta de AWS.",
      "No es necesario administrar usuarios de IAM.",
      "Configuración:.",
      "1.",
      "Cree un rol de IAM en su cuenta.",
      "2.",
      "La política de confianza permite la cuenta de AWS del proveedor.",
      "3.",
      "Incluya una identificación externa por seguridad.",
      "4.",
      "El proveedor asume el rol mediante STS AssumeRole.",
      "Política de confianza con ID externo:."
    ],
    "others": []
  },
  {
    "id": "02-17",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "¿Cuál es el efecto predeterminado cuando ninguna política de IAM permite o deniega explícitamente una acción?",
    "options": {
      "A": "Permitir",
      "B": "Denegar",
      "C": "Solicitar aprobación",
      "D": "Registra la acción"
    },
    "explanation": "• IAM utiliza denegación implícita de forma predeterminada\n• Todas las acciones denegadas a menos que se permitan explícitamente\n• Lógica de evaluación: Denegación explícita → Permitir → Denegación implícita\n• No se puede anular Denegar explícito con Permitir\n• Debe tener Permitir explícito para realizar la acción.\nFlujo de evaluación de políticas:\n1. Denegar evaluación: si alguna política tiene explícito Denegar → DENEGAR\n2. SCP de organizaciones: aplicado como límite de permiso\n3. Políticas basadas en recursos: evaluadas\n4. Políticas basadas en identidad: si alguna tiene Permitir → PERMITIR\n5. Límites de permisos de IAM: aplicados como filtro\n6. Políticas de sesión: Aplicadas para roles asumidos\n7. Valor predeterminado: DENEGAR (si no se permite explícitamente)",
    "why": [
      "Todas las acciones denegadas a menos que se permitan explícitamente.",
      "Lógica de evaluación: Denegación explícita → Permitir → Denegación implícita.",
      "No se puede anular Denegar explícito con Permitir.",
      "Debe tener Permitir explícito para realizar la acción.",
      "Flujo de evaluación de políticas:.",
      "1.",
      "Denegar evaluación: si alguna política tiene explícito Denegar → DENEGAR.",
      "2.",
      "SCP de organizaciones: se aplica como límite de permiso.",
      "3.",
      "Políticas basadas en recursos: Evaluadas.",
      "4.",
      "Políticas basadas en identidad: si alguna tiene Permitir → PERMITIR.",
      "5.",
      "Límites de permisos de IAM: se aplica como filtro.",
      "6.",
      "Políticas de sesión: Aplicadas para roles asumidos.",
      "7.",
      "Valor predeterminado: DENEGAR (si no se permite explícitamente)"
    ],
    "others": []
  },
  {
    "id": "02-18",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere otorgar acceso temporal a objetos de S3 a usuarios no autenticados durante 1 hora. ¿Qué se debe utilizar?",
    "options": {
      "A": "Credenciales de usuario de IAM",
      "B": "URL prefirmadas de S3",
      "C": "Política de depósito S3",
      "D": "Rol de IAM"
    },
    "explanation": "• Las URL prefirmadas otorgan acceso por tiempo limitado a objetos de S3\n• El usuario final no necesita credenciales de AWS\n• La URL contiene información de autenticación.\n• Caduca después de la duración especificada\nGenerar URL prefirmada (AWS CLI):\nCasos de uso:\n• Enlaces de descarga temporales\n• Cargar formularios para usuarios no autenticados\n• Compartir contenido privado sin hacerlo público\n• Acceso por tiempo limitado a los recursos\n• Opción A: Requiere la creación de usuarios, no temporales/anónimos.\n• Opción C: las políticas de depósito no tienen límite de tiempo\n• Opción D: Los roles requieren autenticación",
    "why": [
      "Las URL prefirmadas otorgan acceso por tiempo limitado a objetos de S3.",
      "El usuario final no necesita credenciales de AWS.",
      "La URL contiene información de autenticación.",
      "Caduca después de la duración especificada.",
      "Generar URL prefirmada (AWS CLI):.",
      "Casos de uso:.",
      "Enlaces de descarga temporales.",
      "Cargue formularios para usuarios no autenticados.",
      "Compartir contenido privado sin hacerlo público.",
      "Acceso por tiempo limitado a los recursos."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Requiere crear usuarios, no temporales/anónimos."
      },
      {
        "l": [
          "C"
        ],
        "t": "Las políticas de depósito no tienen límite de tiempo."
      },
      {
        "l": [
          "D"
        ],
        "t": "Los roles requieren autenticación."
      }
    ]
  },
  {
    "id": "02-19",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "¿Cuál es el propósito de los límites de los permisos de IAM?",
    "options": {
      "A": "Para establecer los permisos máximos que puede tener una entidad de IAM",
      "B": "Para otorgar permisos adicionales más allá de las políticas",
      "C": "Para reemplazar las políticas de IAM",
      "D": "Para cifrar credenciales de IAM"
    },
    "explanation": "• Los límites de permisos establecen el límite máximo de permisos\n• No se pueden otorgar más permisos de los que permiten los límites\n• Incluso si la política de identidad lo permite, los límites pueden restringir\n• Caso de uso: delegar la gestión de permisos de forma segura",
    "why": [
      "Los límites de permisos establecen el límite máximo de permisos.",
      "No se pueden otorgar más permisos de los que permiten los límites.",
      "Incluso si la política de identidad lo permite, los límites pueden restringir.",
      "Caso de uso: Delegar la gestión de permisos de forma segura."
    ],
    "others": []
  },
  {
    "id": "02-20",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": true,
    "answer": [
      "A",
      "B"
    ],
    "q": "¿Cuál de las siguientes acciones requiere MFA para la cuenta raíz según las mejores prácticas de AWS? (Elegí DOS)",
    "options": {
      "A": "Iniciar sesión en la consola de AWS",
      "B": "Cambiar la configuración de la cuenta",
      "C": "Lanzamiento de instancias EC2",
      "D": "Eliminar depósitos de S3",
      "E": "Ver información de facturación"
    },
    "explanation": "• Mejores prácticas de AWS: habilite MFA en la cuenta raíz inmediatamente\n• La cuenta raíz debe protegerse con MFA\n• Se requiere MFA para operaciones sensibles\n• Algunas acciones como cambiar la configuración de la cuenta requieren root + MFA\nMejores prácticas para cuentas raíz:\n1. ✅ Habilite MFA en la cuenta raíz\n2. ✅ No uses root para las tareas cotidianas\n3. ✅ Elimine las claves de acceso raíz (use usuarios de IAM en su lugar)\n4. ✅ Crear usuarios de IAM para tareas administrativas\n5. ✅ Utilice root sólo para tareas que requieran root\n6. ✅ Credenciales root seguras (administrador de contraseñas)\nTareas que requieren una cuenta raíz:\n• Cambiar la configuración de la cuenta\n• Cerrar cuenta de AWS\n• Cambiar el plan de soporte de AWS\n• Restaurar permisos de usuario de IAM\n• Regístrese como vendedor en Reserved Instance Marketplace\n• Configurar el depósito S3 para la eliminación de MFA\n• Regístrate en GovCloud",
    "why": [
      "Mejores prácticas de AWS: habilite MFA en la cuenta raíz de inmediato.",
      "La cuenta raíz debe protegerse con MFA.",
      "Se requiere MFA para operaciones sensibles.",
      "Algunas acciones, como cambiar la configuración de la cuenta, requieren root + MFA.",
      "Mejores prácticas para cuentas raíz:",
      "1. ✅ Habilite MFA en la cuenta raíz.",
      "2. ✅ No uses root para las tareas cotidianas.",
      "3. ✅ Elimine las claves de acceso raíz (use usuarios de IAM en su lugar)",
      "4. ✅ Crear usuarios de IAM para tareas administrativas.",
      "5. ✅ Utilice root sólo para tareas que requieran root.",
      "6. ✅ Credenciales root seguras (administrador de contraseñas)",
      "Tareas que requieren una cuenta raíz:.",
      "Cambiar la configuración de la cuenta.",
      "Cierre la cuenta de AWS.",
      "Cambie el plan de soporte de AWS.",
      "Restaurar los permisos de usuario de IAM.",
      "Regístrese como vendedor en Reserved Instance Marketplace.",
      "Configure el depósito S3 para la eliminación de MFA.",
      "Regístrese en GovCloud."
    ],
    "others": []
  },
  {
    "id": "03-1",
    "module": "Compute",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa necesita ejecutar un trabajo de procesamiento por lotes que pueda tolerar interrupciones y debe minimizar los costos. ¿Qué modelo de precios de EC2 debería utilizarse?",
    "options": {
      "A": "Instancias bajo demanda",
      "B": "Instancias reservadas",
      "C": "Spot Instances",
      "D": "Anfitriones dedicados"
    },
    "explanation": "• Las Spot Instances ofrecen hasta un 90 % de descuento en comparación con las instancias bajo demanda\n• Puede interrumpirse con una advertencia de 2 minutos cuando AWS necesita capacidad\n• Perfecto para cargas de trabajo flexibles y tolerantes a fallos\n• Casos de uso ideales: trabajos por lotes, análisis de datos, procesamiento de imágenes, CI/CD\n• Opción A: On-Demand es la más cara\n• Opción B: Reservado requiere un compromiso de 1 a 3 años\n• Opción D: Los hosts dedicados son los más caros, por razones de cumplimiento",
    "why": [
      "Se puede interrumpir con una advertencia de 2 minutos cuando AWS necesita capacidad.",
      "Perfecto para cargas de trabajo flexibles y tolerantes a fallos.",
      "Casos de uso ideales: trabajos por lotes, análisis de datos, procesamiento de imágenes, CI/CD."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "On-Demand es el más caro."
      },
      {
        "l": [
          "B"
        ],
        "t": "Reservado requiere un compromiso de 1 a 3 años."
      },
      {
        "l": [
          "D"
        ],
        "t": "Los hosts dedicados son los más caros en términos de cumplimiento."
      }
    ]
  },
  {
    "id": "03-2",
    "module": "Compute",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Una aplicación experimenta picos de tráfico predecibles todos los lunes a las 9 a.m. ¿Cuál es el enfoque de Auto Scaling más costo-efectivo?",
    "options": {
      "A": "Escala de seguimiento de objetivos",
      "B": "Escalado sencillo",
      "C": "Escalado de pasos",
      "D": "Escalado programado"
    },
    "explanation": "• La escala programada escala según un cronograma predefinido\n• Perfecto para patrones de tráfico predecibles\n• Escala antes de que se produzca un pico de tráfico (proactivo)\n• más costo-efectivo para patrones conocidos\nEjemplo de horario:\n• Opción A: el seguimiento de objetivos es reactivo y escala después de los cambios en las métricas.\n• Opción B/C: El escalado paso/simple es reactivo\n• Programado = Proactivo, Objetivo/Paso/Simple = Reactivo",
    "why": [
      "Perfecto para patrones de tráfico predecibles.",
      "Escala antes de que se produzca un pico de tráfico (proactivo)",
      "más costo-efectivo para patrones conocidos.",
      "Ejemplo de horario:.",
      "Opción B/C: Paso/Escalado simple son reactivos.",
      "Programado = Proactivo, Objetivo/Paso/Simple = Reactivo."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "El seguimiento de objetivos es reactivo y escala después de cambios en las métricas."
      }
    ]
  },
  {
    "id": "03-3",
    "module": "Compute",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación web requiere alta disponibilidad en múltiples zonas de disponibilidad con distribución automática del tráfico. ¿Qué balanceador de carga debería usarse para el tráfico HTTP/HTTPS con enrutamiento avanzado?",
    "options": {
      "A": "Classic Load Balancer (CLB)",
      "B": "Application Load Balancer (ALB)",
      "C": "Network Load Balancer (NLB)",
      "D": "Gateway Load Balancer (GWLB)"
    },
    "explanation": "• El balanceador de carga de aplicaciones (ALB) opera en la capa 7 (HTTP/HTTPS)\n• Enrutamiento avanzado: basado en rutas, basado en host, basado en encabezados\n• Compatibilidad con WebSocket y HTTP/2\n• Perfecto para aplicaciones web modernas\nCaracterísticas del ALB:\n• Enrutamiento basado en rutas: `/api/*` → servidores API, `/images/*` → servidores de imágenes\n• Enrutamiento basado en host: `api.example.com` frente a `www.example.com`\n• Cadena de consulta/enrutamiento de encabezado\n• Respuesta fija, redirecciones\n• Integración de AWS WAF\n• Autenticación (OIDC, Cognito)\nComparación del equilibrador de carga:\n• CLB: heredado, capa 4/7, básico\n• ALB: Capa 7, HTTP/HTTPS, enrutamiento avanzado\n• NLB: Capa 4, TCP/UDP, rendimiento ultraalto, IP estática\n• GLB: Capa 3, dispositivos virtuales de terceros",
    "why": [
      "Enrutamiento avanzado: basado en rutas, basado en host, basado en encabezados.",
      "Soporte WebSocket y HTTP/2.",
      "Perfecto para aplicaciones web modernas.",
      "Características de ALB:.",
      "Enrutamiento basado en rutas: `/api/` → servidores API, `/images/` → servidores de imágenes.",
      "Enrutamiento basado en host: `api.example.com` frente a `www.example.com`.",
      "Cadena de consulta/enrutamiento de encabezado.",
      "Respuesta fija, redirecciones.",
      "Integración de AWS WAF.",
      "Autenticación (OIDC, Cognito)",
      "Comparación del equilibrador de carga:.",
      "CLB: Legacy, Capa 4/7, básico.",
      "ALB: Capa 7, HTTP/HTTPS, enrutamiento avanzado.",
      "NLB: Capa 4, TCP/UDP, rendimiento ultraalto, IP estática.",
      "GLB: Capa 3, dispositivos virtuales de terceros."
    ],
    "others": []
  },
  {
    "id": "03-4",
    "module": "Compute",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación de microservicios necesita un equilibrador de carga que pueda manejar millones de solicitudes por segundo con latencia ultrabaja y direcciones IP estáticas. ¿Qué balanceador de carga se debe utilizar?",
    "options": {
      "A": "Application Load Balancer (ALB)",
      "B": "Network Load Balancer (NLB)",
      "C": "Classic Load Balancer (CLB)",
      "D": "Amazon CloudFront"
    },
    "explanation": "• Network Load Balancer (NLB) opera en la capa 4 (TCP/UDP/TLS)\n• Maneja millones de solicitudes por segundo\n• Latencia ultrabaja (microsegundos)\n• Direcciones IP estáticas (una por AZ)\n• Conserva la dirección IP de origen\nCasos de uso de NLB:\n• Requisitos de rendimiento extremos\n• Se necesita IP estática/elástica (lista blanca en firewalls)\n• Tráfico TCP/UDP\n• Puntos finales de PrivateLink\n• Servidores de juegos, IoT, aplicaciones en tiempo real\nNLB contra ALB:\n• NLB: Capa 4, más rápida, IP estática, TCP/UDP\n• ALB: Capa 7, enrutamiento avanzado, HTTP/HTTPS",
    "why": [
      "Maneja millones de solicitudes por segundo.",
      "Latencia ultrabaja (microsegundos)",
      "Direcciones IP estáticas (una por AZ)",
      "Conserva la dirección IP de origen.",
      "Casos de uso de NLB:.",
      "Requisitos de rendimiento extremos.",
      "Se necesita IP estática/elástica (lista blanca en firewalls)",
      "Tráfico TCP/UDP.",
      "Puntos finales de PrivateLink.",
      "Servidores de juegos, IoT, aplicaciones en tiempo real.",
      "NLB contra ALB:.",
      "NLB: Capa 4, más rápida, IP estática, TCP/UDP.",
      "ALB: Capa 7, enrutamiento avanzado, HTTP/HTTPS."
    ],
    "others": []
  },
  {
    "id": "03-5",
    "module": "Compute",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere ejecutar código en respuesta a eventos sin administrar servidores. El código debe ejecutarse solo cuando se activa y escalar automáticamente. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon EC2 con escalado automático",
      "B": "AWS Lambda",
      "C": "Amazon ECS",
      "D": "AWS Elastic Beanstalk"
    },
    "explanation": "• AWS Lambda es un servicio informático sin servidor\n• Ejecución basada en eventos\n• Escalado automático (de 1 a 1000 de ejecuciones simultáneas)\n• Pague solo por el tiempo de cálculo (por milisegundo)\n• Sin administración de servidores\nCaracterísticas Lambda:\n• Tiempo máximo de ejecución: 15 minutos\n• Memoria: 128 MB a 10,240 MB\n• Paquete de implementación: 50 MB (comprimido), 250 MB (descomprimido)\n• Ejecuciones simultáneas: 1000 (predeterminado, puede aumentar)\n• Facturación: por solicitud + tiempo de cálculo (GB-segundos)\nDisparadores Lambda:\n• API Gateway (API REST)\n• Eventos S3\n• Secuencias de DynamoDB\n• EventBridge (programado/basado en eventos)\n• Amazon SNS, SQS\n• Kinesis",
    "why": [
      "Ejecución basada en eventos.",
      "Escalado automático (de 1 a 1000 de ejecuciones simultáneas)",
      "Pague solo por el tiempo de cálculo (por milisegundo)",
      "Sin gestión de servidores.",
      "Características Lambda:.",
      "Tiempo máximo de ejecución: 15 minutos.",
      "Memoria: 128 MB a 10.240 MB.",
      "Paquete de implementación: 50 MB (comprimido), 250 MB (descomprimido)",
      "Ejecuciones simultáneas: 1000 (predeterminado, puede aumentar)",
      "Facturación: por solicitud + tiempo de cálculo (GB-segundos)",
      "Disparadores Lambda:.",
      "Puerta de enlace API (API REST)",
      "Eventos S3.",
      "Secuencias de DynamoDB.",
      "EventBridge (programado/basado en eventos)",
      "SNS, SQS.",
      "Kinesis."
    ],
    "others": []
  },
  {
    "id": "03-6",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación que se ejecuta en instancias EC2 experimenta un tráfico variable y necesita mantener una utilización promedio de la CPU del 50 %. ¿Qué política de Auto Scaling se debe configurar?",
    "options": {
      "A": "Escalado sencillo",
      "B": "Escalado de pasos",
      "C": "Escala de seguimiento de objetivos",
      "D": "Escalamiento predictivo"
    },
    "explanation": "• La escala de seguimiento de objetivos ajusta automáticamente la capacidad para mantener la métrica objetivo\n• Especifique el valor objetivo (por ejemplo, 50 % de CPU), Auto Scaling hace el resto\n• Más fácil de configurar y administrar\n• Crea y administra alarmas de CloudWatch automáticamente\nEjemplo de configuración:\nMétricas predefinidas:\n• `ASGAverageCPUUtilization`\n• `ASGAverageNetworkIn`\n• `ASGAverageNetworkOut`\n• `ALBRequestCountPerTarget`\nTipos de políticas de escalamiento:\n• Seguimiento de objetivos: mantenga un valor de métrica específico (MÁS FÁCIL)\n• Paso: Agregar o eliminar capacidad según los umbrales de alarma de CloudWatch\n• Simple: ajuste de escala único (heredado)\n• Predictivo: pronóstico basado en ML",
    "why": [
      "Especifique el valor objetivo (por ejemplo, 50 % de CPU), Auto Scaling hace el resto.",
      "Más fácil de configurar y administrar.",
      "Crea y gestiona alarmas de CloudWatch automáticamente.",
      "Ejemplo de configuración:.",
      "Métricas predefinidas:.",
      "`ASGAverageCPUUtilization`.",
      "`ASGAverageNetworkIn`.",
      "`ASGAverageNetworkOut`.",
      "`ALBRequestCountPerTarget`.",
      "Tipos de políticas de escalamiento:.",
      "Seguimiento de objetivos: mantener un valor de métrica específico (MÁS FÁCIL)",
      "Paso: Agregar o eliminar capacidad según los umbrales de alarma de CloudWatch.",
      "Simple: ajuste de escala único (heredado)",
      "Predictivo: pronóstico basado en ML."
    ],
    "others": []
  },
  {
    "id": "03-7",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita ejecutar contenedores Docker sin gestionar instancias EC2. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon ECS con tipo de lanzamiento EC2",
      "B": "Amazon ECS con tipo de lanzamiento Fargate",
      "C": "Amazon EKS",
      "D": "AWS Elastic Beanstalk"
    },
    "explanation": "• AWS Fargate es una plataforma de contenedores sin servidor\n• No se requiere gestión de instancias EC2\n• Pague por la vCPU y los recursos de memoria utilizados\n• Funciona tanto con ECS como con EKS\nOpciones de servicio de contenedores:\n| Servicio | Descripción | Gestión |\n|---------|-------------|------------|\n| ECS + EC2 | Orquestación de contenedores en EC2 | Administrar instancias |\n| ECS + Fargate | Contenedores sin servidor | Sin gestión de instancias |\n| EKS + EC2 | Kubernetes en EC2 | Administrar instancias + K8 |\n| EKS + Fargate | Kubernetes sin servidor | Sin gestión de instancias |\nBeneficios de Fargate:\n• Sin aprovisionamiento/escalado de instancias\n• Sin parches/instancias seguras\n• Pago por tarea\n• Operaciones más simples\nCuándo utilizar Fargate frente a EC2:\n• Fargate: simplicidad, menos sobrecarga operativa\n• EC2: Necesita tipos de instancia específicos, GPU y optimización de costos para cargas de trabajo sostenidas",
    "why": [
      "AWS Fargate es una plataforma de contenedores sin servidor.",
      "No se requiere gestión de instancias EC2.",
      "Pague por la vCPU y los recursos de memoria utilizados.",
      "Funciona tanto con ECS como con EKS.",
      "Opciones de servicio de contenedores:.",
      "| Servicio | Descripción | Gestión |.",
      "|---------|-------------|------------|.",
      "| ECS + EC2 | Orquestación de contenedores en EC2 | Administrar instancias |.",
      "| ECS + Fargate | Contenedores sin servidor | Sin gestión de instancias |.",
      "| EKS + EC2 | Kubernetes en EC2 | Administrar instancias + K8s |.",
      "| EKS + Fargate | Kubernetes sin servidor | Sin gestión de instancias |.",
      "Beneficios de Fargate:.",
      "Sin aprovisionamiento/escalado de instancias.",
      "Sin parches/instancias de seguridad.",
      "Pago por tarea.",
      "Operaciones más simples.",
      "Cuándo utilizar Fargate frente a EC2:.",
      "Fargate: Simplicidad, menos sobrecarga operativa.",
      "EC2: Necesita tipos de instancias específicos, GPU y optimización de costos para cargas de trabajo sostenidas."
    ],
    "others": []
  },
  {
    "id": "03-8",
    "module": "Compute",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una instancia EC2 necesita conectividad de baja latencia y alto rendimiento con otras instancias en el mismo clúster. ¿Qué grupo de ubicación se debe utilizar?",
    "options": {
      "A": "Grupo de ubicación de clúster",
      "B": "Grupo de colocación de diferenciales",
      "C": "Grupo de colocación de particiones",
      "D": "No se necesita grupo de colocación"
    },
    "explanation": "• El grupo de ubicación de clúster coloca instancias muy juntas en una única zona de disponibilidad.\n• Red de baja latencia (10 Gbps entre instancias)\n• Alto rendimiento, redes mejoradas\n• Todas las instancias en el mismo rack/proximidad física\nTipos de grupos de ubicación:\n| Tipo | Propósito | AZ | Instancias máximas |\n|------|---------|----|----|\n| Clúster | Baja latencia, alto rendimiento | Única AZ | Limitado por tipo de instancia |\n| Difundir | Reducir fallas correlacionadas | Multi-AZ | 7 por AZ |\n| Partición | Grandes cargas de trabajo distribuidas | Multi-AZ | 7 particiones por AZ |\nCasos de uso:\n• Clúster: HPC, big data, aplicaciones de baja latencia\n• Distribución: aplicaciones críticas (cada instancia es un bastidor separado)\n• Partición: Hadoop, Cassandra, Kafka (partición = bastidor)\nLimitaciones:\n• Clúster: solo AZ única\n• Distribución: máximo 7 instancias por AZ\n• No se admiten todos los tipos de instancias",
    "why": [
      "Red de baja latencia (10 Gbps entre instancias)",
      "Alto rendimiento, redes mejoradas.",
      "Todas las instancias en el mismo rack/proximidad física.",
      "Tipos de grupos de ubicación:.",
      "| Tipo | Propósito | AZ | Instancias máximas |.",
      "|------|---------|----|----|.",
      "| Clúster | Baja latencia, alto rendimiento | Única AZ | Limitado por tipo de instancia |.",
      "| Difundir | Reducir fallas correlacionadas | Multi-AZ | 7 por AZ |.",
      "| Partición | Grandes cargas de trabajo distribuidas | Multi-AZ | 7 particiones por AZ |.",
      "Casos de uso:.",
      "Clúster: HPC, big data, aplicaciones de baja latencia.",
      "Distribución: aplicaciones críticas (cada instancia tiene un bastidor separado)",
      "Partición: Hadoop, Cassandra, Kafka (partición = bastidor)",
      "Limitaciones:.",
      "Clúster: solo AZ única.",
      "Distribución: máximo 7 instancias por AZ.",
      "No se admiten todos los tipos de instancias."
    ],
    "others": []
  },
  {
    "id": "03-9",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere implementar una aplicación web con escalado automático, equilibrio de carga y monitoreo del estado sin administrar la infraestructura. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "AWS Lambda",
      "B": "Amazon EC2 con escalado automático",
      "C": "AWS Elastic Beanstalk",
      "D": "Amazon Lightsail"
    },
    "explanation": "• AWS Elastic Beanstalk es PaaS (Plataforma como Servicio)\n• Cargue el código, Beanstalk se encarga de la implementación\n• Aprovisionamiento automático: EC2, ALB, Auto Scaling, RDS, monitoreo\n• Múltiples plataformas: Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker\nCaracterísticas de Beanstalk elástico:\n• Aprovisionamiento automático de capacidad\n• Equilibrio de carga\n• Escalado automático\n• Monitoreo de salud\n• Actualizaciones de la plataforma\n• Seguir teniendo control total sobre los recursos (no completamente abstraídos)\nOpciones de implementación:\n• Todo a la vez: tiempo de inactividad más rápido\n• Rolling: lotes parciales, capacidad reducida\n• Rodando con lote adicional: mantiene la capacidad total\n• Inmutable: instancias nuevas, más seguras\n• Azul/Verde: Manual mediante URL de intercambio\nBeanstalk frente a otros:\n• Lambda: Funciones, no aplicaciones completas\n• EC2 + Auto Scaling: más configuración manual\n• Lightsail: más simple, menos escalable",
    "why": [
      "Cargue el código, Beanstalk se encarga de la implementación.",
      "Aprovisionamiento automático: EC2, ALB, Auto Scaling, RDS, monitorización.",
      "Múltiples plataformas: Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker.",
      "Características elásticas de Beanstalk:.",
      "Aprovisionamiento automático de capacidad.",
      "Equilibrio de carga.",
      "Escalado automático.",
      "Vigilancia de la salud.",
      "Actualizaciones de la plataforma.",
      "Seguir teniendo control total sobre los recursos (no completamente abstraídos)",
      "Opciones de implementación:.",
      "Todo a la vez: tiempo de inactividad más rápido.",
      "Laminación: Lotes parciales, capacidad reducida.",
      "Rodando con lote adicional: Mantiene la capacidad total.",
      "Inmutable: instancias nuevas, más seguras.",
      "Azul/Verde: Manual mediante URL de intercambio.",
      "Beanstalk frente a otros:.",
      "Lambda: Funciones, no aplicaciones completas.",
      "EC2 + Auto Scaling: Más configuración manual.",
      "Lightsail: más simple, menos escalable."
    ],
    "others": []
  },
  {
    "id": "03-10",
    "module": "Compute",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación requiere reserva de capacidad garantizada para instancias EC2 en una zona de disponibilidad específica sin compromiso a largo plazo. ¿Qué opción se debe utilizar?",
    "options": {
      "A": "Instancias reservadas",
      "B": "Planes de Ahorro",
      "C": "Reservas de capacidad bajo demanda",
      "D": "Spot Instances"
    },
    "explanation": "• Reservas de capacidad bajo demanda reservan capacidad en AZ específica\n• Sin compromiso a largo plazo (puede cancelar en cualquier momento)\n• Se cobran tarifas On-Demand, ya sea que se usen o no\n• Garantiza la disponibilidad de capacidad cuando sea necesario\nComparación de opciones de capacidad:\n| Opción | Compromiso | Descuento | Garantía de capacidad |\n|--------|------------|----------|-------------|\n| Bajo demanda | Ninguno | Ninguno | Sin garantía |\n| Reservado | 1-3 años | Hasta 72% | Sí (regional o zonal) |\n| Planes de Ahorro | 1-3 años | Hasta 66% | No |\n| Reservas de Capacidad | Ninguno | Ninguno | Sí (zonal) |\n| Lugar | Ninguno | Hasta 90% | No (puede ser interrumpido) |\nCaso de uso:\n• Recuperación ante desastres (reserva de capacidad pero no siempre se ejecuta)\n• Eventos críticos para el negocio (Black Friday)\n• Requisitos reglamentarios/de cumplimiento\nOptimización de costes: combine la reserva de capacidad con el plan de ahorro",
    "why": [
      "Sin compromiso a largo plazo (puede cancelar en cualquier momento)",
      "Se cobran tarifas On-Demand, ya sea que se usen o no.",
      "Garantiza la disponibilidad de capacidad cuando sea necesario.",
      "Comparación de opciones de capacidad:.",
      "| Opción | Compromiso | Descuento | Garantía de capacidad |.",
      "|--------|------------|----------|-------------------|.",
      "| Bajo demanda | Ninguno | Ninguno | Sin garantía |.",
      "| Reservado | 1-3 años | Hasta 72% | Sí (regional o zonal) |.",
      "| Planes de Ahorro | 1-3 años | Hasta 66% | No |.",
      "| Reservas de Capacidad | Ninguno | Ninguno | Sí (zonal) |.",
      "| Lugar | Ninguno | Hasta 90% | No (puede ser interrumpido) |.",
      "Caso de uso:.",
      "Recuperación ante desastres (reserva de capacidad pero no siempre se ejecuta)",
      "Eventos críticos para el negocio (Black Friday)",
      "Requisitos reglamentarios/de cumplimiento.",
      "Optimización de Costos: Combine Reserva de Capacidad con Plan de Ahorro."
    ],
    "others": []
  },
  {
    "id": "03-11",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una función Lambda caduca después de 3 segundos al procesar archivos grandes. ¿Qué debería cambiarse?",
    "options": {
      "A": "Aumentar la asignación de memoria Lambda",
      "B": "Aumentar la configuración del tiempo de espera de Lambda",
      "C": "Utilice capas Lambda",
      "D": "Cambiar a EC2"
    },
    "explanation": "• El tiempo de espera predeterminado de Lambda es de 3 segundos.\n• Puede aumentarse hasta 15 minutos (900 segundos)\n• La configuración del tiempo de espera está separada de la memoria\nConfiguración Lambda:\n• Memoria: 128 MB a 10240 MB (10 GB)\n• Tiempo de espera: 1 segundo a 900 segundos (15 minutos)\n• La CPU aumenta con la memoria (1792 MB = 1 vCPU)\n• Almacenamiento efímero (/tmp): 512 MB a 10 240 MB\nAjuste de rendimiento:\n1. Aumente el tiempo de espera para tareas de larga duración\n2. Aumente la memoria si está limitada a la CPU (la CPU aumenta con la memoria)\n3. Optimizar el código\n4. Utilice patrones asíncronos para tareas muy largas\nCuando Lambda NO es adecuado:\n• Tareas > 15 minutos\n• Necesita GPU\n• Aplicaciones con estado\n• Requisitos de latencia en tiempo real (arranques en frío)",
    "why": [
      "El tiempo de espera predeterminado de Lambda es de 3 segundos.",
      "Se puede aumentar hasta 15 minutos (900 segundos)",
      "La configuración del tiempo de espera está separada de la memoria.",
      "Configuración Lambda:.",
      "Memoria: 128 MB a 10240 MB (10 GB)",
      "Tiempo de espera: 1 segundo a 900 segundos (15 minutos)",
      "La CPU escala con la memoria (1792 MB = 1 vCPU)",
      "Almacenamiento efímero (/tmp): 512 MB a 10.240 MB.",
      "Ajuste de rendimiento:.",
      "1.",
      "Aumente el tiempo de espera para tareas de larga duración.",
      "2.",
      "Aumente la memoria si está vinculada a la CPU (la CPU aumenta con la memoria)",
      "3.",
      "Optimizar código.",
      "4.",
      "Utilice patrones asíncronos para tareas muy largas.",
      "Cuando Lambda NO es adecuado:.",
      "Tareas > 15 minutos.",
      "Necesita GPU.",
      "Aplicaciones con estado.",
      "Requisitos de latencia en tiempo real (arranques en frío)"
    ],
    "others": []
  },
  {
    "id": "03-12",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere ejecutar instancias EC2 con servidores físicos dedicados para cumplir con los requisitos. ¿Qué opción se debe utilizar?",
    "options": {
      "A": "Instancias dedicadas",
      "B": "Anfitriones dedicados",
      "C": "Instancias reservadas",
      "D": "Spot Instances"
    },
    "explanation": "• Hosts dedicados: servidor físico dedicado a su uso\n• Visibilidad de sockets, núcleos e ID de host.\n• Compatibilidad con BYOL (traiga su propia licencia): Windows Server, SQL Server\n• Cumplir con los requisitos de cumplimiento\n• Opción más cara\nInstancias dedicadas frente a hosts dedicados:\n| Característica | Instancias Dedicadas | Anfitriones dedicados |\n|---------|-------------------|----------------|\n| Aislamiento | Nivel de instancia | Servidor físico |\n| Visibilidad | Sin visibilidad de hardware | Visibilidad del zócalo/núcleo |\n| BYOL | No compatible | Apoyado |\n| Colocación | Automático | Colocación de controles |\n| Facturación | Por instancia | Por anfitrión |\n| Caso de uso | Cumplimiento (requisito blando) | BYOL, cumplimiento (estricto) |\nCasos de uso para hosts dedicados:\n• Licencias de software vinculadas al servidor\n• Cumplimiento normativo\n• Seguimiento del uso del host físico",
    "why": [
      "Visibilidad de sockets, núcleos e ID de host.",
      "Soporte para BYOL (traiga su propia licencia): Windows Server, SQL Server.",
      "Cumplir con los requisitos de cumplimiento.",
      "Opción más cara.",
      "Instancias dedicadas frente a hosts dedicados:",
      "| Característica | Instancias Dedicadas | Anfitriones dedicados |.",
      "|---------|-------------------|----------------|.",
      "| Aislamiento | Nivel de instancia | Servidor físico |.",
      "| Visibilidad | Sin visibilidad de hardware | Visibilidad del zócalo/núcleo |.",
      "| BYOL | No compatible | Apoyado |.",
      "| Colocación | Automático | Colocación de controles |.",
      "| Facturación | Por instancia | Por anfitrión |.",
      "| Caso de uso | Cumplimiento (requisito blando) | BYOL, cumplimiento (estricto) |.",
      "Casos de uso para hosts dedicados:",
      "Licencias de software vinculadas al servidor.",
      "Cumplimiento normativo.",
      "Realice un seguimiento del uso del host físico."
    ],
    "others": []
  },
  {
    "id": "03-13",
    "module": "Compute",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un grupo de Auto Scaling tiene 10 instancias. Un administrador finaliza manualmente 3 instancias. ¿Qué pasa después?",
    "options": {
      "A": "Auto Scaling finaliza 3 instancias más",
      "B": "Auto Scaling lanza 3 nuevas instancias",
      "C": "Auto Scaling no hace nada",
      "D": "Auto Scaling envía una alerta"
    },
    "explanation": "• Auto Scaling mantiene la capacidad deseada\n• Si las instancias se cancelan (manual o automáticamente), ASG las reemplaza\n• Garantiza que se mantenga el recuento deseado\nConfiguración del grupo de Auto Scaling:\n• Mínimo: número mínimo de instancias\n• Deseado: número objetivo de instancias\n• Máximo: número máximo de instancias\nActividades de escala:\n• Escalamiento horizontal: lanzamiento de instancias (deseadas <actuales)\n• Ampliar escala: finalizar instancias (deseado > actual)\n• Reemplazar en mal estado: finalizar y reemplazar\n• Reequilibrio entre zonas de disponibilidad\nProtección de instancia:\n• Puede habilitar la protección escalada en instancias específicas\n• Impide que Auto Scaling finalice instancias protegidas\n• La terminación manual todavía funciona",
    "why": [
      "Auto Scaling mantiene la capacidad deseada.",
      "Si las instancias finalizan (manual o automáticamente), ASG las reemplaza.",
      "Garantiza que se mantenga el recuento deseado.",
      "Configuración del grupo de Auto Scaling:.",
      "Mínimo: Número mínimo de instancias.",
      "Deseado: número objetivo de instancias.",
      "Máximo: Número máximo de instancias.",
      "Actividades de escalamiento:.",
      "Escalamiento horizontal: instancias de lanzamiento (deseadas <actuales)",
      "Ampliar: finalizar instancias (deseado > actual)",
      "Reemplazar en mal estado: finalizar y reemplazar.",
      "Reequilibrio entre AZ.",
      "Protección de instancia:.",
      "Puede habilitar la protección escalada en instancias específicas.",
      "Impide que Auto Scaling finalice instancias protegidas.",
      "La terminación manual todavía funciona."
    ],
    "others": []
  },
  {
    "id": "03-14",
    "module": "Compute",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación de procesamiento por lotes utiliza funciones Lambda pero necesita coordinar varios pasos con manejo de errores y reintentos. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "AmazonSQS",
      "B": "Amazon SNS",
      "C": "AWS Step Functions",
      "D": "Amazon EventBridge"
    },
    "explanation": "• AWS Step Functions organiza flujos de trabajo sin servidor\n• Coordinar múltiples funciones Lambda\n• Manejo de errores integrado, reintentos y ejecución paralela\n• Diseñador de flujo de trabajo visual\nCaracterísticas de las funciones de paso:\n• Máquina de estados: define el flujo de trabajo como estados.\n• Manejo de errores: detectar errores, reintentar la lógica\n• Ejecución paralela: ejecute pasos simultáneamente\n• Estados de espera: retrasos entre pasos\n• Estados de elección: lógica condicional\n• Estados del mapa: iterar sobre matrices\nTipos de flujo de trabajo:\n• Estándar: ejecución de larga duración (hasta 1 año) exactamente una vez\n• Rápido: de corta duración (5 min), al menos una vez, de alta velocidad\nCasos de uso:\n• Tuberías ETL\n• Procesamiento de pedidos\n• Procesamiento de vídeo\n• Flujos de trabajo de aprendizaje automático\nAWS Step Functions frente a alternativas:\n• SQS: cola de mensajes, sin orquestación\n• SNS: mensajería pub/sub, sin orquestación\n• EventBridge: enrutamiento de eventos, flujos de trabajo más simples",
    "why": [
      "Coordine múltiples funciones Lambda.",
      "Manejo de errores integrado, reintentos y ejecución paralela.",
      "Diseñador de flujo de trabajo visual.",
      "Características de las funciones de paso:.",
      "Máquina de estados: defina el flujo de trabajo como estados.",
      "Manejo de errores: detectar errores, reintentar la lógica.",
      "Ejecución paralela: ejecute los pasos simultáneamente.",
      "Estados de espera: retrasos entre pasos.",
      "Estados de elección: lógica condicional.",
      "Estados del mapa: iterar sobre matrices.",
      "Tipos de flujo de trabajo:.",
      "Estándar: ejecución de larga duración (hasta 1 año) exactamente una vez.",
      "Rápido: De corta duración (5 min), al menos una vez, de alta velocidad.",
      "Casos de uso:.",
      "Tuberías ETL.",
      "Procesamiento de pedidos.",
      "Procesamiento de vídeo.",
      "Flujos de trabajo de aprendizaje automático.",
      "AWS Step Functions frente a alternativas:",
      "SQS: cola de mensajes, sin orquestación.",
      "SNS: mensajería pub/sub, sin orquestación.",
      "EventBridge: enrutamiento de eventos, flujos de trabajo más simples."
    ],
    "others": []
  },
  {
    "id": "03-15",
    "module": "Compute",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación necesita un rendimiento constante con una CPU básica y la capacidad de superar la línea base cuando sea necesario. ¿Qué tipo de instancia EC2 debería usarse?",
    "options": {
      "A": "M5 (propósito general)",
      "B": "C5 (optimizado para computación)",
      "C": "T3 (rendimiento ampliable)",
      "D": "R5 (memoria optimizada)"
    },
    "explanation": "• Las instancias T3/T4g son instancias de rendimiento ampliables.\n• Rendimiento básico de la CPU con sistema de créditos\n• Acumular créditos de CPU cuando estén por debajo del nivel base\n• Superar la línea de base usando créditos\n• costo-efectivo para cargas de trabajo variables\nCréditos de CPU T3:\n• El rendimiento básico depende del tamaño de la instancia\n• Gana créditos cuando la CPU <valor inicial\n• Gastar créditos cuando CPU > línea base\n• Modo ilimitado: puede exceder los créditos (cargos adicionales)\nTipos de instancia T3:\n• t3.nano: 5 % de referencia\n• t3.micro: 10 % del valor inicial\n• t3.small: 20% de referencia\n• t3.medio: 20 % del valor inicial\n• t3.grande: 30% de referencia\nCasos de uso:\n• Servidores web, desarrollo/pruebas\n• Pequeñas bases de datos\n• Repositorios de código\n• Microservicios\nCuándo NO usar T3:\n• Alto uso sostenido de CPU\n• Necesidades predecibles de alto rendimiento\n• Utilice C5/M5 para un rendimiento sostenido",
    "why": [
      "Las instancias T3/T4g son instancias de rendimiento ampliables.",
      "Rendimiento básico de la CPU con sistema de créditos.",
      "Acumule créditos de CPU cuando esté por debajo del nivel base.",
      "Supere la línea de base usando créditos.",
      "costo-efectivo para cargas de trabajo variables.",
      "Créditos de CPU T3:.",
      "El rendimiento básico depende del tamaño de la instancia.",
      "Gane créditos cuando la CPU sea inferior al valor inicial.",
      "Gaste créditos cuando CPU > línea base.",
      "Modo ilimitado: puede superar los créditos (cargos adicionales)",
      "Tipos de instancia T3:.",
      "T3.nano: 5 % del valor inicial.",
      "T3.micro: 10% del valor inicial.",
      "T3.pequeño: 20 % del valor inicial.",
      "T3.medio: 20% del valor inicial.",
      "T3.grande: 30 % del valor inicial.",
      "Casos de uso:.",
      "Servidores web, desarrollo/pruebas.",
      "Pequeñas bases de datos.",
      "Repositorios de código.",
      "Microservicios.",
      "Cuándo NO usar T3:.",
      "Alto uso sostenido de CPU.",
      "Necesidades predecibles de alto rendimiento.",
      "Utilice C5/M5 para un rendimiento sostenido."
    ],
    "others": []
  },
  {
    "id": "03-16",
    "module": "Compute",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere implementar aplicaciones en contenedores utilizando Kubernetes sin gestionar el plano de control. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon ECS",
      "B": "Amazon EKS",
      "C": "AWS Fargate",
      "D": "AWS Elastic Beanstalk"
    },
    "explanation": "• Amazon EKS (Elastic Kubernetes Service) es Kubernetes administrado\n• AWS gestiona el plano de control de Kubernetes\n• Compatible con herramientas estándar de Kubernetes (kubectl, Helm)\n• Plano de control Multi-AZ para alta disponibilidad\nCaracterísticas de EKS:\n• Plano de control K8s administrado (etcd, servidor API)\n• Actualizaciones y parches automáticos\n• Integración con servicios de AWS (IAM, VPC, ALB, CloudWatch)\n• Certificación CNCF (Kubernetes estándar)\nOpciones de nodos trabajadores de EKS:\n• Nodos autoadministrados: usted administra instancias EC2\n• Grupos de nodos administrados: AWS administra el ciclo de vida de EC2\n• Fargate: sin servidor, sin gestión de nodos\nECS frente a EKS:\n• ECS: propiedad de AWS, integración más simple y estrecha con AWS\n• EKS: Kubernetes estándar, portátil, más complejo, experiencia en K8 existente\nCuándo utilizar EKS:\n• Cargas de trabajo de Kubernetes existentes\n• Experiencia en Kubernetes en equipo\n• Requisitos de múltiples nubes/híbrido\n• Se necesitan herramientas estándar de Kubernetes",
    "why": [
      "AWS gestiona el plano de control de Kubernetes.",
      "Compatible con herramientas estándar de Kubernetes (kubectl, Helm)",
      "Plano de control Multi-AZ para alta disponibilidad.",
      "Características de EKS:.",
      "Plano de control K8s administrado (etcd, servidor API)",
      "Actualizaciones y parches automáticos.",
      "Integre con los servicios de AWS (IAM, VPC, ALB, CloudWatch)",
      "Certificado CNCF (Kubernetes estándar)",
      "Opciones de nodos trabajadores de EKS:.",
      "Nodos autoadministrados: usted administra instancias EC2.",
      "Grupos de nodos administrados: AWS administra el ciclo de vida de EC2.",
      "Fargate: Sin servidor, sin gestión de nodos.",
      "ECS frente a EKS:.",
      "ECS: integración de AWS estrecha, más simple y patentada por AWS.",
      "EKS: Kubernetes estándar, portátil, más complejo, experiencia en K8 existente.",
      "Cuándo utilizar EKS:.",
      "Cargas de trabajo de Kubernetes existentes.",
      "Experiencia en Kubernetes en equipo.",
      "Requisitos de múltiples nubes/híbridos.",
      "Se necesitan herramientas estándar de Kubernetes."
    ],
    "others": []
  },
  {
    "id": "03-17",
    "module": "Compute",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un grupo de Auto Scaling debe asegurarse de que las instancias recién lanzadas estén listas para atender el tráfico antes de recibir solicitudes. ¿Qué se debe configurar?",
    "options": {
      "A": "Comprobaciones de estado de EC2",
      "B": "Comprobaciones de estado del ELB",
      "C": "Período de gracia de verificación de estado de Auto Scaling",
      "D": "Amazon CloudWatch Alarms"
    },
    "explanation": "• El período de gracia de comprobación de estado da tiempo a las instancias para iniciarse y pasar las comprobaciones.\n• Previene la terminación prematura durante la inicialización\n• Predeterminado: 300 segundos (5 minutos)\n• Debe ser más largo que el tiempo de inicio de la aplicación.\nComprobaciones de estado de Auto Scaling:\n• Comprobación de estado de EC2: instancia en ejecución (predeterminado)\n• Comprobación de estado de ELB: la instancia pasa las comprobaciones de estado del balanceador de carga.\n• El período de gracia se aplica a ambos tipos.\nConfiguración recomendada:\n1. Establecer período de gracia> hora de inicio de la aplicación\n2. Habilite los controles de estado de ELB\n3. Configure la verificación de estado del ELB con el intervalo/umbral adecuado",
    "why": [
      "El período de gracia de comprobación de estado da tiempo a las instancias para iniciar y aprobar las comprobaciones.",
      "Evita la terminación prematura durante la inicialización.",
      "Predeterminado: 300 segundos (5 minutos)",
      "Debe ser más largo que el tiempo de inicio de la aplicación.",
      "Comprobaciones de estado de Auto Scaling:.",
      "Comprobación de estado de EC2: instancia en ejecución (predeterminado)",
      "Comprobación de estado de ELB: la instancia pasa las comprobaciones de estado del equilibrador de carga.",
      "El período de gracia se aplica a ambos tipos.",
      "Configuración recomendada:.",
      "1.",
      "Establezca el período de gracia> hora de inicio de la aplicación.",
      "2.",
      "Habilite las comprobaciones de estado de ELB.",
      "3.",
      "Configure la verificación de estado del ELB con el intervalo/umbral adecuado."
    ],
    "others": []
  },
  {
    "id": "03-18",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere migrar aplicaciones de Windows de elevación y cambio a AWS sin refactorizarlas. ¿Qué opción de cálculo es la MÁS apropiada?",
    "options": {
      "A": "AWS Lambda",
      "B": "Amazon ECS",
      "C": "Amazon EC2",
      "D": "AWS Fargate"
    },
    "explanation": "• Amazon EC2 para migraciones de elevación y cambio\n• Ejecute Windows Server, instale las aplicaciones tal cual\n• Se requiere una refactorización mínima\n• Control total sobre el sistema operativo y la configuración\nEstrategias de migración (6 R):\n1. Rehost (Lift-and-Shift): Mover tal cual a EC2\n2. Replatform (Lift-Tinker-Shift): optimizaciones menores\n3. Recompra: pasar a SaaS\n4. Refactor/Re-arquitectura: Rediseño para nativo de la nube\n5. Retiro: Desmantelamiento\n6. Retener: mantener en las instalaciones\nEnfoque de elevación y cambio:\n• Migración rápida\n• Riesgo mínimo\n• Puede optimizarse más tarde\n• Utilice el servicio de migración de aplicaciones de AWS (MGN)\nOtras opciones no adecuadas:\n• Lambda: requiere cambios de código, controlado por eventos\n• ECS/Fargate: Requiere contenedorización\n• EC2 es mejor para aplicaciones de Windows \"tal cual\"",
    "why": [
      "Ejecute Windows Server, instale las aplicaciones tal cual.",
      "Se requiere una refactorización mínima.",
      "Control total sobre el sistema operativo y la configuración.",
      "Estrategias Migratorias (6 R):.",
      "1.",
      "Rehost (Lift-and-Shift): Mover tal cual a EC2.",
      "2.",
      "Replatform (Lift-Tinker-Shift): optimizaciones menores.",
      "3.",
      "Recompra: pasar a SaaS.",
      "4.",
      "Refactor/Re-arquitectura: Rediseño para nativo de la nube.",
      "5.",
      "Retiro: Desmantelamiento.",
      "6.",
      "Retener: Mantener en las instalaciones.",
      "Enfoque de elevación y cambio:.",
      "Migración rápida.",
      "Riesgo mínimo.",
      "Puede optimizarse más tarde.",
      "Utilice el servicio de migración de aplicaciones de AWS (MGN)",
      "Otras opciones no adecuadas:.",
      "Lambda: requiere cambios de código, controlado por eventos.",
      "ECS/Fargate: Requiere contenedorización.",
      "EC2 es mejor para aplicaciones de Windows \"tal cual\"."
    ],
    "others": []
  },
  {
    "id": "03-19",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Los eventos de S3 invocan una aplicación que se ejecuta en Lambda. Durante las horas punta, se cargan miles de archivos simultáneamente. ¿Cómo debería Lambda manejar esto?",
    "options": {
      "A": "Aumentar la memoria Lambda",
      "B": "Habilitar la simultaneidad reservada de Lambda",
      "C": "Lambda escala automáticamente al mismo tiempo",
      "D": "Usar funciones escalonadas"
    },
    "explanation": "• Lambda se escala automáticamente para manejar invocaciones simultáneas\n• Cada evento de S3 desencadena una invocación Lambda independiente\n• Simultaneidad de cuenta predeterminada: 1000 (puede solicitar un aumento)\n• No se necesita configuración para el escalado básico\nTipos de concurrencia Lambda:\n• Simultaneidad de cuentas: total de ejecuciones simultáneas en todas las funciones (1000 por defecto)\n• Simultaneidad reservada: simultaneidad dedicada para una función específica.\n• Simultaneidad aprovisionada: instancias preinicializadas (reduce los inicios en frío)\nCuándo utilizar la simultaneidad reservada:\n• Limitar la simultaneidad de funciones (evitar sobrecargas posteriores)\n• Garantizar la concurrencia para funciones críticas\n• Evitar que una función consuma toda la simultaneidad de la cuenta",
    "why": [
      "Cada evento de S3 desencadena una invocación Lambda independiente.",
      "Simultaneidad de cuenta predeterminada: 1000 (puede solicitar un aumento)",
      "No se necesita configuración para el escalado básico.",
      "Tipos de concurrencia Lambda:.",
      "Simultaneidad de cuentas: total de ejecuciones simultáneas en todas las funciones (1000 por defecto)",
      "Simultaneidad reservada: simultaneidad dedicada para una función específica.",
      "Simultaneidad aprovisionada: instancias preinicializadas (reduce los inicios en frío)",
      "Cuándo utilizar la simultaneidad reservada:",
      "Limitar la simultaneidad de funciones (evitar la sobrecarga en sentido descendente)",
      "Garantizar la concurrencia para funciones críticas.",
      "Evite que una función consuma toda la simultaneidad de la cuenta."
    ],
    "others": []
  },
  {
    "id": "03-20",
    "module": "Compute",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación web necesita mantener el estado de la sesión. La aplicación se ejecuta en varias instancias EC2 detrás de un balanceador de carga de aplicaciones. ¿Cómo se debe gestionar el estado de la sesión?",
    "options": {
      "A": "Almacenar datos de sesión en el almacenamiento local de la instancia EC2",
      "B": "Habilitar sesiones fijas en ALB",
      "C": "Almacenar datos de sesión en Amazon ElastiCache o DynamoDB",
      "D": "Utilice NLB en lugar de ALB"
    },
    "explanation": "• El almacenamiento de sesiones externo (ElastiCache/DynamoDB) es la mejor práctica.\n• Sesiones accesibles desde cualquier instancia\n• Sobrevive a errores de instancia\n• Verdadera arquitectura sin estado\nOpciones de gestión de sesiones:\n| Opción | Ventajas | Contras |\n|--------|------|------|\n| ElastiCache/DynamoDB | Sin estado, escalable y resistente | Servicio adicional |\n| Sesiones pegajosas | Sencillo | Carga desigual, no resistente |\n| Almacenamiento local | Rápido | Perdido por falla de la instancia |\nPor qué ElastiCache/DynamoDB es mejor:\n• ✅ Cualquier instancia puede atender cualquier solicitud\n• ✅ Auto Scaling funciona correctamente\n• ✅ El fallo de la instancia no hace perder sesiones\n• ✅ Mejor distribución de la carga\nProblemas con las sesiones fijas:\n• Utilización desigual de la instancia\n• Las instancias nuevas no reciben tráfico inicialmente\n• Fallo de instancia = sesiones perdidas\n• Úselo sólo si no es posible refactorizar",
    "why": [
      "El almacenamiento de sesiones externo (ElastiCache/DynamoDB) es la mejor práctica.",
      "Sesiones accesibles desde cualquier instancia.",
      "Sobrevive a errores de instancia.",
      "Verdadera arquitectura sin estado.",
      "Opciones de gestión de sesiones:.",
      "| Opción | Ventajas | Contras |.",
      "|--------|------|------|.",
      "| ElastiCache/DynamoDB | Sin estado, escalable y resistente | Servicio adicional |.",
      "| Sesiones pegajosas | Sencillo | Carga desigual, no resistente |.",
      "| Almacenamiento local | Rápido | Perdido por falla de la instancia |.",
      "Por qué ElastiCache/DynamoDB es mejor:",
      "✅Cualquier instancia puede atender cualquier solicitud.",
      "✅ Auto Scaling funciona correctamente.",
      "✅ El fallo de la instancia no hace perder sesiones.",
      "✅ Mejor distribución de la carga.",
      "Problemas con las sesiones fijas:.",
      "Utilización desigual de instancias.",
      "Las instancias nuevas no reciben tráfico inicialmente.",
      "Fallo de instancia = sesiones perdidas.",
      "Úselo solo si no es posible refactorizar."
    ],
    "others": []
  },
  {
    "id": "03-21",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa necesita ejecutar servicios de AWS en su propio centro de datos para cumplir con estrictos requisitos de residencia de datos y, al mismo tiempo, mantener una experiencia de nube híbrida consistente. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "AWS Outposts",
      "B": "Hosts dedicados de Amazon EC2",
      "C": "AWS Snowball Edge",
      "D": "AWS Direct Connect"
    },
    "explanation": "• AWS Outposts ofrece servicios, infraestructura y modelos operativos nativos de AWS a los centros de datos locales\n• Proporciona una experiencia híbrida consistente\n• Admite EC2, EBS, RDS, ECS, EKS, S3 y más\n• Los hosts dedicados sirven para el cumplimiento, no para la nube híbrida\n• Snowball Edge es para informática de vanguardia y transferencia de datos, no para servicios completos de AWS.\n• Direct Connect es para conectividad de red, no para ejecutar servicios de AWS en las instalaciones.",
    "why": [
      "Proporciona una experiencia híbrida consistente.",
      "Admite EC2, EBS, RDS, ECS, EKS, S3 y más.",
      "Los hosts dedicados sirven para el cumplimiento, no para la nube híbrida.",
      "Snowball Edge es para informática de vanguardia y transferencia de datos, no para servicios completos de AWS.",
      "Direct Connect es para conectividad de red, no para ejecutar servicios de AWS en las instalaciones."
    ],
    "others": []
  },
  {
    "id": "03-22",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una organización de investigación necesita ejecutar trabajos por lotes de alto rendimiento y gran escala en AWS con programación automática de trabajos y aprovisionamiento de recursos. ¿Qué servicio deberían utilizar?",
    "options": {
      "A": "AWS Batch",
      "B": "Escalado automático de Amazon EC2",
      "C": "AWS Lambda",
      "D": "EMR de Amazon"
    },
    "explanation": "• AWS Batch es un servicio informático por lotes totalmente administrado\n• Aprovisiona automáticamente recursos informáticos y programa trabajos\n• Admite contenedores Docker y EC2/Spot/Fargate\n• EC2 Auto Scaling es para escalar instancias, no para programar trabajos\n• Lambda es para computación de corta duración basada en eventos\n• EMR es para procesamiento de big data, no para trabajos por lotes generales",
    "why": [
      "Aprovisiona automáticamente recursos informáticos y programa trabajos.",
      "Admite contenedores Docker y EC2/Spot/Fargate.",
      "EC2 Auto Scaling es para escalar instancias, no para programar trabajos.",
      "Lambda es para computación de corta duración basada en eventos.",
      "EMR es para procesamiento de big data, no para trabajos por lotes generales."
    ],
    "others": []
  },
  {
    "id": "03-23",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un equipo de desarrollo quiere compartir e implementar aplicaciones sin servidor publicadas por AWS y terceros. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "Repositorio de aplicaciones sin servidor de AWS",
      "B": "Mercado de AWS",
      "C": "Capas AWS Lambda",
      "D": "Conjuntos de pilas de AWS CloudFormation"
    },
    "explanation": "• AWS Serverless Application Repository es un repositorio administrado para aplicaciones sin servidor\n• Permite compartir e implementar aplicaciones basadas en Lambda\n• Marketplace es para software comercial, no para aplicaciones sin servidor\n• Las capas Lambda son para compartir código, no para aplicaciones completas.\n• CloudFormation StackSets es para implementaciones de múltiples cuentas",
    "why": [
      "Permite compartir e implementar aplicaciones basadas en Lambda.",
      "Marketplace es para software comercial, no para aplicaciones sin servidor.",
      "Las capas Lambda son para compartir código, no para aplicaciones completas.",
      "CloudFormation StackSets es para implementaciones de múltiples cuentas."
    ],
    "others": []
  },
  {
    "id": "03-24",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa quiere ejecutar cargas de trabajo de VMware en AWS con una integración y administración perfectas mediante herramientas familiares de VMware. ¿Qué solución deberían utilizar?",
    "options": {
      "A": "Nube de VMware en AWS",
      "B": "AWS Outposts",
      "C": "Hosts dedicados de Amazon EC2",
      "D": "AWS Snowball Edge"
    },
    "explanation": "• VMware Cloud on AWS integra VMware vSphere, NSX y vSAN con la infraestructura de AWS\n• Permite una migración fluida y operaciones híbridas\n• Administrado por AWS y VMware\n• Outposts es para ejecutar servicios de AWS en las instalaciones\n• Los hosts dedicados son para cumplimiento\n• Snowball Edge es para informática de vanguardia",
    "why": [
      "Permite una migración fluida y operaciones híbridas.",
      "Gestionado tanto por AWS como por VMware.",
      "Outposts sirve para ejecutar servicios de AWS en las instalaciones.",
      "Los hosts dedicados sirven para el cumplimiento.",
      "Snowball Edge es para informática de vanguardia."
    ],
    "others": []
  },
  {
    "id": "03-25",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa global necesita implementar servicios informáticos y de almacenamiento de AWS en el borde de las redes móviles para ofrecer aplicaciones de latencia ultrabaja. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "AWS Wavelength",
      "B": "AWS Outposts",
      "C": "Amazon CloudFront",
      "D": "AWS Direct Connect"
    },
    "explanation": "• AWS Wavelength lleva los servicios de AWS al borde de las redes 5G\n• Permite aplicaciones de latencia ultrabaja para dispositivos móviles y perimetrales\n• Outposts es para centros de datos locales\n• CloudFront es una CDN, no una computación de borde\n• Direct Connect es para conectividad de red",
    "why": [
      "Habilita aplicaciones de latencia ultrabaja para dispositivos móviles y perimetrales.",
      "Outposts es para centros de datos locales.",
      "CloudFront es una CDN, no una computación de borde.",
      "Direct Connect es para conectividad de red."
    ],
    "others": []
  },
  {
    "id": "03-26",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa quiere ejecutar cargas de trabajo de Amazon ECS y EKS en su propia infraestructura fuera de AWS, administrada desde la consola de AWS. ¿Qué servicios deberían utilizar?",
    "options": {
      "A": "Amazon ECS en cualquier lugar y Amazon EKS en cualquier lugar",
      "B": "AWS Outposts",
      "C": "AWS Fargate",
      "D": "Hosts dedicados de Amazon EC2"
    },
    "explanation": "• ECS Anywhere y EKS Anywhere extienden la orquestación de contenedores a la infraestructura local\n• Administrado desde la consola de AWS\n• Outposts es para ejecutar la infraestructura de AWS en las instalaciones.\n• Fargate es para contenedores sin servidor en AWS\n• Los hosts dedicados son para cumplimiento",
    "why": [
      "ECS Anywhere y EKS Anywhere extienden la orquestación de contenedores a la infraestructura local.",
      "Administrado desde la consola de AWS.",
      "Outposts sirve para ejecutar la infraestructura de AWS en las instalaciones.",
      "Fargate es para contenedores sin servidor en AWS.",
      "Los hosts dedicados sirven para el cumplimiento."
    ],
    "others": []
  },
  {
    "id": "03-27",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un equipo necesita una base de datos administrada y escalable compatible con Apache Cassandra para su aplicación. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "Amazon Keyspaces",
      "B": "AmazonDynamoDB",
      "C": "Amazon RDS para PostgreSQL",
      "D": "Amazon Aurora"
    },
    "explanation": "• Amazon Keyspaces es una base de datos administrada compatible con Cassandra\n• Admite el lenguaje de consulta Cassandra (CQL)\n• DynamoDB es NoSQL pero no es compatible con Cassandra\n• RDS y Aurora son bases de datos relacionales",
    "why": [
      "Compatible con el lenguaje de consulta Cassandra (CQL)",
      "DynamoDB es NoSQL pero no es compatible con Cassandra.",
      "RDS y Aurora son bases de datos relacionales."
    ],
    "others": []
  },
  {
    "id": "03-28",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una institución financiera necesita una base de datos contable totalmente administrada, inmutable y criptográficamente verificable. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "AmazonQLDB",
      "B": "Amazon Aurora",
      "C": "Amazon RDS",
      "D": "AmazonDynamoDB"
    },
    "explanation": "• Amazon QLDB (Quantum Ledger Database) es una base de datos de libro mayor totalmente administrada\n• Proporciona un registro de transacciones inmutable y criptográficamente verificable\n• Aurora, RDS y DynamoDB no son bases de datos de contabilidad",
    "why": [
      "Proporciona un registro de transacciones inmutable y criptográficamente verificable.",
      "Aurora, RDS y DynamoDB no son bases de datos de libro mayor."
    ],
    "others": []
  },
  {
    "id": "04-1",
    "module": "Storage",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa necesita almacenar datos a los que se accede con frecuencia con la latencia más baja y el mayor rendimiento. El costo no es la principal preocupación. ¿Qué clase de almacenamiento S3 se debe utilizar?",
    "options": {
      "A": "Estándar S3",
      "B": "S3 Intelligent-Tiering",
      "C": "S3 Estándar-IA",
      "D": "S3 Una Zona-IA"
    },
    "explanation": "• El estándar S3 proporciona:\n• Latencia de milisegundos\n• Alto rendimiento\n• 99,99% de disponibilidad\n• Durabilidad del 11 9\n• Diseñado para datos a los que se accede con frecuencia\nComparación de clases de almacenamiento S3:\n• Estándar: acceso frecuente, coste más alto\n• Niveles inteligentes: patrones desconocidos/cambiantes, niveles automáticos\n• Estándar-IA: acceso poco frecuente, menor costo, tarifas de recuperación\n• Una zona-IA: poco frecuente, única AZ, menor costo de IA\n• Glaciar: archivo, recuperación de minutos a horas\n• Glacier Deep Archive: archivo a largo plazo, más de 12 horas de recuperación",
    "why": [
      "Latencia de milisegundos.",
      "Alto rendimiento.",
      "99,99% de disponibilidad.",
      "Durabilidad del 11 9.",
      "Diseñado para datos a los que se accede con frecuencia.",
      "Comparación de clases de almacenamiento S3:.",
      "Estándar: Acceso frecuente, coste más alto.",
      "Niveles inteligentes: patrones desconocidos/cambiantes, niveles automáticos.",
      "Estándar-IA: acceso poco frecuente, menor costo, tarifas de recuperación.",
      "Una Zona-IA: Poco frecuente, única AZ, menor costo de IA.",
      "Glaciar: Archivo, recuperación de minutos a horas.",
      "Glacier Deep Archive: archivo a largo plazo, más de 12 horas de recuperación."
    ],
    "others": []
  },
  {
    "id": "04-2",
    "module": "Storage",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Una empresa almacena datos a los que se accede con poca frecuencia en S3 Standard-IA. Necesitan acceder a estos datos inmediatamente cuando sea necesario. ¿Cuál es el tiempo de recuperación?",
    "options": {
      "A": "12 horas",
      "B": "3-5 horas",
      "C": "1-5 minutos",
      "D": "Milisegundos (inmediato)"
    },
    "explanation": "• S3 Standard-IA proporciona acceso inmediato (milisegundos)\n• \"IA\" significa acceso poco frecuente, no acceso lento\n• Menor costo de almacenamiento que el Estándar\n• Se aplican tarifas de recuperación por GB\n• Duración mínima de almacenamiento: 30 días\n• Tamaño mínimo del objeto: 128 KB\nTiempos de recuperación de S3:\n• Estándar/Estándar-IA/Una Zona-IA: Milisegundos\n• Niveles inteligentes: milisegundos\n• S3 Glacier Instant Retrieval: milisegundos\n• Recuperación flexible de glaciares: \n• Acelerado: 1-5 minutos\n• Estándar: 3-5 horas\n• A granel: 5-12 horas\n• Archivo de las profundidades del glaciar:\n• Estándar: 12 horas\n• Granel: 48 horas",
    "why": [
      "S3 Standard-IA proporciona acceso inmediato (milisegundos)",
      "\"IA\" significa acceso poco frecuente, no acceso lento.",
      "Menor costo de almacenamiento que el estándar.",
      "Se aplican tarifas de recuperación por GB.",
      "Duración mínima de almacenamiento: 30 días.",
      "Tamaño mínimo del objeto: 128 KB.",
      "Tiempos de recuperación de S3:.",
      "Estándar/Estándar-IA/Una Zona-IA: Milisegundos.",
      "Niveles inteligentes: milisegundos.",
      "S3 Glacier Instant Retrieval: milisegundos.",
      "Recuperación flexible del glaciar:.",
      "Acelerado: 1-5 minutos.",
      "Estándar: 3-5 horas.",
      "Granel: 5-12 horas.",
      "Archivo profundo del glaciar:.",
      "Estándar: 12 horas.",
      "Granel: 48 horas."
    ],
    "others": []
  },
  {
    "id": "04-3",
    "module": "Storage",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa necesita almacenar datos de cumplimiento que deben conservarse durante 7 años y a los que se debe acceder una o dos veces al año. La optimización de costos es crítica. ¿Qué solución de almacenamiento es más costo-efectivo?",
    "options": {
      "A": "Estándar S3",
      "B": "S3 Glacier Flexible Retrieval",
      "C": "S3 Glacier Deep Archive",
      "D": "S3 Intelligent-Tiering"
    },
    "explanation": "• S3 Glacier Deep Archive es la clase de almacenamiento S3 más barata\n• Diseñado para retención a largo plazo (7-10+ años)\n• Tiempo de recuperación: 12 a 48 horas (aceptable para accesos poco frecuentes)\n• Costo más bajo por GB\n• Perfecto para cumplimiento y archivos normativos\nComparación de costos (aproximados):\n• Archivo profundo: $0,00099/GB/mes (el más barato)\n• Glaciar Flexible: $0,0036/GB/mes\n• Estándar-IA: $0,0125/GB/mes\n• Estándar: $0,023/GB/mes\nCuándo utilizar:\n• Archivo profundo: rara vez se accede, más de 7 años de retención\n• Glacier Flexible: archivos a los que se accede ocasionalmente\n• Estándar-IA: acceso mensual\n• Estándar: acceso frecuente",
    "why": [
      "Diseñado para retención a largo plazo (7-10+ años)",
      "Tiempo de recuperación: 12-48 horas (aceptable para acceso poco frecuente)",
      "Costo más bajo por GB.",
      "Perfecto para cumplimiento y archivos normativos.",
      "Comparación de costos (aproximados):.",
      "Archivo profundo: $0,00099/GB/mes (el más barato)",
      "Glaciar Flexible: $0.0036/GB/mes.",
      "Estándar-IA: $0,0125/GB/mes.",
      "Estándar: $0,023/GB/mes.",
      "Cuándo utilizar:.",
      "Archivo profundo: rara vez se accede, más de 7 años de retención.",
      "Glacier Flexible: archivos a los que se accede ocasionalmente.",
      "Estándar-IA: Acceso mensual.",
      "Estándar: Acceso frecuente."
    ],
    "others": []
  },
  {
    "id": "04-4",
    "module": "Storage",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación web ofrece contenido estático (imágenes, CSS, JS) a usuarios globales. El contenido se almacena en S3. ¿Cuál es la MEJOR manera de mejorar el rendimiento y reducir la latencia?",
    "options": {
      "A": "Habilitar la aceleración de transferencia S3",
      "B": "Utilice CloudFront con S3 como origen",
      "C": "Habilite la replicación entre regiones de S3",
      "D": "Utilice la clase de almacenamiento estándar S3"
    },
    "explanation": "• CloudFront es la CDN (red de entrega de contenidos) de AWS\n• Almacena en caché el contenido en más de 400 ubicaciones perimetrales en todo el mundo\n• Reduce la latencia para usuarios de todo el mundo\n• Reduce la carga en el cucharón S3 de origen\nBeneficios de CloudFront:\n• Baja latencia (contenido servido desde el borde más cercano)\n• Altas velocidades de transferencia\n• Protección DDoS (AWS Shield)\n• Compatibilidad con SSL/TLS\n• Costos reducidos de transferencia de datos S3\nOtras opciones:\n• Aceleración de transferencia: acelera las cargas a S3, no las descargas\n• Replicación entre regiones: redundancia multirregional, no CDN\n• Clase de almacenamiento: no afecta el rendimiento de la entrega",
    "why": [
      "CloudFront es la CDN (red de entrega de contenidos) de AWS",
      "Almacena en caché el contenido en más de 400 ubicaciones perimetrales en todo el mundo.",
      "Reduce la latencia para usuarios de todo el mundo.",
      "Reduce la carga en el cucharón S3 de origen.",
      "Beneficios de CloudFront:.",
      "Baja latencia (contenido servido desde el borde más cercano)",
      "Altas velocidades de transferencia.",
      "Protección DDoS (AWS Shield)",
      "Soporte SSL/TLS.",
      "Costos reducidos de transferencia de datos S3.",
      "Otras opciones:.",
      "Aceleración de transferencia: acelera las cargas a S3, no las descargas.",
      "Replicación entre regiones: redundancia multirregional, no CDN.",
      "Clase de almacenamiento: no afecta el rendimiento de la entrega."
    ],
    "others": []
  },
  {
    "id": "04-5",
    "module": "Storage",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa necesita almacenamiento en bloque para una instancia EC2 que ejecuta una base de datos que requiere IOPS altos y constantes. ¿Qué opción de almacenamiento se debe utilizar?",
    "options": {
      "A": "EC2 Instance Store",
      "B": "SSD de uso general EBS (gp3)",
      "C": "SSD IOPS aprovisionado por EBS (io2)",
      "D": "AmazonEFS"
    },
    "explanation": "• SSD IOPS proporcionada por EBS (io2/io2 Block Express) para bases de datos de alto rendimiento\n• Rendimiento IOPS consistente\n• Hasta 64.000 IOPS por volumen (io2)\n• Hasta 256.000 IOPS (io2 Block Express)\n• 99,999 % de durabilidad\nTipos de volumen de EBS:\n| Tipo | Caso de uso | IOPS | Rendimiento |\n|------|----------|------|------------|\n| gp3 | Propósito general | 16.000 | 1.000 MB/s |\n| io2 | Bases de datos de alto rendimiento | 64.000 | 1.000 MB/s |\n| io2 bloque expreso | Bases de datos más grandes | 256.000 | 4.000 MB/s |\n| st1 | Big data, almacenes de datos | 500 | 500 MB/s |\n| sc1 | Almacenamiento en frío | 250 | 250 MB/s |\nCuándo utilizar:\n• io2: bases de datos que necesitan IOPS altas y consistentes\n• gp3: la mayoría de las cargas de trabajo, costo-efectivo\n• st1: secuencial de alto rendimiento\n• EC2 Instance Store: temporal, de mayor rendimiento",
    "why": [
      "Rendimiento IOPS consistente.",
      "Hasta 64.000 IOPS por volumen (io2)",
      "Hasta 256.000 IOPS (io2 Block Express)",
      "99,999% de durabilidad.",
      "Tipos de volumen de EBS:.",
      "| Tipo | Caso de uso | IOPS | Rendimiento |.",
      "|------|----------|------|------------|.",
      "| gp3 | Propósito general | 16.000 | 1.000 MB/s |.",
      "| io2 | Bases de datos de alto rendimiento | 64.000 | 1.000 MB/s |.",
      "| io2 bloque expreso | Bases de datos más grandes | 256.000 | 4.000 MB/s |.",
      "| st1 | Big data, almacenes de datos | 500 | 500 MB/s |.",
      "| sc1 | Almacenamiento en frío | 250 | 250 MB/s |.",
      "Cuándo utilizar:.",
      "Io2: bases de datos que necesitan IOPS altos y consistentes.",
      "Gp3: La mayoría de las cargas de trabajo, costo-efectivo.",
      "St1: secuencial de alto rendimiento.",
      "EC2 Instance Store: temporal, de mayor rendimiento."
    ],
    "others": []
  },
  {
    "id": "04-6",
    "module": "Storage",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación requiere almacenamiento de archivos compartido accesible desde múltiples instancias EC2 en múltiples zonas de disponibilidad mediante el protocolo NFS. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon EBS",
      "B": "Amazon S3",
      "C": "AmazonEFS",
      "D": "EC2 Instance Store"
    },
    "explanation": "• Amazon EFS (Sistema de archivos elásticos) proporciona:\n• Sistema de archivos NFS compartido\n• Acceso multi-AZ\n• Escalado automático\n• Compatible con Linux (NFS v4)\n• Acceso simultáneo desde miles de instancias\nComparación de servicios de almacenamiento:\n| Servicio | Protocolo | Instancia múltiple | Multi-AZ | Caso de uso |\n|---------|----------|----------------|----------|----------|\n| EBS | Bloquear | No (instancia única) | No | Bases de datos, volúmenes de arranque |\n| EFS | NFS | Sí | Sí | Almacenamiento de archivos compartido |\n| FSx para Windows | Pymes | Sí | Sí | Recursos compartidos de archivos de Windows |\n| S3 | HTTP/S | Sí | Sí | Almacenamiento de objetos |\nModos de rendimiento de EFS:\n• Propósito general: baja latencia, la mayoría de las cargas de trabajo\n• E/S máxima: mayor latencia, acceso paralelo masivo\nModos de rendimiento de EFS:\n• Ráfaga: el rendimiento aumenta con el tamaño\n• Aprovisionado: establece el rendimiento independientemente del tamaño.",
    "why": [
      "Sistema de archivos NFS compartido.",
      "Acceso multi-AZ.",
      "Escalado automático.",
      "Compatible con Linux (NFS v4)",
      "Acceso simultáneo desde miles de instancias.",
      "Comparación de servicios de almacenamiento:.",
      "| Servicio | Protocolo | Instancia múltiple | Multi-AZ | Caso de uso |.",
      "|---------|----------|----------------|----------|----------|.",
      "| EBS | Bloquear | No (instancia única) | No | Bases de datos, volúmenes de arranque |.",
      "| EFS | NFS | Sí | Sí | Almacenamiento de archivos compartidos |.",
      "| FSx para Windows | Pymes | Sí | Sí | Recursos compartidos de archivos de Windows |.",
      "| S3 | HTTP/S | Sí | Sí | Almacenamiento de objetos |.",
      "Modos de rendimiento de EFS:.",
      "Propósito general: baja latencia, la mayoría de las cargas de trabajo.",
      "E/S máxima: mayor latencia, acceso paralelo masivo.",
      "Modos de rendimiento de EFS:.",
      "Ráfaga: el rendimiento aumenta con el tamaño.",
      "Aprovisionado: establece el rendimiento independientemente del tamaño."
    ],
    "others": []
  },
  {
    "id": "04-7",
    "module": "Storage",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere mover automáticamente objetos S3 a clases de almacenamiento más económicas según patrones de acceso. No quieren gestionar esto manualmente. ¿Qué deberían usar?",
    "options": {
      "A": "Políticas de ciclo de vida de S3",
      "B": "S3 Intelligent-Tiering",
      "C": "guiones manuales",
      "D": "Funciones de AWS Lambda"
    },
    "explanation": "• S3 Intelligent-Tiering mueve automáticamente objetos entre niveles\n• Supervisa los patrones de acceso\n• Sin tarifas de recuperación (a diferencia de las clases IA)\n• Pequeña tarifa de seguimiento mensual por objeto\nNiveles de acceso por niveles inteligentes:\n1. Acceso frecuente: predeterminado, se accede con frecuencia\n2. Acceso poco frecuente: 30 días sin acceso\n3. Acceso instantáneo al archivo: 90 días sin acceso\n4. Acceso al archivo (opcional): 90-270 días sin acceso\n5. Acceso profundo al archivo (opcional): 180-730 días sin acceso\nNiveles inteligentes frente a ciclo de vida:\n• Niveles inteligentes: automático según el acceso, sin tarifas de recuperación\n• Ciclo de vida: transiciones basadas en reglas, cronograma establecido\nCuándo utilizar:\n• Niveles inteligentes: patrones de acceso desconocidos o cambiantes\n• Ciclo de vida: patrones conocidos (p. ej., traslado al glaciar después de 90 días)",
    "why": [
      "Supervisa los patrones de acceso.",
      "Sin tarifas de recuperación (a diferencia de las clases IA)",
      "Pequeña tarifa de seguimiento mensual por objeto.",
      "Niveles de acceso por niveles inteligentes:.",
      "1.",
      "Acceso frecuente: predeterminado, se accede con frecuencia.",
      "2.",
      "Acceso poco frecuente: 30 días sin acceso.",
      "3.",
      "Acceso instantáneo al archivo: 90 días sin acceso.",
      "4.",
      "Acceso al archivo (opcional): 90-270 días sin acceso.",
      "5.",
      "Acceso profundo al archivo (opcional): 180-730 días sin acceso.",
      "Niveles inteligentes frente a ciclo de vida:.",
      "Niveles inteligentes: automático según el acceso, sin tarifas de recuperación.",
      "Ciclo de vida: transiciones basadas en reglas, cronograma establecido.",
      "Cuándo utilizar:.",
      "Niveles inteligentes: patrones de acceso desconocidos o cambiantes.",
      "Ciclo de vida: patrones conocidos (p. ej., traslado al glaciar después de 90 días)"
    ],
    "others": []
  },
  {
    "id": "04-8",
    "module": "Storage",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa debe asegurarse de que los objetos S3 estén cifrados en reposo. Quieren que AWS administre las claves de cifrado. ¿Qué método de cifrado se debe utilizar?",
    "options": {
      "A": "SSE-C (Claves proporcionadas por el cliente)",
      "B": "SSE-S3 (claves administradas por S3)",
      "C": "SSE-KMS (claves administradas por KMS)",
      "D": "Cifrado del lado del cliente"
    },
    "explanation": "• SSE-S3 utiliza claves de cifrado administradas por S3\n• AWS se encarga de toda la gestión de claves\n• Cifrado AES-256\n• Sin costo adicional\n• Opción de cifrado más simple\nOpciones de cifrado S3:\n| Método | Gestión de claves | Costo | Caso de uso |\n|--------|----------------|------|----------|\n| SSE-S3 | AWS gestiona | Gratis | Cifrado sencillo |\n| SSE-KMS | AWS KMS | Costos de la API de KMS | Seguimiento de auditoría, rotación de claves |\n| ESS-C | El cliente proporciona | Gratis | Claves de controles del cliente |\n| Lado del cliente | Cliente | Gratis | Cifrar antes de cargar |\nBeneficios de SSE-KMS (cuando sea necesario):\n• Seguimiento de auditoría (CloudTrail)\n• Rotación de claves\n• Permisos granulares\n• Cifrado de sobre\nPara el examen: si la pregunta dice \"AWS administra claves, lo más simple\", Elegí SSE-S3",
    "why": [
      "SSE-S3 utiliza claves de cifrado administradas por S3.",
      "AWS se encarga de toda la gestión de claves.",
      "Cifrado AES-256.",
      "Sin coste adicional.",
      "Opción de cifrado más simple.",
      "Opciones de cifrado S3:.",
      "| Método | Gestión de claves | Costo | Caso de uso |.",
      "|--------|----------------|------|----------|.",
      "| SSE-S3 | AWS gestiona | Gratis | Cifrado sencillo |.",
      "| SSE-KMS | AWS KMS | Costos de la API de KMS | Seguimiento de auditoría, rotación de claves |.",
      "| ESS-C | El cliente proporciona | Gratis | Claves de controles del cliente |.",
      "| Lado del cliente | Cliente | Gratis | Cifrar antes de cargar |.",
      "Beneficios de SSE-KMS (cuando sea necesario):",
      "Seguimiento de auditoría (CloudTrail)",
      "Rotación de claves.",
      "Permisos granulares.",
      "Cifrado de sobres.",
      "Para el examen: si la pregunta dice \"AWS administra claves, lo más simple\", Elegí SSE-S3."
    ],
    "others": []
  },
  {
    "id": "04-9",
    "module": "Storage",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita replicar objetos S3 de us-east-1 a eu-west-1 para la recuperación ante desastres. ¿Qué característica debería habilitarse?",
    "options": {
      "A": "Versiones S3",
      "B": "Replicación entre regiones (CRR) de S3",
      "C": "Replicación en la misma región (SRR) de S3",
      "D": "Aceleración de transferencia S3"
    },
    "explanation": "• La replicación entre regiones (CRR) de S3 replica objetos en todas las regiones.\n• Replicación automática y asincrónica\n• Requiere que el control de versiones esté habilitado en ambos depósitos.\n• Casos de uso: cumplimiento, recuperación ante desastres, reducción de latencia\nRequisitos de RRC:\n1. Control de versiones habilitado en origen y destino\n2. Permisos de IAM adecuados\n3. Diferentes regiones de AWS\nCRR frente a SRR:\n• CRR: diferentes regiones, recuperación ante desastres, cumplimiento\n• SRR: Misma región, agregación de registros, replicación entre cuentas\nOpciones de replicación:\n• Control de tiempo de replicación (RTC): 99,99% replicado en 15 minutos\n• Eliminar replicación de marcador: opcional\n• Replicación de objetos existentes: operación por lotes manual",
    "why": [
      "Replicación automática y asíncrona.",
      "Requiere control de versiones habilitado en ambos depósitos.",
      "Casos de uso: Cumplimiento, recuperación ante desastres, reducción de latencia.",
      "Requisitos de RRC:.",
      "1.",
      "Control de versiones habilitado en origen y destino.",
      "2.",
      "Permisos de IAM adecuados.",
      "3.",
      "Diferentes regiones de AWS.",
      "CRR frente a SRR:.",
      "CRR: Diferentes regiones, recuperación ante desastres, cumplimiento.",
      "SRR: Misma región, agregación de registros, replicación entre cuentas.",
      "Opciones de replicación:.",
      "Control de tiempo de replicación (RTC): 99,99% replicado en 15 minutos.",
      "Eliminar replicación de marcador: Opcional.",
      "Replicación de objetos existentes: operación por lotes manual."
    ],
    "others": []
  },
  {
    "id": "04-10",
    "module": "Storage",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación genera datos temporales que necesitan almacenamiento de alto rendimiento. Los datos se pueden perder si la instancia se detiene. ¿Qué almacenamiento se debe utilizar?",
    "options": {
      "A": "SSD de uso general EBS",
      "B": "SSD IOPS aprovisionada por EBS",
      "C": "EC2 Instance Store",
      "D": "AmazonEFS"
    },
    "explanation": "• El almacén de instancias proporciona:\n• Almacenamiento efímero (temporal)\n• Conectado físicamente al host\n• Máximo rendimiento de IOPS\n• Sin costo adicional\n• Datos perdidos al detener/terminar la instancia\nCaracterísticas del almacén de instancias:\n• Rendimiento: millones de IOPS posibles\n• Persistencia: datos perdidos al detener/terminar\n• Tamaño: varía según el tipo de instancia\n• Casos de uso: caché, buffers, datos temporales, datos temporales\nEC2 Instance Store frente a EBS:\n• EC2 Instance Store: temporal, de máximo rendimiento, gratuito\n• EBS: persistente, conectado a la red, sobrevive a la parada/inicio",
    "why": [
      "Almacenamiento efímero (temporal)",
      "Adjunto físicamente al anfitrión.",
      "Máximo rendimiento de IOPS.",
      "Sin coste adicional.",
      "Datos perdidos al detener/terminar la instancia.",
      "Características del almacén de instancias:.",
      "Rendimiento: Millones de IOPS posibles.",
      "Persistencia: datos perdidos al detener/terminar.",
      "Tamaño: varía según el tipo de instancia.",
      "Casos de uso: caché, buffers, datos temporales, datos temporales.",
      "EC2 Instance Store frente a EBS:.",
      "EC2 Instance Store: Temporal, de mayor rendimiento, gratuito.",
      "EBS: persistente, conectado a la red, sobrevive a la parada/inicio."
    ],
    "others": []
  },
  {
    "id": "04-11",
    "module": "Storage",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere asegurarse de que los objetos S3 eliminados se puedan recuperar durante 30 días. ¿Qué se debe habilitar?",
    "options": {
      "A": "Políticas de ciclo de vida de S3",
      "B": "Versiones S3",
      "C": "Bloqueo de objetos S3",
      "D": "Eliminar MFA"
    },
    "explanation": "• El control de versiones de S3 conserva todas las versiones de los objetos.\n• Los objetos eliminados se convierten en marcadores de eliminación (recuperables)\n• Se conservan las versiones anteriores\n• Protección contra la eliminación accidental\nFunciones de control de versiones de S3:\n• Almacena todas las versiones (incluidas las eliminadas)\n• Recuperarse de eliminaciones accidentales\n• Recuperarse de fallas de aplicaciones\n• Puede suspender (no desactivar completamente)\n• Cada versión cuenta para los costos de almacenamiento.\nFunciones relacionadas:\n• Eliminación de MFA: requiere que MFA elimine versiones o suspenda el control de versiones.\n• Bloqueo de objetos: WORM (escribir una vez, leer muchas), cumplimiento\n• Ciclo de vida: transición o eliminación de versiones después del período de tiempo\nMejores prácticas: habilite el control de versiones + ciclo de vida para eliminar versiones antiguas",
    "why": [
      "Los objetos eliminados se convierten en marcadores de eliminación (recuperables)",
      "Se mantienen versiones anteriores.",
      "Protección contra eliminación accidental.",
      "Funciones de control de versiones de S3:.",
      "Almacena todas las versiones (incluidas las eliminadas)",
      "Recuperarse de eliminaciones accidentales.",
      "Recuperarse de fallas de la aplicación.",
      "Puede suspender (no desactivar completamente)",
      "Cada versión contaba para los costos de almacenamiento.",
      "Características relacionadas:.",
      "Eliminación de MFA: requiere que MFA elimine versiones o suspenda el control de versiones.",
      "Bloqueo de objetos: WORM (Escribir una vez, leer muchas), cumplimiento.",
      "Ciclo de vida: transición o eliminación de versiones después del período de tiempo.",
      "Mejor práctica: habilite el control de versiones + ciclo de vida para eliminar versiones antiguas."
    ],
    "others": []
  },
  {
    "id": "04-12",
    "module": "Storage",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación de Windows que se ejecuta en EC2 necesita almacenamiento de archivos compartido accesible a través del protocolo SMB. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "AmazonEFS",
      "B": "Amazon FSx para el servidor de archivos de Windows",
      "C": "Amazon EBS",
      "D": "Amazon S3"
    },
    "explanation": "• Amazon FSx para servidor de archivos de Windows:\n• Sistema de archivos nativo de Windows\n• Compatibilidad con el protocolo SMB\n• Integración con Directorio Activo\n• Funciones NTFS de Windows\n• Implementación multi-AZ\nFamilia FSx:\n• FSx para Windows: cargas de trabajo de Windows, SMB, AD\n• FSx para Lustre: HPC, ML, alto rendimiento\n• FSx para NetApp ONTAP: NAS empresarial, multiprotocolo\n• FSx para OpenZFS: cargas de trabajo de Linux, instantáneas\nOpciones de almacenamiento de archivos:\n• Aplicaciones de Windows: FSx para Windows (SMB)\n• Aplicaciones de Linux: EFS (NFS)\n• HPC/ML: FSx for Lustre\n• Almacenamiento en bloque: EBS",
    "why": [
      "Sistema de archivos nativo de Windows.",
      "Soporte de protocolo SMB.",
      "Integración con Directorio Activo.",
      "Funciones NTFS de Windows.",
      "Despliegue multi-AZ.",
      "Familia FSx:.",
      "FSx para Windows: cargas de trabajo de Windows, SMB, AD.",
      "FSx para Lustre: HPC, ML, alto rendimiento.",
      "FSx para NetApp ONTAP: NAS empresarial, multiprotocolo.",
      "FSx para OpenZFS: cargas de trabajo de Linux, instantáneas.",
      "Opciones de almacenamiento de archivos:.",
      "Aplicaciones de Windows: FSx para Windows (SMB)",
      "Aplicaciones de Linux: EFS (NFS)",
      "HPC/ML: FSx para Lustre.",
      "Almacenamiento en bloque: EBS."
    ],
    "others": []
  },
  {
    "id": "04-13",
    "module": "Storage",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa necesita almacenar petabytes de datos para la capacitación en aprendizaje automático con el rendimiento más rápido posible. ¿Qué servicio de almacenamiento es MÁS apropiado?",
    "options": {
      "A": "Amazon S3",
      "B": "AmazonEFS",
      "C": "Amazon FSx for Lustre",
      "D": "Amazon EBS"
    },
    "explanation": "• FSx para Lustre diseñado para:\n• Computación de alto rendimiento (HPC)\n• Aprendizaje automático\n• Procesamiento de medios\n• Latencias inferiores a milisegundos\n• Cientos de GB/s de rendimiento\n• Millones de IOPS\nFunciones de FSx for Lustre:\n• Se integra con S3 (carga diferida)\n• Sistema de archivos compatible con POSIX\n• Tipos de implementación temporal y persistente\n• Escala a petabytes\nTipos de implementación:\n• Scratch: temporal, máximo rendimiento, sin replicación\n• Persistente: a largo plazo, replicación, conmutación por error automática\nAlmacenamiento de aprendizaje automático/HPC:\n• Capacitación: FSx para Lustre (desde S3)\n• Inferencia: EFS o S3\n• Almacenamiento de conjuntos de datos: S3\n• Procesamiento: FSx para Lustre",
    "why": [
      "FSx para Lustre diseñado para:.",
      "Computación de alto rendimiento (HPC)",
      "Aprendizaje automático.",
      "Procesamiento de medios.",
      "Latencias inferiores a milisegundos.",
      "Cientos de GB/s de rendimiento.",
      "Millones de IOPS.",
      "Características de FSx para Lustre:.",
      "Se integra con S3 (carga diferida)",
      "Sistema de archivos compatible con POSIX.",
      "Tipos de implementación temporal y persistente.",
      "Escala a petabytes.",
      "Tipos de implementación:.",
      "Scratch: Temporal, máximo rendimiento, sin replicación.",
      "Persistente: a largo plazo, replicación, conmutación por error automática.",
      "Almacenamiento ML/HPC:.",
      "Entrenamiento: FSx para Lustre (desde S3)",
      "Inferencia: EFS o S3.",
      "Almacenamiento de conjuntos de datos: S3.",
      "Procesamiento: FSx para Lustre."
    ],
    "others": []
  },
  {
    "id": "04-14",
    "module": "Storage",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere trasladar automáticamente las instantáneas de EBS a las que se accede con poca frecuencia a un almacenamiento más económico. ¿Qué característica se debe utilizar?",
    "options": {
      "A": "Políticas de ciclo de vida de S3",
      "B": "Archivo de instantáneas de EBS",
      "C": "Volúmenes de disco duro frío de EBS",
      "D": "Amazon S3 Glacier"
    },
    "explanation": "• Nivel de archivo de instantáneas de EBS:\n• 75% más barato que las instantáneas estándar\n• Para instantáneas almacenadas durante más de 90 días\n• Tiempo de restauración: 24-72 horas\n• Almacenamiento mínimo de 90 días\nGestión de instantáneas de EBS:\n• Estándar: restauración rápida (minutos), mayor costo\n• Archivo: restauración más económica y lenta (24-72 horas)\n• Archivado automático con políticas de ciclo de vida.\nFunciones de instantánea de EBS:\n• Copias de seguridad incrementales (solo bloques modificados)\n• Almacenado en S3 (administrado por AWS)\n• Copia entre regiones disponible\n• Restauración rápida de instantáneas (FSR) para una recuperación instantánea\nCasos de uso:\n• Estándar: restauraciones frecuentes, DR\n• Archivo: Cumplimiento, retención a largo plazo",
    "why": [
      "75% más barato que las instantáneas estándar.",
      "Para instantáneas almacenadas durante más de 90 días.",
      "Tiempo de restauración: 24-72 horas.",
      "Almacenamiento mínimo de 90 días.",
      "Gestión de instantáneas de EBS:.",
      "Estándar: Restauración rápida (minutos), mayor costo.",
      "Archivo: Restauración más barata y lenta (24-72 horas)",
      "Archivado automático con políticas de ciclo de vida.",
      "Funciones de instantánea de EBS:.",
      "Copias de seguridad incrementales (solo bloques modificados)",
      "Almacenado en S3 (administrado por AWS)",
      "Copia entre regiones disponible.",
      "Restauración rápida de instantáneas (FSR) para una recuperación instantánea.",
      "Casos de uso:.",
      "Estándar: Restauraciones frecuentes, DR.",
      "Archivo: Cumplimiento, retención a largo plazo."
    ],
    "others": []
  },
  {
    "id": "04-15",
    "module": "Storage",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una aplicación escribe datos en S3 con frecuencia. La empresa quiere recibir una notificación inmediata cuando se crean objetos. ¿Qué se debe configurar?",
    "options": {
      "A": "Notificaciones de eventos S3",
      "B": "Registros de CloudWatch",
      "C": "AWS Config",
      "D": "AWS CloudTrail"
    },
    "explanation": "• Las notificaciones de eventos de S3 se activan en eventos de depósito\n• Notificaciones casi en tiempo real\n• Destinos: SNS, SQS, Lambda\nEventos S3:\n• Objeto creado (PUT, POST, COPY, CompleteMultipartUpload)\n• Objeto eliminado\n• Objeto restaurado del Glaciar\n• Eventos de replicación\n• Transiciones del ciclo de vida\nConfiguración de notificación de eventos:\nPatrones comunes:\n• S3 → Lambda: Procesar archivos cargados\n• S3 → SQS: procesamiento de colas\n• S3 → SNS: Notificaciones para múltiples suscriptores\nAlternativa: EventBridge (filtrado más avanzado)",
    "why": [
      "Notificaciones casi en tiempo real.",
      "Destinos: SNS, SQS, Lambda.",
      "Eventos S3:.",
      "Objeto creado (PUT, POST, COPY, CompleteMultipartUpload)",
      "Objeto eliminado.",
      "Objeto restaurado procedente de Glaciar.",
      "Eventos de replicación.",
      "Transiciones del ciclo de vida.",
      "Configuración de notificación de eventos:.",
      "Patrones comunes:.",
      "S3 → Lambda: Procesar archivos cargados.",
      "S3 → SQS: Procesamiento de colas.",
      "S3 → SNS: Notificaciones para múltiples suscriptores.",
      "Alternativa: EventBridge (filtrado más avanzado)"
    ],
    "others": []
  },
  {
    "id": "04-16",
    "module": "Storage",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa debe garantizar que los objetos S3 nunca se eliminen ni se sobrescriban para cumplir con las normativas. ¿Qué característica se debe utilizar?",
    "options": {
      "A": "Versiones S3",
      "B": "Bloqueo de objetos S3",
      "C": "Eliminar MFA",
      "D": "Políticas de ciclo de vida de S3"
    },
    "explanation": "• S3 Object Lock proporciona WORM (Escribir una vez, Leer muchas)\n• Evita la eliminación/sobrescritura durante el período de retención especificado\n• Modos de cumplimiento y gobernanza\nModos de bloqueo de objetos:\n• Cumplimiento: nadie puede sobrescribirlo ni eliminarlo (ni siquiera el root)\n• Gobernanza: los usuarios con permisos especiales pueden anular\n• Retención legal: protección indefinida, eliminada manualmente\nBloqueo de objetos frente a control de versiones:\n• Control de versiones: protege pero las versiones se pueden eliminar.\n• Bloqueo de objetos: impone la retención, verdaderamente inmutable\nRequisitos:\n• El control de versiones debe estar habilitado\n• Establecer en la creación del depósito\n• Período de retención o retención legal\nCasos de uso:\n• Registros financieros\n• Datos sanitarios (HIPAA)\n• Documentos legales\n• Cumplimiento normativo",
    "why": [
      "Evita la eliminación/sobrescritura durante el período de retención especificado.",
      "Modos de cumplimiento y gobernanza.",
      "Modos de bloqueo de objetos:.",
      "Cumplimiento: nadie puede sobrescribirlo ni eliminarlo (ni siquiera el root)",
      "Gobernanza: los usuarios con permisos especiales pueden anularlos.",
      "Retención legal: protección indefinida, eliminada manualmente.",
      "Bloqueo de objetos frente a control de versiones:.",
      "Control de versiones: Protege pero las versiones se pueden eliminar.",
      "Bloqueo de objetos: impone la retención, verdaderamente inmutable.",
      "Requisitos:.",
      "El control de versiones debe estar habilitado.",
      "Establecido en la creación del depósito.",
      "Plazo de conservación o retención legal.",
      "Casos de uso:.",
      "Registros financieros.",
      "Datos sanitarios (HIPAA)",
      "Documentos legales.",
      "Cumplimiento normativo."
    ],
    "others": []
  },
  {
    "id": "04-17",
    "module": "Storage",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación necesita cargar archivos grandes (más de 100 GB) en S3 con un rendimiento óptimo. ¿Qué se debe utilizar?",
    "options": {
      "A": "Operación de PUT única",
      "B": "Carga multiparte de S3",
      "C": "Aceleración de transferencia S3",
      "D": "Sincronización de datos de AWS"
    },
    "explanation": "• Carga multiparte de S3:\n• Cargar objetos grandes en partes\n• Piezas cargadas en paralelo (mejor rendimiento)\n• Puede pausar/reanudar\n• Recomendado para archivos > 100 MB\n• Requerido para archivos > 5 GB\nBeneficios de la carga multiparte:\n• Rendimiento mejorado (cargas paralelas)\n• Recuperación rápida de problemas de red\n• Pausar y reanudar cargas\n• Subir antes de saber el tamaño final\nMejores prácticas:\n• Úselo para archivos > 100 MB\n• Requerido para archivos > 5 GB\n• Cargar piezas en paralelo\n• Configurar el ciclo de vida para cancelar cargas incompletas\nAceleración de transferencia:\n• Función diferente (utiliza ubicaciones de borde de CloudFront)\n• Acelera las cargas a través de ubicaciones perimetrales\n• Puede combinarse con carga multiparte",
    "why": [
      "Cargue objetos grandes en partes.",
      "Piezas cargadas en paralelo (mejor rendimiento)",
      "Puede pausar/reanudar.",
      "Recomendado para archivos > 100 MB.",
      "Requerido para archivos > 5 GB.",
      "Beneficios de la carga multiparte:.",
      "Rendimiento mejorado (cargas paralelas)",
      "Recuperación rápida de problemas de red.",
      "Pausar y reanudar las cargas.",
      "Subir antes de saber el tamaño final.",
      "Mejores prácticas:.",
      "Úselo para archivos > 100 MB.",
      "Requerido para archivos > 5 GB.",
      "Cargue piezas en paralelo.",
      "Configure el ciclo de vida para cancelar cargas incompletas.",
      "Aceleración de transferencia:.",
      "Característica diferente (utiliza ubicaciones de borde de CloudFront)",
      "Acelera las cargas a través de ubicaciones perimetrales.",
      "Se puede combinar con la carga multiparte."
    ],
    "others": []
  },
  {
    "id": "04-18",
    "module": "Storage",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere acceder a S3 desde instancias EC2 sin utilizar una puerta de enlace de Internet o NAT. ¿Qué se debe configurar?",
    "options": {
      "A": "Conexión VPN",
      "B": "AWS Direct Connect",
      "C": "Punto final de VPC para S3 (punto final de puerta de enlace)",
      "D": "Interconexión de VPC"
    },
    "explanation": "• Punto final de VPC para S3 (punto final de puerta de enlace):\n• Conexión privada de VPC a S3\n• No se requiere Internet\n• Sin cargos por transferencia de datos\n• El tráfico permanece dentro de la red de AWS\nTipos de puntos finales de VPC:\n| Tipo | Servicios | Costo | Implementación |\n|------|----------|------|----------------|\n| Puerta de enlace | S3, DynamoDB | Gratis | Entrada de la tabla de rutas |\n| Interfaz | La mayoría de los servicios de AWS | Cada hora + datos | ENI en subred |\nBeneficios del terminal S3:\n• Seguridad mejorada (sin exposición a Internet)\n• Mejor rendimiento\n• Sin costos de puerta de enlace NAT\n• Controlar el acceso a través de políticas de terminales\nConfiguración:\n1. Cree un punto final de puerta de enlace para S3\n2. Seleccioná VPC y tablas de rutas\n3. Configurar la política de endpoints (opcional)\n4. El tráfico S3 se enruta automáticamente",
    "why": [
      "Conexión privada de VPC a S3.",
      "No se requiere internet.",
      "Sin cargos por transferencia de datos.",
      "El tráfico permanece dentro de la red de AWS.",
      "Tipos de puntos finales de VPC:.",
      "| Tipo | Servicios | Costo | Implementación |.",
      "|------|----------|------|----------------|.",
      "| Puerta de enlace | S3, DynamoDB | Gratis | Entrada de la tabla de rutas |.",
      "| Interfaz | La mayoría de los servicios de AWS | Cada hora + datos | ENI en subred |.",
      "Beneficios del terminal S3:.",
      "Seguridad mejorada (sin exposición a Internet)",
      "Mejor rendimiento.",
      "Sin costos de puerta de enlace NAT.",
      "Controle el acceso a través de políticas de endpoints.",
      "Configuración:.",
      "1.",
      "Cree un punto final de puerta de enlace para S3.",
      "2.",
      "Seleccioná VPC y tablas de rutas.",
      "3.",
      "Configurar la política de endpoints (opcional)",
      "4.",
      "El tráfico S3 se enruta automáticamente."
    ],
    "others": []
  },
  {
    "id": "04-19",
    "module": "Storage",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una copia de seguridad de la base de datos se almacena en S3. La empresa quiere asegurarse de que la copia de seguridad se pueda restaurar rápidamente si es necesario. ¿Qué característica debería habilitarse?",
    "options": {
      "A": "Aceleración de transferencia S3",
      "B": "Versiones S3",
      "C": "Replicación entre regiones de S3",
      "D": "Habilite la recuperación de S3 directamente"
    },
    "explanation": "• Versionado S3 para protección de respaldo:\n• Acceso inmediato a todas las versiones.\n• Proteger contra eliminación/sobrescritura accidental\n• Recuperación rápida (recuperación de milisegundos)\n• Mantenga múltiples versiones de respaldo\nMejores prácticas de respaldo:\n1. Habilite el control de versiones\n2. Utilice políticas de ciclo de vida para realizar la transición a versiones antiguas.\n3. Habilite la replicación entre regiones para DR\n4. Etiquetar objetos de respaldo\n5. Probar los procedimientos de restauración\nProtección adicional:\n• CRR: Redundancia geográfica\n• Bloqueo de objetos: copias de seguridad inmutables\n• Eliminación de MFA: evita la eliminación accidental\nClase de almacenamiento: use Estándar o Estándar-IA para una restauración rápida",
    "why": [
      "Acceso inmediato a todas las versiones.",
      "Proteger contra eliminación/sobrescritura accidental.",
      "Recuperación rápida (recuperación de milisegundos)",
      "Mantenga múltiples versiones de respaldo.",
      "Mejores prácticas de copia de seguridad:.",
      "1.",
      "Habilite el control de versiones.",
      "2.",
      "Utilice políticas de ciclo de vida para realizar la transición de versiones antiguas.",
      "3.",
      "Habilite la replicación entre regiones para DR.",
      "4.",
      "Etiquetar objetos de respaldo.",
      "5.",
      "Probar los procedimientos de restauración.",
      "Protección adicional:.",
      "CRR: Redundancia geográfica.",
      "Bloqueo de objetos: copias de seguridad inmutables.",
      "Eliminación de MFA: evita la eliminación accidental.",
      "Clase de almacenamiento: utilice Estándar o Estándar-IA para una restauración rápida."
    ],
    "others": []
  },
  {
    "id": "04-20",
    "module": "Storage",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene datos en el almacenamiento estándar S3. Los objetos a los que se accede dentro de los 30 días deben permanecer en Estándar, pero los objetos más antiguos deben trasladarse a S3 Glacier. ¿Cómo se puede automatizar esto?",
    "options": {
      "A": "S3 Intelligent-Tiering",
      "B": "Políticas de ciclo de vida de S3",
      "C": "Función AWS Lambda",
      "D": "Migración manual"
    },
    "explanation": "• Las políticas de ciclo de vida de S3 automatizan las transiciones y el vencimiento\n• Transiciones basadas en reglas entre clases de almacenamiento\n• Puede filtrar por prefijo o etiquetas\n• No se requiere código\nEjemplo de política de ciclo de vida:\nAcciones del ciclo de vida:\n• Transición: pasar a una clase de almacenamiento diferente\n• Caducidad: eliminar objetos\n• NoncurrentVersionTransition: transición de versiones anteriores\n• NoncurrentVersionExpiration: eliminar versiones anteriores\n• AbortIncompleteMultipartUpload: limpia cargas incompletas\nReglas de transición:\n• Estándar → Estándar-IA (30 días mínimo)\n• Estándar → Glaciar (0 días min)\n• No se puede hacer la transición hacia atrás (Glaciar → Estándar)",
    "why": [
      "Transiciones basadas en reglas entre clases de almacenamiento.",
      "Puede filtrar por prefijo o etiquetas.",
      "No se requiere código.",
      "Ejemplo de política de ciclo de vida:.",
      "Acciones del ciclo de vida:.",
      "Transición: pasar a una clase de almacenamiento diferente.",
      "Caducidad: Eliminar objetos.",
      "NoncurrentVersionTransition: transición de versiones anteriores.",
      "NoncurrentVersionExpiration: elimina versiones anteriores.",
      "AbortIncompleteMultipartUpload: limpia las cargas incompletas.",
      "Reglas de transición:.",
      "Estándar → Estándar-IA (30 días mínimo)",
      "Estándar → Glaciar (0 días min)",
      "No se puede hacer la transición hacia atrás (Glaciar → Estándar)"
    ],
    "others": []
  },
  {
    "id": "05-1",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita una base de datos relacional con escalamiento automático, alta disponibilidad en múltiples zonas de disponibilidad y conmutación por error automática. Quieren una administración mínima de la base de datos. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon RDS MySQL",
      "B": "Amazon Aurora",
      "C": "AmazonDynamoDB",
      "D": "Amazon Redshift"
    },
    "explanation": "• Amazon Aurora proporciona:\n• Compatibilidad MySQL/PostgreSQL\n• Rendimiento 5x de MySQL, 3x de PostgreSQL\n• Escalado automático (almacenamiento hasta 128 TB)\n• Multi-AZ por diseño (6 copias en 3 AZ)\n• Conmutación por error automática (< 30 segundos)\n• Opción sin servidor disponible\nAurora contra RDS:\n• Aurora: mejor rendimiento, almacenamiento con escalamiento automático y replicación más rápida\n• RDS: MySQL/PostgreSQL estándar, más sencillo\nCaracterísticas de la aurora:\n• Hasta 15 réplicas de lectura\n• Copia de seguridad continua en S3\n• Recuperación en un momento determinado\n• Retroceder (rebobinar la base de datos)",
    "why": [
      "Compatibilidad MySQL/PostgreSQL.",
      "Rendimiento 5x de MySQL, 3x de PostgreSQL.",
      "Escalado automático (almacenamiento hasta 128 TB)",
      "Multi-AZ por diseño (6 copias en 3 AZ)",
      "Conmutación por error automática (< 30 segundos)",
      "Opción sin servidor disponible.",
      "Aurora contra RDS:.",
      "Aurora: mejor rendimiento, almacenamiento con escalamiento automático y replicación más rápida.",
      "RDS: MySQL/PostgreSQL estándar, más sencillo.",
      "Características de la aurora:.",
      "Hasta 15 réplicas de lectura.",
      "Copia de seguridad continua en S3.",
      "Recuperación en un momento dado.",
      "Retroceder (rebobinar base de datos)"
    ],
    "others": []
  },
  {
    "id": "05-2",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación requiere una latencia inferior a milisegundos para operaciones de lectura/escritura con escalado automático para manejar millones de solicitudes por segundo. ¿Qué base de datos se debe utilizar?",
    "options": {
      "A": "Amazon RDS",
      "B": "AmazonDynamoDB",
      "C": "Amazon Aurora",
      "D": "Amazon DocumentDB"
    },
    "explanation": "• Amazon DynamoDB es una base de datos NoSQL totalmente administrada\n• Latencia de milisegundos de un solo dígito\n• Escala a más de 10 billones de solicitudes/día\n• Escalado automático\n• Replicación Multi-AZ incorporada\n• Opción sin servidor (precios según demanda)\nCaracterísticas de DynamoDB:\n• Base de datos de documentos y valores clave\n• DynamoDB Streams (captura de datos modificados)\n• Tablas globales (replicación multirregional)\n• Acelerador DynamoDB (DAX) para latencia de microsegundos\n• Recuperación en un momento determinado\n• Modos de capacidad aprovisionada y bajo demanda\nCuándo utilizar DynamoDB:\n• Necesita una escala extrema\n• Cargas de trabajo variables\n• Necesita una latencia inferior a 10 ms\n• Modelo de datos clave-valor o de documento",
    "why": [
      "Latencia de milisegundos de un solo dígito.",
      "Escala a más de 10 billones de solicitudes/día.",
      "Escalado automático.",
      "Replicación Multi-AZ incorporada.",
      "Opción sin servidor (precios bajo demanda)",
      "Características de DynamoDB:.",
      "Base de datos de documentos y valores clave.",
      "DynamoDB Streams (captura de datos modificados)",
      "Tablas globales (replicación multirregional)",
      "Acelerador DynamoDB (DAX) para latencia de microsegundos.",
      "Recuperación en un momento dado.",
      "Modos de capacidad aprovisionada y bajo demanda.",
      "Cuándo utilizar DynamoDB:.",
      "Necesita escala extrema.",
      "Cargas de trabajo variables.",
      "Necesita una latencia inferior a 10 ms.",
      "Modelo de datos clave-valor o documento."
    ],
    "others": []
  },
  {
    "id": "05-3",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere almacenar en caché los resultados de las consultas de la base de datos para reducir la carga de lectura en su base de datos RDS y mejorar los tiempos de respuesta. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon CloudFront",
      "B": "Amazon ElastiCache",
      "C": "Acelerador DynamoDB (DAX)",
      "D": "Amazon S3"
    },
    "explanation": "• Amazon ElastiCache proporciona almacenamiento en caché en memoria\n• Motores Redis o Memcached\n• Latencia de microsegundos\n• Reduce la carga de la base de datos\n• Almacenamiento de sesiones\n• Tablas de clasificación, análisis en tiempo real\nMotores ElastiCache:\n| Característica | Redis | Memcache |\n|---------|-------|-----------|\n| Tipos de datos | Avanzado (cadenas, conjuntos, conjuntos ordenados) | Simples (cadenas) |\n| Persistencia | Sí (instantáneas) | No |\n| Replicación | Sí (Multi-AZ) | No |\n| Pub/Sub | Sí | No |\n| Conjuntos ordenados | Sí (tablas de clasificación) | No |\n| Multiproceso | No | Sí |\nPatrón común: Aplicación → ElastiCache → RDS (caché aparte)",
    "why": [
      "Motores Redis o Memcached.",
      "Latencia de microsegundos.",
      "Reduce la carga de la base de datos.",
      "Almacenamiento de sesiones.",
      "Tablas de clasificación, análisis en tiempo real.",
      "Motores ElastiCache:.",
      "| Característica | Redis | Memcached |.",
      "|---------|-------|-----------|.",
      "| Tipos de datos | Avanzado (cadenas, conjuntos, conjuntos ordenados) | Simple (cadenas) |.",
      "| Persistencia | Sí (instantáneas) | No |.",
      "| Replicación | Sí (Multi-AZ) | No |.",
      "| Pub/Sub | Sí | No |.",
      "| Conjuntos ordenados | Sí (tablas de clasificación) | No |.",
      "| Multiproceso | No | Sí |.",
      "Patrón común: Aplicación → ElastiCache → RDS (caché aparte)"
    ],
    "others": []
  },
  {
    "id": "05-4",
    "module": "Database",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un almacén de datos requiere consultas analíticas complejas en petabytes de datos. ¿Qué servicio de base de datos de AWS es MÁS apropiado?",
    "options": {
      "A": "Amazon RDS",
      "B": "AmazonDynamoDB",
      "C": "Amazon Redshift",
      "D": "Amazon Aurora"
    },
    "explanation": "• Amazon Redshift es un servicio de almacenamiento de datos\n• Almacenamiento en columnas\n• Procesamiento masivo paralelo (MPP)\n• Escala de petabytes\n• Consultas SQL (compatibles con PostgreSQL)\n• Integración con S3, EMR, Glue\nFunciones de desplazamiento al rojo:\n• Almacenamiento en columnas (mejor compresión, consultas más rápidas)\n• Redshift Spectrum (consulta datos de S3 directamente)\n• Copias de seguridad e instantáneas automáticas\n• Cifrado en reposo y en tránsito\n• Escalado de simultaneidad (manejar consultas en ráfaga)\n• Almacenamiento en caché de resultados\nDesplazamiento al rojo frente a RDS:\n• Redshift: análisis, OLAP, almacén de datos\n• RDS: Transaccional, OLTP, base de datos operativa\nCasos de uso:\n• Inteligencia empresarial\n• Análisis de datos históricos\n• Análisis a gran escala\n• Informes",
    "why": [
      "Almacenamiento en columnas.",
      "Procesamiento masivo paralelo (MPP)",
      "Escala de petabytes.",
      "Consultas SQL (compatibles con PostgreSQL)",
      "Integración con S3, EMR, Glue.",
      "Funciones de desplazamiento al rojo:.",
      "Almacenamiento en columnas (mejor compresión, consultas más rápidas)",
      "Redshift Spectrum (consulta datos de S3 directamente)",
      "Copias de seguridad e instantáneas automáticas.",
      "Cifrado en reposo y en tránsito.",
      "Escalado de simultaneidad (manejar consultas en ráfaga)",
      "Almacenamiento en caché de resultados.",
      "Desplazamiento al rojo frente a RDS:.",
      "Redshift: Análisis, OLAP, almacén de datos.",
      "RDS: Transaccional, OLTP, base de datos operativa.",
      "Casos de uso:.",
      "Inteligencia empresarial.",
      "Análisis de datos históricos.",
      "Análisis a gran escala.",
      "Informes."
    ],
    "others": []
  },
  {
    "id": "05-5",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Es necesario migrar una aplicación MongoDB a AWS con cambios mínimos. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon RDS",
      "B": "AmazonDynamoDB",
      "C": "Amazon DocumentDB",
      "D": "Amazon Neptune"
    },
    "explanation": "• Amazon DocumentDB es una base de datos de documentos compatible con MongoDB\n• Totalmente gestionado\n• Compatibilidad con MongoDB 3.6 y 4.0\n• Escala a millones de solicitudes/segundo\n• Replicación multi-AZ\n• Copias de seguridad automáticas\nCaracterísticas de DocumentDB:\n• Modelo de datos del documento (JSON)\n• Controladores y herramientas MongoDB compatibles\n• El almacenamiento se escala automáticamente a 64 TB\n• Hasta 15 réplicas de lectura\n• Copia de seguridad continua en S3\nMigración: utilice AWS Database Migration Service (DMS)\nCuando usar:\n• Cargas de trabajo existentes de MongoDB\n• Datos orientados a documentos\n• Necesita servicio administrado",
    "why": [
      "Totalmente gestionado.",
      "Compatibilidad con MongoDB 3.6 y 4.0.",
      "Escala a millones de solicitudes/segundo.",
      "Replicación multi-AZ.",
      "Copias de seguridad automáticas.",
      "Características de DocumentDB:.",
      "Modelo de datos del documento (JSON)",
      "Controladores y herramientas MongoDB compatibles.",
      "El almacenamiento se escala automáticamente a 64 TB.",
      "Hasta 15 réplicas de lectura.",
      "Copia de seguridad continua en S3.",
      "Migración: utilice AWS Database Migration Service (DMS)",
      "Cuándo utilizar:.",
      "Cargas de trabajo de MongoDB existentes.",
      "Datos orientados a documentos.",
      "Necesita servicio gestionado."
    ],
    "others": []
  },
  {
    "id": "05-6",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación necesita almacenar relaciones entre entidades de datos (conexiones de redes sociales, detección de fraude). ¿Qué base de datos es MÁS adecuada?",
    "options": {
      "A": "Amazon RDS",
      "B": "AmazonDynamoDB",
      "C": "Amazon Neptune",
      "D": "Amazon DocumentDB"
    },
    "explanation": "• Amazon Neptune es una base de datos de gráficos\n• Almacenar y consultar datos altamente conectados\n• Soporta Gremlin y SPARQL\n• Consultas rápidas sobre relaciones\n• Replicación multi-AZ\nCasos de uso de Neptuno:\n• Redes sociales\n• Detección de fraude\n• Motores de recomendación\n• Gráficos de conocimiento\n• Topología de red\n• Cadena de suministro\nGráfico vs relacional:\n• Gráfico: relaciones complejas, recorridos\n• Relacional: las uniones se vuelven costosas para relaciones profundas\n• Las bases de datos de gráficos se optimizan para consultas de relaciones.",
    "why": [
      "Almacene y consulte datos altamente conectados.",
      "Soporta Gremlin y SPARQL.",
      "Consultas rápidas de relaciones.",
      "Replicación multi-AZ.",
      "Casos de uso de Neptuno:.",
      "Redes sociales.",
      "Detección de fraude.",
      "Motores de recomendación.",
      "Gráficos de conocimiento.",
      "Topología de red.",
      "Cadena de suministro.",
      "Gráfico vs relacional:.",
      "Gráfico: Relaciones complejas, recorridos.",
      "Relacional: las uniones se vuelven costosas para las relaciones profundas.",
      "Las bases de datos de gráficos se optimizan para consultas de relaciones."
    ],
    "others": []
  },
  {
    "id": "05-7",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita ejecutar una base de datos RDS con conmutación por error automática a una instancia en espera en otra zona de disponibilidad. ¿Qué se debe configurar?",
    "options": {
      "A": "Réplicas de lectura RDS",
      "B": "Implementación de RDS Multi-AZ",
      "C": "Instantáneas RDS",
      "D": "Replicación entre regiones de RDS"
    },
    "explanation": "• RDS Multi-AZ proporciona alta disponibilidad\n• Replicación síncrona en espera\n• Conmutación por error automática (1-2 minutos)\n• Misma región, diferente AZ\n• Sin intervención manual\nRéplicas Multi-AZ versus lectura:\n| Característica | Multi-AZ | Leer réplicas |\n|---------|----------|---------------|\n| Propósito | Alta disponibilidad | Leer escala |\n| Replicación | Sincrónico | Asíncrono |\n| Conmutación por error | Automático | Promoción manual |\n| Acceso | En espera no accesible | Puede leer desde réplicas |\n| Región | Lo mismo | Igual o entre regiones |\nActivadores de conmutación por error Multi-AZ:\n• Fallo AZ\n• Fallo de instancia\n• Fallo de almacenamiento\n• Parches de software (planeados)",
    "why": [
      "RDS Multi-AZ proporciona alta disponibilidad.",
      "Replicación síncrona en espera.",
      "Conmutación por error automática (1-2 minutos)",
      "Misma región, diferente AZ.",
      "Sin intervención manual.",
      "Réplicas Multi-AZ versus lectura:.",
      "| Característica | Multi-AZ | Leer réplicas |.",
      "|---------|----------|---------------|.",
      "| Propósito | Alta disponibilidad | Leer escala |.",
      "| Replicación | Sincrónico | Asincrónico |.",
      "| Conmutación por error | Automático | Promoción manual |.",
      "| Acceso | En espera no accesible | Puede leer desde réplicas |.",
      "| Región | Lo mismo | Igual o entre regiones |.",
      "Activadores de conmutación por error Multi-AZ:.",
      "Fallo AZ.",
      "Fallo de instancia.",
      "Fallo de almacenamiento.",
      "Parches de software (planeados)"
    ],
    "others": []
  },
  {
    "id": "05-8",
    "module": "Database",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación requiere DynamoDB pero debe admitir consultas complejas con múltiples atributos. ¿Qué característica se debe utilizar?",
    "options": {
      "A": "Secuencias de DynamoDB",
      "B": "Índice secundario global de DynamoDB (GSI)",
      "C": "Escalado automático de DynamoDB",
      "D": "Acelerador DynamoDB (DAX)"
    },
    "explanation": "• Índice Secundario Global (GSI):\n• Consulta sobre atributos de clave no principal\n• Claves de partición y clasificación diferentes a las de la tabla base\n• Lecturas eventualmente consistentes\n• Se puede agregar después de la creación de la tabla\nTipos de índice de DynamoDB:\n| Tipo | Claves | Proyección | Creación |\n|------|------|------------|----------|\n| LSI | Misma clave de partición | Puede elegir | Sólo en la creación de la tabla |\n| GSI | Diferentes claves | Puede elegir | En cualquier momento |\nCasos de uso de GSI:\n• Consulta por diferentes atributos\n• Admite múltiples patrones de acceso\n• Consultas flexibles",
    "why": [
      "Índice Secundario Global (GSI):.",
      "Consulta sobre atributos de clave no principal.",
      "Claves de partición y clasificación diferentes a las de la tabla base.",
      "Lecturas eventualmente consistentes.",
      "Se puede agregar después de la creación de la tabla.",
      "Tipos de índice de DynamoDB:.",
      "| Tipo | Claves | Proyección | Creación |.",
      "|------|------|------------|----------|.",
      "| LSI | Misma clave de partición | Puede elegir | Sólo en la creación de la tabla |.",
      "| GSI | Diferentes claves | Puede elegir | En cualquier momento |.",
      "Casos de uso de GSI:.",
      "Consulta por diferentes atributos.",
      "Admite múltiples patrones de acceso.",
      "Consultas flexibles."
    ],
    "others": []
  },
  {
    "id": "05-9",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere lograr una latencia de microsegundos para las operaciones de lectura de DynamoDB. ¿Qué característica debería habilitarse?",
    "options": {
      "A": "Secuencias de DynamoDB",
      "B": "Tablas globales de DynamoDB",
      "C": "Acelerador DynamoDB (DAX)",
      "D": "Escalado automático de DynamoDB"
    },
    "explanation": "• Acelerador DynamoDB (DAX):\n• Caché en memoria para DynamoDB\n• Latencia de microsegundos (frente a milisegundos)\n• Totalmente administrado y altamente disponible\n• Sin cambios en el código de la aplicación (reemplazo directo)\nBeneficios DAX:\n• Mejora de rendimiento 10 veces mayor para cargas de trabajo con mucha lectura\n• Reduce la carga de lectura en DynamoDB\n• Lecturas eventualmente consistentes\n• Caché de escritura directa\nDAX frente a ElastiCache:\n• DAX: integración más sencilla, específica de DynamoDB\n• ElastiCache: propósito general, más control\nCuándo utilizar DAX:\n• Cargas de trabajo con mucha lectura\n• Necesita una latencia de microsegundos\n• Lecturas repetidas de los mismos elementos.\n• Ofertas y juegos en tiempo real",
    "why": [
      "Caché en memoria para DynamoDB.",
      "Latencia de microsegundos (frente a milisegundos)",
      "Totalmente administrado, altamente disponible.",
      "Sin cambios en el código de la aplicación (reemplazo directo)",
      "Beneficios DAX:.",
      "Mejora de rendimiento 10 veces mayor para cargas de trabajo con mucha lectura.",
      "Reduce la carga de lectura en DynamoDB.",
      "Lecturas eventualmente consistentes.",
      "Caché de escritura simultánea.",
      "DAX frente a ElastiCache:.",
      "DAX: integración más sencilla, específica de DynamoDB.",
      "ElastiCache: Propósito general, más control.",
      "Cuándo utilizar DAX:.",
      "Cargas de trabajo con mucha lectura.",
      "Necesita latencia de microsegundos.",
      "Lecturas repetidas de los mismos elementos.",
      "Ofertas en tiempo real, juegos."
    ],
    "others": []
  },
  {
    "id": "05-10",
    "module": "Database",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una base de datos RDS necesita manejar un mayor tráfico de lectura. El tráfico de escritura es bajo. ¿Cuál es la solución más costo-efectivo?",
    "options": {
      "A": "Actualizar a una instancia más grande",
      "B": "Habilitar RDS Multi-AZ",
      "C": "Crear réplicas de lectura RDS",
      "D": "Utilice ElastiCache"
    },
    "explanation": "• Réplicas de lectura RDS:\n• Replicación asincrónica\n• Descargar el tráfico de lectura del primario\n• Hasta 15 réplicas (Aurora)\n• Misma región o entre regiones\n• Puede promocionarse a independiente\nLea los casos de uso de réplicas:\n• Cargas de trabajo con mucha lectura\n• Informes/análisis (separados de la producción)\n• Recuperación ante desastres entre regiones (promoción)\n• Leer escala\nBeneficios:\n• Escalado costo-efectivo para lecturas\n• Sin impacto en la instancia principal\n• Puede utilizar diferentes tipos de instancias\nRetraso de replicación: monitorear con la métrica de CloudWatch",
    "why": [
      "Réplicas de lectura RDS:.",
      "Replicación asincrónica.",
      "Descargue el tráfico de lectura del primario.",
      "Hasta 15 réplicas (Aurora)",
      "Misma región o entre regiones.",
      "Se puede promover a independiente.",
      "Leer casos de uso de réplicas:.",
      "Cargas de trabajo con mucha lectura.",
      "Informes/análisis (separados de la producción)",
      "Recuperación ante desastres entre regiones (promoción)",
      "Leer escala.",
      "Beneficios:.",
      "Escalado costo-efectivo para lecturas.",
      "Sin impacto en la instancia principal.",
      "Puede utilizar diferentes tipos de instancias.",
      "Retraso de replicación: monitorear con la métrica de CloudWatch."
    ],
    "others": []
  },
  {
    "id": "05-11",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación global requiere que las tablas de DynamoDB se repliquen en varias regiones de AWS con lecturas y escrituras locales de baja latencia. ¿Qué característica se debe utilizar?",
    "options": {
      "A": "Secuencias de DynamoDB",
      "B": "Tablas globales de DynamoDB",
      "C": "Replicación entre regiones de DynamoDB",
      "D": "Servicio de migración de bases de datos de AWS"
    },
    "explanation": "• Tablas globales de DynamoDB:\n• Replicación multirregional y multiactiva\n• Replicación bidireccional\n• Lectura/escritura local en cada región\n• Latencia inferior a un segundo\n• Resolución de conflictos (el último escritor gana)\nRequisitos de tablas globales:\n• Flujos de DynamoDB habilitados\n• Mismo nombre de tabla en todas las regiones\n• Misma estructura de clave primaria\nCasos de uso:\n• Aplicaciones globales\n• Recuperación ante desastres\n• Alta disponibilidad multirregional\n• Reducir la latencia para usuarios globales",
    "why": [
      "Replicación multirregional y multiactiva.",
      "Replicación bidireccional.",
      "Lectura/escritura local en cada región.",
      "Latencia inferior al segundo.",
      "Resolución de conflictos (el último escritor gana)",
      "Requisitos de tablas globales:.",
      "Secuencias de DynamoDB habilitadas.",
      "Mismo nombre de tabla en todas las regiones.",
      "Misma estructura de clave primaria.",
      "Casos de uso:.",
      "Aplicaciones globales.",
      "Recuperación ante desastres.",
      "Alta disponibilidad multirregional.",
      "Reduzca la latencia para usuarios globales."
    ],
    "others": []
  },
  {
    "id": "05-12",
    "module": "Database",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa debe garantizar que las copias de seguridad de la base de datos RDS se conserven durante 90 días para cumplir con las normas. ¿Qué se debe configurar?",
    "options": {
      "A": "Copias de seguridad automatizadas con retención de 90 días",
      "B": "Instantáneas manuales",
      "C": "Tanto copias de seguridad automatizadas (35 días) como instantáneas manuales",
      "D": "Replicación entre regiones de RDS"
    },
    "explanation": "• Copias de seguridad automatizadas RDS: retención máxima de 35 días\n• Instantáneas manuales: se conservan hasta que se eliminen explícitamente\n• Durante > 35 días: use instantáneas manuales\nTipos de copia de seguridad RDS:\n| Tipo | Retención | Eliminado con DB | Caso de uso |\n|------|-----------|-----------------|----------|\n| Automatizado | 1-35 días | Sí | Recuperación en un momento dado |\n| manuales | Hasta que se elimine | No | Retención a largo plazo |\nMejores prácticas para una retención prolongada:\n1. Habilite las copias de seguridad automatizadas (35 días)\n2. Cree instantáneas manuales a largo plazo\n3. Utilice políticas de ciclo de vida para copiar a S3/Glacier\nFunciones de copia de seguridad automatizadas:\n• Instantánea completa diaria\n• Registros de transacciones cada 5 minutos\n• Recuperación en un momento dado dentro del período de retención",
    "why": [
      "Copias de seguridad automatizadas RDS: retención máxima de 35 días.",
      "Instantáneas manuales: se conservan hasta que se eliminan explícitamente.",
      "Durante > 35 días: utilice instantáneas manuales.",
      "Tipos de copia de seguridad RDS:.",
      "| Tipo | Retención | Eliminado con DB | Caso de uso |.",
      "|------|-----------|-----------------|----------|.",
      "| Automatizado | 1-35 días | Sí | Recuperación en un momento dado |.",
      "| manuales | Hasta que se elimine | No | Retención a largo plazo |.",
      "Mejores prácticas para una retención prolongada:.",
      "1.",
      "Habilitar copias de seguridad automatizadas (35 días)",
      "2.",
      "Cree instantáneas manuales a largo plazo.",
      "3.",
      "Utilice políticas de ciclo de vida para copiar a S3/Glacier.",
      "Funciones de copia de seguridad automatizadas:.",
      "Instantánea completa diaria.",
      "Registros de transacciones cada 5 minutos.",
      "Recuperación en un momento dado dentro del período de retención."
    ],
    "others": []
  },
  {
    "id": "05-13",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación necesita almacenamiento de datos de series temporales para los datos de los sensores de IoT con políticas automáticas de retención de datos. ¿Qué base de datos es MÁS apropiada?",
    "options": {
      "A": "AmazonDynamoDB",
      "B": "Amazon RDS",
      "C": "Amazon Timestream",
      "D": "Amazon Redshift"
    },
    "explanation": "• Amazon Timestream está diseñado específicamente para datos de series temporales\n• IoT, DevOps, análisis\n• Gestión automática del ciclo de vida de los datos.\n• Análisis de series temporales incorporado\n• 1000 veces más rápido, costo 1/10 versus relacional\nCaracterísticas de la secuencia temporal:\n• Clasificación automática por niveles (memoria → magnética)\n• Funciones de series temporales integradas\n• Sin servidor, escalable automáticamente\n• consultas SQL\nCasos de uso:\n• Datos de sensores de IoT\n• Monitoreo de aplicaciones\n• Métricas de DevOps\n• Telemetría industrial\nCorriente temporal frente a alternativas:\n• DynamoDB: NoSQL general, TTL manual\n• Redshift: almacén de datos, no optimizado para series temporales\n• Timestream: diseñado específicamente, ideal para series temporales",
    "why": [
      "IoT, DevOps, análisis.",
      "Gestión automática del ciclo de vida de los datos.",
      "Análisis de series de tiempo incorporados.",
      "1000 veces más rápido, costo 1/10 en comparación con relacional.",
      "Características de la secuencia temporal:.",
      "Clasificación automática por niveles (memoria → magnética)",
      "Funciones de series temporales integradas.",
      "Sin servidor, escalable automáticamente.",
      "Consultas SQL.",
      "Casos de uso:.",
      "Datos de sensores de IoT.",
      "Monitoreo de aplicaciones.",
      "Métricas de DevOps.",
      "Telemetría industrial.",
      "Timestream frente a alternativas:.",
      "DynamoDB: NoSQL general, TTL manual.",
      "Redshift: almacén de datos, no optimizado para series temporales.",
      "Timestream: Diseñado específicamente, mejor para series temporales."
    ],
    "others": []
  },
  {
    "id": "05-14",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa quiere migrar una base de datos Oracle local a AWS con un tiempo de inactividad mínimo. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Servicio de migración de bases de datos de AWS (DMS)",
      "B": "Sincronización de datos de AWS",
      "C": "AWS Snowball",
      "D": "Exportación/importación manual"
    },
    "explanation": "• AWS DMS (Servicio de migración de bases de datos):\n• Migrar bases de datos con un tiempo de inactividad mínimo\n• La base de datos de origen permanece operativa\n• Apoya migraciones homogéneas y heterogéneas\n• Replicación continua de datos\nTipos de migración de DMS:\n1. Homogéneo: Oracle → Oracle, MySQL → Aurora MySQL\n2. Heterogéneo: Oracle → Aurora PostgreSQL (use SCT)\nCaracterísticas del DMS:\n• Replicación continua\n• Multi-AZ para alta disponibilidad\n• Conmutación por error automática\n• Admite muchos motores de bases de datos\nPasos de migración:\n1. Crear instancia de replicación\n2. Configurar los puntos finales de origen y destino\n3. Crear tarea de migración\n4. Carga completa + CDC (Captura de datos modificados)\n5. Transición cuando esté lista",
    "why": [
      "AWS DMS (Servicio de migración de bases de datos):.",
      "Migre bases de datos con un tiempo de inactividad mínimo.",
      "La base de datos de origen sigue operativa.",
      "Soporta migraciones homogéneas y heterogéneas.",
      "Replicación continua de datos.",
      "Tipos de migración de DMS:.",
      "1.",
      "Homogéneo: Oracle → Oracle, MySQL → Aurora MySQL.",
      "2.",
      "Heterogéneo: Oracle → Aurora PostgreSQL (use SCT)",
      "Características del DMS:.",
      "Replicación continua.",
      "Multi-AZ para alta disponibilidad.",
      "Conmutación por error automática.",
      "Admite muchos motores de bases de datos.",
      "Pasos de migración:.",
      "1.",
      "Crear instancia de replicación.",
      "2.",
      "Configure los puntos finales de origen y destino.",
      "3.",
      "Crear tarea de migración.",
      "4.",
      "Carga completa + CDC (Captura de datos modificados)",
      "5.",
      "Transición cuando esté lista."
    ],
    "others": []
  },
  {
    "id": "05-15",
    "module": "Database",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación utiliza RDS MySQL. La empresa quiere cifrar una base de datos no cifrada existente. ¿Cuál es el enfoque correcto?",
    "options": {
      "A": "Habilitar el cifrado en la base de datos existente",
      "B": "Cree una instantánea cifrada y restaure en una nueva instancia cifrada",
      "C": "Utilice AWS KMS para cifrar in situ",
      "D": "Exportar datos y volver a importarlos a una instancia cifrada"
    },
    "explanation": "• No se puede cifrar la instancia RDS existente directamente\n• Debe crear una copia cifrada\nProceso de cifrado:\n1. Cree una instantánea de la base de datos no cifrada\n2. Copie la instantánea con el cifrado habilitado\n3. Restaurar la instantánea cifrada en una nueva instancia de base de datos\n4. Actualizar el punto final de la aplicación\n5. Eliminar instancia antigua\nCifrado RDS:\n• Utiliza AWS KMS para la administración de claves\n• Cifra datos en reposo (almacenamiento, copias de seguridad, instantáneas, réplicas de lectura)\n• No se puede desactivar el cifrado una vez activado\n• Impacto mínimo en el rendimiento\nAlternativa: utilice AWS DMS para migrar con el cifrado habilitado",
    "why": [
      "No se puede cifrar la instancia RDS existente directamente.",
      "Debe crear una copia cifrada.",
      "Proceso de cifrado:.",
      "1.",
      "Cree una instantánea de la base de datos no cifrada.",
      "2.",
      "Copie la instantánea con el cifrado habilitado.",
      "3.",
      "Restaure la instantánea cifrada en una nueva instancia de base de datos.",
      "4.",
      "Actualizar el punto final de la aplicación.",
      "5.",
      "Eliminar instancia antigua.",
      "Cifrado RDS:.",
      "Utiliza AWS KMS para la administración de claves.",
      "Cifra datos en reposo (almacenamiento, copias de seguridad, instantáneas, réplicas de lectura)",
      "No se puede desactivar el cifrado una vez habilitado.",
      "Impacto mínimo en el rendimiento.",
      "Alternativa: utilice AWS DMS para migrar con el cifrado habilitado."
    ],
    "others": []
  },
  {
    "id": "05-16",
    "module": "Database",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una tabla de DynamoDB experimenta patrones de tráfico variables a lo largo del día. ¿Qué modo de capacidad se debe utilizar para optimizar los costos?",
    "options": {
      "A": "Capacidad provisionada",
      "B": "Capacidad bajo demanda",
      "C": "Capacidad reservada",
      "D": "Escalado automático"
    },
    "explanation": "• Capacidad bajo demanda:\n• Pago por solicitud\n• Sin planificación de capacidad\n• Escala automáticamente\n• Ideal para cargas de trabajo impredecibles/variables\nComparación de modos de capacidad:\n| Modo | Mejor para | Precios | Escalado |\n|------|----------|---------|---------|\n| Bajo demanda | Tráfico variable | Por solicitud | Automático |\n| Aprovisionado | Tráfico predecible | Por hora (RCU/WCU) | Escala manual o automática |\nCuándo utilizar:\n• Bajo demanda: nuevas tablas, tráfico impredecible y elevado\n• Aprovisionado: tráfico predecible y constante, optimización de costos\nCosto: On-Demand puede ser más costoso para cargas de trabajo consistentes\nPuede cambiar entre modos una vez cada 24 horas",
    "why": [
      "Pago por solicitud.",
      "Sin planificación de capacidad.",
      "Escala automáticamente.",
      "Ideal para cargas de trabajo impredecibles/variables.",
      "Comparación de modos de capacidad:.",
      "| Modo | Mejor para | Precios | Escalado |.",
      "|------|----------|---------|---------|.",
      "| Bajo demanda | Tráfico variable | Por solicitud | Automático |.",
      "| Aprovisionado | Tráfico predecible | Por hora (RCU/WCU) | Escalado manual o automático |.",
      "Cuándo utilizar:.",
      "Bajo demanda: nuevas tablas, tráfico impredecible y elevado.",
      "Aprovisionado: tráfico predecible y constante, optimización de costos.",
      "Costo: On-Demand puede resultar más costoso para cargas de trabajo consistentes.",
      "Puede cambiar entre modos una vez cada 24 horas."
    ],
    "others": []
  },
  {
    "id": "05-17",
    "module": "Database",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación requiere transacciones ACID en varias tablas de DynamoDB. ¿Qué característica se debe utilizar?",
    "options": {
      "A": "Secuencias de DynamoDB",
      "B": "Transacciones de DynamoDB",
      "C": "Operaciones por lotes de DynamoDB",
      "D": "Tablas globales de DynamoDB"
    },
    "explanation": "• Transacciones de DynamoDB:\n• Propiedades ÁCIDAS (Atomicidad, Consistencia, Aislamiento, Durabilidad)\n• Operaciones de todo o nada\n• Hasta 100 artículos o 4 MB por transacción\n• TransactWriteItems y TransactGetItems\nCasos de uso de transacciones:\n• Transacciones financieras\n• Procesamiento de pedidos\n• Gestión de inventario\n• Necesita coherencia de datos entre elementos\nAPI de transacciones:\n• `TransactWriteItems`: escrituras atómicas\n• `TransactGetItems`: lecturas instantáneas\nCosto: 2 veces el costo de lecturas/escrituras estándar",
    "why": [
      "Propiedades ÁCIDAS (Atomicidad, Consistencia, Aislamiento, Durabilidad)",
      "Operaciones de todo o nada.",
      "Hasta 100 artículos o 4 MB por transacción.",
      "TransactWriteItems y TransactGetItems.",
      "Casos de uso de transacciones:.",
      "Transacciones financieras.",
      "Procesamiento de pedidos.",
      "Gestión de inventario.",
      "Necesita coherencia de datos entre elementos.",
      "API de transacciones:.",
      "`TransactWriteItems`: escrituras atómicas.",
      "`TransactGetItems`: lecturas de instantáneas.",
      "Costo: 2 veces el costo de las lecturas/escrituras estándar."
    ],
    "others": []
  },
  {
    "id": "05-18",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere realizar un seguimiento de los cambios en los elementos de DynamoDB en tiempo real para actualizar las vistas materializadas y activar flujos de trabajo. ¿Qué característica se debe utilizar?",
    "options": {
      "A": "Escalado automático de DynamoDB",
      "B": "Secuencias de DynamoDB",
      "C": "Copias de seguridad de DynamoDB",
      "D": "Amazon CloudWatch Events"
    },
    "explanation": "• Secuencias de DynamoDB:\n• Registro ordenado de cambios a nivel de artículo\n• Casi en tiempo real (normalmente < 1 segundo)\n• Retención de 24 horas\n• Entrega exactamente una vez\nTipos de vista de transmisión:\n• KEYS_ONLY: Sólo atributos clave\n• NEW_IMAGE: elemento completo después del cambio\n• OLD_IMAGE: elemento completo antes del cambio\n• NEW_AND_OLD_IMAGES: Antes y después\nCasos de uso:\n• Actualizar vistas materializadas\n• Activar funciones Lambda\n• Replicación entre regiones (Tablas globales)\n• Canalizaciones de datos\n• Análisis\nPatrón común: Flujos de DynamoDB → Lambda → Cambios de proceso",
    "why": [
      "Registro ordenado de cambios a nivel de artículo.",
      "Casi en tiempo real (normalmente < 1 segundo)",
      "Retención de 24 horas.",
      "Entrega exactamente una vez.",
      "Tipos de vista de transmisión:.",
      "KEYS_ONLY: solo atributos clave.",
      "NEW_IMAGE: artículo completo después del cambio.",
      "OLD_IMAGE: elemento completo antes del cambio.",
      "NEW_AND_OLD_IMAGES: Tanto antes como después.",
      "Casos de uso:.",
      "Actualizar vistas materializadas.",
      "Activar funciones Lambda.",
      "Replicación entre regiones (tablas globales)",
      "Canalizaciones de datos.",
      "Analítica.",
      "Patrón común: Flujos de DynamoDB → Lambda → Cambios de proceso."
    ],
    "others": []
  },
  {
    "id": "05-19",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un clúster de base de datos de Aurora necesita manejar consultas de análisis sin afectar el tráfico de producción. ¿Qué se debe configurar?",
    "options": {
      "A": "Réplicas de lectura de Aurora",
      "B": "Aurora sin servidor",
      "C": "Base de datos global de Aurora",
      "D": "Réplicas de lectura RDS"
    },
    "explanation": "• Réplicas de lectura de Aurora:\n• Hasta 15 réplicas\n• Retraso de replicación bajo (< 10 ms)\n• Descargar el tráfico de lectura\n• Puede tener puntos finales personalizados\nPuntos finales personalizados de Aurora:\n• Dirigir cargas de trabajo específicas a réplicas específicas\n• Ejemplo: consultas de Analytics a instancias más grandes\nPunto final del lector:\n• Equilibrios de carga en todas las réplicas de lectura\n• Conmutación por error automática si falla el primario\nEscala automática de Aurora:\n• Agregar/eliminar réplicas automáticamente según la carga",
    "why": [
      "Hasta 15 réplicas.",
      "Retraso de replicación bajo (< 10 ms)",
      "Descargue el tráfico de lectura.",
      "Puede tener puntos finales personalizados.",
      "Puntos finales personalizados de Aurora:.",
      "Dirija cargas de trabajo específicas a réplicas específicas.",
      "Ejemplo: consultas de Analytics a instancias más grandes.",
      "Punto final del lector:.",
      "La carga se equilibra en todas las réplicas de lectura.",
      "Conmutación por error automática si falla el primario.",
      "Escala automática de Aurora:.",
      "Agregue o elimine réplicas automáticamente según la carga."
    ],
    "others": []
  },
  {
    "id": "05-20",
    "module": "Database",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Una aplicación sin servidor necesita una base de datos que escale automáticamente la capacidad según la carga de trabajo. ¿Qué opción es MÁS adecuada?",
    "options": {
      "A": "RDS con escalado automático",
      "B": "Aurora sin servidor",
      "C": "DynamoDB bajo demanda",
      "D": "Tanto B como C"
    },
    "explanation": "Ambos son adecuados para aplicaciones sin servidor:\nAurora sin servidor:\n• Escala automáticamente la capacidad informática\n• Pago por segundo para computación\n• Ideal para cargas de trabajo intermitentes/impredecibles\n• Base de datos SQL (PostgreSQL/MySQL)\nDynamoDB bajo demanda:\n• Escala automáticamente el rendimiento\n• Pago por solicitud\n• Base de datos NoSQL\n• Latencia inferior a 10 ms\nElegí según:\n• Necesita SQL, relacional → Aurora Serverless\n• Necesita NoSQL, escala extrema → DynamoDB On-Demand\n• Cargas de trabajo intermitentes → Ambos trabajan\n• Entornos de desarrollo/pruebas → Aurora Serverless\n• Aplicaciones sin servidor → Ambas funcionan",
    "why": [
      "Ambos son adecuados para aplicaciones sin servidor:.",
      "Aurora sin servidor:.",
      "Escala automáticamente la capacidad informática.",
      "Pague por segundo por computación.",
      "Ideal para cargas de trabajo intermitentes/impredecibles.",
      "Base de datos SQL (PostgreSQL/MySQL)",
      "DynamoDB bajo demanda:.",
      "Escala automáticamente el rendimiento.",
      "Pago por solicitud.",
      "Base de datos NoSQL.",
      "Latencia inferior a 10 ms.",
      "Elegí según:.",
      "Necesita SQL, relacional → Aurora Serverless.",
      "Necesita NoSQL, escala extrema → DynamoDB On-Demand.",
      "Cargas de trabajo intermitentes → Ambos funcionan.",
      "Entornos de desarrollo/pruebas → Aurora Serverless.",
      "Aplicaciones sin servidor → Ambas funcionan."
    ],
    "others": []
  },
  {
    "id": "05-21",
    "module": "Database",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un equipo de desarrollo necesita una base de datos compatible con Apache Cassandra totalmente administrada, escalable y de alta disponibilidad para su aplicación. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "Amazon Keyspaces",
      "B": "AmazonDynamoDB",
      "C": "Amazon RDS para PostgreSQL",
      "D": "Amazon Aurora"
    },
    "explanation": "• Amazon Keyspaces es una base de datos administrada compatible con Cassandra\n• Admite el lenguaje de consulta Cassandra (CQL)\n• DynamoDB es NoSQL pero no es compatible con Cassandra\n• RDS y Aurora son bases de datos relacionales",
    "why": [
      "Compatible con el lenguaje de consulta Cassandra (CQL)",
      "DynamoDB es NoSQL pero no es compatible con Cassandra.",
      "RDS y Aurora son bases de datos relacionales."
    ],
    "others": []
  },
  {
    "id": "05-22",
    "module": "Database",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una institución financiera necesita una base de datos contable totalmente administrada, inmutable y criptográficamente verificable para registrar las transacciones. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "AmazonQLDB",
      "B": "Amazon Aurora",
      "C": "Amazon RDS",
      "D": "AmazonDynamoDB"
    },
    "explanation": "• Amazon QLDB (Quantum Ledger Database) es una base de datos de libro mayor totalmente administrada\n• Proporciona un registro de transacciones inmutable y criptográficamente verificable\n• Aurora, RDS y DynamoDB no son bases de datos de contabilidad",
    "why": [
      "Proporciona un registro de transacciones inmutable y criptográficamente verificable.",
      "Aurora, RDS y DynamoDB no son bases de datos de libro mayor."
    ],
    "others": []
  },
  {
    "id": "06-1",
    "module": "Networking",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere crear una red aislada en AWS donde pueda lanzar recursos. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "AWS Direct Connect",
      "B": "VPC de Amazon",
      "C": "AWS Transit Gateway",
      "D": "Amazon Route 53"
    },
    "explanation": "• Amazon VPC (nube privada virtual) proporciona un entorno de red aislado\n• Sección lógicamente aislada de la nube de AWS\n• Control total sobre las redes (rangos de IP, subredes, tablas de rutas, puertas de enlace)\n• Puede crear subredes públicas y privadas\nComponentes clave de VPC:\n• Bloque CIDR: rango de direcciones IP (por ejemplo, 10.0.0.0/16)\n• Subredes: subdivisiones dentro de VPC\n• Tablas de rutas: controla el enrutamiento del tráfico\n• Puerta de enlace de Internet: acceso a Internet\n• NAT Gateway: Internet saliente para subredes privadas",
    "why": [
      "Sección lógicamente aislada de la nube de AWS.",
      "Control total sobre las redes (rangos de IP, subredes, tablas de rutas, puertas de enlace)",
      "Puede crear subredes públicas y privadas.",
      "Componentes clave de VPC:.",
      "Bloque CIDR: rango de direcciones IP (por ejemplo, 10.0.0.0/16)",
      "Subredes: subdivisiones dentro de VPC.",
      "Tablas de rutas: controla el enrutamiento del tráfico.",
      "Pasarela de Internet: Acceso a Internet.",
      "NAT Gateway: Internet saliente para subredes privadas."
    ],
    "others": []
  },
  {
    "id": "06-2",
    "module": "Networking",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una subred privada contiene instancias EC2 que necesitan descargar actualizaciones de software de Internet. NO se debe poder acceder directamente a las instancias desde Internet. ¿Qué se debe configurar?",
    "options": {
      "A": "Internet Gateway",
      "B": "Puerta de enlace NAT",
      "C": "Puerta de enlace privada virtual",
      "D": "Interconexión de VPC"
    },
    "explanation": "• NAT Gateway permite el acceso saliente a Internet para subredes privadas\n• Las instancias permanecen privadas (no entrantes desde Internet)\n• Colocado en una subred pública\n• Enrutar el tráfico de subred privada a NAT Gateway\nPuerta de enlace NAT frente a instancia NAT:\n| Característica | Puerta de enlace NAT | Instancia NAT |\n|---------|-------------|--------------|\n| Gestionado | Administrado por AWS | Gestionado por el cliente |\n| Disponibilidad | Altamente disponible (AZ) | Instancia única |\n| Ancho de banda | Hasta 45 Gbps | Depende del tipo de instancia |\n| Costo | Cada hora + transferencia de datos | Costo de la instancia |\n| Mantenimiento | Mangos de AWS | Identificadores de clientes |\nConfiguración:\n1. Cree una puerta de enlace NAT en una subred pública\n2. Actualizar la tabla de rutas de la subred privada\n3. Ruta 0.0.0.0/0 a la puerta de enlace NAT",
    "why": [
      "Las instancias permanecen privadas (no entrantes desde Internet)",
      "Colocado en subred pública.",
      "Enrute el tráfico de la subred privada a NAT Gateway.",
      "Puerta de enlace NAT frente a instancia NAT:.",
      "| Característica | Puerta de enlace NAT | Instancia NAT |.",
      "|---------|-------------|--------------|.",
      "| Gestionado | Administrado por AWS | Gestionado por el cliente |.",
      "| Disponibilidad | Altamente disponible (AZ) | Instancia única |.",
      "| Ancho de banda | Hasta 45 Gbps | Depende del tipo de instancia |.",
      "| Costo | Cada hora + transferencia de datos | Costo de la instancia |.",
      "| Mantenimiento | Mangos de AWS | Identificadores de clientes |.",
      "Configuración:.",
      "1.",
      "Cree una puerta de enlace NAT en una subred pública.",
      "2.",
      "Actualice la tabla de rutas de la subred privada.",
      "3.",
      "Ruta 0.0.0.0/0 a la puerta de enlace NAT."
    ],
    "others": []
  },
  {
    "id": "06-3",
    "module": "Networking",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa tiene una VPC con CIDR 10.0.0.0/16. Quieren dividirlo en subredes. ¿Cuántas direcciones IP hay disponibles en una subred /24?",
    "options": {
      "A": "128",
      "B": "256",
      "C": "251",
      "D": "254"
    },
    "explanation": "• La subred /24 tiene 256 direcciones IP en total (2^8)\n• AWS reserva 5 direcciones IP en cada subred:\n• .0: dirección de red\n• .1: enrutador VPC\n• .2: servidor DNS\n• .3: Uso futuro\n• .255: transmisión\n• Disponible: 256 - 5 = 251 direcciones IP\nCálculos CIDR:\n• /16: 65.536 IP (65.531 utilizables)\n• /24: 256 IP (251 utilizables)\n• /28: 16 IP (11 utilizables)",
    "why": [
      "La subred /24 tiene 256 direcciones IP en total (2^8)",
      "AWS reserva 5 direcciones IP en cada subred:.",
      ".0: Dirección de red.",
      ".1: enrutador VPC.",
      ".2: servidor DNS.",
      ".3: Uso futuro.",
      ".255: Transmisión.",
      "Disponibles: 256 - 5 = 251 direcciones IP.",
      "Cálculos CIDR:.",
      "/16: 65.536 IP (65.531 utilizables)",
      "/24: 256 IP (251 utilizables)",
      "/28: 16 IP (11 utilizables)"
    ],
    "others": []
  },
  {
    "id": "06-4",
    "module": "Networking",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación que se ejecuta en una VPC debe conectarse a los servicios de AWS (S3, DynamoDB) sin tener que atravesar Internet. ¿Qué se debe configurar?",
    "options": {
      "A": "Puerta de enlace NAT",
      "B": "Internet Gateway",
      "C": "Punto final de la VPC",
      "D": "Conexión VPN"
    },
    "explanation": "• Los puntos finales de VPC brindan conectividad privada a los servicios de AWS\n• El tráfico permanece dentro de la red de AWS\n• No se requiere puerta de enlace de Internet ni NAT\n• Seguridad y rendimiento mejorados\nTipos de puntos finales de VPC:\n| Tipo | Servicios | Implementación | Costo |\n|------|----------|----------------|------|\n| Puerta de enlace | S3, DynamoDB | Entrada de la tabla de rutas | Gratis |\n| Interfaz | La mayoría de los servicios de AWS | ENI en subred | Cada hora + datos |\nBeneficios del punto final de puerta de enlace:\n• Sin cargos por transferencia de datos\n• Mejor rendimiento\n• Sin exposición a Internet\n• Control de políticas",
    "why": [
      "El tráfico permanece dentro de la red de AWS.",
      "No se requiere puerta de enlace de Internet ni NAT.",
      "Seguridad y rendimiento mejorados.",
      "Tipos de puntos finales de VPC:.",
      "| Tipo | Servicios | Implementación | Costo |.",
      "|------|----------|----------------|------|.",
      "| Puerta de enlace | S3, DynamoDB | Entrada de la tabla de rutas | Gratis |.",
      "| Interfaz | La mayoría de los servicios de AWS | ENI en subred | Horario + datos |.",
      "Beneficios del punto final de puerta de enlace:.",
      "Sin cargos por transferencia de datos.",
      "Mejor rendimiento.",
      "Sin exposición a Internet.",
      "Control de políticas."
    ],
    "others": []
  },
  {
    "id": "06-5",
    "module": "Networking",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere conectar su centro de datos local a AWS con una conexión de red privada y dedicada. ¿Qué servicio deberían utilizar?",
    "options": {
      "A": "VPN de AWS",
      "B": "AWS Direct Connect",
      "C": "Internet Gateway",
      "D": "Interconexión de VPC"
    },
    "explanation": "• AWS Direct Connect proporciona una conexión física dedicada\n• Evita la Internet pública\n• Rendimiento más consistente\n• Costos de ancho de banda reducidos\nConexión directa frente a VPN:\n| Característica | Conexión directa | VPN de sitio a sitio |\n|---------|----------------|------------------|\n| Conexión | Fibra dedicada | Basado en Internet |\n| Ancho de banda | 1 Gbps a 100 Gbps | Hasta 1,25 Gbps |\n| Latencia | Bajo, consistente | Variables |\n| Costo | Superior (puerto + datos) | Inferior |\n| Tiempo de configuración | Semanas/meses | Minutos |\n| Cifrado | No por defecto | Sí (IPSec) |\nCasos de uso:\n• Grandes transferencias de datos\n• Se necesita un rendimiento constante\n• Arquitecturas de nube híbrida\n• Requisitos de cumplimiento",
    "why": [
      "Evita la Internet pública.",
      "Rendimiento más consistente.",
      "Costos de ancho de banda reducidos.",
      "Conexión directa frente a VPN:.",
      "| Característica | Conexión directa | VPN de sitio a sitio |.",
      "|---------|----------------|------------------|.",
      "| Conexión | Fibra dedicada | Basado en Internet |.",
      "| Ancho de banda | 1 Gbps a 100 Gbps | Hasta 1,25 Gbps |.",
      "| Latencia | Bajo, consistente | Variables |.",
      "| Costo | Superior (puerto + datos) | Bajar |.",
      "| Tiempo de configuración | Semanas/meses | Minutos |.",
      "| Cifrado | No por defecto | Sí (IPSec) |.",
      "Casos de uso:.",
      "Grandes transferencias de datos.",
      "Se necesita un rendimiento constante.",
      "Arquitecturas de nube híbrida.",
      "Requisitos de cumplimiento."
    ],
    "others": []
  },
  {
    "id": "06-6",
    "module": "Networking",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita enrutar el tráfico entre varias VPC en diferentes cuentas de AWS. ¿Cuál es la solución MÁS escalable?",
    "options": {
      "A": "Interconexión de VPC entre todas las VPC",
      "B": "AWS Transit Gateway",
      "C": "Múltiples conexiones VPN",
      "D": "Internet Gateway"
    },
    "explanation": "• AWS Transit Gateway es el centro central para las VPC\n• Conecta múltiples VPC y redes locales\n• Simplifica la topología de la red\n• Escalable (hasta 5000 VPC)\nInterconexión entre AWS Transit Gateway y VPC:\n| Característica | AWS Transit Gateway | Interconexión de VPC |\n|---------|----------------|-------------|\n| Topología | Eje y radio | Malla (1 a 1) |\n| Escalabilidad | Miles de VPC | Limitado |\n| Enrutamiento | Centralizado | Por emparejamiento |\n| Costo | Superior | Inferior (pequeña escala) |\n| Entre regiones | Sí | Sí |\nLimitaciones de emparejamiento:\n• No transitivo (debe interconectar cada VPC)\n• Complejo con muchas VPC (N*(N-1)/2 conexiones)",
    "why": [
      "Conecta múltiples VPC y redes locales.",
      "Simplifica la topología de la red.",
      "Escalable (hasta 5000 VPC)",
      "Interconexión entre AWS Transit Gateway y VPC:.",
      "| Característica | AWS Transit Gateway | Interconexión de VPC |.",
      "|---------|----------------|-------------|.",
      "| Topología | Eje y radio | Malla (1 a 1) |.",
      "| Escalabilidad | Miles de VPC | Limitado |.",
      "| Enrutamiento | Centralizado | Por emparejamiento |.",
      "| Costo | Superior | Inferior (pequeña escala) |.",
      "| Entre regiones | Sí | Sí |.",
      "Limitaciones de emparejamiento:.",
      "No transitivo (debe interconectar cada VPC)",
      "Complejo con muchas VPC (conexiones N(N-1)/2)"
    ],
    "others": []
  },
  {
    "id": "06-7",
    "module": "Networking",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Una aplicación necesita resolver nombres de dominio. ¿Dónde se debe configurar el servidor DNS en una VPC?",
    "options": {
      "A": "Servidor DNS personalizado en EC2",
      "B": "Utilice DNS proporcionado por AWS en la dirección .2",
      "C": "Utilice el solucionador de ruta 53",
      "D": "Tanto B como C"
    },
    "explanation": "• VPC DNS está disponible en IP base + 2 (p. ej., 10.0.0.2)\n• Route 53 Resolver proporciona resolución DNS\n• Resuelve recursos de AWS\n• Reenvía al DNS local\n• Puntos finales entrantes/salientes\nOpciones de DNS:\n• DNS proporcionado por AWS: predeterminado, automático\n• Route 53 Resolver: escenarios híbridos avanzados\n• DNS personalizado: control total, más gestión\nenableDnsHostnames: las instancias EC2 obtienen nombres DNS públicos\nenableDnsSupport: DNS proporcionado por Amazon habilitado",
    "why": [
      "VPC DNS está disponible en IP base + 2 (p. ej., 10.0.0.2)",
      "Route 53 Resolver proporciona resolución DNS.",
      "Resuelve recursos de AWS.",
      "Reenvía al DNS local.",
      "Puntos finales de entrada/salida.",
      "Opciones de DNS:.",
      "DNS proporcionado por AWS: predeterminado, automático.",
      "Route 53 Resolver: escenarios híbridos avanzados.",
      "DNS personalizado: control total, más gestión.",
      "EnableDnsHostnames: las instancias EC2 obtienen nombres DNS públicos.",
      "EnableDnsSupport: DNS proporcionado por Amazon habilitado."
    ],
    "others": []
  },
  {
    "id": "06-8",
    "module": "Networking",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": true,
    "answer": [
      "A",
      "B"
    ],
    "q": "Una empresa quiere proteger su aplicación web de ataques DDoS y filtrar el tráfico malicioso. ¿Qué servicios de AWS deberían utilizarse? (Elegí DOS)",
    "options": {
      "A": "WAF de AWS",
      "B": "AWS Shield",
      "C": "Grupos de seguridad",
      "D": "AWS GuardDuty",
      "E": "ACL de red"
    },
    "explanation": "• AWS Shield: protección DDoS\n• Estándar: ataques gratuitos, automáticos y comunes\n• Avanzado: pagos, ataques avanzados, soporte 24 horas al día, 7 días a la semana, protección de costos\n• AWS WAF: cortafuegos de aplicaciones web\n• Filtrar solicitudes HTTP/HTTPS\n• Inyección SQL, protección XSS\n• Reglas personalizadas\n• Integración con CloudFront, ALB, API Gateway\nCapas de protección DDoS:\n1. Shield Standard: capa de red/transporte (gratis)\n2. Shield Advanced: capa de aplicación mejorada\n3. WAF: filtrado a nivel de aplicación\n4. CloudFront: absorber el tráfico en el borde\nOtras opciones:\n• Grupos de seguridad: firewall a nivel de instancia, no DDoS\n• NACL: firewall a nivel de subred, no DDoS\n• GuardDuty: detección de amenazas, no prevención",
    "why": [
      "AWS Shield: protección DDoS.",
      "Estándar: ataques gratuitos, automáticos y comunes.",
      "Avanzado: pagos, ataques avanzados, soporte 24 horas al día, 7 días a la semana, protección de costos.",
      "AWS WAF: Firewall de aplicaciones web.",
      "Filtrar solicitudes HTTP/HTTPS.",
      "Inyección SQL, protección XSS.",
      "Reglas personalizadas.",
      "Integración con CloudFront, ALB, API Gateway.",
      "Capas de protección DDoS:.",
      "1.",
      "Estándar Shield: capa de red/transporte (gratis)",
      "2.",
      "Shield Advanced: Capa de aplicación mejorada.",
      "3.",
      "WAF: filtrado a nivel de aplicación.",
      "4.",
      "CloudFront: absorbe el tráfico en el borde.",
      "Otras opciones:.",
      "Grupos de seguridad: firewall a nivel de instancia, no DDoS.",
      "NACL: firewall a nivel de subred, no DDoS.",
      "GuardDuty: detección de amenazas, no prevención."
    ],
    "others": []
  },
  {
    "id": "06-9",
    "module": "Networking",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación necesita distribuir el tráfico entre instancias EC2 en múltiples zonas de disponibilidad. Las instancias no superan las comprobaciones de estado de forma intermitente. ¿Qué se debe configurar?",
    "options": {
      "A": "Aumentar el intervalo de control de salud",
      "B": "Configurar umbral incorrecto",
      "C": "Utilice el período de gracia de verificación de estado",
      "D": "Desactivar controles de salud"
    },
    "explanation": "• Umbral de mal estado: número de comprobaciones fallidas consecutivas antes de marcar como mal estado\n• Evita problemas temporales al eliminar instancias\n• Equilibrio entre capacidad de respuesta y estabilidad\nParámetros de verificación de estado:\n• HealthCheckIntervalSeconds: tiempo entre comprobaciones (5-300 s)\n• HealthyThresholdCount: Éxitos consecutivos para marcar saludable\n• UnhealthyThresholdCount: fallos consecutivos al marcar como no saludable\n• HealthCheckTimeoutSeconds: tiempo de espera de respuesta\nMejores prácticas:\n• Establecer umbrales apropiados para la aplicación\n• Supervisar las métricas de control de estado\n• Utilice comprobaciones de estado de ALB para puntos finales HTTP\n• Considere el tiempo de inicio de la aplicación",
    "why": [
      "Umbral de mal estado: número de comprobaciones fallidas consecutivas antes de marcar como mal estado.",
      "Evita que problemas temporales eliminen instancias.",
      "Equilibrio entre capacidad de respuesta y estabilidad.",
      "Parámetros de control de salud:.",
      "HealthCheckIntervalSeconds: tiempo entre comprobaciones (5-300 s)",
      "HealthyThresholdCount: Éxitos consecutivos para marcar saludable.",
      "UnhealthyThresholdCount: errores consecutivos para marcar como no saludable.",
      "HealthCheckTimeoutSeconds: tiempo de espera de respuesta.",
      "Mejores prácticas:.",
      "Establecer umbrales apropiados para la aplicación.",
      "Supervise las métricas de verificación de estado.",
      "Utilice comprobaciones de estado de ALB para puntos finales HTTP.",
      "Considere el tiempo de inicio de la aplicación."
    ],
    "others": []
  },
  {
    "id": "06-10",
    "module": "Networking",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere enrutar el tráfico según la ubicación geográfica de los usuarios. ¿Qué política de enrutamiento de la Ruta 53 se debe utilizar?",
    "options": {
      "A": "Enrutamiento sencillo",
      "B": "Enrutamiento ponderado",
      "C": "Enrutamiento por geolocalización",
      "D": "Enrutamiento basado en latencia"
    },
    "explanation": "• Geolocalización Rutas de enrutamiento basadas en la ubicación geográfica del usuario.\n• Rutas por continente, país o estado\n• Casos de uso: localización de contenido, cumplimiento, distribución de carga\nPolíticas de ruta de la Ruta 53:\n| Política | Caso de uso |\n|--------|----------|\n| Sencillo | Recurso único |\n| Ponderado | Pruebas A/B, implementación gradual |\n| Latencia | Mejor rendimiento para los usuarios |\n| Conmutación por error | DR activo-pasivo |\n| Geolocalización | Ruta por ubicación del usuario |\n| Geoproximidad | Ruta por ubicación de recursos + sesgo |\n| Valor múltiple | Múltiples IP, controles de estado |\nGeolocalización vs Latencia:\n• Geolocalización: basada en DÓNDE está el usuario\n• Latencia: según QUÉ región tiene la latencia más baja",
    "why": [
      "Rutas por continente, país o estado.",
      "Casos de uso: localización de contenido, cumplimiento, distribución de carga.",
      "Políticas de ruta de la Ruta 53:.",
      "| Política | Caso de uso |.",
      "|--------|----------|.",
      "| Sencillo | Recurso único |.",
      "| Ponderado | Pruebas A/B, implementación gradual |.",
      "| Latencia | Mejor rendimiento para los usuarios |.",
      "| Conmutación por error | DR activo-pasivo |.",
      "| Geolocalización | Ruta por ubicación del usuario |.",
      "| Geoproximidad | Ruta por ubicación de recursos + sesgo |.",
      "| Valor múltiple | Múltiples IP, controles de estado |.",
      "Geolocalización vs Latencia:.",
      "Geolocalización: Basado en DÓNDE se encuentra el usuario.",
      "Latencia: según QUÉ región tiene la latencia más baja."
    ],
    "others": []
  },
  {
    "id": "06-11",
    "module": "Networking",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un grupo de seguridad permite el tráfico entrante en el puerto 443 desde 0.0.0.0/0. ¿Qué regla de salida se necesita para las respuestas?",
    "options": {
      "A": "Permitir la salida del puerto 443 a 0.0.0.0/0",
      "B": "Permitir puertos efímeros salientes",
      "C": "No se necesita regla de salida",
      "D": "Permitir todo el tráfico saliente"
    },
    "explanation": "• Los grupos de seguridad tienen estado\n• Si se permite el tráfico entrante, se permite automáticamente el tráfico de regreso.\n• No es necesario configurar reglas de salida para las respuestas\n• Solo se necesitan reglas salientes para el tráfico iniciado por instancias\nGrupos de seguridad frente a NACL:\n| Característica | Grupos de seguridad | NACL |\n|---------|----------------|-------|\n| Estado | Con estado | Apátrida |\n| Nivel | Instancia | Subred |\n| Reglas | Permitir sólo | Permitir y Denegar |\n| Tráfico de retorno | Automático | Debe configurar |\n| Evaluación | Todas las reglas | Reglas ordenadas |",
    "why": [
      "Los grupos de seguridad tienen estado.",
      "Si se permite el tráfico entrante, se permite el tráfico de regreso automáticamente.",
      "No es necesario configurar reglas de salida para las respuestas.",
      "Solo se necesitan reglas de salida para el tráfico iniciado por instancia.",
      "Grupos de seguridad frente a NACL:.",
      "| Característica | Grupos de seguridad | NACL |.",
      "|---------|----------------|-------|.",
      "| Estado | Con estado | Apátrida |.",
      "| Nivel | Instancia | Subred |.",
      "| Reglas | Permitir sólo | Permitir y Denegar |.",
      "| Tráfico de retorno | Automático | Debe configurar |.",
      "| Evaluación | Todas las reglas | Reglas ordenadas |."
    ],
    "others": []
  },
  {
    "id": "06-12",
    "module": "Networking",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita bloquear el acceso de direcciones IP específicas a su aplicación. ¿Cuál es la solución MÁS adecuada?",
    "options": {
      "A": "Reglas de denegación del grupo de seguridad",
      "B": "Reglas de denegación de ACL de red",
      "C": "Reglas de conjunto de IP de AWS WAF",
      "D": "Ruta 53 filtrado DNS"
    },
    "explanation": "Para bloqueo a nivel de red:\n• Las ACL de red admiten reglas de denegación\n• Evaluado antes de que el tráfico llegue a las instancias.\n• Puede bloquear rangos de IP a nivel de subred\nPara bloqueo a nivel de aplicación:\n• AWS WAF con condiciones de coincidencia del conjunto de IP\n• Filtrado más flexible\n• Funciona con CloudFront, ALB, API Gateway\nLimitaciones de los grupos de seguridad:\n• No se pueden crear reglas Denegar (solo Permitir)\n• No se pueden bloquear IP específicas\nMejores prácticas:\n• NACL: bloqueo de IP a nivel de red\n• WAF: nivel de aplicación, bloqueo geográfico, limitación de velocidad",
    "why": [
      "Para bloqueo a nivel de red:.",
      "Las ACL de red admiten reglas de denegación.",
      "Evaluado antes de que el tráfico llegue a las instancias.",
      "Puede bloquear rangos de IP a nivel de subred.",
      "Para bloqueo a nivel de aplicación:.",
      "AWS WAF con condiciones de coincidencia del conjunto de IP.",
      "Filtrado más flexible.",
      "Funciona con CloudFront, ALB, API Gateway.",
      "Limitaciones de los grupos de seguridad:.",
      "No se pueden crear reglas Denegar (solo Permitir)",
      "No se pueden bloquear IP específicas.",
      "Mejores prácticas:.",
      "NACL: bloqueo de IP a nivel de red.",
      "WAF: nivel de aplicación, bloqueo geográfico, limitación de velocidad."
    ],
    "others": []
  },
  {
    "id": "06-13",
    "module": "Networking",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene recursos en dos VPC en la misma región y quiere que se comuniquen de forma privada. ¿Qué se debe configurar?",
    "options": {
      "A": "Internet Gateway",
      "B": "Interconexión de VPC",
      "C": "AWS Transit Gateway",
      "D": "Conexión VPN"
    },
    "explanation": "• VPC Peering conecta dos VPC de forma privada\n• Regiones iguales o diferentes\n• Cuentas iguales o diferentes\n• Utiliza la red AWS (sin internet)\nRequisitos de emparejamiento de VPC:\n• Bloques CIDR que no se superponen\n• Aceptar solicitud de emparejamiento\n• Actualizar tablas de rutas en ambas VPC\n• Actualizar los grupos de seguridad si es necesario\nCaracterísticas de intercambio de tráfico de VPC:\n• No transitivo (VPC A ↔ VPC B, VPC B ↔ VPC C, pero NOT A ↔ C)\n• Conexión 1 a 1\n• No hay un único punto de falla\n• Sin cuellos de botella en el ancho de banda\nCuándo utilizar Transit Gateway en su lugar:\n• Muchas VPC (>3-4)\n• Enrutamiento complejo\n• Necesita enrutamiento transitivo",
    "why": [
      "Regiones iguales o diferentes.",
      "Cuentas iguales o diferentes.",
      "Utiliza la red AWS (sin internet)",
      "Requisitos de intercambio de tráfico de VPC:.",
      "Bloques CIDR que no se superponen.",
      "Aceptar solicitud de emparejamiento.",
      "Actualice las tablas de rutas en ambas VPC.",
      "Actualice los grupos de seguridad si es necesario.",
      "Características de intercambio de tráfico de VPC:.",
      "No transitivo (VPC A ↔ VPC B, VPC B ↔ VPC C, pero NOT A ↔ C)",
      "Conexión 1 a 1.",
      "No hay un único punto de fracaso.",
      "Sin cuellos de botella en el ancho de banda.",
      "Cuándo utilizar Transit Gateway en su lugar:",
      "Muchas VPC (>3-4)",
      "Rutas complejas.",
      "Necesita enrutamiento transitivo."
    ],
    "others": []
  },
  {
    "id": "06-14",
    "module": "Networking",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación que se ejecuta en instancias EC2 necesita mantener las conexiones del cliente con la misma instancia para la persistencia de la sesión. ¿Qué característica del balanceador de carga debería habilitarse?",
    "options": {
      "A": "Equilibrio de carga entre zonas",
      "B": "Drenaje de conexión",
      "C": "Sesiones pegajosas",
      "D": "Controles de salud"
    },
    "explanation": "• Sticky Sessions (Session Affinity) enruta las solicitudes del mismo cliente a la misma instancia\n• Utiliza cookies para realizar un seguimiento de las sesiones.\n• Cookies basadas en la duración o basadas en la aplicación\nTipos de sesiones fijas de ALB:\n• Basado en duración: cookie generada por LB (AWSALB)\n• Basado en aplicación: cookie generada por la aplicación\nLimitaciones de las sesiones fijas:\n• Puede causar una distribución desigual de la carga.\n• Fallo de instancia = sesiones perdidas\nMejor alternativa: \n• Almacenar sesiones en ElastiCache o DynamoDB\n• Verdadera arquitectura sin estado",
    "why": [
      "Utiliza cookies para realizar un seguimiento de las sesiones.",
      "Cookies basadas en duración o basadas en aplicaciones.",
      "Tipos de sesiones fijas de ALB:.",
      "Basado en la duración: cookie generada por LB (AWSALB)",
      "Basado en aplicación: cookie generada por la aplicación.",
      "Limitaciones de las sesiones fijas:.",
      "Puede causar una distribución desigual de la carga.",
      "Fallo de instancia = sesiones perdidas.",
      "Mejor alternativa:.",
      "Almacene sesiones en ElastiCache o DynamoDB.",
      "Verdadera arquitectura sin estado."
    ],
    "others": []
  },
  {
    "id": "06-15",
    "module": "Networking",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere utilizar un nombre de dominio personalizado con la distribución de CloudFront. ¿Qué se debe configurar?",
    "options": {
      "A": "Solo registro CNAME de ruta 53",
      "B": "Certificado SSL/TLS en ACM y alias de Ruta 53",
      "C": "Origen personalizado de CloudFront",
      "D": "Dominio coincidente con el nombre del depósito S3"
    },
    "explanation": "Requisitos para dominio personalizado:\n1. Certificado SSL/TLS en ACM (región us-east-1)\n2. Nombres de dominio alternativos (CNAME) en CloudFront\n3. Registro de alias de la ruta 53 que apunta a la distribución de CloudFront\nPasos de configuración:\n1. Solicitar/importar certificado en ACM (us-east-1)\n2. Agregue nombres de dominio alternativos a CloudFront\n3. Certificado ACM asociado con distribución\n4. Cree un registro de alias de Ruta 53\nRequisitos del certificado:\n• Debe estar en us-east-1 para CloudFront\n• El nombre de dominio debe coincidir\n• Puede utilizar comodines (*.example.com)",
    "why": [
      "Requisitos para dominio personalizado:.",
      "1.",
      "Certificado SSL/TLS en ACM (región us-east-1)",
      "2.",
      "Nombres de dominio alternativos (CNAME) en CloudFront.",
      "3.",
      "Registro de alias de ruta 53 que apunta a la distribución de CloudFront.",
      "Pasos de configuración:.",
      "1.",
      "Solicitud/certificado de importación en ACM (us-east-1)",
      "2.",
      "Agregue nombres de dominio alternativos a CloudFront.",
      "3.",
      "Certificado ACM asociado con distribución.",
      "4.",
      "Cree un registro de alias de Ruta 53.",
      "Requisitos del certificado:.",
      "Debe estar en us-east-1 para CloudFront.",
      "El nombre de dominio debe coincidir.",
      "Puede utilizar comodines (.example.com)"
    ],
    "others": []
  },
  {
    "id": "06-16",
    "module": "Networking",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Una empresa necesita una solución de alta disponibilidad para conectar el centro de datos local a AWS. ¿Qué se debe implementar?",
    "options": {
      "A": "Conexión única de conexión directa",
      "B": "Conexiones redundantes de Direct Connect a diferentes ubicaciones",
      "C": "VPN de sitio a sitio como respaldo para Direct Connect",
      "D": "Tanto B como C (Redundancia máxima)"
    },
    "explanation": "Máxima alta disponibilidad:\n• Múltiples conexiones Direct Connect en diferentes ubicaciones\n• VPN de sitio a sitio como respaldo\n• Enrutadores de clientes redundantes\n• Múltiples túneles VPN\nCapas de arquitectura HA:\n1. Conexiones DX redundantes: diferentes ubicaciones\n2. Enrutadores de clientes redundantes: sin fallas en un solo punto\n3. Copia de seguridad de VPN: conmutación por error si falla DX\n4. Múltiples túneles VPN: AWS proporciona 2 túneles por conexión\nBeneficios:\n• 99,99% de disponibilidad posible\n• Conmutación por error automática\n• Protección contra fallas de ubicación/conexión",
    "why": [
      "Máxima alta disponibilidad:.",
      "Múltiples conexiones Direct Connect en diferentes ubicaciones.",
      "VPN de sitio a sitio como respaldo.",
      "Enrutadores de clientes redundantes.",
      "Múltiples túneles VPN.",
      "Capas de arquitectura HA:.",
      "1.",
      "Conexiones DX redundantes: Diferentes ubicaciones.",
      "2.",
      "Enrutadores de clientes redundantes: sin fallas en un solo punto.",
      "3.",
      "Copia de seguridad de VPN: conmutación por error si falla DX.",
      "4.",
      "Múltiples túneles VPN: AWS proporciona 2 túneles por conexión.",
      "Beneficios:.",
      "Disponibilidad del 99,99% posible.",
      "Conmutación por error automática.",
      "Protección contra fallos de ubicación/conexión."
    ],
    "others": []
  },
  {
    "id": "06-17",
    "module": "Networking",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación necesita resolver nombres DNS privados entre la red local y AWS VPC. ¿Qué se debe configurar?",
    "options": {
      "A": "Interconexión de VPC",
      "B": "Ruta 53 Zona privada alojada",
      "C": "Puntos finales de resolución de ruta 53",
      "D": "AWS PrivateLink"
    },
    "explanation": "• Los puntos finales de resolución de Route 53 permiten la resolución de DNS entre las instalaciones y AWS\n• Puntos de enlace entrantes: consultas locales sobre recursos de AWS\n• Puntos de enlace salientes: AWS consulta recursos locales\nTipos de puntos finales:\n• Entrante: local → AWS VPC\n• Saliente: AWS VPC → Local (con reglas de reenvío)\nConfiguración:\n1. Cree puntos finales de entrada/salida en VPC\n2. Configurar reglas de reenvío\n3. Actualice el DNS local para reenviarlo al punto final entrante\n4. Cree reglas para reenviar al DNS local\nCasos de uso:\n• Resolución DNS de nube híbrida\n• Migrar cargas de trabajo con dependencias de DNS\n• Nomenclatura unificada en todos los entornos",
    "why": [
      "Puntos de enlace entrantes: consultas locales de recursos de AWS.",
      "Puntos de enlace salientes: AWS consulta recursos locales.",
      "Tipos de puntos finales:.",
      "Entrante: Local → AWS VPC.",
      "Saliente: AWS VPC → Local (con reglas de reenvío)",
      "Configuración:.",
      "1.",
      "Cree puntos finales de entrada/salida en VPC.",
      "2.",
      "Configurar reglas de reenvío.",
      "3.",
      "Actualice el DNS local para reenviarlo al punto final entrante.",
      "4.",
      "Cree reglas para reenviar al DNS local.",
      "Casos de uso:.",
      "Resolución DNS de nube híbrida.",
      "Migre cargas de trabajo con dependencias de DNS.",
      "Nomenclatura unificada en todos los entornos."
    ],
    "others": []
  },
  {
    "id": "06-18",
    "module": "Networking",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere compartir servicios (como NLB) de una VPC con otras VPC/cuentas sin emparejamiento de VPC. ¿Qué servicio permite esto?",
    "options": {
      "A": "Interconexión de VPC",
      "B": "AWS PrivateLink",
      "C": "AWS Transit Gateway",
      "D": "Conexión VPN"
    },
    "explanation": "• AWS PrivateLink proporciona conectividad privada a los servicios\n• Exponer servicios a través de VPC Endpoint Services\n• Acceso de los consumidores a través de puntos finales de Interface VPC\n• No se requiere peering de VPC, puerta de enlace de Internet ni NAT\nArquitectura de enlace privado:\n• Proveedor: crea un servicio de punto final (respaldado por NLB)\n• Consumidor: crea un punto final de interfaz VPC\n• Conexión: Privada, dentro de la red AWS\nBeneficios:\n• Gestión de red simplificada\n• No hay problemas de superposición de CIDR\n• Seguridad mejorada (conectividad privada)\n• Escalable (miles de consumidores)\nCasos de uso:\n• Aplicaciones SaaS\n• Servicios compartidos\n• Servicios de terceros\n• Aplicaciones del mercado",
    "why": [
      "Exponer servicios a través de VPC Endpoint Services.",
      "Los consumidores acceden a través de puntos finales de Interface VPC.",
      "No se requiere emparejamiento de VPC, puerta de enlace de Internet ni NAT.",
      "Arquitectura de enlace privado:.",
      "Proveedor: crea un servicio de punto final (respaldado por NLB)",
      "Consumidor: crea un punto final de interfaz VPC.",
      "Conexión: Privada, dentro de la red AWS.",
      "Beneficios:.",
      "Gestión de red simplificada.",
      "No hay problemas de superposición de CIDR.",
      "Seguridad mejorada (conectividad privada)",
      "Escalable (miles de consumidores)",
      "Casos de uso:.",
      "Aplicaciones SaaS.",
      "Servicios compartidos.",
      "Servicios de terceros.",
      "Aplicaciones del mercado."
    ],
    "others": []
  },
  {
    "id": "06-19",
    "module": "Networking",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere implementar un acelerador global para su aplicación con direcciones IP estáticas y enrutamiento determinista. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon CloudFront",
      "B": "AWS Global Accelerator",
      "C": "Ruta 53 con enrutamiento de latencia",
      "D": "Equilibrio de carga elástico"
    },
    "explanation": "• AWS Global Accelerator proporciona IP estáticas de difusión directa\n• Enruta el tráfico a través de la red global de AWS\n• Conmutación por error rápida y determinista\n• Comprobaciones de estado y conmutación por error instantánea\nAcelerador global frente a CloudFront:\n| Característica | AWS Global Accelerator | Amazon CloudFront |\n|---------|---------------------|------------|\n| Caso de uso | Aplicaciones TCP/UDP | Contenido HTTP/HTTPS |\n| Almacenamiento en caché | No | Sí |\n| IP estática | Sí (2 anycast) | No |\n| Conmutación por error | Instantáneo (< 30s) | Basado en DNS |\n| Protocolo | TCP, UDP | HTTP, HTTPS, WebSocket |\nBeneficios del acelerador global:\n• IP estáticas (sin cambios de DNS)\n• Enrutamiento de red AWS (mejor rendimiento)\n• Enrutamiento basado en el estado\n• Marcaciones de tráfico para implementaciones azul/verde\nCasos de uso:\n• Juegos (UDP)\n• IoT\n• VoIP\n• Aplicaciones que no son HTTP",
    "why": [
      "Enruta el tráfico a través de la red global de AWS.",
      "Conmutación por error rápida y determinista.",
      "Comprobaciones de estado y conmutación por error instantánea.",
      "Acelerador global frente a CloudFront:.",
      "| Característica | AWS Global Accelerator | Amazon CloudFront |.",
      "|---------|---------------------|------------|.",
      "| Caso de uso | Aplicaciones TCP/UDP | Contenido HTTP/HTTPS |.",
      "| Almacenamiento en caché | No | Sí |.",
      "| IP estática | Sí (2 anycast) | No |.",
      "| Conmutación por error | Instantáneo (< 30s) | Basado en DNS |.",
      "| Protocolo | TCP, UDP | HTTP, HTTPS, WebSocket |.",
      "Beneficios del acelerador global:.",
      "IP estáticas (sin cambios de DNS)",
      "Enrutamiento de red AWS (mejor rendimiento)",
      "Enrutamiento basado en salud.",
      "El tráfico marca para implementaciones azul/verde.",
      "Casos de uso:.",
      "Juegos (UDP)",
      "IoT.",
      "VoIP.",
      "Aplicaciones no HTTP."
    ],
    "others": []
  },
  {
    "id": "06-20",
    "module": "Networking",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Una aplicación web recibe picos de tráfico repentinos. La empresa quiere proteger los servidores backend para que no se vean abrumados. ¿Qué se debe implementar a nivel de ACL de red?",
    "options": {
      "A": "Permitir todo el tráfico",
      "B": "Limitación de velocidad",
      "C": "Drenaje de conexión",
      "D": "Los NACL no admiten la limitación de tasas, use WAF"
    },
    "explanation": "• Las NACL proporcionan reglas básicas de permitir/denegar\n• Sin capacidades de limitación de velocidad\n• AWS WAF proporciona limitación de velocidad\nSoluciones de limitación de velocidad:\n| Servicio | Nivel | Capacidad |\n|---------|-------|------------|\n| WAF de AWS | Aplicación (L7) | Reglas basadas en tarifas |\n| Puerta de enlace API | API | Estrangulamiento |\n| Escudo avanzado | Red | Mitigación de ataques DDoS |\n| NACL | Red (L4) | Sin límite de tasa |\nRegla basada en tarifas WAF:\n• Bloquear IP que excedan el umbral de solicitud\n• ventana de tiempo de 5 minutos\n• Ejemplo: bloquear si > 2000 solicitudes en 5 minutos\nMejores prácticas para picos de tráfico:\n1. Auto Scaling para capacidad\n2. WAF para limitar la velocidad\n3. CloudFront para almacenamiento en caché\n4. ElastiCache para sesión/datos",
    "why": [
      "Las NACL proporcionan reglas básicas de permitir/denegar.",
      "Sin capacidades de limitación de velocidad.",
      "AWS WAF proporciona limitación de velocidad.",
      "Soluciones de limitación de velocidad:.",
      "| Servicio | Nivel | Capacidad |.",
      "|---------|-------|------------|.",
      "| WAF de AWS | Aplicación (L7) | Reglas basadas en tarifas |.",
      "| Puerta de enlace API | API | Estrangulamiento |.",
      "| Escudo avanzado | Red | Mitigación de DDoS |.",
      "| NACL | Red (L4) | Sin límite de velocidad |.",
      "Regla basada en tarifas WAF:.",
      "Bloquear IP que excedan el umbral de solicitud.",
      "Ventana de tiempo de 5 minutos.",
      "Ejemplo: bloquear si > 2000 solicitudes en 5 minutos.",
      "Mejores prácticas para picos de tráfico:.",
      "1.",
      "Auto Scaling para capacidad.",
      "2.",
      "WAF para limitar la velocidad.",
      "3.",
      "CloudFront para almacenamiento en caché.",
      "4.",
      "ElastiCache para sesión/datos."
    ],
    "others": []
  },
  {
    "id": "06-21",
    "module": "Networking",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa de juegos móviles necesita ofrecer experiencias multijugador de latencia ultrabaja a los usuarios de redes 5G en las principales ciudades. La solución debe ejecutar servicios de computación y almacenamiento de AWS en el borde de las redes de telecomunicaciones. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "AWS Wavelength",
      "B": "Amazon CloudFront",
      "C": "AWS Outposts",
      "D": "AWS Direct Connect"
    },
    "explanation": "• AWS Wavelength lleva la computación y el almacenamiento de AWS al borde de las redes 5G\n• Minimiza la latencia al ejecutar cargas de trabajo en ubicaciones de proveedores de telecomunicaciones\n• Ideal para aplicaciones móviles, juegos, AR/VR e IoT que requieren <10 ms de latencia\n• CloudFront es una CDN para contenido estático/dinámico, no para computación perimetral\n• Outposts es para centros de datos locales, no para el borde de las telecomunicaciones.\n• Direct Connect es para conectividad de red dedicada",
    "why": [
      "Minimiza la latencia al ejecutar cargas de trabajo en ubicaciones de proveedores de telecomunicaciones.",
      "Ideal para aplicaciones móviles, juegos, AR/VR e IoT que requieren una latencia <10 ms.",
      "CloudFront es una CDN para contenido estático/dinámico, no para computación perimetral.",
      "Outposts es para centros de datos locales, no para el borde de las telecomunicaciones.",
      "Direct Connect es para conectividad de red dedicada."
    ],
    "others": []
  },
  {
    "id": "07-1",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere cifrar datos en reposo en S3 con control total sobre las claves de cifrado, incluidas políticas de rotación personalizadas y pistas de auditoría. ¿Qué método de cifrado se debe utilizar?",
    "options": {
      "A": "SSE-S3 (cifrado del lado del servidor con claves administradas por S3)",
      "B": "SSE-KMS con claves administradas por AWS",
      "C": "SSE-KMS con claves administradas por el cliente (CMK)",
      "D": "SSE-C (Claves proporcionadas por el cliente)"
    },
    "explanation": "• SSE-KMS con claves administradas por el cliente (CMK) proporciona control total\n• Crear, administrar y rotar claves de cifrado\n• Registro de auditoría de CloudTrail para el uso de claves\n• Control de acceso detallado a través de políticas clave\n• Rotación de llaves automática o manual\nComparación de opciones de cifrado S3:\n| Método | Gestión de claves | Rotación | Seguimiento de auditoría | Costo |\n|--------|----------------|----------|-------------|------|\n| SSE-S3 | AWS | Mangos de AWS | No | Gratis |\n| SSE-KMS (gestionado por AWS) | AWS | Anual (automático) | Sí (CloudTrail) | Cargos de KMS API |\n| SSE-KMS (CMK) | Cliente | Bajo demanda/anual | Sí (CloudTrail) | Cargos de KMS API |\n| ESS-C | El cliente proporciona | Cliente gestiona | No | Gratis |\nBeneficios de CMK:\n• Programa de rotación personalizado (habilite la rotación anual automática)\n• Desactivar/activar teclas\n• Definir políticas y subvenciones clave\n• Acceso entre cuentas\n• Pista de auditoría completa",
    "why": [
      "Cree, administre y rote claves de cifrado.",
      "Seguimiento de auditoría de CloudTrail para el uso de claves.",
      "Control de acceso detallado a través de políticas clave.",
      "Rotación de llave automática o manual.",
      "Comparación de opciones de cifrado S3:.",
      "| Método | Gestión de claves | Rotación | Seguimiento de auditoría | Costo |.",
      "|--------|----------------|----------|-------------|------|.",
      "| SSE-S3 | AWS | Mangos de AWS | No | Gratis |.",
      "| SSE-KMS (gestionado por AWS) | AWS | Anual (automático) | Sí (CloudTrail) | Cargos de KMS API |.",
      "| SSE-KMS (CMK) | Cliente | Bajo demanda/anual | Sí (CloudTrail) | Cargos de KMS API |.",
      "| ESS-C | El cliente proporciona | Cliente gestiona | No | Gratis |.",
      "Beneficios de CMK:.",
      "Programa de rotación personalizado (habilite la rotación anual automática)",
      "Desactivar/activar claves.",
      "Definir políticas y subvenciones clave.",
      "Acceso entre cuentas.",
      "Pista de auditoría completa."
    ],
    "others": []
  },
  {
    "id": "07-2",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación necesita almacenar de forma segura las credenciales de la base de datos que deben rotarse automáticamente cada 30 días. ¿Qué servicio de AWS es MÁS apropiado?",
    "options": {
      "A": "Almacén de parámetros de AWS Systems Manager",
      "B": "AWS Secrets Manager",
      "C": "AWS KMS",
      "D": "Amazon S3 con cifrado"
    },
    "explanation": "• AWS Secrets Manager diseñado específicamente para secretos con rotación integrada\n• Rotación automática para RDS, DocumentDB, Redshift, Amazon Redshift\n• Rotación personalizada basada en Lambda para otros servicios\n• Versionado y rotación inmediata\nFunciones del Administrador de secretos:\n• Rotación automática (horario configurable)\n• Integración incorporada con bases de datos de AWS\n• Cifrado en reposo (KMS)\n• Control de acceso detallado (IAM)\n• Capacidad de auditoría (CloudTrail)\n• Replicación entre regiones\n• Gestión de versiones\nAdministrador de secretos frente a almacén de parámetros:\n| Característica | Gerente de Secretos | Almacenamiento de parámetros (estándar) | Almacenamiento de parámetros (avanzado) |\n|---------|----------------|------------------------------------|----------------------|\n| Rotación automática | Sí | No | No |\n| Integración RDS incorporada | Sí | No | No |\n| Costo | $0.40/secreto/mes + llamadas API | Gratis | $0.05/parámetro/mes |\n| Tamaño secreto | 64 KB | 4 KB | 8 KB |\n| Cifrado | Siempre (KMS) | Opcional (KMS) | Opcional (KMS) |\n| Caso de uso | Credenciales de base de datos, claves API | Configuración, secretos no rotativos | Configuración, valores mayores |\nConfiguración de rotación:",
    "why": [
      "Rotación automática para RDS, DocumentDB, Redshift, Amazon Redshift.",
      "Rotación personalizada basada en Lambda para otros servicios.",
      "Versionado y rotación inmediata.",
      "Características del administrador de secretos:.",
      "Rotación automática (horario configurable)",
      "Integración incorporada con bases de datos de AWS.",
      "Cifrado en reposo (KMS)",
      "Control de acceso detallado (IAM)",
      "Capacidad de auditoría (CloudTrail)",
      "Replicación entre regiones.",
      "Gestión de versiones.",
      "Administrador de secretos frente a almacén de parámetros:.",
      "| Característica | Gerente de Secretos | Almacenamiento de parámetros (estándar) | Almacén de parámetros (avanzado) |.",
      "|---------|----------------|------------------------------------|----------------------|.",
      "| Rotación automática | Sí | No | No |.",
      "| Integración RDS incorporada | Sí | No | No |.",
      "| Costo | $0.40/secreto/mes + llamadas API | Gratis | $0.05/parámetro/mes |.",
      "| Tamaño secreto | 64 KB | 4 KB | 8KB |.",
      "| Cifrado | Siempre (KMS) | Opcional (KMS) | Opcional (KMS) |.",
      "| Caso de uso | Credenciales de base de datos, claves API | Configuración, secretos no rotativos | Configuración, valores mayores |.",
      "Configuración de rotación:."
    ],
    "others": []
  },
  {
    "id": "07-3",
    "module": "Security",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa debe asegurarse de que todas las llamadas API en su organización de AWS se registren y almacenen durante 7 años para cumplir con las normas. ¿Qué servicios se deben configurar?",
    "options": {
      "A": "CloudWatch Logs con retención de 7 años",
      "B": "CloudTrail con almacenamiento S3 y ciclo de vida Glacier",
      "C": "AWS Config con almacenamiento a largo plazo",
      "D": "Registros de flujo de VPC"
    },
    "explanation": "• AWS CloudTrail registra todas las llamadas API (eventos de administración y datos)\n• Almacenar registros en S3 para conservarlos a largo plazo\n• Utilice políticas de ciclo de vida de S3 para realizar la transición a Glacier y optimizar costos.\nConfiguración de CloudTrail:\n1. Habilite CloudTrail en todas las regiones\n2. Almacenar registros en el depósito S3\n3. Habilite la validación del archivo de registro (verificación de integridad)\n4. Configure la política de ciclo de vida de S3:\n• Transición al Glaciar después de 90 días\n• Conservar durante 7 años\nCaracterísticas de CloudTrail:\n• Gestión de eventos: operaciones del plano de control (CreateInstance, DeleteBucket)\n• Eventos de datos: operaciones del plano de datos (S3 GetObject, invocaciones Lambda)\n• Insights Events: detecta actividad inusual\n• Multirregión: capture eventos de todas las regiones\n• Cuenta múltiple: seguimiento de la organización\n• Integridad del archivo de registro: detectar manipulación\nConfiguración de mejores prácticas:\nCiclo de vida de S3 para optimización de costos:",
    "why": [
      "AWS CloudTrail registra todas las llamadas API (eventos de administración y datos)",
      "Almacene registros en S3 para conservarlos a largo plazo.",
      "Utilice las políticas de ciclo de vida de S3 para realizar la transición a Glacier y optimizar costos.",
      "Configuración de CloudTrail:.",
      "1.",
      "Habilite CloudTrail en todas las regiones.",
      "2.",
      "Almacene los registros en el depósito S3.",
      "3.",
      "Habilitar la validación del archivo de registro (verificación de integridad)",
      "4.",
      "Configurar la política de ciclo de vida de S3:.",
      "Transición a Glaciar después de 90 días.",
      "Conservar durante 7 años.",
      "Características de CloudTrail:.",
      "Eventos de gestión: operaciones del plano de control (CreateInstance, DeleteBucket)",
      "Eventos de datos: operaciones del plano de datos (S3 GetObject, invocaciones Lambda)",
      "Eventos de Insights: detecta actividad inusual.",
      "Multirregión: capture eventos de todas las regiones.",
      "Cuenta múltiple: rastro de la organización.",
      "Integridad del archivo de registro: detectar manipulación.",
      "Configuración de mejores prácticas:.",
      "Ciclo de vida de S3 para optimización de costos:."
    ],
    "others": []
  },
  {
    "id": "07-4",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere detectar y responder automáticamente a las amenazas a la seguridad en su entorno de AWS. ¿Qué servicio proporciona detección inteligente de amenazas?",
    "options": {
      "A": "AWS CloudTrail",
      "B": "Amazon GuardDuty",
      "C": "AWS Config",
      "D": "AWS Security Hub"
    },
    "explanation": "• Amazon GuardDuty proporciona detección de amenazas inteligente y continua\n• Utiliza aprendizaje automático e inteligencia sobre amenazas.\n• Analiza múltiples fuentes de datos automáticamente\n• No hay infraestructura que gestionar\nFuentes de datos de GuardDuty:\n1. Eventos de AWS CloudTrail: llamadas API inusuales, implementaciones no autorizadas\n2. Registros de flujo de VPC: direcciones IP maliciosas, patrones de tráfico inusuales\n3. Registros DNS: algoritmos de generación de dominios, comunicación C&C\n4. Registros de auditoría de EKS: eventos de seguridad de Kubernetes\n5. Eventos de datos de S3: patrones de acceso sospechosos\n6. Actividad de la red Lambda: conexiones sospechosas\nTipos de hallazgos de GuardDuty:\n• Reconocimiento: escaneo de puertos, actividad API inusual\n• Compromiso de instancia: malware, minería de criptomonedas, puerta trasera\n• Compromiso de la cuenta: uso indebido de credenciales, comportamiento inusual\n• Compromiso del depósito: acceso sospechoso a S3\n• Persistencia: cambios de IAM, acceso no autorizado\nGuardDuty frente a otros servicios de seguridad:\n| Servicio | Propósito | Tipo de detección | Respuesta |\n|---------|---------|----------|----------|\n| Amazon GuardDuty | Detección de amenazas | Basado en ML automatizado | Reglas de EventBridge |\n| AWS Security Hub | Hallazgos centralizados | Agregación | Manual/automatizado |\n| Amazon Inspector | Escaneo de vulnerabilidades | Escaneos con agente/sin agente | Remediación manual |\n| Macie | Protección de datos | PII/datos sensibles | Manual/automatizado |\n| Configuración | Cumplimiento | Basado en reglas | Acciones de remediación |\nPatrón de respuesta automatizado:\nBúsqueda de GuardDuty → EventBridge → Lambda → Aislar instancia/Bloquear IP",
    "why": [
      "Utiliza aprendizaje automático e inteligencia sobre amenazas.",
      "Analiza múltiples fuentes de datos automáticamente.",
      "No hay infraestructura que gestionar.",
      "Fuentes de datos de GuardDuty:.",
      "1.",
      "Eventos de AWS CloudTrail: llamadas API inusuales, implementaciones no autorizadas.",
      "2.",
      "Registros de flujo de VPC: direcciones IP maliciosas, patrones de tráfico inusuales.",
      "3.",
      "Logs DNS: Algoritmos de generación de dominios, comunicación C&C.",
      "4.",
      "Registros de auditoría de EKS: eventos de seguridad de Kubernetes.",
      "5.",
      "Eventos de datos de S3: patrones de acceso sospechosos.",
      "6.",
      "Actividad de la red Lambda: conexiones sospechosas.",
      "Tipos de hallazgos de GuardDuty:.",
      "Reconocimiento: escaneo de puertos, actividad API inusual.",
      "Compromiso de instancia: malware, minería de criptomonedas, puerta trasera.",
      "Compromiso de cuenta: uso indebido de credenciales, comportamiento inusual.",
      "Compromiso del depósito: acceso sospechoso a S3.",
      "Persistencia: cambios de IAM, acceso no autorizado.",
      "GuardDuty frente a otros servicios de seguridad:.",
      "| Servicio | Propósito | Tipo de detección | Respuesta |.",
      "|---------|---------|----------------|----------|.",
      "| Amazon GuardDuty | Detección de amenazas | Basado en ML automatizado | Reglas de EventBridge |.",
      "| AWS Security Hub | Hallazgos centralizados | Agregación | Manual/automatizado |.",
      "| Amazon Inspector | Escaneo de vulnerabilidades | Escaneos con agente/sin agente | Remediación manual |.",
      "| Macie | Protección de datos | PII/datos sensibles | Manual/automatizado |.",
      "| Configuración | Cumplimiento | Basado en reglas | Acciones de remediación |.",
      "Patrón de respuesta automatizado:.",
      "Búsqueda de GuardDuty → EventBridge → Lambda → Aislar instancia/Bloquear IP."
    ],
    "others": []
  },
  {
    "id": "07-5",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa debe asegurarse de que todos los depósitos de S3 estén cifrados y no sean accesibles públicamente. ¿Qué servicio puede monitorear y evaluar continuamente el cumplimiento?",
    "options": {
      "A": "AWS CloudTrail",
      "B": "AWS Config",
      "C": "Amazon GuardDuty",
      "D": "AWS Trusted Advisor"
    },
    "explanation": "• AWS Config monitorea y registra continuamente las configuraciones de recursos\n• Evalúa el cumplimiento frente a las configuraciones deseadas\n• Proporciona historial de configuración y seguimiento de cambios\n• Remediación automática o manual\nCaracterísticas clave de AWS Config:\nReglas de configuración (administradas y personalizadas):\n• `s3-bucket-lectura-pública-prohibida`\n• `s3-bucket-escritura-pública-prohibida`\n• `s3-bucket-server-side-encryption-habilitado`\n• `volúmenes-cifrados`\n• `etiquetas-requeridas`\n• `amis-aprobados-por-id`\nComponentes de configuración:\n1. Grabador de configuración: captura configuraciones de recursos\n2. Reglas de AWS Config: defina las configuraciones deseadas\n3. Acciones de remediación: correcciones automáticas a través de SSM Automation\n4. Paquetes de conformidad: reglas de cumplimiento empaquetadas\n5. Agregadores: vista de múltiples cuentas/región",
    "why": [
      "Evalúa el cumplimiento con las configuraciones deseadas.",
      "Proporciona historial de configuración y seguimiento de cambios.",
      "Remediación automática o manual.",
      "Características clave de AWS Config:.",
      "Reglas de configuración (administradas y personalizadas):",
      "`s3-bucket-lectura-pública-prohibida`.",
      "`s3-bucket-escritura-pública-prohibida`.",
      "`s3-bucket-server-side-encryption-enabled`.",
      "`volúmenes-cifrados`.",
      "`etiquetas requeridas`.",
      "`amis-aprobados-por-id`.",
      "Componentes de configuración:.",
      "1.",
      "Grabador de configuración: captura configuraciones de recursos.",
      "2.",
      "Reglas de configuración: define las configuraciones deseadas.",
      "3.",
      "Acciones de remediación: correcciones automáticas a través de SSM Automation.",
      "4.",
      "Paquetes de conformidad: reglas de cumplimiento empaquetadas.",
      "5.",
      "Agregadores: vista de múltiples cuentas/regiones."
    ],
    "others": []
  },
  {
    "id": "07-6",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una organización desea administrar de forma centralizada los hallazgos de seguridad de múltiples cuentas y servicios de seguridad de AWS. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon GuardDuty",
      "B": "AWS Security Hub",
      "C": "AWS Config",
      "D": "Inspector de Amazon"
    },
    "explanation": "• AWS Security Hub proporciona una vista centralizada de seguridad y cumplimiento\n• Agrega hallazgos de múltiples servicios y cuentas de AWS\n• Cumplimiento de estándares de seguridad (CIS, PCI-DSS, mejores prácticas de seguridad fundacionales de AWS)\n• Comprobaciones de cumplimiento automatizadas\nIntegraciones del centro de seguridad:\nServicios de AWS:\n• Amazon GuardDuty (detección de amenazas)\n• Amazon Inspector (evaluación de vulnerabilidad)\n• Amazon Macie (protección de datos)\n• Analizador de acceso de AWS IAM (análisis de políticas de IAM)\n• AWS Firewall Manager (administración de reglas de firewall)\n• AWS Config (reglas de cumplimiento)\n• Amazon Detective (investigación de seguridad)\nIntegraciones de terceros:\n• Splunk, Palo Alto Networks, Trend Micro, etc.\nCaracterísticas del centro de seguridad:\n1. Panel de control consolidado: panel único\n2. Estándares de seguridad: Fundamentos CIS AWS, PCI-DSS, Mejores prácticas de AWS\n3. Verificaciones automatizadas: evaluación continua del cumplimiento\n4. Búsqueda de agregación: de todos los servicios integrados\n5. Información personalizada: cree vistas personalizadas\n6. Corrección automatizada: EventBridge + Lambda/SSM\nFlujo de trabajo del centro de seguridad:\nCasos de uso:\n• Gestión de seguridad multicuenta\n• Informes de cumplimiento\n• Evaluación de la postura de seguridad\n• Flujos de trabajo de remediación automatizados",
    "why": [
      "Agrega hallazgos de múltiples servicios y cuentas de AWS.",
      "Cumplimiento de estándares de seguridad (CIS, PCI-DSS, mejores prácticas de seguridad fundamentales de AWS)",
      "Comprobaciones de cumplimiento automatizadas.",
      "Integraciones del centro de seguridad:.",
      "Servicios de AWS:.",
      "Amazon GuardDuty (detección de amenazas)",
      "Amazon Inspector (evaluación de vulnerabilidad)",
      "Amazon Macie (protección de datos)",
      "Analizador de acceso de AWS IAM (análisis de políticas de IAM)",
      "AWS Firewall Manager (administración de reglas de firewall)",
      "AWS Config (reglas de cumplimiento)",
      "Amazon Detective (investigación de seguridad)",
      "Integraciones de terceros:.",
      "Splunk, Palo Alto Networks, Trend Micro, etc.",
      "Características del centro de seguridad:.",
      "1.",
      "Panel de control consolidado: Panel único de vidrio.",
      "2.",
      "Estándares de seguridad: CIS AWS Foundations, PCI-DSS, AWS Best Practices.",
      "3.",
      "Comprobaciones automatizadas: Evaluación continua del cumplimiento.",
      "4.",
      "Búsqueda de agregación: de todos los servicios integrados.",
      "5.",
      "Información personalizada: cree vistas personalizadas.",
      "6.",
      "Corrección automatizada: EventBridge + Lambda/SSM.",
      "Flujo de trabajo del centro de seguridad:.",
      "Casos de uso:.",
      "Gestión de seguridad multicuenta.",
      "Informes de cumplimiento.",
      "Evaluación de la postura de seguridad.",
      "Flujos de trabajo de remediación automatizados."
    ],
    "others": []
  },
  {
    "id": "07-7",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere detectar cuándo los depósitos de S3 contienen información de identificación personal (PII) confidencial. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon GuardDuty",
      "B": "Amazon Macie",
      "C": "AWS Config",
      "D": "Inspector de Amazon"
    },
    "explanation": "• Amazon Macie es un servicio de seguridad de datos que descubre y protege datos confidenciales.\n• Utiliza aprendizaje automático para identificar PII, datos financieros y credenciales.\n• Inventario y clasificación automatizados de depósitos S3\n• Monitoreo y alertas continuos\nCapacidades de Macie:\nDescubrimiento de datos:\n• Números de tarjetas de crédito\n• Números de seguridad social\n• Números de pasaporte\n• Números de licencia de conducir\n• Números de cuentas bancarias\n• Información de salud personal\n• Credenciales de autenticación\nCaracterísticas de Macie:\n1. Trabajos de descubrimiento automatizados: escanear depósitos de S3\n2. Tipos de datos confidenciales: identificadores personalizados y prediseñados\n3. Inventario de depósitos: evaluación completa del depósito de S3\n4. Hallazgos de políticas: acceso público, cifrado, problemas de replicación\n5. Hallazgos de datos confidenciales: ubicación y tipo de datos confidenciales\n6. Integración: Security Hub, EventBridge para automatización\nTipos de hallazgos de Macie:\n| Categoría | Ejemplos |\n|----------|----------|\n| Hallazgos de políticas | Depósito público, sin cifrar, sin versiones |\n| Hallazgos de datos confidenciales | PII detectada, credenciales encontradas |\nPatrón de respuesta automatizado:\nMacie frente a otros servicios:\n• Macie: Privacidad de datos, detección de PII en S3\n• GuardDuty: detección de amenazas, actividad maliciosa\n• Inspector: escaneo de vulnerabilidades (EC2, ECR, Lambda)\n• Config: Cumplimiento de la configuración",
    "why": [
      "Utiliza el aprendizaje automático para identificar PII, datos financieros y credenciales.",
      "Inventario y clasificación automatizados de depósitos S3.",
      "Monitoreo y alertas continuos.",
      "Capacidades de Macie:.",
      "Descubrimiento de datos:.",
      "Números de tarjetas de crédito.",
      "Números de seguridad social.",
      "Números de pasaporte.",
      "Números de licencia de conducir.",
      "Números de cuentas bancarias.",
      "Información personal de salud.",
      "Credenciales de autenticación.",
      "Características de Macie:.",
      "1.",
      "Trabajos de descubrimiento automatizados: escanear depósitos de S3.",
      "2.",
      "Tipos de datos confidenciales: identificadores personalizados y prediseñados.",
      "3.",
      "Inventario de depósitos: evaluación completa del depósito de S3.",
      "4.",
      "Hallazgos de políticas: acceso público, cifrado, problemas de replicación.",
      "5.",
      "Hallazgos de datos confidenciales: ubicación y tipo de datos confidenciales.",
      "6.",
      "Integración: Security Hub, EventBridge para automatización.",
      "Tipos de hallazgos de Macie:.",
      "| Categoría | Ejemplos |.",
      "|----------|----------|.",
      "| Hallazgos de políticas | Depósito público, sin cifrar, sin control de versiones |.",
      "| Hallazgos de datos confidenciales | PII detectada, credenciales encontradas |.",
      "Patrón de respuesta automatizado:.",
      "Macie frente a otros servicios:.",
      "Macie: Privacidad de datos, detección de PII en S3.",
      "GuardDuty: Detección de amenazas, actividad maliciosa.",
      "Inspector: escaneo de vulnerabilidades (EC2, ECR, Lambda)",
      "Config: Cumplimiento de la configuración."
    ],
    "others": []
  },
  {
    "id": "07-8",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere analizar las políticas de IAM para identificar recursos compartidos con entidades externas. ¿Qué servicio proporciona esta capacidad?",
    "options": {
      "A": "Simulador de políticas de AWS IAM",
      "B": "Analizador de acceso IAM",
      "C": "AWS Trusted Advisor",
      "D": "AWS Config"
    },
    "explanation": "• IAM Access Analyzer utiliza razonamiento automatizado para analizar políticas de recursos\n• Identifica recursos compartidos con directores externos.\n• Valida las políticas de IAM frente a las mejores prácticas.\n• Genera hallazgos para su revisión\nCaracterísticas del analizador de acceso IAM:\n1. Análisis de Acceso Externo:\n• Cubos S3\n• Roles de IAM\n• Claves KMS\n• Funciones lambda\n• Colas SQS\n• Secretos de AWS Secrets Manager\n• tópicos de Amazon SNS\n2. Validación de Política:\n• Revisar la gramática de las políticas\n• Advertencias de seguridad\n• Errores y sugerencias\n• Recomendaciones de mejores prácticas\n3. Generación de políticas:\n• Generar políticas basadas en la actividad de CloudTrail\n• Políticas de privilegios mínimos\n• Revisar y perfeccionar\nTipos de búsqueda:\nAnalizador de acceso frente a otras herramientas:\n| Herramienta | Propósito |\n|------|---------|\n| Analizador de acceso | Acceso externo, validación de políticas, generación de políticas |\n| Simulador de políticas | Efectos de la política de prueba |\n| Asesor de confianza | Mejores prácticas, optimización de costes |\n| Configuración | Cumplimiento de la configuración de recursos |\nCasos de uso:\n• Identificar el acceso externo no deseado\n• Validar políticas antes de la implementación\n• Generar políticas de mínimos privilegios\n• Monitoreo continuo de cambios de acceso",
    "why": [
      "Identifica recursos compartidos con directores externos.",
      "Valida las políticas de IAM frente a las mejores prácticas.",
      "Genera hallazgos para su revisión.",
      "Características del analizador de acceso IAM:.",
      "1.",
      "Análisis de acceso externo:.",
      "Cucharones S3.",
      "Funciones de IAM.",
      "Claves KMS.",
      "Funciones lambda.",
      "Colas SQS.",
      "Secretos del administrador de secretos.",
      "tópicos de Amazon SNS.",
      "2.",
      "Validación de Política:.",
      "Verifique la gramática de las políticas.",
      "Advertencias de seguridad.",
      "Errores y sugerencias.",
      "Recomendaciones de mejores prácticas.",
      "3.",
      "Generación de políticas:.",
      "Genere políticas basadas en la actividad de CloudTrail.",
      "Políticas de privilegios mínimos.",
      "Revisar y perfeccionar.",
      "Tipos de búsqueda:.",
      "Analizador de acceso frente a otras herramientas:.",
      "| Herramienta | Propósito |.",
      "|------|---------|.",
      "| Analizador de acceso | Acceso externo, validación de políticas, generación de políticas |.",
      "| Simulador de políticas | Probar los efectos de las políticas |.",
      "| Asesor de confianza | Mejores prácticas, optimización de costes |.",
      "| Configuración | Cumplimiento de la configuración de recursos |.",
      "Casos de uso:.",
      "Identifique el acceso externo no deseado.",
      "Validar las políticas antes de la implementación.",
      "Generar políticas de mínimos privilegios.",
      "Monitoreo continuo de cambios de acceso."
    ],
    "others": []
  },
  {
    "id": "07-9",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación web necesita protección contra vulnerabilidades web comunes como la inyección SQL y secuencias de comandos entre sitios (XSS). ¿Qué servicio de AWS proporciona esta protección?",
    "options": {
      "A": "AWS Shield",
      "B": "WAF de AWS",
      "C": "Grupos de seguridad",
      "D": "ACL de red"
    },
    "explanation": "• AWS WAF (Web Application Firewall) protege contra vulnerabilidades web comunes\n• Filtra solicitudes HTTP/HTTPS según reglas\n• Se integra con CloudFront, ALB, API Gateway y AppSync\n• Reglas administradas y reglas personalizadas\nCapacidades de AWS WAF:\n1. Grupos de reglas administrados:\n• Reglas administradas por AWS (conjunto de reglas principales, entradas incorrectas conocidas, base de datos SQL, etc.)\n• Reglas de AWS Marketplace (de terceros)\n• Reglas basadas en tarifas (protección DDoS)\n2. Reglas personalizadas:\n• Filtrado de direcciones IP\n• Bloqueo geográfico\n• Coincidencia de cadenas/expresiones regulares\n• Restricciones de tamaño\n• Protección contra inyección SQL\n• Protección XSS\n3. Solicitar filtrado:\nComponentes WAF:\n| Componente | Descripción |\n|-----------|-------------|\n| ACL web | Contenedor para reglas |\n| Reglas | Condiciones del partido + acción |\n| Grupos de reglas | Colección de reglas reutilizables |\n| Conjuntos de propiedad intelectual | Lista de direcciones IP |\n| Conjuntos de patrones de expresiones regulares | Patrones de expresiones regulares |\nRegla basada en tarifas (protección DDoS):\nWAF contra escudo:\n• WAF: filtrado a nivel de aplicación (Capa 7), reglas personalizadas\n• Shield Standard: Protección DDoS de red/transporte (Capa 3/4), automática, gratuita\n• Shield Advanced: protección DDoS mejorada, protección de costos, soporte 24 horas al día, 7 días a la semana\nReglas comunes de WAF:\n1. Bloquear los intentos de inyección de SQL\n2. Bloquear ataques XSS\n3. Limitación de tarifas (prevenir abusos)\n4. Restricciones geográficas\n5. Lista negra/lista blanca de IP\n6. Coincidencia de cadena/patrón",
    "why": [
      "Filtra solicitudes HTTP/HTTPS según reglas.",
      "Se integra con CloudFront, ALB, API Gateway y AppSync.",
      "Reglas administradas y reglas personalizadas.",
      "Capacidades de AWS WAF:.",
      "1.",
      "Grupos de reglas administrados:.",
      "Reglas administradas por AWS (conjunto de reglas principales, entradas incorrectas conocidas, base de datos SQL, etc.)",
      "Reglas de AWS Marketplace (terceros)",
      "Reglas basadas en tarifas (protección DDoS)",
      "2.",
      "Reglas personalizadas:.",
      "Filtrado de direcciones IP.",
      "Bloqueo geográfico.",
      "Coincidencia de cadenas/expresiones regulares.",
      "Restricciones de tamaño.",
      "Protección contra inyección SQL.",
      "Protección XSS.",
      "3.",
      "Solicitar filtrado:.",
      "Componentes WAF:.",
      "| Componente | Descripción |.",
      "|-----------|-------------|.",
      "| ACL web | Contenedor de reglas |.",
      "| Reglas | Condiciones del partido + acción |.",
      "| Grupos de reglas | Colección de reglas reutilizables |.",
      "| Conjuntos de propiedad intelectual | Lista de direcciones IP |.",
      "| Conjuntos de patrones de expresiones regulares | Patrones de expresiones regulares |.",
      "Regla basada en tarifas (protección DDoS):",
      "WAF contra Escudo:.",
      "WAF: filtrado a nivel de aplicación (Capa 7), reglas personalizadas.",
      "Shield Standard: Protección DDoS de red/transporte (Capa 3/4), automática, gratuita.",
      "Shield Advanced: protección DDoS mejorada, protección de costos, soporte 24 horas al día, 7 días a la semana.",
      "Reglas comunes de WAF:.",
      "1.",
      "Bloquear intentos de inyección SQL.",
      "2.",
      "Bloquea ataques XSS.",
      "3.",
      "Limitación de velocidad (prevención de abusos)",
      "4.",
      "Restricciones geográficas.",
      "5.",
      "Lista negra/lista blanca de IP.",
      "6.",
      "Coincidencia de cadena/patrón."
    ],
    "others": []
  },
  {
    "id": "07-10",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere proteger su aplicación de ataques DDoS y garantizar la protección de costes durante ataques a gran escala. ¿Qué servicio ofrece estas características?",
    "options": {
      "A": "WAF de AWS",
      "B": "AWS Shield Standard",
      "C": "AWS Shield Advanced",
      "D": "Grupos de seguridad"
    },
    "explanation": "• AWS Shield Advanced proporciona protección DDoS mejorada con protección de costos\n• Acceso 24 horas al día, 7 días a la semana al Equipo de respuesta DDoS (DRT)\n• Detección y mitigación avanzada de ataques\n• Protección de costos contra cargos de escala durante ataques\nComparación de escudos:\n| Característica | Estándar de escudo | Escudo avanzado |\n|---------|----------------|------------------|\n| Costo | Gratis | $3,000/mes |\n| Nivel de protección | Red/Transporte (L3/L4) | Red + Aplicación (L3/L4/L7) |\n| Equipo de respuesta DDoS | No | Acceso 24 horas al día, 7 días a la semana |\n| Protección de costos | No | Sí (escalamiento de cargos) |\n| Detección avanzada | Básico | Mejorado, en tiempo real |\n| Detección basada en la salud | No | Sí |\n| Capa de aplicación | Vía WAF | Incluido + WAF |\nFunciones avanzadas del escudo:\n1. Protección de costos:\n• Protege contra el aumento de cargas durante ataques DDoS\n• Cubre: EC2, ELB, CloudFront, Route 53, Global Accelerator\n2. Equipo de respuesta DDoS (DRT):\n• Soporte experto 24 horas al día, 7 días a la semana\n• Análisis y mitigación de ataques\n• Reglas de mitigación personalizadas\n3. Métricas avanzadas:\n• Visibilidad de ataques en tiempo real\n• Datos históricos de ataques\n• Integración con CloudWatch\n4. Alcance de la protección:\n• Distribuciones de CloudFront\n• Zonas alojadas de la Ruta 53\n• Aceleradores Global Accelerator\n• Balanceadores de carga elásticos\n• Direcciones IP elásticas EC2\n5. Detección basada en la salud:\n• Supervisa el estado de las aplicaciones\n• Mitigación proactiva\n• Integración de controles de salud de la Ruta 53\nCuándo utilizar Shield Advanced:\n• Aplicaciones críticas para el negocio\n• Sitios web de alto perfil\n• No tolera el tiempo de inactividad\n• Necesita protección de costos\n• Quiere soporte DRT experto\nArquitectura de mejores prácticas:",
    "why": [
      "Acceso 24 horas al día, 7 días a la semana al equipo de respuesta DDoS (DRT)",
      "Detección y mitigación avanzada de ataques.",
      "Protección de costos contra cargos de escala durante ataques.",
      "Comparación de escudos:.",
      "| Característica | Estándar de escudo | Escudo Avanzado |.",
      "|---------|----------------|------------------|.",
      "| Costo | Gratis | $3,000/mes |.",
      "| Nivel de protección | Red/Transporte (L3/L4) | Red + Aplicación (L3/L4/L7) |.",
      "| Equipo de respuesta DDoS | No | Acceso 24 horas al día, 7 días a la semana |.",
      "| Protección de costos | No | Sí (escalamiento de cargos) |.",
      "| Detección avanzada | Básico | Mejorado, en tiempo real |.",
      "| Detección basada en la salud | No | Sí |.",
      "| Capa de aplicación | Vía WAF | Incluido + WAF |.",
      "Funciones avanzadas del escudo:.",
      "1.",
      "Protección de costos:.",
      "Protege contra el aumento de cargas durante ataques DDoS.",
      "Cubre: EC2, ELB, CloudFront, Ruta 53, Global Accelerator.",
      "2.",
      "Equipo de respuesta DDoS (DRT):.",
      "Soporte experto 24 horas al día, 7 días a la semana.",
      "Análisis y mitigación de ataques.",
      "Reglas de mitigación personalizadas.",
      "3.",
      "Métricas avanzadas:.",
      "Visibilidad de ataques en tiempo real.",
      "Datos históricos de ataques.",
      "Integración con CloudWatch.",
      "4.",
      "Alcance de la protección:.",
      "Distribuciones de CloudFront.",
      "Zonas alojadas de la Ruta 53.",
      "Aceleradores Global Accelerator.",
      "Balanceadores de carga elásticos.",
      "Direcciones IP elásticas EC2.",
      "5.",
      "Detección basada en la salud:.",
      "Supervisa el estado de la aplicación.",
      "Mitigación proactiva.",
      "Integración de controles de salud de la Ruta 53.",
      "Cuándo utilizar Shield Advanced:",
      "Aplicaciones críticas para el negocio.",
      "Sitios web de alto perfil.",
      "No tolera el tiempo de inactividad.",
      "Necesita protección de costos.",
      "Quiere soporte DRT experto.",
      "Arquitectura de mejores prácticas:."
    ],
    "others": []
  },
  {
    "id": "07-11",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita escanear instancias EC2 e imágenes de contenedores en busca de vulnerabilidades de software. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon GuardDuty",
      "B": "Inspector de Amazon",
      "C": "AWS Security Hub",
      "D": "Amazon Macie"
    },
    "explanation": "• Amazon Inspector proporciona evaluación de vulnerabilidad automatizada\n• Escanea instancias EC2, imágenes de contenedores (ECR), funciones Lambda\n• Análisis de accesibilidad de la red\n• Detección de vulnerabilidad de paquetes (CVE)\nCaracterísticas de Amazon Inspector v2:\n1. Escaneo continuo:\n• Evaluación continua y automatizada\n• No se necesitan agentes para ECR\n• Agente SSM para EC2 (implementación automática)\n2. Detección de vulnerabilidades:\n• CVE (vulnerabilidades y exposiciones comunes)\n• Paquetes de sistema operativo\n• Dependencias de aplicaciones\n• Exposición de la red\n3. Tipos de recursos:\n• Instancias EC2: vulnerabilidades del sistema operativo y de las aplicaciones\n• Imágenes de contenedores ECR: vulnerabilidades de las imágenes\n• Funciones Lambda: vulnerabilidades de código y paquete\n4. Puntuación de riesgo:\n• Puntuación del inspector (0-10)\n• Gravedad: Crítica, Alta, Media, Baja, Informativa\n• Priorización basada en explotabilidad y CVSS\n5. Integración:\n• AWS Security Hub (hallazgos centralizados)\n• EventBridge (remediación automatizada)\n• AWS Organizations (varias cuentas)\nEjemplo de hallazgo del inspector:\nInspector frente a otros servicios:\n• Inspector: escaneo de vulnerabilidades (EC2, ECR, Lambda)\n• GuardDuty: Detección de amenazas (actividad maliciosa)\n• Macie: Protección de datos (PII en S3)\n• Config: Cumplimiento de la configuración\nRemediación automatizada:",
    "why": [
      "Escanea instancias EC2, imágenes de contenedores (ECR), funciones Lambda.",
      "Análisis de accesibilidad de la red.",
      "Detección de vulnerabilidad de paquetes (CVE)",
      "Características de Amazon Inspector v2:.",
      "1.",
      "Escaneo continuo:.",
      "Evaluación automatizada y continua.",
      "No se necesitan agentes para ECR.",
      "Agente SSM para EC2 (implementación automática)",
      "2.",
      "Detección de vulnerabilidades:.",
      "CVE (vulnerabilidades y exposiciones comunes)",
      "Paquetes de SO.",
      "Dependencias de la aplicación.",
      "Exposición de la red.",
      "3.",
      "Tipos de recursos:.",
      "Instancias EC2: vulnerabilidades del sistema operativo y de las aplicaciones.",
      "Imágenes de contenedores ECR: vulnerabilidades de imágenes.",
      "Funciones Lambda: vulnerabilidades de código y paquete.",
      "4.",
      "Puntuación de riesgo:.",
      "Puntuación del inspector (0-10)",
      "Gravedad: Crítica, Alta, Media, Baja, Informativa.",
      "Priorización basada en explotabilidad y CVSS.",
      "5.",
      "Integración:.",
      "AWS Security Hub (hallazgos centralizados)",
      "EventBridge (remediación automatizada)",
      "AWS Organizations (varias cuentas)",
      "Ejemplo de hallazgo del inspector:.",
      "Inspector frente a otros servicios:.",
      "Inspector: escaneo de vulnerabilidades (EC2, ECR, Lambda)",
      "GuardDuty: Detección de amenazas (actividad maliciosa)",
      "Macie: Protección de datos (PII en S3)",
      "Config: Cumplimiento de la configuración.",
      "Remediación automatizada:."
    ],
    "others": []
  },
  {
    "id": "07-12",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere exigir que todas las instancias EC2 nuevas tengan volúmenes de EBS cifrados. ¿Cómo se puede hacer cumplir esto en toda la organización?",
    "options": {
      "A": "Regla de AWS Config con corrección manual",
      "B": "Política de control de servicios (SCP) en AWS Organizations",
      "C": "Política de IAM para cada usuario",
      "D": "Función AWS Lambda para verificar instancias"
    },
    "explanation": "• Las políticas de control de servicios (SCP) proporcionan controles preventivos centralizados\n• Se aplica a nivel de organización, unidad organizativa o cuenta.\n• No puede ser anulado por nadie en las cuentas de miembros\n• Límites máximos de permiso\nEjemplo de SCP: aplicar EBS cifrado:\nSCP frente a otros controles:\n| Método | Prevención | Detección | Alcance | Anular |\n|--------|-----------|-----------|-------|----------|\n| SCP | Sí | No | Organización/OU/Cuenta | No se puede anular |\n| Política de IAM | Sí | No | Usuario/Rol/Grupo | El administrador puede cambiar |\n| Regla de configuración | No | Sí | Cuenta | Sólo detección |\n| lambda | Posible | Sí | Personalizado | Complejo |\nMejores prácticas de SCP:\n1. Controles Preventivos:\n• Denegar recursos no cifrados\n• Denegar depósitos públicos de S3\n• Restringir regiones\n• Evitar acciones del usuario root\n2. Ejemplo: restricción de región:\n3. Ejemplo: Denegar S3 público:\nLógica de evaluación de SCP:\n1. Denegación explícita en SCP → DENEGAR\n2. SCP permite + IAM permite → PERMITIR\n3. Predeterminado → NEGAR\nSeguridad multicapa:\n• SCP: Preventivo (a nivel de toda la organización)\n• Configuración: Detective (monitoreo de cumplimiento)\n• Corrección automatizada: correctiva (corregir incumplimientos)",
    "why": [
      "Se aplica a nivel de organización, unidad organizativa o cuenta.",
      "Nadie en las cuentas de miembros puede anularlo.",
      "Límites máximos de permiso.",
      "Ejemplo de SCP: aplicar EBS cifrado:.",
      "SCP frente a otros controles:.",
      "| Método | Prevención | Detección | Alcance | Anular |.",
      "|--------|-----------|-----------|-------|----------|.",
      "| SCP | Sí | No | Organización/OU/Cuenta | No se puede anular |.",
      "| Política de IAM | Sí | No | Usuario/Rol/Grupo | El administrador puede cambiar |.",
      "| Regla de configuración | No | Sí | Cuenta | Sólo detección |.",
      "| lambda | Posible | Sí | Personalizado | Complejo |.",
      "Mejores prácticas de SCP:.",
      "1.",
      "Controles preventivos:.",
      "Denegar recursos no cifrados.",
      "Denegar depósitos públicos de S3.",
      "Restringir regiones.",
      "Evitar acciones del usuario root.",
      "2.",
      "Ejemplo: restricción de región:.",
      "3.",
      "Ejemplo: Denegar S3 público:.",
      "Lógica de evaluación de SCP:.",
      "1.",
      "Denegación explícita en SCP → DENEGAR.",
      "2.",
      "SCP permite + IAM permite → PERMITIR.",
      "3.",
      "Predeterminado → NEGAR.",
      "Seguridad multicapa:.",
      "SCP: Preventivo (a nivel de toda la organización)",
      "Configuración: Detective (monitoreo de cumplimiento)",
      "Corrección automatizada: correctiva (corregir no conformes)"
    ],
    "others": []
  },
  {
    "id": "07-13",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa debe asegurarse de que los objetos S3 no se puedan eliminar durante 7 años y que ni siquiera la cuenta raíz pueda anular esto. ¿Qué característica se debe configurar?",
    "options": {
      "A": "Versiones de S3 con políticas de ciclo de vida",
      "B": "Bloqueo de objetos S3 en modo de cumplimiento",
      "C": "Bloqueo de objetos S3 en modo de gobernanza",
      "D": "Eliminar MFA"
    },
    "explanation": "• El bloqueo de objetos de S3 en el modo de cumplimiento aplica WORM (escritura una vez, lectura múltiple)\n• Nadie puede anularlo, ni siquiera la cuenta raíz.\n• El período de retención no se puede acortar\n• Las versiones de objetos no se pueden eliminar durante el período de retención.\nModos de bloqueo de objetos:\n| Característica | Modo de gobernanza | Modo de cumplimiento |\n|---------|----------------|------------------|\n| Anular | Sí (con permiso especial) | No (ni siquiera el root puede) |\n| Eliminar | Se puede eliminar con permiso | No se puede eliminar |\n| Cambio de retención | Se puede acortar con permiso | No se puede acortar |\n| Caso de uso | Gobernanza interna | Cumplimiento normativo |\nComponentes de bloqueo de objetos:\n1. Modos de retención:\n• Cumplimiento: cumplimiento normativo inmutable\n• Gobernanza: políticas internas flexibles\n2. Período de retención:\n• Periodo fijo (días/años)\n• Proteger hasta la fecha\n3. Retención Legal:\n• Protección indefinida\n• Alternar encendido/apagado\n• Independiente del período de retención\n• Requiere permiso `s3:PutObjectLegalHold`\nRequisitos de configuración:\n1. El control de versiones debe estar habilitado (el bloqueo de objetos requiere control de versiones)\n2. Bloqueo de objetos habilitado en la creación del depósito (no se puede habilitar más adelante)\n3. Configuración de retención predeterminada (opcional, puede ser por objeto)\nEjemplo de modo de cumplimiento:\nEjemplo de retención legal:\nCasos de uso de cumplimiento:\n• Regla SEC 17a-4 (servicios financieros)\n• HIPAA (atención médica)\n• FINRA (industria financiera)\n• Documentos legales\n• Archivos regulatorios\nBloqueo de objetos frente a otra protección:\n• Control de versiones: puede eliminar versiones\n• Eliminación de MFA: agrega MFA pero aún puede eliminar\n• Gobernanza de bloqueo de objetos: se puede anular con permisos\n• Cumplimiento del bloqueo de objetos: verdadera inmutabilidad",
    "why": [
      "Nadie puede anularlo, ni siquiera la cuenta raíz.",
      "El período de retención no se puede acortar.",
      "Las versiones de objetos no se pueden eliminar durante el período de retención.",
      "Modos de bloqueo de objetos:.",
      "| Característica | Modo de gobernanza | Modo de cumplimiento |.",
      "|---------|----------------|------------------|.",
      "| Anular | Sí (con permiso especial) | No (ni siquiera el root puede) |.",
      "| Eliminar | Se puede eliminar con permiso | No se puede eliminar |.",
      "| Cambio de retención | Se puede acortar con permiso | No se puede acortar |.",
      "| Caso de uso | Gobernanza interna | Cumplimiento normativo |.",
      "Componentes de bloqueo de objetos:.",
      "1.",
      "Modos de retención:.",
      "Cumplimiento: Cumplimiento normativo inmutable.",
      "Gobernanza: Políticas internas flexibles.",
      "2.",
      "Período de retención:.",
      "Periodo fijo (días/años)",
      "Proteger hasta la fecha.",
      "3.",
      "Retención Legal:.",
      "Protección indefinida.",
      "Alternar encendido/apagado.",
      "Independiente del período de retención.",
      "Requiere permiso `s3:PutObjectLegalHold`.",
      "Requisitos de configuración:.",
      "1.",
      "El control de versiones debe estar habilitado (el bloqueo de objetos requiere control de versiones)",
      "2.",
      "Bloqueo de objetos habilitado en la creación del depósito (no se puede habilitar más adelante)",
      "3.",
      "Configuración de retención predeterminada (opcional, puede ser por objeto)",
      "Ejemplo de modo de cumplimiento:.",
      "Ejemplo de retención legal:.",
      "Casos de uso de cumplimiento:.",
      "Regla SEC 17a-4 (servicios financieros)",
      "HIPAA (atención médica)",
      "FINRA (industria financiera)",
      "Documentos legales.",
      "Archivos regulatorios.",
      "Bloqueo de objetos frente a otra protección:.",
      "Control de versiones: puede eliminar versiones.",
      "Eliminación de MFA: agrega MFA pero aún se puede eliminar.",
      "Gobernanza de bloqueo de objetos: se puede anular con permisos.",
      "Cumplimiento del bloqueo de objetos: verdadera inmutabilidad."
    ],
    "others": []
  },
  {
    "id": "07-14",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa desea brindar acceso temporal con privilegios limitados a proveedores externos para realizar tareas específicas en su cuenta de AWS. ¿Cuál es el MEJOR enfoque?",
    "options": {
      "A": "Crear usuarios de IAM con contraseñas",
      "B": "Compartir las credenciales de la cuenta raíz temporalmente",
      "C": "Cree roles de IAM entre cuentas con ID externo",
      "D": "Crea claves de acceso y compártelas"
    },
    "explanation": "• Los roles de IAM entre cuentas con ID externo brindan acceso temporal seguro\n• No se necesitan credenciales a largo plazo\n• La identificación externa evita problemas de confusión entre los diputados\n• Permisos específicos con límites de duración de la sesión\nArquitectura de acceso entre cuentas:\n1. Política de Confianza (en tu cuenta):\n2. Política de permisos:\nIdentificación externa - Prevención adjunta confusa:\nEl problema:\n• El proveedor utiliza el mismo nombre de función para todos los clientes.\n• El atacante podría engañar al proveedor para que acceda a sus recursos\nLa solución:\n• ID externo único por cliente\n• El proveedor debe proporcionar una identificación externa correcta para asumir el rol.\n• Evita el acceso no autorizado\nPasos de implementación:\nSu cuenta:\n1. Crear función de IAM para el proveedor\n2. Establecer una política de confianza con el ID de cuenta del proveedor\n3. Agregar condición de identificación externa (el proveedor proporciona esto)\n4. Adjuntar política de permisos (privilegio mínimo)\n5. Configurar la duración de la sesión (1-12 horas)\nCuenta de vendedor:\n1. Configurar para asumir el rol\n2. Proporcione una identificación externa al asumir\n3. Reciba credenciales temporales\n4. Las credenciales caducan automáticamente después de la duración de la sesión\nEjemplo de AssumeRole (lado del proveedor):\nBeneficios:\n• ✅ Sin credenciales a largo plazo\n• ✅ Rotación automática de credenciales\n• ✅ Auditable (CloudTrail)\n• ✅ Acceso por tiempo limitado\n• ✅ Revocable (eliminar rol)\n• ✅ Evita que el diputado se confunda\nMejores prácticas:\n1. Utilice siempre una identificación externa\n2. Principio de privilegio mínimo\n3. Sesiones de corta duración (1-2 horas)\n4. Monitorear con CloudTrail\n5. Revise los permisos con regularidad\n6. Utilice MFA para roles sensibles",
    "why": [
      "Los roles de IAM entre cuentas con ID externo brindan acceso temporal seguro.",
      "No se necesitan credenciales a largo plazo.",
      "La identificación externa evita problemas de confusión entre los diputados.",
      "Permisos detallados con límites de duración de la sesión.",
      "Arquitectura de acceso entre cuentas:.",
      "1.",
      "Política de Confianza (en tu cuenta):.",
      "2.",
      "Política de permisos:.",
      "Identificación externa - Prevención adjunta confusa:.",
      "El problema:.",
      "El proveedor utiliza el mismo nombre de función para todos los clientes.",
      "El atacante podría engañar al proveedor para que acceda a sus recursos.",
      "La solución:.",
      "ID externo único por cliente.",
      "El proveedor debe proporcionar una identificación externa correcta para asumir el rol.",
      "Impide el acceso no autorizado.",
      "Pasos de implementación:.",
      "Su cuenta:.",
      "1.",
      "Cree un rol de IAM para el proveedor.",
      "2.",
      "Establezca una política de confianza con el ID de cuenta del proveedor.",
      "3.",
      "Agregar condición de ID externa (el proveedor proporciona esto)",
      "4.",
      "Adjuntar política de permisos (privilegio mínimo)",
      "5.",
      "Configurar la duración de la sesión (1-12 horas)",
      "Cuenta de proveedor:.",
      "1.",
      "Configurar para asumir el rol.",
      "2.",
      "Proporcione una identificación externa al asumir.",
      "3.",
      "Reciba credenciales temporales.",
      "4.",
      "Las credenciales caducan automáticamente después de la duración de la sesión.",
      "Ejemplo de AssumeRole (lado del proveedor):.",
      "Beneficios:.",
      "✅ Sin credenciales a largo plazo.",
      "✅Rotación automática de credenciales.",
      "✅ Auditable (CloudTrail)",
      "✅ Acceso por tiempo limitado.",
      "✅ Revocable (eliminar rol)",
      "✅Evita que el diputado se confunda.",
      "Mejores prácticas:.",
      "1.",
      "Utilice siempre una identificación externa.",
      "2.",
      "Principio de privilegio mínimo.",
      "3.",
      "Duraciones de sesiones cortas (1-2 horas)",
      "4.",
      "Supervise con CloudTrail.",
      "5.",
      "Revise los permisos con regularidad.",
      "6.",
      "Utilice MFA para roles sensibles."
    ],
    "others": []
  },
  {
    "id": "07-15",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa necesita rotar automáticamente los certificados SSL/TLS para sus balanceadores de carga de aplicaciones. ¿Qué servicio deberían utilizar?",
    "options": {
      "A": "AWS Certificate Manager (ACM)",
      "B": "AWS Secrets Manager",
      "C": "AWS KMS",
      "D": "Certificados de servidor IAM"
    },
    "explanation": "• AWS Certificate Manager (ACM) proporciona certificados SSL/TLS gratuitos\n• Renovación automática (sin intervención manual)\n• Implementación automática de servicios integrados\n• Gratis para certificados públicos\nCaracterísticas de ACM:\n1. Renovación Automática:\n• ACM renueva automáticamente los certificados antes de su vencimiento\n• Sin tiempo de inactividad durante la renovación\n• Implementa un certificado renovado automáticamente\n2. Servicios compatibles:\n• Equilibrio de carga elástico (ALB, NLB, CLB)\n• Amazon CloudFront\n• Amazon API Gateway\n• Ejecutor de aplicaciones de AWS\n• AWS Elastic Beanstalk\n3. Tipos de Certificado:\n• Certificados Públicos: Gratuitos, validados vía DNS o correo electrónico\n• Certificados privados: pagos, a través de AWS Private CA\n4. Métodos de Validación:\n• Validación de DNS: agregar registro CNAME (recomendado)\n• Validación de correo electrónico: correo electrónico a contactos del dominio\nSolicitud de certificado ACM:\nValidación de DNS (Ruta 53):\nRequisito de CloudFront:\n• El certificado debe estar en la región us-east-1\n• Debe ser un certificado público\n• Puede utilizar comodines (*.example.com)\nMonitoreo de certificados:\n• Métricas de CloudWatch para el vencimiento\n• Eventos de EventBridge para el estado de renovación\n• Notificaciones del panel de salud de AWS\nMejores prácticas:\n1. Utilice la validación de DNS (más rápida, automática)\n2. Utilice ACM para todos los servicios compatibles\n3. Supervisar la caducidad del certificado (copia de seguridad)\n4. Utilice comodines para subdominios\n5. Habilite la renovación automática",
    "why": [
      "Renovación automática (sin intervención manual)",
      "Despliegue automático a servicios integrados.",
      "Gratis para certificados públicos.",
      "Características de ACM:.",
      "1.",
      "Renovación Automática:.",
      "ACM renueva automáticamente los certificados antes de su vencimiento.",
      "Sin tiempo de inactividad durante la renovación.",
      "Implementa un certificado renovado automáticamente.",
      "2.",
      "Servicios compatibles:.",
      "Equilibrio de carga elástico (ALB, NLB, CLB)",
      "Amazon CloudFront.",
      "Amazon API Gateway.",
      "Ejecutor de aplicaciones de AWS.",
      "AWS Elastic Beanstalk.",
      "3.",
      "Tipos de certificados:.",
      "Certificados Públicos: Gratuitos, validados vía DNS o correo electrónico.",
      "Certificados privados: Pagados, a través de AWS Private CA.",
      "4.",
      "Métodos de validación:.",
      "Validación de DNS: agregar registro CNAME (recomendado)",
      "Validación de correo electrónico: correo electrónico a contactos del dominio.",
      "Solicitud de certificado ACM:.",
      "Validación DNS (Ruta 53):.",
      "Requisito de CloudFront:.",
      "El certificado debe estar en la región us-east-1.",
      "Debe ser certificado público.",
      "Puede utilizar comodines (.example.com)",
      "Seguimiento de certificados:.",
      "Métricas de CloudWatch para el vencimiento.",
      "Eventos de EventBridge para el estado de renovación.",
      "Notificaciones del panel de salud de AWS.",
      "Mejores prácticas:.",
      "1.",
      "Utilice la validación de DNS (más rápida, automática)",
      "2.",
      "Utilice ACM para todos los servicios compatibles.",
      "3.",
      "Supervisar la caducidad del certificado (copia de seguridad)",
      "4.",
      "Utilice comodines para subdominios.",
      "5.",
      "Habilitar la renovación automática."
    ],
    "others": []
  },
  {
    "id": "07-16",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere administrar de forma centralizada las reglas de firewall en varias cuentas de AWS y VPC. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Grupos de seguridad",
      "B": "ACL de red",
      "C": "AWS Firewall Manager",
      "D": "WAF de AWS"
    },
    "explanation": "• AWS Firewall Manager configura y administra de forma centralizada las reglas de firewall\n• Funciona en todas las cuentas y recursos de AWS Organizations\n• Garantiza políticas de seguridad consistentes\n• Aplicación automática de políticas a nuevos recursos.\nCapacidades del administrador de firewall:\n1. Políticas admitidas:\n• Reglas de AWS WAF (ALB, CloudFront, API Gateway)\n• Protecciones avanzadas de AWS Shield\n• Grupos de seguridad de VPC\n• Reglas del firewall de red de AWS\n• Cortafuegos DNS con resolución de ruta 53\n• Dispositivos de firewall de terceros\n2. Tipos de póliza:\n| Tipo de póliza | Alcance | Caso de uso |\n|-------------|-------|----------|\n| Política WAF | CloudFront, ALB, puerta de enlace API | Protección de aplicaciones web |\n| Escudo avanzado | CloudFront, ALB, EIP | Protección DDoS |\n| Grupo de seguridad | EC2, ENI | Cortafuegos a nivel de VPC |\n| Cortafuegos de red | VPC | Cortafuegos con estado |\n| Cortafuegos DNS | VPC | Filtrado de consultas DNS |\n3. Aplicación de la Política:\n• Se aplica automáticamente a todas las cuentas de la organización.\n• Se aplica a nuevos recursos automáticamente\n• Monitoreo de cumplimiento centralizado\nCaso de uso de ejemplo de Firewall Manager:\nEscenario: hacer cumplir las reglas WAF en todos los ALB de la organización\nConfiguración:\nBeneficios:\n1. Gestión Centralizada: Consola única para todas las cuentas\n2. Cumplimiento automático: Políticas aplicadas automáticamente\n3. Seguridad consistente: las mismas reglas en todas partes\n4. Gastos generales reducidos: sin configuración manual por cuenta\n5. Visibilidad: panel de cumplimiento\nAdministrador de firewall versus administración manual:\n| Aspecto | Administrador de cortafuegos | manuales |\n|--------|-----------------|----------------|\n| Configuración | Una vez (centralizado) | Por cuenta/recurso |\n| Nuevos recursos | Automático | manuales |\n| Cumplimiento | Monitoreado | Controles manuales |\n| Actualizaciones | Centralizado | Por cuenta |\n| Cuentas | Cuenta múltiple | Cuenta única |\nPolíticas comunes:\n1. Reglas WAF comunes:\n• Protección contra inyección SQL\n• Protección XSS\n• Limitación de tarifas (prevención de abusos)\n• Restricciones geográficas\n• Lista negra/lista blanca de IP\n• Coincidencia de cadena/patrón\n2. Reglas del grupo de seguridad:\n• Restringir SSH (puerto 22) a IP corporativas\n• Denegar todo el tráfico saliente no autorizado\n3. Cortafuegos DNS:\n• Bloquear dominios maliciosos conocidos\n• Prevención de filtración de datos\nRequisitos previos:\n• AWS Organizations habilitadas\n• Cuenta de administrador de Firewall Manager\n• AWS Config habilitado en todas las cuentas\n• Rol vinculado al servicio AWS Config",
    "why": [
      "Funciona en todas las cuentas y recursos de AWS Organizations.",
      "Garantiza políticas de seguridad consistentes.",
      "Aplicación automática de políticas a nuevos recursos.",
      "Capacidades del administrador de firewall:.",
      "1.",
      "Políticas admitidas:.",
      "Reglas de AWS WAF (ALB, CloudFront, API Gateway)",
      "Protecciones avanzadas de AWS Shield.",
      "Grupos de seguridad de VPC.",
      "Reglas del firewall de red de AWS.",
      "Cortafuegos DNS de resolución de ruta 53.",
      "Dispositivos de firewall de terceros.",
      "2.",
      "Tipos de póliza:.",
      "| Tipo de póliza | Alcance | Caso de uso |.",
      "|-------------|-------|----------|.",
      "| Política WAF | CloudFront, ALB, puerta de enlace API | Protección de aplicaciones web |.",
      "| Escudo avanzado | CloudFront, ALB, EIP | Protección DDoS |.",
      "| Grupo de seguridad | EC2, ENI | Cortafuegos a nivel de VPC |.",
      "| Cortafuegos de red | VPC | Cortafuegos con estado |.",
      "| Cortafuegos DNS | VPC | Filtrado de consultas DNS |.",
      "3.",
      "Aplicación de la política:.",
      "Se aplica automáticamente a todas las cuentas de la organización.",
      "Se aplica a nuevos recursos automáticamente.",
      "Monitoreo de cumplimiento centralizado.",
      "Caso de uso de ejemplo de Firewall Manager:.",
      "Escenario: hacer cumplir las reglas WAF en todos los ALB de la organización.",
      "Configuración:.",
      "Beneficios:.",
      "1.",
      "Gestión Centralizada: Consola única para todas las cuentas.",
      "2.",
      "Cumplimiento automático: Políticas que se aplican automáticamente.",
      "3.",
      "Seguridad consistente: las mismas reglas en todas partes.",
      "4.",
      "Gastos generales reducidos: sin configuración manual por cuenta.",
      "5.",
      "Visibilidad: Panel de cumplimiento.",
      "Administrador de firewall versus administración manual:.",
      "| Aspecto | Administrador de cortafuegos | Manual |.",
      "|--------|-----------------|--------|.",
      "| Configuración | Una vez (centralizado) | Por cuenta/recurso |.",
      "| Nuevos recursos | Automático | Manual |.",
      "| Cumplimiento | Monitoreado | Controles manuales |.",
      "| Actualizaciones | Centralizado | Por cuenta |.",
      "| Cuentas | Cuenta múltiple | Cuenta única |.",
      "Políticas Comunes:.",
      "1.",
      "Reglas comunes de WAF:.",
      "Protección contra inyección SQL.",
      "Protección XSS.",
      "Limitación de velocidad (prevención de abusos)",
      "Restricciones geográficas.",
      "Lista negra/lista blanca de IP.",
      "Coincidencia de cadena/patrón.",
      "2.",
      "Reglas del grupo de seguridad:.",
      "Restrinja SSH (puerto 22) a IP corporativas.",
      "Denegar todo el tráfico saliente no autorizado.",
      "3.",
      "Cortafuegos DNS:.",
      "Bloquee dominios maliciosos conocidos.",
      "Prevención de exfiltración de datos.",
      "Requisitos previos:.",
      "AWS Organizations habilitadas.",
      "Cuenta de administrador de Firewall Manager.",
      "AWS Config habilitado en todas las cuentas.",
      "Rol vinculado al servicio de AWS Config."
    ],
    "others": []
  },
  {
    "id": "07-17",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": true,
    "answer": [
      "B",
      "C",
      "E"
    ],
    "q": "Un desarrollador envía accidentalmente credenciales de AWS a un repositorio público de GitHub. ¿Qué acciones inmediatas deberían tomarse? (Elegí TRES)",
    "options": {
      "A": "Cambiar la contraseña del usuario de IAM",
      "B": "Desactive y elimine las claves de acceso expuestas inmediatamente",
      "C": "Revisar los registros de CloudTrail para detectar actividad no autorizada",
      "D": "Habilite MFA en la cuenta",
      "E": "Cree nuevas claves de acceso antes de eliminar las antiguas",
      "F": "Consulte el panel de salud personal de AWS"
    },
    "explanation": "Pasos de respuesta inmediata:\n1. Desactivar/Eliminar Credenciales Expuestas (B):\n• PRIMERO: Desactivar claves inmediatamente\n• SEGUNDO: Actividad de revisión\n• TERCERO: Eliminar claves después de crear otras nuevas\n2. Revise los registros de CloudTrail (C):\n• Compruebe si hay llamadas API no autorizadas\n• Identificar el alcance del compromiso\n• Documentar los recursos afectados\n3. Cree nuevas credenciales antes de eliminarlas (E):\n• Garantizar la continuidad de la aplicación\n• Actualizar aplicaciones con nuevas claves\n• Luego elimine las claves comprometidas\nLista de verificación completa de respuesta a incidentes:\nInmediato (Minutos):\n• [ ] Desactivar las credenciales expuestas\n• [ ] Alertar al equipo de seguridad\n• [ ] Verifique GuardDuty para ver los hallazgos\nCorto plazo (Horas):\n• [ ] Revisar los registros de CloudTrail (7-90 días)\n• [ ] Identificar acciones no autorizadas\n• [ ] Evaluar daños (nuevos recursos, acceso a datos)\n• [ ] Crear nuevas credenciales\n• [ ] Actualizar aplicaciones\n• [ ] Eliminar credenciales antiguas\n• [ ] Revocar credenciales temporales (si se asume el rol)\nMediano Plazo (Días):\n• [ ] Revisar las políticas de IAM (reducir permisos)\n• [ ] Habilitar MFA (no es una prioridad inmediata pero es importante)\n• [ ] Implementar AWS Secrets Manager\n• [ ] Configurar alarmas de CloudWatch para actividades inusuales\n• [ ] Revisar grupos de seguridad, NACL\n• [ ] Verificar puertas traseras (usuarios de IAM, roles)\nLargo plazo (Semanas):\n• [ ] Implementar AWS SSO\n• [ ] Aplicar MFA en toda la organización\n• [ ] Utilice roles de IAM en lugar de claves de acceso\n• [ ] Implementar la rotación de secretos\n• [ ] Capacitación en seguridad\n• [ ] Escaneo del repositorio de código (git-secrets)\n• [ ] Implementar controles preventivos\nConsultas de investigación de CloudTrail:\nHallazgos de GuardDuty que se deben verificar:\n• Acceso no autorizado: IAMUser/Exfiltración de credenciales de instancia\n• Persistencia:IAMUser/Permisos de usuario\n• Escalada de privilegios: IAMUser/Permisos administrativos\n• Impacto: IAMUser/MaliciousIPCaller\nPor qué otras opciones son incorrectas:\n• A (Contraseña): Las claves de acceso y las contraseñas están separadas\n• D (MFA): Importante pero no prioridad inmediata\n• F (PHD): No se relaciona con la exposición de credenciales\nEstrategias de prevención:\n1. Nunca envíe credenciales al control de versiones\n2. Utilice roles de IAM para aplicaciones\n3. Implementar AWS Secrets Manager o Parameter Store\n4. Utilice git-secrets o git-hound para escanear repositorios\n5. Habilite AWS GuardDuty para la detección\n6. Rote las credenciales con regularidad\n7. Utilice credenciales de corta duración (STS)\n8. Implementar AWS SSO para los usuarios",
    "why": [
      "Pasos de respuesta inmediata:.",
      "1.",
      "Desactivar/Eliminar Credenciales Expuestas (B):.",
      "PRIMERO: Desactivar claves inmediatamente.",
      "SEGUNDO: Actividad de revisión.",
      "TERCERO: Eliminar claves después de crear otras nuevas.",
      "2.",
      "Revisar los registros de CloudTrail (C):.",
      "Compruebe si hay llamadas API no autorizadas.",
      "Identificar el alcance del compromiso.",
      "Documentar los recursos afectados.",
      "3.",
      "Cree nuevas credenciales antes de eliminarlas (E):",
      "Garantizar la continuidad de la aplicación.",
      "Actualizar aplicaciones con nuevas claves.",
      "Luego elimine las claves comprometidas.",
      "Lista de verificación completa de respuesta a incidentes:.",
      "Inmediato (Minutos):.",
      "[] Desactivar las credenciales expuestas.",
      "[ ] Alertar al equipo de seguridad.",
      "[] Consulte GuardDuty para conocer los resultados.",
      "Corto plazo (Horas):.",
      "[] Revisar los registros de CloudTrail (7-90 días)",
      "[ ] Identificar acciones no autorizadas.",
      "[ ] Evaluar daños (nuevos recursos, acceso a datos)",
      "[] Crear nuevas credenciales.",
      "[] Actualizar aplicaciones.",
      "[] Eliminar credenciales antiguas.",
      "[] Revocar credenciales temporales (si se asume el rol)",
      "Mediano Plazo (Días):.",
      "[] Revisar las políticas de IAM (reducir permisos)",
      "[] Habilitar MFA (no es una prioridad inmediata pero es importante)",
      "[] Implementar AWS Secrets Manager.",
      "[] Configure alarmas de CloudWatch para actividades inusuales.",
      "[] Revisar grupos de seguridad, NACL.",
      "[] Verificar puertas traseras (usuarios de IAM, roles)",
      "Largo plazo (Semanas):.",
      "[] Implementar AWS SSO.",
      "[ ] Hacer cumplir MFA en toda la organización.",
      "[] Utilice roles de IAM en lugar de claves de acceso.",
      "[] Implementar la rotación de secretos.",
      "[ ] Formación en seguridad.",
      "[] Escaneo del repositorio de código (git-secrets)",
      "[ ] Implementar controles preventivos.",
      "Consultas de investigación de CloudTrail:.",
      "Hallazgos de GuardDuty que se deben verificar:",
      "Acceso no autorizado: IAMUser/InstanceCredentialExfiltración.",
      "Persistencia: IAMUser/UserPermissions.",
      "Escalada de privilegios: IAMUser/AdministrativePermissions.",
      "Impacto: IAMUser/MaliciousIPCaller.",
      "Por qué otras opciones son incorrectas:",
      "A (Contraseña): Las claves de acceso y las contraseñas están separadas.",
      "D (MFA): Importante pero no prioridad inmediata.",
      "F (PHD): No se relaciona con la exposición de credenciales.",
      "Estrategias de Prevención:.",
      "1.",
      "Nunca envíe credenciales al control de versiones.",
      "2.",
      "Utilice roles de IAM para aplicaciones.",
      "3.",
      "Implemente AWS Secrets Manager o Parameter Store.",
      "4.",
      "Utilice git-secrets o git-hound para escanear repositorios.",
      "5.",
      "Habilite AWS GuardDuty para la detección.",
      "6.",
      "Rote las credenciales con regularidad.",
      "7.",
      "Utilice credenciales de corta duración (STS)",
      "8.",
      "Implementar AWS SSO para los usuarios."
    ],
    "others": []
  },
  {
    "id": "07-18",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere garantizar el cifrado de datos en tránsito entre su centro de datos local y AWS. ¿Qué opción de conectividad proporciona cifrado de forma predeterminada?",
    "options": {
      "A": "AWS Direct Connect",
      "B": "AWS Site-to-Site VPN",
      "C": "Internet Gateway",
      "D": "AWS PrivateLink"
    },
    "explanation": "• AWS Site-to-Site VPN utiliza IPsec para cifrar los datos en tránsito\n• El cifrado está integrado y es automático\n• No se necesita configuración adicional para el cifrado\nComparación de opciones de conectividad:\n| Opción | Cifrado | Velocidad | Configuración | Costo |\n|--------|-----------|-------|-------|------|\n| VPN de sitio a sitio | Sí (IPsec) | Hasta 1,25 Gbps | Minutos | Bajo |\n| Conexión directa | No (pero puedo agregar) | 1-100 Gbps | Semanas | Alto |\n| DX+VPN | Sí | 1-100 Gbps | Semanas | Alto |\n| Internet | Sólo HTTPS | Variables | Inmediato | Muy bajo |\nFunciones de VPN de sitio a sitio:\n1. Cifrado:\n• Túnel IPsec\n• Cifrado AES-256-GCM o AES-128-GCM\n• Hashing SHA-2\n• Grupos DH (Diffie-Hellman)\n2. Redundancia:\n• AWS proporciona 2 túneles VPN por conexión\n• Activo/pasivo o activo/activo\n• Disponibilidad multi-AZ\n3. Enrutamiento dinámico:\n• Soporte BGP\n• Conmutación por error automática\n• Propagación de rutas\nConfiguración de VPN:\nCifrado de conexión directa:\nOpción 1: DX + VIF público + VPN:\n• VPN sobre conexión directa\n• Cifrado pero complejo\nOpción 2: DX + VPN (Separado):\n• Direct Connect para principal (sin cifrar)\n• VPN para respaldo (cifrada)\nOpción 3: MACsec (Conexión directa):\n• Cifrado de capa 2\n• Solo conexiones de 10 Gbps y 100 Gbps\n• No disponible para todas las ubicaciones\nCuándo elegir:\nVPN de sitio a sitio:\n• Necesita cifrado inmediato\n• Presupuesto consciente\n• Ancho de banda < 1 Gbps adecuado\n• Se requiere configuración rápida\nConexión directa:\n• Grandes transferencias de datos\n• Se necesita un rendimiento constante\n• Puede agregar VPN para cifrado\n• Inversión a largo plazo\nMejores prácticas: híbrido:\n• Principal: Conexión directa (rendimiento)\n• Copia de seguridad: VPN (cifrada, conmutación por error)\n• Proporciona rendimiento y cifrado",
    "why": [
      "El cifrado está integrado y es automático.",
      "No se necesita configuración adicional para el cifrado.",
      "Comparación de opciones de conectividad:.",
      "| Opción | Cifrado | Velocidad | Configuración | Costo |.",
      "|--------|-----------|---------------|-------|------|.",
      "| VPN de sitio a sitio | Sí (IPsec) | Hasta 1,25 Gbps | Minutos | Bajo |.",
      "| Conexión directa | No (pero puedo agregar) | 1-100 Gbps | Semanas | Alto |.",
      "| DX+VPN | Sí | 1-100 Gbps | Semanas | Alto |.",
      "| Internet | Sólo HTTPS | Variables | Inmediato | Muy bajo |.",
      "Funciones de VPN de sitio a sitio:.",
      "1.",
      "Cifrado:.",
      "Túnel IPsec.",
      "Cifrado AES-256-GCM o AES-128-GCM.",
      "Hashing SHA-2.",
      "Grupos DH (Diffie-Hellman).",
      "2.",
      "Redundancia:.",
      "AWS proporciona 2 túneles VPN por conexión.",
      "Activo/pasivo o activo/activo.",
      "Disponibilidad multi-AZ.",
      "3.",
      "Enrutamiento dinámico:.",
      "Soporte BGP.",
      "Conmutación por error automática.",
      "Propagación de rutas.",
      "Configuración de VPN:.",
      "Cifrado de conexión directa:.",
      "Opción 1: DX + VIF público + VPN:.",
      "VPN sobre conexión directa.",
      "Cifrado pero complejo.",
      "Opción 2: DX + VPN (Separado):.",
      "Conexión directa para principal (sin cifrar)",
      "VPN para respaldo (cifrada)",
      "Opción 3: MACsec (Conexión Directa):.",
      "Cifrado de capa 2.",
      "Solo conexiones de 10 Gbps y 100 Gbps.",
      "No disponible para todas las ubicaciones.",
      "Cuándo elegir:.",
      "VPN de sitio a sitio:.",
      "Necesita cifrado inmediato.",
      "Consciente del presupuesto.",
      "Ancho de banda < 1 Gbps adecuado.",
      "Se requiere una configuración rápida.",
      "Conexión directa:.",
      "Grandes transferencias de datos.",
      "Se necesita un rendimiento constante.",
      "Puede agregar VPN para cifrado.",
      "Inversión a largo plazo.",
      "Mejores prácticas: híbrido:.",
      "Principal: Conexión directa (rendimiento)",
      "Copia de seguridad: VPN (cifrada, conmutación por error)",
      "Proporciona rendimiento y cifrado."
    ],
    "others": []
  },
  {
    "id": "07-19",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere asegurarse de que las instancias EC2 solo puedan lanzarse en VPC y subredes aprobadas. ¿Cómo se puede hacer cumplir esto a nivel de organización?",
    "options": {
      "A": "Comprobación de la condición de la política de IAM ID de VPC",
      "B": "Política de control de servicios (SCP) en AWS Organizations",
      "C": "Regla de AWS Config",
      "D": "Reglas del grupo de seguridad"
    },
    "explanation": "• La Política de control de servicios (SCP) proporciona control preventivo en toda la organización.\n• Puede restringir acciones basadas en VPC/subred\n• Las cuentas de miembros no pueden omitirlo\n• Se aplica antes de las políticas de IAM\nEjemplo de SCP: restringir a VPC aprobadas:\nEjemplo de SCP: restringir a subredes aprobadas:\nClaves de condición útiles de EC2:\n| Clave de condición | Caso de uso |\n|--------------|----------|\n| `ec2:Vpc` | Restringir a VPC específicas |\n| `ec2:Subred` | Restringir a subredes específicas |\n| `ec2:TipoDeInstancia` | Limitar tipos de instancias |\n| `ec2:Región` | Restricciones regionales |\n| `ec2:Arrendamiento` | Dedicado versus predeterminado |\n| `ec2: Tipo de dispositivo raíz` | EBS frente al almacén de instancias |\nAplicación de múltiples capas:\nCapa 1 - SCP (Preventiva):\nCapa 2: Política de IAM (preventiva):\nCapa 3 - Configuración (Detective):\nPor qué SCP es mejor:\n1. En toda la organización: se aplica a todas las cuentas.\n2. Preventivo: Bloqueos antes de la creación\n3. No se puede anular: ni siquiera los administradores pueden omitir\n4. Centralizado: administrado desde la cuenta maestra\n5. Heredado: se aplica a unidades organizativas y cuentas infantiles.\nComparación:\n• SCP: preventivo, para toda la organización, no se puede anular\n• IAM: preventivo, a nivel de cuenta, los administradores pueden cambiar\n• Configuración: Detective, alertas después de la creación\n• Grupos de seguridad: nivel de red, no control de inicio",
    "why": [
      "Puede restringir acciones basadas en VPC/subred.",
      "Las cuentas de miembros no pueden omitirlo.",
      "Se aplica antes de las políticas de IAM.",
      "Ejemplo de SCP: restringir a VPC aprobadas:.",
      "Ejemplo de SCP: restringir a subredes aprobadas:.",
      "Claves de condición útiles de EC2:.",
      "| Clave de condición | Caso de uso |.",
      "|--------------|----------|.",
      "| `ec2:Vpc` | Restringir a VPC específicas |.",
      "| `ec2:Subred` | Restringir a subredes específicas |.",
      "| `ec2:TipoDeInstancia` | Limitar tipos de instancias |.",
      "| `ec2:Región` | Restricciones regionales |.",
      "| `ec2:Arrendamiento` | Dedicado vs predeterminado |.",
      "| `ec2: Tipo de dispositivo raíz` | EBS frente al almacén de instancias |.",
      "Aplicación de múltiples capas:.",
      "Capa 1 - SCP (Preventiva):.",
      "Capa 2: Política IAM (preventiva):",
      "Capa 3 - Configuración (Detective):.",
      "Por qué SCP es mejor:.",
      "1.",
      "En toda la organización: se aplica a todas las cuentas.",
      "2.",
      "Preventivo: Bloqueos antes de la creación.",
      "3.",
      "No se puede anular: ni siquiera los administradores pueden omitirlo.",
      "4.",
      "Centralizado: Gestionado desde cuenta maestra.",
      "5.",
      "Heredado: se aplica a unidades organizativas y cuentas infantiles.",
      "Comparación:.",
      "SCP: Preventivo, para toda la organización, no se puede anular.",
      "IAM: preventivo, a nivel de cuenta, los administradores pueden cambiar.",
      "Configuración: Detective, alertas después de la creación.",
      "Grupos de seguridad: nivel de red, no control de inicio."
    ],
    "others": []
  },
  {
    "id": "07-20",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita monitorear y responder a patrones de actividad de API inusuales que podrían indicar credenciales comprometidas. ¿Qué combinación de servicios es MÁS efectiva?",
    "options": {
      "A": "Registros de CloudTrail + CloudWatch",
      "B": "GuardDuty + EventBridge + Lambda",
      "C": "AWS Config + Amazon SNS",
      "D": "Amazon Inspector + AWS Security Hub"
    },
    "explanation": "• GuardDuty utiliza ML para detectar automáticamente actividad API inusual\n• EventBridge dirige los hallazgos a una respuesta automatizada\n• Lambda ejecuta acciones de remediación\n• Detección y respuesta a amenazas totalmente automatizadas\nArquitectura de respuesta automatizada a amenazas:\nEjemplo de búsqueda de GuardDuty:\nRegla de EventBridge (enruta los hallazgos de GuardDuty):\nFunción de respuesta Lambda (ejemplo de Python):\nTipos comunes de hallazgos de GuardDuty:\n| Tipo de hallazgo | Descripción | Respuesta |\n|--------------|-------------|----------|\n| Acceso no autorizado: IAMUser/MaliciousIPCaller | Llamadas API desde IP maliciosas | Deshabilitar credenciales |\n| Acceso no autorizado: IAMUser/InstanceCredentialExfiltración | Credenciales utilizadas fuera de AWS | Rotar credenciales |\n| Escalada de privilegios: IAMUser/Permisos administrativos | El usuario obtuvo permisos de administrador | Revocar permisos |\n| Persistencia:IAMUser/Permisos de usuario | El usuario creó nuevas claves de acceso | Revisar y eliminar |\n| Impacto: usuario IAMU/comportamiento anómalo | Actividad API inusual | Investigar |\nManual de estrategias de respuesta completo:\nDetección (GuardDuty):\n• Monitoreo continuo\n• Detección de anomalías basada en ML\n• Fuentes de inteligencia sobre amenazas\nEnrutamiento (EventBridge):\n• Filtrar por gravedad\n• Ruta hacia la respuesta adecuada\nRespuesta (Lambda):\n• Desactivar credenciales\n• Aislar recursos\n• Crear instantáneas forenses\n• Alertar al equipo de seguridad\n• Crear ticket de incidente\nInvestigación (Manual):\n• Revisar los registros de CloudTrail\n• Analizar el alcance del compromiso\n• Identificar los recursos afectados\n• Análisis de causa raíz\nRemediación (Manual/Automatizada):\n• Rotar credenciales\n• Actualizar las políticas de IAM\n• Eliminar puertas traseras\n• Aplicar parches de seguridad\n• Actualizar grupos de seguridad\nPrevención (a largo plazo):\n• Implementar AMF\n• Usar roles de IAM\n• Aplicar privilegios mínimos\n• Revisiones periódicas de acceso\n• Capacitación en seguridad\nPor qué esta combinación es mejor:\n1. GuardDuty: Detección inteligente (sin reglas manuales)\n2. EventBridge: enrutamiento flexible\n3. Lambda: Respuesta automatizada (acción inmediata)\n4. Escalable: sin infraestructura\n5. Integral: cubre toda la actividad de la API de AWS\nAlternativa (Manual):\n• CloudTrail → CloudWatch Logs → Filtros de métricas → Alarmas → SNS\n• Requiere definición de patrón manual\n• Menos inteligente\n• Respuesta manual",
    "why": [
      "GuardDuty utiliza ML para detectar automáticamente actividad API inusual.",
      "EventBridge dirige los hallazgos a una respuesta automatizada.",
      "Lambda ejecuta acciones correctivas.",
      "Detección y respuesta a amenazas totalmente automatizadas.",
      "Arquitectura de respuesta automatizada a amenazas:.",
      "Ejemplo de búsqueda de GuardDuty:.",
      "Regla de EventBridge (enruta los hallazgos de GuardDuty):",
      "Función de respuesta Lambda (ejemplo de Python):.",
      "Tipos comunes de hallazgos de GuardDuty:.",
      "| Tipo de hallazgo | Descripción | Respuesta |.",
      "|--------------|-------------|----------|.",
      "| Acceso no autorizado: IAMUser/MaliciousIPCaller | Llamadas API desde IP maliciosas | Deshabilitar credenciales |.",
      "| Acceso no autorizado: IAMUser/InstanceCredentialExfiltración | Credenciales utilizadas fuera de AWS | Rotar credenciales |.",
      "| Escalada de privilegios: IAMUser/Permisos administrativos | El usuario obtuvo permisos de administrador | Revocar permisos |.",
      "| Persistencia:IAMUser/Permisos de usuario | El usuario creó nuevas claves de acceso | Revisar y eliminar |.",
      "| Impacto: usuario IAMU/comportamiento anómalo | Actividad API inusual | Investigar |.",
      "Manual de respuestas completo:.",
      "Detección (GuardDuty):.",
      "Monitoreo continuo.",
      "Detección de anomalías basada en ML.",
      "La inteligencia sobre amenazas se alimenta.",
      "Enrutamiento (EventBridge):.",
      "Filtrar por gravedad.",
      "Ruta hacia la respuesta adecuada.",
      "Respuesta (Lambda):.",
      "Deshabilitar credenciales.",
      "Aislar recursos.",
      "Crea instantáneas forenses.",
      "Alertar al equipo de seguridad.",
      "Crear ticket de incidente.",
      "Investigación (Manual):.",
      "Revise los registros de CloudTrail.",
      "Analizar el alcance del compromiso.",
      "Identificar los recursos afectados.",
      "Análisis de causa raíz.",
      "Remediación (Manual/Automatizada):.",
      "Rotar credenciales.",
      "Actualizar las políticas de IAM.",
      "Retire las puertas traseras.",
      "Aplicar parches de seguridad.",
      "Actualizar grupos de seguridad.",
      "Prevención (a largo plazo):.",
      "Implementar AMF.",
      "Utilice roles de IAM.",
      "Hacer cumplir el privilegio mínimo.",
      "Revisiones periódicas de acceso.",
      "Formación en seguridad.",
      "Por qué esta combinación es mejor:",
      "1.",
      "GuardDuty: Detección inteligente (sin reglas manuales)",
      "2.",
      "EventBridge: enrutamiento flexible.",
      "3.",
      "Lambda: Respuesta automatizada (acción inmediata)",
      "4.",
      "Escalable: Sin infraestructura.",
      "5.",
      "Integral: cubre toda la actividad de la API de AWS.",
      "Alternativa (Manual):.",
      "CloudTrail → CloudWatch Logs → Filtros de métricas → Alarmas → SNS.",
      "Requiere definición de patrón manual.",
      "Menos inteligente.",
      "Respuesta manual."
    ],
    "others": []
  },
  {
    "id": "07-21",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa necesita proporcionar a los auditores acceso a informes y acuerdos de cumplimiento para diversos servicios de AWS. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "Artefacto de AWS",
      "B": "Gerente de auditoría de AWS",
      "C": "AWS Config",
      "D": "AWS Security Hub"
    },
    "explanation": "• AWS Artifact proporciona acceso bajo demanda a informes y acuerdos de cumplimiento de AWS.\n• Se utiliza para requisitos normativos, de cumplimiento y de auditoría.\n• Audit Manager sirve para automatizar la recopilación de pruebas, no el acceso a informes.\n• La configuración es para el cumplimiento de recursos, no para informes\n• Security Hub es para hallazgos de seguridad, no para documentos de cumplimiento.",
    "why": [
      "Se utiliza para requisitos normativos, de cumplimiento y de auditoría.",
      "Audit Manager sirve para automatizar la recopilación de pruebas, no el acceso a informes.",
      "La configuración es para el cumplimiento de recursos, no para informes.",
      "Security Hub es para hallazgos de seguridad, no para documentos de cumplimiento."
    ],
    "others": []
  },
  {
    "id": "07-22",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un equipo de seguridad quiere automatizar la recopilación de pruebas para marcos de cumplimiento como PCI DSS e HIPAA. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "Gerente de auditoría de AWS",
      "B": "Artefacto de AWS",
      "C": "AWS Config",
      "D": "AWS Security Hub"
    },
    "explanation": "• AWS Audit Manager automatiza la recopilación de pruebas para auditorías\n• Asigna recursos de AWS para controlar los requisitos.\n• El artefacto sirve para descargar informes de cumplimiento.\n• La configuración es para el cumplimiento de los recursos, no para la recopilación de pruebas.\n• Security Hub es para hallazgos de seguridad",
    "why": [
      "Asigna recursos de AWS para controlar los requisitos.",
      "El artefacto sirve para descargar informes de cumplimiento.",
      "La configuración es para el cumplimiento de recursos, no para la recopilación de pruebas.",
      "Security Hub es para hallazgos de seguridad."
    ],
    "others": []
  },
  {
    "id": "07-23",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa necesita administrar y utilizar módulos de seguridad de hardware (HSM) dedicados para operaciones criptográficas en la nube de AWS. ¿Qué servicio deberían utilizar?",
    "options": {
      "A": "AWS CloudHSM",
      "B": "AWS KMS",
      "C": "AWS Secrets Manager",
      "D": "Amazon Macie"
    },
    "explanation": "• AWS CloudHSM proporciona dispositivos HSM dedicados en la nube de AWS\n• Se utiliza para la administración de claves de un solo inquilino con cumplimiento de FIPS 140-3 Nivel 3\n• KMS es HSM compartido y administrado\n• Secrets Manager es para secretos, no para HSM\n• Macie es para la detección de PII",
    "why": [
      "Se utiliza para la administración de claves de un solo inquilino con cumplimiento de FIPS 140-3 Nivel 3.",
      "KMS son HSM administrados y compartidos.",
      "Secrets Manager es para secretos, no para HSM.",
      "Macie es para la detección de PII."
    ],
    "others": []
  },
  {
    "id": "07-24",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un analista de seguridad necesita investigar y visualizar las relaciones entre los recursos de AWS y la actividad sospechosa de un incidente de seguridad. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "Amazon Detective",
      "B": "AWS Security Hub",
      "C": "Amazon GuardDuty",
      "D": "AWS Config"
    },
    "explanation": "• Amazon Detective ayuda a analizar, investigar y visualizar incidentes de seguridad\n• Se integra con GuardDuty, Security Hub y CloudTrail\n• Security Hub agrega hallazgos, no investigaciones\n• GuardDuty detecta amenazas, no investiga\n• AWS Config rastrea los cambios de recursos, no las relaciones",
    "why": [
      "Se integra con GuardDuty, Security Hub y CloudTrail.",
      "Security Hub agrega hallazgos, no investigaciones.",
      "GuardDuty detecta amenazas, no investigaciones.",
      "AWS Config rastrea los cambios de recursos, no las relaciones."
    ],
    "others": []
  },
  {
    "id": "07-25",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa necesita proporcionar autenticación de Microsoft Active Directory para aplicaciones y recursos de AWS. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "Servicio de directorio de AWS",
      "B": "AWSIAM",
      "C": "Inicio de sesión único de AWS",
      "D": "Amazon Cognito"
    },
    "explanation": "• AWS Directory Service proporciona Microsoft AD administrado en AWS\n• Admite autenticación AD para EC2, RDS, WorkSpaces y más\n• IAM es para identidades nativas de AWS\n• SSO es para SSO basado en SAML/OIDC.\n• Cognito es para la autenticación de usuarios de aplicaciones, no para AD",
    "why": [
      "Admite autenticación AD para EC2, RDS, WorkSpaces y más.",
      "IAM es para identidades nativas de AWS.",
      "SSO es para SSO basado en SAML/OIDC.",
      "Cognito es para la autenticación del usuario de la aplicación, no para AD."
    ],
    "others": []
  },
  {
    "id": "08-1",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una arquitectura de microservicios necesita comunicación asincrónica donde múltiples servicios deben procesar el mismo mensaje de forma independiente. ¿Qué servicio de AWS es MÁS apropiado?",
    "options": {
      "A": "Cola estándar de Amazon SQS",
      "B": "Amazon SNS",
      "C": "Flujos de datos de Amazon Kinesis",
      "D": "AWS Step Functions"
    },
    "explanation": "• Amazon SNS (Servicio de notificación simple) proporciona un patrón de mensajería de publicación/subscripción\n• Un mensaje publicado → Varios suscriptores reciben una copia\n• Entrega basada en push (proactiva)\n• Perfecto para escenarios en abanico\nArquitectura del SNS:\nFunciones de redes sociales:\n• Filtrado de mensajes: los suscriptores reciben solo mensajes relevantes\n• Múltiples protocolos: SQS, Lambda, HTTP/HTTPS, correo electrónico, SMS, Mobile Push\n• Atributos del mensaje: metadatos para filtrado\n• Fan-out: entrega de 1 a muchos\n• Temas FIFO: pedido, entrega exactamente una vez\nSNS frente a SQS:\n| Característica | Amazon SNS | SQS |\n|---------|-----|-----|\n| Patrón | Pub/Sub (1 a muchos) | Cola (1 a 1) |\n| Entrega | Empujar | Tirar |\n| Suscriptores | Múltiple (desplegado) | Consumidor único por mensaje |\n| Retención | Sin retención | Hasta 14 días |\n| Caso de uso | Notificaciones, distribución en abanico | Desacoplamiento, amortiguación |",
    "why": [
      "Un mensaje publicado → Varios suscriptores reciben una copia.",
      "Entrega basada en push (proactiva)",
      "Perfecto para escenarios de despliegue.",
      "Arquitectura SNS:.",
      "Funciones de redes sociales:.",
      "Filtrado de mensajes: los suscriptores reciben solo mensajes relevantes.",
      "Múltiples protocolos: SQS, Lambda, HTTP/HTTPS, correo electrónico, SMS, Mobile Push.",
      "Atributos del mensaje: Metadatos para filtrado.",
      "Fan-out: entrega de 1 a muchos.",
      "Temas FIFO: pedido, entrega exactamente una vez.",
      "SNS frente a SQS:.",
      "| Característica | Amazon SNS | SQS |.",
      "|---------|-----|-----|.",
      "| Patrón | Pub/Sub (1 a muchos) | Cola (1 a 1) |.",
      "| Entrega | Empujar | Tirar |.",
      "| Suscriptores | Múltiple (desplegado) | Consumidor único por mensaje |.",
      "| Retención | Sin retención | Hasta 14 días |.",
      "| Caso de uso | Notificaciones, distribución en abanico | Desacoplamiento, almacenamiento en búfer |."
    ],
    "others": []
  },
  {
    "id": "08-2",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación necesita desacoplar componentes con almacenamiento en búfer de mensajes. Los mensajes deben procesarse exactamente una vez en estricto orden. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Cola estándar de Amazon SQS",
      "B": "Cola FIFO de Amazon SQS",
      "C": "Amazon SNS",
      "D": "Flujos de datos de Amazon Kinesis"
    },
    "explanation": "• Amazon SQS FIFO Queue proporciona procesamiento exactamente una vez con ordenamiento estricto\n• Mensajes procesados en el orden recibidos\n• La deduplicación basada en contenido evita duplicados\n• Los grupos de mensajes permiten el procesamiento paralelo\nEstándar SQS frente a FIFO:\n| Característica | Estándar | FIFO |\n|---------|----------|------|\n| Realizar pedidos | Mejor esfuerzo | Garantizado (FIFO) |\n| Entrega | Al menos una vez | Exactamente una vez |\n| Rendimiento | Ilimitado | 300 mensajes/s (3000 por lotes) |\n| Deduplicación | No | Sí (ventana de 5 min) |\n| Caso de uso | Alto rendimiento | Orden crítica |\nCaracterísticas de la cola FIFO:\n1. Orden de mensajes:\n2. Grupos de mensajes:\n• Múltiples grupos para procesamiento paralelo\n• Orden mantenido dentro de cada grupo\n• Diferentes grupos pueden procesar simultáneamente\n3. Deduplicación basada en contenido:\n• Hash SHA-256 del cuerpo del mensaje\n• Detección automática de duplicados (5 minutos)\n• O utilice MessageDeduplicationId\n4. Modo de alto rendimiento:\n• 3000 mensajes por segundo con procesamiento por lotes\n• 9000 TPS por grupo (con procesamiento por lotes)\nDenominación de cola FIFO:\n• Debe terminar con el sufijo `.fifo`\n• Ejemplo: `OrderQueue.fifo`\nCasos de uso:\n• Transacciones financieras: sin cargos duplicados\n• Procesamiento de pedidos: secuencia correcta\n• Ejecución de comandos: operaciones secuenciales\n• Abastecimiento de eventos: el pedido importa\nEjemplo de grupos de mensajes:\nMejores prácticas:\n1. Utilice grupos de mensajes para lograr paralelismo.\n2. Habilite la deduplicación basada en contenido\n3. Establezca un tiempo de espera de visibilidad adecuado\n4. Utilice operaciones por lotes (10 mensajes por lote)\n5. Supervisar `AproximadaEdadDeMensajeOldest`",
    "why": [
      "Mensajes procesados ​​en el orden recibidos.",
      "La deduplicación basada en contenido evita duplicados.",
      "Los grupos de mensajes permiten el procesamiento paralelo.",
      "Estándar SQS frente a FIFO:.",
      "| Característica | Estándar | FIFO |.",
      "|---------|----------|------|.",
      "| Realizar pedidos | Mejor esfuerzo | Garantizado (FIFO) |.",
      "| Entrega | Al menos una vez | Exactamente una vez |.",
      "| Rendimiento | Ilimitado | 300 mensajes/s (3000 por lotes) |.",
      "| Deduplicación | No | Sí (ventana de 5 min) |.",
      "| Caso de uso | Alto rendimiento | Orden crítica |.",
      "Características de la cola FIFO:.",
      "1.",
      "Orden de mensajes:.",
      "2.",
      "Grupos de mensajes:.",
      "Múltiples grupos para procesamiento paralelo.",
      "Orden mantenido dentro de cada grupo.",
      "Diferentes grupos pueden procesar simultáneamente.",
      "3.",
      "Deduplicación basada en contenido:.",
      "Hash SHA-256 del cuerpo del mensaje.",
      "Detección automática de duplicados (5 minutos)",
      "O utilice MessageDeduplicationId.",
      "4.",
      "Modo de alto rendimiento:.",
      "3000 mensajes por segundo con procesamiento por lotes.",
      "9.000 TPS por grupo (con procesamiento por lotes)",
      "Denominación de cola FIFO:.",
      "Debe terminar con el sufijo `.fifo`.",
      "Ejemplo: `OrderQueue.fifo`.",
      "Casos de uso:.",
      "Transacciones financieras: Sin cargos duplicados.",
      "Procesamiento de pedidos: Secuencia correcta.",
      "Ejecución de comandos: Operaciones secuenciales.",
      "Abastecimiento de eventos: el orden importa.",
      "Ejemplo de grupos de mensajes:.",
      "Mejores prácticas:.",
      "1.",
      "Utilice grupos de mensajes para lograr paralelismo.",
      "2.",
      "Habilite la deduplicación basada en contenido.",
      "3.",
      "Establezca un tiempo de espera de visibilidad adecuado.",
      "4.",
      "Utilice operaciones por lotes (10 mensajes por lote)",
      "5.",
      "Monitorear `AproximadaEdadDeMensajeOldest`."
    ],
    "others": []
  },
  {
    "id": "08-3",
    "module": "Application Integration",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación sin servidor necesita procesar datos en tiempo real desde miles de dispositivos IoT. Cada dispositivo envía datos cada segundo. ¿Qué servicio es MÁS apropiado?",
    "options": {
      "A": "AmazonSQS",
      "B": "Amazon SNS",
      "C": "Flujos de datos de Amazon Kinesis",
      "D": "Amazon MQ"
    },
    "explanation": "• Amazon Kinesis Data Streams diseñado para transmisión de datos en tiempo real\n• Maneja la ingesta masiva de datos de miles de productores.\n• Varios consumidores pueden leer el mismo flujo de datos\n• Retención de datos (24 horas a 365 días)\n• Registros ordenados por fragmento\nArquitectura de flujos de datos de Kinesis:\nConceptos clave de Kinesis:\n1. Fragmentos:\n• Unidad de rendimiento\n• 1 MB/s de escritura, 2 MB/s de lectura por fragmento\n• 1000 registros/s de escritura por fragmento\n• Ordenado dentro del fragmento\n2. Registros:\n• Clave de partición (determina el fragmento)\n• Número de secuencia (orden dentro del fragmento)\n• Blob de datos (hasta 1 MB)\n3. Consumidores:\n• Varios consumidores pueden leer la misma transmisión\n• Distribución mejorada (2 MB/s dedicados por consumidor)\n• Modo de rendimiento compartido (2 MB/s en total)\nCaracterísticas de Kinesis:\n| Característica | Descripción |\n|---------|-------------|\n| Retención | Por defecto 24 horas, hasta 365 días |\n| Realizar pedidos | Por clave/fragmento de partición |\n| Repetir | Puede reprocesar datos |\n| Escalado | Agregar/eliminar fragmentos |\n| Cifrado | En reposo (KMS), en tránsito (HTTPS) |\nPlanificación de capacidad:\nProductor de Kinesis (Python):\nConsumidor de Kinesis (Lambda):\nFamilia Kinesis:\n| Servicio | Caso de uso |\n|---------|----------|\n| Flujos de datos | Procesamiento personalizado en tiempo real |\n| Kinesis Data Firehose | Cargar en S3, Redshift, ES (más fácil) |\n| Análisis de datos | SQL sobre transmisión de datos |\n| Transmisiones de vídeo | Ingestión y procesamiento de vídeo |\nKinesis frente a SQS:\n| Característica | Kinesis | SQS |\n|---------|---------|-----|\n| Realizar pedidos | Por fragmento | Solo cola FIFO |\n| Múltiples consumidores | Sí | No (distribución a través de SNS) |\n| Retención | Hasta 365 días | Hasta 14 días |\n| Repetir | Sí | No |\n| Caso de uso | Streaming, análisis | Desacoplamiento, amortiguación |\nCuándo utilizar Kinesis:\n• Análisis en tiempo real\n• Recopilación de datos de registros y eventos\n• Ingestión de datos de IoT\n• Varios consumidores necesitan los mismos datos\n• Necesidad de reproducir datos\n• Transmisión ETL",
    "why": [
      "Maneja la ingesta masiva de datos de miles de productores.",
      "Varios consumidores pueden leer el mismo flujo de datos.",
      "Retención de datos (24 horas a 365 días)",
      "Registros ordenados por fragmento.",
      "Arquitectura de flujos de datos de Kinesis:.",
      "Conceptos clave de Kinesis:.",
      "1.",
      "Fragmentos:.",
      "Unidad de rendimiento.",
      "1 MB/s de escritura, 2 MB/s de lectura por fragmento.",
      "1000 registros/s de escritura por fragmento.",
      "Ordenado dentro del fragmento.",
      "2.",
      "Archivos:.",
      "Clave de partición (determina el fragmento)",
      "Número de secuencia (orden dentro del fragmento)",
      "Blob de datos (hasta 1 MB)",
      "3.",
      "Consumidores:.",
      "Varios consumidores pueden leer la misma transmisión.",
      "Distribución mejorada (2 MB/s dedicados por consumidor)",
      "Modo de rendimiento compartido (2 MB/s en total)",
      "Características de Kinesis:.",
      "| Característica | Descripción |.",
      "|---------|-------------|.",
      "| Retención | Por defecto 24 horas, hasta 365 días |.",
      "| Realizar pedidos | Por clave de partición/fragmento |.",
      "| Repetir | Puede reprocesar datos |.",
      "| Escalado | Agregar/eliminar fragmentos |.",
      "| Cifrado | En reposo (KMS), en tránsito (HTTPS) |.",
      "Planificación de capacidad:.",
      "Productor de Kinesis (Python):.",
      "Consumidor de Kinesis (Lambda):.",
      "Familia Kinesis:.",
      "| Servicio | Caso de uso |.",
      "|---------|----------|.",
      "| Flujos de datos | Procesamiento personalizado en tiempo real |.",
      "| Kinesis Data Firehose | Cargar en S3, Redshift, ES (más fácil) |.",
      "| Análisis de datos | SQL sobre transmisión de datos |.",
      "| Transmisiones de vídeo | Ingestión y procesamiento de vídeos |.",
      "Kinesis frente a SQS:.",
      "| Característica | Kinesis | SQS |.",
      "|---------|---------|-----|.",
      "| Realizar pedidos | Por fragmento | Solo cola FIFO |.",
      "| Múltiples consumidores | Sí | No (distribución a través de SNS) |.",
      "| Retención | Hasta 365 días | Hasta 14 días |.",
      "| Repetir | Sí | No |.",
      "| Caso de uso | Streaming, análisis | Desacoplamiento, almacenamiento en búfer |.",
      "Cuándo utilizar Kinesis:.",
      "Análisis en tiempo real.",
      "Recopilación de datos de registros y eventos.",
      "Ingestión de datos de IoT.",
      "Varios consumidores necesitan los mismos datos.",
      "Necesidad de reproducir datos.",
      "Transmisión ETL."
    ],
    "others": []
  },
  {
    "id": "08-4",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere implementar un patrón de distribución en el que un mensaje SNS activa múltiples colas SQS para diferentes servicios. ¿Cómo se llama esta arquitectura?",
    "options": {
      "A": "Encadenamiento de mensajes SQS",
      "B": "Distribución de SNS a SQS",
      "C": "Distribución de Kinesis",
      "D": "Enrutamiento de EventBridge"
    },
    "explanation": "• SNS a SQS Fan-out es un patrón común para el procesamiento asíncrono paralelo\n• Un solo mensaje al SNS activa múltiples colas SQS\n• Cada servicio consume de su propia cola\n• Arquitectura desacoplada y resiliente\nArquitectura de distribución SNS-SQS:\nBeneficios:\n1. Procesamiento Paralelo:\n• Los servicios se procesan de forma independiente\n• Sin bloqueo entre servicios\n2. Fiabilidad:\n• SQS proporciona persistencia de mensajes\n• Reintentos en caso de error\n• Cola de mensajes fallidos para mensajes fallidos\n3. Escalabilidad:\n• Cada servicio escala de forma independiente\n• Agregar nuevos suscriptores sin cambios\n4. Desacoplamiento:\n• Los servicios no se conocen entre sí\n• Agregar o quitar servicios fácilmente\nConfiguración:\nPaso 1: crear un tema de SNS:\nPaso 2: crear colas SQS:\nPaso 3: suscribir colas al tema:\nPaso 4: actualice la política de SQS (permita que SNS envíe):\nEjemplo del mundo real: pedido de comercio electrónico:\nFiltrado de mensajes (cada servicio recibe solo mensajes relevantes):\nManejo de errores: cola de mensajes fallidos:\nMejores prácticas:\n1. Utilice el filtrado de mensajes para reducir el procesamiento innecesario.\n2. Configurar colas de mensajes fallidos para mensajes fallidos\n3. Establezca un tiempo de espera de visibilidad adecuado\n4. Utilice el procesamiento por lotes para optimizar costos\n5. Supervisar la profundidad de la cola (CloudWatch)\n6. Implementar la idempotencia en los consumidores.\nSNS-SQS frente a Kinesis:\n• SNS-SQS: Procesamiento diferente por servicio\n• Kinesis: Mismos datos, diferentes consumidores",
    "why": [
      "Un solo mensaje al SNS desencadena múltiples colas SQS.",
      "Cada servicio consume de su propia cola.",
      "Arquitectura desacoplada y resiliente.",
      "Arquitectura de distribución SNS-SQS:.",
      "Beneficios:.",
      "1.",
      "Procesamiento paralelo:.",
      "Los servicios se procesan de forma independiente.",
      "Sin bloqueo entre servicios.",
      "2.",
      "Fiabilidad:.",
      "SQS proporciona persistencia de mensajes.",
      "Reintentos en caso de error.",
      "Cola de mensajes fallidos para mensajes fallidos.",
      "3.",
      "Escalabilidad:.",
      "Cada servicio escala de forma independiente.",
      "Añade nuevos suscriptores sin cambios.",
      "4.",
      "Desacoplamiento:.",
      "Los servicios no se conocen entre sí.",
      "Agregue o elimine servicios fácilmente.",
      "Configuración:.",
      "Paso 1: crear un tema de SNS:.",
      "Paso 2: Crear colas SQS:.",
      "Paso 3: suscribir colas al tema:.",
      "Paso 4: Actualizar la política SQS (permitir que SNS envíe):",
      "Ejemplo del mundo real: pedido de comercio electrónico:.",
      "Filtrado de mensajes (cada servicio recibe solo mensajes relevantes):.",
      "Manejo de errores - Cola de mensajes fallidos:.",
      "Mejores prácticas:.",
      "1.",
      "Utilice el filtrado de mensajes para reducir el procesamiento innecesario.",
      "2.",
      "Configure colas de mensajes fallidos para mensajes fallidos.",
      "3.",
      "Establezca un tiempo de espera de visibilidad adecuado.",
      "4.",
      "Utilice procesamiento por lotes para optimizar costos.",
      "5.",
      "Supervisar la profundidad de la cola (CloudWatch)",
      "6.",
      "Implementar la idempotencia en los consumidores.",
      "SNS-SQS frente a Kinesis:.",
      "SNS-SQS: Tramitación diferente por servicio.",
      "Kinesis: Mismos datos, diferentes consumidores."
    ],
    "others": []
  },
  {
    "id": "08-5",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un flujo de trabajo sin servidor necesita coordinar múltiples funciones Lambda con lógica condicional, ejecución paralela y manejo de errores. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon SQS con múltiples colas",
      "B": "Amazon SNS con filtrado de mensajes",
      "C": "AWS Step Functions",
      "D": "Amazon EventBridge"
    },
    "explanation": "• AWS Step Functions organiza flujos de trabajo sin servidor\n• Diseñador de flujo de trabajo visual\n• Manejo de errores y reintentos integrados\n• Ejecución paralela, lógica condicional, estados de espera\n• Integración con más de 200 servicios de AWS\nEjemplo de máquina de estados de funciones de paso:\nTipos de estado de funciones de paso:\n| Tipo de estado | Propósito | Ejemplo |\n|------------|---------|---------|\n| Tarea | Ejecutar trabajo (Lambda, ECS, SNS, etc.) | Llamar API, procesar datos |\n| Elección | Lógica condicional (si/si no) | Verificar el estado del inventario |\n| Paralelo | Ejecutar sucursales simultáneamente | Pago + Inventario + Correo electrónico |\n| Espera | Retraso (segundos, marca de tiempo) | Espere la aprobación |\n| Pase | Pasar entrada a salida, transformar | Transformación de datos |\n| Mapa | Iterar sobre matriz | Procesar artículos por lotes |\n| Triunfar | Terminación exitosa | Pedido completado |\n| Fallar | Terminación fallida | La validación falló |\nManejo de errores:\n1. Reintentar:\n2. Captura:\nTipos de flujo de trabajo de funciones de paso:\n| Tipo | Duración | Tasa de ejecución | Caso de uso |\n|------|----------|----------------|----------|\n| Estándar | Hasta 1 año | 2.000/s | De larga duración, exactamente una vez |\n| Expreso | Hasta 5 minutos | 100.000/s | Alto volumen, al menos una vez |\nIntegración con servicios de AWS:\n• Lambda: ejecutar funciones\n• ECS/Fargate: ejecutar contenedores\n• DynamoDB: lectura/escritura de datos\n• SNS/SQS: enviar mensajes\n• Glue: ejecutar trabajos ETL\n• SageMaker: entrenamiento/inferencia de aprendizaje automático\n• Lote: ejecutar trabajos por lotes\nAWS Step Functions frente a alternativas:\n| Herramienta | Mejor para |\n|------|----------|\n| AWS Step Functions | Flujos de trabajo complejos, orquestación |\n| lambda | Tareas individuales |\n| SQS | Procesamiento basado en colas |\n| Amazon EventBridge | Enrutamiento de eventos |\nCasos de uso del mundo real:\n1. Canalizaciones ETL: Extraer → Transformar → Cargar\n2. Procesamiento de pedidos: Validar → Pago → Cumplimiento\n3. Procesamiento de video: Cargar → Transcodificar → Miniatura → Entrega\n4. Aprendizaje automático: preparación de datos → capacitación → implementación → monitoreo\n5. Flujos de trabajo de aprobación: Enviar → Revisar → Aprobar/Rechazar → Ejecutar\nBeneficios del flujo de trabajo visual:\n• Lógica compleja fácil de entender\n• Depurar con historial de ejecución\n• Ver exactamente dónde ocurren las fallas\n• Modificar sin cambios de código (arrastrar y soltar)\nMejores prácticas:\n1. Utilice flujos de trabajo exprés para grandes volúmenes y corta duración.\n2. Implementar el manejo de errores en cada paso.\n3. Utilice estados paralelos para tareas independientes\n4. Monitorear con métricas de CloudWatch\n5. Utilice filtrado de entrada/salida para gestionar el tamaño de los datos\n6. Implementar idempotencia en funciones Lambda",
    "why": [
      "Diseñador de flujo de trabajo visual.",
      "Manejo de errores y reintentos integrados.",
      "Ejecución paralela, lógica condicional, estados de espera.",
      "Integración con más de 200 servicios de AWS.",
      "Ejemplo de máquina de estados de funciones de paso:.",
      "Tipos de estado de funciones de paso:.",
      "| Tipo de estado | Propósito | Ejemplo |.",
      "|------------|---------|---------|.",
      "| Tarea | Ejecutar trabajo (Lambda, ECS, SNS, etc.) | Llamar API, procesar datos |.",
      "| Elección | Lógica condicional (si/si no) | Verificar el estado del inventario |.",
      "| Paralelo | Ejecutar sucursales simultáneamente | Pago + Inventario + Correo electrónico |.",
      "| Espera | Retraso (segundos, marca de tiempo) | Espere la aprobación |.",
      "| Pase | Pasar entrada a salida, transformar | Transformación de datos |.",
      "| Mapa | Iterar sobre matriz | Procesar artículos por lotes |.",
      "| Triunfar | Terminación exitosa | Pedido completado |.",
      "| Fallar | Terminación fallida | La validación falló |.",
      "Manejo de errores:.",
      "1.",
      "Rever:.",
      "2.",
      "Atrapar:.",
      "Tipos de flujo de trabajo de funciones de paso:.",
      "| Tipo | Duración | Tasa de ejecución | Caso de uso |.",
      "|------|----------|----------------|----------|.",
      "| Estándar | Hasta 1 año | 2.000/s | De larga duración, exactamente una vez |.",
      "| Expreso | Hasta 5 minutos | 100.000/s | Gran volumen, al menos una vez |.",
      "Integración con servicios de AWS:.",
      "Lambda: ejecutar funciones.",
      "ECS/Fargate: ejecutar contenedores.",
      "DynamoDB: lectura/escritura de datos.",
      "SNS/SQS: enviar mensajes.",
      "AWS Glue: ejecute trabajos ETL.",
      "SageMaker: entrenamiento/inferencia de aprendizaje automático.",
      "Lote: ejecute trabajos por lotes.",
      "AWS Step Functions frente a alternativas:",
      "| Herramienta | Mejor para |.",
      "|------|----------|.",
      "| AWS Step Functions | Flujos de trabajo complejos, orquestación |.",
      "| lambda | Tareas individuales |.",
      "| SQS | Procesamiento basado en colas |.",
      "| Amazon EventBridge | Enrutamiento de eventos |.",
      "Casos de uso del mundo real:.",
      "1.",
      "Canalizaciones ETL: Extraer → Transformar → Cargar.",
      "2.",
      "Procesamiento de pedidos: Validar → Pago → Cumplimiento.",
      "3.",
      "Procesamiento de video: Cargar → Transcodificar → Miniatura → Entrega.",
      "4.",
      "Aprendizaje automático: Preparación de datos → Capacitación → Implementación → Monitoreo.",
      "5.",
      "Flujos de trabajo de aprobación: Enviar → Revisar → Aprobar/Rechazar → Ejecutar.",
      "Beneficios del flujo de trabajo visual:.",
      "Lógica compleja fácil de entender.",
      "Depurar con historial de ejecución.",
      "Vea exactamente dónde ocurren las fallas.",
      "Modificar sin cambios de código (arrastrar y soltar)",
      "Mejores prácticas:.",
      "1.",
      "Utilice flujos de trabajo exprés para grandes volúmenes y corta duración.",
      "2.",
      "Implemente el manejo de errores en cada paso.",
      "3.",
      "Utilice estados paralelos para tareas independientes.",
      "4.",
      "Supervise con métricas de CloudWatch.",
      "5.",
      "Utilice filtrado de entrada/salida para gestionar el tamaño de los datos.",
      "6.",
      "Implementar idempotencia en funciones Lambda."
    ],
    "others": []
  },
  {
    "id": "08-6",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación necesita cargar datos de transmisión en S3, Redshift y Elasticsearch con un código mínimo. ¿Qué servicio es MÁS apropiado?",
    "options": {
      "A": "Amazon Kinesis Data Streams con consumidores personalizados",
      "B": "Amazon Kinesis Data Firehose",
      "C": "AWS Lambda activado por Kinesis",
      "D": "Amazon SQS con consumidores de Lambda"
    },
    "explanation": "• Amazon Kinesis Data Firehose es un servicio totalmente administrado para cargar datos de streaming\n• No se requiere código (frente a Data Streams que necesita consumidores personalizados)\n• Escalado automático\n• Transformación de datos incorporada (Lambda)\n• Entrega directa a S3, Redshift, Elasticsearch, puntos finales HTTP\nArquitectura de Kinesis Data Firehose:\nCaracterísticas de la Kinesis Data Firehose:\n1. Escalado automático:\n• Sin planificación de capacidad\n• Escala a gigabytes por segundo\n• Pague por el volumen de datos\n2. Almacenamiento en búfer:\n• Búfer por tamaño (1-128 MB)\n• Buffer por tiempo (60-900 segundos)\n• Entrega cuando se alcanza cualquiera de los umbrales\n3. Transformación de datos:\n• La función Lambda procesa cada registro\n• Conversión de formato (JSON a Parquet/ORC)\n• Compresión (GZIP, ZIP, Snappy)\n4. Copia de seguridad:\n• Copia de seguridad de los datos de origen en S3\n• Registros fallidos para separar el prefijo S3\nConfiguración de entrega de Kinesis Data Firehose:\nEjemplo de transformación de datos (Lambda):\nDestinos de entrega:\n1.Amazon S3:\n• Almacenamiento de objetos\n• Lago de datos\n• Archivo\n• Partición por tiempo\n2. Amazon Redshift:\n• Almacén de datos\n• Análisis\n• Datos mediante el comando COPY de S3\n3. Búsqueda elástica de Amazon:\n• Búsqueda y análisis\n• Análisis de registros\n• Paneles de control en tiempo real\n4. Splunk:\n• Monitoreo de seguridad\n• Inteligencia operativa\n5. Puntos finales HTTP:\n• Destinos personalizados\n• Servicios de terceros\nFirehose vs flujos de datos:\n| Característica | Kinesis Data Firehose | Flujos de datos |\n|---------|---------------|--------------|\n| Gestión | Totalmente gestionado | Administrar fragmentos |\n| Destinos | Integrado (S3, Redshift, ES) | Código personalizado |\n| Escalado | Automático | Gestión manual de fragmentos |\n| Retención | Sin retención | 24h a 365 días |\n| Consumidores | Uno (entrega) | Múltiples posibles |\n| Caso de uso | Cargar a destinos | Procesamiento personalizado |\nComparación de costos:\nCuándo utilizar una Kinesis Data Firehose:\n• Cargar datos en S3, Redshift, ES, Splunk\n• No necesita múltiples consumidores\n• Quiere una solución totalmente administrada\n• Casi en tiempo real (latencia de más de 60 segundos)\n• Transformaciones simples\nCuándo utilizar flujos de datos:\n• Necesita procesamiento en tiempo real (< 1 segundo)\n• Múltiples consumidores\n• Lógica de procesamiento personalizada\n• Necesidad de reproducir datos\n• El orden importa dentro del fragmento\nEjemplos del mundo real:\n1. Análisis de secuencia de clics:\n2. Agregación de registros:\n3. Lago de datos:\nMejores prácticas:\n1. Utilice el almacenamiento en búfer para optimizar los costos (escrituras por lotes)\n2. Habilite la copia de seguridad de S3 para los registros de origen\n3. Utilice compresión (GZIP) para reducir los costos de almacenamiento.\n4. Convertir a formatos de columnas (Parquet/ORC) para análisis\n5. Particione los datos de S3 por tiempo para un mejor rendimiento de las consultas\n6. Supervisar la entrega a CloudWatch",
    "why": [
      "No se requiere código (frente a Data Streams que necesita consumidores personalizados)",
      "Escalado automático.",
      "Transformación de datos incorporada (Lambda)",
      "Entrega directa a S3, Redshift, Elasticsearch, puntos finales HTTP.",
      "Arquitectura de Kinesis Data Firehose:.",
      "Características de la Kinesis Data Firehose:.",
      "1.",
      "Escalado automático:.",
      "Sin planificación de capacidad.",
      "Escala a gigabytes por segundo.",
      "Pague por el volumen de datos.",
      "2.",
      "Almacenamiento en búfer:.",
      "Búfer por tamaño (1-128 MB)",
      "Buffer por tiempo (60-900 segundos)",
      "Entrega cuando se alcanza cualquiera de los umbrales.",
      "3.",
      "Transformación de datos:.",
      "La función Lambda procesa cada registro.",
      "Conversión de formato (JSON a Parquet/ORC)",
      "Compresión (GZIP, ZIP, Snappy)",
      "4.",
      "Respaldo:.",
      "Copia de seguridad de los datos de origen en S3.",
      "Registros fallidos para separar el prefijo S3.",
      "Configuración de entrega de Kinesis Data Firehose:.",
      "Ejemplo de transformación de datos (Lambda):.",
      "Destinos de entrega:.",
      "1.",
      "Amazon S3:.",
      "Almacenamiento de objetos.",
      "Lago de datos.",
      "Archivo.",
      "Partición por tiempo.",
      "2.",
      "Amazon Redshift:.",
      "Almacén de datos.",
      "Analítica.",
      "Datos mediante el comando COPY de S3.",
      "3.",
      "Amazon Elasticsearch:.",
      "Búsqueda y análisis.",
      "Análisis de registros.",
      "Paneles de control en tiempo real.",
      "4.",
      "Splunk:.",
      "Monitoreo de seguridad.",
      "Inteligencia operativa.",
      "5.",
      "Puntos finales HTTP:.",
      "Destinos personalizados.",
      "Servicios de terceros.",
      "Firehose vs flujos de datos:.",
      "| Característica | Kinesis Data Firehose | Flujos de datos |.",
      "|---------|---------------|--------------|.",
      "| Gestión | Totalmente gestionado | Administrar fragmentos |.",
      "| Destinos | Integrado (S3, Redshift, ES) | Código personalizado |.",
      "| Escalado | Automático | Gestión manual de fragmentos |.",
      "| Retención | Sin retención | 24h a 365 días |.",
      "| Consumidores | Uno (entrega) | Múltiples posibles |.",
      "| Caso de uso | Cargar a destinos | Procesamiento personalizado |.",
      "Comparación de costos:.",
      "Cuándo utilizar una Kinesis Data Firehose:",
      "Cargue datos en S3, Redshift, ES, Splunk.",
      "No necesita múltiples consumidores.",
      "Quiere una solución totalmente administrada.",
      "Casi en tiempo real (latencia de más de 60 segundos)",
      "Transformaciones simples.",
      "Cuándo utilizar flujos de datos:",
      "Necesita procesamiento en tiempo real (< 1 segundo)",
      "Múltiples consumidores.",
      "Lógica de procesamiento personalizada.",
      "Necesidad de reproducir datos.",
      "El orden importa dentro del fragmento.",
      "Ejemplos del mundo real:.",
      "1.",
      "Análisis de flujo de clics:.",
      "2.",
      "Agregación de registros:.",
      "3.",
      "Lago de datos:.",
      "Mejores prácticas:.",
      "1.",
      "Utilice el almacenamiento en búfer para optimizar el costo (escrituras por lotes)",
      "2.",
      "Habilite la copia de seguridad de S3 para los registros de origen.",
      "3.",
      "Utilice compresión (GZIP) para reducir los costos de almacenamiento.",
      "4.",
      "Convierta a formatos de columnas (Parquet/ORC) para análisis.",
      "5.",
      "Particione los datos de S3 por tiempo para mejorar el rendimiento de las consultas.",
      "6.",
      "Supervise la entrega a CloudWatch."
    ],
    "others": []
  },
  {
    "id": "08-7",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere enrutar eventos desde múltiples servicios de AWS a diferentes destinos según el contenido del evento. ¿Qué servicio proporciona enrutamiento de eventos centralizado?",
    "options": {
      "A": "Amazon SNS",
      "B": "AmazonSQS",
      "C": "Amazon EventBridge",
      "D": "AWS Step Functions"
    },
    "explanation": "• Amazon EventBridge es un bus de eventos sin servidor para aplicaciones y eventos de servicios de AWS.\n• Enrutamiento basado en contenido usando patrones de eventos\n• Más de 100 integraciones de servicios de AWS como fuentes de eventos\n• Más de 20 servicios de AWS como objetivos\nArquitectura de EventBridge:\nComponentes de EventBridge:\n1. Eventos:\n2. Reglas del evento (coincidencia de patrones):\n3. Autobuses para eventos:\n• Valor predeterminado: eventos de servicio de AWS\n• Personalizado: eventos de aplicación\n• Socio: eventos de proveedores de SaaS\n4. Objetivos:\n• Múltiples objetivos por regla (hasta 5)\n• Transformación de entrada\n• Reintentar políticas\nEjemplos del mundo real:",
    "why": [
      "Enrutamiento basado en contenido utilizando patrones de eventos.",
      "Más de 100 integraciones de servicios de AWS como fuentes de eventos.",
      "Más de 20 servicios de AWS como objetivos.",
      "Arquitectura de EventBridge:.",
      "Componentes de EventBridge:.",
      "1.",
      "Eventos:.",
      "2.",
      "Reglas del evento (coincidencia de patrones):",
      "3.",
      "Autobuses para eventos:.",
      "Valor predeterminado: eventos de servicio de AWS.",
      "Personalizado: Eventos de aplicación.",
      "Socio: eventos de proveedores de SaaS.",
      "4.",
      "Objetivos:.",
      "Múltiples objetivos por regla (hasta 5)",
      "Transformación de entrada.",
      "Reintentar políticas.",
      "Ejemplos del mundo real:."
    ],
    "others": []
  },
  {
    "id": "08-8",
    "module": "Application Integration",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación heredada utiliza la API Java Message Service (JMS). ¿Cuál es la MEJOR ruta de migración de AWS con cambios mínimos de código?",
    "options": {
      "A": "Migrar a Amazon SQS",
      "B": "Migrar a Amazon SNS",
      "C": "Migrar a Amazon MQ",
      "D": "Reescribir usando Kinesis"
    },
    "explanation": "• Amazon MQ es un intermediario de mensajes administrado para Apache ActiveMQ y RabbitMQ.\n• Protocolos JMS, AMQP, MQTT, OpenWire, STOMP\n• Cambios mínimos de código para levantar y cambiar\n• Compatible con las API de mensajería existentes\nAmazon MQ frente a SQS/SNS:\n| Característica | Amazon MQ | SQS/SNS |\n|---------|-----------|-----------------|\n| Protocolos | JMS, AMQP, MQTT, PISO | Solo API de AWS |\n| Migración | Cambios mínimos de código | Requiere cambios de código |\n| Caso de uso | Migración de aplicaciones heredadas | Aplicaciones nativas de la nube |\n| Escalado | Limitado | Altamente escalable |\n| Gestión | Corredor gestionado | Totalmente sin servidor |\n| Costo | Basado en instancias | Pago por uso |\nImplementación de Amazon MQ:\nCaracterísticas de Amazon MQ:\n1. Motores de corredores:\n• ActiveMQ: JMS, OpenWire, STOMP, MQTT, WSS\n• RabbitMQ: AMQP 0-9-1, MQTT, STOMP\n2. Alta disponibilidad:\n• Implementación activa/en espera (Multi-AZ)\n• Conmutación por error automática\n• Almacenamiento de mensajes duradero\n3. Conectividad de red:\n• Implementación de VPC\n• Conectividad privada\n• Grupos de seguridad\n4. Autenticación:\n• Autenticación sencilla\n• Integración LDAP\nEstrategia de migración:\nAntes (local):\nDespués (Amazon MQ): cambios mínimos:\nCuándo utilizar Amazon MQ:\n• Migración desde intermediarios de mensajes locales\n• Aplicaciones existentes que utilizan JMS, AMQP\n• Necesita compatibilidad de protocolo\n• Enrutamiento de mensajes complejos\n• Selectores y filtros de mensajes.\nCuándo utilizar SQS/SNS:\n• Aplicaciones nativas de la nube\n• Necesita escala masiva\n• Arquitectura sin servidor\n• Optimización de costos\n• Puede reescribir código\nConfiguración de Amazon MQ:\nComparación de costos:\nAmazon MQ:\n• Costos de instancia (por hora)\n• Costos de almacenamiento (EBS/EFS)\n• Transferencia de datos\nSQS/SNS:\n• Por solicitud\n• Sin costos de instancia\n• Generalmente más barato a escala\nMejores prácticas:\n1. Utilice Multi-AZ para la producción.\n2. Configurar actualizaciones automáticas de versiones menores.\n3. Habilite el registro de CloudWatch\n4. Utilice puntos finales de VPC para un acceso seguro\n5. Implementar selectores de mensajes para filtrado.\n6. Supervisar las métricas del corredor",
    "why": [
      "Amazon MQ es un agente de mensajes administrado para Apache ActiveMQ y RabbitMQ.",
      "Protocolos JMS, AMQP, MQTT, OpenWire, STOMP.",
      "Cambios mínimos de código para levantar y cambiar.",
      "Compatible con las API de mensajería existentes.",
      "Amazon MQ frente a SQS/SNS:.",
      "| Característica | Amazon MQ | SQS/SNS |.",
      "|---------|-----------|---------|.",
      "| Protocolos | JMS, AMQP, MQTT, PISO | Solo API de AWS |.",
      "| Migración | Cambios mínimos de código | Requiere cambios de código |.",
      "| Caso de uso | Migración de aplicaciones heredadas | Aplicaciones nativas de la nube |.",
      "| Escalado | Limitado | Altamente escalable |.",
      "| Gestión | Corredor gestionado | Totalmente sin servidor |.",
      "| Costo | Basado en instancias | Pago por uso |.",
      "Implementación de Amazon MQ:.",
      "Características de Amazon MQ:.",
      "1.",
      "Motores de intermediario:.",
      "ActiveMQ: JMS, OpenWire, STOMP, MQTT, WSS.",
      "RabbitMQ: AMQP 0-9-1, MQTT, STOMP.",
      "2.",
      "Alta disponibilidad:.",
      "Implementación activa/en espera (Multi-AZ)",
      "Conmutación por error automática.",
      "Almacenamiento de mensajes duradero.",
      "3.",
      "Conectividad de red:.",
      "Implementación de VPC.",
      "Conectividad privada.",
      "Grupos de seguridad.",
      "4.",
      "Autenticación:.",
      "Autenticación sencilla.",
      "Integración LDAP.",
      "Estrategia de migración:.",
      "Antes (local):.",
      "Después (Amazon MQ) - Cambios mínimos:.",
      "Cuándo utilizar Amazon MQ:.",
      "Migración desde intermediarios de mensajes locales.",
      "Aplicaciones existentes que utilizan JMS, AMQP.",
      "Necesita compatibilidad de protocolo.",
      "Enrutamiento de mensajes complejos.",
      "Selectores y filtros de mensajes.",
      "Cuándo utilizar SQS/SNS:.",
      "Aplicaciones nativas de la nube.",
      "Necesita escala masiva.",
      "Arquitectura sin servidor.",
      "Optimización de costes.",
      "Puede reescribir código.",
      "Configuración de Amazon MQ:.",
      "Comparación de costos:.",
      "Amazon MQ:.",
      "Costos de instancia (por hora)",
      "Costos de almacenamiento (EBS/EFS)",
      "Transferencia de datos.",
      "SQS/SNS:.",
      "Por solicitud.",
      "Sin costes de instancia.",
      "Generalmente más barato a escala.",
      "Mejores prácticas:.",
      "1.",
      "Utilice Multi-AZ para la producción.",
      "2.",
      "Configure actualizaciones automáticas de versiones menores.",
      "3.",
      "Habilite el registro de CloudWatch.",
      "4.",
      "Utilice puntos de enlace de VPC para un acceso seguro.",
      "5.",
      "Implementar selectores de mensajes para filtrado.",
      "6.",
      "Monitorear las métricas del corredor."
    ],
    "others": []
  },
  {
    "id": "08-9",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación publica métricas personalizadas en CloudWatch. Estas métricas deberían generar respuestas automáticas. ¿Cuál es el MEJOR enfoque?",
    "options": {
      "A": "Encuesta la API de CloudWatch periódicamente",
      "B": "Utilice alarmas de CloudWatch con SNS",
      "C": "Utilice la regla EventBridge para eventos de CloudWatch",
      "D": "Utilice Lambda para comprobar métricas"
    },
    "explanation": "• Las alarmas de CloudWatch monitorean métricas y activan acciones automáticamente\n• Integración de SNS para notificaciones y respuestas automáticas\n• Puede activar Auto Scaling, acciones EC2, SNS, Systems Manager\nArquitectura de alarmas de CloudWatch:\nEstados de alarma de CloudWatch:\n• OK: Métrica dentro del umbral\n• ALARMA: Umbral de métrica superado\n• INSUFFICIENT_DATA: No hay suficientes datos\nConfiguración de alarma:\nEjemplo de métricas personalizadas:\nAcciones de alarma:\n1. Notificaciones de redes sociales:\n2. Escalado automático:\n3. Acciones EC2:\n4. Acciones del Administrador de Sistemas:\nEjemplo de respuesta automatizada (Lambda):\nAlarmas compuestas (múltiples condiciones):\nEstadísticas de alarma:\n• Promedio: valor medio\n• Suma: Total\n• Mínimo: valor más bajo\n• Máximo: valor más alto\n• SampleCount: número de puntos de datos\n• p99: percentil 99\nMejores prácticas:\n1. Utilice nombres de alarma significativos\n2. Establecer periodos de evaluación adecuados (evitar aleteos)\n3. Utilice alarmas compuestas para condiciones complejas\n4. Pruebe las alarmas con CloudWatch Alarm Testing\n5. Documentar los umbrales de alarma\n6. Revisar y ajustar los umbrales periódicamente\nAlarmas de CloudWatch frente a EventBridge:\n• Alarmas: umbrales basados en métricas\n• EventBridge: basado en eventos (cambios de estado, llamadas API)",
    "why": [
      "CloudWatch Alarms monitorea métricas y activa acciones automáticamente.",
      "Integración de SNS para notificaciones y respuestas automáticas.",
      "Puede activar Auto Scaling, acciones EC2, SNS, Systems Manager.",
      "Arquitectura de alarmas de CloudWatch:.",
      "Estados de alarma de CloudWatch:.",
      "OK: Métrica dentro del umbral.",
      "ALARMA: Umbral de métrica superado.",
      "INSUFFICIENT_DATA: No hay suficientes datos.",
      "Configuración de alarma:.",
      "Ejemplo de métricas personalizadas:.",
      "Acciones de alarma:.",
      "1.",
      "Notificaciones SNS:.",
      "2.",
      "Escala automática:.",
      "3.",
      "Acciones EC2:.",
      "4.",
      "Acciones del Administrador de Sistemas:.",
      "Ejemplo de respuesta automatizada (Lambda):.",
      "Alarmas compuestas (múltiples condiciones):.",
      "Estadísticas de alarma:.",
      "Promedio: Valor medio.",
      "Suma: Total.",
      "Mínimo: valor más bajo.",
      "Máximo: valor más alto.",
      "SampleCount: número de puntos de datos.",
      "P99: percentil 99.",
      "Mejores prácticas:.",
      "1.",
      "Utilice nombres de alarma significativos.",
      "2.",
      "Establecer períodos de evaluación adecuados (evitar aleteos)",
      "3.",
      "Utilice alarmas compuestas para condiciones complejas.",
      "4.",
      "Pruebe alarmas con CloudWatch Alarm Testing.",
      "5.",
      "Documentar los umbrales de alarma.",
      "6.",
      "Revise y ajuste los umbrales periódicamente.",
      "Alarmas de CloudWatch frente a EventBridge:.",
      "Alarmas: Umbrales basados ​​en métricas.",
      "EventBridge: impulsado por eventos (cambios de estado, llamadas API)"
    ],
    "others": []
  },
  {
    "id": "08-10",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere implementar API Gateway para activar diferentes funciones Lambda según la ruta API. ¿Qué característica permite esto?",
    "options": {
      "A": "Etapas de la puerta de enlace API",
      "B": "Métodos de puerta de enlace API",
      "C": "Recursos de API Gateway con integración Lambda",
      "D": "Autorizadores de puerta de enlace API"
    },
    "explanation": "• Los recursos de API Gateway definen las rutas API\n• Cada recurso/método puede integrarse con diferentes funciones Lambda\n• Habilita el enrutamiento de API REST a microservicios\nIntegración API Gateway Lambda:\nEstructura de puerta de enlace API:\nTipos de integración de API Gateway:\n| Tipo | Caso de uso |\n|------|----------|\n| lambda | Backend sin servidor |\n| HTTP | Puntos finales HTTP |\n| Servicio AWS | Integración directa de servicios de AWS |\n| simulacro | Pruebas, devolución de respuesta fija |\n| Enlace VPC | Recursos privados de VPC |\nConfiguración de integración Lambda:\nIntegración de proxy Lambda (recomendado):\nCaracterísticas de la puerta de enlace API:\n1. Solicitud de Validación:\n• Validar los parámetros de la solicitud\n• Validar el cuerpo de la solicitud frente al esquema JSON\n• Rechazar solicitudes no válidas antes de invocar Lambda\n2. Transformación de Solicitud/Respuesta:\n• Transformar los datos de la solicitud\n• Respuesta del mapa de Lambda\n• Cambiar tipos de contenido\n3. Estrangulamiento:\n• Limitación de velocidad (solicitudes por segundo)\n• Capacidad de explosión\n• Limitación por cliente (claves API)\n4. Almacenamiento en caché:\n• Caché de respuestas en API Gateway\n• Reducir las invocaciones Lambda\n• TTL configurable\n5. Soporte CORS:\n• Habilitar solicitudes de origen cruzado\n• Configurar orígenes, encabezados y métodos permitidos.\n6. Autenticación/Autorización:\n• AWS IAM\n• Grupos de usuarios de Cognito\n• Autorizadores Lambda\n• Claves API\nEtapas de la puerta de enlace API:\nVariables de etapa (específicas del entorno):\nImplementación de puerta de enlace API:\nMejores prácticas:\n1. Utilice la integración de proxy Lambda para simplificar\n2. Habilite la validación de solicitudes\n3. Utilice etapas para entornos (dev/test/prod)\n4. Habilite el almacenamiento en caché para API de lectura intensa\n5. Implementar autenticación/autorización\n6. Habilite el registro de CloudWatch\n7. Utilice nombres de dominio personalizados\n8. Implementar limitación de velocidad\n9. Versione sus API\n10. Monitorear con rayos X\nPrecios de puerta de enlace API:\n• API REST: 3,50 USD por millón de solicitudes\n• API HTTP: $1,00 por millón de solicitudes (más barato)\n• WebSocket API: 1,00 USD por millón de mensajes\n• Transferencia de datos\nAPI HTTP frente a API REST:\n• API HTTP: más simple, más barata y más rápida\n• API REST: más funciones (validación de solicitudes, almacenamiento en caché, claves API)",
    "why": [
      "Cada recurso/método puede integrarse con diferentes funciones Lambda.",
      "Habilita el enrutamiento de API REST a microservicios.",
      "Integración API Gateway Lambda:.",
      "Estructura de puerta de enlace API:.",
      "Tipos de integración de API Gateway:.",
      "| Tipo | Caso de uso |.",
      "|------|----------|.",
      "| lambda | Backend sin servidor |.",
      "| HTTP | Puntos finales HTTP |.",
      "| Servicio AWS | Integración directa de servicios de AWS |.",
      "| simulacro | Probando, devuelve respuesta fija |.",
      "| Enlace VPC | Recursos privados de VPC |.",
      "Configuración de integración Lambda:.",
      "Integración de Lambda Proxy (recomendado):.",
      "Características de la puerta de enlace API:.",
      "1.",
      "Solicitud de Validación:.",
      "Validar los parámetros de la solicitud.",
      "Valide el cuerpo de la solicitud con el esquema JSON.",
      "Rechace solicitudes no válidas antes de invocar Lambda.",
      "2.",
      "Transformación de Solicitud/Respuesta:.",
      "Transformar los datos de la solicitud.",
      "Respuesta del mapa de Lambda.",
      "Cambiar tipos de contenido.",
      "3.",
      "Estrangulamiento:.",
      "Limitación de velocidad (solicitudes por segundo)",
      "Capacidad de explosión.",
      "Limitación por cliente (claves API)",
      "4.",
      "Almacenamiento en caché:.",
      "Caché de respuestas en API Gateway.",
      "Reducir las invocaciones Lambda.",
      "TTL configurables.",
      "5.",
      "Soporte CORS:.",
      "Habilite solicitudes de origen cruzado.",
      "Configurar orígenes, encabezados y métodos permitidos.",
      "6.",
      "Autenticación/Autorización:.",
      "AWSIAM.",
      "Grupos de usuarios de Cognito.",
      "Autorizadores Lambda.",
      "Claves API.",
      "Etapas de API Gateway:.",
      "Variables de etapa (específicas del entorno):",
      "Implementación de API Gateway:.",
      "Mejores prácticas:.",
      "1.",
      "Utilice la integración de proxy Lambda para simplificar.",
      "2.",
      "Habilitar la validación de solicitudes.",
      "3.",
      "Usar etapas para entornos (dev/test/prod)",
      "4.",
      "Habilite el almacenamiento en caché para API de lectura intensa.",
      "5.",
      "Implementar autenticación/autorización.",
      "6.",
      "Habilite el registro de CloudWatch.",
      "7.",
      "Utilice nombres de dominio personalizados.",
      "8.",
      "Implementar limitación de velocidad.",
      "9.",
      "Versione sus API.",
      "10.",
      "Monitorear con rayos X.",
      "Precios de API Gateway:.",
      "API REST: 3,50 dólares por millón de solicitudes.",
      "API HTTP: $1,00 por millón de solicitudes (más barato)",
      "API WebSocket: 1,00 USD por millón de mensajes.",
      "Transferencia de datos.",
      "API HTTP frente a API REST:.",
      "API HTTP: más simple, más barata y más rápida.",
      "API REST: más funciones (validación de solicitudes, almacenamiento en caché, claves API)"
    ],
    "others": []
  },
  {
    "id": "08-41",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa SaaS necesita automatizar la transferencia de datos de clientes desde Salesforce a Amazon S3 para realizar análisis. La solución debe estar completamente administrada y requerir un código mínimo. ¿Qué servicio de AWS debería utilizarse?",
    "options": {
      "A": "Flujo de aplicaciones de Amazon",
      "B": "AWS Glue",
      "C": "Amazon Kinesis Data Firehose",
      "D": "Sincronización de datos de AWS"
    },
    "explanation": "• Amazon AppFlow es un servicio de integración totalmente administrado\n• Automatiza la transferencia de datos entre aplicaciones SaaS (por ejemplo, Salesforce) y AWS\n• No se requiere código, admite programación y transformación\n• Glue es para ETL, no para integración directa de SaaS.\n• Firehose es para streaming, no para conectores SaaS\n• DataSync es para transferencias de archivos, no datos SaaS",
    "why": [
      "Automatiza la transferencia de datos entre aplicaciones SaaS (por ejemplo, Salesforce) y AWS.",
      "No se requiere código, admite programación y transformación.",
      "Glue es para ETL, no para integración directa de SaaS.",
      "Firehose es para transmisión, no para conectores SaaS.",
      "DataSync es para transferencias de archivos, no para datos SaaS."
    ],
    "others": []
  },
  {
    "id": "08-42",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un equipo de desarrollo está creando una API GraphQL para una aplicación móvil y quiere minimizar la administración de backend. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "AWS AppSync",
      "B": "Amazon API Gateway",
      "C": "AWS Lambda",
      "D": "Amazon Cognito"
    },
    "explanation": "• AWS AppSync es un servicio API GraphQL administrado\n• Maneja la sincronización de datos en tiempo real, las suscripciones y el acceso sin conexión\n• API Gateway es para API REST/HTTP\n• Lambda es computación, no administración de API\n• Cognito es para autenticación, no API",
    "why": [
      "Maneja la sincronización de datos en tiempo real, las suscripciones y el acceso sin conexión.",
      "API Gateway es para API REST/HTTP.",
      "Lambda es computación, no administración de API.",
      "Cognito es para autenticación, no para API."
    ],
    "others": []
  },
  {
    "id": "08-43",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa necesita implementar cargas de trabajo en contenedores en servidores locales y administrarlas mediante los servicios de AWS. ¿Qué solución deberían utilizar?",
    "options": {
      "A": "Amazon ECS en cualquier lugar",
      "B": "Amazon EKS en cualquier lugar",
      "C": "AWS Outposts",
      "D": "AWS Fargate"
    },
    "explanation": "• ECS Anywhere extiende ECS a servidores locales\n• Gestión centralizada desde la consola de AWS\n• EKS Anywhere es para Kubernetes, no para ECS\n• Outposts es para ejecutar la infraestructura de AWS en las instalaciones.\n• Fargate es contenedores sin servidor solo en AWS",
    "why": [
      "ECS Anywhere extiende ECS a servidores locales.",
      "Gestión centralizada desde la consola de AWS.",
      "EKS Anywhere es para Kubernetes, no para ECS.",
      "Outposts sirve para ejecutar la infraestructura de AWS en las instalaciones.",
      "Fargate son contenedores sin servidor solo en AWS."
    ],
    "others": []
  },
  {
    "id": "08-44",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un equipo de desarrollo móvil quiere probar su aplicación en una amplia gama de dispositivos reales en la nube. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "Granja de dispositivos AWS",
      "B": "AWS amplificar",
      "C": "Punto de referencia de Amazon",
      "D": "Amazon API Gateway"
    },
    "explanation": "• AWS Device Farm ofrece pruebas basadas en la nube en dispositivos móviles reales\n• Compatible con Android e iOS\n• Automatiza las pruebas y proporciona informes detallados.\n• Amplify es para desarrollo y alojamiento de aplicaciones.\n• Pinpoint es para la participación del usuario, no para realizar pruebas.\n• API Gateway es para API, no para pruebas de dispositivos",
    "why": [
      "Soporta Android e iOS.",
      "Automatiza las pruebas y proporciona informes detallados.",
      "Amplify es para desarrollo y alojamiento de aplicaciones.",
      "Pinpoint es para la participación del usuario, no para realizar pruebas.",
      "API Gateway es para API, no para pruebas de dispositivos."
    ],
    "others": []
  },
  {
    "id": "08-45",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un equipo de marketing quiere enviar notificaciones automáticas, correos electrónicos y mensajes SMS dirigidos a los usuarios en función de su comportamiento en una aplicación móvil. ¿Qué servicio de AWS debería utilizarse?",
    "options": {
      "A": "Punto de referencia de Amazon",
      "B": "Amazon SNS",
      "C": "AWS amplificar",
      "D": "AmazonSQS"
    },
    "explanation": "• Amazon Pinpoint es un servicio de análisis y marketing multicanal\n• Admite mensajes push, correo electrónico, SMS y dentro de la aplicación\n• Proporciona segmentación, análisis y gestión de campañas.\n• SNS es para notificaciones básicas, no para campañas específicas.\n• Amplify es para el desarrollo de aplicaciones, no para marketing\n• SQS es para hacer cola, no para enviar mensajes a los usuarios",
    "why": [
      "Admite mensajes push, correo electrónico, SMS y dentro de la aplicación.",
      "Proporciona segmentación, análisis y gestión de campañas.",
      "SNS es para notificaciones básicas, no para campañas dirigidas.",
      "Amplify es para el desarrollo de aplicaciones, no para marketing.",
      "SQS es para hacer cola, no para enviar mensajes a los usuarios."
    ],
    "others": []
  },
  {
    "id": "08-46",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa necesita integrar sus cargas de trabajo locales de Apache Kafka con los servicios de almacenamiento y análisis de AWS. ¿Qué servicio de AWS proporciona un entorno Kafka totalmente administrado y de alta disponibilidad?",
    "options": {
      "A": "Amazon MSK",
      "B": "Flujos de datos de Amazon Kinesis",
      "C": "AmazonSQS",
      "D": "AWS Glue Streaming"
    },
    "explanation": "• Amazon MSK (Transmisión administrada para Apache Kafka) proporciona un servicio Kafka totalmente administrado\n• Maneja el aprovisionamiento, la aplicación de parches y el escalado.\n• Se integra con Kinesis, Lambda, S3, Redshift\n• Kinesis es un servicio de streaming independiente, no compatible con Kafka\n• SQS es para colas de mensajes, no para transmisión\n• Glue Streaming es para ETL, no para la gestión de Kafka",
    "why": [
      "Maneja el aprovisionamiento, la aplicación de parches y el escalado.",
      "Se integra con Kinesis, Lambda, S3, Redshift.",
      "Kinesis es un servicio de streaming independiente, no compatible con Kafka.",
      "SQS es para colas de mensajes, no para transmisión.",
      "Glue Streaming es para ETL, no para la gestión de Kafka."
    ],
    "others": []
  },
  {
    "id": "09-1",
    "module": "Monitoring",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere monitorear la utilización de la memoria de sus instancias EC2 y activar una alarma cuando el uso de la memoria supera el 80%. ¿Qué combinación de acciones debería tomar el arquitecto de soluciones?",
    "options": {
      "A": "Habilite el monitoreo detallado en instancias EC2 y cree una alarma de CloudWatch en la métrica de memoria predeterminada",
      "B": "Instale el Agente de CloudWatch en instancias EC2, configúrelo para enviar métricas de memoria y cree una alarma de CloudWatch",
      "C": "Utilice el Administrador de sesión de AWS Systems Manager para ver métricas de memoria y crear alertas manualmente",
      "D": "Habilite el registro de CloudTrail y utilice CloudWatch Logs Insights para consultar el uso de la memoria"
    },
    "explanation": "• Las instancias EC2 NO envían métricas de memoria de forma predeterminada\n• El agente de CloudWatch debe estar instalado para recopilar métricas de memoria.\n• Una vez que el agente envía métricas a CloudWatch, puede crear alarmas\n• La opción A es incorrecta porque la memoria no es una métrica predeterminada\n• La opción C no proporciona alertas automáticas\n• La opción D es para auditar llamadas API, no métricas de rendimiento.",
    "why": [
      "Las instancias EC2 NO envían métricas de memoria de forma predeterminada.",
      "Se debe instalar el agente de CloudWatch para recopilar métricas de memoria.",
      "Una vez que el agente envía métricas a CloudWatch, puede crear alarmas."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Es incorrecto porque la memoria no es una métrica predeterminada."
      },
      {
        "l": [
          "C"
        ],
        "t": "No proporciona alertas automáticas."
      },
      {
        "l": [
          "D"
        ],
        "t": "Es para auditar llamadas API, no métricas de rendimiento."
      }
    ]
  },
  {
    "id": "09-2",
    "module": "Monitoring",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un equipo de seguridad necesita identificar qué usuario de IAM finalizó una instancia EC2 crítica la semana pasada. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "Registros de Amazon CloudWatch",
      "B": "AWS Config",
      "C": "AWS CloudTrail",
      "D": "AWS Systems Manager"
    },
    "explanation": "• CloudTrail registra las llamadas API, incluida la QUIÉN las realizó.\n• Realiza un seguimiento de eventos de gestión como TerminateInstances\n• Los registros de CloudTrail incluyen la identidad del usuario, la marca de tiempo y la acción.\n• La opción A (CloudWatch Logs) monitorea los registros de aplicaciones, no las llamadas API\n• La opción B (Configuración) rastrea la configuración de recursos, no quién realizó los cambios.\n• La opción D (Administrador de sistemas) es para la gestión operativa.",
    "why": [
      "CloudTrail registra las llamadas a la API, incluida la QUIÉN las realizó.",
      "Realiza un seguimiento de eventos de gestión como TerminateInstances.",
      "Los registros de CloudTrail incluyen la identidad del usuario, la marca de tiempo y la acción.",
      "La opción A (CloudWatch Logs) monitorea los registros de aplicaciones, no las llamadas API.",
      "La opción B (Configuración) rastrea la configuración de los recursos, no quién realizó los cambios.",
      "La opción D (Administrador de sistemas) es para la gestión operativa."
    ],
    "others": []
  },
  {
    "id": "09-3",
    "module": "Monitoring",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa debe asegurarse de que todos los depósitos de S3 tengan habilitado el control de versiones y reciban notificaciones automáticas cuando se infrinja este requisito. ¿Qué servicio de AWS debería utilizarse?",
    "options": {
      "A": "AWS CloudTrail con registros de CloudWatch",
      "B": "Amazon CloudWatch con métricas personalizadas",
      "C": "AWS Config con reglas administradas por AWS",
      "D": "AWS Systems Manager State Manager"
    },
    "explanation": "• AWS Config evalúa las configuraciones de recursos según las reglas\n• La regla administrada `s3-bucket-versioning-enabled` verifica el control de versiones\n• La configuración puede enviar notificaciones SNS cuando no cumple\n• CloudTrail rastrea quién realizó cambios pero no evalúa el cumplimiento\n• CloudWatch monitorea las métricas de rendimiento, no el cumplimiento de la configuración.\n• Systems Manager State Manager es para la configuración de instancias EC2",
    "why": [
      "AWS Config evalúa las configuraciones de recursos según las reglas.",
      "La regla administrada `s3-bucket-versioning-enabled` verifica el control de versiones.",
      "La configuración puede enviar notificaciones SNS cuando no cumple.",
      "CloudTrail rastrea quién realizó cambios pero no evalúa el cumplimiento.",
      "CloudWatch monitorea las métricas de rendimiento, no el cumplimiento de la configuración.",
      "Systems Manager State Manager es para la configuración de instancias EC2."
    ],
    "others": []
  },
  {
    "id": "09-4",
    "module": "Monitoring",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un arquitecto de soluciones necesita acceder a instancias EC2 para solucionar problemas sin abrir el puerto 22 ni administrar claves SSH. ¿Qué servicio de AWS proporciona esta capacidad?",
    "options": {
      "A": "AWS CloudShell",
      "B": "Administrador de sesiones de AWS Systems Manager",
      "C": "Conexión de instancia Amazon EC2",
      "D": "AWS Direct Connect"
    },
    "explanation": "• Session Manager proporciona acceso seguro al shell sin claves SSH ni puertos abiertos\n• Utiliza permisos de IAM para el control de acceso\n• Los registros de sesión se pueden enviar a S3 o CloudWatch Logs\n• EC2 Instance Connect todavía requiere que el puerto 22 esté abierto\n• CloudShell sirve para ejecutar comandos de AWS CLI, no para acceder a instancias.\n• Direct Connect es para conectividad de red",
    "why": [
      "Session Manager proporciona acceso seguro al shell sin claves SSH ni puertos abiertos.",
      "Utiliza permisos de IAM para el control de acceso.",
      "Los registros de sesión se pueden enviar a S3 o CloudWatch Logs.",
      "EC2 Instance Connect aún requiere que el puerto 22 esté abierto.",
      "CloudShell sirve para ejecutar comandos de AWS CLI, no para acceder a instancias.",
      "Direct Connect es para conectividad de red."
    ],
    "others": []
  },
  {
    "id": "09-5",
    "module": "Monitoring",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere parchear automáticamente todas las instancias EC2 de su flota durante un período de mantenimiento programado. ¿Qué servicio de AWS deberían utilizar?",
    "options": {
      "A": "AWS CloudFormation con scripts personalizados",
      "B": "AWS Systems Manager Patch Manager",
      "C": "Amazon EventBridge con Lambda",
      "D": "AWS Config con acciones correctivas"
    },
    "explanation": "• Patch Manager automatiza la aplicación de parches al sistema operativo y a las aplicaciones.\n• Las ventanas de mantenimiento definen cuándo parchear\n• Las líneas base de parches especifican qué parches instalar\n• CloudFormation es para infraestructura como código, no para parches\n• EventBridge podría activar la aplicación de parches, pero no está diseñado específicamente\n• Config evalúa el cumplimiento pero no aplica parches",
    "why": [
      "Patch Manager automatiza la aplicación de parches al sistema operativo y a las aplicaciones.",
      "Las ventanas de mantenimiento definen cuándo parchear.",
      "Las líneas base de parches especifican qué parches instalar.",
      "CloudFormation es para infraestructura como código, no para parches.",
      "EventBridge podría activar la aplicación de parches, pero no está diseñado específicamente.",
      "Config evalúa el cumplimiento pero no aplica parches."
    ],
    "others": []
  },
  {
    "id": "09-6",
    "module": "Monitoring",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación escribe datos de registro en CloudWatch Logs. Es necesario alertar al equipo de operaciones cuando la palabra \"ERROR\" aparece más de 10 veces en 5 minutos. ¿Cómo se debe configurar esto?",
    "options": {
      "A": "Utilice CloudWatch Logs Insights para consultar errores y comprobarlos manualmente",
      "B": "Cree un filtro de métrica para contar las ocurrencias de \"ERROR\" y luego cree una alarma en esa métrica",
      "C": "Exporte registros a S3 y use Athena para consultar errores",
      "D": "Utilice CloudTrail para realizar un seguimiento de eventos de error y crear notificaciones SNS"
    },
    "explanation": "• Los filtros de métricas extraen métricas de los datos de registro.\n• El patrón de filtro puede contar las apariciones de \"ERROR\"\n• La alarma de CloudWatch puede activarse en la métrica personalizada\n• Esto proporciona alertas automatizadas en tiempo real.\n• La opción A requiere intervención manual\n• La opción C añade complejidad innecesaria y no es en tiempo real\n• CloudTrail es para llamadas API, no para registros de aplicaciones.",
    "why": [
      "Los filtros de métricas extraen métricas de los datos de registro.",
      "El patrón de filtro puede contar las apariciones de \"ERROR\"",
      "La alarma de CloudWatch puede activarse en la métrica personalizada.",
      "Esto proporciona alertas automatizadas en tiempo real.",
      "CloudTrail es para llamadas API, no para registros de aplicaciones."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Requiere intervención manual."
      },
      {
        "l": [
          "C"
        ],
        "t": "Agrega complejidad innecesaria y no es en tiempo real."
      }
    ]
  },
  {
    "id": "09-7",
    "module": "Monitoring",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa necesita realizar un seguimiento de todos los cambios de configuración en los grupos de seguridad en varias cuentas y regiones de AWS. ¿Cuál es la solución MÁS eficiente?",
    "options": {
      "A": "Habilite CloudTrail en cada cuenta y región",
      "B": "Cree funciones Lambda para monitorear los cambios del grupo de seguridad",
      "C": "Utilice AWS Config con un agregador de configuración",
      "D": "Utilice CloudWatch Events en cada región"
    },
    "explanation": "• AWS Config registra los cambios en la configuración de recursos\n• Config Aggregator proporciona una vista centralizada de todas las cuentas y regiones.\n• Realiza un seguimiento del historial de configuración y las relaciones\n• CloudTrail rastrea quién realizó cambios pero no agrega configuraciones\n• Lambda requeriría desarrollo y mantenimiento personalizados\n• CloudWatch Events podría detectar cambios pero no proporciona seguimiento histórico",
    "why": [
      "AWS Config registra los cambios en la configuración de recursos.",
      "Config Aggregator proporciona una vista centralizada de cuentas y regiones.",
      "Realiza un seguimiento del historial de configuración y las relaciones.",
      "CloudTrail rastrea quién realizó cambios pero no agrega configuraciones.",
      "Lambda requeriría desarrollo y mantenimiento personalizados.",
      "CloudWatch Events podría detectar cambios pero no proporciona seguimiento histórico."
    ],
    "others": []
  },
  {
    "id": "09-8",
    "module": "Monitoring",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un arquitecto de soluciones necesita ejecutar un script en todas las instancias EC2 de toda la flota sin acceso SSH. El script debería instalar actualizaciones de seguridad. ¿Qué servicio proporciona esta capacidad?",
    "options": {
      "A": "Comando de ejecución de AWS Systems Manager",
      "B": "AWS Lambda con API EC2",
      "C": "Eventos de Amazon CloudWatch",
      "D": "Corrección de AWS Config"
    },
    "explanation": "• Run Command ejecuta comandos en instancias administradas de forma remota\n• No se requiere SSH, utiliza permisos de IAM\n• Proporciona control de velocidad y manejo de errores\n• Historial de comandos registrado en CloudTrail\n• Lambda podría invocar Run Command pero no es la solución directa\n• CloudWatch Events puede activar Ejecutar comando pero no es el servicio de ejecución\n• La corrección de configuración utiliza documentos de automatización de SSM",
    "why": [
      "Run Command ejecuta comandos en instancias administradas de forma remota.",
      "No se requiere SSH, utiliza permisos de IAM.",
      "Proporciona control de velocidad y manejo de errores.",
      "Historial de comandos registrado en CloudTrail.",
      "Lambda podría invocar Run Command pero no es la solución directa.",
      "CloudWatch Events puede activar Run Command pero no es el servicio de ejecución.",
      "La corrección de configuración utiliza documentos de automatización de SSM."
    ],
    "others": []
  },
  {
    "id": "09-9",
    "module": "Monitoring",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una organización quiere detectar actividad API inusual, como un aumento repentino en la creación de instancias EC2. ¿Qué característica de CloudTrail debería habilitarse?",
    "options": {
      "A": "Eventos de datos de CloudTrail",
      "B": "Eventos de gestión de CloudTrail",
      "C": "Eventos de información de CloudTrail",
      "D": "Rutas multirregionales de CloudTrail"
    },
    "explanation": "• CloudTrail Insights utiliza el aprendizaje automático para detectar actividad inusual\n• Identifica anomalías como picos en el aprovisionamiento de recursos o acciones de IAM\n• Los eventos de gestión rastrean las llamadas API pero no detectan anomalías\n• Los eventos de datos rastrean operaciones de gran volumen (objetos S3, invocaciones Lambda)\n• Los senderos multirregionales recopilan registros pero no analizan patrones",
    "why": [
      "Identifica anomalías como picos en el aprovisionamiento de recursos o acciones de IAM.",
      "Los eventos de administración rastrean las llamadas API pero no detectan anomalías.",
      "Los eventos de datos rastrean operaciones de gran volumen (objetos S3, invocaciones Lambda)",
      "Los senderos de varias regiones recopilan registros pero no analizan patrones."
    ],
    "others": []
  },
  {
    "id": "09-10",
    "module": "Monitoring",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita almacenar CloudWatch Logs durante 10 años para cumplir con los requisitos de cumplimiento. ¿Cuál es el enfoque más costo-efectivo?",
    "options": {
      "A": "Mantenga registros en CloudWatch Logs con retención de 10 años",
      "B": "Exporte registros a S3 y luego realice la transición a S3 Glacier Deep Archive",
      "C": "Exporte registros a S3 y luego use S3 Intelligent-Tiering",
      "D": "Transmita registros a Kinesis Data Firehose y guárdelos en Redshift"
    },
    "explanation": "• La retención de CloudWatch Logs es costosa para el almacenamiento a largo plazo\n• Exporte a S3 para un almacenamiento costo-efectivo a largo plazo\n• S3 Glacier Deep Archive es el más económico para archivar ($0,00099 por GB/mes)\n• S3 Intelligent-Tiering es más caro que Glacier Deep Archive\n• Redshift es para análisis, no para archivado costo-efectivo",
    "why": [
      "La retención de CloudWatch Logs es costosa para el almacenamiento a largo plazo.",
      "Exporte a S3 para un almacenamiento costo-efectivo a largo plazo.",
      "S3 Glacier Deep Archive es el más barato para archivar ($0,00099 por GB/mes)",
      "S3 Intelligent-Tiering es más caro que Glacier Deep Archive.",
      "Redshift es para análisis, no para archivado costo-efectivo."
    ],
    "others": []
  },
  {
    "id": "09-11",
    "module": "Monitoring",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un equipo de desarrollo necesita consultar los registros de la aplicación para solucionar problemas. Los registros se almacenan en CloudWatch Logs. ¿Qué característica deberían utilizar para el análisis de registros ad hoc?",
    "options": {
      "A": "Métricas de CloudWatch",
      "B": "Información sobre registros de CloudWatch",
      "C": "Paneles de control de CloudWatch",
      "D": "Amazon CloudWatch Alarms"
    },
    "explanation": "• CloudWatch Logs Insights proporciona análisis de registros interactivos\n• Lenguaje de consulta diseñado específicamente para buscar y analizar registros\n• Puede encontrar errores, contar eventos, calcular percentiles\n• Las métricas son para datos numéricos de rendimiento.\n• Los paneles visualizan pero no realizan consultas\n• Las alarmas se activan en los umbrales",
    "why": [
      "Lenguaje de consulta diseñado específicamente para buscar y analizar registros.",
      "Puede encontrar errores, contar eventos, calcular percentiles.",
      "Las métricas son para datos numéricos de rendimiento.",
      "Los paneles visualizan pero no consultan.",
      "Las alarmas se activan en los umbrales."
    ],
    "others": []
  },
  {
    "id": "09-12",
    "module": "Monitoring",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa quiere remediar automáticamente los recursos que no cumplen con las normas. Por ejemplo, cuando se crea un depósito de S3 sin cifrado, se debe cifrar automáticamente. ¿Qué solución logra esto?",
    "options": {
      "A": "Reglas de AWS Config con corrección automática mediante documentos de automatización de SSM",
      "B": "Eventos de CloudWatch con funciones Lambda",
      "C": "AWS CloudTrail con notificaciones SNS",
      "D": "Gerente de Sistemas Gerente de Estado"
    },
    "explanation": "• Las reglas de AWS Config evalúan el cumplimiento\n• La corrección automática utiliza documentos de automatización de SSM\n• Puede activar la remediación cuando los recursos no cumplen con los requisitos.\n• CloudWatch Events podría funcionar, pero Config está diseñado específicamente para el cumplimiento\n• CloudTrail solo rastrea los cambios, no los corrige\n• State Manager mantiene la configuración EC2, no S3",
    "why": [
      "Las reglas de AWS Config evalúan el cumplimiento.",
      "La corrección automática utiliza documentos de automatización de SSM.",
      "Puede desencadenar una remediación cuando los recursos dejan de cumplir.",
      "CloudWatch Events podría funcionar, pero Config está diseñado específicamente para cumplir con las normas.",
      "CloudTrail solo rastrea los cambios, no los corrige.",
      "State Manager mantiene la configuración de EC2, no S3."
    ],
    "others": []
  },
  {
    "id": "09-13",
    "module": "Monitoring",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un arquitecto de soluciones necesita almacenar datos de configuración confidenciales, como contraseñas de bases de datos a las que pueden acceder las instancias EC2 y las funciones Lambda. La solución debe admitir cifrado e historial de versiones. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "AWS Secrets Manager",
      "B": "Almacén de parámetros de AWS Systems Manager",
      "C": "Amazon S3 con control de versiones",
      "D": "AWS Config"
    },
    "explanation": "• Parameter Store almacena de forma segura secretos y datos de configuración\n• Admite cifrado con KMS\n• Mantiene el historial de versiones\n• Se integra con EC2, Lambda, CloudFormation\n• Secrets Manager también es válido pero más caro (incluye rotación automática)\n• Para el contexto del examen, Parameter Store es parte de Systems Manager\n• S3 no está diseñado para la gestión de configuración\n• La configuración es para el seguimiento del cumplimiento.",
    "why": [
      "Parameter Store almacena de forma segura secretos y datos de configuración.",
      "Admite cifrado con KMS.",
      "Mantiene el historial de versiones.",
      "Se integra con EC2, Lambda, CloudFormation.",
      "Secrets Manager también es válido pero más caro (incluye rotación automática)",
      "Para el contexto del examen, Parameter Store es parte de Systems Manager.",
      "S3 no está diseñado para la gestión de configuración.",
      "La configuración es para el seguimiento del cumplimiento."
    ],
    "others": []
  },
  {
    "id": "09-14",
    "module": "Monitoring",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene una aplicación multirregional y necesita crear un panel unificado que muestre las métricas de CloudWatch de todas las regiones. ¿Es esto posible?",
    "options": {
      "A": "No, los paneles de CloudWatch son específicos de cada región únicamente",
      "B": "Sí, los paneles de CloudWatch admiten métricas entre regiones",
      "C": "Sí, pero solo con CloudWatch Logs, no con métricas",
      "D": "Sí, pero requiere que CloudWatch Events agregue datos"
    },
    "explanation": "• Los paneles de CloudWatch admiten vistas entre regiones y entre cuentas\n• Puede agregar gráficos de múltiples regiones a un solo panel\n• Vista global de aplicaciones distribuidas\n• No se requiere ningún servicio de agregación adicional",
    "why": [
      "Los paneles de CloudWatch admiten vistas entre regiones y entre cuentas.",
      "Puede agregar gráficos de múltiples regiones a un solo panel.",
      "Proporciona una vista global de aplicaciones distribuidas en múltiples regiones.",
      "No se requiere ningún servicio de agregación adicional."
    ],
    "others": []
  },
  {
    "id": "09-15",
    "module": "Monitoring",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un equipo de operaciones necesita recopilar metadatos sobre todas las instancias EC2, incluidas las aplicaciones instaladas, los detalles del sistema operativo y la configuración de la red. ¿Qué función de Systems Manager deberían utilizar?",
    "options": {
      "A": "Administrador de sistemas Administrador de sesiones",
      "B": "Inventario del administrador de sistemas",
      "C": "Administrador de sistemas Administrador de parches",
      "D": "Comando de ejecución del administrador de sistemas"
    },
    "explanation": "• Systems Manager Inventory recopila metadatos de instancias administradas\n• Reúne información sobre el sistema operativo, aplicaciones y configuración de red.\n• Puede consultar y visualizar con el panel de inventario\n• El Administrador de sesiones es para acceso al shell.\n• Patch Manager es para parchear\n• Ejecutar comando ejecuta comandos",
    "why": [
      "Recopila información sobre el sistema operativo, aplicaciones y configuración de red.",
      "Puede consultar y visualizar con el panel de inventario.",
      "Session Manager es para acceso al shell.",
      "Patch Manager es para parchear.",
      "Ejecutar comando ejecuta comandos."
    ],
    "others": []
  },
  {
    "id": "09-16",
    "module": "Monitoring",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa debe asegurarse de que los registros de CloudTrail no hayan sido manipulados para realizar auditorías de cumplimiento. ¿Qué característica debería habilitarse?",
    "options": {
      "A": "Rutas multirregionales de CloudTrail",
      "B": "Validación de la integridad del archivo de registro de CloudTrail",
      "C": "Información sobre CloudTrail",
      "D": "Eventos de datos de CloudTrail"
    },
    "explanation": "• La validación de la integridad del archivo de registro utiliza firmas digitales\n• Garantiza que los registros no se hayan modificado después de la entrega\n• Requerido para cumplimiento e investigaciones forenses\n• Los senderos multirregionales permiten el registro entre regiones\n• Las estadísticas detectan actividad inusual\n• Los eventos de datos rastrean las operaciones de recursos",
    "why": [
      "La validación de la integridad del archivo de registro utiliza firmas digitales.",
      "Garantiza que los registros no se hayan modificado después de la entrega.",
      "Requerido para cumplimiento e investigaciones forenses.",
      "Los senderos multirregionales permiten el registro entre regiones.",
      "Los insights detectan actividad inusual.",
      "Los eventos de datos rastrean las operaciones de recursos."
    ],
    "others": []
  },
  {
    "id": "09-17",
    "module": "Monitoring",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un arquitecto de soluciones necesita procesar CloudWatch Logs en tiempo real y enviar datos filtrados a una aplicación de análisis. ¿Qué solución se debe utilizar?",
    "options": {
      "A": "Exporte registros a S3 y use Athena",
      "B": "Utilice suscripciones a CloudWatch Logs con Kinesis Data Streams",
      "C": "Utilice CloudWatch Logs Insights con consultas programadas",
      "D": "Exportar logs a S3 y procesarlos con AWS Lambda"
    },
    "explanation": "• Las suscripciones a CloudWatch Logs permiten el procesamiento en tiempo real\n• Puede enviar a Kinesis Data Streams para análisis en tiempo real\n• También es compatible con Kinesis Data Firehose y Lambda\n• La exportación de S3 no es en tiempo real (proceso por lotes)\n• Logs Insights es para consultas ad hoc, no para transmisión",
    "why": [
      "Las suscripciones a CloudWatch Logs permiten el procesamiento en tiempo real.",
      "Puede enviar a Kinesis Data Streams para realizar análisis en tiempo real.",
      "También es compatible con Kinesis Data Firehose y Lambda.",
      "La exportación de S3 no es en tiempo real (proceso por lotes)",
      "Logs Insights es para consultas ad hoc, no para transmisión."
    ],
    "others": []
  },
  {
    "id": "09-18",
    "module": "Monitoring",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa desea realizar un seguimiento de cuándo se adjuntó una política de IAM específica a una función y ver el historial de configuración completo. ¿Qué servicio proporciona esta capacidad?",
    "options": {
      "A": "Solo AWS CloudTrail",
      "B": "Solo AWS Config",
      "C": "Tanto AWS CloudTrail como AWS Config",
      "D": "Analizador de acceso IAM"
    },
    "explanation": "• CloudTrail muestra QUIÉN adjuntó la política y CUÁNDO (detalles de la llamada API)\n• Config muestra el historial de configuración y el cronograma de cambios\n• Ambos servicios se complementan para una visibilidad completa\n• CloudTrail: \"¿Quién hizo qué y cuándo?\"\n• Config: \"¿Cómo se verá ahora y con el tiempo?\"\n• IAM Access Analyzer analiza las políticas de recursos para el acceso externo",
    "why": [
      "CloudTrail muestra QUIÉN adjuntó la política y CUÁNDO (detalles de la llamada API)",
      "Config muestra el historial de configuración y el cronograma de cambios.",
      "Ambos servicios se complementan para una visibilidad completa.",
      "CloudTrail: \"¿Quién hizo qué y cuándo?\"",
      "Configuración: \"¿Cómo se ve ahora y con el tiempo?\"",
      "IAM Access Analyzer analiza las políticas de recursos para el acceso externo."
    ],
    "others": []
  },
  {
    "id": "09-19",
    "module": "Monitoring",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación debe mantener un estado deseado en las instancias EC2, asegurando que el software específico esté siempre instalado y ejecutándose. ¿Qué característica de Systems Manager se debe utilizar?",
    "options": {
      "A": "Comando de ejecución del administrador de sistemas",
      "B": "Gerente de Sistemas Gerente de Estado",
      "C": "Automatización del administrador de sistemas",
      "D": "Administrador de sistemas Administrador de parches"
    },
    "explanation": "• State Manager mantiene la configuración de estado deseada\n• Crea asociaciones entre documentos e instancias.\n• Aplica continuamente la configuración\n• Ejecutar comando ejecuta comandos únicos\n• La automatización ejecuta flujos de trabajo\n• Patch Manager maneja la aplicación de parches",
    "why": [
      "State Manager mantiene la configuración de estado deseada.",
      "Crea asociaciones entre documentos e instancias.",
      "Aplica continuamente la configuración.",
      "Ejecutar comando ejecuta comandos únicos.",
      "La automatización ejecuta flujos de trabajo.",
      "Patch Manager maneja los parches."
    ],
    "others": []
  },
  {
    "id": "09-20",
    "module": "Monitoring",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa necesita consultar cinco años de registros de CloudTrail para investigar incidentes de seguridad. ¿Cuál es la solución MÁS eficiente?",
    "options": {
      "A": "Descargue todos los registros de S3 y use herramientas locales",
      "B": "Utilice Amazon Athena para consultar los registros de CloudTrail en S3",
      "C": "Utilice CloudTrail Lake para consultar registros con SQL",
      "D": "Importar registros a Elasticsearch"
    },
    "explanation": "• CloudTrail Lake está diseñado específicamente para consultar registros de CloudTrail\n• Utiliza SQL para consultar eventos\n• Puede retener eventos por hasta 7 años\n• Agrega registros de múltiples cuentas/regiones\n• Athena podría funcionar, pero CloudTrail Lake está optimizado para este caso de uso.\n• La opción A es ineficiente y no escalable\n• Elasticsearch añade complejidad innecesaria",
    "why": [
      "CloudTrail Lake está diseñado específicamente para consultar registros de CloudTrail.",
      "Utiliza SQL para consultar eventos.",
      "Puede retener eventos por hasta 7 años.",
      "Agrega registros de múltiples cuentas/regiones.",
      "Athena podría funcionar, pero CloudTrail Lake está optimizado para este caso de uso.",
      "Elasticsearch agrega complejidad innecesaria."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Es ineficiente y no escalable."
      }
    ]
  },
  {
    "id": "10-1",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere migrar rápidamente una aplicación local de gran tamaño a AWS con cambios mínimos. La aplicación se ejecuta en máquinas virtuales y debe estar operativa en un plazo de 2 semanas. ¿Qué estrategia de migración se debe utilizar?",
    "options": {
      "A": "Refactorice la aplicación para usar Lambda y DynamoDB",
      "B": "Realojamiento (Lift and Shift) mediante el servicio de migración de aplicaciones de AWS",
      "C": "Recompra migrando a una solución SaaS",
      "D": "Cambie la plataforma migrando a contenedores en ECS"
    },
    "explanation": "• Rehost (Lift and Shift) es la estrategia de migración más rápida\n• AWS Application Migration Service (MGN) automatiza la migración de servidores\n• Mueve las máquinas virtuales a EC2 con cambios mínimos\n• Cumple con el requisito de fecha límite de 2 semanas\n• La opción A (Refactor) lleva meses de desarrollo\n• La opción C (recompra) requiere encontrar y adoptar software nuevo.\n• La opción D (Replataforma) requiere un esfuerzo de contenedorización",
    "why": [
      "AWS Application Migration Service (MGN) automatiza la migración de servidores.",
      "Mueve las máquinas virtuales a EC2 con cambios mínimos.",
      "Cumple con el requisito de plazo de 2 semanas.",
      "La opción A (Refactor) lleva meses de desarrollo.",
      "La opción C (Recompra) requiere encontrar y adoptar nuevo software.",
      "La opción D (Replataforma) requiere un esfuerzo de contenedorización."
    ],
    "others": []
  },
  {
    "id": "10-2",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un arquitecto de soluciones necesita migrar 50 TB de datos desde un servidor NFS local a Amazon S3. La empresa dispone de una conexión a Internet de 100 Mbps. ¿Qué servicio es MÁS apropiado?",
    "options": {
      "A": "Sincronización de datos de AWS",
      "B": "AWS Snowball",
      "C": "AWS Direct Connect",
      "D": "Familia de transferencias de AWS"
    },
    "explanation": "• 50 TB a 100 Mbps tardarían aproximadamente 46 días\n• Snowball está diseñado para grandes transferencias de datos con ancho de banda limitado\n• Puede transferir entre 50 y 80 TB por dispositivo en aproximadamente una semana\n• DataSync funciona a través de la red pero sería demasiado lento\n• Direct Connect es para conectividad continua, no para migración única\n• Transfer Family es para acceso SFTP/FTPS a S3\nCálculo: 50 TB = 400.000 Gb ÷ 100 Mbps = 4.000.000 segundos ≈ 46 días",
    "why": [
      "50 TB a más de 100 Mbps tardarían aproximadamente 46 días.",
      "Snowball está diseñado para grandes transferencias de datos con ancho de banda limitado.",
      "Puede transferir entre 50 y 80 TB por dispositivo en aproximadamente una semana.",
      "DataSync funciona a través de la red pero sería demasiado lento.",
      "Direct Connect es para una conectividad continua, no para una migración única.",
      "Transfer Family es para acceso SFTP/FTPS a S3.",
      "Cálculo: 50 TB = 400.000 Gb ÷ 100 Mbps = 4.000.000 segundos ≈ 46 días."
    ],
    "others": []
  },
  {
    "id": "10-3",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere migrar una base de datos Oracle a Amazon Aurora PostgreSQL. Es necesario convertir los esquemas de la base de datos y los procedimientos almacenados. ¿Qué combinación de servicios se debe utilizar?",
    "options": {
      "A": "Solo AWS DMS",
      "B": "Herramienta de conversión de esquemas de AWS (SCT) únicamente",
      "C": "AWS SCT para convertir el esquema, luego AWS DMS para migrar datos",
      "D": "AWS DataSync para transferir la base de datos"
    },
    "explanation": "• Esta es una migración heterogénea (diferentes motores de base de datos)\n• SCT convierte esquemas, procedimientos almacenados y funciones.\n• DMS migra los datos reales con un tiempo de inactividad mínimo\n• DMS por sí solo no convierte esquemas para migraciones heterogéneas\n• SCT por sí solo no migra datos\n• DataSync es para sistemas de archivos, no bases de datos",
    "why": [
      "Esta es una migración heterogénea (diferentes motores de base de datos)",
      "SCT convierte esquemas, procedimientos almacenados y funciones.",
      "DMS migra los datos reales con un tiempo de inactividad mínimo.",
      "DMS por sí solo no convierte esquemas para migraciones heterogéneas.",
      "La SCT por sí sola no migra datos.",
      "DataSync es para sistemas de archivos, no para bases de datos."
    ],
    "others": []
  },
  {
    "id": "10-4",
    "module": "Migration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita replicar continuamente datos desde una base de datos MySQL local a Amazon RDS para MySQL con fines de análisis. La base de datos de origen debe permanecer operativa. ¿Qué servicio de AWS debería utilizarse?",
    "options": {
      "A": "Sincronización de datos de AWS",
      "B": "Servicio de migración de bases de datos (DMS) de AWS con CDC",
      "C": "AWS Snowball Edge",
      "D": "Aceleración de transferencia de Amazon S3"
    },
    "explanation": "• DMS admite la replicación continua de datos mediante Change Data Capture (CDC)\n• La base de datos de origen permanece operativa durante la migración\n• Migración homogénea (MySQL a MySQL)\n• Mantiene el origen y el destino sincronizados\n• DataSync es para sistemas de archivos, no bases de datos\n• Snowball es para transferencias únicas\n• La aceleración de transferencia de S3 es para cargas de S3",
    "why": [
      "DMS admite la replicación continua de datos mediante Change Data Capture (CDC)",
      "La base de datos de origen permanece operativa durante la migración.",
      "Migración homogénea (MySQL a MySQL)",
      "Mantiene el origen y el destino sincronizados.",
      "DataSync es para sistemas de archivos, no para bases de datos.",
      "Snowball es para transferencias únicas.",
      "La aceleración de transferencia de S3 es para cargas de S3."
    ],
    "others": []
  },
  {
    "id": "10-5",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un arquitecto de soluciones necesita transferir datos entre Amazon EFS en us-east-1 y Amazon S3 en us-west-2 diariamente. ¿Qué servicio ofrece transferencias automatizadas y programadas?",
    "options": {
      "A": "Sincronización de datos de AWS",
      "B": "AWS Snow Family",
      "C": "Familia de transferencias de AWS",
      "D": "Replicación entre regiones de Amazon S3"
    },
    "explanation": "• DataSync admite transferencias entre servicios de almacenamiento de AWS\n• Puede programar tareas (por hora, día, semana)\n• Admite transferencias de EFS a S3\n• Servicio automatizado y gestionado\n• Snow Family es para transferencias de dispositivos físicos\n• Transfer Family es para acceso SFTP/FTPS\n• S3 CRR es solo para S3 a S3",
    "why": [
      "DataSync admite transferencias entre servicios de almacenamiento de AWS.",
      "Puede programar tareas (por hora, por día, por semana)",
      "Admite transferencias de EFS a S3.",
      "Servicio automatizado y gestionado.",
      "Snow Family es para transferencias de dispositivos físicos.",
      "Transfer Family es para acceso SFTP/FTPS.",
      "S3 CRR es solo para S3 a S3."
    ],
    "others": []
  },
  {
    "id": "10-6",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa está migrando una aplicación heredada a AWS pero quiere minimizar los cambios. La aplicación utiliza una versión específica del sistema operativo y controladores personalizados que no son compatibles con los servicios nativos de la nube. ¿Qué estrategia de migración es MÁS apropiada?",
    "options": {
      "A": "Refactorizar a la arquitectura sin servidor",
      "B": "Cambiar de plataforma a servicios gestionados",
      "C": "Rehospedar (levantar y cambiar) a EC2",
      "D": "Recomprar una solución SaaS"
    },
    "explanation": "• Rehost (Lift and Shift) mueve la aplicación tal como está\n• EC2 admite sistemas operativos y controladores personalizados\n• Se requieren cambios mínimos\n• Ruta de migración rápida\n• Refactorizar requiere una nueva arquitectura\n• Es posible que Replatform no admita requisitos personalizados\n• La recompra requiere encontrar SaaS compatible",
    "why": [
      "EC2 admite controladores y sistemas operativos personalizados.",
      "Se requieren cambios mínimos.",
      "Ruta de migración rápida.",
      "Refactor requiere una nueva arquitectura.",
      "Es posible que Replatform no admita requisitos personalizados.",
      "La recompra requiere encontrar SaaS compatible."
    ],
    "others": []
  },
  {
    "id": "10-7",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una organización desea realizar un seguimiento del progreso de la migración de 200 aplicaciones en varias cuentas y regiones de AWS. ¿Qué servicio proporciona visibilidad centralizada?",
    "options": {
      "A": "AWS CloudWatch",
      "B": "Centro de migración de AWS",
      "C": "AWS Systems Manager",
      "D": "AWS Config"
    },
    "explanation": "• Migration Hub proporciona seguimiento centralizado de las migraciones\n• Agrega el progreso de múltiples herramientas de migración\n• Admite seguimiento de múltiples cuentas y múltiples regiones\n• Se integra con DMS, servicio de migración de aplicaciones, etc.\n• CloudWatch monitorea los recursos, no las migraciones\n• Systems Manager gestiona la infraestructura\n• Config rastrea el cumplimiento de la configuración",
    "why": [
      "Migration Hub proporciona un seguimiento centralizado de las migraciones.",
      "Agrega el progreso de múltiples herramientas de migración.",
      "Admite seguimiento de múltiples cuentas y múltiples regiones.",
      "Se integra con DMS, servicio de migración de aplicaciones, etc.",
      "CloudWatch monitorea los recursos, no las migraciones.",
      "Systems Manager gestiona la infraestructura.",
      "Config realiza un seguimiento del cumplimiento de la configuración."
    ],
    "others": []
  },
  {
    "id": "10-8",
    "module": "Migration",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita migrar datos desde un clúster HDFS local a Amazon S3. Los datos deben estar cifrados en tránsito. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "AWS Snowball",
      "B": "Sincronización de datos de AWS",
      "C": "AWS Direct Connect",
      "D": "Puerta de enlace de almacenamiento de AWS"
    },
    "explanation": "• DataSync admite HDFS como fuente\n• Cifra datos en tránsito con TLS\n• Transferencia de datos rápida y automatizada\n• Puede transferir a S3\n• Snowball no es compatible con HDFS directamente\n• Direct Connect es para conectividad de red\n• Storage Gateway es para almacenamiento híbrido, no para migración",
    "why": [
      "DataSync admite HDFS como fuente.",
      "Cifra datos en tránsito con TLS.",
      "Transferencia de datos automatizada y rápida.",
      "Puede transferirse a S3.",
      "Snowball no es compatible con HDFS directamente.",
      "Direct Connect es para conectividad de red.",
      "Storage Gateway es para almacenamiento híbrido, no para migración."
    ],
    "others": []
  },
  {
    "id": "10-9",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una migración de base de datos que utiliza AWS DMS debe manejar transacciones grandes y minimizar el impacto en el rendimiento de la base de datos de origen. ¿Cómo se debe dimensionar la instancia de replicación?",
    "options": {
      "A": "Utilice la instancia más pequeña para minimizar costos",
      "B": "Utilice un tipo de instancia basado en la carga de trabajo de la base de datos de origen y el volumen de datos",
      "C": "Utilice siempre la instancia más grande disponible",
      "D": "El tamaño de la instancia no afecta el rendimiento de DMS"
    },
    "explanation": "• El tamaño de la instancia de replicación afecta el rendimiento\n• Debe basarse en la carga de trabajo, el volumen de datos y la complejidad.\n• Las instancias más grandes manejan más rendimiento y transformaciones complejas\n• El tamaño insuficiente provoca una migración lenta y un posible impacto en la fuente\n• El sobredimensionamiento desperdicia dinero\n• El dimensionamiento adecuado requiere un análisis de la carga de trabajo",
    "why": [
      "El tamaño de la instancia de replicación afecta el rendimiento.",
      "Debe basarse en la carga de trabajo, el volumen de datos y la complejidad.",
      "Las instancias más grandes manejan más rendimiento y transformaciones complejas.",
      "El tamaño insuficiente provoca una migración lenta y un posible impacto en la fuente.",
      "El sobredimensionamiento desperdicia dinero.",
      "El dimensionamiento adecuado requiere un análisis de la carga de trabajo."
    ],
    "others": []
  },
  {
    "id": "10-10",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa quiere migrar una base de datos local de Microsoft SQL Server a AWS. Quieren minimizar los gastos generales de gestión y mantener la compatibilidad. ¿Qué objetivo deberían elegir?",
    "options": {
      "A": "Amazon RDS para servidor SQL",
      "B": "Microsoft SQL Server en EC2",
      "C": "Amazon Aurora PostgreSQL",
      "D": "AmazonDynamoDB"
    },
    "explanation": "• RDS para SQL Server es un servicio administrado (gastos generales mínimos)\n• Mantiene la compatibilidad con SQL Server\n• Esta es una estrategia de \"Replataforma\"\n• La opción B requiere administrar EC2 y OS (más gastos generales)\n• La opción C requiere migración heterogénea y cambios de código\n• La opción D es NoSQL y requiere una nueva arquitectura de la aplicación.",
    "why": [
      "RDS para SQL Server es un servicio administrado (gastos generales mínimos)",
      "Mantiene la compatibilidad con SQL Server.",
      "Esta es una estrategia de \"Replataforma\"."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Requiere administrar EC2 y OS (más gastos generales)"
      },
      {
        "l": [
          "C"
        ],
        "t": "Requiere migración heterogénea y cambios de código."
      },
      {
        "l": [
          "D"
        ],
        "t": "Es NoSQL, requiere una re-arquitectura de la aplicación."
      }
    ]
  },
  {
    "id": "10-11",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Durante una migración de base de datos con AWS DMS, ¿qué tipo de tarea se debe utilizar para realizar una carga de datos inicial seguida de una replicación continua?",
    "options": {
      "A": "Sólo carga completa",
      "B": "CDC (captura de datos modificados) únicamente",
      "C": "Carga completa + CDC",
      "D": "Múltiples tareas de carga completa"
    },
    "explanation": "• Carga completa + CDC es el patrón de migración más común\n• Carga completa transfiere datos existentes\n• Los CDC replican los cambios en curso\n• Minimiza el tiempo de inactividad\n• La carga completa únicamente no captura los cambios después de la carga inicial\n• CDC únicamente no transfiere datos existentes\n• Múltiples cargas completas no capturan los cambios",
    "why": [
      "Full Load transfiere datos existentes.",
      "Los CDC replican los cambios en curso.",
      "Minimiza el tiempo de inactividad.",
      "La carga completa solo no captura los cambios después de la carga inicial.",
      "CDC solo no transfiere datos existentes.",
      "Varias cargas completas no capturan los cambios."
    ],
    "others": []
  },
  {
    "id": "10-12",
    "module": "Migration",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene 500 TB de datos para migrar del sistema local a AWS. La conexión a Internet es de 1 Gbps, pero los requisitos comerciales prohíben utilizar todo el ancho de banda. ¿Qué solución es más costo-efectivo?",
    "options": {
      "A": "Utilice AWS DataSync con limitación de ancho de banda",
      "B": "Solicite varios dispositivos AWS Snowball",
      "C": "Actualice la conexión a Internet a 10 Gbps",
      "D": "Utilice AWS Direct Connect con una conexión de 10 Gbps"
    },
    "explanation": "• 500 TB es muy grande, Snowball está diseñado para esto\n• Incluso con 1 Gbps, la transferencia llevaría meses\n• No se puede utilizar todo el ancho de banda debido a requisitos comerciales\n• Snowball es más rápido y costo-efectivo para grandes migraciones\n• DataSync con limitación sería demasiado lento\n• Actualizar la conexión es caro\n• Direct Connect requiere tiempo para aprovisionarse",
    "why": [
      "500 TB es muy grande, Snowball está diseñado para esto.",
      "Incluso con 1 Gbps, la transferencia llevaría meses.",
      "No se puede utilizar todo el ancho de banda debido a requisitos comerciales.",
      "Snowball es más rápido y costo-efectivo para grandes migraciones.",
      "DataSync con limitación sería demasiado lento.",
      "Actualizar la conexión es costoso.",
      "Direct Connect requiere tiempo para aprovisionarse."
    ],
    "others": []
  },
  {
    "id": "10-13",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación almacena datos en un recurso compartido de archivos SMB local. La empresa quiere migrar estos datos a AWS y seguir accediendo a ellos a través del protocolo SMB. ¿Qué solución debería implementarse?",
    "options": {
      "A": "Use DataSync para transferir a S3, luego use S3 File Gateway",
      "B": "Utilice DataSync para transferir a FSx para Windows File Server",
      "C": "Utilice Snowball para transferir a EFS",
      "D": "Utilice la puerta de enlace de volumen de Storage Gateway"
    },
    "explanation": "• DataSync admite SMB como fuente\n• FSx para Windows File Server proporciona protocolo SMB nativo\n• Ruta de migración perfecta para recursos compartidos de archivos de Windows\n• S3 File Gateway presenta S3 como NFS/SMB pero utiliza almacenamiento S3\n• EFS no es compatible de forma nativa con SMB (usa NFS)\n• Volume Gateway es para almacenamiento en bloque",
    "why": [
      "DataSync admite SMB como fuente.",
      "FSx para Windows File Server proporciona el protocolo SMB nativo.",
      "Ruta de migración perfecta para recursos compartidos de archivos de Windows.",
      "S3 File Gateway presenta S3 como NFS/SMB pero utiliza almacenamiento S3.",
      "EFS no es compatible de forma nativa con SMB (usa NFS)",
      "Volume Gateway es para almacenamiento en bloque."
    ],
    "others": []
  },
  {
    "id": "10-14",
    "module": "Migration",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa utiliza AWS DMS para migrar una base de datos. Deben asegurarse de que los datos estén cifrados tanto en tránsito como en reposo. ¿Cómo se puede lograr esto?",
    "options": {
      "A": "DMS no admite el cifrado",
      "B": "Habilite SSL/TLS para conexiones y use instancias RDS cifradas",
      "C": "Utilice VPN para todas las conexiones",
      "D": "El cifrado es automático y no se puede configurar."
    },
    "explanation": "• DMS admite el cifrado en tránsito mediante SSL/TLS\n• Las instancias RDS de destino pueden utilizar cifrado en reposo\n• La instancia de replicación también se puede cifrar\n• Tanto las conexiones de origen como las de destino deben utilizar SSL\n• VPN añade seguridad pero no es necesaria para el cifrado\n• El cifrado debe configurarse explícitamente",
    "why": [
      "DMS admite el cifrado en tránsito mediante SSL/TLS.",
      "Las instancias RDS de destino pueden utilizar cifrado en reposo.",
      "La instancia de replicación también se puede cifrar.",
      "Tanto las conexiones de origen como las de destino deben utilizar SSL.",
      "VPN agrega seguridad pero no es necesaria para el cifrado.",
      "El cifrado debe configurarse explícitamente."
    ],
    "others": []
  },
  {
    "id": "10-15",
    "module": "Migration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un arquitecto de soluciones necesita programar una tarea de DataSync para que se ejecute todos los días a las 2 a. m. UTC. ¿Cómo se puede configurar esto?",
    "options": {
      "A": "DataSync no admite la programación",
      "B": "Utilice la programación de tareas integrada en DataSync",
      "C": "Utilice EventBridge para activar tareas de DataSync",
      "D": "Utilice Lambda con expresiones cron"
    },
    "explanation": "• DataSync tiene programación de tareas incorporada\n• Puede programar intervalos horarios, diarios, semanales o personalizados\n• No se requieren servicios adicionales\n• EventBridge también podría activar tareas, pero no es necesario\n• Lambda es una complejidad innecesaria\n• La programación es una función nativa de DataSync",
    "why": [
      "DataSync tiene programación de tareas incorporada.",
      "Puede programar intervalos horarios, diarios, semanales o personalizados.",
      "No se requieren servicios adicionales.",
      "EventBridge también podría activar tareas, pero no es necesario.",
      "Lambda es una complejidad innecesaria.",
      "La programación es una función nativa de DataSync."
    ],
    "others": []
  },
  {
    "id": "10-16",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere retirar las aplicaciones heredadas que ya no se utilizan como parte de su migración a la nube. ¿Qué estrategia migratoria representa esto?",
    "options": {
      "A": "Rehospedar",
      "B": "Cambiar plataforma",
      "C": "Retirarse",
      "D": "Retener"
    },
    "explanation": "• La estrategia de retirada identifica y desactiva las aplicaciones no utilizadas\n• Reduce el costo y la complejidad\n• Parte del marco de migración de las 6 R\n• Rehost mueve aplicaciones a la nube\n• Replatform se optimiza durante la migración\n• Retain mantiene las aplicaciones en las instalaciones",
    "why": [
      "Reduce costos y complejidad.",
      "Parte del marco de migración de las 6 R.",
      "Rehost mueve aplicaciones a la nube.",
      "Replatform se optimiza durante la migración.",
      "Retain mantiene las aplicaciones en las instalaciones."
    ],
    "others": []
  },
  {
    "id": "10-17",
    "module": "Migration",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Durante una migración de base de datos, la instancia de replicación de AWS DMS está en la misma VPC que la base de datos RDS de destino, pero no puede conectarse. ¿Cuál es la causa MÁS probable?",
    "options": {
      "A": "La instancia de replicación es demasiado pequeña.",
      "B": "El grupo de seguridad RDS de destino no permite el tráfico entrante desde la instancia de replicación",
      "C": "DMS no admite RDS como objetivo",
      "D": "SSL debe estar deshabilitado en RDS"
    },
    "explanation": "• Los grupos de seguridad deben permitir el tráfico entre DMS y RDS.\n• Errores de configuración comunes durante la instalación de DMS\n• Necesidad de agregar una regla de entrada al grupo de seguridad RDS\n• El tamaño de la instancia no afecta la conectividad\n• DMS es totalmente compatible con RDS como objetivo\n• SSL es opcional, no un bloqueador",
    "why": [
      "Los grupos de seguridad deben permitir el tráfico entre DMS y RDS.",
      "Error de configuración común durante la configuración de DMS.",
      "Es necesario agregar una regla de entrada al grupo de seguridad RDS.",
      "El tamaño de la instancia no afecta la conectividad.",
      "DMS es totalmente compatible con RDS como destino.",
      "SSL es opcional, no un bloqueador."
    ],
    "others": []
  },
  {
    "id": "10-18",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa está planificando una migración a gran escala a AWS y necesita evaluar su entorno actual, planificar la migración y realizar un seguimiento del progreso. ¿Qué servicio de AWS ofrece este enfoque integral?",
    "options": {
      "A": "Centro de migración de AWS",
      "B": "Servicio de descubrimiento de aplicaciones de AWS",
      "C": "Tanto el centro de migración como el servicio de descubrimiento de aplicaciones",
      "D": "AWS CloudEndure"
    },
    "explanation": "• Application Discovery Service descubre recursos locales\n• Recopila especificaciones del servidor, datos de rendimiento y dependencias.\n• Migration Hub rastrea el progreso de la migración\n• Juntos proporcionan una solución de migración completa\n• Application Discovery introduce datos en Migration Hub\n• CloudEndure ahora es el servicio de migración de aplicaciones de AWS",
    "why": [
      "Application Discovery Service descubre recursos locales.",
      "Recopila especificaciones del servidor, datos de rendimiento, dependencias.",
      "Migration Hub realiza un seguimiento del progreso de la migración.",
      "Juntos proporcionan una solución de migración completa.",
      "Application Discovery introduce datos en Migration Hub.",
      "CloudEndure ahora es el servicio de migración de aplicaciones de AWS."
    ],
    "others": []
  },
  {
    "id": "10-19",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere utilizar AWS DataSync para transferir datos, pero necesita verificar que los archivos sean idénticos en origen y destino. ¿Qué función de DataSync garantiza esto?",
    "options": {
      "A": "DataSync no verifica los datos",
      "B": "Verificación de integridad de datos incorporada",
      "C": "Comparación manual de suma de comprobación MD5",
      "D": "Utilice CloudWatch para monitorear transferencias"
    },
    "explanation": "• DataSync verifica automáticamente la integridad de los datos\n• Comprueba los datos en origen y destino\n• Garantiza la coherencia de los datos después de la transferencia\n• Función incorporada, no se necesita intervención manual\n• CloudWatch monitorea el progreso pero no verifica la integridad",
    "why": [
      "DataSync verifica automáticamente la integridad de los datos.",
      "Comprueba los datos en origen y destino.",
      "Garantiza la coherencia de los datos después de la transferencia.",
      "Función incorporada, no se necesita intervención manual.",
      "CloudWatch monitorea el progreso pero no verifica la integridad."
    ],
    "others": []
  },
  {
    "id": "10-20",
    "module": "Migration",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una organización está migrando aplicaciones a AWS y quiere refactorizar una aplicación monolítica en microservicios. ¿Qué estrategia de migración se está utilizando?",
    "options": {
      "A": "Rehospedar",
      "B": "Cambiar plataforma",
      "C": "Refactorizar/Rearquitectar",
      "D": "Readquirir"
    },
    "explanation": "• Refactor/Re-architect reinventa la arquitectura de las aplicaciones\n• Dividir Monolith en microservicios es una refactorización clásica\n• Utiliza funciones nativas de la nube (ECS, Lambda, etc.)\n• Es más complejo pero proporciona los máximos beneficios de la nube.\n• Rehost se mueve tal como está\n• Replatform realiza optimizaciones mínimas\n• La recompra se traslada a SaaS",
    "why": [
      "Dividir Monolith en microservicios es una refactorización clásica.",
      "Utiliza funciones nativas de la nube (ECS, Lambda, etc.)",
      "Es el más complejo pero proporciona los máximos beneficios de la nube.",
      "Rehost se mueve tal cual.",
      "Replatform realiza optimizaciones mínimas.",
      "La recompra se traslada a SaaS."
    ],
    "others": []
  },
  {
    "id": "11-1",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa almacena registros de aplicaciones en Amazon S3 en formato CSV. Un analista de datos necesita ejecutar consultas SQL ad hoc sobre estos datos sin configurar una infraestructura. ¿Qué servicio de AWS debería utilizarse?",
    "options": {
      "A": "EMR de Amazon",
      "B": "Amazon Athena",
      "C": "Amazon Redshift",
      "D": "AWS Glue"
    },
    "explanation": "• Athena no tiene servidor y consulta datos de S3 mediante SQL\n• No hay infraestructura que gestionar\n• Pago por consulta (por TB escaneado)\n• Perfecto para consultas ad hoc\n• EMR requiere gestión de clústeres\n• Redshift requiere la configuración del almacén de datos\n• AWS Glue es para ETL, no para consultas",
    "why": [
      "Athena no tiene servidor y consulta datos de S3 mediante SQL.",
      "No hay infraestructura que gestionar.",
      "Pago por consulta (por TB escaneado)",
      "Perfecto para consultas ad hoc.",
      "EMR requiere gestión de clústeres.",
      "Redshift requiere la configuración del almacén de datos.",
      "AWS Glue es para ETL, no para consultas."
    ],
    "others": []
  },
  {
    "id": "11-2",
    "module": "Analytics",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un arquitecto de soluciones quiere reducir el costo de las consultas de Athena en un gran conjunto de datos almacenado en S3. Actualmente, los datos están en formato CSV y las consultas escanean todo el conjunto de datos. ¿Qué se debe hacer para optimizar costos?",
    "options": {
      "A": "Aumentar el tiempo de espera de la consulta de Athena",
      "B": "Convierta datos al formato Parquet y particione según los campos más consultados",
      "C": "Mover datos a Amazon Redshift",
      "D": "Habilitar el control de versiones de S3"
    },
    "explanation": "• Athena cobra por TB escaneado ($5/TB)\n• Parquet tiene un formato de columnas, lo que reduce los datos escaneados entre un 30 % y un 90 %.\n• La partición limita los datos escaneados a particiones relevantes\n• Ambas optimizaciones reducen significativamente los costos\n• Aumentar el tiempo de espera no reduce los datos escaneados\n• Redshift añade costos de infraestructura\n• El control de versiones de S3 no afecta el rendimiento de las consultas",
    "why": [
      "Athena cobra por TB escaneado ($5/TB)",
      "El parquet tiene un formato de columnas y reduce los datos escaneados entre un 30 y un 90 %.",
      "La partición limita los datos escaneados a particiones relevantes.",
      "Ambas optimizaciones reducen significativamente los costos.",
      "Aumentar el tiempo de espera no reduce los datos escaneados.",
      "Redshift agrega costos de infraestructura.",
      "El control de versiones de S3 no afecta el rendimiento de las consultas."
    ],
    "others": []
  },
  {
    "id": "11-3",
    "module": "Analytics",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una aplicación de análisis en tiempo real necesita ingerir datos de flujo de clics de un sitio web, procesarlos con lógica empresarial personalizada y almacenar los resultados en DynamoDB. ¿Qué servicio de AWS debería utilizarse para la ingesta de datos?",
    "options": {
      "A": "Flujos de datos de Amazon Kinesis",
      "B": "Amazon Kinesis Data Firehose",
      "C": "AmazonSQS",
      "D": "Sincronización de datos de AWS"
    },
    "explanation": "• Kinesis Data Streams es para transmisión en tiempo real con procesamiento personalizado\n• Admite consumidores personalizados (Lambda, EC2, KCL)\n• Capacidad de procesamiento en tiempo real\n• Firehose sirve para cargar datos en destinos (S3, Redshift, etc.)\n• SQS es para colas de mensajes, no para análisis de streaming\n• DataSync es para transferencias de archivos",
    "why": [
      "Kinesis Data Streams es para transmisión en tiempo real con procesamiento personalizado.",
      "Admite consumidores personalizados (Lambda, EC2, KCL)",
      "Capacidad de procesamiento en tiempo real.",
      "Firehose sirve para cargar datos en destinos (S3, Redshift, etc.)",
      "SQS es para colas de mensajes, no para análisis de transmisión.",
      "DataSync es para transferencias de archivos."
    ],
    "others": []
  },
  {
    "id": "11-4",
    "module": "Analytics",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere cargar datos de sensores de IoT en streaming en Amazon S3 para su análisis con una sobrecarga operativa mínima. Los datos deben entregarse cada 5 minutos y comprimirse. ¿Qué servicio es MÁS apropiado?",
    "options": {
      "A": "Flujos de datos de Amazon Kinesis con Lambda",
      "B": "Amazon Kinesis Data Firehose",
      "C": "Amazon SQS con Lambda",
      "D": "AWS IoT Core con aplicación personalizada"
    },
    "explanation": "• Kinesis Data Firehose está totalmente administrado, sin infraestructura\n• Se carga automáticamente en S3\n• Compresión incorporada (GZIP, Snappy)\n• El intervalo de búfer admite entre 60 y 900 segundos (5 minutos = 300 segundos)\n• sobrecarga operativa mínimos\n• Data Streams requiere una aplicación del consumidor\n• SQS añade complejidad innecesaria\n• La aplicación personalizada requiere mantenimiento",
    "why": [
      "Kinesis Data Firehose está totalmente administrado, sin infraestructura.",
      "Se carga automáticamente en S3.",
      "Compresión incorporada (GZIP, Snappy)",
      "El intervalo de búfer admite entre 60 y 900 segundos (5 minutos = 300 segundos)",
      "sobrecarga operativa mínimos.",
      "Data Streams requiere una aplicación del consumidor.",
      "SQS agrega complejidad innecesaria.",
      "La aplicación personalizada requiere mantenimiento."
    ],
    "others": []
  },
  {
    "id": "11-5",
    "module": "Analytics",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una consulta de Athena analiza 10 TB de datos, pero solo necesita registros del último mes. La estructura del depósito S3 está organizada por año, mes y día. ¿Cómo se pueden mejorar el rendimiento y el costo de las consultas?",
    "options": {
      "A": "Utilice S3 Select para filtrar datos",
      "B": "Cree una tabla particionada en Athena y consulte particiones específicas",
      "C": "Habilite la organización por niveles inteligente de S3",
      "D": "Utilice grupos de trabajo de Athena"
    },
    "explanation": "• La partición permite que las consultas escaneen sólo datos relevantes\n• La cláusula WHERE con claves de partición limita el escaneo a particiones específicas\n• Reduce drásticamente los datos escaneados y los costos.\n• Ejemplo: DONDE año='2024' AND mes='01'\n• S3 Select reduce la transferencia pero no funciona con Athena\n• Intelligent-Tiering es para costos de almacenamiento\n• Los grupos de trabajo organizan consultas pero no optimizan los análisis",
    "why": [
      "La partición permite que las consultas escaneen solo datos relevantes.",
      "La cláusula WHERE con claves de partición limita el escaneo a particiones específicas.",
      "Reduce drásticamente los datos escaneados y los costos.",
      "Ejemplo: DONDE año='2024' Y mes='01'",
      "S3 Select reduce la transferencia pero no funciona con Athena.",
      "Intelligent-Tiering es para costos de almacenamiento.",
      "Los grupos de trabajo organizan consultas pero no optimizan los análisis."
    ],
    "others": []
  },
  {
    "id": "11-6",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita procesar datos en tiempo real mediante consultas SQL y enviar alertas cuando se exceden ciertos umbrales. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon Athena",
      "B": "Análisis de datos de Amazon Kinesis",
      "C": "Amazon Kinesis Data Firehose",
      "D": "AWS Glue"
    },
    "explanation": "• Kinesis Data Analytics procesa la transmisión de datos con SQL\n• Análisis en tiempo real sobre transmisión de datos\n• Puede enviar resultados a Lambda para recibir alertas\n• Athena consulta datos estáticos en S3\n• Firehose carga datos pero no los analiza\n• AWS Glue es para trabajos ETL",
    "why": [
      "Kinesis Data Analytics procesa la transmisión de datos con SQL.",
      "Análisis en tiempo real sobre la transmisión de datos.",
      "Puede enviar resultados a Lambda para recibir alertas.",
      "Athena consulta datos estáticos en S3.",
      "Firehose carga datos pero no los analiza.",
      "AWS Glue es para trabajos ETL."
    ],
    "others": []
  },
  {
    "id": "11-7",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un equipo de ingeniería de datos necesita ejecutar trabajos de Apache Spark para procesar grandes conjuntos de datos. Quieren un servicio administrado que maneje el aprovisionamiento de infraestructura. ¿Qué servicio deberían utilizar?",
    "options": {
      "A": "Amazon Athena",
      "B": "EMR de Amazon",
      "C": "AWS Glue",
      "D": "Amazon Kinesis"
    },
    "explanation": "• EMR (Elastic MapReduce) es una plataforma de big data administrada\n• Soporta Apache Spark, Hadoop, Hive, etc.\n• Maneja el aprovisionamiento y el escalamiento del clúster\n• Optimizado para el procesamiento de datos a gran escala\n• Athena es para consultas SQL, no Spark\n• Glue admite Spark pero EMR proporciona más control\n• Kinesis es para streaming, no para procesamiento por lotes",
    "why": [
      "EMR (Elastic MapReduce) es una plataforma de big data gestionada.",
      "Soporta Apache Spark, Hadoop, Hive, etc.",
      "Maneja el aprovisionamiento y el escalado del clúster.",
      "Optimizado para el procesamiento de datos a gran escala.",
      "Athena es para consultas SQL, no Spark.",
      "Glue admite Spark pero EMR proporciona más control.",
      "Kinesis es para transmisión, no para procesamiento por lotes."
    ],
    "others": []
  },
  {
    "id": "11-8",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene datos de transmisión en Kinesis Data Streams y quiere cargarlos en Amazon Redshift para realizar análisis. ¿Cuál es la solución MÁS eficiente desde el punto de vista operativo?",
    "options": {
      "A": "Utilice Lambda para leer desde Kinesis y escribir en Redshift",
      "B": "Utilice Kinesis Data Firehose para cargar datos en Redshift",
      "C": "Utilice instancias EC2 con scripts personalizados",
      "D": "Utilice EMR para procesar y cargar datos"
    },
    "explanation": "• Firehose puede leer desde flujos de datos y cargarlos en Redshift\n• Totalmente administrado, no se requiere código\n• Escala automáticamente\n• Cargas vía S3 (comando COPIAR)\n• Lambda requiere código personalizado y manejo de errores\n• EC2 y EMR añaden sobrecarga operativa",
    "why": [
      "Firehose puede leer desde flujos de datos y cargarlos en Redshift.",
      "Totalmente administrado, no se requiere código.",
      "Escala automáticamente.",
      "Cargas a través de S3 (comando COPIAR)",
      "Lambda requiere código personalizado y manejo de errores.",
      "EC2 y EMR añaden sobrecarga operativa."
    ],
    "others": []
  },
  {
    "id": "11-9",
    "module": "Analytics",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una organización utiliza AWS Glue Crawlers para descubrir esquemas de datos en S3. El rastreador debería ejecutarse automáticamente cada vez que lleguen nuevos datos. ¿Cómo se puede configurar esto?",
    "options": {
      "A": "Ejecute manualmente el rastreador diariamente",
      "B": "Utilice EventBridge para activar el rastreador en eventos PutObject de S3",
      "C": "Utilice AWS Config para detectar cambios",
      "D": "Los rastreadores no se pueden activar automáticamente"
    },
    "explanation": "• EventBridge (anteriormente CloudWatch Events) puede activarse en eventos de S3\n• Los eventos PutObject de S3 pueden invocar Glue Crawler\n• Descubrimiento automatizado de esquemas cuando llegan nuevos datos\n• La ejecución manual no es automática\n• Config realiza un seguimiento de la configuración, no activa flujos de trabajo\n• AWS Glue admite múltiples tipos de disparadores",
    "why": [
      "EventBridge (anteriormente CloudWatch Events) puede activarse en eventos de S3.",
      "Los eventos PutObject de S3 pueden invocar Glue Crawler.",
      "Descubrimiento automatizado de esquemas cuando llegan nuevos datos.",
      "La ejecución manual no es automática.",
      "AWS Config rastrea la configuración, no activa flujos de trabajo.",
      "Glue admite múltiples tipos de disparadores."
    ],
    "others": []
  },
  {
    "id": "11-10",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un Kinesis Data Stream tiene 4 fragmentos. Los productores escriben 5.000 discos por segundo. ¿Cuál es el problema probable y la solución?",
    "options": {
      "A": "Los fragmentos están por encima de su capacidad; agregar más fragmentos",
      "B": "El período de retención es demasiado corto; aumentarlo",
      "C": "No hay problema, esto está dentro de los límites.",
      "D": "Utilice Kinesis Data Firehose en su lugar"
    },
    "explanation": "• Cada fragmento admite una capacidad de escritura de 1000 registros/segundo\n• 4 fragmentos = 4000 registros/s de capacidad\n• 5000 registros/seg excede la capacidad\n• Necesita al menos 5 fragmentos (o usar el modo bajo demanda)\n• Recibirá ProvisionedThroughputExceededException\n• La retención no afecta la capacidad de escritura\n• Firehose es para diferentes casos de uso\nCálculo: 4 fragmentos × 1000 registros/seg = 4000 registros/seg < 5000 necesarios",
    "why": [
      "Cada fragmento admite una capacidad de escritura de 1000 registros/segundo.",
      "4 fragmentos = 4000 registros/s de capacidad.",
      "5000 registros/seg excede la capacidad.",
      "Necesita al menos 5 fragmentos (o usar el modo bajo demanda)",
      "Recibirá ProvisionedThroughputExceededException.",
      "La retención no afecta la capacidad de escritura.",
      "Firehose es para diferentes casos de uso.",
      "Cálculo: 4 fragmentos × 1000 registros/seg = 4000 registros/seg < 5000 necesarios."
    ],
    "others": []
  },
  {
    "id": "11-11",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere visualizar datos de múltiples fuentes, incluidos S3, RDS y Redshift. Necesitan paneles interactivos para usuarios empresariales. ¿Qué servicio de AWS debería utilizarse?",
    "options": {
      "A": "Amazon Athena",
      "B": "Amazon QuickSight",
      "C": "Amazon CloudWatch",
      "D": "Análisis de datos de Amazon Kinesis"
    },
    "explanation": "• QuickSight es un servicio de visualización e inteligencia empresarial\n• Se conecta a múltiples fuentes de datos (S3, RDS, Redshift, etc.)\n• Crea paneles interactivos\n• Motor SPICE para análisis rápidos\n• Athena consulta datos pero no los visualiza\n• CloudWatch monitorea la infraestructura\n• Kinesis analiza la transmisión de datos",
    "why": [
      "QuickSight es un servicio de visualización e inteligencia empresarial.",
      "Se conecta a múltiples fuentes de datos (S3, RDS, Redshift, etc.)",
      "Crea paneles interactivos.",
      "Motor SPICE para análisis rápidos.",
      "Athena consulta datos pero no los visualiza.",
      "CloudWatch monitorea la infraestructura.",
      "Kinesis analiza la transmisión de datos."
    ],
    "others": []
  },
  {
    "id": "11-12",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un arquitecto de soluciones debe garantizar que los datos de Kinesis Data Streams se conserven durante 7 días para su reprocesamiento. ¿Qué se debe configurar?",
    "options": {
      "A": "Establecer el período de retención en 168 horas (7 días)",
      "B": "Utilice Kinesis Data Firehose con búfer de 7 días",
      "C": "Habilite la retención de datos extendida en S3",
      "D": "Kinesis no puede retener datos más allá de 24 horas"
    },
    "explanation": "• Kinesis Data Streams admite la retención desde 24 horas hasta 365 días\n• El valor predeterminado es 24 horas\n• La retención extendida tiene un costo adicional\n• 7 días = 168 horas\n• Firehose no tiene la opción de reserva de 7 días\n• S3 es almacenamiento independiente, no retención de Kinesis\n• La retención extendida es una característica compatible",
    "why": [
      "Kinesis Data Streams admite la retención desde 24 horas hasta 365 días.",
      "El valor predeterminado es 24 horas.",
      "La retención extendida tiene un costo adicional.",
      "7 días = 168 horas.",
      "Firehose no tiene la opción de búfer de 7 días.",
      "S3 es almacenamiento independiente, no retención de Kinesis.",
      "La retención extendida es una característica compatible."
    ],
    "others": []
  },
  {
    "id": "11-13",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una canalización ETL necesita transformar datos de múltiples fuentes, catalogar los metadatos y ejecutar los trabajos según una programación. ¿Qué servicio de AWS proporciona esta funcionalidad?",
    "options": {
      "A": "EMR de Amazon",
      "B": "AWS Glue",
      "C": "Canalización de datos de AWS",
      "D": "Amazon Athena"
    },
    "explanation": "• AWS Glue es un servicio ETL totalmente administrado\n• Glue Data Catalog almacena metadatos\n• Los rastreadores de Glue (Glue Crawlers) descubren esquemas\n• Los trabajos de Glue (Glue Jobs) realizan transformaciones\n• Admite programación\n• EMR requiere más gestión\n• Data Pipeline es un servicio más antiguo\n• Athena consulta, no se transforma",
    "why": [
      "Glue Data Catalog almacena metadatos.",
      "Los Glue Crawlers descubren esquemas.",
      "Glue Jobs realiza transformaciones.",
      "Soporta programación.",
      "EMR requiere más gestión.",
      "Data Pipeline es un servicio más antiguo.",
      "Athena consulta datos, no realiza transformaciones ETL."
    ],
    "others": []
  },
  {
    "id": "11-14",
    "module": "Analytics",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa recopila registros de aplicaciones en CloudWatch Logs y quiere analizarlos mediante consultas SQL. ¿Cuál es la solución más costo-efectivo?",
    "options": {
      "A": "Mantenga registros en CloudWatch y utilice Logs Insights",
      "B": "Exportar registros a S3 y consultar con Athena",
      "C": "Transmita registros a Kinesis y utilice análisis de datos",
      "D": "Cargar registros en Redshift"
    },
    "explanation": "• El almacenamiento de CloudWatch Logs es costoso para la retención a largo plazo\n• Exportar a S3 reduce significativamente los costos de almacenamiento\n• Athena consulta datos de S3 con SQL ($5/TB escaneado)\n• más costo-efectivo para análisis poco frecuentes\n• Logs Insights es bueno para registros recientes\n• Kinesis agrega costos de transmisión\n• Redshift requiere costos de clúster",
    "why": [
      "El almacenamiento de CloudWatch Logs es costoso para la retención a largo plazo.",
      "Exportar a S3 reduce significativamente los costos de almacenamiento.",
      "Athena consulta datos de S3 con SQL ($5/TB escaneado)",
      "más costo-efectivo para análisis poco frecuentes.",
      "Logs Insights es bueno para registros recientes.",
      "Kinesis agrega costos de transmisión.",
      "Redshift requiere costos de clúster."
    ],
    "others": []
  },
  {
    "id": "11-15",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un flujo de entrega de Kinesis Data Firehose debe transformar los datos JSON entrantes mediante una función Lambda antes de almacenarlos en S3. ¿Cómo se configura esto?",
    "options": {
      "A": "Firehose no admite transformaciones.",
      "B": "Habilite la transformación de datos y especifique el ARN de la función Lambda",
      "C": "Utilice Kinesis Data Analytics para la transformación",
      "D": "Transforme los datos antes de enviarlos a Firehose"
    },
    "explanation": "• Kinesis Data Firehose admite la transformación Lambda\n• Configurar la transformación en la configuración del flujo de entrega\n• Firehose invoca Lambda para cada lote\n• Lambda puede modificar, filtrar o enriquecer datos\n• Función incorporada, no se necesita ningún servicio independiente\n• Transformarse antes de Firehose es posible pero no óptimo",
    "why": [
      "Kinesis Data Firehose admite la transformación Lambda.",
      "Configure la transformación en la configuración del flujo de entrega.",
      "Firehose invoca Lambda para cada lote.",
      "Lambda puede modificar, filtrar o enriquecer datos.",
      "Función incorporada, no se necesita ningún servicio independiente.",
      "Transformarse antes de Firehose es posible pero no óptimo."
    ],
    "others": []
  },
  {
    "id": "11-16",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una aplicación de análisis consulta datos en S3 utilizando Athena. Las consultas se ejecutan lentamente a pesar de las optimizaciones. Los datos ya están en formato Parquet y particionados. ¿Qué más puede mejorar el rendimiento?",
    "options": {
      "A": "Optimice el tamaño de los archivos a 128 MB - 1 GB por archivo",
      "B": "Cambiar al formato CSV",
      "C": "Deshabilitar la partición",
      "D": "Utilice tamaños de archivo más pequeños (1-10 MB)"
    },
    "explanation": "• Demasiados archivos pequeños causan problemas de rendimiento\n• El tamaño de archivo óptimo es 128 MB - 1 GB\n• Athena abre cada archivo, muchos archivos pequeños = gastos generales\n• Combine archivos pequeños en otros más grandes\n• CSV es menos eficiente que Parquet\n• La partición mejora el rendimiento\n• Los archivos muy pequeños ralentizan las consultas",
    "why": [
      "Demasiados archivos pequeños provocan problemas de rendimiento.",
      "El tamaño de archivo óptimo es de 128 MB a 1 GB.",
      "Athena abre cada archivo, muchos archivos pequeños = gastos generales.",
      "Combine archivos pequeños en otros más grandes.",
      "CSV es menos eficiente que Parquet.",
      "La partición mejora el rendimiento.",
      "Los archivos muy pequeños ralentizan las consultas."
    ],
    "others": []
  },
  {
    "id": "11-17",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa utiliza Athena con un catálogo de datos de Glue. Quieren asegurarse de que diferentes equipos solo puedan consultar sus propios conjuntos de datos. ¿Cómo se debe controlar el acceso?",
    "options": {
      "A": "Utilice políticas de depósito de S3",
      "B": "Utilice políticas de IAM con permisos de Glue Catalog",
      "C": "Cree cuentas de AWS independientes",
      "D": "Utilice únicamente grupos de trabajo de Athena"
    },
    "explanation": "• Las políticas de IAM controlan el acceso a las bases de datos y tablas de Glue Catalog.\n• Permisos detallados por equipo\n• Puede combinarse con políticas de depósitos de S3\n• Las cuentas separadas son demasiado complejas\n• Los grupos de trabajo organizan consultas pero no imponen el acceso a los datos.\n• Los permisos del Glue Data Catalog son el control principal",
    "why": [
      "Las políticas de IAM controlan el acceso a las bases de datos y tablas de Glue Catalog.",
      "Permisos detallados por equipo.",
      "Se puede combinar con políticas de depósito S3.",
      "Separar cuentas es demasiado complejo.",
      "Los grupos de trabajo organizan consultas pero no imponen el acceso a los datos.",
      "Los permisos de Glue Catalog son el control principal."
    ],
    "others": []
  },
  {
    "id": "11-18",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación en tiempo real necesita un orden garantizado de eventos para cada usuario. Los eventos deben procesarse en el orden en que llegan por usuario. ¿Qué característica de Kinesis garantiza esto?",
    "options": {
      "A": "Utilice el mismo fragmento para todos los registros",
      "B": "Utilice el ID de usuario como clave de partición",
      "C": "Habilitar la distribución mejorada de Kinesis",
      "D": "Utilice varios fragmentos con distribución por turnos"
    },
    "explanation": "• La clave de partición determina qué fragmento recibe el registro\n• La misma clave de partición siempre va al mismo fragmento\n• Los registros en un fragmento están ordenados por número de secuencia\n• El uso de ID de usuario garantiza que todos los eventos de usuario vayan al mismo fragmento (ordenados)\n• Un fragmento no escala\n• La distribución mejorada es para consumidores paralelos\n• El sistema de todos contra todos interrumpe los pedidos",
    "why": [
      "La clave de partición determina qué fragmento recibe el registro.",
      "La misma clave de partición siempre va al mismo fragmento.",
      "Los registros de un fragmento se ordenan por número de secuencia.",
      "El uso de ID de usuario garantiza que todos los eventos de usuario vayan al mismo fragmento (ordenado)",
      "Un fragmento no escala.",
      "La distribución mejorada es para consumidores paralelos.",
      "El round-robin rompe el orden."
    ],
    "others": []
  },
  {
    "id": "11-19",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita cargar registros de flujo de VPC en Amazon S3 para analizarlos con Athena. La solución debe gestionarse por completo con una configuración mínima. ¿Qué se debe configurar?",
    "options": {
      "A": "Utilice Kinesis Data Streams con Lambda",
      "B": "Utilice Kinesis Data Firehose como destino de los registros de flujo",
      "C": "Utilice CloudWatch Logs con exportación manual",
      "D": "Utilice instancias EC2 personalizadas para recopilar registros"
    },
    "explanation": "• Los registros de flujo de VPC se pueden entregar directamente a Kinesis Data Firehose\n• Firehose se carga automáticamente en S3\n• Totalmente administrado, no se requiere código\n• Puede comprimir y particionar datos\n• La exportación manual no está automatizada\n• Data Streams requiere una aplicación del consumidor\n• Las instancias EC2 añaden sobrecarga operativa",
    "why": [
      "Los registros de flujo de VPC se pueden entregar directamente a Kinesis Data Firehose.",
      "Firehose se carga automáticamente en S3.",
      "Totalmente administrado, no se requiere código.",
      "Puede comprimir y particionar datos.",
      "La exportación manual no está automatizada.",
      "Data Streams requiere una aplicación del consumidor.",
      "Las instancias EC2 añaden sobrecarga operativa."
    ],
    "others": []
  },
  {
    "id": "11-20",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un grupo de trabajo de Athena está configurado con un control de uso de datos de 1 TB por día. La consulta de un usuario escanearía 1,5 TB de datos. ¿Lo que sucede?",
    "options": {
      "A": "La consulta se ejecuta y escanea 1,5 TB.",
      "B": "La consulta es rechazada",
      "C": "La consulta se ejecuta pero solo escanea 1 TB.",
      "D": "El usuario recibe una advertencia pero la consulta continúa."
    },
    "explanation": "• Los controles de uso de datos del grupo de trabajo imponen límites\n• Las consultas que superen el límite se rechazan\n• Previene sobrecostos\n• El usuario debe optimizar la consulta o solicitar un aumento del límite\n• La consulta no se ejecuta parcialmente\n• Aplicación estricta, no sólo una advertencia",
    "why": [
      "Los controles de uso de datos del grupo de trabajo imponen límites.",
      "Las consultas que excedan el límite serán rechazadas.",
      "Evita sobrecostos.",
      "El usuario debe optimizar la consulta o solicitar un aumento del límite.",
      "La consulta no se ejecuta parcialmente.",
      "Aplicación estricta, no sólo una advertencia."
    ],
    "others": []
  },
  {
    "id": "11-21",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa de servicios financieros necesita compartir de forma segura conjuntos de datos financieros de terceros seleccionados con sus analistas de datos en AWS. La solución debe admitir el acceso basado en suscripción y automatizar las actualizaciones de conjuntos de datos. ¿Qué servicio de AWS debería utilizarse?",
    "options": {
      "A": "Intercambio de datos de AWS",
      "B": "Amazon S3",
      "C": "Catálogo de datos de AWS Glue",
      "D": "Intercambio de datos de Amazon Redshift"
    },
    "explanation": "• AWS Data Exchange permite un acceso seguro basado en suscripción a conjuntos de datos de terceros\n• Automatiza actualizaciones y notificaciones de conjuntos de datos.\n• Se integra con S3, Redshift y Lake Formation\n• S3 es almacenamiento, no un mercado de datos\n• Glue Data Catalog es para metadatos, no para compartir datos.\n• Redshift Data Sharing es para compartir datos entre clústeres de Redshift",
    "why": [
      "Automatiza las actualizaciones y notificaciones de conjuntos de datos.",
      "Se integra con S3, Redshift y Lake Formation.",
      "S3 es almacenamiento, no un mercado de datos.",
      "Glue Data Catalog es para metadatos, no para compartir datos.",
      "Redshift Data Sharing sirve para compartir datos entre clústeres de Redshift."
    ],
    "others": []
  },
  {
    "id": "11-22",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa de atención médica quiere crear un lago de datos seguro en AWS para almacenar y analizar datos confidenciales de pacientes. Necesitan un control de acceso detallado, catalogación de datos e integración con servicios de análisis. ¿Qué servicio se debe utilizar para gestionar permisos y catalogación de datos?",
    "options": {
      "A": "AWS Lake Formation",
      "B": "Amazon S3",
      "C": "AWS Glue",
      "D": "Amazon Athena"
    },
    "explanation": "• Lake Formation proporciona control de acceso detallado para lagos de datos\n• Gestiona permisos a nivel de tabla, columna y fila.\n• Se integra con Glue Data Catalog y servicios de análisis (Athena, Redshift, EMR)\n• S3 es almacenamiento, no gestión de acceso\n• Glue es para ETL y catalogación, pero Lake Formation extiende Glue con seguridad\n• Athena sirve para realizar consultas, no para gestionar el acceso.",
    "why": [
      "Lake Formation proporciona un control de acceso detallado para lagos de datos.",
      "Gestiona permisos a nivel de tabla, columna y fila.",
      "Se integra con Glue Data Catalog y servicios de análisis (Athena, Redshift, EMR)",
      "S3 es almacenamiento, no gestión de acceso.",
      "Glue es para ETL y catalogación, pero Lake Formation extiende Glue con seguridad.",
      "Athena es para consultas, no para gestión de acceso."
    ],
    "others": []
  },
  {
    "id": "11-23",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa de medios necesita buscar, visualizar y analizar grandes volúmenes de datos de registros y eventos casi en tiempo real. ¿Qué servicio de AWS es más adecuado para este caso de uso?",
    "options": {
      "A": "Amazon OpenSearch Service",
      "B": "Amazon Athena",
      "C": "Amazon Redshift",
      "D": "AWS Glue"
    },
    "explanation": "• OpenSearch Service (anteriormente Elasticsearch) está diseñado para análisis, búsqueda y visualización de registros.\n• Proporciona indexación y consultas casi en tiempo real\n• Se integra con Kibana para paneles\n• Athena es para consultas SQL ad hoc, no para búsquedas en tiempo real\n• Redshift es para el almacenamiento de datos\n• AWS Glue es para ETL, no para búsqueda/visualización.",
    "why": [
      "OpenSearch Service (anteriormente Elasticsearch) está diseñado para análisis, búsqueda y visualización de registros.",
      "Proporciona indexación y consultas casi en tiempo real.",
      "Se integra con Kibana para paneles.",
      "Athena es para consultas SQL ad hoc, no para búsquedas en tiempo real.",
      "Redshift es para el almacenamiento de datos.",
      "AWS Glue es para ETL, no para búsqueda/visualización."
    ],
    "others": []
  },
  {
    "id": "11-24",
    "module": "Analytics",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un equipo de ingeniería de datos necesita incorporar datos en streaming desde Apache Kafka a AWS para su análisis y almacenamiento. ¿Qué servicio de AWS proporciona un entorno Kafka totalmente administrado y de alta disponibilidad?",
    "options": {
      "A": "Amazon MSK",
      "B": "Flujos de datos de Amazon Kinesis",
      "C": "AmazonSQS",
      "D": "AWS Glue Streaming"
    },
    "explanation": "• Amazon MSK (Transmisión administrada para Apache Kafka) proporciona un servicio Kafka totalmente administrado\n• Maneja el aprovisionamiento, la aplicación de parches y el escalado.\n• Se integra con Kinesis, Lambda, S3, Redshift\n• Kinesis es un servicio de streaming independiente, no compatible con Kafka\n• SQS es para colas de mensajes, no para transmisión\n• Glue Streaming es para ETL, no para la gestión de Kafka",
    "why": [
      "Maneja el aprovisionamiento, la aplicación de parches y el escalado.",
      "Se integra con Kinesis, Lambda, S3, Redshift.",
      "Kinesis es un servicio de streaming independiente, no compatible con Kafka.",
      "SQS es para colas de mensajes, no para transmisión.",
      "Glue Streaming es para ETL, no para la gestión de Kafka."
    ],
    "others": []
  },
  {
    "id": "12-1",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa necesita implementar una aplicación web que pueda manejar picos de tráfico impredecibles y minimizar los sobrecarga operativa. La aplicación debe escalarse automáticamente y utilizar un modelo de precios de pago por uso. ¿Qué arquitectura es MÁS apropiada?",
    "options": {
      "A": "Instancias EC2 con Auto Scaling detrás de un ALB",
      "B": "Arquitectura sin servidor con S3, CloudFront, API Gateway, Lambda y DynamoDB",
      "C": "Contenedores ECS en instancias EC2",
      "D": "Instancias EC2 con escalado manual"
    },
    "explanation": "• La arquitectura sin servidor se escala automáticamente y es de pago por uso.\n• S3/CloudFront para contenido estático\n• API Gateway/Lambda para computación (se escala automáticamente)\n• DynamoDB para base de datos (capacidad bajo demanda)\n• Cero sobrecarga operativa para la infraestructura\n• La opción A requiere cierta gestión y costos continuos\n• La opción C requiere orquestación de contenedores\n• La opción D requiere intervención manual",
    "why": [
      "S3/CloudFront para contenido estático.",
      "API Gateway/Lambda para computación (se escala automáticamente)",
      "DynamoDB para base de datos (capacidad bajo demanda)",
      "Cero sobrecarga operativa para la infraestructura."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Requiere cierta gestión y costes continuos."
      },
      {
        "l": [
          "C"
        ],
        "t": "Requiere orquestación de contenedores."
      },
      {
        "l": [
          "D"
        ],
        "t": "Requiere intervención manual."
      }
    ]
  },
  {
    "id": "12-2",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un arquitecto de soluciones está diseñando una aplicación de alta disponibilidad que debe sobrevivir al fallo de toda una zona de disponibilidad. El requisito de RTO es inferior a 5 minutos. ¿Qué patrón debería implementarse?",
    "options": {
      "A": "Implementación de una única AZ con copias de seguridad automatizadas",
      "B": "Implementación Multi-AZ con Auto Scaling y Application Load Balancer",
      "C": "Replicación entre regiones con conmutación por error manual",
      "D": "Región única con instantáneas diarias"
    },
    "explanation": "• La implementación Multi-AZ proporciona conmutación por error automática\n• ALB distribuye el tráfico entre AZ e instancias de controles de estado\n• Auto Scaling reemplaza las instancias fallidas automáticamente\n• Cumple con el requisito de RTO de < 5 minutos\n• La opción A no protege contra fallas AZ\n• La opción C tiene un RTO más largo (conmutación por error manual)\n• La opción D no proporciona HA",
    "why": [
      "ALB distribuye el tráfico entre AZ e instancias de controles de estado.",
      "Auto Scaling reemplaza las instancias fallidas automáticamente.",
      "Cumple con el requisito de RTO de <5 minutos."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "No protege contra fallas AZ."
      },
      {
        "l": [
          "C"
        ],
        "t": "Tiene un RTO más largo (conmutación por error manual)"
      },
      {
        "l": [
          "D"
        ],
        "t": "No proporciona HA."
      }
    ]
  },
  {
    "id": "12-3",
    "module": "Architecture Patterns",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere implementar una solución de recuperación ante desastres para su base de datos de producción. Pueden tolerar una pérdida de datos de 1 hora (RPO) y un tiempo de recuperación (RTO) de 4 horas. ¿Qué estrategia de recuperación ante desastres es más costo-efectivo?",
    "options": {
      "A": "Activo-activo multisitio",
      "B": "Espera cálida",
      "C": "luz piloto",
      "D": "Copia de seguridad y restauración"
    },
    "explanation": "• Pilot Light mantiene los servicios principales (como la replicación de bases de datos)\n• RPO: Minutos (retraso en la replicación de la base de datos)\n• RTO: Horas (tiempo para ampliar los servicios restantes)\n• más costo-efectivo que el modo de espera en caliente\n• Cumple con los requisitos de RPO de 1 hora y RTO de 4 horas\n• Los sitios múltiples son costosos y están excesivamente diseñados\n• El modo de espera en caliente cuesta más de lo necesario\n• Es posible que la copia de seguridad y la restauración no cumplan con el RPO/RTO",
    "why": [
      "RPO: Minutos (retraso en la replicación de la base de datos)",
      "RTO: Horas (tiempo para ampliar los servicios restantes)",
      "más costo-efectivo que el modo de espera cálido.",
      "Cumple con los requisitos de RPO de 1 hora y RTO de 4 horas.",
      "Los sitios múltiples son costosos y están excesivamente diseñados.",
      "El modo de espera cálido cuesta más de lo necesario.",
      "Es posible que la copia de seguridad y la restauración no cumplan con RPO/RTO."
    ],
    "others": []
  },
  {
    "id": "12-4",
    "module": "Architecture Patterns",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación experimenta una alta carga de lectura de la base de datos. Los datos se leen con frecuencia pero rara vez se actualizan. ¿Qué estrategia de almacenamiento en caché se debería implementar para reducir la carga de la base de datos?",
    "options": {
      "A": "Almacenamiento en caché de escritura directa",
      "B": "Caché aparte (carga diferida) con ElastiCache",
      "C": "Solo agrupación de conexiones de bases de datos",
      "D": "Aumentar el tamaño de la instancia de la base de datos"
    },
    "explanation": "• El patrón de caché aparte es ideal para cargas de trabajo con mucha lectura\n• La aplicación verifica el caché primero, se carga desde la base de datos si falla el caché\n• ElastiCache (Redis/Memcached) reduce la carga de la base de datos\n• Solución costo-efectivo\n• La escritura directa es mejor para cargas de trabajo con mucha escritura\n• La agrupación de conexiones ayuda pero no almacena datos en caché\n• Ampliar la base de datos es más caro",
    "why": [
      "El patrón de caché aparte es ideal para cargas de trabajo con mucha lectura.",
      "La aplicación verifica el caché primero, se carga desde la base de datos si falla el caché.",
      "ElastiCache (Redis/Memcached) reduce la carga de la base de datos.",
      "Solución costo-efectivo.",
      "La escritura simultánea es mejor para cargas de trabajo con mucha escritura.",
      "La agrupación de conexiones ayuda pero no almacena datos en caché.",
      "Escalar la base de datos es más caro."
    ],
    "others": []
  },
  {
    "id": "12-5",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa está construyendo una arquitectura de microservicios y necesita desacoplar los servicios para manejar los picos de tráfico sin perder mensajes. ¿Qué patrón de servicio de AWS se debe utilizar?",
    "options": {
      "A": "Llamadas API directas entre servicios",
      "B": "Colas SQS entre servicios",
      "C": "Base de datos compartida entre servicios.",
      "D": "Comunicación basada en archivos a través de S3"
    },
    "explanation": "• SQS proporciona acoplamiento flexible y almacenamiento en búfer entre servicios\n• Los mensajes persisten y no se pierden durante los picos de tráfico.\n• Los servicios procesan a su propio ritmo.\n• Patrón de microservicios estándar\n• Las llamadas API directas crean un acoplamiento estrecho\n• La base de datos compartida viola los principios de los microservicios.\n• La comunicación basada en archivos S3 es ineficiente en tiempo real",
    "why": [
      "SQS proporciona acoplamiento flexible y almacenamiento en búfer entre servicios.",
      "Los mensajes persisten y no se pierden durante los picos de tráfico.",
      "Los servicios se procesan a su propio ritmo.",
      "Patrón de microservicios estándar.",
      "Las llamadas API directas crean un acoplamiento estrecho.",
      "La base de datos compartida viola los principios de los microservicios.",
      "La comunicación basada en archivos S3 es ineficiente en tiempo real."
    ],
    "others": []
  },
  {
    "id": "12-6",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un arquitecto de soluciones necesita diseñar un sistema que procese eventos de múltiples fuentes (S3, DynamoDB, aplicaciones personalizadas) y los enrute a diferentes destinos según el contenido del evento. ¿Qué servicio es MÁS apropiado?",
    "options": {
      "A": "AmazonSQS",
      "B": "Amazon SNS",
      "C": "Amazon EventBridge",
      "D": "AWS Step Functions"
    },
    "explanation": "• EventBridge es un bus de eventos para enrutar eventos\n• Admite múltiples fuentes, incluidos servicios de AWS y aplicaciones personalizadas\n• Filtrado y enrutamiento basados en contenido\n• Integración incorporada con más de 90 servicios de AWS\n• SQS es para mensajería punto a punto\n• SNS es para pub/sub pero filtrado limitado\n• Step Functions es para la orquestación del flujo de trabajo",
    "why": [
      "EventBridge es un bus de eventos para enrutar eventos.",
      "Admite múltiples fuentes, incluidos servicios de AWS y aplicaciones personalizadas.",
      "Filtrado y enrutamiento basado en contenido.",
      "Integración incorporada con más de 90 servicios de AWS.",
      "SQS es para mensajería punto a punto.",
      "SNS es para pub/sub pero filtrado limitado.",
      "Step Functions es para la orquestación del flujo de trabajo."
    ],
    "others": []
  },
  {
    "id": "12-7",
    "module": "Architecture Patterns",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere minimizar los costos de una carga de trabajo de procesamiento por lotes que se ejecuta todas las noches y puede tolerar interrupciones. ¿Qué opción de cálculo se debe utilizar?",
    "options": {
      "A": "Instancias EC2 bajo demanda",
      "B": "Instancias reservadas",
      "C": "Spot Instances",
      "D": "Anfitriones dedicados"
    },
    "explanation": "• Las Spot Instances pueden ahorrar hasta un 90 % en comparación con las instancias bajo demanda\n• El procesamiento por lotes es tolerante a fallas (puede manejar interrupciones)\n• Puede controlar el progreso y reanudar\n• más costo-efectivo para este caso de uso\n• On-Demand es más caro\n• Reservado requiere un compromiso de 1 a 3 años\n• Los hosts dedicados son los más caros",
    "why": [
      "El procesamiento por lotes es tolerante a fallas (puede manejar interrupciones)",
      "Puede controlar el progreso y reanudar.",
      "más costo-efectivo para este caso de uso.",
      "On-Demand es más caro.",
      "Reservado requiere un compromiso de 1 a 3 años.",
      "Los hosts dedicados son los más caros."
    ],
    "others": []
  },
  {
    "id": "12-8",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación requiere una latencia inferior a milisegundos para las consultas a la base de datos. Se accede a los datos en un patrón clave-valor. ¿Qué solución de base de datos se debe utilizar?",
    "options": {
      "A": "Amazon RDS con réplicas de lectura",
      "B": "DynamoDB con DAX (acelerador DynamoDB)",
      "C": "Amazon Aurora",
      "D": "Amazon Redshift"
    },
    "explanation": "• DAX proporciona latencia de microsegundos para DynamoDB\n• Caché en memoria específica para DynamoDB\n• El patrón de acceso clave-valor es perfecto para DynamoDB\n• Cumple con el requisito de submilisegundos\n• RDS/Aurora tienen latencia de milisegundos\n• Redshift es para análisis, no para cargas de trabajo operativas",
    "why": [
      "DAX proporciona latencia de microsegundos para DynamoDB.",
      "Caché en memoria específicamente para DynamoDB.",
      "El patrón de acceso clave-valor es perfecto para DynamoDB.",
      "Cumple con el requisito de submilisegundos.",
      "RDS/Aurora tiene una latencia de milisegundos.",
      "Redshift es para análisis, no para cargas de trabajo operativas."
    ],
    "others": []
  },
  {
    "id": "12-9",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación global debe ofrecer contenido estático con la latencia más baja posible en todo el mundo. ¿Qué arquitectura debería implementarse?",
    "options": {
      "A": "Instancias EC2 en múltiples regiones",
      "B": "S3 con distribución CloudFront",
      "C": "S3 con replicación entre regiones",
      "D": "ALB en múltiples regiones"
    },
    "explanation": "• CloudFront es una CDN con más de 400 ubicaciones de borde en todo el mundo\n• Almacena en caché el contenido cerca de los usuarios de todo el mundo.\n• Origen S3 para contenido estático\n• Latencia más baja para distribución global\n• EC2 requiere administración y no almacena en caché en el borde\n• CRR ayuda a la disponibilidad pero no reduce la latencia\n• ALB no proporciona almacenamiento en caché perimetral",
    "why": [
      "CloudFront es una CDN con más de 400 ubicaciones perimetrales en todo el mundo.",
      "Almacena en caché el contenido cerca de los usuarios de todo el mundo.",
      "Origen S3 para contenido estático.",
      "Latencia más baja para distribución global.",
      "EC2 requiere administración y no almacena en caché en el borde.",
      "CRR ayuda a la disponibilidad pero no reduce la latencia.",
      "ALB no proporciona almacenamiento en caché perimetral."
    ],
    "others": []
  },
  {
    "id": "12-10",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación web de tres niveles tiene niveles de presentación, aplicación y base de datos. La base de datos contiene datos confidenciales de los clientes. ¿Cómo se deben implementar los niveles por motivos de seguridad?",
    "options": {
      "A": "Todos los niveles en subredes públicas",
      "B": "Todos los niveles en subredes privadas",
      "C": "Presentación en público, aplicación y base de datos en subredes privadas.",
      "D": "Presentación y aplicación en público, base de datos en subred privada."
    },
    "explanation": "• El nivel de presentación (servidores web) necesita acceso a Internet: subred pública\n• El nivel de aplicación no necesita acceso directo a Internet: subred privada\n• El nivel de la base de datos debe estar aislado: subred privada\n• Sigue el principio de seguridad de defensa en profundidad\n• El nivel de aplicación accede a Internet a través de NAT Gateway\n• La base de datos no tiene acceso a Internet.\n• Minimiza la superficie de ataque",
    "why": [
      "El nivel de presentación (servidores web) necesita acceso a Internet: subred pública.",
      "El nivel de aplicación no necesita acceso directo a Internet: subred privada.",
      "El nivel de la base de datos debe estar aislado: subred privada.",
      "Sigue el principio de seguridad de defensa en profundidad.",
      "El nivel de aplicación accede a Internet a través de NAT Gateway.",
      "La base de datos no tiene acceso a Internet.",
      "Minimiza la superficie de ataque."
    ],
    "others": []
  },
  {
    "id": "12-11",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa necesita orquestar un flujo de trabajo complejo con múltiples funciones Lambda, manejo de errores y lógica de reintento. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Amazon EventBridge",
      "B": "SNS con suscripciones Lambda",
      "C": "AWS Step Functions",
      "D": "SQS con disparadores Lambda"
    },
    "explanation": "• Step Functions organiza flujos de trabajo con máquinas de estado\n• Manejo de errores integrado y lógica de reintento\n• Diseñador de flujo de trabajo visual\n• Se integra con Lambda y otros servicios de AWS\n• Ideal para flujos de trabajo complejos de varios pasos\n• EventBridge enruta eventos pero no los organiza\n• SNS/SQS no proporciona orquestación del flujo de trabajo",
    "why": [
      "Step Functions organiza flujos de trabajo con máquinas de estado.",
      "Manejo de errores integrado y lógica de reintento.",
      "Diseñador de flujo de trabajo visual.",
      "Se integra con Lambda y otros servicios de AWS.",
      "Lo mejor para flujos de trabajo complejos y de varios pasos.",
      "EventBridge enruta eventos pero no los organiza.",
      "SNS/SQS no proporciona orquestación del flujo de trabajo."
    ],
    "others": []
  },
  {
    "id": "12-12",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación implementada en varias regiones necesita una base de datos que admita escrituras en varias regiones con resolución automática de conflictos. ¿Qué base de datos se debe utilizar?",
    "options": {
      "A": "RDS con réplicas de lectura entre regiones",
      "B": "Base de datos global de Aurora",
      "C": "Tablas globales de DynamoDB",
      "D": "Amazon Redshift con instantáneas entre regiones"
    },
    "explanation": "• Las tablas globales de DynamoDB admiten escrituras activo-activo en varias regiones\n• Resolución automática de conflictos (el último escritor gana)\n• Replicación multimaestro\n• Las réplicas RDS son de solo lectura\n• Aurora Global Database tiene una región principal para escrituras\n• Redshift es para análisis, no para escrituras en varias regiones.",
    "why": [
      "Resolución automática de conflictos (el último escritor gana)",
      "Replicación multimaestro.",
      "Las réplicas de RDS son de sólo lectura.",
      "Aurora Global Database tiene una región principal para escrituras.",
      "Redshift es para análisis, no para escrituras en varias regiones."
    ],
    "others": []
  },
  {
    "id": "12-13",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere implementar un patrón de mensajería de publicación/subscripción en el que varios consumidores reciban el mismo mensaje. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "Cola estándar de Amazon SQS",
      "B": "Cola FIFO de Amazon SQS",
      "C": "Amazon SNS",
      "D": "Flujos de datos de Amazon Kinesis"
    },
    "explanation": "• SNS es un servicio de mensajería de publicación-suscripción.\n• Un mensaje publicado en el tema, varios suscriptores lo reciben\n• Patrón de abanico\n• Caso de uso clásico de pub/sub\n• SQS es punto a punto (un consumidor por mensaje)\n• Kinesis permite múltiples consumidores pero es para transmisión de datos",
    "why": [
      "SNS es un servicio de mensajería de publicación-suscripción.",
      "Un mensaje publicado en el tema, varios suscriptores lo reciben.",
      "Patrón de abanico.",
      "Caso de uso clásico de pub/sub.",
      "SQS es punto a punto (un consumidor por mensaje)",
      "Kinesis permite múltiples consumidores pero es para transmisión de datos."
    ],
    "others": []
  },
  {
    "id": "12-14",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación necesita procesar las imágenes cargadas: cambiar el tamaño, aplicar filtros y actualizar la base de datos. El procesamiento puede tardar varios minutos. ¿Qué arquitectura garantiza un procesamiento confiable?",
    "options": {
      "A": "API Gateway → Lambda (proceso sincrónico)",
      "B": "API Gateway → Lambda → S3 → Lambda (activado por S3) → DynamoDB",
      "C": "Instancias EC2 sondeando S3",
      "D": "Subir directamente a EC2 para su procesamiento"
    },
    "explanation": "• La carga activa el primer Lambda para guardar en S3\n• El evento S3 activa el segundo Lambda para su procesamiento (asíncrono)\n• Procesamiento confiable y desacoplado\n• Lambda puede funcionar hasta 15 minutos\n• Opción A: API Gateway tiene un tiempo de espera de 29 segundos\n• Opción C: encuestas ineficientes\n• Opción D: sin escalado automático ni sin servidor",
    "why": [
      "La carga activa el primer Lambda para guardar en S3.",
      "El evento S3 activa el segundo Lambda para su procesamiento (asíncrono)",
      "Procesamiento desacoplado y fiable.",
      "Lambda puede funcionar hasta 15 minutos."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "API Gateway tiene un tiempo de espera de 29 segundos."
      },
      {
        "l": [
          "C"
        ],
        "t": "Encuestas ineficientes."
      },
      {
        "l": [
          "D"
        ],
        "t": "Sin escalado automático, sin servidor."
      }
    ]
  },
  {
    "id": "12-15",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación financiera requiere transacciones ACID en varias tablas. La base de datos debe escalarse para el tráfico de lectura. ¿Qué solución de base de datos se debe utilizar?",
    "options": {
      "A": "DinamoDB",
      "B": "Amazon Aurora con réplicas de lectura",
      "C": "Amazon Redshift",
      "D": "ElastiCache"
    },
    "explanation": "• Aurora admite transacciones ACID (base de datos relacional)\n• Las réplicas de lectura amplían el tráfico de lectura (hasta 15 réplicas)\n• Mejor rendimiento que el RDS estándar\n• DynamoDB no admite ACID tradicional en varios elementos\n• Redshift es para análisis, no para cargas de trabajo transaccionales\n• ElastiCache es para almacenamiento en caché, no para base de datos primaria.",
    "why": [
      "Aurora admite transacciones ACID (base de datos relacional)",
      "Las réplicas de lectura amplían el tráfico de lectura (hasta 15 réplicas)",
      "Mejor rendimiento que el RDS estándar.",
      "DynamoDB no admite ACID tradicional en varios elementos.",
      "Redshift es para análisis, no para cargas de trabajo transaccionales.",
      "ElastiCache es para almacenamiento en caché, no para base de datos principal."
    ],
    "others": []
  },
  {
    "id": "12-16",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Una empresa debe asegurarse de que su aplicación web pueda soportar un aumento repentino de tráfico 10 veces mayor durante el lanzamiento de productos. ¿Qué patrón arquitectónico debería implementarse?",
    "options": {
      "A": "Capacidad estática con escalado manual.",
      "B": "Auto Scaling con seguimiento de objetivos basado en la utilización de la CPU",
      "C": "Precalentamiento con escalado programado",
      "D": "Arquitectura sin servidor con Lambda y DynamoDB bajo demanda"
    },
    "explanation": "• Serverless escala automáticamente sin precalentamiento\n• Lambda escala a miles de ejecuciones simultáneas\n• DynamoDB on-demand crece con el tráfico\n• No se requiere planificación de capacidad\n• La opción A no escala\n• La opción B tiene un retraso para escalar\n• La opción C requiere predecir el tiempo de lanzamiento\n• La tecnología sin servidor maneja mejor los picos impredecibles",
    "why": [
      "Serverless escala automáticamente sin precalentamiento.",
      "Lambda escala a miles de ejecuciones simultáneas.",
      "DynamoDB on-demand crece con el tráfico.",
      "No se requiere planificación de capacidad.",
      "La tecnología sin servidor maneja mejor los picos impredecibles."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "No escala."
      },
      {
        "l": [
          "B"
        ],
        "t": "Tiene un retraso para escalar."
      },
      {
        "l": [
          "C"
        ],
        "t": "Requiere predecir el tiempo de lanzamiento."
      }
    ]
  },
  {
    "id": "12-17",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación utiliza CloudFront, ALB, EC2 y RDS. Los usuarios de una región específica experimentan un rendimiento lento. ¿Cuál es la causa y solución MÁS probable?",
    "options": {
      "A": "Aumentar el tamaño de la instancia EC2",
      "B": "Implemente una pila de aplicaciones en la región del usuario con enrutamiento basado en latencia de Route 53",
      "C": "Habilitar la compresión de CloudFront",
      "D": "Actualice a IOPS aprovisionadas para RDS"
    },
    "explanation": "• La implementación regional reduce la latencia para los usuarios locales\n• El enrutamiento basado en latencia de la Ruta 53 dirige a la región más cercana\n• CloudFront almacena en caché el contenido estático pero el contenido dinámico va al origen\n• Se necesita implementación multirregional para contenido dinámico\n• Aumentar el tamaño de la instancia no reduce la latencia de la red\n• La compresión ayuda pero no resuelve la latencia regional\n• IOPS no afecta la latencia de la red",
    "why": [
      "La implementación regional reduce la latencia para los usuarios locales.",
      "El enrutamiento basado en latencia de la Ruta 53 dirige a la región más cercana.",
      "CloudFront almacena en caché el contenido estático, pero el contenido dinámico va al origen.",
      "Se necesita implementación multirregional para contenido dinámico.",
      "Aumentar el tamaño de la instancia no reduce la latencia de la red.",
      "La compresión ayuda pero no resuelve la latencia regional.",
      "IOPS no afecta la latencia de la red."
    ],
    "others": []
  },
  {
    "id": "12-18",
    "module": "Architecture Patterns",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere implementar seguridad de defensa en profundidad para su aplicación web. ¿Qué combinación de servicios se debe utilizar?",
    "options": {
      "A": "Sólo grupos de seguridad",
      "B": "WAF + Escudo + Grupos de seguridad + NACL + cifrado KMS",
      "C": "Políticas de IAM y grupos de seguridad",
      "D": "CloudFront solo con HTTPS"
    },
    "explanation": "• La defensa en profundidad requiere múltiples capas de seguridad\n• WAF: Protección de la capa de aplicación (OWASP Top 10)\n• Escudo: protección DDoS\n• Grupos de seguridad: firewall a nivel de instancia\n• NACL: firewall a nivel de subred\n• KMS: cifrado de datos\n• El enfoque en capas proporciona seguridad integral\n• La seguridad de una sola capa es insuficiente",
    "why": [
      "La defensa en profundidad requiere múltiples capas de seguridad.",
      "WAF: Protección de la capa de aplicación (OWASP Top 10)",
      "Escudo: protección DDoS.",
      "Grupos de seguridad: firewall a nivel de instancia.",
      "NACL: firewall a nivel de subred.",
      "KMS: cifrado de datos.",
      "El enfoque en capas proporciona seguridad integral.",
      "La seguridad de una sola capa es insuficiente."
    ],
    "others": []
  },
  {
    "id": "12-19",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación de procesamiento por lotes necesita leer mensajes de una cola, procesarlos y eliminar mensajes solo después de un procesamiento exitoso. ¿Qué servicio y patrón se debe utilizar?",
    "options": {
      "A": "SNS con eliminación inmediata",
      "B": "SQS con tiempo de espera de visibilidad y eliminación explícita",
      "C": "Kinesis con puntos de control",
      "D": "EventBridge con Lambda"
    },
    "explanation": "• SQS admite tiempo de espera de visibilidad (oculta el mensaje durante el procesamiento)\n• El mensaje solo se elimina después de una llamada explícita a DeleteMessage\n• Garantiza que el mensaje no se pierda si falla el procesamiento\n• Si el procesamiento falla, el mensaje vuelve a ser visible\n• SNS no persiste los mensajes\n• Kinesis es para streaming, no para patrones de cola\n• EventBridge no proporciona persistencia de mensajes",
    "why": [
      "SQS admite tiempo de espera de visibilidad (oculta el mensaje durante el procesamiento)",
      "El mensaje solo se elimina después de una llamada explícita a DeleteMessage.",
      "Garantiza que el mensaje no se pierda si falla el procesamiento.",
      "Si el procesamiento falla, el mensaje vuelve a ser visible.",
      "SNS no persiste los mensajes.",
      "Kinesis es para transmisión, no para patrones de cola.",
      "EventBridge no proporciona persistencia de mensajes."
    ],
    "others": []
  },
  {
    "id": "12-20",
    "module": "Architecture Patterns",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere optimizar los costos de un entorno de desarrollo que funciona de lunes a viernes, de 9 a.m. a 6 p.m. El entorno utiliza EC2, RDS y NAT Gateway. ¿Qué se debe hacer?",
    "options": {
      "A": "Usar instancias reservadas",
      "B": "Utilice el Programador de instancias para iniciar/detener recursos fuera del horario comercial",
      "C": "Migrar a sin servidor",
      "D": "Utilice Spot Instances"
    },
    "explanation": "• El Programador de instancias inicia/detiene automáticamente los recursos según lo programado\n• Ahorra costos durante las noches y fines de semana (65% de la semana)\n• Funciona con EC2 y RDS\n• Las instancias reservadas requieren un compromiso de 1 a 3 años, no detiene los recursos\n• Es posible que la tecnología sin servidor no admita todas las cargas de trabajo.\n• Las Spot Instances pueden interrumpirse durante el horario laboral\n• La parada/inicio programado es más costo-efectivo para entornos de desarrollo",
    "why": [
      "El Programador de instancias inicia/detiene automáticamente los recursos según lo programado.",
      "Ahorra costos durante las noches y fines de semana (65% de la semana)",
      "Funciona con EC2 y RDS.",
      "Las instancias reservadas requieren un compromiso de 1 a 3 años, no detiene los recursos.",
      "Es posible que la tecnología sin servidor no admita todas las cargas de trabajo.",
      "Las Spot Instances pueden interrumpirse durante el horario laboral.",
      "La parada/inicio programado es más costo-efectivo para entornos de desarrollo."
    ],
    "others": []
  },
  {
    "id": "13-1",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa tiene una aplicación web que se ejecuta en 20 instancias EC2 que funcionan las 24 horas del día, los 7 días de la semana con un uso constante. Las instancias han estado funcionando durante 2 años y se espera que sigan funcionando durante al menos 2 años más. ¿Cuál es el modelo de precios más costo-efectivo?",
    "options": {
      "A": "Instancias bajo demanda",
      "B": "Instancias reservadas de 1 año sin pago inicial",
      "C": "Instancias reservadas de 3 años con pago total por adelantado",
      "D": "Spot Instances"
    },
    "explanation": "• La carga de trabajo de estado estable que se ejecuta las 24 horas del día, los 7 días de la semana es perfecta para instancias reservadas\n• El plazo de 3 años ofrece el mayor descuento (hasta 72 %)\n• El pago total por adelantado proporciona el máximo ahorro\n• Se espera que funcione durante más de 2 años, por lo que se justifica un compromiso de 3 años.\n• On-Demand es el más caro\n• Las Spot Instances se pueden interrumpir\n• La reserva reservada de 1 año ofrece un descuento menor que la de 3 años",
    "why": [
      "La carga de trabajo de estado estable que se ejecuta las 24 horas del día, los 7 días de la semana es perfecta para instancias reservadas.",
      "El plazo de 3 años ofrece el mayor descuento (hasta 72%)",
      "Todo el pago inicial proporciona el máximo ahorro.",
      "Se espera que dure más de 2 años, por lo que se justifica un compromiso de 3 años.",
      "On-Demand es el más caro.",
      "Las Spot Instances se pueden interrumpir.",
      "La RI de 1 año ofrece un descuento menor que la de 3 años."
    ],
    "others": []
  },
  {
    "id": "13-2",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa ejecuta trabajos de procesamiento por lotes que pueden interrumpirse y reanudarse sin pérdida de datos. Los trabajos duran entre 4 y 6 horas diarias. ¿Cuál es la opción informática más costo-efectivo?",
    "options": {
      "A": "Instancias bajo demanda",
      "B": "Instancias reservadas",
      "C": "Spot Instances",
      "D": "Anfitriones dedicados"
    },
    "explanation": "• Las Spot Instances ofrecen hasta un 90 % de ahorro en comparación con las instancias bajo demanda\n• El procesamiento por lotes es tolerante a fallas (puede manejar interrupciones)\n• Los trabajos pueden controlarse y reanudarse\n• Caso de uso perfecto para Spot\n• El servicio bajo demanda es demasiado caro\n• Reservado requiere compromiso (no es necesario durante 4 a 6 horas diarias)\n• Los hosts dedicados son los más caros",
    "why": [
      "El procesamiento por lotes es tolerante a fallas (puede manejar interrupciones)",
      "Los trabajos pueden controlarse y reanudarse.",
      "Caso de uso perfecto para Spot.",
      "El servicio bajo demanda es demasiado caro.",
      "Reservado requiere compromiso (no es necesario durante 4 a 6 horas diarias)",
      "Los hosts dedicados son los más caros."
    ],
    "others": []
  },
  {
    "id": "13-3",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un arquitecto de soluciones necesita reducir los costos de almacenamiento de S3 para 500 TB de datos de registro. Rara vez se accede a los registros de más de 30 días, pero deben conservarse durante 7 años para cumplir con los requisitos. ¿Qué se debe hacer?",
    "options": {
      "A": "Mantenga todos los datos en S3 Standard",
      "B": "Utilice políticas de ciclo de vida de S3 para realizar la transición de datos a S3 Glacier Deep Archive después de 30 días",
      "C": "Eliminar registros después de 30 días",
      "D": "Utilice S3 Intelligent-Tiering para todos los datos"
    },
    "explanation": "• S3 Glacier Deep Archive es la clase de almacenamiento más barata ($0,00099/GB/mes)\n• Las políticas de ciclo de vida cambian automáticamente los objetos\n• Cumple con el requisito de retención de 7 años\n• Transición después de 30 días cuando el acceso se vuelve raro\n• S3 Standard cuesta $0,023/GB/mes (23 veces más caro)\n• La eliminación viola el cumplimiento\n• La organización por niveles inteligente cuesta más que Glacier Deep Archive\nAhorros: 500 TB × ($0,023 - $0,00099) × 12 meses = ~$132 000/año",
    "why": [
      "S3 Glacier Deep Archive es la clase de almacenamiento más barata ($0,00099/GB/mes)",
      "Las políticas de ciclo de vida realizan la transición automática de objetos.",
      "Cumple con el requisito de retención de 7 años.",
      "Transición después de 30 días cuando el acceso se vuelve raro.",
      "S3 Standard cuesta $0,023/GB/mes (23 veces más caro)",
      "Eliminar viola el cumplimiento.",
      "Intelligent-Tiering cuesta más que Glacier Deep Archive.",
      "Ahorros: 500 TB × ($0,023 - $0,00099) × 12 meses = ~$132 000/año."
    ],
    "others": []
  },
  {
    "id": "13-4",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación utiliza una combinación de instancias EC2 (diferentes familias y tamaños) en varias regiones, junto con Fargate y Lambda. El uso es constante y predecible. ¿Qué modelo de precios ofrece MÁS flexibilidad y ahorro?",
    "options": {
      "A": "Instancias reservadas EC2",
      "B": "Calcular planes de ahorro",
      "C": "Planes de ahorro de instancias EC2",
      "D": "Instancias bajo demanda"
    },
    "explanation": "• Los planes Compute Savings se aplican a EC2, Fargate y Lambda\n• Más flexible (cualquier familia de instancias, región, tamaño)\n• Hasta 66% de descuento\n• Se aplica automáticamente al uso elegible\n• Las instancias reservadas de EC2 solo cubren EC2, no Fargate/Lambda\n• Planes de ahorro de instancias EC2 limitados a una familia de instancias específica\n• On-Demand no ofrece ningún descuento",
    "why": [
      "Más flexible (cualquier familia de instancias, región, tamaño)",
      "Hasta 66% de descuento.",
      "Se aplica automáticamente al uso elegible.",
      "Las instancias reservadas de EC2 solo cubren EC2, no Fargate/Lambda.",
      "Planes de ahorro de instancias EC2 limitados a una familia de instancias específica.",
      "On-Demand no ofrece ningún descuento."
    ],
    "others": []
  },
  {
    "id": "13-5",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Una empresa quiere identificar qué instancias EC2 están infrautilizadas y podrían reducirse para reducir costos. ¿Qué herramienta de AWS ofrece esta recomendación?",
    "options": {
      "A": "AWS Budgets",
      "B": "AWS Cost Explorer con recomendaciones de Rightsizing",
      "C": "AWS Trusted Advisor",
      "D": "Tanto B como C"
    },
    "explanation": "• Cost Explorer proporciona recomendaciones sobre el tamaño adecuado\n• Trusted Advisor también proporciona recomendaciones de instancias infrautilizadas\n• Ambos analizan métricas de CloudWatch (CPU, memoria, red)\n• Ambos sugieren tipos de instancias más pequeñas y estiman ahorros.\n• Los presupuestos establecen límites de gasto pero no analizan la utilización\n• El uso de ambas herramientas proporciona información completa",
    "why": [
      "Cost Explorer proporciona recomendaciones sobre el tamaño adecuado.",
      "Trusted Advisor también proporciona recomendaciones de instancias infrautilizadas.",
      "Ambos analizan métricas de CloudWatch (CPU, memoria, red)",
      "Ambos sugieren tipos de instancias más pequeños y estiman ahorros.",
      "Los presupuestos establecen límites de gasto pero no analizan la utilización.",
      "El uso de ambas herramientas proporciona información completa."
    ],
    "others": []
  },
  {
    "id": "13-6",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un equipo de desarrollo ejecuta instancias EC2 de lunes a viernes, de 9 a.m. a 6 p.m. Las instancias permanecen inactivas fuera del horario comercial. ¿Cuál es el enfoque más costo-efectivo?",
    "options": {
      "A": "Usar instancias reservadas",
      "B": "Utilice Spot Instances",
      "C": "Utilice el Programador de instancias para detener instancias automáticamente fuera del horario comercial",
      "D": "Detener instancias manualmente diariamente"
    },
    "explanation": "• El Programador de instancias automatiza el inicio/detención según los cronogramas\n• Ejecutar solo 45 horas a la semana en lugar de 168 horas ahorra ~73%\n• No se requiere intervención manual\n• Las instancias reservadas se cobran las 24 horas del día, los 7 días de la semana, independientemente de si se están ejecutando o no.\n• Las Spot Instances podrían interrumpirse durante el horario laboral\n• La parada manual es propensa a errores y requiere esfuerzo\nAhorros: Funcionamiento 45/168 horas = 73% de ahorro de tiempo",
    "why": [
      "Instance Scheduler automatiza el inicio/detención según las programaciones.",
      "Ejecutar solo 45 horas a la semana en lugar de 168 horas ahorra aproximadamente un 73 %.",
      "No se requiere intervención manual.",
      "Las instancias reservadas se cobran las 24 horas del día, los 7 días de la semana, ya sea que estén en funcionamiento o no.",
      "Las Spot Instances podrían interrumpirse durante el horario laboral.",
      "La parada manual es propensa a errores y requiere esfuerzo.",
      "Ahorros: Funcionamiento 45/168 horas = 73% de ahorro de tiempo."
    ],
    "others": []
  },
  {
    "id": "13-7",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa tiene varias cuentas de AWS y desea obtener descuentos por volumen y facturación consolidada. ¿Qué deberían implementar?",
    "options": {
      "A": "AWS Budgets",
      "B": "AWS Cost Explorer",
      "C": "AWS Organizations con facturación consolidada",
      "D": "Mercado de AWS"
    },
    "explanation": "• AWS Organizations permite la facturación consolidada\n• Combina el uso en todas las cuentas para obtener descuentos por volumen\n• Factura única para todas las cuentas\n• Instancias reservadas compartidas y planes de ahorro\n• Cost Explorer y Budgets son herramientas de generación de informes.\n• Marketplace es para comprar software",
    "why": [
      "AWS Organizations permite la facturación consolidada.",
      "Combina el uso en todas las cuentas para obtener descuentos por volumen.",
      "Factura única para todas las cuentas.",
      "Instancias Reservadas Compartidas y Planes de Ahorro.",
      "Cost Explorer y Budgets son herramientas de generación de informes.",
      "Marketplace es para comprar software."
    ],
    "others": []
  },
  {
    "id": "13-8",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación almacena 1 PB de datos en S3 con patrones de acceso impredecibles. A algunos objetos se accede con frecuencia, a otros rara vez. ¿Cuál es la solución de almacenamiento más costo-efectivo?",
    "options": {
      "A": "Estándar S3 para todos los objetos",
      "B": "S3 Intelligent-Tiering",
      "C": "Mover objetos manualmente a diferentes clases de almacenamiento",
      "D": "Amazon S3 Glacier para todos los objetos"
    },
    "explanation": "• S3 Intelligent-Tiering mueve automáticamente objetos entre niveles de acceso\n• Optimiza los costos sin intervención manual\n• Tarifa de seguimiento: $0,0025/1000 objetos\n• Sin tarifas de recuperación para niveles Frecuentes/Poco frecuentes\n• S3 Standard desperdicia dinero en datos a los que se accede con poca frecuencia\n• La gestión manual es operativamente intensiva\n• El glaciar tiene retrasos en la recuperación para el acceso frecuente",
    "why": [
      "Optimiza costes sin intervención manual.",
      "Tarifa de seguimiento: $0,0025/1000 objetos.",
      "Sin tarifas de recuperación para los niveles Frecuente/Poco frecuente.",
      "S3 Standard desperdicia dinero en datos a los que se accede con poca frecuencia.",
      "La gestión manual es operativamente intensiva.",
      "El glaciar tiene retrasos en la recuperación para el acceso frecuente."
    ],
    "others": []
  },
  {
    "id": "13-9",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere pronosticar sus costos de AWS para los próximos 6 meses en función de las tendencias de uso actuales. ¿Qué herramienta deberían utilizar?",
    "options": {
      "A": "AWS Budgets",
      "B": "AWS Cost Explorer con previsión",
      "C": "AWS Trusted Advisor",
      "D": "Informe de uso y costo de AWS"
    },
    "explanation": "• Cost Explorer proporciona pronósticos de costos de hasta 12 meses\n• Basado en patrones de uso históricos\n• Gráficos interactivos que muestran predicciones.\n• Intervalo de confianza del 80%\n• Presupuestos establece alertas pero no realiza previsiones\n• Trusted Advisor proporciona recomendaciones\n• El informe de costo y uso es para un análisis detallado",
    "why": [
      "Cost Explorer proporciona pronósticos de costos de hasta 12 meses.",
      "Basado en patrones de uso históricos.",
      "Gráficos interactivos que muestran predicciones.",
      "Intervalo de confianza del 80%.",
      "Los presupuestos establecen alertas pero no hacen previsiones.",
      "Trusted Advisor ofrece recomendaciones.",
      "El informe de costo y uso es para un análisis detallado."
    ],
    "others": []
  },
  {
    "id": "13-10",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene 50 instancias m5.large ejecutándose continuamente en us-east-1 con un uso constante. Quieren comprar Instancias reservadas. ¿Qué tipo ofrece el mayor descuento?",
    "options": {
      "A": "RI estándar, 1 año, sin pago inicial",
      "B": "RI estándar, 3 años, todo por adelantado",
      "C": "RI convertible, 3 años, todo por adelantado",
      "D": "RI convertible, 1 año, pago inicial parcial"
    },
    "explanation": "• Las instancias reservadas estándar ofrecen un descuento mayor que las convertibles (hasta un 72 %)\n• El plazo de 3 años ofrece un descuento mayor que el de 1 año\n• Todo el pago por adelantado ofrece el mayor descuento\n• El uso constante hace viable el compromiso de 3 años\n• Las instancias reservadas convertibles tienen un descuento menor (hasta 54 %)\n• Parcial/Sin pago inicial tienen descuentos más bajos",
    "why": [
      "Las instancias reservadas estándar ofrecen un descuento mayor que las convertibles (hasta un 72 %)",
      "El plazo de 3 años ofrece un descuento mayor que el de 1 año.",
      "Todo pago inicial proporciona el mayor descuento.",
      "El uso constante hace viable el compromiso de 3 años.",
      "Las instancias reservadas convertibles tienen un descuento menor (hasta 54%)",
      "Parcial/Sin pago inicial tienen descuentos más bajos."
    ],
    "others": []
  },
  {
    "id": "13-11",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una base de datos RDS se ejecuta continuamente pero solo necesita Multi-AZ durante el horario comercial para lograr alta disponibilidad. ¿Cómo se pueden optimizar los costos?",
    "options": {
      "A": "Esto no es posible; Multi-AZ no se puede alternar",
      "B": "Deshabilite Multi-AZ fuera del horario comercial, vuelva a habilitarlo durante el horario comercial",
      "C": "Utilice Aurora sin servidor",
      "D": "Utilice réplicas de lectura en lugar de Multi-AZ"
    },
    "explanation": "• Multi-AZ se puede habilitar/deshabilitar (provoca un breve tiempo de inactividad)\n• Para bases de datos que no son de producción, se puede desactivar fuera del horario comercial.\n• Reduce los costos en aproximadamente un 50 % cuando está discapacitado\n• Se puede programar/automatizar con Lambda\n• Aurora Serverless tiene un caso de uso diferente\n• Las réplicas de lectura no proporcionan conmutación por error automática\nNota: Esto solo es adecuado para cargas de trabajo que no son de producción.",
    "why": [
      "Multi-AZ se puede habilitar/deshabilitar (provoca un breve tiempo de inactividad)",
      "Para bases de datos que no son de producción, se puede desactivar fuera del horario comercial.",
      "Reduce los costos en ~50% cuando está deshabilitado.",
      "Se puede programar/automatizar con Lambda.",
      "Aurora Serverless tiene un caso de uso diferente.",
      "Las réplicas de lectura no proporcionan conmutación por error automática.",
      "Nota: Esto solo es adecuado para cargas de trabajo que no son de producción."
    ],
    "others": []
  },
  {
    "id": "13-12",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere realizar un seguimiento de los costos por departamento (ingeniería, marketing, finanzas). ¿Cómo deberían implementar esto?",
    "options": {
      "A": "Cree cuentas de AWS separadas para cada departamento",
      "B": "Utilice etiquetas de asignación de costos y actívelas en la consola de facturación",
      "C": "Utilice diferentes regiones para cada departamento",
      "D": "Cree VPC independientes para cada departamento"
    },
    "explanation": "• Las etiquetas de asignación de costos permiten realizar un seguimiento de los costos por dimensiones personalizadas\n• Etiquetar recursos con claves y valores de \"Departamento\"\n• Activar etiquetas en la consola de facturación para que aparezcan en los informes\n• Ver costos agrupados por departamento en Cost Explorer\n• Las cuentas separadas añaden gastos generales de gestión\n• Las regiones no afectan el seguimiento de costos\n• Las VPC no permiten el seguimiento de costos",
    "why": [
      "Las etiquetas de asignación de costos permiten realizar un seguimiento de los costos por dimensiones personalizadas.",
      "Etiquete los recursos con la clave y los valores de \"Departamento\".",
      "Active etiquetas en la consola de facturación para que aparezcan en los informes.",
      "Vea los costos agrupados por departamento en Cost Explorer.",
      "Las cuentas separadas añaden gastos de gestión.",
      "Las regiones no afectan el seguimiento de costos.",
      "Las VPC no permiten el seguimiento de costos."
    ],
    "others": []
  },
  {
    "id": "13-13",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una función Lambda está configurada con 3008 MB de memoria pero solo usa 512 MB. La función se ejecuta 10 millones de veces al mes. ¿Qué se debe hacer para optimizar costos?",
    "options": {
      "A": "Aumentar la memoria a 10 GB",
      "B": "Reducir la asignación de memoria a 512 MB",
      "C": "Cambiar a EC2",
      "D": "Mantener la configuración actual"
    },
    "explanation": "• Cargos Lambda basados en GB-segundos (memoria × duración)\n• Asignar 3008 MB cuando sólo se utilizan 512 MB es una pérdida de dinero\n• Reducir a 512 MB reduce los costos ~6 veces\n• El tamaño adecuado de la memoria es fundamental para la optimización de costos de Lambda\n• El aumento de la memoria aumenta los costos\n• EC2 añade sobrecarga operativa\n• La configuración actual es un desperdicio\nCálculo: 3008 MB frente a 512 MB = reducción de costes 5,86 veces mayor",
    "why": [
      "Cargos Lambda basados ​​en GB-segundos (memoria × duración)",
      "Asignar 3008 MB cuando solo se utilizan 512 MB es una pérdida de dinero.",
      "Reducir a 512 MB reduce los costos ~6 veces.",
      "El tamaño correcto de la memoria es fundamental para la optimización de costos de Lambda.",
      "El aumento de la memoria aumenta los costos.",
      "EC2 añade sobrecarga operativa.",
      "La configuración actual es un desperdicio.",
      "Cálculo: 3008 MB frente a 512 MB = reducción de costes de 5,86 veces."
    ],
    "others": []
  },
  {
    "id": "13-14",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene instancias reservadas que caducan pronto. Quieren saber si deben renovar. ¿Qué característica de Cost Explorer ayuda con esta decisión?",
    "options": {
      "A": "Previsión de costes",
      "B": "Informe de utilización de instancias reservadas",
      "C": "Recomendaciones para el tamaño adecuado",
      "D": "Recomendaciones de Planes de Ahorro"
    },
    "explanation": "• El informe de utilización de RI muestra cuánta capacidad reservada se utiliza\n• La alta utilización (>80%) indica que la instancia reservada debe renovarse\n• La baja utilización sugiere una reducción de personal o no renovación\n• También muestra la cobertura de RI (qué porcentaje de uso está cubierto)\n• La previsión de costos predice costos futuros\n• El tamaño correcto es, por ejemplo, la optimización del tamaño.\n• Las recomendaciones de los planes de ahorro se comparan con las de las instancias reservadas.",
    "why": [
      "El informe de utilización de RI muestra cuánta capacidad reservada se utiliza.",
      "Una utilización alta (>80 %) indica que la RI debe renovarse.",
      "La baja utilización sugiere una reducción o no renovación.",
      "También muestra la cobertura de RI (qué porcentaje de uso está cubierto)",
      "La previsión de costos predice los costos futuros.",
      "El tamaño correcto es, por ejemplo, la optimización del tamaño.",
      "Las recomendaciones de los planes de ahorro se comparan con las de las instancias reservadas."
    ],
    "others": []
  },
  {
    "id": "13-15",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Los costos de transferencia de datos son altos para una aplicación web que ofrece contenido estático a nivel mundial. ¿Cómo se pueden reducir los costos de transferencia de datos?",
    "options": {
      "A": "Utilice la aceleración de transferencia S3",
      "B": "Utilice CloudFront como CDN",
      "C": "Mover datos a Glacier",
      "D": "Utilice instancias EC2 más grandes"
    },
    "explanation": "• CloudFront reduce la transferencia de datos desde el origen\n• Almacena en caché el contenido en ubicaciones periféricas a nivel mundial\n• La transferencia de datos desde CloudFront a los usuarios es más económica que desde EC2/S3\n• Transferencia de datos gratuita desde S3/EC2 a CloudFront\n• S3 Transfer Acceleration acelera las cargas, no reduce los costos\n• Glacier es para contenido de archivo, no activo.\n• El tamaño de la instancia no afecta los costos de transferencia",
    "why": [
      "CloudFront reduce la transferencia de datos desde el origen.",
      "Almacena en caché el contenido en ubicaciones perimetrales a nivel mundial.",
      "La transferencia de datos desde CloudFront a los usuarios es más económica que desde EC2/S3.",
      "Transferencia de datos gratuita desde S3/EC2 a CloudFront.",
      "S3 Transfer Acceleration acelera las cargas, no reduce los costos.",
      "Glacier es para contenido de archivo, no activo.",
      "El tamaño de la instancia no afecta los costos de transferencia."
    ],
    "others": []
  },
  {
    "id": "13-16",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa quiere establecer un presupuesto de 10.000 dólares al mes y recibir alertas al 80% y 100% del presupuesto. ¿Qué servicio se debe utilizar?",
    "options": {
      "A": "AWS Cost Explorer",
      "B": "AWS Budgets",
      "C": "Amazon CloudWatch Alarms",
      "D": "AWS Trusted Advisor"
    },
    "explanation": "• AWS Budgets crea presupuestos de uso y costos personalizados\n• Establecer umbrales (80%, 100%) para alertas\n• Envía notificaciones SNS cuando se exceden los umbrales\n• Puede establecer presupuestos mensuales, trimestrales o anuales\n• Cost Explorer analiza los costos pero no alerta\n• CloudWatch monitorea los recursos, no los costos\n• Trusted Advisor proporciona recomendaciones",
    "why": [
      "Establezca umbrales (80%, 100%) para las alertas.",
      "Envía notificaciones SNS cuando se exceden los umbrales.",
      "Puede establecer presupuestos mensuales, trimestrales o anuales.",
      "Cost Explorer analiza los costos pero no alerta.",
      "CloudWatch monitorea los recursos, no los costos.",
      "Trusted Advisor ofrece recomendaciones."
    ],
    "others": []
  },
  {
    "id": "13-17",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene una combinación de instancias reservadas estándar y convertibles. Quieren cambiar las familias de instancias debido a cambios en la aplicación. ¿Qué RI se pueden modificar?",
    "options": {
      "A": "Solo instancias reservadas estándar",
      "B": "Sólo instancias reservadas convertibles",
      "C": "Ambos se pueden modificar",
      "D": "Ninguno se puede modificar"
    },
    "explanation": "• Las RI convertibles pueden cambiar la familia de instancias, el sistema operativo y el arrendamiento\n• Proporciona flexibilidad para requisitos cambiantes\n• Las RI estándar no pueden cambiar la familia de instancias\n• Las RI estándar solo pueden cambiar el tamaño de la instancia dentro de la misma familia\n• Compensación: las instancias reservadas convertibles tienen un descuento menor (54 % frente a 72 %)",
    "why": [
      "Las RI convertibles pueden cambiar la familia de instancias, el sistema operativo y el arrendamiento.",
      "Proporciona flexibilidad para requisitos cambiantes.",
      "Las RI estándar no pueden cambiar la familia de instancias.",
      "Las RI estándar solo pueden cambiar el tamaño de la instancia dentro de la misma familia.",
      "Compensación: las instancias reservadas convertibles tienen un descuento menor (54 % frente a 72 %)"
    ],
    "others": []
  },
  {
    "id": "13-18",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una base de datos requiere 3000 IOPS de forma constante. Actualmente se utiliza GP3 con 16 000 IOPS aprovisionados. ¿Qué se debe hacer para optimizar costos?",
    "options": {
      "A": "Cambiar a GP2",
      "B": "Reducir las IOPS aprovisionadas a 3000 en GP3",
      "C": "Cambiar al almacenamiento magnético",
      "D": "Mantener la configuración actual"
    },
    "explanation": "• GP3 permite el aprovisionamiento independiente de IOPS\n• Reducir de 16.000 a 3.000 IOPS para reducir costos\n• Aún proporciona el rendimiento requerido\n• Escala de IOPS GP2 con tamaño de volumen (menos flexible)\n• El almacenamiento magnético tiene un rendimiento impredecible\n• La configuración actual excede 5 veces las provisiones",
    "why": [
      "GP3 permite el aprovisionamiento independiente de IOPS.",
      "Reduzca de 16.000 a 3.000 IOPS para reducir costos.",
      "Aún proporciona el rendimiento requerido.",
      "Escala de IOPS GP2 con tamaño de volumen (menos flexible)",
      "El almacenamiento magnético tiene un rendimiento impredecible.",
      "La configuración actual sobreaprovisiona 5 veces."
    ],
    "others": []
  },
  {
    "id": "13-19",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa quiere identificar volúmenes de EBS no utilizados e instantáneas antiguas para reducir costos. ¿Qué herramientas pueden ayudar?",
    "options": {
      "A": "Solo AWS Trusted Advisor",
      "B": "Solo AWS Cost Explorer",
      "C": "Tanto Trusted Advisor como scripts personalizados/AWS Config",
      "D": "AWS Budgets"
    },
    "explanation": "• Trusted Advisor identifica volúmenes de EBS no asociados\n• Los scripts personalizados pueden identificar instantáneas antiguas\n• Las reglas de AWS Config pueden detectar volúmenes no conectados\n• Combine múltiples enfoques para una limpieza integral\n• Cost Explorer muestra los costos pero no identifica los recursos no utilizados\n• Los presupuestos establecen límites pero no identifican el desperdicio",
    "why": [
      "Trusted Advisor identifica volúmenes de EBS no asociados.",
      "Los scripts personalizados pueden identificar instantáneas antiguas.",
      "Las reglas de AWS Config pueden detectar volúmenes no asociados.",
      "Combine múltiples enfoques para una limpieza integral.",
      "Cost Explorer muestra los costos pero no identifica los recursos no utilizados.",
      "Los presupuestos ponen límites pero no identifican el desperdicio."
    ],
    "others": []
  },
  {
    "id": "13-20",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa ejecuta una aplicación web con un tráfico impredecible que puede multiplicarse por 10 al instante. Quieren minimizar los costos y al mismo tiempo garantizar el rendimiento. ¿Qué arquitectura se debe utilizar?",
    "options": {
      "A": "Número fijo de instancias EC2 On-Demand",
      "B": "EC2 Auto Scaling con seguimiento de objetivos + Spot Instances",
      "C": "Instancias reservadas grandes",
      "D": "Escalado manual con alarmas de CloudWatch"
    },
    "explanation": "• Auto Scaling ajusta automáticamente la capacidad según la demanda\n• Escalas de seguimiento de objetivos basadas en métricas (CPU, solicitudes, etc.)\n• Las Spot Instances reducen los costos (hasta un 90 %) para la capacidad de escalamiento horizontal\n• Puede combinar On-Demand (línea base) + Spot (picos)\n• La capacidad fija desperdicia dinero cuando hay poco tráfico\n• Las instancias reservadas cobran por la capacidad incluso si no se utilizan\n• El escalado manual es lento y propenso a errores",
    "why": [
      "Auto Scaling ajusta automáticamente la capacidad según la demanda.",
      "Escalas de seguimiento de objetivos basadas en métricas (CPU, solicitudes, etc.)",
      "Las Spot Instances reducen los costos (hasta un 90 %) para la capacidad de escalamiento horizontal.",
      "Puede combinar On-Demand (línea de base) + Spot (picos)",
      "La capacidad fija desperdicia dinero cuando hay poco tráfico.",
      "Las instancias reservadas cobran por la capacidad incluso si no se utilizan.",
      "El escalado manual es lento y propenso a errores."
    ],
    "others": []
  },
  {
    "id": "14-1",
    "module": "Compute",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un grupo de Auto Scaling no responde a las alarmas de CloudWatch a pesar de que se activa la alarma. ¿Cuál es la causa más probable?",
    "options": {
      "A": "Métrica de CloudWatch incorrecta configurada",
      "B": "El grupo de Auto Scaling está en período de recuperación",
      "C": "El tamaño mínimo de ASG es 0",
      "D": "El tamaño deseado de ASG es 0"
    },
    "explanation": "Los períodos de recuperación suprimen las acciones de escalado para permitir que las métricas se estabilicen después de un evento de escalado.",
    "why": [
      "Los períodos de recuperación suprimen las acciones de escalado para permitir que las métricas se estabilicen después de un evento de escalado."
    ],
    "others": []
  },
  {
    "id": "14-2",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Debe actualizar una instancia EC2 en un ASG sin recibir tráfico. ¿Qué deberías hacer?",
    "options": {
      "A": "Hibernar la instancia",
      "B": "Usar temporizadores de enfriamiento",
      "C": "Poner la instancia en espera, actualizar y volver a InService",
      "D": "Utilice ganchos de ciclo de vida"
    },
    "explanation": "El modo de espera se separa del equilibrio de carga mientras se retiene en ASG, lo que evita el reemplazo.",
    "why": [
      "El modo de espera se separa del equilibrio de carga mientras se retiene en ASG, lo que evita el reemplazo."
    ],
    "others": []
  },
  {
    "id": "14-3",
    "module": "Storage",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "¿Cómo se logra WORM (Escribir una vez, leer muchas) en S3?",
    "options": {
      "A": "Habilitar control de versiones",
      "B": "Habilitar bloqueo de objetos al crear el depósito",
      "C": "Utilice Amazon S3 Glacier",
      "D": "Configurar la política de depósito"
    },
    "explanation": "Object Lock aplica WORM con períodos de retención; debe estar habilitado en la creación del depósito.",
    "why": [
      "Object Lock aplica WORM con períodos de retención.",
      "Debe estar habilitado en la creación del depósito."
    ],
    "others": []
  },
  {
    "id": "14-4",
    "module": "Storage",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Después de eliminar un objeto S3 (sin control de versiones), ¿qué ve inmediatamente en una llamada de lista de objetos?",
    "options": {
      "A": "El objeto todavía aparece",
      "B": "El objeto se elimina",
      "C": "Puede aparecer o no según la consistencia.",
      "D": "El objeto tiene un marcador de eliminación."
    },
    "explanation": "S3 proporciona una gran consistencia; El objeto desaparece inmediatamente después de una eliminación exitosa.",
    "why": [
      "S3 proporciona una gran consistencia.",
      "El objeto desaparece inmediatamente después de una eliminación exitosa."
    ],
    "others": []
  },
  {
    "id": "14-5",
    "module": "Networking",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "¿Qué característica de VPC proporciona conectividad privada a S3 y DynamoDB sin costo?",
    "options": {
      "A": "Puerta de enlace NAT",
      "B": "Interconexión de VPC",
      "C": "Puntos finales de puerta de enlace",
      "D": "Puntos finales de interfaz"
    },
    "explanation": "Los puntos finales de puerta de enlace para S3/DynamoDB son gratuitos y se basan en tablas de rutas.",
    "why": [
      "Los Gateway VPC Endpoints para Amazon S3 y Amazon DynamoDB son gratuitos y funcionan mediante entradas en las tablas de rutas.",
      "NAT Gateway e Interface Endpoints generan cargos por hora y por GB procesado."
    ],
    "others": []
  },
  {
    "id": "14-6",
    "module": "Networking",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Las solicitudes de ALB orientadas a Internet fallan a pesar de que los objetivos están en buen estado. ¿Qué es lo que probablemente esté mal?",
    "options": {
      "A": "La tabla de rutas de subred ALB carece de ruta IGW",
      "B": "Destinos en subred pública",
      "C": "ALB no tiene IP elástica",
      "D": "LB entre zonas deshabilitado"
    },
    "explanation": "ALB debe estar en subredes públicas con ruta 0.0.0.0/0 → IGW.",
    "why": [
      "ALB debe estar en subredes públicas con ruta 0.0.0.0/0 → IGW."
    ],
    "others": []
  },
  {
    "id": "14-7",
    "module": "Database",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": true,
    "answer": [
      "A",
      "D",
      "E"
    ],
    "q": "Su aplicación de lectura intensa alcanza el 100% de la CPU en RDS. ¿Qué ayuda a escalar las lecturas? (Elegí 3)",
    "options": {
      "A": "Agregar réplicas de lectura",
      "B": "Habilitar el escalado automático de almacenamiento",
      "C": "Utilice SQS para acelerar",
      "D": "Utilice ElastiCache",
      "E": "Fragmentación en varias instancias RDS",
      "F": "Habilitar Multi-AZ"
    },
    "explanation": "Las réplicas de lectura, el almacenamiento en caché y la fragmentación reducen la carga de lectura en el servidor primario.",
    "why": [
      "Las réplicas de lectura, el almacenamiento en caché y la fragmentación reducen la carga de lectura en el servidor primario."
    ],
    "others": []
  },
  {
    "id": "14-8",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "La implementación de RDS Multi-AZ proporciona:",
    "options": {
      "A": "Leer escala",
      "B": "Conmutación por error automática para alta disponibilidad",
      "C": "Recuperación ante desastres entre regiones",
      "D": "Optimización de costos"
    },
    "explanation": "Multi-AZ mantiene el modo de espera sincrónico para la conmutación por error automática, no para las lecturas.",
    "why": [
      "Multi-AZ mantiene el modo de espera sincrónico para la conmutación por error automática, no para las lecturas."
    ],
    "others": []
  },
  {
    "id": "14-9",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": true,
    "answer": [
      "A",
      "C",
      "E"
    ],
    "q": "Lambda necesita escribir CloudWatch Logs. ¿Qué permisos se requieren? (Elegí 3)",
    "options": {
      "A": "registros: Crear grupo de registros",
      "B": "registros:GetLogEvents",
      "C": "registros:CrearLogStream",
      "D": "registros:DescribirLogStreams",
      "E": "registros:PutLogEvents"
    },
    "explanation": "El tiempo de ejecución de Lambda necesita los tres para crear grupos de registros, transmisiones y escribir eventos.",
    "why": [
      "El tiempo de ejecución de Lambda necesita los tres para crear grupos de registros, transmisiones y escribir eventos."
    ],
    "others": []
  },
  {
    "id": "14-10",
    "module": "Application Integration",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "¿Qué modo de red de ECS proporciona grupos de seguridad a nivel de tarea?",
    "options": {
      "A": "Anfitrión",
      "B": "Puente",
      "C": "awsvpc",
      "D": "Por defecto"
    },
    "explanation": "awsvpc proporciona a cada tarea su propia ENI, lo que habilita grupos de seguridad a nivel de tarea.",
    "why": [
      "El modo de red awsvpc asigna una Elastic Network Interface (ENI) dedicada a cada tarea de Amazon ECS, permitiendo aplicar Security Groups a nivel de tarea.",
      "Los modos Bridge y Host comparten la red y los Security Groups de la instancia EC2 subyacente."
    ],
    "others": []
  },
  {
    "id": "14-11",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "¿Cómo se restringe el acceso al depósito de S3 solo a roles de IAM específicos?",
    "options": {
      "A": "Política de depósito con denegación explícita para todos excepto los roles enumerados",
      "B": "Política de depósito con denegación explícita para todos los usuarios excepto los enumerados",
      "C": "Política de depósito que permite solo un rol específico; los usuarios asumen el rol",
      "D": "Política de depósito con NotPrincipal"
    },
    "explanation": "Otorgar acceso al depósito a un rol; los usuarios se autentican y luego asumen ese rol.",
    "why": [
      "Conceder acceso al depósito a un rol.",
      "Los usuarios se autentican y luego asumen ese rol."
    ],
    "others": []
  },
  {
    "id": "14-12",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "CloudFront ofrece contenido privado desde S3. ¿Cómo se concede acceso a varios archivos?",
    "options": {
      "A": "URL prefirmadas de S3",
      "B": "URL firmadas de CloudFront",
      "C": "Cookies firmadas de CloudFront",
      "D": "Restricciones geográficas de CloudFront"
    },
    "explanation": "Las cookies firmadas otorgan acceso a múltiples objetos sin cambiar las URL.",
    "why": [
      "Las cookies firmadas otorgan acceso a múltiples objetos sin cambiar las URL."
    ],
    "others": []
  },
  {
    "id": "14-13",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": true,
    "answer": [
      "A",
      "C"
    ],
    "q": "¿Qué servicios identifican instancias EC2 infrautilizadas? (Elegí 2)",
    "options": {
      "A": "Amazon CloudWatch",
      "B": "Amazon SNS",
      "C": "AWS Trusted Advisor",
      "D": "AWS CloudTrail",
      "E": "AWS Config"
    },
    "explanation": "Las métricas de CloudWatch y las comprobaciones de Trusted Advisor identifican instancias de baja utilización.",
    "why": [
      "Amazon CloudWatch recopila métricas de CPU, red y disco para detectar instancias EC2 ociosas o subutilizadas.",
      "AWS Trusted Advisor incluye una comprobación específica de optimización de costos para instancias Amazon EC2 de baja utilización."
    ],
    "others": []
  },
  {
    "id": "14-14",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "¿La conectividad más costo-efectivo para equipos de proveedores pequeños a bases de datos de VPC?",
    "options": {
      "A": "AWS Client VPN",
      "B": "Conexión directa",
      "C": "VPN de sitio a sitio a VGW",
      "D": "VPN de sitio a sitio a AWS Transit Gateway"
    },
    "explanation": "Client VPN proporciona autenticación a nivel de usuario, precios de pago por uso y configuración mínima.",
    "why": [
      "Client VPN proporciona autenticación a nivel de usuario, precios de pago por uso y configuración mínima."
    ],
    "others": []
  },
  {
    "id": "14-15",
    "module": "Architecture Patterns",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "¿Canalización de procesamiento de medios sin servidor con flujo de trabajo visual y colas de prioridad?",
    "options": {
      "A": "S3 → Lambda → SQS → DynamoDB",
      "B": "S3 → Lambda → SWF → DynamoDB",
      "C": "S3 → Lambda → proceso → DynamoDB",
      "D": "S3 → Lambda → AWS Step Functions → DynamoDB"
    },
    "explanation": "Step Functions se coordina con la consola visual, prioridad a través de puntos de entrada separados.",
    "why": [
      "Step Functions se coordina con la consola visual, prioridad a través de puntos de entrada separados."
    ],
    "others": []
  },
  {
    "id": "rf-1",
    "module": "Architecture Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa de software está migrando una aplicación de microservicios a AWS. Cada microservicio necesita configuraciones específicas que incluyen:\r\n- Imagen del contenedor de Amazon ECR\r\n- Asignación de 1 vCPU y 2 GB de memoria\r\n- Variables de entorno para conexiones de bases de datos.\r\n- Puerto 8080 expuesto para el tráfico de aplicaciones.\r\n- Permisos de IAM para acceder a S3 y DynamoDB\r\n\r\n¿Qué componente de AWS debería crear el arquitecto para definir estas especificaciones de contenedor para ECS?",
    "options": {
      "A": "Definición del servicio ECS con el recuento de tareas deseado",
      "B": "Configuración de ECS Cluster con tipo de lanzamiento EC2",
      "C": "Definición de tarea ECS en formato JSON/YAML",
      "D": "Instancia de contenedor ECS con script de datos de usuario"
    },
    "explanation": "- **Definición de tareas ECS** es el modelo que define las especificaciones del contenedor.\r\n- Contiene: URL de imagen, CPU/memoria, asignaciones de puertos, variables de entorno, funciones de IAM\r\n- Formato: JSON o YAML\r\n- Versionado (por ejemplo, my-task:5 para la revisión 5)",
    "why": [
      "**Definición de tareas de ECS** es el modelo que define las especificaciones del contenedor.",
      "Contiene: URL de imagen, CPU/memoria, asignaciones de puertos, variables de entorno, funciones de IAM",
      "Formato: JSON o YAML",
      "Versionado (por ejemplo, my-task:5 para la revisión 5)"
    ],
    "others": []
  },
  {
    "id": "rf-2",
    "module": "Architecture Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa de transmisión de medios tiene un sitio web principal en us-east-1 y un sitio de recuperación ante desastres en eu-west-1. El arquitecto debe configurar la conmutación por error de DNS automática cuando el sitio principal deja de estar en buen estado. Los controles de estado deben monitorear la disponibilidad del sitio principal.\r\n\r\n¿Cuál es la configuración correcta de la Ruta 53?",
    "options": {
      "A": "Cree dos comprobaciones de estado independientes, una para cada sitio, y utilice enrutamiento basado en latencia.",
      "B": "Cree una verificación de estado solo para el sitio principal, configure el enrutamiento de conmutación por error con registros primarios y secundarios",
      "C": "Cree una verificación de estado solo para el sitio secundario y use enrutamiento de geolocalización",
      "D": "Cree comprobaciones de estado calculadas que combinen ambos sitios, utilice rutas ponderadas 50/50"
    },
    "explanation": "- **La política de enrutamiento de conmutación por error** requiere:\r\n  - Verificación de salud solo en el registro PRIMARIO\r\n  - Registro PRIMARIO (us-east-1)\r\n  - Registro SECUNDARIO (eu-west-1, no es necesario ningún control sanitario)\r\n- Cuando la primaria falla en la verificación de estado, la Ruta 53 regresa automáticamente a la secundaria\r\n\r\n**Configuración:**\r\n```\r\nRegistro primario:\r\n- Nombre: www.ejemplo.com\r\n- Tipo: A\r\n- Valor: 1.2.3.4 (us-east-1 IP)\r\n- Enrutamiento: conmutación por error - primario\r\n- Chequeo de salud: HC-123 ✅\r\n\r\nRegistro secundario:\r\n- Nombre: www.ejemplo.com\r\n- Tipo: A\r\n- Valor: 5.6.7.8 (eu-west-1 IP)\r\n- Enrutamiento: conmutación por error - secundario\r\n- Control de salud: Ninguno (no requerido)\r\n```",
    "why": [
      "**La política de enrutamiento de conmutación por error** requiere:",
      "- Verificación de salud solo en el registro PRIMARIO",
      "- Registro PRIMARIO (us-east-1)",
      "- Registro SECUNDARIO (eu-west-1, no es necesario ningún control sanitario)",
      "Cuando la primaria falla en la verificación de estado, la Ruta 53 regresa automáticamente a la secundaria",
      "*Configuración:**",
      "```",
      "Registro primario:",
      "Nombre: www.ejemplo.com",
      "Tipo: A",
      "Valor: 1.2.3.4 (us-east-1 IP)",
      "Enrutamiento: Conmutación por error - Primario",
      "Chequeo de salud: HC-123 ✅",
      "Registro secundario:",
      "Nombre: www.ejemplo.com",
      "Tipo: A",
      "Valor: 5.6.7.8 (eu-west-1 IP)",
      "Enrutamiento: conmutación por error - secundario",
      "Control de salud: Ninguno (no es obligatorio)",
      "```"
    ],
    "others": []
  },
  {
    "id": "rf-3",
    "module": "Architecture Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa de servicios financieros tiene instancias EC2 en subredes privadas que necesitan acceder a Amazon S3 y Amazon SQS. El equipo de seguridad exige que todo el tráfico permanezca dentro de la red de AWS y no atraviese Internet. La solución debería ser costo-efectivo.\r\n\r\n¿Qué configuración de punto final de VPC debería implementar el arquitecto?",
    "options": {
      "A": "Punto final de puerta de enlace para S3 y SQS",
      "B": "Punto final de interfaz (PrivateLink) tanto para S3 como para SQS",
      "C": "Punto final de puerta de enlace para S3, punto final de interfaz para SQS",
      "D": "NAT Gateway con rutas privadas a S3 y SQS"
    },
    "explanation": "• Amazon S3 y Amazon DynamoDB admiten Gateway VPC Endpoints (que son 100% GRATUITOS y se configuran en la tabla de ruteo).\n• Amazon SQS NO admite Gateway Endpoints; requiere un Interface VPC Endpoint (basado en AWS PrivateLink).\n• Combinar un Gateway Endpoint para S3 y un Interface Endpoint para SQS mantiene todo el tráfico dentro de la red privada de AWS al menor costo posible.",
    "why": [
      "Amazon S3 admite Gateway VPC Endpoints gratuitos mediante rutas en la Route Table.",
      "Amazon SQS requiere un Interface VPC Endpoint (AWS PrivateLink) para conectividad privada sin atravesar internet."
    ],
    "others": []
  },
  {
    "id": "rf-4",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un equipo de desarrollo gestiona la infraestructura utilizando múltiples pilas de CloudFormation. La pila de red crea una VPC con subredes públicas y privadas. La pila de aplicaciones necesita iniciar instancias EC2 en las subredes creadas por la pila de red.\r\n\r\n¿Cómo debería el arquitecto permitir que la pila de aplicaciones haga referencia a los ID de subred de la pila de red?",
    "options": {
      "A": "Utilice CloudFormation StackSets para implementar ambas pilas juntas",
      "B": "Exporte ID de subred usando `Outputs` en la pila de red, importe usando `Fn::ImportValue` en la pila de aplicaciones",
      "C": "Almacene los ID de subred en el almacén de parámetros y recupérelos en la pila de aplicaciones mediante referencias dinámicas",
      "D": "Utilice pilas anidadas con la pila de red como padre"
    },
    "explanation": "• Las referencias cruzadas entre pilas (Cross-Stack References) permiten que la pila de red exporte los IDs de subred en su sección `Outputs`.\n• La pila de aplicación importa esos valores dinámicamente utilizando la función intrínseca `Fn::ImportValue`.",
    "why": [
      "Exportar valores en `Outputs` de la pila de red e importarlos con `Fn::ImportValue` es el patrón nativo de referencias entre pilas en CloudFormation."
    ],
    "others": []
  },
  {
    "id": "rf-5",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa global tiene varias oficinas que se conectan a AWS a través de una VPN de sitio a sitio. Cada oficina requiere conectividad de alto rendimiento (hasta 10 Gbps agregados) a múltiples VPC en AWS. La solución actual utiliza una única conexión VPN por oficina (limitada a 1,25 Gbps).\r\n\r\n¿Qué solución proporciona un mayor ancho de banda manteniendo la redundancia?",
    "options": {
      "A": "Utilice Direct Connect con múltiples conexiones de 10 Gbps",
      "B": "Cree Transit Gateway con múltiples conexiones VPN usando ECMP (enrutamiento de múltiples rutas de igual costo)",
      "C": "Implemente múltiples puertas de enlace privadas virtuales, una por VPC",
      "D": "Utilice VPN CloudHub para conectividad de múltiples sitios"
    },
    "explanation": "**Arquitectura ECMP de AWS Transit Gateway:**\r\n\r\n```\r\nOficina en las instalaciones\r\n├── Pasarela de cliente 1 ────┐\r\n│ (IP Pública 1.2.3.4) │\r\n└── Customer Gateway 2 ────┤ Múltiples conexiones VPN\r\n    (IP pública 5.6.7.8) │ (ECMP habilitado)\r\n                            │\r\n                            ▼\r\n                    AWS Transit Gateway\r\n                    ├── Conexión VPN 1: 1,25 Gbps\r\n                    ├── Conexión VPN 2: 1,25 Gbps\r\n                    ├── Conexión VPN 3: 1,25 Gbps\r\n                    └── Conexión VPN 4: 1,25 Gbps\r\n                    Total: 5 Gbps agregados ✅\r\n                            │\r\n                ┌───────────┴───────────┬───────────┐\r\n                ▼ ▼ ▼\r\n            VPC-A VPC-B VPC-C\r\n```\r\n\r\n**Características clave:**\r\n- **ECMP:** Distribuye el tráfico a través de múltiples túneles VPN por igual\r\n- **Escalabilidad:** Agregue hasta 50 conexiones VPN por Transit Gateway\r\n- **Ancho de banda:** Cada VPN = 1,25 Gbps; 4 VPN = 5 Gbps agregados\r\n- **Alta disponibilidad:** Si un túnel falla, el tráfico se redistribuye a otros\r\n\r\n**Requisitos de configuración:**\r\n- Habilite ECMP en Transit Gateway\r\n- Configurar BGP en las puertas de enlace de los clientes.\r\n- Utilice enrutamiento dinámico (BGP) con la misma longitud de ruta AS",
    "why": [
      "*Arquitectura ECMP de AWS Transit Gateway:**",
      "```",
      "Oficina en las instalaciones",
      "├── Pasarela de cliente 1 ────┐",
      "│ (IP Pública 1.2.3.4) │",
      "└── Customer Gateway 2 ────┤ Múltiples conexiones VPN",
      "(IP pública 5.6.7.8) │ (ECMP habilitado)",
      "│",
      "▼",
      "AWS Transit Gateway",
      "├── Conexión VPN 1: 1,25 Gbps",
      "├── Conexión VPN 2: 1,25 Gbps",
      "├── Conexión VPN 3: 1,25 Gbps",
      "└── Conexión VPN 4: 1,25 Gbps",
      "Total: 5 Gbps agregados ✅",
      "│",
      "┌───────────┴───────────┬───────────┐",
      "▼ ▼ ▼",
      "VPC-A VPC-B VPC-C",
      "```",
      "*Características clave:**",
      "**ECMP:** Distribuye el tráfico a través de múltiples túneles VPN por igual",
      "**Escalabilidad:** Agregue hasta 50 conexiones VPN por Transit Gateway",
      "**Ancho de banda:** Cada VPN = 1,25 Gbps; 4 VPN = 5 Gbps agregados",
      "**Alta disponibilidad:** Si un túnel falla, el tráfico se redistribuye a otros",
      "*Requisitos de configuración:**",
      "Habilite ECMP en Transit Gateway",
      "Configurar BGP en las puertas de enlace de los clientes",
      "Utilice enrutamiento dinámico (BGP) con la misma longitud de ruta AS"
    ],
    "others": []
  },
  {
    "id": "rf-6",
    "module": "Architecture Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un equipo de aplicaciones web desea utilizar su dominio personalizado `app.company.com` con una distribución de CloudFront para el tráfico HTTPS. Deben solicitar un certificado SSL/TLS de AWS Certificate Manager (ACM).\r\n\r\n¿En qué región de AWS se debe solicitar el certificado ACM?",
    "options": {
      "A": "La misma región que el depósito de origen S3",
      "B": "Cualquier región donde CloudFront tenga una ubicación de borde",
      "C": "us-east-1 (Norte de Virginia) únicamente",
      "D": "La región más cercana a la mayoría de usuarios"
    },
    "explanation": "• REGLA CRÍTICA DE EXAMEN: Para asociar un certificado SSL/TLS de AWS Certificate Manager (ACM) con una distribución de Amazon CloudFront, el certificado DEBE solicitarse o importarse obligatoriamente en la región `us-east-1` (N. Virginia).\n• Para balanceadores ALB o API Gateway regionales el certificado se crea en la misma región del recurso, pero CloudFront es un servicio global cuyo plano de control opera en `us-east-1`.",
    "why": [
      "Amazon CloudFront exige que todos los certificados SSL/TLS de ACM se aprovisionen exclusivamente en la región us-east-1 (N. Virginia)."
    ],
    "others": []
  },
  {
    "id": "rf-7",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación de comercio electrónico se ejecuta en instancias EC2 detrás de un balanceador de carga de aplicaciones. La aplicación tiene un punto final de verificación de estado personalizado en `/health` que devuelve HTTP 200 cuando está en buen estado y HTTP 503 cuando falla la conexión de la base de datos.\r\n\r\n¿Cómo debería el arquitecto configurar el grupo objetivo de ALB para detectar adecuadamente instancias en mal estado?",
    "options": {
      "A": "Utilice la verificación de estado predeterminada en el puerto 80 con la ruta \"/\"",
      "B": "Configure la verificación de estado en el puerto 80 con la ruta \"/health\", umbral saludable 2, umbral incorrecto 2",
      "C": "Utilice la verificación de estado de TCP en el puerto 80",
      "D": "Configure la verificación de estado en el puerto 443 con verificación de certificado SSL"
    },
    "explanation": "**Configuración de verificación de estado de ALB:**\r\n\r\n```yaml\r\nConfiguración de control de estado:\r\n  Protocolo: HTTP # o HTTPS\r\n  Puerto: 80 # Puerto de aplicación\r\n  Ruta: /health # ✅ Punto final de salud personalizado\r\n  Intervalo: 30 segundos # Con qué frecuencia comprobar\r\n  Tiempo de espera: 5 segundos # Tiempo máximo de respuesta\r\n  Umbral Saludable: 2# Éxitos consecutivos para marcar saludable\r\n  Umbral de no saludable: 2 # Fallos consecutivos para marcar no saludable\r\n  Códigos de éxito: 200 # Código de respuesta HTTP esperado\r\n```\r\n\r\n**Flujo de verificación de estado:**\r\n\r\n```\r\nGrupo objetivo de ALB\r\n├── Objetivo 1 (i-001): 10.0.1.10\r\n│ ├── Comprobación 1: OBTENER /salud → 200 OK ✅\r\n│ ├── Comprobación 2: GET /salud → 200 OK ✅\r\n│ └── Estado: Saludable (2 éxitos consecutivos)\r\n│\r\n├── Objetivo 2 (i-002): 10.0.1.11\r\n│ ├── Comprobación 1: GET /salud → Error 503 ❌\r\n│ ├── Comprobación 2: GET /salud → Error 503 ❌\r\n│ └── Estado: Incorrecto (2 fallos consecutivos)\r\n│ └── ALB deja de enviar tráfico a este objetivo\r\n```\r\n\r\n**Mejores prácticas:**\r\n- Utilice una ruta de verificación de estado personalizada que valide el estado de la aplicación\r\n- Verifique la conectividad de la base de datos, las dependencias, no solo el servidor HTTP.\r\n- Establezca un umbral incorrecto = 2 para una detección de fallas más rápida\r\n- Devuelve códigos HTTP específicos: 200 = saludable, 5xx = incorrecto",
    "why": [
      "*Configuración de verificación de estado de ALB:**",
      "```yaml",
      "Configuración de control de estado:",
      "Protocolo: HTTP # o HTTPS",
      "Puerto: 80 # Puerto de aplicación",
      "Ruta: /health # ✅ Punto final de salud personalizado",
      "Intervalo: 30 segundos # Con qué frecuencia comprobar",
      "Tiempo de espera: 5 segundos # Tiempo máximo de respuesta",
      "Umbral Saludable: 2# Éxitos consecutivos para marcar saludable",
      "Umbral de no saludable: 2 # Fallos consecutivos para marcar no saludable",
      "Códigos de éxito: 200 # Código de respuesta HTTP esperado",
      "```",
      "*Flujo de verificación de estado:**",
      "```",
      "Grupo objetivo de ALB",
      "├── Objetivo 1 (i-001): 10.0.1.10",
      "│ ├── Comprobación 1: OBTENER /salud → 200 OK ✅",
      "│ ├── Comprobación 2: GET /salud → 200 OK ✅",
      "│ └── Estado: Saludable (2 éxitos consecutivos)",
      "│",
      "├── Objetivo 2 (i-002): 10.0.1.11",
      "│ ├── Comprobación 1: GET /salud → Error 503 ❌",
      "│ ├── Comprobación 2: GET /salud → Error 503 ❌",
      "│ └── Estado: Incorrecto (2 fallos consecutivos)",
      "│ └── ALB deja de enviar tráfico a este objetivo",
      "```",
      "*Mejores prácticas:**",
      "Utilice una ruta de verificación de estado personalizada que valide el estado de la aplicación",
      "Verifique la conectividad de la base de datos, las dependencias, no solo el servidor HTTP",
      "Establezca un umbral incorrecto = 2 para una detección de fallas más rápida",
      "Devuelve códigos HTTP específicos: 200 = saludable, 5xx = incorrecto"
    ],
    "others": []
  },
  {
    "id": "rf-8",
    "module": "Architecture Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un equipo de seguridad debe implementar una detección continua de amenazas para las cuentas de AWS que pueda identificar:\r\n- Instancias EC2 comprometidas que se comunican con IP maliciosas conocidas\r\n- Llamadas API inusuales que indican compromiso de credenciales\r\n- Actividad de minería de criptomonedas en instancias EC2\r\n\r\nLa solución debería requerir una sobrecarga operativa mínima y ninguna instalación de agentes.\r\n\r\n¿Qué servicio de AWS debería implementarse?",
    "options": {
      "A": "AWS Config con paquetes de conformidad personalizados",
      "B": "Amazon Macie para la detección de datos confidenciales",
      "C": "AWS GuardDuty para la detección inteligente de amenazas",
      "D": "Amazon Inspector para escaneo de vulnerabilidades"
    },
    "explanation": "• Amazon GuardDuty proporciona detección continua e inteligente de amenazas mediante aprendizaje automático y fuentes de inteligencia de amenazas.\n• Analiza automáticamente eventos de CloudTrail, VPC Flow Logs y registros DNS sin necesidad de instalar agentes y sin impacto en el rendimiento.\n• Identifica minería de criptomonedas, comunicación con IPs maliciosas conocidas y credenciales de IAM comprometidas.",
    "why": [
      "Amazon GuardDuty no requiere agentes y analiza VPC Flow Logs, registros DNS y eventos de CloudTrail para detectar instancias comprometidas y minería de criptomonedas."
    ],
    "others": []
  },
  {
    "id": "rf-9",
    "module": "Architecture Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa de medios tiene 300 TB de archivos de vídeo en S3 Glacier Deep Archive. El equipo de marketing ahora necesita acceso frecuente a estos archivos durante los próximos 6 meses. El arquitecto quiere mover archivos a S3 Intelligent-Tiering para optimizar automáticamente los costos.\r\n\r\n¿Cuál es el enfoque de migración correcto?",
    "options": {
      "A": "Cambie la clase de almacenamiento predeterminada del depósito a Niveles inteligentes; los objetos existentes migran automáticamente",
      "B": "Cree una política de ciclo de vida de S3 para realizar la transición de Glacier Deep Archive a Intelligent-Tiering",
      "C": "Restaurar objetos de Glacier Deep Archive, copiar a Intelligent-Tiering durante la restauración, eliminar versiones archivadas",
      "D": "Utilice AWS DataSync para transferir archivos de Glacier a Intelligent-Tiering"
    },
    "explanation": "**Reglas de transición de clase de almacenamiento S3:**\r\n\r\n```\r\nTransiciones directas permitidas:\r\n├── Estándar → Estándar-IA ✅\r\n├── Estándar → Niveles inteligentes ✅\r\n├── Estándar → S3 Glacier Instant Retrieval ✅\r\n├── Estándar → Recuperación Flexible Glaciar ✅\r\n├── Estándar → Archivo profundo del glaciar ✅\r\n│\r\n└── Glacier Deep Archive → Otras clases ❌ BLOQUEADO\r\n    │\r\n    │ ¡Debe restaurarse primero!\r\n    └── Glacier Deep Archive → Restauración temporal → Copiar a una nueva clase\r\n```\r\n\r\n**Proceso de migración correcto:**\r\n\r\n```\r\nPaso 1: Restaurar desde Glacier Deep Archive\r\n├── Opciones de recuperación:\r\n│ ├── Estándar: 12-48 horas ($0,02/GB)\r\n│ └── Granel: 48 horas ($0,0025/GB) ✅ costo-efectivo\r\n├── Especificar días accesibles: 1-365 días\r\n└── Los objetos permanecen en Glaciar + copia accesible temporal creada\r\n\r\nPaso 2: Copiar durante la ventana de restauración\r\n├── Mientras se restauran los objetos (accesible)\r\n├── Copiar a niveles inteligentes\r\n└── Aún existen copias originales de Glacier\r\n\r\nPaso 3: eliminar las versiones de Glacier\r\n└── Elimine las versiones originales de Glacier Deep Archive para evitar el doble de costos de almacenamiento\r\n```\r\n\r\n**Comandos de AWS CLI:**\r\n\r\n```bash\r\n# Step 1: Initiate restore (bulk for cost savings)\r\naws s3api restore-object \\\r\n  --bucket media-archive \\\r\n  --key videos/video001.mp4 \\\r\n  --restore-request '{\"Days\":30,\"GlacierJobParameters\":{\"Tier\":\"Bulk\"}}'\r\n\r\n# Step 2: After restoration completes, copy to Intelligent-Tiering\r\naws s3 cp \\\r\n  s3://media-archive/videos/video001.mp4 \\\r\n  s3://media-archive/videos/video001.mp4 \\\r\n  --storage-class INTELLIGENT_TIERING \\\r\n  --metadata-directive COPY\r\n\r\n# Step 3: Delete original Glacier version (optional)\r\naws s3api delete-object \\\r\n  --bucket media-archive \\\r\n  --key videos/video001.mp4 \\\r\n  --version-id <glacier-version-id>\r\n```\r\n\r\n**Cálculo de costos (300 TB):**\r\n- Restauración: 300 TB × $0,0025/GB = $768 (nivel masivo)\r\n- Almacenamiento durante la transición: ~$3840/mes (30 días ambas copias)\r\n- Costo final: $0,0125/GB/mes (nivel de archivo de niveles inteligentes)",
    "why": [
      "*Reglas de transición de clase de almacenamiento S3:**",
      "```",
      "Transiciones directas permitidas:",
      "├── Estándar → Estándar-IA ✅",
      "├── Estándar → Niveles inteligentes ✅",
      "├── Estándar → S3 Glacier Instant Retrieval ✅",
      "├── Estándar → Recuperación Flexible Glaciar ✅",
      "├── Estándar → Archivo profundo del glaciar ✅",
      "│",
      "└── Glacier Deep Archive → Otras clases ❌ BLOQUEADO",
      "│",
      "│ ¡Debe restaurarse primero!",
      "└── Glacier Deep Archive → Restauración temporal → Copiar a una nueva clase",
      "```",
      "*Proceso de Migración Correcto:**",
      "```",
      "Paso 1: Restaurar desde Glacier Deep Archive",
      "├── Opciones de recuperación:",
      "│ ├── Estándar: 12-48 horas ($0,02/GB)",
      "│ └── Granel: 48 horas ($0,0025/GB) ✅ costo-efectivo",
      "├── Especificar días accesibles: 1-365 días",
      "└── Los objetos permanecen en Glaciar + copia accesible temporal creada",
      "Paso 2: Copiar durante la ventana de restauración",
      "├── Mientras se restauran los objetos (accesible)",
      "├── Copiar a niveles inteligentes",
      "└── Aún existen copias originales de Glacier",
      "Paso 3: eliminar las versiones de Glacier",
      "└── Elimine las versiones originales de Glacier Deep Archive para evitar el doble de costos de almacenamiento",
      "```",
      "*Comandos de AWS CLI:**",
      "```golpecito",
      "# Paso 1: Iniciar la restauración (en bloque para ahorrar costos)",
      "objeto de restauración de aws s3api \\",
      "--bucket archivo multimedia \\",
      "--videos clave/video001.mp4 \\",
      "--restore-request '{\"Days\":30,\"GlacierJobParameters\":{\"Tier\":\"Bulk\"}}'",
      "# Paso 2: Una vez completada la restauración, copie a Intelligent-Tiering",
      "aws s3 cp \\",
      "s3://media-archive/videos/video001.mp4 \\",
      "s3://media-archive/videos/video001.mp4 \\",
      "--clase de almacenamiento INTELLIGENT_TIERING \\",
      "--COPIA directiva de metadatos",
      "# Paso 3: Eliminar la versión original de Glacier (opcional)",
      "aws s3api eliminar-objeto \\",
      "--bucket archivo multimedia \\",
      "--videos clave/video001.mp4 \\",
      "--version-id <id-versión-glaciar>",
      "```",
      "*Cálculo de costos (300 TB):**",
      "Restauración: 300 TB × $0,0025/GB = $768 (nivel masivo)",
      "Almacenamiento durante la transición: ~$3840/mes (30 días ambas copias)",
      "Costo final: $0,0125/GB/mes (nivel de archivo de niveles inteligentes)"
    ],
    "others": []
  },
  {
    "id": "rf-10",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa de análisis de datos necesita cargar archivos de vídeo de 10 TB en S3. Algunos archivos tienen 500 GB cada uno. Las cargas frecuentemente fallan después de 3 a 4 horas debido a interrupciones en la red. El arquitecto necesita una solución confiable que pueda reanudar las cargas fallidas sin reiniciar desde el principio.\r\n\r\n¿Qué debe implementar el arquitecto?",
    "options": {
      "A": "Utilice el comando `aws s3 cp` de AWS CLI con reintentos automáticos",
      "B": "Implemente la carga multiparte de S3 con partes de 100 MB cada una",
      "C": "Utilice AWS DataSync para transferencias de archivos grandes",
      "D": "Habilite la aceleración de transferencia S3 para cargas más rápidas"
    },
    "explanation": "• S3 Multipart Upload divide archivos grandes en partes independientes que se suben en paralelo.\n• Si ocurre una interrupción de red, solo se reintenta la parte afectada sin tener que reiniciar la subida completa de 500 GB.\n• Multipart Upload se recomienda para objetos > 100 MB y es obligatorio para objetos > 5 GB.",
    "why": [
      "S3 Multipart Upload es obligatorio para archivos mayores a 5 GB y permite reintentar partes individuales ante cortes de red sin reiniciar toda la carga."
    ],
    "others": []
  },
  {
    "id": "rf-11",
    "module": "Architecture Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa ejecuta una aplicación de procesamiento de datos que consume mucha memoria en instancias EC2 administradas por un grupo de Auto Scaling. El rendimiento de la aplicación se degrada significativamente cuando la utilización de la memoria supera el 75%. El arquitecto debe configurar Auto Scaling para escalar horizontalmente cuando la utilización promedio de memoria en el ASG supere el 70 %.\r\n\r\n¿Cuál es la solución correcta?",
    "options": {
      "A": "Habilitar un seguimiento detallado de las instancias EC2; CloudWatch recopila automáticamente métricas de memoria",
      "B": "Instalar el agente de CloudWatch en las instancias; configurar la recopilación de métricas de memoria; crear una política de escalado de seguimiento de objetivos utilizando una métrica de memoria personalizada",
      "C": "Utilice AWS Systems Manager para recopilar métricas de memoria; crear una política de escalamiento de pasos",
      "D": "Cree una función Lambda para consultar la memoria de instancias EC2; enviar métricas a CloudWatch"
    },
    "explanation": "• La utilización de memoria RAM es una métrica a nivel del sistema operativo y NO es recolectada por defecto por Amazon CloudWatch (ni siquiera con Detailed Monitoring).\n• Se debe instalar el CloudWatch Agent en las instancias EC2 para publicar la métrica personalizada de memoria y luego configurar una política de escalado Target Tracking sobre dicha métrica.",
    "why": [
      "EC2 no reporta uso de memoria RAM por defecto; se requiere instalar el CloudWatch Agent para publicar la métrica personalizada hacia Auto Scaling."
    ],
    "others": []
  },
  {
    "id": "rf-12",
    "module": "Architecture Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa tiene las siguientes características de carga de trabajo:\r\n- **Nivel web:** 20 instancias t3.large, constantes las 24 horas, los 7 días de la semana, pueden cambiar a t3a.xlarge para obtener un mejor precio\r\n- **Nivel de aplicación:** 30 instancias c5.xlarge, uso intensivo (10-30 instancias activas)\r\n- **Nivel de base de datos:** 5 instancias RDS r5.2xlarge para PostgreSQL, constantes 24 horas al día, 7 días a la semana\r\n\r\nEl arquitecto necesita maximizar el ahorro de costes manteniendo la flexibilidad.\r\n\r\n¿Qué estrategia de precios se debe utilizar?",
    "options": {
      "A": "Plan de ahorro de instancias EC2 para todos los niveles (web + aplicación + base de datos)",
      "B": "Calcular el plan de ahorro para todos los niveles",
      "C": "Compute Savings Plan para niveles web y de aplicaciones; Instancias reservadas de RDS para el nivel de base de datos",
      "D": "On-Demand para el nivel web; Spot Instances para el nivel de aplicación; Instancias reservadas de RDS para el nivel de base de datos"
    },
    "explanation": "• Compute Savings Plans ofrece hasta un 66% de descuento y aplica automáticamente aunque cambies de familia de instancia (ej. t3 a t3a, c5), tamaño, región o servicio (EC2, Fargate, Lambda).\n• Los Savings Plans NO cubren Amazon RDS; por lo tanto, para las instancias RDS PostgreSQL que corren 24/7 se deben adquirir RDS Reserved Instances.",
    "why": [
      "Compute Savings Plans brinda flexibilidad entre familias EC2 (t3, t3a, c5), mientras que RDS Reserved Instances cubre la capa de base de datos estable 24/7."
    ],
    "others": []
  },
  {
    "id": "rf-13",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Un equipo de almacén de datos utiliza Amazon Redshift con instantáneas diarias automatizadas retenidas durante 35 días. Las instantáneas manuales se toman mensualmente para cumplir con las normas y deben conservarse durante 7 años. El director financiero quiere optimizar los costos de almacenamiento de instantáneas.\r\n\r\n¿Qué solución reduce los costos y al mismo tiempo cumple con los requisitos de cumplimiento?",
    "options": {
      "A": "Reducir la retención automatizada de instantáneas a 7 días; Mantenga instantáneas manuales en Redshift durante 7 años.",
      "B": "Exporte instantáneas automatizadas a S3 después de 7 días; eliminar de Redshift; mantener instantáneas manuales en Redshift",
      "C": "Utilice instantáneas automáticas durante 35 días; copie instantáneas manuales a S3 después de 1 año; eliminar de Redshift",
      "D": "Reduzca las instantáneas automatizadas a 7 días; copie instantáneas manuales a S3 Glacier inmediatamente después de su creación"
    },
    "explanation": "• Amazon Redshift incluye almacenamiento gratuito de snapshots hasta el 100% del tamaño del clúster; el excedente tiene costo adicional.\n• Reducir la retención de snapshots automáticos a 7 días y copiar los snapshots manuales de cumplimiento (7 años) a Amazon S3 Glacier minimiza el costo de almacenamiento a largo plazo.",
    "why": [
      "Reducir los snapshots automáticos a 7 días y exportar los snapshots manuales de 7 años a S3 Glacier optimiza los costos de retención a largo plazo."
    ],
    "others": []
  },
  {
    "id": "rf-14",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa de fabricación necesita ejecutar aplicaciones en contenedores locales debido a los requisitos de latencia (<5 ms) para los sensores de IoT. Las aplicaciones deben utilizar servicios y herramientas de administración de AWS. La empresa ha implementado AWS Outposts en su centro de datos.\r\n\r\n¿Qué opción de implementación de ECS se debe utilizar?",
    "options": {
      "A": "ECS en el tipo de lanzamiento EC2 con zonas locales",
      "B": "ECS en el tipo de lanzamiento EC2 en AWS Outposts",
      "C": "ECS en Fargate con AWS Outposts",
      "D": "ECS Anywhere con instancias externas"
    },
    "explanation": "• AWS Outposts soporta Amazon ECS utilizando el tipo de lanzamiento EC2 (los contenedores corren en instancias EC2 locales dentro del rack de Outposts logrando latencias < 5ms).\n• AWS Fargate NO está soportado en AWS Outposts. ECS Anywhere es para hardware propio del cliente, no para Outposts.",
    "why": [
      "AWS Outposts admite Amazon ECS con tipo de lanzamiento EC2 para latencias locales menores a 5 ms, mientras que Fargate no está disponible en Outposts."
    ],
    "others": []
  },
  {
    "id": "rf-15",
    "module": "Architecture Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación de redes sociales experimenta frecuentes errores de caché durante las horas pico, lo que provoca consultas lentas en la base de datos. El equipo de la base de datos quiere implementar una capa de almacenamiento en caché con conmutación por error automática a un nodo de caché en espera en otra zona de disponibilidad si el principal falla.\r\n\r\n¿Qué configuración de ElastiCache proporciona conmutación por error automática Multi-AZ?",
    "options": {
      "A": "ElastiCache para Memcached con múltiples nodos en zonas de disponibilidad",
      "B": "ElastiCache para Redis con el modo de clúster deshabilitado y Multi-AZ con conmutación por error automática habilitada",
      "C": "ElastiCache para Memcached con detección automática habilitada",
      "D": "ElastiCache para Redis con el modo de clúster habilitado (múltiples fragmentos)"
    },
    "explanation": "• Amazon ElastiCache for Redis soporta replicación primaria-réplica y Multi-AZ con conmutación por error automática (Automatic Failover).\n• ElastiCache for Memcached NO soporta replicación, persistencia ni failover automático Multi-AZ.",
    "why": [
      "ElastiCache for Redis con Multi-AZ habilitado proporciona promoción automática de una réplica en otra AZ si falla el nodo primario."
    ],
    "others": []
  },
  {
    "id": "rf-16",
    "module": "Architecture Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un equipo de investigación procesa grandes conjuntos de datos genómicos (20 TB) almacenados en S3. Necesitan un sistema de archivos de alto rendimiento para análisis intensivos en computación que pueda:\r\n- Importar datos desde S3 al inicio del procesamiento.\r\n- Escribir los resultados en S3 después del cálculo.\r\n- Proporcionar latencia inferior a milisegundos para acceso aleatorio\r\n\r\n¿Qué solución cumple estos requisitos de forma costo-efectivo?",
    "options": {
      "A": "FSx para Windows File Server con copia de seguridad S3",
      "B": "EFS con transición del ciclo de vida de S3",
      "C": "FSx para Lustre con integración del repositorio de datos S3",
      "D": "Volúmenes de almacenamiento de instancias con AWS DataSync to S3"
    },
    "explanation": "• Amazon FSx for Lustre es un sistema de archivos paralelo de alto rendimiento (HPC) que ofrece latencia de sub-milisegundos y cientos de GB/s de throughput.\n• Se integra de forma nativa con Amazon S3 como repositorio de datos para importar datasets al inicio y exportar resultados de vuelta a S3.",
    "why": [
      "Amazon FSx for Lustre ofrece latencia sub-milisegundo para cargas HPC e integración nativa de repositorio de datos con Amazon S3."
    ],
    "others": []
  },
  {
    "id": "rf-17",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": true,
    "answer": [
      "B",
      "C"
    ],
    "q": "Una empresa desea establecer una conexión VPN de sitio a sitio entre su centro de datos local y AWS VPC. El arquitecto necesita identificar los componentes necesarios.\r\n\r\n¿Qué componentes son obligatorios para establecer la conexión VPN? (Elegí DOS)",
    "options": {
      "A": "Puerta de enlace NAT en la subred pública",
      "B": "Puerta de enlace del cliente con dirección IP pública",
      "C": "Gateway privado virtual conectado a la VPC",
      "D": "Transit Gateway para conectividad multi-VPC",
      "E": "Puerta de enlace de Internet para tráfico saliente"
    },
    "explanation": "**Componentes de VPN de sitio a sitio:**\r\n\r\n```\r\nCentro de datos local:\r\n├── Dispositivo VPN (Firewall/Enrutador)\r\n│ ├── IP pública: 203.0.113.5 ✅\r\n│ ├── Soporta IPsec\r\n│ └── Compatible con BGP (para enrutamiento dinámico)\r\n│\r\n└── Customer Gateway (recurso de AWS)\r\n    ├── Representación lógica del dispositivo local\r\n    ├── IP pública: 203.0.113.5 ✅\r\n    └── BGP ASN: 65000\r\n\r\nNube de AWS:\r\n├── Pasarela Privada Virtual (VGW) ✅\r\n│ ├── Punto final VPN del lado de AWS\r\n│ ├── Adjunto a VPC\r\n│ ├── Dos túneles (redundancia)\r\n│ └── Propaga rutas a tablas de rutas\r\n│\r\n└── VPC\r\n    ├── Subredes privadas\r\n    └── Tabla de rutas: 10.1.0.0/16 → VGW\r\n```\r\n\r\n**Configuración mínima requerida:**\r\n\r\n```\r\nPaso 1: crear una puerta de enlace del cliente\r\n├── IP pública del dispositivo local: 203.0.113.5 ✅\r\n├── Enrutamiento: Estático o Dinámico (BGP)\r\n└── BGP ASN: 65000 (si enrutamiento dinámico)\r\n\r\nPaso 2: crear una puerta de enlace privada virtual\r\n├── Adjuntar a VPC ✅\r\n└── Tipo: VPN\r\n\r\nPaso 3: crear una conexión VPN\r\n├── Pasarela del cliente: cgw-12345\r\n├── Puerta de enlace privada virtual: vgw-67890\r\n├── Enrutamiento: dinámico (BGP) o estático\r\n└── Opciones de túnel: IKEv2, AES-256\r\n\r\nPaso 4: configurar el dispositivo local\r\n├── Descargar archivo de configuración de AWS\r\n├── Aplicar al firewall/enrutador\r\n└── Establecer túneles IPsec\r\n```\r\n\r\n**Propagación de ruta:**\r\n\r\n```\r\nTabla de rutas de VPC (después de establecer la VPN):\r\n├── Local: 10.0.0.0/16 → local\r\n├── Local: 10.1.0.0/16 → vgw-67890 ✅ (propagado)\r\n└── Internet: 0.0.0.0/0 → igw-12345 (si es necesario)\r\n\r\nTabla de rutas local:\r\n├── Local: 10.1.0.0/16 → local\r\n└── AWS VPC: 10.0.0.0/16 → Túnel VPN ✅\r\n```\r\n\r\n**Por qué NO se requieren otros:**\r\n- **A (puerta de enlace NAT):** Se utiliza para acceso a Internet saliente de subred privada, NO para terminación de VPN\r\n- **D (Transit Gateway):** Alternativa a VGW para conectividad multi-VPC, no obligatoria\r\n- **E (Internet Gateway):** Para acceso a Internet VPC, independiente de la conectividad VPN\r\n\r\n**Alternativa: VPN de Transit Gateway**\r\n\r\n```\r\nArquitectura Moderna (opcional):\r\n├── Transit Gateway (en lugar de VGW)\r\n│ ├── Hub central para múltiples VPC\r\n│ ├── VPN adjunta\r\n│ └── Soporta ECMP (ancho de banda agregado)\r\n│\r\n└── Caso de uso: Multi-VPC con VPN\r\n```\r\n\r\n**Concepto clave:** VPN de sitio a sitio = Puerta de enlace del cliente (IP pública local) + Puerta de enlace privada virtual (punto final de AWS)",
    "why": [
      "*Componentes de VPN de sitio a sitio:**",
      "```",
      "Centro de datos local:",
      "├── Dispositivo VPN (Firewall/Enrutador)",
      "│ ├── IP pública: 203.0.113.5 ✅",
      "│ ├── Soporta IPsec",
      "│ └── Compatible con BGP (para enrutamiento dinámico)",
      "│",
      "└── Customer Gateway (recurso de AWS)",
      "├── Representación lógica del dispositivo local",
      "├── IP pública: 203.0.113.5 ✅",
      "└── BGP ASN: 65000",
      "Nube de AWS:",
      "├── Pasarela Privada Virtual (VGW) ✅",
      "│ ├── Punto final VPN del lado de AWS",
      "│ ├── Adjunto a VPC",
      "│ ├── Dos túneles (redundancia)",
      "│ └── Propaga rutas a tablas de rutas",
      "│",
      "└── VPC",
      "├── Subredes privadas",
      "└── Tabla de rutas: 10.1.0.0/16 → VGW",
      "```",
      "*Configuración mínima requerida:**",
      "```",
      "Paso 1: crear una puerta de enlace del cliente",
      "├── IP pública del dispositivo local: 203.0.113.5 ✅",
      "├── Enrutamiento: Estático o Dinámico (BGP)",
      "└── BGP ASN: 65000 (si enrutamiento dinámico)",
      "Paso 2: crear una puerta de enlace privada virtual",
      "├── Adjuntar a VPC ✅",
      "└── Tipo: VPN",
      "Paso 3: crear una conexión VPN",
      "├── Pasarela del cliente: cgw-12345",
      "├── Puerta de enlace privada virtual: vgw-67890",
      "├── Enrutamiento: dinámico (BGP) o estático",
      "└── Opciones de túnel: IKEv2, AES-256",
      "Paso 4: configurar el dispositivo local",
      "├── Descargar archivo de configuración de AWS",
      "├── Aplicar al firewall/enrutador",
      "└── Establecer túneles IPsec",
      "```",
      "*Propagación de ruta:**",
      "```",
      "Tabla de rutas de VPC (después de establecer la VPN):",
      "├── Local: 10.0.0.0/16 → local",
      "├── Local: 10.1.0.0/16 → vgw-67890 ✅ (propagado)",
      "└── Internet: 0.0.0.0/0 → igw-12345 (si es necesario)",
      "Tabla de rutas local:",
      "├── Local: 10.1.0.0/16 → local",
      "└── AWS VPC: 10.0.0.0/16 → Túnel VPN ✅",
      "```",
      "*Por qué NO se requieren otros:**",
      "**A (Puerta de enlace NAT):** Se utiliza para acceso a Internet saliente de subred privada, NO para terminación de VPN",
      "**D (Transit Gateway):** Alternativa a VGW para conectividad multi-VPC, no obligatoria",
      "**E (Internet Gateway):** Para acceso a Internet VPC, independiente de la conectividad VPN",
      "*Alternativa: VPN de Transit Gateway**",
      "```",
      "Arquitectura Moderna (opcional):",
      "├── Transit Gateway (en lugar de VGW)",
      "│ ├── Hub central para múltiples VPC",
      "│ ├── VPN adjunta",
      "│ └── Soporta ECMP (ancho de banda agregado)",
      "│",
      "└── Caso de uso: Multi-VPC con VPN",
      "```",
      "*Concepto clave:** VPN de sitio a sitio = Puerta de enlace del cliente (IP pública local) + Puerta de enlace privada virtual (punto final de AWS)"
    ],
    "others": []
  },
  {
    "id": "rf-18",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación de comercio electrónico utiliza DynamoDB para almacenar datos de pedidos. El equipo de desarrollo debe capturar todos los cambios (inserciones, actualizaciones, eliminaciones) de los pedidos en tiempo real y activar el procesamiento posterior (actualizaciones de inventario, notificaciones).\r\n\r\n¿Qué solución captura los cambios de DynamoDB con una latencia mínima?",
    "options": {
      "A": "Consulte DynamoDB con filtro de marca de tiempo cada minuto para encontrar elementos nuevos/actualizados",
      "B": "Habilite DynamoDB Streams y procese registros de cambios con Lambda",
      "C": "Exporte la tabla de DynamoDB a S3 cada hora y procese los cambios",
      "D": "Utilice CloudWatch Events para monitorear las llamadas a la API de DynamoDB"
    },
    "explanation": "• DynamoDB Streams captura una secuencia ordenada en tiempo real (milisegundos) de los cambios a nivel de ítem (INSERT, MODIFY, DELETE) con retención de 24 horas.\n• Al asociar una función AWS Lambda al stream, se procesan los cambios en tiempo real sin necesidad de realizar sondeos (polling).",
    "why": [
      "DynamoDB Streams integrado con AWS Lambda permite capturar y procesar inserciones, modificaciones y borrados en tiempo real."
    ],
    "others": []
  },
  {
    "id": "rf-19",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa tiene una conexión Direct Connect con una interfaz virtual pública para acceder a los servicios públicos de AWS (S3, DynamoDB). Para optimizar el enrutamiento y reducir los costos de transferencia de datos, el equipo de red quiere garantizar que el tráfico a S3 en us-east-1 solo utilice la infraestructura de AWS dentro de la región us-east-1 y NO atraviese a otras regiones.\r\n\r\n¿Qué configuración de BGP se debe aplicar?",
    "options": {
      "A": "Configurar la etiqueta comunitaria BGP NO_EXPORT",
      "B": "Configurar la etiqueta comunitaria BGP de preferencia local con el valor 200",
      "C": "Configure la etiqueta de comunidad BGP 7224:9100 (preferencia de región local)",
      "D": "Configurar la etiqueta de comunidad BGP 7224:9300 (preferencia global)"
    },
    "explanation": "**Etiquetas de la comunidad BGP de Direct Connect:**\r\n\r\n```\r\nEtiquetas de la comunidad AWS BGP (solo VIF pública):\r\n├── 7224:9100 → Solo región local de AWS ✅\r\n│ └── Caso de uso: mantener el tráfico en la misma región que Direct Connect\r\n│\r\n├── 7224:9200 → Todas las regiones del mismo continente\r\n│ └── Caso de uso: regiones de EE. UU. o regiones de la UE, etc.\r\n│\r\n├── 7224:9300 → Global (todas las regiones de AWS) [predeterminado]\r\n│ └── Caso de uso: acceder a cualquier región de AWS\r\n│\r\n└── NO_EXPORT → No anunciar más allá de AS\r\n    └── Caso de uso: evitar la propagación de rutas\r\n```\r\n\r\n**Arquitectura del escenario:**\r\n\r\n```\r\nCentro de datos local (Virginia):\r\n├── Ubicación de conexión directa (us-east-1)\r\n│ └── Interfaz Virtual Pública\r\n│ ├── Comunidad BGP: 7224:9100 ✅\r\n│ └── VLAN: 100\r\n│\r\n└── Flujo de Tráfico con 7224:9100:\r\n    ├── S3 us-east-1: Utiliza la región local ✅ (latencia más baja)\r\n    ├── S3 us-west-2: ❌ NO anunciado (debe usar Internet)\r\n    └── DynamoDB us-east-1: Utiliza la región local ✅\r\n\r\nSin 7224:9100 (7224:9300 predeterminado):\r\n    ├── S3 us-east-1: utiliza la región local\r\n    ├── S3 us-west-2: utiliza Direct Connect → Transferencia entre regiones $$\r\n    └── Ruta de mayo por camino más largo\r\n```\r\n\r\n**Configuración BGP (ejemplo de Cisco):**\r\n\r\n```cisco\r\nenrutador bgp 65000\r\n vecino 169.254.0.1 remoto-como 7224\r\n vecino 169.254.0.1 descripción AWS-Direct-Connect\r\n \r\n familia de direcciones ipv4\r\n  vecino 169.254.0.1 activar\r\n  vecino 169.254.0.1 reconfiguración suave entrante\r\n  \r\n  ! Aplique la etiqueta de comunidad 7224:9100 a las rutas anunciadas en AWS\r\n  vecino 169.254.0.1 enviar-comunidad\r\n  vecino 169.254.0.1 mapa de ruta SET-AWS-LOCAL fuera\r\n familia de direcciones de salida\r\n\r\nmapa de ruta SET-AWS-LOCAL permiso 10\r\n establecer comunidad 7224:9100! Solo región local\r\n```\r\n\r\n**Impacto en los costos:**\r\n\r\n```\r\nEscenario 1: Sin 7224:9100 (global predeterminado)\r\n├── Conexión directa a S3 us-east-1: $0,02/GB (transferencia de datos saliente)\r\n├── Conexión directa a S3 us-west-2:\r\n│ ├── Transferencia de datos: $0.02/GB\r\n│ ├── Transferencia entre regiones: $0,02/GB\r\n│ └── Total: $0,04/GB ❌ (caro)\r\n\r\nEscenario 2: con 7224:9100 (región local)\r\n├── Conexión directa a S3 us-east-1: $0.02/GB ✅\r\n├── Conexión directa a S3 us-west-2: utiliza Internet en su lugar\r\n│ └── Puede usar VPN o Internet público (la aplicación decide)\r\n```\r\n\r\n**Tipos de interfaz virtual:**\r\n\r\n| Tipo VIF | Soporta etiquetas de la comunidad BGP | Caso de uso |\r\n|----------|------------------------------|----------|\r\n| **VIF público** | 7224:9100, 7224:9200, 7224:9300, NO_EXPORTAR ✅ | Servicios públicos de AWS (S3, DynamoDB) |\r\n| **VIF privado** | Preferencia local (NO 7224:xxxx) | Recursos de VPC |\r\n| **VIF de tránsito** | Preferencia local (NO 7224:xxxx) | AWS Transit Gateway |",
    "why": [
      "*Etiquetas de la comunidad BGP de Direct Connect:**",
      "```",
      "Etiquetas de la comunidad AWS BGP (solo VIF pública):",
      "├── 7224:9100 → Solo región local de AWS ✅",
      "│ └── Caso de uso: mantener el tráfico en la misma región que Direct Connect",
      "│",
      "├── 7224:9200 → Todas las regiones del mismo continente",
      "│ └── Caso de uso: regiones de EE. UU. o regiones de la UE, etc.",
      "│",
      "├── 7224:9300 → Global (todas las regiones de AWS) [predeterminado]",
      "│ └── Caso de uso: acceder a cualquier región de AWS",
      "│",
      "└── NO_EXPORT → No anunciar más allá de AS",
      "└── Caso de uso: evitar la propagación de rutas",
      "```",
      "*Arquitectura del escenario:**",
      "```",
      "Centro de datos local (Virginia):",
      "├── Ubicación de conexión directa (us-east-1)",
      "│ └── Interfaz Virtual Pública",
      "│ ├── Comunidad BGP: 7224:9100 ✅",
      "│ └── VLAN: 100",
      "│",
      "└── Flujo de Tráfico con 7224:9100:",
      "├── S3 us-east-1: Utiliza la región local ✅ (latencia más baja)",
      "├── S3 us-west-2: ❌ NO anunciado (debe usar Internet)",
      "└── DynamoDB us-east-1: Utiliza la región local ✅",
      "Sin 7224:9100 (7224:9300 predeterminado):",
      "├── S3 us-east-1: utiliza la región local",
      "├── S3 us-west-2: utiliza Direct Connect → Transferencia entre regiones $$",
      "└── Ruta de mayo por camino más largo",
      "```",
      "*Configuración BGP (ejemplo de Cisco):**",
      "```cisco",
      "enrutador bgp 65000",
      "vecino 169.254.0.1 remoto-como 7224",
      "vecino 169.254.0.1 descripción AWS-Direct-Connect",
      "familia de direcciones ipv4",
      "vecino 169.254.0.1 activar",
      "vecino 169.254.0.1 reconfiguración suave entrante",
      "! Aplique la etiqueta de comunidad 7224:9100 a las rutas anunciadas en AWS",
      "vecino 169.254.0.1 enviar-comunidad",
      "vecino 169.254.0.1 mapa de ruta SET-AWS-LOCAL fuera",
      "familia de direcciones de salida",
      "mapa de ruta SET-AWS-LOCAL permiso 10",
      "establecer comunidad 7224:9100! Solo región local",
      "```",
      "*Impacto en costos:**",
      "```",
      "Escenario 1: Sin 7224:9100 (global predeterminado)",
      "├── Conexión directa a S3 us-east-1: $0,02/GB (transferencia de datos saliente)",
      "├── Conexión directa a S3 us-west-2:",
      "│ ├── Transferencia de datos: $0.02/GB",
      "│ ├── Transferencia entre regiones: $0,02/GB",
      "│ └── Total: $0,04/GB ❌ (caro)",
      "Escenario 2: con 7224:9100 (región local)",
      "├── Conexión directa a S3 us-east-1: $0.02/GB ✅",
      "├── Conexión directa a S3 us-west-2: utiliza Internet en su lugar",
      "│ └── Puede usar VPN o Internet público (la aplicación decide)",
      "```",
      "*Tipos de interfaz virtual:**",
      "| Tipo VIF | Soporta etiquetas de la comunidad BGP | Caso de uso |",
      "|----------|------------------------------|----------|",
      "| **VIF público** | 7224:9100, 7224:9200, 7224:9300, NO_EXPORTAR ✅ | Servicios públicos de AWS (S3, DynamoDB) |",
      "| **VIF privado** | Preferencia local (NO 7224:xxxx) | Recursos de VPC |",
      "| **VIF de tránsito** | Preferencia local (NO 7224:xxxx) | AWS Transit Gateway |"
    ],
    "others": []
  },
  {
    "id": "rf-20",
    "module": "Architecture Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa está migrando una aplicación de us-west-1 a eu-west-2. La aplicación utiliza Amazon EFS con 50 TB de datos. El arquitecto necesita una solución para transferir todos los datos de EFS a un nuevo sistema de archivos EFS en eu-west-2 con una sobrecarga operativa mínima.\r\n\r\n¿Qué solución es la más adecuada?",
    "options": {
      "A": "Utilice AWS Snowball Edge para exportar datos de EFS, enviarlos a eu-west-2 e importar a un nuevo EFS",
      "B": "Configurar la replicación entre regiones de S3 como almacenamiento intermedio",
      "C": "Utilice AWS DataSync para transferir directamente desde el EFS de origen al EFS de destino",
      "D": "Escriba un script personalizado usando rsync a través de VPN entre regiones"
    },
    "explanation": "• AWS DataSync es un servicio administrado de transferencia de datos que soporta transferencias directas de EFS a EFS entre regiones de AWS con cifrado TLS en tránsito y validación de integridad.",
    "why": [
      "AWS DataSync transfiere datos directamente entre sistemas de archivos Amazon EFS en distintas regiones con mínima sobrecarga operativa."
    ],
    "others": []
  },
  {
    "id": "rf-21",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene una VPC con 3 zonas de disponibilidad. Las subredes privadas en cada AZ tienen instancias EC2 que necesitan acceso a Internet para actualizaciones de software. Actualmente, todas las subredes privadas se dirigen a una única puerta de enlace NAT en us-east-1a. El director financiero ha observado unos elevados costes de transferencia de datos.\r\n\r\n¿Qué solución reduce los costos de transferencia de datos manteniendo el acceso a Internet?",
    "options": {
      "A": "Reemplace la puerta de enlace NAT con una instancia NAT",
      "B": "Implementar una puerta de enlace NAT pública en cada AZ; enrutar las subredes privadas de cada AZ a la puerta de enlace NAT en la misma AZ",
      "C": "Implemente puntos de enlace de VPC para todos los servicios de AWS",
      "D": "Implemente una puerta de enlace NAT privada en la subred pública de cada AZ"
    },
    "explanation": "• Enrutar tráfico desde instancias en AZ-b y AZ-c hacia un único NAT Gateway en AZ-a genera cargos por transferencia de datos entre zonas (Cross-AZ Data Transfer) y un punto único de falla.\n• Desplegar un NAT Gateway público en cada AZ y enrutar cada subred privada al NAT Gateway de su misma AZ elimina el tráfico Cross-AZ y garantiza alta disponibilidad.",
    "why": [
      "Desplegar un NAT Gateway en cada Zona de Disponibilidad y enrutar el tráfico localmente elimina los cargos de transferencia entre zonas (Cross-AZ)."
    ],
    "others": []
  },
  {
    "id": "rf-22",
    "module": "Architecture Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un equipo de análisis de datos tiene un clúster de Amazon Redshift existente (5 TB) con el cifrado deshabilitado. Debido a los nuevos requisitos de cumplimiento, el equipo de seguridad requiere cifrado en reposo mediante AWS KMS. La solución debería minimizar el tiempo de inactividad.\r\n\r\n¿Qué solución permite el cifrado en el clúster existente?",
    "options": {
      "A": "Modifique las propiedades del clúster para habilitar el cifrado mediante AWS KMS; Redshift migra datos automáticamente",
      "B": "Cree scripts de descarga para exportar datos, cree un nuevo clúster cifrado, vuelva a cargar datos",
      "C": "Habilite el cifrado usando CloudHSM en lugar de KMS",
      "D": "Utilice AWS Database Migration Service para migrar a un nuevo clúster cifrado"
    },
    "explanation": "**Cambios en el cifrado de Redshift (2019+):**\r\n\r\n```\r\nEnfoque heredado (anterior a 2019): ❌\r\n├── No se puede habilitar el cifrado en el clúster existente\r\n├── Pasos requeridos:\r\n│ ├── 1. Crear un nuevo clúster cifrado\r\n│ ├── 2. Descargar datos del clúster antiguo\r\n│ ├── 3. Cargar datos en un nuevo clúster\r\n│ ├── 4. Cambiar los puntos finales de la aplicación\r\n│ └── 5. Eliminar clúster antiguo\r\n└── Tiempo de inactividad: varias horas para 5 TB\r\n\r\nEnfoque moderno (2019+): ✅\r\n├── Habilite el cifrado en el clúster existente ✅\r\n├── Redshift migra datos automáticamente\r\n├── Proceso:\r\n│ ├── 1. Modificar clúster → Habilitar cifrado\r\n│ ├── 2. Seleccioná la clave KMS\r\n│ ├── 3. Redshift crea instantáneas cifradas\r\n│ ├── 4. Redshift migra datos (en segundo plano)\r\n│ └── 5. El clúster permanece disponible (solo lectura durante la transición final)\r\n└── Tiempo de inactividad: Mínimo (minutos para el corte final)\r\n```\r\n\r\n**Implementación:**\r\n\r\n**Consola de AWS:**\r\n\r\n```\r\n1. Navegue a la consola Redshift\r\n2. Seleccioná el clúster: mi-clúster\r\n3. Acciones → Modificar clúster\r\n4. Configuración de la base de datos:\r\n   ├── Cifrado: Habilitar ✅\r\n   ├── Clave KMS: aws/redshift (predeterminada) o clave personalizada\r\n   └── Haga clic en \"Modificar clúster\"\r\n5. Proceso de migración al corrimiento al rojo:\r\n   ├── Estado: \"Modificando\"\r\n   ├── Progreso: 0% → 100%\r\n   ├── Duración: ~2-4 horas para 5 TB\r\n   └── Estado final: \"Disponible\" (encriptado)\r\n```\r\n\r\n**AWS CLI:**\r\n\r\n```bash\r\n# Modify existing cluster to enable encryption\r\naws redshift modify-cluster \\\r\n  --cluster-identifier my-cluster \\\r\n  --encrypted \\\r\n  --kms-key-id arn:aws:kms:us-east-1:123456789012:key/abc12345-6789-0def-gh12-3456789abcde\r\n\r\n# Check encryption status\r\naws redshift describe-clusters \\\r\n  --cluster-identifier my-cluster \\\r\n  --query 'Clusters[0].[Encrypted,KmsKeyId]' \\\r\n  --output table\r\n```\r\n\r\n**Proceso de migración:**\r\n\r\n```\r\nFase 1: Creación de instantáneas\r\n├── Redshift crea una instantánea cifrada\r\n├── Utiliza la clave KMS especificada\r\n└── Duración: ~30 minutos para 5 TB\r\n\r\nFase 2: Migración de datos (antecedentes)\r\n├── Redshift copia datos en un almacenamiento cifrado\r\n├── El cluster sigue DISPONIBLE para consultas ✅\r\n├── El rendimiento puede verse ligeramente reducido\r\n└── Duración: 2-4 horas para 5 TB\r\n\r\nFase 3: transición final\r\n├── Breve período de solo lectura (5-10 minutos)\r\n├── Cambia al almacenamiento cifrado\r\n└── El clúster vuelve al estado DISPONIBLE\r\n\r\nTiempo de inactividad total: ~10 minutos (mínimo) ✅\r\n```\r\n\r\n**Opciones de cifrado:**\r\n\r\n```\r\nAWS KMS (Recomendado): ✅\r\n├── Clave administrada por AWS: aws/redshift (predeterminada)\r\n├── Clave administrada por el cliente: CMK personalizada\r\n├── Beneficios:\r\n│ ├── Rotación de claves automatizada\r\n│ ├── Integración de CloudTrail\r\n│ ├── Control de acceso detallado\r\n│ └── Multiinquilino (infraestructura administrada por AWS)\r\n└── Costo: $1/clave/mes + solicitudes de API\r\n\r\nAWS CloudHSM:\r\n├── Módulo de seguridad de hardware de un solo inquilino\r\n├── Beneficios:\r\n│ ├── Cumplimiento de FIPS 140-3 Nivel 3\r\n│ ├── El cliente gestiona las llaves\r\n│ └── Altos requisitos de seguridad\r\n└── Costo: $1.60/hora por HSM (~$1,168/mes) + configuración\r\n```\r\n\r\n**Qué se cifra:**\r\n\r\n```\r\nClúster cifrado de Redshift:\r\n├── Bloques de datos del clúster ✅\r\n├── Tablas del sistema ✅\r\n├── Todas las instantáneas (automatizadas y manuales) ✅\r\n├── Copias de seguridad ✅\r\n└── Datos en tránsito entre nodos ✅\r\n\r\nNO Cifrado (Sin configuración adicional):\r\n├── Conexión al clúster (use SSL) ⚠️\r\n└── Resultados de la consulta descargados al cliente ⚠️\r\n```\r\n\r\n**Verificación:**\r\n\r\n```sql\r\n-- Check encryption status from Redshift query editor\r\nSELECT\r\n  current_database() as database,\r\n  encrypted\r\nFROM pg_database_info\r\nWHERE datname = current_database();\r\n\r\n-- Output:\r\n--  database | encrypted\r\n-- ----------+-----------\r\n--  dev      | true\r\n```",
    "why": [
      "*Cambios en el cifrado de Redshift (2019+):**",
      "```",
      "Enfoque heredado (anterior a 2019): ❌",
      "├── No se puede habilitar el cifrado en el clúster existente",
      "├── Pasos requeridos:",
      "│ ├── 1. Crear un nuevo clúster cifrado",
      "│ ├── 2. Descargar datos del clúster antiguo",
      "│ ├── 3. Cargar datos en un nuevo clúster",
      "│ ├── 4. Cambiar los puntos finales de la aplicación",
      "│ └── 5. Eliminar clúster antiguo",
      "└── Tiempo de inactividad: varias horas para 5 TB",
      "Enfoque moderno (2019+): ✅",
      "├── Habilite el cifrado en el clúster existente ✅",
      "├── Redshift migra datos automáticamente",
      "├── Proceso:",
      "│ ├── 1. Modificar clúster → Habilitar cifrado",
      "│ ├── 2. Seleccioná la clave KMS",
      "│ ├── 3. Redshift crea instantáneas cifradas",
      "│ ├── 4. Redshift migra datos (en segundo plano)",
      "│ └── 5. El clúster permanece disponible (solo lectura durante la transición final)",
      "└── Tiempo de inactividad: Mínimo (minutos para el corte final)",
      "```",
      "*Implementación:**",
      "*Consola de AWS:**",
      "```",
      "1. Navegue a la consola Redshift",
      "2. Seleccioná el clúster: mi-clúster",
      "3. Acciones → Modificar clúster",
      "4. Configuración de la base de datos:",
      "├── Cifrado: Habilitar ✅",
      "├── Clave KMS: aws/redshift (predeterminada) o clave personalizada",
      "└── Haga clic en \"Modificar clúster\"",
      "5. Proceso de migración al corrimiento al rojo:",
      "├── Estado: \"Modificando\"",
      "├── Progreso: 0% → 100%",
      "├── Duración: ~2-4 horas para 5 TB",
      "└── Estado final: \"Disponible\" (encriptado)",
      "```",
      "*AWS CLI:**",
      "```golpecito",
      "# Modificar el clúster existente para habilitar el cifrado",
      "aws redshift modificar-clúster \\",
      "--identificador-clúster mi-clúster \\",
      "--cifrado \\",
      "--kms-key-id arn:aws:kms:us-east-1:123456789012:key/abc12345-6789-0def-gh12-3456789abcde",
      "# Verificar el estado de cifrado",
      "aws redshift describe-clusters \\",
      "--identificador-clúster mi-clúster \\",
      "--query 'Clústeres[0].[Cifrado,KmsKeyId]' \\",
      "--tabla de salida",
      "```",
      "*Proceso de Migración:**",
      "```",
      "Fase 1: Creación de instantáneas",
      "├── Redshift crea una instantánea cifrada",
      "├── Utiliza la clave KMS especificada",
      "└── Duración: ~30 minutos para 5 TB",
      "Fase 2: Migración de datos (antecedentes)",
      "├── Redshift copia datos en un almacenamiento cifrado",
      "├── El cluster sigue DISPONIBLE para consultas ✅",
      "├── El rendimiento puede verse ligeramente reducido",
      "└── Duración: 2-4 horas para 5 TB",
      "Fase 3: transición final",
      "├── Breve período de solo lectura (5-10 minutos)",
      "├── Cambia al almacenamiento cifrado",
      "└── El clúster vuelve al estado DISPONIBLE",
      "Tiempo de inactividad total: ~10 minutos (mínimo) ✅",
      "```",
      "*Opciones de cifrado:**",
      "```",
      "AWS KMS (Recomendado): ✅",
      "├── Clave administrada por AWS: aws/redshift (predeterminada)",
      "├── Clave administrada por el cliente: CMK personalizada",
      "├── Beneficios:",
      "│ ├── Rotación de claves automatizada",
      "│ ├── Integración de CloudTrail",
      "│ ├── Control de acceso detallado",
      "│ └── Multiinquilino (infraestructura administrada por AWS)",
      "└── Costo: $1/clave/mes + solicitudes de API",
      "AWS CloudHSM:",
      "├── Módulo de seguridad de hardware de un solo inquilino",
      "├── Beneficios:",
      "│ ├── Cumplimiento de FIPS 140-3 Nivel 3",
      "│ ├── El cliente gestiona las llaves",
      "│ └── Altos requisitos de seguridad",
      "└── Costo: $1.60/hora por HSM (~$1,168/mes) + configuración",
      "```",
      "*Qué se cifra:**",
      "```",
      "Clúster cifrado de Redshift:",
      "├── Bloques de datos del clúster ✅",
      "├── Tablas del sistema ✅",
      "├── Todas las instantáneas (automatizadas y manuales) ✅",
      "├── Copias de seguridad ✅",
      "└── Datos en tránsito entre nodos ✅",
      "NO Cifrado (Sin configuración adicional):",
      "├── Conexión al clúster (use SSL) ⚠️",
      "└── Resultados de la consulta descargados al cliente ⚠️",
      "```",
      "*Verificación:**",
      "```sql",
      "- Verifique el estado de cifrado desde el editor de consultas Redshift",
      "SELECCIONAR",
      "current_database() como base de datos,",
      "cifrado",
      "DE pg_database_info",
      "DONDE nombre_dat = base_datos_actual();",
      "- Producción:",
      "- base de datos | cifrado",
      "-----------+-----------",
      "- desarrollador | verdadero",
      "```"
    ],
    "others": []
  },
  {
    "id": "rf-23",
    "module": "Architecture Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa de servicios financieros tiene una base de datos RDS PostgreSQL que experimenta un alto tráfico de lectura durante el horario comercial. El equipo de desarrollo quiere ampliar la capacidad de lectura para mejorar el rendimiento de la aplicación. La base de datos también requiere alta disponibilidad con conmutación por error automática.\r\n\r\n¿Qué solución proporciona escalado de lectura Y alta disponibilidad?",
    "options": {
      "A": "Habilitar solo la implementación Multi-AZ",
      "B": "Cree réplicas de lectura solo en varias zonas de disponibilidad",
      "C": "Habilite la implementación Multi-AZ y cree réplicas de lectura",
      "D": "Utilice Amazon Aurora con una sola instancia"
    },
    "explanation": "• Amazon RDS Multi-AZ brinda alta disponibilidad y failover automático mediante una instancia standby sincrónica (que no admite tráfico de lectura).\n• Las Read Replicas de RDS utilizan replicación asincrónica para descargar y escalar el tráfico de lectura.\n• Combinar Multi-AZ con Read Replicas proporciona tanto alta disponibilidad como escalamiento de lecturas.",
    "why": [
      "RDS Multi-AZ garantiza alta disponibilidad con conmutación por error automática, mientras que las Read Replicas escalan la capacidad de lectura."
    ],
    "others": []
  },
  {
    "id": "rf-24",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una función Lambda se ejecuta correctamente pero no aparece ningún registro en CloudWatch Logs. ¿Cuál es la causa más probable?",
    "options": {
      "A": "El tiempo de espera de la función Lambda es demasiado corto",
      "B": "La función de ejecución de Lambda carece de permisos de CloudWatch Logs",
      "C": "El período de retención de CloudWatch Logs expiró",
      "D": "La función Lambda no utiliza declaraciones console.log()"
    },
    "explanation": "**Permisos de registros de CloudWatch necesarios:**\r\n\r\n```json\r\n{\r\n  \"Efecto\": \"Permitir\",\r\n  \"Acción\": [\r\n    \"registros: Crear grupo de registros\",\r\n    \"registros:CreateLogStream\",\r\n    \"registros:PutLogEvents\"\r\n  ],\r\n  \"Recurso\": \"arn:aws:logs:*:*:*\"\r\n}\r\n```\r\n\r\n**Error común:**\r\n- Lambda se ejecuta exitosamente\r\n- PERO no aparecen registros debido a permisos faltantes\r\n- Solución: adjunte AWSLambdaBasicExecutionRole o equivalente\r\n\r\n**Concepto clave:** Todas las funciones de Lambda necesitan permisos de CloudWatch Logs para la depuración",
    "why": [
      "*Permisos de registros de CloudWatch necesarios:**",
      "```json",
      "{",
      "\"Efecto\": \"Permitir\",",
      "\"Acción\": [",
      "\"registros: Crear grupo de registros\",",
      "\"registros:CreateLogStream\",",
      "\"registros:PutLogEvents\"",
      "],",
      "\"Recurso\": \"arn:aws:logs:*:*:*\"",
      "}",
      "```",
      "*Error común:**",
      "Lambda se ejecuta con éxito",
      "PERO no aparecen registros debido a permisos faltantes",
      "Solución: adjunte AWSLambdaBasicExecutionRole o equivalente",
      "*Concepto clave:** Todas las funciones de Lambda necesitan permisos de CloudWatch Logs para la depuración"
    ],
    "others": []
  },
  {
    "id": "rf-25",
    "module": "Architecture Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un grupo de Auto Scaling se escala de 4 a 6 instancias a las 10:00 a. m. debido a una CPU alta. A las 10:02 a. m., la CPU aún está alta pero no se inician instancias adicionales. El período de recuperación es de 300 segundos. ¿Por qué?",
    "options": {
      "A": "Nuevas instancias aún se están inicializando",
      "B": "El período de recuperación evita el escalado durante 5 minutos después del escalado anterior",
      "C": "El grupo de Auto Scaling alcanzó su capacidad máxima",
      "D": "Las políticas de seguimiento de objetivos no admiten eventos de escala múltiple"
    },
    "explanation": "• El período de enfriamiento (Cooldown Period de 300 segundos / 5 minutos) suspende nuevas acciones de escalado simple tras completarse un evento de escalado.\n• Esto permite que las nuevas instancias terminen de inicializar y estabilicen la métrica de CPU antes de lanzar más instancias.",
    "why": [
      "El período de enfriamiento (Cooldown) de 5 minutos evita escalados sucesivos prematuros mientras las nuevas instancias se estabilizan."
    ],
    "others": []
  },
  {
    "id": "rf-26",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un sitio web utiliza CloudFront con origen S3. Cuando faltan archivos (404), muestra la página de error personalizada `/error.html` con estado HTTP 200. ¿Cómo configurar?",
    "options": {
      "A": "Configuración del documento de error del depósito S3",
      "B": "Respuesta de error personalizada de CloudFront: 404 → /error.html, estado 200",
      "C": "Lambda@Edge para interceptar errores 404",
      "D": "Páginas de error predeterminadas de CloudFront"
    },
    "explanation": "**Respuesta de error personalizada de CloudFront:**\r\n\r\n```\r\nConfiguración:\r\n├── Código de error: 404\r\n├── Página de respuesta: /error.html\r\n├── Código de respuesta: 200 (no 404) ✅\r\n└── TTL de caché: 300 segundos\r\n```\r\n\r\n**Flujo:**\r\n1. El cliente solicita el archivo faltante\r\n2. El origen devuelve 404\r\n3. CloudFront recupera /error.html\r\n4. Devoluciones al cliente como 200 OK\r\n\r\n**Concepto clave:** La respuesta de error personalizada de CloudFront permite páginas de error de marca con códigos de estado personalizados",
    "why": [
      "*Respuesta de error personalizada de CloudFront:**",
      "```",
      "Configuración:",
      "├── Código de error: 404",
      "├── Página de respuesta: /error.html",
      "├── Código de respuesta: 200 (no 404) ✅",
      "└── TTL de caché: 300 segundos",
      "```",
      "*Fluir:**",
      "1. El cliente solicita el archivo faltante",
      "2. El origen devuelve 404",
      "3. CloudFront recupera /error.html",
      "4. Devoluciones al cliente como 200 OK",
      "*Concepto clave:** La respuesta de error personalizada de CloudFront permite páginas de error de marca con códigos de estado personalizados"
    ],
    "others": []
  },
  {
    "id": "rf-27",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "La base de datos requiere un rendimiento constante de 20 000 IOPS. ¿Qué tipo de volumen de EBS?",
    "options": {
      "A": "gp3 con 20.000 IOPS aprovisionadas",
      "B": "io2 con 20.000 IOPS aprovisionados",
      "C": "gp2 con gran volumen para 20.000 puntos de referencia",
      "D": "st1 para alto rendimiento"
    },
    "explanation": "**Límites de volumen de EBS:**\r\n\r\n```\r\ngp3: Hasta 16.000 IOPS máx. ❌\r\n├── No se pueden aprovisionar 20 000 IOPS\r\n└── Necesito io2 en su lugar\r\n\r\nio2: Hasta 64.000 IOPS ✅\r\n├── Puede aprovisionar 20.000 IOPS\r\n├── Latencia inferior a milisegundos\r\n└── Costo: Mayor que gp3\r\n```\r\n\r\n**Decisión:**\r\n- Necesita > 16.000 IOPS → Utilice io2\r\n- Necesita ≤ 16.000 IOPS → Utilice gp3 (más barato)\r\n\r\n**Concepto clave:** gp3 max = 16 000 IOPS; io2 para requisitos de IOPS más altos",
    "why": [
      "*Límites de volumen de EBS:**",
      "```",
      "gp3: Hasta 16.000 IOPS máx. ❌",
      "├── No se pueden aprovisionar 20 000 IOPS",
      "└── Necesito io2 en su lugar",
      "io2: Hasta 64.000 IOPS ✅",
      "├── Puede aprovisionar 20.000 IOPS",
      "├── Latencia inferior a milisegundos",
      "└── Costo: Mayor que gp3",
      "```",
      "*Decisión:**",
      "Necesita > 16.000 IOPS → Utilice io2",
      "Necesita ≤ 16.000 IOPS → Utilice gp3 (más barato)",
      "*Concepto clave:** gp3 max = 16 000 IOPS; io2 para requisitos de IOPS más altos"
    ],
    "others": []
  },
  {
    "id": "rf-28",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": true,
    "answer": [
      "B",
      "C"
    ],
    "q": "Para establecer una VPN de sitio a sitio entre la VPC local y AWS, ¿qué componentes son obligatorios? (Elegí DOS)",
    "options": {
      "A": "Puerta de enlace NAT",
      "B": "Puerta de enlace del cliente con IP pública",
      "C": "Puerta de enlace privada virtual adjunta a la VPC",
      "D": "Internet Gateway",
      "E": "AWS Transit Gateway"
    },
    "explanation": "**Componentes VPN requeridos:**\r\n\r\n```\r\nLocal:\r\n└── Pasarela de Cliente (IP pública) ✅\r\n\r\nAWS:\r\n└── Gateway Privado Virtual (adjunto a VPC) ✅\r\n\r\nOpcional:\r\n├── Transit Gateway (alternativa a VGW)\r\n├── NAT Gateway (para Internet saliente, no VPN)\r\n└── IGW (para Internet general, no VPN)\r\n```\r\n\r\n**Concepto clave:** VPN = Puerta de enlace del cliente (IP pública) + Puerta de enlace privada virtual (punto final de AWS)",
    "why": [
      "*Componentes VPN requeridos:**",
      "```",
      "Local:",
      "└── Pasarela de Cliente (IP pública) ✅",
      "AWS:",
      "└── Gateway Privado Virtual (adjunto a VPC) ✅",
      "Opcional:",
      "├── Transit Gateway (alternativa a VGW)",
      "├── NAT Gateway (para Internet saliente, no VPN)",
      "└── IGW (para Internet general, no VPN)",
      "```",
      "*Concepto clave:** VPN = Puerta de enlace del cliente (IP pública) + Puerta de enlace privada virtual (punto final de AWS)"
    ],
    "others": []
  },
  {
    "id": "rf-29",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Capture cambios en tiempo real (inserciones, actualizaciones, eliminaciones) de la tabla de DynamoDB. ¿Qué solución?",
    "options": {
      "A": "Consultar tabla cada minuto con filtro de marca de tiempo.",
      "B": "Habilite DynamoDB Streams, procese con Lambda",
      "C": "Exportar tabla a S3 cada hora",
      "D": "Eventos de CloudWatch para llamadas a la API de DynamoDB"
    },
    "explanation": "**Transmisiones de DynamoDB:**\r\n\r\n```\r\nCaracterísticas:\r\n├── Capturas: INSERTAR, MODIFICAR, BORRAR\r\n├── Latencia: milisegundos (casi en tiempo real) ✅\r\n├── Retención: 24 horas\r\n└── Consumidor: Lambda, Kinesis, aplicaciones personalizadas\r\n\r\nFlujo:\r\nTabla de DynamoDB → Corriente → Lambda → Proceso\r\n```\r\n\r\n**Por qué otros se equivocan:**\r\n- R: El sondeo es ineficiente, latencia de 1 minuto\r\n- C: Exportación horaria = latencia de 1 hora\r\n- D: CloudWatch Events rastrea las llamadas API, no los cambios de datos\r\n\r\n**Concepto clave:** DynamoDB Streams = captura de datos de cambios en tiempo real",
    "why": [
      "*Transmisiones de DynamoDB:**",
      "```",
      "Características:",
      "├── Capturas: INSERTAR, MODIFICAR, BORRAR",
      "├── Latencia: milisegundos (casi en tiempo real) ✅",
      "├── Retención: 24 horas",
      "└── Consumidor: Lambda, Kinesis, aplicaciones personalizadas",
      "Fluir:",
      "Tabla de DynamoDB → Corriente → Lambda → Proceso",
      "```",
      "*Por qué otros se equivocan:**",
      "R: El sondeo es ineficiente, latencia de 1 minuto",
      "C: Exportación por hora = latencia de 1 hora",
      "D: CloudWatch Events rastrea las llamadas API, no los cambios de datos",
      "*Concepto clave:** DynamoDB Streams = captura de datos de cambios en tiempo real"
    ],
    "others": []
  },
  {
    "id": "rf-30",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Conexión directa de VIF público a S3. El tráfico debe permanecer únicamente en la región local (us-east-1). ¿Qué etiqueta BGP?",
    "options": {
      "A": "NO_EXPORTAR",
      "B": "Preferencia local 200",
      "C": "Comunidad BGP 7224:9100 (región local)",
      "D": "Comunidad BGP 7224:9300 (global)"
    },
    "explanation": "• Las etiquetas de comunidad BGP (BGP Community Tags) en una Public VIF de Direct Connect controlan el alcance de propagación de rutas:\n  - `7224:9100`: Solo la Región de AWS local\n  - `7224:9200`: Todas las Regiones del mismo continente\n  - `7224:9300`: Global (todas las Regiones públicas de AWS)",
    "why": [
      "La etiqueta de comunidad BGP 7224:9100 restringe el tráfico de una Public VIF de Direct Connect exclusivamente a la región local (us-east-1)."
    ],
    "others": []
  },
  {
    "id": "rf-31",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación sin servidor recibe solicitudes de clientes en formato XML, pero la función Lambda del backend espera JSON. ¿Qué característica de API Gateway transforma el formato de solicitud?",
    "options": {
      "A": "Método Solicitud de modelos de validación.",
      "B": "Método Modelos de respuesta",
      "C": "Plantillas de mapeo de solicitudes de integración usando VTL",
      "D": "Integración de proxy Lambda"
    },
    "explanation": "**Flujo de solicitud/respuesta de API Gateway:**\r\n\r\n```\r\nCliente → Solicitud de método → Solicitud de integración → Backend\r\n                          (Plantilla de mapeo)\r\n                          \r\nBackend → Respuesta de integración → Respuesta de método → Cliente\r\n          (Plantilla de mapeo)\r\n```\r\n\r\n**Plantillas de mapeo:**\r\n- Escrito en lenguaje de plantilla Velocity (VTL)\r\n- Transformar formato de carga útil (XML ↔ JSON)\r\n- Ubicado en Solicitud/Respuesta de Integración\r\n- Acceda a los datos de la solicitud a través de la variable `$input`\r\n\r\n**Ejemplo de plantilla VTL:**\r\n\r\n```vtl\r\n#set($inputRoot = $input.ruta('$'))\r\n{\r\n  \"nombre\": \"$inputRoot.nombre.usuario\",\r\n  \"correo electrónico\": \"$inputRoot.usuario.correo electrónico\"\r\n}\r\n```\r\n\r\n**Por qué otros se equivocan:**\r\n- A/B: los modelos validan el esquema, no transforman los datos\r\n- D: La integración de proxy pasa la solicitud tal cual a Lambda\r\n\r\n**Concepto clave:** Plantillas de mapeo = capa de transformación de solicitud/respuesta en API Gateway",
    "why": [
      "*Flujo de solicitud/respuesta de API Gateway:**",
      "```",
      "Cliente → Solicitud de método → Solicitud de integración → Backend",
      "(Plantilla de mapeo)",
      "Backend → Respuesta de integración → Respuesta de método → Cliente",
      "(Plantilla de mapeo)",
      "```",
      "*Plantillas de mapeo:**",
      "Escrito en lenguaje de plantilla Velocity (VTL)",
      "Transformar formato de carga útil (XML ↔ JSON)",
      "Ubicado en Solicitud/Respuesta de Integración",
      "Acceda a los datos de la solicitud a través de la variable `$input`",
      "*Ejemplo de plantilla VTL:**",
      "```vtl",
      "#set($inputRoot = $input.ruta('$'))",
      "{",
      "\"nombre\": \"$inputRoot.nombre.usuario\",",
      "\"correo electrónico\": \"$inputRoot.usuario.correo electrónico\"",
      "}",
      "```",
      "*Por qué otros se equivocan:**",
      "A/B: los modelos validan el esquema, no transforman los datos",
      "D: La integración de proxy pasa la solicitud tal cual a Lambda",
      "*Concepto clave:** Plantillas de mapeo = capa de transformación de solicitud/respuesta en API Gateway"
    ],
    "others": []
  },
  {
    "id": "rf-32",
    "module": "Architecture Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un grupo de Auto Scaling tiene instancias de varias plantillas de lanzamiento. Durante el escalado horizontal, ¿qué política de terminación finaliza primero las instancias con la plantilla de lanzamiento más antigua?",
    "options": {
      "A": "Instancia más antigua",
      "B": "Configuración de lanzamiento más antigua",
      "C": "Plantilla de lanzamiento más antigua",
      "D": "Política de terminación predeterminada"
    },
    "explanation": "• La política de terminación `OldestLaunchTemplate` de Auto Scaling asegura que, durante eventos de scale-in, se terminen primero las instancias creadas con la versión más antigua del Launch Template.",
    "why": [
      "La política de terminación OldestLaunchTemplate prioriza eliminar las instancias lanzadas con la plantilla de lanzamiento más antigua."
    ],
    "others": []
  },
  {
    "id": "rf-33",
    "module": "Architecture Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una plantilla de CloudFormation necesita generar una contraseña de base de datos única y almacenarla en Secrets Manager. ¿Qué tipo de recurso maneja esta generación dinámica de valor?",
    "options": {
      "A": "Parámetro CloudFormation con NoEcho",
      "B": "Valor exportado de salida de CloudFormation",
      "C": "Recurso personalizado respaldado por la función Lambda",
      "D": "Función intrínseca de CloudFormation"
    },
    "explanation": "**Recurso personalizado de CloudFormation:**\r\n\r\n```\r\nCuándo utilizar recursos personalizados:\r\n├── Generación de valores dinámicos (contraseñas, cadenas aleatorias)\r\n├── Llamar a API externas durante las operaciones de pila\r\n├── Lógica compleja no compatible con CloudFormation\r\n└── Limpieza de recursos fuera de CloudFormation\r\n\r\nFlujo:\r\nCloudFormation → Lambda (recurso personalizado) → Generar contraseña\r\n                                          → Guardar en Secrets Manager\r\n                                          → Devolver ARN a CloudFormation\r\n```\r\n\r\n**Ejemplo:**\r\n\r\n```yaml\r\nRecursos:\r\n  Generador de contraseñas:\r\n    Tipo: Personalizado::Generador de contraseñas\r\n    Propiedades:\r\n      ServiceToken: !GetAtt ContraseñaGenLambda.Arn\r\n      Longitud: 32\r\n\r\n  ContraseñaGenLambda:\r\n    Tipo: AWS::Lambda::Función\r\n    Propiedades:\r\n      Tiempo de ejecución: python3.11\r\n      Controlador: index.handler\r\n      Código:",
    "why": [
      "*Recurso personalizado de CloudFormation:**",
      "```",
      "Cuándo utilizar recursos personalizados:",
      "├── Generación de valores dinámicos (contraseñas, cadenas aleatorias)",
      "├── Llamar a API externas durante las operaciones de pila",
      "├── Lógica compleja no compatible con CloudFormation",
      "└── Limpieza de recursos fuera de CloudFormation",
      "Fluir:",
      "CloudFormation → Lambda (recurso personalizado) → Generar contraseña",
      "→ Guardar en Secrets Manager",
      "→ Devolver ARN a CloudFormation",
      "```",
      "*Ejemplo:**",
      "```yaml",
      "Recursos:",
      "Generador de contraseñas:",
      "Tipo: Personalizado::Generador de contraseñas",
      "Propiedades:",
      "ServiceToken: !GetAtt ContraseñaGenLambda.Arn",
      "Longitud: 32",
      "ContraseñaGenLambda:",
      "Tipo: AWS::Lambda::Función",
      "Propiedades:",
      "Tiempo de ejecución: python3.11",
      "Controlador: index.handler",
      "Código:"
    ],
    "others": []
  },
  {
    "id": "rf-34",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene Amazon EFS en us-east-1 y necesita acceder a él desde instancias EC2 en eu-west-1. ¿Qué configuración de red permite este acceso?",
    "options": {
      "A": "Emparejamiento de VPC en la misma región",
      "B": "Conexión de peering de VPC entre regiones",
      "C": "Replicación de EFS a eu-west-1",
      "D": "Conexión VPN entre regiones"
    },
    "explanation": "• Amazon EFS puede montarse desde instancias EC2 en otra región a través de una conexión de Inter-Region VPC Peering (o AWS Transit Gateway Peering), enrutando el tráfico NFS de forma privada.",
    "why": [
      "Una conexión de VPC Peering interregional permite que las instancias EC2 en eu-west-1 monten el sistema de archivos EFS ubicado en us-east-1."
    ],
    "others": []
  },
  {
    "id": "rf-35",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un equipo de análisis de datos tiene un clúster Redshift de 100 TB con un rendimiento de consulta lento en escaneos grandes. ¿Qué característica acelera las consultas al acercar la computación al almacenamiento?",
    "options": {
      "A": "Amazon Redshift Spectrum",
      "B": "AQUA (Acelerador de consultas avanzado)",
      "C": "Escalado de simultaneidad",
      "D": "Aceleración de consultas cortas"
    },
    "explanation": "• AQUA (Advanced Query Accelerator) para Amazon Redshift es una capa de caché distribuida acelerada por hardware (en nodos RA3) que acerca la filtración y agregación a la capa de almacenamiento, acelerando grandes escaneos hasta 10 veces.",
    "why": [
      "Redshift AQUA ejecuta filtrado y agregación acelerados por hardware cerca del almacenamiento para acelerar grandes consultas de escaneo."
    ],
    "others": []
  },
  {
    "id": "rf-36",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa que planifica la migración a AWS necesita descubrir las dependencias de las aplicaciones locales sin instalar agentes en las máquinas virtuales de VMware. ¿Qué método de descubrimiento funciona?",
    "options": {
      "A": "Descubrimiento sin agentes mediante AWS Application Discovery Service Connector",
      "B": "Descubrimiento basado en agentes",
      "C": "Importación de AWS Migration Hub",
      "D": "Agente de CloudWatch"
    },
    "explanation": "**Servicio de descubrimiento de aplicaciones de AWS:**\r\n\r\n```\r\nSin agente (VMware): ✅\r\n├── Implementar: dispositivo OVA en vCenter\r\n├── Descubre: VM, CPU, memoria, red, dependencias\r\n├── Sin instalación de agente en VM ✅\r\n└── Limitaciones: solo VMware, métricas menos detalladas\r\n\r\nBasado en agentes:\r\n├── Instalar: Discovery Agent en cada servidor\r\n├── Descubre: información detallada del proceso, conexiones de red\r\n├── Soporta: VMware, servidores físicos, Hyper-V\r\n└── Mapeo de dependencias más preciso\r\n```\r\n\r\n**Cuándo usar cada uno:**\r\n\r\n```\r\nUtilice Agentless cuando:\r\n├── Entorno VMware ✅\r\n├── No se pueden instalar agentes (política de seguridad)\r\n├── Descubrimiento inicial rápido\r\n└── Prueba de concepto\r\n\r\nUtilice Basado en agente cuando:\r\n├── Necesita datos detallados a nivel de proceso\r\n├── Servidores físicos o no VMware\r\n├── Mapeo preciso de dependencias de red\r\n└── Planificación de la migración\r\n```\r\n\r\n**Concepto clave:** Sin agente = dispositivo VMware OVA (sin instalación de agente VM)",
    "why": [
      "*Servicio de descubrimiento de aplicaciones de AWS:**",
      "```",
      "Sin agente (VMware): ✅",
      "├── Implementar: dispositivo OVA en vCenter",
      "├── Descubre: VM, CPU, memoria, red, dependencias",
      "├── Sin instalación de agente en VM ✅",
      "└── Limitaciones: solo VMware, métricas menos detalladas",
      "Basado en agentes:",
      "├── Instalar: Discovery Agent en cada servidor",
      "├── Descubre: información detallada del proceso, conexiones de red",
      "├── Soporta: VMware, servidores físicos, Hyper-V",
      "└── Mapeo de dependencias más preciso",
      "```",
      "*Cuándo usar cada uno:**",
      "```",
      "Utilice Agentless cuando:",
      "├── Entorno VMware ✅",
      "├── No se pueden instalar agentes (política de seguridad)",
      "├── Descubrimiento inicial rápido",
      "└── Prueba de concepto",
      "Utilice Basado en agente cuando:",
      "├── Necesita datos detallados a nivel de proceso",
      "├── Servidores físicos o no VMware",
      "├── Mapeo preciso de dependencias de red",
      "└── Planificación de la migración",
      "```",
      "*Concepto clave:** Sin agente = dispositivo VMware OVA (sin instalación de agente VM)"
    ],
    "others": []
  },
  {
    "id": "rf-37",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación consulta la tabla de DynamoDB por user_id (clave de partición) y necesita consultar por dirección de correo electrónico. ¿Qué debería añadir el arquitecto?",
    "options": {
      "A": "Índice Secundario Local (LSI)",
      "B": "Índice secundario global (GSI) con correo electrónico como clave de partición",
      "C": "Operación de escaneo de DynamoDB",
      "D": "Agregar correo electrónico para ordenar la clave"
    },
    "explanation": "**Tipos de índices de DynamoDB:**\r\n\r\n```\r\nÍndice Secundario Local (LSI):\r\n├── Misma clave de partición que la tabla base\r\n├── Clave de clasificación diferente\r\n├── Creado en la creación de la tabla (no se puede agregar más tarde) ❌\r\n└── Límite: 5 LSI por mesa\r\n\r\nÍndice Secundario Global (GSI): ✅\r\n├── Clave de partición diferente (correo electrónico) ✅\r\n├── Se puede crear en cualquier momento (incluso después de que exista la tabla)\r\n├── Tiene su propia capacidad RCU/WCU\r\n└── Límite: 20 GSI por mesa\r\n```\r\n\r\n**Ejemplo:**\r\n\r\n```\r\nMesa base:\r\n├── Clave de partición: user_id\r\n└── Atributos: correo electrónico, nombre, creado_en\r\n\r\nGSI (índice de correo electrónico):\r\n├── Clave de partición: correo electrónico ✅\r\n├── Atributos proyectados: user_id, nombre\r\n└── Consulta por correo electrónico ahora eficiente\r\n```\r\n\r\n**Ejemplos de consulta:**\r\n\r\n```pitón\r\n# Sin GSI (LENTO - requiere escaneo)\r\nrespuesta = tabla.escanear (\r\n    FilterExpression=Attr('correo electrónico').eq('usuario@ejemplo.com')\r\n) # Lee la tabla completa ❌\r\n\r\n# Con GSI (FAST - consulta directa)\r\nrespuesta = tabla.consulta(\r\n    IndexName='EmailIndex',\r\n    KeyConditionExpression=Clave('correo electrónico').eq('usuario@ejemplo.com')\r\n) # Lee solo elementos coincidentes ✅\r\n```\r\n\r\n**Por qué otros se equivocan:**\r\n- R: LSI requiere la misma clave de partición que la tabla base\r\n- C: Scan lee la tabla completa (caro, lento)\r\n- D: La clave de clasificación es para consultas de rango, no para un patrón de acceso alternativo.\r\n\r\n**Concepto clave:** GSI = Nueva clave de partición para un patrón de consulta alternativo (se puede agregar en cualquier momento)",
    "why": [
      "*Tipos de índices de DynamoDB:**",
      "```",
      "Índice Secundario Local (LSI):",
      "├── Misma clave de partición que la tabla base",
      "├── Clave de clasificación diferente",
      "├── Creado en la creación de la tabla (no se puede agregar más tarde) ❌",
      "└── Límite: 5 LSI por mesa",
      "Índice Secundario Global (GSI): ✅",
      "├── Clave de partición diferente (correo electrónico) ✅",
      "├── Se puede crear en cualquier momento (incluso después de que exista la tabla)",
      "├── Tiene su propia capacidad RCU/WCU",
      "└── Límite: 20 GSI por mesa",
      "```",
      "*Ejemplo:**",
      "```",
      "Mesa base:",
      "├── Clave de partición: user_id",
      "└── Atributos: correo electrónico, nombre, creado_en",
      "GSI (índice de correo electrónico):",
      "├── Clave de partición: correo electrónico ✅",
      "├── Atributos proyectados: user_id, nombre",
      "└── Consulta por correo electrónico ahora eficiente",
      "```",
      "*Ejemplos de consulta:**",
      "```pitón",
      "# Sin GSI (LENTO - requiere escaneo)",
      "respuesta = tabla.escanear (",
      "FilterExpression=Attr('correo electrónico').eq('usuario@ejemplo.com')",
      ") # Lee la tabla completa ❌",
      "# Con GSI (FAST - consulta directa)",
      "respuesta = tabla.consulta(",
      "IndexName='EmailIndex',",
      "KeyConditionExpression=Clave('correo electrónico').eq('usuario@ejemplo.com')",
      ") # Lee solo elementos coincidentes ✅",
      "```",
      "*Por qué otros se equivocan:**",
      "R: LSI requiere la misma clave de partición que la tabla base",
      "C: Scan lee la tabla completa (caro, lento)",
      "D: La clave de clasificación es para consultas de rango, no para un patrón de acceso alternativo",
      "*Concepto clave:** GSI = Nueva clave de partición para un patrón de consulta alternativo (se puede agregar en cualquier momento)"
    ],
    "others": []
  },
  {
    "id": "rf-38",
    "module": "Architecture Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una función Lambda necesita acceder a las credenciales de la base de datos RDS que rotan cada 30 días. ¿Qué solución proporciona actualizaciones automáticas de credenciales?",
    "options": {
      "A": "Almacenar credenciales en variables de entorno",
      "B": "AWS Secrets Manager con rotación automática habilitada",
      "C": "Almacén de parámetros de AWS Systems Manager (estándar)",
      "D": "Almacenar credenciales en S3 con control de versiones"
    },
    "explanation": "**Administrador de secretos frente a almacén de parámetros:**\r\n\r\n```\r\nGerente de Secretos: ✅\r\n├── Rotación automática (función Lambda)\r\n├── Integración RDS/DocumentDB/Redshift\r\n├── Replicación entre regiones\r\n├── Costo: $0,40/secreto/mes + $0,05/10K llamadas API\r\n└── Caso de uso: Credenciales de base de datos, claves API\r\n\r\nAlmacén de parámetros:\r\n├── Rotación: solo manual ❌\r\n├── Nivel gratuito: parámetros estándar\r\n├── Avanzado: Rotación con Lambda personalizado\r\n└── Caso de uso: datos de configuración, integración SSM\r\n```\r\n\r\n**Flujo de rotación automática:**\r\n\r\n```\r\nDía 1:\r\nAdministrador de secretos: contraseña123\r\nBase de datos RDS: contraseña123\r\n\r\nDía 30 (rotación activada):\r\n├── Secrets Manager invoca la rotación Lambda\r\n├── Lambda crea una nueva contraseña: contraseña456\r\n├── Lambda actualiza la contraseña de RDS: contraseña456\r\n├── Lambda actualiza Secrets Manager: contraseña456\r\n└── Lambda prueba nuevas credenciales ✅\r\n\r\nAplicación:\r\n└── Siempre llama a GetSecretValue (obtiene la contraseña actual)\r\n```\r\n\r\n**Código Lambda:**\r\n\r\n```pitón\r\nimportar boto3\r\n\r\ncliente_secretos = boto3.client('administrador de secretos')\r\n\r\ndef lambda_handler(evento, contexto):\r\n    # Obtenga siempre el último secreto\r\n    respuesta = cliente_secretos.get_valor_secreto(\r\n        SecretId='prod/db/contraseña'\r\n    )\r\n    contraseña = respuesta['SecretString']\r\n    \r\n    # Conectarse a la base de datos con la contraseña actual\r\n    # No se necesitan cambios de código durante la rotación ✅\r\n```\r\n\r\n**Por qué otros se equivocan:**\r\n- A: Las variables de entorno son estáticas (sin rotación)\r\n- C: Parameter Store no tiene rotación automática\r\n- D: S3 requiere actualizaciones manuales y lógica de aplicación\r\n\r\n**Concepto clave:** Secrets Manager = Rotación automática + integración RDS",
    "why": [
      "*Administrador de secretos frente a almacén de parámetros:**",
      "```",
      "Gerente de Secretos: ✅",
      "├── Rotación automática (función Lambda)",
      "├── Integración RDS/DocumentDB/Redshift",
      "├── Replicación entre regiones",
      "├── Costo: $0,40/secreto/mes + $0,05/10K llamadas API",
      "└── Caso de uso: Credenciales de base de datos, claves API",
      "Almacén de parámetros:",
      "├── Rotación: solo manual ❌",
      "├── Nivel gratuito: parámetros estándar",
      "├── Avanzado: Rotación con Lambda personalizado",
      "└── Caso de uso: datos de configuración, integración SSM",
      "```",
      "*Flujo de rotación automática:**",
      "```",
      "Día 1:",
      "Administrador de secretos: contraseña123",
      "Base de datos RDS: contraseña123",
      "Día 30 (rotación activada):",
      "├── Secrets Manager invoca la rotación Lambda",
      "├── Lambda crea una nueva contraseña: contraseña456",
      "├── Lambda actualiza la contraseña de RDS: contraseña456",
      "├── Lambda actualiza Secrets Manager: contraseña456",
      "└── Lambda prueba nuevas credenciales ✅",
      "Solicitud:",
      "└── Siempre llama a GetSecretValue (obtiene la contraseña actual)",
      "```",
      "*Código Lambda:**",
      "```pitón",
      "importar boto3",
      "cliente_secretos = boto3.client('administrador de secretos')",
      "def lambda_handler(evento, contexto):",
      "# Obtenga siempre el último secreto",
      "respuesta = cliente_secretos.get_valor_secreto(",
      "SecretId='prod/db/contraseña'",
      ")",
      "contraseña = respuesta['SecretString']",
      "# Conectarse a la base de datos con la contraseña actual",
      "# No se necesitan cambios de código durante la rotación ✅",
      "```",
      "*Por qué otros se equivocan:**",
      "R: Las variables de entorno son estáticas (sin rotación)",
      "C: El almacén de parámetros no tiene rotación automática",
      "D: S3 requiere actualizaciones manuales y lógica de aplicación",
      "*Concepto clave:** Secrets Manager = Rotación automática + integración RDS"
    ],
    "others": []
  },
  {
    "id": "rf-39",
    "module": "Architecture Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa almacena millones de archivos en S3 con patrones de acceso impredecibles. A algunos archivos se accede con frecuencia, a otros rara vez. ¿Qué clase de almacenamiento mueve automáticamente objetos entre niveles?",
    "options": {
      "A": "S3 Standard con políticas de ciclo de vida",
      "B": "S3 Intelligent-Tiering",
      "C": "S3 Una Zona-IA",
      "D": "Amazon S3 Glacier con políticas de ciclo de vida"
    },
    "explanation": "• S3 Intelligent-Tiering monitorea los patrones de acceso de cada objeto y mueve automáticamente los objetos no accedidos durante 30 días al nivel Infrequent Access (y a los 90 días a Archive Instant Access) sin cargos por recuperación.",
    "why": [
      "S3 Intelligent-Tiering mueve objetos automáticamente entre niveles de acceso según su uso individual sin aplicar cargos de recuperación."
    ],
    "others": []
  },
  {
    "id": "rf-40",
    "module": "Architecture Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un equipo de cumplimiento necesita recuperar 100 GB de datos archivados de S3 Glacier Flexible Retrieval. Necesitan los datos en un plazo de 12 horas. ¿Qué opción de recuperación cumple este requisito de forma costo-efectivo?",
    "options": {
      "A": "Recuperación acelerada (1-5 minutos)",
      "B": "Recuperación estándar (3-5 horas)",
      "C": "Recuperación masiva (5-12 horas)",
      "D": "S3 Glacier Instant Retrieval"
    },
    "explanation": "**Opciones flexibles de recuperación de glaciares:**\r\n\r\n```\r\nAcelerado (1-5 minutos):\r\n├── Costo: $0,03/GB + $10 por 1000 solicitudes\r\n├── Costo de 100 GB: 100 × $0,03 + $10 = $13 (ALTO)\r\n└── Uso: conjuntos de datos pequeños y urgentes\r\n\r\nEstándar (3-5 horas):\r\n├── Costo: $0,01/GB + $0,05 por cada 1000 solicitudes\r\n├── Costo de 100 GB: 100 × $0,01 + $0,05 = $1,05 (MEDIO)\r\n└── Uso: Más común, coste/velocidad equilibrado\r\n\r\nGranel (5-12 horas): ✅\r\n├── Costo: $0,0025/GB + $0,025 por 1000 solicitudes\r\n├── Costo de 100 GB: 100 × $0,0025 + $0,025 = $0,275 (MÁS BAJO)\r\n└── Uso: conjuntos de datos grandes, no urgentes (cumple con el requisito de 12 horas)\r\n```\r\n\r\n**Comparación de costos:**\r\n\r\n```\r\nRecuperación de 100 GB:\r\n├── Acelerado: $13.00 (exagerado para SLA de 12 horas)\r\n├── Estándar: $1.05 (más rápido de lo necesario)\r\n└── Granel: $0.275 ✅ (cumple con el requisito de 12 horas al menor costo)\r\n\r\nAhorros: $13.00 - $0.275 = $12.725 (98% más barato que Expedited)\r\n```\r\n\r\n**Por qué otros se equivocan:**\r\n- R: Acelerado demasiado costoso para este caso de uso\r\n- B: El estándar funciona pero cuesta 4 veces más que el Bulk\r\n- D: Glacier Instant Retrieval es una clase de almacenamiento diferente (recuperación ms)\r\n\r\n**Concepto clave:** Recuperación masiva = más costo-efectivo para grandes conjuntos de datos con cronograma flexible",
    "why": [
      "*Opciones de recuperación flexibles del glaciar:**",
      "```",
      "Acelerado (1-5 minutos):",
      "├── Costo: $0,03/GB + $10 por 1000 solicitudes",
      "├── Costo de 100 GB: 100 × $0,03 + $10 = $13 (ALTO)",
      "└── Uso: conjuntos de datos pequeños y urgentes",
      "Estándar (3-5 horas):",
      "├── Costo: $0,01/GB + $0,05 por cada 1000 solicitudes",
      "├── Costo de 100 GB: 100 × $0,01 + $0,05 = $1,05 (MEDIO)",
      "└── Uso: Más común, coste/velocidad equilibrado",
      "Granel (5-12 horas): ✅",
      "├── Costo: $0,0025/GB + $0,025 por 1000 solicitudes",
      "├── Costo de 100 GB: 100 × $0,0025 + $0,025 = $0,275 (MÁS BAJO)",
      "└── Uso: conjuntos de datos grandes, no urgentes (cumple con el requisito de 12 horas)",
      "```",
      "*Comparación de costos:**",
      "```",
      "Recuperación de 100 GB:",
      "├── Acelerado: $13.00 (exagerado para SLA de 12 horas)",
      "├── Estándar: $1.05 (más rápido de lo necesario)",
      "└── Granel: $0.275 ✅ (cumple con el requisito de 12 horas al menor costo)",
      "Ahorros: $13.00 - $0.275 = $12.725 (98% más barato que Expedited)",
      "```",
      "*Por qué otros se equivocan:**",
      "R: Acelerar demasiado caro para este caso de uso",
      "B: El estándar funciona pero cuesta 4 veces más que el granel",
      "D: Glacier Instant Retrieval es una clase de almacenamiento diferente (recuperación ms)",
      "*Concepto clave:** Recuperación masiva = más costo-efectivo para grandes conjuntos de datos con un cronograma flexible"
    ],
    "others": []
  },
  {
    "id": "rf-41",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una aplicación comercial de alta frecuencia requiere una latencia de milisegundos de un solo dígito entre instancias. ¿Qué tipo de grupo de ubicación se debe utilizar?",
    "options": {
      "A": "Grupo de ubicación de clúster",
      "B": "Grupo de colocación extendida",
      "C": "Grupo de colocación de particiones",
      "D": "Ubicación de VPC predeterminada"
    },
    "explanation": "• Un Cluster Placement Group ubica las instancias EC2 físicamente cerca dentro de una única Zona de Disponibilidad sobre una red de baja latencia, logrando latencias de milisegundos de un solo dígito (o microsegundos) y hasta 100 Gbps para trading de alta frecuencia y HPC.",
    "why": [
      "Un Cluster Placement Group agrupa las instancias en una sola AZ para ofrecer la menor latencia de red y el máximo ancho de banda posibles."
    ],
    "others": []
  },
  {
    "id": "rf-42",
    "module": "Architecture Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un webhook simple necesita activar una función Lambda a través de HTTPS. La función no requiere autenticación ni solicitud de transformación. ¿Cuál es la solución más costo-efectivo?",
    "options": {
      "A": "API REST de puerta de enlace API",
      "B": "API Puerta de enlace HTTP API",
      "C": "URL de la función Lambda",
      "D": "Application Load Balancer (ALB)"
    },
    "explanation": "• Las Lambda Function URLs proporcionan un endpoint HTTPS dedicado para invocar directamente una función Lambda sin ningún costo adicional de API Gateway, ideal para webhooks sencillos.",
    "why": [
      "Lambda Function URL provee un endpoint HTTPS directo y gratuito (solo pagas la ejecución de Lambda) ideal para webhooks simples."
    ],
    "others": []
  },
  {
    "id": "rf-43",
    "module": "Architecture Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un flujo de trabajo de procesamiento de pedidos de varios pasos debe coordinar las funciones de Lambda con el manejo de errores y la lógica de reintento. ¿Qué servicio lo orquesta mejor?",
    "options": {
      "A": "Cola SQS con Lambda",
      "B": "Regla de EventBridge con múltiples objetivos",
      "C": "Máquina de estado de funciones de paso",
      "D": "Tema de SNS con suscripciones Lambda"
    },
    "explanation": "**AWS Step Functions frente a SQS:**\r\n\r\n```\r\nAWS Step Functions: ✅\r\n├── Orquestación visual del flujo de trabajo\r\n├── Manejo de errores integrado, reintentos\r\n├── Ramificación condicional (si/si no)\r\n├── Ejecución paralela\r\n├── Estados de espera (retrasos)\r\n└── Uso: Flujos de trabajo complejos, gestión de estado\r\n\r\nSQS:\r\n├── Cola de mensajes simple\r\n├── Servicios de desacoplamiento\r\n├── Sin orquestación incorporada\r\n└── Uso: colas de trabajos asincrónicas\r\n```\r\n\r\n**Ejemplo de funciones de paso:**\r\n\r\n```\r\nFlujo de trabajo de procesamiento de pedidos:\r\n\r\n┌─────────────┐\r\n│ Validar │\r\n│ Orden │\r\n└──────┬──────┘\r\n       │\r\n       ▼\r\n┌─────────────┐ Error ┌─────────────┐\r\n│ Consultar │───────────── ►│ Notificar │\r\n│ Inventario │ │ Administrador │\r\n└──────┬──────┘ └─────────────┘\r\n       │ Éxito\r\n       ▼\r\n┌─────────────┐\r\n│ Carga │\r\n│ Tarjeta de crédito │\r\n└──────┬──────┘\r\n       │\r\n       ▼\r\n┌─────────────┐\r\n│ Enviar pedido │\r\n└─────────────┘\r\n```\r\n\r\n**Características clave:**\r\n\r\n```\r\nAWS Step Functions proporciona:\r\n├── Diseñador visual ✅\r\n├── Reintentos automáticos con retroceso\r\n├── Manejo de errores (estados de captura)\r\n├── Persistencia del estado\r\n├── Historial de ejecución\r\n└── Integración con más de 200 servicios de AWS\r\n```\r\n\r\n**Por qué otros se equivocan:**\r\n- R: SQS requiere una lógica de orquestación personalizada\r\n- B: EventBridge enruta eventos, no organiza flujos de trabajo\r\n- D: Distribución de SNS, sin orquestación de flujo de trabajo\r\n\r\n**Concepto clave:** AWS Step Functions = Orquestación del flujo de trabajo sin servidor con diseñador visual",
    "why": [
      "*AWS Step Functions frente a SQS:**",
      "```",
      "AWS Step Functions: ✅",
      "├── Orquestación visual del flujo de trabajo",
      "├── Manejo de errores integrado, reintentos",
      "├── Ramificación condicional (si/si no)",
      "├── Ejecución paralela",
      "├── Estados de espera (retrasos)",
      "└── Uso: Flujos de trabajo complejos, gestión de estado",
      "SQS:",
      "├── Cola de mensajes simple",
      "├── Servicios de desacoplamiento",
      "├── Sin orquestación incorporada",
      "└── Uso: colas de trabajos asincrónicas",
      "```",
      "*Ejemplo de funciones de paso:**",
      "```",
      "Flujo de trabajo de procesamiento de pedidos:",
      "┌─────────────┐",
      "│ Validar │",
      "│ Orden │",
      "└──────┬──────┘",
      "│",
      "▼",
      "┌─────────────┐ Error ┌─────────────┐",
      "│ Consultar │───────────── ►│ Notificar │",
      "│ Inventario │ │ Administrador │",
      "└──────┬──────┘ └─────────────┘",
      "│ Éxito",
      "▼",
      "┌─────────────┐",
      "│ Carga │",
      "│ Tarjeta de crédito │",
      "└──────┬──────┘",
      "│",
      "▼",
      "┌─────────────┐",
      "│ Enviar pedido │",
      "└─────────────┘",
      "```",
      "*Características clave:**",
      "```",
      "AWS Step Functions proporciona:",
      "├── Diseñador visual ✅",
      "├── Reintentos automáticos con retroceso",
      "├── Manejo de errores (estados de captura)",
      "├── Persistencia del estado",
      "├── Historial de ejecución",
      "└── Integración con más de 200 servicios de AWS",
      "```",
      "*Por qué otros se equivocan:**",
      "R: SQS requiere una lógica de orquestación personalizada",
      "B: EventBridge enruta eventos, no organiza flujos de trabajo",
      "D: Distribución de SNS, sin orquestación del flujo de trabajo",
      "*Concepto clave:** AWS Step Functions = Orquestación del flujo de trabajo sin servidor con diseñador visual"
    ],
    "others": []
  },
  {
    "id": "rf-44",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una organización tiene EC2, RDS, DynamoDB y EFS en varias cuentas y necesita una gestión de copias de seguridad centralizada con políticas de cumplimiento. ¿Qué solución proporciona esto?",
    "options": {
      "A": "Scripts Lambda para tomar instantáneas de cada recurso",
      "B": "AWS Backup con planes de respaldo y bloqueo de bóveda",
      "C": "Instantáneas de EBS + copias de seguridad automatizadas RDS + DynamoDB PITR",
      "D": "Software de respaldo de terceros"
    },
    "explanation": "• AWS Backup permite gestionar centralizadamente planes de respaldo en múltiples cuentas de AWS Organizations para EC2, EBS, RDS, DynamoDB, EFS y S3, mientras que Backup Vault Lock asegura el cumplimiento normativo inmutable (WORM).",
    "why": [
      "AWS Backup con planes de respaldo y Vault Lock centraliza la protección de datos multi-cuenta y garantiza inmutabilidad."
    ],
    "others": []
  },
  {
    "id": "rf-45",
    "module": "Architecture Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación sin servidor tiene 1000 funciones Lambda simultáneas que se conectan a RDS MySQL, lo que provoca errores de \"Demasiadas conexiones\". ¿Qué solución resuelve esto?",
    "options": {
      "A": "Aumentar el parámetro RDS max_connections",
      "B": "Proxy RDS para agrupar conexiones",
      "C": "ElastiCache frente a RDS",
      "D": "Leer réplicas"
    },
    "explanation": "**Proxy RDS:**\r\n\r\n```\r\nSin proxy RDS: ❌\r\nLambda (1000 concurrentes) → RDS (máximo 150 conexiones)\r\n└── Error: \"Demasiadas conexiones\"\r\n\r\nCon proxy RDS: ✅\r\nLambda (1000 concurrentes) → RDS Proxy → RDS (50 conexiones)\r\n└── Proxy pools y reutiliza conexiones\r\n```\r\n\r\n**Características del proxy RDS:**\r\n\r\n```\r\nAgrupación de conexiones:\r\n├── Mantiene el grupo de conexiones de base de datos\r\n├── Las funciones Lambda comparten conexiones\r\n├── Reduce la sobrecarga de conexión\r\n└── Previene errores de max_connections ✅\r\n\r\nBeneficios adicionales:\r\n├── autenticación IAM\r\n├── Integración de Secrets Manager\r\n├── Conmutación por error <30 segundos (frente a más de 2 minutos)\r\n└── Conserva las conexiones durante la conmutación por error\r\n```\r\n\r\n**Arquitectura:**\r\n\r\n```\r\n┌──────────────┐\r\n│ Lambda │───┐\r\n│ Función 1 │ │\r\n└──────────────┘ │\r\n                   │\r\n┌──────────────┐ │ ┌─────────────┐ ┌──────────┐\r\n│ Lambda │───┼───── ►│ Proxy RDS │───── ►│ RDS │\r\n│ Función 2 │ │ │ (conexión │ │ (MySQL) │\r\n└──────────────┘ │ │ pooling) │ │ 50 conn │\r\n                   │ └─────────────┘ └──────────┘\r\n┌──────────────┐ │\r\n│ Lambda │───┘\r\n│ Función N │\r\n└──────────────┘\r\n\r\n1000 invocaciones Lambda → 50 conexiones RDS (agrupadas)\r\n```\r\n\r\n**Por qué otros se equivocan:**\r\n- R: Aumentar max_connections usa más memoria, no resuelve la escala Lambda\r\n- C: ElastiCache almacena datos en caché, no administra conexiones\r\n- D: réplicas de lectura para escalado de lectura, no gestión de conexión\r\n\r\n**Concepto clave:** RDS Proxy = Agrupación de conexiones para aplicaciones sin servidor",
    "why": [
      "*Proxy RDS:**",
      "```",
      "Sin proxy RDS: ❌",
      "Lambda (1000 concurrentes) → RDS (máximo 150 conexiones)",
      "└── Error: \"Demasiadas conexiones\"",
      "Con proxy RDS: ✅",
      "Lambda (1000 concurrentes) → RDS Proxy → RDS (50 conexiones)",
      "└── Proxy pools y reutiliza conexiones",
      "```",
      "*Características del proxy RDS:**",
      "```",
      "Agrupación de conexiones:",
      "├── Mantiene el grupo de conexiones de base de datos",
      "├── Las funciones Lambda comparten conexiones",
      "├── Reduce la sobrecarga de conexión",
      "└── Previene errores de max_connections ✅",
      "Beneficios adicionales:",
      "├── autenticación IAM",
      "├── Integración de Secrets Manager",
      "├── Conmutación por error <30 segundos (frente a más de 2 minutos)",
      "└── Conserva las conexiones durante la conmutación por error",
      "```",
      "*Arquitectura:**",
      "```",
      "┌──────────────┐",
      "│ Lambda │───┐",
      "│ Función 1 │ │",
      "└──────────────┘ │",
      "│",
      "┌──────────────┐ │ ┌─────────────┐ ┌──────────┐",
      "│ Lambda │───┼───── ►│ Proxy RDS │───── ►│ RDS │",
      "│ Función 2 │ │ │ (conexión │ │ (MySQL) │",
      "└──────────────┘ │ │ pooling) │ │ 50 conn │",
      "│ └─────────────┘ └──────────┘",
      "┌──────────────┐ │",
      "│ Lambda │───┘",
      "│ Función N │",
      "└──────────────┘",
      "1000 invocaciones Lambda → 50 conexiones RDS (agrupadas)",
      "```",
      "*Por qué otros se equivocan:**",
      "R: Aumentar max_connections usa más memoria, no resuelve la escala Lambda",
      "C: ElastiCache almacena datos en caché, no administra conexiones",
      "D: Leer réplicas para escalado de lectura, no administración de conexión",
      "*Concepto clave:** RDS Proxy = Agrupación de conexiones para aplicaciones sin servidor"
    ],
    "others": []
  },
  {
    "id": "rf-46",
    "module": "Architecture Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un equipo de DevOps necesita consultar CloudWatch Logs para encontrar todos los mensajes de ERROR de la última hora. ¿Qué herramienta proporciona consultas de registro interactivas?",
    "options": {
      "A": "Información sobre registros de CloudWatch",
      "B": "Athena consulta registros exportados de S3",
      "C": "Patrones de filtro de CloudWatch Logs",
      "D": "Búsqueda elástica (búsqueda abierta)"
    },
    "explanation": "• CloudWatch Logs Insights permite ejecutar consultas interactivas en tiempo real sobre los grupos de registros de CloudWatch Logs mediante un lenguaje de consulta especializado sin configurar infraestructura adicional.",
    "why": [
      "CloudWatch Logs Insights ofrece consultas interactivas en segundos para filtrar errores directamente sobre los logs en CloudWatch."
    ],
    "others": []
  },
  {
    "id": "rf-47",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un clúster ECS ejecuta tareas que deben distribuirse uniformemente entre todas las instancias EC2 para una utilización óptima de los recursos. ¿Qué estrategia de colocación de tareas logra esto?",
    "options": {
      "A": "binpack (CPU o memoria)",
      "B": "propagación (ID de instancia)",
      "C": "aleatorio",
      "D": "Instancia distinta"
    },
    "explanation": "• La estrategia de colocación de tareas `spread(instanceId)` distribuye las tareas de ECS de manera uniforme entre todas las instancias EC2 del clúster.",
    "why": [
      "La estrategia spread(instanceId) distribuye las tareas de forma equitativa entre todas las instancias EC2 del clúster de ECS."
    ],
    "others": []
  },
  {
    "id": "rf-48",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una aplicación global necesita cargar archivos grandes (5 GB) a S3 desde usuarios de todo el mundo con una latencia mínima. ¿Qué característica optimiza las cargas?",
    "options": {
      "A": "Aceleración de transferencia S3",
      "B": "CloudFront con origen S3",
      "C": "Carga multiparte de S3",
      "D": "Replicación entre regiones de S3"
    },
    "explanation": "• S3 Transfer Acceleration acelera las subidas globales de archivos grandes enrutando el tráfico hacia la Edge Location de CloudFront más cercana al usuario y luego a través de la red troncal privada de AWS hacia el bucket S3.",
    "why": [
      "S3 Transfer Acceleration optimiza subidas globales utilizando las ubicaciones de borde de CloudFront y la red troncal de AWS."
    ],
    "others": []
  },
  {
    "id": "rf-49",
    "module": "Architecture Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación necesita protección contra la inyección de SQL y los ataques de secuencias de comandos entre sitios. ¿Qué configuración de AWS WAF proporciona esto más rápido?",
    "options": {
      "A": "Cree reglas WAF personalizadas usando expresiones regulares",
      "B": "Utilice reglas administradas de AWS para inyección SQL y XSS",
      "C": "Habilite GuardDuty para la protección de aplicaciones web",
      "D": "Utilice AWS Shield avanzado"
    },
    "explanation": "**Reglas administradas de AWS WAF:**\r\n\r\n```\r\nReglas administradas por AWS: ✅\r\n├── Grupos de reglas preconfigurados\r\n├── Mantenido por el equipo de seguridad de AWS\r\n├── Gratis (incluido con el precio WAF)\r\n├── Reglas:\r\n│ ├── Inyección SQL ✅\r\n│ ├── Secuencias de comandos entre sitios (XSS) ✅\r\n│ ├── Malas entradas conocidas\r\n│ └── Listas de reputación de IP\r\n└── Configuración: 5 minutos (agregar a ACL web)\r\n\r\nReglas personalizadas:\r\n├── Patrones de expresiones regulares manuales\r\n├── Gastos generales de mantenimiento\r\n├── Se requieren pruebas\r\n└── Uso: Protección de lógica empresarial específica\r\n```\r\n\r\n**Configuración:**\r\n\r\n```bash\r\n# Create Web ACL with managed rules\r\naws wafv2 create-web-acl \\\r\n  --name MyWebACL \\\r\n  --scope REGIONAL \\\r\n  --default-action Allow={} \\\r\n  --rules file://rules.json\r\n\r\n# rules.json\r\n[\r\n  {\r\n    \"Name\": \"AWSManagedRulesCommonRuleSet\",\r\n    \"Priority\": 0,\r\n    \"Statement\": {\r\n      \"ManagedRuleGroupStatement\": {\r\n        \"VendorName\": \"AWS\",\r\n        \"Name\": \"AWSManagedRulesCommonRuleSet\"\r\n      }\r\n    },\r\n    \"OverrideAction\": {\"None\": {}},\r\n    \"VisibilityConfig\": {...}\r\n  },\r\n  {\r\n    \"Name\": \"AWSManagedRulesSQLiRuleSet\",\r\n    \"Priority\": 1,\r\n    \"Statement\": {\r\n      \"ManagedRuleGroupStatement\": {\r\n        \"VendorName\": \"AWS\",\r\n        \"Name\": \"AWSManagedRulesSQLiRuleSet\"\r\n      }\r\n    },\r\n    \"OverrideAction\": {\"None\": {}},\r\n    \"VisibilityConfig\": {...}\r\n  }\r\n]\r\n```\r\n\r\n**Grupos de reglas administradas disponibles:**\r\n\r\n```\r\n├── Conjunto de reglas básicas (CRS): ataques comunes\r\n├── Base de datos SQL: inyección SQL\r\n├── Entradas incorrectas conocidas: solicitudes con formato incorrecto\r\n├── Reputación de IP: IP maliciosas conocidas\r\n├── IP anónima: Tor, VPN, servidores proxy\r\n├── Linux/Windows: exploits específicos del sistema operativo\r\n└── PHP/WordPress: específico de la aplicación\r\n```\r\n\r\n**Por qué otros se equivocan:**\r\n- R: Las reglas personalizadas tardan más en desarrollarse y mantenerse\r\n- C: GuardDuty detecta amenazas, no bloquea ataques web\r\n- D: Shield protege contra DDoS, no contra ataques a la capa de aplicaciones\r\n\r\n**Concepto clave:** Reglas administradas de AWS = Protección rápida y prediseñada (inyección SQL, XSS)",
    "why": [
      "*Reglas administradas por AWS WAF:**",
      "```",
      "Reglas administradas por AWS: ✅",
      "├── Grupos de reglas preconfigurados",
      "├── Mantenido por el equipo de seguridad de AWS",
      "├── Gratis (incluido con el precio WAF)",
      "├── Reglas:",
      "│ ├── Inyección SQL ✅",
      "│ ├── Secuencias de comandos entre sitios (XSS) ✅",
      "│ ├── Malas entradas conocidas",
      "│ └── Listas de reputación de IP",
      "└── Configuración: 5 minutos (agregar a ACL web)",
      "Reglas personalizadas:",
      "├── Patrones de expresiones regulares manuales",
      "├── Gastos generales de mantenimiento",
      "├── Se requieren pruebas",
      "└── Uso: Protección de lógica empresarial específica",
      "```",
      "*Configuración:**",
      "```golpecito",
      "# Crear Web ACL con reglas administradas",
      "aws wafv2 crear-web-acl \\",
      "--nombre MiWebACL \\",
      "--alcance REGIONAL \\",
      "--acción predeterminada Permitir={} \\",
      "--archivo de reglas://rules.json",
      "# reglas.json",
      "[",
      "{",
      "\"Nombre\": \"AWSManagedRulesCommonRuleSet\",",
      "\"Prioridad\": 0,",
      "\"Declaración\": {",
      "\"Declaración de grupo de reglas administrada\": {",
      "\"NombreProveedor\": \"AWS\",",
      "\"Nombre\": \"AWSManagedRulesCommonRuleSet\"",
      "}",
      "},",
      "\"OverrideAction\": {\"Ninguno\": {}},",
      "\"Configuración de visibilidad\": {...}",
      "},",
      "{",
      "\"Nombre\": \"AWSManagedRulesSQLiRuleSet\",",
      "\"Prioridad\": 1,",
      "\"Declaración\": {",
      "\"Declaración de grupo de reglas administrada\": {",
      "\"NombreProveedor\": \"AWS\",",
      "\"Nombre\": \"AWSManagedRulesSQLiRuleSet\"",
      "}",
      "},",
      "\"OverrideAction\": {\"Ninguno\": {}},",
      "\"Configuración de visibilidad\": {...}",
      "}",
      "]",
      "```",
      "*Grupos de reglas administradas disponibles:**",
      "```",
      "├── Conjunto de reglas básicas (CRS): ataques comunes",
      "├── Base de datos SQL: inyección SQL",
      "├── Entradas incorrectas conocidas: solicitudes con formato incorrecto",
      "├── Reputación de IP: IP maliciosas conocidas",
      "├── IP anónima: Tor, VPN, servidores proxy",
      "├── Linux/Windows: exploits específicos del sistema operativo",
      "└── PHP/WordPress: específico de la aplicación",
      "```",
      "*Por qué otros se equivocan:**",
      "R: Las reglas personalizadas tardan más en desarrollarse y mantenerse",
      "C: GuardDuty detecta amenazas, no bloquea ataques web",
      "D: Shield protege contra DDoS, no contra ataques a la capa de aplicaciones",
      "*Concepto clave:** Reglas administradas de AWS = Protección rápida y prediseñada (inyección SQL, XSS)"
    ],
    "others": []
  },
  {
    "id": "rf-50",
    "module": "Architecture Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación global utiliza Aurora Global Database con la primaria en us-east-1 y la secundaria en eu-west-1. La región us-east-1 fracasa. ¿Cuál es el proceso de recuperación?",
    "options": {
      "A": "Conmutación por error automática a eu-west-1 (no es necesario realizar ninguna acción)",
      "B": "Promocionar eu-west-1 a primario (manual, <1 minuto)",
      "C": "Restaurar desde una instantánea en eu-west-1",
      "D": "Espere a que us-east-1 se recupere"
    },
    "explanation": "• En Aurora Global Database, cuando falla la región primaria, se promueve manualmente la región secundaria (`eu-west-1`) para convertirse en el clúster primario de lectura/escritura en menos de 1 minuto (RTO < 1 min, RPO < 1 seg).",
    "why": [
      "En Aurora Global Database se promueve el clúster secundario en eu-west-1 a primario en menos de 1 minuto ante una caída regional."
    ],
    "others": []
  },
  {
    "id": "rf-51",
    "module": "Architecture Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un equipo de seguridad desea acceder a instancias EC2 para solucionar problemas sin abrir el puerto SSH 22 ni administrar claves SSH. ¿Qué solución proporciona acceso seguro al shell?",
    "options": {
      "A": "Conexión de instancia EC2",
      "B": "Administrador de sistemas Administrador de sesiones",
      "C": "Host bastión con gestión de claves",
      "D": "Comando de ejecución del administrador de sistemas"
    },
    "explanation": "• AWS Systems Manager Session Manager proporciona acceso seguro y auditable por consola o CLI a las instancias EC2 mediante el agente SSM e IAM, sin necesidad de abrir el puerto 22 (SSH) ni gestionar claves SSH.",
    "why": [
      "Systems Manager Session Manager brinda acceso seguro a la terminal sin abrir puertos de entrada SSH ni administrar claves."
    ],
    "others": []
  },
  {
    "id": "rf-52",
    "module": "Architecture Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación almacena millones de objetos pequeños en S3 con cifrado SSE-KMS. Los costos de KMS son muy altos debido al volumen de solicitudes de API. ¿Qué característica reduce los costos de KMS?",
    "options": {
      "A": "Utilice SSE-S3 en su lugar",
      "B": "Habilitar claves de depósito S3",
      "C": "Utilice cifrado del lado del cliente",
      "D": "Reducir la frecuencia de rotación de claves KMS"
    },
    "explanation": "**Claves del depósito S3:**\r\n\r\n```\r\nSin llaves de cubo:\r\nCada objeto → Llamada API de KMS separada → $0,03 por cada 10.000 solicitudes\r\n├── 1 millón de objetos = 1 millón de solicitudes de KMS\r\n└── Costo: 1M ÷ 10K × $0,03 = $3,00\r\n\r\nCon Llaves de Cubo: ✅\r\nS3 solicita la clave del depósito de KMS → Utiliza la clave del depósito para todos los objetos\r\n├── 1 millón de objetos = ~1 solicitud de KMS (clave reutilizada)\r\n└── Costo: ~$0.00003 (¡reducción del 99%!)\r\n```\r\n\r\n**Cómo funciona:**\r\n\r\n```\r\nSSE-KMS tradicional:\r\nObjeto 1 → Llamada API de KMS (generar clave de datos) → Cifrar → S3\r\nObjeto 2 → Llamada API de KMS (generar clave de datos) → Cifrar → S3\r\nObjeto 3 → Llamada API de KMS (generar clave de datos) → Cifrar → S3\r\n└── N objetos = N llamadas KMS ❌\r\n\r\nCon llaves de cubo S3:\r\nPaso 1: S3 llama a KMS una vez → Obtener la clave del depósito\r\nPaso 2: S3 genera claves de datos a partir de la clave del depósito (sin KMS)\r\nObjeto 1 → Cifrar con clave derivada de clave de depósito → S3\r\nObjeto 2 → Cifrar con clave derivada de clave de depósito → S3\r\nObjeto 3 → Cifrar con clave derivada de clave de depósito → S3\r\n└── N objetos = 1 llamada KMS ✅\r\n```\r\n\r\n**Comparación de costos:**\r\n\r\n```\r\n1 millón de PUT por día:\r\nSin llaves de cubo:\r\n├── Solicitudes de KMS: 1.000.000\r\n├── Costo: 100 × $0,03 = $3,00/día\r\n└── Mensual: $90\r\n\r\nCon Llaves de Cubo: ✅\r\n├── Solicitudes de KMS: ~1 (clave de depósito almacenada en caché)\r\n├── Costo: ~$0.00003/día\r\n└── Mensual: ~$0.001\r\n\r\nAhorro: Reducción del 99,99% en costes de KMS\r\n```\r\n\r\n**Habilitar claves de depósito:**\r\n\r\n```bash\r\n# New bucket\r\naws s3api create-bucket \\\r\n  --bucket my-bucket \\\r\n  --create-bucket-configuration LocationConstraint=us-west-2\r\n\r\naws s3api put-bucket-encryption \\\r\n  --bucket my-bucket \\\r\n  --server-side-encryption-configuration '{\r\n    \"Rules\": [{\r\n      \"ApplyServerSideEncryptionByDefault\": {\r\n        \"SSEAlgorithm\": \"aws:kms\",\r\n        \"KMSMasterKeyID\": \"arn:aws:kms:us-west-2:123456789012:key/abcd-1234\"\r\n      },\r\n      \"BucketKeyEnabled\": true\r\n    }]\r\n  }'\r\n\r\n# Existing bucket\r\naws s3api put-bucket-encryption \\\r\n  --bucket existing-bucket \\\r\n  --server-side-encryption-configuration '{\r\n    \"Rules\": [{\r\n      \"ApplyServerSideEncryptionByDefault\": {\r\n        \"SSEAlgorithm\": \"aws:kms\",\r\n        \"KMSMasterKeyID\": \"arn:aws:kms:us-west-2:123456789012:key/abcd-1234\"\r\n      },\r\n      \"BucketKeyEnabled\": true\r\n    }]\r\n  }'\r\n```\r\n\r\n**Compensaciones:**\r\n\r\n```\r\nBeneficios:\r\n├── Reducción del 99% en costos de KMS ✅\r\n├── Reducción del riesgo de limitación de KMS\r\n├── No se necesitan cambios en la aplicación\r\n└── Funciona con cubos existentes\r\n\r\nConsideraciones:\r\n├── Clave de depósito almacenada en caché durante 5 minutos (retraso de rotación)\r\n├── CloudTrail muestra el ARN del depósito, no el ARN del objeto en los registros de KMS\r\n└── No hay inconvenientes para la mayoría de los casos de uso\r\n```\r\n\r\n**Por qué otros se equivocan:**\r\n- R: SSE-S3 elimina el control de KMS (no cumple con los requisitos de cifrado)\r\n- C: el cifrado del lado del cliente requiere cambios en la aplicación\r\n- D: La rotación de claves no afecta los costos por solicitud\r\n\r\n**Concepto clave:** Claves de depósito S3 = Reutilización de claves generadas por KMS para múltiples objetos (reducción de costos del 99 %)",
    "why": [
      "*Claves del depósito S3:**",
      "```",
      "Sin llaves de cubo:",
      "Cada objeto → Llamada API de KMS separada → $0,03 por cada 10.000 solicitudes",
      "├── 1 millón de objetos = 1 millón de solicitudes de KMS",
      "└── Costo: 1M ÷ 10K × $0,03 = $3,00",
      "Con Llaves de Cubo: ✅",
      "S3 solicita la clave del depósito de KMS → Utiliza la clave del depósito para todos los objetos",
      "├── 1 millón de objetos = ~1 solicitud de KMS (clave reutilizada)",
      "└── Costo: ~$0.00003 (¡reducción del 99%!)",
      "```",
      "*Cómo funciona:**",
      "```",
      "SSE-KMS tradicional:",
      "Objeto 1 → Llamada API de KMS (generar clave de datos) → Cifrar → S3",
      "Objeto 2 → Llamada API de KMS (generar clave de datos) → Cifrar → S3",
      "Objeto 3 → Llamada API de KMS (generar clave de datos) → Cifrar → S3",
      "└── N objetos = N llamadas KMS ❌",
      "Con llaves de cubo S3:",
      "Paso 1: S3 llama a KMS una vez → Obtener la clave del depósito",
      "Paso 2: S3 genera claves de datos a partir de la clave del depósito (sin KMS)",
      "Objeto 1 → Cifrar con clave derivada de clave de depósito → S3",
      "Objeto 2 → Cifrar con clave derivada de clave de depósito → S3",
      "Objeto 3 → Cifrar con clave derivada de clave de depósito → S3",
      "└── N objetos = 1 llamada KMS ✅",
      "```",
      "*Comparación de costos:**",
      "```",
      "1 millón de PUT por día:",
      "Sin llaves de cubo:",
      "├── Solicitudes de KMS: 1.000.000",
      "├── Costo: 100 × $0,03 = $3,00/día",
      "└── Mensual: $90",
      "Con Llaves de Cubo: ✅",
      "├── Solicitudes de KMS: ~1 (clave de depósito almacenada en caché)",
      "├── Costo: ~$0.00003/día",
      "└── Mensual: ~$0.001",
      "Ahorro: Reducción del 99,99% en costes de KMS",
      "```",
      "*Habilitar claves de depósito:**",
      "```golpecito",
      "# Nuevo cubo",
      "aws s3api crear-bucket \\",
      "--bucket mi-cubo \\",
      "--create-bucket-configuration LocationConstraint=us-west-2",
      "aws s3api poner-bucket-cifrado \\",
      "--bucket mi-cubo \\",
      "--configuración-de-cifrado-del-lado-del-servidor '{",
      "\"Normas\": [{",
      "\"AplicarServerSideEncryptionByDefault\": {",
      "\"SSEAlgoritmo\": \"aws:kms\",",
      "\"KMSMasterKeyID\": \"arn:aws:kms:us-west-2:123456789012:key/abcd-1234\"",
      "},",
      "\"BucketKeyEnabled\": verdadero",
      "}]",
      "}'",
      "# cubo existente",
      "aws s3api poner-bucket-cifrado \\",
      "--bucket depósito-existente \\",
      "--configuración-de-cifrado-del-lado-del-servidor '{",
      "\"Normas\": [{",
      "\"AplicarServerSideEncryptionByDefault\": {",
      "\"SSEAlgoritmo\": \"aws:kms\",",
      "\"KMSMasterKeyID\": \"arn:aws:kms:us-west-2:123456789012:key/abcd-1234\"",
      "},",
      "\"BucketKeyEnabled\": verdadero",
      "}]",
      "}'",
      "```",
      "*Compensaciones:**",
      "```",
      "Beneficios:",
      "├── Reducción del 99% en costos de KMS ✅",
      "├── Reducción del riesgo de limitación de KMS",
      "├── No se necesitan cambios en la aplicación",
      "└── Funciona con cubos existentes",
      "Consideraciones:",
      "├── Clave de depósito almacenada en caché durante 5 minutos (retraso de rotación)",
      "├── CloudTrail muestra el ARN del depósito, no el ARN del objeto en los registros de KMS",
      "└── No hay inconvenientes para la mayoría de los casos de uso",
      "```",
      "*Por qué otros se equivocan:**",
      "R: SSE-S3 elimina el control de KMS (no cumple con los requisitos de cifrado)",
      "C: El cifrado del lado del cliente requiere cambios en la aplicación",
      "D: La rotación de claves no afecta los costos por solicitud",
      "*Concepto clave:** S3 Bucket Keys = Reutilizar la clave generada por KMS para múltiples objetos (reducción de costos del 99 %)"
    ],
    "others": []
  },
  {
    "id": "rf-53",
    "module": "Architecture Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación de procesamiento de datos tarda 10 minutos en cargar un conjunto de datos de 16 GB en la memoria. La aplicación se ejecuta de forma intermitente. ¿Qué característica preserva el estado de la memoria entre sesiones?",
    "options": {
      "A": "Parada/Inicio EC2",
      "B": "Hibernación EC2",
      "C": "Instantánea de EBS antes de detenerse",
      "D": "Persistencia del almacén de instancias"
    },
    "explanation": "• EC2 Hibernate guarda el contenido de la memoria RAM en el volumen raíz EBS cifrado al detener la instancia. Al volver a encenderla, restaura el estado en memoria evitando recargar los 16 GB de datos.",
    "why": [
      "EC2 Hibernate preserva el estado de la memoria RAM en el volumen raíz EBS para reanudar sesiones instantáneamente."
    ],
    "others": []
  },
  {
    "id": "rf-54",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un clúster ECS en el tipo de lanzamiento EC2 necesita escalar tanto la cantidad de tareas como las instancias EC2 subyacentes. ¿Qué se debe configurar?",
    "options": {
      "A": "Servicio ECS Auto Scaling únicamente",
      "B": "Solo escalado automático EC2",
      "C": "Tanto ECS Service Auto Scaling como EC2 Auto Scaling (proveedor de capacidad)",
      "D": "HPA de Kubernetes"
    },
    "explanation": "• Para escalar ambas capas en ECS sobre EC2 se requiere configurar tanto ECS Service Auto Scaling (que escala el número de tareas) como un Capacity Provider de EC2 Auto Scaling (que escala las instancias EC2 subyacentes).",
    "why": [
      "Se requiere configurar tanto ECS Service Auto Scaling (para las tareas) como EC2 Auto Scaling mediante un Capacity Provider (para las instancias)."
    ],
    "others": []
  },
  {
    "id": "rf-55",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa tiene una conexión Direct Connect y necesita acceder tanto a VPC (subredes privadas) como a S3 (servicio público). ¿Qué interfaces virtuales se requieren?",
    "options": {
      "A": "Solo VIF privado",
      "B": "Solo VIF público",
      "C": "Tanto VIF privado como VIF público",
      "D": "VIF de tránsito"
    },
    "explanation": "• En AWS Direct Connect, una Private VIF permite acceder a subredes privadas de VPC, mientras que una Public VIF permite acceder a servicios públicos de AWS como Amazon S3 sin pasar por internet.",
    "why": [
      "Para acceder tanto a VPCs privadas como a Amazon S3 por Direct Connect se requiere configurar una Private VIF y una Public VIF."
    ],
    "others": []
  },
  {
    "id": "rf-56",
    "module": "Architecture Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación tiene implementaciones en us-east-1 (70 % de tráfico) y us-west-2 (30 % de tráfico) para pruebas A/B. ¿Qué política de enrutamiento de la Ruta 53 implementa esto?",
    "options": {
      "A": "Enrutamiento de conmutación por error",
      "B": "Enrutamiento basado en latencia",
      "C": "Enrutamiento ponderado",
      "D": "Enrutamiento por geolocalización"
    },
    "explanation": "• La política Weighted Routing (Enrutamiento Ponderado) de Route 53 permite dividir el tráfico por porcentajes exactos (70% a `us-east-1` y 30% a `us-west-2`), ideal para pruebas A/B.",
    "why": [
      "El enrutamiento ponderado (Weighted routing) de Route 53 distribuye el tráfico según los pesos porcentuales configurados (70/30)."
    ],
    "others": []
  },
  {
    "id": "rf-57",
    "module": "Architecture Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación necesita almacenar datos de la sesión del usuario con conmutación por error automática. ¿Qué motor de ElastiCache admite la replicación Multi-AZ?",
    "options": {
      "A": "Memcached (admite el descubrimiento automático)",
      "B": "Redis con modo cluster deshabilitado y Multi-AZ",
      "C": "Memcached con múltiples nodos",
      "D": "Modo de clúster de Redis habilitado"
    },
    "explanation": "• Amazon ElastiCache for Redis con Multi-AZ habilitado soporta replicación y conmutación por error automática al nodo de respaldo, a diferencia de Memcached que no soporta replicación ni failover.",
    "why": [
      "ElastiCache for Redis con Multi-AZ habilitado proporciona replicación de sesiones y failover automático."
    ],
    "others": []
  },
  {
    "id": "rf-58",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa financiera debe conservar los registros de auditoría durante 7 años y evitar que cualquier persona (incluidos los administradores) los elimine. ¿Qué característica de S3 proporciona esto?",
    "options": {
      "A": "Versionado de S3 con política de ciclo de vida",
      "B": "Bloqueo de objetos S3 en modo Cumplimiento",
      "C": "Cerradura de bóveda dAmazon S3 Glacier",
      "D": "Política de IAM que deniega DeleteObject"
    },
    "explanation": "**Bloqueo de objetos S3:**\r\n\r\n```\r\nModo de Cumplimiento: ✅\r\n├── Los objetos no pueden ser eliminados por NADIE (ni siquiera root) ✅\r\n├── El período de retención no se puede acortar\r\n├── Uso: SEC 17a-4, HIPAA, cumplimiento del RGPD\r\n└── Ejemplo: Conservar 7 años, inmutable\r\n\r\nModo de gobernanza:\r\n├── Objetos protegidos de la mayoría de los usuarios.\r\n├── Se puede anular el permiso especial (s3:BypassGovernanceRetention)\r\n└── Uso: Políticas internas, se pueden anular si es necesario\r\n\r\nRetención legal:\r\n├── Protección indefinida (sin vencimiento)\r\n├── Se elimina manualmente cuando se resuelve el caso legal\r\n└── Uso: Litigios, investigaciones\r\n```\r\n\r\n**Bloqueo de objetos S3 frente a bloqueo de Glacier Vault:**\r\n\r\n```\r\nBloqueo de objetos S3 (Cumplimiento): ✅\r\n├── Clase de almacenamiento: cualquier clase S3\r\n├── Granularidad: valor predeterminado por objeto o depósito\r\n├── Uso: Cumplimiento flexible, cualquier clase S3\r\n\r\nBloqueo de la bóveda del glaciar: ✅\r\n├── Clase de almacenamiento: solo glaciar\r\n├── Granularidad: política a nivel de bóveda\r\n├── Uso: archivos a largo plazo, inmutabilidad a nivel de bóveda\r\n```\r\n\r\n**Configuración:**\r\n\r\n```bash\r\n# Enable versioning (required for Object Lock)\r\naws s3api put-bucket-versioning \\\r\n  --bucket compliance-logs \\\r\n  --versioning-configuration Status=Enabled\r\n\r\n# Enable Object Lock\r\naws s3api put-object-lock-configuration \\\r\n  --bucket compliance-logs \\\r\n  --object-lock-configuration '{\r\n    \"ObjectLockEnabled\": \"Enabled\",\r\n    \"Rule\": {\r\n      \"DefaultRetention\": {\r\n        \"Mode\": \"COMPLIANCE\",\r\n        \"Days\": 2555\r\n      }\r\n    }\r\n  }'\r\n\r\n# Upload object (automatically locked for 7 years)\r\naws s3 cp audit-log.txt s3://compliance-logs/\r\n\r\n# Attempt to delete (will fail)\r\naws s3 rm s3://compliance-logs/audit-log.txt\r\n# Error: Access Denied (even as root user)\r\n```\r\n\r\n**Por qué otros se equivocan:**\r\n- R: El control de versiones y el ciclo de vida no impiden la eliminación (con versiones)\r\n- D: Los administradores pueden cambiar las políticas de IAM\r\n\r\n**Concepto clave:** Cumplimiento del bloqueo de objetos de S3 = Retención inmutable (ni siquiera el root puede eliminar)",
    "why": [
      "*Bloqueo de objetos S3:**",
      "```",
      "Modo de Cumplimiento: ✅",
      "├── Los objetos no pueden ser eliminados por NADIE (ni siquiera root) ✅",
      "├── El período de retención no se puede acortar",
      "├── Uso: SEC 17a-4, HIPAA, cumplimiento del RGPD",
      "└── Ejemplo: Conservar 7 años, inmutable",
      "Modo de gobernanza:",
      "├── Objetos protegidos de la mayoría de los usuarios.",
      "├── Se puede anular el permiso especial (s3:BypassGovernanceRetention)",
      "└── Uso: Políticas internas, se pueden anular si es necesario",
      "Retención legal:",
      "├── Protección indefinida (sin vencimiento)",
      "├── Se elimina manualmente cuando se resuelve el caso legal",
      "└── Uso: Litigios, investigaciones",
      "```",
      "*Bloqueo de objetos S3 frente a bloqueo de bóveda Glacier:**",
      "```",
      "Bloqueo de objetos S3 (Cumplimiento): ✅",
      "├── Clase de almacenamiento: cualquier clase S3",
      "├── Granularidad: valor predeterminado por objeto o depósito",
      "├── Uso: Cumplimiento flexible, cualquier clase S3",
      "Bloqueo de la bóveda del glaciar: ✅",
      "├── Clase de almacenamiento: solo glaciar",
      "├── Granularidad: política a nivel de bóveda",
      "├── Uso: archivos a largo plazo, inmutabilidad a nivel de bóveda",
      "```",
      "*Configuración:**",
      "```golpecito",
      "# Habilitar el control de versiones (requerido para el bloqueo de objetos)",
      "aws s3api put-bucket-versionado \\",
      "--registros de cumplimiento del depósito \\",
      "--estado de configuración de versiones = Habilitado",
      "# Habilitar bloqueo de objetos",
      "aws s3api poner-objeto-bloqueo-configuración \\",
      "--registros de cumplimiento del depósito \\",
      "--objeto-bloqueo-configuración '{",
      "\"ObjectLockEnabled\": \"Habilitado\",",
      "\"Regla\": {",
      "\"Retención predeterminada\": {",
      "\"Modo\": \"CUMPLIMIENTO\",",
      "\"Días\": 2555",
      "}",
      "}",
      "}'",
      "# Cargar objeto (bloqueado automáticamente durante 7 años)",
      "aws s3 cp auditoría-log.txt s3://compliance-logs/",
      "# Intento de eliminación (fallará)",
      "aws s3 rm s3://compliance-logs/audit-log.txt",
      "# Error: Acceso denegado (incluso como usuario root)",
      "```",
      "*Por qué otros se equivocan:**",
      "R: El control de versiones y el ciclo de vida no impiden la eliminación (con versiones)",
      "D: Los administradores pueden cambiar las políticas de IAM",
      "*Concepto clave:** Cumplimiento del bloqueo de objetos de S3 = Retención inmutable (ni siquiera el root puede eliminar)"
    ],
    "others": []
  },
  {
    "id": "rf-59",
    "module": "Architecture Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un equipo de FinOps necesita datos de costos detallados para un análisis personalizado y quiere consultarlos mediante Athena. ¿Qué servicio de AWS proporciona esto?",
    "options": {
      "A": "AWS Cost Explorer con API",
      "B": "AWS Budgets con alertas",
      "C": "Informe de costo y uso (CUR) entregado a S3",
      "D": "Facturación consolidada de AWS Organizations"
    },
    "explanation": "• El Informe de Costo y Uso (AWS Cost and Usage Report - CUR) entrega los datos de facturación más detallados directamente en un bucket de S3 en formato Parquet o CSV, listos para consultarse con Amazon Athena.",
    "why": [
      "El Cost and Usage Report (CUR) entregado en S3 en formato Parquet permite análisis detallados de FinOps mediante Amazon Athena."
    ],
    "others": []
  },
  {
    "id": "rf-60",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un equipo de seguridad necesita analizar todo el tráfico de red hacia/desde instancias EC2 para verificar el cumplimiento. ¿Qué característica captura estos datos?",
    "options": {
      "A": "Registros de CloudTrail",
      "B": "Registros de flujo de VPC",
      "C": "Registros de CloudWatch",
      "D": "AWS Config"
    },
    "explanation": "• VPC Flow Logs captura metadatos de todo el tráfico de red IP (IP origen/destino, puertos, protocolo y estado ACCEPT/REJECT) en las interfaces de red (ENIs) de las instancias EC2.",
    "why": [
      "VPC Flow Logs registra el tráfico de red entrante y saliente de las interfaces de red de las instancias EC2 para auditorías de cumplimiento."
    ],
    "others": []
  },
  {
    "id": "rf-61",
    "module": "Architecture Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una función Lambda necesita credenciales de base de datos que rotan mensualmente. ¿Cuál es la forma más segura de proporcionar estas credenciales?",
    "options": {
      "A": "Código duro en el código de función Lambda",
      "B": "Almacenar en variables de entorno",
      "C": "Recuperar desde Secrets Manager usando SDK",
      "D": "Pasar como parámetro de evento"
    },
    "explanation": "**Integración de Secrets Manager:**\r\n\r\n```\r\nGerente de Secretos: ✅\r\n├── Rotación automática (función Lambda) ✅\r\n├── Cifrado en reposo (KMS)\r\n├── Control de acceso IAM detallado\r\n├── Seguimiento de auditoría (CloudTrail)\r\n├── Replicación entre regiones\r\n└── Control de versiones (AWSCURRENT, AWSPREVIOUS)\r\n\r\nVariables de entorno:\r\n├── Cifrado en reposo (KMS) ✅\r\n├── Sin rotación automática ❌\r\n├── Visible en la consola Lambda (cifrado)\r\n└── Uso: configuración estática, no secretos que rotan\r\n```\r\n\r\n**Código Lambda:**\r\n\r\n```pitón\r\nimportar boto3\r\nimportar json\r\ndesde botocore.exceptions importar ClientError\r\n\r\ncliente_secretos = boto3.client('administrador de secretos')\r\n\r\ndef get_secret():\r\n    prueba:\r\n        respuesta = cliente_secretos.get_valor_secreto(\r\n            SecretId='prod/db/credenciales'\r\n        )\r\n        secreto = json.loads(respuesta['SecretString'])\r\n        devolver secreto\r\n    excepto ClientError como e:\r\n        elevar e\r\n\r\ndef lambda_handler(evento, contexto):\r\n    # Obtener credenciales nuevas (siempre actualizadas después de la rotación)\r\n    secreto = get_secret()\r\n    nombre de usuario = secreto['nombre de usuario']\r\n    contraseña = secreto['contraseña'] # Rotado automáticamente\r\n    anfitrión = secreto['anfitrión']\r\n    \r\n    # Conéctese a la base de datos con las credenciales actuales\r\n    # No se necesitan cambios de código cuando las credenciales rotan ✅\r\n```\r\n\r\n**Comparación:**\r\n\r\n```\r\nMétodo Costo de rotación de seguridad\r\n───────────────────────── ──────────────────────────\r\nCodificado ❌ Bajo ❌ No Gratis\r\nVariables de entorno ⚠️ Media ❌ No Gratis\r\nSecrets Manager ✅ Alto ✅ Sí $0.40/secreto/mes ✅\r\nParámetro Tienda Avanzado ✅ Alto ⚠️ Personalizado $0.05/10K llamadas\r\n```\r\n\r\n**Concepto clave:** Secrets Manager = Rotación automática + recuperación segura de credenciales",
    "why": [
      "*Integración de Secrets Manager:**",
      "```",
      "Gerente de Secretos: ✅",
      "├── Rotación automática (función Lambda) ✅",
      "├── Cifrado en reposo (KMS)",
      "├── Control de acceso IAM detallado",
      "├── Seguimiento de auditoría (CloudTrail)",
      "├── Replicación entre regiones",
      "└── Control de versiones (AWSCURRENT, AWSPREVIOUS)",
      "Variables de entorno:",
      "├── Cifrado en reposo (KMS) ✅",
      "├── Sin rotación automática ❌",
      "├── Visible en la consola Lambda (cifrado)",
      "└── Uso: Configuración estática, no secretos que rotan",
      "```",
      "*Código Lambda:**",
      "```pitón",
      "importar boto3",
      "importar json",
      "desde botocore.exceptions importar ClientError",
      "cliente_secretos = boto3.client('administrador de secretos')",
      "def get_secret():",
      "intentar:",
      "respuesta = cliente_secretos.get_valor_secreto(",
      "SecretId='prod/db/credenciales'",
      ")",
      "secreto = json.loads(respuesta['SecretString'])",
      "devolver secreto",
      "excepto ClientError como e:",
      "elevar e",
      "def lambda_handler(evento, contexto):",
      "# Obtener credenciales nuevas (siempre actualizadas después de la rotación)",
      "secreto = get_secret()",
      "nombre de usuario = secreto['nombre de usuario']",
      "contraseña = secreto['contraseña'] # Girado automáticamente",
      "anfitrión = secreto['anfitrión']",
      "# Conéctese a la base de datos con las credenciales actuales",
      "# No se necesitan cambios de código cuando las credenciales rotan ✅",
      "```",
      "*Comparación:**",
      "```",
      "Método Costo de rotación de seguridad",
      "───────────────────────── ──────────────────────────",
      "Codificado ❌ Bajo ❌ No Gratis",
      "Variables de entorno ⚠️ Media ❌ No Gratis",
      "Secrets Manager ✅ Alto ✅ Sí $0.40/secreto/mes ✅",
      "Parámetro Tienda Avanzado ✅ Alto ⚠️ Personalizado $0.05/10K llamadas",
      "```",
      "*Concepto clave:** Secrets Manager = Rotación automática + recuperación segura de credenciales"
    ],
    "others": []
  },
  {
    "id": "rf-62",
    "module": "Architecture Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una organización quiere ajustar el tamaño de las instancias EC2 en función de los datos de utilización reales. ¿Qué servicio de AWS analiza el uso y recomienda tipos de instancias óptimos?",
    "options": {
      "A": "AWS Cost Explorer con recomendaciones",
      "B": "AWS Compute Optimizer",
      "C": "AWS Trusted Advisor",
      "D": "Análisis manual de métricas de CloudWatch"
    },
    "explanation": "• AWS Compute Optimizer analiza mediante machine learning el historial de utilización en CloudWatch y recomienda el tamaño óptimo (right-sizing) para instancias EC2, volúmenes EBS, ECS en Fargate y funciones Lambda.",
    "why": [
      "AWS Compute Optimizer utiliza machine learning para analizar métricas reales de uso y recomendar tipos de instancia EC2 óptimos."
    ],
    "others": []
  },
  {
    "id": "rf-63",
    "module": "Architecture Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un equipo de DevOps quiere probar de forma proactiva la disponibilidad del punto final de API cada 5 minutos y recibir alertas si arroja errores. ¿Qué servicio proporciona esto?",
    "options": {
      "A": "CloudWatch Logs con filtros de métricas",
      "B": "CloudWatch Synthetics (Canarias)",
      "C": "Controles de salud de la ruta 53",
      "D": "Función Lambda con programación de EventBridge"
    },
    "explanation": "**Sintéticos de CloudWatch:**\r\n\r\n```\r\nPropósito: Pruebas automatizadas de puntos finales (como usuario) ✅\r\n├── Canaries: scripts programados que monitorean puntos finales\r\n├── Frecuencia: 1 minuto a 1 hora\r\n├── Protocolos: HTTP/HTTPS, API, flujos de trabajo de UI\r\n├── Tiempo de ejecución: Node.js, Python\r\n├── Métricas: Disponibilidad, latencia, capturas de pantalla\r\n└── Alertas: Integración de Alarmas CloudWatch ✅\r\n\r\nCasos de uso:\r\n├── Monitoreo de puntos finales API ✅\r\n├── Pruebas de disponibilidad del sitio web\r\n├── Comprobación de enlaces rotos\r\n├── Pruebas de flujo de trabajo de UI (Puppeteer/Selenium)\r\n└── Monitoreo del tiempo de carga\r\n```\r\n\r\n**Ejemplo de escritura canaria:**\r\n\r\n```javascript\r\n// HTTP Canary (monitors API endpoint)\r\nconst synthetics = require('Synthetics');\r\nconst log = require('SyntheticsLogger');\r\nconst https = require('https');\r\n\r\nexports.handler = async () => {\r\n    const apiCanaryBlueprint = async function () {\r\n        const options = {\r\n            hostname: 'api.example.com',\r\n            path: '/health',\r\n            method: 'GET',\r\n            port: 443\r\n        };\r\n        \r\n        const requestBuilder = () => {\r\n            return new Promise((resolve, reject) => {\r\n                const req = https.request(options, (res) => {\r\n                    log.info(`Status Code: ${res.statusCode}`);\r\n                    \r\n                    if (res.statusCode !== 200) {\r\n                        reject(`Failed: ${res.statusCode}`);  // Triggers alarm ❌\r\n                    }\r\n                    \r\n                    res.on('data', (d) => {\r\n                        resolve(d);  // Success ✅\r\n                    });\r\n                });\r\n                \r\n                req.on('error', (error) => {\r\n                    reject(error);\r\n                });\r\n                \r\n                req.end();\r\n            });\r\n        };\r\n        \r\n        await requestBuilder();\r\n    };\r\n    \r\n    return await apiCanaryBlueprint();\r\n};\r\n```\r\n\r\n**Configuración:**\r\n\r\n```golpecito\r\n# Crear canario\r\naws sintéticos crear-canario \\\r\n  --nombre api-health-check \\\r\n  --runtime-version syn-nodejs-titiritero-3.9 \\\r\n  --artifact-s3-ubicación s3://mis-resultados-canarios/ \\\r\n  --execution-role-arn arn:aws:iam::123456789012:role/CloudWatchSyntheticsRole \\\r\n  --programar '{\r\n    \"Expresión\": \"velocidad(5 minutos)\",\r\n    \"Duración en segundos\": 0\r\n  }'\\\r\n  --código '{\r\n    \"Handler\": \"index.handler\",\r\n    \"S3Bucket\": \"mis-scripts-canary\",\r\n    \"S3Key\": \"api-health-check.",
    "why": [
      "*Sintéticos de CloudWatch:**",
      "```",
      "Propósito: Pruebas automatizadas de puntos finales (como usuario) ✅",
      "├── Canaries: scripts programados que monitorean puntos finales",
      "├── Frecuencia: 1 minuto a 1 hora",
      "├── Protocolos: HTTP/HTTPS, API, flujos de trabajo de UI",
      "├── Tiempo de ejecución: Node.js, Python",
      "├── Métricas: Disponibilidad, latencia, capturas de pantalla",
      "└── Alertas: Integración de Alarmas CloudWatch ✅",
      "Casos de uso:",
      "├── Monitoreo de puntos finales API ✅",
      "├── Pruebas de disponibilidad del sitio web",
      "├── Comprobación de enlaces rotos",
      "├── Pruebas de flujo de trabajo de UI (Puppeteer/Selenium)",
      "└── Monitoreo del tiempo de carga",
      "```",
      "*Ejemplo de escritura canaria:**",
      "```javascript",
      "// HTTP Canary (monitorea el punto final de la API)",
      "const sintéticos = require('Sintéticos');",
      "const log = require('SyntheticsLogger');",
      "const https = requerir('https');",
      "exports.handler = async () => {",
      "const apiCanaryBlueprint = función asíncrona () {",
      "opciones constantes = {",
      "nombre de host: 'api.example.com',",
      "ruta: '/salud',",
      "método: 'OBTENER',",
      "puerto: 443",
      "};",
      "const requestBuilder = () => {",
      "devolver nueva Promesa((resolver, rechazar) => {",
      "solicitud constante = https.request(opciones, (res) => {",
      "log.info(`Código de estado: ${res.statusCode}`);",
      "si (res.statusCode! == 200) {",
      "rechazar(`Error: ${res.statusCode}`);  // Activa la alarma ❌",
      "}",
      "res.on('datos', (d) => {",
      "resuelto);  // Éxito ✅",
      "});",
      "});",
      "req.on('error', (error) => {",
      "rechazar(error);",
      "});",
      "solicitud.end();",
      "});",
      "};",
      "espere requestBuilder();",
      "};",
      "regresar aguarda apiCanaryBlueprint();",
      "};",
      "```",
      "*Configuración:**",
      "```golpecito",
      "# Crear canario",
      "aws sintéticos crear-canario \\",
      "--nombre api-health-check \\",
      "--runtime-version syn-nodejs-titiritero-3.9 \\",
      "--artifact-s3-ubicación s3://mis-resultados-canarios/ \\",
      "--execution-role-arn arn:aws:iam::123456789012:role/CloudWatchSyntheticsRole \\",
      "--cronograma '{",
      "\"Expresión\": \"velocidad(5 minutos)\",",
      "\"Duración en segundos\": 0",
      "}'\\",
      "--código '{",
      "\"Handler\": \"index.handler\",",
      "\"S3Bucket\": \"mis-scripts-canary\",",
      "\"S3Key\": \"api-health-check."
    ],
    "others": []
  },
  {
    "id": "rf-64",
    "module": "Architecture Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un equipo de desarrollo tiene una base de datos con una carga de trabajo muy variable (inactiva durante la noche, ocupada durante el día). ¿Qué configuración de Aurora optimiza los costos?",
    "options": {
      "A": "Aurora provista con la instancia más grande",
      "B": "Aurora aprovisionada con escalamiento programado",
      "C": "Aurora Serverless v2 con escalado automático",
      "D": "Base de datos global de Aurora"
    },
    "explanation": "• Amazon Aurora Serverless v2 ajusta automáticamente la capacidad de cómputo (ACUs) en fracciones de segundo según la carga activa y la reduce al mínimo durante las noches inactivas, optimizando los costos.",
    "why": [
      "Aurora Serverless v2 escala automáticamente la capacidad según la demanda real y reduce costos durante períodos de inactividad."
    ],
    "others": []
  },
  {
    "id": "rf-65",
    "module": "Architecture Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa asociada necesita cargar archivos a S3 mediante el protocolo SFTP (su requisito del sistema heredado). ¿Qué servicio de AWS proporciona acceso SFTP a S3?",
    "options": {
      "A": "Punto final FTP de S3",
      "B": "Familia de transferencias de AWS para SFTP",
      "C": "DataSync con fuente SFTP",
      "D": "Puerta de enlace de almacenamiento Puerta de enlace de archivos"
    },
    "explanation": "• AWS Transfer Family para SFTP proporciona un servicio SFTP totalmente administrado conectado directamente a buckets de Amazon S3 sin necesidad de modificar los sistemas heredados del socio comercial.",
    "why": [
      "AWS Transfer Family para SFTP permite subir archivos directamente a Amazon S3 mediante el protocolo SFTP estándar."
    ],
    "others": []
  },
  {
    "id": "ia-1",
    "module": "Complex Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": true,
    "answer": [
      "B",
      "C",
      "F"
    ],
    "q": "Una empresa quiere implementar una aplicación en contenedores en AWS ECS. La aplicación requiere 2 GB de memoria y 1 vCPU. El contenedor debe acceder a AWS Secrets Manager para recuperar las credenciales de la base de datos y todos los registros del contenedor deben enviarse a CloudWatch Logs.\r\n\r\n¿Qué se debe incluir en la definición de tarea de ECS para cumplir con estos requisitos? (Elegí TRES)",
    "options": {
      "A": "Rol de ejecución de tareas con permisos para acceder a Secrets Manager",
      "B": "Rol de tarea con permisos para acceder a Secrets Manager",
      "C": "Definición de contenedor que especifica los requisitos de memoria y CPU",
      "D": "Rol de tarea con permisos para escribir en CloudWatch Logs",
      "E": "Rol de ejecución de tareas con permisos para escribir en CloudWatch Logs",
      "F": "Definición de contenedor con logConfiguration apuntando a CloudWatch"
    },
    "explanation": "- **Rol de tarea (B)**: utilizado por la aplicación que se ejecuta dentro del contenedor para acceder a los servicios de AWS (Secrets Manager en este caso)\r\n- **Definición de contenedor (C)**: debe especificar la memoria (2048 MB) y la CPU (1024 unidades = 1 vCPU) según sea necesario\r\n- **Configuración de registro (F)**: la definición del contenedor necesita configuración de registro para enrutar registros a CloudWatch",
    "why": [
      "**Rol de tarea (B)**: utilizado por la aplicación que se ejecuta dentro del contenedor para acceder a los servicios de AWS (Secrets Manager en este caso)",
      "**Definición de contenedor (C)**: debe especificar la memoria (2048 MB) y la CPU (1024 unidades = 1 vCPU) según sea necesario",
      "**Configuración de registro (F)**: la definición de contenedor necesita logConfiguration para enrutar registros a CloudWatch"
    ],
    "others": []
  },
  {
    "id": "ia-2",
    "module": "Complex Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Su empresa tiene una aplicación web ejecutándose en instancias Amazon EC2 detrás de un balanceador de carga de aplicaciones (ALB) en us-east-1. Para la recuperación ante desastres, tiene un servidor web secundario alojado en su centro de datos local. Debe configurar la conmutación por error de DNS mediante la Ruta 53 para que el tráfico se dirija automáticamente al servidor local si AWS ALB deja de funcionar.\r\n\r\n¿Cómo se deben configurar los registros de Ruta 53?",
    "options": {
      "A": "Cree un registro CNAME para su dominio que apunte al ALB y otro registro CNAME que apunte a la IP de su servidor local.",
      "B": "Cree dos registros de conmutación por error: principal como CNAME que apunta al ALB con una verificación de estado, secundario como registro A para local",
      "C": "Cree dos registros de conmutación por error: principal como registro de alias que apunta al ALB con \"Evaluar estado de destino\" habilitado, secundario como registro A para local con una verificación de estado",
      "D": "Cree un registro de alias que apunte tanto al ALB como al servidor local con una política de enrutamiento ponderada."
    },
    "explanation": "**Registro primario (AWS)**:\r\n- Utilice **Registro de alias** (no CNAME) que apunte a ALB.\r\n- Habilitar **\"Evaluar estado del objetivo\"** - Route 53 verifica automáticamente el estado del objetivo ALB\r\n- Tipo de registro de conmutación por error: primario\r\n\r\n**Registro secundario (local)**:\r\n- Utilice **Registro A** (o CNAME para no root) con dirección IP\r\n- Adjunte un control de estado explícito de la Ruta 53\r\n- Tipo de registro de conmutación por error: secundario\r\n\r\n**Por qué otras opciones son incorrectas**:\r\n- **A**: No se puede utilizar CNAME en el vértice del dominio; no configura correctamente la conmutación por error\r\n- **B**: Debería utilizar Alias para ALB (mejor rendimiento, sin cargos de DNS)\r\n- **D**: el enrutamiento ponderado no proporciona conmutación por error automática en caso de falla de salud\r\n\r\n**Trampa de examen clave**: los registros de alias con \"Evaluar el estado del objetivo\" solo funcionan para recursos de AWS. Para sistemas que no sean de AWS (locales), debe utilizar comprobaciones de estado explícitas.",
    "why": [
      "*Registro primario (AWS)**:",
      "Utilice **Registro de alias** (no CNAME) que apunte a ALB",
      "Habilite **\"Evaluar el estado del objetivo\"**: Route 53 verifica automáticamente el estado del objetivo de ALB",
      "Tipo de registro de conmutación por error: primario",
      "*Registro secundario (local)**:",
      "Utilice **Registro A** (o CNAME para no root) con dirección IP",
      "Adjunte un control de estado explícito de la Ruta 53",
      "Tipo de registro de conmutación por error: secundario",
      "*Por qué otras opciones son incorrectas**:",
      "**A**: No se puede utilizar CNAME en el vértice del dominio; no configura correctamente la conmutación por error",
      "**B**: Debería utilizar Alias ​​para ALB (mejor rendimiento, sin cargos de DNS)",
      "**D**: El enrutamiento ponderado no proporciona conmutación por error automática en caso de falla de salud",
      "*Trampa de examen clave**: los registros de alias con \"Evaluar el estado del objetivo\" solo funcionan para recursos de AWS. Para sistemas que no sean de AWS (locales), debe utilizar comprobaciones de estado explícitas."
    ],
    "others": []
  },
  {
    "id": "ia-3",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un desarrollador implementó una función Lambda que procesa registros de Kinesis Data Stream. La función se está ejecutando correctamente (según las métricas de Kinesis que muestran registros procesados), pero no aparece ningún registro en CloudWatch Logs. ¿Cuál es la causa MÁS probable?",
    "options": {
      "A": "Las funciones Lambda activadas por Kinesis Data Streams no son compatibles con CloudWatch Logs",
      "B": "La función de ejecución de Lambda carece de permisos para crear grupos de registros y escribir eventos de registro.",
      "C": "CloudWatch Logs no está habilitado en la configuración de la función Lambda",
      "D": "La función debe llamar explícitamente a la API de CloudWatch Logs para escribir registros."
    },
    "explanation": "Lambda escribe automáticamente registros en CloudWatch Logs SI la función de ejecución tiene estos permisos:\r\n- `registros: Crear grupo de registros`\r\n- `registros:CreateLogStream`  \r\n- `registros:PutLogEvents`\r\n\r\n**Por qué otras opciones son incorrectas**:\r\n- **A**: FALSO: todas las funciones de Lambda admiten CloudWatch Logs independientemente del origen del activador\r\n- **C**: No existe tal configuración; El registro es automático si existen permisos.\r\n- **D**: Lambda captura automáticamente la salida de la consola; no se necesitan llamadas API explícitas\r\n\r\n**Solución**: adjunte la política administrada `AWSLambdaBasicExecutionRole` al rol de ejecución.\r\n\r\n**Consejo de examen**: \"Lambda funciona pero no hay registros\" = faltan permisos de CloudWatch Logs (99% de las veces)",
    "why": [
      "Lambda escribe automáticamente registros en CloudWatch Logs SI la función de ejecución tiene estos permisos:",
      "`registros: Crear grupo de registros`",
      "`registros:CrearLogStream`",
      "`registros:PutLogEvents`",
      "*Por qué otras opciones son incorrectas**:",
      "**A**: FALSO: todas las funciones de Lambda admiten CloudWatch Logs independientemente del origen del activador",
      "**C**: No existe tal configuración; El registro es automático si existen permisos.",
      "**D**: Lambda captura automáticamente la salida de la consola; no se necesitan llamadas API explícitas",
      "*Solución**: adjunte la política administrada `AWSLambdaBasicExecutionRole` al rol de ejecución.",
      "*Consejo de examen**: \"Lambda funciona pero no hay registros\" = faltan permisos de CloudWatch Logs (99% de las veces)"
    ],
    "others": []
  },
  {
    "id": "ia-4",
    "module": "Complex Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Una aplicación de comercio electrónico utiliza funciones de AWS Lambda para procesar las solicitudes de los usuarios. Cada invocación de Lambda crea una nueva conexión de base de datos a una instancia MySQL de Amazon RDS. Durante el pico de tráfico, la aplicación experimenta errores de \"demasiadas conexiones\" y una alta utilización de la CPU de la base de datos debido a la sobrecarga de la conexión.\r\n\r\n¿Cuál es la solución más costo-efectivo para resolver este problema?",
    "options": {
      "A": "Aumente el tamaño de la instancia RDS para manejar más conexiones",
      "B": "Habilite la implementación Multi-AZ para la instancia RDS",
      "C": "Cree réplicas de lectura y distribuya el tráfico de lectura",
      "D": "Utilice Amazon RDS Proxy para agrupar y administrar conexiones"
    },
    "explanation": "• Amazon RDS Proxy agrupa y reutiliza las conexiones de base de datos (connection pooling) generadas por cientos de invocaciones concurrentes de AWS Lambda, evitando errores de `Too many connections` y reduciendo el uso de CPU en RDS de forma costo-efectiva.",
    "why": [
      "Amazon RDS Proxy gestiona un pool de conexiones compartido para evitar saturar la base de datos RDS desde funciones Lambda."
    ],
    "others": []
  },
  {
    "id": "ia-5",
    "module": "Complex Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una aplicación de gestión de restaurantes utiliza varias funciones de Lambda para procesar pedidos: ValidateOrder, ChargePayment, UpdateInventory y NotifyRestaurant. Actualmente, estas funciones se invocan secuencialmente mediante código de orquestación personalizado, que es difícil de mantener y depurar. Las fallas en cualquier paso requieren intervención manual.\r\n\r\n¿Qué servicio de AWS debería utilizar para organizar este flujo de trabajo con control visual y manejo de errores integrados?",
    "options": {
      "A": "Amazon SQS con activadores Lambda",
      "B": "AWS Step Functions",
      "C": "Amazon EventBridge con múltiples reglas",
      "D": "Flujo de trabajo de AWS Glue"
    },
    "explanation": "**AWS Step Functionss de AWS**:\r\n- **Flujo de trabajo visual**: vea el flujo de ejecución en la consola de AWS\r\n- **Máquina de estados**: define el orden de las operaciones en JSON/YAML\r\n- **Manejo de errores**: lógica integrada de reintento y captura\r\n- **Integraciones de servicios**: Integración directa con Lambda, DynamoDB, SQS, SNS, etc.\r\n- **Historial de ejecución**: realice un seguimiento de cada paso de cada flujo de trabajo\r\n\r\n**Ejemplo de máquina de estados**:\r\n```json\r\n{\r\n  \"InicioEn\": \"ValidarPedido\",\r\n  \"Estados\": {\r\n    \"ValidarOrden\": {\r\n      \"Tipo\": \"Tarea\",\r\n      \"Recurso\": \"arn:aws:lambda:...:ValidateOrder\",\r\n      \"Siguiente\": \"CargoPago\",\r\n      \"Catch\": [{\"ErrorEquals\": [\"ValidationError\"], \"Siguiente\": \"HandleError\"}]\r\n    },\r\n    \"Pago de cargo\": {...},\r\n    \"ActualizarInventario\": {...},\r\n    \"NotificarRestaurante\": {...}\r\n  }\r\n}\r\n```\r\n\r\n**Por qué no otros**:\r\n- **A (SQS)**: requiere orquestación personalizada; sin flujo de trabajo visual\r\n- **C (EventBridge)**: Bueno para enrutamiento de eventos, no para orquestación secuencial\r\n- **D (AWS Glue)**: para flujos de trabajo ETL, no para orquestación de microservicios\r\n\r\n**Palabras clave del examen**: \"orquestar\", \"flujo de trabajo\", \"múltiples pasos\", \"manejo de errores\" → AWS Step Functions",
    "why": [
      "*AWS Step Functionss de AWS**:",
      "**Flujo de trabajo visual**: consulte el flujo de ejecución en la consola de AWS",
      "**Máquina de estados**: define el orden de las operaciones en JSON/YAML",
      "**Manejo de errores**: lógica integrada de reintento y captura",
      "**Integraciones de servicios**: Integración directa con Lambda, DynamoDB, SQS, SNS, etc.",
      "**Historial de ejecución**: realice un seguimiento de cada paso de cada flujo de trabajo",
      "*Ejemplo de máquina de estados**:",
      "```json",
      "{",
      "\"InicioEn\": \"ValidarPedido\",",
      "\"Estados\": {",
      "\"ValidarOrden\": {",
      "\"Tipo\": \"Tarea\",",
      "\"Recurso\": \"arn:aws:lambda:...:ValidateOrder\",",
      "\"Siguiente\": \"CargoPago\",",
      "\"Catch\": [{\"ErrorEquals\": [\"ValidationError\"], \"Siguiente\": \"HandleError\"}]",
      "},",
      "\"Pago de cargo\": {...},",
      "\"ActualizarInventario\": {...},",
      "\"NotificarRestaurante\": {...}",
      "}",
      "}",
      "```",
      "*Por qué no otros**:",
      "**A (SQS)**: Requiere orquestación personalizada; sin flujo de trabajo visual",
      "**C (EventBridge)**: Bueno para enrutamiento de eventos, no para orquestación secuencial",
      "**D (AWS Glue)**: para flujos de trabajo ETL, no para orquestación de microservicios",
      "*Palabras clave del examen**: \"orquestar\", \"flujo de trabajo\", \"múltiples pasos\", \"manejo de errores\" → AWS Step Functions"
    ],
    "others": []
  },
  {
    "id": "ia-6",
    "module": "Complex Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Debe configurar DNS para su sitio web `example.com` (dominio raíz) y `www.example.com` (subdominio) para que apunte a un balanceador de carga de aplicaciones en us-east-1.\r\n\r\n¿Cuál es la configuración correcta de la Ruta 53?",
    "options": {
      "A": "Cree un registro CNAME para ejemplo.com y otro registro CNAME para www.ejemplo.com, ambos apuntando al nombre DNS de ALB.",
      "B": "Cree un registro A para ejemplo.com con la dirección IP ALB y un registro CNAME para www.ejemplo.com que apunte a ejemplo.com",
      "C": "Cree un registro Alias ​​para ejemplo.com que apunte al ALB y un registro CNAME para www.example.com que apunte al nombre DNS del ALB.",
      "D": "Cree registros de alias para example.com y www.example.com que apunten al ALB"
    },
    "explanation": "| Tipo de registro | En el dominio raíz (ápice) | Para subdominio | Cargos por consultas DNS | Puntos para ALB |\r\n|-------------|------------|---------------|-------------|---------------|\r\n| **CNOMBRE** | ❌ NO PERMITIDO | ✅ Permitido | Sí | Sí |\r\n| **Alias** | ✅ Permitido | ✅ Permitido | No (gratis) | Sí |\r\n| **A** | ✅ Permitido | ✅ Permitido | No | No (necesita IP estática) |\r\n\r\n**Para dominio raíz (`ejemplo.com`)**:\r\n- Debe utilizar un registro de alias (no se permite CNAME en Apex)\r\n- Apunte a ALB, CloudFront u otro recurso de AWS\r\n- Consultas DNS gratuitas\r\n\r\n**Para subdominio (`www.example.com`)**:\r\n- Puede usar CNAME o Alias\r\n- CNAME es la elección tradicional\r\n- Alias es más económico (sin cargos por consulta)\r\n\r\n**Por qué A es incorrecta**: CNAME no se puede utilizar en el dominio raíz (restricción estándar de DNS)\r\n\r\n**Trampa del examen**: cualquier respuesta que muestre CNAME en la raíz = INCORRECTO",
    "why": [
      "| Tipo de registro | En el dominio raíz (ápice) | Para subdominio | Cargos por consultas DNS | Puntos para ALB |",
      "|-------------|------------|---------------|-------------|---------------|",
      "| **CNOMBRE** | ❌ NO PERMITIDO | ✅ Permitido | Sí | Sí |",
      "| **Alias** | ✅ Permitido | ✅ Permitido | No (gratis) | Sí |",
      "| **A** | ✅ Permitido | ✅ Permitido | No | No (necesita IP estática) |",
      "*Para dominio raíz (`ejemplo.com`)**:",
      "Debe utilizar un registro de alias (no se permite CNAME en Apex)",
      "Apunte a ALB, CloudFront u otro recurso de AWS",
      "Consultas DNS gratuitas",
      "*Para subdominio (`www.example.com`)**:",
      "Puede usar CNAME o Alias",
      "CNAME es la elección tradicional",
      "Alias ​​es más barato (sin cargos por consulta)",
      "*Por qué A es incorrecta**: CNAME no se puede utilizar en el dominio raíz (restricción estándar de DNS)",
      "*Trampa del examen**: Cualquier respuesta que muestre CNAME en la raíz = INCORRECTO"
    ],
    "others": []
  },
  {
    "id": "ia-7",
    "module": "Complex Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "La empresa A tiene una cola SQS en la cuenta 111111 para datos analíticos. La empresa B (cuenta 222222) necesita enviar mensajes a esta cola. ¿Cuál es la forma MÁS eficiente de permitir esto?",
    "options": {
      "A": "Cree una función de IAM en la cuenta 111111 que permita SQS:SendMessage y haga que la cuenta 222222 asuma esta función.",
      "B": "Configure una política de cola SQS en la cuenta 111111 para permitir que la cuenta 222222 realice SQS:SendMessage",
      "C": "Comparta las claves de acceso de AWS de la cuenta 111111 con la cuenta 222222",
      "D": "Configurar el emparejamiento de VPC entre las dos cuentas"
    },
    "explanation": "**Política de colas SQS (recomendada)**:\r\n```json\r\n{\r\n  \"Efecto\": \"Permitir\",\r\n  \"Principal\": {\"AWS\": \"arn:aws:iam::222222:root\"},\r\n  \"Acción\": \"sqs:EnviarMensaje\",\r\n  \"Recurso\": \"arn:aws:sqs:region:111111:MyQueue\"\r\n}\r\n```\r\n- ✅ Sencillo y directo\r\n- ✅ No se necesitan credenciales temporales\r\n- ✅ Política basada en recursos (adjunta a la cola)\r\n- ✅ Sin gastos generales de AssumeRole\r\n\r\n**Rol de IAM (Opción A - Más complejo)**:\r\n- Requiere AssumeRole en cada solicitud\r\n- Necesidad de gestionar relaciones de confianza.\r\n- Manejar credenciales temporales\r\n- Más llamadas API = mayor latencia\r\n\r\n**Por qué otros se equivocan**:\r\n- **C**: NUNCA compartas claves de acceso (violación de seguridad)\r\n- **D**: El emparejamiento de VPC es para conectividad de red, no para permisos SQS\r\n\r\n**Regla general**: para el acceso a recursos entre cuentas en AWS, prefiera las políticas basadas en recursos a los roles de IAM cuando estén disponibles (S3, SQS, SNS, Lambda).",
    "why": [
      "*Política de colas SQS (recomendada)**:",
      "```json",
      "{",
      "\"Efecto\": \"Permitir\",",
      "\"Principal\": {\"AWS\": \"arn:aws:iam::222222:root\"},",
      "\"Acción\": \"sqs:EnviarMensaje\",",
      "\"Recurso\": \"arn:aws:sqs:region:111111:MyQueue\"",
      "}",
      "```",
      "✅ Sencillo y directo",
      "✅ No se necesitan credenciales temporales",
      "✅ Política basada en recursos (adjunta a la cola)",
      "✅ Sin gastos generales de AssumeRole",
      "*Rol de IAM (Opción A - Más complejo)**:",
      "Requiere AssumeRole en cada solicitud",
      "Necesidad de gestionar las relaciones de confianza.",
      "Manejar credenciales temporales",
      "Más llamadas API = mayor latencia",
      "*Por qué otros se equivocan**:",
      "**C**: NUNCA comparta claves de acceso (violación de seguridad)",
      "**D**: El emparejamiento de VPC es para conectividad de red, no para permisos SQS",
      "*Regla general**: para el acceso a recursos entre cuentas en AWS, prefiera las políticas basadas en recursos a los roles de IAM cuando estén disponibles (S3, SQS, SNS, Lambda)."
    ],
    "others": []
  },
  {
    "id": "ia-8",
    "module": "Complex Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Tiene tres pilas de CloudFormation: SecurityStack, NetworkStack y ApplicationStack. SecurityStack crea un grupo de seguridad que deben utilizar los recursos tanto en NetworkStack como en ApplicationStack.\r\n\r\n¿Cómo se hace referencia al grupo de seguridad en todas las pilas?",
    "options": {
      "A": "Utilice los parámetros de CloudFormation para pasar el ID del grupo de seguridad",
      "B": "Codifique el ID del grupo de seguridad en cada pila",
      "C": "Utilice salidas de CloudFormation con Export en SecurityStack e ImportValue en otras pilas",
      "D": "Utilice asignaciones de CloudFormation para almacenar el ID del grupo de seguridad"
    },
    "explanation": "**En SecurityStack** (crea y exporta):\r\n```yaml\r\nSalidas:\r\n  ID del grupo de seguridad:\r\n    Descripción: Grupo de seguridad para servidores web\r\n    Valor: !Ref WebServerSecurityGroup\r\n    Exportar:\r\n      Nombre: MyApp-WebServer-SG\r\n```\r\n\r\n**En NetworkStack y ApplicationStack** (importación):\r\n```yaml\r\nRecursos:\r\n  Mi instancia EC2:\r\n    Tipo: AWS::EC2::Instancia\r\n    Propiedades:\r\n      ID de grupo de seguridad:\r\n        - !ImportValue MyApp-WebServer-SG\r\n```\r\n\r\n**Por qué funciona esto**:\r\n- **Salidas**: hacer que los valores estén disponibles desde una pila\r\n- **Exportar**: publicar el valor con un nombre único\r\n- **ImportValue**: hace referencia al valor exportado en otra pila\r\n- Actualizaciones automáticas si el valor cambia.\r\n\r\n**Por qué otros se equivocan**:\r\n- **A**: Los parámetros requieren entrada manual; no dinámico\r\n- **B**: Se interrumpe si se vuelve a crear el grupo de seguridad\r\n- **D**: Las asignaciones son para datos estáticos, no para referencias entre pilas.\r\n\r\n**Limitación**: No se puede eliminar una pila si sus valores exportados se importan en otro lugar.",
    "why": [
      "*En SecurityStack** (crea y exporta):",
      "```yaml",
      "Salidas:",
      "ID del grupo de seguridad:",
      "Descripción: Grupo de seguridad para servidores web",
      "Valor: !Ref WebServerSecurityGroup",
      "Exportar:",
      "Nombre: MyApp-WebServer-SG",
      "```",
      "*En NetworkStack y ApplicationStack** (importación):",
      "```yaml",
      "Recursos:",
      "Mi instancia EC2:",
      "Tipo: AWS::EC2::Instancia",
      "Propiedades:",
      "ID de grupo de seguridad:",
      "- !ImportValue MyApp-WebServer-SG",
      "```",
      "*Por qué funciona esto**:",
      "**Salidas**: hacer que los valores estén disponibles desde una pila",
      "**Exportar**: publicar el valor con un nombre único",
      "**ImportValue**: hace referencia al valor exportado en otra pila",
      "Actualizaciones automáticas si el valor cambia.",
      "*Por qué otros se equivocan**:",
      "**A**: Los parámetros requieren entrada manual; no dinámico",
      "**B**: Se interrumpe si se vuelve a crear el grupo de seguridad",
      "**D**: Las asignaciones son para datos estáticos, no para referencias entre pilas.",
      "*Limitación**: No se puede eliminar una pila si sus valores exportados se importan en otro lugar."
    ],
    "others": []
  },
  {
    "id": "ia-9",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa financiera necesita ejecutar cargas de trabajo de Kubernetes localmente por motivos regulatorios, pero quiere utilizar las mismas herramientas y API que Amazon EKS en la nube. No quieren gestionar manualmente los componentes del plano de control de Kubernetes.\r\n\r\n¿Qué solución deberían utilizar?",
    "options": {
      "A": "Instalar Kubernetes de código abierto manualmente",
      "B": "Utilice Amazon EKS en cualquier lugar",
      "C": "Utilice la distribución de Amazon EKS",
      "D": "Implemente EKS en AWS y conéctese a través de VPN"
    },
    "explanation": "• Amazon EKS Anywhere permite crear y operar clústeres de Kubernetes en infraestructura local (on-premises) utilizando la misma distribución, herramientas y soporte de Amazon EKS sin administrar manualmente el plano de control desde cero.",
    "why": [
      "Amazon EKS Anywhere extiende la experiencia y herramientas de Amazon EKS hacia entornos on-premises con gestión automatizada."
    ],
    "others": []
  },
  {
    "id": "ia-10",
    "module": "Complex Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa SaaS tiene una aplicación orientada al cliente con patrones de tráfico muy impredecibles. Durante el horario laboral, el tráfico aumenta a 10.000 solicitudes/min, pero por la noche cae a casi cero. La base de datos está actualmente aprovisionada en RDS Aurora, cuyo funcionamiento es costoso las 24 horas del día, los 7 días de la semana.\r\n\r\n¿Cuál es la solución más costo-efectivo?",
    "options": {
      "A": "Utilice Aurora con escalado vertical programado",
      "B": "Migrar a Aurora Serverless",
      "C": "Utilice Aurora Multi-AZ con réplicas de lectura de Auto Scaling",
      "D": "Cambiar a DynamoDB"
    },
    "explanation": "**Aurora sin servidor**:\r\n- **Escala automática** capacidad de procesamiento (ACU) según la carga\r\n- **Inicia/detiene** automáticamente cuando está inactivo\r\n- **Pago por segundo** solo cuando está activo\r\n- **Escale en segundos** sin caídas de conexión\r\n\r\n**Perfecto para**:\r\n- Cargas de trabajo poco frecuentes/impredecibles\r\n- Bases de datos de desarrollo/prueba\r\n- Patrones de tráfico variables\r\n- Aplicaciones con largos periodos de inactividad\r\n\r\n**Precio**:\r\n- ~$0,06 por hora ACU\r\n- Almacenamiento: $0,10/GB-mes\r\n- Sin cargos cuando está en pausa\r\n\r\n**Por qué no otros**:\r\n- **A**: Escalado manual; todavía paga por el tiempo de inactividad\r\n- **C**: réplicas de lectura para escalado de lectura; no aborda los costos inactivos\r\n- **D**: Requiere reescritura de la aplicación; DynamoDB es NoSQL\r\n\r\n**Pista del examen**: \"Tráfico impredecible\" + \"base de datos costo-efectivo\" + \"sin administración manual\" = Aurora Serverless",
    "why": [
      "*Aurora sin servidor**:",
      "**Escala automática** capacidad de procesamiento (ACU) según la carga",
      "**Se inicia/se detiene** automáticamente cuando está inactivo",
      "**Pago por segundo** solo cuando esté activo",
      "**Escale en segundos** sin caídas de conexión",
      "*Perfecto para**:",
      "Cargas de trabajo poco frecuentes/impredecibles",
      "Bases de datos de desarrollo/prueba",
      "Patrones de tráfico variables",
      "Aplicaciones con largos periodos de inactividad",
      "*Precio**:",
      "~$0.06 por hora ACU",
      "Almacenamiento: $0.10/GB-mes",
      "Sin cargos cuando está en pausa",
      "*Por qué no otros**:",
      "**A**: Escalado manual; todavía paga por el tiempo de inactividad",
      "**C**: réplicas de lectura para escalado de lectura; no aborda los costos inactivos",
      "**D**: Requiere reescritura de la aplicación; DynamoDB es NoSQL",
      "*Pista del examen**: \"Tráfico impredecible\" + \"base de datos costo-efectivo\" + \"sin administración manual\" = Aurora Serverless"
    ],
    "others": []
  },
  {
    "id": "ia-11",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Su empresa utiliza AMI personalizadas para lanzar instancias EC2 en varias cuentas de AWS. Recientemente, un miembro del equipo eliminó accidentalmente una AMI crítica, lo que provocó fallas en la implementación. Necesita una solución para recuperar AMI eliminadas accidentalmente sin procedimientos de copia de seguridad complejos.\r\n\r\n¿Qué deberías implementar?",
    "options": {
      "A": "Cree instantáneas de AMI semanalmente y guárdelas en S3",
      "B": "Habilite la papelera de reciclaje de AWS para las AMI de EC2",
      "C": "Utilice AWS Backup para realizar copias de seguridad de todas las AMI",
      "D": "Cree una función Lambda para copiar AMI a otra cuenta"
    },
    "explanation": "**Papelera de reciclaje de AWS para EC2**:\r\n- Conserva las AMI respaldadas por EBS eliminadas durante un período específico (de 1 día a 1 año)\r\n- Proceso de recuperación simple (restaurar con un clic)\r\n- No se necesitan secuencias de comandos de respaldo\r\n- Funciona tanto para instantáneas de AMI como de EBS\r\n\r\n**Cómo configurar**:\r\n1. Cree una regla de retención en la consola de la Papelera de reciclaje\r\n2. Especifique el tipo de recurso: AMI\r\n3. Establecer el período de retención: por ejemplo, 30 días\r\n4. Aplicar a etiquetas específicas o a todas las AMI\r\n\r\n**Proceso de recuperación**:\r\n1. Vaya a la consola de la Papelera de reciclaje\r\n2. Encuentra AMI eliminada\r\n3. Haga clic en \"Recuperar\"\r\n4. AMI se restaura con el mismo ID de AMI\r\n\r\n**Por qué no otros**:\r\n- **A**: Proceso manual; Las AMI no se almacenan directamente en S3\r\n- **C**: AWS Backup admite AMI pero es más complejo\r\n- **D**: Agrega sobrecarga operativa; no evita la eliminación\r\n\r\n**Limitaciones**:\r\n- Solo para AMI respaldadas por EBS (no para almacén de instancias)\r\n- Debe habilitarse antes de que se produzca la eliminación.\r\n- Los costos de almacenamiento aún se aplican durante la retención.",
    "why": [
      "*Papelera de reciclaje de AWS para EC2**:",
      "Conserva las AMI respaldadas por EBS eliminadas durante un período específico (de 1 día a 1 año)",
      "Proceso de recuperación simple (restaurar con un clic)",
      "No se necesitan secuencias de comandos de respaldo",
      "Funciona tanto para instantáneas de AMI como de EBS",
      "*Cómo configurar**:",
      "1. Cree una regla de retención en la consola de la Papelera de reciclaje",
      "2. Especifique el tipo de recurso: AMI",
      "3. Establecer el período de retención: por ejemplo, 30 días",
      "4. Aplicar a etiquetas específicas o a todas las AMI",
      "*Proceso de recuperación**:",
      "1. Vaya a la consola de la Papelera de reciclaje",
      "2. Encuentra AMI eliminada",
      "3. Haga clic en \"Recuperar\"",
      "4. AMI se restaura con el mismo ID de AMI",
      "*Por qué no otros**:",
      "**A**: Proceso manual; Las AMI no se almacenan directamente en S3",
      "**C**: AWS Backup admite AMI pero es más complejo",
      "**D**: Agrega sobrecarga operativa; no evita la eliminación",
      "*Limitaciones**:",
      "Solo para AMI respaldadas por EBS (no para almacén de instancias)",
      "Debe habilitarse antes de que se produzca la eliminación.",
      "Los costos de almacenamiento aún se aplican durante la retención."
    ],
    "others": []
  },
  {
    "id": "ia-12",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa actualizó el backend de su API REST y cambió el campo de respuesta de \"user_id\" a \"userId\". Sin embargo, los clientes móviles todavía esperan el nombre de campo antiguo. La API se expone a través de Amazon API Gateway. Debe transformar las respuestas para mantener la compatibilidad con versiones anteriores sin modificar el backend.\r\n\r\n¿Qué deberías configurar en API Gateway?",
    "options": {
      "A": "Habilite el almacenamiento en caché de API para almacenar ambos formatos de respuesta",
      "B": "Utilice plantillas de asignación en la respuesta de integración",
      "C": "Cree una función Lambda para transformar respuestas",
      "D": "Defina múltiples versiones de API con diferentes modelos de respuesta"
    },
    "explanation": "**Plantillas de mapeo**:\r\n- Utilice **VTL (lenguaje de plantilla Velocity)**\r\n- Transformar cargas útiles de solicitud/respuesta\r\n- Ubicado en las secciones Solicitud/Respuesta de Integración\r\n\r\n**Ejemplo de mapeo VTL**:\r\n```vtl\r\n{\r\n  \"user_id\": $input.path('$.userId'),\r\n  \"nombre\": $entrada.ruta('$.nombre'),\r\n  \"correo electrónico\": $entrada.ruta('$.correo electrónico')\r\n}\r\n```\r\n\r\nEsto transforma la respuesta del backend:\r\n```json\r\n{\"userId\": \"123\", \"nombre\": \"Juan\"}\r\n```\r\nAl formato esperado por el cliente:\r\n```json\r\n{\"user_id\": \"123\", \"nombre\": \"Juan\"}\r\n```\r\n\r\n**Dónde configurar**:\r\n1. API Gateway → Recursos → Método (GET/POST/etc.)\r\n2. Respuesta de integración\r\n3. Plantillas de mapeo\r\n4. Agregue tipo de contenido y código VTL\r\n\r\n**Por qué no otros**:\r\n- **A**: el almacenamiento en caché mejora el rendimiento, no transforma los datos\r\n- **C**: Agrega otra invocación Lambda (mayor costo, latencia)\r\n- **D**: El control de versiones de API no transforma las respuestas.\r\n\r\n**Consejo de examen**: \"Compatibilidad con versiones anteriores\" + \"transformación de respuesta\" + \"API Gateway\" = Plantillas de mapeo",
    "why": [
      "*Plantillas de mapeo**:",
      "Utilice **VTL (lenguaje de plantilla Velocity)**",
      "Transformar cargas útiles de solicitud/respuesta",
      "Ubicado en las secciones Solicitud/Respuesta de integración",
      "*Ejemplo de mapeo VTL**:",
      "```vtl",
      "{",
      "\"user_id\": $input.path('$.userId'),",
      "\"nombre\": $entrada.ruta('$.nombre'),",
      "\"correo electrónico\": $entrada.ruta('$.correo electrónico')",
      "}",
      "```",
      "Esto transforma la respuesta del backend:",
      "```json",
      "{\"userId\": \"123\", \"nombre\": \"Juan\"}",
      "```",
      "Al formato esperado por el cliente:",
      "```json",
      "{\"user_id\": \"123\", \"nombre\": \"Juan\"}",
      "```",
      "*Dónde configurar**:",
      "1. API Gateway → Recursos → Método (GET/POST/etc.)",
      "2. Respuesta de integración",
      "3. Plantillas de mapeo",
      "4. Agregue tipo de contenido y código VTL",
      "*Por qué no otros**:",
      "**A**: El almacenamiento en caché mejora el rendimiento, no transforma los datos",
      "**C**: Agrega otra invocación Lambda (mayor costo, latencia)",
      "**D**: El control de versiones de API no transforma las respuestas",
      "*Consejo de examen**: \"Compatibilidad con versiones anteriores\" + \"transformación de respuesta\" + \"API Gateway\" = Plantillas de mapeo"
    ],
    "others": []
  },
  {
    "id": "ia-13",
    "module": "Complex Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Su empresa utiliza grupos de Auto Scaling para implementar servidores web en varias zonas de disponibilidad. Después de actualizar a una nueva AMI, desea asegurarse de que las instancias lanzadas con AMI antiguas finalicen primero durante los eventos de escalamiento horizontal.\r\n\r\n¿Qué política de terminación de Auto Scaling debería configurar?",
    "options": {
      "A": "Instancia más antigua",
      "B": "Configuración de lanzamiento más antigua",
      "C": "Plantilla de lanzamiento más antigua",
      "D": "Por defecto"
    },
    "explanation": "• La política de terminación `OldestLaunchTemplate` en Auto Scaling garantiza que, durante los eventos de reducción de capacidad (scale-in), se terminen primero las instancias que fueron lanzadas con versiones antiguas del Launch Template.",
    "why": [
      "La política OldestLaunchTemplate asegura que las instancias con plantillas de lanzamiento antiguas se den de baja primero durante el scale-in."
    ],
    "others": []
  },
  {
    "id": "ia-14",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Está implementando instancias EC2 en varias regiones mediante CloudFormation. Cada región requiere una ID de AMI diferente para el mismo sistema operativo (Amazon Linux 2). En lugar de codificar los ID de AMI para cada región, desea buscar dinámicamente la AMI más reciente durante la creación de la pila.\r\n\r\n¿Cuál es el mejor enfoque?",
    "options": {
      "A": "Utilice asignaciones de CloudFormation con ID de AMI para cada región",
      "B": "Utilice un recurso personalizado respaldado por Lambda para consultar los ID de AMI",
      "C": "Utilice los parámetros de CloudFormation e ingrese manualmente los ID de AMI",
      "D": "Utilice el almacén de parámetros de Systems Manager con parámetros regionales"
    },
    "explanation": "• Un Custom Resource de CloudFormation respaldado por una función AWS Lambda permite consultar dinámicamente la API de EC2 (`DescribeImages`) al momento de crear la pila para obtener el ID de la AMI más reciente en cada región.",
    "why": [
      "Un recurso personalizado (Custom Resource) respaldado por AWS Lambda permite buscar dinámicamente el ID de la última AMI por región."
    ],
    "others": []
  },
  {
    "id": "ia-15",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Tiene una plantilla de CloudFormation que implementa instancias EC2 en varias regiones. Cada región requiere una ID de AMI específica para Ubuntu 20.04. ¿Cómo se almacenan y recuperan ID de AMI específicos de una región en CloudFormation?",
    "options": {
      "A": "Utilice parámetros de CloudFormation con valores predeterminados",
      "B": "Utilice asignaciones de CloudFormation con claves basadas en regiones",
      "C": "Utilice salidas de CloudFormation para exportar ID de AMI",
      "D": "Utilice las condiciones de CloudFormation para seleccionar ID de AMI"
    },
    "explanation": "**Asignaciones de CloudFormation**:\r\n\r\n```yaml\r\nMapeos:\r\n  RegiónAAMI:\r\n    us-east-1:\r\n      AMI: ami-0abcdef1234567890\r\n    us-west-2:\r\n      AMI: ami-0123456789abcdef0\r\n    eu-west-1:\r\n      IAM: ami-0fedcba9876543210\r\n```\r\n\r\n**Uso en Plantilla**:\r\n```yaml\r\nRecursos:\r\n  Mi instancia EC2:\r\n    Tipo: AWS::EC2::Instancia\r\n    Propiedades:\r\n      ImageId: !FindInMap [RegiónAAMI, !Ref \"AWS::Región\", AMI]\r\n      Tipo de instancia: t3.micro\r\n```\r\n\r\n**Fn::Sintaxis de FindInMap**:\r\n```\r\n!FindInMap [Nombre del mapa, clave de nivel superior, clave de segundo nivel]\r\n```\r\n\r\n**Por qué asignaciones**:\r\n- ✅ Valores estáticos y específicos de la región\r\n- ✅ Fácil de mantener\r\n- ✅ Función CloudFormation incorporada\r\n- ✅ Sin dependencias externas\r\n\r\n**Comparación**:\r\n\r\n| Método | Caso de uso | Ejemplo |\r\n|--------|----------|---------|\r\n| **Parámetros** | Entrada del usuario en tiempo de ejecución | Medio ambiente (desarrollo/producción) |\r\n| **Asignaciones** | Búsquedas estáticas (región, entorno) | ID de AMI por región |\r\n| **Salidas** | Compartir valores entre pilas | Exportar ID de VPC |\r\n| **Condiciones** | Controlar la creación de recursos | Crear recurso si prod |\r\n\r\n**Consejo de examen**: \"Valores específicos de la región\" + \"CloudFormation\" = Asignaciones",
    "why": [
      "*Asignaciones de CloudFormation**:",
      "```yaml",
      "Mapeos:",
      "RegiónAAMI:",
      "us-east-1:",
      "AMI: ami-0abcdef1234567890",
      "us-west-2:",
      "AMI: ami-0123456789abcdef0",
      "eu-west-1:",
      "IAM: ami-0fedcba9876543210",
      "```",
      "*Uso en Plantilla**:",
      "```yaml",
      "Recursos:",
      "Mi instancia EC2:",
      "Tipo: AWS::EC2::Instancia",
      "Propiedades:",
      "ImageId: !FindInMap [RegiónAAMI, !Ref \"AWS::Región\", AMI]",
      "Tipo de instancia: t3.micro",
      "```",
      "*Fn::FindInMap Sintaxis**:",
      "```",
      "!FindInMap [Nombre del mapa, clave de nivel superior, clave de segundo nivel]",
      "```",
      "*Por qué asignaciones**:",
      "✅ Valores estáticos y específicos de la región",
      "✅ Fácil de mantener",
      "✅ Función CloudFormation incorporada",
      "✅ Sin dependencias externas",
      "*Comparación**:",
      "| Método | Caso de uso | Ejemplo |",
      "|--------|----------|---------|",
      "| **Parámetros** | Entrada del usuario en tiempo de ejecución | Medio ambiente (desarrollo/producción) |",
      "| **Asignaciones** | Búsquedas estáticas (región, entorno) | ID de AMI por región |",
      "| **Salidas** | Compartir valores entre pilas | Exportar ID de VPC |",
      "| **Condiciones** | Controlar la creación de recursos | Crear recurso si prod |",
      "*Consejo de examen**: \"Valores específicos de la región\" + \"CloudFormation\" = Asignaciones"
    ],
    "others": []
  },
  {
    "id": "ia-16",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa de análisis de datos utiliza Amazon Redshift para consultas de almacenes de datos a gran escala. Están experimentando problemas de rendimiento debido al alto ancho de banda de la red y al uso de CPU en los nodos de computación, especialmente para escaneos de tablas grandes. La empresa quiere mejorar el rendimiento de las consultas sin aumentar significativamente los costos de infraestructura.\r\n\r\n¿Cuál es la solución más eficaz?",
    "options": {
      "A": "Aumentar la cantidad de nodos de computación en el clúster de Redshift",
      "B": "Habilite Amazon Redshift AQUA (acelerador de consultas avanzado)",
      "C": "Utilice Redshift Spectrum para descargar consultas a S3",
      "D": "Cree vistas materializadas para datos a los que se accede con frecuencia"
    },
    "explanation": "• Amazon Redshift AQUA (Advanced Query Accelerator) es una caché distribuida y acelerada por hardware para nodos RA3 que procesa el filtrado y la agregación en la capa de almacenamiento, acelerando los escaneos grandes hasta 10 veces sin encarecer el clúster.",
    "why": [
      "Amazon Redshift AQUA acelera las consultas de grandes escaneos de tablas procesando filtros directamente en la capa de almacenamiento."
    ],
    "others": []
  },
  {
    "id": "ia-17",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa planea migrar 500 máquinas virtuales VMware desde su centro de datos local a AWS. Necesitan recopilar métricas de utilización de CPU, memoria, disco y red para ajustar el tamaño de las instancias EC2. Las máquinas virtuales ejecutan varios sistemas operativos (Windows, Linux, aplicaciones personalizadas). ¿Cuál es el enfoque más eficiente?",
    "options": {
      "A": "Instale AWS Discovery Agent en cada VM",
      "B": "Implemente el recopilador sin agente (OVA) de AWS Application Discovery Service en VMware",
      "C": "Utilice AWS Migration Hub sin descubrimiento",
      "D": "Especificaciones del servidor de documentos manualmente"
    },
    "explanation": "• El recopilador sin agente (Agentless Collector OVA) de AWS Application Discovery Service se despliega como un único appliance virtual en VMware vCenter y recopila métricas de CPU, RAM, disco y red de las 500 VMs sin instalar agentes individuales.",
    "why": [
      "El Agentless Collector (OVA) de AWS Application Discovery Service se integra con VMware vCenter para recolectar métricas sin instalar agentes en cada VM."
    ],
    "others": []
  },
  {
    "id": "ia-18",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa tiene un sistema de archivos EFS en eu-west-1 (VPC A) al que deben acceder:\r\n1. Instancias EC2 en us-east-1 (VPC B)\r\n2. Servidores locales conectados a us-east-1 a través de AWS Direct Connect\r\n\r\nLa solución debe evitar la exposición a Internet y minimizar la latencia. ¿Qué arquitectura deberías implementar?",
    "options": {
      "A": "Configurar el emparejamiento de VPC entre VPC A y VPC B, configurar el enrutamiento",
      "B": "Utilice AWS PrivateLink para conectar VPC y locales",
      "C": "Configure el emparejamiento de VPC entre regiones entre la VPC A y la VPC B, use Direct Connect a la VPC B",
      "D": "Copie los datos de EFS a S3 y acceda a través de S3 Transfer Acceleration"
    },
    "explanation": "• Para acceder a un sistema de archivos EFS en `eu-west-1` desde EC2 en `us-east-1` y desde servidores on-premises conectados a `us-east-1`, se establece Inter-Region VPC Peering entre ambas VPCs y se enruta el tráfico de Direct Connect a través de la VPC B.",
    "why": [
      "El emparejamiento de VPC entre regiones (Inter-Region VPC Peering) combinado con Direct Connect permite montar EFS de forma privada y con baja latencia."
    ],
    "others": []
  },
  {
    "id": "ia-19",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un sitio web de comercio electrónico debe mostrar recomendaciones de productos personalizadas en tiempo real según el comportamiento del usuario. El motor de recomendación debe manejar millones de operaciones de lectura/escritura por segundo con una latencia inferior a milisegundos. ¿Qué servicio de base de datos debería utilizar?",
    "options": {
      "A": "Amazon RDS con réplicas de lectura",
      "B": "Amazon DynamoDB con DAX",
      "C": "Amazon ElastiCache para Redis",
      "D": "Amazon Aurora sin servidor"
    },
    "explanation": "• Amazon ElastiCache for Redis es un almacén de datos en memoria que ofrece latencia de sub-milisegundos (< 1 ms) y soporta millones de operaciones por segundo con estructuras de datos ideales para motores de recomendación en tiempo real.",
    "why": [
      "Amazon ElastiCache for Redis ofrece latencia de sub-milisegundos y alto rendimiento en memoria para recomendaciones en tiempo real."
    ],
    "others": []
  },
  {
    "id": "ia-20",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una organización de conservación de la vida silvestre tiene 10.000 imágenes de cámaras trampa almacenadas en S3 que contienen varias especies de animales. Quieren identificar automáticamente especies específicas en peligro de extinción sin crear un modelo de aprendizaje automático desde cero. ¿Cuál es la solución más eficiente?",
    "options": {
      "A": "Utilice la API general de detección de objetos de Amazon Rekognition",
      "B": "Utilice etiquetas personalizadas de Amazon Rekognition para entrenar un modelo personalizado",
      "C": "Utilice Amazon SageMaker para crear un modelo de aprendizaje profundo",
      "D": "Utilice AWS Lambda con OpenCV para el procesamiento de imágenes"
    },
    "explanation": "• Amazon Rekognition Custom Labels permite entrenar un modelo personalizado de visión artificial a partir de imágenes etiquetadas en S3 para identificar objetos específicos (como especies en peligro de extinción) sin construir modelos de ML desde cero.",
    "why": [
      "Amazon Rekognition Custom Labels entrena clasificadores visuales específicos con pocas imágenes sin requerir experiencia en deep learning."
    ],
    "others": []
  },
  {
    "id": "ia-21",
    "module": "Complex Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Su equipo de seguridad desea evitar que todas las cuentas de miembros de su organización de AWS creen puertas de enlace de Internet o las vinculen a VPC y, al mismo tiempo, permitir que las puertas de enlace de Internet existentes sigan funcionando. ¿Cómo deberías implementar esto?",
    "options": {
      "A": "Cree un SCP que niegue `ec2:CreateInternetGateway` y `ec2:AttachInternetGateway` para todas las cuentas",
      "B": "Cree un SCP que niegue `ec2:CreateInternetGateway` y `ec2:AttachInternetGateway` para todas las cuentas, incluida la cuenta de administración.",
      "C": "Cree una política de IAM en cada cuenta de miembro negando estas acciones",
      "D": "Utilice reglas de AWS Config para detectar y eliminar puertas de enlace de Internet recién creadas"
    },
    "explanation": "• Una Service Control Policy (SCP) que deniegue las acciones `ec2:CreateInternetGateway` y `ec2:AttachInternetGateway` impide de forma preventiva que las cuentas miembro creen o adjunten nuevos Internet Gateways sin afectar los existentes (las SCPs no afectan a la cuenta de administración).",
    "why": [
      "Una SCP que deniega ec2:CreateInternetGateway y ec2:AttachInternetGateway bloquea nuevos IGWs en las cuentas miembro manteniendo operativos los actuales."
    ],
    "others": []
  },
  {
    "id": "ia-22",
    "module": "Complex Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una aplicación financiera se ejecuta en una instancia EC2 con 64 GB de memoria. La aplicación carga un gran conjunto de datos en la memoria al inicio, lo que demora 20 minutos. Durante las ventanas de mantenimiento, la instancia debe detenerse temporalmente y reiniciarse rápidamente. ¿Qué característica debería utilizar para minimizar el tiempo de inicio?",
    "options": {
      "A": "Cree una AMI de la instancia y ejecútela desde ella.",
      "B": "Usar parada/inicio EC2",
      "C": "Habilitar la hibernación EC2",
      "D": "Utilice una AMI respaldada por el almacén de instancias EC2"
    },
    "explanation": "• EC2 Hibernation guarda el contenido de los 64 GB de memoria RAM en el volumen raíz EBS cifrado cuando la instancia se detiene, permitiendo que al reanudarse recupere su estado en memoria en segundos sin esperar 20 minutos de carga.",
    "why": [
      "EC2 Hibernation vuelca la memoria RAM al volumen raíz EBS cifrado para reanudar rápidamente aplicaciones con grandes conjuntos de datos en memoria."
    ],
    "others": []
  },
  {
    "id": "ia-23",
    "module": "Complex Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa tiene una conexión VPN de sitio a sitio entre su centro de datos local y AWS. El rendimiento de la VPN está limitado a 1,25 Gbps, pero necesitan transferir grandes conjuntos de datos que requieren un ancho de banda de 5 Gbps. ¿Cómo pueden aumentar el rendimiento de la VPN de forma costo-efectivo?",
    "options": {
      "A": "Actualice a AWS Direct Connect (10 Gbps)",
      "B": "Cree múltiples conexiones VPN y use Transit Gateway con ECMP habilitado",
      "C": "Cree múltiples conexiones VPN a Virtual Private Gateway",
      "D": "Utilice la compresión de la conexión VPN para aumentar el rendimiento"
    },
    "explanation": "**AWS Transit Gateway + ECMP**:\r\n- **ECMP** = Enrutamiento de rutas múltiples de igual costo\r\n- Distribuye el tráfico a través de múltiples túneles VPN\r\n- Rendimiento agregado = Suma de todos los túneles\r\n\r\n**Arquitectura**:\r\n```\r\nLocal --[VPN1 (1,25 Gbps)]--\\\r\n             --[VPN2 (1,25 Gbps)]----> Transit Gateway --[ECMP habilitado]--> VPC A\r\n             --[VPN3 (1,25 Gbps)]--/ \\-> VPC B\r\n             --[VPN4 (1,25 Gbps)]--/\r\n                                        \r\nRendimiento total: 5 Gbps (4 x 1,25)\r\n```\r\n\r\n**Configuración**:\r\n1. Crear AWS Transit Gateway\r\n2. Cree múltiples conexiones VPN de sitio a sitio (cada una tiene 2 túneles)\r\n3. Habilite el enrutamiento dinámico (BGP)\r\n4. Configure Transit Gateway para usar ECMP\r\n\r\n**Por qué funciona ECMP**:\r\n- Múltiples rutas de igual costo al mismo destino\r\n- BGP anuncia las mismas rutas a través de múltiples VPN\r\n- Transit Gateway equilibra la carga del tráfico\r\n\r\n**Por qué no otros**:\r\n- **A (Conexión Directa)**: Más caro; requiere instalación física\r\n- **C (VGW)**: La puerta de enlace privada virtual NO es compatible con ECMP\r\n- **D**: la compresión VPN no supera los límites del túnel\r\n\r\n**Punto clave**: ECMP requiere **Transit Gateway** (VGW no lo admite)\r\n\r\n**Consejo de examen**: \"Aumentar el rendimiento de VPN\" + \"costo-efectivo\" = Múltiples VPN + Transit Gateway + ECMP",
    "why": [
      "*AWS Transit Gateway + ECMP**:",
      "**ECMP** = Enrutamiento de rutas múltiples de igual costo",
      "Distribuye el tráfico a través de múltiples túneles VPN",
      "Rendimiento agregado = Suma de todos los túneles",
      "*Arquitectura**:",
      "```",
      "Local --[VPN1 (1,25 Gbps)]--\\",
      "--[VPN2 (1,25 Gbps)]----> Transit Gateway --[ECMP habilitado]--> VPC A",
      "--[VPN3 (1,25 Gbps)]--/ \\-> VPC B",
      "--[VPN4 (1,25 Gbps)]--/",
      "Rendimiento total: 5 Gbps (4 x 1,25)",
      "```",
      "*Configuración**:",
      "1. Crear AWS Transit Gateway",
      "2. Cree múltiples conexiones VPN de sitio a sitio (cada una tiene 2 túneles)",
      "3. Habilite el enrutamiento dinámico (BGP)",
      "4. Configure Transit Gateway para usar ECMP",
      "*Por qué funciona ECMP**:",
      "Múltiples rutas de igual costo hacia el mismo destino",
      "BGP anuncia las mismas rutas a través de múltiples VPN",
      "Transit Gateway equilibra la carga del tráfico",
      "*Por qué no otros**:",
      "**A (Conexión directa)**: Más caro; requiere instalación física",
      "**C (VGW)**: La puerta de enlace privada virtual NO es compatible con ECMP",
      "**D**: La compresión VPN no supera los límites del túnel",
      "*Punto clave**: ECMP requiere **Transit Gateway** (VGW no lo admite)",
      "*Consejo de examen**: \"Aumentar el rendimiento de VPN\" + \"costo-efectivo\" = Múltiples VPN + Transit Gateway + ECMP"
    ],
    "others": []
  },
  {
    "id": "ia-24",
    "module": "Complex Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Su empresa tiene instancias EC2 en tres zonas de disponibilidad en us-east-1 que necesitan acceso a Internet. Actualmente, todas las instancias utilizan una única puerta de enlace NAT en us-east-1a. Observa altos costos de transferencia de datos en su factura de AWS. ¿Cómo se pueden reducir costos?",
    "options": {
      "A": "Reemplace la puerta de enlace NAT con una instancia NAT",
      "B": "Utilice Internet Gateway directamente",
      "C": "Implemente una puerta de enlace NAT pública por AZ donde tenga instancias",
      "D": "Utilice una única puerta de enlace NAT pero en una AZ diferente"
    },
    "explanation": "• Enrutar tráfico desde tres Zonas de Disponibilidad hacia un único NAT Gateway en `us-east-1a` genera cargos por transferencia de datos entre zonas (Cross-AZ).\n• Desplegar un NAT Gateway público en cada AZ donde existan instancias elimina los costos de transferencia Cross-AZ y mejora la resiliencia.",
    "why": [
      "Implementar un NAT Gateway público en cada Zona de Disponibilidad elimina los cargos de transferencia de datos entre zonas (Cross-AZ)."
    ],
    "others": []
  },
  {
    "id": "ia-25",
    "module": "Complex Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa global de SaaS almacena datos de clientes cifrados en depósitos S3 en varias regiones (us-east-1, eu-west-1, ap-southeast-1). Actualmente, utilizan claves KMS independientes en cada región, lo que provoca una alta latencia al acceder a datos de otras regiones. ¿Cómo pueden reducir la latencia manteniendo el cifrado?",
    "options": {
      "A": "Utilice una única clave KMS en us-east-1 para todas las regiones",
      "B": "Cree claves KMS multirregionales y replíquelas en todas las regiones",
      "C": "Deshabilite el cifrado para eliminar la latencia",
      "D": "Utilice AWS Secrets Manager en lugar de KMS"
    },
    "explanation": "**Claves KMS multirregión**:\r\n- **Clave principal** en una región\r\n- **Claves de réplica** en otras regiones\r\n- Mismo material clave en todas las regiones.\r\n- Políticas clave gestionables de forma independiente\r\n\r\n**Cómo funciona**:\r\n```\r\nClave principal (us-east-1): mrk-123abc...\r\nClave de réplica (eu-west-1): mrk-123abc... (mismo prefijo de ID de clave)\r\nClave de réplica (ap-southeast-1): mrk-123abc... (mismo prefijo de ID de clave)\r\n```\r\n\r\n**Cifrado en us-east-1**:\r\n```pitón\r\nkms.encriptar(\r\n    KeyId='mrk-123abc...', # Utiliza clave local\r\n    Texto plano=b'datos del cliente'\r\n)\r\n```\r\n\r\n**Descifrado en eu-west-1**:\r\n```pitón\r\nkms.decrypt(\r\n    CiphertextBlob=encrypted_data # Utiliza automáticamente la réplica local\r\n)\r\n```\r\n\r\n**Beneficios**:\r\n- ✅ Cifrado/descifrado de baja latencia (llamadas API locales)\r\n- ✅ Los datos cifrados en una región se pueden descifrar en otra\r\n- ✅ Recuperación ante desastres (conmutación por error automática)\r\n- ✅ Cumplimiento (se mantiene la residencia de los datos)\r\n\r\n**Casos de uso**:\r\n- Aplicaciones globales\r\n- Bases de datos multirregionales (DynamoDB Global Tables, Aurora Global Database)\r\n- Recuperación ante desastres\r\n- Migración de datos entre regiones.\r\n\r\n**Por qué no otros**:\r\n- **A**: las llamadas KMS entre regiones agregan latencia (~100-300 ms)\r\n- **C**: viola los requisitos de seguridad.\r\n- **D**: Secrets Manager usa KMS internamente; no resuelve el problema\r\n\r\n**Palabra clave del examen**: \"Global\" + \"cifrado\" + \"latencia\" = CMK multiregión",
    "why": [
      "*Claves KMS multiregión**:",
      "**Clave principal** en una región",
      "**Claves de réplica** en otras regiones",
      "El mismo material clave en todas las regiones",
      "Políticas clave gestionables de forma independiente",
      "*Cómo funciona**:",
      "```",
      "Clave principal (us-east-1): mrk-123abc...",
      "Clave de réplica (eu-west-1): mrk-123abc... (mismo prefijo de ID de clave)",
      "Clave de réplica (ap-southeast-1): mrk-123abc... (mismo prefijo de ID de clave)",
      "```",
      "*Cifrado en us-east-1**:",
      "```pitón",
      "kms.encriptar(",
      "KeyId='mrk-123abc...', # Utiliza clave local",
      "Texto plano=b'datos del cliente'",
      ")",
      "```",
      "*Descifrado en eu-west-1**:",
      "```pitón",
      "kms.decrypt(",
      "CiphertextBlob=encrypted_data # Utiliza automáticamente la réplica local",
      ")",
      "```",
      "*Beneficios**:",
      "✅ Cifrado/descifrado de baja latencia (llamadas API locales)",
      "✅ Los datos cifrados en una región se pueden descifrar en otra",
      "✅ Recuperación ante desastres (conmutación por error automática)",
      "✅ Cumplimiento (residencia de datos mantenida)",
      "*Casos de uso**:",
      "Aplicaciones globales",
      "Bases de datos multirregionales (DynamoDB Global Tables, Aurora Global Database)",
      "Recuperación ante desastres",
      "Migración de datos entre regiones",
      "*Por qué no otros**:",
      "**A**: Las llamadas KMS entre regiones añaden latencia (~100-300 ms)",
      "**C**: Viola los requisitos de seguridad",
      "**D**: Secrets Manager usa KMS internamente; no resuelve el problema",
      "*Palabra clave del examen**: \"Global\" + \"cifrado\" + \"latencia\" = CMK multirregional"
    ],
    "others": []
  },
  {
    "id": "ia-26",
    "module": "Complex Scenarios",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Su equipo de cumplimiento debe consultar 5 años de registros de actividad de la API de AWS en 50 cuentas de AWS y 10 regiones para obtener informes de auditoría. Necesitan ejecutar consultas complejas como \"Mostrar todos los cambios en la política de IAM realizados por el usuario X en los últimos 3 años\". ¿Cuál es la solución más eficiente?",
    "options": {
      "A": "Almacene los registros de CloudTrail en S3 y utilice Amazon Athena para realizar consultas",
      "B": "Utilice el historial de eventos de CloudTrail (retención de 90 días)",
      "C": "Habilite CloudTrail Lake y ejecute consultas SQL",
      "D": "Exportar registros a CloudWatch Logs Insights"
    },
    "explanation": "**Lago CloudTrail**:\r\n- **Lago de datos administrado** para eventos de CloudTrail\r\n- **Consultas basadas en SQL** (no solo búsqueda de registros)\r\n- **Retención a largo plazo** (hasta 7 años)\r\n- **Agregación multicuenta y multiregión**\r\n- **Sin servidor** (sin infraestructura que administrar)\r\n\r\n**Consulta de ejemplo**:\r\n```sql\r\nSELECT\r\n  userIdentity.principalId,\r\n  eventName,\r\n  eventTime,\r\n  sourceIPAddress\r\nFROM\r\n  cloudtrail_events\r\nWHERE\r\n  eventName IN ('PutUserPolicy', 'PutRolePolicy', 'AttachUserPolicy')\r\n  AND eventTime >= '2023-01-01'\r\n  AND eventTime <= '2025-12-31'\r\n  AND userIdentity.principalId LIKE '%user-x%'\r\nORDER BY\r\n  eventTime DESC\r\n```\r\n\r\n**Cómo utilizar**:\r\n1. Cree un almacén de datos de eventos en CloudTrail Lake\r\n2. Especificar período de retención (7 años)\r\n3. Ejecute consultas SQL en la consola o mediante API\r\n4. Exportar resultados a CSV/JSON\r\n\r\n**Precio**:\r\n- **Ingestión**: $2,50 por GB\r\n- **Almacenamiento**: $0,023 por GB/mes\r\n- **Consultas**: $0,005 por GB escaneado\r\n\r\n**frente a T3 + Atenas**:\r\n\r\n| Característica | CloudTrail Lake | S3 + Athena |\r\n|---------|----------------|-------------|\r\n| Configuración | Sencillo (gestionado) | Complejo (S3, Glue, Athena) |\r\n| Consultas | SQL incorporado | Athena SQL |\r\n| Costo | Mayor ingestión | Menor almacenamiento, pago por consulta |\r\n| Cuenta múltiple | Nativo | Agregación manual |\r\n\r\n**Mejor para**: Cumplimiento, informes de auditoría, análisis de seguridad\r\n\r\n**Escenario de examen**: \"Consultas complejas\" + \"cuentas múltiples\" + \"largo plazo\" = CloudTrail Lake",
    "why": [
      "*Lago CloudTrail**:",
      "**Lago de datos administrado** para eventos de CloudTrail",
      "**Consultas basadas en SQL** (no solo búsqueda de registros)",
      "**Retención a largo plazo** (hasta 7 años)",
      "**Agregación de múltiples cuentas y múltiples regiones**",
      "**Sin servidor** (sin infraestructura que administrar)",
      "*Consulta de ejemplo**:",
      "```sql",
      "SELECCIONAR",
      "identidaddeusuario.principalId,",
      "nombre del evento,",
      "hora del evento,",
      "fuenteIPDirección",
      "DE",
      "eventos_cloudtrail",
      "DÓNDE",
      "eventName IN ('PutUserPolicy', 'PutRolePolicy', 'AttachUserPolicy')",
      "Y hora del evento >= '2023-01-01'",
      "Y hora del evento <= '2025-12-31'",
      "Y userIdentity.principalId COMO '%user-x%'",
      "ORDENAR POR",
      "eventoHora DESC",
      "```",
      "*Cómo utilizar**:",
      "1. Cree un almacén de datos de eventos en CloudTrail Lake",
      "2. Especificar período de retención (7 años)",
      "3. Ejecute consultas SQL en la consola o mediante API",
      "4. Exportar resultados a CSV/JSON",
      "*Precio**:",
      "**Ingestión**: $2,50 por GB",
      "**Almacenamiento**: $0,023 por GB/mes",
      "**Consultas**: $0.005 por GB escaneado",
      "**frente a S3 + Athena**:",
      "| Característica | CloudTrail Lake | S3 + Athena |",
      "|---------|----------------|-------------|",
      "| Configuración | Sencillo (gestionado) | Complejo (S3, Glue, Athena) |",
      "| Consultas | SQL incorporado | Athena SQL |",
      "| Costo | Mayor ingestión | Menor almacenamiento, pago por consulta |",
      "| Cuenta múltiple | Nativo | Agregación manual |",
      "*Mejor para**: Cumplimiento, informes de auditoría, análisis de seguridad",
      "*Escenario de examen**: \"Consultas complejas\" + \"cuentas múltiples\" + \"largo plazo\" = CloudTrail Lake"
    ],
    "others": []
  },
  {
    "id": "ia-27",
    "module": "Complex Scenarios",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Su solicitud debe:\r\n1. Cifre los datos almacenados en S3 utilizando los servicios de AWS\r\n2. Firmar digitalmente paquetes de software para su distribución.\r\n3. Nunca exponga claves de cifrado fuera de AWS\r\n\r\n¿Qué tipos de claves KMS debería utilizar?",
    "options": {
      "A": "Claves simétricas para ambos casos de uso.",
      "B": "Claves asimétricas para ambos casos de uso",
      "C": "Clave simétrica para cifrado S3, clave asimétrica para firma digital",
      "D": "Clave asimétrica para cifrado S3, clave simétrica para firma digital"
    },
    "explanation": "**Claves simétricas** (AES de 256 bits):\r\n- Misma clave para cifrado y descifrado.\r\n- **Nunca deja AWS KMS** sin cifrar\r\n- Integrado con servicios de AWS (S3, EBS, RDS, DynamoDB)\r\n- Rendimiento más rápido\r\n\r\n**Casos de uso**:\r\n- ✅ Cifrado de datos en reposo (S3, EBS)\r\n- ✅ Cifrado de bases de datos (RDS, DynamoDB)\r\n- ✅ Administrador de secretos, almacén de parámetros\r\n\r\n**Operaciones API**:\r\n```pitón\r\n# Cifrar\r\nrespuesta = kms.encrypt(\r\n    KeyId='alias/mi-clave-simétrica',\r\n    Texto sin formato = b'datos confidenciales'\r\n)\r\n\r\n# Descifrar\r\nrespuesta = kms.decrypt(\r\n    CiphertextBlob=datos_cifrados\r\n)\r\n```\r\n\r\n**Claves asimétricas** (RSA o ECC):\r\n- Clave pública (se puede exportar) + Clave privada (permanece en KMS)\r\n- Diferentes operaciones: Cifrar/descifrar, Firmar/verificar\r\n\r\n**Casos de uso**:\r\n- ✅ Firmas digitales (firma de código, tokens JWT)\r\n- ✅ Cifrado de clave pública (cifrado sin conexión)\r\n- ✅ Generación de certificados TLS\r\n\r\n**Operaciones API**:\r\n```pitón\r\n# firmar\r\nrespuesta = kms.signo(\r\n    KeyId='alias/mi-clave-asimétrica',\r\n    Mensaje=b'hash del paquete de software',\r\n    Algoritmo de firma = 'RSASSA_PSS_SHA_256'\r\n)\r\n\r\n# Obtener clave pública (para verificación)\r\nrespuesta = kms.get_public_key(\r\n    KeyId='alias/mi-clave-asimétrica'\r\n)\r\n# La clave pública se puede distribuir para verificar firmas.\r\n```\r\n\r\n**Árbol de decisión rápida**:\r\n- ¿Necesita cifrar/descifrar en AWS? → **Simétrico**\r\n- ¿Necesita firmar/verificar? → **Asimétrico**\r\n- ¿Necesita distribución de clave pública? → **Asimétrico**\r\n\r\n**Trampa del examen**: Las firmas digitales SIEMPRE requieren claves asimétricas",
    "why": [
      "*Claves simétricas** (AES de 256 bits):",
      "Misma clave para cifrado y descifrado",
      "**Nunca deja AWS KMS** sin cifrar",
      "Integrado con servicios de AWS (S3, EBS, RDS, DynamoDB)",
      "Rendimiento más rápido",
      "*Casos de uso**:",
      "✅ Cifrado de datos en reposo (S3, EBS)",
      "✅ Cifrado de bases de datos (RDS, DynamoDB)",
      "✅ Administrador de secretos, almacén de parámetros",
      "*Operaciones API**:",
      "```pitón",
      "# Cifrar",
      "respuesta = kms.encrypt(",
      "KeyId='alias/mi-clave-simétrica',",
      "Texto sin formato = b'datos confidenciales'",
      ")",
      "# Descifrar",
      "respuesta = kms.decrypt(",
      "CiphertextBlob=datos_cifrados",
      ")",
      "```",
      "*Claves asimétricas** (RSA o ECC):",
      "Clave pública (se puede exportar) + Clave privada (permanece en KMS)",
      "Diferentes operaciones: Cifrar/descifrar, Firmar/verificar",
      "*Casos de uso**:",
      "✅ Firmas digitales (firma de código, tokens JWT)",
      "✅ Cifrado de clave pública (cifrado sin conexión)",
      "✅ Generación de certificados TLS",
      "*Operaciones API**:",
      "```pitón",
      "# Firmar",
      "respuesta = kms.signo(",
      "KeyId='alias/mi-clave-asimétrica',",
      "Mensaje=b'hash del paquete de software',",
      "Algoritmo de firma = 'RSASSA_PSS_SHA_256'",
      ")",
      "# Obtener clave pública (para verificación)",
      "respuesta = kms.get_public_key(",
      "KeyId='alias/mi-clave-asimétrica'",
      ")",
      "# La clave pública se puede distribuir para verificar firmas.",
      "```",
      "*Árbol de decisión rápida**:",
      "¿Necesita cifrar/descifrar en AWS? → **Simétrico**",
      "¿Necesita firmar/verificar? → **Asimétrico**",
      "¿Necesita distribución de clave pública? → **Asimétrico**",
      "*Trampa del examen**: Las firmas digitales SIEMPRE requieren claves asimétricas"
    ],
    "others": []
  },
  {
    "id": "ia-28",
    "module": "Complex Scenarios",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Su empresa tiene 20 cuentas de AWS en una organización de AWS. Cada cuenta ha aprovisionado su propia VPC, subredes y archivos adjuntos de Transit Gateway para conectarse a la red corporativa. Esta duplicación está provocando altos costos y gastos generales de gestión. ¿Cómo se pueden reducir costes y centralizar la gestión de recursos?",
    "options": {
      "A": "Utilice el emparejamiento de VPC entre todas las cuentas",
      "B": "Cree recursos en una cuenta y compártalos mediante AWS Resource Access Manager (RAM)",
      "C": "Utilice únicamente la facturación consolidada de AWS Organizations",
      "D": "Fusionar todas las cuentas en una"
    },
    "explanation": "• AWS Resource Access Manager (RAM) permite compartir subredes de VPC y adjuntos de Transit Gateway entre las cuentas de una organización en AWS Organizations, eliminando la duplicación de recursos y reduciendo costos.",
    "why": [
      "AWS Resource Access Manager (RAM) permite compartir subredes y recursos de red centralizados entre cuentas sin duplicar infraestructura."
    ],
    "others": []
  },
  {
    "id": "ia-29",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Tiene instancias EC2 en subredes privadas en tres zonas de disponibilidad en us-east-1. Cada AZ tiene aproximadamente 500 GB de tráfico de Internet saliente por mes. Actualmente, todas las instancias utilizan una única puerta de enlace NAT en us-east-1a. Su factura de AWS muestra altos cargos por transferencia de datos entre zonas de AZ. ¿Cómo se deben optimizar los costos?",
    "options": {
      "A": "Utilice instancias NAT en lugar de puertas de enlace NAT",
      "B": "Implementar una puerta de enlace NAT pública en cada AZ",
      "C": "Utilice una única puerta de enlace NAT pero habilite la compresión",
      "D": "Configurar instancias para usar una puerta de enlace de Internet directamente"
    },
    "explanation": "• Cuando instancias privadas en tres AZs salen a internet por un único NAT Gateway en `us-east-1a`, se facturan cargos de transferencia de datos Cross-AZ por los 500 GB/mes de las otras dos zonas.\n• Desplegar un NAT Gateway público en cada AZ mantiene el tráfico dentro de la misma zona, eliminando ese sobrecosto.",
    "why": [
      "Desplegar un NAT Gateway público en cada AZ evita que el tráfico cruce fronteras de Zona de Disponibilidad, eliminando los cargos Cross-AZ."
    ],
    "others": []
  },
  {
    "id": "ia-30",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Su organización de AWS tiene 15 cuentas de miembros, cada una de las cuales aprovisiona puertas de enlace NAT de forma independiente. El director financiero quiere ver un informe consolidado que muestre los costos de NAT Gateway por cuenta, entorno (producción/desarrollo) y departamento. ¿Cómo deberías configurar esto?",
    "options": {
      "A": "Las cuentas de miembros etiquetan sus puertas de enlace NAT; La cuenta de administración activa etiquetas y vistas de asignación de costos en Cost Explorer",
      "B": "La cuenta de administración etiqueta todas las puertas de enlace NAT en las cuentas de los miembros",
      "C": "Cada cuenta de miembro ve sus propios costos en su consola de facturación",
      "D": "Utilice AWS Budgets para realizar un seguimiento de los costos por cuenta"
    },
    "explanation": "• En AWS Organizations, las cuentas miembro etiquetan sus NAT Gateways (ej. `Environment`, `Department`) y la cuenta de administración activa esas etiquetas como Cost Allocation Tags en la consola de facturación para visualizarlas consolidadas en AWS Cost Explorer.",
    "why": [
      "Las cuentas miembro aplican etiquetas a sus recursos y la cuenta de administración activa las Cost Allocation Tags para analizarlas en Cost Explorer."
    ],
    "others": []
  },
  {
    "id": "ia-31",
    "module": "Complex Scenarios",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa planea migrar 100 servidores Windows y Linux locales a AWS. La migración debe automatizarse, tener un tiempo de inactividad mínimo y permitir pruebas en AWS antes de la transición final. ¿Qué servicio de AWS debería utilizar?",
    "options": {
      "A": "Servicio de migración de servidores de AWS (SMS)",
      "B": "Servicio de migración de aplicaciones de AWS",
      "C": "Servicio de migración de bases de datos de AWS (DMS)",
      "D": "Sincronización de datos de AWS"
    },
    "explanation": "• AWS Application Migration Service (AWS MGN) automatiza la migración lift-and-shift (rehost) de servidores físicos o virtuales Windows y Linux hacia AWS mediante replicación continua a nivel de bloque y pruebas no disruptivas previas al corte final.",
    "why": [
      "AWS Application Migration Service (MGN) realiza replicación continua a nivel de bloque y permite pruebas previas con tiempo de inactividad mínimo."
    ],
    "others": []
  },
  {
    "id": "sb-official-01",
    "module": "IAM",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": true,
    "answer": [
      "B",
      "D"
    ],
    "q": "El CIO de una empresa está preocupado por la seguridad del usuario root de su cuenta de AWS. ¿Cómo puede el CIO asegurarse de que la cuenta root cumpla con las mejores prácticas para un inicio de sesión seguro? (Seleccioná DOS)",
    "options": {
      "A": "Exigir el uso de Access Key ID y Secret Access Key para los inicios de sesión del usuario root.",
      "B": "Exigir el uso de autenticación multifactor (MFA) para los inicios de sesión del usuario root.",
      "C": "Exigir que el usuario root asuma un rol para acceder a sus propios recursos.",
      "D": "Exigir el uso de contraseñas complejas para los inicios de sesión del usuario root en las cuentas miembros.",
      "E": "Exigir la eliminación de la cuenta root para que no se pueda utilizar."
    },
    "explanation": "• Habilitar MFA en el usuario root agrega una segunda capa de defensa indispensable más allá de una contraseña.\n• Exigir contraseñas complejas para los inicios de sesión root de cuentas miembro previene ataques por fuerza bruta en AWS Organizations.\n• Las claves de acceso de root (Opción A) nunca deben crearse ni utilizarse; el acceso programático debe usar roles de IAM.\n• El usuario root no puede asumir un rol para acceder a recursos de su propia cuenta (Opción C).\n• La cuenta root no se puede ni se debe eliminar (Opción E), ya que es la propietaria de la cuenta y de todos sus recursos.",
    "why": [
      "Exigir MFA para los inicios de sesión del usuario root proporciona defensa en profundidad crítica contra accesos no autorizados.",
      "Exigir contraseñas complejas para usuarios root de cuentas miembro cumple con los estándares de seguridad de AWS Organizations y protección de identidad."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Las claves de acceso otorgan permisos administrativos completos e ilimitados que no se pueden restringir. La mejor práctica es eliminarlas, no exigirlas."
      },
      {
        "l": [
          "C"
        ],
        "t": "El usuario root no puede asumir un rol de IAM en su propia cuenta. Los roles son asumidos por entidades de IAM o accesos cruzados entre cuentas."
      },
      {
        "l": [
          "E"
        ],
        "t": "Eliminar la cuenta root eliminaría de forma permanente todos los recursos de AWS y daría de baja todo el entorno de la nube."
      }
    ]
  },
  {
    "id": "sb-official-02",
    "module": "Networking",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un arquitecto de soluciones está diseñando una aplicación web multinivel en una VPC. La Aplicación A (escuchando en el puerto HTTP 80) y la Aplicación B (escuchando en el puerto HTTPS 443) están alojadas en instancias EC2 separadas dentro de la misma subred pública. El arquitecto debe asegurarse de que solo se permita tráfico HTTP a la Aplicación A y solo tráfico HTTPS a la Aplicación B. ¿Qué solución cumple con estos requisitos?",
    "options": {
      "A": "Configurar una Network Access Control List (NACL) asociada a la subred para filtrar los puertos 80 y 443.",
      "B": "Adjuntar Security Groups distintos a cada instancia EC2: uno permitiendo el puerto 80 entrante para la Aplicación A, y otro permitiendo el puerto 443 entrante para la Aplicación B.",
      "C": "Crear una conexión VPC Peering entre las instancias y filtrar el tráfico en la tabla de ruteo del peering.",
      "D": "Modificar la Route Table de la subred para dirigir el tráfico del puerto 80 a la Aplicación A y el del puerto 443 a la Aplicación B."
    },
    "explanation": "• Los Security Groups operan a nivel de instancia/ENI, lo que permite un control granular del tráfico entre instancias ubicadas en la misma subred.\n• Las Network ACLs (Opción A) operan en el límite de la subred y aplican por igual a todo el tráfico entrante o saliente de la subred; no pueden diferenciar entre dos instancias dentro de la misma subred.\n• Las tablas de ruteo (Opción D) enrutan por bloques de red IP destino (CIDR), no por puertos de aplicación TCP.\n• VPC Peering (Opción C) interconecta VPCs distintas, no instancias dentro de una misma subred.",
    "why": [
      "Los Security Groups actúan como firewalls virtuales a nivel de interfaz de red (ENI), permitiendo reglas de entrada independientes para instancias en una misma subred."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Las Network ACLs operan en el límite de la subred y no pueden filtrar ni inspeccionar tráfico entre instancias dentro de la misma subred."
      },
      {
        "l": [
          "C"
        ],
        "t": "VPC Peering conecta dos VPCs distintas, no instancias dentro de una misma subred."
      },
      {
        "l": [
          "D"
        ],
        "t": "Las tablas de ruteo de subred dirigen por prefijo IP de destino (CIDR), no por número de puerto TCP."
      }
    ]
  },
  {
    "id": "sb-official-03",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una entidad financiera necesita almacenar y procesar datos regulatorios confidenciales en AWS. Las claves de cifrado de datos deben protegerse mediante controles criptográficos que garanticen una estricta separación de funciones, rotación automática y políticas de acceso que definan con exactitud qué entidades principales de IAM pueden cifrar y descifrar datos. ¿Qué servicio y mecanismo de AWS debería utilizar la empresa?",
    "options": {
      "A": "AWS Certificate Manager (ACM) con certificados privados.",
      "B": "AWS Key Management Service (AWS KMS) claves administradas por el cliente con políticas de clave (Key Policies).",
      "C": "Amazon EC2 Instance Store con cifrado de volumen a nivel de host.",
      "D": "Cifrado del lado del servidor de Amazon S3 con claves administradas por Amazon S3 (SSE-S3) y políticas de bucket."
    },
    "explanation": "• AWS KMS proporciona cifrado de sobre (envelope encryption), claves maestras administradas por el cliente (CMK), políticas de clave que garantizan separación estricta de funciones (administradores vs usuarios de claves) y rotación automática de claves anual.\n• ACM (Opción A) administra certificados SSL/TLS x509 para endpoints web, no claves de datos de aplicaciones.\n• EC2 Instance Store (Opción C) es almacenamiento efímero que pierde datos al detenerse o reiniciarse la instancia, inadecuado para almacenamiento regulatorio duradero.\n• SSE-S3 (Opción D) utiliza claves maestras de AWS sin políticas de clave administradas por el cliente ni separación granular de funciones entre administradores y usuarios.",
    "why": [
      "AWS KMS con claves administradas por el cliente permite una separación estricta de funciones mediante Key Policies y protege criptográficamente las claves de datos con rotación automática."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "ACM administra certificados TLS para HTTPS en tránsito, no claves criptográficas simétricas de datos."
      },
      {
        "l": [
          "C"
        ],
        "t": "Los volúmenes de Instance Store son efímeros y no están diseñados para almacenamiento seguro y duradero de datos regulatorios."
      },
      {
        "l": [
          "D"
        ],
        "t": "SSE-S3 no ofrece políticas de clave administradas por el cliente ni separación de roles entre administradores de claves y usuarios."
      }
    ]
  },
  {
    "id": "sb-practice-01",
    "module": "Compute",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa ejecuta una aplicación en dos instancias Amazon EC2. La empresa requiere baja latencia para todos los usuarios en la misma Región de AWS y al mismo tiempo mantener un alto nivel de tolerancia a fallas. ¿Qué solución cumplirá con estos requisitos?",
    "options": {
      "A": "Ubicar cada instancia EC2 en una Zona de Disponibilidad (AZ) diferente.",
      "B": "Ubicar cada instancia EC2 en una VPC diferente.",
      "C": "Ubicar cada instancia EC2 en una Región diferente.",
      "D": "Ubicar cada instancia EC2 en una subred diferente."
    },
    "explanation": "• Las Zonas de Disponibilidad están compuestas por uno o más centros de datos independientes con energía, redes y conectividad redundantes.\n• Una falla en una AZ no causa una interrupción en otra AZ, garantizando alta tolerancia a fallas.\n• La distribución Multi-AZ dentro de la misma Región proporciona latencia ultra baja (pocos milisegundos) para usuarios regionales.\n• Ubicar instancias en VPCs diferentes (Opción B) no garantiza que residan en AZs físicas distintas.\n• Ubicar instancias en Regiones diferentes (Opción C) introduce alta latencia entre regiones e incumple el requisito de baja latencia regional.\n• Subredes diferentes (Opción D) pueden coexistir en la misma AZ, sin ofrecer aislamiento físico.",
    "why": [
      "Las Zonas de Disponibilidad son centros de datos aislados con conectividad redundante. Implementar instancias en distintas AZs garantiza tolerancia a fallos manteniendo comunicación de baja latencia dentro de la región."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Las VPCs aíslan recursos lógicamente pero no determinan la ubicación física en Zonas de Disponibilidad. Dos VPCs pueden residir en la misma AZ."
      },
      {
        "l": [
          "C"
        ],
        "t": "Ubicar instancias en diferentes Regiones introduce alta latencia geográfica entre regiones, violando el requisito de latencia mínima."
      },
      {
        "l": [
          "D"
        ],
        "t": "Las subredes representan aislamiento lógico dentro de una AZ. Dos subredes distintas pueden crearse en la misma Zona de Disponibilidad física."
      }
    ]
  },
  {
    "id": "sb-practice-02",
    "module": "Storage",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un arquitecto de soluciones debe crear una ubicación de almacenamiento de datos capaz de admitir diferentes formatos de archivos con tamaños desconocidos. Los datos deben tener alta disponibilidad y estar protegidos contra borrado accidental. ¿Qué solución cumple con los requisitos y es la MÁS rentable (cost-effective)?",
    "options": {
      "A": "Implementar un bucket de Amazon S3 y habilitar el control de versiones de objetos (Object Versioning).",
      "B": "Implementar un bucket de Amazon S3 y activar la replicación entre regiones (CRR).",
      "C": "Implementar una tabla de Amazon DynamoDB y activar tablas globales.",
      "D": "Implementar una base de datos con Amazon RDS y configurar un despliegue Multi-AZ."
    },
    "explanation": "• Amazon S3 ofrece durabilidad del 99.999999999% (11 nueves) y alta disponibilidad para cualquier formato de archivo y tamaños de hasta 5 TB por objeto.\n• El versionado de objetos protege contra borrados o sobreescrituras accidentales colocando un delete marker en vez de eliminar el objeto de forma permanente.\n• La replicación entre regiones (Opción B) genera costos adicionales innecesarios al duplicar almacenamiento y transferencia a una segunda región cuando el versionado local resuelve el requerimiento.\n• DynamoDB (Opción C) tiene un límite estricto de 400 KB por elemento y no es un repositorio de archivos generales.\n• Amazon RDS (Opción D) es una base de datos relacional estructurada, no un repositorio rentable para archivos arbitrarios.",
    "why": [
      "Amazon S3 con Object Versioning proporciona alta disponibilidad, capacidad ilimitada para cualquier tipo de archivo y protección contra borrado accidental mediante delete markers de la forma más económica."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Cross-Region Replication exige versionado y duplica el almacenamiento y tráfico en una segunda región, sumando costos innecesarios."
      },
      {
        "l": [
          "C"
        ],
        "t": "DynamoDB tiene un límite de 400 KB por ítem y no está diseñado para almacenar archivos arbitrarios de tamaño desconocido."
      },
      {
        "l": [
          "D"
        ],
        "t": "Amazon RDS es un motor de base de datos relacional SQL y no un almacenamiento general de archivos."
      }
    ]
  },
  {
    "id": "sb-practice-03",
    "module": "Security",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa financiera está desarrollando una aplicación web que gestionará datos confidenciales de clientes. La aplicación estará alojada en instancias Amazon EC2 detrás de un Application Load Balancer (ALB) público. La empresa exige que todos los datos en tránsito estén cifrados. Además, los certificados SSL/TLS deben administrarse con mínima intervención manual. Un arquitecto de soluciones debe diseñar la solución para cumplir los requisitos de seguridad y asegurar una renovación y rotación eficiente de certificados. ¿Qué solución cumplirá estos requisitos?",
    "options": {
      "A": "Adquirir certificados SSL de terceros. Importar los certificados SSL en AWS Identity and Access Management (IAM). Asociar los certificados al ALB.",
      "B": "Utilizar AWS Certificate Manager (ACM) para aprovisionar y administrar un certificado SSL/TLS privado. Configurar el ALB para utilizar el certificado administrado por ACM en listeners HTTPS.",
      "C": "Utilizar AWS Certificate Manager (ACM) para aprovisionar y administrar un certificado SSL/TLS público. Configurar el ALB para utilizar el certificado administrado por ACM en listeners HTTPS.",
      "D": "Utilizar Amazon CloudFront con su certificado SSL por defecto delante del ALB. Configurar CloudFront para reenviar solicitudes HTTPS al ALB a través de HTTP."
    },
    "explanation": "• AWS Certificate Manager (ACM) aprovisiona, valida y renueva automáticamente certificados públicos SSL/TLS sin costo adicional para recursos públicos.\n• Asociar un certificado público de ACM directamente a los listeners HTTPS del ALB proporciona cifrado en tránsito con cero intervención manual de renovación.\n• Los certificados de terceros importados en IAM (Opción A) no se renuevan automáticamente y requieren gestión manual periódica.\n• Los certificados privados de ACM Private CA (Opción B) no están firmados por una CA pública reconocida; los navegadores web de internet mostrarán alertas de seguridad severas.\n• Reenviar tráfico de CloudFront al ALB vía HTTP (Opción D) transmite datos confidenciales en texto plano sin cifrar entre CloudFront y el balanceador, violando el cifrado de extremo a extremo.",
    "why": [
      "Los certificados públicos de ACM se integran nativamente con balanceadores ALB públicos, brindando renovación y rotación 100% automatizada y cifrado estricto en tránsito sin intervención manual."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Los certificados importados en IAM no disponen de rotación ni renovación automática, requiriendo intervención manual."
      },
      {
        "l": [
          "B"
        ],
        "t": "Los certificados privados de ACM solo son válidos dentro de redes privadas corporativas; en internet público arrojan alertas de certificado no confiable."
      },
      {
        "l": [
          "D"
        ],
        "t": "Reenviar peticiones vía HTTP entre CloudFront y el ALB rompe el cifrado de extremo a extremo y expone datos sensibles en texto plano."
      }
    ]
  },
  {
    "id": "sb-practice-04",
    "module": "Networking",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": true,
    "answer": [
      "B",
      "E"
    ],
    "q": "Un arquitecto de soluciones debe diseñar un entorno seguro para recursos de AWS implementados en instancias Amazon EC2 dentro de una VPC. La solución debe admitir una arquitectura de tres capas compuesta por servidores web, servidores de aplicaciones y un clúster de bases de datos. La VPC debe permitir que los recursos de la capa web sean accesibles desde internet únicamente mediante el protocolo HTTPS. ¿Qué combinación de acciones cumplirá con estos requisitos? (Seleccioná DOS)",
    "options": {
      "A": "Adjuntar una Virtual Private Gateway a la VPC. Crear subredes públicas para las capas web y de aplicaciones. Crear subredes privadas para la capa de bases de datos.",
      "B": "Adjuntar una Internet Gateway a la VPC. Crear subredes públicas para la capa web. Crear subredes privadas para las capas de aplicaciones y de bases de datos.",
      "C": "Adjuntar Amazon API Gateway a la VPC. Crear subredes privadas para las capas web, de aplicaciones y de bases de datos.",
      "D": "Crear un Security Group para servidores web que permita todo el tráfico desde internet. Crear un Security Group para servidores de aplicaciones que permita solicitudes solo desde Amazon API Gateway en el puerto de la aplicación. Crear un Security Group para la base de datos que permita conexiones TCP solo desde el Security Group de aplicaciones en el puerto de base de datos.",
      "E": "Crear un Security Group para servidores web que permita solicitudes HTTPS desde internet. Crear un Security Group para servidores de aplicaciones que permita solicitudes únicamente desde el Security Group web. Crear un Security Group para la base de datos que permita conexiones TCP únicamente desde el Security Group de aplicaciones en el puerto de base de datos."
    },
    "explanation": "• En arquitecturas de tres capas, el Internet Gateway (IGW) provee salida a internet y solo la capa web reside en subredes públicas. Las capas de aplicación y base de datos deben aislarse estrictamente en subredes privadas (Opción B).\n• El encadenamiento de Security Groups garantiza el principio de mínimo privilegio: la capa Web solo permite puerto 443 (HTTPS) desde internet; la capa App solo permite tráfico originado por el Security Group web; y la capa de BD solo permite conexiones originadas por el Security Group de App (Opción E).\n• Una Virtual Private Gateway (Opción A) se usa para túneles VPN/Direct Connect y no para acceso web público; además la capa de aplicación no debe ser pública.\n• API Gateway (Opciones C y D) no es un componente de ruteo de subredes para instancias EC2.",
    "why": [
      "Adjuntar un Internet Gateway y situar exclusivamente la capa web en subredes públicas mientras que aplicación y BD se aíslan en subredes privadas implementa la correcta segregación de red.",
      "Restringir el Security Group web a HTTPS (443) y encadenar los Security Groups subsiguientes garantiza aislamiento estricto y comunicación segura entre capas."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Una Virtual Private Gateway es para conexiones VPN corporativas, no para tráfico de internet, y la capa de aplicaciones no debe estar en subredes públicas."
      },
      {
        "l": [
          "C"
        ],
        "t": "Amazon API Gateway es un servicio de APIs administradas y no reemplaza a un Internet Gateway en la arquitectura de red VPC para EC2."
      },
      {
        "l": [
          "D"
        ],
        "t": "Permite todo el tráfico sin cifrar desde internet a la capa web, violando el requerimiento de restringir el acceso exclusivamente a HTTPS."
      }
    ]
  },
  {
    "id": "sb-practice-05",
    "module": "Networking",
    "domain": "Domain 1: Design Secure Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Un arquitecto de soluciones detecta una cantidad anormal de tráfico de red proveniente de una instancia Amazon EC2. Se determina que el tráfico es malicioso y se requiere identificar su destino. ¿Qué herramienta puede utilizar el arquitecto de soluciones para identificar el destino del tráfico de red malicioso?",
    "options": {
      "A": "Activar AWS CloudTrail y filtrar los registros.",
      "B": "Consultar el AWS Health Dashboard.",
      "C": "Activar VPC Flow Logs y filtrar los registros.",
      "D": "Filtrar los registros de Amazon CloudWatch."
    },
    "explanation": "• VPC Flow Logs captura información detallada sobre el tráfico IP que entra y sale de las interfaces de red (ENI) en una VPC.\n• Cada registro incluye dirección IP de origen, dirección IP de destino, puerto de origen, puerto de destino, protocolo y estado (ACCEPT/REJECT), lo que permite identificar con exactitud el destino del tráfico malicioso.\n• AWS CloudTrail (Opción A) audita llamadas a las APIs de administración de AWS y eventos de identidad de IAM, no el tráfico de red de paquetes IP.\n• AWS Health Dashboard (Opción B) monitorea el estado del servicio y eventos de mantenimiento de la infraestructura de AWS.\n• Amazon CloudWatch (Opción D) recopila métricas y registros del sistema operativo o aplicaciones, pero no registra el flujo de paquetes de red a menos que se hayan activado los VPC Flow Logs.",
    "why": [
      "VPC Flow Logs registra explícitamente metadatos de paquetes de red incluyendo IPs y puertos de origen y destino de cada interfaz de red en la VPC."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "CloudTrail registra llamadas a la API de gestión de AWS y acciones administrativas de IAM, no paquetes de tráfico de red IP."
      },
      {
        "l": [
          "B"
        ],
        "t": "AWS Health Dashboard notifica sobre el estado operativo general y eventos de servicios en la infraestructura de AWS."
      },
      {
        "l": [
          "D"
        ],
        "t": "CloudWatch monitorea métricas y logs del sistema operativo/aplicación, pero requiere VPC Flow Logs para registrar tráfico de red IP."
      }
    ]
  },
  {
    "id": "sb-d2-walkthrough-01",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Una API recibe un gran volumen de datos de sensores. Los datos se escriben en una cola antes de ser procesados para generar informes de pronóstico y análisis de tendencias. Con la arquitectura actual, algunos registros se reciben y procesan más de una vez. ¿Cómo puede un arquitecto de soluciones modificar la arquitectura para asegurarse de que los registros duplicados no se procesen?",
    "options": {
      "A": "Configurar la API para enviar los registros a Amazon Kinesis Data Streams.",
      "B": "Configurar la API para enviar los registros a Amazon Kinesis Data Firehose.",
      "C": "Configurar la API para enviar los registros a Amazon Simple Notification Service (Amazon SNS).",
      "D": "Configurar la API para enviar los registros a una cola FIFO de Amazon Simple Queue Service (Amazon SQS)."
    },
    "explanation": "• Las colas FIFO de Amazon SQS garantizan el orden estricto de los mensajes (First-In-First-Out) y procesamiento exactamente una vez (exactly-once processing) con deduplicación automática.\n• Los mensajes se entregan una sola vez y permanecen disponibles hasta que el consumidor los procesa y elimina, evitando que ingresen duplicados.\n• Amazon Kinesis Data Streams (Opción A) puede entregar registros duplicados debido a reintentos del productor o del consumidor ante fallas de red.\n• Amazon Kinesis Data Firehose (Opción B) garantiza entrega al menos una vez (at-least-once), lo que puede introducir duplicados.\n• Amazon SNS (Opción C) es un servicio de publicación/suscripción (pub/sub), no una cola con retención ordenada para procesamiento por lotes.",
    "why": [
      "Las colas Amazon SQS FIFO incorporan deduplicación automática y garantizan entrega y procesamiento exactamente una vez, resolviendo por completo el problema de duplicados en los sensores."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Amazon Kinesis Data Streams puede entregar registros repetidos cuando ocurren reintentos del productor o del consumidor."
      },
      {
        "l": [
          "B"
        ],
        "t": "Amazon Kinesis Data Firehose utiliza entrega at-least-once, pudiendo duplicar registros durante la ingesta."
      },
      {
        "l": [
          "C"
        ],
        "t": "Amazon SNS es un bus de notificación push, no un servicio de colas con almacenamiento temporal para procesamiento controlado."
      }
    ]
  },
  {
    "id": "sb-d2-walkthrough-02",
    "module": "Compute",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa de videojuegos está experimentando un crecimiento exponencial. En múltiples ocasiones, los clientes no han podido acceder a los recursos. Para satisfacer el incremento de demanda, la gerencia evalúa una solución en la nube. La empresa busca una arquitectura que iguale la resiliencia local de múltiples centros de datos y sea lo suficientemente robusta para soportar el crecimiento. ¿Qué configuración debe implementar un arquitecto de soluciones?",
    "options": {
      "A": "Una VPC configurada con un Application Load Balancer que apunte a un Auto Scaling group de Amazon EC2 en una sola Zona de Disponibilidad.",
      "B": "Múltiples instancias Amazon EC2 configuradas en VPCs interconectadas (VPC Peering) a través de dos Zonas de Disponibilidad.",
      "C": "Una VPC configurada con un Network Load Balancer que apunte a un Auto Scaling group de Amazon EC2 distribuido en dos Zonas de Disponibilidad.",
      "D": "Una VPC configurada con un Application Load Balancer que apunte a un Auto Scaling group de Amazon EC2 distribuido entre dos Regiones de AWS."
    },
    "explanation": "• El Network Load Balancer (NLB) procesa millones de peticiones por segundo con latencia de submilisegundos en Capa 4 (TCP/UDP), ideal para picos masivos de juegos.\n• Distribuir el Auto Scaling group a través de múltiples Zonas de Disponibilidad brinda alta disponibilidad física equivalente a múltiples centros de datos y escala automáticamente con la demanda.\n• El despliegue en una sola AZ (Opción A) carece de tolerancia a fallas: si falla ese centro de datos, cae todo el servicio de juegos.\n• VPC Peering (Opción B) solo enruta paquetes entre redes; no balancea tráfico ni escala instancias de forma elástica.\n• Un balanceador ALB no puede tener como destino instancias ubicadas en múltiples Regiones de AWS (Opción D); los balanceadores operan estrictamente dentro de una sola Región.",
    "why": [
      "Un Network Load Balancer con Auto Scaling distribuido en múltiples Zonas de Disponibilidad combina rendimiento masivo a nivel de paquetes (millones de requests/seg) con tolerancia física a fallos Multi-AZ."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Desplegar en una sola Zona de Disponibilidad genera un punto único de falla ante cortes en el centro de datos."
      },
      {
        "l": [
          "B"
        ],
        "t": "VPC Peering solo interconecta VPCs lógicamente; no realiza balanceo de carga ni provee escalamiento dinámico ante aumentos de jugadores."
      },
      {
        "l": [
          "D"
        ],
        "t": "Los balanceadores de carga ALB operan exclusivamente dentro de una sola Región de AWS; sus targets no pueden cruzar fronteras regionales."
      }
    ]
  },
  {
    "id": "sb-d2-practice-01",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa ejecuta una base de datos SQL Server on-premises y desea migrar a AWS. Por motivos de cumplimiento normativo, la empresa requiere permisos a nivel de sistema operativo en el servidor de la base de datos. La arquitectura de base de datos debe ser altamente disponible. ¿Qué configuración cumple con estos requisitos?",
    "options": {
      "A": "Amazon Aurora Serverless.",
      "B": "Una base de datos instalada en una única instancia Amazon EC2 en una Zona de Disponibilidad.",
      "C": "Amazon RDS Custom en una configuración Multi-AZ.",
      "D": "Amazon RDS con réplicas de lectura (Read Replicas)."
    },
    "explanation": "• Amazon RDS Custom permite acceder y personalizar el sistema operativo subyacente y el entorno del motor de base de datos (SQL Server u Oracle) para cumplir con normativas o requisitos de aplicaciones heredadas.\n• Configurar RDS Custom en despliegue Multi-AZ proporciona alta disponibilidad mediante replicación automática y conmutación por error entre Zonas de Disponibilidad.\n• Amazon Aurora Serverless (Opción A) no ofrece acceso al sistema operativo y no es compatible con Microsoft SQL Server.\n• Una única instancia EC2 (Opción B) genera un punto único de falla (SPOF) y no cumple con la alta disponibilidad.\n• Amazon RDS estándar (Opción D) es un servicio totalmente administrado que no permite acceso root ni al sistema operativo subyacente.",
    "why": [
      "Amazon RDS Custom otorga privilegios de administrador en el sistema operativo subyacente y software de base de datos a la vez que mantiene la conmutación automática Multi-AZ y copias de seguridad administradas."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Aurora Serverless no admite motores Microsoft SQL Server ni otorga acceso al sistema operativo."
      },
      {
        "l": [
          "B"
        ],
        "t": "Una sola instancia EC2 carece de redundancia física y no cumple con el requisito de alta disponibilidad."
      },
      {
        "l": [
          "D"
        ],
        "t": "Amazon RDS estándar oculta y restringe el acceso al sistema operativo impidiendo configuraciones personalizadas."
      }
    ]
  },
  {
    "id": "sb-d2-practice-03",
    "module": "Database",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Una empresa está implementando una aplicación de portal de producción en AWS. La capa de base de datos se ejecuta en MySQL. La empresa requiere una solución de base de datos altamente disponible que maximice la facilidad de administración (ease of management). ¿Cómo puede la empresa cumplir estos requisitos?",
    "options": {
      "A": "Utilizar Amazon DynamoDB con un clúster de DynamoDB Accelerator (DAX). Crear respaldos periódicos bajo demanda.",
      "B": "Implementar la base de datos en múltiples instancias Amazon EC2 respaldadas por Amazon Elastic Block Store (Amazon EBS) en múltiples Zonas de Disponibilidad. Programar snapshots periódicos de EBS.",
      "C": "Utilizar Amazon RDS con un despliegue Single-AZ. Programar snapshots periódicos de base de datos.",
      "D": "Utilizar Amazon RDS con un despliegue Multi-AZ. Programar snapshots periódicos de base de datos."
    },
    "explanation": "• Amazon RDS Multi-AZ proporciona replicación física sincrónica hacia una instancia standby en una segunda AZ con conmutación por error automática (60-120 segundos) sin intervención manual.\n• Al ser un servicio administrado, RDS automatiza parches del sistema operativo y del motor, respaldos y aprovisionamiento de almacenamiento, maximizando la facilidad de gestión.\n• DynamoDB (Opción A) es una base de datos NoSQL que exigiría rediseñar el modelo relacional de MySQL existente.\n• Autogestionar MySQL en EC2 (Opción B) requiere una alta carga operativa para parches de SO, scripts de replicación y conmutación manual por error.\n• Single-AZ RDS (Opción C) no ofrece redundancia y es vulnerable a fallas en el centro de datos.",
    "why": [
      "Amazon RDS Multi-AZ ofrece conmutación por error automática y mantenimiento totalmente administrado para motores como MySQL, brindando máxima simplicidad operativa."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "DynamoDB es un motor NoSQL; migrar desde MySQL requeriría un costoso rediseño del modelo de datos de la aplicación."
      },
      {
        "l": [
          "B"
        ],
        "t": "Ejecutar bases de datos directamente sobre EC2 requiere configurar manualmente la replicación, parches y recuperación ante desastres."
      },
      {
        "l": [
          "C"
        ],
        "t": "Un despliegue Single-AZ carece de alta disponibilidad frente a caídas de la Zona de Disponibilidad."
      }
    ]
  },
  {
    "id": "sb-d2-practice-04",
    "module": "Application Integration",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Un arquitecto de soluciones está diseñando una aplicación que utiliza AWS Lambda. La aplicación debe gestionar picos impredecibles y masivos de tráfico. La aplicación procesa imágenes subidas por los usuarios y cambia su tamaño. La tasa de carga de archivos puede multiplicarse por 1.000 o más durante picos de uso en momentos aleatorios. El arquitecto debe diseñar una solución que escale elásticamente con la demanda. ¿Qué solución proporcionará la MAYOR escalabilidad?",
    "options": {
      "A": "Configurar la función Lambda con una configuración alta de concurrencia reservada. Usar concurrencia aprovisionada para mantener instancias listas. Activar la función Lambda desde un endpoint de Amazon API Gateway.",
      "B": "Utilizar Amazon S3 para almacenar las imágenes subidas y configurar notificaciones de eventos de S3 para publicar eventos en una cola de Amazon SQS. Configurar la cola SQS como origen de eventos para la función Lambda.",
      "C": "Desplegar la función Lambda en múltiples Regiones de AWS. Usar Amazon Route 53 con enrutamiento basado en latencia. Implementar código personalizado para gestionar límites de concurrencia en cada Región.",
      "D": "Utilizar Amazon S3 para almacenar las imágenes subidas. Configurar notificaciones de eventos de S3 para activar directamente la función Lambda. Implementar retroceso exponencial (exponential backoff) en la función Lambda."
    },
    "explanation": "• Desacoplar las cargas de imágenes del procesamiento Lambda mediante Amazon SQS actúa como un búfer duradero ante picos repentinos de 1.000x.\n• SQS absorbe de inmediato las ráfagas masivas sin perder mensajes, permitiendo que Lambda escale automáticamente según la profundidad de la cola de manera ordenada y controlada.\n• Invocar directamente Lambda desde API Gateway (Opción A) no cuenta con búfer y produce respuestas HTTP 429 (Too Many Requests) o peticiones descartadas ante picos de 1.000x.\n• El despliegue Multi-Región (Opción C) agrega una complejidad arquitectónica enorme sin solucionar la necesidad de encolado.\n• La invocación síncrona/directa de S3 a Lambda (Opción D) puede saturar la cuota regional de concurrencia de Lambda y causar pérdida de eventos.",
    "why": [
      "Amazon SQS absorbe de forma duradera los picos masivos de tráfico, encolando las solicitudes y permitiendo que Lambda escale automáticamente según la profundidad de la cola sin descartar peticiones."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "La concurrencia aprovisionada no amortigua solicitudes; las llamadas directas desde API Gateway descartarán peticiones o sufrirán throttling durante picos de 1.000x."
      },
      {
        "l": [
          "C"
        ],
        "t": "El enrutamiento Multi-Región añade complejidad innecesaria y no proporciona un búfer de amortiguación para tráfico masivo."
      },
      {
        "l": [
          "D"
        ],
        "t": "Disparar Lambda directamente desde S3 puede exceder los límites de concurrencia de la cuenta y provocar pérdida de eventos de procesamiento."
      }
    ]
  },
  {
    "id": "sb-d2-practice-05",
    "module": "Monitoring",
    "domain": "Domain 2: Design Resilient Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Un arquitecto de soluciones desea mejorar la confiabilidad de una aplicación. El arquitecto requiere recibir alertas por correo electrónico cuando la utilización de espacio en disco en instancias Amazon EC2 supere el 85%. ¿Qué solución cumplirá este requisito con la MENOR sobrecarga operativa (LEAST operational overhead)?",
    "options": {
      "A": "Instalar el agente de Amazon CloudWatch en las instancias EC2 para recopilar métricas de utilización de espacio en disco. Crear una alarma de CloudWatch que se active cuando la métrica personalizada supere el 85%. Crear un tema de Amazon SNS que envíe notificaciones por correo electrónico y suscribir al destinatario.",
      "B": "Crear una alarma de Amazon CloudWatch que se active cuando la métrica predeterminada de utilización de disco de EC2 supere el 85%. Suscribir al destinatario al tema de Amazon SNS que envía correos electrónicos.",
      "C": "Crear una alarma de Amazon CloudWatch que se active cuando la métrica predeterminada de utilización de disco de EC2 supere el 85%. Suscribirse a la alarma utilizando un tema de Amazon SQS que envíe notificaciones por correo electrónico.",
      "D": "Crear un rol de IAM que permita a las instancias EC2 escribir en una cola de Amazon SQS. Configurar las instancias EC2 para enviar métricas a la cola SQS. Crear una función AWS Lambda que procese la cola y envíe correos electrónicos mediante Amazon SES cuando el uso de disco supere el 85%."
    },
    "explanation": "• El uso de espacio en disco (al igual que el uso de memoria RAM) es una métrica interna del sistema operativo y NO es recopilada de forma predeterminada por CloudWatch.\n• Es indispensable instalar el agente unificado de Amazon CloudWatch en la instancia EC2 para recopilar y publicar métricas de disco a CloudWatch.\n• Una vez publicada, una alarma nativa de CloudWatch evalúa la métrica y dispara notificaciones a través de un tema de Amazon SNS suscrito a correos electrónicos sin escribir código personalizado.\n• Las Opciones B y C fallan porque el uso de disco no es una métrica nativa por defecto de EC2, y SQS no puede enviar correos directamente.\n• La Opción D demanda una sobrecarga operativa inmensa al crear scripts propios, colas SQS, funciones Lambda y configuración de Amazon SES.",
    "why": [
      "El espacio en disco es una métrica del sistema operativo que requiere el agente de CloudWatch. Combinarlo con alarmas y un tema de Amazon SNS para emails proporciona una solución nativa y con mínima gestión operativa."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "La utilización de disco no forma parte de las métricas que CloudWatch recolecta por defecto a nivel de hipervisor."
      },
      {
        "l": [
          "C"
        ],
        "t": "El disco no es una métrica predeterminada y Amazon SQS no ofrece entrega directa de correos electrónicos a usuarios."
      },
      {
        "l": [
          "D"
        ],
        "t": "Programar scripts a medida, colas intermedias SQS, funciones Lambda y plantillas de SES implica un costo de mantenimiento desproporcionado."
      }
    ]
  },
  {
    "id": "sb-d3-walkthrough-01",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa desarrolló una aplicación que procesa fotos y videos. Cuando los usuarios suben fotos y videos, un trabajo procesa los archivos. El trabajo puede tardar hasta una hora en procesar videos largos. La empresa utiliza instancias On-Demand de Amazon EC2 para ejecutar servidores web y trabajos de procesamiento. La capa web y la capa de procesamiento tienen instancias que se ejecutan en un grupo de Auto Scaling detrás de un Application Load Balancer. Durante las horas pico, los usuarios informan que la aplicación es lenta y que no procesa algunas solicitudes en absoluto. Durante las horas de la noche, los sistemas están inactivos. ¿Qué debe hacer un arquitecto de soluciones para que la aplicación procese todos los trabajos de la manera más rentable (most cost-effective)?",
    "options": {
      "A": "Utilizar un tipo de instancia más grande en los grupos de Auto Scaling de la capa web y de la capa de procesamiento.",
      "B": "Utilizar instancias Spot para el grupo de Auto Scaling de la capa web y de la capa de procesamiento.",
      "C": "Utilizar una cola estándar de Amazon SQS entre la capa web y la capa de procesamiento. Utilizar una métrica de cola personalizada para escalar el grupo de Auto Scaling en la capa de procesamiento.",
      "D": "Utilizar funciones AWS Lambda en lugar de instancias EC2 y grupos de Auto Scaling. Aumentar la cuota de servicio para que se ejecuten suficientes funciones concurrentes al mismo tiempo."
    },
    "explanation": "• Desacoplar la capa web de la capa de procesamiento utilizando una cola estándar de Amazon SQS permite amortiguar los picos masivos de solicitudes entrantes, evitando caídas de solicitudes y lentitud en la aplicación web.\n• Escalar el grupo de Auto Scaling de la capa de procesamiento en base a una métrica de cola personalizada (como el backlog por instancia: ApproximateNumberOfMessagesVisible dividido el número de instancias activas) garantiza que las instancias se escalen proactivamente ante la acumulación de mensajes y se reduzcan a cero o al mínimo durante la noche cuando la cola esté vacía, logrando máxima eficiencia de costos.\n• La opción A falla porque aumentar el tamaño de instancia no desacopla las capas y sigue provocando pérdida de solicitudes ante ráfagas súbitas, además de encarecer los costos durante las horas nocturnas inactivas.\n• La opción B no desacopla los componentes y las instancias Spot por sí solas no evitan la pérdida de peticiones ante picos, además de ser vulnerables a interrupciones durante tareas largas de 1 hora.\n• La opción D no es válida porque AWS Lambda tiene un límite de tiempo de ejecución máximo de 15 minutos, mientras que los trabajos de video pueden tardar hasta 1 hora.",
    "why": [
      "Desacoplar mediante una cola SQS absorbe el tráfico repentino sin perder trabajos, y escalar el ASG de procesamiento mediante una métrica de backlog de cola optimiza los costos tanto en horas pico como en momentos de inactividad nocturna."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Usar instancias más grandes encarece el sistema en momentos ociosos y no desacopla la arquitectura frente a picos súbitos de tráfico."
      },
      {
        "l": [
          "B"
        ],
        "t": "Las instancias Spot no resuelven el desacoplamiento ni el búfer de solicitudes, y pueden interrumpirse durante procesamientos de hasta una hora."
      },
      {
        "l": [
          "D"
        ],
        "t": "AWS Lambda posee un tiempo máximo de ejecución improrrogable de 15 minutos, impidiendo completar tareas que demanden hasta 1 hora."
      }
    ]
  },
  {
    "id": "sb-d3-walkthrough-02",
    "module": "Database",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": true,
    "answer": [
      "A",
      "D"
    ],
    "q": "Una empresa está construyendo una aplicación distribuida que enviará datos telemétricos de sensores IoT, incluyendo condiciones climáticas y velocidad del viento, desde turbinas eólicas hacia AWS para su procesamiento. Dado que los datos presentan picos repentinos (spiky), la aplicación debe ser capaz de escalar. Es fundamental almacenar los datos en streaming en una base de datos clave-valor (key-value) y luego enviarlos a un data lake centralizado, donde puedan transformarse, analizarse y combinarse con diversos conjuntos de datos para generar predicciones. ¿Qué combinación de soluciones satisfará las necesidades empresariales con la MENOR sobrecarga operativa (minimal operational overhead)? (Seleccione DOS).",
    "options": {
      "A": "Configurar Amazon Kinesis para entregar datos en streaming hacia un data lake en Amazon S3.",
      "B": "Utilizar Amazon DocumentDB (con compatibilidad con MongoDB) para almacenar los datos de los sensores IoT.",
      "C": "Escribir funciones AWS Lambda para entregar los datos en streaming hacia Amazon S3.",
      "D": "Utilizar Amazon DynamoDB para almacenar los datos de los sensores IoT y activar Amazon Kinesis Data Streams.",
      "E": "Utilizar Amazon Kinesis para entregar los datos en streaming a Amazon Redshift y activar Redshift Spectrum."
    },
    "explanation": "• Amazon DynamoDB es una base de datos NoSQL clave-valor totalmente administrada y serverless que escala de forma transparente para absorber cargas de trabajo de telemetría IoT con picos abruptos y latencias de un solo dígito de milisegundo.\n• Activar Amazon Kinesis Data Streams para DynamoDB captura los cambios a nivel de ítem en streaming continuo en tiempo real sin requerir gestión de servidores ni desarrollo de código personalizado.\n• Configurar Amazon Kinesis para entregar estos datos directamente a un data lake sobre Amazon S3 permite almacenamiento duradero, integración analítica y mínima sobrecarga operativa.\n• La opción B es incorrecta porque DocumentDB es una base de datos documental (no clave-valor) y requiere administrar instancias y clusters.\n• La opción C introduce sobrecarga operativa al exigir mantenimiento de código personalizado, reintentos y gestión de límites de ejecución en Lambda.\n• La opción E es incorrecta porque el requerimiento solicita centralizar el data lake en Amazon S3, y Redshift Spectrum es un motor para consultar datos que ya residen en S3, no una tubería de ingesta en streaming.",
    "why": [
      "Amazon DynamoDB ofrece almacenamiento nativo clave-valor que escala automáticamente ante ráfagas, y activar Kinesis Data Streams permite la entrega directa hacia un data lake en S3 con mínima sobrecarga de mantenimiento."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Amazon DocumentDB es un motor de base de datos orientado a documentos, no a modelos clave-valor, y demanda gestión de clusters."
      },
      {
        "l": [
          "C"
        ],
        "t": "Programar y mantener funciones Lambda para entrega introduce complejidad de código y costos de mantenimiento operacional innecesarios."
      },
      {
        "l": [
          "E"
        ],
        "t": "Redshift Spectrum es una herramienta de consulta externa sobre S3, no un mecanismo de ingesta o entrega de flujos continuos de datos."
      }
    ]
  },
  {
    "id": "sb-d3-walkthrough-03",
    "module": "Networking",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una organización global cuenta con más de 50 cuentas de AWS, con cuatro VPCs en cada una de ellas a lo largo de diferentes regiones. Se requiere comunicación entre las VPCs, y todas las VPCs individuales deben acceder a una VPC de servicios compartidos (shared services VPC) que proporciona servicios centrales a toda la empresa. ¿Cómo pueden las cuentas miembro acceder a la VPC de servicios compartidos con la MENOR sobrecarga operativa (LEAST operational overhead)?",
    "options": {
      "A": "Crear un Application Load Balancer con destino a la dirección IP privada de la VPC de servicios compartidos. Agregar un registro de Autorización de Autoridad de Certificación (CAA) para el ALB en Amazon Route 53. Apuntar todas las solicitudes hacia ese registro CAA en las tablas de ruteo de las VPCs.",
      "B": "Crear una conexión de emparejamiento de VPC (VPC Peering) entre cada una de las VPCs y la VPC de servicios compartidos.",
      "C": "Crear un Network Load Balancer a través de las Availability Zones en la VPC de servicios compartidos. Crear roles de consumidores de servicios en AWS IAM y configurar la aceptación de conexiones de endpoint en automática. Crear endpoints consumidores en la VPC de cada división apuntando al Network Load Balancer.",
      "D": "Crear una conexión VPN Site-to-Site entre cada una de las VPCs y la VPC de servicios compartidos."
    },
    "explanation": "• AWS PrivateLink (creando un servicio de VPC Endpoint respaldado por un Network Load Balancer en la VPC proveedora) permite que múltiples VPCs consumidoras accedan a los servicios centrales de manera privada, unidireccional y segura.\n• PrivateLink elimina la necesidad de gestionar complejas tablas de ruteo en más de 200 VPCs (50+ cuentas × 4 VPCs) y no sufre por solapamiento de rangos de direcciones IP (CIDR overlaps).\n• La opción B (VPC Peering) tiene un límite rígido de 125 conexiones de peering activas por VPC, por lo que una única VPC de servicios compartidos no puede conectarse por peering directo a más de 200 VPCs sin una arquitectura compleja.\n• La opción A no tiene sentido técnico porque los registros CAA en DNS sirven para autorizar qué autoridades certificadoras emiten certificados TLS, no para enrutar tráfico de red.\n• La opción D (Site-to-Site VPN) genera una sobrecarga operativa gigantesca al tener que aprovisionar y monitorear más de 200 túneles IPSec, con limitaciones de ancho de banda y cifrado.",
    "why": [
      "AWS PrivateLink mediante un Network Load Balancer y endpoints de interfaz permite interconectar cientos de VPCs con servicios compartidos sin riesgo de solapamiento de IPs, sin saturar las tablas de ruteo y sin topar con el límite de 125 conexiones de VPC Peering."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Los registros CAA de DNS definen emisores válidos de certificados SSL/TLS y no tienen ninguna función en el enrutamiento de red."
      },
      {
        "l": [
          "B"
        ],
        "t": "Una VPC tiene un límite máximo de 125 conexiones de VPC Peering activas, siendo insuficiente para conectar directamente más de 200 VPCs."
      },
      {
        "l": [
          "D"
        ],
        "t": "Configurar y mantener más de 200 túneles VPN Site-to-Site introduce una enorme sobrecarga de gestión y restricciones de rendimiento."
      }
    ]
  },
  {
    "id": "sb-d3-practice-01",
    "module": "Analytics",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa está desplegando un entorno para una nueva aplicación de procesamiento de datos. La aplicación será consultada frecuentemente por 20 departamentos diferentes en todo el mundo que necesitan ejecutar análisis (analytics). La empresa planea cobrar a cada departamento el costo de su respectivo acceso. ¿Qué solución cumplirá con estos requisitos con el MENOR esfuerzo (LEAST effort)?",
    "options": {
      "A": "Amazon RDS for PostgreSQL, con réplicas de lectura para cada departamento. Cada departamento consultará la réplica de lectura etiquetada para su departamento en la consola de facturación.",
      "B": "Amazon Redshift, con clústeres configurados para cada departamento. Cada departamento consultará el clúster etiquetado para su departamento en la consola de facturación.",
      "C": "Amazon Athena con grupos de trabajo (workgroups) configurados para cada departamento. Cada departamento consultará a través del workgroup etiquetado para su departamento en la consola de facturación.",
      "D": "Amazon Aurora con bases de datos globales (Global Databases). Cada departamento consultará una base de datos en una región diferente, y la región estará etiquetada en la consola de facturación."
    },
    "explanation": "• Amazon Athena permite ejecutar consultas SQL interactivas directamente sobre datos en Amazon S3 sin necesidad de aprovisionar ni administrar servidores o bases de datos (arquitectura serverless).\n• Los grupos de trabajo (Athena Workgroups) permiten aislar usuarios, equipos o aplicaciones, establecer límites de costos y volumen de escaneo por consulta, y etiquetar cada grupo de trabajo (cost allocation tags) para ver reflejados los costos exactos de cada departamento en la consola de facturación de AWS con el menor esfuerzo operativo posible.\n• La opción A es incorrecta porque RDS for PostgreSQL es una base de datos transaccional OLTP que no está diseñada para analítica masiva y soporta un límite máximo de 5 réplicas de lectura por instancia de BD, haciendo inviable soportar 20 departamentos.\n• La opción B es incorrecta porque aprovisionar 20 clústeres de Amazon Redshift independientes implicaría un costo financiero astronómico y una enorme carga operativa de mantenimiento innecesaria.\n• La opción D es incorrecta porque Aurora es una base de datos relacional OLTP que factura por hora de instancia por región y requiere replicación entre múltiples regiones, lo cual no es costo-eficiente ni práctico para consultas analíticas departamentales.",
    "why": [
      "Amazon Athena proporciona analítica serverless sobre S3 y los Athena Workgroups permiten aislar consultas y asignar costos por departamento mediante etiquetas de facturación con el menor esfuerzo."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "RDS for PostgreSQL es un motor transaccional OLTP limitado a un máximo de 5 réplicas de lectura, incapaz de escalar a 20 departamentos."
      },
      {
        "l": [
          "B"
        ],
        "t": "Desplegar y mantener 20 clústeres dedicados de Redshift genera una sobrecarga de costos y administración sumamente pesada."
      },
      {
        "l": [
          "D"
        ],
        "t": "Aurora Global Database está pensada para disponibilidad transaccional multirregión y factura horas de cómputo continuas, sin ser adecuada para consultas analíticas esporádicas departamentales."
      }
    ]
  },
  {
    "id": "sb-d3-practice-02",
    "module": "Compute",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa minorista está desarrollando una nueva aplicación de procesamiento de imágenes para analizar imágenes de productos en busca de defectos. La aplicación consiste en un contenedor que procesa imágenes subidas a un bucket de Amazon S3. La aplicación estará orquestada mediante Amazon ECS. El uso de la aplicación fluctúa a lo largo del día. ¿Qué solución desplegará la aplicación con la MENOR sobrecarga operativa (LEAST operational overhead)?",
    "options": {
      "A": "Utilizar el tipo de inicio AWS Fargate. Configurar auto scaling para las tareas de Fargate según los datos históricos de utilización de métricas de Amazon CloudWatch. Configurar Amazon S3 Event Notifications para invocar una función AWS Lambda. Configurar la función Lambda para iniciar una tarea de ECS en Fargate en el clúster que haga referencia al URI del objeto en S3.",
      "B": "Utilizar el tipo de inicio AWS Fargate. Configurar auto scaling para las tareas de Fargate según los datos históricos de utilización de métricas de Amazon CloudWatch. Usar Amazon EventBridge para programar una función AWS Lambda que escanee el bucket de S3 en busca de objetos subidos. Configurar la función Lambda para iniciar un contenedor en una instancia EC2 en el clúster que haga referencia al URI del objeto en S3.",
      "C": "Utilizar el tipo de inicio Amazon EC2. Configurar auto scaling para las instancias EC2 según los datos históricos de utilización de métricas de Amazon CloudWatch. Usar Amazon EventBridge para programar una función AWS Lambda que escanee el bucket de S3 en busca de objetos subidos. Configurar la función Lambda para iniciar un contenedor en una instancia EC2 en el clúster que haga referencia al URI del objeto en S3.",
      "D": "Utilizar el tipo de inicio Amazon EC2. Configurar auto scaling para las instancias EC2 según los datos históricos de utilización de métricas de Amazon CloudWatch. Configurar Amazon S3 Event Notifications para invocar una función AWS Lambda. Configurar la función Lambda para iniciar un contenedor en una instancia EC2 en el clúster que haga referencia al URI del objeto en S3."
    },
    "explanation": "• AWS Fargate es un motor de cómputo serverless para Amazon ECS que elimina por completo la necesidad de aprovisionar, configurar, parchear o escalar instancias virtuales subyacentes, minimizando la sobrecarga operativa.\n• Integrar Amazon S3 Event Notifications con AWS Lambda para lanzar tareas de ECS en Fargate bajo demanda ante cada nuevo archivo permite un procesamiento impulsado por eventos (event-driven), escalando a cero cuando no hay imágenes y respondiendo al instante ante picos de demanda.\n• Las opciones B y C utilizan un sondeo periódico programado con EventBridge hacia el bucket de S3, lo que introduce retrasos, código de escaneo innecesario y costo de invocaciones ociosas.\n• Las opciones C y D utilizan el tipo de lanzamiento Amazon EC2, lo cual obliga al equipo a administrar y actualizar sistemas operativos, configurar AMIs y dimensionar clústeres manualmente.",
    "why": [
      "AWS Fargate elimina la administración de servidores EC2, y las notificaciones de eventos de S3 activan Lambda de forma inmediata ante cada subida sin requerir sondeos periódicos."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Escanear S3 periódicamente con EventBridge agrega retrasos y sobrecarga operativa frente a la arquitectura orientada a eventos nativa de S3."
      },
      {
        "l": [
          "C"
        ],
        "t": "El modelo EC2 requiere mantenimiento y parcheo de servidores, y el escaneo programado es ineficiente comparado con eventos en tiempo real."
      },
      {
        "l": [
          "D"
        ],
        "t": "Utilizar instancias EC2 tradicionales obliga al equipo a asumir la sobrecarga operativa de gestionar infraestructura y parches de sistema operativo."
      }
    ]
  },
  {
    "id": "sb-d3-practice-03",
    "module": "Database",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Un administrador de base de datos modifica una configuración de registro (logging) dentro de un grupo de parámetros (parameter group) de Amazon RDS. Sin embargo, los cambios en los parámetros no se están aplicando a la base de datos en ejecución. ¿Qué acción debe realizar el administrador de base de datos para resolver este problema?",
    "options": {
      "A": "Desasociar el grupo de parámetros y recrearlo con las configuraciones actuales.",
      "B": "Establecer la configuración de logging como un parámetro dinámico en el parameter group.",
      "C": "Ajustar el rol de IAM para aplicar los permisos requeridos y guardar los cambios.",
      "D": "Reiniciar las instancias de base de datos para aplicar los cambios de parámetros."
    },
    "explanation": "• En los grupos de parámetros (parameter groups) de Amazon RDS, los parámetros del motor se clasifican en dinámicos o estáticos.\n• Los parámetros dinámicos se aplican inmediatamente después de guardar los cambios sin necesidad de reiniciar la instancia.\n• Los parámetros estáticos (que frecuentemente incluyen formatos de logs, bibliotecas compartidas y asignaciones fundamentales de memoria) requieren un reinicio explícito (reboot) de la instancia de base de datos para que surtan efecto.\n• La opción A es innecesaria y no forzará la aplicación de parámetros estáticos sin un reinicio.\n• La opción B es incorrecta porque la naturaleza estática o dinámica de los parámetros está predefinida por el motor de base de datos; los administradores no pueden convertir arbitrariamente un parámetro estático en dinámico.\n• La opción C es incorrecta porque los permisos de IAM controlan las llamadas a la API de AWS, no la forma en que el motor interno de la base de datos aplica sus configuraciones.",
    "why": [
      "Los parámetros estáticos de RDS (como las configuraciones de logging del motor) exigen un reinicio manual o durante la ventana de mantenimiento para aplicarse en las instancias activas."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Desasociar y recrear el parameter group no forzará la aplicación de cambios estáticos sin reiniciar la base de datos."
      },
      {
        "l": [
          "B"
        ],
        "t": "Los parámetros del motor de base de datos están predefinidos como estáticos o dinámicos por el fabricante; no es posible alterar su tipo en RDS."
      },
      {
        "l": [
          "C"
        ],
        "t": "Los roles de IAM gobiernan las operaciones sobre la API de RDS, no la activación interna de directivas del motor de base de datos."
      }
    ]
  },
  {
    "id": "sb-d3-practice-04",
    "module": "Security",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Un arquitecto de soluciones necesita realizar una inspección profunda de paquetes (deep packet inspection) del tráfico de red hacia y desde múltiples Amazon VPCs. El tráfico a inspeccionar incluye el tráfico entre las VPCs y el tráfico hacia y desde internet. Además, se debe garantizar que las cargas de trabajo en las VPCs puedan conectarse a un bucket de Amazon S3 para el registro centralizado de logs sin enviar tráfico a través de internet. ¿Qué solución cumplirá con estos requisitos?",
    "options": {
      "A": "Utilizar AWS WAF para realizar la inspección profunda de paquetes del tráfico de red. Utilizar AWS PrivateLink para conectar las VPCs al bucket de S3.",
      "B": "Utilizar AWS Network Firewall para realizar la inspección profunda de paquetes del tráfico de red. Utilizar VPC peering para conectar las VPCs al bucket de S3.",
      "C": "Utilizar AWS WAF para realizar la inspección profunda de paquetes del tráfico de red. Utilizar VPC peering para conectar las VPCs al bucket de S3.",
      "D": "Utilizar AWS Network Firewall para realizar la inspección profunda de paquetes del tráfico de red. Utilizar AWS PrivateLink para conectar las VPCs al bucket de S3."
    },
    "explanation": "• AWS Network Firewall es un servicio de seguridad de red administrado con estado que proporciona inspección profunda de paquetes (Deep Packet Inspection - DPI), filtrado de dominios y prevención de intrusiones (IDS/IPS) tanto para tráfico este-oeste (entre VPCs) como norte-sur (hacia/desde internet).\n• AWS PrivateLink para Amazon S3 (Interface VPC Endpoints) proporciona conectividad privada y segura mediante direcciones IP privadas dentro de las subredes de la VPC hacia el bucket de S3, garantizando que los logs no viajen por la internet pública.\n• Las opciones A y C son incorrectas porque AWS WAF es un firewall de capa de aplicación (Capa 7) orientado exclusivamente a tráfico HTTP/HTTPS web, no a inspección general de paquetes de red.\n• Las opciones B y C son incorrectas porque VPC Peering solo conecta VPCs entre sí; no permite conectar una VPC directamente a un servicio regional administrado como Amazon S3.",
    "why": [
      "AWS Network Firewall realiza inspección profunda de paquetes (DPI) en capas 3 a 7, mientras que AWS PrivateLink brinda conexión de interfaz privada a Amazon S3 sin salir a internet."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "AWS WAF opera exclusivamente en la Capa 7 para filtrar solicitudes HTTP/HTTPS y no realiza inspección profunda de paquetes de red."
      },
      {
        "l": [
          "B"
        ],
        "t": "VPC Peering se utiliza para interconectar dos VPCs y no admite conexiones directas con buckets de Amazon S3."
      },
      {
        "l": [
          "C"
        ],
        "t": "AWS WAF no inspecciona paquetes de red generales y VPC Peering no se puede emparejar con el servicio Amazon S3."
      }
    ]
  },
  {
    "id": "sb-d3-practice-05",
    "module": "Storage",
    "domain": "Domain 3: Design High-Performing Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una empresa migró una gran cantidad de datos a Amazon S3. Un arquitecto de soluciones necesita hacer que estos datos sean accesibles para una aplicación local on-premises de uso intensivo de datos que utiliza protocolos de acceso a nivel de archivos (file protocol). La solución debe admitir almacenamiento en caché local (local caching). ¿Qué solución cumplirá con estos requisitos?",
    "options": {
      "A": "Lanzar una instancia Amazon EC2 con Microsoft Windows Server. Crear un sistema de archivos Amazon FSx for Windows File Server para el acceso a S3. Montar el sistema de archivos en el servidor on-premises que ejecuta la aplicación.",
      "B": "Configurar Amazon S3 File Gateway en una máquina virtual on-premises. Crear y configurar un recurso compartido de archivos (file share) para el bucket de S3 en S3 File Gateway. Montar el recurso compartido en el servidor de aplicaciones mediante NFS.",
      "C": "Instalar AWS Outposts. Crear un bucket de S3 local. Usar AWS DataSync para sincronizar el bucket de S3 original con el bucket de Amazon S3 en Outposts. Montar el bucket de S3 en Outposts en el servidor de aplicaciones utilizando un VPC endpoint.",
      "D": "Configurar un endpoint de API de AWS AppSync. Elegir un bucket de S3 como origen de datos. Montar el sistema de archivos en el servidor on-premises utilizando el endpoint de AWS AppSync."
    },
    "explanation": "• Amazon S3 File Gateway (parte de AWS Storage Gateway) permite conectar aplicaciones on-premises a Amazon S3 utilizando protocolos de archivos estándar de la industria como NFS y SMB.\n• Además, mantiene una memoria caché local en la máquina virtual on-premises para brindar acceso de baja latencia a los datos accedidos con frecuencia por aplicaciones locales intensivas.\n• La opción A es incorrecta porque Amazon FSx for Windows File Server no actúa como una pasarela nativa para exponer buckets de S3 como sistemas de archivos NFS/SMB locales en las instalaciones con caché local.\n• La opción C es incorrecta porque S3 on Outposts ofrece almacenamiento de objetos (Object API), no protocolos de archivos (NFS/SMB), además de requerir una infraestructura de hardware físico altamente costosa y compleja.\n• La opción D es incorrecta porque AWS AppSync es un servicio de APIs administradas con GraphQL y no puede montarse como sistema de archivos en un servidor.",
    "why": [
      "Amazon S3 File Gateway desplegado en una VM on-premises permite montar buckets de S3 mediante NFS/SMB ofreciendo almacenamiento en caché local para baja latencia."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Amazon FSx for Windows File Server no proporciona un puente de almacenamiento en caché on-premises hacia Amazon S3."
      },
      {
        "l": [
          "C"
        ],
        "t": "Amazon S3 on Outposts proporciona almacenamiento de objetos vía API REST y no montaje por protocolo de archivos NFS/SMB."
      },
      {
        "l": [
          "D"
        ],
        "t": "AWS AppSync es un servicio de GraphQL serverless y carece de capacidades para montarse como sistema de archivos."
      }
    ]
  },
  {
    "id": "sb-d4-walkthrough-01",
    "module": "Storage",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una instalación de procesamiento de datos desea migrar un grupo de servidores Microsoft Windows a AWS Cloud. Estos servidores requieren acceso a un sistema de archivos compartido que pueda integrarse con la infraestructura existente de Active Directory de las instalaciones para gestionar permisos de archivos y carpetas. La solución debe proporcionar soporte fluido para archivos compartidos entre AWS y servidores on-premises, además de hacer que el entorno sea de alta disponibilidad. La solución elegida debe brindar seguridad adicional admitiendo cifrado en reposo y en tránsito. ¿Qué solución de almacenamiento cumplirá con estos requisitos?",
    "options": {
      "A": "Un AWS S3 File Gateway unido al dominio de Active Directory existente.",
      "B": "Un sistema de archivos Amazon FSx for Windows File Server unido al dominio de Active Directory existente.",
      "C": "Un sistema de archivos Amazon Elastic File System (Amazon EFS) unido a un dominio de AWS Managed Microsoft AD.",
      "D": "Un bucket de Amazon S3 montado en instancias Amazon EC2 en múltiples Availability Zones que ejecutan servidores Windows."
    },
    "explanation": "• Amazon FSx for Windows File Server proporciona un sistema de archivos nativo de Microsoft Windows completamente administrado, con soporte integral para el protocolo SMB, permisos NTFS de Windows (ACLs) e integración directa con dominios de Active Directory existentes (on-premises o en AWS).\n• Admite despliegues Multi-AZ para alta disponibilidad y ofrece cifrado nativo en reposo (AWS KMS) y en tránsito (cifrado SMB 3.0+).\n• La opción A es incorrecta porque Amazon S3 File Gateway se autentica con Active Directory del lado local, pero los permisos de archivos y carpetas NTFS no se conservan una vez que los objetos se almacenan en S3.\n• La opción C es incorrecta porque Amazon EFS está diseñado exclusivamente para cargas de trabajo Linux mediante NFSv4 y no es compatible con instancias Windows Server.\n• La opción D es incorrecta porque Amazon S3 es almacenamiento de objetos y no admite montaje nativo como sistema de archivos de red ni permisos NTFS de Windows.",
    "why": [
      "Amazon FSx for Windows File Server brinda almacenamiento compartido nativo SMB, se integra con Active Directory para permisos NTFS, soporta alta disponibilidad Multi-AZ y ofrece cifrado en reposo y en tránsito."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "S3 File Gateway no conserva las listas de control de acceso (ACL) de archivos y carpetas de Windows una vez almacenados los objetos en S3."
      },
      {
        "l": [
          "C"
        ],
        "t": "Amazon EFS es exclusivo para entornos Linux (NFSv4) y no es compatible con Windows Server."
      },
      {
        "l": [
          "D"
        ],
        "t": "Amazon S3 es un servicio de almacenamiento de objetos que no admite montaje nativo como sistema de archivos para Windows."
      }
    ]
  },
  {
    "id": "sb-d4-walkthrough-02",
    "module": "Compute",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "B"
    ],
    "q": "Una startup busca una solución para ejecutar y acceder a microservicios de manera rentable sin la sobrecarga operativa de administrar infraestructura. La solución debe poder escalar rápidamente, adaptarse a variaciones abruptas en el volumen de solicitudes y protegerse contra ataques DDoS comunes. ¿Cuál es la solución más costo-eficiente que cumple con los requisitos?",
    "options": {
      "A": "Ejecutar los microservicios en contenedores utilizando AWS Elastic Beanstalk.",
      "B": "Ejecutar los microservicios en AWS Lambda detrás de un Amazon API Gateway.",
      "C": "Ejecutar los microservicios en instancias Amazon EC2 dentro de un Auto Scaling group.",
      "D": "Ejecutar los microservicios en contenedores utilizando Amazon Elastic Container Service (Amazon ECS) respaldado por instancias EC2."
    },
    "explanation": "• AWS Lambda y Amazon API Gateway son servicios serverless administrados que eliminan completamente la sobrecarga de administración de servidores, parches o aprovisionamiento de capacidad.\n• API Gateway y Lambda escalan de forma instantánea de cero a miles de solicitudes concurrentes ante picos repentinos de demanda, cobrando únicamente por solicitud y tiempo de ejecución sin incurrir en costos por recursos ociosos.\n• API Gateway incluye protección DDoS nativa contra ataques en Capa 3/4 (SYN floods) y Capa 7, y permite configurar throttling (estrangulamiento) por método y cliente para proteger el backend.\n• Las opciones A, C y D se basan en instancias EC2, las cuales facturan cómputo continuo incluso en períodos de inactividad y tardan varios minutos en iniciar y escalar ante picos de tráfico.",
    "why": [
      "Amazon API Gateway junto con AWS Lambda ofrece escalado instantáneo serverless sin costo en reposo, mitigación DDoS integrada y nula administración de infraestructura."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Elastic Beanstalk despliega instancias EC2 que generan costos por tiempo ocioso y tardan minutos en escalar ante picos."
      },
      {
        "l": [
          "C"
        ],
        "t": "Las instancias EC2 en un Auto Scaling group facturan capacidad continua y tienen latencias de inicio de varios minutos para escalar."
      },
      {
        "l": [
          "D"
        ],
        "t": "ECS respaldado por EC2 requiere administrar servidores del clúster y factura horas de cómputo independientemente del volumen de tráfico."
      }
    ]
  },
  {
    "id": "sb-d4-walkthrough-03",
    "module": "Security",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "A"
    ],
    "q": "Una empresa está desarrollando una aplicación que se ejecuta en instancias Amazon EC2 en una subred privada. Las instancias EC2 utilizan un NAT Gateway para acceder a internet. Un arquitecto de soluciones debe proporcionar una opción segura para que los desarrolladores puedan iniciar sesión en las instancias. ¿Qué solución cumple con estos requisitos de la manera más costo-eficiente?",
    "options": {
      "A": "Configurar AWS Systems Manager Session Manager en las instancias EC2 para habilitar el inicio de sesión.",
      "B": "Configurar un bastion host en una subred pública para iniciar sesión en las instancias EC2 de la subred privada.",
      "C": "Utilizar el NAT Gateway existente para iniciar sesión en las instancias EC2 de la subred privada.",
      "D": "Configurar una conexión AWS Site-to-Site VPN para conectarse directamente a las instancias EC2."
    },
    "explanation": "• AWS Systems Manager Session Manager proporciona acceso de terminal seguro, auditable y cifrado (a través de la consola o AWS CLI) a instancias EC2 sin necesidad de abrir puertos de entrada en Security Groups, asignar direcciones IP públicas, gestionar claves SSH o mantener servidores de salto (bastion hosts).\n• Session Manager se incluye sin costo adicional para la administración de instancias EC2, siendo la opción más segura y económica.\n• La opción B es incorrecta porque mantener un bastion host genera costos continuos por la instancia EC2 y almacenamiento EBS, además de sobrecarga de parcheo y gestión de llaves SSH.\n• La opción C es técnicamente inviable porque los NAT Gateways están diseñados únicamente para tráfico de salida (egress) originado por las instancias privadas; no permiten conexiones entrantes (ingress) desde internet.\n• La opción D es incorrecta porque una conexión AWS Site-to-Site VPN factura cargos fijos por hora de conexión y costos por transferencia de datos, resultando innecesariamente costosa.",
    "why": [
      "AWS Systems Manager Session Manager permite conectarse por consola a instancias privadas sin abrir puertos de entrada y sin ningún costo adicional."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Un bastion host genera costos adicionales por la instancia EC2 activa y requiere mantenimiento operativo y gestión de SSH."
      },
      {
        "l": [
          "C"
        ],
        "t": "Un NAT Gateway solo permite tráfico de salida hacia internet y no admite conexiones entrantes."
      },
      {
        "l": [
          "D"
        ],
        "t": "Una VPN Site-to-Site implica costos fijos por hora de conexión por túnel y costos de transferencia innecesarios para este propósito."
      }
    ]
  },
  {
    "id": "sb-d4-practice-01",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "C"
    ],
    "q": "Una empresa utiliza instancias Amazon EC2 en un entorno de pruebas. La empresa ya ha optimizado las instancias para su carga de trabajo actual. La empresa utiliza las instancias únicamente durante el horario laboral. La empresa utiliza Compute Savings Plans e instancias Spot. La empresa debe mantener el control sobre los recursos de cómputo. Un arquitecto de soluciones debe recomendar una solución para reducir los costos asociados con las instancias EC2 en el entorno de pruebas. ¿Qué solución cumplirá con estos requisitos?",
    "options": {
      "A": "Cambiar de instancias EC2 a funciones AWS Lambda para optimizar el entorno de ejecución.",
      "B": "Usar AWS Compute Optimizer y cambiar el tipo o tamaño de instancia según sus recomendaciones.",
      "C": "Crear una acción de alarma de Amazon CloudWatch basada en tiempo para iniciar y detener las instancias.",
      "D": "Usar Reserved Instances además de los Compute Savings Plans y las instancias Spot."
    },
    "explanation": "• Los entornos de pruebas utilizados solo en horario laboral permanecen ociosos más del 65% del tiempo (noches y fines de semana). Detener las instancias cuando no están en uso interrumpe la facturación de cómputo de EC2, reduciendo significativamente los costos.\n• Una acción programada basada en tiempo (mediante alarmas de CloudWatch, reglas de EventBridge o AWS Instance Scheduler) para encender y apagar las instancias de forma automática preserva el control total sobre los servidores y las configuraciones existentes.\n• La opción A es incorrecta porque la empresa requiere control directo sobre el entorno de cómputo, algo que el modelo serverless de AWS Lambda no ofrece.\n• La opción B es incorrecta porque las instancias ya se encuentran correctamente dimensionadas y optimizadas para su carga.\n• La opción D es incorrecta porque las Reserved Instances cobran por capacidad reservada las 24 horas del día durante 1 o 3 años, agregando costos innecesarios a servidores que solo operan durante el horario comercial.",
    "why": [
      "Programar el apagado automático de instancias EC2 fuera del horario laboral elimina los costos de cómputo en horas ociosas manteniendo el control total del entorno."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "AWS Lambda es una plataforma serverless que no proporciona el control a nivel de sistema operativo y recursos exigido."
      },
      {
        "l": [
          "B"
        ],
        "t": "Las instancias ya están optimizadas para la carga actual, por lo que Compute Optimizer no generará ahorros."
      },
      {
        "l": [
          "D"
        ],
        "t": "Las Reserved Instances facturan de manera continua 24/7 y no son apropiadas para cargas que solo operan en horario de oficina."
      }
    ]
  },
  {
    "id": "sb-d4-practice-02",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Una empresa tiene una aplicación de página única (single page application - SPA) desplegada en Amazon S3. La aplicación realiza solicitudes a una API REST desplegada en una instancia Amazon EC2 que devuelve enlaces a archivos de video almacenados en S3. Un arquitecto de soluciones desea reducir los costos de transferencia de datos. ¿Qué solución cumple con estos requisitos?",
    "options": {
      "A": "Mover la API REST a Amazon Elastic Container Service (Amazon ECS).",
      "B": "Crear una copia del entorno de cómputo en otra Región de AWS.",
      "C": "Replicar los datos de Amazon S3 en buckets en Regiones de AWS más cercanas al solicitante.",
      "D": "Crear una distribución de Amazon CloudFront con Amazon S3 como origen."
    },
    "explanation": "• Amazon CloudFront es una red de entrega de contenido (CDN) global que almacena en caché archivos estáticos y videos en ubicaciones perimetrales (Edge Locations) cercanas a los usuarios.\n• La transferencia de datos desde un origen de AWS (como Amazon S3) hacia las ubicaciones perimetrales de CloudFront es totalmente gratuita ($0.00/GB).\n• Además, las tarifas de transferencia de datos saliente (Data Transfer Out) desde CloudFront hacia internet son notablemente más económicas que las de Amazon S3 directo a internet, reduciendo sustancialmente los costos de ancho de banda y transferencia.\n• La opción A no aborda la transferencia de datos de los videos almacenados en S3.\n• La opción B duplica costos de infraestructura y añade cargos por transferencia inter-región.\n• La opción C genera costos adicionales por replicación entre regiones (Cross-Region Replication) y duplica los cargos de almacenamiento de los videos sin reducir las tarifas de salida a internet.",
    "why": [
      "Amazon CloudFront almacena en caché los videos en ubicaciones borde; la transferencia de S3 hacia CloudFront es gratuita y las tarifas de salida de CloudFront a internet son más bajas."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "Migrar la API a ECS optimiza la ejecución del contenedor pero no altera el costo de transferencia de datos de los videos en S3."
      },
      {
        "l": [
          "B"
        ],
        "t": "Copiar el entorno en otra región incrementa la infraestructura y agrega costos de transferencia de datos entre regiones."
      },
      {
        "l": [
          "C"
        ],
        "t": "Replicar buckets entre regiones genera costos de transferencia por replicación y doble costo de almacenamiento."
      }
    ]
  },
  {
    "id": "sb-d4-practice-03",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "La aplicación de una empresa permite a los usuarios subir archivos de imagen a un bucket de Amazon S3. Estos archivos se acceden con frecuencia durante los primeros 30 días. Después de 30 días, se acceden con muy poca frecuencia. Sin embargo, los archivos deben almacenarse de forma duradera y estar disponibles en milisegundos cuando se soliciten. Un arquitecto de soluciones debe configurar una política de ciclo de vida que minimice el costo total y cumpla con los requisitos. ¿Qué solución cumplirá con estos requisitos?",
    "options": {
      "A": "Configurar una política de ciclo de vida para mover los archivos a la clase de almacenamiento S3 Glacier Flexible Retrieval después de 30 días.",
      "B": "Configurar una política de ciclo de vida para mover los archivos a la clase de almacenamiento S3 Glacier Deep Archive después de 30 días.",
      "C": "Configurar una política de ciclo de vida para mover los archivos a la clase de almacenamiento S3 One Zone-Infrequent Access (S3 One Zone-IA) después de 30 días.",
      "D": "Configurar una política de ciclo de vida para mover los archivos a la clase de almacenamiento S3 Standard-Infrequent Access (S3 Standard-IA) después de 30 días."
    },
    "explanation": "• S3 Standard-Infrequent Access (S3 Standard-IA) está diseñado para datos a los que se accede con poca frecuencia pero que requieren acceso inmediato en milisegundos cuando son solicitados.\n• S3 Standard-IA ofrece una durabilidad de 11 nueves (99.999999999%) distribuida en un mínimo de tres Availability Zones a un costo de almacenamiento por GB mucho menor que S3 Standard.\n• Las opciones A y B son incorrectas porque S3 Glacier Flexible Retrieval (recuperación de minutos a horas) y S3 Glacier Deep Archive (recuperación de 12 a 48 horas) son clases de archivo diferido que no permiten acceso en milisegundos.\n• La opción C es incorrecta porque S3 One Zone-IA almacena los datos en una sola Availability Zone y se perderían en caso de destrucción física de la zona; solo es adecuada para copias secundarias o datos fácilmente recreables.",
    "why": [
      "S3 Standard-IA ofrece disponibilidad inmediata en milisegundos y durabilidad Multi-AZ a un costo de almacenamiento reducido para datos con poco acceso pasados los 30 días."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "S3 Glacier Flexible Retrieval requiere tiempos de espera de minutos a horas y no admite recuperación en milisegundos."
      },
      {
        "l": [
          "B"
        ],
        "t": "S3 Glacier Deep Archive demora entre 12 y 48 horas para recuperar objetos, incumpliendo el requisito de milisegundos."
      },
      {
        "l": [
          "C"
        ],
        "t": "S3 One Zone-IA reside en una sola zona de disponibilidad y no ofrece la durabilidad y resiliencia multi-AZ necesaria para imágenes de clientes."
      }
    ]
  },
  {
    "id": "sb-d4-practice-04",
    "module": "Cost Optimization",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": false,
    "answer": [
      "D"
    ],
    "q": "Una empresa utiliza un bucket de Amazon S3 para almacenar datos archivados para auditorías. La empresa necesita almacenamiento a largo plazo para estos datos. La información rara vez se consulta y debe estar disponible para su recuperación al siguiente día hábil. Tras una revisión trimestral, la empresa desea reducir el costo de almacenamiento del bucket de S3. Un arquitecto de soluciones debe recomendar la solución más costo-eficiente para almacenar los datos archivados. ¿Qué solución cumplirá con estos requisitos?",
    "options": {
      "A": "Utilizar una regla de configuración de ciclo de vida de S3 (S3 Lifecycle) para mover los datos a S3 Standard-Infrequent Access (S3 Standard-IA).",
      "B": "Almacenar los datos en otro bucket de S3 en una Región de AWS diferente.",
      "C": "Almacenar los datos en una instancia Amazon EC2 que utiliza Amazon Elastic Block Store (Amazon EBS).",
      "D": "Almacenar los datos en S3 Glacier Flexible Retrieval."
    },
    "explanation": "• Amazon S3 Glacier Flexible Retrieval está diseñado para archivado a largo plazo de datos consultados esporádicamente, ofreciendo opciones de recuperación flexibles: Expedited (1 a 5 minutos), Standard (3 a 5 horas) y Bulk (5 a 12 horas).\n• La disponibilidad 'al siguiente día hábil' se satisface holgadamente mediante la recuperación masiva (Bulk retrieval, gratuita) o estándar (3-5 h) de S3 Glacier Flexible Retrieval, con un costo de almacenamiento de aproximadamente un tercio o un cuarto del costo de S3 Standard-IA (~$0.0036/GB vs ~$0.0125/GB).\n• La opción A es incorrecta porque S3 Standard-IA está diseñada para acceso inmediato en milisegundos y su almacenamiento es considerablemente más costoso que las clases Glacier.\n• La opción B es incorrecta porque cambiar de región no soluciona la clase de almacenamiento y puede acarrear costos de transferencia.\n• La opción C es incorrecta porque Amazon EBS es almacenamiento en bloque de alto rendimiento con costos por GB notablemente más elevados y requiere una instancia EC2 encendida continuamente.",
    "why": [
      "S3 Glacier Flexible Retrieval proporciona almacenamiento de archivado a muy bajo costo y cumple holgadamente con la entrega al siguiente día hábil (recuperación en 3-12 horas)."
    ],
    "others": [
      {
        "l": [
          "A"
        ],
        "t": "S3 Standard-IA está pensado para recuperación en milisegundos y tiene un costo por GB mucho mayor que Glacier."
      },
      {
        "l": [
          "B"
        ],
        "t": "Mover los datos a otra región no altera la clase de almacenamiento ni ofrece la optimización de costos requerida."
      },
      {
        "l": [
          "C"
        ],
        "t": "Amazon EBS es almacenamiento de bloques para instancias activas y resulta órdenes de magnitud más caro que el archivado en S3."
      }
    ]
  },
  {
    "id": "sb-d4-practice-05",
    "module": "Database",
    "domain": "Domain 4: Design Cost-Optimized Architectures",
    "multi": true,
    "answer": [
      "A",
      "C"
    ],
    "q": "Un hospital está migrando desde otro proveedor de nube a AWS y desea modernizarse a medida que migra. El hospital cuenta con aplicaciones contenedorizadas que se ejecutan en tabletas. Durante los picos generados por aumentos en las visitas de pacientes, la comunicación desde las aplicaciones hacia la base de datos central en ocasiones falla. En consecuencia, el hospital actualmente hace que las aplicaciones intenten escribir en la base de datos central una vez; si esa escritura falla, la aplicación escribe en una base de datos PostgreSQL local dedicada, administrada por el equipo de TI del hospital on-premises. Cada una de las bases de datos PostgreSQL luego envía información por lotes a la base de datos central. El hospital solicita recomendaciones para migrar o refactorizar el proceso de escritura de base de datos a fin de reducir la sobrecarga operativa. ¿Qué debería recomendar el arquitecto de soluciones? (Seleccione DOS)",
    "options": {
      "A": "Migrar las bases de datos locales a Amazon Aurora Serverless PostgreSQL-Compatible Edition.",
      "B": "Migrar las bases de datos PostgreSQL a una instancia de Amazon RDS con una réplica de lectura que reemplace a cada una de las bases de datos locales.",
      "C": "Refactorizar las aplicaciones para utilizar Amazon Simple Queue Service (Amazon SQS) y eliminar las bases de datos locales de PostgreSQL.",
      "D": "Migrar las aplicaciones contenedorizadas a AWS Fargate.",
      "E": "Refactorizar la base de datos central para agregar una caché de carga diferida (lazy loading) con Amazon ElastiCache delante de la base de datos."
    },
    "explanation": "• Refactorizar las aplicaciones para enviar las escrituras a una cola de Amazon SQS (Opción C) desacopla por completo la ingesta de datos de la base de datos central. SQS actúa como un búfer elástico y confiable durante picos de tráfico, eliminando escrituras perdidas y haciendo innecesarias las bases de datos PostgreSQL locales de contingencia, lo que reduce radicalmente la sobrecarga de mantenimiento del equipo de TI.\n• Migrar las bases de datos a Amazon Aurora Serverless PostgreSQL-Compatible Edition (Opción A) permite que la capacidad de cómputo escale automáticamente (en ACUs) según la demanda de escrituras y baje en períodos valle sin aprovisionamiento manual de instancias ni gestión de infraestructura.\n• La opción B es incorrecta porque las réplicas de lectura son de solo lectura y no pueden procesar escrituras para absorber sobrecargas transaccionales.\n• La opción D es incorrecta porque migrar los contenedores de las tabletas a Fargate no resuelve el cuello de botella ni los fallos de comunicación en las escrituras a la base de datos.\n• La opción E es incorrecta porque el almacenamiento en caché acelera las consultas de lectura, pero no resuelve la absorción de transacciones de escritura.",
    "why": [
      "Amazon SQS desacopla la arquitectura y amortigua picos de escritura eliminando bases de datos temporales, y Amazon Aurora Serverless escala la capacidad de la base de datos automáticamente con mínima sobrecarga operativa."
    ],
    "others": [
      {
        "l": [
          "B"
        ],
        "t": "Las réplicas de lectura solo admiten consultas de lectura y no pueden recibir transacciones de escritura."
      },
      {
        "l": [
          "D"
        ],
        "t": "Mover contenedores a Fargate no soluciona el problema de conectividad o capacidad en las escrituras de la base de datos."
      },
      {
        "l": [
          "E"
        ],
        "t": "El almacenamiento en caché lazy-load solo optimiza lecturas frecuentes y no ayuda a mitigar fallos en escrituras."
      }
    ]
  }
];
