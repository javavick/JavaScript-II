// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function pureDisgust() {
  let worstFruit = "olive";

  function hatred() {
    console.log(`There's nothing I hate more than a damn ${worstFruit}.`);
  }

  hatred();
}

pureDisgust();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;

  return function() {
    count = count + 1;
    return count;
  };
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());

/*==================== vvv-VISUAL SEPARATOR FOR CONSOLE-vvv ====================*/
console.log("==========");
/*==================== ^^^-VISUAL SEPARATOR FOR CONSOLE-^^^ ====================*/

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 5;

  const incOrDec = {
    increment: function() {
      count = count + 1;
      return count;
    },
    decrement: function() {
      count = count - 1;
      return count;
    }
  };

  return incOrDec;
};

const newFactory = counterFactory();

console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.increment());
console.log(newFactory.decrement());
console.log(newFactory.decrement());
