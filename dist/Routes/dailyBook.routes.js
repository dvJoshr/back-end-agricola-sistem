"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dailyBookController_1 = require("../Controllers/dailyBookController");
const router = (0, express_1.Router)();
router.get("/books", dailyBookController_1.getDialyBook);
router.post("/books", dailyBookController_1.saveDialyBook);
router.put("/books", dailyBookController_1.updateBook);
router.delete("/books/:id", dailyBookController_1.deleteBook);
exports.default = router;
//# sourceMappingURL=dailyBook.routes.js.map