import './App.scss';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer';
import CartWidget from './components/CartWidget/CartWidget';
import User from './components/User/User';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './CartContext/CartContext';
import { UserContextProvider } from './UserContext/UserContext';
import { NotificationProvider } from './NotificationContext/NotificationContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <UserContextProvider>
          <NotificationProvider>
            <BrowserRouter>
              <header>
                <NavBar/>
                <CartWidget/>
              </header>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<CartContainer/>}/>
              <Route path='/user' element={<User/>}/>
              <Route path='/checkout/:orderId' element={<Checkout/>}/>
              <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
            </Routes>
            </BrowserRouter>
          </NotificationProvider>
        </UserContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
