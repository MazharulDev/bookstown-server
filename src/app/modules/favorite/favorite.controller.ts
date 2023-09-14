import { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync";
import { favoriteService } from "./favorite.service";
import sendResponse from "../../shared/sendResponse";
import { IFavorite } from "./favorite.interface";
import httpStatus from "http-status";

const createFavorite = catchAsync(async (req: Request, res: Response) => {
  const result = await favoriteService.createFavorite(req.body);
  sendResponse<IFavorite>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "favorite created successfully",
    data: result,
  });
});
const getAllFavorite = catchAsync(async (req: Request, res: Response) => {
  const result = await favoriteService.getAllFavorite();
  sendResponse<Partial<IFavorite[]>>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "favorite fetched successfully",
    data: result,
  });
});

export const favoriteController = {
  createFavorite,
  getAllFavorite,
};
