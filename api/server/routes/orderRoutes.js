import { Router } from 'express';
import orderController from '../controllers/orderController';

const router = Router();

router.get(
  '/orders/',
  orderController.getAllOrders,
  // #swagger.tags = ["Orders"]
  // #swagger.description="testando desrição"
);
router.get(
  '/orders/:id',
  orderController.getOrder,
  // #swagger.tags = ["Orders"]
  // #swagger.description="testando desrição"
);
router.post(
  '/order/add',
  orderController.addOrder,
  // #swagger.tags = ["Orders"]
  // #swagger.description="testando desrição"
  /* #swagger.parameters['newOrder'] = {
               in: 'body',
               description: 'Informações do Pedido.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/AddOrder" }
        } 
  */
);
router.put(
  '/order/status/update/:id',
  orderController.updateStatusOrder,
  // #swagger.tags = ["Orders"]
  // #swagger.description="testando desrição"
  /* #swagger.parameters['updateStatus'] = {
               in: 'body',
               description: 'Alteração de Status.',
               required: true,
               type: 'object',
               schema: { status:'Concluído'}
        } 
  */
);

export default router;
