import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Tabs from "../Tabs/Tabs";
import "./TabsSection.css";

const TabsSection = () => {
  const [tab1, setTab1] = useState([]);

  useEffect(() => {
    fetch("https://alluring-perfumes-server.onrender.com/tab1")
      .then((res) => res.json())
      .then((data) => setTab1(data));
  }, []);

  return (
    <div className="tabs-section-screen">
      {tab1.map((tabNo1) => (
        <Tabs key={tabNo1._id} tabNo1={tabNo1}></Tabs>
      ))}
    </div>
  );
};

export default TabsSection;
