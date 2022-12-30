import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Contacts = lazy(() => import("../components/Contects"));

const Home = () => {
  return (
    <div className="container max-w-4xl mx-auto ">
      <div className="flex justify-between">
        <Link
          to="add-contact"
          className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold"
        >
          Add contact
        </Link>
      </div>
      <Suspense fallback={<div className="text-white">Loading......</div>}>
        <Contacts />
      </Suspense>
    </div>
  );
};

export default Home;
