/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51IBMXUCIZDOLiVrbnTUvW9j0wLH3zQl2LcuujGtKDTKkrcKkA6fknDEnEntNP0k6hTfCu4aasugkIfEPECGvhhlP003EyPfYa6'
);

export const bookTour = async (tourId) => {
  try {
    // 1. get checkout session from the api
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2. create checkout form + charge cedit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
