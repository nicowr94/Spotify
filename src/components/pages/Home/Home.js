import { React, useState, useContext, useEffect } from "react";
import "../Home/Home.css";
import Navigation from "../../molecules/Navigation/navigation";
import CardPlayed from "../../molecules/CardPlayed/CardPlayed";
import { getRecentlyPlayedTracks } from "../../../utils";
import { AuthContext } from "../..//../auth/AuthContext";
import Menu from "../../molecules/Menu/Menu";

export const Home = () => {
  const { user } = useContext(AuthContext);
  const [RecentlyPlayed, setRecentlyPlayed] = useState([]);

  useEffect(async () => {
    if (RecentlyPlayed?.length === 0) {
      const data = await getRecentlyPlayedTracks(user.token);
      setRecentlyPlayed(data.items);
    }
    console.log(RecentlyPlayed);
  }, [RecentlyPlayed]);

  return (
    <div className="p-content">
      <Menu page="home" />
      <div className="p-content__layout">
        <Navigation />
        <div className="p-content__layout__listCardPlayed">
          {RecentlyPlayed?.length !== 0 ? (
            RecentlyPlayed?.map((played, index) => {
              return (
                <CardPlayed
                  key={index}
                  listname={played.name}
                  owner={played.owner.display_name}
                  image={played.images[0]?.url || ""}
                />
              );
            })
          ) : (
            <div> No hay</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
