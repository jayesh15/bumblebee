import {Router} from 'express';
import { addTask, doneTask, getTasks } from '../controllers/task.controller.js';
import {verifyToken} from '../midddleware/jwt.js'
const router = Router();

router.post('/addTask',verifyToken, addTask)
router.get('/',verifyToken,getTasks)
router.patch('/:taskId', verifyToken, doneTask)

export default router;