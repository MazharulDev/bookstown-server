import mongoose, { Schema, model } from "mongoose";
import { FavoriteModel, IFavorite } from "./favorite.interface";

export const FavoriteSchema = new Schema<IFavorite, FavoriteModel>(
  {
    favorite: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Favorite = model<IFavorite, FavoriteModel>(
  "Favorite",
  FavoriteSchema
);
