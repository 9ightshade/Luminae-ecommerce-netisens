import { CartContent } from "../components/cardCheckout/CartContent";
import { NavCheckout } from "../components/cardCheckout/Navcheckout";
import { OrderSummary } from "../components/cardCheckout/OrderSummary";
import { Recommendations } from "../components/cardCheckout/Recommendations";
import { Topnav } from "../components/shared/topnavbar";


export const Checkout = () => {
  return (
    <div>
      <Topnav/>
  <NavCheckout/>
      <div className="md:flex md:px-[2em] py-[2em] " >
        <CartContent /> <OrderSummary />
      </div>
      <Recommendations />
    </div>
  );
};
