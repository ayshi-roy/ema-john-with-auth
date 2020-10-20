import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
// import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51HZxD7CcVWdDuoIWH9P3Gk6fcFsCxhV5ICnaPZ9DOyiHh42RU6N7yIzpqaSXWx8KFlzMDJFwFhZ6AdS73EFMINS900yqjlN2Be');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
            {/* <SplitCardForm></SplitCardForm> */}
        </Elements>
    );
};

export default ProcessPayment;