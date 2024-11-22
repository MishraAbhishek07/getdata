import React, { useRef, useState } from 'react';
import { useTitle } from '../../hooks/useTitle';
import Logo from "../Images/cmr1.avif";
import axios from 'axios';

export const Contact = () => {
  useTitle("Contact");


  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);


    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };

    try {
  
      const response = await axios.post('http://localhost:5000/formData', formData);

      if (response.status ) {
        setSubmitSuccess(`We will contact you soon. 🙏`);

        nameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        messageRef.current.value = '';
      }
    } catch (error) {
      setSubmitError(`There was an error submitting your form. Please try again .` );
      console.log(error)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 bg-cover bg-center" style={{ backgroundImage: `url(${Logo})` }}>
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow dark:bg-gray-700 bg-opacity-80">
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
       
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium dark:text-white">Your Name</label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              className="block w-full h-22 pr-5 pl-3 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-900 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Arun Sharma"
              required
            />
          </div>

     
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium dark:text-white">Your Email</label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              className="block w-full h-22 pr-5 pl-3 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-900 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="arsharma@example.com"
              required
            />
          </div>

 
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium dark:text-white">Phone Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-100 border border-gray-900 border-r-0 rounded-l-md dark:bg-gray-700 dark:text-gray-400 dark:border-gray-900">
                +91
              </span>
              <input
                ref={phoneRef}
                type="tel"
                id="phone-number"
                className="block w-full h-11 pr-5 pl-2.5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-900 rounded-r-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Enter Phone Number"
                pattern="\d{10}" 
                maxLength="10"
                required
              />
            </div>
          </div>

          
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-white">Message</label>
            <textarea
              ref={messageRef}
              id="message"
              className="block w-full h-22 pr-5 pl-3 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-900 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

        
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
