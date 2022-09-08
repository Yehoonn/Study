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
    number2: 0,
  };

  render() {
    // 요소로 사용할 수 있게 state의 값을 가져옴 [구조분해 할당];
    // 기본식은 const number = this.state.number;
    const { number, fixedNumber, number2 } = this.state;
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
              // 해결법 -> 콜백함수로 prevState의 값을 + 1해주면 된다
              this.setState((prevState) => ({
                number: prevState.number + 1,
              }));

              this.setState((prevState) => ({
                number: prevState.number + 1,
              }));
            }}
          >
            +1
          </button>
          <h1 className="number2">{number2}</h1>
          <button
            className="button"
            onClick={() => {
              // 함수가 전부 실행된 후에 렌더링이 이루어지기 때문에 실질적으로 0 + 1, 0 + 1이 두번 쓰여진것이다
              this.setState({
                number2: number2 + 1,
              });
              this.setState({
                number2: number2 + 1,
              });
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
