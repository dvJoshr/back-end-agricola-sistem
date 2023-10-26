import { Router } from "express";
import { getChartAccount, saveChartAccount } from "../Controllers/chartAccount";
const router: Router = Router();

router.get("/account", getChartAccount);
 router.post("/account", saveChartAccount);
export default router;
