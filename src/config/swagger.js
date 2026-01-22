import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gestor de Tareas API',
      version: '1.0.0',
      description: 'Documentación de mi API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  // ¡OJO AQUÍ! Esta ruta debe ser correcta para que Swagger encuentre tus comentarios
  apis: ['./src/api/routes/*.js'], 
};

export const specs = swaggerJsdoc(options);