import React from "react";
import { IconContext } from "react-icons";
import { ImSpotify } from "react-icons/im";
const Tracks = ({ tracks }) => {
  return (
    <div>
      <center>
        <h1>Tracks List</h1>
      </center>
      {tracks.map((track) => (
        <div class="columns is-vcentered is-mobile">
          <div class="column">
            <figure class="image is-128x128">
              <img class="" src={track.thumb}></img>
            </figure>
          </div>
          <div class="column ">
            <p>{track.name}</p>
          </div>
          <div class="column">
            <IconContext.Provider value={{ color: "#A9E775", size: "3em" }}>
              <div>
              <a href={track.url}>
                <ImSpotify />
                </a>
              </div>
            </IconContext.Provider>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default Tracks;
