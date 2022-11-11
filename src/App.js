import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import Cart from "./components/Cart";

const App = () => {
  return(
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:idCategory' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </BrowserRouter>
  );
}


export default App;
