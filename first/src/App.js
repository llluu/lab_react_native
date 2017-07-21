import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNumber from './MyNumber'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }

  _handleAdd = () => {
    //this.value = this.value + 1;
    this.setState({
      value: this.state.value + 1
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="hello">
            Hello World
          </div>
          <MyNumber value={this.state.value}/>
          <button onClick={this._handleAdd}> Add </button>
        </div>
        
      </div>
    );
  }
}

export default App;
