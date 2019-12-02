import React from 'react'

class AccountController extends React.Component{
    constructor(){
        super();
        this.state = {
            allAccounts: [],
            currentOut: 'sum'
        }
    }
    createAccount = (name, balance) => {
        let newInstance = new account(name, balance);
        let updateArray = this.state.allAccounts.slice();
        updateArray.push(newInstance);
        this.setState({allAccounts: updateArray})
    }
    removeAccount = (name) => {
        let updateArray = this.state.allAccounts.slice();
        for (let index = 0; index < this.state.allAccounts.length; index++) {
            if (this.state.allAccounts[index].name === name) {
            updateArray.splice(index, 1);
            this.setState({allAccounts: updateArray});
            }
        }
    }
    sumAccounts(){
        let sum = 0;
        for (let index = 0; index < this.state.allAccounts.length; index++) {
            sum += Number(this.state.allAccounts[index].amount);
            
        }
        return sum;
    }

    highAccount(){
        let highest = Number(this.state.allAccounts[0].amount);
        let account = this.state.allAccounts[0].name;
        for (let index = 0; index < this.state.allAccounts.length; index++) {
            if(this.state.allAccounts[index].amount > highest) {
                highest = Number(this.state.allAccounts[index].amount);
                account = this.state.allAccounts[index].name;
            }  
        }
        return [highest, account];
    }

    lowAccount(){
        let lowest = Number(this.state.allAccounts[0].amount);
        let account = this.state.allAccounts[0].name;
        for (let index = 0; index < this.state.allAccounts.length; index++) {
            if(this.state.allAccounts[index].amount < lowest) {
                lowest = Number(this.state.allAccounts[index].amount);
                account = this.state.allAccounts[index].name;
            }  
        }
        return [lowest, account];
    }
    outputState = (event) => {
        if(event.target.id === 'small'){
            this.setState({currentOut: 'small'})
        }
        if(event.target.id === 'large'){
            this.setState({currentOut: 'large'})
        }
        if(event.target.id === 'sum'){
            this.setState({currentOut: 'sum'})
        }
    }
    outputManager(){
        if(this.state.currentOut === 'small'){
            return 'Smallest Account: ' + this.lowAccount()[1]
        }
        if(this.state.currentOut === 'large'){
            return 'Largest Account: ' + this.highAccount()[1]
        }
        if(this.state.currentOut === 'sum'){
            return 'Total Balance: ' + this.sumAccounts();
        }
    }
    render(){
        return(
            <div id="main">
                <h1>Account Creator</h1>
                <div id="accountCreator">
                    <input type="text" placeholder="Name" id="acctName" ref={ref => this.acctName = ref}/>
                    <input type="number" placeholder="Amount"id="initialBalance" ref={ref => this.initBalance = ref}/> <br/>
                    <button id="createAccount" onClick={() => this.createAccount(this.acctName.value, this.initBalance.value)}>Create Account</button>
                    <input type="button" value="Smallest Account" id="small" onClick={this.outputState}/>
                    <input type="button" value="Largest Account" id="large" onClick={this.outputState}/>
                    <input type="button" value="Sum of Accounts" id="sum" onClick={this.outputState}/>
                    <p id="mainOut">{this.outputManager()}</p>
                </div>
            </div>
        )
    }
}
class account {
    constructor(accountName, initialBalance) {
      this.name = accountName;
      this.amount = initialBalance;
    }
    deposit(value) {
      this.amount = parseFloat(this.amount) + value;
    }
    withdraw(value) {
      this.amount = parseFloat(this.amount) - value;
    }
    balance() {
      return `Your new balance is $${this.amount}`;
    }
}
export default AccountController