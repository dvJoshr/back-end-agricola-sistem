"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDetailsAccount = exports.deleteAccountDetail = exports.getBooksDetailsToStates = exports.updateDetails = exports.getBooksDetailsByBookAndAccount = exports.getCountsBooks = exports.saveBooksDetails = exports.getDailyBookDetailsById = exports.getDailyBooksDetails = void 0;
const sequelize_1 = require("sequelize");
const dailyBookDetalleModel_1 = require("../Models/dailyBookDetalleModel");
const getDailyBooksDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield dailyBookDetalleModel_1.dailyBooksDetails.findAll();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getDailyBooksDetails = getDailyBooksDetails;
const getDailyBookDetailsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const response = yield dailyBookDetalleModel_1.dailyBooksDetails.findAll({
            where: {
                daily_book_id_fk: id,
            },
        });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getDailyBookDetailsById = getDailyBookDetailsById;
const saveBooksDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const response = yield dailyBookDetalleModel_1.dailyBooksDetails.bulkCreate(req.body);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.saveBooksDetails = saveBooksDetails;
const getCountsBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id_libro = req.params.id;
    try {
        const cuentas = yield dailyBookDetalleModel_1.dailyBooksDetails.findAll({
            attributes: [[sequelize_1.Sequelize.fn("DISTINCT", sequelize_1.Sequelize.col("codigo_chartaccount")), "codigo_chartaccount"], "estado"],
            where: {
                daily_book_id_fk: id_libro,
            },
        });
        res.json(cuentas);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getCountsBooks = getCountsBooks;
const getBooksDetailsByBookAndAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let parametros = {
            id: req.params.id,
            cuenta: req.params.cuenta,
        };
        const response = yield dailyBookDetalleModel_1.dailyBooksDetails.findAll({
            where: {
                [sequelize_1.Op.and]: [
                    {
                        daily_book_id_fk: parametros.id,
                    },
                    {
                        codigo_chartaccount: parametros.cuenta,
                    },
                ],
            },
        });
        res.status(200).json(response);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getBooksDetailsByBookAndAccount = getBooksDetailsByBookAndAccount;
const updateDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let parametros = {
            id: req.params.id,
            cuenta: req.params.cuenta,
            estado: req.params.estado,
        };
        const response = yield dailyBookDetalleModel_1.dailyBooksDetails.update({ estado: false }, {
            where: {
                [sequelize_1.Op.and]: [
                    {
                        daily_book_id_fk: parametros.id,
                    },
                    {
                        codigo_chartaccount: parametros.cuenta,
                    },
                    { estado: req.params.estado },
                ],
            },
        });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateDetails = updateDetails;
const getBooksDetailsToStates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let parametros = {
            id_libro: req.params.libro,
            codigo_first: req.params.codigo_first,
            codigo_second: req.params.codigo_second,
        };
        const response = yield dailyBookDetalleModel_1.dailyBooksDetails.findAll({
            where: {
                [sequelize_1.Op.and]: [
                    {
                        daily_book_id_fk: parametros.id_libro,
                    },
                    {
                        [sequelize_1.Op.or]: [
                            {
                                codigo_chartaccount: {
                                    [sequelize_1.Op.like]: `${parametros.codigo_first}%`,
                                },
                            },
                            {
                                codigo_chartaccount: {
                                    [sequelize_1.Op.like]: `${parametros.codigo_second}%`,
                                },
                            },
                        ],
                    },
                ],
            },
        });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getBooksDetailsToStates = getBooksDetailsToStates;
const deleteAccountDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    try {
        const response = yield dailyBookDetalleModel_1.dailyBooksDetails.destroy({
            where: {
                id: id,
            },
        });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteAccountDetail = deleteAccountDetail;
const updateDetailsAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        const response = yield dailyBookDetalleModel_1.dailyBooksDetails.update(req.body, {
            where: { id: id },
        });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateDetailsAccount = updateDetailsAccount;
//# sourceMappingURL=dailyBooksDetails.js.map