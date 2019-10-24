import {add, show} from './functions'
test('test the add function with show function', () => {
    var addTester = document.createElement('ol');
    document.body.appendChild(addTester);
    addTester.id = 'list';
    add();
    add();
    expect(show(addTester)).toEqual(['4','5']);
    add();
    add();
    expect(show(addTester)).toEqual(['4','5','6','7']);

});
test('test add card function', () => {
    function cardCounter(){
        return 0;
        
    }
})