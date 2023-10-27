"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chartAccount_1 = require("../Controllers/chartAccount");
const router = (0, express_1.Router)();
router.get("/account", chartAccount_1.getChartAccount);
router.post("/account", chartAccount_1.saveChartAccount);
router.get("/account/:id", chartAccount_1.getAccountById);
exports.default = router;
//# sourceMappingURL=chartAccounts.routes.js.map