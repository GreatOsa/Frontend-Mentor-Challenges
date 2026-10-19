import React from "react";

const InputField = ({
  name,
  type,
  inputType = "input",
  label,
  value,
  onChange,
  hasError,
}) => {
  const inputClass = `w-full px-4 py-2 mt-1 text-[var(--Grey-900-darker)] bg-white border rounded-lg ${
    hasError ? "border-red-500" : "border-[var(--Grey-500-medium)]"
  } focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-[var(--Grey-900-darker)]`;
  return (
    <div className="relative ">
      <label
        className="block mb-3 text-sm font-medium  after:content-['*'] after:text-[var(--Green-600-medium)] "
        htmlFor={name}
      >
        {label}
      </label>

      {inputType === "input" ? (
        <input
          className={inputClass}
          name={name}
          // id="email"
          type={type}
          value={value}
          onChange={onChange}
        />
      ) : inputType === "textarea" ? (
        <textarea
          name={name}
          rows="5"
          placeholder="Enter your content"
          id="content"
          value={value}
          onChange={onChange}
          className={inputClass}
        ></textarea>
      ) : null}
    </div>
  );
};

export default InputField;
