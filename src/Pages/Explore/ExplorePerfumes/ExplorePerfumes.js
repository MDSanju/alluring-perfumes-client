import React, { useEffect, useState } from "react";
import ExplorePerfume from "../ExplorePerfume/ExplorePerfume";
import ScaleLoader from "react-spinners/ScaleLoader";
import { CARDS } from "../../styles/Cards.styles";
import styles from "./ExplorePerfumes.module.css";

const ExplorePerfumes = () => {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-brook-12035.herokuapp.com/perfumes")
      .then((res) => res.json())
      .then((data) => setPerfumes(data));
  }, []);

  return (
    <div style={{ marginTop: "85px", color: "#333f47", marginBottom: "120px" }}>
      <h2 className={`container mb-5 text-center ${styles.explore_title}`}>
        Explore Our All ({perfumes.length}){" "}
        {perfumes.length >= 2 ? "Perfumes" : "Perfume"} Here!
      </h2>
      {perfumes.length ? (
        <div className="perfumes_display">
          <div className="all_perfumes">
            <CARDS>
              <ul>
                {perfumes.map((perfume) => (
                  <ExplorePerfume
                    key={perfume._id}
                    perfume={perfume}
                  ></ExplorePerfume>
                ))}
              </ul>
            </CARDS>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "38px",
          }}
        >
          <ScaleLoader color={"#003665"} size={85} />
        </div>
      )}
    </div>
  );
};

export default ExplorePerfumes;
