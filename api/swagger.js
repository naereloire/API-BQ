const swaggerAutogen = require('swagger-autogen')();

const outputFile = './api/swagger_output.json';
const endpointsFiles = [
  './api/server/routes/userRoutes.js',
  './api/server/routes/menuRoutes.js',
  './api/server/routes/orderRoutes.js',
  './api/server/routes/ordersItensRoutes.js',
];
const doc = {
  info: {
    title: 'BQ API',
    Description: 'API Burger "Queen',
  },
  tags: [
    {
      name: 'Users',
      description: 'Conjuto de rotas para manipulação de usuários.',
    },
    {
      name: 'Menus',
      description: 'Conjuto de rotas para manipulação de menus.',
    },
    {
      name: 'Orders',
      description: 'Conjuto de rotas para manipulação de pedidos.',
    },
    {
      name: 'Orders Itens',
      description: 'Conjuto de rotas para manipulação de itens de um pedido.',
    },
  ],
  host: 'api-bqueen.herokuapp.com',
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
    AddOrder: {
      cliente: 'Julia',
      data: '2020/09/05',
      flagDelivered: false,
      hora: '2020/09/05 17:45:01',
      horaInicial: '2020/09/05 17:03:05',
      mesa: 10,
      status: 'Em andamento',
      total: 30,
      garcomId: 2,
    },
    AddItemCount: {
      count: 2,
      menuId: 1,
      orderId: 3,
    },
  },
};

swaggerAutogen(outputFile, endpointsFiles, doc);
