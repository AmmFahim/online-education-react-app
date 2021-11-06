import React from 'react';

const Cart = (props) => {
    const rcvCart = props.sendCart;
    const totalPrice = rcvCart.reduce((total,course) => total+course.fee, 0);
    const tax = totalPrice/10;
    const grandTotal = (totalPrice + tax).toFixed(2);
   



    return (
        <div>
            <h2>Total Enrolled Course:  {rcvCart.length}</h2>
            <h4>Total Course Fee:  {(totalPrice).toFixed(2)}</h4>
            <h4>Tax/Vat: {tax}</h4>
            <h2>Grand Total: {grandTotal}</h2>


  
        </div>
    );
};

export default Cart;