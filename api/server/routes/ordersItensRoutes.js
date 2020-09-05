import { Router } from 'express';
import ordersItensController from '../controllers/ordersItensController';

const router = Router();

router.get(
  '/ordersItens/',
  ordersItensController.getAllOrderItens,
  // #swagger.tags = ["Orders Itens"]
  // #swagger.description="testando desrição"
);

router.get(
  '/ordersItens/:id',
  ordersItensController.getOrderItem,
  // #swagger.tags = ["Orders Itens"]
  // #swagger.description="testando desrição"
);
router.post(
  '/ordersItens/add',
  ordersItensController.addOrderItem,
  // #swagger.tags = ["Orders Itens"]
  // #swagger.description="testando desrição"
  /* #swagger.parameters['newItem'] = {
               in: 'body',
               description: 'Informações do Item.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/AddItemCount" }
        } 
  */
);
router.put(
  '/order/update/count/:id',
  ordersItensController.updateItensCount,
  // #swagger.tags = ["Orders Itens"]
  // #swagger.description="testando desrição"
  /* #swagger.parameters['updateItemCount'] = {
               in: 'body',
               description: 'Alteração de quantidade do item.',
               required: true,
               type: 'object',
               schema: { count:2}
        } 
  */
);

router.delete(
  '/ordersItens/:id',
  ordersItensController.deleteItem,
  // #swagger.tags = ["Orders Itens"]
  // #swagger.description="testando desrição"
);

export default router;
