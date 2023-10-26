import cors from "cors";
import express, { Express } from "express";
import morgan from "morgan";
import Routes from "./Routes/Routes.routes";
const app: Express = express();

//settings
app.set("port", 3000);

const allowedOrigins = [
  "http://localhost:8080",
  "http://localhost:8081",
  "https://master--idyllic-speculoos-4c3f40.netlify.app/",
];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use(express.json());
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
//middlewares
app.use(morgan("dev"));
// routes
app.use(Routes);
export default app;
