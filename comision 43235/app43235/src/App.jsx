

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




function App() {
  

  return (
    
      <div className='App'>
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Regalos de diseño'} />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'} />}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              
              
            </Routes>
        </BrowserRouter>
      
      

      </div>
    
  )
}

export default App
