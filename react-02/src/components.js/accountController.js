import React from 'react'

class Account extends React.Component{
    constructor(){
        super();
        this.state = {
            allAccounts = []
        }
    }
    createAccount(name, balance){
        let newInstance = new account(name, balance);
        this.allAccounts.push(newInstance);
    }
    removeAccount(name){
        for (let index = 0; index < this.allAccounts.length; index++) {
            if (this.allAccounts[index].name == name) {
            this.allAccounts.splice(index, 1);
            }
        }
    }

    sumAccounts(){
        let sum = 0;
        for (let index = 0; index < this.allAccounts.length; index++) {
            sum += this.allAccounts[index].amount;
            
        }
        return sum;
    }

    highAccount(){
        let highest = 0;
        let account;
        for (let index = 0; index < this.allAccounts.length; index++) {
            if(this.allAccounts[index].amount > highest) {
                highest = this.allAccounts[index].amount;
                account = this.allAccounts[index].name;
            }  
        }
        return [highest, account];
    }

    lowAccount(){
        let lowest = this.allAccounts[0].amount;
        let account;
        for (let index = 0; index < this.allAccounts.length; index++) {
            if(this.allAccounts[index].amount < lowest) {
                lowest = this.allAccounts[index].amount;
                account = this.allAccounts[index].name;
            }  
        }
        return [lowest, account];
    }
    render(){
        return(
            <div id="main">
                <h1>Account Creator</h1>
                <div id="accountCreator">
                    <input type="text" placeholder="Name" id="acctName"/>
                    <input type="number" placeholder="Amount"id="initialBalance"/> <br/>
                    <button id="createAccount">Create Account</button>
                    <input type="button" value="Smallest Account" id="small" onClick={this.lowAccount}/>
                    <input type="button" value="Largest Account" id="large" onClick={this.highAccount}/>
                    <input type="button" value="Sum of Accounts" id="sum" onClick={this.sumAccounts}/>
                    <p id="mainOut">Output</p>
                </div>
            </div>
        )
    }
}