import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import Cart from "./components/Cart";
import CartContextProvider  from "./components/CartContext";
import Hero from "./components/Hero";
import Carrusel from "./components/Carrusel";

const App = () => {
  return(
    
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Carrusel/>
        <Routes>
        <Route/>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Hero/>
    </BrowserRouter>
    </CartContextProvider>
  );
}


export default App;
