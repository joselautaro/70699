import { CartScreen } from './components/CartScreen/CartScreen';
import { CheckOut } from './components/CheckOut/CheckOut';
import { ItemCount } from './components/ItemCount/ItemCount';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Poke } from './components/Poke/Poke'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/contador' element={<ItemCount />} />
          <Route exact path='/poke' element={<Poke />} />
          <Route exact path='/cart' element={<CartScreen/>}/>
          <Route exact path='/check' element={<CheckOut/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
