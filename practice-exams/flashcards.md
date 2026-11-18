# 🗂️ Flashcards de Memoria Activa (Active Recall)

Usa estas tarjetas para repasar conceptos clave rápidamente. Tapa mentalmente la respuesta antes de leerla.

---

### Bloque 1: Seguridad, Identidad y Gobernanza
1. **P: ¿Una Service Control Policy (SCP) puede conceder permisos a un usuario IAM?**  
   *R:* **No**. Las SCPs solo definen límites máximos (*guardrails*). Si un servicio no está permitido por la SCP, ninguna política IAM puede otorgarlo.

2. **P: ¿A qué entidad de AWS Organizations NO le aplican las SCPs?**  
   *R:* A la **Management Account (Cuenta de Administración)**. Solo aplican a las cuentas miembro y OUs.

3. **P: ¿Qué servicio detecta automáticamente datos sensibles como números de tarjetas de crédito o pasaportes en S3?**  
   *R:* **Amazon Macie**.

4. **P: ¿Qué servicio detecta patrones de compromiso como minería de criptomonedas o tráfico a IPs maliciosas analizando logs sin desplegar agentes?**  
   *R:* **Amazon GuardDuty**.

5. **P: ¿Cuál es la diferencia de rotación de contraseñas entre AWS Secrets Manager y SSM Parameter Store?**  
   *R:* **Secrets Manager** tiene rotación automática nativa integrada con Lambda y RDS. Parameter Store no incluye rotación automática por defecto.

---

### Bloque 2: Cómputo y Resiliencia
6. **P: Si una aplicación web necesita mantener la sesión del usuario en la misma instancia EC2, ¿qué característica del ALB se debe activar?**  
   *R:* **Sticky Sessions (Sesiones Basadas en Afinidad / Stickiness)** mediante cookies.

7. **P: ¿Qué balanceador de carga soporta IPs elásticas estáticas fijas y millones de solicitudes con latencia ultra-baja en capa 4?**  
   *R:* **Network Load Balancer (NLB)**.

8. **P: En un Auto Scaling Group, ¿cuál es la diferencia entre Target Tracking y Step Scaling?**  
   *R:* **Target Tracking** busca mantener un valor promedio (ej. CPU al 50%). **Step Scaling** reacciona según la magnitud del exceso de la métrica (escalones).

9. **P: ¿Qué estrategia de Disaster Recovery mantiene una base de datos activa replicada pero la infraestructura de cómputo apagada hasta que ocurre un desastre?**  
   *R:* **Pilot Light**.

10. **P: ¿Cómo se garantiza que los mensajes en una cola SQS se procesen en orden estricto y sin duplicados?**  
    *R:* Usando una cola **SQS FIFO** con `MessageGroupId` y `MessageDeduplicationId`.

---

### Bloque 3: Almacenamiento y Bases de Datos
11. **P: ¿Puede un volumen EBS gp3 adjuntarse a múltiples instancias EC2 a la vez?**  
    *R:* **No**. Solo los volúmenes **io1 e io2 Provisioned IOPS** soportan **EBS Multi-Attach** (y solo dentro de la misma AZ).

12. **P: ¿Qué sistema de almacenamiento compartido en red soporta protocolo SMB e integración con Microsoft Active Directory?**  
    *R:* **Amazon FSx for Windows File Server**.

13. **P: ¿Qué sistema de archivos proporciona millones de IOPS con almacenamiento paralelo POSIX para cargas de Machine Learning y HPC?**  
    *R:* **Amazon FSx for Lustre**.

14. **P: ¿Cuál es la clase de almacenamiento S3 de menor costo absoluto para retención de datos por 10 años que tolera hasta 12 horas de recuperación?**  
    *R:* **S3 Glacier Deep Archive**.

15. **P: ¿Qué servicio añade una capa de caché en memoria a DynamoDB para reducir las lecturas a microsegundos sin cambiar el código de la app?**  
    *R:* **DynamoDB Accelerator (DAX)**.

---

### Bloque 4: Redes y Optimización de Costos
16. **P: ¿El servicio VPC Peering soporta enrutamiento transitivo (VPC A -> VPC B -> VPC C)?**  
    *R:* **No**. Para enrutamiento transitivo centralizado se debe utilizar **AWS Transit Gateway**.

17. **P: ¿Cuáles son los únicos dos servicios de AWS compatibles con VPC Gateway Endpoints gratuitos?**  
    *R:* **Amazon S3** y **Amazon DynamoDB**.

18. **P: ¿La conexión física de AWS Direct Connect (DX) viene cifrada por defecto?**  
    *R:* **No**. Es privada y dedicada pero sin cifrado en tránsito. Si se requiere cifrado, se debe configurar una VPN IPsec sobre Direct Connect.

19. **P: ¿Qué modelo de precios de EC2 ofrece hasta un 90% de descuento pero puede ser interrumpido con un aviso de 2 minutos?**  
    *R:* **EC2 Spot Instances**.

20. **P: ¿Qué herramienta de AWS analiza las métricas de CloudWatch y sugiere el tamaño óptimo de instancias EC2 para evitar el sobredimensionamiento?**  
    *R:* **AWS Compute Optimizer**.
