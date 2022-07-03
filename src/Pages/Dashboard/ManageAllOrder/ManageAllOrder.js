import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { Button } from "@mui/material";

const ManageAllOrder = ({ order, handleUpdateStatus }) => {
  const {
    _id,
    image,
    productName,
    productDescription,
    displayName,
    address,
    status,
    payment,
  } = order;

  const description = productDescription.slice(0, 28);

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
          <img
            style={{ width: "100%" }}
            src={`data:image/png;base64,${image}`}
            alt=""
          />
        </div>
        <div className="fxImpW">
          <div className="zdAtl">{productName}</div>
          <div className="drShxo">{description}...</div>
        </div>
      </div>
      <div className="user_details-with_image">
        <div style={{ width: "64px", height: "64px" }}>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/SrVLk6V/buyer.png"
            alt=""
          />
        </div>
        <div className="fxImpW">
          <div className="hqdDkf">{address}</div>
          <div className="iDXxia">{displayName}</div>
        </div>
      </div>
      <div
        className="status_details-with_delete_icon"
        style={{ minWidth: "400px" }}
      >
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
              {payment
                ? "This order is paid! Make update."
                : "This order is still unpaid!"}
            </div>
          </div>
        </div>

        {status === "Shipped" ? (
          <CustomTooltip title="already shipped">
            <div>
              <Button disabled>Updated</Button>
            </div>
          </CustomTooltip>
        ) : (
          <CustomTooltip title="click to shipped">
            <div>
              <Button onClick={() => handleUpdateStatus(_id)} variant="text">
                Update
              </Button>
            </div>
          </CustomTooltip>
        )}
      </div>
    </div>
  );
};

export default ManageAllOrder;
