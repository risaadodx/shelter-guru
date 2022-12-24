import React from "react";

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={`hover:text-gray-100 bg-green-500 text-white ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
