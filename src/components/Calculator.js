import React, {Component} from 'react';
import BoilingVerdict from "./BoilingVerdict";

class Calculator extends Component {
    state = {
        temperature: ''
    }

    onTempChange = (e) => {
        this.setState({
            temperature: e.target.value
        })
    }

    render() {
        const {temperature} = this.state
        return (
            <>
                <fieldset>
                    <legend>Enter Temperature in Celsius</legend>
                    <input type='text' value={temperature} onChange={this.onTempChange}/>
                </fieldset>
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </>
        );
    }
}

export default Calculator;