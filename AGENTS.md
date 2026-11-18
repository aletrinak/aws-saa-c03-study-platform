# AGENTS.md — Arquitectura y Reglas para Agentes (AWS SAA-C03 Master Platform)

## 1. Visión General del Proyecto
Plataforma integral bilingüe (ES/EN) de entrenamiento y simulación para la certificación **AWS Certified Solutions Architect – Associate (SAA-C03)**, desplegada como contenedor estático Nginx en **GCP Cloud Run**.

## 2. Mapa de Arquitectura y Archivos Clave
- `portal/`: Aplicación SPA de estudio diario progresivo (Plan de 4 semanas / 19 módulos activos + días de práctica).
  - `portal/index.html`: Shell principal con 3 vistas (`#reading-view`, `#flashcards-view`, `#quiz-view`).
  - `portal/app.js`: Lógica de estado en `localStorage` (`SAA_C03_STUDY_PORTAL_V1`), validación `>= 72%`, flashcards y selector de idioma (`saa_language`).
  - `portal/content.js`: Base de datos `window.PORTAL_DATA` (19 días teóricos + 190 preguntas de escenario validadas). Generado desde `scripts/build_full_portal_content.py`.
  - `portal/flashcards.js`: `window.OFFICIAL_FLASHCARDS` (44 flashcards bilingües ES/EN de AWS Skill Builder).
- `simulator/`: Simulador de examen estilo Pearson VUE (`130 min`, `65 preguntas`, escala `100–1000`, aprobación `720`).
  - `simulator/index.html`: SPA autocontenida (CSS + JS + I18N ES/EN). Maneja historial (`saa-c03-history-v1`), estadísticas por pregunta (`saa-c03-qstats-v1`), borradores (`saa-c03-draft-v1`) y revisiones (`saa-c03-reviews-v1`).
  - `simulator/questions.js` y `simulator/questions_es.js`: Bancos de 424 preguntas (`window.QUESTIONS` y `window.QUESTIONS_ES`).
- `handbook/` y `cheat-sheets/`: Catálogo modular en Markdown de 119 servicios AWS en 16 categorías y matrices de decisión.
- `Dockerfile` & `cloudbuild.yaml`: Empaquetado en `nginx:alpine` hacia `/usr/share/nginx/html/` para GCP Cloud Run (`us-east1`).

## 3. Reglas de Ingeniería para Gemini 4 Argon (Lectura y Ejecución)
1. **Eficiencia de Contexto (Batch Reading):**
   - NUNCA leas `portal/content.js`, `simulator/questions.js` o `simulator/questions_es.js` línea por línea en el contexto del LLM (pesan entre 250 KB y 500 KB cada uno).
   - Para inspeccionar o transformar bancos de preguntas (`.js` / `.json`), escribe y ejecuta siempre un script de Python puro (`json.loads(text[text.find('['):text.rfind(']')+1])`). Prohibido invocar subprocesos de Node.js desde Python solo para parsear JSON.
2. **Nomenclatura Oficial de AWS en Español (`questions_es.js` y `content.js`):**
   - NUNCA traduzcas literalmente los nombres propios de servicios de AWS ni términos técnicos clave del examen:
     - Correcto: `AWS Wavelength`, `AWS Outposts`, `AWS Snowball Edge`, `Amazon Kinesis Data Firehose`, `AWS Glue`, `Amazon CloudFront`, `AWS CloudTrail`, `Origin Access Control (OAC)`, `Auto Scaling Group (ASG)`.
     - Prohibido: *"Longitud de onda de AWS"*, *"Puestos de avanzada"*, *"Bola de nieve"*, *"Manguera contra incendios"*, *"Pegamento"*, *"Frente a la nube"*.
3. **Reglas de Evaluación Pearson VUE (SAA-C03):**
   - En preguntas `multi: true` (Elegir 2 o Elegir 3), la UI debe impedir seleccionar más opciones que `q.answer.length` (o `q.correctAnswers.length`) y exigir esa cantidad exacta antes de calificar. Sin puntaje parcial.
   - Ponderación oficial de dominios: Domain 1 (30% / 20 Qs), Domain 2 (26% / 17 Qs), Domain 3 (24% / 15 Qs), Domain 4 (20% / 13 Qs).
4. **Paridad de Rutas Local vs Docker (`Dockerfile`):**
   - En el contenedor Nginx, `portal/` vive en `/` (`/usr/share/nginx/html/`), `simulator/` en `/simulator/` y `handbook/` en `/handbook/`. Toda ruta en `portal/index.html` debe ser relativa a la raíz (`handbook.pdf`, `simulator/`, `AWS_SAA-C03_Guia_Maestra_Repaso_Final.pdf`) sin usar `../`.
