import React, { useEffect, useState } from "react";
import Perfume from "../Perfume/Perfume";

const Perfumes = () => {
  const [perfumes, setPerfumes] = useState([]);

  // preloading spinner
  const [isLoading, setIsloading] = useState(true);

  // array slice to get only six products
  const sixPerfumes = perfumes.slice(0, 6);

  useEffect(() => {
    setIsloading(true);
    fetch("https://mysterious-brook-12035.herokuapp.com/perfumes")
      .then((res) => res.json())
      .then((data) => setPerfumes(data));
    setIsloading(false);
  }, []);

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "18vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div style={{ marginTop: "95px", color: "#2c2c54" }}>
      <h2 className="container mt-5 fw-bold mb-5 text-center">
        Top Most Popular Fragrances!
      </h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
          {sixPerfumes.map((perfume) => (
            <Perfume key={perfume._id} perfume={perfume}></Perfume>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfumes;
