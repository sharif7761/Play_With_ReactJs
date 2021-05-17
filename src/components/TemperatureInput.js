import React, {Component} from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
}

const TemperatureInput = ({ temperature, scale, onTempChange }) => {

    return (
        <fieldset>
            <legend>Enter Temperature in {scaleName[scale]}</legend>
            <input type='text' value={temperature} onChange={(e) => onTempChange(e, scale)}/>
        </fieldset>
    );
};

export default TemperatureInput;