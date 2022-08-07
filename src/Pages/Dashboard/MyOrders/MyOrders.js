import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Button } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import SearchLogoPNG from "../../../images/webLogo.png";
import NoOrderFound from "../../../images/no-orders.png";
import noSearchRes from "../../../images/no_search_result.png";
import {
  MyOrderPageTitle,
  NoOrderFoundImage,
  NoOrderFoundText,
  NoSearchResultContainer,
  SearchBarField,
  SearchBarLogo,
  SearchFieldIcon,
  SearchLogoContainer,
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
  const [displayOrders, setDisplayOrders] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
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
      `https://mysterious-brook-12035.herokuapp.com/orders/${user.email}?page=${page}&&size=${size}`
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
    fetch(
      `https://mysterious-brook-12035.herokuapp.com/orders/totalOrders/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTotalOrders(data);
        setDisplayOrders(data);
      });
  }, [user.email, orders]);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm(
      "Are you sure that you want to remove this one?"
    );
    if (proceed) {
      fetch(`https://mysterious-brook-12035.herokuapp.com/orders/${id}`, {
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

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedOrders = totalOrders.filter((element) =>
      element.productName.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayOrders(matchedOrders);
    if (searchText === "") {
      setSearchResults(false);
    } else {
      setSearchResults(true);
    }
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
          <SearchBarLogo>
            <SearchLogoContainer>
              <img src={SearchLogoPNG} alt="" />
            </SearchLogoContainer>

            <SearchBarField>
              <SearchFieldIcon>
                <IoSearchOutline color="#868282" />
              </SearchFieldIcon>
              <input
                type="text"
                placeholder="Search…"
                onChange={handleSearch}
              />
            </SearchBarField>
          </SearchBarLogo>
          <br />
          {searchResults ? (
            <>
              {displayOrders.length ? (
                <>
                  {displayOrders.map((order) => (
                    <MyOrder
                      key={order._id}
                      order={order}
                      handleDeleteOrder={handleDeleteOrder}
                    />
                  ))}
                </>
              ) : (
                <>
                  <NoSearchResultContainer>
                    <img src={noSearchRes} alt="" />
                    <h4>Sorry, No orders found!</h4>
                  </NoSearchResultContainer>
                </>
              )}
            </>
          ) : (
            <>
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
            </>
          )}
          {!searchResults && (
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
          )}
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
