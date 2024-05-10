import { useState, useEffect } from 'react';
import { VideoItem } from '../../components/VideoItem/videoItem'
import Slider from "react-slick";

import './clientsSection.css'


// https://react-slick.neostack.com/docs/get-started



const videoSettings = {
  dots: false,
  infinite: true,
  speed: 750,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
};

const eventSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
};

export const ClientsSection = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  return (
    <div id="clients-section" className='clients-section pn-bg-orange'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            
            <div id='videos'></div>
            <div className='row videos-wrapper'>
              <div className='col-12'>
                <div className='row justify-content-center'>
                  <Slider { ...((windowSize.innerWidth>576)?({...videoSettings}):({...videoSettings, slidesToShow:1})) }>
                    <VideoItem src="tutorial3"/>
                    <VideoItem src="tutorial6"/>
                    <VideoItem src="tutorial5"/>
                    <VideoItem src="tutorial1"/>
                    <VideoItem src="tutorial2"/>
                    <VideoItem src="tutorial4"/>
                    {/* <VideoItem src="tutorial7"/> */}
                    <VideoItem src="tutorial8"/>
                  </Slider>
                </div>
              </div>
            </div>

            <div className='row events-wrapper'>
              <div className='col-12'>
                <div className='row'>
                  <p className='header-title'>Eventos</p>
                </div>

                <div className='col-12 col-md-10 offset-md-1 mt-4'>
                  <div className='row'>
                    <Slider { ...((windowSize.innerWidth>576)?({...eventSettings}):({...eventSettings, slidesToShow:1})) }>
                      <img className='img-fluid p-2' src="assets/event1.jpeg" alt="Imagen Evento 1"/>  
                      <img className='img-fluid p-2' src="assets/event2.jpeg" alt="Imagen Evento 2"/>  
                      <img className='img-fluid p-2' src="assets/event3.jpeg" alt="Imagen Evento 3"/>  
                      <img className='img-fluid p-2' src="assets/event4.jpeg" alt="Imagen Evento 4"/>  
                    </Slider>
                  </div>
                </div>

              </div>
            </div>

            <div className='row clients-wrapper'>
              <div className='col-12'>
                <div className='row'>
                  <p className='header-title'>Nuestros clientes</p>
                </div>
                <div className='row align-items-center'>

                  <div className='col-10 offset-1 mt-4'>
                    <div className='row align-items-center justify-content-center'>
                      <div className='client-logo'>
                        <img className='img-fluid' src="assets/tenis-club.png" alt="Logo de Tenis club"></img>
                      </div>
                      <div className='client-logo max'>
                        <img className='img-fluid' src="assets/banco-guayaquil.png" alt="Logo del Banco Guayaquil"></img>
                      </div>
                      <div className='client-logo'>
                        <img className='img-fluid' src="assets/pacifica-center.png" alt="Logo de Pacífica Center"></img>
                      </div>
                      <div className='client-logo'>
                        <img className='img-fluid' src="assets/ulvr.png" alt="Logo de Universidad Vicente Rocafuerte"></img>
                      </div>
                      <div className='client-logo max'>
                        <img className='img-fluid' src="assets/casa-grande.png" alt="Logo de Universidad Casa Grande"></img>
                      </div>
                    </div>
                  </div>

                  <div className='col-10 offset-1'>
                    <div className='row align-items-center justify-content-center'>
                      <div className='client-logo'>
                        <img className='img-fluid' src="assets/arcos-plaza.png" alt="Logo de Arcos Plaza"></img>
                      </div>
                      <div className='client-logo'>
                        <img className='img-fluid' src="assets/solca.png" alt="Logo de Solca"></img>
                      </div>
                      <div className='client-logo'>
                        <img className='img-fluid' src="assets/punta-mocoli.png" alt="Logo de Punta Mocolí"></img>
                      </div>
                      <div className='client-logo max'>
                        <img className='img-fluid' src="assets/almax.png" alt="Logo de Almax 3"></img>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* <div className='row options-wrapper'>
              <div className='col-12'>
                <div className='row'>
                  <p className='header-title'>Donde más puedes pasarla tranqui</p>
                </div>
                <div className='row align-items-center'>

                  <div className='col-10 offset-1'>
                    <div className='row align-items-center justify-content-center'>
                      <div className='client-logo'>
                        <img className='img-fluid' src="assets/security-world.png" alt="Logo de Security World"></img>
                      </div>
                      <div className='client-logo'>
                        <img className='img-fluid' src="assets/sangay-hotel.png" alt="Logo de Sangay SPA Hotel"></img>
                      </div>
                      <div className='client-logo'>
                        <img className='img-fluid' src="assets/radio-marca.png" alt="Logo de Radio Marca"></img>
                      </div>
                      <div className='client-logo max'>
                        <img className='img-fluid' src="assets/kappa.png" alt="Logo de Kappa"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div id='descarga'></div>
            <div className='row available-wrapper'>
              <div className='col-10 offset-2' style={{position: 'relative'}}>
                <div className="row align-items-center text-content">
                  <div className="col-12  col-lg-6 offset-lg-7">
                    <div className="row text-start">
                      <p className="title pn-text-gray">Disponible para Android e iOS</p>
                    </div>
                    <div className="row text-center text-lg-start markets">
                      <div className='col-5 col-md-12 col-lg-5 market-wrapper'>
                        <a href="https://apps.apple.com/us/app/qr-ticket/id1533524491" target="_blank" rel="noopener noreferrer">
                          <img className='market  d-lg-flex' src="assets/appstore-gray.png" alt="Logo AppStore gris"/>
                        </a>
                      </div>
                      <div className='col-5 col-md-12 col-lg-5 market-wrapper'>
                      <a href="https://play.google.com/store/apps/details?id=com.vionsolutions.qrticket&hl=es" target="_blank" rel="noopener noreferrer">
                        <img className='market  d-lg-flex' src="assets/playstore-gray.png" alt="Logo PlayStore gris"/>
                        </a>
                      </div>
                      <div className='col-5 col-md-12 col-lg-5 market-wrapper'>
                        <a href="https://appgallery.huawei.com/app/C108879605" target="_blank" rel="noopener noreferrer">
                          <img  className='market  d-lg-flex' src="assets/galary.png" alt="Logo PlayStore gris"/>
                        </a>
                      </div>
                    </div>
                    {/* <div className="row" style={{marginTop: '1.5rem'}}>
                      <img className='market' src="assets/playstore-gray.png" alt="Logo PlayStore gris"/>
                    </div> */}
                  </div>
                  {/* <div className="col-5">
                    
                  </div> */}
                </div>

                <div className="background">
                  <img className="img-fluid" src="assets/available-background-min.png" alt="Fondo del celular con el App Pinlet"></img>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}