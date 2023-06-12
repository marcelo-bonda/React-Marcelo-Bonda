

import './App.css';
import './components/cartWidget/cartwidget.css';
import './components/navbar/Navbar';
import NavBar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/navbar/Navbar.css';
import './components/ItemListContainer/ItemListContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/ItemListContainer/ItemListContainer.css'



function App() {
  

  return (
    
      <div className='App'>
      <NavBar/>
      <ItemListContainer greeting={'Regalos de diseño'}/>
      


      </div>
    
  )
}

export default App
