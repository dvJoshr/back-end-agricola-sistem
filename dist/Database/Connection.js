"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize("dataagriculturalsistem", "main", "main", {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
});
exports.default = exports.sequelize;
//# sourceMappingURL=Connection.js.map