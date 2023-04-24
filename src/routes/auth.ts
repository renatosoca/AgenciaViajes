import { Router } from 'express';
import { check } from 'express-validator';
import { forgotPassword, getUserAuthenticated, resetPassword, revalidateAuth, updateUserAuthenticated, updateUserPassword, userAuth, userConfirm, userCreate, validateResetPassword } from '../controllers';
import { checkSession, fieldValidations } from '../middlewares';

const router = Router();

router.post('/login', [
  check('email', 'Email is required').isEmail().escape(),
  check('password', 'Password is required').not().isEmpty().trim().escape(),
  fieldValidations,
], userAuth);

router.post('/register', [
  check('name', 'Name is required').not().isEmpty().trim().escape(),
  check('lastname', 'Lastname is required').not().isEmpty().trim().escape(),
  check('email', 'Email is required').isEmail().escape(),
  check('password', 'Password is required').not().isEmpty().trim().escape(),
  fieldValidations,
], userCreate);

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