// 1. var  -> 변수를 선언하기 위한 키워드 (ESS 이하 문법, 현재는 사용하지 않는 것을 권장하지만, 가장 기본이 되는 문법이니 여기서는 사용하도록 한다.)
// 2. let -> 변수를 선언하기 위한 키워드 (ES6+ 문법에 도입된 변수 선언자)
// 3. const -> 상수를 선언하기 위한 키워드
// 참고로 상수는 값을 재할당 할 수 없다. 

// 자바스크립트 초기 선언자
var number = 123;
console.log(number);
number = 567;
console.log(number);

// ES6 버전부터 등장 
let number2 = 2;
console.log(number2);
number2 = 3;
console.log(number2);

// ES6 버전부터 등장 
const number3 = 3;
console.log(number3);

let 변수 = "let은 변수 선언자입니다.";
const 상수 = "const는 상수 선언자입니다.";

console.log(변수); // let은 변수 선언자입니다.
console.log(상수); // const는 상수 선언자입니다.

변수 = 123;
// 상수 = 123; // Uncaught TypeError: Assignment to constant variable.

// 식별자 위반 1 - 식별자는 특수문자를 포함할 수 없다.
// var number# = 1;
// console.log(number#);

// 식별자 위반 2 - 숫자로 시작하는 것은 허용하지 않는다.
// var 1number = 1;
// console.log(1number);

// 식별자 위반 3 - 예약어를 변수 식별자로 사용할 수 없다. 
// var let = 1;
// console.log(let);
// var로 예약어 let을 변수로 선언하니 작동한다. -> var의 문제점 중 하나 그래서 최근 문법은 var 대신 let으로 사용한다.

// let let = 1;
// console.log(let);
// let을 이용하니 예약어는 사용불가라는 오류가 뜬다. 

// 좋은 number 변수 예시 
var numbers = [1, 2, 3];  // 배열
console.log(numbers);