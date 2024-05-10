import React from "react";
import './styles-contact/cards.css'

function Cards() {
    return (
        <div className="main-cards">
            <div className="card">
                <div className="img-card">
                    <img src='/assets/contactos/telefono.png' alt="icono de telefono"></img>
                </div>
                <div className="content-card">
                    <h2>Teléfonos</h2>
                    <a href="tel:+593994765866">
                        <p>+593-994765866</p></a>
                    <a href="tel:+593994282261">
                        <p>+593-994282261</p></a>
                </div>
            </div>
            <div className="card">
                <div className="img-card">
                    <img src='/assets/contactos/email.png' alt="icono de correo"></img>
                </div>
                <div className="content-card">
                    <h2>Email</h2>
                    <a href="mailto:xman@manriqueseguridad.com">
                        <p>xman@manriqueseguridad.com</p> </a>
                    <a href="mailto:gplua@manriqueseguridad.com">
                        <p>gplua@manriqueseguridad.com</p> </a>
                </div>
            </div>
            <div className="card">
                <a href="https://www.google.com/maps/place/R4GC%2BMJP,+Guayaquil+090514/@-2.1732557,-79.8784461,21z/data=!4m6!3m5!1s0x902d6dcbbe55397d:0xddf01fe35396a6c3!8m2!3d-2.1732247!4d-79.8784865!16s%2Fg%2F11g0znxnct?entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="img-card">
                        <img src='/assets/contactos/ubicacion2.png' alt="icono de ubicación"></img>
                    </div>
                    <div className="content-card">
                        <h2>Ubicación</h2>
                        <p>Ave. Pedro Menendez Gilbert<br />
                            frente a Solca<br />
                            (instalaciones de Transfuel)<br />
                            Guayaquil, Ecuador</p>
                    </div>
                </a>
            </div>
        </div>
    )

}

export default Cards;