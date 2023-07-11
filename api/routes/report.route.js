import {Router} from 'express';
import { addReport, getReports } from '../controllers/report.controller.js';
import {verifyToken} from '../midddleware/jwt.js'
const router = Router();

router.post('/addReport',verifyToken, addReport)
router.get('/',verifyToken,getReports)


export default router;