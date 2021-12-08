import React from "react";
import "./Button_Play.css";

export default function Button_Play() {
  return (
    <div>
      <button
        aria-label="Reproducir Canciones que te gustan"
        className="a-buttonPlay"
      >
        <svg className="a-buttonPlay__svg" role="img">
          <polygon
            points="21.57 12 5.98 3 5.98 21 21.57 12"
            fill="currentColor"
          ></polygon>
        </svg>
      </button>
    </div>
  );
}
