import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import priceImg from "../../../images/cost.png";

const ManageProduct = ({ product, handleDeleteProduct }) => {
  const { _id, name, price, img, description } = product;

  const shortDescription = description.slice(0, 32);

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
          <img style={{ width: "100%" }} src={img} alt="" />
        </div>
        <div className="fxImpW">
          <div className="zdAtl" style={{ color: "#d63031" }}>
            {name}
          </div>
          <div className="drShxo" style={{ color: "#30336b" }}>
            {shortDescription}...
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "0.5rem",
          minWidth: "300px",
        }}
      >
        <div style={{ width: "64px", height: "64px" }}>
          <img style={{ width: "100%" }} src={priceImg} alt="" />
        </div>
        <div className="fxImpW">
          <div
            className="zdAtl"
            style={{
              color: "#8624DB",
              fontWeight: "800",
              fontSize: "1.5rem",
            }}
          >
            ${price}
          </div>
        </div>
      </div>

      <CustomTooltip title="delete forever">
        <div
          onClick={() => handleDeleteProduct(_id)}
          className="delete_forever_icon"
        >
          <MdDeleteForever size={30} />
        </div>
      </CustomTooltip>
    </div>
  );
};

export default ManageProduct;
