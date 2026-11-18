# 🌐 Redes, Conectividad Híbrida y Entrega Global | Networking & Content Delivery
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 1: Secure (30%), Dominio 2: Resilient (26%) & Dominio 3: High-Performing (24%)
> **📄 Páginas en el PDF Original:** 200 a 225 (Total: 26 páginas)

### 📋 Descripción General
Arquitectura de red aislada (Amazon VPC), balanceadores elásticos (ALB, NLB, GWLB), DNS autoritativo y chequeos de salud (Route 53), CDN perimetral (CloudFront), acelerador de tráfico Anycast (Global Accelerator) y Hub-and-Spoke (Transit Gateway, Direct Connect).

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **Amazon CloudFront** | p. 200 | [Ver Ficha Técnica](#amazon-cloudfront) |
| **AWS Direct Connect** | p. 205 | [Ver Ficha Técnica](#aws-direct-connect) |
| **Elastic Load Balancing (ELB)** | p. 208 | [Ver Ficha Técnica](#elastic-load-balancing-elb) |
| **AWS Global Accelerator** | p. 212 | [Ver Ficha Técnica](#aws-global-accelerator) |
| **Amazon Route 53** | p. 216 | [Ver Ficha Técnica](#amazon-route-53) |
| **AWS Transit Gateway** | p. 219 | [Ver Ficha Técnica](#aws-transit-gateway) |
| **Amazon VPC** | p. 222 | [Ver Ficha Técnica](#amazon-vpc) |

---


## <a id="amazon-cloudfront"></a>🔹 Amazon CloudFront
*(Página 200 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon CloudFront is a global Content Delivery Network (CDN) that uses a worldwide network
of edge locations to cache and deliver content closer to users, dramatically reducing latency and
improving performance for static and dynamic web content, videos, APIs, and applications.

### 🧩 Conceptos Centrales / Core Concepts

Edge Locations
- Global network of caching servers (hundreds of locations worldwide)
- Cache copies of content close to end users for faster delivery
- Serve content from the nearest location to minimize latency Regional Edge Caches
- Intermediate caching layer between origin and edge locations
- Cache larger objects with lower request volumes
- Reduce load on origin servers by serving cached content to edge locations Origins
- Source of content that CloudFront retrieves and caches
- **Supported origin types:** 
  - Amazon S3 buckets (static site hosting, media files)
  - EC2 instances (application servers)
  - Elastic Load Balancers (ALB, NLB)
  - Custom HTTP/HTTPS endpoints (on-premises servers, third-party origins) Distributions
- Configuration defining how CloudFront delivers content
- **Types:** 
  - Web Distribution – Static and dynamic content (HTML, CSS, JavaScript, images, videos, APIs)
  - RTMP Distribution – Deprecated (Adobe Flash streaming media) Caching and TTL Cache-Control Headers
- Control how long objects remain in edge caches
- Origin servers specify caching behaviour via HTTP headers Time-to-Live (TTL)
- Minimum TTL – Shortest time content stays cached
- Default TTL – Standard caching duration (typically 24 hours)
- Maximum TTL – Longest time content can remain cached
- Configurable per distribution or per object Cache Invalidation
- Manually remove objects from cache before TTL expires
- Force immediate updates for changed content
- Supports wildcard patterns for batch invalidations
- Can be automated via API or console Security Features SSL/TLS Encryption
- AWS Certificate Manager (ACM) integration for custom SSL/TLS certificates at no extra cost
- HTTPS enforcement between viewers and CloudFront
- HTTPS support between CloudFront and origin servers
- Supports SNI (Server Name Indication) and dedicated IP options Origin Access Control (OAC)
- Recommended method for securing S3 origins
- Prevents direct S3 bucket access, forcing traffic through CloudFront
- Successor to Origin Access Identity (OAI) with enhanced security
- Uses AWS Signature Version 4 for authentication Signed URLs and Signed Cookies
- Restrict access to premium or private content
- Control who can access content and for how long
- Signed URLs – Single file access (video files, downloads)
- Signed Cookies – Multiple file access (entire sections of a website) Field-Level Encryption
- Encrypt sensitive data (credit card numbers, personal information) at the edge before forwarding to origin
- Data remains encrypted throughout processing
- Only origin application can decrypt with private keys Geo Restriction
- Restrict access based on viewer’s geographic location
- Allowlist (whitelist) specific countries
- Blocklist (blacklist) specific countries
- Useful for licensing requirements and compliance AWS WAF Integration
- Protect applications from common web exploits (SQL injection, XSS)
- Create custom rules to filter malicious traffic
- Rate limiting to prevent abuse Shield Standard
- Included DDoS protection at no extra cost
- Protects against network and transport layer attacks
- Automatic detection and mitigation Content Customization Lambda@Edge
- Run custom code closer to users at edge locations
- Modify requests and responses in real-time
- **Use cases:** 
  - URL rewrites and redirects
  - Header manipulation
  - A/B testing
  - User authentication
  - Content personalization
- Supports Node.js and Python
- More powerful but higher cost and longer latency than CloudFront Functions CloudFront Functions
- Lightweight JavaScript execution at the edge
- Designed for high-volume, simple manipulations
- Faster (sub-millisecond) and cheaper than Lambda@Edge
- **Use cases:** 
  - Header manipulation
  - URL rewrites
  - Request validation
  - Cache key normalization
Origin Types
- Amazon S3 – Static content storage → Ideal for static websites, images, videos, and downloads
- EC2 Instances – Application servers → Used for dynamic content and APIs
- Elastic Load Balancer (ELB) – Distributes traffic across instances → Ensures high availability and scalable applications
- Custom HTTP/HTTPS – Any web server → Suitable for on-premises servers or third- party origins Logging and Monitoring Standard Logs
- Write detailed logs to S3 bucket
- Includes request details (IP address, URI, user agent, referrer)
- Useful for analytics and troubleshooting Real-Time Logs
- Stream logs to Kinesis Data Streams in near real-time
- Enable immediate analysis and alerting CloudWatch Metrics
- Built-in metrics for monitoring performance
- **Includes:** 
  - Total requests
  - Cache hit/miss ratios
  - Error rates (4xx, 5xx)
  - Bytes downloaded/uploaded AWS CloudTrail
- Logs API calls for governance, compliance, and auditing
- Track configuration changes and access patterns Price Classes
- Price Class 100 – Covers US, Europe, and Canada → Cheapest option with fewer edge locations
- Price Class 200 – Covers most regions (excludes the most expensive ones) → Balanced cost and coverage
- Price Class All – Covers all edge locations worldwide → Best performance, but highest cost
Compression
- Automatic compression of certain file types (JavaScript, CSS, HTML)
- Reduces object size delivered to viewers
- Improves transfer speeds and reduces bandwidth costs
- Must be enabled in distribution settings Origin Groups
- Support failover scenarios for high availability
- Configure primary and secondary origins
- If primary origin fails (returns 5xx errors), CloudFront automatically switches to secondary
- Useful for disaster recovery and redundancy Integration with Other AWS Services
- Amazon S3 – Static site hosting, media storage
- AWS WAF – Application protection, custom rules
- AWS Shield – DDoS mitigation
- Lambda@Edge and CloudFront Functions – Request customization
- AWS Certificate Manager (ACM) – Free SSL/TLS certificates
- Route 53 – DNS routing to CloudFront distributions
- AWS Global Accelerator – Optimized routing for dynamic content
- Amazon CloudWatch – Monitoring and alerting
- AWS CloudTrail – Audit logging

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- CloudFront = Global CDN caching content at edge locations for low latency
- Origin Access Control (OAC) secures S3 origins by preventing direct access
- Signed URLs/Cookies restrict access to premium or private content
- Field-Level Encryption protects sensitive data at the edge
- Lambda@Edge for complex customization; CloudFront Functions for simple, high- volume tasks
- Geo Restriction controls access by geographic location

### 📝 Resumen Rápido / Quick Summary

Amazon CloudFront is AWS’s global Content Delivery Network (CDN) that improves
performance and security by caching static and dynamic content at edge locations worldwide. It
integrates deeply with AWS security services (WAF, Shield, ACM), offers advanced customization
with Lambda@Edge and CloudFront Functions.

## <a id="aws-direct-connect"></a>🔹 AWS Direct Connect
*(Página 205 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Direct Connect is a cloud service solution that establishes a dedicated, private network
connection between your on-premises data centre or office and AWS. It reduces network costs,
increases bandwidth throughput, and provides a more consistent network experience compared
to internet-based connections.

### ⚙️ Características Clave / Key Features

- Provides dedicated network connectivity from on-premises to AWS
- Reduces network variability and improves performance with low latency
- Supports high-bandwidth workloads by offering port speeds from 50 Mbps up to 100 Gbps
- Traffic does not traverse the public internet, enhancing security
- Integrated with AWS Virtual Private Cloud (VPC) via Virtual Interfaces (VIFs) Connection Types
- Dedicated Connections
  - Provisioned at 1, 10, or 100 Gbps
  - Ordered via AWS Management Console
  - Delivered at AWS Direct Connect locations
- Hosted Connections
  - Provisioned by AWS Direct Connect Partners
  - Available from 50 Mbps to 10 Gbps
  - Useful for faster provisioning without needing to manage physical hardware Virtual Interfaces (VIFs)
- Private VIF
  - Connects to VPC via Virtual Private Gateway or Transit Gateway
  - Used for accessing private AWS resources
- Public VIF
  - Provides access to all AWS public services using AWS public IP addresses
  - Supports access to services like S3, DynamoDB, or AWS public endpoints
- Transit VIF
  - Connects to AWS Transit Gateway for managing multiple VPC connections
  - Supports scalable, hub-and-spoke architectures
Link Aggregation Groups (LAG)
- Combine multiple connections (same speed) into a single managed connection
- Supports increased bandwidth and redundancy
- Up to 4 connections in a single LAG
- Managed as a single interface Redundancy and Resiliency
- AWS recommends establishing redundant connections for high availability
- Multiple Direct Connect locations can be used for failover
- Integrated with AWS VPN for hybrid architectures that need failover over the public internet
- AWS SLA applies when using recommended redundant configurations Direct Connect Gateway
- Enables connections to multiple VPCs across AWS Regions (except China)
- Supports global access using a single Direct Connect connection
- Simplifies network management in multi-Region, multi-VPC environments Billing and Pricing
- Port-hour charges based on speed of connection
- Data transfer out charges, typically lower than internet-based data transfer
- No charge for inbound data transfer
- LAG billed as aggregated port hours

### 💡 Casos de Uso Típicos / Use Cases

- High-volume data transfers such as backups, migrations, and analytics workloads
- Hybrid cloud deployments requiring consistent and secure connectivity
- Low-latency applications such as financial trading, gaming, or media
- Private access to AWS resources without traversing the internet
- Multi-Region VPC connectivity using Direct Connect Gateway

### 🔒 Seguridad y Cifrado / Security

- Traffic does not traverse the public internet, reducing exposure to attacks
- Supports MACsec (Media Access Control Security) for encryption on supported ports
- Can integrate with AWS VPN for encrypted connections over public networks
- Works with IAM for permission management and auditing
Integration with Other AWS Services
- AWS VPC for private connectivity
- AWS Transit Gateway for large-scale network hub-and-spoke architectures
- AWS Direct Connect Gateway for cross-region access
- AWS VPN for hybrid and backup connections
- AWS CloudWatch for monitoring metrics such as connection state and data transfer

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Direct Connect provides private, dedicated connectivity and avoids the internet
- Private VIF connects to VPC for private resources; Public VIF connects to AWS public endpoints
- Direct Connect Gateway allows cross-region VPC connections
- Recommended to use redundant connections for high availability and SLA compliance
- Can combine Direct Connect with VPN for secure, resilient hybrid architectures
- LAG enables combining multiple connections for higher bandwidth and redundancy
- Cheaper outbound data transfer costs compared to internet routes

### 📝 Resumen Rápido / Quick Summary

AWS Direct Connect provides dedicated, secure, and consistent network connections between
your on-premises infrastructure and AWS. It supports high-bandwidth workloads, reduces
latency, avoids the public internet, and integrates with AWS services like VPC, Transit Gateway,
and Direct Connect Gateway for flexible, scalable hybrid cloud architectures.
Amazon Elastic Load Balancer (ELB)

### 📌 ¿Qué es? / What It Is

Elastic Load Balancing automatically distributes incoming application traffic across multiple
targets such as EC2 instances, containers, IP addresses, and Lambda functions. It improves
availability, fault tolerance, and scalability. ELB is fully managed and supports automatic scaling
and high availability across Availability Zones.
Types of Load Balancers

### 1. Classic Load Balancer (CLB)

  - Legacy option (EC2-Classic only, but still supported in VPC)
  - Operates at Layer 4 (TCP) and Layer 7 (HTTP/HTTPS)
  - Basic routing and health checks
  - Limited features compared to modern alternatives
  - Not recommended for new architectures

### 2. Application Load Balancer (ALB)

  - Operates at Layer 7 (HTTP/HTTPS)
  - Advanced request routing (host-based, path-based routing)
  - Supports containerized applications with ECS
  - Can route to multiple target groups
  - Supports WebSocket and HTTP/2
  - Integrated with AWS WAF for protection
  - Supports user authentication (OIDC, Cognito)

### 3. Network Load Balancer (NLB)

  - Operates at Layer 4 (TCP , TLS, UDP)
  - Extremely high performance (millions of requests per second)
  - Static IP support and Elastic IPs
  - Preserves source IP for backend
  - Ideal for low latency and high throughput
  - TLS termination available
  - Supports IP addresses and AWS PrivateLink

### 4. Gateway Load Balancer (GWLB)

  - Operates at Layer 3
  - Used to deploy, scale, and manage virtual appliances (firewalls, IDS/IPS)
  - Uses GENEVE protocol
  - Simplifies insertion of security appliances into traffic path
  - Integrates with third-party virtual appliances Listeners and Rules
- Listeners check for connection requests on configured protocols and ports.
- ALB supports listener rules to forward traffic based on host or path conditions.
- NLB listeners forward TCP , TLS, or UDP traffic directly to targets.
- GWLB listeners forward traffic using the GENEVE protocol. Target Groups
- Logical grouping of targets (EC2 instances, IP addresses, Lambda functions).
- Health checks performed at target group level.
- Supports weighted target groups for traffic distribution.
- ALB target types include Instance, IP , Lambda.
- NLB target types include Instance, IP . Health Checks
- ELB performs health checks to determine target availability.
- Configurable intervals, thresholds, paths, and protocols.
- Unhealthy targets are automatically removed from routing.
- **Health check types:** HTTP , HTTPS, TCP , or gRPC (for ALB). Cross-Zone Load Balancing
- Distributes traffic evenly across all healthy targets in all enabled Availability Zones.
- Enabled by default on ALB and CLB.
- Optional on NLB (can be enabled or disabled).
- Helps improve availability and fault tolerance. SSL/TLS Termination
- Offload encryption/decryption to the load balancer.
- Certificates managed via AWS Certificate Manager (ACM).
- ALB and NLB support TLS termination.
- Helps simplify backend application configuration. Sticky Sessions
- Also known as session affinity.
- ALB and CLB support sticky sessions via cookies.
- Enables user sessions to stay on the same backend for duration of session.
- Useful for stateful applications. Security Features
- Integrated with AWS Certificate Manager for SSL/TLS.
- Supports Security Groups (for ALB and CLB).
- AWS WAF integration with ALB for Layer 7 protection.
- Access logs to S3 for audit and analysis.
- IAM policies control API-level access. Logging and Monitoring
- Access logs can be sent to S3.
- CloudWatch metrics include request count, latency, healthy/unhealthy host count.
- CloudTrail records API calls.
- ALB supports detailed request tracing with X-Amzn-Trace-Id header. Integration with Other AWS Services
- Works with Auto Scaling Groups for dynamic scaling of targets.
- Integrated with ECS for containerized applications.
- Supports Lambda as a target (for ALB).
- Integrated with AWS Global Accelerator for improved global performance.
- Can be fronted by Route 53 for DNS-based routing.

### 💵 Precios y Costos / Pricing

- Charged based on hours the load balancer is running and the amount of data processed.
- Includes charges for LCU (Load Balancer Capacity Units) for ALB and NLB.
- GWLB pricing is based on processed data.

### 💡 Casos de Uso Típicos / Use Cases

- **ALB:** Microservices architectures, advanced HTTP routing, containerized apps.
- **NLB:** Low-latency TCP/UDP workloads, real-time gaming, IoT , financial apps.
- **GWLB:** Deploying security appliances transparently.
- **CLB:** Legacy workloads needing simple Layer 4/7 routing.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- ALB is best for Layer 7 advanced routing, path-based and host-based rules.
- NLB is optimized for high-throughput, low-latency Layer 4 connections.
- GWLB is for deploying and managing virtual appliances at Layer 3.
- ALB supports Lambda as a target.
- Sticky sessions are supported on ALB and CLB.
- Cross-Zone Load Balancing is on by default for ALB and CLB.
- Use ACM to manage SSL/TLS certificates.
- Health checks are critical for removing unhealthy targets automatically.
- Access logs help with auditing and analysis.
- Security Groups apply to ALB and CLB, not NLB.
- Use AWS WAF with ALB for application-layer protection.

### 📝 Resumen Rápido / Quick Summary

AWS Elastic Load Balancing offers fully managed load balancing across EC2, containers, IP
addresses, and Lambda functions. It supports multiple types of load balancers tailored to
different use cases: ALB for Layer 7 advanced routing, NLB for ultra-low latency Layer 4 traffic,
GWLB for security appliance deployment, and CLB for legacy applications. It integrates with
AWS services like Auto Scaling, ECS, ACM, and WAF to build scalable, secure, and highly available
architectures.

## <a id="aws-global-accelerator"></a>🔹 AWS Global Accelerator
*(Página 212 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Global Accelerator is a networking service that improves the availability and performance
of your global applications.
It uses the AWS global network to direct traffic to optimal endpoints, improving latency and
resilience.

### ⚙️ Características Clave / Key Features

- Provides static IP addresses that act as a fixed entry point to your applications.
- Uses the AWS global network to route traffic to optimal endpoints.
- Supports both TCP and UDP traffic.
- Health checks and automatic failover.
- Improves performance for global users by routing through AWS edge locations.

### 🏗️ Cómo Funciona y Arquitectura / How It Works


### 1. Clients connect using static IP addresses provided by Global Accelerator.


### 2. Traffic enters AWS’s global edge network.


### 3. Routed over AWS’s private backbone to the best endpoint in the AWS region.


### 4. Health checks ensure only healthy endpoints are used.


### 5. Automatic rerouting during endpoint failures or health check failures.

Static IP Addresses
- Each accelerator provides two static IP addresses (for high availability).
- Can also bring your own IP addresses (BYOIP). Components
- **Accelerator:** 
  - The top-level resource.
  - Includes one or more listeners.
- **Listener:** 
  - Defines the port and protocol (TCP/UDP) for incoming traffic.
  - Can have one or more endpoint groups.
- **Endpoint Group:** 
  - Tied to a specific AWS Region.
  - Contains one or more endpoints.
  - Has a traffic dial to control traffic distribution to the region.
  - Supports health checks for endpoints.
- **Endpoint:** 
  - Where traffic is ultimately delivered.
  - **Can be:** ▪ Elastic IP addresses ▪ Network Load Balancers (NLB) ▪ Application Load Balancers (ALB) ▪ EC2 instances ▪ Elastic IP addresses ▪ AWS Global Accelerator can also front AWS Application Load Balancer endpoints with regional support. Health Checks
- Global Accelerator runs health checks on endpoints.
- Routes traffic only to healthy endpoints.
- Health checks can be customized (protocol, port, path, interval). Traffic Distribution
- **Traffic Dial:** 
  - Controls percentage of traffic sent to a region.
  - Allows easy shifting of traffic for testing, failover, blue/green deployments.
- **Client IP Preservation:** 
  - Optionally preserves the original client IP .
  - Works with NLBs. Routing and Performance
- Routes traffic over AWS’s global network rather than the public internet.
- Reduces latency, jitter, and packet loss.
- Uses the optimal AWS edge location for user requests.
- Automatically finds the best healthy endpoint. Failover and High Availability
- Monitors endpoint health with health checks.
- Automatic rerouting to healthy endpoints or regions if failures occur.
- Ensures high availability for global applications.

### 💵 Precios y Costos / Pricing

- **Based on:** 
  - Fixed monthly fee per accelerator.
  - **Data transfer costs:** ▪ Accelerated data transfer (traffic routed over AWS backbone). ▪ Non-accelerated traffic (standard internet path).

### 💡 Casos de Uso Típicos / Use Cases

- Global web applications needing low latency and high availability.
- Disaster recovery setups needing quick failover across regions.
- Gaming applications with real-time networking requirements.
- IoT applications needing predictable latency.
- Moving to multi-region architecture with seamless failover .
- Blue/green deployments with controlled traffic shifting.

### 🔒 Seguridad y Cifrado / Security

- Integrates with AWS Shield Standard for DDoS protection (included).
- AWS WAF can be used with ALB/NLB behind Global Accelerator .
- Static IP addresses simplify firewall whitelisting and client configurations.
- Supports AWS Certificate Manager (ACM) for SSL/TLS certificates at the ALB/NLB layer. Comparison with CloudFront Feature AWS Global Accelerator Amazon CloudFront Primary Use Improving performance and availability of global applications with static IP and intelligent routing. Content Delivery Network (CDN) for caching and distributing static/dynamic content. Caching No caching. Edge caching for content. Static IPs Yes. No. Protocol Support TCP and UDP . HTTP and HTTPS only. Routing Routes at L4 (network layer) to AWS endpoints. Routes at L7 (application layer) to content origins. Latency Improvement Via AWS private backbone and intelligent routing. Via edge caching close to users.
Integration with Other AWS Services
- Works with ALB, NLB, EC2, and Elastic IP endpoints.
- Supports AWS Certificate Manager via ALB/NLB.
- Can be used alongside AWS WAF and Shield.
- Health checks integrate with CloudWatch for monitoring.

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- AWS Global Accelerator improves availability and performance by routing traffic over the AWS global network.
- Provides static IP addresses that stay the same even if endpoints change.
- Supports TCP and UDP .
- Traffic dial allows gradual traffic shifting.
- Uses health checks for failover and resilience.
- Best for global, latency-sensitive applications that need consistent performance.
- Not a CDN, no content caching like CloudFront.
- Pricing includes monthly fee plus accelerated data transfer costs.
- Compare carefully with CloudFront when selecting for exam scenarios.

### 📝 Resumen Rápido / Quick Summary

AWS Global Accelerator is a global traffic management service that uses AWS’s private network
to route traffic to optimal endpoints, improving availability, performance, and resilience for
global applications. It offers static IP addresses, health checks, failover, and fine-grained traffic
control without caching content.

## <a id="amazon-route-53"></a>🔹 Amazon Route 53
*(Página 216 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. It
connects user requests to AWS resources like EC2 instances, load balancers, and S3 buckets, as
well as external endpoints. It also supports domain registration and health checking for DNS
failover.

### ⚙️ Características Clave / Key Features

- Authoritative DNS service providing reliable and cost-effective domain resolution
- Supports domain registration for a wide variety of TLDs
- Traffic management via routing policies including latency-based, geolocation, and weighted routing
- DNS health checks and DNS failover for high availability
- Integrated with AWS services such as ELB, S3, and CloudFront
- Fully compliant with IPv4 and IPv6 Routing Policies
- **Simple Routing:** Single record with one value; straightforward DNS resolution
- **Weighted Routing:** Distribute traffic across multiple resources with assigned weights
- **Latency-based Routing:** Route traffic to the lowest-latency endpoint
- **Failover Routing:** Primary/secondary configurations for high availability
- **Geolocation Routing:** Route traffic based on the geographic location of the requester
- Geoproximity Routing (using Traffic Flow): Bias traffic to endpoints based on geographic distance
- **Multivalue Answer Routing:** Return multiple healthy records to improve client-side load balancing Domain Registration
- Register and manage domain names directly in Route 53
- Supports WHOIS privacy protection
- Automatic domain renewal options
- Easy integration with Route 53 hosted zones for DNS management Health Checks and DNS Failover
- Monitor endpoint health via HTTP , HTTPS, and TCP checks
- Configure DNS failover to redirect traffic to healthy endpoints
- Health checks can monitor CloudWatch alarms for complex monitoring scenarios
- Support for alias records that integrate health check status
Alias Records
- Route 53–specific record type that points to AWS resources without additional DNS queries
- No charge for DNS queries to alias records
- **Used with:** ELB, CloudFront, API Gateway, S3 static websites, Global Accelerator, and VPC endpoint services
- Supports apex (root) domain records Integration with AWS Services
- Direct integration with ELB for load balancing
- Supports CloudFront distributions for CDN integration
- Can route traffic to S3 static website endpoints
- Works with AWS Global Accelerator to route traffic through AWS edge network High Availability and Scalability
- Globally distributed DNS infrastructure with edge locations worldwide
- Designed for 100% availability SLA
- Automatically scales to handle very large query volumes

### 🔒 Seguridad y Cifrado / Security

- Supports DNSSEC (Domain Name System Security Extensions) for domain registration and DNS hosting
- IAM policies control access to Route 53 resources
- Integrated with AWS CloudTrail for logging API calls
- Supports private hosted zones for VPC-internal DNS resolution Traffic Flow
- Visual editor for creating complex routing policies
- Supports versioning of traffic policies
- Automates creation of policies for geoproximity, latency, and failover routing Private Hosted Zones
- Internal DNS resolution for resources within one or more VPCs
- Namespaces are private to the selected VPCs
- Useful for service discovery and VPC-internal communication

### 💵 Precios y Costos / Pricing

- Billed for hosted zones (per zone per month)
- Charged per DNS query
- Additional cost for health checks and domain registration
- No extra cost for alias record queries to AWS endpoints

### 💡 Casos de Uso Típicos / Use Cases

- Global DNS resolution for applications
- High-availability websites using health checks and DNS failover
- Geolocation-based traffic distribution
- Load balancing with weighted routing
- Private DNS for internal VPC service discovery
- Domain registration and management

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Alias records enable apex domain routing to AWS resources
- Weighted routing splits traffic proportionally across endpoints
- Latency-based routing improves user experience with lower latency
- Health checks can trigger DNS failover to backup endpoints
- Geolocation and geoproximity routing customize traffic targeting based on user location
- Private hosted zones provide internal-only DNS resolution within VPCs
- Route 53 integrates deeply with AWS services like ELB, CloudFront, and Global Accelerator
- DNSSEC ensures integrity of DNS responses and prevents spoofing

### 📝 Resumen Rápido / Quick Summary

Amazon Route 53 is AWS’s scalable and highly available DNS and domain registration service. It
supports flexible routing policies, DNS failover with health checks, seamless AWS integration via
alias records, and private DNS zones for VPCs, making it a critical component for resilient,
globally distributed architectures.

## <a id="aws-transit-gateway"></a>🔹 AWS Transit Gateway
*(Página 219 del Handbook)*


### 📌 ¿Qué es? / What It Is

AWS Transit Gateway is a network transit hub that enables customers to connect their Amazon
Virtual Private Clouds (VPCs) and on-premises networks through a single gateway. It simplifies
and scales network architectures by acting as a central router for traffic flowing between
attached networks.

### ⚙️ Características Clave / Key Features

- Central hub for connecting multiple VPCs, on-premises networks, and AWS services
- Simplifies many-to-many VPC peering connections
- Supports thousands of VPC attachments
- Scales elastically with your network
- Acts as a regional resource, but can support inter-Region peering Attachments
- VPC Attachments
  - Connect a VPC to the Transit Gateway using a route table
  - Each VPC can have its own subnet associations
- VPN Attachments
  - Connect on-premises networks over AWS Site-to-Site VPN
  - Supports static and dynamic routing (BGP)
- Direct Connect Gateway Attachments
  - Connect Direct Connect Gateway to Transit Gateway for hybrid connectivity
  - Supports cross-Region VPC access
- Peering Attachments
  - Connect Transit Gateways in different AWS Regions
  - Supports global network architectures Routing
- Uses Transit Gateway route tables to manage traffic flow
- Each attachment can associate with one or more route tables
- Controls which attachments can communicate with each other
- Supports segmentation for isolating traffic between networks Inter-Region Peering
- Enables peering between Transit Gateways in different AWS Regions
- Provides private, low-latency connectivity across regions
- Data traffic does not traverse the public internet Bandwidth and Performance
- Highly scalable throughput supporting tens of Gbps
- Designed for large-scale, high-performance network architectures
- AWS manages the scaling, availability, and fault tolerance Multicast Support
- Native multicast support for workloads needing IP multicast
- Useful for real-time data distribution such as financial trading or media streaming Security and Access Control
- Supports AWS Resource Access Manager (RAM) to share Transit Gateway across AWS accounts
- IAM policies control API access
- Traffic does not traverse the internet unless configured to do so
- Integrated with AWS CloudTrail for auditing API calls Integration with AWS Services
- AWS Direct Connect for dedicated hybrid connectivity
- AWS Site-to-Site VPN for secure internet-based hybrid connections
- AWS Resource Access Manager for sharing with other accounts
- AWS Network Firewall can be deployed in VPCs connected via Transit Gateway Pricing and Billing
- Charged based on attachments per hour
- Data processing charges per GB for traffic through Transit Gateway
- Inter-Region peering has separate pricing based on data transferred between regions

### 💡 Casos de Uso Típicos / Use Cases

- Hub-and-spoke network architectures
- Simplifying many-to-many VPC peering
- Hybrid cloud architectures connecting on-premises to multiple VPCs
- Multi-Region applications requiring private connectivity
- Centralized egress filtering and inspection through shared security VPCs

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Transit Gateway simplifies connecting multiple VPCs compared to full mesh peering
- Route tables control which attachments can talk to each other
- Supports VPN, Direct Connect, VPC, and peering attachments
- Inter-Region peering enables cross-Region private connectivity
- Supports multicast workloads
- Resource Access Manager (RAM) enables sharing across AWS accounts
- Recommended for large-scale, complex network topologies

### 📝 Resumen Rápido / Quick Summary

AWS Transit Gateway is a highly scalable, central networking hub that connects VPCs and on-
premises networks through a single gateway. It simplifies routing, supports hybrid and multi-
Region architectures, and integrates with AWS services to create secure, manageable, large-scale
network designs.

## <a id="amazon-vpc"></a>🔹 Amazon VPC
*(Página 222 del Handbook)*


### 📌 ¿Qué es? / What It Is

Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of AWS where
you can launch AWS resources in a virtual network you define. You have full control over
networking configuration, including IP address ranges, subnets, route tables, and gateways.

### ⚙️ Características Clave / Key Features

- Complete control over virtual networking environment
- Define custom IP address ranges using IPv4 and IPv6 CIDR blocks
- Create public, private, or VPN-only subnets
- Control routing with route tables
- Configure network gateways and NAT for internet access
- Integration with AWS Directory Service, Lambda, ECS, RDS, and many AWS services Subnets
- **Subnet:** a range of IP addresses in your VPC
- **Public subnets:** have route to an internet gateway
- **Private subnets:** no direct route to the internet
- Multiple subnets can span multiple Availability Zones for HA
- Subnet CIDR blocks must not overlap Route Tables
- Control routing for subnets
- Default route table provided, can create custom tables
- Routes define traffic destinations and targets (e.g., Internet Gateway, NAT Gateway, Virtual Private Gateway) Internet Gateway (IGW)
- Horizontally scaled, redundant gateway for internet access
- Required for public subnets to communicate with the internet
- Must attach one IGW per VPC NAT Gateway / NAT Instance
- Allows instances in private subnets to initiate outbound internet traffic while blocking inbound connections
- NAT Gateway is managed, highly available within an AZ
- NAT Instance is a user-managed EC2 instance acting as NAT Elastic IP Addresses
- Static, public IPv4 addresses associated with AWS account
- Used for consistent addressing of EC2 instances, NAT gateways VPC Peering
- Connects two VPCs to route traffic privately using AWS backbone
- Supports intra- and inter-region peering
- **No transitive peering:** traffic must go through direct peering connections
- Must update route tables and security groups

## <a id="aws-transit-gateway"></a>🔹 AWS Transit Gateway
*(Página 219 del Handbook)*

- Central hub for connecting multiple VPCs and on-prem networks
- Simplifies many-to-many VPC connectivity
- Supports transitive routing
- Integrated with AWS Direct Connect and VPN AWS PrivateLink
- Provides private connectivity to AWS services or customer-managed services
- Exposes services as endpoint services in your VPC
- Uses VPC endpoints with Elastic Network Interfaces (ENIs) VPC Endpoints
- Private connections to supported AWS services without internet
- **Types:** Interface Endpoints (powered by PrivateLink) and Gateway Endpoints (for S3 and DynamoDB)
- Improve security by avoiding public internet exposure VPN Connections
- Connect on-premises networks to AWS VPC over encrypted VPN tunnels
- Supports static or dynamic routing with BGP
- Can use AWS Site-to-Site VPN or Customer Gateway devices Virtual Private Gateway
- AWS side of a VPN connection
- Enables connectivity between on-premises network and VPC over VPN Customer Gateway
- On-premises side of a VPN connection
- Represents physical or software device in customer network
Carrier Gateway
- Used with AWS Outposts to provide connectivity to carrier networks
- Supports traffic between Outposts and the carrier's network Security Groups
- Virtual firewall for controlling inbound/outbound traffic at instance level
- **Stateful:** return traffic is automatically allowed
- Rules defined by protocol, port, and CIDR Network ACLs (NACLs)
- Optional stateless firewall for subnets
- Control inbound and outbound traffic at the subnet level
- Supports allow and deny rules
- Evaluated in order of rule number Flow Logs
- Capture information about IP traffic going to and from network interfaces
- Delivered to CloudWatch Logs or S3
- Used for troubleshooting, compliance, security monitoring IPv6 Support
- Assign IPv6 CIDR blocks to VPC and subnets
- Internet Gateway supports IPv6 traffic
- Security groups and NACLs can filter IPv6 traffic VPC Sharing
- Share subnets with other AWS accounts using AWS Organizations
- Enables centralized VPC management in multi-account environments Elastic Network Interfaces (ENIs)
- Virtual network cards attached to EC2 instances
- Support multiple IP addresses, security groups, and MAC addresses
- Used for high availability networking, failover

### 💵 Precios y Costos / Pricing

- No charge for creating or using VPC itself
- Charges apply for NAT Gateway, VPN connections, Transit Gateway, PrivateLink endpoints, traffic across AZs and peering connections

### 💡 Casos de Uso Típicos / Use Cases

- Hosting secure, scalable applications in isolated network environments
- Hybrid cloud networking with on-premises data centres
- Multi-VPC architectures with centralized routing via Transit Gateway
- Providing private access to AWS services with PrivateLink
- Securely exposing internal services to partners via VPC endpoints

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Internet Gateway required for internet access in public subnets
- NAT Gateway enables private subnet instances to reach the internet
- Security Groups are stateful, NACLs are stateless
- VPC Peering does not support transitive routing
- Transit Gateway enables hub-and-spoke architectures with transitive routing
- PrivateLink provides private connectivity to AWS and partner services
- Flow Logs help monitor and troubleshoot traffic flows
- Interface Endpoints connect to services over PrivateLink; Gateway Endpoints for S3 and DynamoDB
- IPv6 support is built-in without NAT requirements for internet access

### 📝 Resumen Rápido / Quick Summary

Amazon VPC gives you full control over your virtual networking in AWS, including IP ranges,
subnets, route tables, gateways, and security controls. It enables you to securely connect
resources within AWS and to on-premises networks, while providing powerful tools for
managing traffic, access, and compliance.

---

### 🧭 Navegación
- [⬅️ Volver al Índice Principal del Handbook](README.md)
- [📚 Volver al Repositorio Maestro SAA-C03](../README.md)