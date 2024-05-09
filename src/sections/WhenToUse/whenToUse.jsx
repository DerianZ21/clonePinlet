import Slider from "react-slick";
import { EventItem } from "../../components/EventItem/eventItem"

import './whenToUse.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  vertical: true
};

export const WhenToUse = () => {
  return (
    <div className="when-to-use-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="when-to-use">
              <div className="row header">
                <div className="col-12">
                  <p className="title">DONDE</p>
                  <p className="title">USAR PINLET</p>
                </div>
              </div>
              
              <div className="row vertical-carrousel" style={{marginTop: '2.5rem', marginBottom: '1.5rem'}}>
                <Slider {...settings} className="pn-slider">
                  <EventItem src="assets/Recurso30-min.png" title="Urbanizaciones" description="Acceso rápido en garita" type="medium"></EventItem>
                  <EventItem src="assets/Recurso30-min.png" title="Universidades" description="Ingreso seguro" type="medium"></EventItem>
                  <EventItem src="assets/Recurso31-min.png" title="Eventos y Fiestas" description="Ingreso seguro" type="medium"></EventItem>
                  <EventItem src="assets/Recurso32-min.png" title="Parqueos" description="Acceso directo" type="medium"></EventItem>
                  <EventItem src="assets/Recurso33-down.jpeg" title="Ascensores" description="Acceso directo" type="medium"></EventItem>
                  <EventItem src="assets/Recurso30-min.png" title="Hospitales" description="Ingreso seguro" type="medium"></EventItem>
                  <EventItem src="assets/Recurso31-min.png" title="Empresas" description="Acceso directo" type="medium"></EventItem>
                  <EventItem src="assets/Recurso33-down.jpeg" title="Oficinas" description="Acceso directo" type="medium"></EventItem>
                  <EventItem src="assets/Recurso30-min.png" title="Colegios" description="Ingreso seguro" type="medium"></EventItem>
                </Slider>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}