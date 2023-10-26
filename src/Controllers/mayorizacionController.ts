import { Request, Response } from "express";

import { mayorizacion } from "../Models/mayorizacionModel";

export const saveMayorizacion = async (req: Request, res: Response) => {
  const {
    daily_book_id_fk,
    codigo_chartAccount,
    referencia,
    deudor,
    acreedor,
  } = req.body;
  try {
    const response = mayorizacion.create({
      daily_book_id_fk: daily_book_id_fk,
      codigo_chartAccount: codigo_chartAccount,
      referencia: referencia,
      deudor: deudor,
      acreedor: acreedor,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};
