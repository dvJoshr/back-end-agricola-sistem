// import { ChartAccount } from "Models/chartAccountModel";
// import { Client } from "pg";
import { Request, Response } from "express";
import { account } from "../Models/chartAccountModel";

export const getChartAccount = async (req: Request, res: Response) => {
  try {
    const accountsResult = await account.findAll({
      order: [["codigo", "ASC"]],
    });
    res.json(accountsResult);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const saveChartAccount = async (req: Request, res: Response) => {
  let { codigo, titulo, detalle } = req.body;
  try {
    const accountResult = await account.create({
      codigo: codigo,
      titulo: titulo,
      detalle: detalle,
    });
    res.json(accountResult);
  } catch (error) {
    return res.status(500).json(error);
  }
};
