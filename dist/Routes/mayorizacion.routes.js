"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mayorizacionController_1 = require("../Controllers/mayorizacionController");
const router = (0, express_1.Router)();
router.post("/mayorizacion", mayorizacionController_1.saveMayorizacion);
exports.default = router;
//# sourceMappingURL=mayorizacion.routes.js.map