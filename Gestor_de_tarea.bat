@echo off
echo Creando estructura Clean Architecture con Swagger...

:: Carpetas Raiz
mkdir src\api\controllers
mkdir src\api\middlewares
mkdir src\api\routes
mkdir src\config
mkdir src\models
mkdir src\repositories
mkdir src\services
mkdir src\utils
mkdir docs

:: Archivos Base
type nul > src\app.js
type nul > src\config\index.js
type nul > src\config\swagger.js
type nul > src\api\routes\index.routes.js
type nul > .env
type nul > .gitignore

echo Estructura creada con exito.
pause