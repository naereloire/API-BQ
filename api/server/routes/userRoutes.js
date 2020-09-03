import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();

router.get(
  '/users/',
  userController.getAllusers,
  // #swagger.tags = ["Users"]
  // #swagger.description="testando desrição"
);
router.get(
  '/users/:id',
  userController.getUser,
  // #swagger.tags = ["Users"]
  // #swagger.description="testando desrição"
);
router.post(
  '/user/add',
  userController.addUser,
  // #swagger.tags = ["Users"]
  // #swagger.description="testando desrição"
  /* #swagger.parameters['newUser'] = {
               in: 'body',
               description: 'Informações do usuário.',
               required: true,
               type: 'object',
               schema: { $ref: "#/definitions/AddUser" }
        } 
  */
);
router.put(
  '/users/update/:id',
  userController.updatedUser,
  // #swagger.tags = ["Users"]
  // #swagger.description="testando desrição"
);
export default router;
