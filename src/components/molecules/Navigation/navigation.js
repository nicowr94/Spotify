import React from "react";
import Button from "../../atoms/Button/button";
import Arrow from "../../atoms/Arrow/arrow";
import User from "../../atoms/User/User";
import "./navigation.css";

export default function navigation({color}) {
  return (
    <>
      <nav
        className="m-navigation"
        style={{
          background: color,
        }}
      >
        <div className="m-navigation__arrows">
          <Arrow direction="left" />
          <Arrow direction="right" />
        </div>
        <div className="m-navigation__user">
          <Button text="MEJORAR TU CUENTA" />
          <User />
        </div>
      </nav>
    </>
  );
}
