// 증감(++/--) 연산자 

// 1) 증가 
var number = 1;
number++;  // 2, 해당 연산자를 통해 number의 값이 1 증가했다.라는 의미 
number = number + 1;  // 3
++number;  // 4, 1씩 또 증가 
// console.log(number);

// var result = number++;
var result = ++number;
console.log(result);
console.log(number);

// 만약 변수 앞에 ++가 생기면, number에서 피연산자의 값을 먼저 +1을 수행하고나서 result에게 해당 값을 넘겨준다. 
// 만약 변수 뒤에 ++가 생기면, 해당 number 값을 먼저 준다. 해당 값을 먼저주고나면 그 다음에 자기 값 1을 더 하는 것이다.

// 2) 감소
var number2 = 1;
number2--;  // 0
--number2; // -1
console.log(number2);

console.log("=======실습========");

// 연산자 과제 
// 1. 산술 연산자 
console.log(1 + 1);  // 2
console.log(1 % 1);  // 0
console.log(3 ** 2);  // 9

console.log(+"152");  // 152
console.log(+"Hello"); // NaN

var number3 = 100;
var result3;

number3++; // 101
result3 = --number3; // 100
console.log(number3); // 100
console.log(result3); // 100

// 2. 할당 연산자 
var number4 = 0;
number4 += 10; // 10
console.log(number4); // 10

number4 *= 10;  
console.log(number4); // 100

// 3. 비교 연산자 
console.log(1 === 1);  // true
console.log(1 !== 100); // true
console.log(1 === "1"); // false
console.log(1 == "1"); // true
console.log(100 <= 100); // true
console.log(100 < 100); //false

// 4. 논리 연산자 
console.log(true && false); // false
console.log(true && "개발자"); // 개발자 

console.log(true || true); // true
console.log(1 || true); // 1

console.log(!true); // false
console.log(!0); // true

console.log(isNaN(NaN)); // true
console.log(isNaN(true)); // false

// 4. ttypeof 연산자
console.log(typeof "hello"); // string
console.log(typeof null); // object
