/*
    변수 : 데이터를 저장하는 공간에 이름을 부여
    - var, let, const 키워드를 사용하여 변수 선언
    - javascript는 변수의 타입이 존재하지 않음
*/
var varVariable = 1;
let letVariable = 1;
const constVariable = 10; // 상수형태 변수

/*
    변수의 중복 선언 : var 키워드를 사용한 변수 선언 시 중복 선언이 가능
*/
var age = 30;
var age = 20;

//let로 선언한 변수는 중복 선언이 불가능
let addres = '부산시';
// let addres = '서울시';

/*
    동적 타이핑 : 변수의 타입이 데이터가 할당되는 순간에 결정됨
*/
var Variable;
console.log(typeof Variable);
Variable = 10;
console.log(typeof Variable);


/*
    변수 호이스팅 : var 키워드 혹은 function 키워드로 선언한 변수 혹은 함수에 대해서 스코프가 최상위로 옮겨지는 것
    - 변수 생성 3 단계
    - 선언 단계 : 변수를 등록하는 단계 
    - 초기화 단계 : 변수에 undefined 할당 (반드시 / 무조건적)
    - 할당 단계 : 실제 값이 할당
*/

console.log(x);
var x = '안녕';
console.log(x);
if(true){
    var x = 100;
}
console.log(x);

/*
    var 키워드로 선언된 변수는 블록 레벨 스코프가 아닌 함수 레벨의 스코프를 가진다.
    - 함수 레벨 스코프 : 함수 내에서 선언된 변수는 함수 안에서 사용 가능, 함수 밖에선 사용 불가능
    - 블록 레벨 스코프 : 코드 블럭 내에서 선언된 변수는 해당 코드 블럭 내에서만 사용가능, 코드 블럭 밖에선 사용 불가능
*/



/*
    var 키워드로 선언된 변수의 문제점
    1. 함수 레벨 스코프 
        - 모든 변수가 전역 변수로 선언이 되어버림
    2. var 키워드 없이도 생성 가능
        - 의도하지 않은 변수 생성 가능
    3. 중복 선언이 가능
        - 의도하지 않은 변수 변경
    4. 호이스팅 
        - 선언 전에 사용 가능

    - 이러한 문제를 해결하기 위해 ES6+에서는 var 사용을 지양하고 let, const 사용을 권장
*/
// console.log(y);
let y = 99;
if(true){
    let y = 100;
}
console.log(y);

z = 10;
console.log(z);