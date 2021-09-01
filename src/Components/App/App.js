import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this)
    this.state = {
      searchResults: [
        { id: 1, name: "Ayoo", artist: "Shatta Wale", album: "Reign" },
        {
          id: 2,
          name: "Rollies and Cigars",
          artist: "Sarkodie",
          album: "No Pressure",
        },
        {
          id: 3,
          name: "Nominate",
          artist: "Stonebwoy",
          album: "Anloga junction",
        },
        { id: 4, name: "My baby", artist: "Samini", album: "Dagati King" },
      ],
      playlistName: "Favorite songs",
      playlistTracks: [
        { name: "Odo", artist: "Wendy Shay", album: "Shay gang", id: 1 },
        { name: "Hwe", artist: "Wendy Shay", album: "Shay gang", id: 2 },
        {
          name: "Thy grace",
          artist: "Kofi Kinaata",
          album: "Team move",
          id: 3,
        }
      ],
    };
  }

  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    this.setState({ playlistTracks: this.state.playlistTracks.concat(track)})
    
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          {/* Add a SearchBar component  */}
          <SearchBar />
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults searchResults={this.state.searchResults} />
            {/* <!-- Add a Playlist component --> */}
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
