import { Request, Response } from 'express';
import { AuthRequestExtends } from '../interfaces';
import { registerUser, userByEmail, userByToken } from '../services';
import { sendEmailRegister, comparePassword } from '../utils';

export const userAuth = async ({ body }: Request, res: Response) => {
  const { email, password } = body;

  try {
    const user = await userByEmail(email);
    if (!user) return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });

    const isValidPassword = comparePassword(password, user.password);
    if (!isValidPassword) return res.status(403).json({ ok: false, msg: 'Contraseña incorrecta' });
    if (!user.hasVerifiedEmail) return res.status(403).json({ ok: false, msg: 'El usuario no ha sido confirmado' });

    return res.status(200).json({
      ok: true,
      user
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

export const userCreate = async ({ body }: Request, res: Response) => {
  const { email, name, lastname } = body;

  try {
    const userExist = await userByEmail(email);
    if (userExist) return res.status(403).json({ ok: false, msg: 'El correo electronico ya está en uso' });

    const user = await registerUser(body);
    await sendEmailRegister(name, lastname, email, user.token);

    return res.status(200).json({
      ok: true,
      user
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

export const userConfirm = async ({ params }: Request, res: Response) => {
  const { token } = params;

  try {
    const user = await userByToken(token);
    if (!user) return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });

    user.hasVerifiedEmail = true;
    user.token = '';
    await user.save();

    //Send mail

    return res.status(200).json({
      ok: true,
      msg: 'Usuario confirmado'
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

export const forgotPassword = async ({ }: Request, res: Response) => {
  try {

    return res.status(200).json({
      ok: true,
    })
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

export const validateResetPassword = async ({ }: Request, res: Response) => {
  try {

    return res.status(200).json({
      ok: true,
    })
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

export const resetPassword = async ({ }: Request, res: Response) => {
  try {

    return res.status(200).json({
      ok: true,
    })
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

//Methods Privates

export const revalidateAuth = async ({ user }: AuthRequestExtends, res: Response) => {
  if (!user) return res.status(403).json({ ok: false, msg: 'Usuario no autorizado' });
  try {
    console.log(user)

    return res.status(200).json({
      ok: true,
      user
    })
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

export const getUserAuthenticated = async ({ }: Request, res: Response) => {
  try {

    return res.status(200).json({
      ok: true,
    })
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

export const updateUserAuthenticated = async ({ }: Request, res: Response) => {
  try {

    return res.status(200).json({
      ok: true,
    })
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

export const updateUserPassword = async ({ }: Request, res: Response) => {
  try {


    return res.status(200).json({
      ok: true,
    })
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}