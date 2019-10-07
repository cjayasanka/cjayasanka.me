import React from "react";
import back from "../../media/back.jpg";
import chathura from "../../media/chathura.jpg";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Awards from "./Awards";
import Certifications from "./Certifications";
import Affiliations from "./Affiliations";
import Activities from "./Activities";

const ResumeBody = () => {
  return (
    <div className="container">
      <div>
        <img
          style={{ height: "300px", width: "100%", objectFit: "cover" }}
          src={back}
          alt="cover image"
          class="ui img"
        />
      </div>
      <div>
        <img
          style={{
            maxWidth: "180px",
            height: "50%",
            width: "100%",
            objectFit: "contain",
            margin: "-100px auto 0",
            display: "inline-block"
          }}
          src={chathura}
          alt="avatar"
          class="ui medium circular image"
        />
      </div>
      <div>
        <h4 class="title">
          Chathura Jayasanka
          <br></br>
        </h4>
        <h6 class="description">
          Computer Science & Engineering Undergraduate
        </h6>
      </div>
      <div class="row">
        <div class="ui container">
          <p>
            Interested in full-stack development. Looking to explore new areas
            and work for an organization which provides me with the opportunity
            to improve my skills and knowledge to growth along with the
            organization objective in a challenging environment.
          </p>
          <br></br>
        </div>
      </div>

      {/* steps */}
      <div class="ui grid">
        <div class="four wide column">
          <div class="ui fluid vertical steps">
            <div class="step">
              <i class="graduation cap icon"></i>
              <div class="content">
                <div class="title">EDUCATION</div>
              </div>
            </div>
            <div class="active step">
              <i class="briefcase icon"></i>
              <div class="content">
                <div class="title">EXPERIENCE</div>
              </div>
            </div>

            <div class="step">
              <i class="book icon"></i>
              <div class="content">
                <div class="title">PROJECTS</div>
              </div>
            </div>

            <div class="step">
              <i class="clipboard list icon"></i>
              <div class="content">
                <div class="title">SKILLS & INTERESTS</div>
              </div>
            </div>

            <div class="step">
              <i class="trophy icon"></i>
              <div class="content">
                <div class="title">ACHIEVEMENTS & AWARDS</div>
              </div>
            </div>

            <div class="step">
              <i class="certificate icon"></i>
              <div class="content">
                <div class="title">CERTIFICATIONS</div>
              </div>
            </div>

            <div class="step">
              <i class="building icon"></i>
              <div class="content">
                <div class="title">PROFESSIONAL AFFILIATIONS</div>
              </div>
            </div>

            <div class="step">
              <i class="bullhorn icon"></i>
              <div class="content">
                <div class="title">ACTIVITIES</div>
              </div>
            </div>
          </div>
        </div>
        <div class="twelve wide column">
          <div class="ui fluid raised segment">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBody;
