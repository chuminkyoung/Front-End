import React from 'react';
import './App.css';

export default App;

// function App() {
//   return <h1>Hello React</h1>
// }

// # JSX 
// JavaScript의 확장문법
// 선언형 문법
// Babel 이 JSX를 JavaScript Object로 변환한다

/*
function App() {
  return <h1>Hello React</h1>
}
*/

/*
// JSX 없이 Virtual DOM 만들기
function App(){
  const h1 = React.createElement('h1', 'null', 'Hello React');

  return h1;
}
*/


// # JSX 문법
// function App(){
//   return (
//     <div>
//       <h2>elements는 하나의 element로 감싸져야 한다</h2>
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </div>
//   )
// }


// function App(){
//   return(
//     <div>
//       <h2>elements는 하나의 element로 감싸지 않은 경우 에러 발생</h2>
//       <div>Foo</div>
//        <div>Bar</div>
//        <div>Baz</div>
//     </div>
//   )
// }



// # React.Framgment
// function App(){
//   return(
//     // DOM에 element를 추가하지 않고 자식을 그룹화할 수 있다
//     <React.Fragment>
//       <h2>React.Fragment</h2>
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </React.Fragment>
//   )
// }


// function App(){
//   return(
//     <>
//       <h2>React.Fragment</h2>
//       <div>Foo</div>
//       <div>Bar</div>
//       <div>Baz</div>
//     </>
//   )
// }



// # JSX attribute
// function App(){
//   return (
//     <>
//       <h2>JSX attribute</h2>
//       <ul>
//         <li><a href="" target="_blank"></a></li>
//         <li><img src="" alt="Bar"></img></li>
//         <li><input type="text" placeholder="Baz" autoComplete="off"></input></li>
//       </ul>
//     </>
//   )
// }



// # JSX inline style attribute
// function App(){
//   return (
//     <>
//       <h2>JSX inline style</h2>
//       {/* style attribute에 object를 인자로 전달한다 */}
//       <ul style={{border : "1px solid"}}>
//         <li style={{textDecoration : "underline"}}>Foo</li>
//         <li>Bar</li>
//         <li>Baz</li>
//       </ul>
//     </>
//   )
// }



// # JSX 내에서 JS 코드 작성하기
// function App(){
//   const foo = "Foo";

//   return(
//     <>
//       <h2>Jsx 내에서 코드 작성하기</h2>
//       <div>{foo}</div>
//       <div>{"Ba" + "r"}</div>
//       <div>{"Baz".valueOf()}</div>
//     </>
//   )
// }



// Q. JavaScript 변수와 inline style을 사용하여 virtualDOM을 완성시켜보세요
// function App(){
//   const dutchBeer = "Heineken";
//   const irishBeer = "Guinness";
//   const japaneseBeer = "Asahi";

//   const soldOut = {
//     textDecoreation: "line-through",
//     color: "#ddd"
//   };

//   return(
//     <>
//       <h2>Beers</h2>
//       <ul>
//         <li>{dutchBeer}</li>
//         <li style={soldOut}>{irishBeer}</li>
//         <li>{japaneseBeer}</li>
//       </ul>
//     </>
//   )
// }



/*
// # JSX 내에서 조건문 사용하기
// 논리연산자, 삼항연산자
// && (AND) : expr1 && expr2
// || (OR)  : expr1 || expr2
// !  (NOT) : !expr
// 삼향연산자 (Ternary) : 조건 ? expr if true : expr if false

function App(){
  
  // &&
  console.log(true && 1);   // 1  앞이 참이면 뒤가 실행됨
  console.log(1 && 0);      // 0  0은 false
  console.log(0 && 1);      // 0
  console.log(0 && false);  // 0 둘다 false면 앞이 실행
  console.log(1>0 && 2>0);  // true

  // ||
  console.log(1 || true);   // 1  || 의 경우 둘다 참일 경우 앞이 실행됨
  console.log(1 || 0);      // 1
  console.log(0 || 1);      // 1
  console.log(false || 0);  // 0

  return(
    <>
      <h2>JSX내에서 조건문 사용하기</h2>
      <div>{true && "Foo"}</div>
      <div>{false || "Bar"}</div>
      <div>{!true ? "" : "Baz"}</div>
    </>
  )
}
*/



/*
// # JSX내에서 반복문 사용하기
function App(){
  const arr = ["foo", "bar", "baz"];

  return(
    <>
      <h2>JSX에서 반복문</h2>
      <ul>
        // map 은 새로운 arr 메서드에서 사용
        {arr.map((item, index) => (
          // key 는 반복문에서 꼭 필요
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}
*/



/*
// # JSX내에서 반복문 사용하기2
function App(){
  const arr = ["foo", "bar", "baz"];

  const list = arr.map((item,index) => (
    <li key={index}>{item}</li>
  ))

  return(
    <>
      <h2>JSX 반복문</h2>
      <ul>
        {list}
      </ul>
    </>
  )
}
*/



// 화살표 함수에서 {} (중괄호)가 없으면 화살표 뒤의 값을 return한다
const f = () => "foo"
console.log(f())



/*
// Q. 반복문을 사용해서 맥주 리스트를 출력해보세요
function App(){
  const beers = [
    {name : "Heineken", origin : "Netherlands"},
    {name : "Guinness", origin : "Ireland"},
    {name : "Asahi", origin : "Japan"}
  ];

  // const list = beers.map((beer,index) => (
  //   <li key={index}>{beer.name}, {beer.origin}</li>
  // ))
  
  // return(
  //   <>
  //     <h2>Beers</h2>
  //     <ul>
  //       {list}
  //     </ul>
  //   </>
  // )
    

    const list2 = beers.map((beer, index) => (
      <li key={index}>{beer.name}, {beer.origin}</li>
    ))

    const list3 = beers.map((beer, index) => 
      <li key={index}>{beer.name}, {beer.origin}</li>
    )

}
*/




/*
// # COMPONENTS (컴포넌트)
// 정의 : 복잡한 UI를 빌드하기 위한 재사용 가능하고 독립적인 부품

// 컴포넌트 기본
// 함수컴포넌트와 클래스 컴포넌트가 있다



// // App 컴포넌트
// // 함수 컴포넌트는 기본적으로 함수이다
// function App(){
  
//   // 코드 작성
//   console.log("App Loaded!");

//   // VirtualDOM을 return한다
//   return <h1>App</h1>

//   // 컴포넌트 합성(Composition)
//   // 코드를 재사용한다
// }



// 컴포넌트의 첫글자는 대문자여야 한다
function Foo(){
  return <li>Foo</li>
}
function Bar(){
  return <li>Bar</li>
}
function Baz(){
  return <li>Baz</li>
}

function App(){
  return(
    <>
      <ul>
        <Foo />
        <Bar />
        <Baz />
      </ul>
    </>
  )
}
*/


// Q. 맥주표를 table element를 이용해서 완성해보세요
function DutchBeer(){
  return (
    <tr>
      <td>Heineken</td>
      <td>Netherlands</td>
      <td>Yes</td>
    </tr>
  )
};

function IrishBeer(){
  return (
    <tr>
      <td>Guinness</td>
      <td>Ireland</td>
      <td>No</td>
    </tr>
  )
};

function JapaneseBeer(){
  return (
    <tr>
      <td>Asahi</td>
      <td>Japan</td>
      <td>Yes</td>
    </tr>
  )
};

function App(){
  return(
    <>
      <h2>Beers</h2>
      <table>
        <thead>
          <th>Brand</th>
          <th>Origin</th>
          <th>Abailable</th>
        </thead>
        <tbody>
          <DutchBeer />
          <IrishBeer />
          <JapaneseBeer />
        </tbody>
      </table>
    </>
  )
}