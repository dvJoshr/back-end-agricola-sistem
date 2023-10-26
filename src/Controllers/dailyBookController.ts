import { Request, Response } from "express";
import { dailyBook } from "../Models/dailyBookModel";

export const getDialyBook = async (req: Request, res: Response) => {
  try {
    const response = await dailyBook.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const saveDialyBook = async (req: Request, res: Response) => {
  let { daily_book_id, fecha, titulo, tema } = req.body;
  try {
    const bookResult = await dailyBook.create({
      daily_book_id: daily_book_id,
      fecha: fecha,
      titulo: titulo,
      tema: tema,
    });
    res.status(200).json(bookResult);
  } catch (error) {
    res.status(500).json(error);
  }
};

