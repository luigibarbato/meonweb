import React from "react";
import avatar from "../avatar.png";
import Links from "../components/links"
import MySystem from "../views/MySystem"
function Profile() {
  return (
    <div class="columns is-vcentered reverse-columns">
      <div
        class="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd aos-init aos-animate"
        data-aos="fade-down"
      >
        <h1 class="title titled is-2 mb-6">
          Hi 👋, <br></br>I'm Luigi Barbato
        </h1>
        <h2 class="subtitled subtitle has-text-grey is-4 has-text-weight-normal is-family-sans-serif">
          I'm currently working on <Links href="https://github.com/spagnuolocarmine/FLY-language" name="FLY-Language"></Links>
        </h2>

        <div class="buttons">
          <button class="button">
            {" "}
            <a href="https://github.com/luigibarbato">Github</a>
          </button>
          <button class="button">
            {" "}
            <a href="https://gitlab.com/luigibarbato">Gitlab</a>
          </button>
          <button class="button">
            {" "}
            <a href="https://keybase.io/luigibarbato_">Keybase</a>
          </button>
        </div>
      </div>
      <div
        data-aos="fade-right"
        class="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-3-desktop is-offset-1-desktop is-3-widescreen is-offset-1-widescreen is-3-fullhd is-offset-1-fullhd aos-init aos-animate"
      >
        <figure class="image">
          <img class="is-rounded" src={avatar}></img>
        </figure>
      </div>
    </div>
  );
}

export default Profile;
