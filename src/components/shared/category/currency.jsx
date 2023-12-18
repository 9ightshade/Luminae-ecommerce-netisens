import React from "react";

export const Currency = () => {
  return (
    <div>
      <select
        name=""
        id=""
        className="flex gap-1 bg-black text-gray-300 text-[12px]"
      >
        <option value="">USD</option>
        <option value="">NGN</option>
        <option value="">YEN</option>
        <option value="">GBP</option>
      </select>
    </div>
  );
};
