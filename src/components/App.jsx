import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Categories from './Categories';
import Cart from './Cart';
import Foods from './menu/Foods';
import FoodDetail from './menu/FoodDetail';
import Drinks from './menu/Drinks';
import DrinkDetail from './menu/DrinkDetail';

import '../styles/App.css';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/' element={ <Home/> } />
        <Route path='/categories' element={ <Categories /> } />
        <Route path='/foods' element={ <Foods /> } />
        {/* <Route path='/foods/:id' element={ <FoodDetail/> } /> */}
        <Route path='/drinks' element={ <Drinks /> } />
        {/* <Route path='/drinks/:id' element={ <DrinkDetail/> } /> */}
        {/* <Route path='/cart' element={ <Cart /> } /> */}

      </Routes>

    </div>
  );
}

export default App;

