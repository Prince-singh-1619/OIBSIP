// let screen = document.getElementsById("display");
// var buttons = document.querySelectorAll("button");
// let screenValue = "";

// for(items of buttons){
//     item.addEventListener("click", (e) => {
//         buttonText = e.target.innerText;
//         if(buttonText=="*"){
//             buttonText="*";
//             screenValue = screenValue + buttonText;
//             screen.value = screenValue;
//         }
//         else if(buttonText=="C"){
//             screenValue="";
//             screen.value = screenValue;
//         }
//         else if(buttonText=="="){
//             var result;
//             try{
//                 result = eval(screenValue);
//             }
//             catch(error){
//                 result="Expression error";
//             }
//             screen.value = result;
//         }
//         else{
//             screenValue = screenValue + buttonText;
//             screen.value = screenValue;
//         }
//     });
// }






function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0,-1);
 }