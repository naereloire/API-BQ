import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();
router.get('/users/', userController.getAllusers);
router.get('/users/:id', userController.getUser);
router.post('/user/add', userController.addUser);
router.put('/users/update/:id', userController.updatedUser);
export default router;
