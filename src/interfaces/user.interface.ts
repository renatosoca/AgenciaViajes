import { Auth } from './';

export interface User extends Auth {
  name: string;
  lastname: string;
  token: string;
  confirmed: boolean;
}