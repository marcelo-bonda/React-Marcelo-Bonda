import { useCart } from "../../Context/CartContex"
import { addDoc } from "firebase/firestore"

const Checkout = ()=>{

    const {cart, total}=useCart()

    const createOrder = () =>{
            const objOrder = {
                buyer:{
                    name:'',
                    phone:'',
                    email:''
                },
                items: cart,   
                total
            };
            const db
            
    }
    return(
        <>
        <h1>Checkout</h1>
        <h2>Formulario</h2>
        <button onClick={createOrder}>Generar orden de compra</button>

        </>
    )
}

export default Checkout