import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
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
        { name: "Odo", artist: "Wendy Shay", album: "Shay gang", id: 5 },
        { name: "Hwe", artist: "Wendy Shay", album: "Shay gang", id: 6 },
        {
          name: "Thy grace",
          artist: "Kofi Kinaata",
          album: "Team move",
          id: 7,
        }
      ],
    };
  }

  addTrack(track){
    let  tracks = this.state.playlistTracks
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track)
    this.setState({ playlistTracks: tracks})
    
  }

  removeTrack(track){
    let result = this.state.playlistTracks.filter(playlist => playlist.id !== track.id)
    this.setState({ playlistTracks: result})
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
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            {/* <!-- Add a Playlist component --> */}
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
