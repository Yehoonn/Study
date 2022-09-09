import { Component } from "react";

export default class LifeCycle extends Component {
  state = {
    number: 0,
    color: null,
  };

  // 컴포넌트의 라이프 사이클 (생명 주기)
  // 마운트 순서  constructor -> getDerivedStatedFromProps -> render -> 마운트
  // 업데이트 순서 getDerivedStatedFromProps -> shouldComponentUpdate ->
  // getSnapshotBeforeUpdate -> componentDidUpdate

  constructor(props) {
    super(props);
    console.log("생성자");
  }

  // props에서 받아온 값을 state에 동기화 시킴 (업데이트와 마운트 할때 작동)

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 컴포넌트가 마운트 된 뒤에 호출되는 함수

  componentDidMount() {
    console.log("컴포넌트 마운트");
  }

  //   컴포넌트를 업데이트 시킬지 말지 결정하는 함수

  shouldComponentUpdate(nextProps, nextState) {
    console.log("리렌더링 여부", nextProps, nextState);

    return nextState.number % 10 !== 4;
  }

  //   컴포넌트가 언마운트 되기 전에 실행되는 함수

  componentWillUnmount() {
    console.log("컴포넌트 언마운트");
  }

  //   shouldComponentUpdate가 실행 된 이후 업데이트가 결정된다면
  //   업데이트가 이루어지기 전에 실행되는 함수

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("BeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  // 실질적인 업데이트가 진행 된 이후에 실행되는 함수

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("컴포넌트 업데이트", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 되기 전 색상 :", snapshot);
    }
  }

  clickEvent = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    const style = { color: this.state.color };

    return (
      <>
        {/* 에러 발생을 위한 코드 */}
        {/* <div>{this.props.missing.value}</div> */}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color:{this.state.color}</p>
        <button onClick={this.clickEvent}>더하기</button>
      </>
    );
  }
}
