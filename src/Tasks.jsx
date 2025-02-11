import { Component } from "react";

class Tasks extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            text: "",
            tasks: [],
            newtask: ""
        };
    }

    handlecount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    handlechange = (e) => {
        this.setState({ text: e.target.value });
    };

    handletask = (event) => {
        this.setState({ newtask: event.target.value });
    };

    addtask = () => {
        this.setState((prevState) => ({
            tasks: [...prevState.tasks, prevState.newtask],
            newtask: ""
        }));
    };

    render() {
        return (
            <>
                <button onClick={this.handlecount}>Likes: {this.state.count}</button>
                <h1>-------------------------------------------------------</h1>
                <div>
                    <input 
                        type="text" 
                        placeholder="Type here something..." 
                        onChange={this.handlechange} 
                    />
                    <h1>Input: {this.state.text}</h1>
                </div>
                <h1>--------------------------------------------------------</h1>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter task" 
                        onChange={this.handletask} 
                        value={this.state.newtask} 
                    />
                    <button onClick={this.addtask}>+</button>
                    <ul style={{ listStyleType: "none" }}>
                        {this.state.tasks.map((list, index) => (
                            <li key={index}>{list}</li>
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}

export default Tasks;
