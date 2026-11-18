# 📝 Banco de Preguntas y Escenarios de Examen (Con Análisis Metodológico)

Este banco de preguntas aplica la técnica de desglose para entender exactamente cómo piensa el examinador de AWS y cómo descartar distractores con rapidez.

---

### Escenario 1: Ingesta Global de Datos a Gran Escala

**Pregunta**:  
Una compañía recolecta datos meteorológicos (temperatura, humedad, presión) de sensores distribuidos en ciudades de múltiples continentes. El volumen promedio de datos recopilados diariamente por cada sitio es de 500 GB. Cada sitio cuenta con una conexión a internet de alta velocidad.  
La compañía desea consolidar y cargar estos datos desde todos los sitios globales lo más rápido posible en un único bucket de Amazon S3. La solución debe **minimizar la complejidad operativa**.

¿Qué solución cumple con estos requisitos?

- A. Configurar una VPN Site-to-Site desde cada sitio hacia una VPC de AWS y subir los datos mediante un Gateway VPC Endpoint.
- B. Habilitar **S3 Transfer Acceleration** en el bucket de S3 de destino y utilizar **multipart uploads** para cargar los datos directamente.
- C. Enviar los datos mediante AWS Snowball Edge a una estación base regional cada semana.
- D. Desplegar una flota de instancias EC2 con un clúster de bases de datos relacionales en cada continente y configurar replicación hacia S3.

#### 🔍 Desglose Metodológico:
- **Línea General**: Cargar 500 GB diarios de datos desde múltiples continentes hacia un bucket central de S3.
- **Condiciones Clave**: Conexiones a internet de alta velocidad disponibles en cada sitio.
- **Restricción Crítica**: *"as quickly as possible"* y *"minimize operational complexity"*.
- **✅ Respuesta Correcta: B**
- **Justificación Técnica**:
  - **S3 Transfer Acceleration** aprovecha la red global de más de 450 Edge Locations de Amazon CloudFront. Los datos viajan desde el sitio a internet público solo hasta el Edge Location más cercano, y desde allí transitan a través de la red troncal privada de alta velocidad y baja congestión de AWS hasta el bucket de S3 (hasta un 50-500% de mejora en velocidad).
  - **Multipart Uploads** son obligatorios para archivos mayores a 5 GB y altamente recomendados para más de 100 MB, permitiendo transferencias paralelas e independientes de partes.
  - La opción A añade sobrecarga de configuración de docenas de túneles VPN y no aprovecha la red de borde. La opción C no es diaria ni en tiempo real. La opción D introduce una sobrecarga administrativa y de costos inmensa.

---

### Escenario 2: Análisis de Logs de Aplicación sin Servidores

**Pregunta**:  
Una empresa necesita analizar los archivos de registro (logs) generados por su aplicación propietaria. Los registros se almacenan en formato JSON dentro de un bucket de Amazon S3. Las consultas serán sencillas, esporádicas y se ejecutarán bajo demanda. Un arquitecto de soluciones debe diseñar la solución con la **menor sobrecarga operativa posible** (*least operational overhead*).

¿Qué debe hacer el arquitecto?

- A. Cargar los datos desde S3 a un clúster de Amazon Redshift de múltiples nodos y ejecutar consultas SQL.
- B. Desplegar un clúster de Amazon EMR con Apache Spark para procesar los archivos JSON.
- C. Utilizar **Amazon Athena** directamente sobre el bucket de Amazon S3 para ejecutar las consultas SQL bajo demanda.
- D. Escribir un script en Python desplegado en instancias EC2 que descargue los logs y los procese en memoria.

#### 🔍 Desglose Metodológico:
- **Línea General**: Consultar logs en JSON almacenados en S3.
- **Condiciones**: Consultas simples, esporádicas y bajo demanda.
- **Restricción Crítica**: *"least operational overhead"*.
- **✅ Respuesta Correcta: C**
- **Justificación Técnica**:
  - **Amazon Athena** es un servicio de consultas SQL totalmente **Serverless** que interactúa directamente con datos en reposo en Amazon S3 sin necesidad de aprovisionar infraestructura, ETLs ni bases de datos intermedias.
  - Se cobra únicamente por los datos escaneados ($5 por TB).
  - Opciones A y B exigen aprovisionar y administrar servidores/clústeres (Redshift o EMR), lo que incumple el requisito de mínima sobrecarga operativa para consultas esporádicas.

---

### Escenario 3: Acceso a S3 en Múltiples Cuentas de una Organización

**Pregunta**:  
Una empresa utiliza **AWS Organizations** para administrar más de 50 cuentas de AWS pertenecientes a distintos departamentos. La cuenta de administración (*Management Account*) posee un bucket de Amazon S3 que contiene informes estratégicos. La empresa necesita restringir el acceso a este bucket para que **únicamente** los usuarios y roles pertenecientes a las cuentas de la organización puedan leerlo. La solución debe tener la **menor sobrecarga operativa**.

¿Qué solución cumple con estos requisitos?

- A. Modificar la política del bucket S3 para listar explícitamente los ARNs de las 50 cuentas en el elemento `Principal`.
- B. Añadir una condición a la política del bucket S3 utilizando la clave de condición global `aws:PrincipalOrgID` con el ID de la organización.
- C. Crear un rol IAM en la cuenta de administración y federar a todos los usuarios de las 50 cuentas mediante SAML 2.0.
- D. Configurar una Service Control Policy (SCP) que deniegue el acceso a S3 fuera de la VPC.

#### 🔍 Desglose Metodológico:
- **Línea General**: Permitir acceso al bucket de S3 a todas las cuentas dentro de AWS Organizations.
- **Restricción Crítica**: Mínima sobrecarga operativa (evitar modificar la política cada vez que se cree una nueva cuenta en la organización).
- **✅ Respuesta Correcta: B**
- **Justificación Técnica**:
  - La clave de condición global `aws:PrincipalOrgID` simplifica la especificación del elemento Principal en políticas basadas en recursos (como las S3 Bucket Policies).
  - Al asociar el `Organization ID`, cualquier cuenta que forme parte o se una en el futuro a la organización obtendrá acceso automáticamente sin necesidad de actualizar la política del bucket manualmente con cada nuevo Account ID.

---

### Escenario 4: Conectividad Privada hacia Amazon S3 y Optimización de Costos

**Pregunta**:  
Una flota de instancias Amazon EC2 se ejecuta en una subred privada dentro de una VPC. Las instancias descargan terabytes de imágenes desde un bucket de Amazon S3 diariamente para su procesamiento. Actualmente, las instancias acceden a S3 a través de un **NAT Gateway** público. La empresa nota que la factura mensual presenta un costo extremadamente elevado por procesamiento de datos en el NAT Gateway y desea eliminar este costo manteniendo el acceso privado a S3.

¿Qué debe hacer el arquitecto de soluciones?

- A. Reemplazar el NAT Gateway por una instancia NAT desplegada en una subred pública.
- B. Crear un **Gateway VPC Endpoint** para Amazon S3 y actualizar la tabla de rutas de la subred privada.
- C. Crear un túnel AWS Site-to-Site VPN entre la subred privada y Amazon S3.
- D. Asignar direcciones IP públicas a todas las instancias EC2 y retirar el NAT Gateway.

#### 🔍 Desglose Metodológico:
- **Línea General**: Reducir costos de procesamiento de datos hacia S3 desde subredes privadas.
- **Condición**: Las instancias no deben exponerse directamente a internet y deben acceder a S3 de forma privada.
- **✅ Respuesta Correcta: B**
- **Justificación Técnica**:
  - Los **Gateway VPC Endpoints** para Amazon S3 y DynamoDB son **100% gratuitos** (sin costo por hora ni tarifa por gigabyte procesado).
  - Al crearlo y asociarlo a la tabla de rutas de la subred privada, el tráfico hacia S3 viaja directamente por la red interna privada de AWS, sorteando el NAT Gateway por completo y eliminando el cobro de $0.045/GB.

---

### Escenario 5: Base de Datos con Rendimiento de Lectura en Microsegundos

**Pregunta**:  
Una plataforma de comercio electrónico utiliza Amazon DynamoDB como base de datos para almacenar el catálogo de productos. Durante eventos de promociones masivas, la aplicación experimenta millones de lecturas por segundo para un conjunto reducido de productos populares. El equipo de ingeniería requiere reducir la latencia de lectura de milisegundos a **microsegundos** sin realizar cambios arquitectónicos mayores ni reescribir la lógica de la aplicación.

¿Qué solución cumple con estos requisitos?

- A. Migrar la base de datos a un clúster de Amazon Aurora con 15 réplicas de lectura.
- B. Desplegar un clúster de **DynamoDB Accelerator (DAX)** delante de la tabla de DynamoDB.
- C. Configurar un clúster de Amazon Redshift y sincronizar las tablas mediante AWS DataSync.
- D. Aumentar las Unidades de Capacidad de Lectura (RCU) aprovisionadas en la tabla de DynamoDB.

#### 🔍 Desglose Metodológico:
- **Línea General**: Escalar lecturas masivas sobre DynamoDB.
- **Restricción Crítica**: *"sub-millisecond / microsecond read latency"* y *"without rewriting application logic"*.
- **✅ Respuesta Correcta: B**
- **Justificación Técnica**:
  - **DynamoDB Accelerator (DAX)** es una solución de caché en memoria diseñada exclusivamente para DynamoDB.
  - Ofrece respuestas en **microsegundos** para cargas de trabajo intensivas en lectura.
  - Es compatible a nivel de API con el SDK de DynamoDB (in-line cache), por lo que las aplicaciones no necesitan modificar su código de llamadas para integrarlo.
