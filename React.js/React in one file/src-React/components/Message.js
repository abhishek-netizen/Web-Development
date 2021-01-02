import React, { Component } from 'react'

class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
///when you have a single inputs 
    increase(){
    this.setState(prevState => ({
     count: prevState.count + 1
    }))
    }
///Incase you have two parameter second paramter is your props.
    // increase(){
    //     this.setState((prevState,props) => ({
    //      count: prevState.count + props.addValue
    //     }))
    //     }

    render() {
        return (
            <div>
            COUNT - {this.state.count}
                <button onClick={()=>this.increase()}> Increaser</button>
            </div>
        )
    }
}

//export default Message
