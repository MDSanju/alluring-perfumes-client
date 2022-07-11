import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import ScaleLoader from "react-spinners/ScaleLoader";

const stripePromise = loadStripe(
  "pk_test_51JwYL4Jq0pXUuMFRnVDhRcsQg2L0wLBUwV1MZpNao2PN80jBzhjiOC4vVs5qOwjh3n3CTF1HLq3hoTGvS72xm0n400HwvtlcR0"
);

const Payment = () => {
  const { paymentId } = useParams();
  const [booking, setBooking] = useState({});

  console.log(booking);

  useEffect(() => {
    fetch(
      `https://mysterious-brook-12035.herokuapp.com/orders/pay/${paymentId}`
    )
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [paymentId]);
  return (
    <div>
      {booking.perfumePrice ? (
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "152px",
          }}
        >
          <ScaleLoader color={"#003665"} size={85} />
        </div>
      )}
    </div>
  );
};

export default Payment;
