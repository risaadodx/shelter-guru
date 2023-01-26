import React, { useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import { CalendarIcon } from "@heroicons/react/20/solid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [location, setLocation] = useState("Dhaka");
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(
    new Date(arrivalDate.getTime() + 24 * 60 * 60 * 1000)
  );

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = {
      location: location,
      from: arrivalDate,
      to: departureDate,
    };
    console.log(query);
    navigate("/search-result", { state: query });
  };

  return (
    <div className="w-full  mx-auto">
      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col md:flex-row items-center bg-white lg:border-2 rounded-lg md:rounded-full lg:px-5 py-2"
      >
        <div className="lg:w-1/2 flex flex-col md:items-center md:flex-row">
          <label
            htmlFor="location"
            className="block text-md font-bold text-gray-800 md:mr-3"
          >
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            name="location"
            required
            placeholder="Add city, Landmark or address"
            className="block w-full mt-1 p-1 text-gray-700 bg-white   focus:border-green-400 focus:ring-[#32C0C0] focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className=" flex flex-col md:flex-row justify-between md:w-2/3 md:mr-5">
          <div className=" flex justify-between items-center lg:w-1/3 md:mr-5">
            <div className="md:flex">
              <p className="block text-sm text-gray-500 mr-2">Arrival</p>
              <DatePicker
                selected={arrivalDate}
                onChange={(date) => setArrivalDate(date)}
                className="w-2/3"
              />
            </div>

            <CalendarIcon className="h5 w-5" />
          </div>
          <div className=" flex justify-between items-center lg:w-1/3">
            <div className="md:flex">
              <p className="block text-sm text-gray-500 md:mr-2">Departure</p>
              <DatePicker
                selected={departureDate}
                onChange={(date) => setDepartureDate(date)}
                className="w-2/3"
              />
            </div>

            <CalendarIcon className="h5 w-5" />
          </div>
        </div>

        <div className="mt-6 md:mt-0 md:ml-3">
          <PrimaryButton
            type="submit"
            classes="w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-full"
          >
            Search
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
