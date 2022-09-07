import { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import "./MyComponent.css";

// 함수형 컴포넌트
// 함수형 컴포넌트에서 props를 정의하는 형식
// const MyComponent = ({ name, number, children }) => {
//   return (
//     <>
//       <div className="component">
//         안녕하세요 제 이름은 {name}입니다
//         <br />
//         children 값은 {children}입니다
//       </div>

//       <div className="component">좋아하는 숫자는 {number}입니다</div>
//     </>
//   );
// };

// MyComponent.defaultProps = {
//   name: "X",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.number.isRequired,
// };

// 클래스형 컴포넌트

export default class MyComponent extends Component {
  render() {
    // 클래스형 컴포넌트에서 props를 정의하는 방식
    const { name, number, children } = this.props;
    return (
      <>
        <div className="component">
          안녕하세요 제이름은 {name}입니다 <br />
          children 값은 {children}입니다
        </div>
        <div className="component">좋아하는 숫자는 {number}입니다</div>
      </>
    );
  }
}

// Props의 기본 값을 설정하는 메서드

MyComponent.defaultProps = {
  name: "기본",
};

// Props의 기본 타입을 설정하는 메서드

MyComponent.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired,
};
