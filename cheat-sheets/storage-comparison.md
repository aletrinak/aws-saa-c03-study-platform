# 💾 Matriz de Decisión de Almacenamiento AWS (Storage Comparison)

Una de las áreas más evaluadas en el SAA-C03 es la selección del tipo de almacenamiento adecuado según **protocolo, alcance, rendimiento y costo**.

---

## 🧭 Cuadro Comparativo General: Objetos vs Bloques vs Archivos

| Servicio | Tipo de Almacenamiento | Protocolo de Acceso | Alcance (Scope) | Caso de Uso Principal |
| :--- | :--- | :--- | :--- | :--- |
| **Amazon S3** | Objeto (Object Storage) | HTTP / HTTPS (REST API) | **Global / Regional** | Archivos estáticos, Data Lakes, Backups, Big Data, Hosting Web Estático. |
| **Amazon EBS** | Bloque (Block Storage) | Bloque directo (NVMe / SCSI) | **Zona de Disponibilidad (AZ)** | Disco de arranque (OS), Bases de datos transaccionales (MySQL, Oracle, PostgreSQL). |
| **Amazon EFS** | Archivos Compartidos (File Storage) | NFSv4 (POSIX) | **Multi-AZ Regional** | Compartir archivos entre cientos de instancias **Linux**, CMS (WordPress), Home directories. |
| **Amazon FSx for Windows** | Archivos Compartidos (File Storage) | SMB (CIFS), NTFS | **Single-AZ o Multi-AZ** | Aplicaciones corporativas Windows, Directorio Activo (AD), SQL Server Failover Cluster (FCI). |
| **Amazon FSx for Lustre** | Archivos Paralelos de Ultra-Rendimiento | POSIX paralelo | **Single-AZ o Multi-AZ** | High Performance Computing (HPC), Machine Learning, Procesamiento genómico, Carga directa desde S3. |
| **Amazon FSx for NetApp ONTAP** | Multi-protocolo (NFS, SMB, iSCSI) | NFS / SMB / iSCSI | **Single-AZ o Multi-AZ** | Migración de cabinas SAN/NAS on-premises a AWS sin reescribir aplicaciones. |

---

## 🪣 Amazon S3: Clases de Almacenamiento y Ciclos de Vida

Todos los objetos en S3 cuentan con una durabilidad de **99.999999999% (11 nueves)** en clases estándar y Multi-AZ.

```text
[Acceso Frecuente] ────────► [Acceso Poco Frecuente] ────────► [Archivo / Backup Frío]
  S3 Standard                  S3 Standard-IA                    S3 Glacier Flexible
  (Milisegundos)               (Tarifa por recuperación)         (Minutos a horas)
        │                              │                                 │
        ▼                              ▼                                 ▼
S3 Intelligent-Tiering         S3 One Zone-IA                    S3 Glacier Deep Archive
(Monitoreo automático)         (Menor costo, pierde 1 AZ)        (Recuperación 12h, más barato)
```

| Clase de Almacenamiento | Durabilidad | Disponibilidad | Resiliencia | Tiempo de Recuperación | Cuándo elegirlo en el Examen |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **S3 Standard** | 99.999999999% | 99.99% | >= 3 AZs | Milisegundos | Acceso activo, datos que cambian con frecuencia. |
| **S3 Intelligent-Tiering** | 99.999999999% | 99.9% | >= 3 AZs | Milisegundos | **Patrones de acceso desconocidos o impredecibles**. Mueve objetos automáticamente entre tiers sin penalizaciones de recuperación. |
| **S3 Standard-IA** | 99.999999999% | 99.9% | >= 3 AZs | Milisegundos | Datos a los que se accede pocas veces al mes pero se necesitan de inmediato (ej. reportes mensuales, backups rápidos). |
| **S3 One Zone-IA** | 99.999999999% | 99.5% | **1 sola AZ** | Milisegundos | Datos secundarios reproducibles donde se quiere ahorrar un 20% y se tolera la pérdida de la AZ. |
| **S3 Glacier Instant Retrieval** | 99.999999999% | 99.9% | >= 3 AZs | **Milisegundos** | Archivo de largo plazo que rara vez se consulta, pero cuando se necesita debe entregarse en **milisegundos**. |
| **S3 Glacier Flexible Retrieval** | 99.999999999% | 99.9% | >= 3 AZs | 1-5 min (Expedited), 3-5h (Standard), 5-12h (Bulk) | Backups que se guardan por 1-5 años donde esperar horas es aceptable. |
| **S3 Glacier Deep Archive** | 99.999999999% | 99.9% | >= 3 AZs | 12h (Standard), 48h (Bulk) | **La opción de menor costo absoluto en AWS**. Retención regulatoria (7 a 10 años). |

---

## 💽 Amazon EBS: Tipos de Volúmenes y Casos de Uso

Un volumen EBS está **atado a una única Zona de Disponibilidad (AZ)**. Para moverlo de AZ se debe tomar un **Snapshot** (que se guarda incrementalmente en S3) y restaurarlo en otra AZ.

| Tipo de Volumen | Nombre API | Rendimiento Máximo | Caso de Uso de Examen |
| :--- | :--- | :--- | :--- |
| **General Purpose SSD** | `gp3` *(Recomendado)* | Hasta 16,000 IOPS / 1,000 MB/s | Volúmenes de arranque (boot), escritorios virtuales, bases de datos pequeñas/medianas. Permite escalar IOPS sin comprar más almacenamiento. |
| **General Purpose SSD (Legacy)** | `gp2` | Hasta 16,000 IOPS | Basado en créditos de ráfaga (burst). Las IOPS están ligadas al tamaño del disco (3 IOPS por GB). |
| **Provisioned IOPS SSD** | `io2` / `io2 Block Express` | Hasta 256,000 IOPS / 4,000 MB/s / 99.999% durabilidad | **Bases de datos críticas** (Oracle, SAP HANA, Microsoft SQL Server). Soporta **EBS Multi-Attach** (adjuntar a múltiples instancias en la misma AZ). |
| **Throughput Optimized HDD** | `st1` | Hasta 500 IOPS / 500 MB/s | **Streaming, Big Data, Data Warehouses, Procesamiento de logs masivos**. *No puede ser disco de arranque*. |
| **Cold HDD** | `sc1` | Hasta 250 IOPS / 250 MB/s | Cargas de trabajo de acceso poco frecuente donde el costo es la máxima prioridad. *No puede ser disco de arranque*. |

---

## 📁 Comparativa EFS vs FSx

```text
¿Qué sistema operativo usan los clientes?
    ├─► Solo Linux ──► ¿Necesitas POSIX y auto-escalado simple? ──► Amazon EFS
    ├─► Windows / Active Directory / SMB ──────────────────────────► Amazon FSx for Windows
    ├─► HPC / Cómputo Paralelo masivo integrado con S3 ───────────► Amazon FSx for Lustre
    └─► ONTAP / Multi-protocolo (NFS + SMB + iSCSI) ──────────────► Amazon FSx for NetApp ONTAP
```
