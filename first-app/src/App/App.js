import "./App.css";
// import MyComponent from "../Component[default]/MyComponent.js";
// import Counter from "../stateComponent[class]/Counter.js";
// import Say from "../stateComponent[function]/say.js";
// import EventPractice from "../EventPractice[class]/EventPractice.js";
import EventPracticeFunction from "../EventPractice[function]/EventPractice.js";

function App() {
  return (
    <>
      {/* <div className="div-text">{text}</div>
      <MyComponent name="강예훈" number={7}>
        리액트
      </MyComponent> */}
      {/* <Counter text="바뀌지 않는 값" /> */}
      {/* <Say /> */}
      {/* <EventPractice /> */}
      <EventPracticeFunction />
    </>
  );
}

export default App;
