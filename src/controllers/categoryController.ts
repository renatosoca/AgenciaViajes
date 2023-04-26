import { Request, Response } from 'express';
import { categoryAll, categoryById, categoryUpdated, categoryCreated, categoryDeleted } from '../services';

//Methods Privates

export const getCategories = async (_: Request, res: Response) => {
  try {
    const categories = await categoryAll();

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
    const category = await categoryById(id);
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
    const category = await categoryCreated(body);

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
    const category = await categoryById(id);
    if (!category) return res.status(404).json({ ok: false, msg: 'No existe la categoria' });

    await categoryUpdated(id, body);

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
    const category = await categoryById(id);
    if (!category) return res.status(404).json({ ok: false, msg: 'No existe la categoria' });

    await categoryDeleted(id);

    return res.status(200).json({
      ok: true,
      category,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}