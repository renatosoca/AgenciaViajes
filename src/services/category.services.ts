import { ICategory } from '../interfaces';
import { Category } from '../models';

export const categoryCreated = async (payload: ICategory) => {
  const categoryCreated = await Category.create(payload);
  return categoryCreated;
}

export const categoryUpdated = async (id: string, payload: ICategory) => {
  const categoryUpdated = await Category.update(payload, { where: { id } });
  return categoryUpdated;
}

export const categoryDeleted = async (id: string) => {
  const categoryDeleted = await Category.destroy({ where: { id } });
  return categoryDeleted;
}

export const categoryById = async (id: string) => {
  const categoryFound = await Category.findOne({ where: { id } });
  return categoryFound;
}

export const categoryAll = async () => {
  const categories = await Category.findAll({});
  return categories;
}