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
    const submitOrder = {
      displayName: user.displayName,
      email: user.email,
      status: status,
      productName: product.name,
      address: data.address,
      phone: data.phone,
    };

    const proceed = window.confirm("Please confirm to Purchase!");
    if (proceed) {
      fetch("https://mysterious-brook-12035.herokuapp.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(submitOrder),
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
      <br />
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "125px" }}
      >
        <div className="form-floating mb-3 mt-4 col-10 col-sm-10 col-md-5">
          <h2 className="fw-bold text-center mb-4">Purchase Now!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
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
              type="submit"
              className="btn btn-primary w-100 mt-3"
              value="Place Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
