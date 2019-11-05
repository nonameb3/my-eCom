import React from "react";
import StripeCheckout from "react-stripe-checkout";

// 3 party payment from stripe.com
export default function({ price }) {
  // your Publishable key
  const publicKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  console.log('publicKey', publicKey)
  const priceForStripe = price * 100;
  const onToken = token => {
    console.log("token", token);
    alert("successful payment!");
  };

  return (
    <StripeCheckout
      label="Pay now"
      panelLabel="Pay now"
      name="my-app"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Pay for $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publicKey}
    ></StripeCheckout>
  );
}
