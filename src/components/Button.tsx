import React from "react";

interface Props {
  children: string;
  color?: string;
  _onClick: () => void;
}

const Button = ({ children, _onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={_onClick}>
      {children}
    </button>
  );
};

export default Button;
