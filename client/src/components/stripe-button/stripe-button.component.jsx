import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

// 3 party payment from stripe.com
export default function({ price }) {
  // your Publishable key
  const publicKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const priceForStripe = price * 100;
  const onToken = async token => {
    try {
      await axios.post("/api/payment", {
        token: token,
        amount: price
      });

      alert("success payment!");
    } catch (error) {
      console.log(error);
    }
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
    />
  );
}
