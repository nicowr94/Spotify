import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useFetch = (url) => {
  const { user } = useContext(AuthContext);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setState({
          loading: false,
          error: null,
          data,
        });
      });
  }, [url]);
  return state;
};
