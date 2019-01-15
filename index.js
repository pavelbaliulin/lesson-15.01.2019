// var age = +prompt("age ?");
// if (age > 18) {
//     console.log("okay");
// }
var num = +prompt("number?");
if (num) {
    if (num >= 50) {
        console.log(parseInt(num / 50));
    } else if (num >= 25) {
        console.log(parseInt(num / 25));
    } else if (num >= 10) {
        console.log(parseInt(num / 10));
    }
} else {
    alert("not a number");
}