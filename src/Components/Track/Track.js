import React from "react";
import "./Track.css";

class Track extends React.Component {

  constructor(props){
    super(props)
    this.addTrack = this.addTrack.bind(this)
    this.renderAction = this.renderAction.bind(this)
  }
  
  renderAction(){
      const isRemoval = this.props.isRemoval
      if(isRemoval){
          return <button>-</button>
      }else{
          return <button onClick={this.addTrack}>+</button>
      }
  }

  addTrack(){
    this.props.onAdd(this.props.track)
  }
    
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {" "}
             {this.props.track.album}
          </p>
        </div>
        <button class="Track-action">
          {/* <!-- + or - will go here --> */}
        </button>
      </div>
    );
  }
}

export default Track;
