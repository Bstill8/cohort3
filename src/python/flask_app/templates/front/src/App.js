import React, {useState} from 'react';
import './App.css';

function App() {
  let [table, update] = useState("customers")
  const getTable = async() => {
    // let route;
    // if(table === 'product'){
    //   route = '/products'
    // }
    // if(table === 'item'){
    //   route = '/items'
    // }
    // if(table === 'invoice'){
    //   route = '/invoices'
    // }else{
    //   route = '/customers'
    // }
    // let response = await fetch("http://127.0.0.1:5003" + route, {
    //   method: 'GET',
    //   mode: 'cors',
    //   cache: 'no-cache',
    //   credentials: 'same-origin',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   redirect: 'follow',
    //   referrer: 'no-referrer',
    // })
    // console.log(response)
    return 1
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="buttons">
          <button onClick={() => update("customer")}>Customers</button>
          <button onClick={() => update("invoice")}>Invoices</button>
          <button onClick={() => update("item")}>Line Items</button>
          <button onClick={() => update("product")}>Products</button>
        </div>
        {getTable()}
      </header>
    </div>
  );
}

export default App;
