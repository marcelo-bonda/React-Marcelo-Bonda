import { useEffect, useState, } from "react";
import { getProducts } from "../asynkmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer  = ({greeting})=>{
    const [products, setProducts] =useState([])

    useEffect(()=>{
        getProducts()
            .then(response =>{
                setProducts(response)
            })
            .catch(error =>{
                console.log(error)
            })
        
    },[])

    return(
        <div>
            <h1 className='Principal'>{greeting}</h1>
            <ItemList products ={products}/>
        </div>
    )
}

export default ItemListContainer