import React from 'react';
import { useTimer } from 'react-timer-hook';
import s from './Timer.module.scss';
import TextTransition, { presets } from 'react-text-transition';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    // isRunning,
    // start,
    // pause,
    // resume,
    // restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn('onExpire called'),
  });

  function addZero(timeFrame) {
    let foo = timeFrame >= 10 ? timeFrame : '0' + timeFrame;

    return (
      <TextTransition
        text={foo}
        springConfig={presets.stiff}
        noOverflow={true}
      />
    );
  }

  return (
    <div className={s.label}>
      {/* <h1>react-timer-hook </h1>
      <p>Timer Demo</p> */}
      <div className={s.cont}>
        <span className={s.item}>
          <span className={s.symbol}>{addZero(days)}</span>
          <span className={s.timeFrame}>ДН</span>
        </span>
        <span className={s.dots}>:</span>
        <span className={s.item}>
          <span className={s.symbol}>{addZero(hours)}</span>
          <span className={s.timeFrame}>ГОД</span>
        </span>
        <span className={s.dots}>:</span>
        <span className={s.item}>
          <span className={s.symbol}>{addZero(minutes)}</span>
          <span className={s.timeFrame}>ХВ</span>
        </span>
        <span className={s.dots}>:</span>
        <span className={s.item}>
          <span className={s.symbol}>{addZero(seconds)}</span>
          <span className={s.timeFrame}>СЕК</span>
        </span>
        
        
      </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
      {/* <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </button> */}
    </div>
  );
}
export default MyTimer;
