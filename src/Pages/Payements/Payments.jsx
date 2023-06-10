import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(`${import.meta.env.VITE_Payement_Gateway_Pk}`);

const Payments = () => {
    return (
        <div>
            <h2>This is payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payments;