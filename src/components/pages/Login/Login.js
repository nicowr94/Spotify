import React, { useContext, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { AuthContext } from "../..//../auth/AuthContext";
import {
  spotifyAuthorizeURL,
  spotifyAuthCall,
  getDataUser,
  getSongLike,
} from "../../../utils";
import Navigation from "../../molecules/Login_nav/Login_nav";
import { types } from "../../../types/types";
import "../Login/Login.css";

export const Login = () => {
  const lastPath = localStorage.getItem("lastPath") || "/";
  const { user, dispatch } = useContext(AuthContext);

  let history = useHistory();
  if (user.logged) history.push(lastPath);

  const location = useLocation();

  const authenticateUser = async (code) => {
    const response = await spotifyAuthCall({
      code,
      grant_type: "authorization_code",
    });
    if (response.access_token) {
      console.log(response.scope);
      const data_user = await getDataUser(response.access_token);
      const songs = await getSongLike(response.access_token);
      console.table(songs);

      dispatch({
        types: types.login,
        payload: {
          id: data_user.id,
          name: data_user.display_name,
          token: response.access_token,
          refresh_token: response.refresh_token,
        },
      });

      history.replace(lastPath);
    } else {
      // throw new Error("Usuario no fue logeado");
      history.replace("/Login");
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const spotifyCode = urlParams.get("code");

    if (spotifyCode) authenticateUser(spotifyCode);
  }, [location.search]);

  const handleLoginClick = async () => {
    window.location.replace(spotifyAuthorizeURL());
  };

  return (
    <div className="p-login">
      <Navigation />
      <div className="p-login_container">
        <div className="p-login__container__mesagge">
          <div className="p-login__container__mesagge__title">
            <h1>Escuchar es todo</h1>
          </div>
          <div className="p-login__container__mesagge__text">
            <p>
              Millones de canciones y podcasts. No necesitas tarjeta de crédito.
            </p>
          </div>
          <div
            className="p-login__container__mesagge__button"
            onClick={handleLoginClick}
          >
            INICIAR SESIÓN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
