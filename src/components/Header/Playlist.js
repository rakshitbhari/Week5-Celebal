import React from "react";

export default function Playlist() {
  return (
    <nav className="flex">
      <ul>
        <li className="mb-2">
          <a
            href="#"
            className="text-link hover:text-white text-sm font-semibold"
          >
            3. Playlist
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="text-link hover:text-white text-sm font-semibold"
          >
            Rakshit Bhari
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="text-link hover:text-white text-sm font-semibold"
          >
            Over 200km/h in the Car
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="text-link hover:text-white text-sm font-semibold"
          >
            Haluk Levent List
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="text-link hover:text-white text-sm font-semibold"
          >
            Instrumental Music
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="text-link hover:text-white text-sm font-semibold"
          >
            American Hip Hop
          </a>
        </li>
        {/* Duplicates removed */}
      </ul>
    </nav>
  );
}
