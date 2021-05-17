import React from 'react';

const BoilingVerdict = ({ celsius = 0 }) => {
    if(celsius >= 100) {
        return <p>The water would boil in this temperature</p>
    }
    return <p>The water would no boil in this temperature</p>
};

export default BoilingVerdict;