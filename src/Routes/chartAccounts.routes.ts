import { Router } from "express";
import {
  getAccountById,
  getChartAccount,
  saveChartAccount,
} from "../Controllers/chartAccount";
const router: Router = Router();

router.get("/account", getChartAccount);
router.post("/account", saveChartAccount);
router.get("/account/:id", getAccountById);
export default router;
