import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";
// import {
//     addBullet,
//     deleteBulletById,
//     getAllBullets,
//     getBulletById,
//     updateBulletById
// } from "../controllers/authentication.js";
const router = express.Router();

// Create
router.post("/register", async (req, res) => {
    const { password:plainTextPasowrd } = req.body;
    const password = await bcrypt.hash(plainTextPasowrd, 10);
    const user = new User({
        ...req.body,
        password
    })
    try {
        const savedUser = await user.save();
        res.send(savedUser)
    } catch (error) {
        console.log(error)
        return res.json({ status: 'error'})
    }
});
// Read
// router.get("/", getAllBullets);
// router.get("/:bulletId", getBulletById);
// // Update
// router.patch("/:bulletId", updateBulletById);
// // Delete
// router.delete("/:bulletId", deleteBulletById);

export default router;