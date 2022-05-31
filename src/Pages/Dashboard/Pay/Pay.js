import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import useAuth from "../../../hooks/useAuth";
import "./Pay.css";

const Pay = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  const pendingOrders = orders.filter(
    (element) => element.status === "Pending"
  );

  useEffect(() => {
    fetch(`https://mysterious-brook-12035.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);
  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4 fw-bold">
        {pendingOrders.length} Unpaid{" "}
        {pendingOrders.length >= 2 ? "Orders" : "Order"}
      </h2>

      {pendingOrders.length && (
        <div className="bg-light p-5">
          <div className="table-responsive" id="table-off">
            <table className="table bg-white">
              <thead className="bg-dark text-light">
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Pay Now</th>
                </tr>
              </thead>
              <tbody>
                {pendingOrders.map((order) => (
                  <tr key={order._id} order={order}>
                    <td data-title="Product">{order.productName}</td>
                    <td data-title="Price">{order.perfumePrice}</td>
                    <td data-title="Status">{order.status}</td>
                    <td data-title="Pay Now" style={{ cursor: "pointer" }}>
                      {order.payment ? (
                        "Paid"
                      ) : (
                        <Link
                          to={`/dashboard/paying/${order._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          <Button>Pay</Button>
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {!pendingOrders.length && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "38px",
          }}
        >
          <ScaleLoader color={"#003665"} size={85} />
        </div>
      )}
    </div>
  );
};

export default Pay;
