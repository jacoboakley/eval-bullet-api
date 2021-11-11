import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

// Create
export const addUser = async (req, res) => {
    const { password:plainTextPassword } = req.body;
    const password = await bcrypt.hash(plainTextPassword, 10);
    const user = new User({
        ...req.body,
        password
    })
    try {
        const savedUser = await user.save();
        res.send(`${savedUser.userName} added`)
    } catch (error) {
        console.log(error)
        res.status(400);
        return res.json({ status: 'error'})
    }
};
// Read
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.json({message: error})
    }
};

export const getUserById = async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.userId);
        res.json(foundUser);
    } catch (error) {
        res.json({message: error})
    }
};
// Update
export const updateUserById = async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.userId },
            { $set: req.body}
        );
        res.json(updatedUser);
    } catch (error) {
        res.json({message: error})
    }
};
// Delete
export const deleteUserById = async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({ _id: req.params.userId });
        res.json(deletedUser);
    } catch (error) {
        res.json({message: error})
    }
};