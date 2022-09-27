// # JavaScript 기초


// node.js 설치
// npm install nodemon -g -> cmd 에 입력해서 설치
// cd js 파일 있는 경로 cmd 에 입력  ->  cd C:\Users\chu_m\OneDrive\바탕 화면\basic\js
// 경로 연결 되면 nodemon script.js 입력
// 그럼 아래 입력한 명령어 뜸

// 출력이 안될때 ctrl + c 누르기 (2번 누르면 꺼짐)

// 출력된 값이 흰색이면 -> 문자
// typeof 출력한 값이 어떤 형식인지 확인 할때 사용
// console.log(typeof "");





//console.log("hello JavaScript")


// # DATA TYPE
// - 종류 : Number, Boolean, Null, Underfined, String, BigInt, Symbol

// ### Number
// 값 : 숫자(소수점 포함), NaN(Not a number), -Infinity, +Infinity

// console.log(3)
// console.log(3.14)

// console.log(NaN)
// console.log(typeof NaN)
// console.log(100/"HELLO")

// console.log(Infinity);
// console.log(typeof Infinity);
// console.log(2 / 0);
// console.log(-2 / 0);


// ### Boolean
// 값 : true of false
// console.log(true)
// console.log(false)
// console.log(typeof true)
// console.log(typeof false)


// ## Null
// - 의도적으로 "없음", "무효"를 나타낸다
// console.log(null);  // null
// console.log(typeof null);   // object


// ### Undefined
// "정의되지 않음"
// var x;
// console.log(x)  // Undefined
// console.log(typeof x)   // undefined

// var x = null;
// console.log(x);


// ### String

// console.log("hello");
// console.log('hello');

// console.log(typeof "hello");
// console.log("");
// console.log("2022");
// console.log(typeof "2022");


// ### BigInt
// -(2^53 -1) ~ (2^53 -1) 범위 밖의 숫자를 표현할 때 사용한다
// 9000조


// ### Symbol
// ES6 (2015)에서 추가된 데이터 타입
// 객체의 속성키로 사용할 수 있다


// # 연산자(Operator)
// 종류 : 할당연산자, 수리연산자, 비교연산자, 논리연산자, 타입연산자

// ### 할당연산자(assignment operator)
// 종류 : =, +=, -=, *=, /=, %=, **=

// = 연산자
// var x = 1;
// console.log(x)

// +=
// var x = 1;
// x += 2; // x = x + 2
// console.log(x);

// var x = 1;
// x *= 2;
// console.log(x);


// ## 수리연산자 (arithmatic operator)
// 종류 : +, -, *, /, ++, --, **, %

// console.log(1 + 2);

// var x = 1;
// x++ // 1을 증가시킨다.
// console.log(x);

// var x = 1;
// x--;
// console.log(x)

// console.log(2 ** 8) // 2의8승
// console.log(9 % 3)


// ### 비교연산자 (Comparison operator);
// 종류 : ==, ===, !=, !==, >, <, >=, <=, ?
// boolean을 return한다

// ==
// value만 비교한다

// console.log(1 == 1);
// console.log(1 == "1");
// console.log(0 == false);
// console.log(1 == true);
// console.log(null == undefined);
// console.log("" == false);
// console.log("" == 0);

// ===
// value와 type 모두 비교한다
// console.log(1 === "1");             // false
// console.log(0 === false);           // false
// console.log(null === undefined);    // false


// != 
// value만 비교한다
// console.log(1 != "1")
// console.log(0 != true)



// !==
// value와 type을 모두 비교한다
// 둘중에 하나라도 다르면 true
// console.log(1 !== "1")
// console.log(0 !== false)


// ? (삼항연산자, Ternary)
// 조건 ? 참일때 : 거짓일때
// var r = 1 > 0 ? "foo" : "bar"
// console.log(r)


// ### 논리 연산자(Logical operator)
// 종류 : &&, ||, |


// && 그리고
// var x = 1 > 0 && 1 < 2;
// console.log(x);


// || 또는
// var x = 1 > 0 || 1 < -1
// console.log(x)


// ! (부정)
// console.log(!true)
// console.log(!false)
// console.log(!(1 > 0))


// ### 타입 연산자 (Type Operator)
// 종류 : typeof, instanceof
// value의 타입을 return한다

// console.log(typeof 0)
// console.log(typeof null)        // 타입이 없음
// console.log(typeof undefined)   // 정의하지 않음


// ## if else elseif
// if(true){
//     console.log(1>0)
// }

// 조건에서 빈문자를 false로 취급한다
// if(""){
//    console.log("조건에서 빈문자를 false로 취급한다") 
// }


// ## for 반복문

// var sum = 0;
// for (var i=0; i <= 10; i++){
//     sum += i;
// }
// console.log(sum)


// for 문에서 break와 continue 키워드

// for(var i=0; i<=10; i++){
//     console.log(i)
// }

/*
for(var i=0; i<=10; i++){
    if(i === 5){    // i가 5일경우 멈춘다
        break;
    }
    console.log(i);
}
*/

// Q. 1부터 10까지의 숫자중 짝수만 출력해보세요.
// for(var i=1; i <= 10; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// for(var i=2; i <= 10; i+=2){
//     console.log(i)
// }


// ## 함수 (function)
// 호출될 때만 실행되는 한 블록의 코드

// 함수를 선언하는 방식
// 1. 함수선언식
// 2. 함수표현식
// 3. 화살표함수

/*
// 함수선언식
function f(){   // function 함수이름(){ block }
    // 함수 정의 (function definition)
    console.log("foo");
}
// 호출
f()
*/

/*
// 함수표현식
// 변수에 익명함수를 할당한다
var f = function(){
    console.log("foo");
}
// 호출
f()
*/

/*
// 화살표함수
// 함수표현식의 변형. 간단한 문법
var f = () => {
    console.log("foo");
}
// 호출
f()
*/



/*
//  ##Hoistion (게양)
// 함수선언식에만 적용

// 함수 호출
f();

// 함수 선언
// 함수의 선언이 호출 시점보다 위로 올라간다
function f(){
    console.log("foo")
}

consolig.log(f) // undefined -> f는 함수가 아니다
f();
// Hoistion이 되지 않는다
var f = () => {
    console.log("foo")
}
*/


/*
// 함수에서의 return

function f(){
    console.log("foo");
    return;
    // return 아래의 코드는 실행되지 않는다.
    console.log("bar");
}
f();
*/


/*
// 함수의 인자(parameter, argument)

function f(data){   // data - parameter
    console.log("argument: " + data);
}
f("foo") // "foo" - argument
// --> argument: foo

function f(a,b){
    return a + b;
}
console.log(f(1,2));
// --> 1 + 2
*/


/*
// Q. 사칙연산 함수를 만들어 보세요
// 함수이름은 add(+), substract(-), multiply(*), divide(/)
// 함수의 reutrn값을 변수에 담아 출력해보세요

function add(a,b){
    return a + b;
}
function substract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

console.log(substract(52,3));


var a = add(1,2);
var b = substract(1,2);
var c = multiply(1,2);
var d = divide(1,2);

console.log(a,b,c,d);
*/


/*
// # callback
// 다른 함수의 인자가 되는 함수

function f1(callback){  // callback
    var r = callback()  // f1함수의 내부에서 실행된다
    console.log(r)
}
function f2(){
    return "foo"
}
f1(f2); // f2는 f1의 callback이다


function f1(callback){
    var r = callback(); // f1함수 내부에서 실행된다
    console.log(r)
}
f1(function(){ // 익명함수가 callback일 때
    return "foo";
})


function f1(callback){
    var r = callback();
    console.log(r);
}
function f2(){
    return "foo";
}
f1(function(){
    return f2();
})
*/


/*
// 함수의 범위
// 전역범위 : 블록 또는 함수 외부에서 선언된 함수의 범위
// 블록범위 : 블록 안에서 선언된 함수의 범위
// 함수(지역)범위 : 함수 안에서 선언된 함수의 범위

function f(){}

// 블록 또는 함수 외부에서 접근
console.log(f);

// 블록 내부에서 접근
{console.log(f);}

// 함수 내부에서 접근
x()
function x(){
    console.assert(f)
}
*/

// f1()
// function f1(){
//     // 지역범위를 갖는 함수
//     function f2(){}
//     console.log(f2);
// }

// console.log(f2);    // error


/*
{   // 블록안에서 선언된 함수
    function f(){}
}
console.log(f);     // ok
*/


/*
// Q. 콘솔에 현재시간을 알려주는 시계를 만든다.

// setInterval(callback, ms) -> setInterval 인자 두개를 전달 받아서 사용
// ms간격으로 callback 실행
// 1s = 1000ms

// console.log(new Date().toLocaleTimeString()); // -> 현재 시간을 알려줌

// 1번째 방법
function clock(callback){
    setInterval(callback,1000)
}
function time(){
    return console.log(new Date().toLocaleTimeString());
}
clock(function(){
    return time();
})

// 2번째 방법
setInterval(function () {
    let time = new Date().toLocaleTimeString();
    console.log(time);
},1000)
*/


/*
// ## Array (배열)
// 한 개 이상의 값을 가진 상태

let arr = [10, 20, 30];

console.log(arr);
// 배열의 0번째 value에 접근
console.log(arr[0])         // 10
console.log(arr[1])         // 20
console.log(arr[2])         // 30
console.log(arr.length)     // 배열의 value의 갯수

let arr2 = ["foo", 20, "baz"];

console.log(arr2);

// arr update
arr[1] = "bar";     // 1번째 자리에 bar 로 바뀜
console.log(arr);

// arr add
arr[3] = 40;        // 3번째 자리에 40 추가
console.log(arr);
*/


/*
// 반복문으로 Array 순회하기
let arr = ["foo", "bar", "baz"];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
*/

/*
// Q. 1부터 10까지의 숫자로 이루어진 배열을 만들어보세요
let arr = [1];

for(let i = 0; i < 10; i++){
    arr[i] = i+1;
}
console.log(arr);
*/


/*
// # cat object (객체)
// 관련된 데이터와 함수의 집합

const cat = {
    // key(property, 속성): value
    name : "kitty",
    age : 2,
    home : null,
    // value가 함수인 것을 메서드(method)라고 부른다
    sound : function (){
        return "meow";
    }
}

// 객체에 접근
console.log(cat);

// cat의 name속성에 접근
console.log(cat.name);

// cat의 age속성에 접근
console.log(cat.age);

// cat에 존재하지 않는 속성
console.log(cat.color);     // undefined

// string을 사용해서 cat의 home속성에 접근
console.log(cat["home"])    // null

// cat의 sound 메서드에 접근
console.log(cat.sound())


// 객체를 업데이트 하기
const cat2 = {
    name : "Kitty",
    age : 2,
    home : null,
    sound : function(){
        return "meow";
    }
}


// cat2의 home속성값 변경
cat2.home = "Mapo-gu"
console.log(cat2);

// cat의 age속성 삭제
delete cat2.age;
console.log(cat2);

// cat에 새로운 속성 color 추가
cat2.color = "Mixed"
console.log(cat2);
*/


/*
// Q. 숫자를 대입하면 4칙연산의 결과값을 return하는 함수를 만들어보세요

let arr = [1,2]
a = arr[0];
b = arr[1];
function plus(){
    console.log(a + b);
}
plus();

function calc(a,b){
    return{
        add : a+b,
        substract : a-b,
        multipy : a*b,
        divide : a/b
    }
}
let num = calc(1,2);
console.log(num);
*/


// ## 에러와 에러처리

// app crashed -> 주의
// false()

// try catch 구문을 이용한 에러처리

// try {
//     // 코드를 작성한다.
//     f();
// }catch (err){
//     // 에러가 발생할 경우 catch블록에서 처리한다.
//     console.log(err)
// }

// try {
//     // syntacError(문법에러)는 compile 에러를 발생시킨다.
//     // compile : 컴파일러가 코드를 실행시키기 위해 읽는 단계
//     // try catch에서 compile에러는 처리할 수 없다.
//     f();
// } catch (err) {
//     console.error(err)
// }

// # error 객체의 종류
// RangeError : 값이 정해진 범위를 벗어났을 때 발생한다.
// ReferenceError : 존재하지 않는 변수를 참조(refer)했을 때 발생한다.
// SyntaxError : 문법 에러
// TypeError : 값이 예상된 타입이 아닐 때 발생한다.
// URIError : URI malformed (URI가 잘못형성되었다.)

// error 객체의 속성(property)
// name
// message
// stack

// try {
//     f();
// }catch (err){
//     console.error("name : " , err.name);         // ReferenceError
//     console.error("message : ", err.message);    // f is not defined
//     //console.error("stack : " , err.stack);
// }


// RangeError
// try{
//     const pi = Math.PI;

//     console.log(pi); // script는 기본적으로 소수점 15자리까지 보여줌
//     //console.log(pi.toPrecision(100))    // 100개까지 보여줌
    
//     // RangeError : 값이 정해진 범위를 벗어났을 때 발생한다.
//     // toPrecision() 인자는 1에서 100사이어야 한다.
//     console.log(pi.toPrecision(200))      

// }catch(err){
//     console.error(err)
// }


// ReferenceError
// try{
//     // ReferenceError
//     // 존재하지 않는 변수를 참조(refer)했을 때 발생한다.
//     console.log(x);
// }catch (err) {
//     console.error(err)
// }


// SyntaxError
// try{
//     // SyntaxError (문법 에러)
//     // SyntaxError는 컴파일에러를 발생시킨다.
//     console.log(2022))
// }catch(err){
//     console.error(err)
// }


// TypeError
// try{
//     // TypeError (타입 에러)
//     // 값이 예상된 타입이 아닐 때 발생한다.

//     // setInterval(callback, ms)
//     // TypeError : callback은 함수여야 한다. null을 전달받았다.
//     setTimeout(null, 1000) // -> 함수가 들어가야 할 자리에 null이 들어감
// }catch(err){
//     console.error(err)
// }


// URIError
// try{
//     // URIError : URI malformed (URI가 잘못형성되었다.)
//     decodeURI("%");  // decodeURI 는 %인자를 받을수 없다.
// }catch(err){
//     console.error(err)
// }


// 커스텀 에러 객체(Object)로 커스텀 에러 발생시키기
// 728번째 줄 확인.
// try{
//     const foo = "bar";

//     if(foo !== "bar"){
//         // 커스텀 에러 객체를 생성한다.
//         const err = {
//             name : "CustomError",
//             message : "bar만 가능합니다"
//         }
//         // 커스텀 에러 객체를 throw한다.
//         throw err; // throw 해서 error 발생시킬 수 있음
//         // throw 밑에 코드는 실행되지 않는다.
//     }
// }catch(err){
//     console.error(err)
// }



// try catch finally
// try{
//     console.log("foo")
// }catch(err){
//     console.error(err)
// }finally {
//     // 에러 발생 유무와 상관없이 항상 실행된다
//     console.log(".")
// }


// Q. 15살 아이가 cu에서 술을 사려고 한다.
// 커스텀에러를 발생시켜서 이 상황을 중단시켜보세요
// try{
//     var age = 15;
//     console.log("미성년자가 술을 사러 CU에 가고있다.")

//     if (20 > age){
//         const err = {
//             name : "미성년자",
//             message : "20세 이상만 가능합니다."
//         }

//         // 커스텀 에러 객체를 throw 한다.
//         throw err; // throw 해서 error 발생시킬 수 있음
        
//     }

//     // throw 밑에 코드는 실행되지 않는다.
//     console.log("술사기 성공!")

// }catch(err){
//     console.error(err)
// }


// app crashed
// throw "Error!"


/*
// ## class
// 객체 생성을 위한 템플릿

class Cat { // 첫 글자는 대문자여야 한다

    // constructor (생성자)
    // 인스턴스를 생성하자마자 실행되는 특별한 메서드
    // constructor는 아무것도 return할 수 없다
    // 인스턴스의 초기 속성을 설정하는 데 주로 사용된다
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

// cat1은 Object이다
// cat1은 Cat의 인스턴스다
const cat1 = new Cat("Kitty", 2);
// cat2은 Object이다
// cat2는 Cat의 인스턴스다
const cat2 = new Cat("Alfredo", 3);

console.log(cat1)
console.log(cat2)

console.log(cat1 instanceof Cat) // ture
console.log(cat2 instanceof Cat) // ture
*/


/*
// class의 속성과 메서드
class MapoguCat {
    constructor(name){
        this.name = name;
    }

    // MapoguCat의 속성
    home = "Mapo-gu";

    // MapoguCat의 메서드
    sound(){
        return "meow"
    }
}

const cat = new MapoguCat("Kitty")

console.log(cat)
// MapoguCat의 home속성을 상속(inheritance)받았다
console.log(cat.home)       // Mapo-gu
// MapoguCat의 sound메서드를 상속받았다
console.log(cat.sound())    //meow
*/


// Q. 효성동에 살고있는 하얀색 말티즈를 생성하기 위한 템플릿을 작성해보세요
// class HyosengDog{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     // HyosengDog의 속성
//     home = "효성동";
//     jong = "말티즈"

//     // HyosengDog의 메서드
//     sound(){
//         return "왈!!!!왈!!!!"
//     }
// }
// const dog = new HyosengDog("만두", "11살")
// // HyosengDog의 속성과 메서드를 상속받았따.
// console.log(dog)
// console.log(dog.name + "는 어디에 사나요? : " + dog.home)
// console.log(dog.name + "의 종은 무엇인가요? : " + dog.jong)
// console.log(dog.name + "는 몇 살 인가요? : " + dog.age)
// console.log(dog.name + "는 어떻게 짖어요? : " + dog.sound())


/*
// Q. 평리단길에 있는 고양이를 생성하기 위한 템플릿을 생성해보세요
// 메서드에 인자를 전달해보세요
class Pyeongridan{
    constructor(name){
        this.name = name;
    }

    home1 = "길";
    home2 = "마당";
    color1 = "치즈";
    color2 = "검정";
    
    sound1(){
        return "먕";
    }
    sound2(x){
        return x;
    }
}
const cat1 = new Pyeongridan("냐옹이")
const cat2 = new Pyeongridan("바둑이")
console.log(cat1)
console.log(cat2)
console.log(cat1.color1 + "색 " + cat1.name + "는 " + cat1.home1 + "에 살고 있습니다. " + cat1.sound1())
console.log(cat2.color2 + "색 " + cat2.name + "는 " + cat2.home2 + "에 살고 있습니다. " + cat2.sound2("그릉그릉"))
*/


// # 클래스의 static 속성과 static 메서드
// 클래스 자체의 속성과 메서드이다
// 인스턴스는 호출할 수 없다.
// 클래스와 관련된 인스턴스 등에 유틸리티를 제공하는 역할을 한다.

class Cat{
    constructor(name, months){
        this.name = name;
        this.months = month;
    }
}

// static 속성
// static description = "고양이는 18개월 이상이 되면 성체가 됩니다"

// // static 메서드
// static isAdult(month){
//     if (months < 18){
//         return "아기 고양이"
//     }else{
//         return "성체 고양이"
//     }
// }

// const cat = new Cat("Kitty", 12);
// console.log(cat);

// // Cat의 인스턴스에서 static 속성과 static 메서드를 호출할 수 없다.
// console.log(cat.description);    // undefined
// console.log(cat.isAdult())       // cat.isAult is not a function

// // Cat 클래스 자체적으로 호출한다.
// // Cat클래스 또는 Cat클래스의인스턴스 등에 유틸리티를 제공한다
// // console.log(Cat.isAdult(cat.months))






// static 메서드로만 이루어진 클래스
// class Calculator {
//     static add(a,b){
//         return a+b;
//     }
//     static subtract(a,b){
//         return a-b;
//     }
//     static multiply(a,b){
//         return a*b;
//     }
//     static divide(a,b){
//         return a/b;
//     }
// }

// console.log(Calculator.add(1,2))
// console.log(Calculator.subtract(1,2))
// console.log(Calculator.multiply(1,2)) 
// console.log(Calculator.divide(1,2))


// # JavaScript의 미리 정해진 클래스(빌트인 클래스)
// 종류
// 문자 처리 : String
// 숫자 및 날짜 : Number, Math, Date
// Indexed collections : Array
// 에러 : Error, SynataxError, ReferenceError, TypeError, ...
// 기타 : Promise, JSON

// 빌트인 클래스의 인스턴스 만들기
// 부제 : JavaScript에서 모든 데이터는 Object이다 (?)

// const foo = new String("bar")

// console.log(foo)
// console.log(typeof foo)

// String 클래스이 인스턴스를 literal 표기법을 이용해 생성한다
// foo 변수는 메서드의 속성을 String으로부터 상속받았다
// const foo = "bar"           // literal 표기법 (클래스를 호출하지 않고 값을 정의한다)
// console.log(foo);
// console.log(typeof foo);

// console.log("foo".toUpperCase())

// const num = new Number(2);
// console.log(num)
// console.log(typeof num)

// const num = 2;
// console.log(num);
// console.log(typeof num);

// const date = new Date();
// console.log(date)

// const bool = new Boolean(true);
// const bool = true;

// const arr = new Array("foo", "bar", "baz")
// const arr = ["foo", "bar", "baz"]   // literal
// console.log(arr);

// const o = new Object({foo: "bar"})
// const o = {foo : "bar"}   // literal
// console.log(o)

// Math의 static 속성 'PI'
// const pi = Math.PI;
// console.log(pi)

// Error클래스는 다양한 종류의 Error의 인스턴스 생성에 사용된다
// const err = new Error("Something's broken!");
// // console.log(err);
// console.log(err.name);      // Error, 에러 인스턴스의 이름은 클래스와 같다
// console.log(err.message);   // Something's broken!

// 빌트인 클래스의 인스턴스로 커스텀 에러 발생시키기

// 사용자가 정의한 함수 f
// function f(data){
//     if(typeof data !== "string") {
//         // throw : 커스텀 에러
//         // 빌트인 클래스의 인스턴스를 사용했다
//         throw new TypeError("인자는 문자여야만 합니다")
//     }

//     // throw 아래 코드는 실행되지 않는다
//     console.log("인자 : ", data)
// }
// try{
//     // f함수를 호출했다
//     f(2);
// }catch(err){
//     console.error(err)
// }



// Q. 빌트인 클래스인 RangeError(범위를 벗어났을때 에러)의 인스턴스를 사용해서 
// 15세 아이가 CU에서 술을 사려고 하는 것을 막아보세요
// try{
//     var age = 15;

//     console.log("15세 아이가 CU에서 술을 사려고 한다.")

//     if(age < 18){
//         const err = new RangeError("미성년자 입니다")
//         // throw : 커스텀 에러를 발생시킨다
//         throw err;
//     }
//     console.log("구매 성공!");

// }catch(err){
//     console.error(err);
// }



// # 빌트인 클래스의 인스턴스들의 속성과 메서드 사용하기

// String
//  const foo = "bar";
// console.log(foo.length)              // 문자열의 길이
// console.log(foo.toUpperCase())       // 대문자로 만든다
// console.log(foo.split("a"))          // 인자를 기준으로 문자열을 분할하여 Array의 형태로 return한다
// console.log(foo.replace("r","z"))    // .replace(a,b) 문자열중에 a를 b로 대체한다

// Number
// const year = 2022;
// console.log(year)                    // Number 타입
// console.log(year.toString())         // Number 타입을 String으로 변환한다
// console.log(year.toString(2))        // toString(기수)
// console.log(year.toPrecision(10));   // 정밀도, 숫자의 개수를 인자에 맞게 출력한다
// console.log(Number.isNaN(year))      // NaN(Not a Number), isNaN(인자) 인자가 NaN인지 판별한다

// Math
// console.log(Math.random());     // 0 에서 1tkdldml thtnfmf return한다
// console.log(Math.PI);           // Pi
// console.log(Math.round(0.5))    // 반올림
// console.log(Math.ceil(0.5))     // 올림
// console.log(Math.floor(0.5))    // 내림
// console.log(Math.pow(2,7))      // 거듭제곱
// console.log(Math.sqrt(16))      // 제곱근(Square root)
// console.log(Math.max(10, 100))  // 최대값
// console.log(Math.min(10, 100))  // 최소값

// Date
// const date = new Date()
// console.log(date)                            // GMT시간 (그리니치 평균시)
// console.log(date.toLocaleString());          // 현지시간 (문자열로 출력)
// console.log(date.toLocaleTimeString(0));     // 현지 시간만 출력 (문자열)


// Array
// const arr = ["foo", "bar"]
// console.log(arr);   // ["foo", "bar"]
// arr.push("baz")     // 새로운 item을 마지막에 추가한다.
// console.log(arr);   // ["foo", "bar", "baz"]

// const arr = ["foo", "bar", "baz"];
// arr.pop()   // array의 마지막 item을 제거한다
// console.log(arr);


// const arr = ["foo", "bar", "baz"];
// const r = arr.slice(1, 2);          // slice(시작, 끝), 끝은 생략가능하다
// // slice메서드는 새로운 Array를 return한다
// console.log(r)
// const r = arr.slice(1);
// console.log(r)


// const arr = ["foo", "bar", "baz"];
// 1) 
// console.log(arr.sort());
// 2) 
// const r = arr.sort();   // 기본형으로 사용할때는 문자열 Array에만 정상적으로 작동한다   
// console.log(r);        // 알파벳순서대로 정리된다

// const arr = [100, 25]
// const r = arr.sort();   // 100과 25를 문자열로 변환한 뒤 비교하여 정렬한다
// console.log(r)

// const arr = [20, 10, 30];
// const r = arr.sort(function(a,b) {  // 순서대로 정렬
//     return a - b;                   // b - a로 하면 반대로 정렬
// })
// console.log(r)

// const arr1 = ["foo", "bar"];
// const arr2 = ["bar"];
// const arr3 = arr1.concat(arr2);     // arr1.concat(arr2) arr1뒤에 arr2를 연결한다
// console.log(arr3)

// Q. slice 메서드를 사용해서 b부터 f로 구성된 Array를 만들어보세요
// const arr = ["a", "b", "c", "d", "e", "f", "g"];
// const r = arr.slice(1,6)
// console.log(r)


/*
// map()
const arr = ["foo", "bar", "baz"];

// map(callback)
// callback에 배열의 value, index, array를 return를 인자로 전달한다
// Array를 순회하면서 item에 특정한 메서드를 적용할 수 있다
// 새로운 Array를 return한다
const r = arr.map(function (value){   // (value, index, array)   // value 가 주로 사용
    return value.toUpperCase(); // toUpperCase(); 문자열(알파벳)을 대문자로 만든다
})
console.log(r);

const arr = [1, 2, 3, 4];
const r = arr.map(function (value){  // (value, index, array)
    return value * 10
})
console.log(r);
*/


/*
// filter()
const arr = ["foo", "bar", "baz"];

// Array 를 순회하며 특정한 조건에 맞는 value로 구성된 새로운 Array를 return한다
const r = arr.filter(function (value, index, array){
    if(value.charAt(0) === "b"){    // charAt(index) : 문자열에서 index에 해당하는 문자를 return
        return value;
    }
})
console.log(r);


const arr2 = [1,2,3,4,5];
const r2 = arr2.filter(function(value, index){
    if(value > 2){
        return value;
    }
})
console.log(r2);
*/


/*
// Object
const o = {prop1 : "foo", prop2 : "bar", prop3 : "baz"};
// Object의 key로 이루어진 Array를 return한다
const r = Object.keys(o);
console.log(r)

const o = {prop1 : "foo", prop2 : "bar", prop3 : "baz"};
// key와 value 쌍을 array의 형태로 return한다
const r = Object.entries(o);
console.log(o);
*/


/*
// Q. 
// 1. origin으로만 구성된 Array를 만들어보세요 (map)
// 2. 유럽 맥주로만 구성된 Array를 만들어보세요 (filter)
const beers = [
    {name : "Heinken", origin : "Netherlands"},
    {name : "Kloud", origin : "S.Korea"},
    {name : "Guinness", origin : "Ireland"},
    {name : "Asahi", origin : "Japan"},
]

// 1.
const origin = beers.map(function(beer){    // beer = value
    return beer.origin;
})
console.log("World beers form",origin);

// 2.
const u = beers.filter(function(beer){
    if(beer.origin === "Netherlands" || beer.origin === "Ireland"){
        return beer;
    }
})
console.log("Preminu beers", u);
*/



// # Destructionassignment (구조분해 할당)
// Array : Array의 itme들을 개별적으로 변수에 담을 수 있게 한다
// Object : Object의 속성들을 개별적으로 변수에 담을 수 있게 한다

/*
// Array
const arr = ["foo", "bar", "baz"];

// 기존의 방법
// Array의 item들을 개별적으로 변수에 담았다
const item0 = arr[0];
const item1 = arr[1];
const item2 = arr[2];

console.log(item0);
console.log(item1);
console.log(item2);
*/

/*
const arr = ["foo", "bar", "baz"];

// 단순해진 문법
const [item0, item1, item2] = arr;
console.log(item0);
console.log(item1);
console.log(item2);


// function calculator(x,y){
//     return [x + y, x - y, x * y, x / y]
// }
// const [add, substract, multiply, divide] = calculator(1,2);
// console.log("add", add);
// console.log("substract", substract);
// console.log("multiply", multiply);
// console.log("divide", divide);
*/


/*
const beers = [
    {name : "Heinken", origin : "Netherlands"},
    {name : "Kloud", origin : "S.Korea"},
    {name : "Guinness", origin : "Ireland"},
    {name : "Asahi", origin : "Japan"},
]
const [DeutechBeer, koreanBeer, IrishBeer, JapanseBeer] = beers;
console.log(IrishBeer);
*/


/*
// Object
const o = {pro1 : "foo", pro2: "bar", pro3 : "baz"};

// Object의 속성들을 변수에 담았다
const pro1 = o.pro1;    // 속성(property)
const pro2 = o.pro2;
const pro3 = o.pro3;

console.log(pro1);
console.log(pro1);
console.log(pro3);



const o = {pro1 : "foo", pro2: "bar", pro3 : "baz"};
// 더 단순한 문법
const {pro1, pro2, pro3} = o;
console.log(pro1);
console.log(pro2);
console.log(pro3);
*/


/*
// 함수에서 Destructin 사용하기
const o = {pro1 : "foo", pro2: "bar", pro3 : "baz"};

f(o);
function f(pros){   // pros = properties
    const pro1 = pros.pro1;
    const pro2 = pros.pro2;
    const pro3 = pros.pro3;

    console.log(pro1);
    console.log(pro2);
    console.log(pro3);
}


const o = {pro1 : "foo", pro2: "bar", pro3 : "baz"};

f(o);
function f({pro1, pro2, pro3}){ // key 이름과 같아야 한다
    // 더 단순한 문법
    console.log(pro1);
    console.log(pro2);
    console.log(pro3);
}
*/


/*
// Q. 다음과 같은 문장을 출력하는 함수를 정의해보세요 (구조분해할당을 사용하여 함수 파라미터를 정의)
// Guiness is originated in the brewery at Ireland.
const irishBeer = {name : "Guinness", origin : "Ireland"};

f(irishBeer);
function f({name, origin}){
    console.log(name + "is originated in the brewery at" + origin)
}


// Q. 원산지에 일치하는 맥주이름의 변수를 만들어보세요 (구조분해할당 사용)
const origins = ["Netherlands", "S.Korea", "Ireland", "Japan"];

const [Heineken, Kloud, Guinness, Asahi] = origins;
console.log(Heineken, "맥주1");
console.log(Kloud, "맥주2");
console.log(Guinness, "맥주3");
console.log(Asahi, "맥주4");
*/


// # Spread Syntax (전개 구문)
// Array : Array의 item을 가단하게 복사할 수 있다
// Object : Object의 속성을 간단하게 복사할 수 있다
// ...

// Array
// push()

// const arr = ["foo", "bar"];
// const r = [...arr, "baz"];
// console.log(r);

// const arr1 = ["foo", "bar"];
// const arr2 = ["baz"];
// const r = [...arr1, ...arr2];
// console.log(r);
// 순서 바뀌어 사용 가능
// const r = [...arr2, ...arr1];
// console.log(r);



// slice()
// const arr = ["foo", "bar", "baz"];
// const [item0, item1, ...rest] = arr;
// console.log(item0); // foo -> 각각의 문자 하나를 담은 변수
// console.log(item1); // bar
// console.log(rest);  // ['baz']


/*
// Q. Spread 문법을 사용하여 일본 맥주를 추가해 보세요
const beers = [
    {name : "Heineken", origin : "Netherlands"},
    {name : "Kloud", origin : "S.Korea"},
    {name : "Guinness", origin : "Ireland"}
]
const japaneseBeer = {name : "Asahi", origin : "Japan"};

console.log([...beers, japaneseBeer]);
console.log(...beers, japaneseBeer);
*/


// Object
// const o = {prop1 : "foo", prop2 : "bar", prop3 : "baz"};
// const r = {...o, prop2 : null}  // ...o : 기존 Object의 속성들
// console.log(r)

// 속성 추가
// const o = {prop1 : "foo", prop3 : "baz"};
// const r = {...o, pro3: "baz"};
// console.log(r);


/*
// Q. dutchBeer에 현재 이용가능한 맥주인지를 나타내는 새로운 속성
// available : true를 추가해보세요
// (Object의 sPREAD 문법 사용)
const dutchBeer = {name : "Heineken", origin : "Netherlands"}
console.log({...dutchBeer, available : true});
*/


/*
// Q. 기네스 맥주가 재입고가 되었다
// (map() 메서드와 Spread 문법을 사용해서 상태를 구현해보세요)
const beers = [
    {name : "Heineken", origin : "Netherlands", available : true},
    {name : "kloud", origin : "S.Korea", available : true},
    {name : "Guinness", origin : "Ireland", available : false}
]

// 1. 
const r = beers.map(beer => {
    return {...beer, available : true};
})
console.log(r)

// 2.
const r2 = beers.map(function(beer){
    return {...beer, available : true};
})
console.log(r2)

// 3.   // map(callback) callback 내에서도 if/else 사용 가능]
const r3 = beers.map(beer => {
    if (beer.name == "Guinness"){
        return {...beer, available : true}
    }
    return beer;
})
console.log(r3);

// 4. 
const r4 = beers.map(beer => {
    beer.available = true;
    return beer;
})
console.log(r4);
*/



/*
// # JavaScript 비동기(Asynchronus) 프로그래밍
// 작업 과정에서 blocking(막힘)을 다루기 위한 방법이다
// ex) 서버로부터 데이터를 요청하는 것과 그 처리

// 동기함수
// function f(callback) {
//     callback()  // callback을 실행시킴
// }
// // f함수는 동기(Asynchronous)함수이다
// // 호출된 순서대로 실행된다
// f(() => {
//     console.log("foo")
// })
// console.log("bar")

// 비동기함수
// setTimeout(callback, ms) : ms 후에 callback실행
// setTimeout(() => {
//     console.log("foo")
// }, 1000)

// setTimeout : 대표적인 비동기 함수이다
// 비동기함수는 가장 마지막에 실행된다
setTimeout(() => {
    console.log("foo")
}, 0)
console.log("bar");
*/

/*
// real world 예제
// 서버에게 데이터 요청하기
// 비동기 함수
// 서버에 데이터를 요청하는 함수이다
function fetchData(callback){
    const o = {foo : "bar"};

    setTimeout(() => {
        callback(o)
    },1000)
}
// 데이터를 가져오는데 1초가 걸린다고 가정
fetchData(data => {
    console.log("data", data)
})
console.log("다른 작업")
*/


/*
// 비동기에서 에러 다루기
// 서버에 데이터 요청하는 예제
function fetchData(id, callback){
    if(id === null){    // !null = true, !undefined = true, !"" = true 
        const err = new Error("id is required");    // id가 없을때 Error

        setTimeout(() => {
            callback(err, null)
        }, 0)
        return;
    }

    const o = {foo : "bar"};

    setTimeout(() => {
        callback(null, o)
    })
}

//fetchData() 함수 호출
fetchData("id들어가는 부분", (err, data) => {   // id들어가는 부분에 null, "" 틀린 답이 들어갈 경우 에러로 전달
    if (err) {
        throw err;
    }
    console.log("data", data)
})
*/


/*
// 실제 사용예시
function fetchData(callback){
    const o = {foo : "bar"}

    setTimeout(() => {
        callback(o)
    })
}
fetchData((data) => {
    console.log("data", data)
})
console.log("다음작업")
*/


/*
function fetchData(id, callback){
    if(!id){
        const err = new Error("id is required");

        setTimeout(() =>{
            callback(err, null)
        }, 0)
        return;
    }

    const o = {foo : "bar"}
    setTimeout(() => {
        callback(null, o)
    }, 0)
}

// 서버에 데이터를 요청함
fetchData(null, (err, data) => {
    try{
        if(err){
            throw err;
        }
        console.log("data", data)
    } catch(error){
        console.error(error)
    }
})
*/


// # Promisse
// Promise 객체는 비동기 작업의 성공/실패 여부와 그 결과값을 나타낸다
// 비동기 작업의 가독성을 높이기 위해 사용된다

/*
// 구조
// Promise class를 이용하여 인스턴스 만들기

const o = new Promise((res, rej) => {
    // res : resolve(fullfilled)
    // 비동기 작업의 성공
    // res("foo")

    // rej : rejected
    // 비동기 작업의 실패
    rej("bar")
})
console.log(o); // 상태 : fullfilled, 결과값 : "foo"
console.log(o); // 상태 : rejected, 결과값 : "bar"
*/

/*
// async function을 사용하여 인스턴스 만들기
async function f(){
    // resolve(fullfilled)
    // 비동기 작업의 성공
    // return "foo"

    // rejected
    // 비동기 작업의 실패
    // throw "bar"
}
console.log(f())    // 상태 : fullfilled, 결과값 : "foo"
console.log(f())    // 상태 : rejected, 결과값 : "bar"
*/


/*
// 실제 사용예시
async function fetchData(){
    const o = {foo : "bar"};
    return o;
}
// 서버에 데이터를 요청한다
fetchData() // promise객체는 비동기적으로 작동한다
.then(data => { // 데이터를 처리
    console.log(data)
})
console.log("다음 작업")
*/



/*
// Promise 객체에서 에러 처리
async function fetchData(id){
    if (!id){
        const err = new Error("id is required");
        throw err;
    }

    const o = {foo : "bar"}
    return o;
}

// 1. Promise를 사용한 방법 **
// 서버에 데이터를 요청한다
fetchData(null)
.then(data => { // 데이터를 처리한다
    console.log("data", data)
})
.catch(err => { // 에러 처리
    console.log(err);
})

// 2. 비동기 함수를 사용한 방법 -> 비추천
fetchData(null, (err, data) => {
    try{
        if(err){
            throw err;
        }
        console.log("data", data)
    } catch(error){
        console.error(error)
    }
})
*/



/*
// Promise의 async/await 문법
// 비동기 작업을 동기 작업처럼 할 수 있게 만든다
// 가독성면에서 가장 좋다

async function fetchData(id){
    if (!id){
        const err = new Error("id is required");
        throw err;
    }

    const o = {foo : "bar"}
    return o;
}

f();
async function f(){
    try {
        // await : 비동기 작업이 끝날 때까지 기다린다
        // await은 async 함수 내부에서만 사용할 수 있다
        const data = await fetchData(null);
        console.log(data);

        console.log("다음 작업")

    }catch (error){
        console.error(error)
    }
}
*/



// JSON
// JavaScript Object Notation (JavaScript 객체 표기법)
// JavaScript 객체를 저장하거나 전송하기 위한 텍스트 포멧

// const o = {foo : "bar"};
// const json = '{"foo" : "bar"}'
// console.log(o)  // Object
// console.log(json)   // json포맷 (텍스트)
// console.log(typeof json)    // string

// const o = {foo : "bar"}
// // JSON.stringfy() : Object를 json 포맷으로 변환한다
// const r = JSON.stringify(o)
// console.log(r)

// const json = '{"foo" : "bar"}'
// // JSON.parse(json) : json포맷을 Object로 변환한다
// const r = JSON.parse(json);
// console.log(r) 
// console.log(typeof r)   // Object

// const arr = '[{"prop1" : "foo", "prop2" : "bar"}]'
// const r = JSON.parse(arr);
// console.log(r)