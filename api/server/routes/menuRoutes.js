import { Router } from 'express';
import menuController from '../controllers/menuController';

const router = Router();

router.get(
  '/menus/',
  menuController.getAllMenus,
  // #swagger.tags = ["Menus"]
  // #swagger.description="testando desrição"
);
router.get(
  '/menus/:menu',
  menuController.getMenu,
  // #swagger.tags = ["Menus"]
  // #swagger.description="testando desrição"
);
router.post(
  '/menu/item/add',
  menuController.addItem,
  // #swagger.tags = ["Menus"]
  // #swagger.description="testando desrição"
  /* #swagger.parameters['newItem'] = {
               in: 'body',
               description: 'Informações do Item.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/AddItem" }
        } 
  */
);
router.put(
  '/menu/item/update/:id',
  menuController.updatedMenuItem,
  // #swagger.tags = ["Menus"]
  // #swagger.description="testando desrição"
  /* #swagger.parameters['updateItem'] = {
               in: 'body',
               description: 'Informações do Item.',
               required: true,
               type: 'object',
               schema: { price:100 }
        } 
  */
);

router.delete(
  '/menu/item/:id',
  menuController.deleteItem,
  // #swagger.tags = ["Menus"]
  // #swagger.description="testando desrição"
);
export default router;
