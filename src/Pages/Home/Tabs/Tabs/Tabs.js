import React, { useEffect, useState } from "react";
import { GiDelicatePerfume, GiPerfumeBottle } from "react-icons/gi";
import TabOne from "../TabsContent/TabOne";
import "./Tabs.css";

const Tabs = ({ tabNo1 }) => {
  const { tabName1 } = tabNo1;

  const [tab2, setTab2] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-brook-12035.herokuapp.com/tab2")
      .then((res) => res.json())
      .then((data) => setTab2(data));
  }, []);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      {tab2.map((tabNo2) => (
        <div
          //   className="d-flex justify-content-center"
          key={tabNo2._id}
          tabNo2={tabNo2}
          style={{ padding: "50px 24px" }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="tab-menus text-center mt-3">
              <div
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                <i className="icons perfume-icon">
                  <GiDelicatePerfume />
                </i>
                <h4>{tabName1}</h4>
              </div>
              <div
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                <i className="icons perfume-icon">
                  <GiPerfumeBottle />
                </i>
                <h4>{tabNo2.tabName2}</h4>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "75px", marginBottom: "80px" }}>
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              {/* <TabOne /> */}
              <h2>Content 1</h2>
            </div>
            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h2>Content 2</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
