import React from 'react';

const BoilingVerdict = ({celsius = 0}) => {
    if(celsius >= 100) {
        return <p>The water would boil</p>
    }
    return <p>The water would no boil</p>
};

export default BoilingVerdict;