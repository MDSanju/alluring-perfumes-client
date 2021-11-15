import React from "react";
import { useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";

const CouponCode = () => {
  const { user } = useAuth();
  const history = useHistory();

  const backToHome = () => {
    history.push("/");
  };
  return (
    <div>
      <h2 className="text-center mt-5 text-primary">
        Hello {user.displayName}, this is your coupon code!
      </h2>
      <div className="d-flex align-items-center justify-content-center mt-4">
        <small className="me-1 fs-5 fw-bold">Coupon Code:</small>
        <button className="ms-1 p-2" style={{ width: "160px", border: "none" }}>
          495685584554
        </button>
      </div>
      <p className="text-center fs-5 mt-3">
        Use this code to purchase our perfume. Then you will get 20% discount
        <span className="text-danger fw-bold"> (Time is limited!)</span>
      </p>
      <div className="d-flex justify-content-center mt-5">
        <button onClick={backToHome} className="btn btn-dark">
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default CouponCode;
