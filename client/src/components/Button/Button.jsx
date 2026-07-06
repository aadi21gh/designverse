import React from "react";

const Button = ({
  text,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 transition duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;