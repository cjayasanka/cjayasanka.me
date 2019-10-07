import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";
import ResumeBody from "./resume/ResumeBody";

const Resume = () => {
  return (
    <div className="ui inverted vertical center aligned segment">
      <Nav />
      <ResumeBody />
      <Footer />
    </div>
  );
};

export default Resume;
