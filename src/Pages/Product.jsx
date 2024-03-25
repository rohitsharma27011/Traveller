import React from 'react'
import './CSS/Product.css'
import { useContext } from 'react'
import { TravelContext } from '../Context/TravelContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import all_trips from '../components/Assets/all_trips'

const Product = () => {



    // const {all_trips} = useContext(TravelContext);
    const {trips} = useContext(TravelContext);
    console.log(all_trips);
    
    const {productId} = useParams();

    const product = trips.find((e)=> e.id === Number(productId));
    console.log(product);
  

  return (
    <div>
        <h1>Test</h1>
        <ProductDisplay product={product} />
    </div>
  )
}

export default Product