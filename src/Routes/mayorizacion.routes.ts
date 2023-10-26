import { Router } from "express";
import { saveMayorizacion } from "../Controllers/mayorizacionController";
const router: Router = Router();
router.post("/mayorizacion", saveMayorizacion);
export default router;
