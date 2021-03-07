/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_3nJP0W13GmBRgd1oFg0eqA1U00sxRCmi1B');

export const bookTour = async (tourId) => {
  try {
    // 1. get checkout session from the api
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    console.log(session);

    // 2. create checkout form + charge cedit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
