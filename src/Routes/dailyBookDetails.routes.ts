import { Router } from "express";
import { deleteAccountDetail, getBooksDetailsByBookAndAccount, getBooksDetailsToStates, getCountsBooks, getDailyBookDetailsById, getDailyBooksDetails, saveBooksDetails, updateDetails, updateDetailsAccount } from "../Controllers/dailyBooksDetails";
const router: Router = Router();
router.get("/details", getDailyBooksDetails);
router.get("/details/:id", getDailyBookDetailsById);
router.post("/details", saveBooksDetails);
router.get("/details/cuentas/:id", getCountsBooks);
router.get("/details/books/:id&:cuenta", getBooksDetailsByBookAndAccount);
router.put("/details/:id&:cuenta&:estado", updateDetails);
router.get("/details/estados/:codigo_first&:codigo_second&:libro", getBooksDetailsToStates);
router.delete("/details/:id", deleteAccountDetail);
router.put("/details/update/:id", updateDetailsAccount);
export default router;
