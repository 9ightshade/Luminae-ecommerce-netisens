import luminae from "../../assets/images/icons/header/logo.png";

export const Logo = ({text}) => {
  return (
    <div className="flex gap-[.4rem] " >
      <div>
        <img src={luminae} alt="luminae Logo" />
      </div>
      <p className="text-[#000] text-[2rem] font-[700] leading-[1.5rem]" >{text}</p>
    </div>
  );
};