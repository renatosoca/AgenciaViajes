import { compareSync, genSaltSync, hashSync } from "bcrypt";

export const hashPassword = (password: string): string => {
  const salt = genSaltSync();
  return hashSync(password, salt);
}

export const comparePassword = (password: string, hash: string): boolean => {
  return compareSync(password, hash);
}