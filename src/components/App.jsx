import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Categories from './Categories';
import Cart from './Cart';
import Foods from './menu/Foods';
import Drinks from './menu/Drinks';
import Login from './dashboard/Login';
import HomeDash from './dashboard/HomeDash';

import '../styles/App.css';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path='/' element={ <Home/> } />
        <Route path='/categories' element={ <Categories /> } />
        <Route path='/foods' element={ <Foods /> } />
        <Route path='/drinks' element={ <Drinks /> } />
        <Route path='/cart' element={ <Cart /> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/dashboard' element={ <HomeDash/> } />

      </Routes>

    </div>
  );
}

export default App;

