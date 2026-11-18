# 🗄️ Matriz de Decisión de Bases de Datos AWS (Database Decision Matrix)

El examen evalúa exhaustivamente el tipo de base de datos adecuado según el modelo de datos (relacional vs no relacional vs columnar vs en memoria) y los requisitos de escala y resiliencia.

---

## 🧭 Árbol de Decisión Rápido

```text
¿Qué tipo de datos y carga de trabajo tienes?
│
├── Relacional (OLTP, SQL tradicional, JOINs complejos, ACID)
│   ├── ¿Cargas extremas, alta disponibilidad nativa, 6 copias en 3 AZs, hasta 15 réplicas? ──► Amazon Aurora
│   └── ¿Motores estándar (PostgreSQL, MySQL, MariaDB, Oracle, SQL Server)? ────────────────► Amazon RDS
│
├── NoSQL / Clave-Valor / Documento JSON (OLTP ultra-escalable, latencia milisegundo)
│   ├── ¿Peticiones masivas, esquema flexible, servidor administrado sin mantenimiento? ─────► Amazon DynamoDB
│   │     └─► ¿Requiere latencia en MICROSEGUNDOS para lecturas masivas? ────────────────► DynamoDB + DAX
│   └── ¿Compatibilidad nativa con API de MongoDB? ────────────────────────────────────────► Amazon DocumentDB
│
├── Analítica / Data Warehouse (OLAP, consultas complejas sobre petabytes, almacenamiento columnar)
│   ├── ¿Data Warehouse corporativo, BI masivo, reportes pesados agregados? ──────────────► Amazon Redshift
│   └── ¿Consultas SQL ad-hoc directamente sobre archivos en S3 sin servidor? ─────────────► Amazon Athena
│
├── Caching en Memoria (Baja latencia, sesiones web, tablas de clasificación)
│   ├── ¿Estructuras de datos complejas, persistencia, réplicas y Multi-AZ? ────────────────► ElastiCache for Redis
│   └── ¿Caché simple clave-valor, multi-hilo, sin necesidad de persistencia? ──────────────► ElastiCache for Memcached
│
├── Grafos (Relaciones complejas, redes sociales, detección de fraude) ────────────────────► Amazon Neptune
└── Series Temporales (Métricas de IoT, monitoreo de sensores en el tiempo) ─────────────────► Amazon Timestream
```

---

## ⚖️ Comparativa Detallada: RDS vs Aurora

| Característica | Amazon RDS (Standard) | Amazon Aurora |
| :--- | :--- | :--- |
| **Motores Soportados** | PostgreSQL, MySQL, MariaDB, Oracle, SQL Server | Compatible con PostgreSQL y MySQL |
| **Arquitectura de Almacenamiento** | Volúmenes EBS atados a la instancia primaria | **Storage distribuido compartido**: 6 copias replicadas a través de 3 AZs |
| **Crecimiento de Almacenamiento** | Asignación manual o Auto-scaling de EBS hasta 64 TB | **Auto-escalado automático** en incrementos de 10 GB hasta 128 TB |
| **Réplicas de Lectura (Read Replicas)** | Hasta 15 réplicas (asincrónicas, cada una con su propio volumen EBS) | Hasta 15 réplicas (comparten el mismo almacenamiento, replicación < 10 ms) |
| **Failover en Multi-AZ** | Cambio de DNS hacia la instancia secundaria (tarda 1 a 2 minutos) | Failover instantáneo hacia una Réplica Aurora (tarda menos de 30 segundos) |
| **Cargas Impredecibles / Esporádicas** | Requiere estimar tamaño de instancia | **Aurora Serverless v2** (escala recursos de cómputo en fracciones de segundo) |
| **Recuperación ante Desastres Multi-Región** | Replicación manual cross-region de Read Replicas | **Aurora Global Database** (replicación cross-region < 1 segundo, RTO < 1 minuto) |

---

## ⚡ Amazon DynamoDB: Conceptos Clave de Examen

- **Modelo**: NoSQL Key-Value y Documentos JSON.
- **Latencia**: De un solo dígito de milisegundo (1-9 ms).
- **DAX (DynamoDB Accelerator)**:
  - Clúster de caché en memoria completamente administrado y transparente para DynamoDB.
  - Reduce la latencia de lectura de **milisegundos a microsegundos**.
  - No requiere cambios de código en la aplicación (usa el mismo SDK).
- **Global Tables**:
  - Replicación totalmente administrada, **Multi-Region y Multi-Active** (se puede escribir y leer en cualquier región).
  - Requiere habilitar previamente **DynamoDB Streams**.
- **DynamoDB Streams**:
  - Captura de cambios en tiempo real (CDC: inserts, updates, deletes) retenida por 24 horas.
  - Se integra directamente con **AWS Lambda** para arquitecturas basadas en eventos (ej. enviar email tras un registro).
- **Modos de Capacidad**:
  - **On-Demand**: Cargas impredecibles o picos repentinos de tráfico. Pagas exactamente por cada petición.
  - **Provisioned**: Cargas predecibles con tráfico estable. Más económico; soporta Auto Scaling de RCU/WCU.
- **TTL (Time to Live)**:
  - Elimina ítems expirados automáticamente **sin costo adicional de escritura (WCU)** y sin impacto en el rendimiento.

---

## 📊 Redshift vs Athena

| Criterio | Amazon Redshift | Amazon Athena |
| :--- | :--- | :--- |
| **Tipo de Servicio** | Data Warehouse aprovisionado / Serverless | Motor de consultas SQL Serverless interactivo |
| **Dónde viven los datos** | En el clúster de Redshift (almacenamiento columnar local optimizado) | En **Amazon S3** (archivos crudos CSV, JSON, Parquet, ORC) |
| **Modelo de Cobro** | Por hora de nodo aprovisionado o por RPU (Serverless) | **$5 por TB de datos escaneados** en S3 |
| **Optimización de Costos** | Reserved Nodes (1 o 3 años), pausar clústeres | Convertir datos a formato columnar (**Apache Parquet o ORC**) y particionar datos por fecha/categoría. |
| **Caso de Uso Ideal** | Dashboards empresariales recurrentes, joins complejos masivos, alta concurrencia. | Consultas ad-hoc esporádicas, análisis de logs de VPC/CloudTrail/ALB guardados en S3. |
