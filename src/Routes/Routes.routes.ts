import { Router } from "express";
import chartAccount from "./chartAccounts.routes";
import dailyBookrutes from "./dailyBook.routes";
import dailyBooksDetailsRoutes from "./dailyBookDetails.routes";
const router: Router = Router();
router.use("/api", dailyBookrutes);
router.use("/api", chartAccount);
router.use("/api", dailyBooksDetailsRoutes);
export default router;
