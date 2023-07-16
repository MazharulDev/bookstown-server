import { SortOrder } from "mongoose";
import { paginationHelpers } from "../../../helpers/paginationHelper";
import { IGenericResponse } from "../../../interface/common";
import { IPaginationOptions } from "../../../interface/pagination";
import { booksSearchableFields } from "./books.constant";
import { IBook, IBooksFilters, IReview } from "./books.interface";
import { Book } from "./books.model";

const getAllBooks = async (
  filters: IBooksFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IBook[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: booksSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Book.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Book.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const getBooks = async (): Promise<IBook[] | null> => {
  const result = await Book.find({});
  return result;
};
const getBookDetails = async (id: string): Promise<IBook[] | null> => {
  const result = await Book.find({ _id: id });
  return result;
};
const addReview = async (
  userId: string,
  review: string
): Promise<IBook | null> => {
  await Book.updateOne({ _id: userId }, { $push: { reviews: review } });
  const result = await Book.findById(userId);
  return result;
};

const getReviews = async (id: string): Promise<IBook[] | null> => {
  const result = await Book.find({ _id: id }).select("reviews -_id");
  return result;
};
export const BookService = {
  getAllBooks,
  getBooks,
  getBookDetails,
  addReview,
  getReviews,
};
