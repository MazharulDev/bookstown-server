import express from "express";
import { favoriteController } from "./favorite.controller";

const router = express.Router();

router.post("/", favoriteController.createFavorite);
router.get("/", favoriteController.getAllFavorite);

export const favoriteRoutes = router;
