const { count } = require('console');
const fs = require('fs');

console.log('1. Start (Sync)');

setTimeout(() => console.log('2. setTimeout (Timer)'),1000);
setImmediate(() => console.log('3. setImmediate (Check)'));

Promise.resolve().then(() => console.log('4. Promise (Microtask)'));
process.nextTick(() => console.log('5. nextTick (Microtask)'));

console.log('6. End (Sync)');


//Functions

//1. Storing function in a variable
const fun1 = function(name){
    return `hello, ${name}`;
};

//2. passing function as arguments(Callback)

function fun2(callbackv){
    return callbackv("Vivek");

}

console.log(fun2(fun1));

//3. Returning a Function

function fun3(f1){
    return function(num){
        return num*f1;
    };
}

const multi = fun3(2);

console.log(multi(5));
/** 
const fun1 = (name) => `Hello, ${name}`;

const fun2 = (callback) => callback("Vivek");

const fun3 = (factor) => (num) => num * factor;

 */

//Task 1: Write repeat(n, fn) that calls fn(i) n times

const repeat = (n,fn) =>{
    for(let i = 1;i<=n; i++){
        fn(i);
    }
};

repeat(5,(i)=>{
    console.log(i);
});

//Task 2: Write makeCounter() returning { inc, dec, value } using a closure over a private variable

function makeCounter(){
    let count = 0;

    return {
        inc(){
            count++;
            //console.log(count)
            return count;
        },

        dec(){
            count--;
            return count;
        },
        value(){
            return count;
        }
    };
}

const counter = makeCounter();

console.log(counter)
console.log(counter.value());
console.log(counter.inc());
console.log(counter.inc());
console.log(counter.dec());

//Task 3: Write once(fn) — returns a function that only ever runs fn the first time

const onlyOnce = (fn) => {
    let hasRun = false;
    let savedResult; 
    
    return (val) =>{
        if(!hasRun){
            savedResult = fn(val);
            hasRun = true;
        }
        return savedResult;
    };
    
};

const greet = onlyOnce((nmae)=> `Hello ${nmae}`)

console.log(greet("Vivek"))
console.log(greet("Welcome"))

//Task 4: Write logger(prefix) that returns a function printing [prefix] message

const logger = (prefix)=> (message) => {
    console.log(`[${prefix}], ${message}`)
};
const printing = logger("Vivek");

printing("S")