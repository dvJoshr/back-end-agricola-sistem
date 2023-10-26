"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const Routes_routes_1 = __importDefault(require("./Routes/Routes.routes"));
const app = (0, express_1.default)();
//settings
app.set("port", 3000);
const allowedOrigins = [
    "http://localhost:8080",
    "http://localhost:8081",
    "https://idyllic-speculoos-4c3f40.netlify.app",
    ""
];
const options = {
    origin: allowedOrigins,
};
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    // Pass to next layer of middleware
    next();
});
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   // Request methods you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   // Request headers you wish to allow
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );
//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   // Pass to next layer of middleware
//   next();
// });
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    // Pass to next layer of middleware
    next();
});
//middlewares
app.use((0, morgan_1.default)("dev"));
// routes
app.use(Routes_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map