import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Course from '../Course/Course';
import Data from '../fakedata/Data';

const Enroll = () => {
    const first15 = Data.slice(0,15);
    const [courses, setCourses] = useState(first15);
    const [cart,setCart] = useState([]);

    const cartButtonHandle = (sendCourse) =>{
        const newcart = [...cart,sendCourse];
        setCart(newcart);

    }

    return (
        <div className="main-container">
                    <div>
            {
                courses.map(c => <Course 
                    sendCourse = {c}
                    cartButtonHandle ={cartButtonHandle}
                    ></Course>)
            }

        </div>
        <div>
            <Cart sendCart = {cart}> </Cart>
        </div>
        </div>

    );
};

export default Enroll;