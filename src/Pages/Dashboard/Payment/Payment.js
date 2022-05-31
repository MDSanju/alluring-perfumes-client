import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { paymentId } = useParams();
  const [booking, setBooking] = useState({});

  console.log(booking);

  useEffect(() => {
    fetch(`https://mysterious-brook-12035.herokuapp.com/orders/${paymentId}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [paymentId]);
  return (
    <div>
      <h2>Hello Payment: {booking.displayName}!</h2>
    </div>
  );
};

export default Payment;
