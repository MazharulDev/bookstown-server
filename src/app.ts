import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
// import globalErrorHandler from './app/middlewares/globalErrorHandler';
import httpStatus from "http-status";
import router from "./app/routes";
// import router from './app/routes';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//aplication route
app.use("/api/v1/", router);

// tesing
app.get("/", (req: Request, res: Response) => {
  res.send("Home route is Showing");
});

//global error handler
// app.use(globalErrorHandler);

// Not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not found",
    errorMessages: [
      {
        path: req.originalUrl,
        message: "Api not found",
      },
    ],
  });
  next();
});

export default app;
