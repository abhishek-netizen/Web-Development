import React, { Component } from 'react'
// import RegComp from './RegComp'
// import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
             name:'Vishwas'
        }
    }

 componentDidMount(){
 setInterval(() => {
     this.setState({
         name:'Vishwass'
     })
 },2000)
 }    
 
    render() {
        return (
            <div>
    
            <MemoComp name={this.state.name} />
            {/* <RegComp name={this.state.name} />
            <PureComp name={this.state.name} />  */}
            </div>
        )
    }
}

export default React.memo(ParentComp)
