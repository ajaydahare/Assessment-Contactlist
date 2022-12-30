import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { IoIosArrowRoundBack } from "react-icons/io";

const AddContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
    navigate("/");
  };
  return (
    <div className="max-w-lg m-auto">
      <h1 className="ml-2 mb-4 text-2xl text-white font-bold tracking-wider capitalize">
        <IoIosArrowRoundBack
          onClick={() => navigate(-1)}
          className="w-7 h-7 inline-block mr-2 text-ai-primary-text-teal border-2 border-ai-primary-text-teal rounded-md cursor-pointer "
        />{" "}
        Add Contact
      </h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default AddContact;
