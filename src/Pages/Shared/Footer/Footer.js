import React from "react";
import payment from "../../../images/payment-getway.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container mb-5 footer-items">
        <div className="row" style={{ textAlign: "left" }}>
          <div className="col-12 col-sm-6 col-md-3">
            <span
              className="fw-bold fs-3"
              style={{ cursor: "pointer", color: "#ffda79" }}
            >
              Alluring Perfumes
            </span>
            <p className="mt-4">Address: Gianyar, Bali, Indonesia – 80225</p>
            <p>Phone: +62 361 234 4567</p>
            <p>Email: admin@admin.com</p>
            <div></div>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h4>Customer Care</h4>
            <p className="mt-4">Contact Us</p>
            <p>Site Map</p>
            <p>Gift Vouchers</p>
            <p>Best Sellers</p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 open-time">
            <h4>Quick Links</h4>
            <p className="mt-4">Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Credit</p>
            <p>FAQ</p>
          </div>
          <div
            style={{ textAlign: "left" }}
            className="col-12 col-sm-6 col-md-3"
          >
            <small style={{ fontSize: "18px" }} className="fw-bold">
              Choose your payment method:
            </small>
            <img
              style={{
                width: "100%",
                borderRadius: "4px",
                marginTop: "7px",
                cursor: "pointer",
              }}
              src={payment}
              alt=""
            />
          </div>
        </div>
      </div>
      <p
        className="fw-bold text-center"
        style={{
          fontSize: "16px",
          color: "#ffda79",
        }}
      >
        Copyright © 2000–2021 Alluring-perfumes.com™. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
