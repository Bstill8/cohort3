import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components.js/ticTacToe';
import Account from './components.js/accountController'
import Community from './components.js/community'
import ListController from './components.js/linkedList'
import FifoLifoApp from './components.js/fifolifo/FifoLifoApp'
import Settings from './components.js/settings'
import ThemeContext, { theme } from "./ThemeContext"

class App extends React.Component {
  constructor() {
    super();

    this.changeColor = (change) => {
      this.setState({
        color: theme.color[change]
      })
    }
    this.changeFont = (change) => {
      this.setState({
        font: theme.fontSize[change]
      })
    }
    this.state = {
      rendered: 'home',
      color: theme.color.green,
      font: theme.fontSize.medium,
      changeColor: this.changeColor,
      changeFont: this.changeFont
    }
  }
  iconSelect = (event) => {
    if (event.target.id === 'I1') {
      this.setState({
        rendered: 'home'
      })
    }
    if (event.target.id === 'I2') {
      this.setState({
        rendered: 'TTT'
      })
    }
    if (event.target.id === 'I3') {
      this.setState({
        rendered: 'Accounts'
      })
    }
    if (event.target.id === 'I4') {
      this.setState({
        rendered: 'Cities'
      })
    }
    if (event.target.id === 'I5') {
      this.setState({
        rendered: 'LinkedList'
      })
    }
    if (event.target.id === 'I6') {
      this.setState({
        rendered: 'FifoLifoApp'
      })
    }
    if (event.target.id === 'I7') {
      this.setState({
        rendered: 'settings'
      })
    }
  }
  navigator() {
    if (this.state.rendered === 'home') {
      return (
        <ThemeContext.Consumer>
          {({ color, fontSize}) => (
            <div style={{ color: color, fontSize: fontSize }}>
              <img src={logo} className="App-logo" alt="logo" />
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
            </div>
          )}
        </ThemeContext.Consumer>

      )
    }
    if (this.state.rendered === 'TTT') {
      return <Game />;
    }
    if (this.state.rendered === 'Accounts') {
      return <Account />;
    }
    if (this.state.rendered === 'Cities') {
      return <Community />;
    }
    if (this.state.rendered === 'LinkedList') {
      return <ListController />;
    }
    if (this.state.rendered === 'FifoLifoApp') {
      return <FifoLifoApp />;
    }
    if (this.state.rendered === 'settings') {
      return <Settings />;
    }

  }
  render() {
    return (
      <div className="App">
        <div className="Icons" onClick={this.iconSelect}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Font_Awesome_5_brands_react.svg/512px-Font_Awesome_5_brands_react.svg.png" className="Icon" id="I1" name="home" alt="home" />
          <img src="http://cdn.onlinewebfonts.com/svg/img_512183.png" className="Icon" id="I2" name="TTT" alt="tictactoe" />
          <img src="http://cdn.onlinewebfonts.com/svg/img_361598.png" className="Icon" id="I3" name="account" alt="accounts" />
          <img src="https://cdn.onlinewebfonts.com/svg/img_460058.png" className="Icon" id="I4" name="cities" alt="cities" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Simpleicons_Interface_link-symbol-of-two-chains-links-linked.svg" className="Icon" id="I5" name="linkedList" alt="Linked List" />
          <img src="https://cdn.onlinewebfonts.com/svg/img_465073.png" className="Icon" id="I6" name="fifolifo" alt="Fifo Lifo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Feedbin-Icon-settings.svg/512px-Feedbin-Icon-settings.svg.png" className="Icon" id="I7" name="settings" alt="settings" />
        </div>
        <header className="App-header">
          <div id="subroot">
            <ThemeContext.Provider value={this.state}>
              {this.navigator()}
            </ThemeContext.Provider>
          </div>
        </header>
        <div>Icons made by <a href="https://www.flaticon.com/authors/pixelmeetup" title="Pixelmeetup">Pixelmeetup</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    );
  }
}
export default App;