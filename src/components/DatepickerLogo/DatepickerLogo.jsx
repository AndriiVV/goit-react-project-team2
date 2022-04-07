import s from './DatepickerLogo.module.scss';
import { ReactComponent as Triangle } from '../DatepickerLogo/Polygon.svg';
import { ReactComponent as Calendar } from '../DatepickerLogo/Calendar.svg';

const DatepickerLogo = ({ value }) => {
  return (
    <>
      <Calendar className={s.calendar} width="17" height="17" />
      <span className={s.text}>{value}</span>
      <Triangle className={s.triangle} width="13" height="7" />
    </>
  );
};

export default DatepickerLogo;
