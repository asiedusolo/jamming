import React from "react";
import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist() {
  return (
    <div class="Playlist">
      <input value="New Playlist" />
      {/* <!-- Add a TrackList component --> */}
      <TrackList />
      <button class="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist
