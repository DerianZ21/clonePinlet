import { ResidentItem } from "../../components/ResidentItem/residentItem";
import "./residentsSection.css";

export const ResidentsSection = () => {
  return (
    <div id="residents-section" className="residents-section">
      <div className="container">
        <div className="col-10 offset-1 col-md-12 offset-md-0">
          <div className="row align-items-center">
            <div className="col-12 col-md-5 background">
              <img className="img-fluid" src="assets/Recurso45-min.png" alt="Smarthpone con app en pantalla de residentes"></img>
            </div>
            <div className="col-12 col-md-7" style={{marginTop: '3rem'}}>
              <div className="row text-start">
                <p className="pinlet">PINLET</p>
                <p className="resident">RESIDENTES</p>
                <p className="features">SEGURIDAD · CONTROL · TRAZABILIDAD</p>
              </div>
              <div className="row" style={{marginTop: '2rem'}}>
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <ResidentItem src="assets/Recurso46.png" title="Anuncia" description="A tus visitantes con mayor facilidad, rapidez y
                        control. Solo tu y los miembros de tu familia
                        podrán autorizar el ingreso de un visitante"
                      ></ResidentItem>
                    </div>
                    <div className="col-6">
                      <ResidentItem src="assets/Recurso47.png" title="Seguro" description="Cada código es valido para una sola ocasión y por un tiempo limitado"></ResidentItem>
                    </div>
                    <div className="col-6">
                      <ResidentItem src="assets/Recurso48.png" title="Comparte" description="Códigos de ingreso a tus visitantes por whatsapp, messenger, correo y otros medios"></ResidentItem>
                    </div>
                    <div className="col-6">
                      <ResidentItem src="assets/Recurso49.png" title="Sin Fronteras" description="Gestiona tus visitantes desde donde estes"></ResidentItem>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}