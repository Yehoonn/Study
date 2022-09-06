import "./App.css";
import MyComponent from "./Component/MyComponent";

function App() {
  const text = "리액트";

  return (
    <>
      <div className="div-text">{text}</div>
      <MyComponent name="강예훈" name2="강예찬" />
    </>
  );
}

export default App;
