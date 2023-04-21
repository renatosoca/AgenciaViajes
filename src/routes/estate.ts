import { Router } from 'express';
import { createEstate, deleteEstate, getEstate, getEstates, updateEstate } from '../controllers';

const router = Router();

//Publics Routes



//Private Routes

router.route('/')
  .get(getEstates)
  .post(createEstate);

router.route('/:id')
  .get(getEstate)
  .put(updateEstate)
  .delete(deleteEstate);

export default router;