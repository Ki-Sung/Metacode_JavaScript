// 함수 
// 수학의 함수는 입력에 따른 출력을 정의한 것이다. 
// 함수는 입력 -> 몸체 -> 출력 이런 형식을 띄고 있다. 

// 함수 정의 
function f(x) {
    return x ** 2;  // function안의 내용이 몸체 / return으로 출력 해준다. (반환값)
}

// 함수 호출 
console.log( f(3) ); // 9 -> f(3): 입력

// 함수의 구조 
// 함수의 정의
function 함수이름(매개변수1, 매개변수2) {
    // 함수 몸체
    // ...

    // 반환 값
    return 매개변수1 + 매개변수2;
}

var 인수1 = 1;
var 인수2 = 2;

// 함수 호출
함수이름(인수1, 인수2); // 3;

// 코드 재사용 사례 
function add(x, y){
    return x + y;
}

console.log(add(1,2));
console.log(add(100, 500));
console.log(add(-200, 200));

// 유지보수 사례 
// 중복된 코드 

// 1번 중복
var string = "문자열123";
var onlyString = "";

for (var i = 0; i < string.length; i++) {
  // 문자열에 존재하는 숫자를 제외하고 문자만 분류해준다.
if (isNaN(string[i])) onlyString += string[i];
}
console.log(onlyString); // "문자열"

// 2번 중복
string = "문52자592881열";
onlyString = ""

for (var i = 0; i < string.length; i++) {
    // 문자열에 존재하는 숫자를 제외하고 문자만 분류해준다.
    if (isNaN(string[i])) onlyString += string[i];
}
  console.log(onlyString); // "문자열"

// 중복된 코드를 함수로 나타내어 유지보수에 용의하게 짠 코드 
function getOnlyString(string) {
    var onlyString = "";

    for (var i = 0; i < string.length; i++) {
      // 문자열에 존재하는 숫자를 제외하고 문자만 분류해준다.
    if (isNaN(string[i])) onlyString += string[i];
    }
    return onlyString;
}
var onlyString = "";

onlyString = getOnlyString("문자열123"); // "문자열"
onlyString = getOnlyString("문52자592881열"); // "문자열"
onlyString = getOnlyString("39119문238자4829열"); // "문자열"
onlyString = getOnlyString("581문자482971249열489284"); // "문자열"

// 매개변수의 타입 검사 
function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number')
        throw new TypeError('인수는 숫자 타입이어야 합니다.');
    
    return x + y;
}

add(1); // TypeError: 인수는 숫자 타입이어야 합니다.
add('Hello', 'World'); // TypeError: 인수는 숫자 타입이어야 합니다. 

function add(a = 0, b = 0) {   // 초기값 0으로 설정 
    return a + b;
}

console.log(add());     // 0 - 만약 인수를 넣지 않았으면  초기값이 0으로 설정되어 있으므로 결과는 0이다
console.log(add(1));    // 1  - 인수를 하나만 넣으면 a=1, b=0 이므로 결과는 1이다.
console.log(add(4));    // 4  - 인수를 하나만 넣으면 a=4, b=0 이므로 결과는 4이다.
console.log(add(1, 4)); // 5 - 인수를 모두 지정하면 원하는 값이 나온다. 

// 매개변수가 많은 경우
function add(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}

add(1, 2, 3, 4, 5, 6); // 21

// arguments를 이용한 최적화
function add() {
    return Array.from(arguments).reduce((acc, con) => acc + con);
}
add(1, 2, 3, 4, 5, 6); // 21

// "나머지 매개변수"를 이용한 최적화
function add(...numbers) {
    return numbers.reduce((acc, con) => acc + con);
}
add(1, 2, 3, 4, 5, 6); // 21

// 배열 객체를 이용한 최적화
function add(numbers) {
    return numbers.reduce((acc, con) => acc + con);
}
add([1, 2, 3, 4, 5, 6]); // 21

// 다른 예제 
// 최적화 전
function saveUser(name, age, nickname, sex, height, weight) {
    DB.save(name, age, nickname, sex, height, weight)
}
saveUser('철수', 20, '용광로', '남자', 180, 80);

// 최적화 후
var user = {
    name: '철수',
    age: 20,
    nickname: '용광로',
    sex: '남자',
    height: 180,
    weight: 80
};

function saveUser(user) {
    DB.save(user)
}
saveUser(user);

// 함수 과제 
// 1. 매개변수 2개를 곱셈한 값을 반환하는 함수를 만드시오 
function product(x, y) {
    return x * y;
}
console.log(product(5, 2));

// 2. 영어 문자열을 인수로 전달하면 첫 번째 알파벳을 반환하는 함수를 만드시오 
function getFirstAlpabet(str) {
    return str[0];
}
console.log(getFirstAlpabet('Hello Word'));

// 3, 숫자를 인수로 전달하면 짝수가 맞는지 검사한 후 불리언 값을 반환하는 함수를 만드시오 
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(50));

function isEven(number) {
    return !(number % 2);  // -> !0 or !1
}
console.log(isEven(43));