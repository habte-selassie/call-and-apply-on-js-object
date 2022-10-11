const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet("hehy");
greeter('jonas');
greeter("alzaate");
greet('hellow')('guterez')






const greet1 = (greeting)=>(name)=>
      console.log(`${greeting} ${name}`);
    
  

  const greeter1 = greet("hehy");
  greeter1('haskel');
  greeter1("albrighton");
  greet1('hi')('aubamiyang')

