import search from "../../assets/images/icons/header/Search.svg";

export const Search = () => {
  return (
    <div className="p-[2em]">
      <div className="flex relative md:max-lg:w-[350px] lg:w-[280px] ">
        <input
          type="text"
          placeholder="Search Products"
          className="block w-[100%] m-auto border-gray-300 p-2 border rounded-md lg:h-[30px]"
        />
        <div className="">
          <select
            name=""
            id=""
            className="h-[40px] text-center border border-transparent absolute top-0 right-0 mr-[40px] mt-[1px] lg:text-[13px] lg:h-[28px]"
          >
            <option>All Categories</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="absolute right-0 mr-[10px] mt-[10px] lg:mt-[5px] ">
          <img src={search} alt="search" />
        </div>
      </div>
    </div>
  );
};
