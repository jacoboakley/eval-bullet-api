import express from "express";
import {
    addBullet,
    deleteBulletById,
    getAllBullets,
    getBulletById,
    updateBulletById
} from "../controllers/bullets.js";
const router = express.Router();

// Create
router.post("/", addBullet);
// Read
router.get("/", getAllBullets);
router.get("/:bulletId", getBulletById);
// Update
router.patch("/:bulletId", updateBulletById);
// Delete
router.delete("/:bulletId", deleteBulletById);

export default router;