import { Router } from 'express';
import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from '../controllers';

const router = Router();

//Private Routes

router.route('/')
  .get(getCategories)
  .post(createCategory);

router.route('/:id')
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

export default router;