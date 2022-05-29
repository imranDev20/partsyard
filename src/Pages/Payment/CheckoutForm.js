import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { success } from "daisyui/src/colors";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [cardSuccess, setCardSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  console.log(order);
  const { price, name, email } = order;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/create-payment-intent`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

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

    setCardError(error?.message || "");
    setCardSuccess("");

    // Confirm card Payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setCardSuccess("");
    } else {
      setCardError("");
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setCardSuccess("Congrats! Your payment is completed");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button
          className="btn btn-sm"
          type="submit"
          disabled={!stripe || !elements || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500 text-sm">{cardError}</p>}
      {cardSuccess && (
        <p className="text-green-500 text-sm">
          {cardSuccess}. TxID: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
