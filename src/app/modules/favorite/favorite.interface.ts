import { Model, Types } from "mongoose";

export type IFavorite = {
  favorite: boolean;
  email: string;
  bookId: {
    type: Types.ObjectId;
    _id: Types.ObjectId;
  };
};

export type FavoriteModel = Model<IFavorite, Record<string, unknown>>;
