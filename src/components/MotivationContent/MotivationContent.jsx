import s from './MotivationContent.module.scss';
import { ReactComponent as ThumbUpIcon } from '../../images/thumb_up.svg';
// import MotivationContentGood from 'components/MotivationContentGood/MotivationContentGood';
import MotivationContentExellent from 'components/MotivationContentExellent/MotivationContentExellent';
import { useEffect } from 'react';

const MotivationContent = ({ closeModal }) => {
  const onKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <div className={s.overlay} onClick={onBackdropClick}>
      <div className={s.modal}>
        <div className={s.motivContent}>
          <div className={s.iconWrap}>
            <ThumbUpIcon />
          </div>
          {/* <MotivationContentGood /> */}
          <MotivationContentExellent />
          <button
            type="button"
            className={s.okButton}
            onClick={() => closeModal()}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotivationContent;
