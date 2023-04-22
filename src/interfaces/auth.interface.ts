import { Request } from 'express';
import { User } from './user.interface';

export interface Auth {
  email: string;
  password: string;
}

export interface AuthRequestExtends extends Request {
  user?: User;
}