import { useState } from "react";
import styled from "styled-components";

const StyledList = styled.div`
  list-style-type: none;
  justify-content: center;
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Loop = () => {
  // 요소들이 있는 배열[객체]을 useState로 관리
  const [array, setArray] = useState([{ id: 1, text: "강예훈" }]);
  // id[key 값]을 위한 useState
  const [nextId, setNextId] = useState(2);
  // inputText의 변화를 감지하기 위한 useState
  const [Input, setInput] = useState({
    dataInput: "",
  });

  // array의 요소만큼 li태그를 리턴해준다 -> newArray라는 변수에 저장
  let newArray = array.map((elm) => (
    <li
      key={elm.id}
      // li 요소를 더블클릭하면 onRemove함수가 실행된다 (인수는 elm.id)
      // 여기서 elm은 array의 값을 뜻함 -> 배열의 값은 객체이기에 elm.id를 넘겨준다
      onDoubleClick={() => {
        onRemove(elm.id);
      }}
    >
      {elm.text}
    </li>
  ));

  // onRemove함수 -> 더블클릭으로 인해 실행된 요소를 filter로 제어한다
  // -> 새로운 배열을 setArray로 할당
  const onRemove = (id) => {
    const nextNames = array.filter((value) => value.id !== id);
    setArray(nextNames);
  };

  const textChange = (e) => {
    setInput({ ...Input, [e.target.name]: e.target.value });
  };

  // dataAdd함수 -> array에 메서드인 concat을 통해 새로운 객체(배열)을 합쳐준다
  // 합친 이후엔 nextId의 값을 1 올리고
  // next 변수를 setArray로 업데이트 시켜준다
  // 이후엔 input 초기화
  const dataAdd = (e) => {
    // Input에 입력값이 없다면 alert를 띄우고 return 한다
    if (Input.dataInput.length <= 0) {
      alert("데이터를 입력해주세요");
      return;
    }

    // 중복된 데이터를 방지하는 조건문 (findIndex를 사용하여 기존의 데이터와 Input의 데이터를 검증)
    // 값을 찾지못하면 -1을 반환하는 특성을 이용했다
    if (
      array.findIndex((value) => {
        return value.text === Input.dataInput;
      }) === -1
    ) {
      let next = array.concat({ id: nextId, text: Input.dataInput });
      setNextId(nextId + 1);
      setArray(next);
      setInput({ dataInput: "" });
    } else {
      alert("중복된 데이터는 입력하실 수 없습니다");
    }
  };

  // 엔터키를 누르면 dataAdd 함수 실행
  const enterKeyPress = (e) => {
    if (e.key === "Enter") {
      dataAdd();
    }
  };

  return (
    <>
      <input
        type="text"
        name="dataInput"
        value={Input.dataInput}
        onChange={textChange}
        onKeyPress={enterKeyPress}
      ></input>
      <button onClick={dataAdd}>데이터 추가</button>

      <StyledList>{newArray}</StyledList>
    </>
  );
};

export default Loop;
