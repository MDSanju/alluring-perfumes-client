import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { ImCross } from "react-icons/im";
import ScaleLoader from "react-spinners/ScaleLoader";
import "./MyOrders.css";

// user can see own orders(my orders page)
const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://mysterious-brook-12035.herokuapp.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm(
      "Are you sure that you want to Cancel your Order?"
    );
    if (proceed) {
      fetch(`https://mysterious-brook-12035.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            alert("Cancel Confirm!");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4 fw-bold">
        {orders.length} {orders.length >= 2 ? "Orders" : "Order"} Placed!
      </h2>

      {orders.length && (
        <div className="bg-light p-5">
          <div className="table-responsive" id="table-off">
            <table className="table bg-white">
              <thead className="bg-dark text-light">
                <tr>
                  <th>Your Name</th>
                  <th>Perfume</th>
                  <th>Status</th>
                  <th>Cancel Order</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id} order={order}>
                    <td data-title="Name">{order.displayName}</td>
                    <td data-title="Perfume">{order.productName}</td>
                    <td data-title="Status">{order.status}</td>
                    <td data-title="Cancel Order" style={{ cursor: "pointer" }}>
                      {" "}
                      <i
                        onClick={() => handleDeleteOrder(order._id)}
                        className="text-danger mx-3"
                        title="cancel the order"
                      >
                        <ImCross />
                      </i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {!orders.length && (
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

export default MyOrders;
