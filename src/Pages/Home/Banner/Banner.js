import React from "react";
import { useHistory } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const history = useHistory();

  const goToExplore = () => {
    history.push("/explore");
  };
  const goToDashboard = () => {
    history.push("/newDashboard");
  };

  return (
    <div className="banner-container">
      <div className="hero_content_right">
        <div style={{ textAlign: "center" }}>
          <h1>The Fragrant Attraction!</h1>
          <h5>Makes you more confident.</h5>
          <br />
          <br />
          <div className="hero_buttons">
            <button onClick={goToExplore} className="explore_btn">
              Explore
            </button>
            <button onClick={goToDashboard} className="dashboard_btn">
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
