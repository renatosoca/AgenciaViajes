import { sign, verify } from "jsonwebtoken"

export const generateJWT = (_id: number, email: string): string => {
  const jwtSecret: string = `${process.env.JWT_SECRET}`
  return sign({ _id, email }, jwtSecret, {
    expiresIn: '6h'
  });
}

export const verifyJWT = (jwt: string): { _id: number, email: string } => {
  const jwtSecret: string = `${process.env.JWT_SECRET}`
  return verify(jwt, jwtSecret) as { _id: number, email: string }
}