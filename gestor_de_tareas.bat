@echo off
echo ======================================================
echo GENERANDO ESTRUCTURA FULL STACK (CLEAN CODE)
echo ======================================================

:: --- CREACIÓN DEL BACKEND ---
echo Configurando carpetas del Backend...
mkdir backend-api\config
mkdir backend-api\src\api\middlewares
mkdir backend-api\src\api\routes
mkdir backend-api\src\api\controllers
mkdir backend-api\src\services
mkdir backend-api\src\repositories
mkdir backend-api\src\models
mkdir backend-api\src\utils

:: Archivos Base Backend
type nul > backend-api\src\app.js
type nul > backend-api\config\index.js
type nul > backend-api\config\swagger.js
type nul > backend-api\.env.sample
type nul > backend-api\.gitignore

:: --- CREACIÓN DEL FRONTEND ---
echo Configurando carpetas del Frontend...
mkdir frontend\public
mkdir frontend\src\assets
mkdir frontend\src\components
mkdir frontend\src\hooks
mkdir frontend\src\pages
mkdir frontend\src\services

:: Archivos Base Frontend
type nul > frontend\index.html
type nul > frontend\src\main.js
type nul > frontend\.gitignore

echo ======================================================
echo ¡LISTO! Estructura Backend y Frontend creada.
echo ======================================================
pause