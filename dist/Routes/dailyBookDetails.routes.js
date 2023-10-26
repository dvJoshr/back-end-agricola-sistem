"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dailyBooksDetails_1 = require("../Controllers/dailyBooksDetails");
const router = (0, express_1.Router)();
router.get("/details", dailyBooksDetails_1.getDailyBooksDetails);
router.get("/details/:id", dailyBooksDetails_1.getDailyBookDetailsById);
router.post("/details", dailyBooksDetails_1.saveBooksDetails);
router.get("/details/cuentas/:id", dailyBooksDetails_1.getCountsBooks);
router.get("/details/books/:id&:cuenta", dailyBooksDetails_1.getBooksDetailsByBookAndAccount);
router.put("/details/:id&:cuenta&:estado", dailyBooksDetails_1.updateDetails);
exports.default = router;
//# sourceMappingURL=dailyBookDetails.routes.js.map