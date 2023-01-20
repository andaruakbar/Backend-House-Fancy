import express from "express";
import {
  getUsers,
  getUserById,
  Register,
  Login,
  Logout,
  updateUserId,
  deleteUser,
} from "../controllers/Users.js";
import {
  getProducts,
  getProductsById,
  saveProducts,
  updateProducts,
  deleteProducts,
} from "../controllers/Products.js";

//verifyToken ini untuk menyeleksi endpoint yang memang membutuhkan token
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getUserById);
router.patch("/users/:id", verifyToken, updateUserId);
router.patch("/users/:id", verifyToken, deleteUser);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

router.get("/houses", getProducts);
router.get("/houses/id", getProductsById);
router.post("/houses", saveProducts);
router.get("/houses/id", updateProducts);
router.get("/houses/id", deleteProducts);

export default router;
