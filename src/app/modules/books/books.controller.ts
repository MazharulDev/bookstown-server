import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import pick from "../../shared/pick";
import sendResponse from "../../shared/sendResponse";
import { IBook } from "./books.interface";
import httpStatus from "http-status";
import { booksFilterableFields } from "./books.constant";
import { paginationFields } from "../../../constants/pagination";
import { BookService } from "./books.service";

// const createSemester = catchAsync(async (req: Request, res: Response) => {
//   const { ...academicSemesterData } = req.body;
//   const result = await AcademicSemesterService.createSemester(
//     academicSemesterData
//   );
//   sendResponse<IAcademicSemester>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "academic semester created successfully",
//     data: result,
//   });
// });

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

export const BookController = {
  getAllBooks,
  getBooks,
  getBookDetails,
};
