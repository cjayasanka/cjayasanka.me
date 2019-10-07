import React from "react";
import { connect } from "react-redux";

import Name from "./Name";
import Cover from "./Cover";

import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Awards from "./Awards";
import Certifications from "./Certifications";
import Affiliations from "./Affiliations";
import Activities from "./Activities";
import Skils from "./Skills";

import { selectCategory } from "../../actions";
import Avatar from "./Avatar";
import Statement from "./Statement";

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

const classResolver = (selectedCategory, currentStep) => {
  if (selectedCategory === currentStep) {
    return "active step";
  }

  return "step";
};

const ResumeBody = (props) => {
  return (
    <div className="container">
      <Cover />
      <Avatar />
      <Name />
      <Statement />

      {/* steps */}
      <div class="ui grid">
        <div class="four wide column">
          <div class="ui fluid vertical steps">
            <a
              class={classResolver(props.selectedCategory, "EDUCATION")}
              onClick={() => props.selectCategory("EDUCATION")}
            >
              <i class="graduation cap icon"></i>
              <div class="content">
                <div class="title">EDUCATION</div>
              </div>
            </a>
            <a
              class={classResolver(props.selectedCategory, "EXPERIENCE")}
              onClick={() => props.selectCategory("EXPERIENCE")}
            >
              <i class="briefcase icon"></i>
              <div class="content">
                <div class="title">EXPERIENCE</div>
              </div>
            </a>

            <a
              class={classResolver(props.selectedCategory, "PROJECTS")}
              onClick={() => props.selectCategory("PROJECTS")}
            >
              <i class="book icon"></i>
              <div class="content">
                <div class="title">PROJECTS</div>
              </div>
            </a>

            <a
              class={classResolver(props.selectedCategory, "SKILLS")}
              onClick={() => props.selectCategory("SKILLS")}
            >
              <i class="clipboard list icon"></i>
              <div class="content">
                <div class="title">SKILLS & INTERESTS</div>
              </div>
            </a>

            <a
              class={classResolver(props.selectedCategory, "AWARDS")}
              onClick={() => props.selectCategory("AWARDS")}
            >
              <i class="trophy icon"></i>
              <div class="content">
                <div class="title">ACHIEVEMENTS & AWARDS</div>
              </div>
            </a>

            <a
              class={classResolver(props.selectedCategory, "CERTIFICATIONS")}
              onClick={() => props.selectCategory("CERTIFICATIONS")}
            >
              <i class="certificate icon"></i>
              <div class="content">
                <div class="title">CERTIFICATIONS</div>
              </div>
            </a>

            <a
              class={classResolver(props.selectedCategory, "AFFILIATIONS")}
              onClick={() => props.selectCategory("AFFILIATIONS")}
            >
              <i class="building icon"></i>
              <div class="content">
                <div class="title">PROFESSIONAL AFFILIATIONS</div>
              </div>
            </a>

            <a
              class={classResolver(props.selectedCategory, "ACTIVITIES")}
              onClick={() => props.selectCategory("ACTIVITIES")}
            >
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
