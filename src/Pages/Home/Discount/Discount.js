import React from "react";
import { useHistory } from "react-router";

const Discount = () => {
  const history = useHistory();

  const handleCouponCode = () => {
    history.push("/couponCode");
  };
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#111",
        marginTop: "125px",
        marginBottom: "100px",
        borderRadius: "15px",
      }}
    >
      <div className="row">
        <div className="col-md-8 p-5">
          <img
            className="container-fluid"
            src="https://i.ibb.co/jGY9fg3/discount.jpg"
            alt=""
          />
        </div>
        <div className="col-md-4">
          <img
            className="container-fluid"
            src="https://i.ibb.co/pdnzdZC/Untitled-design-removebg-preview.png"
            alt=""
          />
          <p className="fs-3 text-white fw-bold">
            Get special offer coupon code!
          </p>
          <button
            onClick={handleCouponCode}
            className="btn btn-info mt-2 mb-3 fw-bold"
          >
            GET COUPON
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
