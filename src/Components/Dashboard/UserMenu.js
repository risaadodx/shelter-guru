import {
  FingerPrintIcon,
  UserPlusIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
  return (
    <>
      <NavLink
        to="my-bookings"
        className={({ isActive }) =>
          `flex items-center justify-between px-4 py-2 mt-5  transition-colors duration-300 transform    hover:text-[#32C0C0] ${
            isActive ? "text-[#32C0C0]" : "text-gray-600"
          }`
        }
      >
        <div className="flex">
          <FingerPrintIcon className="w-5 h-5" />

          <span className="mx-4 font-bold">My Bookings</span>
        </div>
        <ChevronRightIcon className="w-5 h-5 " />
      </NavLink>

      <NavLink
        to="become-host"
        className={({ isActive }) =>
          `flex items-center justify-between px-4 py-2  mt-5  transition-colors duration-300 transform    hover:text-[#32C0C0] ${
            isActive ? " text-[#32C0C0]" : "text-gray-600"
          }`
        }
      >
        <div className="flex">
          <UserPlusIcon className="w-5 h-5" />

          <span className="mx-4 font-bold">Become A Host</span>
        </div>
        <ChevronRightIcon className="w-5 h-5 " />
      </NavLink>
    </>
  );
};

export default UserMenu;
