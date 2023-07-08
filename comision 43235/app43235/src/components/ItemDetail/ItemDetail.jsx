import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useCart } from '../../Context/CartContex'
import { useNotification } from '../notification/notificationService'
import { Link } from 'react-router-dom'
import { Cart } from '../cart/Cart'


const ItemDetail = ({id,nombre, img, category, precio, stock})=>{

const [quantity,setQuantity]=useState(0)

const {addItem} = useCart()
const {setNotification}=useNotification()


const handleOnAdd = (quantity)=>{
    setQuantity(quantity)
    const objProduct ={
        id, nombre, precio, quantity
    }

    addItem(objProduct)
    setNotification('succes',`se agrego correctamente ${quantity} ${nombre} al carrito`)
}


    return(
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
        <p className='info'>stock:{stock}</p>
        <p className='info'>{category}</p>
    
    </section>
    <footer className='ItemFooter'>
        {
            quantity == 0
            ? (stock>0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <p>No hay stock del producto</p>)
            :<Link to={'/Cart'}>Finalizar compra</Link>
        }


    </footer>
    </article>
    )
}

export default ItemDetail