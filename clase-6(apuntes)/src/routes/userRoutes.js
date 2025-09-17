import express from 'express';
import { getAlumnos, } from '../controllers/userController.js';
import { users } from '../data/users.js';
const router = express.Router();

router.get("/", getAlumnos)

export default router;