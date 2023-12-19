import RaceCouriers from "../../assets/images/cartcheckout/RaceCouriers.png";

export const ShippingCompany = () => {
  return (
    <div className="bg-[#F5F5F5] space-y-[1em] p-[2em] ">
      <p className="text-[#555] text-[1rem] font-[400] mb-[1em] ">
        Shipping company
      </p>
      <div className="flex items-center justify-between">
        <p className="text-[#262626] text-[.8rem] font-[700] leading-[1.2rem]">
          RaceCouriers
        </p>
        <div className="w-[2em]">
          <img src={RaceCouriers} alt="" className="w-[100%]" />
        </div>
      </div>

      <div className="flex justify-between ">
        <p className="text-[#555] text-[.8rem] font-[400]">Name</p>
        <p className="text-[#262626] text-[.8rem] font-[400]">Saina Ghasemi</p>
      </div>

      <div className="flex justify-between ">
        <p className="text-[#555] text-[.8rem] font-[400]">Country</p>
        <p className="text-[#262626] text-[.8rem] font-[400]">Australia</p>
      </div>

      <div className="flex justify-between ">
        <p className="text-[#555] text-[.8rem] font-[400]">Address</p>
        <p className="text-[#262626] text-[.8rem] font-[400]">
          10 Beach Street, 2281
        </p>
      </div>

      <div className="flex justify-between ">
        <p className="text-[#555] text-[.8rem] font-[400]">City</p>
        <p className="text-[#262626] text-[.8rem] font-[400]">Melborne</p>
      </div>

      <div className="flex justify-between ">
        <p className="text-[#555] text-[.8rem] font-[400]">Phone</p>
        <p className="text-[#262626] text-[.8rem] font-[400]">(02) 5551 5678</p>
      </div>
    </div>
  );
};
