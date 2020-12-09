import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import Slide from 'react-reveal/Slide';
import './Modal.scss';
import vehicles from '../../utils/vehicles.json';
import nigerianStates from '../../utils/states.json';
import Input from '../Input/Input';

const vehicleDetails = vehicles[0].selections.years;
function Modal({submitVehicle}) {
  const [modalOpen, setModalOpen] = useState(true);

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

  const [{makes, models, trims}, setTypes] = useState({
    makes: [],
    models: [],
    trims: [],
  });

  function handleClick() {
    setModalOpen((prev) => !prev);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = !year
      ? 'Please select the year'
      : !make
      ? 'Please select the make of your car'
      : !model
      ? 'Please select the model of your car'
      : !trim
      ? 'Please select the body style of your car'
      : !insurance
      ? 'Please select the type of insurance on your car'
      : !registered_owner
      ? 'Please select the answer to the question: Are you the registered owner?'
      : !state
      ? 'Please select the state your vehicle was registered'
      : '';

    setVehicle((key) => ({...key, error}));

    if (!error.length)
      submitVehicle({
        year,
        make,
        model,
        trim,
        insurance,
        registered_owner,
        state,
        plate_number,
      });
  };

  const mapNames = (arr) => (arr ? arr.map((key) => key.name) : []);

  const formatSelectOptions = (arr) =>
    arr ? arr.map((key) => ({label: key, value: key})) : [];

  const states = formatSelectOptions(nigerianStates);

  const years = formatSelectOptions(
    vehicleDetails?.map((key) => key.id).filter((key) => key >= 1990)
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
    <div className={modalOpen ? 'Modal Modal--open' : 'Modal'}>
      <Slide top duration={1500} delay={300}>
        <div className='Modal__content bg-white round'>
          <h3
            className='
            title 
            py-3 
            px-4 
            border-bottom 
            d-flex 
            align-items-center 
            justify-content-between'
          >
            Tell us about your car
            <span
              style={{fontWeight: '300', fontSize: '2rem'}}
              onClick={handleClick}
            >
              x
            </span>
          </h3>

          {error && (
            <p className='text-danger text-center mb-0 font-weight-bold'>
              {error}
            </p>
          )}

          <form className=' mb-5 p-4' onSubmit={handleSubmit}>
            <div className='row'>
              <div className='col-md-6 mb-3 position-relative'>
                <label className='select__label'>What year is your car?</label>
                <Select
                  value={undefined}
                  classNamePrefix='mySelect'
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
              <div className='col-md-6 mb-3 position-relative'>
                <label className='select__label'>What make is your car?</label>
                <Select
                  classNamePrefix='mySelect'
                  value={make ? undefined : make}
                  onChange={({value}) =>
                    setVehicle((key) => ({
                      ...key,
                      make: value,
                      model: null,
                      trim: null,
                    }))
                  }
                  options={makes}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 mb-3 position-relative'>
                <label className='select__label'>What is your car model?</label>
                <Select
                  classNamePrefix='mySelect'
                  value={model ? undefined : model}
                  options={models}
                  onChange={({value}) =>
                    setVehicle((key) => ({...key, model: value, trim: null}))
                  }
                />
              </div>
              <div className='col-md-6 mb-3 position-relative'>
                <label className='select__label'>
                  Select your car's body size
                </label>
                <Select
                  classNamePrefix='mySelect'
                  onChange={({value}) =>
                    setVehicle((key) => ({...key, trim: value}))
                  }
                  value={trim ? undefined : trim}
                  options={trims}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 mb-3 position-relative'>
                <label className='select__label'>
                  Please type your plate number?
                </label>
                <Input
                  value={plate_number}
                  placeholder='Enter Plate Number'
                  handlechange={(e) =>
                    setVehicle((key) => ({
                      ...key,
                      plate_number: e.target.value,
                    }))
                  }
                />
              </div>
              <div className='col-md-6 mb-3 position-relative'>
                <label className='select__label'>
                  Select your car insurance type
                </label>
                <Select
                  classNamePrefix='mySelect'
                  options={[
                    {label: 'Third Party', value: 'third party'},
                    {label: 'Full', value: 'full'},
                    {label: 'None', value: 'none'},
                  ]}
                  onChange={({value}) =>
                    setVehicle((key) => ({...key, insurance: value}))
                  }
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 mb-3 position-relative'>
                <label className='select__label'>
                  Are you the registered owner?
                </label>
                <Select
                  classNamePrefix='mySelect'
                  options={[
                    {value: 1, label: 'Yes'},
                    {value: 2, label: 'No'},
                  ]}
                  onChange={({value}) =>
                    setVehicle((key) => ({...key, registered_owner: value}))
                  }
                />
              </div>
              <div className='col-md-6 mb-3 position-relative'>
                <label className='select__label'>
                  State of vehicle registration
                </label>
                <Select
                  classNamePrefix='mySelect'
                  options={states}
                  onChange={({value}) =>
                    setVehicle((key) => ({...key, state: value}))
                  }
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 mb-3 ml-4'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='exampleCheck1'
                />
                <label className='form-check-label' htmlFor='exampleCheck1'>
                  I agree to the following Terms &amp; Conditions, Privacy
                  Policy, Electronic Disclosure
                </label>
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='btn btn-block btn-orange shadow'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '600',
                }}
              >
                Apply now
              </button>
            </div>
          </form>
        </div>
      </Slide>
    </div>
  );
}

export default Modal;
