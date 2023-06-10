import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(`${import.meta.env.VITE_Payement_Gateway_Pk}`);

const Payments = () => {

    const clData = useLoaderData();
    console.log(clData);

  return (
    <div>
      <h2>This is payment</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm clData={clData} />
      </Elements>
    </div>
  );
};

export default Payments;
