import { Router } from 'express';
import fetchUser from '../middleware/fetchUser.js'
import { Add_To_Collection_Controller } from '../controller/My_Collection_Controller.js';

const router = Router();

router.post('/', fetchUser, Add_To_Collection_Controller);

export default router;
