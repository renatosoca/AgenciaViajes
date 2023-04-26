import { IUser } from '../interfaces';
import { User } from '../models';
import { generateToken, hashPassword } from '../utils';

export const registerUser = async (payload: IUser) => {
  payload.password = hashPassword(payload.password);
  payload.token = generateToken();
  const userCreated = await User.create(payload);
  return userCreated;
}

export const userById = async (id: number) => {
  const userExist = await User.findOne({ where: { id } });
  return userExist;
}

export const userByEmail = async (email: string) => {
  const userExist = await User.findOne({ where: { email } });
  return userExist;
}

export const userByToken = async (token: string) => {
  const userExist = await User.findOne({ where: { hasVerifiedEmail: token } });
  return userExist;
}