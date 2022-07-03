import { Button, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import useAuth from "../../../hooks/useAuth";
import {
  MyOrderPageTitle,
  NoOrderFoundImage,
  NoOrderFoundText,
} from "../../styles/Random.styles";
import PayInfo from "../PayInfo/PayInfo";
import NoOrderFound from "../../../images/noOrders.svg";
import "./Pay.css";

const Pay = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState([]);
  const history = useHistory();

  // pagination states
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  // page data size
  const size = 3;

  const handleGoToOrder = () => {
    history.push("/explore");
  };

  const pendingOrders = totalOrders.filter(
    (element) => element.status === "Pending" && !element.payment
  );

  useEffect(() => {
    fetch(
      `http://localhost:5000/orders/${user.email}?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [user.email, page]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/totalOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setTotalOrders(data));
  }, [user.email, orders]);

  return (
    <div style={{ marginTop: "16px" }}>
      {totalOrders.length ? (
        <>
          <MyOrderPageTitle>
            {pendingOrders.length >= 1 ? (
              <div className="orders_placed_title">
                <span style={{ color: "#e45959", fontSize: "32px" }}>
                  {pendingOrders.length}
                </span>{" "}
                {pendingOrders.length < 2 ? "order" : "orders"} still have to be
                paid
              </div>
            ) : (
              <div className="orders_placed_title">All orders paid!</div>
            )}
            <Button onClick={handleGoToOrder} variant="text">
              Order
            </Button>
          </MyOrderPageTitle>
          {orders.length ? (
            <>
              {orders.map((order) => (
                <PayInfo key={order._id} order={order} />
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
          <div>
            <NoOrderFoundText style={{ color: "#3e3d3f" }}>
              no orders placed yet!
            </NoOrderFoundText>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button onClick={handleGoToOrder} variant="text">
                Order Now
              </Button>
            </div>
          </div>
        </NoOrderFoundImage>
      )}
    </div>
  );
};

export default Pay;
