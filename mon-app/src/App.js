
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      string: 'Hello l7mar Ijane'
    }
  }
  render() {
    return(
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{this.state.string}</p>
            <p>{this.state.string}</p>
            <button onClick = {() => this.setState({string: 'Hello Younes'})}>
              Change text
            </button>
          </header>
        </div>
      );
    }
  }

export default App;
