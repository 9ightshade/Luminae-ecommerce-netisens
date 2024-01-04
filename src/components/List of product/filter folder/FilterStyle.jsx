import React from "react";

export const FilterStyle = () => {
  return (
    <div>
      <p className="font-bold text-[15px] my-[10px]">STYLE</p>
      <div className="mb-1">
        <div className="gap-2">
          <input type="checkbox" name="" id="Casual" className="mr-[7px]" />
          <label htmlFor="Casual">Casual</label>
        </div>

        <div className="mb-1">
          <input
            type="checkbox"
            name=""
            id="Business casual"
            className="mr-[7px]"
          />
          <label htmlFor="Business casual">Business casual</label>
        </div>

        <div className="mb-1">
          <input type="checkbox" name="" id="Bohemian" className="mr-[7px]" />
          <label htmlFor="Bohemian">Bohemian</label>
        </div>

        <div className="mb-1">
          <input type="checkbox" name="" id="Minimalist" className="mr-[7px]" />
          <label htmlFor="Minimalist">Minimalist</label>
        </div>

        <div className="mb-1">
          <input type="checkbox" name="" id="Uniqlo" className="mr-[7px]" />
          <label htmlFor="Uniqlo">Uniqlo</label>
        </div>

        <div className="mb-1">
          <input type="checkbox" name="" id="Zara" className="mr-[7px]" />
          <label htmlFor="Zara">Zara</label>
        </div>

        <div className="mb-1">
          <input type="checkbox" name="" id="Gucci" className="mr-[7px]" />
          <label htmlFor="Gucci">Gucci</label>
        </div>

        <div className="mb-1">
          <input type="checkbox" name="" id="Mango" className="mr-[7px]" />
          <label htmlFor="Mango">Mango</label>
        </div>

        <div className="mb-1">
          <input
            type="checkbox"
            name=""
            id="Ralph Lauren"
            className="mr-[7px]"
          />
          <label htmlFor="Ralph Lauren">Ralph Lauren</label>
        </div>

        <div className="mb-1">
          <input
            type="checkbox"
            name=""
            id="Calvin Klein"
            className="mr-[7px]"
          />
          <label htmlFor="Calvin Klein">Calvin Klein</label>
        </div>
      </div>
    </div>
  );
};
