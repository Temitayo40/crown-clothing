import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey =
    "pk_test_51MdJpZHq6giGulnT0usIKoZwzvbOAV6nSJfakmeC1OH7QShiVwhrAS5NPdL3gR06Kls9xk2KFvtJPorXO8fVztI800cReCqLG3";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown  Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeCheckoutButton;
