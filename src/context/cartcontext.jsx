import { createContext,useContext,useState } from "react";
const CartContext=createContext();
export const Cartprovider=({children})=>{
    const[cartitem,setCartitem]=useState([])

    const addcart=(item)=>{
        setCartitem([...cartitem,item])
    }
    const removeitem=(item)=>{
        setCartitem(cartitem.filter((apple)=>apple !==item))
    }

    return(
        <CartContext.Provider value={{cartitem,addcart,removeitem}}>
            {children}
        </CartContext.Provider>
    ) 
}
export const useCart=()=>{
    return useContext(CartContext)

}

