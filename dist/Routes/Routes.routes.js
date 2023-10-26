"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chartAccounts_routes_1 = __importDefault(require("./chartAccounts.routes"));
const dailyBook_routes_1 = __importDefault(require("./dailyBook.routes"));
const dailyBookDetails_routes_1 = __importDefault(require("./dailyBookDetails.routes"));
const router = (0, express_1.Router)();
router.use("/api", dailyBook_routes_1.default);
router.use("/api", chartAccounts_routes_1.default);
router.use("/api", dailyBookDetails_routes_1.default);
exports.default = router;
//# sourceMappingURL=Routes.routes.js.map