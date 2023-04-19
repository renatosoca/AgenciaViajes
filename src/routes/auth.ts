import { Router } from 'express';
import { userAuth, userCreate } from '../controllers';

const router = Router();

router.post('/login', userAuth );
router.post('/register', userCreate );

export default router;