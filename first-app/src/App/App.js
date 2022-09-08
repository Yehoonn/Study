import "./App.css";
// import MyComponent from "../Component[default]/MyComponent.js";
import Counter from "../stateComponent[class]/Counter.js";
// import Say from "../stateComponent[function]/say.js";
// import EventPractice from "../EventPractice[class]/EventPractice.js";
// import EventPracticeFunction from "../EventPractice[function]/EventPractice.js";
// import RefClass from "../ref[class]/ref.js";
// import ScrollBox from "../ScrollBox/ScrollBox";
// import Loop from "../loop/loop.js";

import { Component, useRef } from "react";

// function App() {
//   // 함수에서 useRef사용
//   // const box = useRef();
//   return (
//     <>
//       {/* <div className="div-text">{text}</div>
//       <MyComponent name="강예훈" number={7}>
//         리액트
//       </MyComponent> */}
//       {/* <Counter text="바뀌지 않는 값" /> */}
//       {/* <Say /> */}
//       {/* <EventPracticeClass /> */}
//       {/* <EventPracticeFunction /> */}
//       {/* <ScrollBox ref={box} />
//       <button
//         onClick={() => {
//           box.current.scrollMoveTop();
//         }}
//       >
//         위로
//       </button>
//       <button
//         onClick={() => {
//           box.current.scrollMoveBottom();
//         }}
//       >
//         아래로
//       </button> */}
//     </>
//   );
// }

class App extends Component {
  render() {
    return (
      <>
        {/* <RefClass
          ref={(ref) => {
            this.refClass = ref;
          }} */}
        {/* <ScrollBox
          ref={(ref) => {
            this.scrollBox = ref;
          }}
        />
        {/* ref를 사용하여 ScrollBox 컴포넌트 내부의 함수를 사용 */}
        {/* <button onClick={() => this.scrollBox.scrollMoveTop()}>위로</button>
        <button onClick={() => this.scrollBox.scrollMoveBottom()}>
          아래로
        </button> */}
        {/* <Loop /> */}
        <Counter />
      </>
    );
  }
}

export default App;
