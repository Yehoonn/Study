import { Component } from "react";
import "./Counter.css";

// 클래스형 컴포넌트 생성
class Counter extends Component {
  // 클래스형 컴포넌트에서 state를 설정하는 방식
  // 생성자 함수 방식 -> constructor 사용 -> super가 꼭 들어가야 한다
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  // 클래스형 컴포넌트에서 state를 설정하는 방식 2

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    // 요소로 사용할 수 있게 state의 값을 가져옴 [구조분해 할당];
    // 기본식은 const number = this.state.number;
    const { number, fixedNumber } = this.state;
    const { text } = this.props;
    return (
      <>
        <div>
          <h1 className="number">{number}</h1>
          <h2 className="fixed">
            {text} : {fixedNumber}
          </h2>
          <button
            className="button"
            onClick={() => {
              this.setState(
                (prevState) => {
                  return {
                    number: prevState.number + 1,
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
              this.setState((prevState) => ({
                number: prevState.number + 1,
              }));
            }}
          >
            +1
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
