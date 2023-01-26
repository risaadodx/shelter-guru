export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  // save user in db & get token
  fetch(`https://shelter-guru-server-new.vercel.app/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //save token in local storage
      localStorage.setItem("shelterguru-token", data.token);
    });
};

export const saveBooking = (bookingData) => {
  // Post method fetch
  return fetch("https://shelter-guru-server-new.vercel.app/bookings", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("shelterguru-token")}`,
    },
    body: JSON.stringify(bookingData),
  });
};
