import React, { Component } from 'react'

class CounterThree extends Component {
    constructor(props) {
        super(props)
        this.state = {
             count: 0
        }
    }
    increment(){
        this.setState({
            count: this.state.count +1
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count,this.state.incrementCount)}
            </div>
        )
    }
}

export default CounterThree
