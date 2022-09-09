import { useEffect, useInsertionEffect, useState } from "react";

// useState -> 함수형 컴포넌트에서 상태관리를 위해 사용되는 함수 [클래스의 setState와 비슷하다]
// useEffect -> 함수형 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하게 해주는 함수
// componentDidMount, componentDidUpdate가 합친 형태이다
// 어떻게 사용하는지에 따라 렌더링 이후에 작동할지, 이전에 작동할지 등 타이밍을 정할 수 있다

const HooksPractice = () => {
  const [number, setNumber] = useState(0);
  const [input, setInput] = useState({
    name: "",
    message: "",
  });

  // 컴포넌트가 마운트되거나 업데이트되면 실행됨
  useEffect(() => {
    console.log("상태가 업데이트되었습니다");
    console.log({ number, input });
  });

  // 컴포넌트가 마운트 될때만 실행됨

  useEffect(() => {
    console.log("마운트 완료");
  }, []);

  // 특정 값이 변경될 때만 실행됨

  useEffect(() => {
    console.log("number change : ", number);
  }, [number]);

  const clickEvents = (value) => {
    setNumber(number + value);
  };

  const inputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      {" "}
      <button
        onClick={() => {
          clickEvents(1);
        }}
      >
        +1
      </button>
      <div>{number}</div>
      <button
        onClick={() => {
          clickEvents(-1);
        }}
      >
        -1
      </button>
      <input name="name" placeholder="이름" onChange={inputChange}></input>
      <input name="message" placeholder="텍스트" onChange={inputChange}></input>
      <h1>이름 : {input.name}</h1>
      <h1>내용 : {input.message}</h1>
    </>
  );
};

export default HooksPractice;
