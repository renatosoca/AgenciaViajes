import { IAuth } from './';

export interface IUser extends IAuth {
  id?: number;
  name: string;
  lastname: string;
  image: string;
  hasVerifiedEmail: boolean;
  status: TStatus;
  token: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type TStatus = 'active' | 'inactive' | 'deleted';