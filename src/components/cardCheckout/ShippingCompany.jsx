import RaceCouriers from "../../assets/images/cartcheckout/RaceCouriers.png";

export const ShippingCompany = () => {
  return (
    <div className="bg-[#F5F5F5] p-[2em] ">
      <p className="text-[#555] text-[1rem] font-[400] mb-[1em] ">Shipping company</p>
      <div className="flex items-center justify-between" >
        <p className="text-[#262626] text-[.8rem] font-[700] leading-[1.2rem]">
          RaceCouriers
        </p>
        <div className="w-[2em]" >
          <img src={RaceCouriers} alt="" className="w-[100%]" />
        </div>
      </div>
    </div>
  );
};
