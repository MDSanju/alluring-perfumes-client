import React from "react";
import { useHistory } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import priceImg from "../../../images/chargeback.png";

const PayInfo = ({ order }) => {
  const history = useHistory();
  const {
    _id,
    image,
    productName,
    productDescription,
    perfumePrice,
    status,
    payment,
  } = order;
  const description = productDescription.slice(0, 28);

  const makePayment = (id) => {
    history.push(`/newDashboard/paying/${id}`);
  };

  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <div className="one_order_box">
      <div className="product_details-with_image">
        <div style={{ width: "50px", height: "50px" }}>
          <img style={{ width: "100%" }} src={image} alt="" />
        </div>
        <div className="fxImpW">
          <div className="zdAtl">{productName}</div>
          <div className="drShxo">{description}...</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "baseline",
          gap: "0.2rem",
          minWidth: "300px",
        }}
      >
        <div style={{ width: "64px", height: "64px" }}>
          <img style={{ width: "100%" }} src={priceImg} alt="" />
        </div>
        <div className="fxImpW">
          <div
            className="zdAtl"
            style={{ color: "#686de0", fontWeight: "800", fontSize: "1.5rem" }}
          >
            ${perfumePrice}
          </div>
        </div>
      </div>
      <div className="status_details-with_delete_icon">
        <div className="user_details-with_image">
          <div style={{ width: "64px", height: "64px" }}>
            <img
              style={{ width: "100%" }}
              src="https://i.ibb.co/6vqXPKJ/status.jpg"
              alt=""
            />
          </div>
          <div className="fxImpW">
            <div className="iDXxia" style={{ color: "#e45959" }}>
              {status}
            </div>
            <div className="hqdDkf">
              {status === "Pending"
                ? "Make payment to be shipped this order"
                : "This order has already been shipped"}
              !
            </div>
          </div>
        </div>

        {status === "Shipped" || payment ? (
          <CustomTooltip title="already paid">
            <div>
              <Button disabled>Paid</Button>
            </div>
          </CustomTooltip>
        ) : (
          <CustomTooltip title="click to pay">
            <div>
              <Button onClick={() => makePayment(_id)} variant="text">
                Pay
              </Button>
            </div>
          </CustomTooltip>
        )}
      </div>
    </div>
  );
};

export default PayInfo;
