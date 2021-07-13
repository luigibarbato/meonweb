import React from "react";

const System = ({ systemData,lastUpdate }) => {
  return (
    <div className="div">
    <div class="columns  is-vcentered reverse-columns">
      <div
        class="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-5-desktop is-offset-1-desktop is-5-widescreen is-offset-1-widescreen is-5-fullhd is-offset-1-fullhd aos-init aos-animate"
        data-aos="fade-down"
      >
        <ul>
          <div className="container">
             {Object.entries(systemData).map(([key, value]) => {
             return  <li>
                <p class="content">
                  <strong>{key}: </strong>
                  {value}
                </p>
              </li>;
            })}
          </div>
        </ul>
      </div>
      <div
        data-aos="fade-right"
        class="column is-10-mobile is-offset-1-mobile is-10-tablet is-offset-1-tablet is-4-desktop is-offset-1-desktop is-4-widescreen is-offset-1-widescreen is-4-fullhd is-offset-1-fullhd aos-init aos-animate"
      >
        <figure class="image">
          <img class="is-rounded " src=""></img>
        </figure>
      </div>
      <p>image</p>
    </div>
          <div className="block has-text-centered">
            <p> <strong>Last Update</strong>: {lastUpdate}</p>
          </div>
</div>
  );
};

export default System;
