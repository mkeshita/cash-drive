import React, {useState, useEffect} from "react";
import Select from "react-select";
import Slide from "react-reveal/Slide";
import "./Modal.scss";
import vehicles from "../../utils/vehicles.json";
import nigerianStates from "../../utils/states.json";
import Input from "../Input/Input";
import Mixin from "../../utils/mixin";

const vehicleDetails = vehicles[0].selections.years;
function Modal({submitVehicle, closeModal, getOffer, offer}) {
  const [
    {
      year,
      make,
      model,
      trim,
      insurance,
      registered_owner,
      state,
      plate_number,
      error,
    },
    setVehicle,
  ] = useState({});
  const [terms, setTerms] = useState(false);
  const [showDetails, setDetails] = useState(false);

  const [{makes, models, trims}, setTypes] = useState({
    makes: [],
    models: [],
    trims: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = !year
      ? "Please select the year"
      : !make
      ? "Please select the make of your car"
      : !model
      ? "Please select the model of your car"
      : !trim
      ? "Please select the body style of your car"
      : !plate_number || !Mixin.validatePlateNumber(plate_number)
      ? "Please enter a valid plate number"
      : !insurance
      ? "Please select the type of insurance on your car"
      : !registered_owner
      ? "Please select the answer to the question: Are you the registered owner?"
      : !state
      ? "Please select the state your vehicle was registered"
      : !terms
      ? "Please agree to the Terms & Conditions"
      : "";

    setVehicle((key) => ({...key, error}));

    if (!error.length) setDetails(true);
  };

  const mapNames = (arr) => (arr ? arr.map((key) => key.name) : []);

  const formatSelectOptions = (arr) =>
    arr ? arr.map((key) => ({label: key, value: key})) : [];

  const states = formatSelectOptions(nigerianStates);

  const years = formatSelectOptions(
    vehicleDetails
      ?.map((key) => key.id)
      .filter((key) => key >= 1990)
      .reverse()
  );

  useEffect(() => {
    setTypes((key) => ({
      ...key,
      makes: formatSelectOptions(
        mapNames(vehicleDetails.find((key) => key.id === year)?.makes)
      ),
    }));
  }, [year]);

  useEffect(() => {
    const models = vehicleDetails
      .find((key) => key.id === year)
      ?.makes?.find((key) => key.name === make)?.models;

    setTypes((key) => ({
      ...key,
      models: formatSelectOptions(mapNames(models)),
    }));
  }, [make, year]);

  useEffect(() => {
    const trims = vehicleDetails
      .find((key) => key.id === year)
      ?.makes?.find((key) => key.name === make)
      ?.models?.find((key) => key.name === model)?.trims;

    setTypes((key) => ({
      ...key,
      trims: formatSelectOptions(mapNames(trims)),
    }));
  }, [model, make, year]);

  return (
    <div className="Modal Modal--open">
      <Slide top duration={1500} delay={300}>
        <div
          className="Modal__content bg-white round"
          style={{
            display: showDetails && !offer?.data ? "block" : "none",
            maxWidth: "500px",
          }}
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
            {/* <span style={{fontWeight: '300', fontSize: '2rem'}}>
              <img src='./images/cancel.svg' width='16' alt='cancel' />
            </span> */}
          </h3>
          <div className="px-3 py-4">
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <td className="bold">Year</td>
                  <td>{year}</td>
                </tr>
                <tr>
                  <td className="bold">Make</td>
                  <td>{make}</td>
                </tr>
                <tr>
                  <td className="bold">Model</td>
                  <td>{model}</td>
                </tr>
                <tr>
                  <td className="bold">Body Style</td>
                  <td>{trim}</td>
                </tr>
                <tr>
                  <td className="bold">Insurance</td>
                  <td className="text-capitalize">{insurance}</td>
                </tr>
                <tr>
                  <td className="bold">Registered Owner</td>
                  <td>{registered_owner === 1 ? "Yes" : "No"}</td>
                </tr>
              </tbody>
            </table>

            <div className="btn-container mt-5 d-flex justify-content-end">
              <button
                className="btn btn-grey px-5"
                onClick={() => {
                  setDetails(false);
                }}
              >
                No
              </button>
              <button
                className="btn btn-orange px-5 ml-3"
                // onClick={handleClick}
                onClick={() => {
                  getOffer({
                    year,
                    make,
                    model,
                    trim,
                    insurance,
                    registered_owner,
                    state,
                    plate_number,
                  });
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>

        <div
          className="Modal__content bg-white round"
          style={{display: !showDetails ? "block" : "none", maxWidth: "800px"}}
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
              className="cursor"
              style={{fontWeight: "300", fontSize: "2rem", cursor: "pointer"}}
              onClick={() => closeModal()}
            >
              <img src="./images/cancel.svg" width="16" alt="cancel" />
            </span>
          </h3>

          <form className="mb-5 p-4" onSubmit={handleSubmit}>
            {error && (
              <p className="text-danger text-center font-weight-bold">
                {error}
              </p>
            )}

            <div className="row">
              <div className="col-md-6 position-relative">
                <label className="select__label">What year is your car?</label>
                <Select
                  classNamePrefix="mySelect"
                  options={years}
                  onChange={({value}) =>
                    setVehicle((key) => ({
                      ...key,
                      year: value,
                      make: null,
                      model: null,
                      trim: null,
                    }))
                  }
                />
              </div>
              <div className="col-md-6 position-relative">
                <label className="select__label">What make is your car?</label>
                <Select
                  classNamePrefix="mySelect"
                  options={makes}
                  value={make ? undefined : make}
                  onChange={({value}) =>
                    setVehicle((key) => ({
                      ...key,
                      make: value,
                      model: null,
                      trim: null,
                    }))
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-3 position-relative">
                <label className="select__label">What is your car model?</label>
                <Select
                  classNamePrefix="mySelect"
                  options={models}
                  value={model ? undefined : model}
                  onChange={({value}) =>
                    setVehicle((key) => ({...key, model: value, trim: null}))
                  }
                />
              </div>
              <div className="col-md-6 mt-3 position-relative">
                <label className="select__label">
                  Select your car's body size.
                </label>
                <Select
                  classNamePrefix="mySelect"
                  options={trims}
                  onChange={({value}) =>
                    setVehicle((key) => ({...key, trim: value}))
                  }
                  value={trim ? undefined : trim}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-3 position-relative">
                <label className="select__label">
                  Please type your plate number?
                </label>
                <Input
                  value={plate_number}
                  placeholder="Enter Plate Number"
                  handlechange={(e) =>
                    setVehicle((key) => ({
                      ...key,
                      plate_number: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="col-md-6 mt-3 position-relative">
                <label className="select__label">
                  Select your car insurance type
                </label>{" "}
                <Select
                  classNamePrefix="mySelect"
                  options={[
                    {label: "Third Party", value: "third party"},
                    {label: "Full", value: "full"},
                    {label: "None", value: "none"},
                  ]}
                  onChange={({value}) =>
                    setVehicle((key) => ({...key, insurance: value}))
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-3 position-relative">
                <label className="select__label">
                  Are you the registered owner?
                </label>
                <Select
                  classNamePrefix="mySelect"
                  options={[
                    {value: 1, label: "Yes"},
                    {value: 2, label: "No"},
                  ]}
                  onChange={({value}) =>
                    setVehicle((key) => ({...key, registered_owner: value}))
                  }
                />
              </div>
              <div className="col-md-6 mt-3 position-relative">
                <label className="select__label">
                  State of vehicle registration
                </label>
                <Select
                  classNamePrefix="mySelect"
                  options={states}
                  onChange={({value}) =>
                    setVehicle((key) => ({...key, state: value}))
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 my-3 ml-4">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  onChange={(e) => setTerms(!terms)}
                />
                <label className="form-check-label" for="exampleCheck1">
                  I agree to the following Terms &amp; Conditions, Privacy
                  Policy, Electronic Disclosure
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="btn btn-block btn-orange shadow"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "600",
                }}
              >
                Apply now
              </button>
            </div>
          </form>
        </div>

        <div
          className="Modal__content bg-white round"
          style={{display: offer?.data ? "block" : "none", maxWidth: "500px"}}
        >
          <div className="text-center pb-5">
            <img
              alt="congrat"
              className="my-4 mt-5"
              src="./images/undraw_city_driver_jh2h.svg"
            />

            <h3>Congratualtions!</h3>
            <p className="mb-3">
              Your application has been provisionally approved
            </p>

            <div
              className="border py-3"
              style={{width: "80%", marginLeft: "10%"}}
            >
              <div className="py-2">
                <span className="title" style={{fontSize: "1.13rem"}}>
                  Offer:
                </span>
                <span className="pl-2">{offer?.data?.offer_amount}</span>
              </div>
              <div className="py-2">
                <span className="title" style={{fontSize: "1.13rem"}}>
                  Duration:
                </span>
                <span className="pl-2">{offer?.data?.offer_tenor} Months</span>
              </div>
              <div className="py-2">
                <span className="title" style={{fontSize: "1.13rem"}}>
                  Repayment Plan:
                </span>
                <span className="pl-2">
                  Every {offer?.data?.offer_repayment_plan} Month
                </span>
              </div>
              <div className="text-center pt-4">
                <p>Do you accept this offer?</p>
                <button
                  className="btn btn-grey px-5"
                  onClick={() => setDetails(false)}
                >
                  No
                </button>
                <button
                  className="btn btn-orange px-5 ml-3"
                  onClick={() =>
                    submitVehicle({
                      year,
                      make,
                      model,
                      trim,
                      insurance,
                      registered_owner,
                      state,
                      plate_number,
                    })
                  }
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Modal;
