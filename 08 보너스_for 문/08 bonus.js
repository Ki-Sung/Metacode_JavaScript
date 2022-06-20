// for 문 

// 1. for...in 문 
// 객체의 프로퍼티를 열거하도록 도와주는 반복문
var object = {
    name: "철수",
    age: 20,
    height: 178,
    weight: 70
};

for (var propertyKey in object) {
    console.log(`${propertyKey}: ${object[propertyKey]}`);
}

var user = {
    name: "영희",
    age: 17,
    getName: function () {
        return this.name;
    },
};

for (var key in user) {
    console.log(user[key]);
}

// 배열 객체의 프로퍼티 열거
var array = ["안녕", "나는", "철수야", true, 123];
array.key = "값"; // 배열도 객체이므로 프로퍼티를 추가할 수 있다.

for (var index in array) {
    console.log(`${index}: ${array[index]}`);
}

// 한글 변수명으로 비교 
var 배열변수 = ["안녕", "나는", "철수야", true, 123];
배열변수.프로퍼티_키 = "값"; // 배열도 객체이므로 프로퍼티를 추가할 수 있다.

for (var index in 배열변수) {
    console.log(`${index}: ${배열변수[index]}`);
}

// 배열에서는 for...in문은 권장하지 않음 
// 주로 아래와 같이 사용함 
for (var i = 0; i < 배열변수.length; i++) {
    console.log(배열변수[i]);
}
// 위에 for...in문을 쓸 경우 내가 원하지 않는 "배열변수.프로퍼티_키"를 포함을 시키지 않는다.
// 즉 내가 원하는 배열 요소만 출력하게 할 수 있다.

//배열에서는 아래와 같은 for문을 사용한다. 
/* 
for of 
forEach
*/

// 2. for...of 문
// 정확히는 배열의 순회가 아닌 iterable이라는 객체의 순회이며, 배열이 iterable 객체이기에 for...of로 순회가 가능한 것이다.
var array = ["안녕", "나는", "철수야", true, 123];
array.key = "값"; // 배열도 객체이므로 프로퍼티를 추가할 수 있다.

for (var element of array) {
    console.log(element);
}
// 배열의 요소들만 출력 

// for in으로 바꾸면?
for (var element in array) {
    console.log(element);
}
// 배열의 프로퍼티키(인덱스들)만 출력 

// 3. forEach() 고차 함수
var array1 = ["안녕", "나는", "철수야", true, 123];
array1.key = "값"; // 배열도 객체이므로 프로퍼티를 추가할 수 있다.

array1.forEach(function (element, index, arr) {
    console.log(`요소: ${element}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
});

// for in -> 객체의 프로퍼티 열거 
// for of -> 배열의 요소 열거 
// forEach() -> 배열의 요소 / 인덱스 / 본인 자체(this) 열거
