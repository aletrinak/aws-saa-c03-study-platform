FROM nginx:alpine

# Configurar compresión Gzip y Cache-Control en Nginx
RUN printf 'gzip on;\n\
gzip_vary on;\n\
gzip_min_length 1024;\n\
gzip_proxied any;\n\
gzip_comp_level 6;\n\
gzip_types text/plain text/css text/xml application/json application/javascript text/javascript text/markdown;\n' > /etc/nginx/conf.d/gzip.conf \
 && printf 'server {\n\
    listen 80;\n\
    server_name _;\n\
    root /usr/share/nginx/html;\n\
    index index.html index.htm;\n\
    location ~* \\.html$ {\n\
        add_header Cache-Control "no-cache, must-revalidate";\n\
    }\n\
    location ~* \\.(js|css|pdf|md)$ {\n\
        add_header Cache-Control "public, max-age=604800";\n\
    }\n\
    location / {\n\
        try_files $uri $uri/ =404;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

# Copiar portal de aprendizaje, simulador, handbook, cheat-sheets y PDFs maestros a Nginx
COPY portal/ /usr/share/nginx/html/
COPY simulator/ /usr/share/nginx/html/simulator/
COPY handbook/ /usr/share/nginx/html/handbook/
COPY cheat-sheets/ /usr/share/nginx/html/cheat-sheets/
COPY handbook.pdf /usr/share/nginx/html/handbook.pdf
COPY AWS_SAA-C03_Guia_Maestra_Repaso_Final.pdf /usr/share/nginx/html/AWS_SAA-C03_Guia_Maestra_Repaso_Final.pdf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
