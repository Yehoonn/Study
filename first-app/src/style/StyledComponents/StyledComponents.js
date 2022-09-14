import styled, { css } from "styled-components";

// styled-components 라이브러리를 사용한 스타일 설정
// CSS-in-js 형식으로 css파일 없이 스타일을 지정할 수 있다

const sizes = {
  desktop: 1024,
  tablet: 768,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) =>
    css`@media (max-width : ${sizes[label] / 16}em){${css(...args)}`;
  return acc;
}, {});

// 기본 형식, const StyledElements = styled.[tagname]`style`로 지정이 가능하다
// props로 유동적인 스타일 부여 가능
const StyledBox = styled.div`
  background-color: ${(props) => props.bg || "blue"};
  padding: 1em;
  display: flex;
  width: 1024px;
  margin: 0;

  /* ${media.desktop`width:768px;`}
  ${media.tablet`width:100%;`} */
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledButton = styled.button`
  background-color: white;
  color: black;
  border-radius: 4px;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* stlyed안에서 &는 자기 자신을 뜻한다 */
  /* $를 사용하여 props도 만들어낼수 있다 */
  /* props안에서의 스타일링은 styled-components 라이브러리의 css를 import하여 선언해주어야한다 */
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background-color: ${(props) => props.good};
      border: 2px solid white;
      color: white;
      margin-left: 1rem;
      &:hover {
        background-color: salmon;
        color: white;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

// tagName을 유동적으로 변경할수도 있다, 분기처리도 가능
// ex) styled(isClicked ? 'div' : 'input')
// 또한 컴포넌트 자체를 인수로 넘겨주거나
// ex) styled(Component)
// 다른곳에서 만든 스타일 컴포넌트의 속성을 상속받을 수 있다
// ex) styled(StyledButton)

// const Test = styled("div")`
//   width: 100px;
//   height: 50px;
//   background-color: salmon;
// `;

const StyledComponents = () => {
  // const tagged = (...args) => {
  //   console.log(args);
  // };

  // tagged`hello${{ foo: "bar" }}${() => "world"}!`;

  return (
    <>
      <StyledBox bg="black">
        <StyledButton>안녕하세요</StyledButton>
        <StyledButton inverted={true} good={"black"}>
          테두리만
        </StyledButton>
      </StyledBox>
      {/* <Test></Test> */}
    </>
  );
};

export default StyledComponents;
