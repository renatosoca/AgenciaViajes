import { Request } from 'express';
import { IUser } from './user.interface';

export interface IAuth {
  email: string;
  password: string;
}

export interface AuthRequestExtends extends Request {
  user?: IUser;
}