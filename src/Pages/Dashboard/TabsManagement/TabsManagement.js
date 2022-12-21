import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const TabsManagement = () => {
  const [tab1, setTab1] = useState([]);
  const [tab2, setTab2] = useState([]);

  useEffect(() => {
    fetch("https://alluring-perfumes-server.onrender.com/tab1")
      .then((res) => res.json())
      .then((data) => setTab1(data));
  }, []);

  useEffect(() => {
    fetch("https://alluring-perfumes-server.onrender.com/tab2")
      .then((res) => res.json())
      .then((data) => setTab2(data));
  }, []);

  return (
    <div>
      <Tab1 tab1={tab1[0]}></Tab1>
      <Tab2 tab2={tab2[0]}></Tab2>
    </div>
  );
};

export default TabsManagement;
