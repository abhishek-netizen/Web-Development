import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'
export class ComponentE extends Component {
    render() {
        return(
            <div>
            <ComponentF />
            Component E context {this.context}
            </div>
        ) 
    }
}
ComponentE.contextType = UserContext
export default ComponentE


