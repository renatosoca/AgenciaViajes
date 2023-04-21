import { Request, Response } from 'express';
import { categoryModel, estateModel, userModel } from '../models';

export const getEstates = async ({ query }: Request, res: Response) => {
  const { page, limit } = query;
  try {
    const offset = (Number(page) - 1) * Number(limit);
    
    const estates = await estateModel.findAll({
      limit: Number(limit),
      offset,
      //where AND
      include: [
        { model: categoryModel, as: 'category' },
        { model: userModel, as: 'user' },
      ],
    });

    return res.status(200).json({
      ok: true,
      estates,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador' });
  }
}

export const getEstate = async ({ params }: Request, res: Response) => {
  const { id } = params;

  try {
    const estate = await estateModel.findByPk(id, {
      include: [
        { model: categoryModel, as: 'category' },
        { model: userModel, as: 'user' },
      ],
    });
    if (!estate) return res.status(404).json({ ok: false, msg: 'No existe la propiedad'}); 

    return res.status(200).json({
      ok: true,
      estate,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador'});
  }
}

export const createEstate = async ({ body }: Request, res: Response) => {
  try {
    //const estate = new estateModel(body);
    const estate = await estateModel.create(body);

    return res.status(200).json({
      ok: true,
      estate,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador'});
  }
}

export const updateEstate = async ({ body, params }: Request, res: Response) => {
  const { id } = params;

  try {
    const estate = await estateModel.findByPk(id);
    if (!estate) return res.status(404).json({ ok: false, msg: 'No existe la propiedad'}); 

    await estate.update(body);

    return res.status(200).json({
      ok: true,
      estate,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador'});
  }
}

export const deleteEstate = async ({ params }: Request, res: Response) => {
  const { id } = params;

  try {
    const estate = await estateModel.findByPk(id);
    if (!estate) return res.status(404).json({ ok: false, msg: 'No existe la propiedad'});

    //Protected delete

    await estate.destroy();

    return res.status(200).json({
      ok: true,
      estate,
    });
  } catch (error) {
    return res.status(500).json({ ok: false, msg: 'Error del sistema, contacte al administrador'});
  }
}