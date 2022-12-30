import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../firebase";
import Input from "./Input";

let initialState = {
  name: "",
  type: "Personal",
  phone: "",
  isWhatsapp: false,
  profilePicture: "",
};

const Form = ({ data = initialState, onSubmit }) => {
  const [formData, setFormData] = useState(data);
  const [formDataError, setFormDataError] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setFormDataError({ ...formDataError, [e.target.name]: "" });
    }
  };

  const handleUpload = (e) => {
    setIsUploading(true);
    let image = e.target.files[0];
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFormData({ ...formData, profilePicture: url });
        setIsUploading(false);
      });
    });
  };

  const formValidation = () => {
    let isValid = true;
    if (!formData.name.trim()) {
      setFormDataError((prevError) => {
        return {
          ...prevError,
          name: "This field should not be empty",
        };
      });
      isValid = false;
    }
    if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(formData.phone)) {
      setFormDataError((prevError) => {
        return {
          ...prevError,
          phone: "Phone Number Invalid Or Missing",
        };
      });
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidation()) {
      onSubmit(formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#2D3043] border border-gray-600 p-6  shadow flex flex-col gap-2 "
    >
      {console.log("error-->", formDataError)}
      <Input
        type="text"
        name="name"
        label="Name"
        required={true}
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        error={formDataError.name}
      />
      <Input
        type="text"
        name="phone"
        label="Phone"
        required={true}
        placeholder="Phone number"
        value={formData.phone}
        onChange={handleChange}
        error={formDataError.phone}
      />
      <Input
        type="checkbox"
        label="Is Whatsapp"
        name="isWhatsapp"
        value={formData.isWhatsapp}
        onChange={handleChange}
      />

      <Input
        type="dropdown"
        label="Select type"
        name="type"
        value={formData.type}
        onChange={handleChange}
        values={["Personal", "Office"]}
      />

      <Input
        type="image"
        label="Upload Profile picture"
        name="profilePicture"
        value={formData.profilePicture}
        onChange={handleUpload}
        loading={isUploading}
      />
      <button
        type="submit"
        className="text-right mt-4 max-w-max  bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded"
      >
        Save
      </button>
    </form>
  );
};

export default Form;
