import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" px-2 sm:px-20 py-4 ">
      <Link to="/" className="text-white uppercase text-2xl font-bold">
        CONTACT LIST
      </Link>
    </div>
  );
};

export default Header;
