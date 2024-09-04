import { Router } from 'express';
import fetchUser from '../middleware/fetchUser.js'
import { deletingBook } from '../controller/Delete_Book_Controller.js'


const router = Router();

router.delete('/:id', fetchUser, deletingBook);

export default router;