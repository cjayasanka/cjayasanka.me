import React from "react";

const Affiliations = () => {
  return (
    <div class="ui link cards">
      <div class="ui card">
        <a class="image" href="#">
          <img src="/images/avatar/large/steve.jpg" />
        </a>
        <div class="content">
          <a class="header" href="#">
            IESL
          </a>
          <div class="meta">
            <a>Undergraduate Member</a>
          </div>
        </div>
      </div>
      <div class="ui card">
        <a class="image" href="#">
          <img src="/images/avatar/large/steve.jpg" />
        </a>
        <div class="content">
          <a class="header" href="#">
            ACM Student Chapter
          </a>
          <div class="meta">
            <a>Student Member</a>
          </div>
        </div>
      </div>
      <div class="ui card">
        <a class="image" href="#">
          <img src="/images/avatar/large/steve.jpg" />
        </a>
        <div class="content">
          <a class="header" href="#">
            Rotaract Club of University of Moratuwa
          </a>
          <div class="meta">
            <a>Member</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliations;
