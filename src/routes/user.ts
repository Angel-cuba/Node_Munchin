import { Router } from 'express';
import { getUsers, login, signup } from '../controllers/user';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

router.get('/getAllUsers', getUsers);

export default router