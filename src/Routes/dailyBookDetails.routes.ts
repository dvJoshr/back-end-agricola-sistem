import { Router } from "express";
import {
  getBooksDetailsByBookAndAccount,
  getCountsBooks,
  getDailyBookDetailsById,
  getDailyBooksDetails,
  saveBooksDetails,
  updateDetails,
} from "../Controllers/dailyBooksDetails";
const router: Router = Router();
router.get("/details", getDailyBooksDetails);
router.get("/details/:id", getDailyBookDetailsById);
router.post("/details", saveBooksDetails);
router.get("/details/cuentas/:id", getCountsBooks);
router.get("/details/books/:id&:cuenta", getBooksDetailsByBookAndAccount);
router.put("/details/:id&:cuenta&:estado", updateDetails);
export default router;
