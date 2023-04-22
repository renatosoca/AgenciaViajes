import { Auth } from './';

export interface User extends Auth {
  id?: number;
  name: string;
  lastname: string;
  token?: string;
  confirmed?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}