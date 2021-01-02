import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)

        this.state={
            message:"Hello gentlemans"
        }
        this.handleClick = this.handleClick.bind(this) // approach 3rd button event related
    }
    handleClick(){
        this.setState({
            message:"hello fuckers"
        })
    }
    render() {

        return (
            <div>
            <div>{this.state.message}</div>
            {/* approches method - one using binding method */}
                {/* <button onClick={this.handleClick.bind(this)}>Click-Here</button> */}
            {/* approaches method - two by using arrow functions */}
                {/* <button onClick={()=> this.handleClick()}>Click-Here</button> */}
                {/* approache method - three by using  */}
                <button onClick={() =>this.handleClick()}>Click here</button>
            </div>
        )
    }
}

export default EventBind
