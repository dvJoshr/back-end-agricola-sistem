"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mayorizacion = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../Database/database");
exports.mayorizacion = database_1.sequelize.define("mayorizaciones", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    daily_book_id_fk: {
        type: sequelize_1.DataTypes.STRING,
    },
    cuenta_id: {
        type: sequelize_1.DataTypes.STRING,
    },
    referencia: {
        type: sequelize_1.DataTypes.STRING,
    },
    debito: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    credito: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    deudor: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    acreedor: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
}, {
    timestamps: false,
});
//# sourceMappingURL=mayorizacionModel.js.map