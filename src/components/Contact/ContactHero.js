import React from "react";

function ContactHero() {
  return (
    <div
      className="d-flex justify-content-center align-items-center about__hero"
      style={{
        backgroundImage: `url(./images/faq.bg.png)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 className="title">Let's connect</h1>
    </div>
  );
}

export default ContactHero;
