import React from 'react';
import logo from './logo.svg';
import './App.css';
import image from "./expressionless.svg"
import Game from './components.js/ticTacToe';
import Account from './components.js/accountController'
import Community from './components.js/community'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      rendered: 'home',
    }
  }
  iconSelect = (event) => {
    if(event.target.id === 'I1'){
      this.setState({
        rendered: 'home'
      })
    } 
    if(event.target.id === 'I2'){
      this.setState({
        rendered: 'TTT'
      })
    }
    if(event.target.id === 'I3'){
      this.setState({
        rendered: 'Accounts'
      })
    }
    if(event.target.id === 'I4'){
      this.setState({
        rendered: 'Cities'
      })
    } 
  }
  navigator(){
    if(this.state.rendered === 'home'){
      return <div><img src={logo} className="App-logo" alt="logo" />
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
      </div>;
    }
    if(this.state.rendered === 'TTT'){
      return <Game />;
    }
    if(this.state.rendered === 'Accounts'){
      return <Account />;
    }
    if(this.state.rendered === 'Cities'){
      return <Community />;
    }
    
  }
  render(){  
    return (
      <div className="App">
        <div className="Icons" onClick={this.iconSelect}>
          <img src={image} className="Icon" id="I1" name="home" alt="home"/>
          <img src={image} className="Icon" id="I2" name="TTT" alt="tictactoe"/>
          <img src={image} className="Icon" id="I3" name="account" alt="accounts"/>
          <img src={image} className="Icon" id="I4" name="cities" alt="cities"/>
        </div>
        <header className="App-header">
          <div  id="subroot">
            {this.navigator()}
          </div>
        </header>
        <div>Icons made by <a href="https://www.flaticon.com/authors/pixelmeetup" title="Pixelmeetup">Pixelmeetup</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    );
  }
}
export default App;