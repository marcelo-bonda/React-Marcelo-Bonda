import { useState, useEffect } from "react";
// import { getProductById } from "../asynkmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, QuerySnapshot } from "firebase/firestore";
import { db } from "../Service/firebaseConfig";

const ItemDetailContainer =()=>{
    const [product,setProduct] =useState(null)

    const {itemId} = useParams()

    useEffect(()=>{ 

        const productRed = doc(db, 'products', itemId)
        getDoc(productRed)
        .then(QuerySnapshot=>{
            console.log(QuerySnapshot)
            const fields = QuerySnapshot.data()
            const productAdapted = {id: QuerySnapshot.id, ...fields}
            setProduct(productAdapted)
        })


    },[itemId])
return(
    <div className="ItemDetailContainer">
        <ItemDetail {...product}/>
    </div>
)


}

export default ItemDetailContainer

