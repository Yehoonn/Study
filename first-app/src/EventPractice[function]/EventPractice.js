import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-size: 5rem;
  user-select: none;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 50px;
  text-align: center;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 100px;
`;

// 이벤트 핸들링을 함수형 컴포넌트로 제작
// 다른점 -> this가 없고 useState로 관리
// 이벤트에 매개변수를 전달해주는 과정에선 똑같은 오류가 남 -> 익명함수 안에서 함수를 실행시키는 것으로 해결

const EventPracticeFunction = () => {
  const defaultText = "이벤트 테스트";
  let [color, setColor] = useState("salmon");
  let [input, setinput] = useState({ user: "", message: "" });
  let [text, setText] = useState(defaultText);

  const onClick = () => {
    color === "salmon" ? setColor("black") : setColor("salmon");
  };

  const textChange = (e) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setText(e.target.value);
  };

  const buttonClick = (text) => {
    alert(`${user} : ${message}`);
    setinput({ user: "", message: "" });
    setText(defaultText);
    console.log(text);
  };

  const enterKeyPress = (e) => {
    if (e.key === "Enter") {
      buttonClick("으악");
    }
  };

  const { user, message } = input;

  return (
    <>
      <StyledDiv style={{ color }} onClick={onClick}>
        {text}
      </StyledDiv>
      <StyledInput
        type="text"
        name="user"
        placeholder="사용자명"
        value={user}
        onChange={textChange}
        onKeyPress={enterKeyPress}
      ></StyledInput>
      <StyledInput
        type="text"
        name="message"
        placeholder="입력해주세요"
        value={message}
        onChange={textChange}
        onKeyPress={enterKeyPress}
      ></StyledInput>
      <StyledButton onClick={() => buttonClick("으악")}>클릭</StyledButton>
    </>
  );
};

export default EventPracticeFunction;
