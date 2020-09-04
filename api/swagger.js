const swaggerAutogen = require('swagger-autogen')();

const outputFile = './api/swagger_output.json';
const endpointsFiles = [
  './api/server/routes/userRoutes.js',
  './api/server/routes/menuRoutes.js',
];
const doc = {
  info: {
    title: 'BQ API',
    Description: 'API do projeto Burger "Queen',
  },
  tags: [{ name: 'Users', description: 'descrição' }],
  basePath: '/api',
  definitions: {
    AddUser: {
      name: 'Julia',
      email: 'julia@julia',
      sector: 'salon',
    },
    AddItem: {
      item: 'Queijo',
      menu: 2,
      price: 3,
      type: 'Acompanhamento',
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
