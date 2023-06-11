import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import "./CheckoutForm.css";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useEffect } from "react";
import axiosSecure from "../../Hooks/useAxioxSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({clData}) => {
  const {user} = useContext(AuthContext)
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if(clData?.price){
        axiosSecure.post('/create-payment-intent', {price: clData?.price})
        .then(res => {
            // console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret)
        })
    }
   
  },[clData])

//   console.log("kali naki", clData)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setCardError("");
    }
    // confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: card,
            billing_details:{
                name: user?.displayName || 'unknown',
                email: user?.email
            },
        },
    })
    if(confirmError){
        console.log('[error]', confirmError);
        setCardError(confirmError.message)
    }
    else{
        console.log('paymentIntent',paymentIntent);
        if(paymentIntent.status === 'succeeded'){
            const paymentInfo = {
                ...clData, 
                transactionId: paymentIntent.id,
                date: new Date()
            }
            axiosSecure.put(`/dashboard/enrolled/${clData._id}`, paymentInfo)
            .then(res => {
                console.log(res.data);
                const text = `Payment Successful, TransactionId : ${paymentIntent.id}`
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: text,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate('/dashboard/enrolled')
            })
            .catch(err => console.log(err))
        }
    }


  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn bg-green-500 font-bold btn-sm btn-success"
          type="submit"
          disabled={!stripe}
        >
          Pay $<span>{clData?.price}</span>
        </button>
      </form>
      {cardError && <p className="text-red-600 font-bold ml-5 font-mono mt-3">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
