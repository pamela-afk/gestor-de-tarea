import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gestor de Tareas API',
      version: '1.0.0',
      description: 'API con Clean Architecture y SOLID',
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: ['./src/api/routes/*.js'], // Lee la documentación de tus rutas
};

export const specs = swaggerJsdoc(options);