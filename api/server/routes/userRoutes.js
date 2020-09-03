import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();
router.get('/', userController.getAllusers);
router.get('/:id', userController.getUser);
router.post('/add', userController.addUser);
router.put('/update/:id', userController.updatedUser);
export default router;
