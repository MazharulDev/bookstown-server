import { Model } from "mongoose";

export type IBook = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  favorite?: string[];
  img: string;
  price: string;
  user: string;
  reviews: string[];
  details: string;
};
export type BookModel = Model<IBook, Record<string, unknown>>;

export type IBooksFilters = {
  searchTerm?: string;
  genre?: string;
  publicationDate?: string;
};

export type IReview = {
  reviews: string;
};
