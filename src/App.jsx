import "./App.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import { useState, createContext } from "react";

export const AppContext = createContext()

function App() {
  const [addedToCart , setAddedToCart] = useState(0)
  const [addedProducts , setAddedProducts] = useState([])
  return (
    <BrowserRouter>
      <AppContext.Provider value={{addedToCart, setAddedToCart, addedProducts, setAddedProducts}}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;

