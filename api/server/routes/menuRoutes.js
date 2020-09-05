import { Router } from 'express';
import menuController from '../controllers/menuController';

const router = Router();

router.get(
  '/menus/',
  menuController.getAllMenus,
  // #swagger.tags = ["Menus"]
  // #swagger.description="Essa rota realiza consulta, de todos os menus na base de dados."
  /* #swagger.responses[200] = { 
               description: 'Menus encontrados.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
);
router.get(
  '/menus/:menu',
  menuController.getMenu,
  // #swagger.tags = ["Menus"]
  // #swagger.description="Essa rota realiza consulta, de um menu na base de dados por **_nº do menu_ que é diferente do **_id_**."
  /* #swagger.responses[200] = { 
               description: 'Menu Encontrado.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
  /* #swagger.responses[404] = { 
               description: 'Menu não Encontrado.' 
        } */
);
router.post(
  '/menu/item/add',
  menuController.addItem,
  // #swagger.tags = ["Menus"]
  // #swagger.description="Essa rota realiza criação de novo item, no menu conforme **_newItem:_**"
  /* #swagger.parameters['newItem'] = {
               in: 'body',
               description: 'Informações do Item.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/AddItem" }
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
  '/menu/item/update/:id',
  menuController.updatedMenuItem,
  // #swagger.tags = ["Menus"]
  // #swagger.description="Essa rota realiza atualização, de informações do item no menu através do **_id_**, conforme updateItem:."
  /* #swagger.parameters['updateItem'] = {
               in: 'body',
               description: 'Informações do Item.',
               required: true,
               type: 'object',
               schema: { price:100 }
        } 
  */
  /* #swagger.responses[200] = { 
               description: 'Item Atualizado.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
  /* #swagger.responses[404] = { 
               description: 'Item não Encontrado.' 
        } */
);

router.delete(
  '/menu/item/:id',
  menuController.deleteItem,
  // #swagger.tags = ["Menus"]
  // #swagger.description="Essa rota realiza exclusão de um intem do menu."
  /* #swagger.responses[200] = { 
               description: 'Item Exluído.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
  /* #swagger.responses[404] = { 
               description: 'Item não Encontrado.' 
        } */
);
export default router;
