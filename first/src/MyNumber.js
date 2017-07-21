import React, {Component} from 'react'

class MyNumber extends Component{
    render(){
        return (
            <div> My Number is {this.props.value} ! </div>
        )
    }
}

export default MyNumber;