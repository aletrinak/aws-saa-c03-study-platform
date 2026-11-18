# 🎬 Servicios de Medios y Procesamiento Multimedia | Media Services
**Handbook AWS Certified Solutions Architect – Associate (SAA-C03)**

> **🎯 Mapeo de Examen:** Dominio 3: High-Performing Architectures (24%)
> **📄 Páginas en el PDF Original:** 180 a 181 (Total: 2 páginas)

### 📋 Descripción General
Transcodificación escalable en la nube para convertir archivos de video/audio a múltiples formatos de reproducción (Amazon Elastic Transcoder).

### 🗺️ Índice de Servicios en esta Categoría
| Servicio AWS | Página PDF | Acceso Rápido |
| :--- | :---: | :--- |
| **Amazon Elastic Transcoder** | p. 180 | [Ver Ficha Técnica](#amazon-elastic-transcoder) |

---

AWS Elastic Transcoder

### 📌 ¿Qué es? / What It Is

AWS Elastic Transcoder is a fully managed media transcoding service that converts (transcodes)
media files from their source formats into versions optimized for playback on various devices
like smartphones, tablets, and web browsers. It handles all the heavy lifting of scaling,
provisioning, and managing transcoding pipelines in the cloud.

### ⚙️ Características Clave / Key Features

- Fully managed and scalable transcoding service
- Converts media files into formats suitable for multiple devices and platforms
- Supports popular formats like MP4, H.264, AAC, WebM, and MPEG-2
- Automatically scales based on the number of jobs and workloads
- Integrated with Amazon S3 for input and output file storage
- Delivers cost-effective transcoding through pay-as-you-go pricing

### 🏗️ Cómo Funciona y Arquitectura / How It Works


### 1. You upload your source media file to an S3 bucket.


### 2. Elastic Transcoder fetches the file and processes it through a transcoding pipeline.


### 3. You specify presets or custom settings for output formats, resolutions, and bitrates.


### 4. The transcoded files are output to an S3 bucket, ready for delivery via CloudFront or

direct download.
Pipelines
- A pipeline defines the workflow for transcoding: input, output, and notifications.
- Connects an input bucket (source media) and output bucket (transcoded files).
- Can send job status updates through Amazon SNS notifications.
- Each pipeline can process multiple transcoding jobs simultaneously. Jobs
- A job represents a single transcoding request within a pipeline.
- Includes input file, output format(s), and optional thumbnails or captions.
- Multiple outputs (e.g., different resolutions or devices) can be defined per job.
- You can define encryption for both input and output content. Presets
- Presets define the settings for transcoding (e.g., codec, resolution, bitrate, aspect ratio).
- AWS provides system presets for common devices (e.g., iPhone, Android, web).
- Custom presets can be created for fine-tuned control.
- Presets help standardize outputs and simplify job creation. Thumbnails and Captions
- Elastic Transcoder can automatically generate thumbnail images during transcoding.
- Supports embedded or sidecar captions (e.g., WebVTT , SRT).
- Useful for video players that require previews or accessibility features.
Notifications
- Integrates with Amazon SNS to send updates on job status (e.g., progress, success, failure).
- Notifications can trigger Lambda functions, workflows, or external alert systems.

### 🔒 Seguridad y Cifrado / Security

- Uses IAM roles and policies to control access to pipelines and media files.
- Supports encryption for content in-transit and at-rest (using AWS KMS).
- Input and output buckets can have fine-grained access control.
- All requests to Elastic Transcoder use HTTPS for secure communication. Integration with Other AWS Services
- Amazon S3 – Stores input and output media files.
- Amazon CloudFront – Delivers transcoded content globally with low latency.
- Amazon SNS – Sends job status notifications.
- AWS Lambda – Automates post-processing workflows (e.g., metadata tagging, file cleanup).

### 💵 Precios y Costos / Pricing

- Input and output S3 storage costs are billed separately.
- No upfront fees or minimum commitments.
- Different rates apply for standard-definition (SD), high-definition (HD), and audio-only outputs.

### 💡 Casos de Uso Típicos / Use Cases

- Media streaming platforms needing device-optimized playback formats
- User-generated content applications that require automated video processing
- E-learning and marketing platforms delivering video content
- Transcoding pipelines for mobile and web distribution

### ⭐ Buenas Prácticas / Best Practices

- Use system presets for quick, reliable transcoding of common formats.
- Leverage CloudFront for content delivery to improve playback speed and reliability.
- Use IAM roles with least privilege access for pipelines and S3 buckets.
- Organize media files in S3 using structured folder hierarchies (input, output, logs).

### 🎯 Exam Tips & Triggers (Puntos Clave para el Examen)

- Elastic Transcoder is used to convert (transcode) media files for playback on various devices.
- It’s fully managed and works directly with Amazon S3 for input/output.
- Transcoding is configured via pipelines, jobs, and presets.
- Notifications can be sent via Amazon SNS.
- It automatically scales and handles multiple simultaneous jobs.
- Elastic Transcoder is ideal for simpler, consumer-grade media transcoding tasks.

### 📝 Resumen Rápido / Quick Summary

AWS Elastic Transcoder is a scalable, managed service for converting media files into device-
compatible formats. It integrates seamlessly with S3 and CloudFront, uses pipelines and presets
for automation, and provides simple, cost-effective transcoding for streaming and mobile
applications. Perfect for developers who want to deliver high-quality media without managing
encoding infrastructure.

---

### 🧭 Navegación
- [⬅️ Volver al Índice Principal del Handbook](README.md)
- [📚 Volver al Repositorio Maestro SAA-C03](../README.md)