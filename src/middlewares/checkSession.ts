import { NextFunction, Response } from 'express';
import { AuthRequestExtends } from '../interfaces';
import { userById } from '../services';
import { verifyJWT } from '../utils';

export const checkSession = async (req: AuthRequestExtends, res: Response, next: NextFunction) => {
  const token: string = `${req.headers.authorization?.split(' ')[1]}`;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      const { _id } = verifyJWT(token);

      req.user = await userById(_id) || undefined;

      return next();
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  }

  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  return next();
}