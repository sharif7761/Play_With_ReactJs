import React, {Component} from 'react';

class ClickCounter extends Component {
    state = {
        count: 0
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }


    render() {
        const { count } = this.state
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked { count } times</button>
            </div>
        );
    }
}

export default ClickCounter;