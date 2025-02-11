import { Component } from "react"

class ClassBased extends Component {

    constructor() {
        super()
        this.state = { count: 0 }
    }

    handle = () => {
        this.setState(() => {
            return { count: this.state.count + 1 }
        })
    }
    


    render() {
        let arr=["bhargavi","shruthi","Srilatha","vyshnavi","srinivas"]
        return (
            <>
                <button onClick={this.handle}>Count:{this.state.count}</button>
                <h1>{arr[this.state.count]}</h1>
            </>
        )
    }
}
export default ClassBased