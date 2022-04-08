import React, { useState, forwardRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Datepicker.module.scss';
import DatepickerLogo from '../DatepickerLogo/DatepickerLogo';

const DatepickerComponent = ({ setDate, placeholder, isDate }) => {
  const [startDate, setStartDate] = useState(new Date());
  //   console.log(placeholder);
  //   console.log(setDate);
  // const onClick = () => { }
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => {
    console.log(onClick);
    // console.log(placeholder);
    // console.log(isDate);
    // useEffect(() => {
    //   !isDate && setDate(value);
    //   // console.log(onClick());
    // }, [isDate]);

    return (
      <div className={s.container} onClick={onClick} ref={ref}>
        <DatepickerLogo value={isDate ? value : placeholder} />
      </div>
    );
  });

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={date => { setStartDate(date); setDate(date); console.log(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()); }}
        customInput={<ExampleCustomInput />}
      />
    </>
  );
};
export default DatepickerComponent;
