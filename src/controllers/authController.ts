import { Request, Response } from 'express';
import { registerUser, searchByEmail, searchByToken } from '../services';
import { comparePassword } from '../utils/bcrypt.handel';

export const userAuth = async ({ body }: Request, res: Response) => {
  const { email, password } = body;

  try {
    const user = await searchByEmail( email );
    if (!user) return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });

    const isValidPassword = comparePassword( password, user.password );
    if (!isValidPassword ) return res.status(403).json({ ok: false, msg: 'Contraseña incorrecta' });
    if (!user.confirmed) return res.status(403).json({ ok: false, msg: 'El usuario no ha sido confirmado' });

    return res.status(200).json({
      ok: true,
      user
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador'});
  }
}

export const userCreate = async ({ body }: Request, res: Response) => {
  const { email } = body;

  try {
    const userExist = await searchByEmail(email);
    if (userExist) return res.status(400).json({ ok: false, msg: 'El usuario ya existe' });

    const user = await registerUser(body);
    
    return res.status(200).json({
      ok: true,
      user
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador'});
  }
}

export const userConfirm = async ({ params }: Request, res: Response) => {
  const { token } = params;

  try {
    const user = await searchByToken(token);
    if (!user) return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });

    user.token = '';
    user.confirmed = true;
    await user.save();

    //Send mail
    
    return res.status(200).json({
      ok: true,
      msg: 'Usuario confirmado'
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador'});
  }
}