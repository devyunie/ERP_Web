/*
    디스트럭처링 :
    - 구조화된 배열 혹은 객체를 비구조화, 구조화를 파괴해서 개별 변수로 할당
    - 배열 혹은 객체에서 필요한 데이터만 추출해서 변수로 사용할 수 있도록 함
*/

let fruits =['apple', 'banana', 'kakao'];
// const fruits1 = fruits[0];
// const fruits2 = fruits[1];
// const fruits3 = fruits[2];

let king = {
    name: '이성계',
    tomb:'태조',
    birth: '1335-11-04'
};
// const name = king.name;
// const tomb = king.tomb;
// const birth = king.birth;

/*
    배열 디스트럭처링
    - 배열의 각각의 요소를 배열로부터 추출해서 변수에 할당
    - 만약에 배열 디스트럭처링에 배열의 길이를 초과한 변수를 선언하면 초과한 변수는 undifined 선ㅇ언
    - 할당 기준은 인데스
*/
const[fruits1,fruits2,fruits3]=fruits;
console.log(fruits1, fruits2 ,fruits3);





console.log('========================================');

/*
    spread 연산자를 활용
    - 배열 디스트럭처링 마지막에 스프레드 연산자를 사용하면 남은 모든 요소로 반화
// */
// ''
// const otheresFruits = 'mango'
// const [ anoterFruit,...otheresFruits] = fruits;
// console.log(anoterFruit, otheresFruits);;

// const [...otheresFruits , anoterFruit2] = fruits

console.log('========================================');

/*
    객체 디스트럭처링
    - 객체의 각 송성을 객체로터 추추하여 변수에할당
    - 할당 기준이 키
*/
//객체 디스트럭처링에서는 변수의 순서는 상과X 이름은 반횐
//키이름과 다르게 사용하고 싶을땐 'key변수명' 사용

const{ birth: birth, name, tomb,} = king;
console.log(name, tomb,birth);



console.log('========================================');

/*
    spread 연산자를 활용
    - 객체디스트럭처인 마지막에 스프레트 연산자를 사용하면
*/
const{birth,...refking}=king;
com


console.log('========================================');