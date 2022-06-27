import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Button } from "@mui/material";
import NoOrderFound from "../../../images/no-orders.png";
import {
  MyOrderPageTitle,
  NoOrderFoundImage,
  NoOrderFoundText,
} from "../../styles/Random.styles";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useHistory } from "react-router-dom";
import MyOrder from "../MyOrder/MyOrder";
import Pagination from "@mui/material/Pagination";
import { toast, ToastContainer } from "react-toastify";
import "./MyOrders.css";

// user can see own orders(my orders page)
const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const history = useHistory();

  // pagination states
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  // page data size
  const size = 3;

  const notify = () =>
    toast.success("Remove order confirmed!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm(
      "Are you sure that you want to remove this one?"
    );
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount) {
            setDeleteSuccess(true);
            notify();
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  const handleGoToOrder = () => {
    history.push("/explore");
  };

  return (
    <div style={{ marginTop: "16px" }}>
      {deleteSuccess && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
      {totalOrders.length ? (
        <>
          <MyOrderPageTitle>
            <div className="orders_placed_title">
              <span style={{ color: "#e45959", fontSize: "32px" }}>
                {totalOrders.length}
              </span>{" "}
              {totalOrders.length <= 1 ? "order has" : "orders have"} been
              placed
            </div>
            <Button onClick={handleGoToOrder} variant="text">
              Order
            </Button>
          </MyOrderPageTitle>
          {orders.length ? (
            <>
              {orders.map((order) => (
                <MyOrder
                  key={order._id}
                  order={order}
                  handleDeleteOrder={handleDeleteOrder}
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
          <div>
            <NoOrderFoundText>no orders found!</NoOrderFoundText>
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

export default MyOrders;
