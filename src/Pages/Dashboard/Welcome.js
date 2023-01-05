import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Welcome = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="h-screen text-gray-700 flex flex-col justify-center items-center pb-16">
      <div className="flex justify-center items-center">
        <p className="text-3xl font-bold">Welcome To</p>
      </div>
      <div className="flex justify-center text-gray-500 items-center mt-4">
        <p className="text-xl font-medium">User Dashboard</p>
      </div>
    </div>
  );
};

export default Welcome;
