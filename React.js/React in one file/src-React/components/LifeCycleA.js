import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'messenger of god'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    
componentDidMount(){
    console.log('LifeCycleA componentDidMOunt')
}
shouldComponentUpdate(){
    console.log('LifeCycleA shouldComonentUpdate')
    return true
}
 getSnapshotBeforeUpdate(prevProps,prevState){
     console.log('LifeCycleA getSnapshotBeforeUpdate')
     return null
 }

componentDidUpdate(){
    console.log('LifeCycleA componentdid update')
}

changeState = () =>{
    this.setState({
        name:'code-evolution' 
    })
}

    render() {
        console.log('LifeCycleA render')
        return (
            <div>
            <div>LifeCycle A</div>
            <button onClick={this.changeState}>Change state</button>
            <div><LifeCycleB /></div>
            </div>

        )
    }
}

export default LifeCycleA
