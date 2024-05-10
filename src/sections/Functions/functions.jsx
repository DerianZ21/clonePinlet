

import { FunctionItem } from "../../components/FunctionItem/functionItem"
import { ResidentsSection } from "../ResidentsSection/residentsSection";
import { AdminSection } from "../AdminSection/adminSection";
import { ReviewsSection } from "../ReviewsSection/reviewsSection";

import "./functions.css";
import { ClientsSection } from "../ClientsSection/clientsSection";
import { EasyToUseSection } from "../EasyUseSection/easyUseSection";
import { WhenToUse } from "../WhenToUse/whenToUse";
import { Init } from "../InitSection/initSection";

export const Functions = () => {
  return (
    <div id="functions" className="">
      <div className="row img-absolute">
        <div className="p-0" style={{overflow: 'hidden'}}>
          <img className="img-fluid" style={{width: '101%', maxWidth: '101%'}}
            src="assets/Recurso21-min-min.png" alt="Fondo con celular e inferior gris"
          />
        </div>
      </div>

      <div className="row presentation">
        <div className="col-12 col-md-5 col-lg-4 offset-md-1 text-start">
          <div className="row">
            <div className="col-6 col-sm-5 col-md-10">
              <img className="img-fluid logo" src="assets/Recurso1.png" alt="Logo Pinlet"/>
            </div>
          </div>
          <div className="row">
            <div col="col-12">
              <p className="header">DILE ADIÓS A LA INSEGURIDAD.</p>
            </div>
          </div>
          <div className="row">
            <p className="description">Es el sistema de <strong>administración y el control de acceso más seguro</strong> y robusto para todo tipo de <strong className="pn-text-orange">ingresos con QR dinámico.</strong>
            </p>
          </div>
        </div>
      </div>
      
      <div className="row align-items-center content">
        <div className="features pn-bg-gray">
          <div className="container">

            <div className="col-12">
              <div className="row align-items-end">
                <div className="col-3">
                  <FunctionItem src="assets/Recurso24.png" content="100% seguro"></FunctionItem>
                </div>
                <div className="col-3">
                  <FunctionItem src="assets/Recurso25.png" content="Control y Trazabilidad"></FunctionItem>
                </div>
                <div className="col-3">
                  <FunctionItem src="assets/Recurso26.png" content="Acceso rápido"></FunctionItem>
                </div>
                <div className="col-3">
                  <FunctionItem src="assets/Recurso27.png" content="Variedad de uso"></FunctionItem>
                </div>
              </div>
              <div className="row align-items-end" style={{marginTop: '5vw'}}>
                <div className="col-3 offset-3">
                  <FunctionItem src="assets/Recurso28.png" content="Reducción de costos"></FunctionItem>
                </div>
                <div className="col-3">
                  <FunctionItem src="assets/Recurso29.png" content="Sostenible"></FunctionItem>
                </div>
              </div>
            </div>

          </div>
        </div>

        <Init/>

        <div id="funcionalidades"></div>
        <WhenToUse/>
        <EasyToUseSection/>
        <ResidentsSection/>
        <AdminSection/>
        <ReviewsSection/>
        <ClientsSection/>
        <div style={{marginTop: '6rem'}}></div>
      </div>

      
    </div>
  )
}