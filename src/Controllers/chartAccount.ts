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
      estado: "ACTIVO",
    });
    res.json(accountResult);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAccountById = async (req: Request, res: Response) => {
  let id = req.params.id;
  try {
    const response = await account.findOne({
      where: {
        codigo: id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateAccount = async (req: Request, res: Response) => {
  let { codigo_antiguo, codigo_nuevo, titulo, detalle } = req.body;
  try {
    const accountResult = await account.update(
      {
        codigo: codigo_nuevo,
        titulo: titulo,
        detalle: detalle,
      },
      {
        where: {
          codigo: codigo_antiguo,
        },
      },
    );
    res.json(accountResult);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteCuenta = async (req: Request, res: Response) => {
  let codigo = req.params.id;
  try {
    const response = await account.update(
      {
        codigo: `${codigo}_Borrado`,
        estado: "BORRADO",
      },
      {
        where: {
          codigo: codigo,
        },
      },
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};
