import { Link } from "react-router-dom";
import Logo from "../Images/b3.jpg";
import LogoOverlay from "../Images/logo.png"; 

export const Hero = () => {
  return (
    <section className="relative flex  flex-col lg:flex-row items-center py-12">
      <div className="absolute inset-0 z-0 hidden md:block">
   
        <img className="w-full h-full object-cover" src={Logo} alt="Data Recovery" />
      </div>
     
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 md:left-0 md:top-0 md:translate-x-0">
  
        <img className="w-24 h-24 mx-5 my-10 bg-black " src={LogoOverlay} alt="Logo" /> 
      </div>
      <div className="relative z-30 my-5 mx-20 lg:px-10 max-w-xl text-center lg:text-left mt-28 md:mt-32 ">

        <h1 className="text-4xl lg:text-6xl font-extrabold  lg:text-white dark:text-white leading-tight mb-4">
          ARUN SHARMA 
        </h1>
        <h1 className="text-3xl lg:text-4xl  font-extrabold text-yellow-500 leading-tight mb-4">
           DATA RECOVERY SPECIALIST
        </h1>
        <p className="text-xl text-black dark:text-white mb-6 lg:text-white leading-relaxed">
          Hello! We are data recovery experts at Get Data Back with 8 years of experience. 
          We’ve helped over 9,300 individuals and photographers across 3 countries recover 
          96,467 terabytes of lost data using ADR technology, saving them crores of rupees. 
          Would you be interested in getting your data back?
        </p>
        <Link
          to="https://www.apsharma.in/eng"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Read More
        </Link>
      </div>
    </section>
  );
};
