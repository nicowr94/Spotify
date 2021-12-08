import React from "react";
import ImagePlayList from "../../atoms/ImagePlayList/ImagePlayList";
import "./FrontPlayList.css";

export default function FrontPlayList({
  img,
  alt,
  color,
  username,
  countSong,
}) {
  return (
    <div
      className="m-FrontPlayList"
      style={{
        background: color,
      }}
    >
      <div className="m-FrontPlayList__image">
        <ImagePlayList img={img} alt={alt} />
      </div>

      <div className="m-FrontPlayList__info">
        <h2 className="m-FrontPlayList__info__name"> PLAYLIST</h2>
        <h1 className="m-FrontPlayList__info__title">
          Canciones que te gustan
        </h1>
        <div className="m-FrontPlayList__info__others">
          <a className="m-FrontPlayList__info__others__user">{username}</a>
          <span className="m-FrontPlayList__info__others__count">
            {countSong} canciones
          </span>
        </div>
      </div>
    </div>
  );
}
