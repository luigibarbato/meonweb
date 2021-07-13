import React from "react";
import Profile from "../components/profile"
import MySystem from "./MySystem";
import Listening from "./Listening";

function Home() {
  return (
    <div className="Home">
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
          <Profile></Profile>
          </div>
        </div>
            <p class="heading has-text-centered">Luigi Barbato - 2021</p>

      </section>

    </div>
  );
}

export default Home;
