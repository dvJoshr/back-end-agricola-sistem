import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("database", "fl0user", "bmjzPGDlvB38", {
  host: "ep-crimson-water-05782028.us-east-2.aws.neon.fl0.io",
  dialect: "postgres",
  port: 5432,
});
