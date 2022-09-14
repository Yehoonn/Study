import styled from 'styled-components';
import TodoItem from './TodoItem';

const ItemBox = styled('div')`
  width: 100%;
  height: 69%;
  overflow: auto;
`;

const TodoList = ({ data, removeItem }) => {
  let list = data.map((value) => (
    <TodoItem
      key={value.id}
      text={value.text}
      removeItem={() => removeItem(value.id)}
    ></TodoItem>
  ));

  return (
    <>
      <ItemBox>{list}</ItemBox>
    </>
  );
};

export default TodoList;
