import React from "react";

const Sidebar = (props) => {
  return (
    <div
      id="sidebar"
      style={{ ...props.style, backgroundColor: props.colorbg }}
    >
      <ul>
        {props.bullets.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
