import { Router } from 'express';
import {SignIn_Controller} from '../controller/SignIn_Controller.js';

const router = Router();

router.post('/', SignIn_Controller);

export default router;