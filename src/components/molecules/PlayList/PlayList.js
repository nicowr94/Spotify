import React from "react";
import "./PlayList.css";

export default function PlayList({ songs = [] }) {
  return (
    <>
      <div className="m-PlayList__title">
        <div className="m-PlayList__title__items" role="row" aria-rowindex="1">
          <div className="m-PlayList__title__item">#</div>
          <div className="m-PlayList__title__item">título</div>
          <div className="m-PlayList__title__item">álbum</div>
          <div className="m-PlayList__title__item">fecha incorporación</div>
          <div className="m-PlayList__title__item m-PlayList__title__item__icon">
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              className="m-PlayList__title__item__svg"
            >
              <path d="M7.999 3h-1v5h3V7h-2V3zM7.5 0a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 14C3.916 14 1 11.084 1 7.5S3.916 1 7.5 1 14 3.916 14 7.5 11.084 14 7.5 14z"></path>
              <path fill="none" d="M16 0v16H0V0z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="m-PlayList__body">
        {songs.length !== 0 ? (
          songs.map((song, index) => {
            return (
              <div className="m-PlayList__body__items" key={song.track?.id}>
                <div className="m-PlayList__body__item">{index + 1}</div>
                <div className="m-PlayList__body__item">
                  <img
                    className="m-PlayList__body__item__image"
                    src={song.track?.album.images[2].url}
                    alt=""
                  />
                  <div className="m-PlayList__body__item__title">
                    <div className="m-PlayList__body__item__title__song">
                      {song.track?.name}
                    </div>
                    <span className="m-PlayList__body__item__title__artist">
                      <a>{song.track?.artists[0].name}</a>
                    </span>
                  </div>
                </div>
                <div className="m-PlayList__body__item">
                  {song.track?.album.name}
                </div>
                <div className="m-PlayList__body__item">
                  {new Date(song.added_at).toLocaleDateString()}
                </div>
                <div className="m-PlayList__body__item">
                  <div className="m-PlayList__body__item__options">
                    <button className="m-PlayList__body__item__options__like">
                      <svg
                        role="img"
                        height="16"
                        width="16"
                        className="m-PlayList__body__item_options_like_svg"
                      >
                        <path fill="none" d="M0 0h16v16H0z"></path>
                        <path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"></path>
                      </svg>
                    </button>
                    <div>
                      {(song.track?.duration_ms / 60000)
                        .toFixed(2)
                        .replace(".", ":")}
                    </div>
                    <button className="m-PlayList__body__item__options__menu">
                      <svg
                        className="m-PlayList__body__item__options__menu__svg"
                        role="img"
                        height="16"
                        width="16"
                      >
                        <path d="M2 6.5a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 002 6.5zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 0014 6.5z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>Cargando PlayList</div>
        )}
      </div>
    </>
  );
}
