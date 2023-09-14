import express from "express";
import { BookRoutes } from "../modules/books/books.route";
import { favoriteRoutes } from "../modules/favorite/favorite.route";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/favorite",
    route: favoriteRoutes,
  },
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
