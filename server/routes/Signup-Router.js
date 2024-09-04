import { Router } from 'express';
import {Signup_Controller} from '../controller/SignUp_Controller.js';

const router = Router();

router.post('/', Signup_Controller);

export default router;