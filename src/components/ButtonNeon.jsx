import React from "react";
import "../MyButton.css";
const ButtonNeon = ({ onClick,children }) => {
  return (
    <div onClick={onClick} className="myButton rounded border border-gray-600 hover:border-none m-4">
      {children}
    </div>
  );
};

export default ButtonNeon;
