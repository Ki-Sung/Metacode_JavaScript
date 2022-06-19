// 배열 - 관련있는 데이터들을 하나의 집합으로 묶어 관리할 수 있는 자료 구조 
// 배열은 객체 타입이다
var numbers = [5, 6, 7];

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

// 배열 생성 
/*
1. 배열 리터럴
2. Array 생성자 함수 
*/

// 1. 배열 리터럴 
var array = [1, 2, 3, "string"];
console.log(array);
console.log(typeof array);  // object 
console.log(array.length);  // 4 
console.log(array[0]);

// 2. Array 생성자 함수 
var array1 = new Array(1, 2, 3);
var array2 = Array("안녕", 5, 6, 7);
console.log(array1);
console.log(array2);
// 자바스크립트에서의 array는 new 키워드를 달아주지 않아도 array를 만들 수 있다.

// 요소 접근, 추가, 수정, 삭제 

// 1. 요소 접근
var array3 = [5, 6, 7]
// console.log(array3[2]);

// 2. 요소 추가 
array3.push(1);
console.log(array3);

array3[4] = 10;
console.log(array3);

// 3. 요소 수정 
array3[0] = 100;
console.log(array3);

// 4. 요소 삭제 
// delete array3[0];
// console.log(array3);
// console.log(array3[0]);
// 만약 위와 같은 방법으로 요소 삭제를 한 경우 0 번째 요소는 삭제되지만 그대로 empty, undefined 상태로 되어져 있다.

// splice 메서드 
array3.splice(0, 1); // 0번째 있는 것으로 부터 1개 삭제 
console.log(array3);
// array3.splice(0, 4); // 0번째 있는 것으로 부터 4개 삭제 
// console.log(array3); // 모두 삭제 
array3.splice(1, 1); // 1번째 있는 것으로 부터 1개 삭제 
console.log(array3); // 첫 번째 있는 7 삭제 

// 공간 배열과 희소 배열 
// 공간 배열은 배열 안의 요소들이 모두 밀집해서 값이 있는 상태 
// 희소 배열은 배열 안의 요소들 중 empty 즉 값이 비어 있는 상태 
// 자바 스크립트는 희소 배열로 구성되어 있다. 

var array4 = [8, 9, 10];
console.log(array4);

delete array4[0];
console.log(array4);
console.log(array4[0]);

// 밀집 배열의 특징
// 접금과 수정이 빠르다 하지만 추가와 삭제는 희소 배열보다 느리다. - 메모리 공간이 비면 안되기 때문
// 희소 배열의 특징 
// 각 메모리 공간이 밀집 배열 처럼 연속적이지 않을 수 있다. 
// 접근과 수정이 밀집 배열보다 느리다. - 해당 메모리 주소로 갈 시 무조건 첫 번째 메모리 주소를 거쳐가야하기 때문 
// 추가 삭제는 밀집 배열보다 빠르다. - 메모리 공간에 어디에 할당 되던지 상관없이 그전에 위치한 곳에서 그 다음을 가리키게끔 함

// 자바스크립트의 배열 정리 
// 1. 객체 타입이다.
// 2. 희소 배열의 구조로 되어있다.
// 3. 희소 배열의 특성으로 인해 밀집 배열보다 추가/삭제가 빠르다.
// 4. 희소 배열의 구조적 단점인 접근에 대한 성능을 개선하여, 일반적으로 말하는 희소 배열보다 요소 접근이 빠르다.