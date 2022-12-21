import { Button, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import useAuth from "../../../hooks/useAuth";
import { IoSearchOutline } from "react-icons/io5";
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
import PayInfo from "../PayInfo/PayInfo";
import NoOrderFound from "../../../images/noOrders.svg";
import SearchLogoPNG from "../../../images/webLogo.png";
import noSearchRes from "../../../images/no_search_result.png";
import "./Pay.css";

const Pay = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState([]);
  const [displayOrders, setDisplayOrders] = useState([]);
  const [searchResults, setSearchResults] = useState(false);
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

  useEffect(() => {
    fetch(
      `https://alluring-perfumes-server.onrender.com/orders/${user.email}?page=${page}&&size=${size}`
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
      `https://alluring-perfumes-server.onrender.com/orders/totalOrders/${user.email}`
    )
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
                    <PayInfo key={order._id} order={order} />
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
