import React from "react";
import { useHistory } from "react-router-dom";
import successOrderImg from "../../images/successOrder.png";
import {
  SuccessCardInfo,
  SuccessOrderButtons,
  SuccessOrderCard,
  SuccessOrderFullPage,
  SuccessOrderImage,
  SuccessOrderText,
} from "../styles/Random.styles";

const OrderSuccess = () => {
  const history = useHistory();

  const handleHome = () => {
    history.push("/home");
  };

  const handlePay = () => {
    history.push("/newDashboard/pay");
  };
  return (
    <SuccessOrderFullPage>
      <SuccessOrderCard>
        <SuccessCardInfo>
          <SuccessOrderImage>
            <img src={successOrderImg} alt="" />
          </SuccessOrderImage>
          <SuccessOrderText>
            <h2>Thank You!</h2>
            <p>Your order successfully has been submitted!</p>
          </SuccessOrderText>
          <SuccessOrderButtons>
            <button onClick={handleHome}>Home</button>
            <button onClick={handlePay}>Pay</button>
          </SuccessOrderButtons>
        </SuccessCardInfo>
      </SuccessOrderCard>
    </SuccessOrderFullPage>
  );
};

export default OrderSuccess;
