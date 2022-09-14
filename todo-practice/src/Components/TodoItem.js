import { useRef } from 'react';
import { FaMinusCircle } from 'react-icons/fa';
import styled from 'styled-components';

const ListBox = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  gap: 20px;
  border-bottom: 1px solid black;
`;

const CheckButton = styled.input`
  margin-left: 10px;
  width: 30px;
  height: 100%;
  border: 3px solid black;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;

const ItemDiv = styled.div`
  width: 75%;
  font-size: 1.3rem;
  font-weight: bold;
`;

const DeleteButton = styled.div`
  width: 50px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
`;

const FaMinusCircl = styled(FaMinusCircle)`
  font-size: 1.5rem;
  &:hover {
    transform: rotate(360deg);
    font-size: 2.5rem;
  }
`;

const TodoItem = ({ text, removeItem }) => {
  const checkbox = useRef();
  const checkDiv = useRef();
  let isChecked = false;

  const check = () => {
    isChecked = checkbox.current.checked;
    if (isChecked) {
      checkDiv.current.style.color = 'gray';
      checkDiv.current.style.textDecorationLine = 'line-through';
    } else {
      checkDiv.current.style.color = 'black';
      checkDiv.current.style.textDecorationLine = 'none';
    }
  };

  return (
    <>
      <ListBox>
        <CheckButton
          type="checkbox"
          ref={checkbox}
          onClick={check}
        ></CheckButton>
        <ItemDiv ref={checkDiv}>{text}</ItemDiv>
        <DeleteButton onClick={removeItem}>
          <FaMinusCircl />
        </DeleteButton>
      </ListBox>
    </>
  );
};

export default TodoItem;
