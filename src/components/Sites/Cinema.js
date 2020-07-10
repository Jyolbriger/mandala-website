import React from "react";

const Cinema = ({ url }) => {
  return (
    <iframe
      title="EtageVideos"
      style={{ width: "50%", minWidth: "25rem", height: "100%" }}
      src={url}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
};

export default Cinema;
