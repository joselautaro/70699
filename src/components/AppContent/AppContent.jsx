import React, {useContext} from "react";
import { CartScreen } from '../CartScreen/CartScreen';
import { CheckOut } from '../CheckOut/CheckOut';
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
import { NavBar } from '../NavBar/NavBar';
import { Poke } from '../Poke/Poke';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { DarkModeContext } from '../context/DarkModeProvider';
import { CartContext } from "../context/CartContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";


export const AppContent = () =>  {

    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)

    const {carrito} = useContext(CartContext)
  
    const style = {
      background: isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? '#fff' : '#333',
    };
  
    return (
  
      <div style={style}>
        <Router>
          <NavBar toggleDarkMode={toggleDarkMode}/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route exact path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route exact path='/contador' element={<ItemCount />} />
            <Route exact path='/poke' element={<Poke />} />
            <Route path="/cart" element={<CartScreen/>}/>
            <Route path="/check" element={carrito.length > 0 ? (<CheckOut/> ):( <Navigate to="/" replace/>)}/>
            <Route path="*" element={<Navigate to='/' replace/>}/>
          </Routes>
        </Router>
      </div>
  
    );
  }
  
  export default AppContent;
  