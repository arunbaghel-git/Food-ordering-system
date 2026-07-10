import React, { useEffect, useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets.js";
import { toast } from "react-toastify";
import axios from "axios";
const Add = () => {
  const url = "http://localhost:3030";
  // Stores selected image file and form input values
  const [image, setImage] = useState(false);
  const [foodItem, setFoodItem] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });
  // Updates corresponding form field whenever user types or selects a value

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFoodItem((prevData) => ({ ...prevData, [name]: value }));
  };
  // Collect all form data, including image, into FormData, before sending it to the backend.
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", foodItem.name);
    formData.append("description", foodItem.description);
    formData.append("price", foodItem.price);
    formData.append("category", foodItem.category);
    formData.append("image", image);
    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setFoodItem({
          name: "",
          description: "",
          price: "",
          category: "",
        });
        setImage(false);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error("Failed to connect to backend server.");
    }
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="add-img-upload">
          <p>Upload Image</p>
          {/* Preview selected image. If no image is selected,
              display the default upload placeholder. */}
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name">
          <p>Product Name</p>
          <input
            type="text"
            placeholder="type here"
            name="name"
            value={foodItem.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="add-description">
          <p>Description</p>
          <textarea
            name="description"
            placeholder="type here"
            value={foodItem.description}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <div className="add-price">
          <p>Price</p>
          <input
            type="Number"
            name="price"
            placeholder="$20"
            value={foodItem.price}
            onChange={onChangeHandler}
          />
        </div>
        <div className="add-category">
          <p>Product Category</p>
          <select
            value={foodItem.category}
            onChange={onChangeHandler}
            name="category"
          >
            {" "}
            <option value="Salad">Salad</option>
            <option value="Roles">Roles</option>
            <option value="Deserts">Deserts</option>
            <option value="Sandwich">Sandwich</option>
            <option value="Cake">Cake</option>
            <option value="Pure Veg">Pure Veg</option>
            <option value="Pasta">Pasta</option>
            <option value="Noodles">Noodles</option>{" "}
          </select>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </>
  );
};

export default Add;
