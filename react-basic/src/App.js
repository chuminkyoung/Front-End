import React, {createContext, useContext, useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, useNavigate} from "react-router-dom"

//import React from 'react';
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
/*
const f = () => "foo"
console.log(f())
*/



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



/*
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
*/




/*
// # props
// 컴포넌트에 전달되는 인자(parameter)


// 1
function C(props){  // properties (Object)s
  console.log(props);
  const prop1 = props.prop1;

  return <li>{prop1}</li>
}

function App(){
  return(
    //C 컴포넌트를 재사용했다
    <>
      <h1>App</h1>
      <ul>
        <C prop1="Foo" />
        <C prop1="Bar" />
        <C prop1="Baz" />
      </ul>
    </>
  )
}


// 2
function Beer(props){
  const name = props.name;
  const origin = props.origin;

  return <li>{name}, {origin}</li>
}

function App(){
  return(
    <>
      <h1>Beers</h1>
      <ul>
        <Beer name="Heineken" origin="Netherlands" />
        <Beer name="Guinness" origin="Ireland" />
        <Beer name="Asahi" origin="Japan" />
      </ul>
    </>
  )
}
*/



/*
// Object props

function C(props){
  console.log(props);

  const o = props.o;

  return (
    <ul>
      <li>Prop1: {o.prop1}</li>
      <li>Prop2: {o.prop2}</li>
      <li>Prop3: {o.prop3}</li>
    </ul>
  )
}

const o = {prop1: "Foo", prop2: "Bar", prop3: "Baz"};

function App(){
  return(
    <>
      <h1>o</h1>
      <C o={o} />
    </>
  )
}
*/



/*
function Beer(props){
  const i = props.beer;

  return(
    <ul>
      <li>Name: {i.name}</li>
      <li>Origin: {i.origin}</li>
      <li>Available: {i.available ? "Yes" : "No"}</li>
    </ul>
  )
}

const irisBeer = {name: "Guinness", origin: "Ireland", available: false};

function App(){
  return(
    <>
      <h2>Beer</h2>
      <Beer beer={irisBeer}/>
    </>
  )
}
*/




/*
// Q. 컴포넌트 반복적으로 출력하기
// JSX에서 Array.map()를 사용하세요
// Object props가 전다링 되겠죠?
const beers = [
  {name: "Heineken", origin: "Netherlands"},
  {name: "Guinness", origin: "Ireland"},
  {name: "Asahi", origin: "Japan"}
]

function Beer(props){
  const beer = props.beer;

  return(
    <li>{beer.name}, {beer.origin}</li>
  )
}

function App(){
  const list = beers.map((beer, index) => (
    <Beer key={index} beer={beer} />
  ));
  return(
    <>
      <h2>Beers</h2>
      <ul>{list}</ul>
    </>
  )
}
*/





/*
// children props;

function C(props){
  console.log(props);
  // children은 속성 키가 children이다
  const children = props.children;

  return (
    <fieldset>
      <legend>C</legend>
      {children}
    </fieldset>
  )
}

function Foo(){
  return <div>Foo</div>
}

function App(){
  // Foo 컴포넌트는 C컴포넌트의 children이다
  return(
    <>
      <h1>App</h1>
      <C>
        <Foo />
      </C>
    </>
  )
}
*/




/*
// Q. children props를 이용해서 맥주 리스트를 만들어보세요

function Beer(props){
  const beer = props.children;

  return(
    <div style={{borderTop : "1px solid #000"}}>
      {beer}
    </div>
  )
}

function DutchBeer(){
  return(
    <>
      <h3>Heineken</h3>
      <p>Dutch beer</p>
    </>
  )
}
function IrishBeer(){
  return(
    <>
      <h3>Guinness</h3>
      <p>Irish beer</p>
    </>
  )
}

function App(){
  return(
    <>
      <h1>Beers</h1>
      <Beer>
        <DutchBeer />
      </Beer>
      <Beer>
        <IrishBeer />
      </Beer>
    </>
  )
}
*/




/*
// Component tree

function Foo(props){
  const children = props.children;

  return (
    <fieldset>
      <legend>Foo</legend>
      {children}
    </fieldset>
  )
}

function Bar(props){
  const children = props.children;

  return (
    <fieldset>
      <legend>Bar</legend>
      {children}
    </fieldset>
  )
}

function Baz(){
  return <div>Baz</div>
}

function App(){
  return(
    <Foo>
      <Bar>
        <Baz />
      </Bar>
    </Foo>
  )
}
*/




// list 문제 children
/*
function Beer({children}){
  // const children = box.children; // -> const 내용 대신 위에  {children} 로 써도 사용 가능

  return(
    <fieldset>
      <legend>Beers</legend>
      {children}
    </fieldset>
  )
}

function Beer1(box){
  const children = box.children;

  return(
    <fieldset>
      <legend>European beers</legend>
      {children}
    </fieldset>
  )
}

function Beer2(box){
  const children = box.children;

  return(
    <fieldset>
      <legend>Asian beers</legend>
      {children}
    </fieldset>
  )
}

function List1(){
  return(
    <ul>
      <li>Heineken</li>
      <li>Guinness</li>
    </ul>
  )
}

function List2(){
  return(
    <ul>
      <li>Heineken</li>
      <li>Guinness</li>
    </ul>
  )
}

function App(){
  return(
    <Beer>
      <Beer1><List1 /></Beer1>
      <Beer2><List2 /></Beer2>
    </Beer>
  )
}
*/




// children에 props 전달하기
// import React, {createContext, useContext} from 'react'; -> 맨 위에 설정해줘야함

// 1
/*
const FooContext = createContext();

function Foo(props){
  const children = props.children;

  // 함수범위(지역범위)
  // Foo컴포넌트 내에서만 접근할 수 있다
  const foo = "FOO";

  return(
    <fieldset>
      <legend>Foo</legend>
      <FooContext.Provider value={foo}>
        {children}
      </FooContext.Provider>
    </fieldset>
  )
}

function Bar(props){
  const children = props.children;

  const x = useContext(FooContext);  // useContext가 foo 에 접근가능하게 해줌
  console.log(x);
  
  return(
    <fieldset>
      <legend>Bar</legend>
        {children}
    </fieldset>
  )
}

function Baz(){
  const foo = useContext(FooContext); // foo 를 불러옴
  
  console.log(foo); // foo is not defined

  return <div>{foo}</div>
}

function App(){
  return(
    <Foo>
      <Bar>
        <Baz></Baz>
      </Bar>
    </Foo>
  )
}
*/



//2 질문
/*
const BeersContext = createContext();

function Beers({children}){

  // 재고관리
  const availability = {
    guinness: false,
    asahi: true,
    kloud: true
  }

  return(
    <>
      <h1>Beers &#127866;</h1>
      <BeersContext.Provider value={availability}>
        {children}
      </BeersContext.Provider>
    </>
  )
}

function EuropeanBeers({children}){
  return(
    <div>
      <h2>European beers</h2>
      {children}
    </div>
  )
}

function IrishBeer(){
  const availability = useContext(BeersContext);

  return(
    <div>
      <h3>GUINNESS</h3>
      <p>Abailable: {availability.guinness ? "Yes" : "No"}</p>
    </div>
  )
}

function AsianBeers({children}){
  return(
    <div>
      <h2>Asian beers</h2>
      {children}
    </div>
  )
}

function JapaneseBeer(){
  const availability = useContext(BeersContext);

  return(
    <div>
      <h3>ASAHI</h3>
      <p>Abailable: {availability.asahi ? "Yes" : "No"}</p>
    </div>
  )
}

function KoreanBeer(){
  const availability = useContext(BeersContext);

  return(
    <div>
      <h3>KLOUD</h3>
      <p>Abailable: {availability.kloud ? "Yes" : "No"}</p>
    </div>
  )
}

function App(){
  return(
    <Beers>
      <EuropeanBeers>
        <IrishBeer />
      </EuropeanBeers>
      <AsianBeers>
        <JapaneseBeer />
        <KoreanBeer />
      </AsianBeers>
    </Beers>
  )
}
*/




// # Event
/*
function App(){
  function handleClick(e){
    console.log(e.target)
  }
  // click 이벤트 함수


  // attribute : onEventName={callback}
  // addEventListner("click", callback)
  
  return(
    <>
      <h1>click event</h1>
      <button onClick={handleClick}>Button</button>
    </>
  )
}
*/


/*
// 1
// callback에 인자를 전달하지 않을 때
document.body.addEventListener("click", f);
function f(e){
  console.log(e);
}
function App(){}

// 2
// 위에 것과 같음 (익명함수 사용)
document.body.addEventListener("click", (e) => {
  console.log(e)
})

// 3
// callback에 인자가 있을 떄
document.body.addEventListener("click", () => {
  console.log("Foo")
})

function App(){};
*/



/*
// 위에 3개 내용 참고
function App(){
  function handleClick(foo){
    console.log(foo)
  }
  // click 이벤트 함수

  // attribute : onEventName={callback}
  // addEventListner("click", callback)
  
  return(
    <>
      <h1>click event</h1>
      <button onClick={ () => handleClick("Foo")}>Button</button>
    </>
  )
}
*/



// Event
/*
function App(){
  function handleClick(x){
    console.log(x);
  }

  // 이벤트에서 다른 element가 같은 callback을 사용할 때

  return(
    <>
      <h1>Accordion</h1>
      <button onClick={() => handleClick("Foo")}>Foo</button>
      <button onClick={() => handleClick("Bar")}>Bar</button>
      <button onClick={() => handleClick("Baz")}>Baz</button>
    </>
  )
}
*/



// change 이벤트
/*
function App(){
  function handleChange(e){
    console.log(e.target.value);
  }

  // change
  // keyup

  return(
    <>
      <h1>change</h1>
      <input type="text" onChange={handleChange} />
    </>
  )
}
*/


// 이벤트 문제
// input value 입력 문제
/*
function App(){
  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
  }

  return(
    <>
      <h1>Loigin</h1>
      <form>
        <div>
          <label>Username</label>
          <input type="text" id="username" name="username" autoComplete="off" onChange={handleChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" name="password" autoComplete="off" onChange={handleChange} />
          </div>
      </form>
    </>
  )
}
*/



/*
// 이벤트 문제
// submit event
function App(){
  function handleSubmit(e){
    // form이 제출되지 않음
    e.preventDefault();

    console.log(".");
  }

  return(
    <form onSubmit={handleSubmit}>
      <h1>Form</h1>
      <p>...</p>
      <button type="submit">Submit</button>
    </form>
  )
}
*/




// # DOM 업데이트 버튼 클릭시 +1 더하기
// import React, {createContext, useContext, useState} from 'react'; -> 상단에 useState 추가해줘야함

/*
function App(){
  const [count, setCount] = useState(0);
  // count [state, setState] = useState(initialValue);
  // state : 변수
  // setState : state를 업데이트하는 메서드
  // initialValue : state의 초기값

  return(
    <>
      <h1>Count</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  )
}
*/


// state Hook없이 DOM 업데이트 하기
/*
function App(){
  let count = 0;

  // DOM을 업데이트 하기 위해서는 virtualDOM을 다시 return해야 한다
  // virtualDOM을 다시 return하기 위해서는 컴포넌트를 다시 실행해야 한다
  // setState는 컴포넌트를 다시 실행한다
  // DOM이 없데이트 된다.
  function handleClick(e){
    count++;
    //console.log(count); -> 증가는 하고 있지만 button은 증가가 안됨
  }

  return(
    <>
      <h1>Count</h1>
      <p>{count}</p>
      <button onClick={handleClick}>Add</button>
    </>
  )
}
*/



// 시계
/*
function App(){
  console.log("App Loaded!");

  const initialTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(initialTime);

  setTimeout(() => {
    const updatedTime = new Date().toLocaleTimeString();
    setTime(updatedTime); // 시간 1초마다 업데이트
  }, 1000)

  return(
    <>
      <h1>시계</h1>
      <p>{time}</p>
    </>
  )
}
*/



// 카운트 문제 - count  +, -
/*
function App(){
  const [count, setCount] = useState(0);

  return(
    <>
      <h1>Count</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}
*/



// 버튼 클릭시 버튼 텍스트 변경
/*
function App(){
  const [subscribe, setSubscribe] = useState(false);

  return(
    <>
      <h1>구독부탁드려요</h1>
      <button onClick={() => setSubscribe(!subscribe)}>
        {!subscribe ? "구독하기" : "구독중"}
      </button>
    </>
  )
}
*/



// 버튼 클릭 취소 , 구독하기 , 구독취소
/*
function App(){
  const [subscribe, setSubscribe] = useState(false);
  const [subscribers, setSubscribers] = useState(0);

  function handleClick(subscribe){
    if(subscribe){  // 구독취소 true
      setSubscribe(false);
      setSubscribers(subscribers - 1);
    }else{  // 구독중 false
      setSubscribe(true);
      setSubscribers(subscribers + 1);
    }
  }
  
  return(
    <>
      <h1>Subscribe</h1>
      <p>구독자 수 : {subscribers}</p>
      <button onClick={() => handleClick(subscribe)}>
        {!subscribe ? "구독하기" : "구독중"}
      </button>
    </>
  )
}
*/



// # Form 다루기 // input 입력시 버튼 활성화
/*
function App(){
  const [username, setUsername] = useState("");

  function handleSubmit(e){
    e.preventDefault(); // -> form이 제출되지 않게 막음
    console.log("username:", username);
    setUsername("");
  }

  function handleChange(e){
    const value = e.target.value;
    const username = value.trim();  // value 의 앞 뒤 공백을 지움

    setUsername(username);
    // !""      // true -> 빈문자열에 !붙으면 true
    // !"foo"   // false -> 문자열에 !붙으면 false
  }

  return(
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="text" value={username} placeholder="Username" onChange={handleChange}></input>
      <button type="submit" disabled={!username}>로그인</button>
    </form>
  )
}
*/




// Q. Password toggle 
// 비밀번호 문자 보여줬다 숨기기
/*
function App(){
  const [type, setType] = useState("password");

  function handleClick(){
    if(type === "password"){
      setType("text");
    }else{
      setType("password");
    }
  }

  return(
    <form>
      <h1>Login</h1>
      <input type={type} placeholder="Password" />
      <button type="button" onClick={handleClick}>
        {type==="password" ? "Show" : "Hide"}
      </button>
    </form>
  )
}
*/



// 한글자 입력시 검색
/*
function App(){
  const [beers, setBeers] = useState([]);

  function handleChange(e){
    const name = e.target.value;

    if(!name) {
      setBeers([]);
      return;
    } // input의 내용이 비어있을 경우 아무것도 안뜨게

    const DATA = [
      {id: "b1", name: "Heineken"},
      {id: "b2", name: "Guinness"},
      {id: "b3", name: "Kloud"},
      {id: "b4", name: "KGB"},
      {id: "b5", name: "Asahi"},
    ];

    const updatedBeers = DATA.filter(beer => {
      // String.startsWith(p) : String이 p로 시작하면 true 아니면 false를 return한다
      if (beer.name.startsWith(name)) {
        // 입력한 글자의 첫 글자가 name 단어의 첫 글자와 같으면 true 아니면 false를 return한다
        return beer;
      }
    })

    //console.log(updatedBeers);

    setBeers(updatedBeers);
  }

  const beerList = beers.map((beer, index) => (
    <li key={index}>{beer.name}</li>
  ))

  return(
    <>
      <h1>Live Search</h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search"
      />
      <ul>
        {beerList}
      </ul>
    </>
  )
}
*/




// # 1. 추가
// input 입력값 list에 추가
// Beer form: create
/*
const initialBeers = [
  {id: "b1", name: "Heineken"},
];

function App(){
  const [beers, setBeers] = useState(initialBeers);
  const [name, setName] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    const newBeer = {id : Math.random(), name : name} // 키와 값이 같으면 하나는 생략 가능

    // beers에 newBeer를 추가한다
    const updatedbeers = [...beers, newBeer];   // ...beers 의 속성들
    // console.log(updatedbeers);

    // beers state를 업데이트한다
    setBeers(updatedbeers);
    setName("");

  }

  function handleChange(e){
    const name = e.target.value;
    setName(name);
    // console.log(name);
  }

  const beerList = beers.map(beer => (
    <li key={beer.id}>
      {beer.name}
    </li>
  ))

  return(
    <>
      <h1>Beers</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Guinness"
          onChange={handleChange}
          value={name}
        />
        <button
          type="submit"
          disabled={!name}
        >
          Add
        </button>
      </form>
      <ul>
        {beerList}
      </ul>
    </>
  )
}
*/




// # 2. 삭제
/*
const initialBeers = [
  {id : "b1", name : "Heineken"},
  {id : "b2", name : "Guinness"},
  {id : "b3", name : "Kloud"}
];

function App(){
  const [beers, setBeers] = useState(initialBeers);

  function deleteBeer(beerId){

    console.log(beerId);

    const deleteBeers = beers.filter(beer => {
      if (beer.id !== beerId) { 
        return beers;
      }
    })
    
    setBeers(deleteBeers);
  }



  const beerList = beers.map(beer => (
    <li key={beer.id}>
      {beer.name} {" "}
      <button onClick={() => deleteBeer(beer.id)}>Delete</button>
    </li>
  ))

  return(
    <>
      <h1>Beers</h1>
      <form>
        <input 
          type="text"
          placeholder="Guinness"
          disabled={true}
        />
        <button
          type="submit"
          disabled={true}
        >
          Add
        </button>
      </form>
      <ul>
        {beerList}
      </ul>
    </>
  )
}
*/



// # 3. 업데이트
/*
 const initialBeers = [
  {id : "b1", name : "Heineken", available : true},
  {id : "b2", name : "Guinness", available : false},
  {id : "b3", name : "Kloud", available : true}
 ]

 function App(){
  const [beers, setBeers] = useState(initialBeers);
  
  function editBeer(beerId){

    console.log(beerId)
    
    const editedBeers = beers.map(beer => {
      if(beer.id===beerId){
        return{...beer, available: !beer.available}
      }
      return beer;
    })

    setBeers(editedBeers);
  }

  const beerList = beers.map(beer => (
    <li key={beer.id}>
      {beer.name} {" "}
        <button onClick={() => editBeer(beer.id)}>
          {beer.available ? "판매중" : "품절"}
        </button>
    </li>
  ))

  return(
    <>
      <h1>Beers</h1>
      <form>
        <input 
          type="text"
          placeholder="Guinness"
          disabled={true}
        />
        <button
          type="submit"
          disabled={true}
        >
          Add
        </button>
      </form>
      <ul>
        {beerList}
      </ul>
    </>
  )
 }
 */




// 01. 추가 + 삭제 + 업데이트
/*
const initialBeers = [
  {id: "b1", name: "Heineken"},
  {id: "b2", name: "Guinness"},
  {id: "b3", name: "Asahi"},
  {id: "b4", name: "Cass"},
];

function App(){
  const [beers, setBeers] = useState(initialBeers);
  const [name, setName] = useState("");


  // 01. 제품 추가
  function handleSubmit(e){
    e.preventDefault();

    const newBeer = {id : Math.random(), name : name} // 키와 값이 같으면 하나는 생략 가능

    // beers에 newBeer를 추가한다
    const updatedbeers = [...beers, newBeer];   // ...beers 의 속성들
    // console.log(updatedbeers);

    // beers state를 업데이트한다
    setBeers(updatedbeers);
    setName("");

  }

  function handleChange(e){
    const name = e.target.value;
    setName(name);
    // console.log(name);
  }



  // 02. 삭제 버튼
  function deleteBeer(beerId){

    console.log(beerId);

    const deleteBeers = beers.filter(beer => {
      if (beer.id !== beerId) { 
        return beers;
      }
    })
    
    setBeers(deleteBeers);
  }

  // 03. 제품 상태
  function editBeer(beerId){

    console.log(beerId)
    
    const editedBeers = beers.map(beer => {
      if(beer.id===beerId){
        return{...beer, available: !beer.available}
      }
      return beer;
    })

    setBeers(editedBeers);
  }

  const beerList = beers.map(beer => (
    <li key={beer.id}>
      {beer.name}
      <br/>
      <button onClick={() => deleteBeer(beer.id)}>Delete</button>
      <button onClick={() => editBeer(beer.id)}>
          {beer.available ? "판매중" : "품절"}
      </button>
    </li>
  ))

  return(
    <>
      <h1>Beers</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Guinness"
          onChange={handleChange}
          value={name}
        />
        <button
          type="submit"
          disabled={!name}
        >
          Submit
        </button>
      </form>
      <ul>
        {beerList}
      </ul>
    </>
  )
}
*/



// 02. 추가 + 삭제 + 업데이트
/*
const initialBeers = [
  {id: "b1", name: "Heineken", available: true},
  {id: "b2", name: "Guinness", available: false},
  {id: "b3", name: "Kloud", available: true},
]

function App(){
  const [beers, setBeers] = useState(initialBeers);

  function addBeer(name){

    // beers에 newBeer를 추가한다
    const newBeer = {id : Math.random(), name, available: true}; // 키와 값이 같으면 하나는 생략 가능

    const updatedbeers = [...beers, newBeer];   // ...beers 의 속성들
    // console.log(updatedbeers);
    
    // beers (state) 업데이트: 추가
    setBeers(updatedbeers);

  }


  // beers (state) 업데이트: 삭제
  function deleteBeer(beerId){
    const deleteBeers = beers.filter(beer => {
      if (beer.id !== beerId) { 
        return beer;
      }
    })
    
    setBeers(deleteBeers);
  }


  // beers (state) 업데이트: 편집
  function editBeer(beerId){
    console.log(beerId)
    
    const editedBeers = beers.map(beer => {
      if(beer.id===beerId){
        return{...beer, available: !beer.available}
      }
      return beer;
    })

    setBeers(editedBeers);
  }


  const beerList = beers.map(beer => (
    <Beer 
      key={beer.id} 
      beer={beer} 
      editBeer={editBeer}
      deleteBeer={deleteBeer}
     />
  ))

  return (
    <>
      <h1>Beers</h1>
      <Form addBeer={addBeer} />
      <ul>
        {beerList}
      </ul>
    </>
  )
}

function Form({addBeer}){
  const [name, setName] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    addBeer(name);
    setName("");
  }

  function handleChange(e){
    const name = e.target.value;
    setName(name);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Guinness"
        onChange={handleChange}
        value={name}
      />
      <button 
        type="submit"
        disabled={!name}
      >
        Add
      </button>
    </form>
  )
}

function Beer({beer, editBeer, deleteBeer}) {
  return(
    <li>
      {beer.name}
      <div>
        <button onClick={() => deleteBeer(beer.id)}>
          Delete
        </button>
        <button onClick={() => editBeer(beer.id)}>
          {beer.available ? "판매중" : "품절"}
        </button>
      </div>
    </li>
  )
}
*/




// # 클릭시 아래로 튀어나오는 모달
/*
function App(){
  const [active, setActive] = useState(false);

  const style = {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    // dynamic style
    maxHeight: active ? "100px" : "0",
    backgroundColor: "#eee",
    Transition: "0.2s",
  }

  const drawer = (
    <div style={style} onClick={() => setActive(false)}>
      <ul>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>
    </div>
  )

  return(
    <>
      <h1>Drawer</h1>
      <button
        onClick={() => setActive(true)} // 클릭시 true로 업데이트
      >
        Button
      </button>
      {drawer}
    </>
  )
}
*/



// # 네비게이션
/*
function App(){
  const [active, setActive] = useState(false);

  const style = {
    sideBar: {
      position: "fixed",
      background: "#fff",
      top: "0",
      width: "200px",
      height: "100vh",
      marginTop: "0",
      left: active ? "0" : "-100%",
      transition: "0.2s",
      zIndex: "1",
      padding: "20px 40px"
    },
    bg: {
      background: "rgba(0,0,0,.5)",
      width: "100%",
      height: "100vh",
      position: "fixed",
      left: "0",
      top: "0",
      display: active ? "block" : "none",
    }
  }

  const nav = (
    <>
      <nav>
        <ul style={style.sideBar}>
          <li>List Item</li>
          <li>List Item</li>
          <li>List Item</li>
        </ul>
      </nav>

      <div style={style.bg} onClick={() => setActive(false)}></div>
    </>
  )

  return(
    <>
      <h1>Navigagtion</h1>
      <button onClick={() => setActive(true)}>
        Button
      </button>
      {nav}
    </>
  )
}
*/




// # 슬라이드
// function App(){
//   const [index, setIndex] = useState(0);

//   console.log(index);

//   const images = ["foo.jps", "bar.jpg", "baz.jpg"];

//   const container = {
//     width: "100px",
//     height: "100px",
//     background: "#ddd",
//     display: "inline-flex",
//     //dynamic
//     transform: `translateX(-${index*100}px)`,
//     transition: "0.2s"
//   }

//   const item = {
//     width: "100%",
//     height: "100%",
//     border: "1px dashed",
//     flexShrink: "0",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     //boxSizing: "borderBox";
//   }

//   const list = images.map(image => (
//     <div key={image} style={item}>
//       {image}
//     </div>
//   ))

//   return (
//     <>
//       <h1>Carousel</h1>

//       {/* {images} */}
//       <div className="">
//         <h3>Images</h3>
//         <div 
//           className="container" style={container}
//         >
//           {list}
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="">
//         <h3>Navigation</h3>
//         <button
//           onClick={() => setIndex(index - 1)}
//           style={{visibility: index===0 && "hidden"}}
//         >
//           Prev
//         </button>
//         <button
//           onClick={() => setIndex(index + 1)}
//           style={{visibility: index===2 && "hidden"}}
//         >
//           Next
//         </button>
//       </div>
      
//       {/* Indicator */}
//       <div className="">
//         <h3>Indicator</h3>
//         <div>
//           {images.map((image, dot) => (
//             <span
//               key={dot}
//               style={{color: dot===index && "red"}}
//             >
//               *
//             </span>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }





// # 클릭시 아이디 출력 Router
// ## 상단에 패키지 추가
// import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams, useNavigate} from "react-router-dom"

// function Home() {
//   return <h1>Home</h1>
// }

// function Posts() {
//   return(
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p1">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p2">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// function Post(){
//   // url로 전달된 parameter를 가지고 있는 객체를
//   // return 한다
//   const params = useParams();
//   const postId = params.postId;

//   return(
//     <>
//       <h1>Post</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// function Contact(){
//   return <h1>Contact</h1>
// }

// function NotFound(){
//   return <h1>404 NotFound</h1>
// }

// function App(){
//   return (
//     <Router>
//       {/* Navigation */}
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         {/* path = url, element = path와 일치하는 컴퍼런트 */}
//         <Route path="/" element={<Home />} /> 
//         <Route path="/posts" element={<Posts />} />
//         <Route path="/posts/:postId" element={<Post />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   )
// }




/*
// # 인증 router
const AuthContext = createContext();

function AuthProvider({children}) {
  // AuthProvider의 children은 user에 접근가능하다
  const [user, setUser] = useState(null);

  function signIn(username) {
    setUser(username);
  }

  function signOut(){
    setUser(null)
  }

  const value = {user, signIn, signOut};

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

function Home(){
  return <h1>Home</h1>
}

function Posts(){
  return (
    <>
      <h1>Posts</h1>
      <ul>
        <li>
          <Link to="/post/p1">Post 1</Link>
        </li>
        <li>
          <Link to="/post/p2">Post 2</Link>
        </li>
      </ul>
    </>
  )
}

function Post(){
  const auth = useContext(AuthContext);

  const params = useParams();
  const postId = params.postId;

  if (!auth.user){  // 인증구현
    // 로그인 하지 않은 경우 페이지를 볼 수 없음
    return <p>Unauthorized</p>
  }

  return(
    <>
      <h1>Post</h1>
      <p>{postId}</p>
    </>
  )
}

function NotFound(){
  return <h1>404 NotFound</h1>
}

function Login(){
  const auth = useContext(AuthContext);
  const [username, setUsername] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    auth.signIn(username);
  }

  const loginTemplate = (
    <form onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  )

  const logoutTemplate = (
    <div>
      <h1>Sign out</h1>
      <p>{auth.user}</p>
      <button onClick={auth.signOut}>Submit</button>
    </div>
  )

  return auth.user ? logoutTemplate : loginTemplate;
}

function App(){
  return(
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="posts">Posts</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="post/:postId" element={<Post />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
*/





/*
// # fetch data(데이터 요청하기)
function App(){
  const [count, setCount] = useState(0);


  // useEffect(Hook)
  // 비동기적으로 작동한다

  // 사용방법
  // useEffect(callback) : 컴포넌트가 실행될 때마다 callback이 실행된다
  // useEffect(callback, []) : 컴포넌트의 최초 실행시에만 callback이 실행된다
  // useEffect(callback, [dep1, ...]) : 컴포넌트의 최초 실행시, depncency가 
  // 업데이트 될 때마다 callback이 실행된다


  useEffect(() => {
    const time = new Date().toLocaleTimeString();
    console.log(time);
  }, [])

  return(
    <>
      <h1>App</h1>
      <p>App이 {count}번 렌더링 되었습니다</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  )
}
*/





// API 서버가 2초 뒤에 응답을 준다과 가정한다
function fakeApi(){
  const beers = [
    {id: "b1", name: "Heineken"},
    {id: "b2", name: "Guinness"},
    {id: "b3", name: "Asahi"},
  ]

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(beers)
    },2000)
  })

  return promise;
}

function App(){
  const [beers, setBeers] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);

  useEffect(() => {
    fakeApi()
    .then(data => {   // 성공했을 떄
      setBeers(data)
    })
    .catch(error => { // 실패했을 때
      setError(error)
    })
    .finally(() => setIsLoaded(true)) // 성공 실패 상관없이 반드시 실행
  }, [])

  if(error){
    return <p>failed to fetch</p>
  }
  if(!isLoaded){
    return <p>fetching data...</p>
  }
  return(
    <>
      <h1>Beers</h1>
      <ul>
        {beers.map(beer => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
    </>
  )
}