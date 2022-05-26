import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { CheckoutForm } from './Admin/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

export const Payment = () => {
  const location = useLocation();
  const { orderId, quantity, total, ordererName, ordererEmail, productName } = location?.state;

  return (
    <section className="py-10 px-8 xl:px-20 flex flex-col items-center pt-20">
      <h1 className="text-lg lg:text-xl font-medium text-neutral mb-5 -mt-4">
        Confirm your order for &mdash; {productName}
      </h1>

      <div className="relative block p-8 border-t-4 border-gray-700 rounded-sm shadow-xl w-full max-w-[460px]">
        <h5 className="text-lg text-gray-600">
          <span className="font-medium">Name:</span> {productName}
        </h5>
        <div className="grid grid-cols-2">
          <h5 className="text-lg text-gray-600 mt-2">
            <span className="font-medium"> Quantity ordered:</span> {quantity}
          </h5>
          <h5 className="text-lg text-gray-600 mt-2">
            <span className="font-medium"> Total:</span> ${total?.toFixed(2)}
          </h5>
        </div>
      </div>

      <div className="relative block p-8 border-t-4 border-gray-700 rounded-sm shadow-xl w-full max-w-[460px]">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            orderId={orderId}
            total={total}
            ordererName={ordererName}
            ordererEmail={ordererEmail}
          />
        </Elements>
      </div>
    </section>
  );
};
