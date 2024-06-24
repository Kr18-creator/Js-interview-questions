// Problem 1: Debounce
// Write a function debounce that takes in a function func and a
// delay wait as arguments, and returns a new function that when
// invoked, delays invoking func until after wait milliseconds have
// elapsed since the last time the debounced function was invoked.

// Requirements:
// 1. The debounce function should return a new function that when
// invoked, delays invoking the original function func until after
// a specified wait period has elapsed.
// 2. If the debounced function is invoked again before wait
// milliseconds have elapsed since the last invocation, the
// timer should reset, and the function should be invoked again
// after wait milliseconds have passed since the latest invocation.

function saveInput(...args) {
    console.log("Saving input...", ...args);
  }
  
  function debounce(func, wait) {
    // TODO
    let timer; // number - 4
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, wait);
    };
    // 4
  }
  
  // Debounce the function with a wait time of 300 milliseconds
  const debouncedSaveInput = debounce(saveInput, 3000);
  // debouncedSaveInput = 4
  // 4() ???
  debouncedSaveInput("John");
  debouncedSaveInput("Bob", "Rashmi"); // Saving input...
  
  // --------------------------------------
  // Problem 2: ATM
  // ATM has an unlimited amount of bills
  // in denominations [500, 200, 100, 50, 20, 5, 2, 1].
  // It is required to write a function that gives the requested amount
  // to the client in the largest possible bills.
  // For example, if the client requested 874, ATM should issue
  // the following set of bills - [500, 200, 100, 50, 20, 2, 2]
  
  const banknotes = [500, 200, 100, 50, 20, 5, 2, 1];
  
  function getCash(amount) {
    const banknotes = [500, 200, 100, 50, 20, 5, 2, 1];
    // TODO
    let result = [];
    // if (banknotes.includes(amount)) {
    //   result.push(amount);
    // }
  
    // 1000
    // 1000 - 500 = 500 => true
    // result [500]
    // go to 200
  
    for (let i = 0; i < banknotes.length; i++) {
      while (amount - banknotes[i] >= 0) {
        amount = amount - banknotes[i];
        result.push(banknotes[i]);
      }
    }
    return result;
  
    // 874 -> 500
    // 874 - 500 = 374
    // 374 - 500 = ?
    // 500 -> 200
    // 374 - 200 = 174
    //
  }
  
  console.log(getCash(874)); // [500, 200, 100, 50, 20, 2, 2]
  console.log(getCash(1000)); // [500, 500]
  