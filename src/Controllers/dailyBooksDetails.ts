import { Request, Response } from "express";
import { Op, Sequelize } from "sequelize";
import { dailyBooksDetails } from "../Models/dailyBookDetalleModel";

export const getDailyBooksDetails = async (req: Request, res: Response) => {
  try {
    const response = await dailyBooksDetails.findAll();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getDailyBookDetailsById = async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log("Aqui deberia haber un id", id);
  try {
    const response = await dailyBooksDetails.findAll({
      where: {
        daily_book_id_fk: id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const saveBooksDetails = async (req: Request, res: Response) => {
  console.log(req.body);

  try {
    const response = await dailyBooksDetails.bulkCreate(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};
export const getCountsBooks = async (req: Request, res: Response) => {
  let id_libro = req.params.id;
  try {
    const cuentas = await dailyBooksDetails.findAll({
      attributes: [
        [
          Sequelize.fn("DISTINCT", Sequelize.col("codigo_chartaccount")),
          "codigo_chartaccount",
        ],
      ],
      where: {
        daily_book_id_fk: id_libro,
      },
    });
    res.json(cuentas);
  } catch (error) {
    res.json(error);
  }
};

export const getBooksDetailsByBookAndAccount = async (
  req: Request,
  res: Response
) => {
  try {
    let parametros = {
      id: req.params.id,
      cuenta: req.params.cuenta,
    };
    const response = await dailyBooksDetails.findAll({
      where: {
        [Op.and]: [
          {
            daily_book_id_fk: parametros.id,
          },
          {
            codigo_chartaccount: parametros.cuenta,
          },
        ],
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
};
