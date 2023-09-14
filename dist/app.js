"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import globalErrorHandler from './app/middlewares/globalErrorHandler';
const http_status_1 = __importDefault(require("http-status"));
const routes_1 = __importDefault(require("./app/routes"));
// import router from './app/routes';
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//aplication route
app.use("/api/v1/", routes_1.default);
// tesing
app.get("/", (req, res) => {
    res.send("Home route is Showing");
});
//global error handler
// app.use(globalErrorHandler);
// Not found route
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
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
exports.default = app;
