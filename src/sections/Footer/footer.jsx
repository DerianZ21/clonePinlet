import './footer.css';

export const Footer = () => {

  return (
    <div id="footer" className="footer pn-bg-gray">
      <div className='container'>

        <div className='row'>
          <div className='col-12'>

            <div className='row top-wrapper justify-content-center'>
              <div className='img-wrapper' style={{cursor: 'pointer'}}>
                <a href="#top" className="td-text-blue td-font-16">
                  <img src='assets/footer-top.png' alt="Flecha superior"/>
                </a>

              </div>
              <div className=''>
                <p>Inicio</p>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-xl-10 offset-xl-1">
                <div className="row links-wrapper">
                  <div className="col-6 col-md-4 col-lg-5 text-start">
                    <div className="row">
                      <div className="col-10 col-md-9 col-lg-7 text-start">
                          <img className='img-fluid' src="assets/logo-footer.png" alt="Logo de Pinlet en blanco"/>
                      </div> 
                      <div className="col-12 col-md-12 col-lg-12 text-start">
                        <br />
                        <br />
                        <p className="link-header">Acerca de</p>
                        <p className="link">Nosotros</p>
                        <p className="link"><a href="https://pinlet.app/Politicas.pdf" target="_blank" className="link" rel="noreferrer">Políticas de privacidad </a></p>
                      </div> 
                    </div>
                  </div>
                  <div className="col-6 col-md-4 col-lg-3 text-start">
                    <p className="link-header">Contacto</p>
                    <p className="link">Email: <a href="mailto:info@pinlet.net" className="link">info@pinlet.net</a></p>
                    <p className="link">Teléfono: <a href="tel:+593939858060" className="link">+593939858060</a></p>
                    <p className="link">Dirección: Ecuador, Guayaquil.</p>
                    <br />
                    <p className="link-header">Servicio al cliente</p>
                    <p className="link">Email: <a href="mailto:pinletdev@pinlet.net" className="link">pinletdev@pinlet.net</a></p>
                    <p className="link">Teléfono: <a href="tel:+593968253695" className="link">+593968253695</a></p>
                  </div>

                  <div className="col-8 col-md-8 col-lg-4 text-start">
                    <div className="row">
                      <p className="link-header">Síguenos</p>
                    </div>
                    <div className="row">
                      <div className='col-2'>
                        <a href="https://www.facebook.com/profile.php?id=61552649222436" target="_blank" rel="noopener noreferrer">
                          <img className='network-logo' src="assets/facebook-logo.png" alt="Logo de Facebook" />
                        </a>
                      </div>
                      <div className='col-3'>
                        <a href="https://www.instagram.com/pinletec/" target="_blank" rel="noopener noreferrer">
                          <img className='network-logo' src="assets/instagram-logo.png" alt="Logo de Instagram" />
                        </a>
                      </div>
                      <div className='col-3'>
                        <a href="https://www.linkedin.com/company/pinlet-ecuador/" target="_blank" rel="noopener noreferrer">
                          <img className='network-logo' src="assets/linkedin-logo.png" alt="Logo de LinkedIn" />
                        </a>  
                      </div>
                    </div>
                    <div className="row" style={{marginTop: '.5rem'}}>
                      <p className="link-header">Descarga la App</p>
                    </div>
                    <div className="row">
                      <div className='col-4' style={{padding: '2px'}}>
                        <a href="https://apps.apple.com/us/app/qr-ticket/id1533524491" target="_blank" rel="noopener noreferrer">
                          <img className='img-fluid' src="assets/appstore-white.png" alt="Logo de AppStore" />
                        </a>
                      </div>
                      <div className='col-4' style={{padding: '2px'}}>
                        <a href="https://play.google.com/store/apps/details?id=com.vionsolutions.qrticket&hl=es" target="_blank" rel="noopener noreferrer">
                          <img className='img-fluid' src="assets/playstore-white.png" alt="Logo de PlayStore" />
                        </a>
                      </div>
                      <div className='col-4' style={{padding: '2px'}}>
                        <a href="https://appgallery.huawei.com/app/C108879605" target="_blank" rel="noopener noreferrer">
                          <img className='img-fluid' src="assets/galary-white.png" alt="Logo de PlayStore" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" style={{marginTop: '.9rem'}}> 
              <div class="col-sm">
                <p>&copy; Pinlet - VION IoT Solutions 2023. Todos los derechos reservados.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}