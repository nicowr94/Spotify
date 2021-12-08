import { React, useContext, useEffect } from "react";
import Navigation from "../../molecules/Navigation/navigation";
import FrontPlayList from "../../molecules/FrontPlayList/FrontPlayList";
import Button_Play from "../../atoms/Button_Play/Button_Play";
import { getSongLike } from "../../../utils";
import { AuthContext } from "../..//../auth/AuthContext";
import Menu from "../../molecules/Menu/Menu";
import PlayList from "../../molecules/PlayList/PlayList";
import "./Favoritos.css";
import { useState } from "react/cjs/react.development";

export const Favoritos = () => {
  const { user } = useContext(AuthContext);
  const [songs, setSongs] = useState([]);
  const colorbrg = "#5038a0";

  useEffect(async () => {
    if (songs.length === 0) {
      const data = await getSongLike(user.token);
      setSongs(data.items);
    }
    console.log(songs);
  }, [songs]);

  return (
    <div className="p-content">
      <Menu page="favoritos" />
      <div className="p-content__layout">
        <Navigation color={colorbrg} />
        <FrontPlayList
          img="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
          color={colorbrg}
          alt="Canciones que te gustan"
          username={user.name}
          countSong={songs.length || 0}
        />
        <div className="p-content__layout__buttonPlay">
          <Button_Play />
        </div>
        <div className="p-content__layout__playList">
          <PlayList songs={songs} />
        </div>
      </div>
    </div>
  );
};

export default Favoritos;
