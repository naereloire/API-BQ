const swaggerAutogen = require('swagger-autogen')();

const outputFile = './api/swagger_output.json';
const endpointsFiles = ['./api/server/routes/userRoutes.js'];
const doc = {
  info: {
    title: 'BQ API',
    Description: 'API do projeto Burger "Queen',
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
