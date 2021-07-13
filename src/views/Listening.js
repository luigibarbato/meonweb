import React, { Component } from "react";
import Tracks from "../components/tracks"
class Listening extends Component {
  state = {
    tracks: [],
  };
  componentDidMount() {
    fetch("https://z5nu7io9fc.execute-api.us-east-1.amazonaws.com/dev/FavoriteTracks")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ tracks: data });
      })
      .catch(console.log);
  }

  render() {
    return <Tracks tracks={this.state.tracks} />;
  }
}

export default Listening;
