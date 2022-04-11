import s from './ExitModalContent.module.scss';
import { useTranslation } from 'react-i18next';

const ExitModalContent = ({onLogOut, onClose}) => {
    const { t } = useTranslation();
    return (
         <div className={ s.exitMOdalContent }>
            <h3>{t('headerLogOut.text')}</h3>
            <div className={ s.modalButtons}>
                <button type="button" onClick={() => onClose()} className={ s.cancelButton }>{t('headerLogOut.cancel')}</button>
                <button type="button" onClick={()=>onLogOut()} className={ s.exitButton }>{t('headerLogOut.goout')}</button>
            </div>
         </div>
    )
}

export default ExitModalContent;