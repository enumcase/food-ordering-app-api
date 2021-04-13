const express = require("express");
const router = express.Router();
const Appetizer = require("../models/Appetizer");

// GET all posts
router.get("/", async(req, res) => {
    try {
        const appetizers = await Appetizer.find();
        res.json(appetizers);
    } catch {
        res.json({message: "Could not retrieve all appetizers. Please try again."});
    }
});

router.get("/:appetizerID", async(req, res) => {
    try {
        const appetizer = await Appetizer.findById(req.params.appetizerID);
        res.json(appetizer);
    } catch {
        res.json({message: "Couldnt find the appetizer by specified id " + req.params.appetizerID});
    }
});

// POST an appetizer
router.post("/", async(req, res) => {
    const appetizer = new Appetizer({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imageURL: req.body.imageURL,
        calories: req.body.calories,
        protein: req.body.protein,
        carbs: req.body.carbs
    });

    try {
        const savedAppetizer = await appetizer.save();
        res.json(savedAppetizer);
    } catch {
        res.json({message: "Could not save the new appetizer. Please try agian."});
    }
});

// DELETE an appetizer
router.delete("/:appetizerID", async(req, res) => {
    try {
        const deletedAppetizer = await Appetizer.remove({ _id: req.params.appetizerID });
        res.json(deletedAppetizer);
    } catch {
        res.json({message: "Could not delete the specified appetizer. Please try agian."});
    }
});

// UPDATE an appetizer
router.patch("/:appetizerID", async(req, res) => {
    try {
        const updatedAppetizer = await Appetizer.updateOne(
            { _id: req.params.appetizerID },
            { $set: 
                {
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    imageURL: req.body.imageURL,
                    calories: req.body.calories,
                    protein: req.body.protein,
                    carbs: req.body.carbs
                }
            }
        )
        
        res.json(updatedAppetizer);
    } catch {
        res.json({message: "Could not update the specified appetizer. Please try agian."});
    }
});

module.exports = router;