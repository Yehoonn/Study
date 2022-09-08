import { Component, createRef } from "react";

export default class ScrollBox extends Component {
  div = createRef();
  scrollMoveTop = () => {
    // ref를 사용하지 않고 식별 후 제어 ( id 기본 방식 )
    // const div = document.getElementById("scrollBox");
    // div.scrollTop -= div.scrollTop;
    // ref를 사용하여 식별 후 제어
    this.div.current.scrollTop -= this.div.current.scrollTop;
  };

  scrollMoveBottom = () => {
    // ref를 사용하지 않고 식별 후 제어 ( id 기본 방식 )
    // const div = document.getElementById("scrollBox");
    // div.scrollTop = div.scrollHeight - div.clientHeight;
    // ref를 사용하여 식별 후 제어
    const { scrollHeight, clientHeight } = this.div.current;
    this.div.current.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "1050px",
      background: "linear-gradient(white,black)",
    };
    return (
      <>
        <div style={style} id="scrollBox" ref={this.div}>
          <div style={innerStyle}></div>
        </div>

        {/* <button onClick={this.scrollMoveTop}>위로</button>
        <button onClick={this.scrollMoveBottom}>아래로</button> */}
      </>
    );
  }
}
