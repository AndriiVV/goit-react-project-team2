import s from './MobileModalStartTraining.module.css';
import ALLdatePicker from '../../components/Alldatepicker/Alldatepicker';
import { useTranslation } from 'react-i18next';

const MobileModalStartTraining = (
  setTrainingList,
  trainingList,
  closeModal
) => {
  const { t } = useTranslation();
  return (
    <>
      <button type="button" className={s.arrowBtn}>
        {' '}
        &#10229;{' '}
      </button>
      <h2 className={s.mobileTitle}>{t('alldatePicker.header')}</h2>
      {/* <ALLdatePicker
        setTrainingList={setTrainingList}
        trainingList={trainingList}
        className={s.mobileInputs}
      /> */}
    </>
  );
};

export default MobileModalStartTraining;
