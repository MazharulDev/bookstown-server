import { Book } from "../books/books.model";
import { IFavorite } from "./favorite.interface";
import { Favorite } from "./favorite.model";

const createFavorite = async (payload: IFavorite): Promise<IFavorite> => {
  const favorite = await Favorite.create(payload);
  const favoriteId = favorite._id;
  const bookId = favorite.bookId;
  await Book.findByIdAndUpdate(bookId, {
    $push: { favorite: { $each: [favoriteId], $position: 0 } },
  });
  return favorite;
};

const getAllFavorite = async (): Promise<IFavorite[]> => {
  const result = await Favorite.find({}).populate("bookId");
  return result;
};

export const favoriteService = {
  createFavorite,
  getAllFavorite,
};
