import { useState } from "react";
import { useMemo } from "react";

// useMemo => 함수형 컴포넌트 내부에서 발생하는 연산을 최적화하는 hooks
// useMemo를 사용하기 전의 상태에선 input의 변화가 일어가 일어날시 리랜더링이 일어나기때문에
// div에 있는 props => getAverage(list)함수가 실행된다

const getAverage = (numbers) => {
  console.log("평균 값 계산중");
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const UseMemoPratice = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber("0");
  };

  // useMemo를 사용하여 함수를 지정, 타겟을 선택하면
  // 해당 타겟의 변화가 일어나야만 함수가 실행된다
  // 결과값 (return)을 memo에 할당하여 사용한다

  const memo = useMemo(() => getAverage(list).toFixed(2), [list]);
  return (
    <>
      <input value={number} onChange={onChange}></input>
      <button onClick={onInsert}>평균 계산</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>평균 값은 : {memo}</div>
    </>
  );
};

export default UseMemoPratice;
