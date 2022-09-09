import { Component } from "react";

export default class ErrorSearch extends Component {
  // 에러의 기본상태 (false)
  state = {
    error: false,
  };

  // 에러가 발생하면 error의 상태를 true로 바꾸고 콘솔에 에러의 정보를 출력한다
  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log({ error, info });
  }

  // 그 이후엔 에러의 상태 (true,false)에 따라 어떤 HTML 요소를 보여줄 지 분기처리를 한다
  render() {
    if (this.state.error) {
      return <div>에러가 발생했습니다</div>;
    }
    // 에러가 발생하지 않았다면 props.children을 반환시켜준다 (ErrorSearch 사이에 존재하는 무언가)
    else {
      return this.props.children;
    }
  }
}
