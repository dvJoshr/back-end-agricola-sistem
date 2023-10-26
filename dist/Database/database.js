"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize("database", "fl0user", "bmjzPGDlvB38", {
    host: "ep-crimson-water-05782028.us-east-2.aws.neon.fl0.io",
    dialect: "postgres",
    port: 5432,
});
//# sourceMappingURL=database.js.map