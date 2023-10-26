"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.account = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../Database/database");
const dailyBookDetalleModel_1 = require("./dailyBookDetalleModel");
exports.account = database_1.sequelize.define("chartaccounts", {
    codigo: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING,
    },
    detalle: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    timestamps: false,
});
exports.account.hasMany(dailyBookDetalleModel_1.dailyBooksDetails, {
    foreignKey: "codigo_chartaccount",
    sourceKey: "codigo",
});
dailyBookDetalleModel_1.dailyBooksDetails.belongsTo(exports.account, {
    foreignKey: "codigo_chartaccount",
    targetKey: "codigo",
});
//# sourceMappingURL=chartAccountModel.js.map