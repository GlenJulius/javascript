// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of the two functions above
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Higher-order function: takes multiplier, returns a fare multiplier function
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// 5. Doubles fare using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// 6. Triples fare using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// 7. Chooses a driver function to apply to the drivers array
const selectDifferentDrivers = function(drivers, driverFunction) {
  return driverFunction(drivers);
};
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(returnFirstTwoDrivers(drivers)); // ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(drivers));  // ['Amari', 'Mo']
console.log(selectingDrivers[0](drivers));   // ['Antonia', 'Nuru']
console.log(selectingDrivers[1](drivers));   // ['Amari', 'Mo']

console.log(fareDoubler(10)); // 20
console.log(fareTripler(10)); // 30

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));  // ['Amari', 'Mo']
