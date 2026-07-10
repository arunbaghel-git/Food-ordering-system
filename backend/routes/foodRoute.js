import express from "express";
import { addFoodItem,getAllFoodItems,removeFoodItem } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Configure multer storage for uploaded food images, Defines where files will be stored and how filenames are generated.
const storate = multer.diskStorage({
  destination: "uploads",
   // Generate unique filename using timestamp, to avoid duplicate image names.
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});
// Initialize multer middleware with custom storage configuration.
const upload = multer({
  storage: storate,
});
// Upload image + create new food item, upload.single("image") handles single image file from request.
foodRouter.post("/add", upload.single("image"), addFoodItem);
foodRouter.get('/list',getAllFoodItems)
foodRouter.delete('/remove',removeFoodItem)
export default foodRouter;