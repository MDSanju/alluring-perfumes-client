import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import Perfumes from "../Perfumes/Perfumes";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <title>Home || Alluring Perfumes</title>
      <Navbar></Navbar>
      <Banner></Banner>
      <Perfumes></Perfumes>
      {/* <Discount></Discount> */}
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
