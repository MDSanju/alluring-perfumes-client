import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import "./PurchasePage.css";

const PurchasePage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useAuth();
  // default status
  const status = "Pending";

  useEffect(() => {
    fetch(`https://mysterious-brook-12035.herokuapp.com/perfumes/${productId}`)
      .then((res) => res.json())
      .then((result) => setProduct(result));
  }, [productId]);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const proceed = window.confirm("Please confirm to Purchase!");
    if (proceed) {
      fetch("https://mysterious-brook-12035.herokuapp.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("Purchased successfully... Thank you!");
            reset();
          }
        });
    }
  };
  return (
    <div className="container" style={{ marginTop: "75px" }}>
      <h2 className="text-center fw-bold">Perfume: {product.name}</h2>
      <div className="w-75 mx-auto mt-5 product-info">
        <img className="mx-3 product-img" src={product.img} alt="" />
        <div className="mx-3">
          <h3 style={{ color: "#8801bf" }}>Price: ${product.price}</h3>
          <p className="mt-3">{product.description}</p>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "35px", marginBottom: "125px" }}
      >
        <div className="form-floating mb-3 mt-5 col-10 col-sm-10 col-md-5">
          <h2 className="fw-bold text-center mb-5">Purchase Now!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="form-control mt-3"
              id="floatingInput"
              defaultValue={user.displayName}
              {...register("displayName")}
            />

            <input
              type="email"
              className="form-control mt-3"
              id="floatingInput"
              defaultValue={user.email}
              {...register("email")}
            />
            <input
              type="text"
              className="form-control mt-3"
              id="floatingInput"
              defaultValue={status}
              {...register("status")}
            />
            <input
              type="text"
              className="form-control mt-3"
              id="floatingInput"
              placeholder="Copy the perfume name above and paste on here"
              {...register("productName")}
              required
            />
            <input
              type="text"
              className="form-control mt-3"
              id="floatingInput"
              placeholder="Address"
              {...register("address")}
              required
            />
            <input
              type="text"
              className="form-control mt-3"
              id="floatingInput"
              placeholder="Phone"
              {...register("phone")}
              required
            />
            <input
              type="text"
              className="form-control mt-3"
              id="floatingInput"
              placeholder="Use Coupon Code (If you have)"
              {...register("couponCode")}
            />
            <input
              type="submit"
              className="btn btn-primary w-100 mt-3"
              value="Buy Now"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
