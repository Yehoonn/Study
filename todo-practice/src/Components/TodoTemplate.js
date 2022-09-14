import styled from 'styled-components';

const TodoBox = styled('div')`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  user-select: none;
`;

const TodoHeader = styled('div')`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: cadetblue;
  border-radius: 10px 10px 0 0;
  color: white;
  font-size: 3rem;
`;

const TodoTemplate = ({ children }) => {
  return (
    <>
      <TodoBox>
        <TodoHeader>일정 관리</TodoHeader>
        {children}
      </TodoBox>
    </>
  );
};

export default TodoTemplate;
