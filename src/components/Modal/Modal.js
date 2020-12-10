import React, {useState} from "react";
import Select from "react-select";
import Slide from "react-reveal/Slide";
import "./Modal.scss";

function Modal() {
  const [modalOpen, setModalOpen] = useState(true);
  const options = [
    {value: "chocolate", label: "Chocolate"},
    {value: "strawberry", label: "Strawberry"},
    {value: "vanilla", label: "Vanilla"},
  ];

  function handleClick() {
    setModalOpen((prev) => !prev);
  }

  function handleSubmit() {}
  return (
    <div className={modalOpen ? "Modal Modal--open" : "Modal"}>
      <Slide top duration={1500} delay={300}>
        <div
          className="Modal__content bg-white round"
          style={{maxWidth: "500px"}}
        >
          <h3
            className="
            title 
            Modal__title
            py-3 
            px-4 
            border-bottom 
            d-flex 
            align-items-center 
            justify-content-between"
          >
            Is this your car?
            <span
              style={{fontWeight: "300", fontSize: "2rem"}}
              onClick={handleClick}
            >
              <img src="./images/cancel.svg" width="16" alt="cancel" />
            </span>
          </h3>
          <div className="px-3 py-4">
            <table class="table table-striped table-bordered">
              <tbody>
                <tr>
                  <td className="bold">Year</td>
                  <td>2001</td>
                </tr>
                <tr>
                  <td className="bold">Make</td>
                  <td>Toyota</td>
                </tr>
                <tr>
                  <td className="bold">Model</td>
                  <td>Camry</td>
                </tr>
                <tr>
                  <td className="bold">Body Style</td>
                  <td>LE</td>
                </tr>
                <tr>
                  <td className="bold">Insurance</td>
                  <td>Third Party</td>
                </tr>
                <tr>
                  <td className="bold">Registered Owner</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>

            <div className="btn-container mt-5 d-flex justify-content-end">
              <button className="btn btn-grey px-5">No</button>
              <button className="btn btn-orange px-5 ml-3">Yes</button>
            </div>
          </div>
        </div>
        <div
          className="Modal__content bg-white round"
          style={{display: "none", maxWidth: "800px"}}
        >
          <h3
            className="
            title 
            title--small
            py-3 
            px-4 
            border-bottom 
            d-flex 
            align-items-center 
            justify-content-between"
          >
            Tell us about your car
            <span
              style={{fontWeight: "300", fontSize: "2rem", cursor: "pointer"}}
              onClick={handleClick}
            >
              <img src="./images/cancel.svg" width="16" alt="cancel" />
            </span>
          </h3>

          <form className=" mb-5 p-4" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 my-3 position-relative">
                <label className="select__label">What year is your car?</label>
                <Select classNamePrefix="mySelect" options={options} />
              </div>
              <div className="col-md-6 my-3 position-relative">
                <label className="select__label">What make is your car?</label>
                <Select classNamePrefix="mySelect" options={options} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-3 position-relative">
                <label className="select__label">What is your car model?</label>
                <Select classNamePrefix="mySelect" options={options} />
              </div>
              <div className="col-md-6 my-3 position-relative">
                <label className="select__label">
                  Select your car's body size
                </label>
                <Select classNamePrefix="mySelect" options={options} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-3 position-relative">
                <label className="select__label">
                  Please type your plate number?
                </label>
                <Select classNamePrefix="mySelect" options={options} />
              </div>
              <div className="col-md-6 my-3 position-relative">
                <label className="select__label">
                  Select your car insurance type
                </label>
                <Select classNamePrefix="mySelect" options={options} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 my-3 position-relative">
                <label className="select__label">
                  Are you the registered owner?
                </label>
                <Select classNamePrefix="mySelect" options={options} />
              </div>
              <div className="col-md-6 my-3 position-relative">
                <label className="select__label">
                  State of vehicle registration
                </label>
                <Select classNamePrefix="mySelect" options={options} />
              </div>
            </div>
            <div className="row">
              <div className="col-12 my-3 ml-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  I agree to the following Terms &amp; Conditions, Privacy
                  Policy, Electronic Disclosure
                </label>
              </div>
            </div>

            <div>
              <a
                href="#!"
                class="btn btn-block btn-orange shadow"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "600",
                }}
              >
                Apply now
              </a>
            </div>
          </form>
        </div>
      </Slide>
    </div>
  );
}

export default Modal;
