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
exports.saveChartAccount = exports.getChartAccount = void 0;
const chartAccountModel_1 = require("../Models/chartAccountModel");
const getChartAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accountsResult = yield chartAccountModel_1.account.findAll({
            order: [["codigo", "ASC"]],
        });
        res.json(accountsResult);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.getChartAccount = getChartAccount;
const saveChartAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { codigo, titulo, detalle } = req.body;
    try {
        const accountResult = yield chartAccountModel_1.account.create({
            codigo: codigo,
            titulo: titulo,
            detalle: detalle,
        });
        res.json(accountResult);
    }
    catch (error) {
        return res.status(500).json(error);
    }
});
exports.saveChartAccount = saveChartAccount;
//# sourceMappingURL=chartAccount.js.map