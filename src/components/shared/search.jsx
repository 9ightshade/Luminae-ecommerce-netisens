import search from "../../assets/images/icons/header/Search.png";

export const Search = () => {




  return (
    <div className=" border rounded">
      <div className="flex justify-start items-center md:max-lg:w-[350px] lg:w-[280px] mx-[15px] ">
        <input
          type="text"
          placeholder="Search Products"
          className="justify-start w-[60%] border-gray-300 p-2 lg:h-[30px]"
        />
        <div className="">
          <select
            name=""
            id=""
            className="h-[40px] text-center border border-transparent mr-[40px] mt-[1px] lg:text-[13px] lg:h-[28px]"
          >
            <option>All Categories</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className=" mr-[10px] lg:mt-[5px] ">
          <img src={search} alt="search" />
        </div>
      </div>
    </div>
  );
};
