import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";

const Contacts = () => {
  const contacts = useSelector((store) => store);
  return (
    <div className="w-full gap-2">
      {contacts.length > 0 ? (
        contacts.map((contact, i) => {
          return <Contact key={i} data={contact} />;
        })
      ) : (
        <p className="mt-4 text-center text-white text-lg">No Contact saved</p>
      )}
    </div>
  );
};

export default Contacts;
