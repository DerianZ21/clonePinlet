import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Functions } from "../../sections/Functions/functions";
import ContactsPage from "../Contact/Contacts";
import { NavbarItem } from "../../components/NavbarItem/navbarItem";
import { Footer } from "../../sections/Footer/footer";
import FloatingWhatsApp from '../../components/FloatingWhatsApp/FloatingWhatsApp';

export const Home = () => {
  return (
    <>
      <Router>
        <div id="top"></div>
        <div>
          <div className="row sticky-top">
            <NavbarItem />
          </div>
          <Routes>
            <Route path="/functions" element={<Functions />} />
            <Route path="/contactos" element={<ContactsPage />} />
          </Routes>
          <FloatingWhatsApp />
        </div>
        <div className="row">
          <Footer />
        </div>
      </Router>
    </>
  );
};