import React from 'react'
import './ProductDisplay.css'
import { useContext } from 'react'
import { TravelContext } from '../../Context/TravelContext'

const ProductDisplay = (props) => {

    // const { product } = props;

    return (
        <div>
            <h1>Testing!!</h1>
            {/* <h2>{product.name}</h2>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} />
                </div>
            </div> */}

        </div>
    )
}

export default ProductDisplay