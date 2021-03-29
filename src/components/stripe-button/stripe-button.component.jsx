import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IaK9HJoU7ZP3lCfHwi3qyWtd0KzrHmMNqCcLiJl9LP56fLy8BaKPDlWuWlw3SZzmWrnlm6uaK7INYHAdgLoPWfl00z5kBhy5A";

    const onToken = token => {
        console.log(token);
        alert("Payment Succesful");
    };

    return (
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;