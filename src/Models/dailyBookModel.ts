import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database";
import { dailyBooksDetails } from "./dailyBookDetalleModel";
import { mayorizacion } from "./mayorizacionModel";

export const dailyBook = sequelize.define(
  "dailybooks",
  {
    daily_book_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    titulo: {
      type: DataTypes.STRING,
    },
    tema: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  },
);

dailyBook.hasMany(dailyBooksDetails, {
  foreignKey: "daily_book_id_fk",
  sourceKey: "daily_book_id",
});

dailyBooksDetails.belongsTo(dailyBook, {
  foreignKey: "daily_book_id_fk",
  targetKey: "daily_book_id",
  onDelete: "CASCADE",
});

dailyBook.hasMany(mayorizacion, {
  foreignKey: "daily_book_id_fk",
  sourceKey: "daily_book_id",
});

mayorizacion.belongsTo(dailyBook, {
  foreignKey: "daily_book_id_fk",
  targetKey: "daily_book_id",
});
