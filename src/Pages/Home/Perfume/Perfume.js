import React from "react";
import { useHistory } from "react-router";
import "./Perfume.css";

const Perfume = ({ perfume }) => {
  const { _id, name, img, price, description } = perfume;
  const history = useHistory();


  const showName = name.split(" ")[0];

  const showDescription = description.slice(0, 36);
  console.log(showDescription);

  const handlePurchase = () => {
    history.push(`/purchase/${_id}`);
  };
  return (
    <div>
      {/* <div className="col">
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
            <p className="card-text">{showDescription}...</p>
          </div>
          <div className="mt-4 mb-4 d-flex justify-content-center">
            <button onClick={handlePurchase} className="btn btn-dark mx-auto">
              Purchase
            </button>
          </div>
        </div>
      </div> */}

      {/* <div className="perfumes_display">
        <div className="all_perfumes">
          <div class="product-field"> */}
      {/* <ul class="items"> */}
      <li data-category="" data-price="">
        <picture>
          <img src={img} alt="" />
        </picture>
        <div class="detail">
          <p class="icon">
            <span>
              <i class="far fa-heart"></i>
            </span>
            <span>
              <i class="far fa-share-square"></i>
            </span>
            <span>
              <i class="fas fa-shopping-basket"></i>
            </span>
          </p>
          <strong>{showName}...</strong>
          <span>{showDescription}...</span>
          <small>Buy now</small>
        </div>
        <h4>${price}</h4>
      </li>
      {/* </ul> */}
    </div>
    // </div>
    // </div>
    // </div>
  );
};

export default Perfume;
