import paypal from "../../assets/images/cartcheckout/Paypal.png";
import mastercard from "../../assets/images/cartcheckout/MasterCard.png";
import bitcoin from "../../assets/images/cartcheckout/bitcoin.png";
import AUSFF from "../../assets/images/cartcheckout/AUSFF.png";
import RaceCouriers from "../../assets/images/cartcheckout/RaceCouriers.png";
import TranscoCargo from "../../assets/images/cartcheckout/TranscoCargo.gif";
export const PaymentMethod = () => {
  return (
    <section className="p-[1em] flex flex-col gap-[1em]">
      <h2 className="text-[#262626] text-[1.2rem] font-[700]">Payment</h2>
      <p className="text-[#555] text-[.8rem] font-[400]">
        Please choose a payment metod
      </p>

      {/*first payment method*/}
      <section className="flex justify-between items-start gap-[.5em] p-[2em] rounded-[4px] bg-[#E9E9E9]">
        <input type="radio" name="payment" id="payment_method" />
        <div>
          <div className="flex justify-between gap-[1em]">
            <h3 className="text-[#262626] text-[.8rem] font-[700]">Paypal</h3>
            <div className="bg-white p-[.3em] w-[3em] max-w-[4em]">
              <img src={paypal} alt="Payment paypal" className="w-[100%]" />
            </div>
          </div>
          <p className="text-[#555] text-[.6rem] mt-[1em] font-[400]">
            PayPal is a trusted online payment platform that allows individuals
            and businesses to securely send and receive money electronically.
          </p>
        </div>
      </section>

      {/*second payment method */}
      <section className="flex justify-between items-start gap-[.5em] p-[2em] rounded-[4px] bg-[#E9E9E9]">
        <input type="radio" name="payment" id="payment_method" />
        <div>
          <div className="flex gap-[1em] justify-between">
            <h3 className="text-[#262626] text-[.8rem] font-[700]">
              Mastercard
            </h3>
            <div className="bg-white p-[.3em] w-[3em] max-w-[4em]">
              <img
                src={mastercard}
                alt="Payment mastercard"
                className="w-[100%]"
              />
            </div>
          </div>
          <p className="text-[#555] text-[.6rem] mt-[1em] font-[400]">
            PayPal is a trusted online payment platform that allows individuals
            and businesses to securely send and receive money electronically.
          </p>
        </div>
      </section>

      {/*third payment method*/}

      <section className="flex justify-between items-start gap-[.5em] p-[2em] rounded-[4px] bg-[#E9E9E9]">
        <input type="radio" name="payment" id="payment_method" />
        <div>
          <div className="flex gap-[1em] justify-between">
            <h3 className="text-[#262626] text-[.8rem] font-[700]">Bitcoin</h3>
            <div className="bg-white p-[.3em] w-[3em] max-w-[4em]">
              <img src={bitcoin} alt="Payment bitcoin" className="w-[100%]" />
            </div>
          </div>
          <p className="text-[#555] text-[.6rem] mt-[1em] font-[400]">
            PayPal is a trusted online payment platform that allows individuals
            and businesses to securely send and receive money electronically.
          </p>
        </div>
      </section>
    </section>
  );
};

{
  /*shipping */
}
export const Shipping = () => {
  return (
    <section className="p-[1em] flex flex-col gap-[1em]">
      <h2 className="text-[#262626] text-[1.2rem] font-[700]">Shipping</h2>
      <p className="text-[#555] text-[.8rem] font-[400]">
        Please choose a shipping company based on your region
      </p>

      {/*first shipping method*/}
      <section className="flex items-start w-[100%] gap-[.5em] p-[2em] rounded-[4px]  bg-[#E9E9E9]">
        <input type="radio" name="payment" id="payment_method" />
        <div className="w-[100%]">
          <div className="flex gap-[1em] justify-between">
            <h3 className="text-[#262626] text-[.8rem] font-[700]">AUSFF</h3>
            <div className="bg-white p-[.3em] w-[4em] max-w-[6em] ">
              <img
                src={AUSFF}
                alt="shipping by ausff"
                className="w-max-[100%]"
              />
            </div>
          </div>
          <p className="text-[#555] text-[.6rem] mt-[1em] font-[400]">
            Delivery time: 14-21 days
          </p>
          <p className="text-[#555] text-[.6rem] mt-[1em] font-[400]">
            Shipping cost: Free
          </p>
          <p className="text-[#555] text-[.6rem] mt-[1em] font-[400]">
            Insurance: <span className="text-[#FF2E00]">Unavailable</span>
          </p>
        </div>
      </section>

      {/*second shipping method */}
      <section className="flex items-start gap-[.5em] p-[2em] rounded-[4px] bg-[#E9E9E9]">
        <input type="radio" name="payment" id="payment_method" />
        <div className="w-[100%] ">
          <div className="flex gap-[1em] justify-between">
            <h3 className="text-[#262626] text-[.8rem] font-[700]">
              RaceCouriers
            </h3>
            <div className="bg-white p-[.3em] w-[4em] max-w-[6em]">
              <img
                src={RaceCouriers}
                alt="shipping by race couriers"
                className="w-[100%]"
              />
            </div>
          </div>
          <p className="text-[#555] text-[.6rem] mt-[1em] font-[400]">
            Delivery time: 14-21 days
          </p>
          <p className="text-[#555] text-[.6rem] mt-[1em] font-[400]">
            Shipping cost: $10
          </p>
          <p className="text-[#555] text-[.6rem] mt-[1em] font-[400]">
            Insurance: <span className="text-[#00A95D]">Unavailable</span>
          </p>
        </div>
      </section>

      {/*third shipping method*/}

      <section className="flex items-start gap-[.5em] p-[2em] rounded-[4px] bg-[#E9E9E9]">
        <input type="radio" name="payment" id="payment_method" />
        <div className="w-[100%] ">
          <div className="flex gap-[1em] justify-between">
            <h3 className="text-[#262626] text-[.8rem] font-[700]">
              TranscoCargo
            </h3>
            <div className="bg-white w-[4em] max-w-[6em] p-[.3em]">
              <img
                src={TranscoCargo}
                alt="shipping by race couriers"
                className="max-w-[100%]"
              />
            </div>
          </div>
          <p className="text-[#555] text-[.6rem] mt-[1em] font-[400]">
            Delivery time: 14-21 days
          </p>
          <p className="text-[#555] text-[.6rem] mt-[1em] font-[400]">
            Shipping cost: $12
          </p>
          <p className="text-[#555] text-[.6rem] mt-[1em] font-[400]">
            Insurance: <span className="text-[#00A95D]">Unavailable</span>
          </p>
        </div>
      </section>
    </section>
  );
};
