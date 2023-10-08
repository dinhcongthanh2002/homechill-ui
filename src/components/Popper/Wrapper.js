import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="w-full bg-[#0d253f] shadow-2xl lg:rounded-lg min-h-[100px] max-h-[70vh] pt-2">
      {children}
    </div>
  );
};

export default Wrapper;
