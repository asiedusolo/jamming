import React from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { SearchResults: [
      { id: 1,
        name: 'Ayoo',
        artist: 'Shatta Wale',
        album: 'Reign'
      },
      { id: 2,
        name: 'Rollies and Cigars',
        artist: 'Sarkodie',
        album: 'No Pressure'
      },
      { id: 3,
        name: 'Nominate',
        artist: 'Stonebwoy',
        album: 'Anloga junction'
      },
      { id: 4,
        name: 'My baby',
        artist: 'Samini',
        album: 'Dagati King'
      },
    ]}
  }

  render(){
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* Add a SearchBar component  */}
          <SearchBar />
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            <SearchResults searchResults={this.state.searchResults}/>
            {/* <!-- Add a Playlist component --> */}
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
