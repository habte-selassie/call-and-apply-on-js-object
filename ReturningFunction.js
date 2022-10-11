const greet = function (greeting) {
  return function (name) {
    console.log(`${gretting} ${name}`);
  };
};
greet("hehy");
