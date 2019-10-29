import {account} from './account.js'
test('create empty account', () => {
    var newInstance = new account('first', 25);
    var secondInstance = new account('second', 30);
    expect(newInstance.balance).toEqual(25);
    expect(secondInstance.balance).toEqual(30);
    expect(newInstance.name).toEqual('first');
    expect(secondInstance.name).toEqual('second');
});
test('test deposit method', () => {
    var newInstance = new account('first', 25);
    var secondInstance = new account('second', 30);
    newInstance.deposit(10);
    expect(newInstance.balance).toEqual(35);
    newInstance.deposit(5);
    expect(newInstance.balance).toEqual(40);
})