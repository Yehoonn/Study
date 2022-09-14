import './App.css';
import TodoTemplate from '../Components/TodoTemplate';
import TodoList from '../Components/TodoList';
import TodoInsert from '../Components/TodoInsert';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [newid, setId] = useState(1);

  const addList = (text) => {
    if (text.length <= 0) {
      alert('데이터를 입력해주세요');
      return;
    }

    if (data.findIndex((value) => value.text === text) === -1) {
      let newList = data.concat({
        id: newid,
        text: text,
      });

      setData(newList);
      setId(newid + 1);
      return;
    } else {
      alert(`'${text}'는 이미 있는 데이터입니다`);
    }
  };

  const removeItem = (id) => {
    let comfirm = window.confirm('데이터를 삭제하시겠습니까?');
    if (comfirm) {
      alert('데이터가 삭제되었습니다');
      let filterItem = data.filter((value) => {
        return value.id !== id;
      });
      setData(filterItem);
    }
  };

  return (
    <>
      <TodoTemplate>
        <TodoInsert addList={addList} />
        <TodoList data={data} removeItem={removeItem} />
      </TodoTemplate>
    </>
  );
}

export default App;
