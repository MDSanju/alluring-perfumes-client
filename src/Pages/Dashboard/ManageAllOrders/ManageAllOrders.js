import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ScaleLoader from "react-spinners/ScaleLoader";

// manage all orders for admin
const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const history = useHistory();

  useEffect(() => {
    fetch("https://mysterious-brook-12035.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const handleUpdateStatus = (id) => {
    fetch(`https://mysterious-brook-12035.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allOrders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Please confirm to shipped!");
          history.push("/dashboard/shipped");
        }
      });
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4 fw-bold">
        Total {allOrders.length} {allOrders.length >= 2 ? "Orders" : "Order"}{" "}
        Placed by Customers!
      </h2>

      {allOrders.length && (
        <div className="bg-light p-5">
          <div className="table-responsive" id="table-off">
            <table className="table bg-white">
              <thead className="bg-dark text-light">
                <tr>
                  <th>Customer Name</th>
                  <th>Product</th>
                  <th>Status</th>
                  <th>Shipped</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((allOrder) => (
                  <tr key={allOrder._id} allOrder={allOrder}>
                    <td data-title="Name">{allOrder.displayName}</td>
                    <td data-title="Product">{allOrder.productName}</td>
                    <td data-title="Status">{allOrder.status}</td>
                    <td data-title="Shipped">
                      {allOrder.status === "Shipped" ? (
                        "Updated"
                      ) : (
                        <button
                          onClick={() => handleUpdateStatus(allOrder._id)}
                          className="btn btn-outline-dark btn-sm"
                          style={{ width: "65px" }}
                        >
                          Update
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {!allOrders.length && (
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

export default ManageAllOrders;
