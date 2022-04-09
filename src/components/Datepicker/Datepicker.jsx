import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Datepicker.module.scss';
import DatepickerLogo from '../DatepickerLogo/DatepickerLogo';

const DatepickerComponent = ({ setDate, placeholder, isDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => {
    // console.log(onClick);

    return (
      <div className={s.container} onClick={onClick} ref={ref}>
        <DatepickerLogo value={isDate ? value : placeholder} />
      </div>
    );
  });
  function addZero(timeFrame) {
    return timeFrame >= 10 ? timeFrame : '0' + timeFrame;
  }
  function formatDate(date) {
    return (
      addZero(date.getFullYear()) +
      '-' +
      addZero(date.getMonth() + 1) +
      '-' +
      addZero(date.getDate())
    );
  }
  return (
    <DatePicker
      selected={startDate}
      onChange={date => {
        setStartDate(date);
        setDate(formatDate(date));
        console.log('date', formatDate(date));
      }}
      customInput={<ExampleCustomInput />}
    />
  );
};
export default DatepickerComponent;
