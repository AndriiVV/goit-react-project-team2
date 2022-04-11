// import s from './MotivationContentExellent.module.scss';
import { useTranslation } from 'react-i18next';

const MotivationContentExellent = () => {
    const { t } = useTranslation();
    return (
        <h3>{t('motivationExellent.exellent')}</h3>
    )
}

export default MotivationContentExellent;