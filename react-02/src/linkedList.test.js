import {LinkedList} from './components.js/linkedList'


test('test list searcher', ()=> {
    let test = new LinkedList;
    
    expect(test.search('end')).toEqual(test.header)
    test.header.next = {content: {subject: 'alpha', ammount: 45}, next: null, prev: test.header};
    expect(test.search('end')).toEqual(test.header.next)
    test.header.next.next = {content: {subject: 'beta', ammount: 40}, next: null, prev: test.header.next}
    expect(test.search('end')).toEqual(test.header.next.next)
    expect(test.search('beginning')).toEqual(test.header.next)
    expect(test.search('alpha')).toEqual(test.header.next)
    expect(test.search('beta')).toEqual(test.header.next.next)
    expect(test.search('charlie')).toEqual('Subject "charlie" does not exist')
    expect(test.search(1)).toEqual(test.header.next);
    expect(test.search(2)).toEqual(test.header.next.next)
    expect(test.search(0)).toEqual(test.header)
    expect(test.search(4)).toEqual('The item you are searching for does not exist');

})

test('test list adder', () => {
    let test = new LinkedList;
    test.addNode('end', 'hello', 10);
    expect(test.header.next).toEqual({content: {subject: 'hello', ammount: 10}, next: null, prev: test.header})
    test.addNode('end', 'beach', 11);
    expect(test.header.next).toEqual({content: {subject: 'hello', ammount: 10}, next: {content: {subject: 'beach', ammount: 11}, next: null, prev: test.header.next}, prev: test.header})
})

test('test delete', () => {
    let test = new LinkedList;
    test.addNode('end', 'alpha', 1)
    test.addNode('end', 'beta', 2)
    test.addNode('end', 'charlie', 3)
    test.addNode('end', 'delta', 4)
    expect(test.header.next.next.next.next).toEqual({content: {subject: 'delta', ammount: 4}, next: null, prev: test.header.next.next.next});
    test.deleteNode('end');
    expect(test.header.next.next.next).toEqual({content: {subject: 'charlie', ammount: 3}, next: null, prev: test.header.next.next});
    test.deleteNode('beginning');
    expect(test.header.next).toEqual({content: {subject: 'beta', ammount: 2}, next: {content: {subject: 'charlie', ammount: 3}, next: null, prev: test.header.next}, prev: test.header})
    test.deleteNode(1);
    expect(test.header.next).toEqual({content: {subject: 'charlie', ammount: 3}, next: null, prev: test.header})

})