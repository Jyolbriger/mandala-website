import React from "react";

const Banner = (props) => {
  return (
    <div
      className="banner"
      style={{ ...props.style, backgroundColor: props.colorbg }}
    >
      {props.text}
    </div>
  );
};

export default Banner;
