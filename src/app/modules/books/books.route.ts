import express from "express";
import { BookController } from "./books.controller";

const router = express.Router();

router.get("/", BookController.getAllBooks);
router.get("/all", BookController.getBooks);
router.get("/details/:id", BookController.getBookDetails);

export const BookRoutes = router;
