import React from "react";
import { useHistory } from "react-router-dom";
import {
  PaidCardInfo,
  PaidOrderCard,
  PaidOrderFullPage,
  PaidOrderImage,
  PaidOrderText,
  ShippedButtons,
} from "../../styles/Random.styles";

const Shipped = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push("/home");
  };

  const handleOrder = () => {
    history.push("/newDashboard");
  };
  return (
    <PaidOrderFullPage>
      <PaidOrderCard style={{ backgroundColor: "#f7f7f7" }}>
        <PaidCardInfo>
          <PaidOrderImage>
            <img
              src="https://www.kindpng.com/picc/m/794-7943072_shipping-icon-png-fast-delivery-in-mobile-transparent.png"
              alt=""
            />
          </PaidOrderImage>
          <PaidOrderText>
            <h2>Delivery Started!</h2>
            <p>This order successfully shipped!</p>
          </PaidOrderText>
          <ShippedButtons>
            <button onClick={handleHome}>Home</button>
            <button onClick={handleOrder}>Dashboard</button>
          </ShippedButtons>
        </PaidCardInfo>
      </PaidOrderCard>
    </PaidOrderFullPage>
  );
};

export default Shipped;
