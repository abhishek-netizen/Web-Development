import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'messenger of god'
        }
        console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }
    
componentDidMount(){
    console.log('LifeCycleB componentDidMOunt')
}
shouldComponentUpdate(){
    console.log('LifeCycleB shouldComonentUpdate')
    return true
}
 getSnapshotBeforeUpdate(prevProps,prevState){
     console.log('LifeCycleB getSnapshotBeforeUpdate')
     return null
 }

componentDidUpdate(){
    console.log('LifeCycleB componentdid update')
}

    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                LifeCycle B
            </div>
        )
    } 
}

export default LifeCycleB
