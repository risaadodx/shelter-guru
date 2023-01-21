import React, { useContext, useEffect, useState } from "react";
import { getRole } from "../../api/user";
import { AuthContext } from "../../contexts/AuthProvider";

const Welcome = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getRole(user?.email).then((data) => {
      setRole(data);
      setLoading(false);
    });
  }, [user]);
  console.log(role);
  return (
    <div className="h-screen text-gray-700 flex flex-col justify-center items-center pb-16">
      <div className="flex justify-center items-center">
        <p className="text-4xl font-bold">Welceome to</p>
      </div>
      <div className="flex justify-center text-gray-500 items-center mt-4">
        {!loading && role ? (
          <>
            {role === "admin" ? (
              <p className="text-2xl font-medium">Admin Dashboard</p>
            ) : (
              <p className="text-2xl font-medium">Host Dashboard</p>
            )}
          </>
        ) : (
          <p className="text-2xl font-medium">User Dashboard</p>
        )}
      </div>
    </div>
  );
};

export default Welcome;
