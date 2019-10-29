export class account{
    constructor(accountName, initialBalance){
        this.name = accountName;
        this.balance = initialBalance;
    }
    deposit(value){
        this.balance += value;
    }
}