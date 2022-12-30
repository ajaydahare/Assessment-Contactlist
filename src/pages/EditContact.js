import React, { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";

const EditContact = () => {
  const [data, setData] = useState(null);
  let { id } = useParams();
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const contacts = useSelector((store) => store);
  const handleSubmit = (data) => {
    dispatch({ type: "EDIT_CONTACT", payload: data });
    navigate("/");
  };
  useEffect(() => {
    if (id) {
      let contact = contacts.find((contact) => contact.id == id);
      setData(contact);
    }
  }, [id]);
  return (
    <div className="max-w-lg m-auto">
      <h1 className="ml-2 mb-4 text-2xl text-white font-bold tracking-wider capitalize">
        <IoIosArrowRoundBack
          onClick={() => navigate(-1)}
          className="w-7 h-7 inline-block mr-2 text-ai-primary-text-teal border-2 border-ai-primary-text-teal rounded-md cursor-pointer "
        />{" "}
        Add Contact Edit Contact
      </h1>
      {data && <Form data={data} isEdit={true} onSubmit={handleSubmit} />}
    </div>
  );
};

export default EditContact;
