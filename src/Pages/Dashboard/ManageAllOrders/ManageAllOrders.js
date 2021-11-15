import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
// manage all orders for admin
const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://mysterious-brook-12035.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
    setIsLoading(false);
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

      {!isLoading && (
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
                      <button
                        onClick={() => handleUpdateStatus(allOrder._id)}
                        className="btn btn-outline-dark btn-sm"
                        style={{ width: "65px" }}
                      >
                        {allOrder.status === "Shipped" ? "Done" : "Update"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {isLoading && (
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "25vh" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAllOrders;
