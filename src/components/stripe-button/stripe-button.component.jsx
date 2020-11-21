import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // Stripe requires price in cents
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HVOdWDZOFjnIvbvFEIEBMXyjCamTmVIYc4YNxDVrpoDN7mgHGkdAx8ozZcjntRQ9RAMa2Hh9BwY0qYq8G5YP4ue00pqqGPrsz";

  // TODO: hook up backend
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Whiskey Clothes, Inc."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
