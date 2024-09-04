import { Router } from 'express';
import fetchUser from '../middleware/fetchUser.js'
import { Get_Collection_Controller } from '../controller/Get_Collection_Controller.js';

const router = Router();

router.get('/', fetchUser, Get_Collection_Controller);

export default router;