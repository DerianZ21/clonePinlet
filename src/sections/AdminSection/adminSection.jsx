import { BitacoraItem } from "../../components/BitacoraItem/bitacoraItem";
import "./adminSection.css";

export const AdminSection = () => {
  return (
    <div id="admin-section" className="admin-section">
      <div className="container">
        <div className="col-10 offset-1 col-md-12 offset-md-0" style={{position: 'relative'}}>
          <div className="background">
            <img className="img-fluid" src="assets/RecursoLaptop-min.png" alt="Imagen de fondo con laptop"></img>
          </div>

          <div className="row align-items-center text-content">
            <div className="col-12" style={{marginTop: '1rem'}}>
              <div className="row text-end text-md-start text-lg-end">
                <div className="col-12 col-md-10 offset-md-1 col-lg-5 offset-lg-1">
                  <p className="pinlet">PINLET</p>
                  <p className="resident">BITÁCORA</p>
                </div>
              </div>
              
              <div className="row text-end text-md-start text-lg-end">
                <div className="col-12 col-md-5 offset-md-1 col-lg-6 offset-lg-0">
                  <p className="features">Registra el ingreso de las visitas automáticamente</p>
                </div>
              </div>

              <div className="row resident-item-wrapper">
                <div className="col-12 col-md-10 offset-md-1 col-lg-5 offset-lg-1 p-0">
                  <BitacoraItem text="Permite registrar la cédula digitalmente."/>
                  <BitacoraItem text="Toma foto de la placa del visitante."/>
                  <BitacoraItem text="Toma foto de la cara del visitante."/>
                </div>
              </div>

              <div className="row text-center extra-info">
                <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
                  <p className="features">La bitácora PINLET permite realizar trazabilidad de todos los visitantes por nombre, placa, cédula, etc. Todo queda registrado durante 6 meses en la nube.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}