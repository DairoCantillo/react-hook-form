import React from "react";

const Button = ({ text = "button", action, type = "text" }) => {
  return (
    <button onClick={action} type={type}>
      {text}
    </button>
  );
};

export default Button;
