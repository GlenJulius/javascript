# JavaScript Advanced Functions: First-Class Functions Lab

## Overview

This lab demonstrates how JavaScript treats functions as *first-class objects*. We explore how to:
- Assign functions to variables
- Store functions in arrays
- Pass functions as arguments
- Return functions from other functions
- Use functions to dynamically operate on data

All examples are based on a fictional scooter-taxi service called **Scuber**.

## Learning Goals

- Understand how to assign functions to variables
- Store functions in a data structure
- Write higher-order functions (functions that return other functions)
- Pass functions as arguments to other functions
- Call a function returned by another function

## Deliverables

### 1. `returnFirstTwoDrivers()`
Returns the first two drivers in an array.

```js
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};
