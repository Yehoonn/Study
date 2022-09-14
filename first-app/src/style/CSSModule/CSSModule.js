import styles from "./CSSModule.module.css";

// CSSModule을 사용한 스타일 작성
// 클래스명뒤에 임의의 값을 부여하여 중복을 방지해준다

const CSSModule = () => {
  return (
    <>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
    </>
  );
};

export default CSSModule;
