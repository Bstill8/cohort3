import {account, user} from './account.js'

test('create empty account', () => {
    var newInstance = new account('first', 25);
    var secondInstance = new account('second', 30);
    expect(newInstance.amount).toEqual(25);
    expect(secondInstance.amount).toEqual(30);
    expect(newInstance.name).toEqual('first');
    expect(secondInstance.name).toEqual('second');
});
test('test deposit method', () => {
    var newInstance = new account('first', 25);
    newInstance.deposit(10);
    expect(newInstance.amount).toEqual(35);
    newInstance.deposit(5);
    expect(newInstance.amount).toEqual(40);
});
test('test withdraw method', () => {
    var newInstance = new account('first', 25);
    newInstance.withdraw(10);
    expect(newInstance.amount).toEqual(15);
    newInstance.withdraw(15);
    expect(newInstance.amount).toEqual(0);
})
test('test balance method', () => {
    var newInstance = new account('first', 25);
    expect(newInstance.balance()).toEqual("Your new balance is $25");
    var secondInstance = new account('second', 30);
    expect(secondInstance.balance()).toEqual("Your new balance is $30");
})

const accountNames = () => {
    return user.allAccounts.map(acc => acc.name)    
}

test('test create account function', () => {
    user.allAccounts = [];
    user.createAccount("Savings", 25)
    expect(accountNames()).toEqual(["Savings"]);
    user.createAccount("Car fund", 30)
    expect(accountNames()).toEqual(["Savings", "Car fund"]);
})

test('test delete account function', () => {
    user.allAccounts = [];
    user.createAccount("Savings", 25)
    user.createAccount("Car fund", 30)
    user.removeAccount("Savings");
    expect(accountNames()).toEqual(["Car fund"])
    user.createAccount("Holiday", 50)
    user.removeAccount("Car fund");
    expect(accountNames()).toEqual(["Holiday"])
})

test('test sum accounts function', () => {
    user.allAccounts = [];
    user.createAccount("Savings", 25)
    user.createAccount("Car fund", 30)
    expect(user.sumAccounts()).toEqual(55)
    user.createAccount("Holiday", 50)
    expect(user.sumAccounts()).toEqual(105)
})

test('test highest accounts function', () => {
    user.allAccounts = [];
    user.createAccount("Savings", 25);
    user.createAccount("Car fund", 100);
    expect(user.highAccount()).toEqual(100);
    user.createAccount("Holiday", 50);
    expect(user.highAccount()).toEqual(100);
})

test('test lowest accounts function', () => {
    user.allAccounts = [];
    user.createAccount("Savings", 25);
    user.createAccount("Car fund", 100);
    expect(user.lowAccount()).toEqual(25);
    user.createAccount("Holiday", 50);
    expect(user.lowAccount()).toEqual(25);
})