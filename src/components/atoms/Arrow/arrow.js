import React from "react";
import "./arrow.css";

export default function arrow({ direction }) {
  return (
    <>
      <div className="a-arrow__container">
        <div className={`a-arrow a-arrow__${direction}`}></div>
      </div>
    </>
  );
}
