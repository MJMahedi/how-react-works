import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'6px solid grey'}}>
            <h2>This is dial section</h2>
            <h3>Now Step: {props.steps}</h3>
        </div>
    );
};

export default Dial;