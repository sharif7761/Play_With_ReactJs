import React from 'react';

const ClickCounterRp = ({ count, incrementCount }) => {
    return (
        <div>
            <button onClick={incrementCount}>Clicked { count } times</button>
        </div>
    );
};

export default ClickCounterRp;