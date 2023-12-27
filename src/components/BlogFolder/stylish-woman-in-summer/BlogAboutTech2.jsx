import React from "react";
import messageicon from "../../../assets/images/blog-images/messageicon.png";
import watch from "../../../assets/images/blog-images/watch.png";


export const BlogAboutTech2 = () => {
  return (
    <div>
      <div className="bg-white shadow pb-[10px] w-[187.5px] md:w-[150px]">
        <img className="block md:hiddem" src={watch} />
       

        <div className="m-2">
          <p className="text-[12px] py-2 text-orange-500">tech</p>
          <p className="text-[15px] font-bold">Anker 325 power bank </p>
          <p className="text-[14px] font-normal text-neutral-600 ">
            Anker is a well-known brand for power banks and other electronic
            accessories, and they offer a wide range of power bank models with
            varying capacities, features, and specifications. To find detailed
            information...
          </p>
        </div>

        <div className="flex items-center justify-start gap-3 m-2 my-[10px]">
          <p className="text-[12px] text-neutral-600">4 hours ago</p>

          <div className="flex items-center gap-2 ">
            <img src={messageicon} alt="" />
            <p className="text-[12px] text-neutral-600">10</p>
          </div>
        </div>
      </div>
    </div>
  );
};
