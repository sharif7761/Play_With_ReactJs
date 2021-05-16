import React, {Component} from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            locale: 'bn-BD'
        }
    }

    componentDidMount() {
        this.clockTimer = setInterval(() =>this.thick(), 1000)
        }
    componentWillUnmount() {
        clearInterval(this.clockTimer)
    }

    clickHandler = (locale) => {
        this.setState({
            locale: locale
        })
    }

    thick() {
        this.setState({
            date: new Date()
        })
    }


    render() {
        return (
            <>
                <h1>
                    { this.state.date.toLocaleTimeString(this.state.locale) }
                </h1>
                <button type='button' onClick={() => this.clickHandler('en-US')}>Click</button>
            </>
        );
    }
}

export default Clock;