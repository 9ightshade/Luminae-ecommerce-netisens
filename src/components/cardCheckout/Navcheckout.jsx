export const NavCheckout = () => {
  return (
    <div>
      <div className="flex justify-between mx-[auto] p-[1em] md:w-[80%] lg-[50%]">
        <p className="hover:text-[#262626] hover:text-[.8rem] transition-all font-[700] uppercase text-[#9D9D9D] text-[.6rem]">
          Card(3)
        </p>
        <p className="hover:text-[#262626] hover:text-[.8rem] transition-all  font-[700] uppercase text-[#9D9D9D] text-[.6rem]">
          Customer info
        </p>
        <p className="hover:text-[#262626] hover:text-[.8rem] transition-all  font-[700] uppercase text-[#9D9D9D] text-[.6rem]">
          Shipping & Payment
        </p>
        <p className="hover:text-[#262626] hover:text-[.8rem] transition-all  font-[700] uppercase text-[#9D9D9D] text-[.6rem]">
          Product confirmation
        </p>
      </div>
      <hr className="border-[#D9D9D9] border-[1px] w-[100%] lg:w-[85%] mx-[auto] " />
    </div>
  );
};
