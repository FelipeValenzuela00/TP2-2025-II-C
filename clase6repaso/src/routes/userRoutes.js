import express from 'express';
import { users } from '../data/users.js';
import { getUsers, CreateUser } from '../controller/userController.js';

const router = express.Router();

// ruta ya hecha /api/users

router.get('/', getUsers);
router.post('/', CreateUser);

export default router;