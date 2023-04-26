import { Estate } from '../models'

export const estateAll = async () => {
  const estate = await Estate.findAll({});
  return estate;
}

export const estateById = async (id: string) => {
  const estate = await Estate.findOne({ where: { id } });
  return estate;
}