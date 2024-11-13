// 변수

// 변수 선언, 할당
const a = 1;
// 재할당
// a = 2;
console.log(a);

// 재할당 가능한 변수 : let
let b = 1;
b = 2;
console.log(b);

// 데이터 타입
// number
const num = 1;
console.log(num);

// string
const str = "w-3 h-3 bg-gray-100";
console.log(str);

// boolean
const bool = true;
console.log(bool);
console.log(!bool);

// object
{
  /* <Name name="park" age="27" />; */
}
const props = { name: "park", age: 27 };
// 문자에만 따옴표 들어간다 "" 숫자에는 따옴표 붙지않음

console.log(props);
console.log(props.name);
console.log(props.age);
// park씨는 27살 입니다.
console.log(`${props.name} 씨는 ${props.age}살 입니다.`);

// array
const arr = [
  { name: "은주", age: 27 },
  { name: "겨울", age: 2 },
  { name: "가을", age: 3 },
];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

console.log(arr[0].age);
console.log(arr[1].age);
console.log(arr[2].age);

console.log(`${arr[0].age}살`);
console.log(`${arr[1].age}살`);

// function
// 함수 선언
const func = function () {
  console.log("함수호출");
};
// 함수 호출
func();

// 컴포넌트
const func2 = (props) => {
  console.log(props);
};
// 컴포넌트 호출
func2("w-3");

// 연산자
// 비교 연산자
// 일치 연산자 (===)
console.log(1 === 1);
// 불일치 연산자 (!==)
console.log(1 !== 1);

// 논리 연산자
// 그리고 (&&)
// c가 참일 경우 d를 출력
const c = true;
const d = "<div>출력</div>";

console.log(c && d);

// 또는 (||)
// e가 참일 경우 e를 출력
const e = "서울시...";
const f = "주소가 없습니다.";

console.log(e || f);

// 삼항 연산자
// 조건 ? 참 : 거짓
console.log(false ? "btn-primary" : "btn-gray");
console.log(true ? "btn-primary" : "btn-gray");
