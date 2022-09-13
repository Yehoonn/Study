import { useEffect, useReducer, useState } from "react";

// useState -> 함수형 컴포넌트에서 상태관리를 위해 사용되는 함수 [클래스의 setState와 비슷하다]
// useEffect -> 함수형 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하게 해주는 함수
// componentDidMount, componentDidUpdate가 합친 형태이다
// 어떻게 사용하는지에 따라 렌더링 이후에 작동할지, 이전에 작동할지 등 타이밍을 정할 수 있다

// const clickEvents = (value) => {
//   setNumber(number + value);
// };

// const inputChange = (e) => {
//   setInput({ ...input, [e.target.name]: e.target.value });
// };

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

  // useReducer => state와 비슷하게 상태관리를 위해 사용되는 hooks
  // 좀 더 세부적인 state 관리가 가능하며 사용자가 직접 state를 조종하는것이 아닌
  // 일종의 '명령'을 통해 state를 바꿔달라는 '요청'을 하게 해준다
  // Reducer를 사용하는데 필요한 것들
  // 1. 실질적인 처리를 위한 함수 -> 매개변수엔 state와 action이 들어간다
  // state <- 바꿀 대상의 현재 상태, action <- 바꾸기 위한 행동
  // 2. 상태관리를 위한 요소 => const [state,dispatch]
  // 3. useReducer(1에서 만든 함수,'state의 기본 상태')

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

  const up = () => {
    dispatch({ type: "INCREMENT" });
  };

  const down = () => {
    dispatch({ type: "DECREMENT" });
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

  return (
    <>
      {" "}
      <button
        // setState로 관리
        // onClick={() => {
        //   clickEvents(1);
        // }}
        onClick={up}
      >
        +1
      </button>
      <div>{state.value}</div>
      <button
        // setState로 관리
        // onClick={() => {
        //   clickEvents(-1);
        // }}
        onClick={down}
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
