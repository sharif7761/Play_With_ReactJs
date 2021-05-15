import React, {Component} from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.clockTimer = setInterval(() =>this.thick(), 1000)
        }
    componentWillUnmount() {
        clearInterval(this.clockTimer)
    }

    thick() {
        this.setState({
            date: new Date()
        })
    }


    render() {
        return (
            <h1>
                { this.state.date.toLocaleTimeString(this.props.locale) }
            </h1>
        );
    }
}

export default Clock;