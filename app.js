let q = -5*3;
console.log(q);
document.write('‐5 * 3 = '+ q + '<br>');

let w = "JavaScript" + 50;  
console.log(w);
document.write('"JavaScript" + 50 = '+ w  + '<br>');

let e = 17 % 5;
console.log(e);
document.write('17 % 5 = ' + e + '<br>');

let r = 5 % 17;
console.log(r);
document.write('5 % 17 = ' + r + '<br>');

let t = 5 / 10;
console.log(t);
document.write('5 / 10 = ' + t + '<br>');

let y = 4 ==='4';
console.log(y);
document.write('4 ==="4" = ' + y + '<br>');

let u = 4!= 5;
console.log(u);
document.write('4!= 5 = ' + u + '<br>');

let i = "Hello" + 5;
console.log(i);
document.write('"Hello" + 5 = ' + i + '<br>');

var x = 2.5;

let o = Math.ceil(x) - Math.floor(x);
console.log(o);
document.write('Math.ceil(x) - Math.floor(x) = ' + o + '<br>');

let p = Math.pow(x,2);
console.log(p);
document.write('Math.pow(x,2) = ' + p + '<br>'+ '<br>'+ '<br>'+ '<br>'+ '<br>');



let a = prompt("Read a number");
a = parseInt(a);
alert(a);

let s = prompt("fisrt number");
let d = prompt('second number');
if (s<d) {
    alert(s + " " + d);
}
else{
    alert(d + " " + s);
}


let f = prompt("fisrt number");
let g = prompt('second number');
if (f>g) {
    alert(f);
}
else{
    alert(g);
}

let h = prompt("fisrt number");
let j = prompt('second number');
let k = parseFloat(h)+parseFloat(j);
alert (k);


let role = prompt('What is your number?')
switch(role){
    case '1':
        document.write('ONE');
    break;
    case '2':
        document.write('TWO');
    break;
    case '3':
        document.write('THREE');
    break;
    case '4':
        document.write('FOUR');
    break;
    case '5':
        document.write('FIVE');
    break;
    case '6':
        document.write('SIX');
    break;
    case '7':
        document.write('SEVEN');
    break;
    case '8':
        document.write('EIGHT');
    break;
    case '9':
        document.write('NINE');
    break;
    default:
        document.write('PLEASE TRY AGAIN, if there is none of the above.');
}












