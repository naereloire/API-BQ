import { Router } from 'express';
import userController from '../controllers/userController';

const router = Router();
router.get('/', userController.getAllusers);
router.post('/add', userController.addUser);
export default router;
