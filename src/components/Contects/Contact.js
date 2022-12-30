import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";

const Contact = ({ data }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  let navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    setOpen(false);
  };

  const handleEdit = (id) => {
    navigate(`edit-contact/${id}`);
  };

  const ConfirmationModal = () => {
    return (
      <div
        className={
          open
            ? "fixed z-20 inset-0 overflow-y-auto"
            : "w-0 h-0 fixed z-20 inset-0 overflow-y-auto"
        }
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-center min-h-full text-center ">
          {open && (
            <div
              className={
                open
                  ? "ease-in duration-200 opacity-100 fixed inset-0 bg-gray-700 bg-opacity-90 transition-opacity"
                  : "opacity-0 ease-out z-0 duration-300 fixed inset-0 bg-gray-700 bg-opacity-90 transition-opacity"
              }
              aria-hidden="true"
            ></div>
          )}

          {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className={
              open
                ? "mx-2 sm:mx-0 ease-in duration-200 opacity-100  translate-y-0 sm:scale-100 inline-block align-middle bg-white rounded-lg  text-left  shadow-xl transform transition-all  sm:align-middle sm:max-w-lg w-full"
                : "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95  ease-out duration-300 inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
            }
          >
            <div className="p-4 sm:p-6 flex items-center flex-col">
              <p className="">Are you sure you want to delete this contact</p>
              <div>
                <button
                  className="text-right mt-4 max-w-max  bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded"
                  onClick={() => handleDelete(data.id)}
                >
                  Yes
                </button>{" "}
                <button
                  className="text-right mt-4 max-w-max  bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded"
                  onClick={() => setOpen(false)}
                >
                  {" "}
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#2B2E41] rounded-lg shadow-md  mt-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center px-2 sm:px-10 py-4">
        <div className="flex gap-x-5">
          <img
            alt="user"
            className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mx-auto"
            src={
              data.profilePicture ||
              "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
            }
          />
          <div>
            <p className="text-gray-100 font-semibold text-xl mb-2 capitalize">
              {data.name}
            </p>
            <p className="text-gray-300 capitalize flex items-center gap-x-2 ">
              <span className="font-medium">Phone : {data.phone} </span>
              {data.isWhatsapp && (
                <IoLogoWhatsapp className="w-4 h-4 text-green-500 " />
              )}
            </p>
            <p className="text-gray-300 capitalize">
              <span className="font-medium">Contact Type : </span> {data.type}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <MdEdit
            className="bg-[#22202E] text-teal-500 p-3 w-12 h-12 cursor-pointer"
            onClick={() => handleEdit(data.id)}
          />
          <MdDelete
            className="bg-[#22202E] text-red-500 p-3 w-12 h-12 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
        <ConfirmationModal />
      </div>
    </div>
  );
};

export default Contact;
