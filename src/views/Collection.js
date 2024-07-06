import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "components/Icons";

export default function Collection() {
  const items = [
    {
      id: 1,
      title: "Rakshit Bhari",
      artist: "Arjit Singh",
      image:
        "https://blend-playlist-covers.spotifycdn.com/v2/blend_DEFAULT-maroon-red-tr-tr.jpg",
    },

    {
      id: 2,
      title: "Play in the Background",
      artist: "Background music a play button away.",
      image: "https://i.scdn.co/image/ab67706f00000002dfe8de5f4bfe2c9a35422193",
    },

    {
      id: 3,
      title: "In the Car +200km/h",
      artist: "Shift from third to fifth gear",
      image: "https://i.scdn.co/image/ab67706c0000da84471d7ab0ca5344e0a9deec7c",
    },
  ];
  return (
    <div>
      <h3 className="text-2xl text-white font-bold tracking-tight mb-4">
        Playlists
      </h3>

      <div className="grid grid-cols-2 gap-x-4">
        <div className="h-[296px] bg-gradient-to-r from-gra3 to-gra4 rounded p-6 group relative">
          <div className="mt-20">
            <span className="text-sm font-semibold">Emir Can İğrek</span>{" "}
            <span className="opacity-70"> • Nevale </span>
            <span className="text-sm font-semibold">Hadise</span>{" "}
            <span className="opacity-70"> • Superman </span>
            <span className="text-sm font-semibold">İbrahim Tatlıses</span>{" "}
            <span className="opacity-70"> • Okay My Love </span>
            <span className="text-sm font-semibold">Emir Can İğrek</span>{" "}
            <span className="opacity-70"> • Poem of Fire </span>
            <span className="text-sm font-semibold">Emir Can İğrek</span>{" "}
            <span className="opacity-70"> • Nevale </span>
            <span className="text-sm font-semibold">Emir Can İğrek</span>{" "}
            <span className="opacity-70"> • Nevale </span>
            <span className="text-sm font-semibold">Emir Can İğrek</span>{" "}
            <span className="opacity-70"> • Nevale </span>
          </div>
          <div>
            <h3 className="text-3xl font-bold mt-6">Liked Songs</h3>
            <p>204 liked songs</p>
          </div>
          <button className="w-12 h-12 bg-primary absolute right-4 bottom-4 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
            <Icon name="play" />
          </button>
        </div>

        <div className="grid">
          <div className="flex gap-x-4">
            {items.map((item) => (
              <NavLink
                key={item.id}
                to="/"
                className={
                  "bg-footer rounded p-4 transition-all hover:bg-menubg group"
                }
              >
                <div className="relative ">
                  <img
                    className="w-auto h-auto inset-0 object-cover mb-4"
                    src={item.image}
                  />
                  <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                    <Icon name="play" />
                  </button>
                </div>
                <span className="font-semibold text-white text-[16px] whitespace-nowrap">
                  {item.title}
                </span>{" "}
                <br />
                <span className="mt-1 text-[14px] text-link">
                  {item.artist}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
