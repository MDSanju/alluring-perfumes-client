import React from "react";
import { useHistory } from "react-router";
// explore all orders page
const ExplorePerfume = ({ perfume }) => {
  const { _id, name, img, price, description } = perfume;
  const history = useHistory();

  const handlePurchase = () => {
    history.push(`/purchase/${_id}`);
  };
  return (
    <div>
      <div className="col">
        <div className="card card-custom">
          <img
            style={{ height: "340px" }}
            src={img}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p className="fs-4 text-primary">Price: ${price}</p>
            <p className="card-text">{description}</p>
          </div>
          <div className="mt-4 mb-4 d-flex justify-content-center">
            <button onClick={handlePurchase} className="btn btn-dark mx-auto">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePerfume;
