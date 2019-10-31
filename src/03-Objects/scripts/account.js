export class account {
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
var cardNumber;
export function cardAdder(){
  cardNumber = main.children.length -2;
  let newCard = document.createElement('div');
  let text = document.createElement('p');
  let textN = document.createTextNode(user.allAccounts[cardNumber].name);
  let input = document.createElement('input');
  let deposit = document.createElement('button');
  let withdraw = document.createElement('button');
  let delet = document.createElement('button');
  let balance = document.createElement('p');
  let bal = document.createTextNode('Balance: $' + user.allAccounts[cardNumber].amount);
  input.setAttribute('type', 'text');
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
  newCard.appendChild(input);
  newCard.appendChild(deposit);
  newCard.appendChild(withdraw);
  newCard.appendChild(delet);
  newCard.appendChild(balance);
  return newCard;
}
export function del(event){
  let index = event.target.parentNode.id.match(/[^card]/g);
  let i = parseFloat(index[0]);
  user.removeAccount(user.allAccounts[i].name);
  main.removeChild(main.lastChild);
  for(let i = 0; i<user.allAccounts.length; i++){
    main.children[i+2].id = 'card' + i.toString();
    main.children[i+2].children[5].id = 'balance' + i.toString();
    main.children[i+2].children[5].innerText = 'Balance: $' + user.allAccounts[i].amount;
  }
}
export function depost(event){
  let index = event.target.parentNode.id.match(/[^card]/g);
  let i = parseFloat(index[0]);
  user.allAccounts[i].deposit(parseFloat(event.target.parentNode.childNodes[1].value));
  event.target.parentNode.childNodes[5].innerText = 'Balance: $' + user.allAccounts[i].amount;
}
export function withdrw(event){
  let index = event.target.parentNode.id.match(/[^card]/g);
  let i = parseFloat(index[0]);
  user.allAccounts[i].withdraw(parseFloat(event.target.parentNode.childNodes[1].value));
  event.target.parentNode.childNodes[5].innerText = 'Balance: $' + user.allAccounts[i].amount;
}