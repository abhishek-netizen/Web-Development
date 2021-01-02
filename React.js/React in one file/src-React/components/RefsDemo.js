import React, { Component } from 'react'

export class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef() 
        this.cbref = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }
    
componentDidMount(){
    if (this.cbRef){
        this.cbRef.focus()
    }
    // this.inputRef.current.focus()  ///it will focus the input field
    // console.log(this.inputRef)
}

clickHandler = ()=>{       /////first approcahc
    alert(this.inputRef.current.value)
}
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click here</button>
            </div>
        )
    }
}

export default RefsDemo
