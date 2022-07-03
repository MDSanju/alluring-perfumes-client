import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import ScaleLoader from "react-spinners/ScaleLoader";
import TextField from "@mui/material/TextField";
import "./PurchasePage.css";

const PurchasePage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const history = useHistory();
  const { user } = useAuth();
  // default status
  const status = "Pending";

  useEffect(() => {
    fetch(`http://localhost:5000/perfumes/${productId}`)
      .then((res) => res.json())
      .then((result) => setProduct(result));
  }, [productId]);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("image", product.img);
    formData.append("displayName", user.displayName);
    formData.append("email", user.email);
    formData.append("status", status);
    formData.append("productName", product.name);
    formData.append("productDescription", product.description);
    formData.append("perfumePrice", product.price);
    formData.append("address", data.address);
    formData.append("phone", data.phone);

    const proceed = window.confirm("Please confirm to Purchase!");
    if (proceed) {
      fetch("http://localhost:5000/orders", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("Purchased successfully... Thank you!");
            reset();
            history.push("/orderSuccess");
          }
        });
    }
  };
  return (
    <div className="container" style={{ marginTop: "132px" }}>
      {product._id ? (
        <div className="main-container">
          <div className="main-wrapper justify-content-center align-items-center">
            <div className="perfume_details">
              <div className="perfume_content">
                <h2 style={{ color: "#111111" }}>{product.name}</h2>
                <p className="perfume_detail_description">
                  {product.description}
                </p>
                <p
                  className="perfume_price_detail"
                  style={{ color: "#111111" }}
                >
                  ${product.price}
                </p>
              </div>
              <div className="perfume_img">
                <img
                  src={`data:image/png;base64,${product.img}`}
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "35px",
          }}
        >
          <ScaleLoader color={"#003665"} size={85} />
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      {product._id ? (
        <div className="main-container">
          <div className="main-wrapper">
            <div className="column detail-wrapper">
              <h2 className="purchase-checkout-title">Checkout Now</h2>
              <div className="checkout-product-detail">
                <img src={`data:image/png;base64,${product.img}`} alt="" />
                <p
                  className="checkout-product-name"
                  style={{ color: "#111111" }}
                >
                  {product.name}
                </p>
                <p
                  className="checkout-product-price"
                  style={{ color: "#111111" }}
                >
                  ${product.price}
                </p>
              </div>
            </div>

            <div className="column form-wrapper">
              <form
                action=""
                className="checkout-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <TextField
                  id="standard-basic"
                  label="Address"
                  className="checkout-text-field"
                  variant="standard"
                  {...register("address")}
                  required
                />
                <br />
                <br />
                <TextField
                  id="standard-basic"
                  label="Phone"
                  className="checkout-text-field"
                  variant="standard"
                  {...register("phone")}
                  required
                />

                <div style={{ textAlign: "right" }}>
                  <button className="btn-checkout" type="submit">
                    Checkout
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "35px",
          }}
        >
          <ScaleLoader color={"#003665"} size={85} />
        </div>
      )}
    </div>
  );
};

export default PurchasePage;
