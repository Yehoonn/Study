import { useRef } from "react";
import styled from "styled-components";

// useRef <- 클래스형의 React.createRef와 같다
// DOM요소를 직접 제어할 수 있다

const ButtonStyled = styled.button`
  background-color: ${(props) => props.bg};
`;

let isClicked = false;

const click = () => {
  isClicked = !isClicked;
};

const UseRef = () => {
  const input = useRef();

  const clickEvents = () => {
    click();
    input.current.focus();

    isClicked === true
      ? (input.current.style.backgroundColor = "salmon")
      : (input.current.style.backgroundColor = "cadetblue");
  };

  return (
    <>
      <input ref={input} />
      <ButtonStyled onClick={clickEvents} bg={"lightgreen"}>
        클릭
      </ButtonStyled>
    </>
  );
};

export default UseRef;
