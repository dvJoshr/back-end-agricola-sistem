import { Router } from "express";
import { deleteBook, getDialyBook, saveDialyBook, updateBook } from "../Controllers/dailyBookController";
const router: Router = Router();

router.get("/books", getDialyBook);
router.post("/books", saveDialyBook);
router.put("/books", updateBook);
router.delete("/books/:id", deleteBook);
export default router;
