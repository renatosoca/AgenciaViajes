import { Router } from 'express';
import { forgotPassword, getUserAuthenticaded, resetPassword, revalidateAuth, updateUserAuthenticaded, updateUserPassword, userAuth, userConfirm, userCreate, validateResetPassword } from '../controllers';

const router = Router();

router.post('/login', userAuth);
router.post('/register', userCreate);
router.get('/confirm-account/:token', userConfirm);

router.post('/forgot-password', forgotPassword);

router.route('/reset-password/:token')
  .get(validateResetPassword)
  .post(resetPassword)

//Private Routes

router.get('/revalidate-auth', revalidateAuth)

router.route('/user-profile/:id')
  .get(getUserAuthenticaded)
  .put(updateUserAuthenticaded)

router.post('user-password/:id', updateUserPassword)


export default router;