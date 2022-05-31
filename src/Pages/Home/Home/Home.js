import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Perfumes from "../Perfumes/Perfumes";
import Reviews from "../Reviews/Reviews";
import TabsSection from "../Tabs/TabsSection/TabsSection";

const Home = () => {
  return (
    <div>
      <title>Home || Alluring Perfumes</title>
      <Navbar></Navbar>
      <Banner></Banner>
      <Perfumes></Perfumes>
      <TabsSection></TabsSection>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
