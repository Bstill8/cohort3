export class account{
    constructor(accountName, initialBalance){
        this.name = accountName;
        this.ammount = initialBalance;
    }
    deposit(value){
        this.ammount += value;
    }
    withdraw(value){
        this.ammount -= value;
    }
    balance(){
        return this.ammount;
    }
}
