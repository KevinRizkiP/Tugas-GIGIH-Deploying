import React from "react";
import Buttons from "../header/Buttons";
import Cover from "../header/Cover";
import Header from "../header/Header";
import data from "../../utils/SingleSample";
import SongsData from "../../utils/SongsData";

function Center() {
  return (
    <div className="flex-grow overflow-y-scroll scrollbar-hide h-screen">
      <Header />
      <Cover
        ImagePlaylist={data.album.images[1].url}
        p1={data.album.album_type}
        AlbumName={data.album.name}
        ImageArtist={data.album.images[2].url}
        p2={data.album.artists[0].name}
        date={data.album.release_date}
        tracks={data.album.total_tracks}
      />
      <Buttons />
      <SongsData />
    </div>
  );
}

export default Center;
