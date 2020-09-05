import { Router } from 'express';
import orderController from '../controllers/orderController';

const router = Router();

router.get(
  '/orders/',
  orderController.getAllOrders,
  // #swagger.tags = ["Orders"]
  // #swagger.description="Essa rota realiza consulta, de todos os pedidos na base de dados."
  /* #swagger.responses[200] = { 
               description: 'Pedidos encontrados.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
);
router.get(
  '/orders/:id',
  orderController.getOrder,
  // #swagger.tags = ["Orders"]
  // #swagger.description="Essa rota realiza consulta, de um pedido na base de dados através do **_id_** ."
  /* #swagger.responses[200] = { 
               description: 'Pedido Encontrado.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
  /* #swagger.responses[404] = { 
               description: 'Pedido não Encontrado.' 
        } */
);
router.post(
  '/order/add',
  orderController.addOrder,
  // #swagger.tags = ["Orders"]
  // #swagger.description="Essa rota realiza criação, de um novo pedido na base de dados conforme **_newOrder_**."
  /* #swagger.parameters['newOrder'] = {
               in: 'body',
               description: 'Informações do Pedido.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/AddOrder" }
        } 
  */
  /* #swagger.responses[201] = { 
               description: 'Pedido Criado.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
);
router.put(
  '/order/status/update/:id',
  orderController.updateStatusOrder,
  // #swagger.tags = ["Orders"]
  // #swagger.description="Essa rota realiza Atualização, de status em um pedido através do **_id_** conforme **_updateStatus_**."
  /* #swagger.parameters['updateStatus'] = {
               in: 'body',
               description: 'Alteração de Status.',
               required: true,
               type: 'object',
               schema: { status:'Concluído'}
        } 
  */
  /* #swagger.responses[200] = { 
               description: 'Status Atualizado.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
  /* #swagger.responses[404] = { 
               description: 'Pedido não Encontrado.' 
        } */
);

export default router;
