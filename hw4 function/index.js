//1.Сделайте функцию, которая возвращает квадрат числа. Число
//передается параметром.
function squareNum(b) {
  return b ** 2;
}

console.log(squareNum(5));

//2.Сделайте функцию, которая возвращает сумму двух чисел.

function summOfTwoNum(a, b) {
  return a + b;
}

console.log(summOfTwoNum(100, 200));

//3.Сделайте функцию, которая отнимает от первого числа второе
//и делит на третье.

function NumResult(a, b, c) {
  return (a - b) / c;
}

console.log(NumResult(500, 100, 2));
//4.Сделайте функцию, которая принимает параметром число от 1
//до 7, а возвращает день недели на русском языке.

function dayOfWeek(day) {
  if (day == 1) return "Понедельник";
  else if (day == 2) return "Вторник";
  else if (day == 3) return "Среда";
  else if (day == 4) return "Четверг";
  else if (day == 5) return "Пятница";
  else if (day == 6) return "Суббота";
  else if (day == 7) return "Воскресенье";
}

console.log(dayOfWeek(3));

//5.Сделайте функцию, которая параметрами принимает 2 числа.
//Если эти числа равны - пусть функция вернет true, а если не
//равны - false.
function compareTwoNums(a, b) {
  return a === b;
}

console.log(compareTwoNums(3, 5));
console.log(compareTwoNums(500, 500));
// 6.Сделайте функцию, которая параметрами принимает 2 числа.
// Если их сумма больше 10 - пусть вернет true, а если нет то -
// false.
function compareSumTwoNums(a, b) {
  return a + b > 10;
}

console.log(compareSumTwoNums(3, 5));
console.log(compareSumTwoNums(500, 500));

// 7.Сделайте функцию, которая параметром принимает число и
// проверяет - отрицательное оно или нет. Если отрицательное -
// пусть функция вернет true, а если нет - false.
function compareNumToNull(a) {
  return a < 0;
}

console.log(compareNumToNull(-5));
console.log(compareNumToNull(500));
// 8.Сделайте функцию isNumberInRange, которая параметром
// принимает число и проверяет, что оно больше нуля и меньше
// 10. Если это так - пусть функция возвращает true, если не так -
// false.
function isNumberInRange(a) {
  return a > 0 && a < 10;
}

console.log(isNumberInRange(5));
console.log(isNumberInRange(500));
console.log(isNumberInRange(-5));

// 9.Дан массив с числами. Запишите в новый массив только те
// числа, которые больше нуля и меньше 10-ти. Для этого
// используйте вспомогательную функцию isNumberInRange из
// предыдущей задачи.
let numsArrays = [-3, 3, 6, 9, 30, 300];
let newNumArr = [];
for (i = 0; i < numsArrays.length; i++) {
  if (isNumberInRange(numsArrays[i])) {
    newNumArr.push(numsArrays[i]);
  }
}
console.log(newNumArr.length);
for (let num of newNumArr) {
  console.log(num);
}

// 10. Сделайте функцию getDigitsSum (digit - это цифра), которая
// параметром принимает целое число и возвращает сумму его
// цифр.
function getDigitsSum(num) {
  let sum = 0;
  let str = String(num);
  for (let i = 0; i < str.length; i++) sum += Number(str[i]);
  return sum;
}
console.log(getDigitsSum(123456789));

// 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13.
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
for (let i = 1; i < 2020; i++) {
  if (getDigitsSum(i) == 13) console.log(i);
}

// 12. Сделайте функцию isEven() (even - это четный), которая
// параметром принимает целое число и проверяет: четное оно
// или нет. Если четное - пусть функция возвращает true, если
// нечетное - false.
function isEven(a) {
  return a % 2 === 0;
}
// 13. Дан массив с целыми числами. Создайте из него новый
// массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из
// предыдущей задачи.
let evenNumArr = [];
for (i = 0; i < numsArrays.length; i++) {
  if (isEven(numsArrays[i])) {
    evenNumArr.push(numsArrays[i]);
  }
}
//console.log(evenNumArr.length);
for (let num of evenNumArr) {
  console.log(num);
}
console.log(evenNumArr);
// 14. Сделайте функцию getDivisors, которая параметром
// принимает число и возвращает массив его делителей (чисел,
// на которое делится данное число).
function getDivisors(n) {
  let devisor = n;
  let arr = [];
  while (devisor > 0) {
    if (n % devisor == 0) {
      arr.push(devisor);
    }
    devisor--;
  }
  return arr;
}
console.log(getDivisors(9));

// 15. Дано число. Сложите его цифры. Если сумма получилась
// более 9-ти, опять сложите его цифры. И так, пока сумма не
// станет однозначным числом (9 и менее).
function getPifagorDigit(n) {
  let digit = getDigitsSum(n);
  while (digit > 9) {
    digit = getDigitsSum(digit);
  }
  return digit;
}
console.log(getPifagorDigit(4578214569));
console.log(getPifagorDigit(123456789));

// 16. Напишите стрелочную функцию, которая будет возвращать
// true если строка является палиндромом и false в противном
// случае.

let isPalindrome = (str) => {
  let check = "";
  for (let i = str.length - 1; i >= 0; --i) {
    check += str[i];
  }
  return str == check;
};

console.log(isPalindrome("наган")); // === true
console.log(isPalindrome("ladIT")); // === false
console.log(isPalindrome("топот")); // === true
