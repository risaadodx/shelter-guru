import {
  ChevronRightIcon,
  FingerPrintIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <NavLink
        to="all-users"
        className={({ isActive }) =>
          `flex items-center justify-between px-4 py-2 mt-5  transition-colors duration-300 transform hover:text-[#32C0C0] ${
            isActive ? "  text-[#32C0C0]" : "text-gray-600"
          }`
        }
      >
        <div className="flex">
          <FingerPrintIcon className="w-5 h-5" />

          <span className="mx-4 font-bold">All Users</span>
        </div>
        <ChevronRightIcon className="w-5 h-5 " />
      </NavLink>

      <NavLink
        to="all-bookings"
        className={({ isActive }) =>
          `flex items-center justify-between px-4 py-2 mt-5  transition-colors duration-300 transform    hover:text-[#32C0C0] ${
            isActive ? " text-[#32C0C0]" : "text-gray-600"
          }`
        }
      >
        <div className="flex">
          <FingerPrintIcon className="w-5 h-5" />

          <span className="mx-4 font-bold">All Bookings</span>
        </div>
        <ChevronRightIcon className="w-5 h-5 " />
      </NavLink>
    </>
  );
};

export default AdminMenu;
