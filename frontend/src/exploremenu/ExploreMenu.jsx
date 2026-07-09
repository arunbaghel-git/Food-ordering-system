import React from "react";
import "../exploremenu/ExploreMenu.css";
import { menu_list } from "../assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <>
      <div className="exploremenu">
        <h2>Explore Our Menu</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          eius eum tempora quisquam cupiditate reiciendis est at, dolores
          corporis magnam.
        </p>
        <ul className="exploremenu-list">
          {menu_list.map((e) => {
            return (
              <li
                onClick={() =>
                  setCategory((prev) =>
                    prev === e.menu_name ? "All" : e.menu_name,
                  )
                }
              >
                <img
                  className={category === e.menu_name ? "active" : ""}
                  src={e.menu_image}
                  alt=""
                />
                <p>{e.menu_name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <hr />
    </>
  );
};

export default ExploreMenu;
