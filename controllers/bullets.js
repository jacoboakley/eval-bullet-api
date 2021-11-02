import express from "express";
import Bullet from "../models/Bullet.js";
// Create
export const addBullet = async (req, res) => {
    const bullet = new Bullet(req.body);
    
    try {
        const savedBullet = await bullet.save();
        res.json(savedBullet) 
    } catch (error) {
        if(error.name === "ValidationError") res.status(422).json({message: error.errors})
        else res.json({message: error.errors})
    }
    
};
// Read
export const getAllBullets = async (req, res) => {
    try {
        const bullets = await Bullet.find();
        res.json(bullets);
    } catch (error) {
        res.json({message: error})
    }
};

export const getBulletById = async (req, res) => {
    try {
        const foundBullet = await Bullet.findById(req.params.bulletId);
        res.json(foundBullet);
    } catch (error) {
        res.json({message: error})
    }
};
// Update
export const updateBulletById = async (req, res) => {
    try {
        const updatedBullet = await Bullet.updateOne(
            { _id: req.params.bulletId },
            { $set: req.body}
        );
        res.json(updatedBullet);
    } catch (error) {
        res.json({message: error})
    }
};
// Delete
export const deleteBulletById = async (req, res) => {
    try {
        const deletedBullet = await Bullet.deleteOne({ _id: req.params.bulletId });
        res.json(deletedBullet);
    } catch (error) {
        res.json({message: error})
    }
};