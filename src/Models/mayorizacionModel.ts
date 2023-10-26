import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database";

export const mayorizacion = sequelize.define(
  "mayorizaciones",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    daily_book_id_fk: {
      type: DataTypes.STRING,
    },
    cuenta_id: {
      type: DataTypes.STRING,
    },
    referencia: {
      type: DataTypes.STRING,
    },
    debito: {
      type: DataTypes.DECIMAL,
    },
    credito: {
      type: DataTypes.DECIMAL,
    },
    deudor: {
      type: DataTypes.DECIMAL,
    },
    acreedor: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    timestamps: false,
  }
);
