import { isTSExpressionWithTypeArguments } from "@babel/types";

// define attributes / variables
//  number
//  string
//  boolean
//  array
//  dictionary / objects
//  undefined
const functions = {
    number:(num) => {
        return num + 3 + num*6;
    } ,
    string:(string) => {
        return string + "ish";
    },
    boolean:(boolean) => {
        if(boolean == true){
            return false;
        }
        if(boolean == false){
            return true;
        }
    },
    array:(...args) => {
        var big = new Array(6);
        for(var i = 1; i <= args.length; i++){
            big[i-1] = args[i-1];
        }
        return big;

    },
    objects:(number, string, array) => {
        var cool = {
            number: number,
            string: string,
            array: array
        };
        return cool;
    },
    undefined:() => {
        var x;
        return x;
    },
    arraymanip:(arr) => {
        arr.push(4);
        arr.unshift(1);
        arr[1] = 5;
        return arr;
    }
}

export default functions;
