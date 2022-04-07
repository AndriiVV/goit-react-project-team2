import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Datepicker.module.scss';
import DatepickerLogo from '../DatepickerLogo/DatepickerLogo';

var place
const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => {
    
    console.log(value);
    console.log(place);
     

    return (
      <div className={s.container} onClick={onClick} ref={ref} >
            <DatepickerLogo value={value}/>
      </div>
    );
  });


const DatepickerComponent = ({setDate, placeholder}) => {
    const [startDate, setStartDate] = useState(new Date());
    place=placeholder
//   console.log(placeholder);
//   console.log(setDate);
  return (
    <>
          <DatePicker selected={startDate} onChange={date => setStartDate(date)}  customInput={<ExampleCustomInput  />} />
    </>
  );
};
export default DatepickerComponent;
