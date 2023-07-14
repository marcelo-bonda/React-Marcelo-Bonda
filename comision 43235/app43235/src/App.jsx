

import './App.css';
import './components/cartWidget/cartwidget.css';
import './components/navbar/Navbar';
import NavBar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/navbar/Navbar.css';
import './components/ItemListContainer/ItemListContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/ItemListContainer/ItemListContainer.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { CartProvider } from './Context/CartContex';
import { NotificationProvider } from './components/notification/notificationService';
import { Cart } from './components/cart/Cart'
import  Checkout  from './components/checkout/Checkout'





function App() {
  
  return (
    
      <div className='App'>
        <BrowserRouter>
        <NotificationProvider>
        <CartProvider>
            <NavBar/>
            
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Regalos de diseño'} />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'} />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<h1>< Cart /></h1>}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='*' element={<h1>404 not found</h1>}/>
            </Routes>
            </CartProvider>
            </NotificationProvider>
        </BrowserRouter>
      
      

      </div>
    
  )
}

export default App
