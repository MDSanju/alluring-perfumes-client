import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import Alert from "@mui/material/Alert";
import masterCard from "../../../images/master-card.png";
import paypal from "../../../images/paypal.png";
import visaCard from "../../../images/visa-card.png";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import useAuth from "../../../hooks/useAuth";
import {
  CardBody,
  CardImages,
  CheckoutButton,
  CheckoutContainer,
  CheckoutDateSelectionInput,
  CheckoutInput,
  FirstCheckoutRow,
  RowOwner,
} from "../../styles/Random.styles";

const CheckoutForm = ({ booking }) => {
  const { _id, displayName, perfumePrice } = booking;
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const history = useHistory();

  //   error msg show on UI
  const [uiError, setUiError] = useState("");
  //
  const [success, setSuccess] = useState("");
  //   payment method
  const [clientSecret, setClientSecret] = useState("");
  //   reload
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ perfumePrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [perfumePrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(
      CardNumberElement,
      CardExpiryElement,
      CardCvcElement
    );
    if (card === null) {
      return;
    }

    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setUiError(error.message);
      setSuccess("");
    } else {
      setUiError("");
      console.log(paymentMethod);
    }

    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: displayName,
            email: user.email,
          },
        },
      });

    if (intentError) {
      setUiError(intentError.message);
      setSuccess("");
    } else {
      setUiError("");
      setSuccess("Your payment processed successfully!");
      console.log(paymentIntent);
      setProcessing(false);
      // save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
      };
      const url = `http://localhost:5000/orders/pay/${_id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  const inputStyle = {
    color: "#424770",
    fontSmoothing: "antialiased",
    ":-webkit-autofill": {
      color: "#fce883",
    },
    "::placeholder": {
      color: "#aab7c4",
    },
  };

  if (success) {
    history.push("/newDashboard/paidSuccessfully");
  }

  return (
    <CardBody>
      <CheckoutContainer>
        <h1 id="checkout-card-text" style={{ fontSize: "2rem" }}>
          Confirm Your Payment
        </h1>
        <form onSubmit={handleSubmit}>
          <FirstCheckoutRow>
            <RowOwner>
              <h3 id="checkout-card-text">Owner</h3>
              <CheckoutInput>
                <input type="text" placeholder="Owner Name" required />
              </CheckoutInput>
            </RowOwner>
            <div>
              <h3 id="checkout-card-text">CVC</h3>
              <CheckoutInput>
                <CardCvcElement
                  id="cvc"
                  options={{
                    style: {
                      base: inputStyle,
                    },
                  }}
                />
              </CheckoutInput>
            </div>
          </FirstCheckoutRow>
          <br />
          <div>
            <div>
              <h3 id="checkout-card-text">Card Number</h3>
              <CheckoutInput>
                <CardNumberElement
                  id="card-number"
                  options={{
                    style: {
                      base: inputStyle,
                    },
                  }}
                />
              </CheckoutInput>
            </div>
          </div>
          <br />
          <div>
            <h3 id="checkout-card-text">Expiry Date</h3>
            <CheckoutDateSelectionInput>
              <CheckoutInput>
                <CardExpiryElement
                  id="card-expiry"
                  options={{
                    style: {
                      base: inputStyle,
                    },
                  }}
                />
              </CheckoutInput>

              <CardImages>
                <img src={masterCard} alt="" />
                <img src={visaCard} alt="" />
                <img src={paypal} alt="" />
              </CardImages>
            </CheckoutDateSelectionInput>
          </div>

          <br />

          {!processing ? (
            <CheckoutButton>
              <button type="submit" disabled={!stripe || success}>
                Confirm ${perfumePrice}
              </button>
            </CheckoutButton>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ScaleLoader color={uiError ? "#EA2027" : "#365b38"} />
            </div>
          )}
        </form>
        {uiError && <Alert severity="error">{uiError}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
      </CheckoutContainer>
    </CardBody>
  );
};

export default CheckoutForm;
