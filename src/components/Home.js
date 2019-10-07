import React from "react";

import Nav from "./Nav";
import Container from "./Container";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="ui inverted vertical center aligned segment">
      <Nav />
      <Container />
      <Footer />
    </div>
  );
};

export default Home;
