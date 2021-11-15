import React, { useEffect, useState } from "react";
import ExplorePerfume from "../ExplorePerfume/ExplorePerfume";

const ExplorePerfumes = () => {
  const [perfumes, setPerfumes] = useState([]);

  // preloading spinner
  const [isLoading, setIsloading] = useState(true);

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
    <div style={{ marginTop: "45px" }}>
      <h2 className="container fw-bold mb-5 text-center">
        Explore Our All ({perfumes.length}) Perfumes Here!
      </h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
          {perfumes.map((perfume) => (
            <ExplorePerfume
              key={perfume._id}
              perfume={perfume}
            ></ExplorePerfume>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePerfumes;
