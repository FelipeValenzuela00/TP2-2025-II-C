import express from 'express';
import { users } from '../data/users.js';
import { getUsers, getUsersSearch, CreateUser } from '../controller/userController.js';

const router = express.Router();

// ruta ya hecha /api/users

router.get('/', getUsers);
router.get('/search', getUsersSearch);
router.post('/', CreateUser);


export default router;