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
exports.saveMayorizacion = void 0;
const mayorizacionModel_1 = require("../Models/mayorizacionModel");
const saveMayorizacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { daily_book_id_fk, codigo_chartAccount, referencia, deudor, acreedor, } = req.body;
    try {
        const response = mayorizacionModel_1.mayorizacion.create({
            daily_book_id_fk: daily_book_id_fk,
            codigo_chartAccount: codigo_chartAccount,
            referencia: referencia,
            deudor: deudor,
            acreedor: acreedor,
        });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.saveMayorizacion = saveMayorizacion;
//# sourceMappingURL=mayorizacionController.js.map