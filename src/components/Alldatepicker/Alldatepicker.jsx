import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from '../Datepicker/Datepicker';
import s from './Alldatepicker.module.scss';

const Alldatepicker = () => {
  //////////////datepickerfooUSetosendtoapi
  const [trainingData, setTrainingData] = useState({
    startDate: '',
    endDate: '',
    books: [],
  });
  const setStartDate = startDate => {
    setTrainingData(prev => ({ ...prev, startDate }));
  };
  const setEndDate = endDate => {
    setTrainingData(prev => ({ ...prev, endDate }));
  };
  //////////////////endofdatepickerfoo
  return (
    <>
      <div className={s.container}>
        <span className={s.item_container}>
          <DatePicker placeholder="Початок" setDate={setStartDate} />
        </span>
        <span>
          <DatePicker placeholder="Завершення" setDate={setEndDate} />
        </span>
      </div>
    </>
  );
};
export default Alldatepicker;
