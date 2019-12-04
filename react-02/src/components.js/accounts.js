import React from 'react'

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
                <button value='Deposit' className="deposit"onClick={() => this.props.change(this.props.accountName, this.textInput.current.value)}/>
                <button value='Withdraw' className = "withdraw"onClick={() => this.props.change(this.props.accountName, -this.textInput.current.value)}/>
                <button value='Delete' className = "delete" onClick={() => this.props.delete(this.props.accountName)}/>
                <p>Balance: {this.props.balance}</p>
            </div>
        )
    }
}
export default Account