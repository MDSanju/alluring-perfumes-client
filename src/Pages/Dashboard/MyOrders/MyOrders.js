import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { IoSearchOutline } from "react-icons/io5";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";
import NoOrderFound from "../../../images/no-orders.png";
import {
  NoOrderFoundImage,
  NoOrderFoundText,
} from "../../styles/Random.styles";
import { useHistory } from "react-router-dom";
import MyOrder from "../MyOrder/MyOrder";
import "./MyOrders.css";

// user can see own orders(my orders page)
const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

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
            alert("Remove confirm!");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  const handleGoToOrder = () => {
    history.push("/explore");
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#f9f9f9",
      transition: "0.3s ease",
    },
    marginRight: 0,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
      width: "300px",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "rgb(63, 63, 70)",
    fontSize: "1rem",
    lineHeight: "1.5",
    letterSpacing: "normal",
    fontWeight: "400",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1.5, 1, 1.5, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "26ch",
      },
    },
  }));

  return (
    <div style={{ marginTop: "36px" }}>
      {orders.length ? (
        <>
          <div className="orders_placed_title">
            {orders.length} {orders.length <= 1 ? "order has" : "orders have"}{" "}
            been placed
          </div>

          <Search className="search_shaddow ">
            <SearchIconWrapper>
              <IoSearchOutline color="#868282" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by product name…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {orders.map((order) => (
            <MyOrder
              key={order._id}
              order={order}
              handleDeleteOrder={handleDeleteOrder}
            />
          ))}
        </>
      ) : (
        <NoOrderFoundImage>
          <img src={NoOrderFound} alt="" />
          <div>
            <NoOrderFoundText>no order found yet</NoOrderFoundText>
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
