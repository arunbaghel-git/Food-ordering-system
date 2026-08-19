import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  const [list, setList] = useState([]);
  
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching food list");
      }
    } catch (error) {
      toast.error("Server network error");
    }
  };
  const removeFood = async (foodId) => {
    try {
      const response =await axios.delete(`${url}/api/food/remove`, {
        data: { id: foodId },
      });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
         toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Server network error");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <div className="list-items">
        <div className="list-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Category</p>
          <p>Action</p>
        </div>
        <br />
        <hr />

        {list.map((elem, index) => {
          return (
            <div key={index} className="list-item">
              <img src={`${url}/images/${elem.image}`} alt="" />
              <p>{elem.name}</p>
              <p>{elem.price}</p>
              <p>{elem.category}</p>
              <p onClick={() => removeFood(elem._id)} className="cross">
                X
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default List;
