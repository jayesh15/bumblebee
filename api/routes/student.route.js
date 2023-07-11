import {Router} from 'express';
import { getStudent, getStudents } from '../controllers/student.controller.js';

const router = Router();

router.get('/', getStudents)
router.get('/single',getStudent)

export default router;