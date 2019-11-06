//November 6 Daily exercise
export function balFilter(data){
    let balances = data.staff.map(x => x.balance);
    return balances.filter(function (el){
        if(el >= 1000){ return true;}
        return false;
    });
}
//More array Exercises October 29
export function redFunction(staff){
    let balArry = staff.map(a => a.balance);
    return balArry.reduce(function(sum, current, i, arr){return sum + current});
}
export function avgFunc(staff){
    let sum = redFunction(staff);
    return Math.round(sum/staff.length);
}
//loopStaff October 25
export function loopStaffMap(staff){
    let staffEmail = [];
    staffEmail = staff.map(x => x.fname.toLowerCase() + '.' + x.lname.toLowerCase() + '@evolveu.ca')
    return staffEmail;
}
export function loopStaffForEach(staff){
    let staffEmail = [];
    staff.forEach(email)
    function email(item, index, array){
        staffEmail[index] = array[index].fname.toLowerCase() + '.' + array[index].lname.toLowerCase() + '@evolveu.ca';
    }
    return staffEmail;
}
//loopStaff October 24
export function loopStaffOf(staff){
    let staffEmail = [];
    for(let x in staff){
        staffEmail[x] = staff[x].fname.toLowerCase() + '.' + staff[x].lname.toLowerCase() + '@evolveu.ca';
    }
    return staffEmail;
}
export function loopStaffIn(staff){
    let staffEmail = [];
    for(let x in staff){
        staffEmail[x] = staff[x].fname.toLowerCase() + '.' + staff[x].lname.toLowerCase() + '@evolveu.ca';
    }
    return staffEmail;
}
//loopStaff October 21
export function loopStaff(data){
    var email = [];
    for(var i = 0; i<data.length; i++){
        email[i] = data[i].fname.toLowerCase() + '.' + data[i].lname.toLowerCase() + '@evolveu.ca';
    }
    return email;
}
//more array work October 16-17
export function slice(bee,a,b){
    return bee.slice(a,b);
}
export function splice(bee,I,R,...args){
    var gee = bee.slice();
    gee.splice(I,R,...args);
    return gee;
}
export function forEFunction(arr){
    var newArr = [];
    var sFunction = (item, index) => {newArr[index] =item*2}
    arr.forEach(sFunction);
    return newArr;
}
export function mapFunction(arr, Multi){
    const multiply = (element) => {return element*Multi;}
    return arr.map(multiply);
}
export function reduceFunction(arr){
    const sum = (total, currentVal) => {return total + currentVal;}
    return arr.reduce(sum);
}
export function filterFunction(arr, num){
    const filter = (element) => {return element >= num}
    return arr.filter(filter);
}
export function sortFunction(arr){
    const sorter = (a,b) => {return b-a}
    return arr.sort(sorter);
}
/*	
    Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
export const assertEquals =(p1,p2) => {
    if (p1 === p2){
        return true;
    }
    console.log("*** the two values are not the same")
    console.log("p1--> ",p1);
    console.log("p2--> ",p2);

}
// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");

//makeEmailArr october 9
export const functions = {
    makeEmailArr: (name) => {

        return name[0].toLowerCase()+'.'+name[1].toLowerCase() + '@evolveu.ca';
    },
    //makeEmailObj october 11
    makeEmailObj: (name) => {
        return name.fname.toLowerCase()+"."+name.lname.toLowerCase()+"@evolveu.ca";
    }
}
//Prepare for array work
export function forloop(a,b,c){
    var arr = [];
    for(var i = 0; i<arguments.length; i++){
        arr[i] = arguments[i];
    }
    return arr;
}
export function forwhile(a,b,c){
    var arr = [];
    var i = 0;
    while(i<arguments.length){
        arr[i] = arguments[i];
        i++;
    }
    return arr;
}
export function dowhile(a,b,c){
    var arr = [];
    var i = 0;
    do{
        arr[i] = arguments[i];
        i++;
    }while(i<arguments.length);
    return arr;
}
export function forin(a,b,c){
    var i = 0;
    var arr = [];
    for(i in arguments){
        arr[i] = arguments[i];
    }
    return arr;
}
export function forof(a,b,c){
    var arr= [];
    var i = 0;
    var x;
    for(x of arguments){
        arr[i] = x;
        i++;
    }
    return arr;
}
