import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_0X00vueWhdmqMrT2YXo1moIS00gKIZyYWe';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            // token is needed for real payments
            // in this case we'll just put an alert in
            token={onToken}
            stripeKey={publishableKey}
            />
    )
};

export default StripeCheckoutButton;