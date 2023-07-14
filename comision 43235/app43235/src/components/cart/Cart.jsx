import { Link } from "react-router-dom"
import { useCart } from "../../Context/CartContex"


export const Cart = ()=>{
    const { cart, total} =useCart() 

    return (
        <>
        <h1>Cart</h1>
        {
            cart.map(prod =>{
                return(
                    <div key={prod.id}>
                        <h2>{prod.nombre}</h2>
                        <h3>{prod.precio}</h3>
                        <h3>cantidad:{prod.quantity}</h3>
                        <h3>subtotal:{prod.quantity * prod.precio}</h3>
                    </div>
                )
            })
        }
        <h1>Total de la compra :$ {total}</h1>
        <Link to={'/checkout'}>Checkout</Link>
        </>
    )
}

