import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
`;
const DropMenu = styled.div`
  z-index: 10000;
  display: block;
  position: absolute;
`;

interface Props2 {
  toggle_element: React.ReactNode;
  children: React.ReactNode;
}

export const Toggle2: React.FunctionComponent<Props2> = ({
  toggle_element,
  children
}) => {
  const [is_open, set_open] = React.useState(false);

  const toggle_button = () => {
    set_open(!is_open);
  };

  return (
    <>
      <div onClick={toggle_button}>{toggle_element}</div>
      {is_open && (
        <>
          <Overlay onClick={toggle_button} />
          <DropMenu className="open">{children}</DropMenu>
        </>
      )}
    </>
  );
};
