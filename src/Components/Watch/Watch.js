import React, { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => setSteps(steps + 1);


    return (
        <div style={{border:'4px solid red', margin:'10px'}}>
            <h2>This is my watch</h2>
            <h3>My Current Step {steps} </h3>
            <button onClick={increaseSteps}>De Dour...</button>
            <Display name="Motorola" step = {steps}></Display>
        </div>
    );
};

export default Watch;