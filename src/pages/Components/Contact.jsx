import React, { useRef, useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import Logo from "../Images/cmr1.avif";
import axios from 'axios';
import PhoneInput from 'react-phone-input-2'; // Import the PhoneInput component
import 'react-phone-input-2/lib/style.css'; // Import the CSS for PhoneInput

export const Contact = () => {
  useTitle("Contact");

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneNumber, // Get phone number from state
      message: messageRef.current.value,
    };

    try {
      const response = await axios.post('http://localhost:5000/formData', formData);

      if (response.status) {
        setSubmitSuccess(`We will contact you soon. 🙏`);

        // Reset the form fields after successful submission
        nameRef.current.value = '';
        emailRef.current.value = '';
        setPhoneNumber(''); // Reset phone number field
        messageRef.current.value = '';
      }
    } catch (error) {
      setSubmitError(`There was an error submitting your form. Please try again.`);
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 bg-cover bg-center" style={{ backgroundImage: `url(${Logo})` }}>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg dark:bg-gray-700 bg-opacity-80">
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-2 underline underline-offset-8 underline-thick decoration-purple-500">
            Get In Touch
          </p>
        </section>

        {submitSuccess && (
          <div className="text-green-500 text-center mb-4">
            {submitSuccess}
          </div>
        )}
        {submitError && (
          <div className="text-red-500 text-center mb-4">
            {submitError}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-white">Your Name</label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              className="block w-full h-12 pr-5 pl-3 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-900 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Arun Sharma"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">Your Email</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              className="block w-full h-12 pr-5 pl-3 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-900 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="arsharma@example.com"
              required
            />
          </div>

          {/* Phone Number Field with Country Flag */}
         <div>
  <label htmlFor="phone" className="block mb-2 text-sm font-medium dark:text-white">Phone Number</label>
  <PhoneInput
    inputRef={phoneRef}
    country={'in'} // Set default country code
    value={phoneNumber}
    onChange={setPhoneNumber} // Update state on change
    specialLabel={false} // Optional: removes the default "Phone Number" label
    inputProps={{
      className: "block w-full h-12 pr-5 pl-3 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-900 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600",
      placeholder: "Enter Phone Number",
      required: true
    }}
  />
</div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-white">Message</label>
            <textarea
              ref={messageRef}
              id="message"
              className="block w-full h-24 pr-5 pl-3 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-900 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isSubmitting ? 'Submitting...' : 'Enquire Now'}
          </button>
        </form>
      </div>
    </main>
  );
};
