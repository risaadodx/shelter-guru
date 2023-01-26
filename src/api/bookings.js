// Get all bookings for a user by email
export const getBookings = async (email) => {
  const response = await fetch(
    `https://shelter-guru-server-new.vercel.app/bookings?email=${email}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("shelterguru-token")}`,
      },
    }
  );
  const bookings = await response.json();
  return bookings;
};

// Get All bookings for admin
export const getAllBookings = async () => {
  const response = await fetch(
    "https://shelter-guru-server-new.vercel.app/bookings",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("shelterguru-token")}`,
      },
    }
  );
  const bookings = await response.json();
  return bookings;
};

// Delete a booking
export const deleteBooking = async (id) => {
  const response = await fetch(
    `https://shelter-guru-server-new.vercel.app/booking/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("shelterguru-token")}`,
      },
    }
  );

  const data = await response.json();
  return data;
};

// Create Payment Intent

export const getPaymentIntent = async (price) => {
  const response = await fetch(
    "https://shelter-guru-server-new.vercel.app/create-payment-intent",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("shelterguru-token")}`,
      },
      body: JSON.stringify({ price }),
    }
  );

  const data = await response.json();
  return data;
};
