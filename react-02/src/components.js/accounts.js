import React from 'react'
import 'C:/code/cohort-3/react-02/src/account.css'


class Account extends React.Component{
    constructor(){
        super()
        this.textInput = React.createRef();
    }
    render(){
        return(
            <div className="account">
                <p className="cardText">{this.props.accountName}</p>
                <input type='text' ref={this.textInput}/>
                <button value='Deposit' className="deposit"onClick={() => this.props.change(this.props.accountName, this.textInput.current.value)}>Deposit</button>
                <button value='Withdraw' className = "withdraw"onClick={() => this.props.change(this.props.accountName, -this.textInput.current.value)}>Withdraw</button>
                <button value='Delete' className = "delete" onClick={() => this.props.delete(this.props.accountName)}>Delete</button>
                <p>Balance: {this.props.balance}</p>
            </div>
        )
    }
}
export default Account