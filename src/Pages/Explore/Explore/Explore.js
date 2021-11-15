import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import ExplorePerfumes from "../ExplorePerfumes/ExplorePerfumes";

const Explore = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ExplorePerfumes></ExplorePerfumes>
      <Footer></Footer>
    </div>
  );
};

export default Explore;
