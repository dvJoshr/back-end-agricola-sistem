import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database";
import { dailyBooksDetails } from "./dailyBookDetalleModel";
export const account = sequelize.define(
  "chartaccounts",
  {
    codigo: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
    },
    detalle: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  },
);

account.hasMany(dailyBooksDetails, {
  foreignKey: "codigo_chartaccount",
  sourceKey: "codigo",
});

dailyBooksDetails.belongsTo(account, {
  foreignKey: "codigo_chartaccount",
  targetKey: "codigo",
});
