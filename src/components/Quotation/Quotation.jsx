import s from './Quotation.module.css';

const Quotation = () => {
  return (
    <div className={s.contentWrap}>
        <span className={s.doubleQuotationMark}> &#8220; </span>
        <p className={s.quote}>Книги — это корабли мысли, странствующие по волнам времени и бережно несущие свой драгоценный груз от поколения к поколению. </p>
        <div className={s.border}></div>
        <div className={s.author}>Бэкон Ф.</div>
    </div>
 
  )
}

export default Quotation;