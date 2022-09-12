import { useReducer } from "react";
import "./App.css";
// import MyComponent from "../Component[default]/MyComponent.js";
// import Counter from "../stateComponent[class]/Counter.js";
// import Say from "../stateComponent[function]/say.js";
// import EventPractice from "../EventPractice[class]/EventPractice.js";
// import EventPracticeFunction from "../EventPractice[function]/EventPractice.js";
// import RefClass from "../ref[class]/ref.js";
// import ScrollBox from "../ScrollBox/ScrollBox.js";
// import Loop from "../loop/loop.js";
// import LifeCycle from "../LifeCycle[class]/LifeCycle.js";
// import ErrorSearch from "../ErrorSearch/ErrorSearch.js";
// import HooksPractice from "../HooksPractice/HooksPractice.js";
// import { Component, useReducer, useState } from "react";

// 랜덤으로 색상을 정해주는 함수
// const getRandomColor = () => {
//   return "#" + Math.floor(Math.random() * 1677215).toString(16);
// };

function App() {
  // 함수에서 useRef사용
  // const box = useRef();

  // const [state, setState] = useState(0);

  // const up = () => {
  //   setState(state + 1);
  // };

  // const reset = () => {
  //   setState(0);
  // };
  // const down = () => {
  //   setState(state - 1);
  // };

  const InputReducer = (state, action) => {
    return { ...state, [action.name]: action.value };
  };

  const InputChange = (e) => {
    disPatchData(e.target);
  };

  const [inputData, disPatchData] = useReducer(InputReducer, {
    text: "",
    number: "",
  });

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "up":
        return state + Number(action.number);
      case "reset":
        return 0;
      case "down":
        return state - Number(action.number);
      default:
        return;
    }
  };

  const [count, disPatchCount] = useReducer(reducerFunction, 0);

  const up = () => {
    disPatchCount({ type: "up", number: inputData.number });
  };

  const reset = () => {
    disPatchCount({ type: "reset" });
  };
  const down = () => {
    disPatchCount({ type: "down", number: inputData.number });
  };

  return (
    <>
      {/* <div className="div-text">{text}</div>
      <MyComponent name="강예훈" number={7}>
        리액트
      </MyComponent> */}
      {/* <Counter text="바뀌지 않는 값" /> */}
      {/* <Say /> */}
      {/* <EventPracticeClass /> */}
      {/* <EventPracticeFunction /> */}
      {/* <ScrollBox ref={box} />
      <button
        onClick={() => {
          box.current.scrollMoveTop();
        }}
      >
        위로
      </button>
      <button
        onClick={() => {
          box.current.scrollMoveBottom();
        }}
      >
        아래로
      </button> */}

      <button onClick={up}>+</button>
      <button onClick={reset}>0</button>
      <button onClick={down}>-</button>
      <input
        name="number"
        placeholder="연산 값 지정"
        onChange={InputChange}
      ></input>
      <div>{count}</div>
      <input
        name="text"
        placeholder="입력하세요"
        onChange={InputChange}
      ></input>
      <h1>{inputData.text}</h1>
    </>
  );
}

// class App extends Component {
//   // 색상값의 상태 조절을 위한 state
//   // state = {
//   //   color: "#000000",
//   // };

//   // 클릭하면 color의 상태를 getRandomColor 함수에서 반환받은 값으로 할당한다
//   // Click = () => {
//   //   this.setState({ color: getRandomColor() });
//   // };
//   render() {
//     return (
//       <>
//         {/* <RefClass
//           ref={(ref) => {
//             this.refClass = ref;
//           }} */}
//         {/* <ScrollBox
//           ref={(ref) => {
//             this.scrollBox = ref;
//           }}
//         />
//         {/* ref를 사용하여 ScrollBox 컴포넌트 내부의 함수를 사용 */}
//         {/* <button onClick={() => this.scrollBox.scrollMoveTop()}>위로</button>
//         <button onClick={() => this.scrollBox.scrollMoveBottom()}>
//           아래로
//         </button> */}
//         {/* <Loop /> */}
//         {/* <Counter /> */}

//         {/* 에러처리를 위해 요소를 감쌈 */}
//         {/* <ErrorSearch>
//           <button onClick={this.Click}>랜덤 색상</button>
//           <LifeCycle color={this.state.color} />
//         </ErrorSearch> */}
//         {/* <HooksPractice /> */}
//       </>
//     );
//   }
// }

export default App;
