import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin mt-2 mr-3 border-green-400"></div>

      <p className="text-4xl font-thin">Loading....</p>
    </div>
  );
};

export default Spinner;
