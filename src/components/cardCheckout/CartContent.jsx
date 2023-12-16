import twopiecemango from "../../assets/images/cartcheckout/2-piece-mango.png";
import twopieceblack from "../../assets/images/cartcheckout/2-piece-black.png";
import twopieceblue from "../../assets/images/cartcheckout/2-piece-blue.png";
import yellow from "../../assets/images/cartcheckout/yellow.svg";
import blue from "../../assets/images/cartcheckout/blue.svg";
import black from "../../assets/images/cartcheckout/black.svg";
import minus from "../../assets/images/cartcheckout/Minus.svg";
import plus from "../../assets/images/cartcheckout/Plus.svg";
import trash from "../../assets/images/cartcheckout/trash.svg";

export const CartContent = () => {
  return (
    <section className="p-[2em]">
      <h1 className="text-[#262626] text-[1.2rem] mb-[1em] font-[700] leading-[1.5rem]">
        Card <span className="text-[#9D9D9D]  text-[1.1rem] font-[400]">3</span>
      </h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[1em]">
          <div>
            <img src={twopiecemango} alt="two piece mango" />
          </div>
          <div>
            <h3 className="text-[#262626] text-[.8rem] font-[700] leading-[1.2rem]">
              2 Piece Mango set- Regular fit
            </h3>
            <div className="flex">
              <p className="text-[#555] text-[.8rem] font-[400] leading[1.2rem]">
                Color:
              </p>
              <img src={yellow} alt="color" />
            </div>
          </div>
        </div>
        <p className="text-[#555] text-[.8rem] font-[400] leading-[1.2rem]">
          $25.99
        </p>
      </div>

      {/*add to cart, remove from cart and increase qauntity*/}

      <section className="flex justify-between py-[1em]">
        <div className="flex items-center gap-[1em] border-[#C4C4C4] border-[2px]">
          <img src={minus} alt="reduce qauntity" />
          <p>1</p>
          <img src={plus} alt="increase qauntity" />
        </div>
        <p className="text-[#555] text-[.8rem] font-[400] leading-[1.2rem]">
          $25.99
        </p>
        <div>
          {" "}
          <img src={trash} alt="remove item" />
        </div>
      </section>

      {/* second product display*/}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[1em]">
          <div>
            <img src={twopieceblack} alt="two piece mango" />
          </div>
          <div>
            <h3 className="text-[#262626] text-[.8rem] font-[700] leading-[1.2rem]">
              2 Piece Mango set- Regular fit
            </h3>
            <div className="flex">
              <p className="text-[#555] text-[.8rem] font-[400] leading[1.2rem]">
                Color:
              </p>
              <img src={black} alt="color black" />
            </div>
          </div>
        </div>
        <p className="text-[#555] text-[.8rem] font-[400] leading-[1.2rem]">
          $25.99
        </p>
      </div>

      {/*add to cart, remove from cart and increase qauntity*/}

      <section className="flex justify-between py-[1em]">
        <div className="flex items-center gap-[1em] border-[#C4C4C4] border-[2px]">
          <img src={minus} alt="reduce qauntity" />
          <p>1</p>
          <img src={plus} alt="increase qauntity" />
        </div>
        <p className="text-[#555] text-[.8rem] font-[400] leading-[1.2rem]">
          $25.99
        </p>
        <div>
          {" "}
          <img src={trash} alt="remove item" />
        </div>
      </section>

      {/* third product display*/}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[1em]">
          <div>
            <img src={twopieceblue} alt="two piece blue" />
          </div>
          <div>
            <h3 className="text-[#262626] text-[.8rem] font-[700] leading-[1.2rem]">
              2 Piece Mango set- Regular fit
            </h3>
            <div className="flex">
              <p className="text-[#555] text-[.8rem] font-[400] leading[1.2rem]">
                Color:
              </p>
              <img src={blue} alt="color" />
            </div>
          </div>
        </div>
        <p className="text-[#555] text-[.8rem] font-[400] leading-[1.2rem]">
          $25.99
        </p>
      </div>

      {/*add to cart, remove from cart and increase qauntity*/}

      <section className="flex justify-between py-[1em]">
        <div className="flex items-center gap-[1em] border-[#C4C4C4] border-[2px]">
          <img src={minus} alt="reduce qauntity" />
          <p>1</p>
          <img src={plus} alt="increase qauntity" />
        </div>
        <p className="text-[#555] text-[.8rem] font-[400] leading-[1.2rem]">
          $25.99
        </p>
        <div>
          {" "}
          <img src={trash} alt="remove item" />
        </div>
      </section>
    </section>
  );
};
