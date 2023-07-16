import express from "express";
import { BookController } from "./books.controller";

const router = express.Router();

router.get("/", BookController.getAllBooks);
router.get("/all", BookController.getBooks);
router.get("/details/:id", BookController.getBookDetails);
router.post("/review/:id", BookController.addReview);

export const BookRoutes = router;
