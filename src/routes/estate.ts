import { Router } from 'express';
import { createEstate, deleteEstate, getEstate, getEstateComments, getEstates, updateEstate } from '../controllers';

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

router.get('/comments-estate/:id', getEstateComments);

export default router;