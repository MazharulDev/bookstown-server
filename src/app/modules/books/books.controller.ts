import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import pick from "../../shared/pick";
import sendResponse from "../../shared/sendResponse";
import { IBook } from "./books.interface";
import httpStatus from "http-status";
import { booksFilterableFields } from "./books.constant";
import { paginationFields } from "../../../constants/pagination";
import { BookService } from "./books.service";

const addBook = catchAsync(async (req: Request, res: Response) => {
  const book = req.body;
  const result = await BookService.addBook(book);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "academic semester created successfully",
    data: result,
  });
});

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, booksFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await BookService.getAllBooks(filters, paginationOptions);

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books retrieved successfully !",
    meta: result.meta,
    data: result.data,
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BookService.updateBook(id, req.body.options.data);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});
const getBooks = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getBooks();

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books retrieved successfully !",
    data: result,
  });
});
const getBookDetails = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.getBookDetails(id);

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books retrieved successfully !",
    data: result,
  });
});
const addReview = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.id;
  const review = req.body.reviews;
  const result = await BookService.addReview(userId, review);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "add review successfully !",
    data: result,
  });
});
const getReviews = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.getReviews(id);
  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reviews retrieved successfully !",
    data: result,
  });
});
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.deleteBook(id);

  sendResponse<object>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Delete Book successfully !",
    data: result,
  });
});

export const BookController = {
  getAllBooks,
  getBooks,
  getBookDetails,
  addReview,
  getReviews,
  addBook,
  deleteBook,
  updateBook,
};
