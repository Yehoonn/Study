import { useCallback, useState } from 'react';
import styled from 'styled-components';

const InsertForm = styled('div')`
  width: 100%;
  margin-bottom: 3.5px;
  height: 10%;
  display: flex;
`;

const StyledInput = styled('input')`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  font-weight: bold;
  font-size: 1.3rem;
  border: 0px solid white;
  color: white;
`;

const StyledButton = styled('button')`
  width: 15%;
  height: 104%;
  background-color: rgba(0, 0, 0, 0.4);
  border: 0px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: salmon;
    & div {
      color: white;
      transform: rotate(360deg);
    }
  }
`;

const TodoInsert = ({ addList }) => {
  const [input, setInput] = useState({ text: '' });

  const inputChange = useCallback(
    (e) => {
      setInput({ ...input, [e.target.name]: e.target.value });
    },
    [input],
  );

  const buttonClick = () => {
    addList(input.text);
    setInput({ ...input, text: '' });
  };

  const enterKey = (e) => {
    if (e.key === 'Enter') {
      buttonClick();
    }
  };

  return (
    <InsertForm>
      <StyledInput
        name="text"
        placeholder="일정을 입력해주세요"
        onChange={inputChange}
        value={input.text || ''}
        onKeyPress={enterKey}
      ></StyledInput>
      <StyledButton onClick={buttonClick}>
        <div>+</div>
      </StyledButton>
    </InsertForm>
  );
};

export default TodoInsert;
