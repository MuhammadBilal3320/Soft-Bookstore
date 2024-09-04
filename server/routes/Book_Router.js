import { Router } from 'express';
import {Book_Controller} from '../controller/Book_Controller.js'

const router = Router();

router.get('/', Book_Controller);

export default router;