const restaurant = new Map();
restaurant.set("name", "classico italiano");
restaurant.set(1, "addis ababa");
restaurant.set(2, "bahir dar");

restaurant
  .set("department", "computer science")
  .set("department", "computer science")
  .set("department", "computer science")
  .set("department", "computer science")
  .set("graduation year", 2023);

console.log(restaurant.get(1));
console.log(restaurant.delete(1));
console.log(restaurant.size);
console.log(restaurant.has("department", 0));
console.log(restaurant);
console.log(restaurant.clear());

const question = new Map([
  ["quwstion", "what is the best proggraming langugue"],
  [1, "javascript"],
  [2, "c++"],
  [3, "pascal"],
  [4, "haskel"],
  [5, "objective c"],
  [6, "swift"],
  ["correct", 1],
  [true, "congartulation"],
  [false, "trya again"],
]);

console.log(questions);
console.log(Object.entries(question));
