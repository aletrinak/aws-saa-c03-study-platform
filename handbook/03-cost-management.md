# 💰 Gestión y Optimización de Costos | AWS Cost Management
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 4: Cost-Optimized Architectures (20%)
> **📄 Páginas en el PDF Original:** 60 a 62 (Total: 3 páginas)

### 📋 Descripción General
Herramientas clave para monitoreo y control presupuestario: Cost Explorer, AWS Budgets, informes detallados de uso (CUR), Compute Optimizer y planes de ahorro (Savings Plans).

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **AWS Budgets** | p. 60 | [Ver Ficha Técnica](#aws-budgets) |
| **AWS Cost and Usage Report** | p. 61 | [Ver Ficha Técnica](#aws-cost-and-usage-report) |
| **AWS Cost Explorer** | p. 61 | [Ver Ficha Técnica](#aws-cost-explorer) |
| **Savings Plans** | p. 61 | [Ver Ficha Técnica](#savings-plans) |

---

AWS Cost Management

### 📌 ¿Qué es? / What It Is

AWS offers a suite of tools that help you track, estimate, forecast, optimize, and alert on your
cloud spending. These tools are essential for cost visibility, control, budgeting, and savings.

### 1. AWS Pricing Calculator

- Helps estimate monthly AWS costs before deploying.
- Supports EC2, S3, RDS, and many other services.
- Useful for planning and cost comparisons.
- Results can be exported and shared.

### 2. AWS Free Tier

- **Offers free usage of AWS services:** 
  - **12-month free tier:** EC2, S3, RDS, etc.
  - **Always free tier:** IAM, DynamoDB, Lambda (limited usage).
- Helps users explore AWS at no cost.
- Usage tracked in Billing Dashboard to avoid unexpected charges.

### 3. AWS Billing and Cost Management Dashboard

- **Central place to:** 
  - View and download billing and usage reports.
  - Set budgets and alerts.
  - Manage payment methods and invoices.
  - Monitor free tier usage.
  - Access Cost Explorer , CUR, and Budgets.

### 4. AWS Budgets

- Set spending and usage limits, with alerts triggered when thresholds are breached.
- **Types of budgets:** 
  - Cost Budgets – Monitor total spend.
  - Usage Budgets – Track units (e.g., hours, GB).
  - RI/Savings Plans Budgets – Monitor coverage and utilization.
- Supports notifications via SNS or AWS Chatbot.
- Can trigger automated actions like shutting down resources.

### 5. AWS Cost Explorer

- **Interactive tool to:** 
  - Analyse past and current spend.
  - Group/filter costs by service, region, account, tag, etc.
  - Forecast future costs.
  - Visualize RI and Savings Plan utilization.
- Ideal for identifying cost trends and inefficiencies.

### 6. AWS Cost and Usage Report (CUR)

- Most detailed billing data, delivered in CSV format to S3.
- Granular data (hourly, daily) on usage and cost.
- Can be queried with Athena, visualized in QuickSight, or loaded into Redshift.

### 7. Consolidated Billing (via AWS Organizations)

- Combines charges across multiple accounts into one payer account.
- **Benefits:** 
  - Volume discounts shared across accounts.
  - Simplifies centralized cost control.
  - Still tracks per-account usage and cost.

### 8. Cost Allocation Tags

- Helps categorize and attribute costs by:
  - Project, department, team, etc.
- **Types:** 
  - AWS-generated tags (e.g., createdBy).
  - User-defined tags (custom).
- Must be activated in Billing Console for them to appear in Cost Explorer/CUR.

### 9. Reserved Instances and Savings Plans

- Discount pricing for long-term, predictable workloads.
- **Reserved Instances:** 
  - Commit to specific instance types and regions.
  - Apply to EC2, RDS, ElastiCache, Redshift.
- **Savings Plans:** 
  - More flexible pricing model.
  - Commit to a dollar amount per hour.
  - Apply to EC2, Lambda, Fargate.

### 10. AWS Trusted Advisor – Cost Optimization

- **Recommends savings by identifying:** 
  - Idle/underutilized resources.
  - Unassociated Elastic IPs.
  - Low-traffic Load Balancers.
- Part of five categories of checks.
- Some checks require Business or Enterprise support plans.

### 11. AWS Compute Optimizer

- Uses machine learning to recommend optimal EC2 instance types.
- Based on historical usage patterns.
- Helps reduce cost and improve performance by right-sizing.

### 12. AWS Cost Anomaly Detection

- Monitors spend and usage patterns using machine learning.
- Detects unexpected cost spikes.
- **Automatically notifies via:** 
  - Email
  - SNS topic

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Cost Explorer = visual breakdown, trend analysis, and forecasting.
- AWS Budgets = alerts on thresholds (cost, usage, RI/SP).
- CUR = detailed data, ideal for advanced analysis.
- Tags must be activated for use in allocation reports.
- Savings Plans are more flexible than Reserved Instances.
- Cost Anomaly Detection = machine learning to detect abnormal spikes.
- Consolidated Billing = volume discounts + centralized billing.
- Compute Optimizer and Trusted Advisor = optimization insights.

### 📝 Resumen Rápido / Quick Summary

AWS Cost Management tools help architects and organizations estimate, control, monitor , and
optimize their cloud expenses. From planning costs (Pricing Calculator) to tracking anomalies
(Cost Anomaly Detection) and analysing trends (Cost Explorer), these tools enable financial
accountability in the cloud.

---

### 🧭 Navegación
- [⬅️ Volver al Índice Principal del Handbook](README.md)
- [📚 Volver al Repositorio Maestro SAA-C03](../README.md)