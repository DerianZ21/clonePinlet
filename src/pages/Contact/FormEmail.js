
import React, { useState } from "react";
import './styles-contact/formemail.css'
import validateForm from "./js-contact/validarForm";



function FormEmail() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log(FormData);
      setFormData({ name: '', email: '',phone: '', subject: '', message: '' });
      setErrors({});
    };
  }


  return (
    <div className='main-form-email'>
        <form onSubmit={handleSubmit}>
          <div className="text-form-Email">
            <h3>¿Tienes alguna duda?</h3>
            <p>Llena el siguiente formulario y nos pondremos en contacto contigo.</p>
          </div>
          <div className="contenedor-input-contacto">
            <div>
              <label htmlFor="name">Nombre y apellido</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="errorForm">{errors.name}</p>}
            </div>

            <div className="medios-contactos">
              <div className="medio-correo">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="errorForm">{errors.email}</p>}
              </div>
              <div className="medio-telefono">
                <label htmlFor="phone">Número de telefono</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="errorForm">{errors.phone}</p>}
              </div>

            </div>

            <div>
              <label htmlFor="subject">Asunto</label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <p className="errorForm">{errors.subject}</p>}
            </div>

            <div>
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="errorForm">{errors.message}</p>}
            </div>

            <button className="btn-shine" type="submit">Enviar</button>
          </div>
        </form>
       
      </div>
  );
}

export default FormEmail;