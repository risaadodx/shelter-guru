export const hostRequest = async (user) => {
  const response = await fetch(
    `https://shelter-guru-server-new.vercel.app/user/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("shelterguru-token")}`,
      },
      body: JSON.stringify(user),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export const getRole = async (email) => {
  const response = await fetch(
    `https://shelter-guru-server-new.vercel.app/user/${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("shelterguru-token")}`,
      },
    }
  );
  const user = await response.json();
  return user?.role;
};

export const getAllUsers = async () => {
  const response = await fetch(
    "https://shelter-guru-server-new.vercel.app/users",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("shelterguru-token")}`,
      },
    }
  );
  console.log("test");
  const users = await response.json();

  return users;
};

export const makeHost = async (user) => {
  delete user._id;
  const response = await fetch(
    `https://shelter-guru-server-new.vercel.app/user/${user?.email}`,
    {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("shelterguru-token")}`,
      },
      body: JSON.stringify({ ...user, role: "host" }),
    }
  );
  const users = await response.json();

  return users;
};
