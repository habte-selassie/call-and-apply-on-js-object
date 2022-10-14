 const runOnce = function(){
    console.log('he is geniun student');
 }
 runOnce();
/////// immidiatley invoked function expressiong
 (function(){
    console.log('he is geniun student');
 })();
/////// immidiatley invoked arrow function expressiong
 (()=>console.log('he is geniun student'))();
 console.log("Test");