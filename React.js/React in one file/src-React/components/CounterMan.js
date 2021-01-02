import React, { Component } from 'react'
class CounterMan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count:0
        }
    }
    clickHandler(){
        this.setState({
            count : this.state.count+1
        })
    }
    render() {
        return (
            <div>
            {this.state.count}
            <button onClick={()=>this.clickHandler()}>Incrementer</button> 
            </div>
        )
    }
}
export default CounterMan
