import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database";

export const dailyBooksDetails = sequelize.define(
  "dailybookdetails",
  {
    daily_book_id_fk: {
      type: DataTypes.STRING,
    },
    codigo_chartaccount: {
      type: DataTypes.STRING,
    },
    detalle: {
      type: DataTypes.STRING,
    },
    debe: {
      type: DataTypes.DECIMAL,
    },
    haber: {
      type: DataTypes.DECIMAL,
    },
    referencia: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha: {
      type: DataTypes.DATE,
    },
    estado: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);
