import { Component } from "react"

class Time extends Component{

    constructor(){
        super();
        this.state = {
            date:new Date()
        }
    }

    render(){
        return(
            <p>{this.state.date.toLocaleTimeString()}</p>
        )
    }
}


export default Time