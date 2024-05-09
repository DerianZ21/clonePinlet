import React from 'react';
import FormEmail from './FormEmail'
import Cards from './Cards'
import './styles-contact/contact.css'

function Contacts() {



  return (
    <div className='main-contact'>
      <h1>CONTÁCTANOS</h1>
      <div className='content-contact'>
        <FormEmail />
        <hr className="hr-contact-form"></hr>
        <Cards />
      </div>

    </div>
  );
}

export default Contacts;