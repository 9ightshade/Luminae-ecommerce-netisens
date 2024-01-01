import React from 'react'

export const PeoplesReviewArticle = () => {
  return (
    <div>
      <div className="mt-[30px]">
        <div className="flex gap-2 items-center mb-[10px]">
          <p className="text-[#9D9D9D] w-[100px] text-[14px ">Advantage</p>
          <p className="text-[13px] font-bold">Color, Sizes</p>
        </div>

        <div className="flex gap-2 items-center mb-[10px]">
          <p className="text-[#9D9D9D] text-[14px] w-[100px] border">
            Disadvantages
          </p>
          <p className="text-center w-[80px]">-</p>
        </div>

        <div className="items-baseline gap-2 mb-[10px]">
          <p className="text-[#9D9D9D] w-[100px] text-[14px] mb-[5px]">
            Review
          </p>
          <p className="text-[13px] ">
            What sets 5 Star Cloth apart from other brands is their ability to
            create timeless pieces that never go out of style. Their designs are
            sophisticated and elegant, catering to individuals who appreciate
            refined fashion. Whether it's a formal event or a casual outing,
            their clothing effortlessly elevates any ensemble.
          </p>
        </div>
      </div>
    </div>
  );
}
