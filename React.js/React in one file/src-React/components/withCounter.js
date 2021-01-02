import React from 'react'

const withCounter = (WrappedComponent,increnmentNumber) => {
    class WithCounter extends React.Component {

///THIS CODE IS COMMON CODE IN BOTH THE 'ClickCounter' and in 'HoverCounter' file
        constructor(props) {
            super(props)
            this.state = {
                 count:0
            }
        } 
       incrementCount = () => {
           this.setState(prevState => {
               return {count:prevState.count+increnmentNumber}
           })
       }

        render() {
            console.log(this.props.name)
            return <WrappedComponent 
            count={this.state.count} 
            incrementCount = {this.incrementCount} 
            {...this.props}  
            />
        }
    }
    return WithCounter
}
export default withCounter