import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "dataagriculturalsistem",
  "main",
  "main",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
  }
);
