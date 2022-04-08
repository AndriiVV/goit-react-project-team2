import React from 'react';
import s from './Alltimer.module.scss';
import MyTimer from '../../components/Timer/Timer';

function Alltimer({ expiryTimestamp }) {
  // {/* Code below belong to --TIMER-- Move it Move to statistics page */}
  const time = new Date();
  time.setSeconds(time.getSeconds() + 700); // 10 minutes timer

  let timeend = new Date();
  timeend = new Date(timeend.getFullYear() + 1, 0, 1);

  //-------------------------------
  return (
    <>
      <div className={s.container}>
        <span className={s.item_container}>
          <span className={s.item_text}>До закінчення року залишилось</span>
          <MyTimer className={s.item} expiryTimestamp={timeend} />
        </span>
        <span className={s.item_container}>
          <span className={s.item_text}>До досягнення мети залишилось</span>
          <MyTimer className={s.item} expiryTimestamp={time} />
        </span>
      </div>
    </>
  );
}
export default Alltimer;
