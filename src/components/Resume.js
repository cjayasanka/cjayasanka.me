import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";
import ResumeBody from "./resume/ResumeBody";

const Resume = () => {
  return (
    <div className="ui basic inverted center aligned segment">
      {/* <Nav /> */}
      <ResumeBody />
    </div>
  );
};

export default Resume;
