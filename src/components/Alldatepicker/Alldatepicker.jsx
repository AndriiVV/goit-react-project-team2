// import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from '../Datepicker/Datepicker';
import s from './Alldatepicker.module.scss';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useTranslation } from 'react-i18next';

const Alldatepicker = ({ setTrainingList, trainingList }) => {
  const { t } = useTranslation();
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
    Notify.warning(t('alldatePicker.note'));

  return (
    <div className={s.timerFlex}>
      <div>
        <DatePicker
          placeholder={t("alldatePicker.start")}
          setDate={setStartDate}
          isDate={!!trainingList.startDate}
          className={s.timerInput}
        />
      </div>
      <div className={s.timerInput}>
        <DatePicker
          placeholder={t("alldatePicker.end")}
          setDate={setEndDate}
          isDate={!!trainingList.endDate}
        />
      </div>
    </div>
  );
};
export default Alldatepicker;
