# 📱 Desarrollo Front-End, APIs y Móvil | Front-End & Mobile
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 3: High-Performing (24%) & Dominio 2: Resilient (26%)
> **📄 Páginas en el PDF Original:** 126 a 136 (Total: 11 páginas)

### 📋 Descripción General
Pasarelas de API administradas (Amazon API Gateway - REST, HTTP, WebSocket), frameworks full-stack (Amplify), testing en hardware real (Device Farm) y campañas dirigidas (Pinpoint).

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **AWS Amplify** | p. 126 | [Ver Ficha Técnica](#aws-amplify) |
| **Amazon API Gateway** | p. 129 | [Ver Ficha Técnica](#amazon-api-gateway) |
| **AWS Device Farm** | p. 133 | [Ver Ficha Técnica](#aws-device-farm) |
| **Amazon Pinpoint** | p. 135 | [Ver Ficha Técnica](#amazon-pinpoint) |

---


## <a id="aws-amplify"></a>🔹 AWS Amplify
*(Página 126 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Amplify is a development platform for building secure, scalable full-stack web and mobile
applications. It provides a set of tools and services that work together to simplify frontend and
backend development using AWS.

### ⚙️ Características Clave / Key Features

- Enables rapid development and deployment of web and mobile applications
- Supports frameworks such as React, Angular, Vue, Next.js, iOS, Android, Flutter
- Provides libraries, CLI, UI components, and fully managed hosting
- Supports GraphQL and REST APIs, authentication, storage, analytics, and more
- Integrated with other AWS services like AppSync, Cognito, S3, and Lambda Amplify CLI
- Command line toolchain for configuring and deploying backend services
- Supports categories such as auth, storage, API, hosting, functions, and more
- Generates infrastructure using AWS CloudFormation templates
- Easily integrates with source control (Git) and CI/CD workflows Amplify Hosting
- Fully managed CI/CD and hosting service for static web apps
- Supports modern web frameworks like React, Angular, Vue, and Next.js
- Automatically builds, deploys, and hosts apps from Git repositories
- Custom domain setup and SSL support included
- Provides previews for pull requests and branch deployments Authentication and Authorization
- Uses Amazon Cognito for user sign-up, sign-in, and access control
- Provides built-in UI components for login flows
- Supports multi-factor authentication (MFA), OAuth, and SAML
- Easily integrates with social identity providers like Google, Facebook, and Amazon
- Fine-grained access control via Cognito User Pools and Identity Pools API Integration
- Supports building and managing GraphQL APIs via AWS AppSync
- Supports building REST APIs using Amazon API Gateway and AWS Lambda
- CLI can generate and manage API schemas and resolvers
- Automatically configures API authorization and access control
Storage
- Integrates with Amazon S3 for file and object storage
- Manages user-specific storage (private/public/protected)
- Upload, download, and manage files using Amplify libraries
- Works with Cognito for secure access to files DataStore
- Programming model for leveraging shared and distributed data
- Provides conflict resolution and offline data access
- Automatically syncs with backend when reconnected Functions
- Enables adding backend logic using AWS Lambda
- Write and deploy serverless functions from CLI
- Can be triggered by events (e.g., S3, DynamoDB), APIs, or manually
- Useful for custom authentication, notifications, data processing Analytics
- Collect user session data and application metrics using Amazon Pinpoint
- Track user events, screen views, and custom analytics
- Integrate with marketing automation and user engagement campaigns Predictions (AI/ML Integration)
- Simplifies the use of AWS AI/ML services in frontend applications
- Includes services like Rekognition (image analysis), Polly (text-to-speech), Translate, Comprehend
- Requires minimal configuration via Amplify CLI Push Notifications
- Uses Amazon Pinpoint to configure and send push notifications
- Supports targeted campaigns and transactional messages
- Works with mobile platforms (iOS, Android) through Amplify libraries CI/CD
- Supports Git-based deployment pipelines (GitHub, GitLab, Bitbucket, AWS CodeCommit)
- Automatically builds and deploys upon code commits
- Provides environment management for dev, test, and production
- Preview URLs generated for every feature branch

### 🔒 Seguridad y Cifrado / Security

- Uses AWS IAM roles and policies for secure access to backend resources
- Amplify CLI supports environment isolation
- Role-based access control for developers and apps

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- Integration with Amazon CloudWatch for logs and metrics
- Monitor Lambda function execution, API errors, and performance
- View deployment status and error messages in Amplify console

### 💵 Precios y Costos / Pricing

- **Hosting:** Based on build and hosting time (per-minute and per-GB transfer rates)
- **Backend services:** Pay-as-you-go for Cognito, Lambda, S3, etc.
- Free tier available for hosting and backend resources

### 💡 Casos de Uso Típicos / Use Cases

- Full-stack web and mobile applications
- Serverless applications with real-time data sync and offline access
- MVP and rapid prototyping
- Applications requiring authentication, storage, APIs, and analytics
- React, Vue, and Angular apps with integrated backend

### ⭐ Buenas Prácticas / Best Practices

- Use Amplify environments (dev, prod) for safe deployments
- Use CLI and GitHub integration for CI/CD automation
- Secure your storage and APIs using Cognito and IAM

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Amplify is a full-stack development platform for building cloud-based apps
- Uses Cognito for auth, AppSync/API Gateway for APIs, S3 for storage, and Lambda for backend logic
- Supports real-time, offline, and cross-platform mobile apps via DataStore
- CLI allows infrastructure provisioning using CloudFormation

### 📝 Resumen Rápido / Quick Summary

AWS Amplify is a full-stack development service that helps frontend and mobile developers
build, deploy, and host scalable and secure applications. It offers deep integration with AWS
services, real-time data sync, authentication, storage, APIs, and CI/CD, all from a unified CLI and
web console.

## <a id="amazon-api-gateway"></a>🔹 Amazon API Gateway
*(Página 129 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon API Gateway is a fully managed service that makes it easy to create, publish, maintain,
monitor, and secure APIs at any scale. It supports RESTful APIs, WebSocket APIs, and HTTP APIs,
enabling developers to build serverless backends and expose AWS services or custom business
logic to clients.

### ⚙️ Características Clave / Key Features

- Supports REST , WebSocket, and HTTP APIs
- Fully managed, scalable, and highly available
- Request/response transformation with mapping templates
- Integrated authorization and authentication
- Throttling, caching, and quota management
- Monitoring and logging with CloudWatch
- Supports custom domain names and SSL certificates
- Private APIs accessible via VPC Endpoints API Types
- **REST APIs:** Feature-rich, customizable, supports request validation and mapping
- **HTTP APIs:** Simpler, lower-cost alternative for most REST use cases
- **WebSocket APIs:** Real-time two-way communication between client and server Integration Types
- **AWS Lambda:** Serverless backend for APIs
- **AWS Service Integrations:** Direct calls to AWS services using IAM roles
- **HTTP/HTTPS Endpoints:** Proxy to external services
- **Mock Integration:** Return mocked responses for testing
- **VPC Links:** Access private resources in a VPC via Network Load Balancer Authorization and Authentication
- **IAM Authorization:** Control API access using AWS IAM policies and roles
- **Cognito User Pools:** User authentication and JWT token validation
- Lambda Authorizers (Custom Authorizers): Run custom logic to authorize requests
- **Resource Policies:** Control access based on IP addresses, VPCs, and AWS accounts API Keys and Usage Plans
- **API Keys:** Identify and track API consumers
- **Usage Plans:** Define throttling and quota limits for API keys
- Enforce request limits per consumer to manage costs and resources Throttling and Quotas
- Global and per-method request limits
- Prevents overuse and abuse
- Helps control costs and protect backends Caching
- Enable response caching at the stage level
- Reduce backend load and improve latency
- Specify cache TTL and encryption options Deployment and Stages
- Deploy APIs to stages (e.g., dev, test, prod)
- Stage variables for configuration management
- Supports canary deployments for gradual rollout Custom Domain Names
- Map APIs to custom domains
- Supports ACM-managed SSL/TLS certificates
- Base path mapping for routing multiple APIs under one domain

### 📈 Monitoreo y Auditoría / Monitoring & Logging

- **CloudWatch Metrics:** Track requests, latency, errors, cache hits
- **CloudWatch Logs:** Full request/response logging for debugging
- AWS X-Ray integration for tracing API calls Private APIs
- Accessible only within specified VPCs using Interface VPC Endpoints
- Secures internal microservices without exposure to the public internet Security Features
- TLS encryption for data in transit
- IAM-based resource policies
- API keys for managing access to consumers
- AWS WAF integration for protection against common web exploits
- Cognito integration for user authentication and JWT validation
- Resource policies to restrict access to specific IP ranges or AWS accounts

### 💵 Precios y Costos / Pricing

- Based on number of API calls and data transfer out
- Separate pricing for REST APIs, HTTP APIs, and WebSocket APIs
- Caching and custom domain name usage incur additional charges Integration with Other AWS Services
- **AWS Lambda:** Create serverless backends
- **AWS Cognito:** User authentication and authorization
- **AWS Step Functions:** Orchestrate workflows
- **AWS DynamoDB:** Direct service integrations
- **AWS S3:** Serve static content or store API results
- **AWS Kinesis:** Streaming data ingestion
- **AWS SNS/SQS:** Messaging and queuing

### 💡 Casos de Uso Típicos / Use Cases

- Build RESTful and WebSocket APIs for mobile and web applications
- Create serverless backends with AWS Lambda
- Securely expose AWS services to external applications
- Enable real-time communication with WebSocket APIs
- Build microservice architectures with managed APIs
- Support third-party developer access with API keys and usage plans

### ⭐ Buenas Prácticas / Best Practices

- Use IAM, Cognito, or Lambda Authorizers for securing APIs
- Enable request throttling and usage plans to prevent abuse
- Use caching to improve performance and reduce backend load
- Monitor usage with CloudWatch and enable logging for troubleshooting
- Apply resource policies to restrict access to trusted networks or accounts
- Use canary deployments to test new versions safely
- Design APIs for idempotency and error handling

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- REST APIs offer advanced customization and integration features
- HTTP APIs are simpler and cheaper, ideal for most REST use cases
- WebSocket APIs support two-way real-time communication
- Supports multiple integration types including Lambda, AWS services, HTTP endpoints
- Authorization options include IAM, Cognito User Pools, and Lambda Authorizers
- API Keys and Usage Plans enforce rate limiting and quotas
- VPC Links allow private integrations with VPC resources
- Supports custom domain names with ACM-managed certificates
- Can be integrated with AWS WAF for security
- Detailed monitoring with CloudWatch and X-Ray

### 📝 Resumen Rápido / Quick Summary

Amazon API Gateway is a fully managed service for building, deploying, and securing APIs at
scale. It supports REST , HTTP , and WebSocket APIs with flexible integrations, authentication
options, throttling, caching, monitoring, and advanced security features for both public and
private APIs.

## <a id="aws-device-farm"></a>🔹 AWS Device Farm
*(Página 133 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Device Farm is a fully managed service for testing mobile (iOS/Android) and web
applications on real physical devices hosted in the cloud. It allows developers and QA teams to
automate tests, perform remote access, and validate app behaviour across a wide variety of
devices without managing their own device lab.

### ⚙️ Características Clave / Key Features

- **Real Devices in the Cloud:** Test apps on hundreds of physical devices.
- **Automated Testing:** Supports Appium, Calabash, Espresso, XCTest, and more.
- **Remote Access:** Manually interact with devices through a web browser.
- **Cross-Platform:** Supports Android, iOS, and web applications.
- **Test Reports:** Screenshots, logs, performance data, and videos for analysis.
- **Integration:** Works with CI/CD pipelines (Jenkins, GitHub Actions, GitLab CI, etc.).
- **Device Pools:** Organize devices by type, OS version, and other criteria.
- **Network Simulation:** Test apps under different network conditions. Testing Options
- **Automated Testing:** Run scripts across multiple devices in parallel.
- **Manual Testing:** Interactively control a device via web browser.
- **Explorer Feature:** Automatic UI exploration to catch crashes or UI issues. Data & Reports
- **Logs:** Capture device logs, crash reports, and console output.
- **Screenshots/Videos:** Visual evidence of test results.
- **Performance Metrics:** CPU, memory, and network usage.

### 🔒 Seguridad y Cifrado / Security

- **Device Isolation:** Each test runs in a clean device environment.
- **Secure Uploads:** Apps and test scripts are encrypted in transit.
- **Access Control:** Integrates with AWS IAM for permissions management. CI/CD Integration
- **Jenkins Plugin:** Trigger tests automatically after build.
- **AWS CLI / SDK:** Programmatic control for automated workflows.
- **Pipeline Support:** Easily integrate in DevOps pipelines for continuous testing.

### 💵 Precios y Costos / Pricing

- **Pay-as-you-go:** Charged by device minutes.
- No upfront cost for provisioning devices.
- **Cost Optimization Tips:** Use automated parallel tests, clean up unused test runs, schedule idle devices carefully.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- **Focus on use cases:** SAA may ask when to use Device Farm vs emulators. Correct answer: real device testing without managing hardware.
- **Integration with CI/CD:** Key DevOps angle, “automatic, repeatable testing.”
- **Security & Compliance:** Tests run in isolated environments, consider AWS shared responsibility.
- **Device Pools:** Can group devices for targeted testing scenarios.
- **Network Simulation:** Useful for performance/resilience testing questions.

### 📝 Resumen Rápido / Quick Summary

AWS Device Farm lets you test apps on real devices at scale. It supports automated and manual
testing, integrates with CI/CD pipelines, provides detailed logs and metrics, and ensures security
and isolation, perfect for SAA exam scenarios where you need to pick a managed service for
scalable, reliable, and low-overhead mobile testing.

## <a id="amazon-pinpoint"></a>🔹 Amazon Pinpoint
*(Página 135 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon Pinpoint is a fully-managed AWS service for engaging customers across multiple
messaging channels: push, in-app, email, SMS, voice, custom. Defined audiences, send
campaigns/journeys, analyse behaviour.

### ⚙️ Características Clave / Key Features

- **Multi-channel messaging:** Email, SMS/text, push notifications (mobile), voice, in-app, custom channels.
- **Audience segmentation:** Define segments dynamically (based on user behaviour/attributes) or import static segments.
- **Campaigns & journeys:** Create scheduled campaigns; or design multi-step journeys (event-triggered flows) to engage users.
- **Message templates:** Reusable message content/settings for different channels (email templates, push templates, etc).
- **Analytics & metrics:** Track endpoint usage, campaign responses, users, revenue, demographics.
- **Personalisation:** Use attributes and variables in message templates for dynamic, custom content.
- **Integration & extensibility:** Can integrate with mobile/web apps via SDKs; export/import data; tie in with other AWS services. Core Components & Concepts
- **Project (App):** The top-level container for your Pinpoint usage.
- **Endpoint:** A destination (e.g., a device token for push, an email address, a phone number) registered in Pinpoint for messaging.
- **Segment:** A group of endpoints/users defined either statically or dynamically.
- **Campaign:** A messaging job sent to a segment, on schedule or immediately.
- **Journey:** A multi-step, event-driven messaging workflow (e.g., user installs app → send welcome push → after 3 days send email if no action)
- **Template:** Pre-defined content and settings for messages that you send via campaigns/journeys.
- **Channel:** A medium of communication (email, SMS, push, voice, custom)
- **Analytics Data:** Behaviour of endpoints/users, message responses, revenue, demographics. Security / Governance
- Integrates with IAM for access control: you manage which users/roles can create/edit projects, campaigns, segments etc.
- Data encryption at rest & in transit (e.g., uses TLS for API calls) in resilient architectures.
- **Opt-out management:** Especially for email/SMS; campaigns must respect user preferences (relevant for exam catch-question: opt-out means you can’t keep sending).

### 💡 Casos de Uso Típicos / Use Cases

- You have a mobile app and want to send a “Welcome” push notification + in-app message to new users. Use Pinpoint.
- Marketing team wants to send promotional emails and SMS messages to different user segments (e.g., high spenders, inactive users). Use Pinpoint.
- You want to design a multi-channel journey: SMS after app install, if user doesn’t engage after 2 days -> email reminder. Pinpoint’s “Journeys” feature.
- Track campaign performance (open rates, click rates, revenue per campaign) and feed into metrics dashboards. Use Pinpoint analytics.

### 💵 Costos y Escalabilidad / Cost & Scalability

- **Fully managed:** You don’t manage infrastructure for message delivery. Good for “reduce management overhead” answer.
- Scales with endpoints and messaging volume (channels may have quotas/regulatory requirements especially SMS/voice in regions).
- **Cost drivers:** number of messages, channels, endpoints, uses of dedicated resources (e.g., dedicated IP for email) & region-specific compliance/reg approvals.
- Regulatory compliance & global presence: When using multi-region architecture, ensure templates, opt-outs, campaigns, etc are aligned across regions.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- For “journey” or “multi-step user lifecycle messages” → Pinpoint Journeys.
- If the requirement is “no infrastructure management” + “scalable messaging service” → lean toward Pinpoint.
- Be aware of regional/regulatory aspects: SMS/voice may need origination identity registration in countries.
- **Know the difference:** Pinpoint (customer engagement) vs other services (e.g., SES is email only), etc.

### 📝 Resumen Rápido / Quick Summary

Amazon Pinpoint is your AWS all-in-one for customer engagement: segments, campaigns,
journeys, multi-channel (email/SMS/push/voice), templates, analytics. Use it when you want to
engage & track users, not when you only need basic email sending.

---

### 🧭 Navegación
- [⬅️ Volver al Índice Principal del Handbook](README.md)
- [📚 Volver al Repositorio Maestro SAA-C03](../README.md)