import React from 'react';
import withCounter from './withCounter'

const HoverCounterHoc = (props) => {
    const { count, incrementCount } = props
    return (
        <div>
            <h1 onMouseOver={incrementCount}>Hovered { count } times</h1>
        </div>
    );
};

export default withCounter(HoverCounterHoc);