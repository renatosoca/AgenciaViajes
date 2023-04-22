import { User } from '../interfaces';
import { userModel } from '../models';
import { hashPassword } from '../utils';

export const registerUser = async ( payload: User) => {
  payload.password = hashPassword(payload.password)
  const userCreated = await userModel.create(payload);
  return userCreated;
}

export const userById = async ( id: number ) => {
  const userExist = await userModel.findOne({ where: { id }});
  return userExist;
}

export const userByEmail = async ( email: string ) => {
  const userExist = await userModel.findOne({ where: { email }});
  return userExist;
}

export const userByToken = async ( token: string ) => {
  const userExist = await userModel.findOne({ where: { hasVerifiedEmail: token }});
  return userExist;
}