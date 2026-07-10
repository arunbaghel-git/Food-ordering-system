import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);
  const url = "http://localhost:3030";
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
  useEffect(() => {
    fetchList();
    console.log(list);
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
                <p>X</p>
              </div>
            );
          })}
        
      </div>
    </>
  );
};

export default List;
