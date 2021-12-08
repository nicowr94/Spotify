import React from "react";
import "./Login_nav.css";
import { ReactComponent as Logo } from "../../../logo_spotify.svg";

export default function Login_nav() {
  return (
    <>
      <nav className="m-navigation__login">
        <Logo className="m-navigation__login__logo" />
        <ul className="m-navigation__login__options">
          <li className="m-navigation__login__item">
            <a>Premium</a>
          </li>
          <li className="m-navigation__login__item">
            <a>Ayuda</a>
          </li>
          <li className="m-navigation__login__item">
            <a>Descargar</a>
          </li>
          <li role="separator" className="m-navigation__login__separator"></li>
   

          <li className="m-navigation__login__item">
            <a>Registrarse</a>
          </li>
          <li className="m-navigation__login__item">
            <a>Iniciar sesión</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
