import React, {Component} from 'react';
import Button from "./Button";

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
        console.log('clock component')
        return (
            <>
                <h1>
                    { this.state.date.toLocaleTimeString(this.state.locale) }
                </h1>
                <Button change={this.clickHandler} locale='en-US' />
            </>
        );
    }
}

export default Clock;