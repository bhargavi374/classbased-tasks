import React, { Component } from "react";

class StopWatch extends Component {
    constructor() {
        super();
        this.state = { time: 0, isRunning: false };
        this.timerId = null;
    }

    handleStart = () => {
        if (!this.state.isRunning) {
            this.setState({ isRunning: true });
            this.timerId = setInterval(() => {
                this.setState(prevState => ({ time: prevState.time + 1 }));
            }, 1000);
        }
    };

    handlePause = () => {
        clearInterval(this.timerId);
        this.setState({ isRunning: false });
    };

    handleStop = () => {
        clearInterval(this.timerId);
        this.setState({ time: 0, isRunning: false });
    };

    render() {
        return (
            <div>
                <h1>Time: {this.state.time}s</h1>
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handlePause}>Pause</button>
                <button onClick={this.handleStop}>Stop</button>
            </div>
        );
    }
}

export default StopWatch;