import React from "react";
import "./ImagePlayList.css";

export default function ImagePlayList({ img, alt }) {
  return (
    <>
      <img
        aria-hidden="false"
        draggable="false"
        loading="eager"
        src={img}
        alt={alt}
        className="ImagePlayList"
      ></img>
    </>
  );
}
