// Get all bookings for a user by email
export const getBookings = async (email) => {
  const response = await fetch(
    `http://localhost:5000/bookings?email=${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
      },
    }
  );
  const bookings = await response.json();
  return bookings;
};

// Get All bookings for admin
export const getAllBookings = async () => {
  const response = await fetch("http://localhost:5000/bookings", {
    method: "GET",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });
  const bookings = await response.json();
  return bookings;
};

// Delete a booking
export const deleteBooking = async (id) => {
  const response = await fetch(`http://localhost:5000/booking/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("aircnc-token")}`,
    },
  });

  const data = await response.json();
  return data;
};
