import {avgFunc, redFunction, loopStaffMap, loopStaffForEach, loopStaffOf, loopStaffIn, sortFunction, filterFunction, reduceFunction, mapFunction, forEFunction, splice, slice, functions, assertEquals, forloop, forwhile, dowhile, forin, forof} from './daily'
//November 5 exercise

//more array exercises October 29
const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};
test('test total balances and average balances', () => {
    const staff = data.staff;
    expect(redFunction(staff)).toEqual(3823)
    expect(avgFunc(staff)).toEqual(546)
})
test('test for each', () => {
    const staffEmail = loopStaffForEach(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
    expect(staffEmail[4]).toEqual("noah.ho@evolveu.ca");
    expect(staffEmail[1]).toEqual("liam.henry@evolveu.ca");
    expect(staffEmail[5]).toEqual("william.lee@evolveu.ca");
})

 test('test map', () => {
    const staffEmail = loopStaffMap(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
    expect(staffEmail[4]).toEqual("noah.ho@evolveu.ca");
    expect(staffEmail[1]).toEqual("liam.henry@evolveu.ca");
    expect(staffEmail[5]).toEqual("william.lee@evolveu.ca");
 })



//loopStaff October 24
test('test for in loop', () => {
    const staffEmail = loopStaffIn(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
    expect(staffEmail[4]).toEqual("noah.ho@evolveu.ca");
    expect(staffEmail[1]).toEqual("liam.henry@evolveu.ca");
    expect(staffEmail[5]).toEqual("william.lee@evolveu.ca");
});

// Write your tests here
test('test for of loop', () => {
    const staffEmail = loopStaffOf(data.staff);
    expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
    expect(staffEmail[4]).toEqual("noah.ho@evolveu.ca");
    expect(staffEmail[1]).toEqual("liam.henry@evolveu.ca");
    expect(staffEmail[5]).toEqual("william.lee@evolveu.ca");
});
// Write your tests here

//loopStaff October 21
/*
    Sample data for the next few exercises.
*/




/*	
	Write the function to build email addresses for the company.
*/

test('email builder for company', () => {
    const staffEmail = loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});
//More array work October 16-17
test('More Array Work', () => {
    const arry = [1,2,3,4,5,6,7,8,9,0];
    expect(slice(arry,1,5)).toEqual([2,3,4,5]);
    expect(slice(arry,0,10)).toEqual([1,2,3,4,5,6,7,8,9,0]);
    expect(splice(arry,1,0,15)).toEqual([1,15,2,3,4,5,6,7,8,9,0]);
    expect(splice(arry,6,2,26,30,45)).toEqual([1,2,3,4,5,6,26,30,45,9,0]);
    expect(forEFunction(arry)).toEqual([2,4,6,8,10,12,14,16,18,0]);
    expect(mapFunction(arry, 2)).toEqual([2,4,6,8,10,12,14,16,18,0]);
    expect(mapFunction(arry, 6)).toEqual([6,12,18,24,30,36,42,48,54,0]);
    expect(reduceFunction(arry)).toEqual(45);
    expect(filterFunction(arry, 5)).toEqual([5,6,7,8,9]);
    expect(filterFunction(arry, 2)).toEqual([2,3,4,5,6,7,8,9]);
    expect(sortFunction(arry)).toEqual([9,8,7,6,5,4,3,2,1,0]);
})
//email object
test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});


test('test', () => {
    expect(assertEquals(1,1)).toBe(true);
});


//October 9 test
test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});
test('Prepare for Array Work', () => {
    expect(forloop(1,2,3)).toEqual([1,2,3]);
    expect(forwhile(1,2,3)).toEqual([1,2,3]);
    expect(dowhile(1,2,3)).toEqual([1,2,3]);
    expect(forin(1,2,3)).toEqual([1,2,3]);
    expect(forof(1,2,3)).toEqual([1,2,3]);
});