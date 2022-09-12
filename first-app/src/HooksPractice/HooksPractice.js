import { useEffect, useReducer, useState } from "react";

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

  // return () => 이후의 algorithm은 상태가 업데이트 되기 전이나 언마운트 되기 전에 실행 됨
  // 언마운트 될때에만 실행시키고 싶다면 두번째 인자로 빈배열을 넘겨주면 된다

  useEffect(() => {
    return () => {
      console.log("cleanup");
      console.log(number);
    };
  });

  const Reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { value: state.value + 1 };
      case "DECREMENT":
        return { value: state.value - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(Reducer, { value: 0 });

  const InputReducer = (state, action) => {
    return {
      ...state,
      [action.name]: action.value,
    };
  };

  const [inputState, inputDispatch] = useReducer(InputReducer, {
    name: "",
    message: "",
  });

  const { name, message } = inputState;

  const reducerChange = (e) => {
    inputDispatch(e.target);
  };

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
        // setState로 관리
        // onClick={() => {
        //   clickEvents(1);
        // }}
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +1
      </button>
      <div>{state.value}</div>
      <button
        // setState로 관리
        // onClick={() => {
        //   clickEvents(-1);
        // }}
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -1
      </button>
      <input
        name="name"
        placeholder="이름"
        // useState로 관리
        // onChange={inputChange}
        onChange={reducerChange}
      ></input>
      <input
        name="message"
        placeholder="텍스트"
        // useState로 관리
        // onChange={inputChange}
        onChange={reducerChange}
      ></input>
      <h1>이름 : {name}</h1>
      <h1>내용 : {message}</h1>
    </>
  );
};

export default HooksPractice;
