export const CustomerInfo = () => {
  return (
    <form className="p-[2em]">
      <h1 className="text-[#262626] text-[1.25rem] font-[700] mb-[1em] ">
        Customer Information
      </h1>
      <label htmlFor="email" className="text-[#555] text-[.8rem] font-[600]">
        E-mail
      </label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        id="customer_email"
        className="w-[100%] block rounded-[4px] border-[#D9D9D9] p-[.8em] border-[1px] bg-[#FFF]"
      />

      <section className="flex gap-[1.5em] mt-[1em] ">
        <label
          htmlFor="firstname"
          className="text-[#555] text-[.8rem] font-[600]"
        >
          First Name{" "}
          <input
            type="text"
            name=""
            id=""
            className="rounded-[4px] border-[#D9D9D9] w-[100%] border-[1px] bg-[#FFF]"
          />
        </label>

        <label
          htmlFor="lastname"
          className="text-[#555] text-[.8rem] font-[600]"
        >
          Last Name{" "}
          <input
            type="text"
            name=""
            id=""
            className="rounded-[4px] border-[#D9D9D9] w-[100%] border-[1px] bg-[#FFF]"
          />
        </label>
      </section>

      <h3 className="text-[#262626] text-[1rem] font-[700]">
        Shipping Address
      </h3>

      <label htmlFor="country">
        <select name="country" id="country" className="block w-[100%]" >
          <option value="Nigeria">Nigeria</option>
          <option value="Canada">Canada</option>
          <option value="Iceland">Iceland</option>
          <option value="Burmingham">Burmingham</option>
        </select>
      </label>
    </form>
  );
};
