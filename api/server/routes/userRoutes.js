import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.get(
  '/users/',
  userController.getAllusers,
  // #swagger.tags = ["Users"]
  // #swagger.description="Essa rota realiza consulta, de todos os usuários na base de dados."
  /* #swagger.responses[200] = { 
               description: 'Usuários encontrados.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
);
router.get(
  '/users/:id',
  userController.getUser,
  // #swagger.tags = ["Users"]
  // #swagger.description="Essa rota realiza consulta, de usuários na base de dados por **_id_**."
  /* #swagger.responses[200] = { 
               description: 'Usuário Encontrado.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
  /* #swagger.responses[404] = { 
               description: 'Usuário não Encontrado.' 
        } */
);
router.post(
  '/user/add',
  userController.addUser,
  // #swagger.tags = ["Users"]
  // #swagger.description="Essa rota realiza criação de novo usuário, na base de dados conforme **_newUser_**."
  /* #swagger.parameters['newUser'] = {
               in: 'body',
               description: 'Informações do usuário.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/AddUser" }
        } 
  */
  /* #swagger.responses[201] = { 
               description: 'Usuário Criado.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
);
router.put(
  '/users/update/:id',
  userController.updatedUser,
  // #swagger.tags = ["Users"]
  // #swagger.description="Essa rota realiza atualização, de informações do usuário na base de dados."
  /* #swagger.responses[200] = { 
               description: 'Usuário Atualizado.' 
        } */
  /* #swagger.responses[400] = { 
               description: 'Requisição Inválida.' 
        } */
  /* #swagger.responses[404] = { 
               description: 'Usuário não Encontrado.' 
        } */
);
export default router;
