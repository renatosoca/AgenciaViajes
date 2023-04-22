import { Request, Response } from 'express';
import { categoryModel } from '../models';

//Methods Privates

export const getCategories = async (_: Request, res: Response) => {
  try {
    const categories = await categoryModel.findAll({});

    return res.status(200).json({
      ok: true,
      categories,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

export const getCategory = async ({ params }: Request, res: Response) => {
  const { id } = params;

  try {
    const category = await categoryModel.findByPk(id);
    if (!category) return res.status(404).json({ ok: false, msg: 'No existe la categoria' });

    return res.status(200).json({
      ok: true,
      category,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

export const createCategory = async ({ body }: Request, res: Response) => {
  try {
    const category = await categoryModel.create(body);

    return res.status(200).json({
      ok: true,
      category,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

export const updateCategory = async ({ body, params }: Request, res: Response) => {
  const { id } = params;

  try {
    const category = await categoryModel.findByPk(id);
    if (!category) return res.status(404).json({ ok: false, msg: 'No existe la categoria' });

    await category.update(body);

    return res.status(200).json({
      ok: true,
      category,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

export const deleteCategory = async ({ params }: Request, res: Response) => {
  const { id } = params;

  try {
    const category = await categoryModel.findByPk(id);
    if (!category) return res.status(404).json({ ok: false, msg: 'No existe la categoria' });

    await category.destroy();

    return res.status(200).json({
      ok: true,
      category,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}