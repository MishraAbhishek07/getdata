import { Routes, Route } from "react-router-dom";
import {HomePage} from "../pages/HomePage"
import { Card } from "../pages/Components/Card";
import { AboutUs } from "../pages/Components/AboutUs";
import { Contact } from "../pages/Components/Contact";
import { ClientReviewPage } from "../pages/Components/ClientReviewPage";


export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="" element={ <HomePage/>} />
        <Route path="/services" element={ <Card/>} />
        <Route path="/about" element={ <AboutUs/>} />
        <Route path="/contact" element={ <Contact/>} />
        <Route path="/review" element={ <ClientReviewPage/>} />

    
        
    </Routes>
    </>
  )
}