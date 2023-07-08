import { useEffect, useState, } from "react";
// import { getProductByCategory, getProducts } from "../asynkmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../components/Service/firebaseConfig"




const ItemListContainer  = ({greeting})=>{
    const [products, setProducts] =useState([])
    const {categoryId}=useParams()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const productRef = !categoryId 
            ?  collection(db, 'products')
            : query (collection(db, 'products'),where ('category', '==',categoryId))

        
        setLoading(true)
        getDocs(productRef)
        .then(querySnapshot =>{
            const productsAdapted = querySnapshot.docs.map(doc =>{
                const fields = doc.data()
                return {id: doc.id, ...fields}
            })
            setProducts(productsAdapted)
        })
        .finally(()=>{
            setLoading(false)
        }
        )


        // const asyncFunction =categoryId ? getProductByCategory : getProducts
        // setLoading(true)

        // asyncFunction(categoryId)
        //     .then(response=>{
        //         setProducts(response)
        // })
        // .catch(error =>{
        //     console.loge(error)
        // })
        // .finally(()=>{
        //     setLoading(false)
        // })





    },[categoryId])


if(loading){
    return <h1>Cargando..</h1>
}
    return(
        <div>
            <h1 className='Principal'>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer