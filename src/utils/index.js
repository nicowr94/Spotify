import apiCall from "../api/spotify";

const commonParams = {
  redirect_uri: process.env.REACT_APP_SPOTIFY_CALLBACK_HOST,
  client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  client_secret: process.env.REACT_APP_SPOTIFY_CLIENT_SECRET,
  scope:
    "user-library-read playlist-read-private playlist-modify-private user-read-private user-read-email user-read-recently-played",
};

export const spotifyAuthorizeURL = () => {
  let spotifyUrl = "https://accounts.spotify.com/authorize?";
  spotifyUrl += `client_id=${encodeURIComponent(commonParams.client_id)}&`;
  spotifyUrl += `response_type=code&`;
  spotifyUrl += `redirect_uri=${encodeURIComponent(
    commonParams.redirect_uri
  )}&`;
  spotifyUrl += `scope=${encodeURIComponent(commonParams.scope)}`;
  return spotifyUrl;
};

export const spotifyAuthCall = async (requiredParams) => {
  try {
    const params = {
      ...requiredParams,
      ...commonParams,
    };

    const searchParams = Object.keys(params)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
      )
      .join("&");

    console.log(searchParams);
    const spotifyCall = await apiCall({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      body: searchParams,
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
    });

    return await spotifyCall.json();
  } catch (error) {
    console.log(error);
  }
};

export const spotifySearchCall = async (paramsArray, token) => {
  try {
    const url = new URL("https://api.spotify.com/v1/search");

    for (const item of paramsArray) {
      const key = Object.keys(item)[0];
      url.searchParams.append(key, item[key]);
    }

    const spotifyCall = await apiCall({
      method: "GET",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await spotifyCall.json();
  } catch (error) {
    console.log(error);
  }
};

export const getDataUser = async (token) => {
  console.log(token);
  const url = new URL("https://api.spotify.com/v1/me");

  const response = await apiCall({
    method: "GET",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": " application/json",
      Authorization: `Bearer ${token}`,
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  });

  const response_data = await response.json();

  return response_data;
};

export const getSongLike = async (token) => {
  console.log(token);
  const url = new URL("https://api.spotify.com/v1/me/tracks");

  const response = await apiCall({
    method: "GET",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": " application/json",
      Authorization: `Bearer ${token}`,
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  });

  const response_data = await response.json();

  return response_data;
};

export const getRecentlyPlayedTracks = async (token) => {
  console.log(token);
  //const url = new URL("https://api.spotify.com/v1/me/player/recently-played");
  const url = new URL("https://api.spotify.com/v1/me/playlists");

  const response = await apiCall({
    method: "GET",
    url,
    headers: {
      Accept: "application/json",
      "Content-Type": " application/json",
      Authorization: `Bearer ${token}`,
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  });

  const response_data = await response.json();

  return response_data;
};
