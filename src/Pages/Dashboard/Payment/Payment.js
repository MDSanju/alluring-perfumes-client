import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { paymentId } = useParams();
  const [booking, setBooking] = useState({});

  console.log(booking);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/${paymentId}`)
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
