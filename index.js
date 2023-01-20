import express from "express";
import fileUpload from "express-fileupload";
import db from "./config/Database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./routes/index.js";
import dotenv from "dotenv";
// import Products from "./models/ProductModel.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected..");
  // await Products.sync();
} catch (error) {
  console.log(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload());
app.use(router);

app.listen(8000, () => console.log("server running at port 8000"));
