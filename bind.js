const lufthansa = {
    airline: "lufthansa",
    iatacode: "lh",
    bookings: [],
    book(flightNumber, name) {
      console.log(`${name} booked seat at ${this.airline} 
       flight${this.iatacode} ${flightNumber}`);
    },
  };
  lufthansa.book(240, "john");
  
  lufthansa.book(280, "gazzaniga");
  
  
  const eurowings = {
    airline:"Eurowings",
    iatacode:"EW",
    bookings:[],
    lastname:[],
  }
  const book = lufthansa.book;
  // book(8,'lufthansa');
   book.call(eurowings,8,'lufthansa');
   console.log(eurowings);
  
   book.call(lufthansa,8,'eurowing');
   console.log(lufthansa);
  
   const swiss = {
    airline:"Eurowings",
    iatacode:"EW",
    bookings:[],
    lastname:[],
   }
   book.call(swiss,600,'angela yu');
   console.log(swiss);
  
   const flightinfo = [80,'gerrard ']
   book.apply(swiss,flightinfo);
   console.log(swiss);



   //////////bind method
   const bookew = book.bind(eurowings);
   const booklh = book.bind(lufthansa);
   const booklx= book.bind(swiss);

   bookew(23,'stephen williams');
   const bookew28 = book.bind(eurowings,28);
   bookew28('john afelay');
   bookew28('bruk getahun');
  