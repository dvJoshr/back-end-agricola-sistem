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
      attributes: [[Sequelize.fn("DISTINCT", Sequelize.col("codigo_chartaccount")), "codigo_chartaccount"], "estado"],
      where: {
        daily_book_id_fk: id_libro,
      },
    });
    res.json(cuentas);
  } catch (error) {
    res.json(error);
  }
};

export const getBooksDetailsByBookAndAccount = async (req: Request, res: Response) => {
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

export const updateDetails = async (req: Request, res: Response) => {
  try {
    let parametros = {
      id: req.params.id,
      cuenta: req.params.cuenta,
      estado: req.params.estado,
    };
    const response = await dailyBooksDetails.update(
      { estado: false },
      {
        where: {
          [Op.and]: [
            {
              daily_book_id_fk: parametros.id,
            },
            {
              codigo_chartaccount: parametros.cuenta,
            },
            { estado: req.params.estado },
          ],
        },
      },
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getBooksDetailsToStates = async (req: Request, res: Response) => {
  try {
    let parametros = {
      id_libro: req.params.libro,
      codigo_first: req.params.codigo_first,
      codigo_second: req.params.codigo_second,
    };
    const response = await dailyBooksDetails.findAll({
      where: {
        [Op.and]: [
          {
            daily_book_id_fk: parametros.id_libro,
          },
          {
            [Op.or]: [
              {
                codigo_chartaccount: {
                  [Op.like]: `${parametros.codigo_first}%`,
                },
              },
              {
                codigo_chartaccount: {
                  [Op.like]: `${parametros.codigo_second}%`,
                },
              },
            ],
          },
        ],
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteAccountDetail = async (req: Request, res: Response) => {
  let id = req.params.id;
  try {
    const response = await dailyBooksDetails.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDetailsAccount = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;
    const response = await dailyBooksDetails.update(req.body, {
      where: { id: id },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};
