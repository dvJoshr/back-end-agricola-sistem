import { Router } from "express";
import { deleteCuenta, getAccountById, getChartAccount, saveChartAccount, updateAccount } from "../Controllers/chartAccount";
const router: Router = Router();

router.get("/account", getChartAccount);
router.post("/account", saveChartAccount);
router.put("/account", updateAccount);
router.get("/account/:id", getAccountById);
router.delete("/account/:id", deleteCuenta);
export default router;
