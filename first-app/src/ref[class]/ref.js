import React, { Component } from "react";
import "./ref.css";

export default class RefClass extends Component {
  // 클래스형 컴포넌트에서 createRef를 이용해 ref를 설정하는 방법
  // 이름은 변수를 설정하는 것처럼 자유롭다
  yehoon = React.createRef();

  state = {
    password: "",
    clicked: false,
    vaildated: false,
    backgroundColor: "",
  };

  textChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        this.buttonClick();
      }
    );
  };

  buttonClick = () => {
    // 버튼을 클릭하면 this.yehoon이 ref로 설정된 요소에 focus()라는 함수가 적용된다
    // 요소 내의 ref에서 콜백함수를 사용하여 ref를 설정해주면 current를 붙이지 않지만
    // createRef를 사용하여 설정한 ref는 this[name] 뒤에 .current를 붙여야 한다
    this.yehoon.current.focus();
    this.setState(
      {
        clicked: true,
        vaildated: this.state.password === "0000",
      },

      () => {
        // input의 값에 따라 스타일을 바꿔주는 함수
        // css 설정을 부여하는 방법에 따라 두가지로 구현해보았다
        // 첫째 -> state의 key를 css 설정 값인 backgroundColor로 직접 선언 후 적용
        // 둘째 -> state의 key를 css 설정과 무관하게 color만 선언 후 적용
        // 차이점 -> 첫째의 경우 style ={{backgroundColor}}로 적용이 되지만
        // 둘째의 경우엔 style = {{backgroundColor : `${color}`}}로 작성해야한다
        this.state.vaildated === true
          ? this.setState({ backgroundColor: "lightgreen" })
          : this.setState({ backgroundColor: "salmon" });
        this.state.vaildated === true
          ? this.setState({ color: "lightgreen" })
          : this.setState({ color: "salmon" });
      }
    );
  };

  render() {
    const { backgroundColor, password } = this.state;
    return (
      <>
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.textChange}
          ref={this.yehoon}
          style={{ backgroundColor }}
          // ref를 설정하는 기본 방식 -> this.input은 input 요소의 DOM을 가리킨다
          // this.input에서 this[name]은 원하는 것으로 부여가 가능하다
          // ref={(ref) => {
          //   this.yehoon = ref;
          // }}

          // 클래스 네임에서 삼항 연산자를 사용하여 class를 바꾸는 방법도 있다
          // className={
          //   this.state.clicked
          //     ? this.state.vaildated
          //       ? "success"
          //       : "fail"
          //     : ""
          // }
          // style={{ backgroundColor: `${color}` }}
        ></input>
        <button onClick={this.buttonClick}>클릭</button>
      </>
    );
  }
}
