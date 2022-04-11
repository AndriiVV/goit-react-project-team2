import React, { useState, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Datepicker.module.scss';
import DatepickerLogo from '../DatepickerLogo/DatepickerLogo';

const DatepickerComponent = ({
  setDate,
  placeholder,
  isDate,
  minDate,
  disabled,
}) => {
  const [startDate, setStartDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => {
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
      disabled={disabled}
      minDate={minDate}
      selected={startDate}
      onChange={date => {
        setStartDate(date);
        setDate(formatDate(date));
      }}
      customInput={<ExampleCustomInput />}
    />
  );
};
export default DatepickerComponent;
