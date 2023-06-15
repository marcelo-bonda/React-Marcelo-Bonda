import './Item.css'
import { Link, useNavigate } from 'react-router-dom';


const Item = ({id, nombre, img, precio})=>{
const navigate=useNavigate()

return (
  <div onClick={()=>navigate(`/item/${id}`)} className='contenedor'>
    <article className='CardItem'>
    <header className='header'>
      <h2 className='ItemHeader'>
        {nombre}
      </h2>
    </header>
    <picture>
      <img src={img}  alt={nombre} className="ItemImg" />
    </picture>
    <section>
      <p className="Info">${precio}</p>
      
    </section>
    <footer className='ItemFooter'>
      <Link to={`/item/${id}`}>ver detalle</Link>
    </footer>
  </article>
  </div>
)

}


  export default Item;