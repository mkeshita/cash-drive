import React from "react";

function WorkHero() {
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
      <h1 className="title title--hero text-center">How CashDrive Works</h1>
    </div>
  );
}

export default WorkHero;
