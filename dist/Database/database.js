"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
// export const sequelize = new Sequelize(
//   "dataagriculturalsistem",
//   "main",
//   "main",
//   {
//     host: "localhost",
//     dialect: "postgres",
//     port: 5432,
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       },
//     },
//   }
// );
exports.sequelize = new sequelize_1.Sequelize("database", "fl0user", "bmjzPGDlvB38", {
    host: "ep-crimson-water-05782028.us-east-2.aws.neon.fl0.io",
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
//# sourceMappingURL=database.js.map