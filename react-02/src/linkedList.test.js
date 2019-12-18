import {LinkedList} from './components.js/linkedList'

// test('test list adder', () => {
//     let test = new LinkedList;
//     test.addNode('end', 'hello');
//     expect()
// })
test('test list searcher', ()=> {
    let test = new LinkedList;
    
    expect(test.search('end')).toEqual({content: {subject: null, ammount: null}, previous: null, next: null})
    test.header.next = {content: {subject: 'alpha', ammount: 45}, next: null, prev: test.header};
    expect(test.search('end')).toEqual({content: {subject: 'alpha', ammount: 45}, next: null, prev: test.header})
    test.header.next.next = {content: {subject: 'beta', ammount: 40}, next: null, prev: test.header.next}
    expect(test.search('end')).toEqual({content: {subject: 'beta', ammount: 40}, next: null, prev: test.header.next})
    expect(test.search('beginning')).toEqual({content: {subject: 'alpha', ammount: 45}, next: test.header.next.next, prev: test.header})
    expect(test.search('alpha')).toEqual({content: {subject: 'alpha', ammount: 45}, next: test.header.next.next, prev: test.header})
    expect(test.search('beta')).toEqual({content: {subject: 'beta', ammount: 40}, next: null, prev: test.header.next})
    expect(test.search('charlie')).toEqual('Subject does not exist')

})