import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Toggle } from "./Toggle";
import { Toggle2 } from "./Toggle2";

const List = styled.div`
  background-color: #fff;
`;

const DesignButton = styled.button`
  background-color: blue;
  color: #fff;
`;

const ToggleButton = <DesignButton>outSideBtton</DesignButton>;

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
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
