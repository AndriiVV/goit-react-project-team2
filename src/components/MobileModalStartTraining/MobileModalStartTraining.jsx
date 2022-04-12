import s from './MobileModalStartTraining.module.css';
import ALLdatePicker from '../../components/Alldatepicker/Alldatepicker';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const MobileModalStartTraining = ({
  setTrainingList,
  trainingList,
  closeModal,
}) => {
  const { t } = useTranslation();

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
        <button
          type="button"
          className={s.arrowBtn}
          onClick={() => closeModal()}
        >
          {' '}
          &#10229;{' '}
        </button>
        <h2 className={s.mobileTitle}>{t('alldatePicker.header')}</h2>
        <ALLdatePicker
          setTrainingList={setTrainingList}
          trainingList={trainingList}
          className={s.mobileInputs}
        />
      </div>
    </div>
  );
};

export default MobileModalStartTraining;
