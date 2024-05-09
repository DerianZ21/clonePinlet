import { Functions } from "../../sections/Functions/functions"
import { Footer } from "../../sections/Footer/footer"
import { NavbarItem } from "../../components/NavbarItem/navbarItem"
import FloatingWhatsApp from '../../components/FloatingWhatsApp/FloatingWhatsApp'; // Ajusta la ruta según la ubicación de tu componente FloatingWhatsApp

export const Home = () => {
  return (
    <>
      <div id="top"></div>
      <div className="row sticky-top">
        <NavbarItem></NavbarItem>
        
      </div>
      <FloatingWhatsApp /> {/* Agrega el componente FloatingWhatsApp aquí */}
      <Functions></Functions>
      <div className="row">
        <Footer></Footer>
      </div>
    </>
  )
}