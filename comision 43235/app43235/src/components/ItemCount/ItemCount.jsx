import { useState } from "react";
import './ItemCount.css'


const ItemCount =({ stock,onAdd })=>{
    const [count , setCount] = useState(1)


    const decrement = () =>{
        if(count > 1){
            setCount(prev=>prev-1)
        }
    }
    const increment = () =>{
        if(count < stock){
            setCount(prev=>prev +1)
        }
    }
    

    return(
        <div>
            <div className="botones">
            <h4>{count}</h4>
            <button onClick={decrement}>-</button>
            <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
            
        </div>
        </div>
    )
}

export default ItemCount