import { PRODUCT_LIST } from "./App";
import React from "react";
import Product from "./Product";
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { addItem } from "./CartSlice";
import { useNavigate } from "react-router-dom";


function ProductList(){
  const dispatch = useDispatch()                     //declaring dispatch
  const productList = PRODUCT_LIST;
   const navigate = useNavigate()
    const handleCart = (product) => {
       dispatch(addItem(product))
      };
return(
    <div>
         <div className='product-list'>
        {productList.map((product, index) => (
          <Product key={product.id} product={product} id={product.id} onAddCart={
            <Button variant="contained"
              color="success" size="small"
              onClick={() => handleCart(product)}>Add to Cart</Button>}/>
        ))}
        </div>
    </div>
)
}

export default ProductList