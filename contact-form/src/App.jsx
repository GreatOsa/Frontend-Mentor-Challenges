import React, { useState } from "react";
import InputField from "./Components/InputField";

const App = () => {
  return (
    <div className="bg-[var(--Green-200-lighter)] w-[100vw] h-full py-[5rem] flex justify-center items-center ">
      <ContactForm />
    </div>
  );
};

export default App;

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    queryType: false,
    message: false,
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = { ...errors };

    // Check each field
    if (!formData.firstName.trim()) {
      newErrors.firstName = true;
      hasErrors = true;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = true;
      hasErrors = true;
    }
    if (!formData.email.trim()) {
      newErrors.email = true;
      hasErrors = true;
    }
    if (!formData.queryType) {
      newErrors.queryType = true;
      hasErrors = true;
    }
    if (!formData.message.trim()) {
      newErrors.message = true;
      hasErrors = true;
    }
    if (!formData.consent) {
      newErrors.consent = true;
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      // Submit form if no errors
      console.log("Form submitted:", formData);
      // You can call an onSubmit prop here if needed
    }
  };

  return (
    <div className="max-w-[400px] w-[90%] lg:w-[600px] ">
      <form
        className="w-full flex flex-col gap-[1rem] bg-[var(--White)] rounded-lg text-[var(--Grey-900-darker)] p-[1rem]"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold text-2xl">Contact Us</h1>
        <div className="w-full flex flex-col lg:flex-row gap-3">
          <div className="w-full">
            <InputField
              name="firstName"
              value={formData.firstName}
              type="text"
              label="First Name"
              onChange={handleChange}
              hasError={errors.firstName}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>

          <div className="w-full">
            <InputField
              name="lastName"
              type="text"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              hasError={errors.lastName}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            )}
          </div>
        </div>
        <div>
          <InputField
            name="email"
            type="email"
            label="Email Address"
            value={formData.email}
            onChange={handleChange}
            hasError={errors.email}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">This field is required</p>
          )}
        </div>
        <div>
          <label
            className="block mb-3 text-sm font-medium after:content-['*'] after:text-[var(--Green-600-medium)]"
            htmlFor="queryType"
          >
            Query Type
          </label>
          <div className="flex flex-col lg:flex-row gap-3">
            {["general", "support"].map((type) => (
              <div
                key={type}
                className="flex gap-2 w-full px-4 py-2 mt-1 text-zinc-800 bg-white border-1 rounded-lg border-[var(--Grey-500-medium)] focus-within:ring focus-within:ring-[var(--Grey-900-darker)]"
              >
                <input
                  type="radio"
                  id={type}
                  name="queryType"
                  value={type}
                  onChange={handleChange}
                  checked={formData.queryType === type}
                />
                <label htmlFor={type} className="capitalize">
                  {type === "general" ? "General Enquiry" : "Support Request"}
                </label>
              </div>
            ))}
          </div>
          {errors.queryType && (
            <p className="text-red-500 text-xs mt-1">
              Please select a query type
            </p>
          )}
        </div>

        <InputField
          name="message"
          inputType="textarea"
          label="Message"
          value={formData.message}
          onChange={handleChange}
          hasError={errors.message}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">This field is required</p>
        )}

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="w-4 h-4 rounded border-gray-300 text-[var(--Green-600-medium)] focus:ring-[var(--Green-600-medium)]"
          />
          <label
            htmlFor="consent"
            className="text-sm after:content-['*'] after:text-[var(--Green-600-medium)]"
          >
            I consent to being contacted by the team
          </label>
        </div>
        {errors.consent && (
          <p className="text-red-500 text-xs">This field is required</p>
        )}

        <button
          type="submit"
          className="w-full px-4 py-3 mt-4 text-white rounded-lg bg-[var(--Green-600-medium)] hover:bg-[var(--Green-700-dark)] transition-colors duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// <div>
//   <InputField
//     name="lastName"
//     type="text"
//     label="Last Name"
//     value={formData.lastName}
//     onChange={handleChange}
//     hasError={errors.lastName}
//   />
//   {errors.lastName && (
//     <p className="text-red-500 text-xs mt-1">Last name is required</p>
//   )}
// </div>;
