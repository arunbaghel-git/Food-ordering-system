import foodModel from "../models/foodModel.js";
import fs from "fs";
// add food item
const addFoodItem = async (req, res, next) => {
  try {
    // Store uploaded image filename from multer
    let imgae_filename = `${req.file.filename}`;
    // Extract food details from request body
    const { name, description, price, category } = req.body;
    // Validate required fields before saving data
    if (!name || !description || !price || !req.file || !category) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      throw error;
    }
    const foodData = {
      name,
      description,
      price: Number(price),
      image: imgae_filename,
      category,
      date: new Date(),
    };
    const food = new foodModel(foodData);
    await food.save();
    res.status(201).json({
      success: true,
      message: "Food item created successfully",
      food,
    });
  } catch (error) {
    next(error);
  }
};

const removeFoodItem = async (req, res, next) => {
  try {
    const id = req.body.id;
    // Find food item before deleting, because we need image filename for removing image file
    const food = await foodModel.findById(id);
    if (!food) {
      const error = new Error("Food item not found");
      error.statusCode = 404;
      throw error;
    }
    // Delete associated image from uploads folder
    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Food item removed successfully",
    });
  } catch (error) {
    next(error);
  }
};
const getAllFoodItems = async (req, res, next) => {
  try {
    const food_list = await foodModel.find({});
    if(food_list.length === 0){
        const error = new Error("Food items list not found")
        error.statusCode = 404;
        throw error;
    }
    res.json({
      success: true,
      data:food_list,
    });
  } catch (error) {
    next(error);
  }
};

export { getAllFoodItems, addFoodItem, removeFoodItem };
