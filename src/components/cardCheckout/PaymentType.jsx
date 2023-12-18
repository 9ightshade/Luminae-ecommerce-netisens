import paypal from "../../assets/images/cartcheckout/Paypal.png"

export const PaymentType = () => {
    
    return (
      <div className="bg-[#F5F5F5] p-[2em] space-y-[1em] ">
        <hr className="h-[2px] w-[100%] bg-[#D9D9D9] " />
        <p className="text-[#555] text-[1rem] font-[400]">Payment method</p>
        <div className="flex justify-between">
          {" "}
          <h3 className="text-[#262626] text-[.8rem] font-[700] leading-[1.2rem]">
            Paypal
          </h3>
          <div>
            <img src={paypal} alt="payment method" />
          </div>
        </div>

        <hr className="h-[2px] w-[100%] bg-[#D9D9D9] " />
      </div>
    );


}