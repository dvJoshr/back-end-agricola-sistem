"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chartAccount_1 = require("../Controllers/chartAccount");
const router = (0, express_1.Router)();
router.get("/account", chartAccount_1.getChartAccount);
router.post("/account", chartAccount_1.saveChartAccount);
router.put("/account", chartAccount_1.updateAccount);
router.get("/account/:id", chartAccount_1.getAccountById);
router.delete("/account/:id", chartAccount_1.deleteCuenta);
exports.default = router;
//# sourceMappingURL=chartAccounts.routes.js.map