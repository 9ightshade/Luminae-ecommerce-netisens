import { CartContent } from "../components/cardCheckout/CartContent";
import { OrderSummary } from "../components/cardCheckout/OrderSummary";
import { Recommendations } from "../components/cardCheckout/Recommendations";

export const Checkout = () => {
  return (
    <div>
      <div className="md:flex md:px-[2em] py-[2em] " >
        <CartContent /> <OrderSummary />
      </div>
      <Recommendations />
    </div>
  );
};
