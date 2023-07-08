import {Router} from 'express';
import { addTask } from '../controllers/task.controller.js';
import {verifyToken} from '../midddleware/jwt.js'
const router = Router();

router.post('/addTask',verifyToken, addTask)

export default router;