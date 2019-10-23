import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Toggle } from "./Toggle";
import { Toggle2 } from "./Toggle2";
import { Toggle3 } from "./Toggle3";
import { Toggle4 } from "./Toggle4";
const List = styled.div`
  background-color: #fff;
`;

const DesignButton = styled.button`
  background-color: blue;
  color: #fff;
`;

const ToggleButton = <DesignButton>outSideButton</DesignButton>;

interface Props {
  click: () => {};
}

class ToggleButton2 extends React.Component<Props> {
  render() {
    const { click } = this.props;
    return (
      <>
        <button
          type="button"
          className="c-button c-button--sm c-button--primary"
          onClick={click}
        >
          &nbsp; "リクエストを新規作成"&nbsp;
        </button>
      </>
    );
  }
}

const App = () => {
  return (
    <>
      <p>sample1</p>
      <p>（理想はoutSideButtonで切替できる）</p>
      <div>
        <button>outSideBtton</button>
      </div>
      <Toggle>
        <List>
          <ul>
            <li>aaa</li>
            <li>iii</li>
          </ul>
        </List>
      </Toggle>
      <p>sample2</p>
      <Toggle2 toggle_element={ToggleButton}>
        <List>
          <ul>
            <li>aaa</li>
            <li>iii</li>
          </ul>
        </List>
      </Toggle2>
      <p>sample3</p>
      <Toggle3 toggle_element={func => <ToggleButton2 click={func} />}>
        <List>
          <ul>
            <li>aaa</li>
            <li>iii</li>
          </ul>
        </List>
      </Toggle3>
      <p>sample4</p>
      <Toggle4 toggle_element={func => <ToggleButton2 click={func} />}>
        <List>
          <ul>
            <li>aaa</li>
            <li>iii</li>
          </ul>
        </List>
      </Toggle4>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
