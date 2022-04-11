import DatePicker from '../Datepicker/Datepicker';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useTranslation } from 'react-i18next';
import 'react-datepicker/dist/react-datepicker.css';
import s from './Alldatepicker.module.scss';

const Alldatepicker = ({ setTrainingList, trainingList }) => {
  const { t } = useTranslation();
  const setStartDate = startDate => {
    setTrainingList(prev => ({ ...prev, startDate }));
  };
  const setEndDate = endDate => {
    setTrainingList(prev => ({ ...prev, endDate }));
  };
  const untillDate = () => {
    Date.parse(trainingList.startDate) - Date.parse(trainingList.endDate) > 0 &&
          Notify.warning(t('alldatePicker.note'));
    const newDate = Date.parse(trainingList.startDate) + 1000 * 3600 * 24;
    return newDate;
  };

  const onDateMouse = () => {
    if (isNaN(Date.parse(trainingList.startDate))) {
      Notify.warning('Виберіть дату початку!');
    }
  };

  return (
    <div className={s.timerFlex}>
      <div>
        <DatePicker
          minDate={new Date()}
          placeholder={t("alldatePicker.start")}
          setDate={setStartDate}
          isDate={!!trainingList.startDate}
          className={s.timerInput}
        />
      </div>
      <div className={s.timerInput} onClick={() => onDateMouse()}>
        <DatePicker
          disabled={isNaN(Date.parse(trainingList.startDate))}
          minDate={untillDate()}
          placeholder={t("alldatePicker.end")}
          setDate={setEndDate}
          isDate={!!trainingList.endDate}
        />
      </div>
    </div>
  );
};
export default Alldatepicker;
