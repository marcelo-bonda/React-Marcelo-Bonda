import { useState, createContext, useContext } from 'react';

export const cartContex = createContext({
  cart:[],
  addItem:()=>{}
})

  export const CartProvider = ({children})=>{
    const [cart, setCart]=useState([])
    console.log(cart)
  
    const addItem = (productToAdd)=>{
      if(!isInCart(productToAdd.id)){
        setCart(prev =>{
          console.log(prev)
          return [...prev, productToAdd]
      }
          )
      }else{
        console.log('ya esta agregado')
      }
    }
const isInCart = (id)=>{
  return cart.some (prod => prod.id === id)
}



const getTotal = ()=>{
  let total=0

  cart.forEach(prod =>{
    total+=prod.quantity * prod.precio
})
return total
}
const total =getTotal()

const getTotalQuantity = ()=>{
  let totalQuantity=0

  cart.forEach(prod =>{
    totalQuantity+=prod.quantity
})
return totalQuantity
}
const totalQuantity =getTotalQuantity()

    return(
        <cartContex.Provider value={{cart, addItem, totalQuantity, total}}>
            {children}
        </cartContex.Provider>
    )
}


export const useCart = ()=>{
  return useContext(cartContex)
}
