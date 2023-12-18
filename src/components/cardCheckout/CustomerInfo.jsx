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

      <section className="flex justify-between gap-[1em]  mt-[1em] ">
        <label
          htmlFor="firstname"
          className="text-[#555] text-[.8rem] font-[600]"
        >
          First Name{" "}
          <input
            type="text"
            name=""
            id=""
            className="rounded-[4px] border-[#D9D9D9] p-[1em] w-[100%] border-[1px] bg-[#FFF]"
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
            className="rounded-[4px] border-[#D9D9D9] p-[1em] w-[100%] border-[1px] bg-[#FFF]"
          />
        </label>
      </section>

      <h3 className="text-[#262626] text-[1rem] font-[700] mt-[4em] ">
        Shipping Address
      </h3>

      <label htmlFor="country" className="text-[#555] text-[.8rem] font-[600]">
        Country
        <select name="country" id="country" className="block w-[100%] p-[1em] ">
          <option value="Nigeria">Nigeria</option>
          <option value="Canada">Canada</option>
          <option value="Iceland">Iceland</option>
          <option value="Burmingham">Burmingham</option>
        </select>
      </label>

      <label
        htmlFor="State/Region"
        className="text-[#555] text-[.8rem] font-[600]"
      >
        State/Region
        <select
          name="State/Region"
          id="State/Region"
          className="block w-[100%] p-[1em] "
        >
          <option value="Melborne">Melborne</option>
          <option value="Canada">Canada</option>
          <option value="Iceland">Iceland</option>
          <option value="Burmingham">Burmingham</option>
        </select>
      </label>

      <label
        htmlFor="Address"
        className="text-[#555] text-[.8rem] font-[600] block "
      >
        Address
        <input
          type="text"
          name="Address"
          id="Address"
          className="block p-[1em] rounded-[4px] border-[#D9D9D9] w-[100%] border-[1px] bg-[#FFF]"
        />
      </label>

      <label
        htmlFor="Phone Number"
        className="text-[#555] text-[.8rem] mt-[2em] font-[600] block "
      >
        Phone Number
        <input
          type="number"
          name="Phone_Number"
          id="Phone_Number"
          className="block w-[100%] rounded-[4px] border-[#D9D9D9] p-[1em] border-[1px] bg-[#FFF] "
        />
      </label>
    </form>
  );
};