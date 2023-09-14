"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
router.get("/", books_controller_1.BookController.getAllBooks);
router.get("/all", books_controller_1.BookController.getBooks);
router.get("/details/:id", books_controller_1.BookController.getBookDetails);
router.post("/review/:id", books_controller_1.BookController.addReview);
router.get("/review/:id", books_controller_1.BookController.getReviews);
router.post("/", books_controller_1.BookController.addBook);
router.delete("/book/:id", books_controller_1.BookController.deleteBook);
exports.BookRoutes = router;
