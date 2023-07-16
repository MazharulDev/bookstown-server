import express from "express";
import { BookController } from "./books.controller";

const router = express.Router();

router.get("/", BookController.getAllBooks);
router.get("/all", BookController.getBooks);

export const BookRoutes = router;
