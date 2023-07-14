import {Router} from 'express';
import { addTask, deleteTask, doneTask, getTasks } from '../controllers/task.controller.js';
import {verifyToken} from '../midddleware/jwt.js'
const router = Router();

router.post('/addTask',verifyToken, addTask)
router.get('/',verifyToken,getTasks)
router.patch('/:taskId', verifyToken, doneTask)
router.delete('/:taskId', verifyToken, deleteTask)

export default router;