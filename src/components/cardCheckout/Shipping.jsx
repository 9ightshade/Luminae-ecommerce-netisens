import paypal from "../../assets/images/cartcheckout/Paypal.png"

export const Shipping = () => {
    
    return (
    
        <section>
          <section>
            <h1 className="">Payment </h1>
            <p>Please choose a payment metod</p>
            <div>
              <input type="radio" name="" id="" />
              <div>
                <p>Paypal</p>
                <div>
                  <img src={paypal} alt="paypal" />
                </div>
              </div>
            </div>
          </section>
        </section>
      
    );


}