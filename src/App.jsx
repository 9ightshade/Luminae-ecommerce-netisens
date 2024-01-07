// import { ProductFilter } from "./components/List of product/filter folder/ProductFilter";
import { useState } from "react";
import { Home } from "./pages/Home";
import { MyContext } from "./MyContext";
import { ListOfProduct } from "./pages/ListOfProduct";



function App() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  return (
    <div>
      {/* <MyContext.Provider value={{email, setEmail,password, setPassword }}> */}
      <Home/>
      {/* <ListOfProduct/>  */}
      {/* <ProductFilter/> */}
      {/* </MyContext.Provider> */}
    </div>
  );
}

export default App;
