import React from "react";
import ReactDOM from "react-dom";

const Toggle = () => {
  const [is_open, set_open] = React.useState(true);

  const toggle_button = () => {
    set_open(!is_open);
  };

  return (
    <>
      <button onClick={toggle_button}>inButton</button>
      {is_open && <div>aaa</div>}
    </>
  );
};

const App = () => {
  return (
    <>
      <div>
        <button>outBtton</button>
      </div>
      <Toggle />
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
