const secureBooking = function(){
    let passengerCount = 0;



    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);



let f ;


const g = function(){
    const a = 23;
    f=function(){
        console.log(a*2);
    }
}

const h =function(){
   const b = 89;
f=function(){
    console.log(b*2);
}

}

g();
f(); 





h();
f();









//////////////
const boardPassengers = function(n,wait){
    const perGroup = n/3;

setTimeout(function(){
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are 3 groups ,each with ${perGroup}
     passengers`);
  },wait*1000);


console.log(`will start boarding in ${wait} seconds`);

}
boardPassengers(180,8);
