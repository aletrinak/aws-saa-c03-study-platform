# 🔗 Integración y Desacoplamiento de Aplicaciones | Application Integration
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 2: Resilient Architectures (26%) & Dominio 3: High-Performing (24%)
> **📄 Páginas en el PDF Original:** 39 a 59 (Total: 21 páginas)

### 📋 Descripción General
Patrones de desacoplamiento asíncrono, colas de mensajes (SQS), publicación/suscripción (SNS), orquestación de flujos de estado (Step Functions) y bus de eventos (EventBridge).

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **Amazon AppFlow** | p. 39 | [Ver Ficha Técnica](#amazon-appflow) |
| **AWS AppSync** | p. 41 | [Ver Ficha Técnica](#aws-appsync) |
| **Amazon EventBridge** | p. 43 | [Ver Ficha Técnica](#amazon-eventbridge) |
| **Amazon MQ** | p. 47 | [Ver Ficha Técnica](#amazon-mq) |
| **Amazon Simple Notification Service (Amazon SNS)** | p. 50 | [Ver Ficha Técnica](#amazon-simple-notification-service-amazon-sns) |
| **Amazon Simple Queue Service (Amazon SQS)** | p. 53 | [Ver Ficha Técnica](#amazon-simple-queue-service-amazon-sqs) |
| **AWS Step Functions** | p. 56 | [Ver Ficha Técnica](#aws-step-functions) |

---


## <a id="amazon-appflow"></a>🔹 Amazon AppFlow
*(Página 39 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon AppFlow is a fully managed integration service that automates data flows between SaaS
applications and AWS services.
- No code required to set up secure data transfers.

### ⚙️ Características Clave / Key Features

- **Supports popular SaaS apps:** Salesforce, ServiceNow, Slack, Google Analytics, Marketo, Zendesk, etc.
- Connects to AWS services like S3, Redshift, Salesforce, EventBridge.
- **Bidirectional flows:** Ingest data to AWS or send data from AWS to SaaS.
- On-demand or scheduled transfers.
- Event-triggered flows supported.
- Data transformations (masking, mapping, validation) built in.
- PrivateLink support for secure private connections.
- Handles encryption at rest and in transit.

### 💡 Casos de Uso Típicos / Use Cases

- Sync customer data from Salesforce to S3 for analytics.
- Load marketing data to Redshift.
- Automate ticket data from Zendesk to S3.
- Move ServiceNow records to an AWS data lake. Benefits
- No servers to manage.
- Reduces need for custom integration code.
- Secure, private data transfer via AWS PrivateLink.
- Scales automatically.
- Ensures data consistency and integrity.

### 💵 Precios y Costos / Pricing

- Pay per flow run.
- Additional costs for data processed.
- No upfront fees. Integration
- Works inside your AWS account.
- Integrates with IAM for access control.
- Supports CloudWatch for monitoring.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Managed integration service for SaaS ↔️ AWS.
- Supports scheduled, on-demand, event-triggered flows.
- Transforms data during transfer .
- Uses PrivateLink for secure connectivity.
- Alternative to building custom ETL jobs or APIs for data movement.

### 📝 Resumen Rápido / Quick Summary

Amazon AppFlow simplifies secure data movement between SaaS apps and AWS without any
custom coding. It’s scalable, automated, and integrates seamlessly with core AWS services,
making it a go-to solution for building reliable, serverless data pipelines for analytics and
business workflows.

## <a id="aws-appsync"></a>🔹 AWS AppSync
*(Página 41 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS AppSync is a fully managed GraphQL API service to easily build, manage, and secure APIs
that access, combine, and serve data from multiple sources.

### ⚙️ Características Clave / Key Features

- Automatically generates a GraphQL API endpoint.
- **Connects to multiple data sources:** DynamoDB, Aurora, Lambda, HTTP APIs, Elasticsearch/OpenSearch, RDS.
- Supports real-time data with subscriptions and WebSocket.
- Handles queries, mutations, and subscriptions.
- Built-in caching for performance.
- Fine-grained access control with AWS IAM, Cognito, API key, OpenID Connect.
- Data merging and resolvers for combining sources.
- Offline support for mobile and web apps.

### 🏗️ Cómo Funciona y Arquitectura / How It Works

- Client sends GraphQL queries to AppSync.
- AppSync uses resolvers to fetch and transform data from backend sources.
- Returns a single, optimized response.
- Supports real-time updates to clients via subscriptions.

### 💡 Casos de Uso Típicos / Use Cases

- Unified API for multiple data sources.
- Mobile and web apps needing real-time data.
- Aggregating data from DynamoDB, Lambda, RDS in one API.
- Chat applications, dashboards, collaborative tools. Benefits
- Reduces backend complexity single GraphQL endpoint.
- Built-in real-time and offline support.
- Scalable, secure, and fully managed.
- Integrates with AWS services for easy development.

### 💵 Precios y Costos / Pricing

- Pay for queries, mutations, subscriptions, and data transfer.
- Optional caching incurs extra cost.
- No upfront fees. Integration
- Works with AWS IAM, Cognito for auth.
- Monitored via CloudWatch.
- Can trigger Lambda for custom logic.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Managed GraphQL API service.
- Supports real-time subscriptions.
- Integrates with DynamoDB, Lambda, Aurora, HTTP APIs.
- Great for apps needing real-time, offline, and unified data.
- Alternative to API Gateway for GraphQL workloads.

### 📝 Resumen Rápido / Quick Summary

AWS AppSync streamlines API development by unifying data from multiple sources through
a single GraphQL endpoint. With built-in real-time, offline, and security features, it’s the ideal
choice for modern, scalable apps that demand dynamic and responsive data
interactions without heavy backend management.
AWS EventBridge

### 📌 ¿Qué es? / What It Is

- Serverless event bus service for building event-driven applications.
- Ingests, filters, routes, and delivers events from:
  - AWS services
  - Your own applications
  - SaaS partners

### 🧩 Conceptos Centrales / Core Concepts


### 1. Event Bus

- Logical pipeline that receives events.
- **Types of event buses:** 
  - **Default Event Bus:** ▪ Receives events from AWS services.
  - **Custom Event Bus:** ▪ For your own applications.
  - **Partner Event Bus:** ▪ For SaaS integrations.

### 2. Events

- JSON-formatted records describing changes in AWS resources or app state.
- **Example:** 
  - S3 object created
  - EC2 instance state change
  - Custom application events

### 3. Rules

- Define event patterns to match incoming events.
- Determine targets that should receive matched events.
- Can transform event before sending to target.

### 4. Targets

- Services that process events.
- **Examples:** 
  - Lambda
  - SNS
  - SQS
  - Step Functions
  - Kinesis Data Streams
  - EC2 instances via Systems Manager Run Command
  - EventBridge API Destinations (HTTP endpoints)

### 5. Event Patterns

- JSON structure that filters events based on their contents.
- Rules use patterns to decide which events to route.

### 6. Event Archive and Replay

- **Archive:** 
  - Store events for later analysis or compliance.
- **Replay:** 
  - Re-send stored events to the event bus.
  - Useful for testing new rules or recovering from failures.

### 7. Schema Registry

- Automatically discovers and stores event schemas.
- Developers can view schemas for consistent parsing.
- Supports downloading code bindings for events in popular languages.

### 8. API Destinations

- Send events to HTTP endpoints outside AWS.
- Supports setting authorization with API keys or OAuth.
- Enables integration with external SaaS or custom APIs.

### 9. Cross-Account Event Delivery

- Send events between AWS accounts.
- Useful for centralizing events in a single account.
- Supports resource policies to allow cross-account access.

### 10. Partner Integrations

- SaaS providers can publish events directly to your Partner Event Bus.
- **Examples:** 
  - Zendesk
  - Datadog
  - PagerDuty
- Enables seamless integration with third-party systems.

### ⚙️ Características Clave / Key Features

- **Fully managed:** No servers to manage or scale.
- Near real-time event delivery.
- Highly scalable and reliable.
- Integrates with over 200 AWS services.
- Supports event filtering, transformation, and routing.

### 💡 Casos de Uso Típicos / Use Cases

- Application decoupling with event-driven architecture.
- Real-time notifications and automation.
- Integrating AWS services with SaaS providers.
- Auditing and compliance through event archiving.
- Triggering workflows in response to resource changes.

### 💵 Precios y Costos / Pricing

- Charged per event published and event matched.
- Separate charges for archived events and replays.
- Free tier available with millions of free events per month. EventBridge vs SNS
- **SNS:** 
  - Simple pub/sub with push delivery.
  - Broad, unfiltered delivery to subscribers.
- **EventBridge:** 
  - Advanced filtering and routing rules.
  - Supports SaaS integration and schema registry.
  - Event archive and replay.
  - Designed for event-driven application architecture.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Default Event Bus = AWS service events.
- Custom Event Bus = your apps’ events.
- Partner Event Bus = SaaS provider events.
- Rules filter events and route to targets.
- Supports multiple targets per rule.
- Archive and replay = compliance, testing, recovery.
- Schema Registry = discover, manage, and generate code for event schemas.
- API Destinations = integrate with external HTTP endpoints.
- Cross-account delivery = send events securely between accounts.
- Choose EventBridge over SNS when you need advanced filtering, routing, SaaS integration, or event archiving.

### 📝 Resumen Rápido / Quick Summary

Amazon EventBridge is a serverless event bus that connects AWS services, your applications,
and SaaS providers using events. It supports advanced filtering, routing, archiving, and
replay for building scalable, event-driven systems.
AWS MQ

### 📌 ¿Qué es? / What It Is

Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ. It makes
it easy to set up, operate, and scale message brokers in the cloud. It supports industry-standard
APIs and protocols so applications can easily migrate without rewriting messaging code.

### ⚙️ Características Clave / Key Features

- Fully managed message broker service
- Supports Apache ActiveMQ and RabbitMQ engines
- Compatible with industry-standard APIs and protocols such as JMS, NMS, AMQP , STOMP , MQTT , and WebSocket
- Simplifies migration of existing messaging applications to AWS without code changes
- Provides message durability and high availability
- Supports failover and replication for fault tolerance
- Integrates with AWS monitoring and security services Broker Engines Supported
- Apache ActiveMQ
- RabbitMQ Protocols and APIs
- JMS (Java Message Service)
- NMS (.NET Messaging Service)
- AMQP (Advanced Message Queuing Protocol)
- STOMP (Simple Text Oriented Messaging Protocol)
- MQTT (Message Queuing Telemetry Transport)
- WebSocket High Availability and Durability
- Supports replication for fault tolerance
- Active/standby brokers in different Availability Zones for failover
- Data replicated across multiple Availability Zones
- Automatic failover for high availability deployments
- Durable queues to persist messages

### 🚀 Opciones de Despliegue / Deployment Options

- Single-instance brokers for development or low-cost use cases
- Active/standby brokers with multi-AZ replication for production workloads
- RabbitMQ clusters with multiple nodes for increased availability and throughput Scaling
- Vertical scaling by selecting larger instance types
- Supports clustering with RabbitMQ for horizontal scaling
- No need to manually manage broker software or infrastructure

### 🔒 Seguridad y Cifrado / Security

- Encryption at rest using AWS KMS
- Encryption in transit using TLS
- VPC support for network isolation
- IAM for controlling access to Amazon MQ resources
- AWS Secrets Manager integration for storing credentials
- Access Control Lists (ACLs) for fine-grained user permissions Monitoring and Management
- Integrated with Amazon CloudWatch for metrics and alarms
- Detailed broker logs available in Amazon CloudWatch Logs
- AWS Management Console, CLI, and SDKs for broker management
- Supports broker maintenance and patching without downtime in HA deployments Integration with AWS Services
- Amazon EC2 for hosting applications that use the broker
- AWS Lambda for event-driven messaging workflows
- Amazon SQS and SNS for additional messaging patterns
- AWS Secrets Manager for managing credentials
- AWS Identity and Access Management (IAM) for permissions

### 💵 Precios y Costos / Pricing

- Charged per broker instance hour based on instance type
- Storage for message persistence is billed per GB per month
- Data transfer charges may apply for cross-AZ replication
- Additional costs for CloudWatch metrics and logs

### 💡 Casos de Uso Típicos / Use Cases

- Migrating existing on-premises ActiveMQ or RabbitMQ workloads to AWS
- Decoupling microservices with message-based communication
- Building reliable, fault-tolerant messaging workflows
- Supporting hybrid architectures with consistent messaging protocols
- Integrating legacy applications with modern cloud services

### ⭐ Buenas Prácticas / Best Practices

- Use Active/standby deployments for high availability in production
- Monitor broker metrics with CloudWatch and set alarms
- Encrypt data at rest and in transit
- Use IAM policies and ACLs to control access
- Plan for instance sizing and storage needs based on workload
- Regularly review and update security settings and credentials

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Fully managed message broker service for ActiveMQ and RabbitMQ
- Supports standard messaging protocols like JMS, AMQP , STOMP , MQTT
- Simplifies migration of existing messaging apps without code changes
- Supports high availability with multi-AZ replication and failover
- Integrates with IAM, KMS, Secrets Manager, CloudWatch
- Encryption at rest (KMS) and in transit (TLS)
- Use for decoupling microservices and supporting hybrid messaging scenarios

### 📝 Resumen Rápido / Quick Summary

Amazon MQ is a fully managed message broker service for Apache ActiveMQ and RabbitMQ,
designed to simplify the setup and management of message brokers in the cloud. It
provides high availability, supports industry-standard protocols, integrates with AWS security
and monitoring services, and enables seamless migration of existing messaging applications to
AWS.
Amazon SNS

### 📌 ¿Qué es? / What It Is

- Fully managed pub/sub messaging service.
- Decouples application components through asynchronous message delivery.
- Enables message fan-out to multiple subscribers.

### 🧩 Conceptos Centrales / Core Concepts


### 1. Topics

- Logical access point for publishing messages.
- Publishers send messages to a topic.
- Subscribers receive messages from a topic.

### 2. Subscriptions

- Determine where the messages are delivered.
- **Supported protocols:** 
  - Amazon SQS
  - AWS Lambda
  - HTTP/HTTPS
  - Email/Email-JSON
  - SMS
  - Application (mobile push)
  - AWS Kinesis Data Firehose

### 3. Publishers and Subscribers

- **Publisher (Producer):** Sends messages to the SNS topic.
- **Subscriber (Consumer):** Receives messages using one of the supported protocols. Message Delivery
- Push-based delivery to multiple endpoints.
- Supports message filtering by attributes to control what each subscriber receives.
- Retries automatically on delivery failure.
- Dead-letter queues (DLQs) supported for message delivery failures.

### 💡 Casos de Uso Típicos / Use Cases

- Application decoupling via pub/sub.
- Fan-out from one publisher to multiple consumers.
- Event-driven architecture.
- Mobile push notifications.
- Real-time alerts and monitoring. SNS vs SQS Feature SNS SQS Model Pub/Sub (Push) Queue (Pull) Delivery Push to multiple subscribers Pull by one consumer Use Case Fan-out to services Decoupling with buffering Target Options Lambda, SQS, SMS, Email, HTTP/S Typically, Lambda or polling
Message Filtering
- Subscribers receive only messages that match specified message attributes.
- Reduces need for additional logic in subscribers.
- Attribute-based filtering rules defined during subscription creation. Message Format
- JSON by default.
- Raw message delivery can be enabled for SQS or Lambda. Delivery Retries and DLQ
- Automatically retries failed deliveries.
- **Configurable retry policy:** 
  - Backoff strategy
  - Retry attempts
- DLQs supported for unprocessed messages (SQS as target). Access Control
- Uses IAM policies and topic access policies.
- Controls who can publish or subscribe.
- Can restrict access to certain accounts, services, or conditions. Encryption
- Supports Server-Side Encryption (SSE) using AWS KMS.
- Protects messages at rest within SNS topics.

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- **CloudWatch metrics:** 
  - Number of messages published/delivered
  - Failed deliveries
  - Delivery latency
- CloudTrail logs API calls for auditing. Mobile Notifications
- **Supports mobile push to:** 
  - Amazon Device Messaging (ADM)
  - Apple Push Notification Service (APNS)
  - Firebase Cloud Messaging (FCM)
  - Baidu Cloud Push Cross-Region and Cross-Account
- Topics can be accessed cross-account with appropriate topic policies.
- No native cross-region topic replication (can use Lambda or other mechanisms for replication). Limits
- SNS is highly scalable.
- Default limits apply (e.g., number of topics, message size up to 256 KB).
- Limits can be increased via support.

### 💵 Precios y Costos / Pricing

- **Charged per:** 
  - Requests (publishes)
  - Notification deliveries (by protocol)
- SMS pricing varies by destination country.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- SNS = push model, SQS = pull model.
- Use SNS + SQS for fan-out architecture.
- Lambda, SQS, and HTTP/S are commonly used subscribers.
- Encrypt messages at rest using KMS SSE.
- Use IAM policies and topic access policies to control publishing/subscribing.
- For mobile apps, use SNS for push notifications.

### 📝 Resumen Rápido / Quick Summary

Amazon SNS is a fully managed pub/sub service that allows you to send messages to multiple
subscriber endpoints, enabling application decoupling, real-time notifications, and fan-out
messaging patterns across AWS and mobile applications.
Amazon SQS

### 📌 ¿Qué es? / What It Is

- Fully managed message queuing service.
- Decouples and scales distributed systems, microservices, serverless apps.
- Stores, transmits, and retrieves messages between components without them needing to know each other’s status or location.

### ⚙️ Características Clave / Key Features

- Reliable, scalable message queuing.
- Supports standard queues (high throughput, at-least-once delivery) and FIFO queues (exactly-once processing, ordered delivery).
- Fully managed, no servers to provision or manage.
- Integrates with many AWS services (Lambda, SNS, ECS, Step Functions).

### 1. Types of Queues

a. Standard Queue
- Default queue type.
- Nearly unlimited transactions per second.
- At-least-once delivery (may deliver duplicates).
- Best-effort ordering (no strict ordering guaranteed).
- **Use case:** High-throughput applications, where occasional duplicates are acceptable. b. FIFO Queue (First-In-First-Out)
- Guarantees exactly-once processing.
- Preserves strict message order.
- Supports up to 300 transactions per second (can increase with batching).
- **Use case:** Banking transactions, inventory updates.

### 2. Message Lifecycle

- Producer sends message to queue.
- SQS stores message redundantly across multiple AZs.
- Consumer polls queue and processes message.
- Once processed, message is deleted.

### 3. Message Visibility Timeout

- Period after a message is retrieved when it remains invisible to other consumers.
- Prevents multiple consumers processing the same message simultaneously.
- If the consumer fails to delete the message before timeout ends, it becomes visible again.

### 4. Dead-Letter Queues (DLQ)

- Stores unprocessed or unsuccessfully processed messages.
- Helps isolate problematic messages for debugging.
- Used to prevent endless processing retries.

### 5. Delay Queues

- Postpone delivery of new messages for a configurable time (0–15 minutes).
- Useful for delaying processing without managing timing in the producer app.

### 6. Long Polling

- Reduces cost and empty responses by waiting until a message arrives (up to 20 seconds).
- More efficient than short polling, which immediately returns even if no message is available.

### 7. Message Retention Period

- Defines how long SQS keeps a message if not deleted.
- Configurable between 1 minute and 14 days (default is 4 days).

### 8. Message Size

- Single message size limit is up to 256 KB.
- For larger payloads, can use S3 for message payloads with Amazon SQS Extended Client Library.

### 9. Encryption

- SSE (Server-Side Encryption) using AWS KMS.
- Ensures messages are encrypted at rest.
- Encryption keys can be managed via KMS.

### 10. Access Control

- IAM policies control who can send, receive, delete, or manage queues.
- Supports resource-based policies for cross-account access.

### 11. Integrations

- **AWS Lambda:** Trigger functions directly from SQS.
- **SNS:** Fan-out architecture by sending messages from SNS to multiple SQS queues.
- **Step Functions:** Orchestrate workflows with SQS as a step.
- **EventBridge:** Route events to SQS for decoupled processing.

### 12. Cost Model

- **Pay for:** 
  - Number of requests.
  - Payload data transfer.
- FIFO queues typically cost more than standard queues due to ordering guarantees.

### 13. FIFO Queue Features

- Message groups for ordered processing in parallel.
- Exactly-once delivery with deduplication.
- Up to 20,000 in-flight messages (per message group).

### 14. DLQ and Redrive Policy

- DLQs help isolate and investigate failing messages.
- **Redrive policy defines:** 
  - Maximum receive count before moving to DLQ.
  - DLQ destination.

### 15. Limits

- Default limits on number of queues, throughput per account (can be raised via support).
- FIFO throughput limits can be increased with batching.

### 💡 Casos de Uso Típicos / Use Cases

- Decouple microservices.
- Buffer and smooth out workloads.
- Offload long-running tasks.
- Failure isolation via DLQs.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- **Standard queues:** high throughput, at-least-once delivery, possible duplicates.
- **FIFO queues:** exactly-once processing, strict ordering.
- Visibility timeout avoids double-processing during work.
- Long polling reduces cost and latency by waiting for messages.
- Encryption with KMS secures data at rest.

### 📝 Resumen Rápido / Quick Summary

Amazon SQS is a fully managed message queuing service that enables decoupled, scalable, and
reliable communication between distributed application components. It supports both standard
and FIFO queues, offers encryption, DLQs, long polling, and seamless AWS integrations for
building robust cloud architectures.

## <a id="aws-step-functions"></a>🔹 AWS Step Functions
*(Página 56 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Step Functions is a fully managed service for building serverless workflows that coordinate
multiple AWS services into business-critical applications. It allows you to design workflows as
state machines with visual modelling, error handling, and service integrations.

### ⚙️ Características Clave / Key Features

- Visual workflow editor for defining state machines
- Supports Standard and Express Workflows
- Built-in error handling, retries, and catchers
- State input, output, and result manipulation with JSON Path
- Service Integrations for over 200 AWS services
- Wait states for delays or timeouts
- Choice states for branching logic
- Parallel execution of tasks
- Execution history and detailed logging Workflow Types
- Standard Workflows
  - Long-running, durable, auditable
  - Supports executions up to 1 year
  - Exactly-once workflow execution
- Express Workflows
  - High-volume, short-duration workflows
  - Lower cost for high-frequency invocations
  - Executions up to 5 minutes States and State Types
- **Task State:** Runs a single unit of work (e.g., Lambda function, AWS service integration)
- **Choice State:** Implements branching logic based on input
- **Parallel State:** Runs multiple branches in parallel
- **Map State:** Processes array items in parallel or sequentially
- **Wait State:** Introduces delay or waits for a specific time
- **Pass State:** Passes input to output, adds static data
- **Succeed State:** Marks successful completion
- **Fail State:** Marks failure of execution
Service Integrations
- AWS Lambda for serverless tasks
- AWS Batch for container-based jobs
- AWS Glue for ETL workflows
- Amazon ECS and Fargate for container execution
- Amazon SageMaker for machine learning workflows
- SNS, SQS for messaging and queuing
- DynamoDB, S3 for data manipulation
- AWS API Gateway for service calls
- AWS EventBridge for event-driven workflows
- Supports SDK integrations for direct AWS service API calls Error Handling and Retries
- **Retry Policies:** Define retry intervals and maximum attempts
- **Catchers:** Handle errors and redirect workflow paths
- Enables resilient and fault-tolerant workflows State Input and Output
- **InputPath:** Selects part of the input to pass to the state
- **Parameters:** Defines the parameters sent to the task
- **ResultSelector:** Transforms task results before output
- **ResultPath:** Specifies where to insert the result in the state output
- **OutputPath:** Filters the final output from the state Execution Management
- View execution history in AWS Console
- CloudWatch Logs for detailed execution traces
- Step Functions API for programmatic management of executions
- Supports synchronous and asynchronous executions Express Workflow Details
- Designed for high-volume, event-driven workloads
- Suitable for data processing pipelines, streaming analytics
- Supports thousands of executions per second
- Lower cost per execution compared to Standard Workflows
- Limited to 5-minute execution duration
Standard Workflow Details
- Durable with execution history stored for 90 days
- Supports human approvals and long-running processes
- Enables auditability with detailed step-by-step tracking
- Higher cost per state transition

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- Integrated with Amazon CloudWatch for metrics and logs
- View state machine executions and results
- Enables alarms and automated responses to failures

### 🔒 Seguridad y Cifrado / Security

- IAM policies for controlling access to Step Functions
- Fine-grained permissions per state machine and execution
- Supports VPC Endpoints for private access
- Encryption of data in transit and at rest with AWS KMS

### 💵 Precios y Costos / Pricing

- Charged per state transition in Standard Workflows
- Charged per execution and duration in Express Workflows
- Additional costs for AWS service calls and data transfer

### 💡 Casos de Uso Típicos / Use Cases

- Microservice orchestration
- Serverless application workflows
- Data processing pipelines
- Machine learning model training and deployment
- ETL workflows with AWS Glue
- Human approval workflows with Wait and Choice states
- Error handling and retries for service integrations

### ⭐ Buenas Prácticas / Best Practices

- Choose workflow type based on execution duration and volume
- Use Choice and Parallel states to simplify complex logic
- Implement retries and error catchers to improve resilience
- Use Wait states for delays and human approval processes
- Secure workflows with IAM roles and policies
- Monitor executions with CloudWatch for performance and errors

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Standard Workflows are durable and long-running
- Express Workflows are cost-effective for high-volume, short-lived tasks
- Supports multiple AWS service integrations directly without custom code
- Enables visual design of workflows as state machines
- Built-in error handling with retries and catchers
- Integrated with CloudWatch for monitoring and logging
- IAM roles control permissions for workflow execution and service calls
- JSON Path used to manipulate state input and output

### 📝 Resumen Rápido / Quick Summary

AWS Step Functions is a serverless orchestration service that coordinates AWS services and
custom logic into resilient workflows. It supports Standard and Express Workflows, enabling
visual design, robust error handling, service integrations, and flexible execution models for a
wide range of use cases.

---

### 🧭 Navegación
- [⬅️ Volver al Índice Principal del Handbook](README.md)
- [📚 Volver al Repositorio Maestro SAA-C03](../README.md)