// function f() { console.log('I am outside!'); }
//
// if(false) {
//     // 重复声明一次函数f
//     function f() { console.log('I am inside!'); }
// }
// f();

// var a = 1;
// if(false){
//     var b = 2;
// }
// // console.log(a);
//
// console.log(b);
// function f() { console.log('I am outside!'); }
// var a = 2;
// (function () {
//     var f;
//     console.log(typeof f);
//     if(false) {
//     //     // 重复声明一次函数f
//     //     function f() { console.log('I am inside!'); }
//         f = function() { console.log('I am inside!'); }
//     }
//
//     f();
// }());

// a();
// function a (){
//     console.log("a");
// }
// function a() {
//     console.log("aaaa");
// }

// var a = 5;
// (function b(){
//     if(false){
//         let a = 2;
//     }
//
//     console.log(a);
// }())
// b();

// function a() {
//     console.log("a");
// }
// a();
// if(true){
//
//     function a() {
//         console.log("aa");
//     }
// }

// var a = function() {
//     console.log("aa")
// }
// console.log(typeof a);
// var a;
// "use strict"
function b() {
    if(true){
        function a(){
            console.log("a");
        }
    }
    // console.log(a);
}
b();
// console.log(typeof Function);