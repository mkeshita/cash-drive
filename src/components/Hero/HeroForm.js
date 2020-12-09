import React, {useState} from 'react';
import Select from 'react-select';
import './HeroForm.scss';
import Input from '../Input/Input';
import Mixin from '../../utils/mixin';

function HeroForm({showModal}) {
  const [
    {desired_amount, desired_tenor, desired_repayment_plan, error},
    setValue,
  ] = useState({
    desired_amount: '',
    desired_tenor: '',
    desired_repayment_plan: '',
    error: '',
  });

  const addCommas = (value) => {
    if (!Mixin.validateNumbers(value.replace(/,/g, ''))) return;
    const formatNumber = parseInt(value.replace(/,/g, '')).toLocaleString();
    setValue((key) => ({...key, desired_amount: formatNumber}));
  };

  const options = [
    {value: 1, label: 'Monthly'},
    {value: 2, label: 'Bi Monthly (Every 2 months)'},
    {value: 3, label: 'Quarterly'},
  ];
  //   return <Select options={options} />;

  const months = Array.from({length: 12}, (_, i) => ({
    label: `${i + 1} month${i ? 's' : ''}`,
    value: i + 1,
  }));

  const handleSubmit = () => {
    let amount = Number((desired_amount || '').replace(/,/g, ''));

    const error =
      amount < 2e5
        ? `The minimum amount you can borrow is ${Mixin.formatAmount(2e5)}`
        : amount > 50e6
        ? `The maximum amount you can borrow is ${Mixin.formatAmount(50e6)}`
        : !desired_tenor
        ? `Please select how long you want this loan`
        : !desired_repayment_plan
        ? `Please select a repayment plan`
        : '';

    setValue((key) => ({...key, error}));

    if (!error.length)
      showModal({
        desired_amount: amount,
        desired_tenor,
        desired_repayment_plan,
      });
  };

  return (
    <div className='row align-items-end mt-4' style={{maxWidth: '550px'}}>
      {error && <p className='mb-0 mx-auto text-danger'>{error}</p>}
      <div className='col-md-6 my-3 position-relative'>
        <label className='select__label'>How much do you need?</label>
        <Input
          value={desired_amount}
          handlechange={(e) => addCommas(e.target.value)}
        />
      </div>
      <div className='col-md-6 my-3'>
        <label className='select__label'>For how long?</label>
        <Select
          classNamePrefix='mySelect'
          options={months}
          onChange={({value}) =>
            setValue((key) => ({...key, desired_tenor: value}))
          }
        />
      </div>
      <div className='col-md-7 my-3'>
        <label className='select__label'>Your Repayment plan</label>
        <Select
          classNamePrefix='mySelect'
          options={options}
          onChange={({value}) =>
            setValue((key) => ({...key, desired_repayment_plan: value}))
          }
        />
      </div>
      <div className='col-md-5 my-3'>
        <button
          onClick={handleSubmit}
          className='btn btn-block btn-orange shadow'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
          }}
        >
          Apply now
        </button>
      </div>
    </div>
  );
}

export default HeroForm;
