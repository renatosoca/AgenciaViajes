import { Router } from 'express';
import { forgotPassword, getUserAuthenticated, resetPassword, revalidateAuth, updateUserAuthenticated, updateUserPassword, userAuth, userConfirm, userCreate, validateResetPassword } from '../controllers';
import { checkSession } from '../middlewares';

const router = Router();

router.post('/login', userAuth);
router.post('/register', userCreate);
router.get('/confirm-account/:token', userConfirm);

router.post('/forgot-password', forgotPassword);

router.route('/reset-password/:token')
  .get(validateResetPassword)
  .post(resetPassword);

//Private Routes
router.use(checkSession);

router.get('/revalidate-auth', revalidateAuth);

router.route('/user-profile/:id')
  .get(getUserAuthenticated)
  .put(updateUserAuthenticated);

router.post('user-password/:id', updateUserPassword);


export default router;