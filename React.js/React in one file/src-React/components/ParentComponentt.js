import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
////////////////// METHOD AS PROPS  ///////////////////////
class ParentComponent extends Component {
        constructor(props){
            super(props)
            this.state={
                parentName:'parent'
            }
    this.greetParent = this.greetParent.bind(this) //since we are using this keyword in the method we need to bind this method.
        }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
     }
    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetParent} />
            </div>
        )
    }
}
export default ParentComponent


