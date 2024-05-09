import { EasyItem } from "../../components/EasyItem/easyItem";
import { VideoItem } from "../../components/VideoItem/videoItem";
import './easyUseSection.css'

export const EasyToUseSection = () => {
  return (
    <div className="easy-to-use">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-10 offset-1">
                <p className="title text-start">ES FÁCIL DE USAR</p>
              </div>
            </div>
            <div className="row">
              <div className="col-1 d-none d-md-flex align-self-center">
                
              </div>
              <div className="col-12 col-md-10" style={{position: 'relative'}}>
                
                <div className="background">
                  <img className="img-fluid" src="assets/Recurso35-min.png" alt="Mano con movil y la aplicación"/>
                </div>
                <div className="steps-list">
                  <EasyItem number="1" text="Generar Pinlet para invitado" ></EasyItem>
                  <EasyItem number="2" text="Enviar Pinlet al invitado" selected={false} ></EasyItem>
                  <EasyItem number="3" text="Invitado entra con Pinlet" ></EasyItem>
                  <EasyItem number="4" text="Trazabilidad" ></EasyItem>
                </div>
                <div className="videos-list">
                  <div className="row">
                    <div className="col-5 offset-1 col-lg-3 col-xl-2">
                      {/* <iframe width="560" height="315" className="img-fluid placeholder" src="https://www.youtube.com/embed/OjNcFq1IquA?si=hdsvTA2BhMa9Y_c6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                      <VideoItem className="img-fluid placeholder" src="easy1"></VideoItem>
                    </div>
                    <div className="col-5 col-lg-3 col-xl-2">
                      {/* <iframe width="560" height="315" className="img-fluid placeholder" src="https://www.youtube.com/embed/SoZTMmHqflA?si=_8v5SbFqQApNv9pt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                      <VideoItem className="img-fluid placeholder" src="easy2"></VideoItem>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="offset-1 col-auto">
                      <a href="#videos" target="_self" rel="noreferrer">
                        <img className="btn-tutorial" src="assets/Recurso36.png" alt="Boton de ver tutoriales"/>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-1 d-none d-md-flex align-self-center">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}