// import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from '../Datepicker/Datepicker';
import s from './Alldatepicker.module.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Alldatepicker = ({ setTrainingList, trainingList }) => {
  //////////////datepickerfooUSetosendtoapi
  // const [trainingData, setTrainingData] = useState({
  //   startDate: '',
  //   endDate: '',
  //   books: [],
  // });
  const setStartDate = startDate => {
    setTrainingList(prev => ({ ...prev, startDate }));
  };
  const setEndDate = endDate => {
    setTrainingList(prev => ({ ...prev, endDate }));
  };
  //////////////////endofdatepickerfoo
  // console.log(Date.parse(trainingList.startDate) - Date.parse(trainingList.endDate));
  Date.parse(trainingList.startDate) - Date.parse(trainingList.endDate) > 0 &&
    Notify.warning('Дата початку більше дати завершення!!!');

  return (
    <div className={s.timerFlex}>
      <DatePicker
        placeholder="Початок"
        setDate={setStartDate}
        isDate={!!trainingList.startDate}
      />
      <div className={s.timerInput}>
        <DatePicker
          placeholder="Завершення"
          setDate={setEndDate}
          isDate={!!trainingList.endDate}
        />
      </div>
    </div>
  );
};
export default Alldatepicker;
