import { useCallback, useState, useMemo } from "react";

// useCallback => 렌더링 성능을 최적화해야 하는 상황에서 사용하는 hooks
// 리렌더링 될 때마다 새로 만들어진 함수를 사용해야 하기에
// 컴포넌트의 렌더링이 자주 발생하거나 컴포넌트의 개수가 많아지면
// 함수를 새로 생성하지 않고 만들어논 함수를 쓸 수 있게 해주는 useCallback을 사용할 수 있다

const getAverage = (numbers) => {
  console.log("평균 값 계산중");
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const UseCallback = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const onInsert = useCallback(() => {
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber("");
  }, [number, list]);

  const memo = useMemo(() => getAverage(list).toFixed(2), [list]);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  return (
    <>
      <input type="number" value={number} onChange={onChange}></input>
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

export default UseCallback;
