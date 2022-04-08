import s from './Quotation.module.css';
import { useTranslation } from 'react-i18next';

const Quotation = () => {
  const { t } = useTranslation();
  return (
    <div className={s.contentWrap}>
        <span className={s.doubleQuotationMark}> &#8220; </span>
        <p className={s.quote}>{t('quotation.quote')}</p>
        <div className={s.border}></div>
        <div className={s.author}>{t('quotation.author')}</div>
    </div>
 
  )
}

export default Quotation;