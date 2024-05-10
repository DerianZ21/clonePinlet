import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  {Functions}  from "../../sections/Functions/functions";
import { ScrollToSection} from "./ScrollToSection";
import ContactsPage from '../Contact/Contacts'
import { Footer } from "../../sections/Footer/footer";
import { NavbarItem } from "../../components/NavbarItem/navbarItem";
import FloatingWhatsApp from "../../components/FloatingWhatsApp/FloatingWhatsApp"; // Ajusta la ruta según la ubicación de tu componente FloatingWhatsApp

export const Home = () => {
  return (
    <Router>
      <div id="top"></div>
      <div className="row sticky-top">
        <NavbarItem></NavbarItem>
      </div>
      <FloatingWhatsApp /> {/* Agrega el componente FloatingWhatsApp aquí */}
      <ScrollToSection/>
      <Routes>
        <Route path="/" element={<Functions />} /> 
        <Route path="/functions" element={<Functions />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <div className="row">
        <Footer></Footer>
      </div>
    </Router>
  );
};
