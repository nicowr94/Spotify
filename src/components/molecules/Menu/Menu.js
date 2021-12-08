import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../logo_spotify.svg";

export default function Menu({ page }) {
  return (
    <div className="m-menu">
      <div className="m-menu__logo">
        <a aria-current="page" draggable="false">
          <Logo className="m-menu__logo__text" />
        </a>
      </div>

      <ul className="m-menu__options">
        <li className="m-menu__item">
          <NavLink
            aria-current="page"
            draggable="false"
            to="/"
            className={`m-menu__item__a ${
              page === "home" ? "m-menu__item__a--active" : ""
            }`}
          >
            <svg
              role="img"
              height="24"
              width="24"
              className={`m-menu__item__icon ${
                page === "home" ? "m-menu__item__icon--active" : ""
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M21 22V7.174l-9.001-5.195L3 7.214V22h7v-7h4v7z"></path>
            </svg>

            <span
              className={`m-menu__item__name ${
                page === "home" ? "m-menu__item__name--active" : ""
              }`}
            >
              Inicio
            </span>
          </NavLink>
        </li>
        <li className="m-menu__item">
          <NavLink
            draggable="false"
            to="/buscar"
            className={`m-menu__item__a ${
              page === "buscar" ? "m-menu__item__a--active" : ""
            }`}
          >
            <svg
              role="img"
              height="24"
              width="24"
              className="m-menu__item__icon"
              viewBox="0 0 24 24"
            >
              <path d="M16.736 16.262A8.457 8.457 0 0019 10.5a8.5 8.5 0 10-3.779 7.067l4.424 5.18 1.521-1.299-4.43-5.186zM10.5 17C6.916 17 4 14.084 4 10.5S6.916 4 10.5 4 17 6.916 17 10.5 14.084 17 10.5 17z"></path>
            </svg>
            <span className="m-menu__item__name">Buscar</span>
          </NavLink>
        </li>
        <li className="m-menu__item">
          <NavLink
            draggable="false "
            to="/favoritos"
            className={`m-menu__item__a ${
              page === "favoritos" ? "m-menu__item__a--active" : ""
            }`}
          >
            <svg
              role="img"
              height="24"
              width="24"
              className="m-menu__item__icon"
              viewBox="0 0 24 24"
            >
              <path d="M14.617 3.893l-1.827.814 7.797 17.513 1.827-.813-7.797-17.514zM3 22h2V4H3v18zm5 0h2V4H8v18z"></path>
            </svg>
            <span className="m-menu__item__name">Favoritos</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
