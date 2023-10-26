import { Router } from "express";
import {
  getDialyBook,
  saveDialyBook,
} from "../Controllers/dailyBookController";
const router: Router = Router();

router.get("/books", getDialyBook);
router.post("/books", saveDialyBook);
export default router;
