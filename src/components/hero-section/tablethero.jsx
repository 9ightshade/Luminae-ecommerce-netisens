export const Tabletheadercard = ({heading, paragraph, shopnow, image}) => {
  return (
    <>
      <div className="w-full h-20vh hidden border-none md:max-lg:flex mt-[15px]">
        <div className="w-1/2 lg:w-2/5">
          <img className="w-full h-full" src={image} alt="" />
        </div>
        <div className="w-1/2 text-center border-none leading-8 bg-blue-400 text-white items-center justify-center ">
          <div className="w-[350px] text-center justify-center block m-auto ">
            <h1 className="mb-8 text-2xl pt-12 font-bold md:py-20 md:pb-2 lg:text-4xl lg:pb-0 m-[auto] px-[50px] ">
              {heading}
            </h1>
            <p className="text-xl leading-10 pl-16 mb-4 pr-16">{paragraph}</p>
            <a href="">
              <p
                className=" w-[170px] content-center items-center m-auto pl-[3px] pr-[3px] pt-[3px] pb-[3px]  text-[12px] border border-none mb-6 bg-blue-500"
                href="/"
              >
                {shopnow}
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
