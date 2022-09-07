import "./App.css";
// import MyComponent from "../Component[default]/MyComponent.js";
// import Counter from "../stateComponent[class]/Counter.js";
import Say from "../stateComponent[function]/say.js";

function App() {
  // const text = "리액트";

  return (
    <>
      {/* <div className="div-text">{text}</div>
      <MyComponent name="강예훈" number={7}>
        리액트
      </MyComponent> */}
      {/* <Counter text="바뀌지 않는 값" /> */}
      <Say />
    </>
  );
}

export default App;
