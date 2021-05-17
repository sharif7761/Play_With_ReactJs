import React, {Component} from 'react';
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
import {convert, toCelsius, toFahrenheit} from "../lib/convertor";

class Calculator extends Component {

    state = {
     temperature: '',
     scale: 'c'
    }

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        })
    }

    render() {
        const { temperature, scale } = this.state
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature
        return (
            <>
                <TemperatureInput scale="c"
                                  temperature={celsius}
                                  onTempChange={this.handleChange}
                />
                <TemperatureInput scale="f"
                                  temperature={fahrenheit}
                                  onTempChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </>
        );
    }
}

export default Calculator;