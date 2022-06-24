import { Button, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
    (element) => element.status === "Pending"
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
    // <div className="container">
    //   <h2 className="text-center mt-5 mb-4 fw-bold">
    //     {pendingOrders.length} Unpaid{" "}
    //     {pendingOrders.length >= 2 ? "Orders" : "Order"}
    //   </h2>

    //   {pendingOrders.length && (
    //     <div className="bg-light p-5">
    //       <div className="table-responsive" id="table-off">
    //         <table className="table bg-white">
    //           <thead className="bg-dark text-light">
    //             <tr>
    //               <th>Product</th>
    //               <th>Price</th>
    //               <th>Status</th>
    //               <th>Pay Now</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {pendingOrders.map((order) => (
    //               <tr key={order._id} order={order}>
    //                 <td data-title="Product">{order.productName}</td>
    //                 <td data-title="Price">{order.perfumePrice}</td>
    //                 <td data-title="Status">{order.status}</td>
    //                 <td data-title="Pay Now" style={{ cursor: "pointer" }}>
    //                   {order.payment ? (
    //                     "Paid"
    //                   ) : (
    //                     <Link
    //                       to={`/dashboard/paying/${order._id}`}
    //                       style={{ textDecoration: "none" }}
    //                     >
    //                       <Button>Pay</Button>
    //                     </Link>
    //                   )}
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   )}
    //   {!pendingOrders.length && (
    //     <div
    //       style={{
    //         display: "flex",
    //         justifyContent: "center",
    //         marginTop: "38px",
    //       }}
    //     >
    //       <ScaleLoader color={"#003665"} size={85} />
    //     </div>
    //   )}
    // </div>

    <div style={{ marginTop: "16px" }}>
      {totalOrders.length ? (
        <>
          <MyOrderPageTitle>
            <div className="orders_placed_title">
              <span style={{ color: "#e45959", fontSize: "32px" }}>
                {pendingOrders.length}
              </span>{" "}
              orders still have to be paid
            </div>
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
