// 데이터 타입 
/* 
1. 원시 타입
2. 객체 타입 
*/

// 원시 타입 
/*
1. Number (숫자)
2. String (문자열)
3. Boolean (불리언)
4. undefined (정의되지 않은)
5. null (비어있는)
6. Symbol (심벌)
*/

// 객체 타팁: 원시타입을 제외한 모든 타입 

// 1. Number (숫자)
var number = 1;
console.log(typeof number, number);

// 2. String (문자열)
// -> 큰 따옴표(""), 작은 따옴표(''), 백틱(``)  -> 각각 차이가 있다.
var string = "문자열";
console.log(typeof string, string);

var string2 = "Aone입니다."
console.log("안녕하세요" + string2);

// 사실상  코드로 보았을 때 위와같이 사용하면 보기가 너무 좋지 않다. 
// 좀 더 깔끔하게 하기위해 사용하는 것이 바로 백틱 이다. 

console.log(`안녕하세요 ${string2}`);

// 3. Boolean (불리언)
// 주로 제어문에 사용한다.
// -> 그렇다, 아니다 
// -> True, False
var boolean = true;
console.log(typeof boolean, boolean);
if (true) console.log("참입니다.");
if (false) console.log("참입니다.");  // 결과가 출력되지 않음

// 4. undefined (정의되지 않은)
// 변수안에 값을 할당하지 않았다는 의미
var a ;
console.log(typeof a, a); 
// undefined를 typeof와 변수를 출력해보면 색상이 다르다
// 만약 typeof로 변수를 출력했을 때 문자열로 반환한다. (진한 흰색)
// var a = undefined 라고 사용할 수 있다. 하지만 이렇게 사용하지 않는다. 절대 

// 5. null (비어있는)
var b = null;
console.log(typeof b, b);
// 출력해보면 타입은 object 결과는 null 값으로 출력 된다. 
// 보통은 타입이름을 그대로 쓰는데 null은 그렇지 않다. 왜그럴까?
// 해당 사항은 자바스크립트 개발 초기에 이루어진 일종의 실수이다. 
// 해당 사항으 수정하고 싶으나, 만약 수정하게 되면 무수히 많은 코드에 영향을 주기 떄문에 아직까지 수정하지 않고 있다. 
// 만약 타입을 null 로 출력하고 싶으면 아래의 방법을 이용하자 
if (b === null) console.log("null 입니다.");

// 6.  Symbol (심벌)
// ES6에서 도입 
// -> 다른 식별자와 중복되지 않는 유일 키를 만들 때 사용한다. 
// -> 주로 객체 타입의 프로퍼티 키를 만들 때 사욯한다.
var sym = Symbol();
console.log(typeof sym, sym);
// Symbol 안에는 어떠한 티입도 다 들어갈 수 있다.
var sym = Symbol("심벌");
console.log(typeof sym, sym);

var sym = Symbol(123);
console.log(typeof sym, sym);

var sym = Symbol(true);
console.log(typeof sym, sym);

var sym = Symbol(null);
console.log(typeof sym, sym);

// 심벌 값은 생성되는 모든 심벌이 다 다르다 
// 어떤 값이더라도 심벌 값이라도 생성되는 순간 서로 다른 심벌 값을 가지게 된다.
var sym = Symbol("key");
var sym2 = Symbol("key");
console.log(typeof sym === sym2);

console.log("======객체타입======");

// 객체 타입 
// -> object
var obj = {};
console.log(typeof obj, obj);

var person = {
    name: "일론머스크",
    age: 45,
    say: function () {
        console.log("doge to the moon! 화성 갈끄니까")
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.say());

// 객체를 통해서 조금 더 사람의 관점에서 프로그래밍을 할 수 있게 된 것이다. 

console.log("======과제타임======");

// 변수와 데이터 타입 과제 

// 1. var 키워드를 사용하여 숫자 타입 변수를 만드시오.
var samsung = 64000;
console.log(typeof samsung, samsung);

// 2. let 키워드를 사용하여 문자열 타입의 변수를 만드시오.
let myFavorite = "삼성전자";
console.log(typeof myFavorite, myFavorite);

// 3. const 키워드를 사용하여 null 타입 변수를 만드시오.
const nothing = null;
console.log(typeof nothing, nothing);

if (nothing === null) console.log("null 값 입니다.");

// 4. var 키워드를 사용하여 undefined 타입 변수를 만드시오.
var under ;
console.log(typeof under, under);

// 5. var 키워드를 사용하여 불리언 타입 변수를 만드시오.
var bool = true;
console.log(typeof bool, bool);

if (true) console.log("참말입니다.");
if (false) console.log("거짓입니다.");  // 결과가 출력되지 않음

// 6. var 키워드를 사용하여 Symbol 타입 변수를 만드시오.
var idol = Symbol("BTS");
console.log(typeof idol, idol);

//  7. var 키워드를 사용하여 객체 타입 변수를 만드시오.
var kospi = {
    todayStock: 2595.87,
    dayToday: "-29,57(-1.13%)",
    comment: function () {
        console.log("너무 많이 떨어졌네..빼야하나?")
    }
}

console.log(kospi.todayStock);
console.log(kospi.dayToday);
console.log(kospi.comment());