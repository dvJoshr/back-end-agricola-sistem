"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dailyBook = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../Database/database");
const dailyBookDetalleModel_1 = require("./dailyBookDetalleModel");
const mayorizacionModel_1 = require("./mayorizacionModel");
exports.dailyBook = database_1.sequelize.define("dailybooks", {
    daily_book_id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE,
    },
    titulo: {
        type: sequelize_1.DataTypes.STRING,
    },
    tema: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    timestamps: false,
});
exports.dailyBook.hasMany(dailyBookDetalleModel_1.dailyBooksDetails, {
    foreignKey: "daily_book_id_fk",
    sourceKey: "daily_book_id",
});
dailyBookDetalleModel_1.dailyBooksDetails.belongsTo(exports.dailyBook, {
    foreignKey: "daily_book_id_fk",
    targetKey: "daily_book_id",
});
exports.dailyBook.hasMany(mayorizacionModel_1.mayorizacion, {
    foreignKey: "daily_book_id_fk",
    sourceKey: "daily_book_id",
});
mayorizacionModel_1.mayorizacion.belongsTo(exports.dailyBook, {
    foreignKey: "daily_book_id_fk",
    targetKey: "daily_book_id",
});
//# sourceMappingURL=dailyBookModel.js.map