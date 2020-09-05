import { Router } from 'express';
import ordersItensController from '../controllers/ordersItensController';

const router = Router();

router.get(
  '/ordersItens/order/:orderId',
  ordersItensController.getAllOrderItens,
  // #swagger.tags = ["Orders Itens"]
  // #swagger.description="Essa rota realiza consulta, de todos os itens de um pedido específico na base de dados."
  /* #swagger.responses[200] = { 
               description: 'Itens do pedido não encontrados.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
);

router.get(
  '/ordersItens/:id',
  ordersItensController.getOrderItem,
  // #swagger.tags = ["Orders Itens"]
  // #swagger.description="Essa rota realiza consulta, de um item em um pedido através do **_id_**."
  /* #swagger.responses[200] = { 
               description: 'Item do pedido Encontrado.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
  /* #swagger.responses[404] = { 
               description: 'Item do pedido não Encontrado.' 
        } */
);
router.post(
  '/ordersItens/add',
  ordersItensController.addOrderItem,
  // #swagger.tags = ["Orders Itens"]
  // #swagger.description="Essa rota realiza criação, de um item à um pedido conforme **_newItem:_**."
  /* #swagger.parameters['newItem'] = {
               in: 'body',
               description: 'Informações do Item.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/AddItemCount" }
        } 
  */
  /* #swagger.responses[201] = { 
               description: 'Item Criado.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
);
router.put(
  '/order/update/count/:id',
  ordersItensController.updateItensCount,
  // #swagger.tags = ["Orders Itens"]
  // #swagger.description="Essa rota realiza atualização, na quantidade de item em um pedido conforme **_updateItemCount:_**."
  /* #swagger.parameters['updateItemCount'] = {
               in: 'body',
               description: 'Alteração de quantidade do item.',
               required: true,
               type: 'object',
               schema: { count:2}
        } 
  */
  /* #swagger.responses[200] = { 
               description: 'Quantidade Atualizada.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
  /* #swagger.responses[404] = { 
               description: 'Item não Encontrado.' 
        } */
);

router.delete(
  '/ordersItens/:id',
  ordersItensController.deleteItem,
  // #swagger.tags = ["Orders Itens"]
  // #swagger.description="Essa rota realiza exclusão, de um item em um pedido."
  /* #swagger.responses[200] = { 
               description: 'Item do pedido Excluído.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
  /* #swagger.responses[404] = { 
               description: 'Item do pedido não Encontrado.' 
        } */
);

export default router;
