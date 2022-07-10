import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Count from "../Count/Count";
import Perfumes from "../Perfumes/Perfumes";
import Reviews from "../Reviews/Reviews";
import TabsSection from "../Tabs/TabsSection/TabsSection";

const Home = () => {
  return (
    <div>
      <title>Home | Alluring Perfumes</title>
      <Navbar></Navbar>
      <Banner></Banner>
      <Perfumes></Perfumes>
      <TabsSection></TabsSection>
      <Count></Count>
      <Reviews></Reviews>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
