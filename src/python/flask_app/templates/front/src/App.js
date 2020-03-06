import React from 'react';
import './App.css';
import {getData} from './fetch'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      table: 'customer',
      data: 'none'
    }
  }
  getTable = async() => {
    let route;
    if(this.state.table === 'product'){
      route = '/products'
    }
    if(this.state.table === 'item'){
      route = '/items'
    }
    if(this.state.table === 'invoice'){
      route = '/invoices'
    }else{
      route = '/customers'
    }
    let data = await getData(route)
    let otherData = await data.html
    console.log(data)
    console.log(otherData)
    this.setState({data: otherData})

  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="buttons" onClick={this.getTable}>
            <button onClick={() => this.setState({table: "customer"})}>Customers</button>
            <button onClick={() => this.setState({table: "invoice"})}>Invoices</button>
            <button onClick={() => this.setState({table: "item"})}>Line Items</button>
              <button onClick={() => this.setState({table: "product"})}>Products</button>
          </div>
          {this.state.data}
        </header>
      </div>
    );
  }
  
}
  

export default App;
