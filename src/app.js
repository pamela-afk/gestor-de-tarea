import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { specs } from './config/swagger.js'; // Importas la configuración
import taskRoutes from './api/routes/task.routes.js';

const app = express();
app.use(express.json());

// 1. Vinculas Swagger a una ruta
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// 2. Tus rutas normales
app.use('/api/tasks', taskRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
  console.log(`📖 Documentación en http://localhost:${PORT}/api-docs`);
});