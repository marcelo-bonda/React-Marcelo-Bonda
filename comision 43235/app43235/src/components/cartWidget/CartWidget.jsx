import cart from './assets/cart.png'
import { useCart } from '../../Context/CartContex'


const CartWidget = ()=>{
    const {totalQuantity} = useCart()
    return(
        <div>
<img className='carrito' src={cart} alt="cartWidget" />
{totalQuantity}
        </div>
    )
}

export default CartWidget