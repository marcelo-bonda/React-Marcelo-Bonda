import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useCart } from "../../Context/CartContex"
import { db } from "../Service/firebaseConfig"
import { useNotification } from "../notification/notificationService"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const { setNotification } = useNotification()

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
        const objOrder = {
            buyer: {
                name: 'marcelo bonda',
                phone: '1231412412',
                email: 'marcelo.pf16@gmail.com'
            },
            items: cart,
            total
        }

        try {
            const ids = cart.map(prod => prod.id)

            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

        
            const { docs } = await getDocs(productsRef)

            const batch = writeBatch(db)

            const outOfStock = []

            docs.forEach(doc => {
                const fieldsDoc = doc.data()
                const stockDb = fieldsDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                

                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fieldsDoc})
                }
            })

            if(outOfStock.length === 0) {
                batch.commit()

                const ordersRef = collection(db, 'orders')

                const { id } = await addDoc(ordersRef, objOrder)

                setNotification('success', 'La orden fue generada correctamente, el id es: ' + id)
                clearCart()
                navigate('/')
            } else {
                setNotification('error', 'hay productos que no tienen stock')
            }
        } catch (error) {
            setNotification('error', 'hubo un error en la generacion de la orden')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return (
            <h1>Se esta generando su orden...</h1>
        )
    }

    return (
        <>
            <h1>Checkout</h1>
            <h2>Formulario</h2>
            <button onClick={createOrder}>Generar orden de compra</button>
        </>
    )
}

export default Checkout