import {account} from './account.js'
test('create empty account', () => {
    var newInstance = new account('first', 25);
    var secondInstance = new account('second', 30);
    expect(newInstance.ammount).toEqual(25);
    expect(secondInstance.ammount).toEqual(30);
    expect(newInstance.name).toEqual('first');
    expect(secondInstance.name).toEqual('second');
});
test('test deposit method', () => {
    var newInstance = new account('first', 25);
    newInstance.deposit(10);
    expect(newInstance.ammount).toEqual(35);
    newInstance.deposit(5);
    expect(newInstance.ammount).toEqual(40);
});
test('test withdraw method', () => {
    var newInstance = new account('first', 25);
    newInstance.withdraw(10);
    expect(newInstance.ammount).toEqual(15);
    newInstance.withdraw(15);
    expect(newInstance.ammount).toEqual(0);
})
test('test balance method', () => {
    var newInstance = new account('first', 25);
    expect(newInstance.balance()).toEqual(25);
    var secondInstance = new account('second', 30);
    expect(secondInstance.balance()).toEqual(30);
})