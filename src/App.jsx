import { CartContent } from "./components/cardCheckout/CartContent";
import { OrderSummary } from "./components/cardCheckout/OrderSummary";
import { Recommendations } from "./components/cardCheckout/Recommendations";

function App() {
  return (
    <div>
      <CartContent />
      <OrderSummary />
      <Recommendations />
    </div>
  );
}

export default App;
