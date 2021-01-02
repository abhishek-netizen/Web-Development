import React, { Component } from 'react'
import withCounter from './withCounter'


class HoverCounter extends Component {
    
    render() {
        console.log(this.props.name)
        // const {count} = this.state
        const {count, incrementCount} = this.props
        // {count}
        return (
        <div>
        <h1>{this.props.name}</h1>
        <h1 onMouseOver={incrementCount}> {this.props.name}The Header Hovered this many times {count}</h1>
        </div>
    )
}
}
export default  withCounter(HoverCounter,10)

