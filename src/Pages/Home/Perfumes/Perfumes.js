import React, { useEffect, useState } from "react";
import Perfume from "../Perfume/Perfume";
import ScaleLoader from "react-spinners/ScaleLoader";
import { CARDS } from "../../styles/Cards.styles";
import styles from "./Perfumes.module.css";

const Perfumes = () => {
  const [perfumes, setPerfumes] = useState([]);

  // array slice to get only six products
  const sixPerfumes = perfumes.slice(0, 6);

  useEffect(() => {
    fetch("https://mysterious-brook-12035.herokuapp.com/perfumes")
      .then((res) => res.json())
      .then((data) => setPerfumes(data));
  }, []);

  return (
    <div style={{ marginTop: "95px", color: "#333f47" }}>
      <h2 className={`container mt-5 mb-5 text-center ${styles.section_title}`}>
        Top Most Popular Fragrances!
      </h2>
      {perfumes.length ? (
        <div className="perfumes_display">
          <div className="all_perfumes">
            <CARDS>
              <ul>
                {sixPerfumes.map((perfume) => (
                  <Perfume key={perfume._id} perfume={perfume}></Perfume>
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

export default Perfumes;
