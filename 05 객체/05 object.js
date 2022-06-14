// 객체 
// 자바 스크립트는 객체 기반의 프로그래밍 언어다 
// 객체는 사람이나 동물 처럼 어떤 행위를 할 수도 있고, 데이터를 가지고 있을 수도 있다.
var person = {
    name: '철수',
    age: 20
};
console.log(person);

// 메서드 - 객체 내부에 선언된 함수 
var person = {
    name: '철수',
    say: function () {
        console.log(`안녕! 내 이름은 ${this.name}!!`);
    }
};
// 여기서 this는 자기 참조 변수로써 person = this 라고 이해하면 된다. 

console.log(person.name);   // 철수
console.log(person.say());  // 안녕! 내 이름은 철수!!

// 객체는 변경가능한 값이다 
var person = {
    name: '철수',
    age: 20
};
console.log(person.name); // "철수"

person.name = '유리';
console.log(person.name); // "유리"

// object 생성자 함수 
var person = new Object();  // Object() 앞에 new를 붙여 준다.

person.name = '철수';
person.say = function () {
    console.log(`안녕! 내 이름은 ${this.name}!!`);
};

person.say(); // 안녕! 내 이름은 철수!!
console.log(person); // { name: "철수", say: [Function (anonymous)] }

// 생성자 함수
function Person(name) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.name = name;
    this.say = function () {
    console.log(`안녕! 내 이름은 ${this.name}!!`);
    };
}

  // 인스턴스의 생성
var 철수 = new Person('철수');  // 이름이 '철수'인 Person 객체를 생성
var 유리 = new Person('유리'); // 이름이 '유리'인 Person 객체를 생성

철수.say(); // 안녕! 내 이름은 철수!! 
유리.say(); // 안녕! 내 이름은 유리!!
console.log(Person); // [Function: Person]

// Object.creat() 메서드
var person = Object.create(Object.prototype);

person.name = '철수';
person.say = function () {
    console.log(`안녕! 내 이름은 ${this.name}!!`);
};

person.say(); // 안녕! 내 이름은 철수!!
console.log(person); // { name: '철수', say: [Function (anonymous)] }

// 클래스 
class Person1 {
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(`안녕! 내 이름은 ${this.name}!!`);
    }
}

  // 인스턴스의 생성
var 철수 = new Person1('철수');  // 이름이 '철수'인 Person 객체를 생성
var 유리 = new Person1('유리'); // 이름이 '유리'인 Person 객체를 생성

철수.say(); // 안녕! 내 이름은 철수!! 
유리.say(); // 안녕! 내 이름은 유리!!
console.log(Person1); // [class Person]

// 객체 과제 
// 1. 이름은 "철수"이고, 나이는 7살, 닉네임은 "용광로"인 user 객체를 만드시오 
var user = {
    name: '철수',
    age: 7,
    nickName: '용광로'
};
console.log(user);

// 2. user의 이름과 닉네임에 접근하여 "철수님의 닉네임은 용광로입니다." 라는 문자열을 출력하시오 
console.log(`철수님의 닉네임은 ${this.nickName}입니다.`);

// 3. user의 이름은 "유리"로 수정하고, 닉네임을 삭제하시오. 
user.name = '유리';
delete user.nickName;
console.log(user);