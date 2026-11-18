@echo off
title AWS SAA-C03 Learning Portal
echo ========================================================
echo   Iniciando AWS SAA-C03 Learning Portal (Plan 4 Semanas)
echo ========================================================
echo Abriendo en el navegador: http://localhost:5500
start "" http://localhost:5500
python -m http.server 5500 --directory "%~dp0portal"
pause
