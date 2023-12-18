// import { CartContent } from "../components/cardCheckout/CartContent";
// import { CustomerInfo } from "../components/cardCheckout/CustomerInfo";
import { NavCheckout } from "../components/cardCheckout/Navcheckout";
import { OrderSummary } from "../components/cardCheckout/OrderSummary";
import { Recommendations } from "../components/cardCheckout/Recommendations";
import { Shipping } from "../components/cardCheckout/Shipping";
import { Topnav } from "../components/shared/topnavbar";


export const Checkout = () => {
  return (
    <div>
      <Topnav/>
  <NavCheckout/>
      <div className="md:flex justify-center gap-[2em] md:px-[2em] py-[2em] " >
        <Shipping/> <OrderSummary />
      </div>
      <Recommendations />
    </div>
  );
};
