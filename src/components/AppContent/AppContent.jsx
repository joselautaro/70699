import React, {useContext} from "react";
import { CartScreen } from '../CartScreen/CartScreen';
import { CheckOut } from '../CheckOut/CheckOut';
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
import { NavBar } from '../NavBar/NavBar';
import { Poke } from '../Poke/Poke';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { DarkModeContext } from '../context/DarkModeProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export const AppContent = () =>  {

    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)
  
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
            <Route exact path='/cart' element={<CartScreen />} />
            <Route exact path='/check' element={<CheckOut />} />
          </Routes>
        </Router>
      </div>
  
    );
  }
  
  export default AppContent;
  