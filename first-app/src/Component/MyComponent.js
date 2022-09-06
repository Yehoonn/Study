// import { Component } from "react";
import { Fragment } from "react";
import "./MyComponent.css";

const MyComponent = ({ name, name2 }) => {
  return (
    <>
      <div className="component">안녕하세요 제 이름은 {name}입니다</div>
      <div className="component">안녕하세요 제 이름은 {name2}입니다</div>
    </>
  );
};

MyComponent.defaultProps = {
  name: "X",
};

export default MyComponent;

// export default class MyComponent extends Component {
//   render() {

//   }
// }
