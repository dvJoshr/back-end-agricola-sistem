"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyBooksDetails = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../Database/database");
exports.dailyBooksDetails = database_1.sequelize.define("dailybookdetails", {
    daily_book_id_fk: {
        type: sequelize_1.DataTypes.STRING,
    },
    codigo_chartaccount: {
        type: sequelize_1.DataTypes.STRING,
    },
    detalle: {
        type: sequelize_1.DataTypes.STRING,
    },
    debe: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    haber: {
        type: sequelize_1.DataTypes.DECIMAL,
    },
    referencia: {
        type: sequelize_1.DataTypes.STRING,
    },
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fecha: { type: sequelize_1.DataTypes.DATE },
}, {
    timestamps: false,
});
//# sourceMappingURL=dailyBookDetalleModel.js.map