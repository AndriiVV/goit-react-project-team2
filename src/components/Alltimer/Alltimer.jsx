import React from 'react';
import s from './Alltimer.module.scss';
import MyTimer from '../../components/Timer/Timer';

function Alltimer({ expiryTimestamp }) {
  // {/* Code below belong to --TIMER-- Move it Move to statistics page */}
  const time = new Date();
  time.setSeconds(time.getSeconds() + expiryTimestamp); // set timer

  let timeendofyear = new Date();
  timeendofyear = new Date(timeendofyear.getFullYear() + 1, 0, 1);
console.log(expiryTimestamp);
  //-------------------------------
  return (
    <div className={s.container}>
      <span className={s.item_container}>
        <span className={s.item_text}>До закінчення року залишилось</span>
        <MyTimer className={s.item} expiryTimestamp={timeendofyear} />
      </span>
      <span className={s.item_container}>
        <span className={s.item_text}>До досягнення мети залишилось</span>
        <MyTimer className={s.item} expiryTimestamp={time} />
      </span>
    </div>
  );
}
export default Alltimer;
