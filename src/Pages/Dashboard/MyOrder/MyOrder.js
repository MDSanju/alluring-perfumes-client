import React from "react";
import { MdDelete, MdOutlineCancel } from "react-icons/md";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const MyOrder = ({ order, handleDeleteOrder }) => {
  const { _id, productName, productDescription, displayName, address, status } =
    order;
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
        <div style={{ width: "64px", height: "64px" }}>
          <img
            style={{ width: "100%" }}
            src="https://i.ibb.co/z2STjz8/digital-shopping-4268119-3550583.png"
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
                ? "Please pay to be shipped this order"
                : "This order has already been shipped"}
              !
            </div>
          </div>
        </div>

        {status === "Pending" ? (
          <CustomTooltip title="cancel order">
            <div
              onClick={() => handleDeleteOrder(_id)}
              className="delete_forever_icon"
            >
              <MdOutlineCancel size={24} />
            </div>
          </CustomTooltip>
        ) : (
          <CustomTooltip title="delete history">
            <div
              onClick={() => handleDeleteOrder(_id)}
              className="delete_forever_icon"
            >
              <MdDelete size={24} />
            </div>
          </CustomTooltip>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
