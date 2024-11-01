import React from "react"
import HubspotForm from 'react-hubspot-form'

import ContactImg from "../../assets/images/contact2.png"

const ContactForm = () => {
  return (
    <>
      <div className="contact-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title"></span>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-image">
                <img src={ContactImg} alt="Contact" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
            <HubspotForm
   portalId='145063348'
   formId='2722553a-49e4-479b-a257-7a1446dc97a7'
   onSubmit={() => console.log('Submit!')}
   onReady={(form) => console.log('Form ready!')}
   loading={<div>Loading...</div>}
   />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm
