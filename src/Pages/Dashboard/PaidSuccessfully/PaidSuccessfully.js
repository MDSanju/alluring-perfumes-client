import React from "react";
import { useHistory } from "react-router-dom";
import paidSuccessful from "../../../images/paidSuccess.png";
import {
  PaidCardInfo,
  PaidOrderButtons,
  PaidOrderCard,
  PaidOrderFullPage,
  PaidOrderImage,
  PaidOrderText,
} from "../../styles/Random.styles";

const PaidSuccessfully = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push("/home");
  };

  const handleOrder = () => {
    history.push("/explore");
  };
  return (
    <PaidOrderFullPage>
      <PaidOrderCard>
        <PaidCardInfo>
          <PaidOrderImage>
            <img src={paidSuccessful} alt="" />
          </PaidOrderImage>
          <PaidOrderText>
            <h2>Congratulations!</h2>
            <p>Your payment done successfully!</p>
          </PaidOrderText>
          <PaidOrderButtons>
            <button onClick={handleHome}>Home</button>
            <button onClick={handleOrder}>Order</button>
          </PaidOrderButtons>
        </PaidCardInfo>
      </PaidOrderCard>
    </PaidOrderFullPage>
  );
};

export default PaidSuccessfully;
