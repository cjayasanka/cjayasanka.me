import React from "react";

const Education = () => {
  return (
    <div class="ui cards">
      <div class="ui fluid card">
        <div class="content">
          <div class="header">B.Sc. Engineering(Hons)</div>
          <div class="meta">University of Moratuwa</div>
          <div class="description">
            <p>Specialized in Computer Science and Engineering</p>
          </div>
        </div>
        <div class="extra content">
          <i class="calendar icon"></i>
          Nov 2015 - Present
        </div>
      </div>

      <div class="ui fluid card">
        <div class="content">
          <div class="header">G.C.E Advanced Level</div>
          <div class="meta">Royal College, Colombo</div>
          <div class="description">
            <p>
              Obtained 3 A passes for Combined Mathematics, Physics and
              Chemistry.
            </p>
          </div>
        </div>
        <div class="extra content">
          <i class="calendar icon"></i>
          2004 - 2014
        </div>
      </div>
    </div>
  );
};

export default Education;
