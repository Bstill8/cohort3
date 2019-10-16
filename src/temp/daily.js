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

//makeEmailArr october

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