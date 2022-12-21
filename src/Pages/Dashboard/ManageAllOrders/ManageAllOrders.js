import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ScaleLoader from "react-spinners/ScaleLoader";
import { Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import NoOrderFound from "../../../images/no-orders2.png";
import { IoSearchOutline } from "react-icons/io5";
import NavLogoPNG from "../../../images/webLogo.png";
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

// manage all orders for admin
const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [displayOrders, setDisplayOrders] = useState([]);
  const [searchResults, setSearchResults] = useState(false);

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
    fetch(
      `https://alluring-perfumes-server.onrender.com/orders?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  useEffect(() => {
    fetch("https://alluring-perfumes-server.onrender.com/allOrders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
        setDisplayOrders(data);
      });
  }, []);

  const handleUpdateStatus = (id) => {
    fetch(`https://alluring-perfumes-server.onrender.com/orders/${id}`, {
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

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedOrders = allOrders.filter((element) =>
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
          <SearchBarLogo>
            <SearchLogoContainer>
              <img src={NavLogoPNG} alt="" />
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
                    <ManageAllOrder
                      key={order._id}
                      order={order}
                      handleUpdateStatus={handleUpdateStatus}
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
