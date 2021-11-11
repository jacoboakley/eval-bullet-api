import express from "express";
import {
    addUser,
    deleteUserById,
    getAllUsers,
    getUserById,
    updateUserById
} from "../controllers/user.js";
const router = express.Router();

// Create
router.post("/", addUser);
// Read
router.get("/", getAllUsers);
router.get("/:userId", getUserById);
// // Update
router.patch("/:userId", updateUserById);
// // Delete
router.delete("/:userId", deleteUserById);

export default router;