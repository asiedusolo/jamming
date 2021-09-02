import React from "react";
import "./TrackList.css";
import Track from '../Track/Track'

class TrackList extends React.Component {
  render(){  
    
    const tracks = this.props.tracks && this.props.tracks.length ? this.props.tracks : [{ id: 1,
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
      }]
    console.log('Tracks', tracks)
    return (
        <div className="TrackList">
          
          {
              tracks.map((track) => {
                  return <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/>
              }) 
          }
        </div>
      );
  }
}


export default TrackList
