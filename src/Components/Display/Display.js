import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border:'3px solid yellow', margin:'10px'}}>
            <h2>Name : {props.name}</h2>
            <p>Now Step {props.step}</p>
            <Dial steps={props.step}></Dial>
           
        </div>
    );
};

export default Display;