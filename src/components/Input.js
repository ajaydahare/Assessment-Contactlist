import React from "react";
import { CiUndo } from "react-icons/ci";

const Input = ({
  name,
  value,
  label,
  onChange,
  type,
  values = [],
  error,
  required,
  placeholder,
  loading,
}) => {
  if (type === "dropdown") {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={name}
            className="block text-white text-sm font-semibold ml-1 mb-1 capitalize"
          >
            {label}
            {required && (
              <span className="text-ai-primary-text-dark ml-1"> * </span>
            )}
          </label>
        )}
        <select
          value={value}
          id={name}
          name={name}
          onChange={onChange}
          className=" appearance-none block w-full bg-[#484B5C] px-3 py-2 text-base text-white font-semibold  bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded  focus:outline-none"
        >
          {values.map((val, i) => (
            <option value={val} key={i} className="p-2">
              {val}
            </option>
          ))}
        </select>
      </div>
    );
  } else if (type === "checkbox") {
    return (
      <div className="w-full flex items-center gap-x-1">
        <input
          id={name}
          type="checkbox"
          name={name}
          checked={value}
          onChange={onChange}
          className="w-4 h-4 text-blue-600 bg-[#484B5C]  rounded border-gray-300 "
        />
        {label && (
          <label
            htmlFor={name}
            className="text-white text-sm font-semibold ml-1 mb-1 capitalize"
          >
            {label}
            {required && (
              <span className="text-ai-primary-text-dark ml-1"> * </span>
            )}
          </label>
        )}
      </div>
    );
  } else if (type === "image") {
    return (
      <div className="">
        <label
          htmlFor={name}
          className="block text-white text-sm font-semibold ml-1 mb-1 capitalize"
        >
          {label}
        </label>
        {loading ? (
          <CiUndo className="w-6 h-6 text-white animate-spin" />
        ) : (
          <input
            type="file"
            onChange={onChange}
            className="bg-[#484B5C] w-full"
            accept="image/x-png,image/gif,image/jpeg"
          />
        )}
        {!loading && value && (
          <a href={value} target="_blank" className="truncate text-white">
            {value.slice(0, 30)}.....
          </a>
        )}
      </div>
    );
  } else {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={name}
            className="block text-white text-sm font-semibold ml-1 mb-1 capitalize"
          >
            {label}
            {required && (
              <span className="text-ai-primary-text-dark ml-1"> * </span>
            )}
          </label>
        )}
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={required}
          className={`border border-solid bg-[#484B5C] border-gray-300 appearance-none  rounded w-full py-2 px-3 text-white font-semibold leading-tight focus:outline-none focus:shadow-outline ${
            error && "border-red-500"
          }`}
        ></input>
        {error && (
          <p className="ml-1 mt-1 text-xs tracking-wider font-semibold text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
};

export default Input;
