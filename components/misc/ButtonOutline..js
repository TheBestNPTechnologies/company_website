import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-green-200 text-green-200  bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-200  hover:text-white-500 transition-all hover:shadow-green">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
