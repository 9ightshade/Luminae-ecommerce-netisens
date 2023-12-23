// import { CartContent } from "../components/cardCheckout/CartContent";
// import { CustomerInfo } from "../components/cardCheckout/CustomerInfo";
// import { ConfirmProduct } from "../components/cardCheckout/CartContent";
import { NavCheckout } from "../components/cardCheckout/Navcheckout";
import { OrderSummary } from "../components/cardCheckout/OrderSummary";
import { Recommendations } from "../components/cardCheckout/Recommendations";
import { PaymentMethod, Shipping } from "../components/cardCheckout/Shipping";
import { Footer } from "../components/footer/footer";
import { Topnav } from "../components/shared/topnavbar";

export const Checkout = () => {
  return (
    <div>
      <Topnav />
      <NavCheckout />
      <div className="md:flex items-start justify-between gap-[2em] p-[2em] ">
        <div className="basis-[50%] md:flex">
          {/* <ConfirmProduct/> */}
          <div className="basis-[50%]">
            {" "}
            <PaymentMethod />
          </div>
          <div className="basis-[50%]">
            <Shipping />
          </div>
        </div>

        <div className="basis-[50%]" >
          {" "}
          <OrderSummary />
        </div>
      </div>
      <Recommendations />
      <Footer/>
    </div>


  
  );
};
