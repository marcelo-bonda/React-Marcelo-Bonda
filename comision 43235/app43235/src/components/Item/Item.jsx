import './Item.css'
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';


const Item = ({ id, nombre, img, precio, stock, categoria }) => {
    const [mostrarDetalle, setMostrarDetalle] = useState(false);

    const toggleDetalle = () => {
        setMostrarDetalle(!mostrarDetalle);
    };

    return (
        <div className="contenedor">
        <article className='CardItem'> 
          <header className='Header'>
            <h2 className='ItemHeader'>
              {nombre}
            </h2>
          </header>
          <picture>
            <img src={img} alt={nombre} className="ItemImg"/>
          </picture>
          <section>
            <p className="Info">
              ${precio}
            </p>
          </section>
          {mostrarDetalle && (
            <div className="Detalle">
                <p className="Info">
              Stock:{stock}
            </p>
                <p>
                    Categoria:{categoria}
                </p>
                <ItemCount initial={0} stock={stock} onAdd={(quantity)=>console.log('cantidad agregada',quantity)}/>
            </div>
          )}
          <footer className='ItemFooter'>
            <button className='Option' onClick={toggleDetalle}>
              {mostrarDetalle ? 'Ocultar detalle' : 'Ver detalle'}
            </button>
            
          </footer>
        </article>
      </div>
    );
  }
  
  export default Item;