import React from 'react';
import './Course.css';

const Course = (props) => {
    const rcvCartButton = props.cartButtonHandle
    // console.log(props);
    const {name,img,instructor,fee} = props.sendCourse;
    return (
            <div class="course-container">
                <div>
                    <img src= {img} alt=""></img>   
                </div>
                <div>
                     <h3>{name}</h3>
                     <p>By:{instructor}</p>
                     <p><strong>Course Fee:{fee}</strong></p>
                     <button class="enrollButton" onClick={()=>rcvCartButton(props.sendCourse)}>Enroll Now</button>
                </div>


            
        </div>
    );
};

export default Course;