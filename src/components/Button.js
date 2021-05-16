import React, {Component} from 'react';

class Button extends Component {
    render() {
        console.log('button component')
        const {change} = this.props
        return (
            <button type='button' onClick={change}>Click</button>
        );
    }
}

export default Button;