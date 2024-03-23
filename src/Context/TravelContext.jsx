import React from "react";
import { createContext, useState } from "react";
import Product  from "../Pages/Product";
import all_trips from "../components/Assets/all_trips";



export const TravelContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for(let index=0;index<all_trips.length;index++){
        cart[index]=0;
    }
    console.log(cart);
    return cart;
}

const TravelContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart());

    const trips = all_trips;

    const contextValue = {trips,cartItems};
    
    return(
        <TravelContext.Provider value={contextValue}>
            {props.children}
        </TravelContext.Provider>
    )
}

export default TravelContextProvider;