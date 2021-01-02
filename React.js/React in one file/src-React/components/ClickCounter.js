import React, { Component } from 'react'
import withCounter from './withCounter'

/////// ITS AN HOC //////

class ClickCounter extends Component {
    
    render() {
        // const {count} = this.state
        console.log(this.props.name)
        const {count, incrementCount} = this.props
        return (
            <div>
            
            <h1>{this.props.name}</h1>
            <button onClick={incrementCount}>
              Click {count} - times
              </button>   
            </div>
        )
    }
}
export default withCounter(ClickCounter,5)
