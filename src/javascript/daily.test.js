import {fullNames, provinceFilter, balFilter, avgFunc, redFunction, loopStaff, loopStaffMap, loopStaffForEach, loopStaffOf, loopStaffIn, sortFunction, filterFunction, reduceFunction, mapFunction, forEFunction, splice, slice, functions, assertEquals, forloop, forwhile, dowhile, forin, forof} from './daily'
//November 8 exercise
test('test fullNames', () => {
    expect(fullNames({fname:"Alex", lname:"Smith", province:"BC", age:33})).toEqual('Alex Smith');
    expect(fullNames({fname:"Brent", lname:"Riddle", province:"MN", age:79})).toEqual('Brent Riddle');
})
test('test provinceFilter', () => {
    const names = provinceFilter(people);
    expect(names[2]).toEqual({'fname':"Byron", 'lname':"Cardenas", 'province':"BC", 'age':38})
    expect(names[4]).toEqual({'fname':"Dustin", 'lname':"Bullock", 'province':"BC", 'age':59})
})
test('test fullnames and provinceFilter together', () => {
    const names = provinceFilter(people, fullNames);
    expect(names[0]).toEqual('Alex Smith');
    expect(names[6]).toEqual('Forest Vaughn');
})
const people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];

//November 6 exercise
test('balances over 1000', () => {
    const result = balFilter(data);
    expect(result[0]).toEqual(1000);
    expect(result[result.length - 1]).toEqual(1330);
})
//November 5 exercise
test('How do pointers work', () => {
    const a = {"name":"Larry", "bal":10};
    const arr = [];
    const obj = {};
    arr.push(a);
    obj[a.name] = a;
    
    expect(a.bal).toBe(10);
    expect(arr[0].bal).toBe(10);
    expect(obj[a.name].bal).toBe(10);
    expect(obj.Larry.bal).toBe(10);

    a.bal+=1;
    expect(a.bal).toBe(11);
    expect(arr[0].bal).toBe(11);
    expect(obj[a.name].bal).toBe(11);
    expect(obj.Larry.bal).toBe(11);

    addThree(a);
    expect(a.bal).toBe(14);
    expect(arr[0].bal).toBe(14);
    expect(obj[a.name].bal).toBe(14);
    expect(obj.Larry.bal).toBe(14);
});

function addThree(thing) {
    thing.bal = thing.bal + 3;
}
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