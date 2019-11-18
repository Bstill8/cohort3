
import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import MyComp from './components/myComponent';

class App extends Component {
  constructor(){
    super();
    this.counter = 21;
    this.state = {myState: 'TBD'};
  }
  onPushMe = () => {
    console.log('You pushed me');
    this.counter ++;
    console.log(this.counter);
    this.setState({
      myState: 'now' + this.counter
    })
  }
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
    <h1>I am in control of this application and my name is Brendan {this.state.myState}</h1>
          <button onClick={this.onPushMe}>Push Me</button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MyComp a={this.onPushMe} arg='whatToSay'/>
        </header>
      </div>
    );
  }
}

export default App;
