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
exports.deleteBook = exports.updateBook = exports.saveDialyBook = exports.getDialyBook = void 0;
const dailyBookModel_1 = require("../Models/dailyBookModel");
const getDialyBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield dailyBookModel_1.dailyBook.findAll();
        res.status(200).json(response);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getDialyBook = getDialyBook;
const saveDialyBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { daily_book_id, fecha, titulo, tema } = req.body;
    try {
        const bookResult = yield dailyBookModel_1.dailyBook.create({
            daily_book_id: daily_book_id,
            fecha: fecha,
            titulo: titulo,
            tema: tema,
        });
        res.status(200).json(bookResult);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.saveDialyBook = saveDialyBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { daily_book_id, fecha, titulo, tema } = req.body;
    try {
        const bookResult = yield dailyBookModel_1.dailyBook.update({
            fecha: fecha,
            titulo: titulo,
            tema: tema,
        }, {
            where: {
                daily_book_id: daily_book_id,
            },
        });
        console.log(bookResult);
        res.status(200).json(bookResult);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateBook = updateBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.params.id;
    console.log(id);
    try {
        const bookResult = yield dailyBookModel_1.dailyBook.destroy({
            where: {
                daily_book_id: id,
            },
            cascade: true,
        });
        console.log(bookResult);
        res.status(200).json(bookResult);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteBook = deleteBook;
//# sourceMappingURL=dailyBookController.js.map