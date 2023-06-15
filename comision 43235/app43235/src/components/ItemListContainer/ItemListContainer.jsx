import { useEffect, useState, } from "react";
import { getProductByCategory, getProducts } from "../asynkmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer  = ({greeting})=>{
    const [products, setProducts] =useState([])

    const {categoryId}=useParams()

    useEffect(()=>{

        const asyncFunction =categoryId ? getProductByCategory : getProducts

        asyncFunction(categoryId)
            .then(response=>{
                setProducts(response)
        })





    },[categoryId])
   

    return(
        <div>
            <h1 className='Principal'>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer