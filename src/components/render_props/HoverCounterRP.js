import React from 'react';

const HoverCounterRp = ({ count, incrementCount }) => {
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered { count } times</h1>
        </div>
    );
};

export default HoverCounterRp;