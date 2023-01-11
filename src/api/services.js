// Add a home
export const addHome = async (homeData) => {
  const response = await fetch("http://localhost:5000/homes", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(homeData),
  });

  const data = await response.json();
  return data;
};

//get all homes
export const getAllHome = async () => {
  const response = await fetch("http://localhost:5000/homes");
  const data = await response.json();
  return data;
};

//get filtered homes for hosts
export const getHomes = async (email) => {
  const response = await fetch(`http://localhost:5000/homes/${email}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

// update a home
export const updateHome = async (homeData) => {
  const response = await fetch("http://localhost:5000/homes", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(homeData),
  });

  const data = await response.json();
  return data;
};

// Delete a home
export const deleteHome = async (id) => {
  const response = await fetch(`http://localhost:5000/home/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
