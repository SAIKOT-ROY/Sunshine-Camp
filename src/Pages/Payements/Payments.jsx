import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";

const stripePromise = loadStripe(`${import.meta.env.VITE_Payement_Gateway_Pk}`);

const Payments = () => {
  const clData = useLoaderData();
  console.log(clData);

  return (
    <>
        <SectionTitle heading="Payment"></SectionTitle>
      <div className="bg-slate-200 w-1/3 p-10 rounded justify-center mx-auto items-center">
        <Elements stripe={stripePromise}>
          <CheckoutForm clData={clData} />
        </Elements>
      </div>
    </>
  );
};

export default Payments;
