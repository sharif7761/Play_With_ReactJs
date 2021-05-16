import React, {Component} from 'react';

class Button extends Component {

    shouldComponentUpdate(nextProps) {
        const { change: currentChange} = this.props
        const { change: nextChange} = nextProps
        if(currentChange === nextChange) {
            return false
        }
        return true
    }

    render() {
        console.log('button component')
        const {change, locale} = this.props
        return (
            <button type='button' onClick={() => change(locale)}>Click</button>
        );
    }
}

export default Button;