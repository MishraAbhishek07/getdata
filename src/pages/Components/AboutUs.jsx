import { useTitle } from "../../hooks/useTitle";
import Logo from "../Images/about.jpg";


export const AboutUs = () => {
  useTitle(`${"AboutUs" }-GetDataBack`)
  return (
    <section id='about' className="flex flex-col lg:flex-row items-center mx-9 dark:bg-gray-800 my-20 dark:text-slate-100">
      <div className="visual my-5 lg:max-w-xl lg:mr-5">
        <img className="rounded-lg max-h-full" src={Logo} alt="CodeBook Hero Section" />
      </div>
      <div className="text my-5 ">
        <h1 className="text-4xl font-bold underline underline-offset-8 decoration-purple-500 dark:text-white">About Us</h1>
        <h1 className="text-5xl mt-5 dark:text-gray-200">Data Recovery Service</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          We specialize in retrieving lost data. We understand the frustration and stress that come with data loss, and we are here to provide you with a reliable and system-driven effective solution.
        </p>
       
      </div>
    </section>
  );
};
