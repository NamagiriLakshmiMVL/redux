import { PRODUCT_LIST } from "./App";
import React, { useState } from "react";
import Product from "./Product";
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { addItem } from "./CartSlice";
import { useNavigate } from "react-router-dom";


function ProductList(){
  const dispatch = useDispatch() 
 const [show,setShow] = useState(false)
 
  const productList = PRODUCT_LIST;
   const navigate = useNavigate()
    const handleCart = (product) => {
  setShow(!show)
       dispatch(addItem(product))
      };
return(
    <div>
         <div className='product-list'>
        {productList.map((product, index) => (
          <Product key={product.id} product={product} id={product.id} onAddCart={
            <Button id= "btn "variant="contained" disabled={show}
              color="success" size="small"
              onClick={() => handleCart(product)}>Add to Cart</Button>}/>
        ))}
        </div>
    </div>
)
}

export default ProductList