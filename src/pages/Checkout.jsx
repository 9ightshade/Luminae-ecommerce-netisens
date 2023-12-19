// import { CartContent } from "../components/cardCheckout/CartContent";
// import { CustomerInfo } from "../components/cardCheckout/CustomerInfo";
// import { ConfirmProduct } from "../components/cardCheckout/CartContent";
import { NavCheckout } from "../components/cardCheckout/Navcheckout";
import { OrderSummary } from "../components/cardCheckout/OrderSummary";
import { Recommendations } from "../components/cardCheckout/Recommendations";
import { PaymentMethod, Shipping } from "../components/cardCheckout/Shipping";
import { Topnav } from "../components/shared/topnavbar";

export const Checkout = () => {
  return (
    <div>
      <Topnav />
      <NavCheckout />
      <div className="md:flex justify-center items-start gap-[2em] p-[2em] ">
        <div className="basis-[70%] md:flex">
          {/* <ConfirmProduct/> */}
          <div className="basis-[50%]">
            {" "}
            <PaymentMethod />
          </div>
          <div className="basis-[50%]">
            <Shipping />
          </div>
        </div>

        <div className="basis-[30%]" >
          {" "}
          <OrderSummary />
        </div>
      </div>
      <Recommendations />
    </div>
  );
};
