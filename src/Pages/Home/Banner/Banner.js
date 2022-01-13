import React from "react";
import { useHistory } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const history = useHistory();

  const goToExplore = () => {
    history.push("/explore");
  };

  return (
    <div className="banner-container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "rgba(18, 18, 18, .8)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>The Power Of Fragrant Attraction!</h1>
          <h5>Makes you more confident.</h5>
          <button onClick={goToExplore} className="btn btn-outline-light mt-3">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
