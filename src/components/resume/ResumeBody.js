import React from "react";
import { connect } from "react-redux";

import back from "../../media/back.jpg";
import chathura from "../../media/chathura.jpg";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Awards from "./Awards";
import Certifications from "./Certifications";
import Affiliations from "./Affiliations";
import Activities from "./Activities";
import Skils from "./Skills";

import { selectCategory } from "../../actions";

const bodyResolver = (selectedCategory) => {
  if (selectedCategory === "EDUCATION") {
    return <Education />;
  }
  if (selectedCategory === "EXPERIENCE") {
    return <Experience />;
  }
  if (selectedCategory === "PROJECTS") {
    return <Projects />;
  }
  if (selectedCategory === "SKILLS") {
    return <Skils />;
  }
  if (selectedCategory === "AWARDS") {
    return <Awards />;
  }
  if (selectedCategory === "CERTIFICATIONS") {
    return <Certifications />;
  }
  if (selectedCategory === "AFFILIATIONS") {
    return <Affiliations />;
  }
  if (selectedCategory === "ACTIVITIES") {
    return <Activities />;
  }

  return <Education />;
};

const ResumeBody = (props) => {
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
            <a class="step" onClick={() => props.selectCategory("EDUCATION")}>
              <i class="graduation cap icon"></i>
              <div class="content">
                <div class="title">EDUCATION</div>
              </div>
            </a>
            <a class="step" onClick={() => props.selectCategory("EXPERIENCE")}>
              <i class="briefcase icon"></i>
              <div class="content">
                <div class="title">EXPERIENCE</div>
              </div>
            </a>

            <a class="step" onClick={() => props.selectCategory("PROJECTS")}>
              <i class="book icon"></i>
              <div class="content">
                <div class="title">PROJECTS</div>
              </div>
            </a>

            <a class="step" onClick={() => props.selectCategory("SKILLS")}>
              <i class="clipboard list icon"></i>
              <div class="content">
                <div class="title">SKILLS & INTERESTS</div>
              </div>
            </a>

            <a class="step" onClick={() => props.selectCategory("AWARDS")}>
              <i class="trophy icon"></i>
              <div class="content">
                <div class="title">ACHIEVEMENTS & AWARDS</div>
              </div>
            </a>

            <a
              class="step"
              onClick={() => props.selectCategory("CERTIFICATIONS")}
            >
              <i class="certificate icon"></i>
              <div class="content">
                <div class="title">CERTIFICATIONS</div>
              </div>
            </a>

            <a
              class="step"
              onClick={() => props.selectCategory("AFFILIATIONS")}
            >
              <i class="building icon"></i>
              <div class="content">
                <div class="title">PROFESSIONAL AFFILIATIONS</div>
              </div>
            </a>

            <a class="step" onClick={() => props.selectCategory("ACTIVITIES")}>
              <i class="bullhorn icon"></i>
              <div class="content">
                <div class="title">ACTIVITIES</div>
              </div>
            </a>
          </div>
        </div>
        <div class="twelve wide column">
          <div class="ui fluid raised segment">
            {bodyResolver(props.selectedCategory)}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { selectedCategory: state.selectedCategory };
};

export default connect(
  mapStateToProps,
  { selectCategory }
)(ResumeBody);
