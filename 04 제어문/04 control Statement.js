// 제어문 
/*
1. 블록문
2. 조건문
3. 반복문 
*/

// 1. 블록문 
{
    var number = 1;
    console.log(1);
}

// {}를 쓰는 것이 하나 더 있는데 바로 객체 이다. 
// 블록문 같은 경우 {}안에 프로그래밍을 하면 되지만, 객체 같은 경우 프로그래밍을 할 수 없다. 
// 그리고 블록문 같은 경우 {}뒤에 ;를 안 다루지만, 객체는 다룬다는 차이점이 있다.

// var obj = {
//     var number = 1;
//     console.log(1);
// };

// 2. 조건문 
// var 성별 = "남자";
var 성별 = "여자";
if (성별 === "남자") console.log("안녕");
else console.log("잘가");

// 만약 조건문에 여러줄을 작성하고 싶을 떄 {} 블록문을 사용한다. 
var 성별 = "남자";
if (성별 === "남자") {
    console.log("안녕");
    console.log("디지몬");
}else console.log("잘가");

// 다른 예시 
var 성별 = "남자2";
var 키 = 180;
if (키 > 200) {
    console.log("너무커");
}else if (키 > 190) {
    console.log("이것도 큰데?");
} else {
    console.log("음... soso")
}

// 조건문에는 switch 문도 있다.  
switch (성별) {    // switch (변수)
    case "남자2":  // 변수 값을 case에 넣어준다.
        console.log("안녕");
        break;
    case "여자":
        console.log("잘가");
        break;
    default:    // 조건문에 else와 같은 역할 
        console.log("나는 기본값이야");
}
// switch 문은 한 케이스가 일치하게 되면 뒤에 있던 다른 케이스들도 모두 실행되어 버린다.
// 케이스 하나만 걸고 싶으면 break를 건다.

// if 문은 범위에 대한 조건이 있을 때, switch문은 명확한 조건이 있을 때 사용한다. 

// 3. 반복문 
// 3-1. for문 선언
for (var i = 0; i === 0; i = i + 1) {
    console.log(`반복문 실행됩니다. i = ${i}`);
    }

for (var i = 0; i < 5; i++) {
    console.log(`${i}`);
        }
console.log(i)
// 반복문도 조건문이다
// 보통 반복문 작성시 증감식을 사용할 때 증감 연산자자를 사용하는 것이 정석이다.

// 3-2. while 문 

var r = 0;
while (r < 5) {
    // 실행문
    console.log(r);
    r++;
}

// var m = -10;
// while (m < 5) {
//     // 실행문
//     console.log(`${m}`);
//     m++;
// }

var m = -10;
while (true) {
    // 실행문
    console.log(`${m}`);
    m++;
    if (m === -5) break;
}

// 3-3. do while 문 
var e = 0;
do {
    // 실행문
    console.log(`${e}`);
    e--;
} while (e > -10);

// do while문의 주 용도는 조건이 안 맞아도 무조건 한 번은 출력하게 한다.

console.log("=======설명끝=======")

// 제어문 과제 
// 1. 숫자 타입은 "숫자", 문자열 타입은 "문자열", 그 외의 타입은 "그 외"를 출력하는 프로그램을 작성하시오
type = "숫자"
if (type = "숫자") {
    console.log("숫자");
}else if (type > "문자열") {
    console.log("문자열");
} else {
    console.log("그 외")
}

var value = "ㅇㅇ";
if (typeof value ==="number") {
    console.log("숫자");
} else if (typeof value ==="string"){
    console.log("문자열");
} else {
    console.log("그 외");
}

// 2. 0 ~ 10 사이의 숫자 중 홀수만 출력하는 프로그램을 작성하시오
for (var w = 0; w <= 10; w++) {
    if (w % 2 === 1) {
        console.log(w);
    }
}

for (var w = 1; w <= 10; w += 2) {
    console.log(w)
    }

// 3. 숫자를 무한하게 입력 받고, 입력 받은 값을 출력한다. 단, 0이 입력될 경우 while문을 빠져나간다. 
var input;
while (Number(input) !== 0) {
    input = prompt();
    console.log(typeof input);
    console.log(input);
}
console.log("0을 입력하여 프로그램을 종료 합니다.")