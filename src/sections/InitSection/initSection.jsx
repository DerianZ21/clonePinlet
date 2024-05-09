import './initSection.css';

export const Init = () => {
  return (
    <div id="inicio" className="inicio fullscreen">
      <div className="row gradient-in"></div>
      <div className="row fullscreen">
        <div className="col-12">

          <div className="row align-items-center content">
            <div className="col-12 col-md-3 left">
              <div className="row">
                <div className="col-10 offset-1">
                  <img className="img-fluid" src="assets/Recurso10.png" alt="Pinlet app en smartphones"></img>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img className="img-fluid" src="assets/Recurso9-min.png" alt="Pinlet app en smartphones"></img>
            </div>
            <div className="col-12 col-md-3 right">
            <div className="row">
                <div className="col-10 offset-1 offset-md-0">
                  <img className="img-fluid" src="assets/Recurso11.png" alt="Pinlet app en smartphones"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="row fade-border">
            <div className="col-12" style={{padding: '0px'}}>
              <img className="img-fluid" src="assets/Recurso22-min.png" alt="Borde borroso hacia blanco"></img>
            </div>
          </div>

        </div>
      </div>
      <div className="row gradient-out"></div>
    </div>
  )
}