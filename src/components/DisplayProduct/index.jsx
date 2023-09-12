import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import './index.css'



const DisplayProduct = () => {

    const [displayObjects, setDisplayObjects] = useState([]);
    console.log(displayObjects);

    useEffect(()=>{
 
    axios.get('https://dummyjson.com/products').then((response) => {
        console.log(response);
        let array = response.data.products;
        setDisplayObjects(array);
    });

    }, [])

    let dummyJSON = displayObjects.map((products) => {
        return (
            <div key={products.id}>
                <span>{products.title}</span>
                <span>{products.price}</span>
            </div>
        )
    })


  return (
    <div id="product-container">
        {dummyJSON}
    </div>
  )
}


export default DisplayProduct;