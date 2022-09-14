import classNames from "classnames";
// import styles from "../CSSModule/CSSModule.js";

// classnames를 이용한 스타일 설정
// class를 조건부로 부여할 때 유용한 라이브러리이다

classNames("one", "two");
classNames("one", { two: true });
classNames("one", { two: false });
classNames("one", ["two", "three"]);

const myClass = "hello";

classNames("one", myClass, { myCondition: true });

// CSSModule과 classnames를 함께 사용할 수 있다
// classnames에 내장되어 있는 bind 함수를 사용하여 styles의 속성을 bind 해주었다
// bind로 묶어주면 styles.[클래스 속성 이름]으로 사용하지 않아도 됨
// ex) className={styles.header} -> className={style('header')}

// const style = classNames.bind(styles);

const ClassNames = () => {
  return (
    <>
      <div className={classNames("MyComponent")}></div>
    </>
  );
};

export default ClassNames;
