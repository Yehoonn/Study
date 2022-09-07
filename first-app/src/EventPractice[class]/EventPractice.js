import { Component } from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 4rem;
  user-select: none;
`;

const StyledInput = styled.input`
  width: 400px;
  height: 100px;
  text-align: center;
  font-size: 20px;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 100px;
  display: block;
`;

export default class EventPracticeClass extends Component {
  state = {
    color: "blue",
    text: "이벤트 테스트",
    username: "",
    message: "",
  };

  // 클래스형 컴포넌트에서 메서드를 만드는 기본 방법
  // this는 함수의 호출부를 기준으로 작동하기 때문에
  // .bind method를 활용하여 this가 가르키는 부분을 바인딩한다
  // constructor(props){
  //   super(props);
  //   this.method = this.method.bind(this);
  // }

  // 생성자 메서드 -> constructor를 사용하지 않고 메서드를 만드는 방법
  // 바벨의 transform-class-properties문법을 사용한다 [arrow function]
  // 메서드 이기 때문에 let, const는 쓰지 않아도 된다
  // method = () => {alrogithm}

  // 텍스트를 클릭하면 color값이 바뀌는 메서드 (삼항연산자 사용)
  // jsx 이벤트 핸들러에서 매개변수를 작성, 평소처럼 인수를 넘기기 위해 함수를 호출하면 에러가 남
  colorChange = (test) => {
    console.log(test);
    this.state.color === "blue"
      ? this.setState({
          color: "red",
        })
      : this.setState({
          color: "blue",
        });
  };

  // input에 변화가 일어나면 일어나는 이벤트, e.target.name : e.target.value를 사용했기 때문에
  // 만약 name과 value의 이름이 똑같다면 어떤 input 태그에서든 작동한다
  // setState, 이후의 함수는 setState의 실행이후 실행되는 콜백함수이다
  // 콜백함수가 실행되면 input에 작성한 value를 데이터로 text가 변한다
  textChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      this.setState({ text: e.target.value })
    );
  };

  // KeyPress 이벤트를 위한 함수, 조건문에 따라 Enter키를 누르면
  // textReset()함수를 실행시킨다
  KeyPress = (e) => {
    if (e.key === "Enter") {
      this.textReset();
    }
  };

  // textReset 함수 -> 1번 input과 2번 input의 데이터를 보여준다
  textReset = () => {
    // alert(this.state.text);
    // this.setState({ text: "" });
    alert(`${this.state.username} : ${this.state.message}`);
  };

  render() {
    const { color, text, username, message } = this.state;
    return (
      <>
        <StyledH1
          style={{ color }}
          // 매개변수를 받기 위해 평소처럼 onClick={this.colorChange('으악')}이 아닌 익명 함수 사용
          // 익명 함수를 사용하지 않고 인수로 '으악'을 전달하면 오류가 남
          // https://velog.io/@dom_hxrdy/reactJSX에서-onClick으로-매개변수-넣어주기 << 참고
          onClick={() => {
            this.colorChange("으악");
          }}
        >
          {text}
        </StyledH1>
        <StyledInput
          type="text"
          name="username"
          placeholder="사용자명"
          value={username}
          onChange={this.textChange}
          onKeyPress={this.KeyPress}
        />
        <StyledInput
          type="text"
          name="message"
          placeholder="입력해주세요"
          value={message}
          onChange={this.textChange}
          onKeyPress={this.KeyPress}
        />
        <StyledButton onClick={this.textReset}>확인 버튼</StyledButton>
      </>
    );
  }
}
