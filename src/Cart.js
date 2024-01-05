import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from "@mui/material";
import { useDispatch,useSelector } from "react-redux";
import { deleteExp } from "./CartSlice";
export function Cart() {

const dispatch = useDispatch()
const cartItems = useSelector((store) => store.cart.items)
console.log(cartItems)



    const handleDec = (cartid) => {
       
            {cartItems.map((item) => cartid === item.id ? { ...item, quantity: item.quantity - 1 } : item
            )}
        

    };

    const handleInc = (cartid) => {
      
            {cartItems.map((item) => {
                return cartid === item.id ? { ...item, quantity: item.quantity + 1 } : item
            })}
        

    };

    let totalPrice = 0

    const [show, setShow] = useState(true);

   

    const handleRemove = (id) => {
        dispatch(deleteExp(id))

    }
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Cart Page</h1>

            {cartItems.map((item) => {

                totalPrice += item.quantity * item.price
                return (
                    <div className="root">
                        <div className="first-div">

                            <div className="img-div">
                                <div >
                                    <img style={{ width: "230px", height: "200px" }} src={item.thumbnail} alt={item.title} />
                                </div>
                                <div>
                                    <h2>{item.title}</h2>
                                    <h3>Details & Core<IconButton aria-label="toggleBtn" className="cart-detail" color="primary" onClick={() => setShow(!show)}>
                                        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                    </IconButton></h3>
                                    {show ? <p className='product-summary' style={{ width: "300px" }}>{item.description}</p> : null}
                                    <p>Available Stock : {item.stock}</p>
                                </div>
                            </div>


                            <div className="total">
                                <div className="cart-price">
                                    <div className="count">
                                        <div>
                                            <Button variant="text" onClick={() => handleDec(item.id)}><RemoveIcon /></Button>
                                            {item.quantity}
                                            <Button variant="text" onClick={() => handleInc(item.id)}><AddIcon /></Button>


                                        </div>
                                        <h3>${item.price}</h3>
                                    </div>

                                </div>

                                <div className="Remove">
                                    <Button variant="text" onClick={() => handleRemove(item.id)}>REMOVE</Button>
                                </div>
                            </div>

                        </div>
                        <div>

                            <div className="Subtotal">
                                <h3>SubTotal :</h3>
                                <h3>{item.quantity * item.price}</h3>
                            </div>




                            <div className="Subtotal">
                                <h3>Shipping :</h3>
                                <h3>FREE</h3>
                            </div>

                        </div>

                    </div>
                )
            })}

            <div className="totalamt">


                <h1>Total :</h1>
                <h1>{totalPrice}</h1>
            </div>

        </div>
    );
}

export default Cart