import swaggerJsdoc from 'swagger-jsdoc';
const serverUrl = process.env.SWAGGER_SERVER || `http://localhost:${process.env.PORT || 3000}`;
const options = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'API de Tarefas', version: '1.0.0' },
    servers: [{ url: serverUrl }]
  },
  apis: ['./src/routes/*.js'],
};
export default swaggerJsdoc(options);
