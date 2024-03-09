// Function that returns the sum of 2 numbers
function sum(a, b) {
    return a + b;
  }
  
  // Function that returns the product of 2 numbers
  function product(a, b) {
    return a * b;
  }
  
  // Function that returns the difference of 2 numbers
  function difference(a, b) {
    return a - b;
  }
  
  // Function that returns the division of 2 numbers
  function division(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Cannot divide by zero";
    }
  }
  
  // Function that receives an array and returns the sum of all the elements inside that array
  function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Function that receives an array and returns the greatest value inside that array
  function maxArray(arr) {
    return Math.max(...arr);
  }
  
  // Function that receives an array and returns the smallest number from that array
  function minArray(arr) {
    return Math.min(...arr);
  }
  
  // Function that receives an array of numbers and returns the average of the numbers
  function averageArray(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
  }
  
  // Function that combines two arrays into one single array
  function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
  // Function that displays a pattern like this: * * * * *
  function displayPattern1(rows, cols) {
    for (let i = 0; i < rows; i++) {
      let row = '';
      for (let j = 0; j < cols; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  
  // Function that displays a pattern like this: 1 1 1 1
  function displayPattern2(rows) {
    for (let i = rows; i > 0; i--) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '1 ';
      }
      console.log(row);
    }
  }
  
  // Function that displays a pattern like this: 1 1 1 1
  function displayPattern3(rows) {
    for (let i = rows; i > 0; i--) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '1 ';
      }
      for (let j = 0; j < rows - i; j++) {
        row += '0 ';
      }
      console.log(row);
    }
  }
  
  // Function that displays a pattern like this: 1 1 1 1 1
  function displayPattern4(size) {
    for (let i = 0; i < size; i++) {
      let row = '';
      for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
          row += '1 ';
        } else {
          row += '0 ';
        }
      }
      console.log(row);
    }
  }
  
  // Function that displays a pattern like this:  1
  //                                            1 1
  //                                            1 1 1
  //                                            1 1 1 1
  function displayPattern5(size) {
    for (let i = 0; i < size; i++) {
      let row = '';
      for (let j = 0; j < size - i - 1; j++) {
        row += '  ';
      }
      for (let j = size - i - 1; j < size; j++) {
        row += '1 ';
      }
      console.log(row);
    }
  }
  // Function to reverse the order of the elements inside the given array
function reverseArray(arr) {
    return arr.reverse();
  }
  
  // Function to sort and arrange elements of the array in ascending order
  function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Function to display the first 3 and last 3 numbers of the sorted array
  function displayFirstAndLast3(arr) {
    const sortedArr = sortAscending(arr);
    const first3 = sortedArr.slice(0, 3);
    const last3 = sortedArr.slice(-3);
    return [...first3, ...sortedArr, ...last3];
  }
  
  // Function to display the first 3 numbers of the sorted array
  function displayFirst3(arr) {
    const sortedArr = sortAscending(arr);
    return sortedArr.slice(0, 3);
  }
  
  // Function that determines the age classification of people
  function ageClassification(age) {
    if (age >= 0 && age <= 12) {
      return "MIMICRY";
    } else if (age >= 13 && age <= 19) {
      return "SELF-DISCOVERY";
    } else if (age >= 20 && age <= 45) {
      return "COMMITMENT";
    } else {
      return "LEGACY";
    }
  }
  
  // Function that calculates the BMI of a person and returns the specific classification
  function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
  
  // Function that counts the number of characters in a string (excluding spaces)
  function countCharacters(str) {
    return str.replace(/\s/g, "").length;
  }
  
  // Function that displays an even number between 1 and 100
  function displayEvenNumbers() {
    for (let i = 2; i <= 100; i += 2) {
      console.log(i);
    }
  }
  
  // Function that calculates the square of a number
  function squareNumber(num) {
    return num * num;
  }
  
  // Function that checks if a number is even
  function isEven(num) {
    return num % 2 === 0;
  }
  
  // Function that checks if a number is odd
  function isOdd(num) {
    return num % 2 !== 0;
  }
  
  // Function that returns the maximum of two numbers
  function maxNumber(a, b) {
    return Math.max(a, b);
  }
  
  // Function that returns the minimum of two numbers
  function minNumber(a, b) {
    return Math.min(a, b);
  }
  
  // Function that calculates the factorial of a number
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    }
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  
  // Function that reverses a string
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  // Function that checks if a string is a palindrome
  function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/\s/g, "");
    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr;
  }
  
  // Function that displays odd numbers between 1 and 100
  function displayOddNumbers() {
    for (let i = 1; i <= 100; i += 2) {
      console.log(i);
    }
  }
  
  // Function that displays multiples of 5
  function displayMultiplesOf5() {
    for (let i = 5; i <= 100; i += 5) {
      console.log(i);
    }
  }
  
  // Function that returns the square root of a given number
  function squareRoot(num) {
    return Math.sqrt(num);
  }
  
  // Function that returns the bigger number of two
  function biggerNumber(a, b) {
    return a > b ? a : b;
  }
  
  // Function that changes a string into capital letters
  function toUpperCase(str) {
    return str.toUpperCase();
  }
  // Function that counts the number of vowels in a string
function countVowels(str) {
    return str.match(/[aeiou]/gi).length;
  }
  
  // Function that counts the number of consonants in a string
  function countConsonants(str) {
    return str.match(/[^aeiou\s\d\W_]/gi).length;
  }
  
  // Function that finds the index of a given character in a string
  function findCharIndex(str, char) {
    return str.indexOf(char);
  }
  
  // Function that removes duplicates from an array
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  // Function that checks if a given value is present in an array
  function isValuePresent(arr, value) {
    return arr.includes(value);
  }
  
  // Function that squares each element of an array
  function squareElements(arr) {
    return arr.map(num => num * num);
  }
  
  // Function that returns the first n elements of an array
  function getFirstNElements(arr, n) {
    return arr.slice(0, n);
  }
  
  // Function that removes the last element from an array
  function removeLastElement(arr) {
    return arr.slice(0, arr.length - 1);
  }
  
  // Function that sorts an array of numbers in ascending order
  function sortAscending(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Function that checks if all elements in an array are positive
  function areAllPositive(arr) {
    return arr.every(num => num > 0);
  }
  
  // Function that calculates the sum of the even numbers in an array
  function sumOfEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
  }
  
  // Function that converts an array of strings to uppercase
  function convertToUpperCase(arr) {
    return arr.map(str => str.toUpperCase());
  }
  
  // Function that generates a random number between a given range
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function that returns the reverse of an array
  function reverseArray(arr) {
    return arr.reverse();
  }
  
  // Function that calculates the Fibonacci sequence up to n numbers
  function fibonacciSequence(n) {
    let fibArr = [0, 1];
    for (let i = 2; i < n; i++) {
      fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr;
  }
  
  // Function that checks if an array is sorted in ascending order
  function isSortedAscending(arr) {
    return arr.every((val, i, arr) => !i || val >= arr[i - 1]);
  }
  
  // Function that filters out negative numbers from an array
  function filterOutNegativeNumbers(arr) {
    return arr.filter(num => num >= 0);
  }
  
  // Function that finds the median of an array of numbers
  function findMedian(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);
    return sortedArr.length % 2 !== 0 ? sortedArr[mid] : (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  }
  
  // Function that capitalizes the first letter of each word in a sentence
  function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  // Function that checks if a given year is a leap year
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  // Function that finds the intersection of two arrays
  function findArrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
  }
  
  // Function that checks if a number is prime
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Function that returns the power of a number (base, exponent)
  function powerOfNumber(base, exponent) {
    return Math.pow(base, exponent);
  }
  
  // Function that calculates the area of a rectangle
  function calculateRectangleArea(length, width) {
    return length * width;
  }
  
  // Function that calculates the perimeter of a rectangle
  function calculateRectanglePerimeter(length, width) {
    return 2 * (length + width);
  }
  
  // Function that checks if a given string contains only digits
  function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
  }
  

  // Calculator Switch
function calculatorSwitch(num1, operator, num2) {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = "Invalid operator";
    }
    return result;
  }
  
  // Day of Week
  function dayOfWeek(dayNum) {
    let dayName;
    switch (dayNum) {
      case 1:
        dayName = "Sunday";
        break;
      case 2:
        dayName = "Monday";
        break;
      case 3:
        dayName = "Tuesday";
        break;
      case 4:
        dayName = "Wednesday";
        break;
      case 5:
        dayName = "Thursday";
        break;
      case 6:
        dayName = "Friday";
        break;
      case 7:
        dayName = "Saturday";
        break;
      default:
        dayName = "Invalid day number";
    }
    return dayName;
  }
  
  // Grade System
  function gradeSystem(score) {
    let grade;
    switch (true) {
      case score >= 90:
        grade = "A";
        break;
      case score >= 80:
        grade = "B";
        break;
      case score >= 70:
        grade = "C";
        break;
      case score >= 60:
        grade = "D";
        break;
      default:
        grade = "F";
    }
    return grade;
  }
  
  // Traffic Light
  function trafficLight(colorNum) {
    let color;
    switch (colorNum) {
      case 1:
        color = "Red";
        break;
      case 2:
        color = "Yellow";
        break;
      case 3:
        color = "Green";
        break;
      default:
        color = "Invalid color number";
    }
    return color;
  }
  
  // Month Name
  function monthName(monthNum) {
    let month;
    switch (monthNum) {
      case 1:
        month = "January";
        break;
      case 2:
        month = "February";
        break;
      case 3:
        month = "March";
        break;
      case 4:
        month = "April";
        break;
      case 5:
        month = "May";
        break;
      case 6:
        month = "June";
        break;
      case 7:
        month = "July";
        break;
      case 8:
        month = "August";
        break;
      case 9:
        month = "September";
        break;
      case 10:
        month = "October";
        break;
      case 11:
        month = "November";
        break;
      case 12:
        month = "December";
        break;
      default:
        month = "Invalid month number";
    }
    return month;
  }
  
  // Simple Menu
  function simpleMenu(option) {
    switch (option) {
      case 1:
        // Operation 1
        break;
      case 2:
        // Operation 2
        break;
      case 3:
        // Operation 3
        break;
      default:
        console.log("Invalid option");
    }
  }
  
  // Currency Converter
  function currencyConverter(amount, sourceCurrency, targetCurrency) {
    let result;
    switch (`${sourceCurrency}_${targetCurrency}`) {
      case 'USD_EUR':
        result = amount * 0.85;
        break;
      case 'EUR_USD':
        result = amount * 1.18;
        break;
      // Add more currency conversions as needed
      default:
        result = "Invalid currency pair";
    }
    return result;
  }
  
  // Shape Area
  function shapeArea(shape, measurement) {
    let area;
    switch (shape) {
      case 'circle':
        area = Math.PI * Math.pow(measurement, 2);
        break;
      case 'square':
        area = Math.pow(measurement, 2);
        break;
      case 'triangle':
        area = (Math.sqrt(3) / 4) * Math.pow(measurement, 2);
        break;
      default:
        area = "Invalid shape";
    }
    return area;
  }
  
  // Season Detector
  function seasonDetector(month) {
    let season;
    switch (month) {
      case 12:
      case 1:
      case 2:
        season = "Winter";
        break;
      case 3:
      case 4:
      case 5:
        season = "Spring";
        break;
      case 6:
      case 7:
   // Loops on Arrays

// Array Sum
function arraySum(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
    }
    return sum;
  }
  
  // Even Numbers
  function printEvenNumbers(arr) {
    for (let num of arr) {
      if (num % 2 === 0) {
        console.log(num);
      }
    }
  }
  
  // Array Reverse
  function reverseArray(arr) {
    return arr.reverse();
  }
  
  // Array Filter
  function filterArray(arr) {
    return arr.filter(num => num >= 10);
  }
  
  // Array Average
  function arrayAverage(arr) {
    let sum = arraySum(arr);
    return sum / arr.length;
  }
  
  // Array Search
  function searchArray(arr, target) {
    return arr.indexOf(target);
  }
  
  // Duplicate Elements
  function findDuplicateElements(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
    return duplicates;
  }
  
  // Array Sorting
  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  } 
  
  // Create a function that returns the sum of 2 numbers
function sum(a, b) {
    return a + b;
  }
  
  // Create a function that returns the product of 2 numbers
  function product(a, b) {
    return a * b;
  }
  
  // Create a function that returns the difference of 2 numbers
  function difference(a, b) {
    return a - b;
  }
  
  // Create a function that returns the division of 2 numbers
  function division(a, b) {
    return a / b;
  }
  
  // Create a function that receives an array and returns the sum of all the elements inside that array
  function sumArray(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
  }
  
  // Create a function that receives an array and returns the greatest value inside that array
  function maxArray(arr) {
    return Math.max(...arr);
  }
  
  // Create a function that receives an array and returns the smallest number from that array
  function minArray(arr) {
    return Math.min(...arr);
  }
  
  // Create a function that receives an array of numbers and returns the average of the numbers
  function averageArray(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  }
  
  // Create a function that combines two arrays into one single array
  function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  // Create a function that displays a pattern like this:
  function displayPattern1() {
    for (let i = 0; i < 4; i++) {
      console.log('* * * * *');
    }
  }
  
  // Create a function that displays a pattern like this:
  function displayPattern2() {
    for (let i = 4; i > 0; i--) {
      let pattern = '';
      for (let j = 0; j < i; j++) {
        pattern += '1 ';
      }
      console.log(pattern);
    }
  }
  
  // Create a function that displays a pattern like this:
  function displayPattern3() {
    for (let i = 4; i > 0; i--) {
      let pattern = '';
      for (let j = 0; j < i; j++) {
        pattern += '1 ';
      }
      for (let k = 0; k < 4 - i; k++) {
        pattern += '0 ';
      }
      console.log(pattern);
    }
  }
  
  // Create a function that displays a pattern like this:
  function displayPattern4() {
    for (let i = 0; i < 5; i++) {
      let pattern = '';
      for (let j = 0; j < 5; j++) {
        if (i === 0 || i === 4 || j === 0 || j === 4) {
          pattern += '1 ';
        } else {
          pattern += '0 ';
        }
      }
      console.log(pattern);
    }
  }
  
  // Create a function that displays a pattern like this:
  function displayPattern5() {
    let space = ' ';
    for (let i = 0; i < 4; i++) {
      let pattern = '';
      for (let j = 0; j < 4; j++) {
        if (j === 3 - i) {
          pattern += '1';
        } else {
          pattern += space;
        }
      }
      console.log(pattern);
    }
  }
  
  // Given an array like this:
  var array = [1,3,4,3,7,8,0,12,19];
  // Create a function to reverse the order of the elements inside the given array.
  function reverseArray(arr) {
    return arr.reverse();
  }
  
  // Given an array like this: 
  var someNumbers = [3,4,8,2,1,2,2,6,3,4];
  // Create a function to sort and arrange these elements of the array in ascending order.
  function sortArray(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  // Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted array
  var modifiedArray = array.slice(0, 3).concat(sortArray(array)).concat(array.slice(-3));
  
  // From the same sorted array, also display the first 3 numbers.
  var firstThreeNumbers = modifiedArray.slice(0, 3);
  
  // Create a function that determines the age classification of people
  function ageClassification(age) {
    if (age >= 0 && age <= 12) {
      return 'MIMICRY';
    } else if (age >= 13 && age <= 19) {
      return 'SELF-DISCOVERY';
    } else if (age >= 20 && age <= 45) {
      return 'COMMITMENT';
    } else {
      return 'LEG'
    }
}