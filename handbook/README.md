# 📘 AWS Solutions Architect – Associate (SAA-C03) Handbook
## 🏛️ Catálogo Técnico Consolidado de 119 Servicios de AWS y Triggers de Examen

> **Versión Bilingüe (Español / English)** adaptada y estructurada para preparación intensiva.
> **Documento Original:** 299 páginas en PDF disponible en [`_sources/handbook/AWS-Solutions-Architect-Associate-SAA-C03-Handbook.pdf`](../_sources/handbook/AWS-Solutions-Architect-Associate-SAA-C03-Handbook.pdf) o [`handbook.pdf`](../handbook.pdf).

---

## 🔍 ¿Qué es este Handbook y por qué es invaluable para el Examen?
Este Handbook es una referencia exhaustiva y estandarizada que desglosa **119 servicios de AWS** en fichas modulares. Cada servicio responde exactamente a la misma estructura que evalúa Amazon Web Services en el examen **SAA-C03**:
1. **📌 What It Is / ¿Qué es?:** Definición precisa del servicio y su rol arquitectónico.
2. **⚙️ Key Features / Características Clave:** Capacidades esenciales, rendimiento y escalabilidad.
3. **🏗️ How It Works / Cómo Funciona:** Arquitectura interna, componentes y opciones de despliegue.
4. **🔒 Security, Monitoring & Compliance:** Cifrado (at rest / in transit), permisos IAM, integración con CloudWatch y CloudTrail.
5. **💡 Use Cases / Casos de Uso:** Escenarios empresariales típicos.
6. **🎯 Exam Tips & Triggers:** **La clave del examen** — Las frases clave y patrones que identifican la opción correcta frente a distractores.
7. **📝 Quick Summary:** Resumen conceptual en un párrafo.

---

## 📊 Mapeo Matricial por Dominios del Examen SAA-C03
| Dominio Oficial SAA-C03 | Ponderación | Categorías del Handbook Relevantes |
| :--- | :---: | :--- |
| **Domain 1: Design Secure Architectures** | **30%** | [🛡️ 14. Security, Identity & Compliance](14-security-identity-compliance.md), [⚙️ 10. Management & Governance](10-management-governance.md), [🌐 13. Networking](13-networking-content-delivery.md) |
| **Domain 2: Design Resilient Architectures** | **26%** | [💻 04. Compute](04-compute.md), [📦 05. Containers](05-containers.md), [🔗 02. Application Integration](02-application-integration.md), [🌐 13. Networking](13-networking-content-delivery.md), [💾 16. Storage](16-storage.md) |
| **Domain 3: Design High-Performing Architectures** | **24%** | [🗄️ 06. Databases](06-databases.md), [💾 16. Storage](16-storage.md), [📊 01. Analytics](01-analytics.md), [⚡ 15. Serverless](15-serverless.md), [🌐 13. Networking (CloudFront / Global Accelerator)](13-networking-content-delivery.md) |
| **Domain 4: Design Cost-Optimized Architectures** | **20%** | [💰 03. Cost Management](03-cost-management.md), [💾 16. Storage (S3 Lifecycle / Tiers)](16-storage.md), [💻 04. Compute (Spot / Savings Plans)](04-compute.md), [🚚 12. Migration & Transfer](12-migration-transfer.md) |

---

## 🗂️ Las 16 Categorías de Servicios del Handbook
| # | Categoría (ES / EN) | Servicios | Páginas PDF | Servicios Clave Destacados | Enlace Directo |
| :---: | :--- | :---: | :---: | :--- | :---: |
| 01 | 📊 **Analítica de Datos**<br>*Analytics* | 11 | 4 – 38 | Athena, EMR, Glue, Kinesis, MSK, OpenSearch, QuickSight, Redshift | [📖 Leer Guía](01-analytics.md) |
| 02 | 🔗 **Integración y Desacoplamiento**<br>*Application Integration* | 7 | 39 – 59 | SQS, SNS, EventBridge, Step Functions, Amazon MQ, AppSync, AppFlow | [📖 Leer Guía](02-application-integration.md) |
| 03 | 💰 **Gestión de Costos**<br>*AWS Cost Management* | 4 | 60 – 62 | Cost Explorer, AWS Budgets, CUR, Savings Plans, Compute Optimizer | [📖 Leer Guía](03-cost-management.md) |
| 04 | 💻 **Cómputo en la Nube**<br>*Compute* | 7 | 63 – 81 | EC2, Auto Scaling Groups (ASG), Elastic Beanstalk, Batch, Outposts, Wavelength | [📖 Leer Guía](04-compute.md) |
| 05 | 📦 **Contenedores y Orquestación**<br>*Containers* | 6 | 82 – 94 | ECS, EKS, ECR, ECS Anywhere, EKS Anywhere, EKS Distro | [📖 Leer Guía](05-containers.md) |
| 06 | 🗄️ **Bases de Datos y Caching**<br>*Databases* | 9 | 95 – 122 | RDS, Aurora, DynamoDB, ElastiCache, DocumentDB, Neptune, QLDB, Keyspaces | [📖 Leer Guía](06-databases.md) |
| 07 | 🛠️ **Herramientas de Diagnóstico**<br>*Developer Tools* | 1 | 123 – 125 | AWS X-Ray (Trazabilidad distribuida) | [📖 Leer Guía](07-developer-tools.md) |
| 08 | 📱 **Front-End, APIs y Móvil**<br>*Front-End & Mobile* | 4 | 126 – 136 | API Gateway, AWS Amplify, AWS Device Farm, Amazon Pinpoint | [📖 Leer Guía](08-frontend-mobile.md) |
| 09 | 🤖 **Inteligencia Artificial y ML**<br>*Machine Learning* | 11 | 137 | Rekognition, Transcribe, Polly, Translate, Lex, Comprehend, Textract, Kendra, SageMaker | [📖 Leer Guía](09-machine-learning.md) |
| 10 | ⚙️ **Gestión, Monitoreo y Gobernanza**<br>*Management & Governance* | 17 | 138 – 179 | Organizations, Control Tower, CloudFormation, CloudWatch, CloudTrail, Config, Systems Manager | [📖 Leer Guía](10-management-governance.md) |
| 11 | 🎬 **Servicios Multimedia**<br>*Media Services* | 1 | 180 – 181 | Amazon Elastic Transcoder | [📖 Leer Guía](11-media-services.md) |
| 12 | 🚚 **Migración y Transferencia**<br>*Migration & Transfer* | 7 | 182 – 199 | DMS, MGN (App Migration), DataSync, Snowball Edge, Snowmobile, Transfer Family | [📖 Leer Guía](12-migration-transfer.md) |
| 13 | 🌐 **Redes y Entrega de Contenido**<br>*Networking & Content Delivery* | 7 | 200 – 225 | VPC, Route 53, CloudFront, ELB, Global Accelerator, Transit Gateway, Direct Connect | [📖 Leer Guía](13-networking-content-delivery.md) |
| 14 | 🛡️ **Seguridad, Identidad y Cumplimiento**<br>*Security, Identity & Compliance* | 19 | 226 – 270 | IAM, KMS, Secrets Manager, GuardDuty, WAF, Shield, Macie, Inspector, Cognito, CloudHSM | [📖 Leer Guía](14-security-identity-compliance.md) |
| 15 | ⚡ **Arquitecturas Serverless**<br>*Serverless* | 2 | 271 – 276 | AWS Lambda, AWS Fargate | [📖 Leer Guía](15-serverless.md) |
| 16 | 💾 **Almacenamiento en la Nube**<br>*Storage* | 6 | 277 – 298 | Amazon S3, EBS, EFS, FSx (Lustre/Windows/ONTAP), AWS Backup, Storage Gateway | [📖 Leer Guía](16-storage.md) |

---

## 🔤 Índice Alfabético de los 119 Servicios
Utiliza esta tabla para buscar cualquier servicio de AWS y acceder directamente a su ficha técnica con **Exam Tips**:

| Servicio | Categoría | Dominio SAA-C03 | Ficha Técnica |
| :--- | :--- | :--- | :---: |
| **Amazon API Gateway** | FRONT-END & MOBILE | p. 129 | [Ver Ficha](08-frontend-mobile.md#amazon-api-gateway) |
| **Amazon AppFlow** | APPLICATION INTEGRATION | p. 39 | [Ver Ficha](02-application-integration.md#amazon-appflow) |
| **Amazon Athena** | ANALYTICS | p. 4 | [Ver Ficha](01-analytics.md#amazon-athena) |
| **Amazon Aurora** | DATABASE | p. 95 | [Ver Ficha](06-databases.md#amazon-aurora) |
| **Amazon CloudFront** | NETWORKING & CONTENT DELIVERY | p. 200 | [Ver Ficha](13-networking-content-delivery.md#amazon-cloudfront) |
| **Amazon CloudWatch** | MANAGEMENT & GOVERNANCE | p. 143 | [Ver Ficha](10-management-governance.md#amazon-cloudwatch) |
| **Amazon Cognito** | SECURITY, IDENTITY & COMPLIANCE | p. 237 | [Ver Ficha](14-security-identity-compliance.md#amazon-cognito) |
| **Amazon Comprehend** | MACHINE LEARNING | p. 137 | [Ver Ficha](09-machine-learning.md#amazon-comprehend) |
| **Amazon Detective** | SECURITY, IDENTITY & COMPLIANCE | p. 240 | [Ver Ficha](14-security-identity-compliance.md#amazon-detective) |
| **Amazon DocumentDB (with MongoDB compatibility)** | DATABASE | p. 99 | [Ver Ficha](06-databases.md#amazon-documentdb-with-mongodb-compatibility) |
| **Amazon DynamoDB** | DATABASE | p. 102 | [Ver Ficha](06-databases.md#amazon-dynamodb) |
| **Amazon EC2** | COMPUTE | p. 66 | [Ver Ficha](04-compute.md#amazon-ec2) |
| **Amazon EC2 Auto Scaling** | COMPUTE | p. 71 | [Ver Ficha](04-compute.md#amazon-ec2-auto-scaling) |
| **Amazon ECS Anywhere** | CONTAINERS | p. 82 | [Ver Ficha](05-containers.md#amazon-ecs-anywhere) |
| **Amazon EKS Anywhere** | CONTAINERS | p. 83 | [Ver Ficha](05-containers.md#amazon-eks-anywhere) |
| **Amazon EKS Distro** | CONTAINERS | p. 84 | [Ver Ficha](05-containers.md#amazon-eks-distro) |
| **Amazon Elastic Block Store (Amazon EBS)** | STORAGE | p. 280 | [Ver Ficha](16-storage.md#amazon-elastic-block-store-amazon-ebs) |
| **Amazon Elastic Container Registry (Amazon ECR)** | CONTAINERS | p. 89 | [Ver Ficha](05-containers.md#amazon-elastic-container-registry-amazon-ecr) |
| **Amazon Elastic Container Service(Amazon ECS)** | CONTAINERS | p. 85 | [Ver Ficha](05-containers.md#amazon-elastic-container-service-amazon-ecs) |
| **Amazon Elastic File System (Amazon EFS)** | STORAGE | p. 284 | [Ver Ficha](16-storage.md#amazon-elastic-file-system-amazon-efs) |
| **Amazon Elastic Kubernetes Service (Amazon EKS)** | CONTAINERS | p. 92 | [Ver Ficha](05-containers.md#amazon-elastic-kubernetes-service-amazon-eks) |
| **Amazon Elastic Transcoder** | MEDIA SERVICES | p. 180 | [Ver Ficha](11-media-services.md#amazon-elastic-transcoder) |
| **Amazon ElastiCache** | DATABASE | p. 105 | [Ver Ficha](06-databases.md#amazon-elasticache) |
| **Amazon EMR** | ANALYTICS | p. 13 | [Ver Ficha](01-analytics.md#amazon-emr) |
| **Amazon EventBridge** | APPLICATION INTEGRATION | p. 43 | [Ver Ficha](02-application-integration.md#amazon-eventbridge) |
| **Amazon Forecast** | MACHINE LEARNING | p. 137 | [Ver Ficha](09-machine-learning.md#amazon-forecast) |
| **Amazon Fraud Detector** | MACHINE LEARNING | p. 137 | [Ver Ficha](09-machine-learning.md#amazon-fraud-detector) |
| **Amazon FSx (for all types)** | STORAGE | p. 287 | [Ver Ficha](16-storage.md#amazon-fsx-for-all-types) |
| **Amazon GuardDuty** | SECURITY, IDENTITY & COMPLIANCE | p. 248 | [Ver Ficha](14-security-identity-compliance.md#amazon-guardduty) |
| **Amazon Inspector** | SECURITY, IDENTITY & COMPLIANCE | p. 254 | [Ver Ficha](14-security-identity-compliance.md#amazon-inspector) |
| **Amazon Kendra** | MACHINE LEARNING | p. 137 | [Ver Ficha](09-machine-learning.md#amazon-kendra) |
| **Amazon Keyspaces (for Apache Cassandra)** | DATABASE | p. 108 | [Ver Ficha](06-databases.md#amazon-keyspaces-for-apache-cassandra) |
| **Amazon Kinesis** | ANALYTICS | p. 21 | [Ver Ficha](01-analytics.md#amazon-kinesis) |
| **Amazon Lex** | MACHINE LEARNING | p. 137 | [Ver Ficha](09-machine-learning.md#amazon-lex) |
| **Amazon License Manager** | MANAGEMENT & GOVERNANCE | p. 156 | [Ver Ficha](10-management-governance.md#amazon-license-manager) |
| **Amazon Macie** | SECURITY, IDENTITY & COMPLIANCE | p. 256 | [Ver Ficha](14-security-identity-compliance.md#amazon-macie) |
| **Amazon Managed Grafana** | MANAGEMENT & GOVERNANCE | p. 159 | [Ver Ficha](10-management-governance.md#amazon-managed-grafana) |
| **Amazon Managed Streaming for Apache Kafka (Amazon MSK)** | ANALYTICS | p. 27 | [Ver Ficha](01-analytics.md#amazon-managed-streaming-for-apache-kafka-amazon-msk) |
| **Amazon MQ** | APPLICATION INTEGRATION | p. 47 | [Ver Ficha](02-application-integration.md#amazon-mq) |
| **Amazon Neptune** | DATABASE | p. 111 | [Ver Ficha](06-databases.md#amazon-neptune) |
| **Amazon OpenSearch Service** | ANALYTICS | p. 30 | [Ver Ficha](01-analytics.md#amazon-opensearch-service) |
| **Amazon Pinpoint** | FRONT-END & MOBILE | p. 135 | [Ver Ficha](08-frontend-mobile.md#amazon-pinpoint) |
| **Amazon Polly** | MACHINE LEARNING | p. 137 | [Ver Ficha](09-machine-learning.md#amazon-polly) |
| **Amazon Quantum Ledger Database (Amazon QLDB)** | DATABASE | p. 114 | [Ver Ficha](06-databases.md#amazon-quantum-ledger-database-amazon-qldb) |
| **Amazon QuickSight** | ANALYTICS | p. 33 | [Ver Ficha](01-analytics.md#amazon-quicksight) |
| **Amazon RDS** | DATABASE | p. 117 | [Ver Ficha](06-databases.md#amazon-rds) |
| **Amazon Redshift** | ANALYTICS | p. 36 | [Ver Ficha](06-databases.md#amazon-redshift) |
| **Amazon Redshift** | DATABASE | p. 120 | [Ver Ficha](06-databases.md#amazon-redshift) |
| **Amazon Rekognition** | MACHINE LEARNING | p. 137 | [Ver Ficha](09-machine-learning.md#amazon-rekognition) |
| **Amazon Route 53** | NETWORKING & CONTENT DELIVERY | p. 216 | [Ver Ficha](13-networking-content-delivery.md#amazon-route-53) |
| **Amazon S3** | STORAGE | p. 291 | [Ver Ficha](16-storage.md#amazon-s3) |
| **Amazon SageMaker** | MACHINE LEARNING | p. 137 | [Ver Ficha](09-machine-learning.md#amazon-sagemaker) |
| **Amazon Simple Notification Service (Amazon SNS)** | APPLICATION INTEGRATION | p. 50 | [Ver Ficha](02-application-integration.md#amazon-simple-notification-service-amazon-sns) |
| **Amazon Simple Queue Service (Amazon SQS)** | APPLICATION INTEGRATION | p. 53 | [Ver Ficha](02-application-integration.md#amazon-simple-queue-service-amazon-sqs) |
| **Amazon Textract** | MACHINE LEARNING | p. 137 | [Ver Ficha](09-machine-learning.md#amazon-textract) |
| **Amazon Transcribe** | MACHINE LEARNING | p. 137 | [Ver Ficha](09-machine-learning.md#amazon-transcribe) |
| **Amazon Translate** | MACHINE LEARNING | p. 137 | [Ver Ficha](09-machine-learning.md#amazon-translate) |
| **Amazon VPC** | NETWORKING & CONTENT DELIVERY | p. 222 | [Ver Ficha](13-networking-content-delivery.md#amazon-vpc) |
| **AWS Amplify** | FRONT-END & MOBILE | p. 126 | [Ver Ficha](08-frontend-mobile.md#aws-amplify) |
| **AWS Application Discovery Service** | MIGRATION AND TRANSFER | p. 182 | [Ver Ficha](12-migration-transfer.md#aws-application-discovery-service) |
| **AWS Application Migration Service** | MIGRATION AND TRANSFER | p. 184 | [Ver Ficha](12-migration-transfer.md#aws-application-migration-service) |
| **AWS AppSync** | APPLICATION INTEGRATION | p. 41 | [Ver Ficha](02-application-integration.md#aws-appsync) |
| **AWS Artifact** | SECURITY, IDENTITY & COMPLIANCE | p. 226 | [Ver Ficha](14-security-identity-compliance.md#aws-artifact) |
| **AWS Audit Manager** | SECURITY, IDENTITY & COMPLIANCE | p. 228 | [Ver Ficha](14-security-identity-compliance.md#aws-audit-manager) |
| **AWS Backup** | STORAGE | p. 277 | [Ver Ficha](16-storage.md#aws-backup) |
| **AWS Batch** | COMPUTE | p. 63 | [Ver Ficha](04-compute.md#aws-batch) |
| **AWS Budgets** | AWS COST MANAGEMENT | p. 60 | [Ver Ficha](03-cost-management.md#aws-budgets) |
| **AWS Certificate Manager (ACM)** | SECURITY, IDENTITY & COMPLIANCE | p. 231 | [Ver Ficha](14-security-identity-compliance.md#aws-certificate-manager-acm) |
| **AWS CloudFormation** | MANAGEMENT & GOVERNANCE | p. 138 | [Ver Ficha](10-management-governance.md#aws-cloudformation) |
| **AWS CloudHSM** | SECURITY, IDENTITY & COMPLIANCE | p. 233 | [Ver Ficha](14-security-identity-compliance.md#aws-cloudhsm) |
| **AWS CloudTrail** | MANAGEMENT & GOVERNANCE | p. 140 | [Ver Ficha](10-management-governance.md#aws-cloudtrail) |
| **AWS Command Line Interface (AWS CLI)** | MANAGEMENT & GOVERNANCE | p. 146 | [Ver Ficha](10-management-governance.md#aws-command-line-interface-aws-cli) |
| **AWS Config** | MANAGEMENT & GOVERNANCE | p. 148 | [Ver Ficha](10-management-governance.md#aws-config) |
| **AWS Control Tower** | MANAGEMENT & GOVERNANCE | p. 151 | [Ver Ficha](10-management-governance.md#aws-control-tower) |
| **AWS Cost and Usage Report** | AWS COST MANAGEMENT | p. 61 | [Ver Ficha](03-cost-management.md#aws-cost-and-usage-report) |
| **AWS Cost Explorer** | AWS COST MANAGEMENT | p. 61 | [Ver Ficha](03-cost-management.md#aws-cost-explorer) |
| **AWS Data Exchange** | ANALYTICS | p. 7 | [Ver Ficha](01-analytics.md#aws-data-exchange) |
| **AWS Data Pipeline** | ANALYTICS | p. 10 | [Ver Ficha](01-analytics.md#aws-data-pipeline) |
| **AWS Database Migration Service (AWS DMS)** | MIGRATION AND TRANSFER | p. 186 | [Ver Ficha](12-migration-transfer.md#aws-database-migration-service-aws-dms) |
| **AWS DataSync** | MIGRATION AND TRANSFER | p. 189 | [Ver Ficha](12-migration-transfer.md#aws-datasync) |
| **AWS Device Farm** | FRONT-END & MOBILE | p. 133 | [Ver Ficha](08-frontend-mobile.md#aws-device-farm) |
| **AWS Direct Connect** | NETWORKING & CONTENT DELIVERY | p. 205 | [Ver Ficha](13-networking-content-delivery.md#aws-direct-connect) |
| **AWS Directory Service** | SECURITY, IDENTITY & COMPLIANCE | p. 242 | [Ver Ficha](14-security-identity-compliance.md#aws-directory-service) |
| **AWS Elastic Beanstalk** | COMPUTE | p. 73 | [Ver Ficha](04-compute.md#aws-elastic-beanstalk) |
| **AWS Fargate** | SERVERLESS | p. 271 | [Ver Ficha](15-serverless.md#aws-fargate) |
| **AWS Firewall Manager** | SECURITY, IDENTITY & COMPLIANCE | p. 246 | [Ver Ficha](14-security-identity-compliance.md#aws-firewall-manager) |
| **AWS Global Accelerator** | NETWORKING & CONTENT DELIVERY | p. 212 | [Ver Ficha](13-networking-content-delivery.md#aws-global-accelerator) |
| **AWS Glue** | ANALYTICS | p. 17 | [Ver Ficha](01-analytics.md#aws-glue) |
| **AWS Health Dashboard** | MANAGEMENT & GOVERNANCE | p. 155 | [Ver Ficha](10-management-governance.md#aws-health-dashboard) |
| **AWS Identity and Access Management (IAM)** | SECURITY, IDENTITY & COMPLIANCE | p. 250 | [Ver Ficha](14-security-identity-compliance.md#aws-identity-and-access-management-iam) |
| **AWS Key Management Service (AWS KMS)** | SECURITY, IDENTITY & COMPLIANCE | p. 235 | [Ver Ficha](14-security-identity-compliance.md#aws-key-management-service-aws-kms) |
| **AWS Lake Formation** | ANALYTICS | p. 25 | [Ver Ficha](01-analytics.md#aws-lake-formation) |
| **AWS Lambda** | SERVERLESS | p. 274 | [Ver Ficha](15-serverless.md#aws-lambda) |
| **AWS Managed Service for Prometheus** | MANAGEMENT & GOVERNANCE | p. 162 | [Ver Ficha](10-management-governance.md#aws-managed-service-for-prometheus) |
| **AWS Management Console** | MANAGEMENT & GOVERNANCE | p. 154 | [Ver Ficha](10-management-governance.md#aws-management-console) |
| **AWS Network Firewall** | SECURITY, IDENTITY & COMPLIANCE | p. 258 | [Ver Ficha](14-security-identity-compliance.md#aws-network-firewall) |
| **AWS Organizations** | MANAGEMENT & GOVERNANCE | p. 164 | [Ver Ficha](10-management-governance.md#aws-organizations) |
| **AWS Outposts** | COMPUTE | p. 76 | [Ver Ficha](04-compute.md#aws-outposts) |
| **AWS Proton** | MANAGEMENT & GOVERNANCE | p. 168 | [Ver Ficha](10-management-governance.md#aws-proton) |
| **AWS Resource Access Manager (AWS RAM)** | SECURITY, IDENTITY & COMPLIANCE | p. 260 | [Ver Ficha](14-security-identity-compliance.md#aws-resource-access-manager-aws-ram) |
| **AWS Secrets Manager** | SECURITY, IDENTITY & COMPLIANCE | p. 263 | [Ver Ficha](14-security-identity-compliance.md#aws-secrets-manager) |
| **AWS Security Hub** | SECURITY, IDENTITY & COMPLIANCE | p. 265 | [Ver Ficha](14-security-identity-compliance.md#aws-security-hub) |
| **AWS Serverless Application Repository** | COMPUTE | p. 78 | [Ver Ficha](04-compute.md#aws-serverless-application-repository) |
| **AWS Service Catalog** | MANAGEMENT & GOVERNANCE | p. 170 | [Ver Ficha](10-management-governance.md#aws-service-catalog) |
| **AWS Shield** | SECURITY, IDENTITY & COMPLIANCE | p. 267 | [Ver Ficha](14-security-identity-compliance.md#aws-shield) |
| **AWS Snow Mobile** | MIGRATION AND TRANSFER | p. 192 | [Ver Ficha](12-migration-transfer.md#aws-snow-mobile) |
| **AWS Snowball Edge** | MIGRATION AND TRANSFER | p. 194 | [Ver Ficha](12-migration-transfer.md#aws-snowball-edge) |
| **AWS Step Functions** | APPLICATION INTEGRATION | p. 56 | [Ver Ficha](02-application-integration.md#aws-step-functions) |
| **AWS Storage Gateway** | STORAGE | p. 296 | [Ver Ficha](16-storage.md#aws-storage-gateway) |
| **AWS Systems Manager** | MANAGEMENT & GOVERNANCE | p. 172 | [Ver Ficha](10-management-governance.md#aws-systems-manager) |
| **AWS Transfer Family** | MIGRATION AND TRANSFER | p. 197 | [Ver Ficha](12-migration-transfer.md#aws-transfer-family) |
| **AWS Transit Gateway** | NETWORKING & CONTENT DELIVERY | p. 219 | [Ver Ficha](13-networking-content-delivery.md#aws-transit-gateway) |
| **AWS Trusted Advisor** | MANAGEMENT & GOVERNANCE | p. 174 | [Ver Ficha](10-management-governance.md#aws-trusted-advisor) |
| **AWS WAF** | SECURITY, IDENTITY & COMPLIANCE | p. 269 | [Ver Ficha](14-security-identity-compliance.md#aws-waf) |
| **AWS Wavelength** | COMPUTE | p. 80 | [Ver Ficha](04-compute.md#aws-wavelength) |
| **AWS Well-Architected Tool** | MANAGEMENT & GOVERNANCE | p. 177 | [Ver Ficha](10-management-governance.md#aws-well-architected-tool) |
| **AWS X-Ray** | DEVELOPER TOOLS | p. 123 | [Ver Ficha](07-developer-tools.md#aws-x-ray) |
| **Elastic Load Balancing (ELB)** | NETWORKING & CONTENT DELIVERY | p. 208 | [Ver Ficha](13-networking-content-delivery.md#elastic-load-balancing-elb) |
| **Savings Plans** | AWS COST MANAGEMENT | p. 61 | [Ver Ficha](03-cost-management.md#savings-plans) |

---

## 💡 Cómo Estudiar con este Handbook en tu Plan de 4 Semanas
1. **Complemento de cada día de estudio:** Cuando termines un tema del día (ej. Día 1: IAM), abre la ficha técnica correspondiente en [`14-security-identity-compliance.md`](14-security-identity-compliance.md#aws-identity-and-access-management-iam) y repasa la sección **Exam Tips & Triggers**.
2. **Búsqueda rápida de distractores en simulacros:** Cuando rindas un simulacro de 65 preguntas y encuentres servicios que no reconoces (como Kendra, AppFlow, Macie o Outposts), consulta el índice alfabético para verificar rápidamente por qué era o no era la respuesta correcta.
3. **Semana 4 (Repaso Final):** Lee las secciones de `Exam Tips` de los 119 servicios como repaso relámpago de alta densidad 48 horas antes de presentarte al examen.