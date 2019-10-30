export class account {
  constructor(accountName, initialBalance) {
    this.name = accountName;
    this.amount = initialBalance;
  }
  deposit(value) {
    this.amount += value;
  }
  withdraw(value) {
    this.amount -= value;
  }
  balance() {
    return `Your new balance is $${this.amount}`;
  }
}

export class accountController {
  constructor(){
  this.allAccounts = [];
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
};
export const user = new accountController;
var cardNumber = 0;
export function cardAdder(){
  cardNumber = main.children.length -1;
  let newCard = document.createElement('div');
  let text = document.createElement('p');
  let textN = document.createTextNode(user.allAccounts[cardNumber].name);
  let deposit = document.createElement('button');
  let withdraw = document.createElement('button');
  let delet = document.createElement('button');
  let balance = document.createElement('p');
  let bal = document.createTextNode('Balance: $' + user.allAccounts[cardNumber].amount);
  deposit.innerText = "Deposit";
  withdraw.innerText = "Withdraw";
  delet.innerText = "Delete";
  text.className = "cardText";
  deposit.className = "deposit";
  withdraw.className = "withdraw";
  delet.className = "delete";
  newCard.className = 'account';
  balance.id = 'balance' + cardNumber.toString();
  newCard.id = 'card' +cardNumber.toString();
  text.appendChild(textN);
  balance.appendChild(bal);
  newCard.appendChild(text);
  newCard.appendChild(deposit);
  newCard.appendChild(withdraw);
  newCard.appendChild(delet);
  newCard.appendChild(balance);
  return newCard;
}
export function del(event){
  let index = event.target.parentNode.id.match([/^card/]);
  user.removeAccount(user.allAccounts[index].name);
  main.removeChild(main.childNodes[-1]);
  for(let i = 0; i<user.allAccounts.length; i++){
    main.children[i+1].id = 'card' + i.toString();
    main.children[i+1].children[4].id = 'balance' + i.toString();
    main.children[i+1].children[4].innerText = 'Balance: $' + user.allAccounts[i].amount;
  }
}