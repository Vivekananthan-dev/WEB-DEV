
//const vs = 42

//var Score;

//console.log(Score)

//vs = 30

//console.log(vs)



//findingElements(Score);

//function findingElements(){
//    console.log("welcome to kaathu kuthu function")
//}

//Score = null;

// Scope of Variables

var a ="A";
let b ="B";
const c = "C";

console.log(a);
console.log(b);
console.log(c);

function FirstNight(){
    var d ="D";
    let e ="E";
    const f = "F";

    console.log(a);
    console.log(b);
    console.log(c);
}

FirstNight();

    console.log(FirstNight.d);
    console.log(FirstNight.e);
    console.log(FirstNight.f);

if(true){
    var g ="G";
    let h = "H";
    const i = "I";
    console.log(a);
    console.log(b);
    console.log(c);

}
//let b = "1000";
 console.log(b)

    console.log(g);
    console.log(h);
    console.log(i);


