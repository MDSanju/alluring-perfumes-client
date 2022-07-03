import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import NoOrderFound from "../../../images/no-orders2.png";
import {
  MyOrderPageTitle,
  NoOrderFoundImage,
  NoOrderFoundText,
} from "../../styles/Random.styles";

// manage all orders for admin
const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [allOrders, setAllOrders] = useState([]);

  const history = useHistory();

  const handleGoToHome = () => {
    history.push("/home");
  };

  // pagination states
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  // page data size
  const size = 3;

  useEffect(() => {
    fetch(`http://localhost:5000/orders?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const handleUpdateStatus = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
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
          history.push("/newDashboard/shipped");
        }
      });
  };

  return (
    <div style={{ marginTop: "16px" }}>
      {allOrders.length ? (
        <>
          <MyOrderPageTitle>
            <div className="orders_placed_title">
              <span style={{ color: "#e45959", fontSize: "32px" }}>
                {allOrders.length}
              </span>{" "}
              {allOrders.length <= 1 ? "order has" : "orders have"} been placed
            </div>
            <Button onClick={handleGoToHome} variant="text">
              Home
            </Button>
          </MyOrderPageTitle>
          {orders.length ? (
            <>
              {orders.map((order) => (
                <ManageAllOrder
                  key={order._id}
                  order={order}
                  handleUpdateStatus={handleUpdateStatus}
                />
              ))}
            </>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "45px",
              }}
            >
              <ScaleLoader color={"#003665"} size={85} />
            </div>
          )}
          <div
            style={{
              marginTop: "3rem",
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "right",
            }}
          >
            <Pagination
              count={pageCount}
              onChange={(event, value) => setPage(value - 1)}
            />
          </div>
        </>
      ) : (
        <NoOrderFoundImage>
          <img src={NoOrderFound} alt="" />
          <br />
          <div>
            <NoOrderFoundText style={{ color: "#d63031", fontWeight: "700" }}>
              users didn't place any order!
            </NoOrderFoundText>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button onClick={handleGoToHome} variant="text">
                Home
              </Button>
            </div>
          </div>
        </NoOrderFoundImage>
      )}
    </div>
  );
};

export default ManageAllOrders;
