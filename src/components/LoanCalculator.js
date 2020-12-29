import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import vehicles from "../utils/vehicles.json";
import Select from "react-select";
import Api from "../utils/api";
import Mixin from "../utils/mixin";

const vehicleDetails = vehicles[0].selections.years;

function LoanCalculator() {
  const [{ year, make, model, trim, error, carValue }, setVehicle] = useState({});

  const [showDetails, setDetails] = useState(false);
  const [showLoader, setLoader] = React.useState(false);

  const [{ makes, models, trims }, setTypes] = useState({
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
            : "";

    setVehicle((key) => ({ ...key, error }));

    if (!error.length) getCarValue({ year, make, model, trim });
  };

  const getCarValue = async (data) => {
    setLoader(true);
    const response = await Api.post(`${Api.ENDPOINTS.url}/car-value`, data);
    const { status } = response;

    if (status) {
      setVehicle((key) => ({ ...key, carValue: response.data }));
      setDetails(true);
    }
    setLoader(false);
  };

  const mapNames = (arr) => (arr ? arr.map((key) => key.name) : []);

  const formatSelectOptions = (arr) =>
    arr ? arr.map((key) => ({ label: key, value: key })) : [];

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

  const Form = (
    <form className="form-restrict position-relative" onSubmit={handleSubmit}>
      {error && (
        <p className="text-danger text-center font-weight-bold">{error}</p>
      )}

      <Fade bottom cascade>
        <div className="position-relative">
          <Select
            classNamePrefix="mySelect"
            options={years}
            placeholder={"Year"}
            onChange={({ value }) =>
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
        <div className="position-relative mt-4">
          <Select
            classNamePrefix="mySelect"
            options={makes}
            value={make ? undefined : make}
            placeholder={"Make"}
            onChange={({ value }) =>
              setVehicle((key) => ({
                ...key,
                make: value,
                model: null,
                trim: null,
              }))
            }
          />
        </div>
        <div className="position-relative mt-4">
          <Select
            placeholder={"Model"}
            classNamePrefix="mySelect"
            options={models}
            value={model ? undefined : model}
            onChange={({ value }) =>
              setVehicle((key) => ({ ...key, model: value, trim: null }))
            }
          />
        </div>
        <div className="position-relative mt-4">
          <Select
            classNamePrefix="mySelect"
            placeholder={"Body Style"}
            options={trims}
            onChange={({ value }) => setVehicle((key) => ({ ...key, trim: value }))}
            value={trim ? undefined : trim}
          />
        </div>
      </Fade>

      <button type="submit" className="btn px-5 mt-5 btn-orange">
        {showLoader ? "Evaluating..." : "Get Offer"}
      </button>
    </form>
  );

  const Result = (
    <div>
      <p
        className="px-4 d-flex align-items-center justify-content-between"
        style={{ color: "#e26511" }}
      >
        Please note that your car value might vary from the figures above, based
        on the mileage and age of the car.
      </p>
      <div className="px-3 py-4">
        <table class="table table-striped table-bordered">
          <tbody>
            <tr>
              <td className='bold'>Car Value</td>
              <td>{Mixin.formatAmount(carValue?.below)}</td>
            </tr>
            <tr>
              <td className='bold'>Distress Sale Value</td>
              <td>{Mixin.formatAmount(carValue?.first_sale)}</td>
            </tr>
            <tr>
              <td className='bold'>How Much You Can Get</td>
              <td>{Mixin.formatAmount(carValue?.average)}</td>
            </tr>
          </tbody>
        </table>

        <div className="text-center">
          <button
            onClick={() => setDetails(false)}
            className="btn px-5 mt-3 btn-orange"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );

  return showDetails ? Result : Form;
}

export default LoanCalculator;
