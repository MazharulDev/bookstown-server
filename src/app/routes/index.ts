import express from "express";
import { BookRoutes } from "../modules/books/books.route";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/books",
    route: BookRoutes,
  },
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
