import React from "react";
import "./Contact.scss";

function ContactInfo({data}) {
  return (
    <>
      <div className="d-flex align-items-start mt-4">
        <div className="contact__icon">
          <img src={data.icon} alt="location" />
        </div>
        <p>{data.content}</p>
      </div>
    </>
  );
}

export default ContactInfo;
